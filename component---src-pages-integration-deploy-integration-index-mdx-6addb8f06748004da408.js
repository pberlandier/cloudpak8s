(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),i=a.n(r),l=a("NmYn"),o=a.n(l),c=a("OKom"),b=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.text},a)))))},O=a("pEPl"),j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,l=r.subDirectory,o=i+"/edit/"+r.branch+l+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},g=a("FCXl"),f=(a("Oyvg"),a("Wbzz")),N=a("I8xM");var v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0}),i=r===n,l=new RegExp(n+"(?!-)"),c=a.replace(l,r);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(u.b)(f.Link,{className:N.link,to:""+c},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:N.list},r))))))},n}(i.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,l=t.frontmatter,s=void 0===l?{}:l,p=t.relativePagePath,m=t.titleType,O=s.tabs,j=s.title,f=s.theme,N=s.description,w=s.keywords,C=n.data.site.pathPrefix,k=C?r.pathname.replace(C,""):r.pathname,x=O?k.split("/").filter(Boolean).slice(-1)[0]||o()(O[0],{lower:!0}):"";return Object(u.b)(b.a,{tabs:O,homepage:!1,theme:f,pageTitle:j,pageDescription:N,pageKeywords:w,titleType:m},Object(u.b)(d,{title:i?Object(u.b)(i,null):j,label:"label",tabs:O}),O&&Object(u.b)(v,{slug:k,tabs:O,currentTab:x}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(g.a,{pageContext:t,location:r,slug:k,tabs:O,currentTab:x}),Object(u.b)(c.a,null))}},o7gR:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={},o={_frontmatter:l},c=r.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,i({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#prepare-installation"}),"Prepare Installation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#begin-installation"}),"Begin Installation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#validate-installation"}),"Validate installation"))),Object(n.b)("h3",null,"Introduction"),Object(n.b)("p",null,"This page contains guidance on how to configure the App Connect Enterprise\n(ACE) on the Cloud Pak for Integration."),Object(n.b)("h3",null,"Prepare Installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Ensure you have followed all of the steps in the\n",Object(n.b)("a",i({parentName:"li"},{href:"../onprem-online"}),"onprem-online")," or\n",Object(n.b)("a",i({parentName:"li"},{href:"../onprem-offile"}),"onprem-offline")),Object(n.b)("li",{parentName:"ol"},"Ensure permissions are set in your ",Object(n.b)("inlineCode",{parentName:"li"},"ace")," namespace",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"oc adm policy add-scc-to-group ibm-anyuid-scc system:serviceaccounts:ace\noc adm policy add-scc-to-group anyuid system:serviceaccounts:ace\n")))),Object(n.b)("h3",null,"Begin Installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Go to CP4I Platform Home. Click ",Object(n.b)("strong",{parentName:"li"},"Create instance")," inside\nthe ",Object(n.b)("strong",{parentName:"li"},"App Connect")," tile.    "),Object(n.b)("li",{parentName:"ol"},"A window will pop up with a description of the requirements for\ninstalling. Click ",Object(n.b)("strong",{parentName:"li"},"Continue")," to the helm chart deployment\nconfiguration."),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"Overview")," to view the chart information and pre-reqs\nthat were covered in ",Object(n.b)("a",i({parentName:"li"},{href:"#prepare-installation"}),"Prepare Installation"),"."),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"Configure")),Object(n.b)("li",{parentName:"ol"},"Enter the Helm release name. In our example, ",Object(n.b)("strong",{parentName:"li"},"ace")),Object(n.b)("li",{parentName:"ol"},"Enter Target Namespace - ",Object(n.b)("strong",{parentName:"li"},"ace")),Object(n.b)("li",{parentName:"ol"},"Select a Cluster - ",Object(n.b)("strong",{parentName:"li"},"local-cluster"),"."),Object(n.b)("li",{parentName:"ol"},"Check the license agreement."),Object(n.b)("li",{parentName:"ol"},"Under Parameters -> Quick start",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Ingress - icp-proxy address defined during installation   "))),Object(n.b)("li",{parentName:"ol"},"Click All Parameters"),Object(n.b)("li",{parentName:"ol"},"Under Server Chart Repository - make sure it is set to the right one\nfor your install (local registry or IBM Entitled Registry)"),Object(n.b)("li",{parentName:"ol"},"Uncheck production usage"),Object(n.b)("li",{parentName:"ol"},"Name of the namespace that ICP4I is installed into - this is where\nyour Platform Navigator is installed"),Object(n.b)("li",{parentName:"ol"},"Image Pull Secret -> Set to ",Object(n.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," if using entitled\nregistry or if offline use the ",Object(n.b)("inlineCode",{parentName:"li"},"deployer-dockercfg-XX")," secret in your ace\nnamespace.  Use ",Object(n.b)("inlineCode",{parentName:"li"},"oc get secrets")," to get the exact value for your environment."),Object(n.b)("li",{parentName:"ol"},"Further down, find the section on Persistence. You can uncheck this or\nleave checked and refer to an existing pvc or storageclass.  Make sure you\nput the values in the appropriate spot.  If unsure of what is available,\nuse ",Object(n.b)("inlineCode",{parentName:"li"},"oc get sc")," or ",Object(n.b)("inlineCode",{parentName:"li"},"oc get pvc")," respectively. "),Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"NOTE"),": Leave the Persistent Volume Claim field blank. The HELM\nrelease will generate one for you. If you use an existing claim in use\nalready, your container(s) will not start up in the pod. In the storage\nclass field, enter a file based storage such as ",Object(n.b)("inlineCode",{parentName:"li"},"ibmc-file-gold"),"\nor ",Object(n.b)("inlineCode",{parentName:"li"},"ibmc-file-bronze.")," Note that App Connect requires File (not block)\nbased storage to work properly. "),Object(n.b)("li",{parentName:"ol"},"Click Install to complete.  Once the pods are up you can then deploy\nintegration .bar files.  See\n",Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSTTDS_11.0.0/com.ibm.ace.icp.doc/icp0015_.htm"}),"here"),"\nfor more info on this topic.")),Object(n.b)("h3",null,"Validate installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"View all pods running\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/deploy-integration/4.ace-pods.png",alt:null})))))}b.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-integration-deploy-integration-index-mdx-6addb8f06748004da408.js.map