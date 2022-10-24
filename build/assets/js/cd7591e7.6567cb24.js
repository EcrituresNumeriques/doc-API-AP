"use strict";(self.webpackChunkapi_ap=self.webpackChunkapi_ap||[]).push([[2168],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>p});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):g(g({},a),e)),n},u=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,d=m["".concat(l,".").concat(p)]||m[p]||c[p]||o;return n?t.createElement(d,g(g({ref:a},u),{},{components:n})):t.createElement(d,g({ref:a},u))}));function p(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,g=new Array(o);g[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,g[1]=i;for(var s=2;s<o;s++)g[s]=n[s];return t.createElement.apply(null,g)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},865:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>g,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=n(7462),r=(n(7294),n(3905));const o={sidebar_position:8},g="Keywords",i={unversionedId:"documentation/keywords",id:"documentation/keywords",title:"Keywords",description:"Each epigram can be associated with keywords.",source:"@site/docs/documentation/keywords.md",sourceDirName:"documentation",slug:"/documentation/keywords",permalink:"https://rochdly.github.io/doc-API-AP/docs/documentation/keywords",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Authors",permalink:"https://rochdly.github.io/doc-API-AP/docs/documentation/authors"},next:{title:"Cities (places)",permalink:"https://rochdly.github.io/doc-API-AP/docs/documentation/cities"}},l={},s=[],u={toc:s};function c(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keywords"},"Keywords"),(0,r.kt)("p",null,"Each epigram can be associated with keywords."),(0,r.kt)("p",null,"One can have more information about a keyword on its own endpoint, structured as follow :"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://anthologiagraeca.org/api/keywords/"),"+keyword_id"),(0,r.kt)("p",null,"(the keyword id can be found here at the end of its URL on the platform, ",(0,r.kt)("em",{parentName:"p"},"e.g.")," ",(0,r.kt)("a",{parentName:"p",href:"https://anthologiagraeca.org/keywords/1/"},"https://anthologiagraeca.org/keywords/1/"),' is the URL for the keyword "Elegiac couplet" ; the id is "1").'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"ep6_13['keywords']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[{'url': 'https://anthologiagraeca.org/api/keywords/1/',\n  'names': [{'name': 'distique \xe9l\xe9giaque', 'language': 'fra'},\n   {'name': 'distico elegiaco', 'language': 'ita'},\n   {'name': 'Elegiac couplet', 'language': 'eng'}],\n  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/1/',\n   'names': [{'name': 'Formes m\xe9triques', 'language': 'fra'},\n    {'name': 'Metric forms', 'language': 'eng'},\n    {'name': 'Metra', 'language': 'lat'},\n    {'name': 'Forme metriche', 'language': 'ita'},\n    {'name': 'Formas m\xe9tricas', 'language': 'por'}]}},\n {'url': 'https://anthologiagraeca.org/api/keywords/4/',\n  'names': [{'name': '\xe9poque hell\xe9nistique', 'language': 'fra'},\n   {'name': 'epoca ellenistica', 'language': 'ita'},\n   {'name': 'hellenistic period', 'language': 'eng'}],\n  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/4/',\n   'names': [{'name': '\xc9poques', 'language': 'fra'},\n    {'name': 'Periods', 'language': 'eng'},\n    {'name': 'Tempora', 'language': 'lat'},\n    {'name': 'Periodi', 'language': 'ita'},\n    {'name': '\xc9pocas', 'language': 'por'}]}},\n {'url': 'https://anthologiagraeca.org/api/keywords/73/',\n  'names': [{'name': 'Valid\xe9 par William', 'language': 'fra'}],\n  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/11/',\n   'names': [{'name': 'Validation', 'language': 'fra'},\n    {'name': 'Validation', 'language': 'eng'},\n    {'name': 'Contralectus', 'language': 'lat'},\n    {'name': 'Validazione', 'language': 'ita'},\n    {'name': 'Valida\xe7\xe3o', 'language': 'por'}]}},\n {'url': 'https://anthologiagraeca.org/api/keywords/186/',\n  'names': [{'name': 'dedicatory', 'language': 'eng'},\n   {'name': 'votif (anath\xe9matique)', 'language': 'fra'}],\n  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/3/',\n   'names': [{'name': 'Genres', 'language': 'fra'},\n    {'name': 'Genres', 'language': 'eng'},\n    {'name': 'Genera', 'language': 'lat'},\n    {'name': 'Generi', 'language': 'ita'},\n    {'name': 'G\xeaneros', 'language': 'por'}]}},\n {'url': 'https://anthologiagraeca.org/api/keywords/234/',\n  'names': [{'name': 'Damis', 'language': 'eng'}],\n  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/9/',\n   'names': [{'name': 'Personnes cit\xe9es', 'language': 'fra'},\n    {'name': 'Quoted persons', 'language': 'eng'},\n    {'name': 'Homines memorati', 'language': 'lat'},\n    {'name': 'Persone citate', 'language': 'ita'},\n    {'name': 'Pessoas citadas', 'language': 'por'}]}},\n {'url': 'https://anthologiagraeca.org/api/keywords/270/',\n  'names': [{'name': 'Chasse', 'language': 'fra'}],\n  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/10/',\n   'names': [{'name': 'Motifs', 'language': 'fra'},\n    {'name': 'Motifs', 'language': 'eng'},\n    {'name': 'Themata', 'language': 'lat'},\n    {'name': 'Motivi', 'language': 'ita'},\n    {'name': 'Motivos', 'language': 'por'}]}},\n {'url': 'https://anthologiagraeca.org/api/keywords/492/',\n  'names': [{'name': 'Pan', 'language': 'eng'}],\n  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/7/',\n   'names': [{'name': 'Divinit\xe9s', 'language': 'fra'},\n    {'name': 'Deities', 'language': 'eng'},\n    {'name': 'Divinitates', 'language': 'lat'},\n    {'name': 'Divinit\xe0', 'language': 'ita'},\n    {'name': 'Divindades', 'language': 'por'}]}},\n {'url': 'https://anthologiagraeca.org/api/keywords/574/',\n  'names': [{'name': '\u03a0\u03af\u03b3\u03c1\u03b7\u03c2', 'language': 'grc'},\n   {'name': 'Pigr\xe8s', 'language': 'fra'}],\n  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/9/',\n   'names': [{'name': 'Personnes cit\xe9es', 'language': 'fra'},\n    {'name': 'Quoted persons', 'language': 'eng'},\n    {'name': 'Homines memorati', 'language': 'lat'},\n    {'name': 'Persone citate', 'language': 'ita'},\n    {'name': 'Pessoas citadas', 'language': 'por'}]}},\n {'url': 'https://anthologiagraeca.org/api/keywords/575/',\n  'names': [{'name': '\u039a\u03bb\u03b5\u03af\u03c4\u03c9\u03c1', 'language': 'grc'},\n   {'name': 'Cl\xe9itor', 'language': 'fra'}],\n  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/9/',\n   'names': [{'name': 'Personnes cit\xe9es', 'language': 'fra'},\n    {'name': 'Quoted persons', 'language': 'eng'},\n    {'name': 'Homines memorati', 'language': 'lat'},\n    {'name': 'Persone citate', 'language': 'ita'},\n    {'name': 'Pessoas citadas', 'language': 'por'}]}}]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'keyword_1 = requests.get("https://anthologiagraeca.org/api/keywords/1/").json()\n\nkeyword_1\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{'id': 1,\n 'url': 'https://anthologiagraeca.org/api/keywords/1/',\n 'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/1/',\n  'names': [{'name': 'Formes m\xe9triques', 'language': 'fra'},\n   {'name': 'Metric forms', 'language': 'eng'},\n   {'name': 'Metra', 'language': 'lat'},\n   {'name': 'Forme metriche', 'language': 'ita'},\n   {'name': 'Formas m\xe9tricas', 'language': 'por'}]},\n 'names': [{'name': 'distique \xe9l\xe9giaque', 'language': 'fra'},\n  {'name': 'distico elegiaco', 'language': 'ita'},\n  {'name': 'Elegiac couplet', 'language': 'eng'}],\n 'alternative_urns': [{'urn': 'https://www.wikidata.org/wiki/Q2082412'}]}\n")),(0,r.kt)("p",null,"keywords are organized in ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," and each keyword ",(0,r.kt)("em",{parentName:"p"},"must")," belong to a category."),(0,r.kt)("p",null,"The list of the categories is here: ",(0,r.kt)("a",{parentName:"p",href:"https://anthologiagraeca.org/api/keyword_categories/"},"https://anthologiagraeca.org/api/keyword_categories/")))}c.isMDXComponent=!0}}]);