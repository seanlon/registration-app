webpackJsonp([4,10],{653:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(3),l=i&&i.__esModule?function(){return i["default"]}:function(){return i};n.d(l,"a",l);var u=n(63),f=u&&u.__esModule?function(){return u["default"]}:function(){return u};n.d(f,"a",f);var c=n(666),s=n(659),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var u=Array(i),f=0;f<i;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),g=function(e){function t(){return o(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),b(t,[{key:"render",value:function(){return p("div",{},void 0,l.a.createElement(s.a,d({},c.a.header,{href:"/visitor/login"}),l.a.createElement(u.FormattedMessage,c.a.login)),l.a.createElement(s.a,d({},c.a.header,{href:"/visitor/logout"}),l.a.createElement(u.FormattedMessage,c.a.logout)),l.a.createElement(u.FormattedMessage,c.a.header))}}]),t}(l.a.Component);t["default"]=g},659:function(e,t,n){"use strict";function o(e){var t=e.className?e.className:l.a.button;t=e.isAlternate?l.a.buttonAlt:t;var n=u("a",{className:t,href:e.href,onClick:e.onClick},void 0,e.children);return e.handleRoute&&(n=u("button",{className:t,onClick:e.handleRoute},void 0,e.children)),u("div",{className:l.a.buttonWrapper},void 0,n)}var r=n(3),a=r&&r.__esModule?function(){return r["default"]}:function(){return r};n.d(a,"a",a);var i=n(661),l=i&&i.__esModule?function(){return i["default"]}:function(){return i};n.d(l,"a",l);var u=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var u=Array(i),f=0;f<i;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();t.a=o},660:function(e,t,n){t=e.exports=n(259)(),t.push([e.i,"._3AL16C_jv8gSToCY_UbGNb{width:100%;text-align:center;margin:4em 0}._1JpqSzenOu7lIN49iqpjYS{display:inline-block;box-sizing:border-box;padding:.25em 2em;margin:0;border:0;text-decoration:none;border-radius:4px;-webkit-font-smoothing:antialiased;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;font-size:16px;border:2px solid #41addd;color:#41addd;padding:1.5em 2em;width:100%;height:auto;color:#fff;border:2px solid #fff}._1JRTzni844Fpqlg5kw_tM8{color:#27ae60;background-color:#fff;border:2px solid #fff}._1JpqSzenOu7lIN49iqpjYS:active{background:#41addd;color:#fff}",""]),t.locals={buttonWrapper:"_3AL16C_jv8gSToCY_UbGNb",button:"_1JpqSzenOu7lIN49iqpjYS",buttonAlt:"_1JRTzni844Fpqlg5kw_tM8 _1JpqSzenOu7lIN49iqpjYS"}},661:function(e,t,n){var o=n(660);"string"==typeof o&&(o=[[e.i,o,""]]),n(260)(o,{}),o.locals&&(e.exports=o.locals)},666:function(e,t,n){"use strict";var o=n(63),r=o&&o.__esModule?function(){return o["default"]}:function(){return o};n.d(r,"a",r),t.a=n.i(o.defineMessages)({header:{id:"app.components.HomePage.visitor.instruction",defaultMessage:"If you are entering the premise, please sign-in. If you are leaving please sign out."},login:{id:"app.components.HomePage.login",defaultMessage:"Check in"},logout:{id:"app.components.HomePage.logout",defaultMessage:"Sign Out"}})}});