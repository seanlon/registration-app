webpackJsonp([8,11],{662:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{changeRoute:function(t){return e(n.i(d.push)(t))}}}var i=n(2),l=i&&i.__esModule?function(){return i["default"]}:function(){return i};n.d(l,"a",l);var c=n(63),f=c&&c.__esModule?function(){return c["default"]}:function(){return c};n.d(f,"a",f);var s=n(84),p=s&&s.__esModule?function(){return s["default"]}:function(){return s};n.d(p,"a",p);var d=n(85),g=d&&d.__esModule?function(){return d["default"]}:function(){return d};n.d(g,"a",g);var h=n(793),y=n(261),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},m=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,u=arguments.length-3;if(n||0===u||(n={}),n&&a)for(var i in a)void 0===n[i]&&(n[i]=a[i]);else n||(n=a||{});if(1===u)n.children=r;else if(u>1){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),_=function(e){function t(){var e,n,a,u;o(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=a=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.openLoginPage=function(){a.props.changeRoute("/visitor/login")},a.openLogoutPage=function(){a.props.changeRoute("/visitor/logout")},u=n,r(a,u)}return a(t,e),b(t,[{key:"render",value:function(){return m("div",{},void 0,l.a.createElement(y.a,v({},h.a.header,{handleRoute:this.openLoginPage}),l.a.createElement(c.FormattedMessage,h.a.login)),l.a.createElement(y.a,v({},h.a.header,{handleRoute:this.openLogoutPage}),l.a.createElement(c.FormattedMessage,h.a.logout)),l.a.createElement(c.FormattedMessage,h.a.header))}}]),t}(l.a.Component);t["default"]=_,t["default"]=n.i(s.connect)(null,u)(_)},793:function(e,t,n){"use strict";var o=n(63),r=o&&o.__esModule?function(){return o["default"]}:function(){return o};n.d(r,"a",r),t.a=n.i(o.defineMessages)({header:{id:"app.components.HomePage.visitor.instruction",defaultMessage:"If you are entering the premise, please sign-in. If you are leaving please sign out."},login:{id:"app.components.HomePage.login",defaultMessage:"Check in"},logout:{id:"app.components.HomePage.logout",defaultMessage:"Sign Out"}})}});