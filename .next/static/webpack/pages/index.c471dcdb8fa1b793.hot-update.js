"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"postReq\": function() { return /* binding */ postReq; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/index.js */ \"./src/index.js\");\nvar _jsxFileName = \"/Users/avishah/Desktop/assignform/pages/index.js\";\n\n\n\nconst HomePage = ({\n  data\n}) => {\n  console.log({\n    data\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_1__.App, {\n    data: data,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 10\n    }\n  });\n}; //https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1/register\n\n\n_c = HomePage;\n// main.js\n// POST request using fetch()\nvar __N_SSP = true;\nfunction postReq() {\n  return fetch('https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1/register', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({// \"firstName\": \"string\",\n      // \"middleName\": \"string\",\n      // \"lastName\": \"string\",\n      // \"email\": \"asda@gmail.com\",\n      // \"contactNumber\":1643865794,\n      // \"dateOfBirth\": \"string\",\n      // \"gender\": \"string\",\n      // \"tenthPercentage\": 0,\n      // \"twelfthPercentage\": 0,\n      // \"educationType\": \"string\",\n      // \"degree\": \"string\",\n      // \"collegeName\": \"string\",\n      // \"registerNumber\": \"string\",\n      // \"branch\": \"string\",\n      // \"backlogs\": \"no\"\n    })\n  }).then(data => data.json());\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1FLFFBQVEsR0FBRyxDQUFFO0VBQUNDO0FBQUQsQ0FBRixLQUFjO0VBQzNCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWTtJQUFDRjtFQUFELENBQVo7RUFDRixvQkFBTywyREFBQyw4Q0FBRDtJQUFLLElBQUksRUFBRUEsSUFBWDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQVA7QUFDRCxDQUhELEVBS0E7OztLQUxNRDtBQTZCTjtBQUVBOztBQUdPLFNBQVNJLE9BQVQsR0FBbUI7RUFDekIsT0FBT0MsS0FBSyxDQUFDLHdFQUFELEVBQTJFO0lBQ3JGQyxNQUFNLEVBQUUsTUFENkU7SUFFckZDLE9BQU8sRUFBRTtNQUNQLGdCQUFnQjtJQURULENBRjRFO0lBS3JGQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLENBQ3BCO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQWZvQixDQUFmO0VBTCtFLENBQTNFLENBQUwsQ0F1QkpDLElBdkJJLENBdUJDVixJQUFJLElBQUlBLElBQUksQ0FBQ1csSUFBTCxFQXZCVCxDQUFQO0FBd0JBO0FBR0QsK0RBQWVaLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi4vc3JjL2luZGV4LmpzXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCB7ZGF0YX0gKSA9PiB7XG4gICAgY29uc29sZS5sb2coe2RhdGF9KVxuICByZXR1cm4gPEFwcCBkYXRhPXtkYXRhfS8+O1xufTtcblxuLy9odHRwczovLzB1dnc5Z2N4cTIuZXhlY3V0ZS1hcGkuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL3FhL3YxL3JlZ2lzdGVyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXG4gIGxldCBkYXRhMSA9IFt7ZGlzcGxheVRleHQ6ICdTb2VtdGhpbmcnLCB2YWx1ZTogJ3NvbWV0aGluZyd9XVxuICBsZXQgZGF0YTIgPSBbe2Rpc3BsYXlUZXh0OiAnU29lbXRoaW5nJywgdmFsdWU6ICdzb21ldGhpbmcnfV1cbiAgbGV0IGRhdGEzPVt7ZGlzcGxheVRleHQ6ICdTb2VtdGhpbmcnLCB2YWx1ZTogJ3NvbWV0aGluZyd9XVxuICBsZXQgZGF0YT1bZGF0YTEsZGF0YTIsZGF0YTNdXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzMSA9IGF3YWl0IGZldGNoKGBodHRwczovLzB1dnc5Z2N4cTIuZXhlY3V0ZS1hcGkuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL3FhL3YxL2RlZ3JlZT9lZHVjYXRpb249dWdgKTtcbiAgICBkYXRhMSA9IGF3YWl0IHJlczEuanNvbigpO1xuICAgIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly8wdXZ3OWdjeHEyLmV4ZWN1dGUtYXBpLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9xYS92MS9icmFuY2g/ZGVncmVlPWJlYCk7XG4gICAgZGF0YTIgPSBhd2FpdCByZXMyLmpzb24oKTtcbiAgICBjb25zdCByZXMzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vMHV2dzlnY3hxMi5leGVjdXRlLWFwaS5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vcWEvdjEvZWR1Y2F0aW9uP3JvbGU9c29mdHdhcmVkZXZlbG9wZXJgKTtcbiAgICBkYXRhMyA9IGF3YWl0IHJlczMuanNvbigpO1xuICAgIGRhdGE9W2RhdGExLGRhdGEyLGRhdGEzXVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIFxuICB9XG4gXG4gY29uc29sZS5sb2coe2RhdGF9KVxuXG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9IH07XG59XG4vLyBtYWluLmpzXG5cbi8vIFBPU1QgcmVxdWVzdCB1c2luZyBmZXRjaCgpXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RSZXEoKSB7XG4gcmV0dXJuIGZldGNoKCdodHRwczovLzB1dnc5Z2N4cTIuZXhlY3V0ZS1hcGkuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL3FhL3YxL3JlZ2lzdGVyJywge1xuICAgbWV0aG9kOiAnUE9TVCcsXG4gICBoZWFkZXJzOiB7XG4gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgIH0sXG4gICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgLy8gXCJmaXJzdE5hbWVcIjogXCJzdHJpbmdcIixcbiAgICAvLyBcIm1pZGRsZU5hbWVcIjogXCJzdHJpbmdcIixcbiAgICAvLyBcImxhc3ROYW1lXCI6IFwic3RyaW5nXCIsXG4gICAgLy8gXCJlbWFpbFwiOiBcImFzZGFAZ21haWwuY29tXCIsXG4gICAgLy8gXCJjb250YWN0TnVtYmVyXCI6MTY0Mzg2NTc5NCxcbiAgICAvLyBcImRhdGVPZkJpcnRoXCI6IFwic3RyaW5nXCIsXG4gICAgLy8gXCJnZW5kZXJcIjogXCJzdHJpbmdcIixcbiAgICAvLyBcInRlbnRoUGVyY2VudGFnZVwiOiAwLFxuICAgIC8vIFwidHdlbGZ0aFBlcmNlbnRhZ2VcIjogMCxcbiAgICAvLyBcImVkdWNhdGlvblR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAvLyBcImRlZ3JlZVwiOiBcInN0cmluZ1wiLFxuICAgIC8vIFwiY29sbGVnZU5hbWVcIjogXCJzdHJpbmdcIixcbiAgICAvLyBcInJlZ2lzdGVyTnVtYmVyXCI6IFwic3RyaW5nXCIsXG4gICAgLy8gXCJicmFuY2hcIjogXCJzdHJpbmdcIixcbiAgICAvLyBcImJhY2tsb2dzXCI6IFwibm9cIlxuICB9KVxuIH0pXG4gICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwIiwiSG9tZVBhZ2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInBvc3RSZXEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});