"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4804],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"Nodes Management",sidebar_label:"Nodes Management"},l=void 0,p={unversionedId:"configuration_deployment/nodes_management",id:"configuration_deployment/nodes_management",title:"Nodes Management",description:"CassKop in duo with the Cassandra docker Image is responsible of the lifecycle of the Cassandra nodes.",source:"@site/docs/3_configuration_deployment/10_nodes_management.md",sourceDirName:"3_configuration_deployment",slug:"/configuration_deployment/nodes_management",permalink:"/casskop/docs/configuration_deployment/nodes_management",editUrl:"https://github.com/cscetbon/casskop/edit/master/website/docs/3_configuration_deployment/10_nodes_management.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Nodes Management",sidebar_label:"Nodes Management"},sidebar:"docs",previous:{title:"Advanced Configuration",permalink:"/casskop/docs/configuration_deployment/advanced_configuration"},next:{title:"CassandraCluster Status",permalink:"/casskop/docs/configuration_deployment/cassandra_cluster_status"}},c={},u=[{value:"HealthChecks",id:"healthchecks",level:2},{value:"Prometheus metrics export",id:"prometheus-metrics-export",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"CassKop in duo with the Cassandra docker Image is responsible of the lifecycle of the Cassandra nodes."),(0,o.kt)("h2",{id:"healthchecks"},"HealthChecks"),(0,o.kt)("p",null,"Healthchecks are periodical tests which verify Cassandra's health. When the healthcheck fails, Kubernetes can assume\nthat the application is not healthy and attempt to fix it. Kubernetes supports two types of Healthcheck probes : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Liveness probes"),(0,o.kt)("li",{parentName:"ul"},"Readiness probes.")),(0,o.kt)("p",null,"You can find more details in the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/#configure-probes"},"Kubernetes\ndocumentation"),"."),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"livenessProbe")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"readinessProbe")," support two additional options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"initialDelaySeconds"),": defines the initial delay before the probe is tried for the first time. Default is 15 seconds"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeoutSeconds"),": defines the timeout of the probe. CassKop uses 20 seconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"periodSeconds"),": the period to wait between each call to a probe: CassKop uses 40 seconds.")),(0,o.kt)("p",null,"You are now able to override this default values using the following fields in to the ",(0,o.kt)("inlineCode",{parentName:"p"},"CassandraCluster")," definition : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"livenessInitialDelaySeconds"),": defines initial delay for the liveness probe of the main")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"livenessHealthCheckTimeout"),": defines health check timeout for the liveness probe of the main")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"livenessHealthCheckPeriod"),": defines health check period for the liveness probe of the main")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"livenessFailureThreshold"),": defines failure threshold for the liveness probe of the main")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"livenessSuccessThreshold"),": defines success threshold for the liveness probe of the main")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"readinessInitialDelaySeconds"),": defines initial delay for the readiness probe of the main")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"readinessHealthCheckTimeout"),": defines health check timeout for the readiness probe of the main")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"readinessHealthCheckPeriod"),": defines health check period for the readiness probe of the main")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"readinessFailureThreshold"),": defines failure threshold for the readiness probe of the main")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"readinessSuccessThreshold"),": defines success threshold for the readiness probe of the main"))),(0,o.kt)("h2",{id:"prometheus-metrics-export"},"Prometheus metrics export"),(0,o.kt)("p",null,"We currently use the CoreOS Prometheus Operator to export the Cassandra nodes metrics. We must create a serviceMonitor\nobject in the prometheus namespaces, pointing to the exporter-prometheus-service which is created by CassKop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ cat config/samples/prometheus-cassandra-service-monitor.yaml\napiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: prometheus-cassandra-jmx\n  labels:\n    k8s-apps: cassandra-k8s-jmx\n    prometheus: kube-prometheus\n    component: cassandra\n    app: cassandra\nspec:\n  jobLabel: kube-prometheus-cassandra-k8s-jmx\n  selector:\n    matchLabels:\n      k8s-app: exporter-cassandra-jmx\n  namespaceSelector:\n      matchNames:\n      - cassandra\n      - cassandra-demo\n  endpoints:\n  - port: promjmx\n    interval: 15s\n")),(0,o.kt)("p",null,"Actually the Cassandra nodes use the work of Oleg Glusahak ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oleg-glushak/cassandra-prometheus-jmx"},"https://github.com/oleg-glushak/cassandra-prometheus-jmx")," but\nthis may change in the futur."))}m.isMDXComponent=!0}}]);