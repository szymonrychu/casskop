(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),s=(a(0),a(139)),o=["components"],c={id:"11_cassandra_cluster_status",title:"CassandraCluster Status",sidebar_label:"CassandraCluster Status"},i={unversionedId:"3_configuration_deployment/11_cassandra_cluster_status",id:"3_configuration_deployment/11_cassandra_cluster_status",isDocsHomePage:!1,title:"CassandraCluster Status",description:"You can request kubernetes Object cassandracluster representing the Cassandra cluster to retrieve information about",source:"@site/docs/3_configuration_deployment/11_cassandra_cluster_status.md",slug:"/3_configuration_deployment/11_cassandra_cluster_status",permalink:"/casskop/docs/3_configuration_deployment/11_cassandra_cluster_status",editUrl:"https://github.com/cscetbon/casskop/edit/master/website/docs/3_configuration_deployment/11_cassandra_cluster_status.md",version:"current",sidebar_label:"CassandraCluster Status",sidebar:"docs",previous:{title:"Nodes Management",permalink:"/casskop/docs/3_configuration_deployment/10_nodes_management"},next:{title:"Implementation architecture",permalink:"/casskop/docs/5_operations/0_implementation_architecture"}},l=[],b={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,o);return Object(s.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You can request kubernetes Object ",Object(s.b)("inlineCode",{parentName:"p"},"cassandracluster")," representing the Cassandra cluster to retrieve information about\nit's status :"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"$ kubectl describe cassandracluster cassandra\n...\nstatus:\n   Cassandra Node Status:\n     cassandra-demo-dc1-rack1-0:\n      Host Id:  ca716bef-dc68-427d-be27-b4eeede1e072\n      Node Ip:  10.100.150.51\n     cassandra-demo-dc1-rack1-1:\n      Host Id:  3528d662-e4a8-4fb6-88f6-3f21056df7ea\n      Node Ip:  10.100.150.39\n     cassandra-demo-dc1-rack1-2:\n      Host Id:  a1d1e7fa-8073-408c-94c1-e3678013f90f\n      Node Ip:  10.100.150.38\n     cassandra-demo-dc1-rack2-0:\n      Host Id:  83ea3410-db00-47fe-9051-e9f877ce5e63\n      Node Ip:  10.100.150.111\n     cassandra-demo-dc1-rack2-1:\n      Host Id:  200bf115-5caf-4218-8e84-e804296c5026\n      Node Ip:  10.100.150.108\n     cassandra-demo-dc1-rack2-2:\n      Host Id:  27ee7414-a695-4744-bf39-41db9d23ddb2\n      Node Ip:  10.100.150.110\n  cassandraRackStatus:\n    dc1-rack1:\n      cassandraLastAction:\n        Name: ScaleUp\n        endTime: 2018-07-12T14:10:28Z\n        startTime: 2018-07-12T14:09:34Z\n        status: Done\n      phase: Running\n      podLastOperation:\n        Name: cleanup\n        endTime: 2018-07-12T14:07:35Z\n        podsOK:\n        - cassandra-demo-dc1-rack1-0\n        - cassandra-demo-dc1-rack1-1\n        - cassandra-demo-dc1-rack1-2\n        startTime: 2018-07-12T14:06:22Z\n        status: Done\n    dc1-rack2:\n      cassandraLastAction:\n        Name: ScaleUp\n        endTime: 2018-07-12T14:10:58Z\n        startTime: 2018-07-12T14:10:28Z\n        status: Done\n      phase: Running\n      podLastOperation:\n        Name: cleanup\n        endTime: 2018-07-12T14:08:16Z\n        podsOK:\n        - cassandra-demo-dc1-rack2-0\n        - cassandra-demo-dc1-rack2-1\n        - cassandra-demo-dc1-rack2-2\n        startTime: 2018-07-12T14:08:09Z\n        status: Done\n  lastClusterAction: ScaleUp\n  lastClusterActionStatus: Done        \n...\n  phase: Running\n  seedlist:\n  - cassandra-demo-dc1-rack1-0.cassandra-demo-dc1-rack1.cassandra-demo.svc.kaas-prod-priv-sph\n")),Object(s.b)("p",null,"The CassandraCluster prints out it's whole status."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"seedlist"),": it is the Cassandra SEED List used in the Cluster."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Phase")," : it's the global state for the cassandra cluster which can have different values :",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Initialization"),", we just launched a new cluster, and waiting for its requested state"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Running"),", the cluster is running normally"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Pending"),", the number of Nodes requested has changed, waiting for reconciliation"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"lastClusterAction")," Is the Last Action at the Cluster level"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"lastClusterActionStatus")," Is the Last Action Status at the Cluster level"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"CassandraNodeStatus"),": represents a map of (hostId, Ip Node) couple for each Pod in the Cluster",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"${Cassandra node pod's name}"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"HostId"),": the cassandra node's hostId"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"IpNode"),": the cassandra node's ip"))))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"CassandraRackStatus")," represents a map of statuses for each of the Cassandra Racks in the Cluster",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"${Cassandra DC-Rack Name}"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Cassandra Last Action"),": it's an action which is ongoing on the Cassandra cluster :",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Name"),": name of the Action",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"UpdateConfigMap")," a new ConfigMap has been submitted to the cluster"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"UpdateDockerImage")," a new Docker Image has been submitted to the cluster"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"UpdateSeedList")," a new SeedList must be deployed on the cluster"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"UpdateResources")," CassKop must apply new resources values for it's statefulsets            "),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"RollingRestart")," CassKop performs a rollingrestart on the target statefulset"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"ScaleUp")," a scale Up has been requested"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"ScaleDown")," a scale Down has been requested."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"UpdateStatefulset")," a change has been submitted to the statefulset, but CassKop doesn't know exactly\nwhich one.              "))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Status"),": status of the Action",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Configuring"),": Only used for UpdateSeedList, we need to synchronise all statefulset with this operation before starting it"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"ToDo"),": an action is scheduled"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Ongoing"),": an action is ongoing, see Start Time"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Continue"),": the action may be continuing (used for ScaleDown)"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Done"),": the action is Done, see End Time"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Start Time"),": time of start of the operation"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"End Time"),": time of end of the operation"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Pod Last Operation"),": it's an operation done at Pod Level",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Name"),": Name of the Operation",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"decommissioning"),": a nodetool decommissioning must be performed on a pod"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"cleanup"),": a nodetool cleanup must be performed on a pod"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"rebuild"),": a nodetool rebuild must be performed on a pod"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"upgradesstables"),": a nodetool upgradesstables must be performed on a pod            "))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Status"),":",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Manual"),": an operation is recommended to be scheduled by a human"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"ToDo"),": an operation is scheduled    "),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Ongoing"),": an operation is ongoing, see start time"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Done"),": an operation is done, see end time"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Pods"),": list of Pods on which the operation is ongoing"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"PodsOK"),": list of Pods on which the operation is done"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"PodsKO"),": list of Pods on which the operation has not been completed correctly"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Start Time"),": time of start for an operation"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"End Time"),": time of end for an operation        ")))))))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"When Status=Done for each Rack, then there is no specific action ongoing on the cluster and the\nlastClusterActionStatus will turn also to Done.")))}p.isMDXComponent=!0},139:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||s;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<s;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);