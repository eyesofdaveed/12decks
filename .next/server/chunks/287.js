"use strict";
exports.id = 287;
exports.ids = [287];
exports.modules = {

/***/ 2287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Counters)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/counters.json
const counters_namespaceObject = JSON.parse('{"e":[{"value":"8","label":"Years","plus":true,"title":"Field Experience"},{"value":"300","label":"Completed Projects","plus":false,"title":"Satisfied Clients"},{"value":"77","label":"Locations","plus":false,"title":"Serving Greater Seattle Area"}]}');
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./src/components/sections/Counters.jsx



const CountersSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "gap no-top counter-style-one",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row",
                children: counters_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-4 col-md-6 col-sm-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: key % 2 != 0 ? "counter-data upper-space" : "counter-data",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "count",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "counter",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((external_react_countup_default()), {
                                                end: item.value,
                                                duration: 7,
                                                enableScrollSpy: true,
                                                scrollSpyOnce: true
                                            })
                                        }),
                                        item.plus == true && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                            children: "+"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            children: item.label
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    children: item.title
                                })
                            ]
                        })
                    }, `counters-item-${key}`))
            })
        })
    });
};
/* harmony default export */ const Counters = (CountersSection);


/***/ })

};
;