var instantClick,InstantClick=instantClick=function(e,t,n){var r,i,a,o,s,f,d,l=n.indexOf(" CriOS/")>-1,c={},u=!1,h=!1,v=!1,p=!1,m={},b=!1,g=!1,y=[],w={fetch:[],receive:[],wait:[],change:[],restore:[]};function L(e){var t=e.indexOf("#");return t<0?e:e.substr(0,t)}function T(e){for(;e&&"A"!=e.nodeName;)e=e.parentNode;return e}function E(e){var n=t.protocol+"//"+t.host;return!(e.target||e.hasAttribute("download")||0!=e.href.indexOf(n+"/")||e.href.indexOf("#")>-1&&L(e.href)==r||function(e){do{if(!e.hasAttribute)break;if(e.hasAttribute("data-instant"))return!1;if(e.hasAttribute("data-no-instant"))return!0}while(e=e.parentNode);return!1}(e))}function A(e,t,n,r){for(var i=!1,a=0;a<w[e].length;a++)if("receive"==e){var o=w[e][a](t,n,r);o&&("body"in o&&(n=o.body),"title"in o&&(r=o.title),i=o)}else w[e][a](t,n,r);return i}function C(t,n,i,a,o){if(e.documentElement.replaceChild(n,e.body),i){history.pushState(null,null,i);var s=i.indexOf("#"),f=s>-1&&e.getElementById(i.substr(s+1)),d=0;if(f)for(;f.offsetParent;)d+=f.offsetTop,f=f.offsetParent;scrollTo(0,d),r=L(i)}else scrollTo(0,a);l&&e.title==t?e.title=t+String.fromCharCode(160):e.title=t,N(),o?A("restore"):A("change",!1)}function x(){b=!1,g=!1}function D(e){if(!(o>+new Date-500)){var t=T(e.target);t&&E(t)&&B(t.href)}}function H(e){if(!(o>+new Date-500)){var t=T(e.target);t&&E(t)&&(t.addEventListener("mouseout",M),d?(i=t.href,a=setTimeout(B,d)):B(t.href))}}function O(e){o=+new Date;var t=T(e.target);t&&E(t)&&(f?t.removeEventListener("mousedown",D):t.removeEventListener("mouseover",H),B(t.href))}function Y(e){var t=T(e.target);t&&E(t)&&(e.which>1||e.metaKey||e.ctrlKey||(e.preventDefault(),I(t.href)))}function M(){if(a)return clearTimeout(a),void(a=!1);b&&!g&&(s.abort(),x())}function k(){if(!(s.readyState<4)&&0!=s.status){if(m.ready=+new Date-m.start,s.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){var t=e.implementation.createHTMLDocument("");t.documentElement.innerHTML=s.responseText.replace(/<noscript[\s\S]+?<\/noscript>/gi,""),h=t.title,p=t.body;var n=A("receive",u,p,h);n&&("body"in n&&(p=n.body),"title"in n&&(h=n.title));var r=L(u);c[r]={body:p,title:h,scrollY:r in c?c[r].scrollY:0};for(var i,a,o=t.head.children,f=0,d=0;d<o.length;d++)if((i=o[d]).hasAttribute("data-instant-track")){a=i.getAttribute("href")||i.getAttribute("src")||i.innerHTML;for(var l=0;l<y.length;l++)y[l]==a&&f++}f!=y.length&&(v=!0)}else v=!0;g&&(g=!1,I(u))}}function S(){var e=L(t.href);e!=r&&(e in c?(c[r].scrollY=pageYOffset,r=e,C(c[e].title,c[e].body,!1,c[e].scrollY,!0)):t.href=t.href)}function N(t){if(e.body.addEventListener("touchstart",O,!0),f?e.body.addEventListener("mousedown",D,!0):e.body.addEventListener("mouseover",H,!0),e.body.addEventListener("click",Y,!0),!t)for(var n,r,i,a,o=e.body.getElementsByTagName("script"),s=0,d=o.length;s<d;s++)(n=o[s]).hasAttribute("data-no-instant")||(r=e.createElement("script"),n.src&&(r.src=n.src),n.innerHTML&&(r.innerHTML=n.innerHTML),i=n.parentNode,a=n.nextSibling,i.removeChild(n),i.insertBefore(r,a))}function B(e){!f&&"display"in m&&+new Date-(m.start+m.display)<100||(a&&(clearTimeout(a),a=!1),e||(e=i),b&&(e==u||g)||(b=!0,g=!1,u=e,p=!1,v=!1,m={start:+new Date},A("fetch"),s.open("GET",e),s.send()))}function I(e){if("display"in m||(m.display=+new Date-m.start),a||!b)return a&&u&&u!=e?void(t.href=e):(B(e),A("wait"),void(g=!0));if(g)t.href=e;else if(v)t.href=u;else{if(!p)return A("wait"),void(g=!0);c[r].scrollY=pageYOffset,x(),C(h,p,u)}}var K="pushState"in history&&(!n.match("Android")||n.match("Chrome/"))&&"file:"!=t.protocol;return{supported:K,init:function(n){if(!r)if(K){"mousedown"==n?f=!0:"number"==typeof n&&(d=n),r=L(t.href),c[r]={body:e.body,title:e.title,scrollY:pageYOffset};for(var i,a,o=e.head.children,l=0;l<o.length;l++)(i=o[l]).hasAttribute("data-instant-track")&&(a=i.getAttribute("href")||i.getAttribute("src")||i.innerHTML,y.push(a));(s=new XMLHttpRequest).addEventListener("readystatechange",k),N(!0),A("change",!0),addEventListener("popstate",S)}else A("change",!0)},on:function(e,t){w[e].push(t)}}}(document,location,navigator.userAgent);