"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3577],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),p=r,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3203:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={title:"Sidecars",sidebar_label:"Sidecars"},l=void 0,c={unversionedId:"configuration_deployment/sidecars",id:"configuration_deployment/sidecars",title:"Sidecars",description:"For extra needs not covered by the defaults container managed through the CassandraCluster CRD, we are allowing you to define your own sidecars which will be deployed into the cassandra node pods.",source:"@site/docs/3_configuration_deployment/5_sidecars.md",sourceDirName:"3_configuration_deployment",slug:"/configuration_deployment/sidecars",permalink:"/casskop/docs/configuration_deployment/sidecars",editUrl:"https://github.com/cscetbon/casskop/edit/master/website/docs/3_configuration_deployment/5_sidecars.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Sidecars",sidebar_label:"Sidecars"},sidebar:"docs",previous:{title:"Cassandra Configuration",permalink:"/casskop/docs/configuration_deployment/cassandra_configuration"},next:{title:"Advanced Configuration",permalink:"/casskop/docs/configuration_deployment/advanced_configuration"}},u={},d=[],m={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For extra needs not covered by the defaults container managed through the CassandraCluster CRD, we are allowing you to define your own sidecars which will be deployed into the cassandra node pods.\nTo do this, you will configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"SidecarConfigs")," property in ",(0,o.kt)("inlineCode",{parentName:"p"},"CassandraCluster.Spec"),"."),(0,o.kt)("p",null,"CassandraCluster fragment for dynamic sidecars definition :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# ...\n  sidecarConfigs:\n    - args: ["tail", "-F", "/var/log/cassandra/system.log"]\n      image: ez123/alpine-tini\n      imagePullPolicy: Always\n      name: cassandra-log\n      resources:\n        limits:\n          cpu: 50m\n          memory: 50Mi\n        requests:\n          cpu: 10m\n          memory: 10Mi\n      volumeMounts:\n        - mountPath: /var/log/cassandra\n          name: cassandra-logs\n    - args: ["tail", "-F", "/var/log/cassandra/gc.log.0.current"]\n      image: ez123/alpine-tini\n      imagePullPolicy: Always\n      name: gc-log\n      resources:\n        limits:\n          cpu: 50m\n          memory: 50Mi\n        requests:\n          cpu: 10m\n          memory: 10Mi\n      volumeMounts:\n        - mountPath: /var/log/cassandra\n          name: gc-logs\n# ...\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sidecarConfigs")," ",(0,o.kt)("em",{parentName:"li"},"(required)")," : Defines the list of container config object, which will be added into each pod of cassandra node, it requires a list of kubernetes Container spec.")),(0,o.kt)("p",null,"With the above configuration, the following configuration will be added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"rack statefulset")," definition :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# ...\n#   ...\n  containers:\n    - args: ["tail", "-F", "/var/log/cassandra/system.log"]\n      image: ez123/alpine-tini\n      imagePullPolicy: Always\n      name: cassandra-log\n      resources:\n        limits:\n          cpu: 50m\n          memory: 50Mi\n        requests:\n          cpu: 10m\n          memory: 10Mi\n      volumeMounts:\n        - mountPath: /var/log/cassandra\n          name: cassandra-logs\n    - args: ["tail", "-F", "/var/log/cassandra/gc.log.0.current"]\n      image: ez123/alpine-tini\n      imagePullPolicy: Always\n      name: gc-log\n      resources:\n        limits:\n          cpu: 50m\n          memory: 50Mi\n        requests:\n          cpu: 10m\n          memory: 10Mi\n      volumeMounts:\n        - mountPath: /var/log/cassandra\n          name: gc-logs\n#   ...\n# ...\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that all sidecars added with this configuration will have some of the environment variables from cassandra container merged with those defined into the sidecar container\nfor example :"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"CASSANDRA_CLUSTER_NAME"),(0,o.kt)("li",{parentName:"ul"},"CASSANDRA_SEEDS"),(0,o.kt)("li",{parentName:"ul"},"CASSANDRA_DC"),(0,o.kt)("li",{parentName:"ul"},"CASSANDRA_RACK")))))}p.isMDXComponent=!0}}]);