"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5483],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),o=n(2389),s=n(3725),l=n(6010),i="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.UB)(),k=b.tabGroupChoices,w=b.setTabGroupChoices,_=(0,r.useState)(g),C=_[0],N=_[1],O=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=k[m];null!=E&&E!==C&&h.some((function(e){return e.value===E}))&&N(E)}var x=function(e){var t=e.currentTarget,n=O.indexOf(t),a=h[n].value;a!==C&&(j(t),N(a),null!=m&&w(m,a))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:T,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},8219:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=(n(9877),n(8215),["components"]),l={title:"Upgrade v1 to v2",sidebar_label:"Upgrade v1 to v2"},i=void 0,u={unversionedId:"setup/upgrade_v1_to_v2",id:"setup/upgrade_v1_to_v2",title:"Upgrade v1 to v2",description:"Version 2 makes it possible to use Cassandra 3 and 4 using the same bootstrap image. That's why it's recommended to",source:"@site/docs/2_setup/5_upgrade_v1_to_v2.md",sourceDirName:"2_setup",slug:"/setup/upgrade_v1_to_v2",permalink:"/casskop/docs/setup/upgrade_v1_to_v2",editUrl:"https://github.com/cscetbon/casskop/edit/master/website/docs/2_setup/5_upgrade_v1_to_v2.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Upgrade v1 to v2",sidebar_label:"Upgrade v1 to v2"},sidebar:"docs",previous:{title:"MiniKube",permalink:"/casskop/docs/setup/platform_setup/minikube"},next:{title:"Customizable install with Helm",permalink:"/casskop/docs/configuration_deployment/customizable_install_with_helm"}},c={},p=[{value:"Collect your ConfigMap parameters",id:"collect-your-configmap-parameters",level:2},{value:"Uninstall your operator",id:"uninstall-your-operator",level:2},{value:"Update the CRDs",id:"update-the-crds",level:2},{value:"Edit your CassandraCluster object",id:"edit-your-cassandracluster-object",level:2},{value:"Edit your ConfigMap",id:"edit-your-configmap",level:2},{value:"Install the latest version of the operator",id:"install-the-latest-version-of-the-operator",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Version 2 makes it possible to use Cassandra 3 and 4 using the same bootstrap image. That's why it's recommended to\nupgrade to version 2."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It's highly recommended that you test this procedure on a testing environment first."))),(0,o.kt)("p",null,"In order to upgrade to version 2 without impacting your users you need to follow those steps."),(0,o.kt)("h2",{id:"collect-your-configmap-parameters"},"Collect your ConfigMap parameters"),(0,o.kt)("p",null,"If you use a ConfigMap, you can't use parameters other than pre_run.sh and post_run.sh\nCollect all the non default parameters that you use and also the number of tokens. you'll\nneed those when it's time to set the configuration in your CassandraCluster objects."),(0,o.kt)("h2",{id:"uninstall-your-operator"},"Uninstall your operator"),(0,o.kt)("p",null,"You need to uninstall it which won't have any effect on your running cluster other than\nnot allow you to trigger operations, scale it etc..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm delete casskop\n")),(0,o.kt)("h2",{id:"update-the-crds"},"Update the CRDs"),(0,o.kt)("p",null,"helm does not version CRDs, so you'll need to manually update them (You can get the\nnew CRDs from our git repo)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f config/crd/bases\n")),(0,o.kt)("h2",{id:"edit-your-cassandracluster-object"},"Edit your CassandraCluster object"),(0,o.kt)("p",null,"Now it's time to edit your object and add the cassandra/java configuration from your configmap in there.\nYou also have to update the bootstrap image version to ",(0,o.kt)("em",{parentName:"p"},"0.1.9"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl edit cassandraclusters.db.orange.com your-object\n")),(0,o.kt)("p",null,"Here is an example of what you could have after you've edited it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: db.orange.com/v2\nkind: CassandraCluster\nmetadata:\n  name: your-object\nspec:\n  nodesPerRacks: 2\n  cassandraImage: cassandra:3.11.9\n  bootstrapImage: ghcr.io/cscetbon/casskop-bootstrap:0.1.9\n  config:\n    cassandra-yaml:\n      num_tokens: 256\n    jvm-options:\n      initial_heap_size: 32M\n      max_heap_size: 256M\n  dataCapacity: "1Gi"\n  deletePVC: true\n  autoPilot: true\n  resources:\n    limits:\n      cpu: 100m\n      memory: 512Mi\n  topology:\n    dc:\n      - name: dc1\n        rack:\n          - name: rack1\n')),(0,o.kt)("p",null,"If you use a version like ",(0,o.kt)("inlineCode",{parentName:"p"},"cassandra:latest"),", you have to add at the\nsame level a parameter called ",(0,o.kt)("em",{parentName:"p"},"serverVersion")," and set it to the version of\nthe configuration you wanna use cause it's used when generating it."),(0,o.kt)("p",null,"Also you don't have to set the heap and in that case some automatic values\nwill be picked for you."),(0,o.kt)("p",null,"If you have a doubt on what name to use for a parameter in your cassandra.yaml,\nyou can take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datastax/cass-config-definitions/tree/1b7eaf4e50447fc8168c4a6c16d0ed986941edf8/resources/cassandra-yaml/cassandra"},"https://github.com/datastax/cass-config-definitions/tree/1b7eaf4e50447fc8168c4a6c16d0ed986941edf8/resources/cassandra-yaml/cassandra")),(0,o.kt)("h2",{id:"edit-your-configmap"},"Edit your ConfigMap"),(0,o.kt)("p",null,"Remove all other keys than pre_run.sh and post_run.sh from your file.\nOf course if you're not using any of those 2 files you can even get rid of this\nConfigMap and remove it from your CassandraCluster object."),(0,o.kt)("h2",{id:"install-the-latest-version-of-the-operator"},"Install the latest version of the operator"),(0,o.kt)("p",null,"Now you can install version 2 of the operator by running the usual install\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm install casskop oci://ghcr.io/cscetbon/casskop\n")))}m.isMDXComponent=!0}}]);