(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{139:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=o(a),u=n,m=d["".concat(b,".").concat(u)]||d[u]||p[u]||l;return a?r.a.createElement(m,s(s({ref:t},i),{},{components:a})):r.a.createElement(m,s({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,b[1]=s;for(var i=2;i<l;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),l=(a(0),a(139)),b=["components"],s={id:"6_cassandra_restore",title:"Cassandra restore",sidebar_label:"Cassandra restore"},c={unversionedId:"6_references/6_cassandra_restore",id:"6_references/6_cassandra_restore",isDocsHomePage:!1,title:"Cassandra restore",description:"CassandraRestoreSpec defines the specification for a restore of a Cassandra backup.",source:"@site/docs/6_references/6_cassandra_restore.md",slug:"/6_references/6_cassandra_restore",permalink:"/casskop/docs/6_references/6_cassandra_restore",editUrl:"https://github.com/cscetbon/casskop/edit/master/website/docs/6_references/6_cassandra_restore.md",version:"current",sidebar_label:"Cassandra restore",sidebar:"docs",previous:{title:"Cassandra backup",permalink:"/casskop/docs/6_references/5_cassandra_backup"},next:{title:"Operations Issues",permalink:"/casskop/docs/7_troubleshooting/1_operations_issues"}},i=[{value:"CassandraRestore",id:"cassandrarestore",children:[]},{value:"CassandraRestoreSpec",id:"cassandrarestorespec",children:[]},{value:"CassandraRestoreStatus",id:"cassandrarestorestatus",children:[{value:"Condition",id:"condition",children:[]},{value:"Items",id:"items",children:[]}]}],o={rightToc:i};function d(e){var t=e.components,a=Object(r.a)(e,b);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"CassandraRestoreSpec")," defines the specification for a restore of a Cassandra backup."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: db.orange.com/v2\nkind: CassandraRestore\nmetadata:\n  name: restore-demo\nspec:\n  cassandraCluster: cluster-demo\n  cassandraBackup: backup-demo\n  entities: k1.standard1\n")),Object(l.b)("h2",{id:"cassandrarestore"},"CassandraRestore"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"metadata"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"},"ObjectMetadata")),Object(l.b)("td",{parentName:"tr",align:null},"is metadata that all persisted resources must have, which includes all objects users must create."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"spec"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#cassandrarestorespec"},"CassandraRestoreSpec")),Object(l.b)("td",{parentName:"tr",align:null},"defines the desired state of CassandraRestore."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"status"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#cassandrarestorestatus"},"CassandraRestoreStatus")),Object(l.b)("td",{parentName:"tr",align:null},"defines the observed state of CassandraRestore."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")))),Object(l.b)("h2",{id:"cassandrarestorespec"},"CassandraRestoreSpec"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cassandraBackup"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Name of the ",Object(l.b)("a",{parentName:"td",href:"/casskop/docs/6_references/5_cassandra_backup"},"CassandraBackup")," to restore"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cassandraCluster"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Name of the CassandraCluster the restore belongs to"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cassandraDirectory"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Directory of Cassandra where data folder resides. Defaults to /var/lib/cassandra"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"datacenter"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Cassandra DC name to restore to, a restore will truncate tables but restore only to this datacenter if specified"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"concurrentConnection"),Object(l.b)("td",{parentName:"tr",align:null},"int32"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum number of threads used to download files from the cloud. Defaults to 10"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"entities"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Database entities to restore, it might be either only keyspaces or only tables prefixed by their respective keyspace, e.g. 'k1,k2' if one wants to backup whole keyspaces or 'ks1.t1,ks2.t2' if one wants to restore specific tables. These formats are mutually exclusive so 'k1,k2.t2' is invalid. An empty field will restore all keyspaces"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"exactSchemaVersion"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"When set a running node's schema version must match the snapshot's schema version. There might be cases when we want to restore a table for which its CQL schema has not changed but it has changed for other table / keyspace but a schema for that node has changed by doing that. Defaults to False"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"noDeleteTruncates"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"When set do not delete truncated SSTables after they've been restored during CLEANUP phase. Defaults to false"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"schemaVersion"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Version of the schema to restore from. Upon backup, a schema version is automatically appended to a snapshot name and its manifest is uploaded under that name. In case we have two snapshots having same name, we might distinguish between the two of them by using the schema version. If schema version is not specified, we expect a unique backup taken with respective snapshot name. This schema version has to match the version of a Cassandra node we are doing restore for (hence, by proxy, when global request mode is used, all nodes have to be on exact same schema version). Defaults to False"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"secret"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Name of Secret to use when accessing cloud storage providers"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"cassandrarestorestatus"},"CassandraRestoreStatus"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"condition"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#condition"},"Condition")),Object(l.b)("td",{parentName:"tr",align:null},"BackRestCondition describes the observed state of a Restore at a certain point"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"coordinatorMember"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Name of the pod the restore operation is executed on"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"unique identifier of an operation, a random id is assigned to each operation after a request is submitted, from caller's perspective, an id is sent back as a response to his request so he can further query state of that operation, referencing id, by operations/{id} endpoint"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"progress"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Progress is a percentage, 100% means the operation is completed, either successfully or with errors"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"timeCompleted"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"timeCreated"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"timeStarted"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h3",{id:"condition"},"Condition"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"failureCause"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#items"},"[]items")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lastTransitionTime"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"type"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h3",{id:"items"},"Items"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"message"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"message explaining the error"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"source"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"hostame of a node where this error has occurred"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}d.isMDXComponent=!0}}]);