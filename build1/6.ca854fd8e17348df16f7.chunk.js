webpackJsonp([6,10],{652:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(3),l=i&&i.__esModule?function(){return i["default"]}:function(){return i};n.d(l,"a",l);var u=n(63),c=u&&u.__esModule?function(){return u["default"]}:function(){return u};n.d(c,"a",c);var f=n(665),s=n(660),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),b(t,[{key:"render",value:function(){return p("div",{},void 0,l.a.createElement(s.a,d({},f.a.header,{href:"/manager/dashboard"}),l.a.createElement(u.FormattedMessage,f.a.dashboard)),l.a.createElement(s.a,d({},f.a.header,{href:"/manager/log"}),l.a.createElement(u.FormattedMessage,f.a.log)),l.a.createElement(u.FormattedMessage,f.a.header))}}]),t}(l.a.Component);t["default"]=h},660:function(e,t,n){"use strict";function r(e){var t=e.className?e.className:l.a.button;t=e.isAlternate?l.a.buttonAlt:t;var n=u("a",{className:t,href:e.href,onClick:e.onClick},void 0,e.children);return e.handleRoute&&(n=u("button",{className:t,onClick:e.handleRoute},void 0,e.children)),u("div",{className:l.a.buttonWrapper},void 0,n)}var o=n(3),a=o&&o.__esModule?function(){return o["default"]}:function(){return o};n.d(a,"a",a);var i=n(662),l=i&&i.__esModule?function(){return i["default"]}:function(){return i};n.d(l,"a",l);var u=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}();t.a=r},661:function(e,t,n){t=e.exports=n(259)(),t.push([e.i,"._3AL16C_jv8gSToCY_UbGNb{width:100%;text-align:center;margin:4em 0}._1JpqSzenOu7lIN49iqpjYS{display:inline-block;box-sizing:border-box;padding:.25em 2em;margin:0;border:0;text-decoration:none;border-radius:4px;-webkit-font-smoothing:antialiased;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;font-size:16px;border:2px solid #41addd;color:#41addd;padding:1.5em 2em;width:100%;height:auto;color:#fff;border:2px solid #fff}._1JRTzni844Fpqlg5kw_tM8{color:#27ae60;background-color:#fff;border:2px solid #fff}._1JpqSzenOu7lIN49iqpjYS:active{background:#41addd;color:#fff}",""]),t.locals={buttonWrapper:"_3AL16C_jv8gSToCY_UbGNb",button:"_1JpqSzenOu7lIN49iqpjYS",buttonAlt:"_1JRTzni844Fpqlg5kw_tM8 _1JpqSzenOu7lIN49iqpjYS"}},662:function(e,t,n){var r=n(661);"string"==typeof r&&(r=[[e.i,r,""]]),n(260)(r,{}),r.locals&&(e.exports=r.locals)},665:function(e,t,n){"use strict";var r=n(63),o=r&&r.__esModule?function(){return r["default"]}:function(){return r};n.d(o,"a",o),t.a=n.i(r.defineMessages)({header:{id:"app.components.HomePage.manager.instruction",defaultMessage:"Please proceed only if you are authorized. Otherwise ,please be cautioned that we can prosecute you under 113 Security Data Act"},dashboard:{id:"app.components.HomePage.dashboard",defaultMessage:"Dashboard"},log:{id:"app.components.HomePage.log",defaultMessage:"Log"}})}});