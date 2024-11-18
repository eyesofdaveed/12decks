"use strict";
exports.id = 424;
exports.ids = [424];
exports.modules = {

/***/ 4424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/about.json
const about_namespaceObject = JSON.parse('{"wp":{"H":"/img/12decksAbout1.jpg","w":"Fence Installation & Repair Services in Seattle, WA"},"Lx":{"H":"/img/12decksAbout2.jpg","w":"Deck Installation & Repair Services in Seattle, WA"},"TN":"Proudly Serving Greater Seattle Area","Oc":"DECKING & FENCING Services","fL":"Our company was founded with a singular mission: to deliver the most efficient and environmentally sustainable construction services in the Greater Seattle Area. We specialize in constructing decks and fences using both wood and composite materials. In addition to our core services, we also assist with design, material selection, project planning, and the disposal of old materials, ensuring a seamless and eco-friendly experience from start to finish."}');
;// CONCATENATED MODULE: ./src/components/sections/About.jsx


const AboutSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "gap no-top about-style-one",
        id: "about",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "about-data-left",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: about_namespaceObject.wp.H,
                                        alt: about_namespaceObject.wp.w
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                    className: "about-image",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: about_namespaceObject.Lx.H,
                                        alt: about_namespaceObject.Lx.w
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "about-data-right",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: about_namespaceObject.Oc
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    children: about_namespaceObject.TN
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "about-info",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: about_namespaceObject.fL
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const About = (AboutSection);


/***/ })

};
;