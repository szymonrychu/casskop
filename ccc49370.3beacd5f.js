(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{192:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(197),m=t(199),i=t(196);var c=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=a.frontMatter,n=a.metadata;return r.a.createElement(l.a,{title:n.title,description:n.description},a&&r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(m.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},r.a.createElement(a,null)),(n.nextItem||n.prevItem)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(c,{nextItem:n.nextItem,prevItem:n.prevItem}))))))}},199:function(e,a,t){"use strict";t(68);var n=t(0),r=t.n(n),l=t(194),m=t.n(l),i=t(193),c=t(196),s=t(200),o=t(119),v=t.n(o),u=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,l,o,g=e.children,E=e.frontMatter,p=e.metadata,_=e.truncated,d=e.isBlogPostPage,N=void 0!==d&&d,b=p.date,h=p.permalink,k=p.tags,f=E.author,I=E.title,x=E.author_url||E.authorURL,w=E.author_title||E.authorTitle,P=E.author_image_url||E.authorImageURL;return r.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=b.substring(0,10).split("-"),n=t[0],l=u[parseInt(t[1],10)-1],o=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:m()("margin-bottom--sm",v.a.blogPostTitle)},N?I:r.a.createElement(c.a,{to:h},I)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("time",{dateTime:b,className:v.a.blogPostDate},l," ",o,", ",n)),r.a.createElement("div",{className:"avatar margin-bottom--md"},P&&r.a.createElement("a",{className:"avatar__photo-link",href:x,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:P,alt:f})),r.a.createElement("div",{className:"avatar__intro"},f&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:x,target:"_blank",rel:"noreferrer noopener"},f)),r.a.createElement("small",{className:"avatar__subtitle"},w)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(i.a,{components:s.a},g)),(k.length>0||_)&&r.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),k.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),_&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:p.permalink,"aria-label":"Read more about "+I},r.a.createElement("strong",null,"Read More")))))}}}]);