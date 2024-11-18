exports.id = 938;
exports.ids = [938];
exports.modules = {

/***/ 5081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/services.json
const services_namespaceObject = JSON.parse('{"e":[{"icon":{"light":"/images/12decksServices1.png"},"title":"Fencing","text":"A fence is a structure that encloses an area or the property, typically outdoors, and is usually constructed from posts that are connected by boards and rails. A fence differs from a wall in not having a solid foundation along its whole length, but only at posts.","link":"/services/service-1"},{"icon":{"light":"/images/12decksServices2.png"},"title":"Decking","text":"A deck is a flat platform capable of supporting heavy weights, similar to a floor, but typically constructed outdoors, often built above the ground level, and usually connected to a building. The term is a generalization of decks as found on ships.","link":"/services/service-2"},{"icon":{"light":"/images/12decksServices3.png"},"title":"Quality Materials","text":"Whether you want to build a deck on your yard or want to add privacy to your property with a fence you first need to determine your type, length, and colors of your materials. Our focus is to ensure providing critical details for a customer to make an informed decision.","link":"/services/service-3"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Services.jsx



const ServicesSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "gap service-style-one",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row",
                children: services_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-4 col-md-6 col-sm-12 text-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "service-data",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "svg-icon d-flex-all",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: "light-icon",
                                            src: item.icon.light,
                                            alt: item.icon.alt
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: "dark-icon",
                                            src: item.icon.dark,
                                            alt: item.icon.alt
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: item.link,
                                        children: item.title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: item.text
                                })
                            ]
                        })
                    }, `services-item-${key}`))
            })
        })
    });
};
/* harmony default export */ const Services = (ServicesSection);


/***/ }),

/***/ 1352:
/***/ (() => {



/***/ })

};
;