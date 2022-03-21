controller-gen:
ifeq (, $(shell which controller-gen))
	@{ \
	set -e ;\
	CONTROLLER_GEN_TMP_DIR=$$(mktemp -d) ;\
	cd $$CONTROLLER_GEN_TMP_DIR ;\
	go mod init tmp ;\
	go get sigs.k8s.io/controller-tools/cmd/controller-gen@v0.6.2 ;\
	rm -rf $$CONTROLLER_GEN_TMP_DIR ;\
	}
ifeq (,$(shell go env GOBIN))
GOBIN=$(shell go env GOPATH)/bin
else
GOBIN=$(shell go env GOBIN)
endif
CONTROLLER_GEN=$(GOBIN)/controller-gen
else
CONTROLLER_GEN=$(shell which controller-gen)
endif

kustomize:
ifeq (, $(shell which kustomize))
	@{ \
	set -e ;\
	KUSTOMIZE_GEN_TMP_DIR=$$(mktemp -d) ;\
	cd $$KUSTOMIZE_GEN_TMP_DIR ;\
	go mod init tmp ;\
	go get sigs.k8s.io/kustomize/kustomize/v3@v3.5.4 ;\
	rm -rf $$KUSTOMIZE_GEN_TMP_DIR ;\
	}
KUSTOMIZE=$(GOBIN)/kustomize
else
KUSTOMIZE=$(shell which kustomize)
endif

CONTROLLER_GEN_OPTIONS=crd paths=./api/... output:dir=./config/crd/bases schemapatch:manifests=./config/crd/bases

UNAME_S := $(shell uname -s)
ifeq ($(UNAME_S),Linux)
	GOOS = linux
endif
ifeq ($(UNAME_S),Darwin)
	GOOS = darwin
endif

# Shell to use for running scripts
SHELL := $(shell which bash)

# Get docker path or an empty string
DOCKER := $(shell command -v docker)

# Get the main unix group for the user running make (to be used by docker-compose later)
GID := $(shell id -g)

# Get the unix user id for the user running make (to be used by docker-compose later)
UID := $(shell id -u)

# Commit hash from git
COMMIT=$(shell git rev-parse HEAD)

# Docker image name for this project
IMAGE_NAME := $(SERVICE_NAME)

# Operator version is managed in go file
# BaseVersion is for dev docker image tag
BASEVERSION := $(shell awk -F\" '/Version =/ { print $$2}' version/version.go)
# Version is for binary, docker image and helm

VERSION := ${GITHUB_REF##*/}

PUSHLATEST := true

BUILD_CMD = docker build . -t $(REPOSITORY):$(VERSION) --build-arg https_proxy=$$https_proxy --build-arg http_proxy=$$http_proxy

DOCKER_BUILD = docker run --rm -v $(MOUNTDIR):$(WORKDIR) -v $(GOPATH)/pkg/mod:/go/pkg/mod:delegated \
               		-v /var/run/docker.sock:/var/run/docker.sock \
               		-v $(shell go env GOCACHE):/root/.cache/go-build:delegated \
               		--env CGO_ENABLED=$(CGO_ENABLED) --env GOOS=linux --env GOARCH=amd64 \
               		--env https_proxy=$(https_proxy) --env http_proxy=$(http_proxy) \
               		$(BUILD_IMAGE):$(OPERATOR_SDK_VERSION) /bin/bash -c

# Generate code
generate-k8s:
	$(CONTROLLER_GEN) object:headerFile="hack/boilerplate.go.txt" paths="./..."

# CMDS
UNIT_TEST_CMD := KUBERNETES_CONFIG=`pwd`/config/test-kube-config.yaml POD_NAME=test go test --cover --coverprofile=coverage.out `go list ./... | grep -v e2e` > test-report.out
UNIT_TEST_CMD_WITH_VENDOR := KUBERNETES_CONFIG=`pwd`/config/test-kube-config.yaml POD_NAME=test go test -mod=vendor --cover --coverprofile=coverage.out `go list -mod=vendor ./... | grep -v e2e` > test-report.out
UNIT_TEST_COVERAGE := go tool cover -html=coverage.out -o coverage.html
GO_GENERATE_CMD := go generate `go list ./... | grep -v /vendor/`
GO_LINT_CMD := golint `go list ./... | grep -v /vendor/`


# environment dirs
DEV_DIR := docker/ci
APP_DIR := build/Dockerfile

OPERATOR_SDK_VERSION=v1.13.0
# workdir
WORKDIR := /go/casskop

.PHONY: generate
generate:
	echo "Generate zzz-deepcopy objects"
	$(MAKE) controller-gen
	$(MAKE) generate-k8s
	@rm -f */crds/*
	$(CONTROLLER_GEN) $(CONTROLLER_GEN_OPTIONS)
	$(MAKE) update-crds

.PHONY: build
build: generate
	@echo "Build Cassandra Operator"
	$(BUILD_CMD)
ifdef PUSHLATEST
	docker tag $(REPOSITORY):$(VERSION) $(REPOSITORY):latest
endif

docker-build-operator:
	echo "Build Cassandra Operator. Using cache from "$(shell go env GOCACHE)
	$(DOCKER_BUILD) 'cd $(BUILD_FOLDER); $(BUILD_CMD)'

docker-generate-k8s:
	echo "Generate zzz-deepcopy objects"
	$(DOCKER_BUILD) 'cd $(BUILD_FOLDER) && controller-gen object:headerFile="hack/boilerplate.go.txt" paths="./..."'

docker-generate-crds: docker-generate-k8s
	echo "Generate CRDs"
	@rm -f config/crd/bases/*.yaml
	$(DOCKER_BUILD) 'cd $(BUILD_FOLDER) && controller-gen $(CONTROLLER_GEN_OPTIONS)'
	$(MAKE) update-crds

