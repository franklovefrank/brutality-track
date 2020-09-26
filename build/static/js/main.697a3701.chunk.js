(this.webpackJsonpvisualizer=this.webpackJsonpvisualizer||[]).push([[0],{26:function(e){e.exports=JSON.parse('[{"elementType":"geometry","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#746855"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#263c3f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#6b9a76"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#38414e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#212a37"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#9ca5b3"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#746855"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1f2835"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3d19c"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2f3948"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#17263c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#515c6d"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#17263c"}]}]')},29:function(e,t,a){e.exports=a(86)},34:function(e,t,a){},38:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(7),c=a.n(l),o=(a(34),a(35),a(3)),i=a(14),s={initialize:function(){return i.a.initialize("UA-169178928-1")},pageview:function(e){return i.a.pageview(e)},event:function(e,t,a){return i.a.event({category:e,action:t,label:a})}},u=a(10),m={dissipating:!1,radius:2};var d=function(e){var t=e.incidents.map((function(e){var t=e.geocoding;return new google.maps.LatLng(t.lat,t.long)}));return r.a.createElement(u.b,{data:t,options:m})},p=function(e,t){var a=Math.pow(e.lat-t.lat,2),n=Math.pow(e.long-t.long,2);return Math.sqrt(a+n)},f=function(e,t){for(var a=p(e,t[0].geocoding),n={name:t[0].city,distance:a,coordinate:t[0].geocoding},r=0;r<t.length;r+=1){var l=t[r].geocoding,c=p(e,l);c<n.distance&&(n.name=t[r].city,n.distance=c,n.coordinate=l)}return n},y=a(26),v=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useCallback)((function(){var e=localStorage.getItem("theme");return e||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}),[]),c=Object(n.useCallback)((function(e){document.documentElement.setAttribute("data-theme",e),function(e){localStorage.setItem("theme",e)}(e),r(e)}),[]);return Object(n.useEffect)((function(){var e=l();c(e)}),[l,c]),[a,c]},h=["visualization"],E=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GOOGLE_API_KEY||"AIzaSyCeHLAyDL5K80JrbJ0mvh-pV3CcpWYpqn0",b={flex:"1",height:"100vh"},g={restriction:{latLngBounds:{north:52,south:22,west:-136,east:-60}},mapTypeControl:!1,fullscreenControl:!1,streetViewControl:!1};var k=function(e){var t=e.incidents,a=e.onCityClick,n=v(),l=Object(o.a)(n,1)[0],c=r.a.useState(null),i=Object(o.a)(c,2),m=i[0],p=i[1],k=r.a.useCallback((function(e){p(e),e.setCenter({lat:38,lng:-98}),e.setZoom(5)}),[]);return r.a.createElement(u.c,{libraries:h,googleMapsApiKey:E},r.a.createElement(u.a,{mapContainerStyle:b,options:{options:g,styles:"dark"===l?y:null},onLoad:k,onClick:function(e){if(0!==t.length){var n=f({lat:e.latLng.lat(),long:e.latLng.lng()},t);s.event("Map","Clicked on a city",n.name),a(n.name),m.setZoom(7),m.panTo({lat:Number(n.coordinate.lat),lng:Number(n.coordinate.long)})}}},r.a.createElement(d,{incidents:t})))},w=a(28),T=a(5),O=a(15);a(38);function C(e){var t=e.defaultInput,a=e.onClear,n=e.onSearch,l=r.a.useState(t),c=Object(o.a)(l,2),i=c[0],u=c[1],m=function(e){s.event("Omnibox","Searched for term",i),n(i),e.preventDefault()};return r.a.createElement("div",{className:"omnibox"},r.a.createElement("form",{onSubmit:m},r.a.createElement(T.c,{className:"icon logo",onClick:function(){s.event("Omnibox","Logo clicked",i),window.open("https://github.com/police-brutality-2020/visualizer","police-brutality-2020")}}),r.a.createElement("input",{type:"text",value:i,placeholder:"Search Police Brutality",onFocus:function(e){return e.target.select()},onChange:function(e){return u(e.target.value)}}),r.a.createElement(O.b,{className:"icon",onClick:m}),r.a.createElement("div",{className:"divider"}),r.a.createElement(O.a,{className:"icon",onClick:function(){s.event("Omnibox","Cleared input"),a(),u("")}})))}C.defaultProps={defaultInput:"",onClear:function(){},onSearch:function(){}};var S=C,N=a(87),j=a(27),L=a.n(j),x=function(e){var t=new URL(e);try{return function(e){switch(e.hostname.match(/[^.]+\.\w+$/)[0]){case"cnn.com":case"cbslocal.com":case"denverpost.com":case"miamiherald.com":case"nytimes.com":case"theguardian.com":case"wapo.st":return[r.a.createElement(T.g,null),e.hostname];case"fbcdn.net":case"facebook.com":return[r.a.createElement(T.b,null),e.hostname];case"google.ca":case"google.com":return[r.a.createElement(T.d,null),e.hostname];case"instagram.com":return[r.a.createElement(T.e,null),e.hostname];case"redd.it":case"reddit.com":return[r.a.createElement(T.h,null),e.pathname.match(/r\/[^/]+/)[0]];case"tiktok.com":return[r.a.createElement(T.j,null),e.pathname.match(/@\w+/)[0]];case"twitter.com":return[r.a.createElement(T.i,null),"@".concat(e.pathname.match(/([^/]+)/)[1])];case"youtu.be":case"youtube.com":return[r.a.createElement(T.k,null),e.hostname];default:return[r.a.createElement(T.f,null),e.hostname]}}(t)}catch(a){return[r.a.createElement(T.f,null),t.hostname]}};a(58);var _=function(e){var t=e.type,a=e.date,n=e.description,l=e.videoUrl,c=e.linkUrl,i=e.thumbnailUrl,s=x(c),u=Object(o.a)(s,2)[1];return r.a.createElement("div",{className:"video"},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:i,alt:"thumbnail",onError:function(e){return e.target.remove()}}),r.a.createElement("div",{className:"source"},r.a.createElement("div",{className:"label"},u),r.a.createElement("div",{className:"type"},t," \u2022 ",Object(N.a)(new Date(a),"LLLL do, yyyy")))),r.a.createElement("p",null,n),r.a.createElement("video",{controls:!0,onError:function(e){return e.target.parentElement.remove()}},r.a.createElement("source",{type:"video/mp4",src:l}),r.a.createElement("track",{kind:"captions"})))};a(59);var D=function(e){var t=e.data.filter((function(e){return e.video[0]&&e.video[0].streams&&e.video[0].streams[0]})).map((function(e){var t=e.video[0],a=t.streams[0];return r.a.createElement(_,{key:e.id,type:t.site,date:t.created_at,description:t.description||t.title,linkUrl:t.url,videoUrl:a.url,thumbnailUrl:t.thumbnail})}));return r.a.createElement("div",{className:"evidence"},r.a.createElement("h4",null,"Evidence"),0===t.length?r.a.createElement("p",null,"Videos for this incident are not available yet. Visit the links above to learn more."):t)};a(60);function R(e){var t=e.urls.map((function(e){var t=x(e),a=Object(o.a)(t,2),n=a[0],l=a[1];return r.a.createElement("a",{key:e,href:e,target:"_blank",rel:"noopener noreferrer"},n,r.a.createElement("span",null,l))}));return r.a.createElement("div",{className:"links"},t)}R.defaultProps={urls:[]};var M=R,I=a(8),U=a.n(I),z=a(12),A=a(13),P=a.n(A),V=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(z.a)(U.a.mark((function t(){var a,n;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.get("https://api.846policebrutality.com/api/incidents/".concat(e,"?include=evidence"));case 2:a=t.sent,n=a.data,l(n.data[0]);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),r};a(79);var K=function(e){var t=e.id,a=e.hideResultDetail,n=v(),l=Object(o.a)(n,1)[0],c=V(t);return c?r.a.createElement("div",{className:"result-details"},r.a.createElement("div",{className:"header"},r.a.createElement(T.a,{onClick:a}),r.a.createElement("div",null,r.a.createElement("h3",null,c.title),r.a.createElement("p",null,c.city,", ",c.state," \u2022"," ",Object(N.a)(new Date(c.date),"LLLL do, yyyy")))),r.a.createElement("div",{className:"divider"}),r.a.createElement(M,{urls:c.links}),r.a.createElement("div",{className:"divider"}),r.a.createElement(D,{data:c.evidence})):r.a.createElement("div",{className:"results-details-loader"},r.a.createElement(L.a,{type:"TailSpin",color:"dark"===l?"#FFF":"#000",height:50,width:50,timeout:3e3}))};a(80);var W=function(e){var t=e.id,a=e.title,n=e.city,l=e.state,c=e.date,o=e.onResultClick,i=function(){s.event("SearchResult","Result clicked",a),o(t)};return r.a.createElement("div",{className:"search-result",role:"button",tabIndex:0,onClick:i,onKeyDown:i},r.a.createElement("h4",null,a),r.a.createElement("p",null,n,", ",l," \u2022 ",Object(N.a)(new Date(c),"LLLL do, yyyy")))};a(81);var B=function(e){var t=e.search,a=e.results,n=e.onResultClick,l=a.map((function(e){return r.a.createElement(W,{id:e.id,key:e.id,title:e.title,city:e.city,state:e.state,date:e.date,onResultClick:n})}));return 0===l.length?r.a.createElement("div",{className:"search-results empty"},r.a.createElement("h4",null,'No results for "',t,'"'),r.a.createElement("p",null,"Make sure your search is spelled correctly. Try searching for a city, state, or police department."),r.a.createElement("p",{className:"call-to-action"},"Think you've found a bug?"),r.a.createElement("a",{href:"https://github.com/police-brutality-2020/visualizer",target:"_blank",rel:"noopener noreferrer"},"Let us know on GitHub.")):r.a.createElement("div",{className:"search-results"},l)};a(82);var F=function(e){var t=e.search,a=e.results,n=e.isOpen,l=r.a.useState(null),c=Object(o.a)(l,2),i=c[0],s=c[1];return r.a.createElement("div",{className:"panel ".concat(n?"open":"")},r.a.createElement("div",{className:"omnibox-spacer"}),i?r.a.createElement(K,{hideResultDetail:function(){return s(!1)},id:i}):r.a.createElement(B,{search:t,results:a,onResultClick:s}))},J=new w.a([],{includeScore:!0,isCaseSensitive:!1,threshold:.3,keys:["city","state","title"]});var H=function(e){var t=e.incidents,a=e.mapValue,n=e.setMapValue,l=r.a.useState(""),c=Object(o.a)(l,2),i=c[0],s=c[1];r.a.useEffect((function(){s(a)}),[a]);var u=!!i;J.setCollection(t);var m=J.search(i).map((function(e){return e.item})).sort((function(e,t){return t.date.localeCompare(e.date)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{key:"omnibox-".concat(i),defaultInput:i,onClear:function(){s(""),n("")},onSearch:s}),r.a.createElement(F,{key:"panel-".concat(i),search:i,results:m,isOpen:u}))};a(83);var G=function(){return r.a.createElement("footer",null,r.a.createElement("a",{href:"https://github.com/franklovefrank/brutality-track"},"Source"))},q=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(z.a)(U.a.mark((function e(){var t,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.846policebrutality.com/api/incidents");case 2:t=e.sent,a=t.data,r(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a};a(84),a(85);var Y=function(){s.initialize(),s.pageview("/");var e=r.a.useState(""),t=Object(o.a)(e,2),a=t[0],n=t[1];v();var l=q();return l?r.a.createElement("div",{className:"app"},r.a.createElement(H,{incidents:l,mapValue:a,setMapValue:n}),r.a.createElement(k,{incidents:l,onCityClick:n}),r.a.createElement(G,null)):null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.697a3701.chunk.js.map