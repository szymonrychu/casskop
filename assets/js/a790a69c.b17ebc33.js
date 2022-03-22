"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9430],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2778:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=["components"],i={title:"Release guide",sidebar_label:"Release guide"},s=void 0,c={unversionedId:"contributing/release_guide",id:"contributing/release_guide",title:"Release guide",description:"There are several things to do when you want to make a release of the project:",source:"@site/docs/8_contributing/2_release_guide.md",sourceDirName:"8_contributing",slug:"/contributing/release_guide",permalink:"/casskop/docs/contributing/release_guide",editUrl:"https://github.com/cscetbon/casskop/edit/master/website/docs/8_contributing/2_release_guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Release guide",sidebar_label:"Release guide"},sidebar:"docs",previous:{title:"Developer guide",permalink:"/casskop/docs/contributing/developer_guide"},next:{title:"Reporting bugs",permalink:"/casskop/docs/contributing/reporting_bugs"}},u={},p=[{value:"With Helm",id:"with-helm",level:2},{value:"Release helm charts on GitHub",id:"release-helm-charts-on-github",level:3},{value:"With OLM (Operator Lifecycle Manager)",id:"with-olm-operator-lifecycle-manager",level:2},{value:"Create new OLM release",id:"create-new-olm-release",level:3},{value:"Instruction to tests locally with OLM",id:"instruction-to-tests-locally-with-olm",level:3}],m={toc:p};function h(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are several things to do when you want to make a release of the project:\nTodo: things should be automatize ;)"),(0,o.kt)("p",null,"For ease, we have same version for casskop and multi-casskop"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update Changelog.md with informations for the new release"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","update version/version.go with the new release version"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","update multi-casskop/version/version.go with the new release version"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","update charts/casskop/Chart.yaml and values.yaml"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","update multi-casskop/charts/multi-casskop/Chart.yaml and values.yaml"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","generate casskop helm with ",(0,o.kt)("inlineCode",{parentName:"li"},"make helm-package")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","add to git docs/helm, commit & push"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","once the PR is merged to master, create the release with content of changelog for this version",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Orange-OpenSource/casskop/releases"},"https://github.com/Orange-OpenSource/casskop/releases"))))),(0,o.kt)("h2",{id:"with-helm"},"With Helm"),(0,o.kt)("p",null,"The CassKop operator is released in the helm/charts/incubator see : ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/helm/charts/pull/14414"},"https://github.com/helm/charts/pull/14414")),(0,o.kt)("p",null,"We also have a helm repository hosted on GitHub pages."),(0,o.kt)("h3",{id:"release-helm-charts-on-github"},"Release helm charts on GitHub"),(0,o.kt)("p",null,"In order to release the Helm charts on GitHub, we need to generate the package locally"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make helm-package\n")),(0,o.kt)("p",null,"then add to git the package and make a PR on the repo."),(0,o.kt)("h2",{id:"with-olm-operator-lifecycle-manager"},"With OLM (Operator Lifecycle Manager)"),(0,o.kt)("p",null,"OLM is used to manage lifecycle of the Operator, and is also used to puclish on ",(0,o.kt)("a",{parentName:"p",href:"https://operatorhub.io"},"https://operatorhub.io")),(0,o.kt)("h3",{id:"create-new-olm-release"},"Create new OLM release"),(0,o.kt)("p",null,"You can create new version of CassKop OLM bundle using:"),(0,o.kt)("p",null,"Exemple for generating version 0.0.4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"operator-sdk olm-catalog gen-csv --csv-version 0.4.0 --update-crds\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You may need to manually update some fileds (such as description..), you can refere to previous versions for that")),(0,o.kt)("h3",{id:"instruction-to-tests-locally-with-olm"},"Instruction to tests locally with OLM"),(0,o.kt)("p",null,"Before submitting the operator to operatorhub.io you need to install and test OLM on a local Kubernetes."),(0,o.kt)("p",null,"These tests and all pre-requisite can also be executed automatically in a single step using a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/operator-framework/community-operators/blob/master/docs/using-scripts.md"},"Makefile"),"."),(0,o.kt)("p",null,"Go to github/operator-framework/community-operators to interract with the OLM makefile"),(0,o.kt)("p",null,"Install OLM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make operator.olm.install\n")),(0,o.kt)("p",null,"Launch lint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make operator.verify OP_PATH=community-operators/casskop VERBOSE=true\n")),(0,o.kt)("p",null,"Launch tests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make operator.test OP_PATH=community-operators/casskop VERBOSE=true\n")))}h.isMDXComponent=!0}}]);