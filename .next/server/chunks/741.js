"use strict";
exports.id = 741;
exports.ids = [741];
exports.modules = {

/***/ 7741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CallToAction)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/call-to-action.json
const call_to_action_namespaceObject = JSON.parse('{"TN":"Ready to work together?","WL":"You’re looking for a reliable construction partner or you’re looking to take the next step in your career, we want to hear from you!","BH":{"H":"/img/building-2.png","w":"image"},"LI":{"p":"/contact","P":"Build a Project"}}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/CallToAction.jsx



const CallToActionSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "cta-section",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "cta-data",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    children: call_to_action_namespaceObject.TN
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: call_to_action_namespaceObject.WL
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    href: call_to_action_namespaceObject.LI.p,
                                    className: "theme-btn",
                                    children: [
                                        call_to_action_namespaceObject.LI.P,
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fa-solid fa-angles-right"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "cta-data",
                            children: /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: call_to_action_namespaceObject.BH.H,
                                    alt: call_to_action_namespaceObject.BH.w
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const CallToAction = (CallToActionSection);


/***/ })

};
;