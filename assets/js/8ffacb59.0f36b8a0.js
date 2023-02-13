"use strict";(self.webpackChunkedrom=self.webpackChunkedrom||[]).push([[7955],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>f});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=r.createContext({}),l=function(e){var o=r.useContext(u),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},c=function(e){var o=l(e.components);return r.createElement(u.Provider,{value:o},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=n,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:o},c),{},{components:t})):r.createElement(f,i({ref:o},c))}));function f(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var u in o)hasOwnProperty.call(o,u)&&(s[u]=o[u]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5233:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),n=(t(7294),t(3905));const a={id:"comandos_visao",title:"Comandos utilizados pela vis\xe3o",description:"Aqui ser\xe3o explicados quais s\xe3o os comandos da vis\xe3o e suas fun\xe7\xf5es",slug:"/cmd_visao",sidebar_position:2},i=void 0,s={unversionedId:"vision/comandos_visao",id:"vision/comandos_visao",title:"Comandos utilizados pela vis\xe3o",description:"Aqui ser\xe3o explicados quais s\xe3o os comandos da vis\xe3o e suas fun\xe7\xf5es",source:"@site/docs/vision/comandos_visao.md",sourceDirName:"vision",slug:"/cmd_visao",permalink:"/edromufu/docs/cmd_visao",draft:!1,editUrl:"https://github.com/edromufu/edromufu/tree/master/edrom-docs/docs/vision/comandos_visao.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"comandos_visao",title:"Comandos utilizados pela vis\xe3o",description:"Aqui ser\xe3o explicados quais s\xe3o os comandos da vis\xe3o e suas fun\xe7\xf5es",slug:"/cmd_visao",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Resumo da \xe1rea vis\xe3o",permalink:"/edromufu/docs/resumo-visao"},next:{title:"Arquivos a serem alterados para treinar",permalink:"/edromufu/docs/train_visao"}},u={},l=[],c={toc:l},d="wrapper";function p(e){let{components:o,...t}=e;return(0,n.kt)(d,(0,r.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A vis\xe3o utiliza basicamente dois comandos que habilitam o seu funcionamento, sendo eles:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"roslaunch object_finder vision.launch\n")),(0,n.kt)("p",null,"Esse comando inicia todos os c\xf3digos da vis\xe3o, al\xe9m de poder receber alguns argumentos, sendo eles:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"camera")," : Recebe qual a c\xe2mera ser\xe1 utilizada (default 0)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"img_output")," : Recebe um booleano (true ou false) se ter\xe1 um retorno visual (default = false)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ajuste"),' : Recebe um booleano para entrar no modo de ajuste de brilho, onde ser\xe1 utilizado "=" para aumentar o brilho, "-" para diminuir e "w" para continuar detec\xe7\xe3o (default = false).'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"brilho")," : Recebe um valor entre -64 e 64 para o fator de brilho da c\xe2mera (default = 4)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"rosrun object_finder connecting_and_showing.py\n")),(0,n.kt)("p",null,"\xc9 o comando que roda o c\xf3digo do connecting and showing, que executa as fun\xe7\xf5es da vis\xe3o no geral"),(0,n.kt)("admonition",{title:"Como passar o argumento",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},'Utilizar o modelo "nome_argumento:=valor_desejado"')))}p.isMDXComponent=!0}}]);