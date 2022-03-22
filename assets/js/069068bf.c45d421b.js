"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3518],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,m=d["".concat(i,".").concat(k)]||d[k]||c[k]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},142:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],s={title:"Developer guide",sidebar_label:"Developer guide"},i=void 0,u={unversionedId:"contributing/developer_guide",id:"contributing/developer_guide",title:"Developer guide",description:"Operator SDK",source:"@site/docs/8_contributing/1_developer_guide.md",sourceDirName:"8_contributing",slug:"/contributing/developer_guide",permalink:"/casskop/docs/contributing/developer_guide",editUrl:"https://github.com/cscetbon/casskop/edit/master/website/docs/8_contributing/1_developer_guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Developer guide",sidebar_label:"Developer guide"},sidebar:"docs",previous:{title:"GKE Issues",permalink:"/casskop/docs/troubleshooting/gke_issues"},next:{title:"Release guide",permalink:"/casskop/docs/contributing/release_guide"}},p={},c=[{value:"Operator SDK",id:"operator-sdk",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install the Operator SDK CLI",id:"install-the-operator-sdk-cli",level:3},{value:"Initial setup",id:"initial-setup",level:3},{value:"Local kubernetes setup",id:"local-kubernetes-setup",level:3},{value:"Install",id:"install",level:4},{value:"Setup",id:"setup",level:4},{value:"Pause/Unpause the cluster",id:"pauseunpause-the-cluster",level:4},{value:"Delete cluster",id:"delete-cluster",level:4},{value:"Build CassKop",id:"build-casskop",level:3},{value:"Using your local environment",id:"using-your-local-environment",level:4},{value:"Or Using the provided cross platform build environment",id:"or-using-the-provided-cross-platform-build-environment",level:4},{value:"Run CassKop",id:"run-casskop",level:3},{value:"Run the Operator Locally with the Go Binary",id:"run-the-operator-locally-with-the-go-binary",level:4},{value:"Deploy using the Helm Charts",id:"deploy-using-the-helm-charts",level:4},{value:"Run unit-tests",id:"run-unit-tests",level:3},{value:"Run e2e end to end tests",id:"run-e2e-end-to-end-tests",level:3},{value:"Run kuttl tests",id:"run-kuttl-tests",level:3},{value:"Debug CassKop in remote in a Kubernetes cluster",id:"debug-casskop-in-remote-in-a-kubernetes-cluster",level:3},{value:"Configure the IDE",id:"configure-the-ide",level:4},{value:"Build Multi-CassKop",id:"build-multi-casskop",level:3},{value:"Using your docker environment",id:"using-your-docker-environment",level:4},{value:"Run Multi-CassKop",id:"run-multi-casskop",level:3},{value:"How this repository was initially build",id:"how-this-repository-was-initially-build",level:2},{value:"Boilerplate CassKop",id:"boilerplate-casskop",level:3},{value:"Useful Infos for developers",id:"useful-infos-for-developers",level:3},{value:"Parsing Yaml from String",id:"parsing-yaml-from-string",level:4}],d={toc:c};function k(e){var t=e.components,s=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"operator-sdk"},"Operator SDK"),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Casskop has been validated with :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://golang.github.io/dep/"},"dep")," version v0.5.1+."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://golang.org"},"go")," version v1.13+."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.docker.com"},"docker")," version 18.09+."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/fr/docs/tasks/tools/install-kubectl/"},"kubectl")," version v1.13.3+."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm")," version v.3."),(0,l.kt)("li",{parentName:"ul"},"Fork from ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/operator-framework/operator-sdk"},"Operator sdk")," version v0.18.0 : ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/erdrix/operator-sdk/tree/v0.18.0-forked-pr317"},"Operator sdk - forked"))),(0,l.kt)("h3",{id:"install-the-operator-sdk-cli"},"Install the Operator SDK CLI"),(0,l.kt)("p",null,"First, checkout and install the operator-sdk CLI:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ mkdir -p $GOPATH/src/github.com/operator-framework/\n$ cd $GOPATH/src/github.com/operator-framework/\ngit clone -b v0.18.0-forked-pr317 --single-branch git@github.com:erdrix/operator-sdk.git\n$ make tidy\n$ make install\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note :")," Use fork from operator-sdk, waiting for ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/controller-tools/pull/317/files#diff-8963ad7c8dcbe3931bc61c3e2954ccf2R300-R301"},"PR #317")," to be merged."),(0,l.kt)("h3",{id:"initial-setup"},"Initial setup"),(0,l.kt)("p",null,"Checkout the project."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/cscetbon/casskop.git\n$ cd casskop\n")),(0,l.kt)("h3",{id:"local-kubernetes-setup"},"Local kubernetes setup"),(0,l.kt)("p",null,"We use ",(0,l.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io"},"kind")," in order to run a local kubernetes cluster with the version we chose. We think it deserves some words as it's pretty useful and simple to use to test one version or another"),(0,l.kt)("h4",{id:"install"},"Install"),(0,l.kt)("p",null,"The following requires kubens to be present. On MacOs it can be installed using brew :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install kubectx\n")),(0,l.kt)("p",null,"The installation of kind is then done with (outside of the cassandra operator folder if you want it to run fast) :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'$ GO111MODULE="on" go get sigs.k8s.io/kind@v0.5.1\n')),(0,l.kt)("h4",{id:"setup"},"Setup"),(0,l.kt)("p",null,"The following actions should be run only to create a new kubernetes cluster."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ config/samples/kind/create-kind-cluster.sh\n")),(0,l.kt)("p",null,"or if you want to enable network policies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ config/samples/kind/create-kind-cluster-network-policies.sh\n")),(0,l.kt)("p",null,"It creates namespace cassandra-e2e by default. If a different namespace is needed it can be specified on the setup-requirements call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ config/samples/kind/setup-requirements.sh other-namespace\n")),(0,l.kt)("p",null,"To interact with the cluster you then need to use the generated kubeconfig file :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ export KUBECONFIG=$(kind get kubeconfig-path --name=kind)\n")),(0,l.kt)("p",null,"Before using that newly created cluster, it's better to wait for all pods to be running by continously checking their status :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl get pod --all-namespaces -w\n")),(0,l.kt)("h4",{id:"pauseunpause-the-cluster"},"Pause/Unpause the cluster"),(0,l.kt)("p",null,"In order to kinda freeze the cluster because you need to do something else on your laptop, you can use those two aliases. Just put them in your ~/.bashrc or ~/.zshrc :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"alias kpause='kind get nodes|xargs docker pause'\nalias kunpause='kind get nodes|xargs docker unpause'\n")),(0,l.kt)("h4",{id:"delete-cluster"},"Delete cluster"),(0,l.kt)("p",null,"The simple command ",(0,l.kt)("inlineCode",{parentName:"p"},"kind delete cluster")," takes care of it."),(0,l.kt)("h3",{id:"build-casskop"},"Build CassKop"),(0,l.kt)("h4",{id:"using-your-local-environment"},"Using your local environment"),(0,l.kt)("p",null,"If you prefer working directly with your local go environment you can simply uses :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make get-deps\nmake build\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can check on the Gitlab Pipeline to see how the Project is build and test for each push")),(0,l.kt)("h4",{id:"or-using-the-provided-cross-platform-build-environment"},"Or Using the provided cross platform build environment"),(0,l.kt)("p",null,"Build the docker image which will be used to build CassKop docker image"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make build-ci-image\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you want to change the operator-sdk version change the ",(0,l.kt)("strong",{parentName:"p"},"OPERATOR_SDK_VERSION")," in the Makefile.")),(0,l.kt)("p",null,"Then build CassKop (code & image)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make docker-get-deps\nmake docker-build\n")),(0,l.kt)("h3",{id:"run-casskop"},"Run CassKop"),(0,l.kt)("p",null,"We can quickly run CassKop in development mode (on your local host), then it will use your kubectl configuration file to connect to your kubernetes cluster."),(0,l.kt)("p",null,"There are several ways to execute your operator :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Using your IDE directly"),(0,l.kt)("li",{parentName:"ul"},"Executing directly the Go binary"),(0,l.kt)("li",{parentName:"ul"},"deploying using the Helm charts")),(0,l.kt)("p",null,"If you want to configure your development IDE, you need to give it environment variables so that it will uses to connect to kubernetes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"KUBECONFIG=<path/to/your/kubeconfig>\nWATCH_NAMESPACE=<namespace_to_watch>\nPOD_NAME=<name for operator pod>\nLOG_LEVEL=Debug\nOPERATOR_NAME=ide\n")),(0,l.kt)("h4",{id:"run-the-operator-locally-with-the-go-binary"},"Run the Operator Locally with the Go Binary"),(0,l.kt)("p",null,"This method can be used to run the operator locally outside of the cluster. This method may be preferred during development as it facilitates faster deployment and testing."),(0,l.kt)("p",null,"Set the name of the operator in an environment variable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ export OPERATOR_NAME=casskop\n")),(0,l.kt)("p",null,"Deploy the CRD"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ kubectl apply -f config/crd/bases/db.orange.com_cassandraclusters.yaml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ make run\n")),(0,l.kt)("p",null,"This will run the operator in the ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," namespace using the default Kubernetes config file at ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," JMX operations cannot be executed on Cassandra nodes when running the operator locally. This is because the operator makes JMX calls over HTTP using jolokia and when running locally the operator is on a different network than the Cassandra cluster."),(0,l.kt)("h4",{id:"deploy-using-the-helm-charts"},"Deploy using the Helm Charts"),(0,l.kt)("p",null,"This section provides an instructions for running the operator Helm charts with an image that is built from the local branch."),(0,l.kt)("p",null,"Build the image from the current branch."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ export DOCKER_REPO_BASE=<your-docker-repo>\n$ make docker-build\n")),(0,l.kt)("p",null,"Push the image to docker hub (or to whichever repo you want to use)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ make push\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," In this example we are pushing to docker hub."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," The image tag is a combination of the version as defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"verion/version.go")," and the branch name."),(0,l.kt)("p",null,"Install the Helm chart."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ helm install ./charts/casskop \\\n    --set-string image.repository=ghcr.io/cscetbon/casskop,image.tag=0.4.0-local-dev-helm \\\n    --name local-dev-helm\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," The ",(0,l.kt)("inlineCode",{parentName:"p"},"image.repository")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"image.tag")," template variables have to match the names from the image that we pushed in the previous step."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," We set the chart name to the branch, but it can be anything."),(0,l.kt)("p",null,"Lastly, verify that the operator is running."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ kubectl get pods\nNAME                                                READY   STATUS    RESTARTS   AGE\nlocal-dev-helm-casskop-8946b89dc-4cfs9   1/1     Running   0          7m45s\n")),(0,l.kt)("h3",{id:"run-unit-tests"},"Run unit-tests"),(0,l.kt)("p",null,"You can run Unit-test for CassKop"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make unit-test\n")),(0,l.kt)("h3",{id:"run-e2e-end-to-end-tests"},"Run e2e end to end tests"),(0,l.kt)("p",null,"CassKop also have several end-to-end tests that can be run using makefile."),(0,l.kt)("p",null,"You need to create the namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"cassandra-e2e")," before running the tests."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create namespace cassandra-e2e\n")),(0,l.kt)("p",null,"to launch different tests in parallel in different temporary namespaces"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make e2e\n")),(0,l.kt)("p",null,"or sequentially in the namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"cassandra-e2e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make e2e-test-fix\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"make e2e")," executes all tests in different, temporary namespaces in parallel. Your k8s cluster will need a lot of resources to handle the many Cassandra nodes that launch in parallel. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"make e2e-test-fix")," executes all tests serially in the ",(0,l.kt)("inlineCode",{parentName:"p"},"cassandra-e2e")," namespace and as such does not require as many k8s resources as ",(0,l.kt)("inlineCode",{parentName:"p"},"make e2e")," does, but overall execution will be slower."),(0,l.kt)("p",null,"You can choose to run only 1 test using the args ex:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make e2e-test-fix-arg ClusterScaleDown\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tip"),": When debugging test failures, you can run ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get events --all-namespaces")," which produce output like:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cassandracluster-group-clusterscaledown-1561640024   0s    Warning   FailedScheduling   Pod   0/4 nodes are available: 1 node(s) had taints that the pod didn't tolerate, 3 Insufficient cpu.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tip"),": When tests fail, there may be resources that need to be cleaned up. Run ",(0,l.kt)("inlineCode",{parentName:"p"},"tools/e2e_test_cleanup.sh")," to delete resources left over from tests."),(0,l.kt)("h3",{id:"run-kuttl-tests"},"Run kuttl tests"),(0,l.kt)("p",null,"This requires ",(0,l.kt)("a",{parentName:"p",href:"https://kuttl.dev/docs/cli.html#setup-the-kuttl-kubectl-plugin"},"kuttl cli")," to be installed on your machine"),(0,l.kt)("p",null,"You first need to have a Kubernetes cluster set up with kubectl."),(0,l.kt)("p",null,"Then to run all tests you can simply type :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl kuttl test --config ./test/e2e/kuttl/kuttl-test.yaml ./test/e2e/kuttl/\n")),(0,l.kt)("p",null,"This will run all testcases in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/test/e2e/kuttl/")," directory in parallel on different generated namespaces (with Casskop automatically installed on each)."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you installed only the binary of kuttl, you can omit the ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," at the beginning")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tip"),": You can specify a single test case to run by adding ",(0,l.kt)("inlineCode",{parentName:"p"},"--test TestCase")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"TestCase")," is the name of one of the directories in ",(0,l.kt)("inlineCode",{parentName:"p"},"/test/e2e/kuttl/*here*")," (like ",(0,l.kt)("inlineCode",{parentName:"p"},"ScaleUpAndDown")," for example)"),(0,l.kt)("h3",{id:"debug-casskop-in-remote-in-a-kubernetes-cluster"},"Debug CassKop in remote in a Kubernetes cluster"),(0,l.kt)("p",null,"CassKop makes some specific calls to the Jolokia API of the CassandraNodes it deploys inside the kubernetes\ncluster. Because of this, it is not possible to fully debug CassKop when launch outside the kubernetes cluster (in\nyour local IDE)."),(0,l.kt)("p",null,"It is possible to use external solutions such as KubeSquash or Telepresence."),(0,l.kt)("p",null,"Telepresence launch a bi-directional tunnel between your dev environment and an existing operator pod in the cluster\nwhich it will ",(0,l.kt)("strong",{parentName:"p"},"swap")),(0,l.kt)("p",null,"To launch the telepresence utility you can launch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make telepresence\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You need to install it before see : ",(0,l.kt)("a",{parentName:"p",href:"https://www.telepresence.io/"},"https://www.telepresence.io/"))),(0,l.kt)("p",null,"If your cluster don't have Internet access, you can change the telepresence image to use to one your cluster have access\nexemple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"TELEPRESENCE_REGISTRY=you-private-registry/datawire  make debug-telepresence-with-alias\n")),(0,l.kt)("h4",{id:"configure-the-ide"},"Configure the IDE"),(0,l.kt)("p",null,"Now we just need to configure the IDE :"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(2543).Z,width:"800",height:"510"})),(0,l.kt)("p",null,"and let's the magic happened"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(3718).Z,width:"800",height:"672"})),(0,l.kt)("h3",{id:"build-multi-casskop"},"Build Multi-CassKop"),(0,l.kt)("h4",{id:"using-your-docker-environment"},"Using your docker environment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd $(git rev-parse --show-toplevel)/multi-casskop\nmake docker-build\n")),(0,l.kt)("h3",{id:"run-multi-casskop"},"Run Multi-CassKop"),(0,l.kt)("p",null,"We can quickly setup a k3d cluster with casskop and multi-casskop to test a PR on multi-casskop. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Build your multi-casskop docker image]","(#### Using your docker environment) which should print")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'echo "Generate zzz-deepcopy objects"\nGenerate zzz-deepcopy objects\n...\nSuccessfully built bf57e90615bb\nSuccessfully tagged ghcr.io/cscetbon/multi-casskop:0.5.6-my-pr\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a k3 cluster with 2 namespaces and install casskop")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"k3d cluster create multi-casskop-qa\ncd $(git rev-parse --show-toplevel)\nkubectl  apply -f config/crd/bases/\nkubectl  create namespace cluster1\nkubectl  create namespace cluster2\nhelm install casskop -n cluster1 oci://ghcr.io/cscetbon/casskop --set debug.enabled=true\nhelm install casskop -n cluster2 oci://ghcr.io/cscetbon/casskop --set debug.enabled=true\nkubemcsa export --context=k3d-multi-casskop-qa casskop --as k8s-cluster2 -n cluster1 | k apply -n cluster1 -f -\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update generated secret to use ",(0,l.kt)("inlineCode",{parentName:"li"},"server: https://kubernetes.default.svc/")," in its config (We won't need that method\nanymore and will be able to create 2 different clusters when ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3d/issues/101"},"https://github.com/rancher/k3d/issues/101")," is solved)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl  get secrets -n cluster1 k8s-cluster2 -o json|jq -r '.data.config'|base64 -d|pbcopy\n# set server to https://kubernetes.default.svc in the output, then copy it in the clipboard and run\npbpaste|base64 -w10000|pbcopy\n# You now have to edit the secret and replace config's value by what you have in your clipboard\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"load the docker image you built in the first step into your k3d cluster")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"k3d image import ghcr.io/cscetbon/multi-casskop:0.5.6-my-pr -c multi-casskop-qa\nINFO[0000] Loading images into 'multi-casskop-qa'\nINFO[0000] Starting k3d-tools node...\nINFO[0000] Saving 1 image(s) from runtime...\nINFO[0004] Importing images into nodes...\nINFO[0004] Importing images from tarball '/k3d/images/k3d-multi-casskop-qa-images-20200929124019.tar' into node 'k3d-multi-casskop-qa-server-0'...\nINFO[0006] Removing the tarball(s) from image volume...\nINFO[0007] Removing k3d-tools node...\nINFO[0008] Deleted k3d-multi-casskop-qa-tools\nINFO[0008] Successfully imported image(s)\nINFO[0008] DONE\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install multi-casskop using the image you just imported")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm install multi-casskop oci://ghcr.io/cscetbon/multi-casskop --set k8s.local=k3d-multi-casskop-qa \\\n    --set k8s.remote={k8s-cluster2} --set image.tag=0.5.6-my-pr --set debug.enabled=true -n cluster1 \\\n    --set image.pullPolicy=IfNotPresent\n")),(0,l.kt)("h2",{id:"how-this-repository-was-initially-build"},"How this repository was initially build"),(0,l.kt)("h3",{id:"boilerplate-casskop"},"Boilerplate CassKop"),(0,l.kt)("p",null,"We used the SDK to create the repository layout. This command is for memory ;) (or for applying sdk upgrades)"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You need to have first install the SDK.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#old version\n operator-sdk new casskop --api-version=db.orange.com/v2 --kind=CassandraCluster\n#new version\noperator-sdk new casskop --dep-manager=modules --repo=github.com.Orange-OpenSource/casskop --type=go\n")),(0,l.kt)("p",null,"Then you want to add managers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Add a new API for the custom resource CassandraCluster\n$ operator-sdk add api --api-version=db.orange.com/v2 --kind=CassandraCluster\n\n# Add a new controller that watches for CassandraCluster\n$ operator-sdk add controller --api-version=db.orange.com/v2 --kind=CassandraCluster\n")),(0,l.kt)("h3",{id:"useful-infos-for-developers"},"Useful Infos for developers"),(0,l.kt)("h4",{id:"parsing-yaml-from-string"},"Parsing Yaml from String"),(0,l.kt)("p",null,"For parsing Yaml from string to Go Object we uses this library : ",(0,l.kt)("inlineCode",{parentName:"p"},"github.com/ghodss/yaml")," because with the official one\nnot all fields of the yaml where correctly populated. I don't know why.."))}k.isMDXComponent=!0},3718:function(e,t,n){t.Z=n.p+"assets/images/ide_debug_action-03ad1d55c293740efc5e4f3773c2e809.png"},2543:function(e,t,n){t.Z=n.p+"assets/images/ide_debug_configuration-8526080b8539923c9ccd9d8e3e2738ca.png"}}]);