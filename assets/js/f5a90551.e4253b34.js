"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2758],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(k,s(s({ref:a},p),{},{components:t})):n.createElement(k,s({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7354:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),s=["components"],l={title:"Pods Operations",sidebar_label:"Pods Operations"},i=void 0,c={unversionedId:"operations/pods_operations",id:"operations/pods_operations",title:"Pods Operations",description:"Here is the list of Operations managed by CassKop at the Pod operations level, which apply at pod level and can be triggered by specifics pods labels. Status of pod operations are also followed up at rack level.",source:"@site/docs/5_operations/2_pods_operations.md",sourceDirName:"5_operations",slug:"/operations/pods_operations",permalink:"/casskop/docs/operations/pods_operations",editUrl:"https://github.com/cscetbon/casskop/edit/master/website/docs/5_operations/2_pods_operations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Pods Operations",sidebar_label:"Pods Operations"},sidebar:"docs",previous:{title:"Cluster Operations",permalink:"/casskop/docs/operations/cluster_operations"},next:{title:"Multi-CassKop",permalink:"/casskop/docs/operations/multi_casskop"}},p={},d=[{value:"OperationCleanup",id:"operationcleanup",level:2},{value:"OperationRebuild",id:"operationrebuild",level:2},{value:"OperationDecommission",id:"operationdecommission",level:2},{value:"RollingRestart",id:"rollingrestart",level:2}],u={toc:d};function m(e){var a=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here is the list of Operations managed by CassKop at the ",(0,o.kt)("strong",{parentName:"p"},"Pod operations")," level, which apply at pod level and can be triggered by specifics pods labels. Status of pod operations are also followed up at rack level."),(0,o.kt)("p",null,"Some Pods Operations can be triggered automatically by CassKop if :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CassandraCluster.spec.autoPilot")," is true, that will trigger ",(0,o.kt)("inlineCode",{parentName:"li"},"cleanup"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"rebuild")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"upgadesstable")," operation in\nresponse to cluster events automatically."),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"decommission operation")," is special and will be triggered automatically each time we need to ScaleDown a Pod."),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"removenode operation")," is also special and may be set manually when needed.")),(0,o.kt)("p",null,'It is also possible to trigger operations "manually", setting some labels on the Pods.'),(0,o.kt)("h2",{id:"operationcleanup"},"OperationCleanup"),(0,o.kt)("p",null,"A Cleanup may be automatically triggered by CassKop when it ends Scaling the cluster.\nCassKop will set some specific labels on the targeted pods.\nWe can also set these labels manually, or using the privided plugin (",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl casskop cleanup start"),")\nIf we want to see labels for each of the pods of the cluster :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl label pod $(kubectl get pods -l app=cassandracluster -o jsonpath='{range .items[*]}{.metadata.name}{\" \"}') --list\nListing labels for Pod./cassandra-demo-dc1-rack1-0:\n cluster=k8s.pic\n controller-revision-hash=cassandra-demo-dc1-rack1-56c9bbb958\n dc-rack=dc1-rack1\n statefulset.kubernetes.io/pod-name=cassandra-demo-dc1-rack1-0\n app=cassandracluster\n cassandracluster=cassandra-demo\n cassandraclusters.db.orange.com.dc=dc1\n cassandraclusters.db.orange.com.rack=rack1\n...\n")),(0,o.kt)("p",null,"Now, to trigger a ",(0,o.kt)("inlineCode",{parentName:"p"},"cleanup")," on pod ",(0,o.kt)("inlineCode",{parentName:"p"},"cassandra-demo-dc1-rack2-0")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label pod cassandra-demo-dc1-rack2-0 operation-name=cleanup --overwrite\nkubectl label pod cassandra-demo-dc1-rack2-0 operation-status=ToDo --overwrite\n")),(0,o.kt)("p",null,"Automatically, CassKop will detect the change, start the action, and update the status :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    dc1-rack2:\n      cassandraLastAction:\n        Name: UpdateSeedList\n        endTime: 2018-09-27T15:26:51Z\n        startTime: 2018-09-27T15:23:54Z\n        status: Done\n      phase: Running\n      podLastOperation:\n        Name: cleanup\n        endTime: 2018-09-27T16:00:52Z\n        operatorName: operator-cassandr-f6d2968d4504448180ace041d3818d10-799dbb4zqss8\n        podsOK:\n        - cassandra-demo-dc1-rack2-0\n        - cassandra-demo-dc1-rack2-0\n        startTime: 2018-09-27T16:00:32Z\n        status: Done\n")),(0,o.kt)("p",null,"The section ",(0,o.kt)("inlineCode",{parentName:"p"},"podLastOperation")," appears and we can see that it has correctly executed the cleanup operation on the 2\nnodes"),(0,o.kt)("h2",{id:"operationrebuild"},"OperationRebuild"),(0,o.kt)("p",null,"This operation operates on multiple nodes in the cluster. Use this operation when CassKop add a new datacenter to an\nexisting cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl casskop rebuild {--pod <pod_name> | --prefix <prefix_pod_name>} <from-dc_name>\n")),(0,o.kt)("p",null,"In the background this command is equivalent to set labels on each pods like :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label pod cassandra-demo-dc2-rack1-0 operation-name=rebuild --overwrite\nkubectl label pod cassandra-demo-dc2-rack1-0 operation-status=ToDo --overwrite\nkubectl label pod cassandra-demo-dc2-rack1-0 operation-argument=dc1 --overwrite\n")),(0,o.kt)("h2",{id:"operationdecommission"},"OperationDecommission"),(0,o.kt)("p",null,"see ",(0,o.kt)("a",{parentName:"p",href:"/casskop/docs/operations/cluster_operations#updatescaledown"},"UpdateScaleDown")),(0,o.kt)("h2",{id:"rollingrestart"},"RollingRestart"),(0,o.kt)("p",null,"This operation can be triggered with the plugin using simple commands as :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl casskop restart --crd cassandra-e2e --rack dc1.rack1 dc2.rack1\n\nNamespace cassandra-e2e\nTrigger restart of dc1.rack1\nTrigger restart of dc2.rack1\n\n$ kubectl casskop restart --crd cassandra-e2e --dc dc1\n\nNamespace cassandra-e2e\nTrigger restart of dc1.rack1\nTrigger restart of dc1.rack2\n\n$ kubectl casskop restart --crd cassandra-e2e --full\n\nNamespace cassandra-e2e\nTrigger restart of dc1.rack1\nTrigger restart of dc1.rack2\nTrigger restart of dc2.rack1\n")),(0,o.kt)("p",null,"After one of this command, CassKop will do a rolling restart of each rack one at a time avoiding any disruption."))}m.isMDXComponent=!0}}]);