"use strict";(self.webpackChunkapi_ap=self.webpackChunkapi_ap||[]).push([[918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:14},o="Wikidata and other identifiers",l={unversionedId:"documentation/wikidata",id:"documentation/wikidata",title:"Wikidata and other identifiers",description:"Almost all the objects in our data are aligned with a wikidata id. It is the case for authors, keywords and cities. The wikidata id can be found in the field alternative_urns.",source:"@site/docs/documentation/wikidata.md",sourceDirName:"documentation",slug:"/documentation/wikidata",permalink:"/doc-API-AP/docs/documentation/wikidata",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Internal references",permalink:"/doc-API-AP/docs/documentation/internal-references"},next:{title:"Manuscript Annotation API",permalink:"/doc-API-AP/docs/documentation/manuscrit-annotation"}},s={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wikidata-and-other-identifiers"},"Wikidata and other identifiers"),(0,r.kt)("p",null,"Almost all the objects in our data are aligned with a wikidata id. It is the case for ",(0,r.kt)("inlineCode",{parentName:"p"},"authors"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keywords")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cities"),". The wikidata id can be found in the field ",(0,r.kt)("inlineCode",{parentName:"p"},"alternative_urns"),"."),(0,r.kt)("p",null,"Let us look for an author: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"meleager = requests.get('https://anthologiagraeca.org/api/authors/1').json()\n\nmeleager\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{'id': 1,\n 'url': 'https://anthologiagraeca.org/api/authors/1/',\n 'names': [{'name': 'Callimachus', 'language': 'eng'},\n  {'name': '\u039a\u03b1\u03bb\u03bb\u03af\u03bc\u03b1\u03c7\u03bf\u03c2', 'language': 'grc'},\n  {'name': 'Callimaque', 'language': 'fra'}],\n 'alternative_urns': ['https://www.wikidata.org/wiki/Q192417',\n  'http://data.perseus.org/catalog/urn:cts:greekLit:tlg0533'],\n 'city_born': {'url': 'https://anthologiagraeca.org/api/cities/1/',\n  'names': [{'name': 'Cyr\xe8ne', 'language': 'fra'},\n   {'name': 'Cirene', 'language': 'spa'},\n   {'name': 'Cirene', 'language': 'por'},\n   {'name': 'Cyrene', 'language': 'eng'},\n   {'name': 'Cyrene', 'language': 'lat'},\n   {'name': 'Cirene', 'language': 'ita'}],\n  'alternative_urns': ['https://anthologia.ecrituresnumeriques.ca/api/v1/cities/3',\n   'https://www.wikidata.org/wiki/Q44112',\n   'https://pleiades.stoa.org/places/373778'],\n  'unique_id': 3,\n  'longitude': '32.80799',\n  'latitude': '21.86616',\n  'descriptions': [],\n  'created_at': '2021-04-08T21:27:25.373000Z',\n  'updated_at': '2021-04-08T21:27:25.373000Z'},\n 'city_died': {'url': 'https://anthologiagraeca.org/api/cities/2/',\n  'names': [{'name': 'Alexandrie', 'language': 'fra'},\n   {'name': 'Alexandria', 'language': 'eng'},\n   {'name': '\u1f08\u03bb\u03b5\u03be\u03ac\u03bd\u03b4\u03c1\u03b5\u03b9\u03b1', 'language': 'grc'}],\n  'alternative_urns': ['https://anthologia.ecrituresnumeriques.ca/api/v1/cities/4',\n   'https://www.wikidata.org/wiki/Q87',\n   'https://pleiades.stoa.org/places/727070'],\n  'unique_id': 4,\n  'longitude': '31.20010',\n  'latitude': '29.91857',\n  'descriptions': [],\n  'created_at': '2021-04-08T21:27:25.384000Z',\n  'updated_at': '2021-04-08T21:27:25.384000Z'},\n 'born_range_year_date': None,\n 'died_range_year_date': None,\n 'unique_id': 1,\n 'created_at': '2021-04-08T21:27:25.392000Z',\n 'updated_at': '2021-04-08T21:27:25.392000Z',\n 'validation': 0,\n 'tlg_id': 'tlg-0533',\n 'main_name': 'Callimachus',\n 'descriptions': [],\n 'images': []}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"meleager['alternative_urns']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"['https://www.wikidata.org/wiki/Q192417',\n 'http://data.perseus.org/catalog/urn:cts:greekLit:tlg0533']\n")),(0,r.kt)("p",null,"Other identifiers can be found in alternative_urns: for exemple the TLG for authors (look above) and the pleiades id for places:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"Mytilene['alternative_urns']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"['https://www.wikidata.org/wiki/Q42295059',\n 'https://pleiades.stoa.org/places/550763']\n")))}p.isMDXComponent=!0}}]);