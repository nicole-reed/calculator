(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(e,t,a){},,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_nickr_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Buttons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_App_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_App_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState2=Object(C_Users_nickr_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),result=_useState2[0],setResult=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(C_Users_nickr_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),input=_useState4[0],setInput=_useState4[1],clearResult=function(){setResult("0"),setInput("")},evaluateInput=function evaluateInput(){try{var evaluatedInput=eval(input);setResult(evaluatedInput)}catch(error){setResult("error")}setInput("")},addToInput=function(e){console.log(e);var t=/[\/\*\+\-]/g;if(0===input.length&&e.match(t))return setInput(result+e);var a=input.split(t),_=a[a.length-1];if(console.log(a),console.log(_),-1===_.indexOf(".")||"."!==e){var n=input[input.length-1];if(isNaN(parseInt(n))&&isNaN(parseInt(e))&&"-"!==e&&"."!==e){var u=input.slice(0,-1)+e;return setInput(u)}if(1===input.length&&"0"===input[0]&&!isNaN(parseInt(e)))return setInput(e);if("\u2190"===e){var r=input.slice(0,-1);return setInput(r)}return setInput(input+e)}};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",null,"Calculation Station"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__.a,{addToInput:addToInput,clearResult:clearResult,evaluateInput:evaluateInput}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{id:"input"}," ",input),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{id:"display"},result)))}__webpack_exports__.a=App},function(e,t,a){"use strict";var _=a(0),n=a.n(_);var u=function(e){return n.a.createElement("button",{id:e.id,className:e.className,onClick:function(){"C"===e.value?e.clearResult():"="===e.value?e.evaluateInput():e.addToInput(e.value)}},e.value)};a(3),t.a=function(e){return n.a.createElement("div",{id:"buttons",className:"gridContainer"},n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"one",value:"1",input:!0}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"two",value:"2"}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"three",value:"3"}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"add",value:"+"}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"four",value:"4"}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"five",value:"5"}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"six",value:"6"}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"subtract",value:"-"}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"seven",value:"7"}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"eight",value:"8"}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"nine",value:"9"}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"multiply",value:"*"}),n.a.createElement(u,{clearResult:e.clearResult,className:"gridItem",id:"clear",value:"C"}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"zero",value:"0"}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"decimal",value:"."}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"divide",value:"/"}),n.a.createElement(u,{evaluateInput:e.evaluateInput,className:"gridItem",id:"equals",value:"="}),n.a.createElement(u,{addToInput:e.addToInput,className:"gridItem",id:"delete",value:"\u2190"}))}},function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var _=a(0),n=a.n(_),u=a(4),r=a.n(u),l=(a(12),a(5));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(l.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5c2b51a5.chunk.js.map