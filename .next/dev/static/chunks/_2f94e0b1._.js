(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-speech-recognition/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Dictaphone = ({ appendToMessage })=>{
    _s();
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpeechRecognition"])();
    // Keep track of what has already been appended
    const lastTranscriptRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dictaphone.useEffect": ()=>{
            const newSpeech = transcript.replace(lastTranscriptRef.current, "");
            if (newSpeech) {
                appendToMessage({
                    "Dictaphone.useEffect": (prev)=>prev + newSpeech
                }["Dictaphone.useEffect"]); // append new speech only
                lastTranscriptRef.current = transcript;
            }
        }
    }["Dictaphone.useEffect"], [
        transcript,
        appendToMessage
    ]);
    if (!browserSupportsSpeechRecognition) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 rounded-2xl bg-gray-800/50 border border-gray-700 text-white text-center w-64",
            children: "Browser doesn't support speech recognition."
        }, void 0, false, {
            fileName: "[project]/app/components/Header.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-64 p-4 rounded-2xl bg-pink-50/20 border border-pink-400 shadow-lg flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-extrabold text-gray-300 text-center",
                children: [
                    "Microphone: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: listening ? "on 🎙️" : "off 🔇"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 36,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Header.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].startListening({
                                continuous: true,
                                language: "en-US"
                            }),
                        className: "w-full px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl text-white font-extrabold shadow-md hover:opacity-90 transition-all",
                        children: "Start"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stopListening(),
                        className: "w-full font-extrabold px-4 py-2 bg-gray-700 rounded-xl text-white shadow-md hover:bg-gray-600 transition-all",
                        children: "Stop"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            resetTranscript();
                            lastTranscriptRef.current = ""; // reset tracking when clearing
                        },
                        className: "w-full px-4 py-2 bg-pink-600 rounded-xl font-extrabold text-white shadow-md hover:bg-pink-500 transition-all",
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Header.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Header.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Dictaphone, "xa7gc3Zd6FF/h54sUK8+Txu/kqg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpeechRecognition"]
    ];
});
_c = Dictaphone;
const __TURBOPACK__default__export__ = Dictaphone;
var _c;
__turbopack_context__.k.register(_c, "Dictaphone");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/react-speech-recognition/dist/cc-BU0zEyYq.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_async_to_generator
]);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
;
}),
"[project]/node_modules/lodash.debounce/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = debounce;
}),
"[project]/node_modules/react-speech-recognition/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpeechRecognition,
    "useSpeechRecognition",
    ()=>useSpeechRecognition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-speech-recognition/dist/cc-BU0zEyYq.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash.debounce/index.js [app-client] (ecmascript)");
