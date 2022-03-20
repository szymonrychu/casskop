(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{139:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=o,g=d["".concat(a,".").concat(b)]||d[b]||p[b]||i;return t?r.a.createElement(g,s(s({ref:n},l),{},{components:t})):r.a.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var o=t(3),r=t(7),i=(t(0),t(139)),a=["components"],s={id:"2_gke_issues",title:"GKE Issues",sidebar_label:"GKE Issues"},c={unversionedId:"7_troubleshooting/2_gke_issues",id:"7_troubleshooting/2_gke_issues",isDocsHomePage:!1,title:"GKE Issues",description:"RBAC on Google Container Engine (GKE)",source:"@site/docs/7_troubleshooting/2_gke_issues.md",slug:"/7_troubleshooting/2_gke_issues",permalink:"/casskop/docs/7_troubleshooting/2_gke_issues",editUrl:"https://github.com/cscetbon/casskop/edit/master/website/docs/7_troubleshooting/2_gke_issues.md",version:"current",sidebar_label:"GKE Issues",sidebar:"docs",previous:{title:"Operations Issues",permalink:"/casskop/docs/7_troubleshooting/1_operations_issues"},next:{title:"Developer guide",permalink:"/casskop/docs/8_contributing/1_developer_guide"}},l=[{value:"RBAC on Google Container Engine (GKE)",id:"rbac-on-google-container-engine-gke",children:[]},{value:"Pod and volumes can be scheduled in different zones using default provisioned",id:"pod-and-volumes-can-be-scheduled-in-different-zones-using-default-provisioned",children:[]}],u={rightToc:l};function d(e){var n=e.components,t=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"rbac-on-google-container-engine-gke"},"RBAC on Google Container Engine (GKE)"),Object(i.b)("p",null,"When you try to create ",Object(i.b)("inlineCode",{parentName:"p"},"ClusterRole")," (",Object(i.b)("inlineCode",{parentName:"p"},"casskop"),", etc.) on GKE Kubernetes cluster, you will probably run into permission errors:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'<....>\nfailed to initialize cluster resources: roles.rbac.authorization.k8s.io\n"casskop" is forbidden: attempt to grant extra privileges:\n<....>\n')),Object(i.b)("p",null,"This is due to the way Container Engine checks permissions. From ",Object(i.b)("a",{parentName:"p",href:"https://cloud.google.com/container-engine/docs/role-based-access-control"},"Google Container Engine docs"),":"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Because of the way Container Engine checks permissions when you create a Role or ClusterRole, you must first create a RoleBinding that grants you all of the permissions included in the role you want to create.\nAn example workaround is to create a RoleBinding that gives your Google identity a cluster-admin role before attempting to create additional Role or ClusterRole permissions.\nThis is a known issue in the Beta release of Role-Based Access Control in Kubernetes and Container Engine version 1.6."))),Object(i.b)("p",null,"To overcome this, you must grant your current Google identity ",Object(i.b)("inlineCode",{parentName:"p"},"cluster-admin")," Role:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-console"},'# get current google identity\n$ gcloud info | grep Account\nAccount: [myname@example.org]\n\n# grant cluster-admin to your current identity\n$ kubectl create clusterrolebinding myname-cluster-admin-binding --clusterrole=cluster-admin --user=myname@example.org\nClusterrolebinding "myname-cluster-admin-binding" created\n')),Object(i.b)("h3",{id:"pod-and-volumes-can-be-scheduled-in-different-zones-using-default-provisioned"},"Pod and volumes can be scheduled in different zones using default provisioned"),Object(i.b)("p",null,"The default provisioner in GKE does not have the ",Object(i.b)("inlineCode",{parentName:"p"},'volumeBindingMode: "WaitForFirstConsumer"')," option that can result in\na bad\nscheduling behaviour.\nWe use one of the following files to create a storage class:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"config/samples/gke-storage-standard-wait.yaml"),Object(i.b)("li",{parentName:"ul"},"config/samples/gke-storage-ssd-wait.yaml (if you have ssd disks)")))}d.isMDXComponent=!0}}]);