;
;
;
const NativeSpeechRecognition = typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition);
const isNative = (SpeechRecognition)=>SpeechRecognition === NativeSpeechRecognition;
var isAndroid = ()=>/(android)/i.test(typeof navigator !== "undefined" ? navigator.userAgent : "");
const concatTranscripts = (...transcriptParts)=>{
    return transcriptParts.map((t)=>t.trim()).join(" ").trim();
};
// The command matching code is a modified version of Backbone.Router by Jeremy Ashkenas, under the MIT license.
const optionalParam = /\s*\((.*?)\)\s*/g;
const optionalRegex = /(\(\?:[^)]+\))\?/g;
const namedParam = /(\(\?)?:\w+/g;
const splatParam = /\*/g;
const escapeRegExp = /[-{}[\]+?.,\\^$|#]/g;
const commandToRegExp = (command)=>{
    if (command instanceof RegExp) {
        return new RegExp(command.source, "i");
    }
    command = command.replace(escapeRegExp, "\\$&").replace(optionalParam, "(?:$1)?").replace(namedParam, (match, optional)=>{
        return optional ? match : "([^\\s]+)";
    }).replace(splatParam, "(.*?)").replace(optionalRegex, "\\s*$1?\\s*");
    return new RegExp("^" + command + "$", "i");
};
// this is from https://github.com/aceakash/string-similarity
const compareTwoStringsUsingDiceCoefficient = (first, second)=>{
    first = first.replace(/\s+/g, "").toLowerCase();
    second = second.replace(/\s+/g, "").toLowerCase();
    if (!first.length && !second.length) return 1; // if both are empty strings
    if (!first.length || !second.length) return 0; // if only one is empty string
    if (first === second) return 1; // identical
    if (first.length === 1 && second.length === 1) return 0; // both are 1-letter strings
    if (first.length < 2 || second.length < 2) return 0; // if either is a 1-letter string
    const firstBigrams = new Map();
    for(let i = 0; i < first.length - 1; i++){
        const bigram = first.substring(i, i + 2);
        const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;
        firstBigrams.set(bigram, count);
    }
    let intersectionSize = 0;
    for(let i = 0; i < second.length - 1; i++){
        const bigram = second.substring(i, i + 2);
        const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;
        if (count > 0) {
            firstBigrams.set(bigram, count - 1);
            intersectionSize++;
        }
    }
    return 2.0 * intersectionSize / (first.length + second.length - 2);
};
const browserSupportsPolyfills = ()=>{
    return typeof window !== "undefined" && window.navigator !== undefined && window.navigator.mediaDevices !== undefined && window.navigator.mediaDevices.getUserMedia !== undefined && (window.AudioContext !== undefined || window.webkitAudioContext !== undefined);
};
class RecognitionManager {
    setSpeechRecognition(SpeechRecognition) {
        const browserSupportsRecogniser = !!SpeechRecognition && (isNative(SpeechRecognition) || browserSupportsPolyfills());
        if (browserSupportsRecogniser) {
            this.disableRecognition();
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = true;
            this.recognition.onresult = this.updateTranscript.bind(this);
            this.recognition.onend = this.onRecognitionDisconnect.bind(this);
            this.recognition.onerror = this.onError.bind(this);
        }
        this.emitBrowserSupportsSpeechRecognitionChange(browserSupportsRecogniser);
    }
    subscribe(id, callbacks) {
        this.subscribers[id] = callbacks;
    }
    unsubscribe(id) {
        delete this.subscribers[id];
    }
    emitListeningChange(listening) {
        this.listening = listening;
        Object.keys(this.subscribers).forEach((id)=>{
            const { onListeningChange } = this.subscribers[id];
            onListeningChange(listening);
        });
    }
    emitMicrophoneAvailabilityChange(isMicrophoneAvailable) {
        this.isMicrophoneAvailable = isMicrophoneAvailable;
        Object.keys(this.subscribers).forEach((id)=>{
            const { onMicrophoneAvailabilityChange } = this.subscribers[id];
            onMicrophoneAvailabilityChange(isMicrophoneAvailable);
        });
    }
    emitTranscriptChange(interimTranscript, finalTranscript) {
        Object.keys(this.subscribers).forEach((id)=>{
            const { onTranscriptChange } = this.subscribers[id];
            onTranscriptChange(interimTranscript, finalTranscript);
        });
    }
    emitClearTranscript() {
        Object.keys(this.subscribers).forEach((id)=>{
            const { onClearTranscript } = this.subscribers[id];
            onClearTranscript();
        });
    }
    emitBrowserSupportsSpeechRecognitionChange(browserSupportsSpeechRecognitionChange) {
        Object.keys(this.subscribers).forEach((id)=>{
            const { onBrowserSupportsSpeechRecognitionChange, onBrowserSupportsContinuousListeningChange } = this.subscribers[id];
            onBrowserSupportsSpeechRecognitionChange(browserSupportsSpeechRecognitionChange);
            onBrowserSupportsContinuousListeningChange(browserSupportsSpeechRecognitionChange);
        });
    }
    disconnect(disconnectType) {
        if (this.recognition && this.listening) {
            switch(disconnectType){
                case "ABORT":
                    this.pauseAfterDisconnect = true;
                    this.abort();
                    break;
                case "RESET":
                    this.pauseAfterDisconnect = false;
                    this.abort();
                    break;
                case "STOP":
                default:
                    this.pauseAfterDisconnect = true;
                    this.stop();
            }
        }
    }
    disableRecognition() {
        if (this.recognition) {
            this.recognition.onresult = ()=>{};
            this.recognition.onend = ()=>{};
            this.recognition.onerror = ()=>{};
            if (this.listening) {
                this.stopListening();
            }
        }
    }
    onError(event) {
        if (event && event.error && event.error === "not-allowed") {
            this.emitMicrophoneAvailabilityChange(false);
            this.disableRecognition();
        }
    }
    onRecognitionDisconnect() {
        this.onStopListening();
        this.listening = false;
        if (this.pauseAfterDisconnect) {
            this.emitListeningChange(false);
        } else if (this.recognition) {
            if (this.recognition.continuous) {
                this.startListening({
                    continuous: this.recognition.continuous
                });
            } else {
                this.emitListeningChange(false);
            }
        }
        this.pauseAfterDisconnect = false;
    }
    updateTranscript({ results, resultIndex }) {
        const currentIndex = resultIndex === undefined ? results.length - 1 : resultIndex;
        this.interimTranscript = "";
        this.finalTranscript = "";
        for(let i = currentIndex; i < results.length; ++i){
            if (results[i].isFinal && (!isAndroid() || results[i][0].confidence > 0)) {
                this.updateFinalTranscript(results[i][0].transcript);
            } else {
                this.interimTranscript = concatTranscripts(this.interimTranscript, results[i][0].transcript);
            }
        }
        let isDuplicateResult = false;
        if (this.interimTranscript === "" && this.finalTranscript !== "") {
            if (this.previousResultWasFinalOnly) {
                isDuplicateResult = true;
            }
            this.previousResultWasFinalOnly = true;
        } else {
            this.previousResultWasFinalOnly = false;
        }
        if (!isDuplicateResult) {
            this.emitTranscriptChange(this.interimTranscript, this.finalTranscript);
        }
    }
    updateFinalTranscript(newFinalTranscript) {
        this.finalTranscript = concatTranscripts(this.finalTranscript, newFinalTranscript);
    }
    resetTranscript() {
        this.disconnect("RESET");
    }
    startListening() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function*({ continuous = false, language } = {}) {
            if (!this.recognition) {
                return;
            }
            const isContinuousChanged = continuous !== this.recognition.continuous;
            const isLanguageChanged = language && language !== this.recognition.lang;
            if (isContinuousChanged || isLanguageChanged) {
                if (this.listening) {
                    yield this.stopListening();
                }
                this.recognition.continuous = isContinuousChanged ? continuous : this.recognition.continuous;
                this.recognition.lang = isLanguageChanged ? language : this.recognition.lang;
            }
            if (!this.listening) {
                if (!this.recognition.continuous) {
                    this.resetTranscript();
                    this.emitClearTranscript();
                }
                try {
                    yield this.start();
                    this.emitListeningChange(true);
                } catch (e) {
                    // DOMExceptions indicate a redundant microphone start - safe to swallow
                    if (!(e instanceof DOMException)) {
                        this.emitMicrophoneAvailabilityChange(false);
                    }
                }
            }
        }).apply(this, arguments);
    }
    abortListening() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function*() {
            this.disconnect("ABORT");
            this.emitListeningChange(false);
            yield new Promise((resolve)=>{
                this.onStopListening = resolve;
            });
        }).call(this);
    }
    stopListening() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function*() {
            this.disconnect("STOP");
            this.emitListeningChange(false);
            yield new Promise((resolve)=>{
                this.onStopListening = resolve;
            });
        }).call(this);
    }
    getRecognition() {
        return this.recognition;
    }
    start() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function*() {
            if (this.recognition && !this.listening) {
                yield this.recognition.start();
                this.listening = true;
            }
        }).call(this);
    }
    stop() {
        if (this.recognition && this.listening) {
            this.recognition.stop();
            this.listening = false;
        }
    }
    abort() {
        if (this.recognition && this.listening) {
            this.recognition.abort();
            this.listening = false;
        }
    }
    constructor(SpeechRecognition){
        this.recognition = null;
        this.pauseAfterDisconnect = false;
        this.interimTranscript = "";
        this.finalTranscript = "";
        this.listening = false;
        this.isMicrophoneAvailable = true;
        this.subscribers = {};
        this.onStopListening = ()=>{};
        this.previousResultWasFinalOnly = false;
        this.resetTranscript = this.resetTranscript.bind(this);
        this.startListening = this.startListening.bind(this);
        this.stopListening = this.stopListening.bind(this);
        this.abortListening = this.abortListening.bind(this);
        this.setSpeechRecognition = this.setSpeechRecognition.bind(this);
        this.disableRecognition = this.disableRecognition.bind(this);
        this.setSpeechRecognition(SpeechRecognition);
        if (isAndroid()) {
            this.updateFinalTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.updateFinalTranscript, 250, {
                leading: true
            });
        }
    }
}
const CLEAR_TRANSCRIPT = "CLEAR_TRANSCRIPT";
const APPEND_TRANSCRIPT = "APPEND_TRANSCRIPT";
const clearTranscript = ()=>{
    return {
        type: CLEAR_TRANSCRIPT
    };
};
const appendTranscript = (interimTranscript, finalTranscript)=>{
    return {
        type: APPEND_TRANSCRIPT,
        payload: {
            interimTranscript,
            finalTranscript
        }
    };
};
const transcriptReducer = (state, action)=>{
    switch(action.type){
        case CLEAR_TRANSCRIPT:
            return {
                interimTranscript: "",
                finalTranscript: ""
            };
        case APPEND_TRANSCRIPT:
            return {
                interimTranscript: action.payload.interimTranscript,
                finalTranscript: concatTranscripts(state.finalTranscript, action.payload.finalTranscript)
            };
        default:
            throw new Error();
    }
};
let _browserSupportsSpeechRecognition = !!NativeSpeechRecognition;
let _browserSupportsContinuousListening = _browserSupportsSpeechRecognition && !isAndroid();
let recognitionManager;
const useSpeechRecognition = ({ transcribing = true, clearTranscriptOnListen = true, commands = [] } = {})=>{
    const [recognitionManager] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SpeechRecognition.getRecognitionManager());
    const [browserSupportsSpeechRecognition, setBrowserSupportsSpeechRecognition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_browserSupportsSpeechRecognition);
    const [browserSupportsContinuousListening, setBrowserSupportsContinuousListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_browserSupportsContinuousListening);
    const [{ interimTranscript, finalTranscript }, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(transcriptReducer, {
        interimTranscript: recognitionManager.interimTranscript,
        finalTranscript: ""
    });
    const [listening, setListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(recognitionManager.listening);
    const [isMicrophoneAvailable, setMicrophoneAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(recognitionManager.isMicrophoneAvailable);
    const commandsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(commands);
    commandsRef.current = commands;
    const dispatchClearTranscript = ()=>{
        dispatch(clearTranscript());
    };
    const resetTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeechRecognition.useCallback[resetTranscript]": ()=>{
            recognitionManager.resetTranscript();
            dispatchClearTranscript();
        }
    }["useSpeechRecognition.useCallback[resetTranscript]"], [
        recognitionManager
    ]);
    const testFuzzyMatch = (command, input, fuzzyMatchingThreshold)=>{
        const commandToString = typeof command === "object" ? command.toString() : command;
        const commandWithoutSpecials = commandToString.replace(/[&/\\#,+()!$~%.'":*?<>{}]/g, "").replace(/  +/g, " ").trim();
        const howSimilar = compareTwoStringsUsingDiceCoefficient(commandWithoutSpecials, input);
        if (howSimilar >= fuzzyMatchingThreshold) {
            return {
                command,
                commandWithoutSpecials,
                howSimilar,
                isFuzzyMatch: true
            };
        }
        return null;
    };
    const testMatch = (command, input)=>{
        const pattern = commandToRegExp(command);
        const result = pattern.exec(input);
        if (result) {
            return {
                command,
                parameters: result.slice(1)
            };
        }
        return null;
    };
    const matchCommands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeechRecognition.useCallback[matchCommands]": (newInterimTranscript, newFinalTranscript)=>{
            commandsRef.current.forEach({
                "useSpeechRecognition.useCallback[matchCommands]": ({ command, callback, matchInterim = false, isFuzzyMatch = false, fuzzyMatchingThreshold = 0.8, bestMatchOnly = false })=>{
                    const input = !newFinalTranscript && matchInterim ? newInterimTranscript.trim() : newFinalTranscript.trim();
                    const subcommands = Array.isArray(command) ? command : [
                        command
                    ];
                    const results = subcommands.map({
                        "useSpeechRecognition.useCallback[matchCommands].results": (subcommand)=>{
                            if (isFuzzyMatch) {
                                return testFuzzyMatch(subcommand, input, fuzzyMatchingThreshold);
                            }
                            return testMatch(subcommand, input);
                        }
                    }["useSpeechRecognition.useCallback[matchCommands].results"]).filter({
                        "useSpeechRecognition.useCallback[matchCommands].results": (x)=>x
                    }["useSpeechRecognition.useCallback[matchCommands].results"]);
                    if (isFuzzyMatch && bestMatchOnly && results.length >= 2) {
                        results.sort({
                            "useSpeechRecognition.useCallback[matchCommands]": (a, b)=>b.howSimilar - a.howSimilar
                        }["useSpeechRecognition.useCallback[matchCommands]"]);
                        const { command, commandWithoutSpecials, howSimilar } = results[0];
                        callback(commandWithoutSpecials, input, howSimilar, {
                            command,
                            resetTranscript
                        });
                    } else {
                        results.forEach({
                            "useSpeechRecognition.useCallback[matchCommands]": (result)=>{
                                if (result.isFuzzyMatch) {
                                    const { command, commandWithoutSpecials, howSimilar } = result;
                                    callback(commandWithoutSpecials, input, howSimilar, {
                                        command,
                                        resetTranscript
                                    });
                                } else {
                                    const { command, parameters } = result;
                                    callback(...parameters, {
                                        command,
                                        resetTranscript
                                    });
                                }
                            }
                        }["useSpeechRecognition.useCallback[matchCommands]"]);
                    }
                }
            }["useSpeechRecognition.useCallback[matchCommands]"]);
        }
    }["useSpeechRecognition.useCallback[matchCommands]"], [
        resetTranscript
    ]);
    const handleTranscriptChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeechRecognition.useCallback[handleTranscriptChange]": (newInterimTranscript, newFinalTranscript)=>{
            if (transcribing) {
                dispatch(appendTranscript(newInterimTranscript, newFinalTranscript));
            }
            matchCommands(newInterimTranscript, newFinalTranscript);
        }
    }["useSpeechRecognition.useCallback[handleTranscriptChange]"], [
        matchCommands,
        transcribing
    ]);
    const handleClearTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeechRecognition.useCallback[handleClearTranscript]": ()=>{
            if (clearTranscriptOnListen) {
                dispatchClearTranscript();
            }
        }
    }["useSpeechRecognition.useCallback[handleClearTranscript]"], [
        clearTranscriptOnListen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSpeechRecognition.useEffect": ()=>{
            const id = SpeechRecognition.counter;
            SpeechRecognition.counter += 1;
            const callbacks = {
                onListeningChange: setListening,
                onMicrophoneAvailabilityChange: setMicrophoneAvailable,
                onTranscriptChange: handleTranscriptChange,
                onClearTranscript: handleClearTranscript,
                onBrowserSupportsSpeechRecognitionChange: setBrowserSupportsSpeechRecognition,
                onBrowserSupportsContinuousListeningChange: setBrowserSupportsContinuousListening
            };
            recognitionManager.subscribe(id, callbacks);
            return ({
                "useSpeechRecognition.useEffect": ()=>{
                    recognitionManager.unsubscribe(id);
                }
            })["useSpeechRecognition.useEffect"];
        }
    }["useSpeechRecognition.useEffect"], [
        transcribing,
        clearTranscriptOnListen,
        recognitionManager,
        handleTranscriptChange,
        handleClearTranscript
    ]);
    const transcript = concatTranscripts(finalTranscript, interimTranscript);
    return {
        transcript,
        interimTranscript,
        finalTranscript,
        listening,
        isMicrophoneAvailable,
        resetTranscript,
        browserSupportsSpeechRecognition,
        browserSupportsContinuousListening
    };
};
const SpeechRecognition = {
    counter: 0,
    applyPolyfill: (PolyfillSpeechRecognition)=>{
        if (recognitionManager) {
            recognitionManager.setSpeechRecognition(PolyfillSpeechRecognition);
        } else {
            recognitionManager = new RecognitionManager(PolyfillSpeechRecognition);
        }
        const browserSupportsPolyfill = !!PolyfillSpeechRecognition && browserSupportsPolyfills();
        _browserSupportsSpeechRecognition = browserSupportsPolyfill;
        _browserSupportsContinuousListening = browserSupportsPolyfill;
    },
    removePolyfill: ()=>{
        if (recognitionManager) {
            recognitionManager.setSpeechRecognition(NativeSpeechRecognition);
        } else {
            recognitionManager = new RecognitionManager(NativeSpeechRecognition);
        }
        _browserSupportsSpeechRecognition = !!NativeSpeechRecognition;
        _browserSupportsContinuousListening = _browserSupportsSpeechRecognition && !isAndroid();
    },
    getRecognitionManager: ()=>{
        if (!recognitionManager) {
            recognitionManager = new RecognitionManager(NativeSpeechRecognition);
        }
        return recognitionManager;
    },
    getRecognition: ()=>{
        const recognitionManager = SpeechRecognition.getRecognitionManager();
        return recognitionManager.getRecognition();
    },
    startListening: ({ continuous, language } = {})=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function*() {
            const recognitionManager = SpeechRecognition.getRecognitionManager();
            yield recognitionManager.startListening({
                continuous,
                language
            });
        })(),
    stopListening: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function*() {
            const recognitionManager = SpeechRecognition.getRecognitionManager();
            yield recognitionManager.stopListening();
        })(),
    abortListening: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function*() {
            const recognitionManager = SpeechRecognition.getRecognitionManager();
            yield recognitionManager.abortListening();
        })(),
    browserSupportsSpeechRecognition: ()=>_browserSupportsSpeechRecognition,
    browserSupportsContinuousListening: ()=>_browserSupportsContinuousListening
};
;
}),
]);

//# sourceMappingURL=_2f94e0b1._.js.map