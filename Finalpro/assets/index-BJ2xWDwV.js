function cp(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const l of s.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
})();

function dp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ic = {
        exports: {}
    },
    ls = {},
    ac = {
        exports: {}
    },
    B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur = Symbol.for("react.element"),
    fp = Symbol.for("react.portal"),
    pp = Symbol.for("react.fragment"),
    hp = Symbol.for("react.strict_mode"),
    mp = Symbol.for("react.profiler"),
    gp = Symbol.for("react.provider"),
    vp = Symbol.for("react.context"),
    yp = Symbol.for("react.forward_ref"),
    wp = Symbol.for("react.suspense"),
    xp = Symbol.for("react.memo"),
    Sp = Symbol.for("react.lazy"),
    Sa = Symbol.iterator;

function Ep(e) {
    return e === null || typeof e != "object" ? null : (e = Sa && e[Sa] || e["@@iterator"], typeof e == "function" ? e : null)
}
var uc = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    cc = Object.assign,
    dc = {};

function Hn(e, t, n) {
    this.props = e, this.context = t, this.refs = dc, this.updater = n || uc
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Hn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function fc() {}
fc.prototype = Hn.prototype;

function mi(e, t, n) {
    this.props = e, this.context = t, this.refs = dc, this.updater = n || uc
}
var gi = mi.prototype = new fc;
gi.constructor = mi;
cc(gi, Hn.prototype);
gi.isPureReactComponent = !0;
var Ea = Array.isArray,
    pc = Object.prototype.hasOwnProperty,
    vi = {
        current: null
    },
    hc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function mc(e, t, n) {
    var r, o = {},
        s = null,
        l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (s = "" + t.key), t) pc.call(t, r) && !hc.hasOwnProperty(r) && (o[r] = t[r]);
    var i = arguments.length - 2;
    if (i === 1) o.children = n;
    else if (1 < i) {
        for (var a = Array(i), d = 0; d < i; d++) a[d] = arguments[d + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in i = e.defaultProps, i) o[r] === void 0 && (o[r] = i[r]);
    return {
        $$typeof: Ur,
        type: e,
        key: s,
        ref: l,
        props: o,
        _owner: vi.current
    }
}

function _p(e, t) {
    return {
        $$typeof: Ur,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function yi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ur
}

function kp(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var _a = /\/+/g;

function Ls(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? kp("" + e.key) : t.toString(36)
}

function ho(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var l = !1;
    if (e === null) l = !0;
    else switch (s) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Ur:
                case fp:
                    l = !0
            }
    }
    if (l) return l = e, o = o(l), e = r === "" ? "." + Ls(l, 0) : r, Ea(o) ? (n = "", e != null && (n = e.replace(_a, "$&/") + "/"), ho(o, t, n, "", function(d) {
        return d
    })) : o != null && (yi(o) && (o = _p(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(_a, "$&/") + "/") + e)), t.push(o)), 1;
    if (l = 0, r = r === "" ? "." : r + ":", Ea(e))
        for (var i = 0; i < e.length; i++) {
            s = e[i];
            var a = r + Ls(s, i);
            l += ho(s, t, n, a, o)
        } else if (a = Ep(e), typeof a == "function")
            for (e = a.call(e), i = 0; !(s = e.next()).done;) s = s.value, a = r + Ls(s, i++), l += ho(s, t, n, a, o);
        else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}

function Kr(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return ho(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }), r
}

function Np(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Ee = {
        current: null
    },
    mo = {
        transition: null
    },
    Cp = {
        ReactCurrentDispatcher: Ee,
        ReactCurrentBatchConfig: mo,
        ReactCurrentOwner: vi
    };

function gc() {
    throw Error("act(...) is not supported in production builds of React.")
}
B.Children = {
    map: Kr,
    forEach: function(e, t, n) {
        Kr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Kr(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Kr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!yi(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
B.Component = Hn;
B.Fragment = pp;
B.Profiler = mp;
B.PureComponent = mi;
B.StrictMode = hp;
B.Suspense = wp;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cp;
B.act = gc;
B.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = cc({}, e.props),
        o = e.key,
        s = e.ref,
        l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref, l = vi.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
        for (a in t) pc.call(t, a) && !hc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && i !== void 0 ? i[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        i = Array(a);
        for (var d = 0; d < a; d++) i[d] = arguments[d + 2];
        r.children = i
    }
    return {
        $$typeof: Ur,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: l
    }
};
B.createContext = function(e) {
    return e = {
        $$typeof: vp,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: gp,
        _context: e
    }, e.Consumer = e
};
B.createElement = mc;
B.createFactory = function(e) {
    var t = mc.bind(null, e);
    return t.type = e, t
};
B.createRef = function() {
    return {
        current: null
    }
};
B.forwardRef = function(e) {
    return {
        $$typeof: yp,
        render: e
    }
};
B.isValidElement = yi;
B.lazy = function(e) {
    return {
        $$typeof: Sp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Np
    }
};
B.memo = function(e, t) {
    return {
        $$typeof: xp,
        type: e,
        compare: t === void 0 ? null : t
    }
};
B.startTransition = function(e) {
    var t = mo.transition;
    mo.transition = {};
    try {
        e()
    } finally {
        mo.transition = t
    }
};
B.unstable_act = gc;
B.useCallback = function(e, t) {
    return Ee.current.useCallback(e, t)
};
B.useContext = function(e) {
    return Ee.current.useContext(e)
};
B.useDebugValue = function() {};
B.useDeferredValue = function(e) {
    return Ee.current.useDeferredValue(e)
};
B.useEffect = function(e, t) {
    return Ee.current.useEffect(e, t)
};
B.useId = function() {
    return Ee.current.useId()
};
B.useImperativeHandle = function(e, t, n) {
    return Ee.current.useImperativeHandle(e, t, n)
};
B.useInsertionEffect = function(e, t) {
    return Ee.current.useInsertionEffect(e, t)
};
B.useLayoutEffect = function(e, t) {
    return Ee.current.useLayoutEffect(e, t)
};
B.useMemo = function(e, t) {
    return Ee.current.useMemo(e, t)
};
B.useReducer = function(e, t, n) {
    return Ee.current.useReducer(e, t, n)
};
B.useRef = function(e) {
    return Ee.current.useRef(e)
};
B.useState = function(e) {
    return Ee.current.useState(e)
};
B.useSyncExternalStore = function(e, t, n) {
    return Ee.current.useSyncExternalStore(e, t, n)
};
B.useTransition = function() {
    return Ee.current.useTransition()
};
B.version = "18.3.1";
ac.exports = B;
var x = ac.exports;
const z = dp(x),
    jp = cp({
        __proto__: null,
        default: z
    }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pp = x,
    Tp = Symbol.for("react.element"),
    Rp = Symbol.for("react.fragment"),
    Fp = Object.prototype.hasOwnProperty,
    Lp = Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Op = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function vc(e, t, n) {
    var r, o = {},
        s = null,
        l = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (l = t.ref);
    for (r in t) Fp.call(t, r) && !Op.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Tp,
        type: e,
        key: s,
        ref: l,
        props: o,
        _owner: Lp.current
    }
}
ls.Fragment = Rp;
ls.jsx = vc;
ls.jsxs = vc;
ic.exports = ls;
var u = ic.exports,
    cl = {},
    yc = {
        exports: {}
    },
    Be = {},
    wc = {
        exports: {}
    },
    xc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(R, O) {
        var I = R.length;
        R.push(O);
        e: for (; 0 < I;) {
            var H = I - 1 >>> 1,
                b = R[H];
            if (0 < o(b, O)) R[H] = O, R[I] = b, I = H;
            else break e
        }
    }

    function n(R) {
        return R.length === 0 ? null : R[0]
    }

    function r(R) {
        if (R.length === 0) return null;
        var O = R[0],
            I = R.pop();
        if (I !== O) {
            R[0] = I;
            e: for (var H = 0, b = R.length, ue = b >>> 1; H < ue;) {
                var re = 2 * (H + 1) - 1,
                    ke = R[re],
                    ve = re + 1,
                    st = R[ve];
                if (0 > o(ke, I)) ve < b && 0 > o(st, ke) ? (R[H] = st, R[ve] = I, H = ve) : (R[H] = ke, R[re] = I, H = re);
                else if (ve < b && 0 > o(st, I)) R[H] = st, R[ve] = I, H = ve;
                else break e
            }
        }
        return O
    }

    function o(R, O) {
        var I = R.sortIndex - O.sortIndex;
        return I !== 0 ? I : R.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var l = Date,
            i = l.now();
        e.unstable_now = function() {
            return l.now() - i
        }
    }
    var a = [],
        d = [],
        c = 1,
        f = null,
        p = 3,
        w = !1,
        v = !1,
        y = !1,
        _ = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function h(R) {
        for (var O = n(d); O !== null;) {
            if (O.callback === null) r(d);
            else if (O.startTime <= R) r(d), O.sortIndex = O.expirationTime, t(a, O);
            else break;
            O = n(d)
        }
    }

    function S(R) {
        if (y = !1, h(R), !v)
            if (n(a) !== null) v = !0, kt(C);
            else {
                var O = n(d);
                O !== null && Le(S, O.startTime - R)
            }
    }

    function C(R, O) {
        v = !1, y && (y = !1, g(k), k = -1), w = !0;
        var I = p;
        try {
            for (h(O), f = n(a); f !== null && (!(f.expirationTime > O) || R && !A());) {
                var H = f.callback;
                if (typeof H == "function") {
                    f.callback = null, p = f.priorityLevel;
                    var b = H(f.expirationTime <= O);
                    O = e.unstable_now(), typeof b == "function" ? f.callback = b : f === n(a) && r(a), h(O)
                } else r(a);
                f = n(a)
            }
            if (f !== null) var ue = !0;
            else {
                var re = n(d);
                re !== null && Le(S, re.startTime - O), ue = !1
            }
            return ue
        } finally {
            f = null, p = I, w = !1
        }
    }
    var T = !1,
        P = null,
        k = -1,
        F = 5,
        j = -1;

    function A() {
        return !(e.unstable_now() - j < F)
    }

    function le() {
        if (P !== null) {
            var R = e.unstable_now();
            j = R;
            var O = !0;
            try {
                O = P(!0, R)
            } finally {
                O ? $e() : (T = !1, P = null)
            }
        } else T = !1
    }
    var $e;
    if (typeof m == "function") $e = function() {
        m(le)
    };
    else if (typeof MessageChannel < "u") {
        var Ge = new MessageChannel,
            _t = Ge.port2;
        Ge.port1.onmessage = le, $e = function() {
            _t.postMessage(null)
        }
    } else $e = function() {
        _(le, 0)
    };

    function kt(R) {
        P = R, T || (T = !0, $e())
    }

    function Le(R, O) {
        k = _(function() {
            R(e.unstable_now())
        }, O)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
        R.callback = null
    }, e.unstable_continueExecution = function() {
        v || w || (v = !0, kt(C))
    }, e.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < R ? Math.floor(1e3 / R) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return p
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(R) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var O = 3;
                break;
            default:
                O = p
        }
        var I = p;
        p = O;
        try {
            return R()
        } finally {
            p = I
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(R, O) {
        switch (R) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                R = 3
        }
        var I = p;
        p = R;
        try {
            return O()
        } finally {
            p = I
        }
    }, e.unstable_scheduleCallback = function(R, O, I) {
        var H = e.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? H + I : H) : I = H, R) {
            case 1:
                var b = -1;
                break;
            case 2:
                b = 250;
                break;
            case 5:
                b = 1073741823;
                break;
            case 4:
                b = 1e4;
                break;
            default:
                b = 5e3
        }
        return b = I + b, R = {
            id: c++,
            callback: O,
            priorityLevel: R,
            startTime: I,
            expirationTime: b,
            sortIndex: -1
        }, I > H ? (R.sortIndex = I, t(d, R), n(a) === null && R === n(d) && (y ? (g(k), k = -1) : y = !0, Le(S, I - H))) : (R.sortIndex = b, t(a, R), v || w || (v = !0, kt(C))), R
    }, e.unstable_shouldYield = A, e.unstable_wrapCallback = function(R) {
        var O = p;
        return function() {
            var I = p;
            p = O;
            try {
                return R.apply(this, arguments)
            } finally {
                p = I
            }
        }
    }
})(xc);
wc.exports = xc;
var Ip = wc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dp = x,
    ze = Ip;

function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Sc = new Set,
    yr = {};

function fn(e, t) {
    Dn(e, t), Dn(e + "Capture", t)
}

function Dn(e, t) {
    for (yr[e] = t, e = 0; e < t.length; e++) Sc.add(t[e])
}
var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    dl = Object.prototype.hasOwnProperty,
    Mp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ka = {},
    Na = {};

function zp(e) {
    return dl.call(Na, e) ? !0 : dl.call(ka, e) ? !1 : Mp.test(e) ? Na[e] = !0 : (ka[e] = !0, !1)
}

function Bp(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Ap(e, t, n, r) {
    if (t === null || typeof t > "u" || Bp(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function _e(e, t, n, r, o, s, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = l
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    fe[e] = new _e(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    fe[t] = new _e(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    fe[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    fe[e] = new _e(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    fe[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    fe[e] = new _e(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    fe[e] = new _e(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    fe[e] = new _e(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    fe[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var wi = /[\-:]([a-z])/g;

function xi(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(wi, xi);
    fe[t] = new _e(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(wi, xi);
    fe[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(wi, xi);
    fe[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    fe[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
fe.xlinkHref = new _e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    fe[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Si(e, t, n, r) {
    var o = fe.hasOwnProperty(t) ? fe[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ap(t, n, o, r) && (n = null), r || o === null ? zp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var St = Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Gr = Symbol.for("react.element"),
    gn = Symbol.for("react.portal"),
    vn = Symbol.for("react.fragment"),
    Ei = Symbol.for("react.strict_mode"),
    fl = Symbol.for("react.profiler"),
    Ec = Symbol.for("react.provider"),
    _c = Symbol.for("react.context"),
    _i = Symbol.for("react.forward_ref"),
    pl = Symbol.for("react.suspense"),
    hl = Symbol.for("react.suspense_list"),
    ki = Symbol.for("react.memo"),
    jt = Symbol.for("react.lazy"),
    kc = Symbol.for("react.offscreen"),
    Ca = Symbol.iterator;

function Gn(e) {
    return e === null || typeof e != "object" ? null : (e = Ca && e[Ca] || e["@@iterator"], typeof e == "function" ? e : null)
}
var X = Object.assign,
    Os;

function or(e) {
    if (Os === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Os = t && t[1] || ""
    }
    return `
` + Os + e
}
var Is = !1;

function Ds(e, t) {
    if (!e || Is) return "";
    Is = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (d) {
                    var r = d
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (d) {
                    r = d
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                r = d
            }
            e()
        }
    } catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var o = d.stack.split(`
`), s = r.stack.split(`
`), l = o.length - 1, i = s.length - 1; 1 <= l && 0 <= i && o[l] !== s[i];) i--;
            for (; 1 <= l && 0 <= i; l--, i--)
                if (o[l] !== s[i]) {
                    if (l !== 1 || i !== 1)
                        do
                            if (l--, i--, 0 > i || o[l] !== s[i]) {
                                var a = `
` + o[l].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            }
                    while (1 <= l && 0 <= i);
                    break
                }
        }
    } finally {
        Is = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? or(e) : ""
}

function Up(e) {
    switch (e.tag) {
        case 5:
            return or(e.type);
        case 16:
            return or("Lazy");
        case 13:
            return or("Suspense");
        case 19:
            return or("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Ds(e.type, !1), e;
        case 11:
            return e = Ds(e.type.render, !1), e;
        case 1:
            return e = Ds(e.type, !0), e;
        default:
            return ""
    }
}

function ml(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case vn:
            return "Fragment";
        case gn:
            return "Portal";
        case fl:
            return "Profiler";
        case Ei:
            return "StrictMode";
        case pl:
            return "Suspense";
        case hl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case _c:
            return (e.displayName || "Context") + ".Consumer";
        case Ec:
            return (e._context.displayName || "Context") + ".Provider";
        case _i:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ki:
            return t = e.displayName || null, t !== null ? t : ml(e.type) || "Memo";
        case jt:
            t = e._payload, e = e._init;
            try {
                return ml(e(t))
            } catch {}
    }
    return null
}

function $p(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ml(t);
        case 8:
            return t === Ei ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Vt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Nc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Hp(e) {
    var t = Nc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(l) {
                r = "" + l, s.call(this, l)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Jr(e) {
    e._valueTracker || (e._valueTracker = Hp(e))
}

function Cc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Nc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function To(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function gl(e, t) {
    var n = t.checked;
    return X({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function ja(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Vt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function jc(e, t) {
    t = t.checked, t != null && Si(e, "checked", t, !1)
}

function vl(e, t) {
    jc(e, t);
    var n = Vt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? yl(e, t.type, n) : t.hasOwnProperty("defaultValue") && yl(e, t.type, Vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Pa(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function yl(e, t, n) {
    (t !== "number" || To(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var sr = Array.isArray;

function Pn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Vt(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function wl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
    return X({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Ta(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(N(92));
            if (sr(n)) {
                if (1 < n.length) throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Vt(n)
    }
}

function Pc(e, t) {
    var n = Vt(t.value),
        r = Vt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Ra(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Tc(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function xl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Tc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Xr, Rc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Xr = Xr || document.createElement("div"), Xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Xr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function wr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ar = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    bp = ["Webkit", "ms", "Moz", "O"];
Object.keys(ar).forEach(function(e) {
    bp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), ar[t] = ar[e]
    })
});

function Fc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ar.hasOwnProperty(e) && ar[e] ? ("" + t).trim() : t + "px"
}

function Lc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Fc(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var Vp = X({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Sl(e, t) {
    if (t) {
        if (Vp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(N(62))
    }
}

function El(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var _l = null;

function Ni(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var kl = null,
    Tn = null,
    Rn = null;

function Fa(e) {
    if (e = br(e)) {
        if (typeof kl != "function") throw Error(N(280));
        var t = e.stateNode;
        t && (t = ds(t), kl(e.stateNode, e.type, t))
    }
}

function Oc(e) {
    Tn ? Rn ? Rn.push(e) : Rn = [e] : Tn = e
}

function Ic() {
    if (Tn) {
        var e = Tn,
            t = Rn;
        if (Rn = Tn = null, Fa(e), t)
            for (e = 0; e < t.length; e++) Fa(t[e])
    }
}

function Dc(e, t) {
    return e(t)
}

function Mc() {}
var Ms = !1;

function zc(e, t, n) {
    if (Ms) return e(t, n);
    Ms = !0;
    try {
        return Dc(e, t, n)
    } finally {
        Ms = !1, (Tn !== null || Rn !== null) && (Mc(), Ic())
    }
}

function xr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ds(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(N(231, t, typeof n));
    return n
}
var Nl = !1;
if (vt) try {
    var Jn = {};
    Object.defineProperty(Jn, "passive", {
        get: function() {
            Nl = !0
        }
    }), window.addEventListener("test", Jn, Jn), window.removeEventListener("test", Jn, Jn)
} catch {
    Nl = !1
}

function Wp(e, t, n, r, o, s, l, i, a) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, d)
    } catch (c) {
        this.onError(c)
    }
}
var ur = !1,
    Ro = null,
    Fo = !1,
    Cl = null,
    Qp = {
        onError: function(e) {
            ur = !0, Ro = e
        }
    };

function qp(e, t, n, r, o, s, l, i, a) {
    ur = !1, Ro = null, Wp.apply(Qp, arguments)
}

function Kp(e, t, n, r, o, s, l, i, a) {
    if (qp.apply(this, arguments), ur) {
        if (ur) {
            var d = Ro;
            ur = !1, Ro = null
        } else throw Error(N(198));
        Fo || (Fo = !0, Cl = d)
    }
}

function pn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Bc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function La(e) {
    if (pn(e) !== e) throw Error(N(188))
}

function Gp(e) {
    var t = e.alternate;
    if (!t) {
        if (t = pn(e), t === null) throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s;) {
                if (s === n) return La(o), e;
                if (s === r) return La(o), t;
                s = s.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return) n = o, r = s;
        else {
            for (var l = !1, i = o.child; i;) {
                if (i === n) {
                    l = !0, n = o, r = s;
                    break
                }
                if (i === r) {
                    l = !0, r = o, n = s;
                    break
                }
                i = i.sibling
            }
            if (!l) {
                for (i = s.child; i;) {
                    if (i === n) {
                        l = !0, n = s, r = o;
                        break
                    }
                    if (i === r) {
                        l = !0, r = s, n = o;
                        break
                    }
                    i = i.sibling
                }
                if (!l) throw Error(N(189))
            }
        }
        if (n.alternate !== r) throw Error(N(190))
    }
    if (n.tag !== 3) throw Error(N(188));
    return n.stateNode.current === n ? e : t
}

function Ac(e) {
    return e = Gp(e), e !== null ? Uc(e) : null
}

function Uc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Uc(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var $c = ze.unstable_scheduleCallback,
    Oa = ze.unstable_cancelCallback,
    Jp = ze.unstable_shouldYield,
    Xp = ze.unstable_requestPaint,
    ee = ze.unstable_now,
    Yp = ze.unstable_getCurrentPriorityLevel,
    Ci = ze.unstable_ImmediatePriority,
    Hc = ze.unstable_UserBlockingPriority,
    Lo = ze.unstable_NormalPriority,
    Zp = ze.unstable_LowPriority,
    bc = ze.unstable_IdlePriority,
    is = null,
    ut = null;

function eh(e) {
    if (ut && typeof ut.onCommitFiberRoot == "function") try {
        ut.onCommitFiberRoot(is, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var et = Math.clz32 ? Math.clz32 : rh,
    th = Math.log,
    nh = Math.LN2;

function rh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (th(e) / nh | 0) | 0
}
var Yr = 64,
    Zr = 4194304;

function lr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Oo(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        s = e.pingedLanes,
        l = n & 268435455;
    if (l !== 0) {
        var i = l & ~o;
        i !== 0 ? r = lr(i) : (s &= l, s !== 0 && (r = lr(s)))
    } else l = n & ~o, l !== 0 ? r = lr(l) : s !== 0 && (r = lr(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - et(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function oh(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function sh(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var l = 31 - et(s),
            i = 1 << l,
            a = o[l];
        a === -1 ? (!(i & n) || i & r) && (o[l] = oh(i, t)) : a <= t && (e.expiredLanes |= i), s &= ~i
    }
}

function jl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Vc() {
    var e = Yr;
    return Yr <<= 1, !(Yr & 4194240) && (Yr = 64), e
}

function zs(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function $r(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = n
}

function lh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - et(n),
            s = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s
    }
}

function ji(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - et(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var V = 0;

function Wc(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Qc, Pi, qc, Kc, Gc, Pl = !1,
    eo = [],
    Dt = null,
    Mt = null,
    zt = null,
    Sr = new Map,
    Er = new Map,
    Tt = [],
    ih = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ia(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Dt = null;
            break;
        case "dragenter":
        case "dragleave":
            Mt = null;
            break;
        case "mouseover":
        case "mouseout":
            zt = null;
            break;
        case "pointerover":
        case "pointerout":
            Sr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Er.delete(t.pointerId)
    }
}

function Xn(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    }, t !== null && (t = br(t), t !== null && Pi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function ah(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return Dt = Xn(Dt, e, t, n, r, o), !0;
        case "dragenter":
            return Mt = Xn(Mt, e, t, n, r, o), !0;
        case "mouseover":
            return zt = Xn(zt, e, t, n, r, o), !0;
        case "pointerover":
            var s = o.pointerId;
            return Sr.set(s, Xn(Sr.get(s) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return s = o.pointerId, Er.set(s, Xn(Er.get(s) || null, e, t, n, r, o)), !0
    }
    return !1
}

function Jc(e) {
    var t = Yt(e.target);
    if (t !== null) {
        var n = pn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Bc(n), t !== null) {
                    e.blockedOn = t, Gc(e.priority, function() {
                        qc(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function go(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Tl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            _l = r, n.target.dispatchEvent(r), _l = null
        } else return t = br(n), t !== null && Pi(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Da(e, t, n) {
    go(e) && n.delete(t)
}

function uh() {
    Pl = !1, Dt !== null && go(Dt) && (Dt = null), Mt !== null && go(Mt) && (Mt = null), zt !== null && go(zt) && (zt = null), Sr.forEach(Da), Er.forEach(Da)
}

function Yn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Pl || (Pl = !0, ze.unstable_scheduleCallback(ze.unstable_NormalPriority, uh)))
}

function _r(e) {
    function t(o) {
        return Yn(o, e)
    }
    if (0 < eo.length) {
        Yn(eo[0], e);
        for (var n = 1; n < eo.length; n++) {
            var r = eo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Dt !== null && Yn(Dt, e), Mt !== null && Yn(Mt, e), zt !== null && Yn(zt, e), Sr.forEach(t), Er.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null);) Jc(n), n.blockedOn === null && Tt.shift()
}
var Fn = St.ReactCurrentBatchConfig,
    Io = !0;

function ch(e, t, n, r) {
    var o = V,
        s = Fn.transition;
    Fn.transition = null;
    try {
        V = 1, Ti(e, t, n, r)
    } finally {
        V = o, Fn.transition = s
    }
}

function dh(e, t, n, r) {
    var o = V,
        s = Fn.transition;
    Fn.transition = null;
    try {
        V = 4, Ti(e, t, n, r)
    } finally {
        V = o, Fn.transition = s
    }
}

function Ti(e, t, n, r) {
    if (Io) {
        var o = Tl(e, t, n, r);
        if (o === null) qs(e, t, r, Do, n), Ia(e, r);
        else if (ah(o, e, t, n, r)) r.stopPropagation();
        else if (Ia(e, r), t & 4 && -1 < ih.indexOf(e)) {
            for (; o !== null;) {
                var s = br(o);
                if (s !== null && Qc(s), s = Tl(e, t, n, r), s === null && qs(e, t, r, Do, n), s === o) break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else qs(e, t, r, null, n)
    }
}
var Do = null;

function Tl(e, t, n, r) {
    if (Do = null, e = Ni(r), e = Yt(e), e !== null)
        if (t = pn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Bc(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Do = e, null
}

function Xc(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Yp()) {
                case Ci:
                    return 1;
                case Hc:
                    return 4;
                case Lo:
                case Zp:
                    return 16;
                case bc:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Ft = null,
    Ri = null,
    vo = null;

function Yc() {
    if (vo) return vo;
    var e, t = Ri,
        n = t.length,
        r, o = "value" in Ft ? Ft.value : Ft.textContent,
        s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === o[s - r]; r++);
    return vo = o.slice(e, 1 < r ? 1 - r : void 0)
}

function yo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function to() {
    return !0
}

function Ma() {
    return !1
}

function Ae(e) {
    function t(n, r, o, s, l) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = l, this.currentTarget = null;
        for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(s) : s[i]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? to : Ma, this.isPropagationStopped = Ma, this
    }
    return X(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = to)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = to)
        },
        persist: function() {},
        isPersistent: to
    }), t
}
var bn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Fi = Ae(bn),
    Hr = X({}, bn, {
        view: 0,
        detail: 0
    }),
    fh = Ae(Hr),
    Bs, As, Zn, as = X({}, Hr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Li,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Zn && (Zn && e.type === "mousemove" ? (Bs = e.screenX - Zn.screenX, As = e.screenY - Zn.screenY) : As = Bs = 0, Zn = e), Bs)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : As
        }
    }),
    za = Ae(as),
    ph = X({}, as, {
        dataTransfer: 0
    }),
    hh = Ae(ph),
    mh = X({}, Hr, {
        relatedTarget: 0
    }),
    Us = Ae(mh),
    gh = X({}, bn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    vh = Ae(gh),
    yh = X({}, bn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    wh = Ae(yh),
    xh = X({}, bn, {
        data: 0
    }),
    Ba = Ae(xh),
    Sh = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Eh = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    _h = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function kh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = _h[e]) ? !!t[e] : !1
}

function Li() {
    return kh
}
var Nh = X({}, Hr, {
        key: function(e) {
            if (e.key) {
                var t = Sh[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = yo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Eh[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Li,
        charCode: function(e) {
            return e.type === "keypress" ? yo(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? yo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Ch = Ae(Nh),
    jh = X({}, as, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Aa = Ae(jh),
    Ph = X({}, Hr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Li
    }),
    Th = Ae(Ph),
    Rh = X({}, bn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Fh = Ae(Rh),
    Lh = X({}, as, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Oh = Ae(Lh),
    Ih = [9, 13, 27, 32],
    Oi = vt && "CompositionEvent" in window,
    cr = null;
vt && "documentMode" in document && (cr = document.documentMode);
var Dh = vt && "TextEvent" in window && !cr,
    Zc = vt && (!Oi || cr && 8 < cr && 11 >= cr),
    Ua = " ",
    $a = !1;

function ed(e, t) {
    switch (e) {
        case "keyup":
            return Ih.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function td(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var yn = !1;

function Mh(e, t) {
    switch (e) {
        case "compositionend":
            return td(t);
        case "keypress":
            return t.which !== 32 ? null : ($a = !0, Ua);
        case "textInput":
            return e = t.data, e === Ua && $a ? null : e;
        default:
            return null
    }
}

function zh(e, t) {
    if (yn) return e === "compositionend" || !Oi && ed(e, t) ? (e = Yc(), vo = Ri = Ft = null, yn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Zc && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Bh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Ha(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Bh[e.type] : t === "textarea"
}

function nd(e, t, n, r) {
    Oc(r), t = Mo(t, "onChange"), 0 < t.length && (n = new Fi("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var dr = null,
    kr = null;

function Ah(e) {
    pd(e, 0)
}

function us(e) {
    var t = Sn(e);
    if (Cc(t)) return e
}

function Uh(e, t) {
    if (e === "change") return t
}
var rd = !1;
if (vt) {
    var $s;
    if (vt) {
        var Hs = "oninput" in document;
        if (!Hs) {
            var ba = document.createElement("div");
            ba.setAttribute("oninput", "return;"), Hs = typeof ba.oninput == "function"
        }
        $s = Hs
    } else $s = !1;
    rd = $s && (!document.documentMode || 9 < document.documentMode)
}

function Va() {
    dr && (dr.detachEvent("onpropertychange", od), kr = dr = null)
}

function od(e) {
    if (e.propertyName === "value" && us(kr)) {
        var t = [];
        nd(t, kr, e, Ni(e)), zc(Ah, t)
    }
}

function $h(e, t, n) {
    e === "focusin" ? (Va(), dr = t, kr = n, dr.attachEvent("onpropertychange", od)) : e === "focusout" && Va()
}

function Hh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return us(kr)
}

function bh(e, t) {
    if (e === "click") return us(t)
}

function Vh(e, t) {
    if (e === "input" || e === "change") return us(t)
}

function Wh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var rt = typeof Object.is == "function" ? Object.is : Wh;

function Nr(e, t) {
    if (rt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!dl.call(t, o) || !rt(e[o], t[o])) return !1
    }
    return !0
}

function Wa(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Qa(e, t) {
    var n = Wa(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Wa(n)
    }
}

function sd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function ld() {
    for (var e = window, t = To(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = To(e.document)
    }
    return t
}

function Ii(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Qh(e) {
    var t = ld(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && sd(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ii(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = Qa(n, s);
                var l = Qa(n, r);
                o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var qh = vt && "documentMode" in document && 11 >= document.documentMode,
    wn = null,
    Rl = null,
    fr = null,
    Fl = !1;

function qa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Fl || wn == null || wn !== To(r) || (r = wn, "selectionStart" in r && Ii(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), fr && Nr(fr, r) || (fr = r, r = Mo(Rl, "onSelect"), 0 < r.length && (t = new Fi("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = wn)))
}

function no(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var xn = {
        animationend: no("Animation", "AnimationEnd"),
        animationiteration: no("Animation", "AnimationIteration"),
        animationstart: no("Animation", "AnimationStart"),
        transitionend: no("Transition", "TransitionEnd")
    },
    bs = {},
    id = {};
vt && (id = document.createElement("div").style, "AnimationEvent" in window || (delete xn.animationend.animation, delete xn.animationiteration.animation, delete xn.animationstart.animation), "TransitionEvent" in window || delete xn.transitionend.transition);

function cs(e) {
    if (bs[e]) return bs[e];
    if (!xn[e]) return e;
    var t = xn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in id) return bs[e] = t[n];
    return e
}
var ad = cs("animationend"),
    ud = cs("animationiteration"),
    cd = cs("animationstart"),
    dd = cs("transitionend"),
    fd = new Map,
    Ka = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Qt(e, t) {
    fd.set(e, t), fn(t, [e])
}
for (var Vs = 0; Vs < Ka.length; Vs++) {
    var Ws = Ka[Vs],
        Kh = Ws.toLowerCase(),
        Gh = Ws[0].toUpperCase() + Ws.slice(1);
    Qt(Kh, "on" + Gh)
}
Qt(ad, "onAnimationEnd");
Qt(ud, "onAnimationIteration");
Qt(cd, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(dd, "onTransitionEnd");
Dn("onMouseEnter", ["mouseout", "mouseover"]);
Dn("onMouseLeave", ["mouseout", "mouseover"]);
Dn("onPointerEnter", ["pointerout", "pointerover"]);
Dn("onPointerLeave", ["pointerout", "pointerover"]);
fn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Jh = new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));

function Ga(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Kp(r, t, void 0, e), e.currentTarget = null
}

function pd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var i = r[l],
                        a = i.instance,
                        d = i.currentTarget;
                    if (i = i.listener, a !== s && o.isPropagationStopped()) break e;
                    Ga(o, i, d), s = a
                } else
                    for (l = 0; l < r.length; l++) {
                        if (i = r[l], a = i.instance, d = i.currentTarget, i = i.listener, a !== s && o.isPropagationStopped()) break e;
                        Ga(o, i, d), s = a
                    }
        }
    }
    if (Fo) throw e = Cl, Fo = !1, Cl = null, e
}

function Q(e, t) {
    var n = t[Ml];
    n === void 0 && (n = t[Ml] = new Set);
    var r = e + "__bubble";
    n.has(r) || (hd(t, e, 2, !1), n.add(r))
}

function Qs(e, t, n) {
    var r = 0;
    t && (r |= 4), hd(n, e, r, t)
}
var ro = "_reactListening" + Math.random().toString(36).slice(2);

function Cr(e) {
    if (!e[ro]) {
        e[ro] = !0, Sc.forEach(function(n) {
            n !== "selectionchange" && (Jh.has(n) || Qs(n, !1, e), Qs(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ro] || (t[ro] = !0, Qs("selectionchange", !1, t))
    }
}

function hd(e, t, n, r) {
    switch (Xc(t)) {
        case 1:
            var o = ch;
            break;
        case 4:
            o = dh;
            break;
        default:
            o = Ti
    }
    n = o.bind(null, t, n, e), o = void 0, !Nl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function qs(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var l = r.tag;
        if (l === 3 || l === 4) {
            var i = r.stateNode.containerInfo;
            if (i === o || i.nodeType === 8 && i.parentNode === o) break;
            if (l === 4)
                for (l = r.return; l !== null;) {
                    var a = l.tag;
                    if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
                    l = l.return
                }
            for (; i !== null;) {
                if (l = Yt(i), l === null) return;
                if (a = l.tag, a === 5 || a === 6) {
                    r = s = l;
                    continue e
                }
                i = i.parentNode
            }
        }
        r = r.return
    }
    zc(function() {
        var d = s,
            c = Ni(n),
            f = [];
        e: {
            var p = fd.get(e);
            if (p !== void 0) {
                var w = Fi,
                    v = e;
                switch (e) {
                    case "keypress":
                        if (yo(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        w = Ch;
                        break;
                    case "focusin":
                        v = "focus", w = Us;
                        break;
                    case "focusout":
                        v = "blur", w = Us;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        w = Us;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        w = za;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        w = hh;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        w = Th;
                        break;
                    case ad:
                    case ud:
                    case cd:
                        w = vh;
                        break;
                    case dd:
                        w = Fh;
                        break;
                    case "scroll":
                        w = fh;
                        break;
                    case "wheel":
                        w = Oh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        w = wh;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        w = Aa
                }
                var y = (t & 4) !== 0,
                    _ = !y && e === "scroll",
                    g = y ? p !== null ? p + "Capture" : null : p;
                y = [];
                for (var m = d, h; m !== null;) {
                    h = m;
                    var S = h.stateNode;
                    if (h.tag === 5 && S !== null && (h = S, g !== null && (S = xr(m, g), S != null && y.push(jr(m, S, h)))), _) break;
                    m = m.return
                }
                0 < y.length && (p = new w(p, v, null, n, c), f.push({
                    event: p,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && n !== _l && (v = n.relatedTarget || n.fromElement) && (Yt(v) || v[yt])) break e;
                if ((w || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (v = n.relatedTarget || n.toElement, w = d, v = v ? Yt(v) : null, v !== null && (_ = pn(v), v !== _ || v.tag !== 5 && v.tag !== 6) && (v = null)) : (w = null, v = d), w !== v)) {
                    if (y = za, S = "onMouseLeave", g = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (y = Aa, S = "onPointerLeave", g = "onPointerEnter", m = "pointer"), _ = w == null ? p : Sn(w), h = v == null ? p : Sn(v), p = new y(S, m + "leave", w, n, c), p.target = _, p.relatedTarget = h, S = null, Yt(c) === d && (y = new y(g, m + "enter", v, n, c), y.target = h, y.relatedTarget = _, S = y), _ = S, w && v) t: {
                        for (y = w, g = v, m = 0, h = y; h; h = mn(h)) m++;
                        for (h = 0, S = g; S; S = mn(S)) h++;
                        for (; 0 < m - h;) y = mn(y),
                        m--;
                        for (; 0 < h - m;) g = mn(g),
                        h--;
                        for (; m--;) {
                            if (y === g || g !== null && y === g.alternate) break t;
                            y = mn(y), g = mn(g)
                        }
                        y = null
                    }
                    else y = null;
                    w !== null && Ja(f, p, w, y, !1), v !== null && _ !== null && Ja(f, _, v, y, !0)
                }
            }
            e: {
                if (p = d ? Sn(d) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file") var C = Uh;
                else if (Ha(p))
                    if (rd) C = Vh;
                    else {
                        C = Hh;
                        var T = $h
                    }
                else(w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = bh);
                if (C && (C = C(e, d))) {
                    nd(f, C, n, c);
                    break e
                }
                T && T(e, p, d),
                e === "focusout" && (T = p._wrapperState) && T.controlled && p.type === "number" && yl(p, "number", p.value)
            }
            switch (T = d ? Sn(d) : window, e) {
                case "focusin":
                    (Ha(T) || T.contentEditable === "true") && (wn = T, Rl = d, fr = null);
                    break;
                case "focusout":
                    fr = Rl = wn = null;
                    break;
                case "mousedown":
                    Fl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Fl = !1, qa(f, n, c);
                    break;
                case "selectionchange":
                    if (qh) break;
                case "keydown":
                case "keyup":
                    qa(f, n, c)
            }
            var P;
            if (Oi) e: {
                switch (e) {
                    case "compositionstart":
                        var k = "onCompositionStart";
                        break e;
                    case "compositionend":
                        k = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        k = "onCompositionUpdate";
                        break e
                }
                k = void 0
            }
            else yn ? ed(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");k && (Zc && n.locale !== "ko" && (yn || k !== "onCompositionStart" ? k === "onCompositionEnd" && yn && (P = Yc()) : (Ft = c, Ri = "value" in Ft ? Ft.value : Ft.textContent, yn = !0)), T = Mo(d, k), 0 < T.length && (k = new Ba(k, e, null, n, c), f.push({
                event: k,
                listeners: T
            }), P ? k.data = P : (P = td(n), P !== null && (k.data = P)))),
            (P = Dh ? Mh(e, n) : zh(e, n)) && (d = Mo(d, "onBeforeInput"), 0 < d.length && (c = new Ba("onBeforeInput", "beforeinput", null, n, c), f.push({
                event: c,
                listeners: d
            }), c.data = P))
        }
        pd(f, t)
    })
}

function jr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Mo(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            s = o.stateNode;
        o.tag === 5 && s !== null && (o = s, s = xr(e, n), s != null && r.unshift(jr(e, s, o)), s = xr(e, t), s != null && r.push(jr(e, s, o))), e = e.return
    }
    return r
}

function mn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Ja(e, t, n, r, o) {
    for (var s = t._reactName, l = []; n !== null && n !== r;) {
        var i = n,
            a = i.alternate,
            d = i.stateNode;
        if (a !== null && a === r) break;
        i.tag === 5 && d !== null && (i = d, o ? (a = xr(n, s), a != null && l.unshift(jr(n, a, i))) : o || (a = xr(n, s), a != null && l.push(jr(n, a, i)))), n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var Xh = /\r\n?/g,
    Yh = /\u0000|\uFFFD/g;

function Xa(e) {
    return (typeof e == "string" ? e : "" + e).replace(Xh, `
`).replace(Yh, "")
}

function oo(e, t, n) {
    if (t = Xa(t), Xa(e) !== t && n) throw Error(N(425))
}

function zo() {}
var Ll = null,
    Ol = null;

function Il(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Dl = typeof setTimeout == "function" ? setTimeout : void 0,
    Zh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ya = typeof Promise == "function" ? Promise : void 0,
    em = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ya < "u" ? function(e) {
        return Ya.resolve(null).then(e).catch(tm)
    } : Dl;

function tm(e) {
    setTimeout(function() {
        throw e
    })
}

function Ks(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), _r(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    _r(t)
}

function Bt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Za(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Vn = Math.random().toString(36).slice(2),
    at = "__reactFiber$" + Vn,
    Pr = "__reactProps$" + Vn,
    yt = "__reactContainer$" + Vn,
    Ml = "__reactEvents$" + Vn,
    nm = "__reactListeners$" + Vn,
    rm = "__reactHandles$" + Vn;

function Yt(e) {
    var t = e[at];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[yt] || n[at]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Za(e); e !== null;) {
                    if (n = e[at]) return n;
                    e = Za(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function br(e) {
    return e = e[at] || e[yt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Sn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(N(33))
}

function ds(e) {
    return e[Pr] || null
}
var zl = [],
    En = -1;

function qt(e) {
    return {
        current: e
    }
}

function q(e) {
    0 > En || (e.current = zl[En], zl[En] = null, En--)
}

function W(e, t) {
    En++, zl[En] = e.current, e.current = t
}
var Wt = {},
    ge = qt(Wt),
    Pe = qt(!1),
    sn = Wt;

function Mn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Wt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        s;
    for (s in n) o[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Te(e) {
    return e = e.childContextTypes, e != null
}

function Bo() {
    q(Pe), q(ge)
}

function eu(e, t, n) {
    if (ge.current !== Wt) throw Error(N(168));
    W(ge, t), W(Pe, n)
}

function md(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(N(108, $p(e) || "Unknown", o));
    return X({}, n, r)
}

function Ao(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wt, sn = ge.current, W(ge, e), W(Pe, Pe.current), !0
}

function tu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(N(169));
    n ? (e = md(e, t, sn), r.__reactInternalMemoizedMergedChildContext = e, q(Pe), q(ge), W(ge, e)) : q(Pe), W(Pe, n)
}
var pt = null,
    fs = !1,
    Gs = !1;

function gd(e) {
    pt === null ? pt = [e] : pt.push(e)
}

function om(e) {
    fs = !0, gd(e)
}

function Kt() {
    if (!Gs && pt !== null) {
        Gs = !0;
        var e = 0,
            t = V;
        try {
            var n = pt;
            for (V = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            pt = null, fs = !1
        } catch (o) {
            throw pt !== null && (pt = pt.slice(e + 1)), $c(Ci, Kt), o
        } finally {
            V = t, Gs = !1
        }
    }
    return null
}
var _n = [],
    kn = 0,
    Uo = null,
    $o = 0,
    He = [],
    be = 0,
    ln = null,
    ht = 1,
    mt = "";

function Jt(e, t) {
    _n[kn++] = $o, _n[kn++] = Uo, Uo = e, $o = t
}

function vd(e, t, n) {
    He[be++] = ht, He[be++] = mt, He[be++] = ln, ln = e;
    var r = ht;
    e = mt;
    var o = 32 - et(r) - 1;
    r &= ~(1 << o), n += 1;
    var s = 32 - et(t) + o;
    if (30 < s) {
        var l = o - o % 5;
        s = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, ht = 1 << 32 - et(t) + o | n << o | r, mt = s + e
    } else ht = 1 << s | n << o | r, mt = e
}

function Di(e) {
    e.return !== null && (Jt(e, 1), vd(e, 1, 0))
}

function Mi(e) {
    for (; e === Uo;) Uo = _n[--kn], _n[kn] = null, $o = _n[--kn], _n[kn] = null;
    for (; e === ln;) ln = He[--be], He[be] = null, mt = He[--be], He[be] = null, ht = He[--be], He[be] = null
}
var Me = null,
    Ie = null,
    K = !1,
    Ze = null;

function yd(e, t) {
    var n = Ve(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function nu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Me = e, Ie = Bt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Me = e, Ie = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ln !== null ? {
                id: ht,
                overflow: mt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Ve(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Me = e, Ie = null, !0) : !1;
        default:
            return !1
    }
}

function Bl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Al(e) {
    if (K) {
        var t = Ie;
        if (t) {
            var n = t;
            if (!nu(e, t)) {
                if (Bl(e)) throw Error(N(418));
                t = Bt(n.nextSibling);
                var r = Me;
                t && nu(e, t) ? yd(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, Me = e)
            }
        } else {
            if (Bl(e)) throw Error(N(418));
            e.flags = e.flags & -4097 | 2, K = !1, Me = e
        }
    }
}

function ru(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Me = e
}

function so(e) {
    if (e !== Me) return !1;
    if (!K) return ru(e), K = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Il(e.type, e.memoizedProps)), t && (t = Ie)) {
        if (Bl(e)) throw wd(), Error(N(418));
        for (; t;) yd(e, t), t = Bt(t.nextSibling)
    }
    if (ru(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ie = Bt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ie = null
        }
    } else Ie = Me ? Bt(e.stateNode.nextSibling) : null;
    return !0
}

function wd() {
    for (var e = Ie; e;) e = Bt(e.nextSibling)
}

function zn() {
    Ie = Me = null, K = !1
}

function zi(e) {
    Ze === null ? Ze = [e] : Ze.push(e)
}
var sm = St.ReactCurrentBatchConfig;

function er(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(N(309));
                var r = n.stateNode
            }
            if (!r) throw Error(N(147, e));
            var o = r,
                s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(l) {
                var i = o.refs;
                l === null ? delete i[s] : i[s] = l
            }, t._stringRef = s, t)
        }
        if (typeof e != "string") throw Error(N(284));
        if (!n._owner) throw Error(N(290, e))
    }
    return e
}

function lo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function ou(e) {
    var t = e._init;
    return t(e._payload)
}

function xd(e) {
    function t(g, m) {
        if (e) {
            var h = g.deletions;
            h === null ? (g.deletions = [m], g.flags |= 16) : h.push(m)
        }
    }

    function n(g, m) {
        if (!e) return null;
        for (; m !== null;) t(g, m), m = m.sibling;
        return null
    }

    function r(g, m) {
        for (g = new Map; m !== null;) m.key !== null ? g.set(m.key, m) : g.set(m.index, m), m = m.sibling;
        return g
    }

    function o(g, m) {
        return g = Ht(g, m), g.index = 0, g.sibling = null, g
    }

    function s(g, m, h) {
        return g.index = h, e ? (h = g.alternate, h !== null ? (h = h.index, h < m ? (g.flags |= 2, m) : h) : (g.flags |= 2, m)) : (g.flags |= 1048576, m)
    }

    function l(g) {
        return e && g.alternate === null && (g.flags |= 2), g
    }

    function i(g, m, h, S) {
        return m === null || m.tag !== 6 ? (m = nl(h, g.mode, S), m.return = g, m) : (m = o(m, h), m.return = g, m)
    }

    function a(g, m, h, S) {
        var C = h.type;
        return C === vn ? c(g, m, h.props.children, S, h.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === jt && ou(C) === m.type) ? (S = o(m, h.props), S.ref = er(g, m, h), S.return = g, S) : (S = No(h.type, h.key, h.props, null, g.mode, S), S.ref = er(g, m, h), S.return = g, S)
    }

    function d(g, m, h, S) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== h.containerInfo || m.stateNode.implementation !== h.implementation ? (m = rl(h, g.mode, S), m.return = g, m) : (m = o(m, h.children || []), m.return = g, m)
    }

    function c(g, m, h, S, C) {
        return m === null || m.tag !== 7 ? (m = nn(h, g.mode, S, C), m.return = g, m) : (m = o(m, h), m.return = g, m)
    }

    function f(g, m, h) {
        if (typeof m == "string" && m !== "" || typeof m == "number") return m = nl("" + m, g.mode, h), m.return = g, m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Gr:
                    return h = No(m.type, m.key, m.props, null, g.mode, h), h.ref = er(g, null, m), h.return = g, h;
                case gn:
                    return m = rl(m, g.mode, h), m.return = g, m;
                case jt:
                    var S = m._init;
                    return f(g, S(m._payload), h)
            }
            if (sr(m) || Gn(m)) return m = nn(m, g.mode, h, null), m.return = g, m;
            lo(g, m)
        }
        return null
    }

    function p(g, m, h, S) {
        var C = m !== null ? m.key : null;
        if (typeof h == "string" && h !== "" || typeof h == "number") return C !== null ? null : i(g, m, "" + h, S);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Gr:
                    return h.key === C ? a(g, m, h, S) : null;
                case gn:
                    return h.key === C ? d(g, m, h, S) : null;
                case jt:
                    return C = h._init, p(g, m, C(h._payload), S)
            }
            if (sr(h) || Gn(h)) return C !== null ? null : c(g, m, h, S, null);
            lo(g, h)
        }
        return null
    }

    function w(g, m, h, S, C) {
        if (typeof S == "string" && S !== "" || typeof S == "number") return g = g.get(h) || null, i(m, g, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case Gr:
                    return g = g.get(S.key === null ? h : S.key) || null, a(m, g, S, C);
                case gn:
                    return g = g.get(S.key === null ? h : S.key) || null, d(m, g, S, C);
                case jt:
                    var T = S._init;
                    return w(g, m, h, T(S._payload), C)
            }
            if (sr(S) || Gn(S)) return g = g.get(h) || null, c(m, g, S, C, null);
            lo(m, S)
        }
        return null
    }

    function v(g, m, h, S) {
        for (var C = null, T = null, P = m, k = m = 0, F = null; P !== null && k < h.length; k++) {
            P.index > k ? (F = P, P = null) : F = P.sibling;
            var j = p(g, P, h[k], S);
            if (j === null) {
                P === null && (P = F);
                break
            }
            e && P && j.alternate === null && t(g, P), m = s(j, m, k), T === null ? C = j : T.sibling = j, T = j, P = F
        }
        if (k === h.length) return n(g, P), K && Jt(g, k), C;
        if (P === null) {
            for (; k < h.length; k++) P = f(g, h[k], S), P !== null && (m = s(P, m, k), T === null ? C = P : T.sibling = P, T = P);
            return K && Jt(g, k), C
        }
        for (P = r(g, P); k < h.length; k++) F = w(P, g, k, h[k], S), F !== null && (e && F.alternate !== null && P.delete(F.key === null ? k : F.key), m = s(F, m, k), T === null ? C = F : T.sibling = F, T = F);
        return e && P.forEach(function(A) {
            return t(g, A)
        }), K && Jt(g, k), C
    }

    function y(g, m, h, S) {
        var C = Gn(h);
        if (typeof C != "function") throw Error(N(150));
        if (h = C.call(h), h == null) throw Error(N(151));
        for (var T = C = null, P = m, k = m = 0, F = null, j = h.next(); P !== null && !j.done; k++, j = h.next()) {
            P.index > k ? (F = P, P = null) : F = P.sibling;
            var A = p(g, P, j.value, S);
            if (A === null) {
                P === null && (P = F);
                break
            }
            e && P && A.alternate === null && t(g, P), m = s(A, m, k), T === null ? C = A : T.sibling = A, T = A, P = F
        }
        if (j.done) return n(g, P), K && Jt(g, k), C;
        if (P === null) {
            for (; !j.done; k++, j = h.next()) j = f(g, j.value, S), j !== null && (m = s(j, m, k), T === null ? C = j : T.sibling = j, T = j);
            return K && Jt(g, k), C
        }
        for (P = r(g, P); !j.done; k++, j = h.next()) j = w(P, g, k, j.value, S), j !== null && (e && j.alternate !== null && P.delete(j.key === null ? k : j.key), m = s(j, m, k), T === null ? C = j : T.sibling = j, T = j);
        return e && P.forEach(function(le) {
            return t(g, le)
        }), K && Jt(g, k), C
    }

    function _(g, m, h, S) {
        if (typeof h == "object" && h !== null && h.type === vn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Gr:
                    e: {
                        for (var C = h.key, T = m; T !== null;) {
                            if (T.key === C) {
                                if (C = h.type, C === vn) {
                                    if (T.tag === 7) {
                                        n(g, T.sibling), m = o(T, h.props.children), m.return = g, g = m;
                                        break e
                                    }
                                } else if (T.elementType === C || typeof C == "object" && C !== null && C.$$typeof === jt && ou(C) === T.type) {
                                    n(g, T.sibling), m = o(T, h.props), m.ref = er(g, T, h), m.return = g, g = m;
                                    break e
                                }
                                n(g, T);
                                break
                            } else t(g, T);
                            T = T.sibling
                        }
                        h.type === vn ? (m = nn(h.props.children, g.mode, S, h.key), m.return = g, g = m) : (S = No(h.type, h.key, h.props, null, g.mode, S), S.ref = er(g, m, h), S.return = g, g = S)
                    }
                    return l(g);
                case gn:
                    e: {
                        for (T = h.key; m !== null;) {
                            if (m.key === T)
                                if (m.tag === 4 && m.stateNode.containerInfo === h.containerInfo && m.stateNode.implementation === h.implementation) {
                                    n(g, m.sibling), m = o(m, h.children || []), m.return = g, g = m;
                                    break e
                                } else {
                                    n(g, m);
                                    break
                                }
                            else t(g, m);
                            m = m.sibling
                        }
                        m = rl(h, g.mode, S),
                        m.return = g,
                        g = m
                    }
                    return l(g);
                case jt:
                    return T = h._init, _(g, m, T(h._payload), S)
            }
            if (sr(h)) return v(g, m, h, S);
            if (Gn(h)) return y(g, m, h, S);
            lo(g, h)
        }
        return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, m !== null && m.tag === 6 ? (n(g, m.sibling), m = o(m, h), m.return = g, g = m) : (n(g, m), m = nl(h, g.mode, S), m.return = g, g = m), l(g)) : n(g, m)
    }
    return _
}
var Bn = xd(!0),
    Sd = xd(!1),
    Ho = qt(null),
    bo = null,
    Nn = null,
    Bi = null;

function Ai() {
    Bi = Nn = bo = null
}

function Ui(e) {
    var t = Ho.current;
    q(Ho), e._currentValue = t
}

function Ul(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Ln(e, t) {
    bo = e, Bi = Nn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (je = !0), e.firstContext = null)
}

function qe(e) {
    var t = e._currentValue;
    if (Bi !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Nn === null) {
            if (bo === null) throw Error(N(308));
            Nn = e, bo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Nn = Nn.next = e;
    return t
}
var Zt = null;

function $i(e) {
    Zt === null ? Zt = [e] : Zt.push(e)
}

function Ed(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, $i(t)) : (n.next = o.next, o.next = n), t.interleaved = n, wt(e, r)
}

function wt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Pt = !1;

function Hi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function _d(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function gt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, U & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, wt(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, $i(r)) : (t.next = o.next, o.next = t), r.interleaved = t, wt(e, n)
}

function wo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ji(e, n)
    }
}

function su(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            s = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = l : s = s.next = l, n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Vo(e, t, n, r) {
    var o = e.updateQueue;
    Pt = !1;
    var s = o.firstBaseUpdate,
        l = o.lastBaseUpdate,
        i = o.shared.pending;
    if (i !== null) {
        o.shared.pending = null;
        var a = i,
            d = a.next;
        a.next = null, l === null ? s = d : l.next = d, l = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, i = c.lastBaseUpdate, i !== l && (i === null ? c.firstBaseUpdate = d : i.next = d, c.lastBaseUpdate = a))
    }
    if (s !== null) {
        var f = o.baseState;
        l = 0, c = d = a = null, i = s;
        do {
            var p = i.lane,
                w = i.eventTime;
            if ((r & p) === p) {
                c !== null && (c = c.next = {
                    eventTime: w,
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                });
                e: {
                    var v = e,
                        y = i;
                    switch (p = t, w = n, y.tag) {
                        case 1:
                            if (v = y.payload, typeof v == "function") {
                                f = v.call(w, f, p);
                                break e
                            }
                            f = v;
                            break e;
                        case 3:
                            v.flags = v.flags & -65537 | 128;
                        case 0:
                            if (v = y.payload, p = typeof v == "function" ? v.call(w, f, p) : v, p == null) break e;
                            f = X({}, f, p);
                            break e;
                        case 2:
                            Pt = !0
                    }
                }
                i.callback !== null && i.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [i] : p.push(i))
            } else w = {
                eventTime: w,
                lane: p,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null
            }, c === null ? (d = c = w, a = f) : c = c.next = w, l |= p;
            if (i = i.next, i === null) {
                if (i = o.shared.pending, i === null) break;
                p = i, i = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = f), o.baseState = a, o.firstBaseUpdate = d, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
            o = t;
            do l |= o.lane, o = o.next; while (o !== t)
        } else s === null && (o.shared.lanes = 0);
        un |= l, e.lanes = l, e.memoizedState = f
    }
}

function lu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(N(191, o));
                o.call(r)
            }
        }
}
var Vr = {},
    ct = qt(Vr),
    Tr = qt(Vr),
    Rr = qt(Vr);

function en(e) {
    if (e === Vr) throw Error(N(174));
    return e
}

function bi(e, t) {
    switch (W(Rr, t), W(Tr, e), W(ct, Vr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : xl(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = xl(t, e)
    }
    q(ct), W(ct, t)
}

function An() {
    q(ct), q(Tr), q(Rr)
}

function kd(e) {
    en(Rr.current);
    var t = en(ct.current),
        n = xl(t, e.type);
    t !== n && (W(Tr, e), W(ct, n))
}

function Vi(e) {
    Tr.current === e && (q(ct), q(Tr))
}
var G = qt(0);

function Wo(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Js = [];

function Wi() {
    for (var e = 0; e < Js.length; e++) Js[e]._workInProgressVersionPrimary = null;
    Js.length = 0
}
var xo = St.ReactCurrentDispatcher,
    Xs = St.ReactCurrentBatchConfig,
    an = 0,
    J = null,
    oe = null,
    ie = null,
    Qo = !1,
    pr = !1,
    Fr = 0,
    lm = 0;

function pe() {
    throw Error(N(321))
}

function Qi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!rt(e[n], t[n])) return !1;
    return !0
}

function qi(e, t, n, r, o, s) {
    if (an = s, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, xo.current = e === null || e.memoizedState === null ? cm : dm, e = n(r, o), pr) {
        s = 0;
        do {
            if (pr = !1, Fr = 0, 25 <= s) throw Error(N(301));
            s += 1, ie = oe = null, t.updateQueue = null, xo.current = fm, e = n(r, o)
        } while (pr)
    }
    if (xo.current = qo, t = oe !== null && oe.next !== null, an = 0, ie = oe = J = null, Qo = !1, t) throw Error(N(300));
    return e
}

function Ki() {
    var e = Fr !== 0;
    return Fr = 0, e
}

function it() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ie === null ? J.memoizedState = ie = e : ie = ie.next = e, ie
}

function Ke() {
    if (oe === null) {
        var e = J.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = oe.next;
    var t = ie === null ? J.memoizedState : ie.next;
    if (t !== null) ie = t, oe = e;
    else {
        if (e === null) throw Error(N(310));
        oe = e, e = {
            memoizedState: oe.memoizedState,
            baseState: oe.baseState,
            baseQueue: oe.baseQueue,
            queue: oe.queue,
            next: null
        }, ie === null ? J.memoizedState = ie = e : ie = ie.next = e
    }
    return ie
}

function Lr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Ys(e) {
    var t = Ke(),
        n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = oe,
        o = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var l = o.next;
            o.next = s.next, s.next = l
        }
        r.baseQueue = o = s, n.pending = null
    }
    if (o !== null) {
        s = o.next, r = r.baseState;
        var i = l = null,
            a = null,
            d = s;
        do {
            var c = d.lane;
            if ((an & c) === c) a !== null && (a = a.next = {
                lane: 0,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null
            }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
                var f = {
                    lane: c,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                a === null ? (i = a = f, l = r) : a = a.next = f, J.lanes |= c, un |= c
            }
            d = d.next
        } while (d !== null && d !== s);
        a === null ? l = r : a.next = i, rt(r, t.memoizedState) || (je = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do s = o.lane, J.lanes |= s, un |= s, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Zs(e) {
    var t = Ke(),
        n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var l = o = o.next;
        do s = e(s, l.action), l = l.next; while (l !== o);
        rt(s, t.memoizedState) || (je = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
    }
    return [s, r]
}

function Nd() {}

function Cd(e, t) {
    var n = J,
        r = Ke(),
        o = t(),
        s = !rt(r.memoizedState, o);
    if (s && (r.memoizedState = o, je = !0), r = r.queue, Gi(Td.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ie !== null && ie.memoizedState.tag & 1) {
        if (n.flags |= 2048, Or(9, Pd.bind(null, n, r, o, t), void 0, null), ae === null) throw Error(N(349));
        an & 30 || jd(n, t, o)
    }
    return o
}

function jd(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = J.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, J.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Pd(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Rd(t) && Fd(e)
}

function Td(e, t, n) {
    return n(function() {
        Rd(t) && Fd(e)
    })
}

function Rd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !rt(e, n)
    } catch {
        return !0
    }
}

function Fd(e) {
    var t = wt(e, 1);
    t !== null && tt(t, e, 1, -1)
}

function iu(e) {
    var t = it();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Lr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = um.bind(null, J, e), [t.memoizedState, e]
}

function Or(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = J.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, J.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Ld() {
    return Ke().memoizedState
}

function So(e, t, n, r) {
    var o = it();
    J.flags |= e, o.memoizedState = Or(1 | t, n, void 0, r === void 0 ? null : r)
}

function ps(e, t, n, r) {
    var o = Ke();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (oe !== null) {
        var l = oe.memoizedState;
        if (s = l.destroy, r !== null && Qi(r, l.deps)) {
            o.memoizedState = Or(t, n, s, r);
            return
        }
    }
    J.flags |= e, o.memoizedState = Or(1 | t, n, s, r)
}

function au(e, t) {
    return So(8390656, 8, e, t)
}

function Gi(e, t) {
    return ps(2048, 8, e, t)
}

function Od(e, t) {
    return ps(4, 2, e, t)
}

function Id(e, t) {
    return ps(4, 4, e, t)
}

function Dd(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Md(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ps(4, 4, Dd.bind(null, t, e), n)
}

function Ji() {}

function zd(e, t) {
    var n = Ke();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Bd(e, t) {
    var n = Ke();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Ad(e, t, n) {
    return an & 21 ? (rt(n, t) || (n = Vc(), J.lanes |= n, un |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, je = !0), e.memoizedState = n)
}

function im(e, t) {
    var n = V;
    V = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Xs.transition;
    Xs.transition = {};
    try {
        e(!1), t()
    } finally {
        V = n, Xs.transition = r
    }
}

function Ud() {
    return Ke().memoizedState
}

function am(e, t, n) {
    var r = $t(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, $d(e)) Hd(t, n);
    else if (n = Ed(e, t, n, r), n !== null) {
        var o = Se();
        tt(n, e, r, o), bd(n, t, r)
    }
}

function um(e, t, n) {
    var r = $t(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if ($d(e)) Hd(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
            var l = t.lastRenderedState,
                i = s(l, n);
            if (o.hasEagerState = !0, o.eagerState = i, rt(i, l)) {
                var a = t.interleaved;
                a === null ? (o.next = o, $i(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = Ed(e, t, o, r), n !== null && (o = Se(), tt(n, e, r, o), bd(n, t, r))
    }
}

function $d(e) {
    var t = e.alternate;
    return e === J || t !== null && t === J
}

function Hd(e, t) {
    pr = Qo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function bd(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ji(e, n)
    }
}
var qo = {
        readContext: qe,
        useCallback: pe,
        useContext: pe,
        useEffect: pe,
        useImperativeHandle: pe,
        useInsertionEffect: pe,
        useLayoutEffect: pe,
        useMemo: pe,
        useReducer: pe,
        useRef: pe,
        useState: pe,
        useDebugValue: pe,
        useDeferredValue: pe,
        useTransition: pe,
        useMutableSource: pe,
        useSyncExternalStore: pe,
        useId: pe,
        unstable_isNewReconciler: !1
    },
    cm = {
        readContext: qe,
        useCallback: function(e, t) {
            return it().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: qe,
        useEffect: au,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, So(4194308, 4, Dd.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return So(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return So(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = it();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = it();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = am.bind(null, J, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = it();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: iu,
        useDebugValue: Ji,
        useDeferredValue: function(e) {
            return it().memoizedState = e
        },
        useTransition: function() {
            var e = iu(!1),
                t = e[0];
            return e = im.bind(null, e[1]), it().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = J,
                o = it();
            if (K) {
                if (n === void 0) throw Error(N(407));
                n = n()
            } else {
                if (n = t(), ae === null) throw Error(N(349));
                an & 30 || jd(r, t, n)
            }
            o.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return o.queue = s, au(Td.bind(null, r, s, e), [e]), r.flags |= 2048, Or(9, Pd.bind(null, r, s, n, t), void 0, null), n
        },
        useId: function() {
            var e = it(),
                t = ae.identifierPrefix;
            if (K) {
                var n = mt,
                    r = ht;
                n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Fr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = lm++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    dm = {
        readContext: qe,
        useCallback: zd,
        useContext: qe,
        useEffect: Gi,
        useImperativeHandle: Md,
        useInsertionEffect: Od,
        useLayoutEffect: Id,
        useMemo: Bd,
        useReducer: Ys,
        useRef: Ld,
        useState: function() {
            return Ys(Lr)
        },
        useDebugValue: Ji,
        useDeferredValue: function(e) {
            var t = Ke();
            return Ad(t, oe.memoizedState, e)
        },
        useTransition: function() {
            var e = Ys(Lr)[0],
                t = Ke().memoizedState;
            return [e, t]
        },
        useMutableSource: Nd,
        useSyncExternalStore: Cd,
        useId: Ud,
        unstable_isNewReconciler: !1
    },
    fm = {
        readContext: qe,
        useCallback: zd,
        useContext: qe,
        useEffect: Gi,
        useImperativeHandle: Md,
        useInsertionEffect: Od,
        useLayoutEffect: Id,
        useMemo: Bd,
        useReducer: Zs,
        useRef: Ld,
        useState: function() {
            return Zs(Lr)
        },
        useDebugValue: Ji,
        useDeferredValue: function(e) {
            var t = Ke();
            return oe === null ? t.memoizedState = e : Ad(t, oe.memoizedState, e)
        },
        useTransition: function() {
            var e = Zs(Lr)[0],
                t = Ke().memoizedState;
            return [e, t]
        },
        useMutableSource: Nd,
        useSyncExternalStore: Cd,
        useId: Ud,
        unstable_isNewReconciler: !1
    };

function Xe(e, t) {
    if (e && e.defaultProps) {
        t = X({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function $l(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : X({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var hs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? pn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Se(),
            o = $t(e),
            s = gt(r, o);
        s.payload = t, n != null && (s.callback = n), t = At(e, s, o), t !== null && (tt(t, e, o, r), wo(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Se(),
            o = $t(e),
            s = gt(r, o);
        s.tag = 1, s.payload = t, n != null && (s.callback = n), t = At(e, s, o), t !== null && (tt(t, e, o, r), wo(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Se(),
            r = $t(e),
            o = gt(n, r);
        o.tag = 2, t != null && (o.callback = t), t = At(e, o, r), t !== null && (tt(t, e, r, n), wo(t, e, r))
    }
};

function uu(e, t, n, r, o, s, l) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, l) : t.prototype && t.prototype.isPureReactComponent ? !Nr(n, r) || !Nr(o, s) : !0
}

function Vd(e, t, n) {
    var r = !1,
        o = Wt,
        s = t.contextType;
    return typeof s == "object" && s !== null ? s = qe(s) : (o = Te(t) ? sn : ge.current, r = t.contextTypes, s = (r = r != null) ? Mn(e, o) : Wt), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t
}

function cu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hs.enqueueReplaceState(t, t.state, null)
}

function Hl(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, Hi(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = qe(s) : (s = Te(t) ? sn : ge.current, o.context = Mn(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && ($l(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && hs.enqueueReplaceState(o, o.state, null), Vo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function Un(e, t) {
    try {
        var n = "",
            r = t;
        do n += Up(r), r = r.return; while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function el(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function bl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var pm = typeof WeakMap == "function" ? WeakMap : Map;

function Wd(e, t, n) {
    n = gt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Go || (Go = !0, Zl = r), bl(e, t)
    }, n
}

function Qd(e, t, n) {
    n = gt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            bl(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        bl(e, t), typeof r != "function" && (Ut === null ? Ut = new Set([this]) : Ut.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }), n
}

function du(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new pm;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = jm.bind(null, e, t, n), t.then(e, e))
}

function fu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function pu(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gt(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e)
}
var hm = St.ReactCurrentOwner,
    je = !1;

function we(e, t, n, r) {
    t.child = e === null ? Sd(t, null, n, r) : Bn(t, e.child, n, r)
}

function hu(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return Ln(t, o), r = qi(e, t, n, r, s, o), n = Ki(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, xt(e, t, o)) : (K && n && Di(t), t.flags |= 1, we(e, t, r, o), t.child)
}

function mu(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !oa(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, qd(e, t, s, r, o)) : (e = No(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (s = e.child, !(e.lanes & o)) {
        var l = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Nr, n(l, r) && e.ref === t.ref) return xt(e, t, o)
    }
    return t.flags |= 1, e = Ht(s, r), e.ref = t.ref, e.return = t, t.child = e
}

function qd(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Nr(s, r) && e.ref === t.ref)
            if (je = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (je = !0);
            else return t.lanes = e.lanes, xt(e, t, o)
    }
    return Vl(e, t, n, r, o)
}

function Kd(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, W(jn, Oe), Oe |= n;
        else {
            if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, W(jn, Oe), Oe |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = s !== null ? s.baseLanes : n, W(jn, Oe), Oe |= r
        }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, W(jn, Oe), Oe |= r;
    return we(e, t, o, n), t.child
}

function Gd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Vl(e, t, n, r, o) {
    var s = Te(n) ? sn : ge.current;
    return s = Mn(t, s), Ln(t, o), n = qi(e, t, n, r, s, o), r = Ki(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, xt(e, t, o)) : (K && r && Di(t), t.flags |= 1, we(e, t, n, o), t.child)
}

function gu(e, t, n, r, o) {
    if (Te(n)) {
        var s = !0;
        Ao(t)
    } else s = !1;
    if (Ln(t, o), t.stateNode === null) Eo(e, t), Vd(t, n, r), Hl(t, n, r, o), r = !0;
    else if (e === null) {
        var l = t.stateNode,
            i = t.memoizedProps;
        l.props = i;
        var a = l.context,
            d = n.contextType;
        typeof d == "object" && d !== null ? d = qe(d) : (d = Te(n) ? sn : ge.current, d = Mn(t, d));
        var c = n.getDerivedStateFromProps,
            f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (i !== r || a !== d) && cu(t, l, r, d), Pt = !1;
        var p = t.memoizedState;
        l.state = p, Vo(t, r, l, o), a = t.memoizedState, i !== r || p !== a || Pe.current || Pt ? (typeof c == "function" && ($l(t, n, c, r), a = t.memoizedState), (i = Pt || uu(t, n, i, r, p, a, d)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = d, r = i) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        l = t.stateNode, _d(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : Xe(t.type, i), l.props = d, f = t.pendingProps, p = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = qe(a) : (a = Te(n) ? sn : ge.current, a = Mn(t, a));
        var w = n.getDerivedStateFromProps;
        (c = typeof w == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (i !== f || p !== a) && cu(t, l, r, a), Pt = !1, p = t.memoizedState, l.state = p, Vo(t, r, l, o);
        var v = t.memoizedState;
        i !== f || p !== v || Pe.current || Pt ? (typeof w == "function" && ($l(t, n, w, r), v = t.memoizedState), (d = Pt || uu(t, n, d, r, p, v, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, v, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, v, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), l.props = r, l.state = v, l.context = a, r = d) : (typeof l.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Wl(e, t, n, r, s, o)
}

function Wl(e, t, n, r, o, s) {
    Gd(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return o && tu(t, n, !1), xt(e, t, s);
    r = t.stateNode, hm.current = t;
    var i = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && l ? (t.child = Bn(t, e.child, null, s), t.child = Bn(t, null, i, s)) : we(e, t, i, s), t.memoizedState = r.state, o && tu(t, n, !0), t.child
}

function Jd(e) {
    var t = e.stateNode;
    t.pendingContext ? eu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && eu(e, t.context, !1), bi(e, t.containerInfo)
}

function vu(e, t, n, r, o) {
    return zn(), zi(o), t.flags |= 256, we(e, t, n, r), t.child
}
var Ql = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function ql(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Xd(e, t, n) {
    var r = t.pendingProps,
        o = G.current,
        s = !1,
        l = (t.flags & 128) !== 0,
        i;
    if ((i = l) || (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), i ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), W(G, o & 1), e === null) return Al(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, l = {
        mode: "hidden",
        children: l
    }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = l) : s = vs(l, r, 0, null), e = nn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = ql(n), t.memoizedState = Ql, e) : Xi(t, l));
    if (o = e.memoizedState, o !== null && (i = o.dehydrated, i !== null)) return mm(e, t, l, r, i, o, n);
    if (s) {
        s = r.fallback, l = t.mode, o = e.child, i = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Ht(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), i !== null ? s = Ht(i, s) : (s = nn(s, l, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, l = e.child.memoizedState, l = l === null ? ql(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        }, s.memoizedState = l, s.childLanes = e.childLanes & ~n, t.memoizedState = Ql, r
    }
    return s = e.child, e = s.sibling, r = Ht(s, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Xi(e, t) {
    return t = vs({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function io(e, t, n, r) {
    return r !== null && zi(r), Bn(t, e.child, null, n), e = Xi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function mm(e, t, n, r, o, s, l) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = el(Error(N(422))), io(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = vs({
        mode: "visible",
        children: r.children
    }, o, 0, null), s = nn(s, o, l, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Bn(t, e.child, null, l), t.child.memoizedState = ql(l), t.memoizedState = Ql, s);
    if (!(t.mode & 1)) return io(e, t, l, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var i = r.dgst;
        return r = i, s = Error(N(419)), r = el(s, r, void 0), io(e, t, l, r)
    }
    if (i = (l & e.childLanes) !== 0, je || i) {
        if (r = ae, r !== null) {
            switch (l & -l) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, wt(e, o), tt(r, e, o, -1))
        }
        return ra(), r = el(Error(N(421))), io(e, t, l, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Pm.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, Ie = Bt(o.nextSibling), Me = t, K = !0, Ze = null, e !== null && (He[be++] = ht, He[be++] = mt, He[be++] = ln, ht = e.id, mt = e.overflow, ln = t), t = Xi(t, r.children), t.flags |= 4096, t)
}

function yu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ul(e.return, t, n)
}

function tl(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o)
}

function Yd(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        s = r.tail;
    if (we(e, t, r.children, n), r = G.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && yu(e, n, t);
            else if (e.tag === 19) yu(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (W(G, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && Wo(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), tl(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && Wo(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            tl(t, !0, n, null, s);
            break;
        case "together":
            tl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Eo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function xt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), un |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Ht(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function gm(e, t, n) {
    switch (t.tag) {
        case 3:
            Jd(t), zn();
            break;
        case 5:
            kd(t);
            break;
        case 1:
            Te(t.type) && Ao(t);
            break;
        case 4:
            bi(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            W(Ho, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (W(G, G.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Xd(e, t, n) : (W(G, G.current & 1), e = xt(e, t, n), e !== null ? e.sibling : null);
            W(G, G.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Yd(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), W(G, G.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Kd(e, t, n)
    }
    return xt(e, t, n)
}
var Zd, Kl, ef, tf;
Zd = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Kl = function() {};
ef = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, en(ct.current);
        var s = null;
        switch (n) {
            case "input":
                o = gl(e, o), r = gl(e, r), s = [];
                break;
            case "select":
                o = X({}, o, {
                    value: void 0
                }), r = X({}, r, {
                    value: void 0
                }), s = [];
                break;
            case "textarea":
                o = wl(e, o), r = wl(e, r), s = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = zo)
        }
        Sl(n, r);
        var l;
        n = null;
        for (d in o)
            if (!r.hasOwnProperty(d) && o.hasOwnProperty(d) && o[d] != null)
                if (d === "style") {
                    var i = o[d];
                    for (l in i) i.hasOwnProperty(l) && (n || (n = {}), n[l] = "")
                } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (yr.hasOwnProperty(d) ? s || (s = []) : (s = s || []).push(d, null));
        for (d in r) {
            var a = r[d];
            if (i = o != null ? o[d] : void 0, r.hasOwnProperty(d) && a !== i && (a != null || i != null))
                if (d === "style")
                    if (i) {
                        for (l in i) !i.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                        for (l in a) a.hasOwnProperty(l) && i[l] !== a[l] && (n || (n = {}), n[l] = a[l])
                    } else n || (s || (s = []), s.push(d, n)), n = a;
            else d === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, i = i ? i.__html : void 0, a != null && i !== a && (s = s || []).push(d, a)) : d === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(d, "" + a) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (yr.hasOwnProperty(d) ? (a != null && d === "onScroll" && Q("scroll", e), s || i === a || (s = [])) : (s = s || []).push(d, a))
        }
        n && (s = s || []).push("style", n);
        var d = s;
        (t.updateQueue = d) && (t.flags |= 4)
    }
};
tf = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function tr(e, t) {
    if (!K) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function he(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function vm(e, t, n) {
    var r = t.pendingProps;
    switch (Mi(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return he(t), null;
        case 1:
            return Te(t.type) && Bo(), he(t), null;
        case 3:
            return r = t.stateNode, An(), q(Pe), q(ge), Wi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (so(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ze !== null && (ni(Ze), Ze = null))), Kl(e, t), he(t), null;
        case 5:
            Vi(t);
            var o = en(Rr.current);
            if (n = t.type, e !== null && t.stateNode != null) ef(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(N(166));
                    return he(t), null
                }
                if (e = en(ct.current), so(t)) {
                    r = t.stateNode, n = t.type;
                    var s = t.memoizedProps;
                    switch (r[at] = t, r[Pr] = s, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            Q("cancel", r), Q("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Q("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < ir.length; o++) Q(ir[o], r);
                            break;
                        case "source":
                            Q("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Q("error", r), Q("load", r);
                            break;
                        case "details":
                            Q("toggle", r);
                            break;
                        case "input":
                            ja(r, s), Q("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            }, Q("invalid", r);
                            break;
                        case "textarea":
                            Ta(r, s), Q("invalid", r)
                    }
                    Sl(n, s), o = null;
                    for (var l in s)
                        if (s.hasOwnProperty(l)) {
                            var i = s[l];
                            l === "children" ? typeof i == "string" ? r.textContent !== i && (s.suppressHydrationWarning !== !0 && oo(r.textContent, i, e), o = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (s.suppressHydrationWarning !== !0 && oo(r.textContent, i, e), o = ["children", "" + i]) : yr.hasOwnProperty(l) && i != null && l === "onScroll" && Q("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Jr(r), Pa(r, s, !0);
                            break;
                        case "textarea":
                            Jr(r), Ra(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = zo)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Tc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                        is: r.is
                    }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[at] = t, e[Pr] = r, Zd(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (l = El(n, r), n) {
                            case "dialog":
                                Q("cancel", e), Q("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Q("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < ir.length; o++) Q(ir[o], e);
                                o = r;
                                break;
                            case "source":
                                Q("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Q("error", e), Q("load", e), o = r;
                                break;
                            case "details":
                                Q("toggle", e), o = r;
                                break;
                            case "input":
                                ja(e, r), o = gl(e, r), Q("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = X({}, r, {
                                    value: void 0
                                }), Q("invalid", e);
                                break;
                            case "textarea":
                                Ta(e, r), o = wl(e, r), Q("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        Sl(n, o),
                        i = o;
                        for (s in i)
                            if (i.hasOwnProperty(s)) {
                                var a = i[s];
                                s === "style" ? Lc(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Rc(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && wr(e, a) : typeof a == "number" && wr(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (yr.hasOwnProperty(s) ? a != null && s === "onScroll" && Q("scroll", e) : a != null && Si(e, s, a, l))
                            }
                        switch (n) {
                            case "input":
                                Jr(e), Pa(e, r, !1);
                                break;
                            case "textarea":
                                Jr(e), Ra(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Vt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, s = r.value, s != null ? Pn(e, !!r.multiple, s, !1) : r.defaultValue != null && Pn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = zo)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return he(t), null;
        case 6:
            if (e && t.stateNode != null) tf(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
                if (n = en(Rr.current), en(ct.current), so(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[at] = t, (s = r.nodeValue !== n) && (e = Me, e !== null)) switch (e.tag) {
                        case 3:
                            oo(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && oo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    s && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[at] = t, t.stateNode = r
            }
            return he(t), null;
        case 13:
            if (q(G), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (K && Ie !== null && t.mode & 1 && !(t.flags & 128)) wd(), zn(), t.flags |= 98560, s = !1;
                else if (s = so(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s) throw Error(N(318));
                        if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(N(317));
                        s[at] = t
                    } else zn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    he(t), s = !1
                } else Ze !== null && (ni(Ze), Ze = null), s = !0;
                if (!s) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || G.current & 1 ? se === 0 && (se = 3) : ra())), t.updateQueue !== null && (t.flags |= 4), he(t), null);
        case 4:
            return An(), Kl(e, t), e === null && Cr(t.stateNode.containerInfo), he(t), null;
        case 10:
            return Ui(t.type._context), he(t), null;
        case 17:
            return Te(t.type) && Bo(), he(t), null;
        case 19:
            if (q(G), s = t.memoizedState, s === null) return he(t), null;
            if (r = (t.flags & 128) !== 0, l = s.rendering, l === null)
                if (r) tr(s, !1);
                else {
                    if (se !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (l = Wo(e), l !== null) {
                                for (t.flags |= 128, tr(s, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, l = s.alternate, l === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = l.childLanes, s.lanes = l.lanes, s.child = l.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = l.memoizedProps, s.memoizedState = l.memoizedState, s.updateQueue = l.updateQueue, s.type = l.type, e = l.dependencies, s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return W(G, G.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && ee() > $n && (t.flags |= 128, r = !0, tr(s, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Wo(l), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), tr(s, !0), s.tail === null && s.tailMode === "hidden" && !l.alternate && !K) return he(t), null
                    } else 2 * ee() - s.renderingStartTime > $n && n !== 1073741824 && (t.flags |= 128, r = !0, tr(s, !1), t.lanes = 4194304);
                s.isBackwards ? (l.sibling = t.child, t.child = l) : (n = s.last, n !== null ? n.sibling = l : t.child = l, s.last = l)
            }
            return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = ee(), t.sibling = null, n = G.current, W(G, r ? n & 1 | 2 : n & 1), t) : (he(t), null);
        case 22:
        case 23:
            return na(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Oe & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(N(156, t.tag))
}

function ym(e, t) {
    switch (Mi(t), t.tag) {
        case 1:
            return Te(t.type) && Bo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return An(), q(Pe), q(ge), Wi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Vi(t), null;
        case 13:
            if (q(G), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(N(340));
                zn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return q(G), null;
        case 4:
            return An(), null;
        case 10:
            return Ui(t.type._context), null;
        case 22:
        case 23:
            return na(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var ao = !1,
    me = !1,
    wm = typeof WeakSet == "function" ? WeakSet : Set,
    L = null;

function Cn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Y(e, t, r)
        } else n.current = null
}

function Gl(e, t, n) {
    try {
        n()
    } catch (r) {
        Y(e, t, r)
    }
}
var wu = !1;

function xm(e, t) {
    if (Ll = Io, e = ld(), Ii(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType
                } catch {
                    n = null;
                    break e
                }
                var l = 0,
                    i = -1,
                    a = -1,
                    d = 0,
                    c = 0,
                    f = e,
                    p = null;
                t: for (;;) {
                    for (var w; f !== n || o !== 0 && f.nodeType !== 3 || (i = l + o), f !== s || r !== 0 && f.nodeType !== 3 || (a = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (w = f.firstChild) !== null;) p = f, f = w;
                    for (;;) {
                        if (f === e) break t;
                        if (p === n && ++d === o && (i = l), p === s && ++c === r && (a = l), (w = f.nextSibling) !== null) break;
                        f = p, p = f.parentNode
                    }
                    f = w
                }
                n = i === -1 || a === -1 ? null : {
                    start: i,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Ol = {
            focusedElem: e,
            selectionRange: n
        }, Io = !1, L = t; L !== null;)
        if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
        else
            for (; L !== null;) {
                t = L;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var y = v.memoizedProps,
                                    _ = v.memoizedState,
                                    g = t.stateNode,
                                    m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Xe(t.type, y), _);
                                g.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var h = t.stateNode.containerInfo;
                            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                    }
                } catch (S) {
                    Y(t, t.return, S)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, L = e;
                    break
                }
                L = t.return
            }
    return v = wu, wu = !1, v
}

function hr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0, s !== void 0 && Gl(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}

function ms(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Jl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function nf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, nf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[at], delete t[Pr], delete t[Ml], delete t[nm], delete t[rm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function rf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function xu(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || rf(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Xl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = zo));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Xl(e, t, n), e = e.sibling; e !== null;) Xl(e, t, n), e = e.sibling
}

function Yl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Yl(e, t, n), e = e.sibling; e !== null;) Yl(e, t, n), e = e.sibling
}
var ce = null,
    Ye = !1;

function Nt(e, t, n) {
    for (n = n.child; n !== null;) of (e, t, n), n = n.sibling
}

function of (e, t, n) {
    if (ut && typeof ut.onCommitFiberUnmount == "function") try {
        ut.onCommitFiberUnmount(is, n)
    } catch {}
    switch (n.tag) {
        case 5:
            me || Cn(n, t);
        case 6:
            var r = ce,
                o = Ye;
            ce = null, Nt(e, t, n), ce = r, Ye = o, ce !== null && (Ye ? (e = ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
            break;
        case 18:
            ce !== null && (Ye ? (e = ce, n = n.stateNode, e.nodeType === 8 ? Ks(e.parentNode, n) : e.nodeType === 1 && Ks(e, n), _r(e)) : Ks(ce, n.stateNode));
            break;
        case 4:
            r = ce, o = Ye, ce = n.stateNode.containerInfo, Ye = !0, Nt(e, t, n), ce = r, Ye = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var s = o,
                        l = s.destroy;
                    s = s.tag, l !== void 0 && (s & 2 || s & 4) && Gl(n, t, l), o = o.next
                } while (o !== r)
            }
            Nt(e, t, n);
            break;
        case 1:
            if (!me && (Cn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (i) {
                Y(n, t, i)
            }
            Nt(e, t, n);
            break;
        case 21:
            Nt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (me = (r = me) || n.memoizedState !== null, Nt(e, t, n), me = r) : Nt(e, t, n);
            break;
        default:
            Nt(e, t, n)
    }
}

function Su(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new wm), t.forEach(function(r) {
            var o = Tm.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function Je(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e,
                    l = t,
                    i = l;
                e: for (; i !== null;) {
                    switch (i.tag) {
                        case 5:
                            ce = i.stateNode, Ye = !1;
                            break e;
                        case 3:
                            ce = i.stateNode.containerInfo, Ye = !0;
                            break e;
                        case 4:
                            ce = i.stateNode.containerInfo, Ye = !0;
                            break e
                    }
                    i = i.return
                }
                if (ce === null) throw Error(N(160)); of (s, l, o), ce = null, Ye = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null
            } catch (d) {
                Y(o, t, d)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) sf(t, e), t = t.sibling
}

function sf(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Je(t, e), lt(e), r & 4) {
                try {
                    hr(3, e, e.return), ms(3, e)
                } catch (y) {
                    Y(e, e.return, y)
                }
                try {
                    hr(5, e, e.return)
                } catch (y) {
                    Y(e, e.return, y)
                }
            }
            break;
        case 1:
            Je(t, e), lt(e), r & 512 && n !== null && Cn(n, n.return);
            break;
        case 5:
            if (Je(t, e), lt(e), r & 512 && n !== null && Cn(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    wr(o, "")
                } catch (y) {
                    Y(e, e.return, y)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var s = e.memoizedProps,
                    l = n !== null ? n.memoizedProps : s,
                    i = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    i === "input" && s.type === "radio" && s.name != null && jc(o, s), El(i, l);
                    var d = El(i, s);
                    for (l = 0; l < a.length; l += 2) {
                        var c = a[l],
                            f = a[l + 1];
                        c === "style" ? Lc(o, f) : c === "dangerouslySetInnerHTML" ? Rc(o, f) : c === "children" ? wr(o, f) : Si(o, c, f, d)
                    }
                    switch (i) {
                        case "input":
                            vl(o, s);
                            break;
                        case "textarea":
                            Pc(o, s);
                            break;
                        case "select":
                            var p = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!s.multiple;
                            var w = s.value;
                            w != null ? Pn(o, !!s.multiple, w, !1) : p !== !!s.multiple && (s.defaultValue != null ? Pn(o, !!s.multiple, s.defaultValue, !0) : Pn(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[Pr] = s
                } catch (y) {
                    Y(e, e.return, y)
                }
            }
            break;
        case 6:
            if (Je(t, e), lt(e), r & 4) {
                if (e.stateNode === null) throw Error(N(162));
                o = e.stateNode, s = e.memoizedProps;
                try {
                    o.nodeValue = s
                } catch (y) {
                    Y(e, e.return, y)
                }
            }
            break;
        case 3:
            if (Je(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                _r(t.containerInfo)
            } catch (y) {
                Y(e, e.return, y)
            }
            break;
        case 4:
            Je(t, e), lt(e);
            break;
        case 13:
            Je(t, e), lt(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (ea = ee())), r & 4 && Su(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (me = (d = me) || c, Je(t, e), me = d) : Je(t, e), lt(e), r & 8192) {
                if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !c && e.mode & 1)
                    for (L = e, c = e.child; c !== null;) {
                        for (f = L = c; L !== null;) {
                            switch (p = L, w = p.child, p.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    hr(4, p, p.return);
                                    break;
                                case 1:
                                    Cn(p, p.return);
                                    var v = p.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = p, n = p.return;
                                        try {
                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                        } catch (y) {
                                            Y(r, n, y)
                                        }
                                    }
                                    break;
                                case 5:
                                    Cn(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        _u(f);
                                        continue
                                    }
                            }
                            w !== null ? (w.return = p, L = w) : _u(f)
                        }
                        c = c.sibling
                    }
                e: for (c = null, f = e;;) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                o = f.stateNode, d ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (i = f.stateNode, a = f.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, i.style.display = Fc("display", l))
                            } catch (y) {
                                Y(e, e.return, y)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null) try {
                            f.stateNode.nodeValue = d ? "" : f.memoizedProps
                        } catch (y) {
                            Y(e, e.return, y)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        c === f && (c = null), f = f.return
                    }
                    c === f && (c = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            Je(t, e), lt(e), r & 4 && Su(e);
            break;
        case 21:
            break;
        default:
            Je(t, e), lt(e)
    }
}

function lt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (rf(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (wr(o, ""), r.flags &= -33);
                    var s = xu(e);
                    Yl(e, s, o);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo,
                        i = xu(e);
                    Xl(e, i, l);
                    break;
                default:
                    throw Error(N(161))
            }
        }
        catch (a) {
            Y(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Sm(e, t, n) {
    L = e, lf(e)
}

function lf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null;) {
        var o = L,
            s = o.child;
        if (o.tag === 22 && r) {
            var l = o.memoizedState !== null || ao;
            if (!l) {
                var i = o.alternate,
                    a = i !== null && i.memoizedState !== null || me;
                i = ao;
                var d = me;
                if (ao = l, (me = a) && !d)
                    for (L = o; L !== null;) l = L, a = l.child, l.tag === 22 && l.memoizedState !== null ? ku(o) : a !== null ? (a.return = l, L = a) : ku(o);
                for (; s !== null;) L = s, lf(s), s = s.sibling;
                L = o, ao = i, me = d
            }
            Eu(e)
        } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, L = s) : Eu(e)
    }
}

function Eu(e) {
    for (; L !== null;) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        me || ms(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !me)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Xe(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && lu(t, s, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            lu(t, l, n)
                        }
                        break;
                    case 5:
                        var i = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = i;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var c = d.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && _r(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(N(163))
                }
                me || t.flags & 512 && Jl(t)
            } catch (p) {
                Y(t, t.return, p)
            }
        }
        if (t === e) {
            L = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, L = n;
            break
        }
        L = t.return
    }
}

function _u(e) {
    for (; L !== null;) {
        var t = L;
        if (t === e) {
            L = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, L = n;
            break
        }
        L = t.return
    }
}

function ku(e) {
    for (; L !== null;) {
        var t = L;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ms(4, t)
                    } catch (a) {
                        Y(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            Y(t, o, a)
                        }
                    }
                    var s = t.return;
                    try {
                        Jl(t)
                    } catch (a) {
                        Y(t, s, a)
                    }
                    break;
                case 5:
                    var l = t.return;
                    try {
                        Jl(t)
                    } catch (a) {
                        Y(t, l, a)
                    }
            }
        } catch (a) {
            Y(t, t.return, a)
        }
        if (t === e) {
            L = null;
            break
        }
        var i = t.sibling;
        if (i !== null) {
            i.return = t.return, L = i;
            break
        }
        L = t.return
    }
}
var Em = Math.ceil,
    Ko = St.ReactCurrentDispatcher,
    Yi = St.ReactCurrentOwner,
    We = St.ReactCurrentBatchConfig,
    U = 0,
    ae = null,
    ne = null,
    de = 0,
    Oe = 0,
    jn = qt(0),
    se = 0,
    Ir = null,
    un = 0,
    gs = 0,
    Zi = 0,
    mr = null,
    Ce = null,
    ea = 0,
    $n = 1 / 0,
    ft = null,
    Go = !1,
    Zl = null,
    Ut = null,
    uo = !1,
    Lt = null,
    Jo = 0,
    gr = 0,
    ei = null,
    _o = -1,
    ko = 0;

function Se() {
    return U & 6 ? ee() : _o !== -1 ? _o : _o = ee()
}

function $t(e) {
    return e.mode & 1 ? U & 2 && de !== 0 ? de & -de : sm.transition !== null ? (ko === 0 && (ko = Vc()), ko) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Xc(e.type)), e) : 1
}

function tt(e, t, n, r) {
    if (50 < gr) throw gr = 0, ei = null, Error(N(185));
    $r(e, n, r), (!(U & 2) || e !== ae) && (e === ae && (!(U & 2) && (gs |= n), se === 4 && Rt(e, de)), Re(e, r), n === 1 && U === 0 && !(t.mode & 1) && ($n = ee() + 500, fs && Kt()))
}

function Re(e, t) {
    var n = e.callbackNode;
    sh(e, t);
    var r = Oo(e, e === ae ? de : 0);
    if (r === 0) n !== null && Oa(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Oa(n), t === 1) e.tag === 0 ? om(Nu.bind(null, e)) : gd(Nu.bind(null, e)), em(function() {
            !(U & 6) && Kt()
        }), n = null;
        else {
            switch (Wc(r)) {
                case 1:
                    n = Ci;
                    break;
                case 4:
                    n = Hc;
                    break;
                case 16:
                    n = Lo;
                    break;
                case 536870912:
                    n = bc;
                    break;
                default:
                    n = Lo
            }
            n = mf(n, af.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function af(e, t) {
    if (_o = -1, ko = 0, U & 6) throw Error(N(327));
    var n = e.callbackNode;
    if (On() && e.callbackNode !== n) return null;
    var r = Oo(e, e === ae ? de : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Xo(e, r);
    else {
        t = r;
        var o = U;
        U |= 2;
        var s = cf();
        (ae !== e || de !== t) && (ft = null, $n = ee() + 500, tn(e, t));
        do try {
            Nm();
            break
        } catch (i) {
            uf(e, i)
        }
        while (!0);
        Ai(), Ko.current = s, U = o, ne !== null ? t = 0 : (ae = null, de = 0, t = se)
    }
    if (t !== 0) {
        if (t === 2 && (o = jl(e), o !== 0 && (r = o, t = ti(e, o))), t === 1) throw n = Ir, tn(e, 0), Rt(e, r), Re(e, ee()), n;
        if (t === 6) Rt(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !_m(o) && (t = Xo(e, r), t === 2 && (s = jl(e), s !== 0 && (r = s, t = ti(e, s))), t === 1)) throw n = Ir, tn(e, 0), Rt(e, r), Re(e, ee()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(N(345));
                case 2:
                    Xt(e, Ce, ft);
                    break;
                case 3:
                    if (Rt(e, r), (r & 130023424) === r && (t = ea + 500 - ee(), 10 < t)) {
                        if (Oo(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            Se(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = Dl(Xt.bind(null, e, Ce, ft), t);
                        break
                    }
                    Xt(e, Ce, ft);
                    break;
                case 4:
                    if (Rt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var l = 31 - et(r);
                        s = 1 << l, l = t[l], l > o && (o = l), r &= ~s
                    }
                    if (r = o, r = ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Em(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Dl(Xt.bind(null, e, Ce, ft), r);
                        break
                    }
                    Xt(e, Ce, ft);
                    break;
                case 5:
                    Xt(e, Ce, ft);
                    break;
                default:
                    throw Error(N(329))
            }
        }
    }
    return Re(e, ee()), e.callbackNode === n ? af.bind(null, e) : null
}

function ti(e, t) {
    var n = mr;
    return e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256), e = Xo(e, t), e !== 2 && (t = Ce, Ce = n, t !== null && ni(t)), e
}

function ni(e) {
    Ce === null ? Ce = e : Ce.push.apply(Ce, e)
}

function _m(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!rt(s(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Rt(e, t) {
    for (t &= ~Zi, t &= ~gs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - et(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Nu(e) {
    if (U & 6) throw Error(N(327));
    On();
    var t = Oo(e, 0);
    if (!(t & 1)) return Re(e, ee()), null;
    var n = Xo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = jl(e);
        r !== 0 && (t = r, n = ti(e, r))
    }
    if (n === 1) throw n = Ir, tn(e, 0), Rt(e, t), Re(e, ee()), n;
    if (n === 6) throw Error(N(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Xt(e, Ce, ft), Re(e, ee()), null
}

function ta(e, t) {
    var n = U;
    U |= 1;
    try {
        return e(t)
    } finally {
        U = n, U === 0 && ($n = ee() + 500, fs && Kt())
    }
}

function cn(e) {
    Lt !== null && Lt.tag === 0 && !(U & 6) && On();
    var t = U;
    U |= 1;
    var n = We.transition,
        r = V;
    try {
        if (We.transition = null, V = 1, e) return e()
    } finally {
        V = r, We.transition = n, U = t, !(U & 6) && Kt()
    }
}

function na() {
    Oe = jn.current, q(jn)
}

function tn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Zh(n)), ne !== null)
        for (n = ne.return; n !== null;) {
            var r = n;
            switch (Mi(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Bo();
                    break;
                case 3:
                    An(), q(Pe), q(ge), Wi();
                    break;
                case 5:
                    Vi(r);
                    break;
                case 4:
                    An();
                    break;
                case 13:
                    q(G);
                    break;
                case 19:
                    q(G);
                    break;
                case 10:
                    Ui(r.type._context);
                    break;
                case 22:
                case 23:
                    na()
            }
            n = n.return
        }
    if (ae = e, ne = e = Ht(e.current, null), de = Oe = t, se = 0, Ir = null, Zi = gs = un = 0, Ce = mr = null, Zt !== null) {
        for (t = 0; t < Zt.length; t++)
            if (n = Zt[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    s = n.pending;
                if (s !== null) {
                    var l = s.next;
                    s.next = o, r.next = l
                }
                n.pending = r
            }
        Zt = null
    }
    return e
}

function uf(e, t) {
    do {
        var n = ne;
        try {
            if (Ai(), xo.current = qo, Qo) {
                for (var r = J.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                Qo = !1
            }
            if (an = 0, ie = oe = J = null, pr = !1, Fr = 0, Yi.current = null, n === null || n.return === null) {
                se = 1, Ir = t, ne = null;
                break
            }
            e: {
                var s = e,
                    l = n.return,
                    i = n,
                    a = t;
                if (t = de, i.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var d = a,
                        c = i,
                        f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var p = c.alternate;
                        p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var w = fu(l);
                    if (w !== null) {
                        w.flags &= -257, pu(w, l, i, s, t), w.mode & 1 && du(s, d, t), t = w, a = d;
                        var v = t.updateQueue;
                        if (v === null) {
                            var y = new Set;
                            y.add(a), t.updateQueue = y
                        } else v.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            du(s, d, t), ra();
                            break e
                        }
                        a = Error(N(426))
                    }
                } else if (K && i.mode & 1) {
                    var _ = fu(l);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256), pu(_, l, i, s, t), zi(Un(a, i));
                        break e
                    }
                }
                s = a = Un(a, i),
                se !== 4 && (se = 2),
                mr === null ? mr = [s] : mr.push(s),
                s = l;do {
                    switch (s.tag) {
                        case 3:
                            s.flags |= 65536, t &= -t, s.lanes |= t;
                            var g = Wd(s, a, t);
                            su(s, g);
                            break e;
                        case 1:
                            i = a;
                            var m = s.type,
                                h = s.stateNode;
                            if (!(s.flags & 128) && (typeof m.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Ut === null || !Ut.has(h)))) {
                                s.flags |= 65536, t &= -t, s.lanes |= t;
                                var S = Qd(s, i, t);
                                su(s, S);
                                break e
                            }
                    }
                    s = s.return
                } while (s !== null)
            }
            ff(n)
        } catch (C) {
            t = C, ne === n && n !== null && (ne = n = n.return);
            continue
        }
        break
    } while (!0)
}

function cf() {
    var e = Ko.current;
    return Ko.current = qo, e === null ? qo : e
}

function ra() {
    (se === 0 || se === 3 || se === 2) && (se = 4), ae === null || !(un & 268435455) && !(gs & 268435455) || Rt(ae, de)
}

function Xo(e, t) {
    var n = U;
    U |= 2;
    var r = cf();
    (ae !== e || de !== t) && (ft = null, tn(e, t));
    do try {
        km();
        break
    } catch (o) {
        uf(e, o)
    }
    while (!0);
    if (Ai(), U = n, Ko.current = r, ne !== null) throw Error(N(261));
    return ae = null, de = 0, se
}

function km() {
    for (; ne !== null;) df(ne)
}

function Nm() {
    for (; ne !== null && !Jp();) df(ne)
}

function df(e) {
    var t = hf(e.alternate, e, Oe);
    e.memoizedProps = e.pendingProps, t === null ? ff(e) : ne = t, Yi.current = null
}

function ff(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = ym(n, t), n !== null) {
                n.flags &= 32767, ne = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                se = 6, ne = null;
                return
            }
        } else if (n = vm(n, t, Oe), n !== null) {
            ne = n;
            return
        }
        if (t = t.sibling, t !== null) {
            ne = t;
            return
        }
        ne = t = e
    } while (t !== null);
    se === 0 && (se = 5)
}

function Xt(e, t, n) {
    var r = V,
        o = We.transition;
    try {
        We.transition = null, V = 1, Cm(e, t, n, r)
    } finally {
        We.transition = o, V = r
    }
    return null
}

function Cm(e, t, n, r) {
    do On(); while (Lt !== null);
    if (U & 6) throw Error(N(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(N(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (lh(e, s), e === ae && (ne = ae = null, de = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || uo || (uo = !0, mf(Lo, function() {
            return On(), null
        })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
        s = We.transition, We.transition = null;
        var l = V;
        V = 1;
        var i = U;
        U |= 4, Yi.current = null, xm(e, n), sf(n, e), Qh(Ol), Io = !!Ll, Ol = Ll = null, e.current = n, Sm(n), Xp(), U = i, V = l, We.transition = s
    } else e.current = n;
    if (uo && (uo = !1, Lt = e, Jo = o), s = e.pendingLanes, s === 0 && (Ut = null), eh(n.stateNode), Re(e, ee()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (Go) throw Go = !1, e = Zl, Zl = null, e;
    return Jo & 1 && e.tag !== 0 && On(), s = e.pendingLanes, s & 1 ? e === ei ? gr++ : (gr = 0, ei = e) : gr = 0, Kt(), null
}

function On() {
    if (Lt !== null) {
        var e = Wc(Jo),
            t = We.transition,
            n = V;
        try {
            if (We.transition = null, V = 16 > e ? 16 : e, Lt === null) var r = !1;
            else {
                if (e = Lt, Lt = null, Jo = 0, U & 6) throw Error(N(331));
                var o = U;
                for (U |= 4, L = e.current; L !== null;) {
                    var s = L,
                        l = s.child;
                    if (L.flags & 16) {
                        var i = s.deletions;
                        if (i !== null) {
                            for (var a = 0; a < i.length; a++) {
                                var d = i[a];
                                for (L = d; L !== null;) {
                                    var c = L;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            hr(8, c, s)
                                    }
                                    var f = c.child;
                                    if (f !== null) f.return = c, L = f;
                                    else
                                        for (; L !== null;) {
                                            c = L;
                                            var p = c.sibling,
                                                w = c.return;
                                            if (nf(c), c === d) {
                                                L = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = w, L = p;
                                                break
                                            }
                                            L = w
                                        }
                                }
                            }
                            var v = s.alternate;
                            if (v !== null) {
                                var y = v.child;
                                if (y !== null) {
                                    v.child = null;
                                    do {
                                        var _ = y.sibling;
                                        y.sibling = null, y = _
                                    } while (y !== null)
                                }
                            }
                            L = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && l !== null) l.return = s, L = l;
                    else e: for (; L !== null;) {
                        if (s = L, s.flags & 2048) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                hr(9, s, s.return)
                        }
                        var g = s.sibling;
                        if (g !== null) {
                            g.return = s.return, L = g;
                            break e
                        }
                        L = s.return
                    }
                }
                var m = e.current;
                for (L = m; L !== null;) {
                    l = L;
                    var h = l.child;
                    if (l.subtreeFlags & 2064 && h !== null) h.return = l, L = h;
                    else e: for (l = m; L !== null;) {
                        if (i = L, i.flags & 2048) try {
                            switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ms(9, i)
                            }
                        } catch (C) {
                            Y(i, i.return, C)
                        }
                        if (i === l) {
                            L = null;
                            break e
                        }
                        var S = i.sibling;
                        if (S !== null) {
                            S.return = i.return, L = S;
                            break e
                        }
                        L = i.return
                    }
                }
                if (U = o, Kt(), ut && typeof ut.onPostCommitFiberRoot == "function") try {
                    ut.onPostCommitFiberRoot(is, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            V = n, We.transition = t
        }
    }
    return !1
}

function Cu(e, t, n) {
    t = Un(n, t), t = Wd(e, t, 1), e = At(e, t, 1), t = Se(), e !== null && ($r(e, 1, t), Re(e, t))
}

function Y(e, t, n) {
    if (e.tag === 3) Cu(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Cu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ut === null || !Ut.has(r))) {
                    e = Un(n, e), e = Qd(t, e, 1), t = At(t, e, 1), e = Se(), t !== null && ($r(t, 1, e), Re(t, e));
                    break
                }
            }
            t = t.return
        }
}

function jm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Se(), e.pingedLanes |= e.suspendedLanes & n, ae === e && (de & n) === n && (se === 4 || se === 3 && (de & 130023424) === de && 500 > ee() - ea ? tn(e, 0) : Zi |= n), Re(e, t)
}

function pf(e, t) {
    t === 0 && (e.mode & 1 ? (t = Zr, Zr <<= 1, !(Zr & 130023424) && (Zr = 4194304)) : t = 1);
    var n = Se();
    e = wt(e, t), e !== null && ($r(e, t, n), Re(e, n))
}

function Pm(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), pf(e, n)
}

function Tm(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(N(314))
    }
    r !== null && r.delete(t), pf(e, n)
}
var hf;
hf = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Pe.current) je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return je = !1, gm(e, t, n);
            je = !!(e.flags & 131072)
        }
    else je = !1, K && t.flags & 1048576 && vd(t, $o, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Eo(e, t), e = t.pendingProps;
            var o = Mn(t, ge.current);
            Ln(t, n), o = qi(null, t, r, e, o, n);
            var s = Ki();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (s = !0, Ao(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Hi(t), o.updater = hs, t.stateNode = o, o._reactInternals = t, Hl(t, r, e, n), t = Wl(null, t, r, !0, s, n)) : (t.tag = 0, K && s && Di(t), we(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Eo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Fm(r), e = Xe(r, e), o) {
                    case 0:
                        t = Vl(null, t, r, e, n);
                        break e;
                    case 1:
                        t = gu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = hu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = mu(null, t, r, Xe(r.type, e), n);
                        break e
                }
                throw Error(N(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xe(r, o), Vl(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xe(r, o), gu(e, t, r, o, n);
        case 3:
            e: {
                if (Jd(t), e === null) throw Error(N(387));r = t.pendingProps,
                s = t.memoizedState,
                o = s.element,
                _d(e, t),
                Vo(t, r, null, n);
                var l = t.memoizedState;
                if (r = l.element, s.isDehydrated)
                    if (s = {
                            element: r,
                            isDehydrated: !1,
                            cache: l.cache,
                            pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                            transitions: l.transitions
                        }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                        o = Un(Error(N(423)), t), t = vu(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = Un(Error(N(424)), t), t = vu(e, t, r, n, o);
                    break e
                } else
                    for (Ie = Bt(t.stateNode.containerInfo.firstChild), Me = t, K = !0, Ze = null, n = Sd(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (zn(), r === o) {
                        t = xt(e, t, n);
                        break e
                    }
                    we(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return kd(t), e === null && Al(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, l = o.children, Il(r, o) ? l = null : s !== null && Il(r, s) && (t.flags |= 32), Gd(e, t), we(e, t, l, n), t.child;
        case 6:
            return e === null && Al(t), null;
        case 13:
            return Xd(e, t, n);
        case 4:
            return bi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Bn(t, null, r, n) : we(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xe(r, o), hu(e, t, r, o, n);
        case 7:
            return we(e, t, t.pendingProps, n), t.child;
        case 8:
            return we(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return we(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, l = o.value, W(Ho, r._currentValue), r._currentValue = l, s !== null)
                    if (rt(s.value, l)) {
                        if (s.children === o.children && !Pe.current) {
                            t = xt(e, t, n);
                            break e
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null;) {
                            var i = s.dependencies;
                            if (i !== null) {
                                l = s.child;
                                for (var a = i.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (s.tag === 1) {
                                            a = gt(-1, n & -n), a.tag = 2;
                                            var d = s.updateQueue;
                                            if (d !== null) {
                                                d = d.shared;
                                                var c = d.pending;
                                                c === null ? a.next = a : (a.next = c.next, c.next = a), d.pending = a
                                            }
                                        }
                                        s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Ul(s.return, n, t), i.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (s.tag === 10) l = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (l = s.return, l === null) throw Error(N(341));
                                l.lanes |= n, i = l.alternate, i !== null && (i.lanes |= n), Ul(l, n, t), l = s.sibling
                            } else l = s.child;
                            if (l !== null) l.return = s;
                            else
                                for (l = s; l !== null;) {
                                    if (l === t) {
                                        l = null;
                                        break
                                    }
                                    if (s = l.sibling, s !== null) {
                                        s.return = l.return, l = s;
                                        break
                                    }
                                    l = l.return
                                }
                            s = l
                        }
                we(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, Ln(t, n), o = qe(o), r = r(o), t.flags |= 1, we(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = Xe(r, t.pendingProps), o = Xe(r.type, o), mu(e, t, r, o, n);
        case 15:
            return qd(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xe(r, o), Eo(e, t), t.tag = 1, Te(r) ? (e = !0, Ao(t)) : e = !1, Ln(t, n), Vd(t, r, o), Hl(t, r, o, n), Wl(null, t, r, !0, e, n);
        case 19:
            return Yd(e, t, n);
        case 22:
            return Kd(e, t, n)
    }
    throw Error(N(156, t.tag))
};

function mf(e, t) {
    return $c(e, t)
}

function Rm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ve(e, t, n, r) {
    return new Rm(e, t, n, r)
}

function oa(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Fm(e) {
    if (typeof e == "function") return oa(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === _i) return 11;
        if (e === ki) return 14
    }
    return 2
}

function Ht(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ve(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function No(e, t, n, r, o, s) {
    var l = 2;
    if (r = e, typeof e == "function") oa(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else e: switch (e) {
        case vn:
            return nn(n.children, o, s, t);
        case Ei:
            l = 8, o |= 8;
            break;
        case fl:
            return e = Ve(12, n, t, o | 2), e.elementType = fl, e.lanes = s, e;
        case pl:
            return e = Ve(13, n, t, o), e.elementType = pl, e.lanes = s, e;
        case hl:
            return e = Ve(19, n, t, o), e.elementType = hl, e.lanes = s, e;
        case kc:
            return vs(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Ec:
                    l = 10;
                    break e;
                case _c:
                    l = 9;
                    break e;
                case _i:
                    l = 11;
                    break e;
                case ki:
                    l = 14;
                    break e;
                case jt:
                    l = 16, r = null;
                    break e
            }
            throw Error(N(130, e == null ? e : typeof e, ""))
    }
    return t = Ve(l, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t
}

function nn(e, t, n, r) {
    return e = Ve(7, e, r, t), e.lanes = n, e
}

function vs(e, t, n, r) {
    return e = Ve(22, e, r, t), e.elementType = kc, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function nl(e, t, n) {
    return e = Ve(6, e, null, t), e.lanes = n, e
}

function rl(e, t, n) {
    return t = Ve(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Lm(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zs(0), this.expirationTimes = zs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zs(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function sa(e, t, n, r, o, s, l, i, a) {
    return e = new Lm(e, t, n, i, a), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Ve(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Hi(s), e
}

function Om(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: gn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function gf(e) {
    if (!e) return Wt;
    e = e._reactInternals;
    e: {
        if (pn(e) !== e || e.tag !== 1) throw Error(N(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Te(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Te(n)) return md(e, n, t)
    }
    return t
}

function vf(e, t, n, r, o, s, l, i, a) {
    return e = sa(n, r, !0, e, o, s, l, i, a), e.context = gf(null), n = e.current, r = Se(), o = $t(n), s = gt(r, o), s.callback = t ? ? null, At(n, s, o), e.current.lanes = o, $r(e, o, r), Re(e, r), e
}

function ys(e, t, n, r) {
    var o = t.current,
        s = Se(),
        l = $t(o);
    return n = gf(n), t.context === null ? t.context = n : t.pendingContext = n, t = gt(s, l), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(o, t, l), e !== null && (tt(e, o, l, s), wo(e, o, l)), l
}

function Yo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function ju(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function la(e, t) {
    ju(e, t), (e = e.alternate) && ju(e, t)
}

function Im() {
    return null
}
var yf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function ia(e) {
    this._internalRoot = e
}
ws.prototype.render = ia.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(N(409));
    ys(e, t, null, null)
};
ws.prototype.unmount = ia.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        cn(function() {
            ys(null, e, null, null)
        }), t[yt] = null
    }
};

function ws(e) {
    this._internalRoot = e
}
ws.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Kc();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
        Tt.splice(n, 0, e), n === 0 && Jc(e)
    }
};

function aa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function xs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Pu() {}

function Dm(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var d = Yo(l);
                s.call(d)
            }
        }
        var l = vf(t, r, e, 0, null, !1, !1, "", Pu);
        return e._reactRootContainer = l, e[yt] = l.current, Cr(e.nodeType === 8 ? e.parentNode : e), cn(), l
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var i = r;
        r = function() {
            var d = Yo(a);
            i.call(d)
        }
    }
    var a = sa(e, 0, !1, null, null, !1, !1, "", Pu);
    return e._reactRootContainer = a, e[yt] = a.current, Cr(e.nodeType === 8 ? e.parentNode : e), cn(function() {
        ys(t, a, n, r)
    }), a
}

function Ss(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var l = s;
        if (typeof o == "function") {
            var i = o;
            o = function() {
                var a = Yo(l);
                i.call(a)
            }
        }
        ys(t, l, e, o)
    } else l = Dm(n, t, e, o, r);
    return Yo(l)
}
Qc = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = lr(t.pendingLanes);
                n !== 0 && (ji(t, n | 1), Re(t, ee()), !(U & 6) && ($n = ee() + 500, Kt()))
            }
            break;
        case 13:
            cn(function() {
                var r = wt(e, 1);
                if (r !== null) {
                    var o = Se();
                    tt(r, e, 1, o)
                }
            }), la(e, 1)
    }
};
Pi = function(e) {
    if (e.tag === 13) {
        var t = wt(e, 134217728);
        if (t !== null) {
            var n = Se();
            tt(t, e, 134217728, n)
        }
        la(e, 134217728)
    }
};
qc = function(e) {
    if (e.tag === 13) {
        var t = $t(e),
            n = wt(e, t);
        if (n !== null) {
            var r = Se();
            tt(n, e, t, r)
        }
        la(e, t)
    }
};
Kc = function() {
    return V
};
Gc = function(e, t) {
    var n = V;
    try {
        return V = e, t()
    } finally {
        V = n
    }
};
kl = function(e, t, n) {
    switch (t) {
        case "input":
            if (vl(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = ds(r);
                        if (!o) throw Error(N(90));
                        Cc(r), vl(r, o)
                    }
                }
            }
            break;
        case "textarea":
            Pc(e, n);
            break;
        case "select":
            t = n.value, t != null && Pn(e, !!n.multiple, t, !1)
    }
};
Dc = ta;
Mc = cn;
var Mm = {
        usingClientEntryPoint: !1,
        Events: [br, Sn, ds, Oc, Ic, ta]
    },
    nr = {
        findFiberByHostInstance: Yt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    zm = {
        bundleType: nr.bundleType,
        version: nr.version,
        rendererPackageName: nr.rendererPackageName,
        rendererConfig: nr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: St.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Ac(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: nr.findFiberByHostInstance || Im,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var co = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!co.isDisabled && co.supportsFiber) try {
        is = co.inject(zm), ut = co
    } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mm;
Be.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!aa(t)) throw Error(N(200));
    return Om(e, t, null, n)
};
Be.createRoot = function(e, t) {
    if (!aa(e)) throw Error(N(299));
    var n = !1,
        r = "",
        o = yf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = sa(e, 1, !1, null, null, n, !1, r, o), e[yt] = t.current, Cr(e.nodeType === 8 ? e.parentNode : e), new ia(t)
};
Be.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
    return e = Ac(t), e = e === null ? null : e.stateNode, e
};
Be.flushSync = function(e) {
    return cn(e)
};
Be.hydrate = function(e, t, n) {
    if (!xs(t)) throw Error(N(200));
    return Ss(null, e, t, !0, n)
};
Be.hydrateRoot = function(e, t, n) {
    if (!aa(e)) throw Error(N(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        s = "",
        l = yf;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = vf(t, null, e, 1, n ? ? null, o, !1, s, l), e[yt] = t.current, Cr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new ws(t)
};
Be.render = function(e, t, n) {
    if (!xs(t)) throw Error(N(200));
    return Ss(null, e, t, !1, n)
};
Be.unmountComponentAtNode = function(e) {
    if (!xs(e)) throw Error(N(40));
    return e._reactRootContainer ? (cn(function() {
        Ss(null, null, e, !1, function() {
            e._reactRootContainer = null, e[yt] = null
        })
    }), !0) : !1
};
Be.unstable_batchedUpdates = ta;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!xs(n)) throw Error(N(200));
    if (e == null || e._reactInternals === void 0) throw Error(N(38));
    return Ss(e, t, n, !1, r)
};
Be.version = "18.3.1-next-f1338f8080-20240426";

function wf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wf)
    } catch (e) {
        console.error(e)
    }
}
wf(), yc.exports = Be;
var Bm = yc.exports,
    Tu = Bm;
cl.createRoot = Tu.createRoot, cl.hydrateRoot = Tu.hydrateRoot;
/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Dr() {
    return Dr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Dr.apply(this, arguments)
}
var Ot;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Ot || (Ot = {}));
const Ru = "popstate";

function Am(e) {
    e === void 0 && (e = {});

    function t(r, o) {
        let {
            pathname: s,
            search: l,
            hash: i
        } = r.location;
        return ri("", {
            pathname: s,
            search: l,
            hash: i
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(r, o) {
        return typeof o == "string" ? o : Zo(o)
    }
    return $m(t, n, null, e)
}

function te(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function xf(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function Um() {
    return Math.random().toString(36).substr(2, 8)
}

function Fu(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function ri(e, t, n, r) {
    return n === void 0 && (n = null), Dr({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Wn(t) : t, {
        state: n,
        key: t && t.key || r || Um()
    })
}

function Zo(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Wn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function $m(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: o = document.defaultView,
        v5Compat: s = !1
    } = r, l = o.history, i = Ot.Pop, a = null, d = c();
    d == null && (d = 0, l.replaceState(Dr({}, l.state, {
        idx: d
    }), ""));

    function c() {
        return (l.state || {
            idx: null
        }).idx
    }

    function f() {
        i = Ot.Pop;
        let _ = c(),
            g = _ == null ? null : _ - d;
        d = _, a && a({
            action: i,
            location: y.location,
            delta: g
        })
    }

    function p(_, g) {
        i = Ot.Push;
        let m = ri(y.location, _, g);
        d = c() + 1;
        let h = Fu(m, d),
            S = y.createHref(m);
        try {
            l.pushState(h, "", S)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            o.location.assign(S)
        }
        s && a && a({
            action: i,
            location: y.location,
            delta: 1
        })
    }

    function w(_, g) {
        i = Ot.Replace;
        let m = ri(y.location, _, g);
        d = c();
        let h = Fu(m, d),
            S = y.createHref(m);
        l.replaceState(h, "", S), s && a && a({
            action: i,
            location: y.location,
            delta: 0
        })
    }

    function v(_) {
        let g = o.location.origin !== "null" ? o.location.origin : o.location.href,
            m = typeof _ == "string" ? _ : Zo(_);
        return m = m.replace(/ $/, "%20"), te(g, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, g)
    }
    let y = {
        get action() {
            return i
        },
        get location() {
            return e(o, l)
        },
        listen(_) {
            if (a) throw new Error("A history only accepts one active listener");
            return o.addEventListener(Ru, f), a = _, () => {
                o.removeEventListener(Ru, f), a = null
            }
        },
        createHref(_) {
            return t(o, _)
        },
        createURL: v,
        encodeLocation(_) {
            let g = v(_);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: p,
        replace: w,
        go(_) {
            return l.go(_)
        }
    };
    return y
}
var Lu;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Lu || (Lu = {}));

function Hm(e, t, n) {
    return n === void 0 && (n = "/"), bm(e, t, n, !1)
}

function bm(e, t, n, r) {
    let o = typeof t == "string" ? Wn(t) : t,
        s = ua(o.pathname || "/", n);
    if (s == null) return null;
    let l = Sf(e);
    Vm(l);
    let i = null;
    for (let a = 0; i == null && a < l.length; ++a) {
        let d = tg(s);
        i = Zm(l[a], d, r)
    }
    return i
}

function Sf(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (s, l, i) => {
        let a = {
            relativePath: i === void 0 ? s.path || "" : i,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: l,
            route: s
        };
        a.relativePath.startsWith("/") && (te(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
        let d = bt([r, a.relativePath]),
            c = n.concat(a);
        s.children && s.children.length > 0 && (te(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + d + '".')), Sf(s.children, t, c, d)), !(s.path == null && !s.index) && t.push({
            path: d,
            score: Xm(d, s.index),
            routesMeta: c
        })
    };
    return e.forEach((s, l) => {
        var i;
        if (s.path === "" || !((i = s.path) != null && i.includes("?"))) o(s, l);
        else
            for (let a of Ef(s.path)) o(s, l, a)
    }), t
}

function Ef(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), s = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [s, ""] : [s];
    let l = Ef(r.join("/")),
        i = [];
    return i.push(...l.map(a => a === "" ? s : [s, a].join("/"))), o && i.push(...l), i.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function Vm(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Ym(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Wm = /^:[\w-]+$/,
    Qm = 3,
    qm = 2,
    Km = 1,
    Gm = 10,
    Jm = -2,
    Ou = e => e === "*";

function Xm(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Ou) && (r += Jm), t && (r += qm), n.filter(o => !Ou(o)).reduce((o, s) => o + (Wm.test(s) ? Qm : s === "" ? Km : Gm), r)
}

function Ym(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function Zm(e, t, n) {
    let {
        routesMeta: r
    } = e, o = {}, s = "/", l = [];
    for (let i = 0; i < r.length; ++i) {
        let a = r[i],
            d = i === r.length - 1,
            c = s === "/" ? t : t.slice(s.length) || "/",
            f = Iu({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: d
            }, c),
            p = a.route;
        if (!f && d && n && !r[r.length - 1].route.index && (f = Iu({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: !1
            }, c)), !f) return null;
        Object.assign(o, f.params), l.push({
            params: o,
            pathname: bt([s, f.pathname]),
            pathnameBase: sg(bt([s, f.pathnameBase])),
            route: p
        }), f.pathnameBase !== "/" && (s = bt([s, f.pathnameBase]))
    }
    return l
}

function Iu(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = eg(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let s = o[0],
        l = s.replace(/(.)\/+$/, "$1"),
        i = o.slice(1);
    return {
        params: r.reduce((d, c, f) => {
            let {
                paramName: p,
                isOptional: w
            } = c;
            if (p === "*") {
                let y = i[f] || "";
                l = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const v = i[f];
            return w && !v ? d[p] = void 0 : d[p] = (v || "").replace(/%2F/g, "/"), d
        }, {}),
        pathname: s,
        pathnameBase: l,
        pattern: e
    }
}

function eg(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), xf(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (l, i, a) => (r.push({
            paramName: i,
            isOptional: a != null
        }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function tg(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return xf(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function ua(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function ng(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: o = ""
    } = typeof e == "string" ? Wn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : rg(n, t) : t,
        search: lg(r),
        hash: ig(o)
    }
}

function rg(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }), n.length > 1 ? n.join("/") : "/"
}

function ol(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function og(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function ca(e, t) {
    let n = og(e);
    return t ? n.map((r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function da(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = Wn(e) : (o = Dr({}, e), te(!o.pathname || !o.pathname.includes("?"), ol("?", "pathname", "search", o)), te(!o.pathname || !o.pathname.includes("#"), ol("#", "pathname", "hash", o)), te(!o.search || !o.search.includes("#"), ol("#", "search", "hash", o)));
    let s = e === "" || o.pathname === "",
        l = s ? "/" : o.pathname,
        i;
    if (l == null) i = n;
    else {
        let f = t.length - 1;
        if (!r && l.startsWith("..")) {
            let p = l.split("/");
            for (; p[0] === "..";) p.shift(), f -= 1;
            o.pathname = p.join("/")
        }
        i = f >= 0 ? t[f] : "/"
    }
    let a = ng(o, i),
        d = l && l !== "/" && l.endsWith("/"),
        c = (s || l === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (d || c) && (a.pathname += "/"), a
}
const bt = e => e.join("/").replace(/\/\/+/g, "/"),
    sg = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    lg = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    ig = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function ag(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const _f = ["post", "put", "patch", "delete"];
new Set(_f);
const ug = ["get", ..._f];
new Set(ug);
/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Mr() {
    return Mr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Mr.apply(this, arguments)
}
const fa = x.createContext(null),
    cg = x.createContext(null),
    Gt = x.createContext(null),
    Es = x.createContext(null),
    Et = x.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    kf = x.createContext(null);

function dg(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    Qn() || te(!1);
    let {
        basename: r,
        navigator: o
    } = x.useContext(Gt), {
        hash: s,
        pathname: l,
        search: i
    } = Cf(e, {
        relative: n
    }), a = l;
    return r !== "/" && (a = l === "/" ? r : bt([r, l])), o.createHref({
        pathname: a,
        search: i,
        hash: s
    })
}

function Qn() {
    return x.useContext(Es) != null
}

function dt() {
    return Qn() || te(!1), x.useContext(Es).location
}

function Nf(e) {
    x.useContext(Gt).static || x.useLayoutEffect(e)
}

function Ue() {
    let {
        isDataRoute: e
    } = x.useContext(Et);
    return e ? kg() : fg()
}

function fg() {
    Qn() || te(!1);
    let e = x.useContext(fa),
        {
            basename: t,
            future: n,
            navigator: r
        } = x.useContext(Gt),
        {
            matches: o
        } = x.useContext(Et),
        {
            pathname: s
        } = dt(),
        l = JSON.stringify(ca(o, n.v7_relativeSplatPath)),
        i = x.useRef(!1);
    return Nf(() => {
        i.current = !0
    }), x.useCallback(function(d, c) {
        if (c === void 0 && (c = {}), !i.current) return;
        if (typeof d == "number") {
            r.go(d);
            return
        }
        let f = da(d, JSON.parse(l), s, c.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : bt([t, f.pathname])), (c.replace ? r.replace : r.push)(f, c.state, c)
    }, [t, r, l, s, e])
}

function _s() {
    let {
        matches: e
    } = x.useContext(Et), t = e[e.length - 1];
    return t ? t.params : {}
}

function Cf(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: r
    } = x.useContext(Gt), {
        matches: o
    } = x.useContext(Et), {
        pathname: s
    } = dt(), l = JSON.stringify(ca(o, r.v7_relativeSplatPath));
    return x.useMemo(() => da(e, JSON.parse(l), s, n === "path"), [e, l, s, n])
}

function pg(e, t) {
    return hg(e, t)
}

function hg(e, t, n, r) {
    Qn() || te(!1);
    let {
        navigator: o
    } = x.useContext(Gt), {
        matches: s
    } = x.useContext(Et), l = s[s.length - 1], i = l ? l.params : {};
    l && l.pathname;
    let a = l ? l.pathnameBase : "/";
    l && l.route;
    let d = dt(),
        c;
    if (t) {
        var f;
        let _ = typeof t == "string" ? Wn(t) : t;
        a === "/" || (f = _.pathname) != null && f.startsWith(a) || te(!1), c = _
    } else c = d;
    let p = c.pathname || "/",
        w = p;
    if (a !== "/") {
        let _ = a.replace(/^\//, "").split("/");
        w = "/" + p.replace(/^\//, "").split("/").slice(_.length).join("/")
    }
    let v = Hm(e, {
            pathname: w
        }),
        y = wg(v && v.map(_ => Object.assign({}, _, {
            params: Object.assign({}, i, _.params),
            pathname: bt([a, o.encodeLocation ? o.encodeLocation(_.pathname).pathname : _.pathname]),
            pathnameBase: _.pathnameBase === "/" ? a : bt([a, o.encodeLocation ? o.encodeLocation(_.pathnameBase).pathname : _.pathnameBase])
        })), s, n, r);
    return t && y ? x.createElement(Es.Provider, {
        value: {
            location: Mr({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Ot.Pop
        }
    }, y) : y
}

function mg() {
    let e = _g(),
        t = ag(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: o
    }, n) : null, null)
}
const gg = x.createElement(mg, null);
class vg extends x.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(Et.Provider, {
            value: this.props.routeContext
        }, x.createElement(kf.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function yg(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, o = x.useContext(fa);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), x.createElement(Et.Provider, {
        value: t
    }, r)
}

function wg(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var s;
        if ((s = n) != null && s.errors) e = n.matches;
        else return null
    }
    let l = e,
        i = (o = n) == null ? void 0 : o.errors;
    if (i != null) {
        let c = l.findIndex(f => f.route.id && (i == null ? void 0 : i[f.route.id]) !== void 0);
        c >= 0 || te(!1), l = l.slice(0, Math.min(l.length, c + 1))
    }
    let a = !1,
        d = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < l.length; c++) {
            let f = l[c];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (d = c), f.route.id) {
                let {
                    loaderData: p,
                    errors: w
                } = n, v = f.route.loader && p[f.route.id] === void 0 && (!w || w[f.route.id] === void 0);
                if (f.route.lazy || v) {
                    a = !0, d >= 0 ? l = l.slice(0, d + 1) : l = [l[0]];
                    break
                }
            }
        }
    return l.reduceRight((c, f, p) => {
        let w, v = !1,
            y = null,
            _ = null;
        n && (w = i && f.route.id ? i[f.route.id] : void 0, y = f.route.errorElement || gg, a && (d < 0 && p === 0 ? (v = !0, _ = null) : d === p && (v = !0, _ = f.route.hydrateFallbackElement || null)));
        let g = t.concat(l.slice(0, p + 1)),
            m = () => {
                let h;
                return w ? h = y : v ? h = _ : f.route.Component ? h = x.createElement(f.route.Component, null) : f.route.element ? h = f.route.element : h = c, x.createElement(yg, {
                    match: f,
                    routeContext: {
                        outlet: c,
                        matches: g,
                        isDataRoute: n != null
                    },
                    children: h
                })
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0) ? x.createElement(vg, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: w,
            children: m(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : m()
    }, null)
}
var jf = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(jf || {}),
    es = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(es || {});

function xg(e) {
    let t = x.useContext(fa);
    return t || te(!1), t
}

function Sg(e) {
    let t = x.useContext(cg);
    return t || te(!1), t
}

function Eg(e) {
    let t = x.useContext(Et);
    return t || te(!1), t
}

function Pf(e) {
    let t = Eg(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || te(!1), n.route.id
}

function _g() {
    var e;
    let t = x.useContext(kf),
        n = Sg(es.UseRouteError),
        r = Pf(es.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function kg() {
    let {
        router: e
    } = xg(jf.UseNavigateStable), t = Pf(es.UseNavigateStable), n = x.useRef(!1);
    return Nf(() => {
        n.current = !0
    }), x.useCallback(function(o, s) {
        s === void 0 && (s = {}), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Mr({
            fromRouteId: t
        }, s)))
    }, [e, t])
}

function Du(e) {
    let {
        to: t,
        replace: n,
        state: r,
        relative: o
    } = e;
    Qn() || te(!1);
    let {
        future: s,
        static: l
    } = x.useContext(Gt), {
        matches: i
    } = x.useContext(Et), {
        pathname: a
    } = dt(), d = Ue(), c = da(t, ca(i, s.v7_relativeSplatPath), a, o === "path"), f = JSON.stringify(c);
    return x.useEffect(() => d(JSON.parse(f), {
        replace: n,
        state: r,
        relative: o
    }), [d, f, o, n, r]), null
}

function Ne(e) {
    te(!1)
}

function Ng(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = Ot.Pop,
        navigator: s,
        static: l = !1,
        future: i
    } = e;
    Qn() && te(!1);
    let a = t.replace(/^\/*/, "/"),
        d = x.useMemo(() => ({
            basename: a,
            navigator: s,
            static: l,
            future: Mr({
                v7_relativeSplatPath: !1
            }, i)
        }), [a, i, s, l]);
    typeof r == "string" && (r = Wn(r));
    let {
        pathname: c = "/",
        search: f = "",
        hash: p = "",
        state: w = null,
        key: v = "default"
    } = r, y = x.useMemo(() => {
        let _ = ua(c, a);
        return _ == null ? null : {
            location: {
                pathname: _,
                search: f,
                hash: p,
                state: w,
                key: v
            },
            navigationType: o
        }
    }, [a, c, f, p, w, v, o]);
    return y == null ? null : x.createElement(Gt.Provider, {
        value: d
    }, x.createElement(Es.Provider, {
        children: n,
        value: y
    }))
}

function Cg(e) {
    let {
        children: t,
        location: n
    } = e;
    return pg(oi(t), n)
}
new Promise(() => {});

function oi(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return x.Children.forEach(e, (r, o) => {
        if (!x.isValidElement(r)) return;
        let s = [...t, o];
        if (r.type === x.Fragment) {
            n.push.apply(n, oi(r.props.children, s));
            return
        }
        r.type !== Ne && te(!1), !r.props.index || !r.props.children || te(!1);
        let l = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (l.children = oi(r.props.children, s)), n.push(l)
    }), n
}
/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function si() {
    return si = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, si.apply(this, arguments)
}

function jg(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        o, s;
    for (s = 0; s < r.length; s++) o = r[s], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}

function Pg(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function Tg(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Pg(e)
}
const Rg = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
    Fg = "6";
try {
    window.__reactRouterVersion = Fg
} catch {}
const Lg = "startTransition",
    Mu = jp[Lg];

function Og(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: o
    } = e, s = x.useRef();
    s.current == null && (s.current = Am({
        window: o,
        v5Compat: !0
    }));
    let l = s.current,
        [i, a] = x.useState({
            action: l.action,
            location: l.location
        }),
        {
            v7_startTransition: d
        } = r || {},
        c = x.useCallback(f => {
            d && Mu ? Mu(() => a(f)) : a(f)
        }, [a, d]);
    return x.useLayoutEffect(() => l.listen(c), [l, c]), x.createElement(Ng, {
        basename: t,
        children: n,
        location: i.location,
        navigationType: i.action,
        navigator: l,
        future: r
    })
}
const Ig = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    Dg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    In = x.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: o,
            reloadDocument: s,
            replace: l,
            state: i,
            target: a,
            to: d,
            preventScrollReset: c,
            unstable_viewTransition: f
        } = t, p = jg(t, Rg), {
            basename: w
        } = x.useContext(Gt), v, y = !1;
        if (typeof d == "string" && Dg.test(d) && (v = d, Ig)) try {
            let h = new URL(window.location.href),
                S = d.startsWith("//") ? new URL(h.protocol + d) : new URL(d),
                C = ua(S.pathname, w);
            S.origin === h.origin && C != null ? d = C + S.search + S.hash : y = !0
        } catch {}
        let _ = dg(d, {
                relative: o
            }),
            g = Mg(d, {
                replace: l,
                state: i,
                target: a,
                preventScrollReset: c,
                relative: o,
                unstable_viewTransition: f
            });

        function m(h) {
            r && r(h), h.defaultPrevented || g(h)
        }
        return x.createElement("a", si({}, p, {
            href: v || _,
            onClick: y || s ? r : m,
            ref: n,
            target: a
        }))
    });
var zu;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(zu || (zu = {}));
var Bu;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Bu || (Bu = {}));

function Mg(e, t) {
    let {
        target: n,
        replace: r,
        state: o,
        preventScrollReset: s,
        relative: l,
        unstable_viewTransition: i
    } = t === void 0 ? {} : t, a = Ue(), d = dt(), c = Cf(e, {
        relative: l
    });
    return x.useCallback(f => {
        if (Tg(f, n)) {
            f.preventDefault();
            let p = r !== void 0 ? r : Zo(d) === Zo(c);
            a(e, {
                replace: p,
                state: o,
                preventScrollReset: s,
                relative: l,
                unstable_viewTransition: i
            })
        }
    }, [d, a, c, r, o, n, e, s, l, i])
}

function Tf(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: zg
} = Object.prototype, {
    getPrototypeOf: pa
} = Object, ks = (e => t => {
    const n = zg.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), ot = e => (e = e.toLowerCase(), t => ks(t) === e), Ns = e => t => typeof t === e, {
    isArray: qn
} = Array, zr = Ns("undefined");

function Bg(e) {
    return e !== null && !zr(e) && e.constructor !== null && !zr(e.constructor) && Qe(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Rf = ot("ArrayBuffer");

function Ag(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Rf(e.buffer), t
}
const Ug = Ns("string"),
    Qe = Ns("function"),
    Ff = Ns("number"),
    Cs = e => e !== null && typeof e == "object",
    $g = e => e === !0 || e === !1,
    Co = e => {
        if (ks(e) !== "object") return !1;
        const t = pa(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    Hg = ot("Date"),
    bg = ot("File"),
    Vg = ot("Blob"),
    Wg = ot("FileList"),
    Qg = e => Cs(e) && Qe(e.pipe),
    qg = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || Qe(e.append) && ((t = ks(e)) === "formdata" || t === "object" && Qe(e.toString) && e.toString() === "[object FormData]"))
    },
    Kg = ot("URLSearchParams"),
    [Gg, Jg, Xg, Yg] = ["ReadableStream", "Request", "Response", "Headers"].map(ot),
    Zg = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Wr(e, t, {
    allOwnKeys: n = !1
} = {}) {
    if (e === null || typeof e > "u") return;
    let r, o;
    if (typeof e != "object" && (e = [e]), qn(e))
        for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
    else {
        const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            l = s.length;
        let i;
        for (r = 0; r < l; r++) i = s[r], t.call(null, e[i], i, e)
    }
}

function Lf(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        o;
    for (; r-- > 0;)
        if (o = n[r], t === o.toLowerCase()) return o;
    return null
}
const Of = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    If = e => !zr(e) && e !== Of;

function li() {
    const {
        caseless: e
    } = If(this) && this || {}, t = {}, n = (r, o) => {
        const s = e && Lf(t, o) || o;
        Co(t[s]) && Co(r) ? t[s] = li(t[s], r) : Co(r) ? t[s] = li({}, r) : qn(r) ? t[s] = r.slice() : t[s] = r
    };
    for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && Wr(arguments[r], n);
    return t
}
const e0 = (e, t, n, {
        allOwnKeys: r
    } = {}) => (Wr(t, (o, s) => {
        n && Qe(o) ? e[s] = Tf(o, n) : e[s] = o
    }, {
        allOwnKeys: r
    }), e),
    t0 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    n0 = (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
            value: t.prototype
        }), n && Object.assign(e.prototype, n)
    },
    r0 = (e, t, n, r) => {
        let o, s, l;
        const i = {};
        if (t = t || {}, e == null) return t;
        do {
            for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0;) l = o[s], (!r || r(l, e, t)) && !i[l] && (t[l] = e[l], i[l] = !0);
            e = n !== !1 && pa(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    },
    o0 = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const r = e.indexOf(t, n);
        return r !== -1 && r === n
    },
    s0 = e => {
        if (!e) return null;
        if (qn(e)) return e;
        let t = e.length;
        if (!Ff(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    },
    l0 = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && pa(Uint8Array)),
    i0 = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let o;
        for (;
            (o = r.next()) && !o.done;) {
            const s = o.value;
            t.call(e, s[0], s[1])
        }
    },
    a0 = (e, t) => {
        let n;
        const r = [];
        for (;
            (n = e.exec(t)) !== null;) r.push(n);
        return r
    },
    u0 = ot("HTMLFormElement"),
    c0 = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
        return r.toUpperCase() + o
    }),
    Au = (({
        hasOwnProperty: e
    }) => (t, n) => e.call(t, n))(Object.prototype),
    d0 = ot("RegExp"),
    Df = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        Wr(n, (o, s) => {
            let l;
            (l = t(o, s, e)) !== !1 && (r[s] = l || o)
        }), Object.defineProperties(e, r)
    },
    f0 = e => {
        Df(e, (t, n) => {
            if (Qe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const r = e[n];
            if (Qe(r)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    },
    p0 = (e, t) => {
        const n = {},
            r = o => {
                o.forEach(s => {
                    n[s] = !0
                })
            };
        return qn(e) ? r(e) : r(String(e).split(t)), n
    },
    h0 = () => {},
    m0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t,
    sl = "abcdefghijklmnopqrstuvwxyz",
    Uu = "0123456789",
    Mf = {
        DIGIT: Uu,
        ALPHA: sl,
        ALPHA_DIGIT: sl + sl.toUpperCase() + Uu
    },
    g0 = (e = 16, t = Mf.ALPHA_DIGIT) => {
        let n = "";
        const {
            length: r
        } = t;
        for (; e--;) n += t[Math.random() * r | 0];
        return n
    };

function v0(e) {
    return !!(e && Qe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const y0 = e => {
        const t = new Array(10),
            n = (r, o) => {
                if (Cs(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!("toJSON" in r)) {
                        t[o] = r;
                        const s = qn(r) ? [] : {};
                        return Wr(r, (l, i) => {
                            const a = n(l, o + 1);
                            !zr(a) && (s[i] = a)
                        }), t[o] = void 0, s
                    }
                }
                return r
            };
        return n(e, 0)
    },
    w0 = ot("AsyncFunction"),
    x0 = e => e && (Cs(e) || Qe(e)) && Qe(e.then) && Qe(e.catch),
    E = {
        isArray: qn,
        isArrayBuffer: Rf,
        isBuffer: Bg,
        isFormData: qg,
        isArrayBufferView: Ag,
        isString: Ug,
        isNumber: Ff,
        isBoolean: $g,
        isObject: Cs,
        isPlainObject: Co,
        isReadableStream: Gg,
        isRequest: Jg,
        isResponse: Xg,
        isHeaders: Yg,
        isUndefined: zr,
        isDate: Hg,
        isFile: bg,
        isBlob: Vg,
        isRegExp: d0,
        isFunction: Qe,
        isStream: Qg,
        isURLSearchParams: Kg,
        isTypedArray: l0,
        isFileList: Wg,
        forEach: Wr,
        merge: li,
        extend: e0,
        trim: Zg,
        stripBOM: t0,
        inherits: n0,
        toFlatObject: r0,
        kindOf: ks,
        kindOfTest: ot,
        endsWith: o0,
        toArray: s0,
        forEachEntry: i0,
        matchAll: a0,
        isHTMLForm: u0,
        hasOwnProperty: Au,
        hasOwnProp: Au,
        reduceDescriptors: Df,
        freezeMethods: f0,
        toObjectSet: p0,
        toCamelCase: c0,
        noop: h0,
        toFiniteNumber: m0,
        findKey: Lf,
        global: Of,
        isContextDefined: If,
        ALPHABET: Mf,
        generateString: g0,
        isSpecCompliantForm: v0,
        toJSONObject: y0,
        isAsyncFn: w0,
        isThenable: x0
    };

function D(e, t, n, r, o) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o)
}
E.inherits(D, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: E.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const zf = D.prototype,
    Bf = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Bf[e] = {
        value: e
    }
});
Object.defineProperties(D, Bf);
Object.defineProperty(zf, "isAxiosError", {
    value: !0
});
D.from = (e, t, n, r, o, s) => {
    const l = Object.create(zf);
    return E.toFlatObject(e, l, function(a) {
        return a !== Error.prototype
    }, i => i !== "isAxiosError"), D.call(l, e.message, t, n, r, o), l.cause = e, l.name = e.name, s && Object.assign(l, s), l
};
const S0 = null;

function ii(e) {
    return E.isPlainObject(e) || E.isArray(e)
}

function Af(e) {
    return E.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function $u(e, t, n) {
    return e ? e.concat(t).map(function(o, s) {
        return o = Af(o), !n && s ? "[" + o + "]" : o
    }).join(n ? "." : "") : t
}

function E0(e) {
    return E.isArray(e) && !e.some(ii)
}
const _0 = E.toFlatObject(E, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});

function js(e, t, n) {
    if (!E.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = E.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(y, _) {
        return !E.isUndefined(_[y])
    });
    const r = n.metaTokens,
        o = n.visitor || c,
        s = n.dots,
        l = n.indexes,
        a = (n.Blob || typeof Blob < "u" && Blob) && E.isSpecCompliantForm(t);
    if (!E.isFunction(o)) throw new TypeError("visitor must be a function");

    function d(v) {
        if (v === null) return "";
        if (E.isDate(v)) return v.toISOString();
        if (!a && E.isBlob(v)) throw new D("Blob is not supported. Use a Buffer instead.");
        return E.isArrayBuffer(v) || E.isTypedArray(v) ? a && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v
    }

    function c(v, y, _) {
        let g = v;
        if (v && !_ && typeof v == "object") {
            if (E.endsWith(y, "{}")) y = r ? y : y.slice(0, -2), v = JSON.stringify(v);
            else if (E.isArray(v) && E0(v) || (E.isFileList(v) || E.endsWith(y, "[]")) && (g = E.toArray(v))) return y = Af(y), g.forEach(function(h, S) {
                !(E.isUndefined(h) || h === null) && t.append(l === !0 ? $u([y], S, s) : l === null ? y : y + "[]", d(h))
            }), !1
        }
        return ii(v) ? !0 : (t.append($u(_, y, s), d(v)), !1)
    }
    const f = [],
        p = Object.assign(_0, {
            defaultVisitor: c,
            convertValue: d,
            isVisitable: ii
        });

    function w(v, y) {
        if (!E.isUndefined(v)) {
            if (f.indexOf(v) !== -1) throw Error("Circular reference detected in " + y.join("."));
            f.push(v), E.forEach(v, function(g, m) {
                (!(E.isUndefined(g) || g === null) && o.call(t, g, E.isString(m) ? m.trim() : m, y, p)) === !0 && w(g, y ? y.concat(m) : [m])
            }), f.pop()
        }
    }
    if (!E.isObject(e)) throw new TypeError("data must be an object");
    return w(e), t
}

function Hu(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}

function ha(e, t) {
    this._pairs = [], e && js(e, this, t)
}
const Uf = ha.prototype;
Uf.append = function(t, n) {
    this._pairs.push([t, n])
};
Uf.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Hu)
    } : Hu;
    return this._pairs.map(function(o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
};

function k0(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function $f(e, t, n) {
    if (!t) return e;
    const r = n && n.encode || k0,
        o = n && n.serialize;
    let s;
    if (o ? s = o(t, n) : s = E.isURLSearchParams(t) ? t.toString() : new ha(t, n).toString(r), s) {
        const l = e.indexOf("#");
        l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + s
    }
    return e
}
class bu {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }), this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        E.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const Hf = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    N0 = typeof URLSearchParams < "u" ? URLSearchParams : ha,
    C0 = typeof FormData < "u" ? FormData : null,
    j0 = typeof Blob < "u" ? Blob : null,
    P0 = {
        isBrowser: !0,
        classes: {
            URLSearchParams: N0,
            FormData: C0,
            Blob: j0
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    ma = typeof window < "u" && typeof document < "u",
    T0 = (e => ma && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product),
    R0 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    F0 = ma && window.location.href || "http://localhost",
    L0 = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: ma,
        hasStandardBrowserEnv: T0,
        hasStandardBrowserWebWorkerEnv: R0,
        origin: F0
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    nt = { ...L0,
        ...P0
    };

function O0(e, t) {
    return js(e, new nt.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, o, s) {
            return nt.isNode && E.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function I0(e) {
    return E.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function D0(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const o = n.length;
    let s;
    for (r = 0; r < o; r++) s = n[r], t[s] = e[s];
    return t
}

function bf(e) {
    function t(n, r, o, s) {
        let l = n[s++];
        if (l === "__proto__") return !0;
        const i = Number.isFinite(+l),
            a = s >= n.length;
        return l = !l && E.isArray(o) ? o.length : l, a ? (E.hasOwnProp(o, l) ? o[l] = [o[l], r] : o[l] = r, !i) : ((!o[l] || !E.isObject(o[l])) && (o[l] = []), t(n, r, o[l], s) && E.isArray(o[l]) && (o[l] = D0(o[l])), !i)
    }
    if (E.isFormData(e) && E.isFunction(e.entries)) {
        const n = {};
        return E.forEachEntry(e, (r, o) => {
            t(I0(r), o, n, 0)
        }), n
    }
    return null
}

function M0(e, t, n) {
    if (E.isString(e)) try {
        return (t || JSON.parse)(e), E.trim(e)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (n || JSON.stringify)(e)
}
const Qr = {
    transitional: Hf,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || "",
            o = r.indexOf("application/json") > -1,
            s = E.isObject(t);
        if (s && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)) return o ? JSON.stringify(bf(t)) : t;
        if (E.isArrayBuffer(t) || E.isBuffer(t) || E.isStream(t) || E.isFile(t) || E.isBlob(t) || E.isReadableStream(t)) return t;
        if (E.isArrayBufferView(t)) return t.buffer;
        if (E.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let i;
        if (s) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1) return O0(t, this.formSerializer).toString();
            if ((i = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const a = this.env && this.env.FormData;
                return js(i ? {
                    "files[]": t
                } : t, a && new a, this.formSerializer)
            }
        }
        return s || o ? (n.setContentType("application/json", !1), M0(t)) : t
    }],
    transformResponse: [function(t) {
        const n = this.transitional || Qr.transitional,
            r = n && n.forcedJSONParsing,
            o = this.responseType === "json";
        if (E.isResponse(t) || E.isReadableStream(t)) return t;
        if (t && E.isString(t) && (r && !this.responseType || o)) {
            const l = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t)
            } catch (i) {
                if (l) throw i.name === "SyntaxError" ? D.from(i, D.ERR_BAD_RESPONSE, this, null, this.response) : i
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: nt.classes.FormData,
        Blob: nt.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    Qr.headers[e] = {}
});
const z0 = E.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    B0 = e => {
        const t = {};
        let n, r, o;
        return e && e.split(`
`).forEach(function(l) {
            o = l.indexOf(":"), n = l.substring(0, o).trim().toLowerCase(), r = l.substring(o + 1).trim(), !(!n || t[n] && z0[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
        }), t
    },
    Vu = Symbol("internals");

function rr(e) {
    return e && String(e).trim().toLowerCase()
}

function jo(e) {
    return e === !1 || e == null ? e : E.isArray(e) ? e.map(jo) : String(e)
}

function A0(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e);) t[r[1]] = r[2];
    return t
}
const U0 = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function ll(e, t, n, r, o) {
    if (E.isFunction(r)) return r.call(this, t, n);
    if (o && (t = n), !!E.isString(t)) {
        if (E.isString(r)) return t.indexOf(r) !== -1;
        if (E.isRegExp(r)) return r.test(t)
    }
}

function $0(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function H0(e, t) {
    const n = E.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(o, s, l) {
                return this[r].call(this, t, o, s, l)
            },
            configurable: !0
        })
    })
}
class Fe {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const o = this;

        function s(i, a, d) {
            const c = rr(a);
            if (!c) throw new Error("header name must be a non-empty string");
            const f = E.findKey(o, c);
            (!f || o[f] === void 0 || d === !0 || d === void 0 && o[f] !== !1) && (o[f || a] = jo(i))
        }
        const l = (i, a) => E.forEach(i, (d, c) => s(d, c, a));
        if (E.isPlainObject(t) || t instanceof this.constructor) l(t, n);
        else if (E.isString(t) && (t = t.trim()) && !U0(t)) l(B0(t), n);
        else if (E.isHeaders(t))
            for (const [i, a] of t.entries()) s(a, i, r);
        else t != null && s(n, t, r);
        return this
    }
    get(t, n) {
        if (t = rr(t), t) {
            const r = E.findKey(this, t);
            if (r) {
                const o = this[r];
                if (!n) return o;
                if (n === !0) return A0(o);
                if (E.isFunction(n)) return n.call(this, o, r);
                if (E.isRegExp(n)) return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = rr(t), t) {
            const r = E.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || ll(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let o = !1;

        function s(l) {
            if (l = rr(l), l) {
                const i = E.findKey(r, l);
                i && (!n || ll(r, r[i], i, n)) && (delete r[i], o = !0)
            }
        }
        return E.isArray(t) ? t.forEach(s) : s(t), o
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            o = !1;
        for (; r--;) {
            const s = n[r];
            (!t || ll(this, this[s], s, t, !0)) && (delete this[s], o = !0)
        }
        return o
    }
    normalize(t) {
        const n = this,
            r = {};
        return E.forEach(this, (o, s) => {
            const l = E.findKey(r, s);
            if (l) {
                n[l] = jo(o), delete n[s];
                return
            }
            const i = t ? $0(s) : String(s).trim();
            i !== s && delete n[s], n[i] = jo(o), r[i] = !0
        }), this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return E.forEach(this, (r, o) => {
            r != null && r !== !1 && (n[o] = t && E.isArray(r) ? r.join(", ") : r)
        }), n
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(o => r.set(o)), r
    }
    static accessor(t) {
        const r = (this[Vu] = this[Vu] = {
                accessors: {}
            }).accessors,
            o = this.prototype;

        function s(l) {
            const i = rr(l);
            r[i] || (H0(o, l), r[i] = !0)
        }
        return E.isArray(t) ? t.forEach(s) : s(t), this
    }
}
Fe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(Fe.prototype, ({
    value: e
}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
});
E.freezeMethods(Fe);

function il(e, t) {
    const n = this || Qr,
        r = t || n,
        o = Fe.from(r.headers);
    let s = r.data;
    return E.forEach(e, function(i) {
        s = i.call(n, s, o.normalize(), t ? t.status : void 0)
    }), o.normalize(), s
}

function Vf(e) {
    return !!(e && e.__CANCEL__)
}

function Kn(e, t, n) {
    D.call(this, e ? ? "canceled", D.ERR_CANCELED, t, n), this.name = "CanceledError"
}
E.inherits(Kn, D, {
    __CANCEL__: !0
});

function Wf(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new D("Request failed with status code " + n.status, [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}

function b0(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function V0(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let o = 0,
        s = 0,
        l;
    return t = t !== void 0 ? t : 1e3,
        function(a) {
            const d = Date.now(),
                c = r[s];
            l || (l = d), n[o] = a, r[o] = d;
            let f = s,
                p = 0;
            for (; f !== o;) p += n[f++], f = f % e;
            if (o = (o + 1) % e, o === s && (s = (s + 1) % e), d - l < t) return;
            const w = c && d - c;
            return w ? Math.round(p * 1e3 / w) : void 0
        }
}

function W0(e, t) {
    let n = 0;
    const r = 1e3 / t;
    let o = null;
    return function() {
        const l = this === !0,
            i = Date.now();
        if (l || i - n > r) return o && (clearTimeout(o), o = null), n = i, e.apply(null, arguments);
        o || (o = setTimeout(() => (o = null, n = Date.now(), e.apply(null, arguments)), r - (i - n)))
    }
}
const ts = (e, t, n = 3) => {
        let r = 0;
        const o = V0(50, 250);
        return W0(s => {
            const l = s.loaded,
                i = s.lengthComputable ? s.total : void 0,
                a = l - r,
                d = o(a),
                c = l <= i;
            r = l;
            const f = {
                loaded: l,
                total: i,
                progress: i ? l / i : void 0,
                bytes: a,
                rate: d || void 0,
                estimated: d && i && c ? (i - l) / d : void 0,
                event: s,
                lengthComputable: i != null
            };
            f[t ? "download" : "upload"] = !0, e(f)
        }, n)
    },
    Q0 = nt.hasStandardBrowserEnv ? function() {
        const t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
        let r;

        function o(s) {
            let l = s;
            return t && (n.setAttribute("href", l), l = n.href), n.setAttribute("href", l), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
            }
        }
        return r = o(window.location.href),
            function(l) {
                const i = E.isString(l) ? o(l) : l;
                return i.protocol === r.protocol && i.host === r.host
            }
    }() : function() {
        return function() {
            return !0
        }
    }(),
    q0 = nt.hasStandardBrowserEnv ? {
        write(e, t, n, r, o, s) {
            const l = [e + "=" + encodeURIComponent(t)];
            E.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()), E.isString(r) && l.push("path=" + r), E.isString(o) && l.push("domain=" + o), s === !0 && l.push("secure"), document.cookie = l.join("; ")
        },
        read(e) {
            const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };

function K0(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function G0(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function Qf(e, t) {
    return e && !K0(t) ? G0(e, t) : t
}
const Wu = e => e instanceof Fe ? { ...e
} : e;

function dn(e, t) {
    t = t || {};
    const n = {};

    function r(d, c, f) {
        return E.isPlainObject(d) && E.isPlainObject(c) ? E.merge.call({
            caseless: f
        }, d, c) : E.isPlainObject(c) ? E.merge({}, c) : E.isArray(c) ? c.slice() : c
    }

    function o(d, c, f) {
        if (E.isUndefined(c)) {
            if (!E.isUndefined(d)) return r(void 0, d, f)
        } else return r(d, c, f)
    }

    function s(d, c) {
        if (!E.isUndefined(c)) return r(void 0, c)
    }

    function l(d, c) {
        if (E.isUndefined(c)) {
            if (!E.isUndefined(d)) return r(void 0, d)
        } else return r(void 0, c)
    }

    function i(d, c, f) {
        if (f in t) return r(d, c);
        if (f in e) return r(void 0, d)
    }
    const a = {
        url: s,
        method: s,
        data: s,
        baseURL: l,
        transformRequest: l,
        transformResponse: l,
        paramsSerializer: l,
        timeout: l,
        timeoutMessage: l,
        withCredentials: l,
        withXSRFToken: l,
        adapter: l,
        responseType: l,
        xsrfCookieName: l,
        xsrfHeaderName: l,
        onUploadProgress: l,
        onDownloadProgress: l,
        decompress: l,
        maxContentLength: l,
        maxBodyLength: l,
        beforeRedirect: l,
        transport: l,
        httpAgent: l,
        httpsAgent: l,
        cancelToken: l,
        socketPath: l,
        responseEncoding: l,
        validateStatus: i,
        headers: (d, c) => o(Wu(d), Wu(c), !0)
    };
    return E.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
        const f = a[c] || o,
            p = f(e[c], t[c], c);
        E.isUndefined(p) && f !== i || (n[c] = p)
    }), n
}
const qf = e => {
        const t = dn({}, e);
        let {
            data: n,
            withXSRFToken: r,
            xsrfHeaderName: o,
            xsrfCookieName: s,
            headers: l,
            auth: i
        } = t;
        t.headers = l = Fe.from(l), t.url = $f(Qf(t.baseURL, t.url), e.params, e.paramsSerializer), i && l.set("Authorization", "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : "")));
        let a;
        if (E.isFormData(n)) {
            if (nt.hasStandardBrowserEnv || nt.hasStandardBrowserWebWorkerEnv) l.setContentType(void 0);
            else if ((a = l.getContentType()) !== !1) {
                const [d, ...c] = a ? a.split(";").map(f => f.trim()).filter(Boolean) : [];
                l.setContentType([d || "multipart/form-data", ...c].join("; "))
            }
        }
        if (nt.hasStandardBrowserEnv && (r && E.isFunction(r) && (r = r(t)), r || r !== !1 && Q0(t.url))) {
            const d = o && s && q0.read(s);
            d && l.set(o, d)
        }
        return t
    },
    J0 = typeof XMLHttpRequest < "u",
    X0 = J0 && function(e) {
        return new Promise(function(n, r) {
            const o = qf(e);
            let s = o.data;
            const l = Fe.from(o.headers).normalize();
            let {
                responseType: i
            } = o, a;

            function d() {
                o.cancelToken && o.cancelToken.unsubscribe(a), o.signal && o.signal.removeEventListener("abort", a)
            }
            let c = new XMLHttpRequest;
            c.open(o.method.toUpperCase(), o.url, !0), c.timeout = o.timeout;

            function f() {
                if (!c) return;
                const w = Fe.from("getAllResponseHeaders" in c && c.getAllResponseHeaders()),
                    y = {
                        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
                        status: c.status,
                        statusText: c.statusText,
                        headers: w,
                        config: e,
                        request: c
                    };
                Wf(function(g) {
                    n(g), d()
                }, function(g) {
                    r(g), d()
                }, y), c = null
            }
            "onloadend" in c ? c.onloadend = f : c.onreadystatechange = function() {
                !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(f)
            }, c.onabort = function() {
                c && (r(new D("Request aborted", D.ECONNABORTED, o, c)), c = null)
            }, c.onerror = function() {
                r(new D("Network Error", D.ERR_NETWORK, o, c)), c = null
            }, c.ontimeout = function() {
                let v = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
                const y = o.transitional || Hf;
                o.timeoutErrorMessage && (v = o.timeoutErrorMessage), r(new D(v, y.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED, o, c)), c = null
            }, s === void 0 && l.setContentType(null), "setRequestHeader" in c && E.forEach(l.toJSON(), function(v, y) {
                c.setRequestHeader(y, v)
            }), E.isUndefined(o.withCredentials) || (c.withCredentials = !!o.withCredentials), i && i !== "json" && (c.responseType = o.responseType), typeof o.onDownloadProgress == "function" && c.addEventListener("progress", ts(o.onDownloadProgress, !0)), typeof o.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", ts(o.onUploadProgress)), (o.cancelToken || o.signal) && (a = w => {
                c && (r(!w || w.type ? new Kn(null, e, c) : w), c.abort(), c = null)
            }, o.cancelToken && o.cancelToken.subscribe(a), o.signal && (o.signal.aborted ? a() : o.signal.addEventListener("abort", a)));
            const p = b0(o.url);
            if (p && nt.protocols.indexOf(p) === -1) {
                r(new D("Unsupported protocol " + p + ":", D.ERR_BAD_REQUEST, e));
                return
            }
            c.send(s || null)
        })
    },
    Y0 = (e, t) => {
        let n = new AbortController,
            r;
        const o = function(a) {
            if (!r) {
                r = !0, l();
                const d = a instanceof Error ? a : this.reason;
                n.abort(d instanceof D ? d : new Kn(d instanceof Error ? d.message : d))
            }
        };
        let s = t && setTimeout(() => {
            o(new D(`timeout ${t} of ms exceeded`, D.ETIMEDOUT))
        }, t);
        const l = () => {
            e && (s && clearTimeout(s), s = null, e.forEach(a => {
                a && (a.removeEventListener ? a.removeEventListener("abort", o) : a.unsubscribe(o))
            }), e = null)
        };
        e.forEach(a => a && a.addEventListener && a.addEventListener("abort", o));
        const {
            signal: i
        } = n;
        return i.unsubscribe = l, [i, () => {
            s && clearTimeout(s), s = null
        }]
    },
    Z0 = function*(e, t) {
        let n = e.byteLength;
        if (!t || n < t) {
            yield e;
            return
        }
        let r = 0,
            o;
        for (; r < n;) o = r + t, yield e.slice(r, o), r = o
    },
    ev = async function*(e, t, n) {
        for await (const r of e) yield* Z0(ArrayBuffer.isView(r) ? r : await n(String(r)), t)
    },
    Qu = (e, t, n, r, o) => {
        const s = ev(e, t, o);
        let l = 0;
        return new ReadableStream({
            type: "bytes",
            async pull(i) {
                const {
                    done: a,
                    value: d
                } = await s.next();
                if (a) {
                    i.close(), r();
                    return
                }
                let c = d.byteLength;
                n && n(l += c), i.enqueue(new Uint8Array(d))
            },
            cancel(i) {
                return r(i), s.return()
            }
        }, {
            highWaterMark: 2
        })
    },
    qu = (e, t) => {
        const n = e != null;
        return r => setTimeout(() => t({
            lengthComputable: n,
            total: e,
            loaded: r
        }))
    },
    Ps = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
    Kf = Ps && typeof ReadableStream == "function",
    ai = Ps && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer())),
    tv = Kf && (() => {
        let e = !1;
        const t = new Request(nt.origin, {
            body: new ReadableStream,
            method: "POST",
            get duplex() {
                return e = !0, "half"
            }
        }).headers.has("Content-Type");
        return e && !t
    })(),
    Ku = 64 * 1024,
    ui = Kf && !!(() => {
        try {
            return E.isReadableStream(new Response("").body)
        } catch {}
    })(),
    ns = {
        stream: ui && (e => e.body)
    };
Ps && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !ns[t] && (ns[t] = E.isFunction(e[t]) ? n => n[t]() : (n, r) => {
            throw new D(`Response type '${t}' is not supported`, D.ERR_NOT_SUPPORT, r)
        })
    })
})(new Response);
const nv = async e => {
        if (e == null) return 0;
        if (E.isBlob(e)) return e.size;
        if (E.isSpecCompliantForm(e)) return (await new Request(e).arrayBuffer()).byteLength;
        if (E.isArrayBufferView(e)) return e.byteLength;
        if (E.isURLSearchParams(e) && (e = e + ""), E.isString(e)) return (await ai(e)).byteLength
    },
    rv = async (e, t) => {
        const n = E.toFiniteNumber(e.getContentLength());
        return n ? ? nv(t)
    },
    ov = Ps && (async e => {
        let {
            url: t,
            method: n,
            data: r,
            signal: o,
            cancelToken: s,
            timeout: l,
            onDownloadProgress: i,
            onUploadProgress: a,
            responseType: d,
            headers: c,
            withCredentials: f = "same-origin",
            fetchOptions: p
        } = qf(e);
        d = d ? (d + "").toLowerCase() : "text";
        let [w, v] = o || s || l ? Y0([o, s], l) : [], y, _;
        const g = () => {
            !y && setTimeout(() => {
                w && w.unsubscribe()
            }), y = !0
        };
        let m;
        try {
            if (a && tv && n !== "get" && n !== "head" && (m = await rv(c, r)) !== 0) {
                let T = new Request(t, {
                        method: "POST",
                        body: r,
                        duplex: "half"
                    }),
                    P;
                E.isFormData(r) && (P = T.headers.get("content-type")) && c.setContentType(P), T.body && (r = Qu(T.body, Ku, qu(m, ts(a)), null, ai))
            }
            E.isString(f) || (f = f ? "cors" : "omit"), _ = new Request(t, { ...p,
                signal: w,
                method: n.toUpperCase(),
                headers: c.normalize().toJSON(),
                body: r,
                duplex: "half",
                withCredentials: f
            });
            let h = await fetch(_);
            const S = ui && (d === "stream" || d === "response");
            if (ui && (i || S)) {
                const T = {};
                ["status", "statusText", "headers"].forEach(k => {
                    T[k] = h[k]
                });
                const P = E.toFiniteNumber(h.headers.get("content-length"));
                h = new Response(Qu(h.body, Ku, i && qu(P, ts(i, !0)), S && g, ai), T)
            }
            d = d || "text";
            let C = await ns[E.findKey(ns, d) || "text"](h, e);
            return !S && g(), v && v(), await new Promise((T, P) => {
                Wf(T, P, {
                    data: C,
                    headers: Fe.from(h.headers),
                    status: h.status,
                    statusText: h.statusText,
                    config: e,
                    request: _
                })
            })
        } catch (h) {
            throw g(), h && h.name === "TypeError" && /fetch/i.test(h.message) ? Object.assign(new D("Network Error", D.ERR_NETWORK, e, _), {
                cause: h.cause || h
            }) : D.from(h, h && h.code, e, _)
        }
    }),
    ci = {
        http: S0,
        xhr: X0,
        fetch: ov
    };
E.forEach(ci, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
});
const Gu = e => `- ${e}`,
    sv = e => E.isFunction(e) || e === null || e === !1,
    Gf = {
        getAdapter: e => {
            e = E.isArray(e) ? e : [e];
            const {
                length: t
            } = e;
            let n, r;
            const o = {};
            for (let s = 0; s < t; s++) {
                n = e[s];
                let l;
                if (r = n, !sv(n) && (r = ci[(l = String(n)).toLowerCase()], r === void 0)) throw new D(`Unknown adapter '${l}'`);
                if (r) break;
                o[l || "#" + s] = r
            }
            if (!r) {
                const s = Object.entries(o).map(([i, a]) => `adapter ${i} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build"));
                let l = t ? s.length > 1 ? `since :
` + s.map(Gu).join(`
`) : " " + Gu(s[0]) : "as no adapter specified";
                throw new D("There is no suitable adapter to dispatch the request " + l, "ERR_NOT_SUPPORT")
            }
            return r
        },
        adapters: ci
    };

function al(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Kn(null, e)
}

function Ju(e) {
    return al(e), e.headers = Fe.from(e.headers), e.data = il.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Gf.getAdapter(e.adapter || Qr.adapter)(e).then(function(r) {
        return al(e), r.data = il.call(e, e.transformResponse, r), r.headers = Fe.from(r.headers), r
    }, function(r) {
        return Vf(r) || (al(e), r && r.response && (r.response.data = il.call(e, e.transformResponse, r.response), r.response.headers = Fe.from(r.response.headers))), Promise.reject(r)
    })
}
const Jf = "1.7.2",
    ga = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    ga[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const Xu = {};
ga.transitional = function(t, n, r) {
    function o(s, l) {
        return "[Axios v" + Jf + "] Transitional option '" + s + "'" + l + (r ? ". " + r : "")
    }
    return (s, l, i) => {
        if (t === !1) throw new D(o(l, " has been removed" + (n ? " in " + n : "")), D.ERR_DEPRECATED);
        return n && !Xu[l] && (Xu[l] = !0, console.warn(o(l, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(s, l, i) : !0
    }
};

function lv(e, t, n) {
    if (typeof e != "object") throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let o = r.length;
    for (; o-- > 0;) {
        const s = r[o],
            l = t[s];
        if (l) {
            const i = e[s],
                a = i === void 0 || l(i, s, e);
            if (a !== !0) throw new D("option " + s + " must be " + a, D.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new D("Unknown option " + s, D.ERR_BAD_OPTION)
    }
}
const di = {
        assertOptions: lv,
        validators: ga
    },
    Ct = di.validators;
class rn {
    constructor(t) {
        this.defaults = t, this.interceptors = {
            request: new bu,
            response: new bu
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let o;
                Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error;
                const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = dn(this.defaults, n);
        const {
            transitional: r,
            paramsSerializer: o,
            headers: s
        } = n;
        r !== void 0 && di.assertOptions(r, {
            silentJSONParsing: Ct.transitional(Ct.boolean),
            forcedJSONParsing: Ct.transitional(Ct.boolean),
            clarifyTimeoutError: Ct.transitional(Ct.boolean)
        }, !1), o != null && (E.isFunction(o) ? n.paramsSerializer = {
            serialize: o
        } : di.assertOptions(o, {
            encode: Ct.function,
            serialize: Ct.function
        }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let l = s && E.merge(s.common, s[n.method]);
        s && E.forEach(["delete", "get", "head", "post", "put", "patch", "common"], v => {
            delete s[v]
        }), n.headers = Fe.concat(l, s);
        const i = [];
        let a = !0;
        this.interceptors.request.forEach(function(y) {
            typeof y.runWhen == "function" && y.runWhen(n) === !1 || (a = a && y.synchronous, i.unshift(y.fulfilled, y.rejected))
        });
        const d = [];
        this.interceptors.response.forEach(function(y) {
            d.push(y.fulfilled, y.rejected)
        });
        let c, f = 0,
            p;
        if (!a) {
            const v = [Ju.bind(this), void 0];
            for (v.unshift.apply(v, i), v.push.apply(v, d), p = v.length, c = Promise.resolve(n); f < p;) c = c.then(v[f++], v[f++]);
            return c
        }
        p = i.length;
        let w = n;
        for (f = 0; f < p;) {
            const v = i[f++],
                y = i[f++];
            try {
                w = v(w)
            } catch (_) {
                y.call(this, _);
                break
            }
        }
        try {
            c = Ju.call(this, w)
        } catch (v) {
            return Promise.reject(v)
        }
        for (f = 0, p = d.length; f < p;) c = c.then(d[f++], d[f++]);
        return c
    }
    getUri(t) {
        t = dn(this.defaults, t);
        const n = Qf(t.baseURL, t.url);
        return $f(n, t.params, t.paramsSerializer)
    }
}
E.forEach(["delete", "get", "head", "options"], function(t) {
    rn.prototype[t] = function(n, r) {
        return this.request(dn(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
E.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(s, l, i) {
            return this.request(dn(i || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: s,
                data: l
            }))
        }
    }
    rn.prototype[t] = n(), rn.prototype[t + "Form"] = n(!0)
});
class va {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(s) {
            n = s
        });
        const r = this;
        this.promise.then(o => {
            if (!r._listeners) return;
            let s = r._listeners.length;
            for (; s-- > 0;) r._listeners[s](o);
            r._listeners = null
        }), this.promise.then = o => {
            let s;
            const l = new Promise(i => {
                r.subscribe(i), s = i
            }).then(o);
            return l.cancel = function() {
                r.unsubscribe(s)
            }, l
        }, t(function(s, l, i) {
            r.reason || (r.reason = new Kn(s, l, i), n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new va(function(o) {
                t = o
            }),
            cancel: t
        }
    }
}

function iv(e) {
    return function(n) {
        return e.apply(null, n)
    }
}

function av(e) {
    return E.isObject(e) && e.isAxiosError === !0
}
const fi = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(fi).forEach(([e, t]) => {
    fi[t] = e
});

function Xf(e) {
    const t = new rn(e),
        n = Tf(rn.prototype.request, t);
    return E.extend(n, rn.prototype, t, {
        allOwnKeys: !0
    }), E.extend(n, t, null, {
        allOwnKeys: !0
    }), n.create = function(o) {
        return Xf(dn(e, o))
    }, n
}
const $ = Xf(Qr);
$.Axios = rn;
$.CanceledError = Kn;
$.CancelToken = va;
$.isCancel = Vf;
$.VERSION = Jf;
$.toFormData = js;
$.AxiosError = D;
$.Cancel = $.CanceledError;
$.all = function(t) {
    return Promise.all(t)
};
$.spread = iv;
$.isAxiosError = av;
$.mergeConfig = dn;
$.AxiosHeaders = Fe;
$.formToJSON = e => bf(E.isHTMLForm(e) ? new FormData(e) : e);
$.getAdapter = Gf.getAdapter;
$.HttpStatusCode = fi;
$.default = $;
const Yf = x.createContext(),
    hn = () => x.useContext(Yf),
    uv = ({
        children: e
    }) => {
        const [t, n] = x.useState(!1), [r, o] = x.useState(""), s = () => {
            const a = localStorage.getItem("token"),
                d = localStorage.getItem("userName");
            n(!!a), o(d || "")
        };
        x.useEffect(() => {
            s()
        }, []);
        const l = (a, d) => {
                localStorage.setItem("token", a), localStorage.setItem("userName", d), s()
            },
            i = () => {
                localStorage.removeItem("token"), localStorage.removeItem("userName"), s()
            };
        return u.jsx(Yf.Provider, {
            value: {
                isLoggedIn: t,
                userName: r,
                login: l,
                logout: i,
                refreshAuthState: s
            },
            children: e
        })
    };

function Zf(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = Zf(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function It() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Zf(e)) && (r && (r += " "), r += t);
    return r
}
const Br = e => typeof e == "number" && !isNaN(e),
    on = e => typeof e == "string",
    De = e => typeof e == "function",
    Po = e => on(e) || De(e) ? e : null,
    pi = e => x.isValidElement(e) || on(e) || De(e) || Br(e);

function cv(e, t, n) {
    n === void 0 && (n = 300);
    const {
        scrollHeight: r,
        style: o
    } = e;
    requestAnimationFrame(() => {
        o.minHeight = "initial", o.height = r + "px", o.transition = `all ${n}ms`, requestAnimationFrame(() => {
            o.height = "0", o.padding = "0", o.margin = "0", setTimeout(t, n)
        })
    })
}

function Ts(e) {
    let {
        enter: t,
        exit: n,
        appendPosition: r = !1,
        collapse: o = !0,
        collapseDuration: s = 300
    } = e;
    return function(l) {
        let {
            children: i,
            position: a,
            preventExitTransition: d,
            done: c,
            nodeRef: f,
            isIn: p,
            playToast: w
        } = l;
        const v = r ? `${t}--${a}` : t,
            y = r ? `${n}--${a}` : n,
            _ = x.useRef(0);
        return x.useLayoutEffect(() => {
            const g = f.current,
                m = v.split(" "),
                h = S => {
                    S.target === f.current && (w(), g.removeEventListener("animationend", h), g.removeEventListener("animationcancel", h), _.current === 0 && S.type !== "animationcancel" && g.classList.remove(...m))
                };
            g.classList.add(...m), g.addEventListener("animationend", h), g.addEventListener("animationcancel", h)
        }, []), x.useEffect(() => {
            const g = f.current,
                m = () => {
                    g.removeEventListener("animationend", m), o ? cv(g, c, s) : c()
                };
            p || (d ? m() : (_.current = 1, g.className += ` ${y}`, g.addEventListener("animationend", m)))
        }, [p]), z.createElement(z.Fragment, null, i)
    }
}

function Yu(e, t) {
    return e != null ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t
    } : {}
}
const xe = new Map;
let Ar = [];
const hi = new Set,
    dv = e => hi.forEach(t => t(e)),
    ep = () => xe.size > 0;

function tp(e, t) {
    var n;
    if (t) return !((n = xe.get(t)) == null || !n.isToastActive(e));
    let r = !1;
    return xe.forEach(o => {
        o.isToastActive(e) && (r = !0)
    }), r
}

function np(e, t) {
    pi(e) && (ep() || Ar.push({
        content: e,
        options: t
    }), xe.forEach(n => {
        n.buildToast(e, t)
    }))
}

function Zu(e, t) {
    xe.forEach(n => {
        t != null && t != null && t.containerId ? (t == null ? void 0 : t.containerId) === n.id && n.toggle(e, t == null ? void 0 : t.id) : n.toggle(e, t == null ? void 0 : t.id)
    })
}

function fv(e) {
    const {
        subscribe: t,
        getSnapshot: n,
        setProps: r
    } = x.useRef(function(s) {
        const l = s.containerId || 1;
        return {
            subscribe(i) {
                const a = function(c, f, p) {
                    let w = 1,
                        v = 0,
                        y = [],
                        _ = [],
                        g = [],
                        m = f;
                    const h = new Map,
                        S = new Set,
                        C = () => {
                            g = Array.from(h.values()), S.forEach(k => k())
                        },
                        T = k => {
                            _ = k == null ? [] : _.filter(F => F !== k), C()
                        },
                        P = k => {
                            const {
                                toastId: F,
                                onOpen: j,
                                updateId: A,
                                children: le
                            } = k.props, $e = A == null;
                            k.staleId && h.delete(k.staleId), h.set(F, k), _ = [..._, k.props.toastId].filter(Ge => Ge !== k.staleId), C(), p(Yu(k, $e ? "added" : "updated")), $e && De(j) && j(x.isValidElement(le) && le.props)
                        };
                    return {
                        id: c,
                        props: m,
                        observe: k => (S.add(k), () => S.delete(k)),
                        toggle: (k, F) => {
                            h.forEach(j => {
                                F != null && F !== j.props.toastId || De(j.toggle) && j.toggle(k)
                            })
                        },
                        removeToast: T,
                        toasts: h,
                        clearQueue: () => {
                            v -= y.length, y = []
                        },
                        buildToast: (k, F) => {
                            if ((b => {
                                    let {
                                        containerId: ue,
                                        toastId: re,
                                        updateId: ke
                                    } = b;
                                    const ve = ue ? ue !== c : c !== 1,
                                        st = h.has(re) && ke == null;
                                    return ve || st
                                })(F)) return;
                            const {
                                toastId: j,
                                updateId: A,
                                data: le,
                                staleId: $e,
                                delay: Ge
                            } = F, _t = () => {
                                T(j)
                            }, kt = A == null;
                            kt && v++;
                            const Le = { ...m,
                                style: m.toastStyle,
                                key: w++,
                                ...Object.fromEntries(Object.entries(F).filter(b => {
                                    let [ue, re] = b;
                                    return re != null
                                })),
                                toastId: j,
                                updateId: A,
                                data: le,
                                closeToast: _t,
                                isIn: !1,
                                className: Po(F.className || m.toastClassName),
                                bodyClassName: Po(F.bodyClassName || m.bodyClassName),
                                progressClassName: Po(F.progressClassName || m.progressClassName),
                                autoClose: !F.isLoading && (R = F.autoClose, O = m.autoClose, R === !1 || Br(R) && R > 0 ? R : O),
                                deleteToast() {
                                    const b = h.get(j),
                                        {
                                            onClose: ue,
                                            children: re
                                        } = b.props;
                                    De(ue) && ue(x.isValidElement(re) && re.props), p(Yu(b, "removed")), h.delete(j), v--, v < 0 && (v = 0), y.length > 0 ? P(y.shift()) : C()
                                }
                            };
                            var R, O;
                            Le.closeButton = m.closeButton, F.closeButton === !1 || pi(F.closeButton) ? Le.closeButton = F.closeButton : F.closeButton === !0 && (Le.closeButton = !pi(m.closeButton) || m.closeButton);
                            let I = k;
                            x.isValidElement(k) && !on(k.type) ? I = x.cloneElement(k, {
                                closeToast: _t,
                                toastProps: Le,
                                data: le
                            }) : De(k) && (I = k({
                                closeToast: _t,
                                toastProps: Le,
                                data: le
                            }));
                            const H = {
                                content: I,
                                props: Le,
                                staleId: $e
                            };
                            m.limit && m.limit > 0 && v > m.limit && kt ? y.push(H) : Br(Ge) ? setTimeout(() => {
                                P(H)
                            }, Ge) : P(H)
                        },
                        setProps(k) {
                            m = k
                        },
                        setToggle: (k, F) => {
                            h.get(k).toggle = F
                        },
                        isToastActive: k => _.some(F => F === k),
                        getSnapshot: () => m.newestOnTop ? g.reverse() : g
                    }
                }(l, s, dv);
                xe.set(l, a);
                const d = a.observe(i);
                return Ar.forEach(c => np(c.content, c.options)), Ar = [], () => {
                    d(), xe.delete(l)
                }
            },
            setProps(i) {
                var a;
                (a = xe.get(l)) == null || a.setProps(i)
            },
            getSnapshot() {
                var i;
                return (i = xe.get(l)) == null ? void 0 : i.getSnapshot()
            }
        }
    }(e)).current;
    r(e);
    const o = x.useSyncExternalStore(t, n, n);
    return {
        getToastToRender: function(s) {
            if (!o) return [];
            const l = new Map;
            return o.forEach(i => {
                const {
                    position: a
                } = i.props;
                l.has(a) || l.set(a, []), l.get(a).push(i)
            }), Array.from(l, i => s(i[0], i[1]))
        },
        isToastActive: tp,
        count: o == null ? void 0 : o.length
    }
}

function pv(e) {
    const [t, n] = x.useState(!1), [r, o] = x.useState(!1), s = x.useRef(null), l = x.useRef({
        start: 0,
        delta: 0,
        removalDistance: 0,
        canCloseOnClick: !0,
        canDrag: !1,
        didMove: !1
    }).current, {
        autoClose: i,
        pauseOnHover: a,
        closeToast: d,
        onClick: c,
        closeOnClick: f
    } = e;
    var p, w;

    function v() {
        n(!0)
    }

    function y() {
        n(!1)
    }

    function _(h) {
        const S = s.current;
        l.canDrag && S && (l.didMove = !0, t && y(), l.delta = e.draggableDirection === "x" ? h.clientX - l.start : h.clientY - l.start, l.start !== h.clientX && (l.canCloseOnClick = !1), S.style.transform = `translate3d(${e.draggableDirection==="x"?`${l.delta}px, var(--y)`:`0, calc(${l.delta}px + var(--y))`},0)`, S.style.opacity = "" + (1 - Math.abs(l.delta / l.removalDistance)))
    }

    function g() {
        document.removeEventListener("pointermove", _), document.removeEventListener("pointerup", g);
        const h = s.current;
        if (l.canDrag && l.didMove && h) {
            if (l.canDrag = !1, Math.abs(l.delta) > l.removalDistance) return o(!0), e.closeToast(), void e.collapseAll();
            h.style.transition = "transform 0.2s, opacity 0.2s", h.style.removeProperty("transform"), h.style.removeProperty("opacity")
        }
    }(w = xe.get((p = {
        id: e.toastId,
        containerId: e.containerId,
        fn: n
    }).containerId || 1)) == null || w.setToggle(p.id, p.fn), x.useEffect(() => {
        if (e.pauseOnFocusLoss) return document.hasFocus() || y(), window.addEventListener("focus", v), window.addEventListener("blur", y), () => {
            window.removeEventListener("focus", v), window.removeEventListener("blur", y)
        }
    }, [e.pauseOnFocusLoss]);
    const m = {
        onPointerDown: function(h) {
            if (e.draggable === !0 || e.draggable === h.pointerType) {
                l.didMove = !1, document.addEventListener("pointermove", _), document.addEventListener("pointerup", g);
                const S = s.current;
                l.canCloseOnClick = !0, l.canDrag = !0, S.style.transition = "none", e.draggableDirection === "x" ? (l.start = h.clientX, l.removalDistance = S.offsetWidth * (e.draggablePercent / 100)) : (l.start = h.clientY, l.removalDistance = S.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent) / 100)
            }
        },
        onPointerUp: function(h) {
            const {
                top: S,
                bottom: C,
                left: T,
                right: P
            } = s.current.getBoundingClientRect();
            h.nativeEvent.type !== "touchend" && e.pauseOnHover && h.clientX >= T && h.clientX <= P && h.clientY >= S && h.clientY <= C ? y() : v()
        }
    };
    return i && a && (m.onMouseEnter = y, e.stacked || (m.onMouseLeave = v)), f && (m.onClick = h => {
        c && c(h), l.canCloseOnClick && d()
    }), {
        playToast: v,
        pauseToast: y,
        isRunning: t,
        preventExitTransition: r,
        toastRef: s,
        eventHandlers: m
    }
}

function hv(e) {
    let {
        delay: t,
        isRunning: n,
        closeToast: r,
        type: o = "default",
        hide: s,
        className: l,
        style: i,
        controlledProgress: a,
        progress: d,
        rtl: c,
        isIn: f,
        theme: p
    } = e;
    const w = s || a && d === 0,
        v = { ...i,
            animationDuration: `${t}ms`,
            animationPlayState: n ? "running" : "paused"
        };
    a && (v.transform = `scaleX(${d})`);
    const y = It("Toastify__progress-bar", a ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${p}`, `Toastify__progress-bar--${o}`, {
            "Toastify__progress-bar--rtl": c
        }),
        _ = De(l) ? l({
            rtl: c,
            type: o,
            defaultClassName: y
        }) : It(y, l),
        g = {
            [a && d >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: a && d < 1 ? null : () => {
                f && r()
            }
        };
    return z.createElement("div", {
        className: "Toastify__progress-bar--wrp",
        "data-hidden": w
    }, z.createElement("div", {
        className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${o}`
    }), z.createElement("div", {
        role: "progressbar",
        "aria-hidden": w ? "true" : "false",
        "aria-label": "notification timer",
        className: _,
        style: v,
        ...g
    }))
}
let mv = 1;
const rp = () => "" + mv++;

function gv(e) {
    return e && (on(e.toastId) || Br(e.toastId)) ? e.toastId : rp()
}

function vr(e, t) {
    return np(e, t), t.toastId
}

function rs(e, t) {
    return { ...t,
        type: t && t.type || e,
        toastId: gv(t)
    }
}

function fo(e) {
    return (t, n) => vr(t, rs(e, n))
}

function M(e, t) {
    return vr(e, rs("default", t))
}
M.loading = (e, t) => vr(e, rs("default", {
    isLoading: !0,
    autoClose: !1,
    closeOnClick: !1,
    closeButton: !1,
    draggable: !1,
    ...t
})), M.promise = function(e, t, n) {
    let r, {
        pending: o,
        error: s,
        success: l
    } = t;
    o && (r = on(o) ? M.loading(o, n) : M.loading(o.render, { ...n,
        ...o
    }));
    const i = {
            isLoading: null,
            autoClose: null,
            closeOnClick: null,
            closeButton: null,
            draggable: null
        },
        a = (c, f, p) => {
            if (f == null) return void M.dismiss(r);
            const w = {
                    type: c,
                    ...i,
                    ...n,
                    data: p
                },
                v = on(f) ? {
                    render: f
                } : f;
            return r ? M.update(r, { ...w,
                ...v
            }) : M(v.render, { ...w,
                ...v
            }), p
        },
        d = De(e) ? e() : e;
    return d.then(c => a("success", l, c)).catch(c => a("error", s, c)), d
}, M.success = fo("success"), M.info = fo("info"), M.error = fo("error"), M.warning = fo("warning"), M.warn = M.warning, M.dark = (e, t) => vr(e, rs("default", {
    theme: "dark",
    ...t
})), M.dismiss = function(e) {
    (function(t) {
        var n;
        if (ep()) {
            if (t == null || on(n = t) || Br(n)) xe.forEach(r => {
                r.removeToast(t)
            });
            else if (t && ("containerId" in t || "id" in t)) {
                const r = xe.get(t.containerId);
                r ? r.removeToast(t.id) : xe.forEach(o => {
                    o.removeToast(t.id)
                })
            }
        } else Ar = Ar.filter(r => t != null && r.options.toastId !== t)
    })(e)
}, M.clearWaitingQueue = function(e) {
    e === void 0 && (e = {}), xe.forEach(t => {
        !t.props.limit || e.containerId && t.id !== e.containerId || t.clearQueue()
    })
}, M.isActive = tp, M.update = function(e, t) {
    t === void 0 && (t = {});
    const n = ((r, o) => {
        var s;
        let {
            containerId: l
        } = o;
        return (s = xe.get(l || 1)) == null ? void 0 : s.toasts.get(r)
    })(e, t);
    if (n) {
        const {
            props: r,
            content: o
        } = n, s = {
            delay: 100,
            ...r,
            ...t,
            toastId: t.toastId || e,
            updateId: rp()
        };
        s.toastId !== e && (s.staleId = e);
        const l = s.render || o;
        delete s.render, vr(l, s)
    }
}, M.done = e => {
    M.update(e, {
        progress: 1
    })
}, M.onChange = function(e) {
    return hi.add(e), () => {
        hi.delete(e)
    }
}, M.play = e => Zu(!0, e), M.pause = e => Zu(!1, e);
const vv = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
    po = e => {
        let {
            theme: t,
            type: n,
            isLoading: r,
            ...o
        } = e;
        return z.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
            ...o
        })
    },
    ul = {
        info: function(e) {
            return z.createElement(po, { ...e
            }, z.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
            }))
        },
        warning: function(e) {
            return z.createElement(po, { ...e
            }, z.createElement("path", {
                d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
            }))
        },
        success: function(e) {
            return z.createElement(po, { ...e
            }, z.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
            }))
        },
        error: function(e) {
            return z.createElement(po, { ...e
            }, z.createElement("path", {
                d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
            }))
        },
        spinner: function() {
            return z.createElement("div", {
                className: "Toastify__spinner"
            })
        }
    },
    yv = e => {
        const {
            isRunning: t,
            preventExitTransition: n,
            toastRef: r,
            eventHandlers: o,
            playToast: s
        } = pv(e), {
            closeButton: l,
            children: i,
            autoClose: a,
            onClick: d,
            type: c,
            hideProgressBar: f,
            closeToast: p,
            transition: w,
            position: v,
            className: y,
            style: _,
            bodyClassName: g,
            bodyStyle: m,
            progressClassName: h,
            progressStyle: S,
            updateId: C,
            role: T,
            progress: P,
            rtl: k,
            toastId: F,
            deleteToast: j,
            isIn: A,
            isLoading: le,
            closeOnClick: $e,
            theme: Ge
        } = e, _t = It("Toastify__toast", `Toastify__toast-theme--${Ge}`, `Toastify__toast--${c}`, {
            "Toastify__toast--rtl": k
        }, {
            "Toastify__toast--close-on-click": $e
        }), kt = De(y) ? y({
            rtl: k,
            position: v,
            type: c,
            defaultClassName: _t
        }) : It(_t, y), Le = function(H) {
            let {
                theme: b,
                type: ue,
                isLoading: re,
                icon: ke
            } = H, ve = null;
            const st = {
                theme: b,
                type: ue
            };
            return ke === !1 || (De(ke) ? ve = ke({ ...st,
                isLoading: re
            }) : x.isValidElement(ke) ? ve = x.cloneElement(ke, st) : re ? ve = ul.spinner() : (up => up in ul)(ue) && (ve = ul[ue](st))), ve
        }(e), R = !!P || !a, O = {
            closeToast: p,
            type: c,
            theme: Ge
        };
        let I = null;
        return l === !1 || (I = De(l) ? l(O) : x.isValidElement(l) ? x.cloneElement(l, O) : function(H) {
            let {
                closeToast: b,
                theme: ue,
                ariaLabel: re = "close"
            } = H;
            return z.createElement("button", {
                className: `Toastify__close-button Toastify__close-button--${ue}`,
                type: "button",
                onClick: ke => {
                    ke.stopPropagation(), b(ke)
                },
                "aria-label": re
            }, z.createElement("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 14 16"
            }, z.createElement("path", {
                fillRule: "evenodd",
                d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
            })))
        }(O)), z.createElement(w, {
            isIn: A,
            done: j,
            position: v,
            preventExitTransition: n,
            nodeRef: r,
            playToast: s
        }, z.createElement("div", {
            id: F,
            onClick: d,
            "data-in": A,
            className: kt,
            ...o,
            style: _,
            ref: r
        }, z.createElement("div", { ...A && {
                role: T
            },
            className: De(g) ? g({
                type: c
            }) : It("Toastify__toast-body", g),
            style: m
        }, Le != null && z.createElement("div", {
            className: It("Toastify__toast-icon", {
                "Toastify--animate-icon Toastify__zoom-enter": !le
            })
        }, Le), z.createElement("div", null, i)), I, z.createElement(hv, { ...C && !R ? {
                key: `pb-${C}`
            } : {},
            rtl: k,
            theme: Ge,
            delay: a,
            isRunning: t,
            isIn: A,
            closeToast: p,
            hide: f,
            type: c,
            style: S,
            className: h,
            controlledProgress: R,
            progress: P || 0
        })))
    },
    Rs = function(e, t) {
        return t === void 0 && (t = !1), {
            enter: `Toastify--animate Toastify__${e}-enter`,
            exit: `Toastify--animate Toastify__${e}-exit`,
            appendPosition: t
        }
    },
    wv = Ts(Rs("bounce", !0));
Ts(Rs("slide", !0));
Ts(Rs("zoom"));
Ts(Rs("flip"));
const xv = {
    position: "top-right",
    transition: wv,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light"
};

function ya(e) {
    let t = { ...xv,
        ...e
    };
    const n = e.stacked,
        [r, o] = x.useState(!0),
        s = x.useRef(null),
        {
            getToastToRender: l,
            isToastActive: i,
            count: a
        } = fv(t),
        {
            className: d,
            style: c,
            rtl: f,
            containerId: p
        } = t;

    function w(y) {
        const _ = It("Toastify__toast-container", `Toastify__toast-container--${y}`, {
            "Toastify__toast-container--rtl": f
        });
        return De(d) ? d({
            position: y,
            rtl: f,
            defaultClassName: _
        }) : It(_, Po(d))
    }

    function v() {
        n && (o(!0), M.play())
    }
    return vv(() => {
        if (n) {
            var y;
            const _ = s.current.querySelectorAll('[data-in="true"]'),
                g = 12,
                m = (y = t.position) == null ? void 0 : y.includes("top");
            let h = 0,
                S = 0;
            Array.from(_).reverse().forEach((C, T) => {
                const P = C;
                P.classList.add("Toastify__toast--stacked"), T > 0 && (P.dataset.collapsed = `${r}`), P.dataset.pos || (P.dataset.pos = m ? "top" : "bot");
                const k = h * (r ? .2 : 1) + (r ? 0 : g * T);
                P.style.setProperty("--y", `${m?k:-1*k}px`), P.style.setProperty("--g", `${g}`), P.style.setProperty("--s", "" + (1 - (r ? S : 0))), h += P.offsetHeight, S += .025
            })
        }
    }, [r, a, n]), z.createElement("div", {
        ref: s,
        className: "Toastify",
        id: p,
        onMouseEnter: () => {
            n && (o(!1), M.pause())
        },
        onMouseLeave: v
    }, l((y, _) => {
        const g = _.length ? { ...c
        } : { ...c,
            pointerEvents: "none"
        };
        return z.createElement("div", {
            className: w(y),
            style: g,
            key: `container-${y}`
        }, _.map(m => {
            let {
                content: h,
                props: S
            } = m;
            return z.createElement(yv, { ...S,
                stacked: n,
                collapseAll: v,
                isIn: i(S.toastId, S.containerId),
                style: S.style,
                key: `toast-${S.key}`
            }, h)
        }))
    }))
}
const ye = "https://maheshlangote779-git-32705d-maheshlangote777-gmailcoms-projects.vercel.app",
    Z = {
        apiAuthRegisterPost: `${ye}/api/auth/register`,
        apiAuthLoginPost: `${ye}/api/auth/login`,
        apiUserInfoGet: `${ye}/api/user/user-info`,
        apiFoldersGet: `${ye}/api/folders`,
        apiFoldersPost: `${ye}/api/folders`,
        apiFoldersDelete: e => `${ye}/api/folders/${e}`,
        apiFormsFolder: `${ye}/api/forms/folder`,
        apiFormsDelete: e => `${ye}/api/forms/${e}`,
        apiForms: `${ye}/api/forms`,
        apiFormsById: e => `${ye}/api/forms/${e}`,
        apiSubmissions: `${ye}/api/submissions`,
        apiGenerateUniqueId: e => `${ye}/api/submissions/generate-unique-id/${e}`,
        apiFormsPublic: e => `${ye}/api/forms/public/${e}`,
        apiFormsShare: e => `${ye}/api/forms/${e}/share`,
        apiSubmissionsFormSubmissions: e => `${ye}/api/submissions/form-submissions/${e}`
    };

function Sv({
    onToggle: e
}) {
    const [t, n] = x.useState({
        email: "",
        password: ""
    }), r = Ue(), o = dt(), {
        login: s
    } = hn(), l = a => {
        n({ ...t,
            [a.target.name]: a.target.value
        })
    }, i = async a => {
        var d, c;
        a.preventDefault();
        try {
            const f = await $.post(Z.apiAuthLoginPost, t);
            if (f.data && f.data.token) try {
                const p = await $.get(Z.apiUserInfoGet, {
                    headers: {
                        Authorization: `Bearer ${f.data.token}`
                    }
                });
                s(f.data.token, p.data.name), M.success("Login successful! Redirecting...", {
                    onClose: () => {
                        var v, y;
                        const w = ((y = (v = o.state) == null ? void 0 : v.from) == null ? void 0 : y.pathname) || "/";
                        r(w, {
                            replace: !0
                        })
                    }
                })
            } catch (p) {
                console.error("Error fetching user info:", p), M.error("Login successful, but failed to fetch user info")
            } else throw new Error("Login failed: No token received")
        } catch (f) {
            console.error("Login error:", f), M.error(((c = (d = f.response) == null ? void 0 : d.data) == null ? void 0 : c.message) || "An error occurred during login")
        }
    };
    return u.jsxs(u.Fragment, {
        children: [u.jsxs("form", {
            className: "auth-form",
            onSubmit: i,
            children: [u.jsx("label", {
                children: "Email"
            }), u.jsx("input", {
                type: "email",
                name: "email",
                placeholder: "Enter your email",
                value: t.email,
                onChange: l,
                required: !0
            }), u.jsx("label", {
                children: "Password"
            }), u.jsx("input", {
                type: "password",
                name: "password",
                placeholder: "••••••••",
                value: t.password,
                onChange: l,
                required: !0
            }), u.jsx("button", {
                type: "submit",
                className: "submit-btn",
                children: "Log in"
            }), u.jsxs("p", {
                children: ["Don't have an account? ", u.jsx("a", {
                    href: "#",
                    onClick: e,
                    children: "Sign up"
                })]
            })]
        }), u.jsx(ya, {
            position: "top-right",
            autoClose: 1e3,
            hideProgressBar: !1
        })]
    })
}

function Ev({
    onToggle: e
}) {
    const [t, n] = x.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }), [r, o] = x.useState({}), s = Ue(), {
        login: l
    } = hn(), i = (c, f) => {
        switch (c) {
            case "name":
                return f.length < 3 ? "Username must be at least 3 characters long" : "";
            case "email":
                return /\S+@\S+\.\S+/.test(f) ? "" : "Email address is invalid";
            case "password":
                return f.length < 6 ? "Password must be at least 6 characters long" : "";
            case "confirmPassword":
                return f !== t.password ? "Passwords do not match" : "";
            default:
                return ""
        }
    }, a = c => {
        const {
            name: f,
            value: p
        } = c.target;
        n({ ...t,
            [f]: p
        }), o({ ...r,
            [f]: i(f, p)
        })
    };
    x.useEffect(() => {
        o({ ...r,
            confirmPassword: i("confirmPassword", t.confirmPassword)
        })
    }, [t.password]);
    const d = async c => {
        var p, w, v;
        c.preventDefault();
        const f = Object.keys(t).reduce((y, _) => {
            const g = i(_, t[_]);
            return g && (y[_] = g), y
        }, {});
        if (Object.keys(f).length > 0) {
            o(f);
            return
        }
        try {
            const y = await $.post(Z.apiAuthRegisterPost, {
                name: t.name,
                email: t.email,
                password: t.password
            });
            console.log("Signup successful:", y.data), l(y.data.token, t.name), M.success("Signup successful! Redirecting...", {
                onClose: () => {
                    s("/")
                }
            })
        } catch (y) {
            console.error("Signup error:", ((p = y.response) == null ? void 0 : p.data) || y.message), M.error(((v = (w = y.response) == null ? void 0 : w.data) == null ? void 0 : v.message) || "An error occurred during signup")
        }
    };
    return u.jsxs(u.Fragment, {
        children: [u.jsxs("form", {
            className: "auth-form",
            onSubmit: d,
            children: [u.jsx("label", {
                children: "Username"
            }), u.jsx("input", {
                type: "text",
                name: "name",
                placeholder: "Enter a username",
                value: t.name,
                onChange: a,
                className: r.name ? "error" : "",
                required: !0
            }), r.name && u.jsx("p", {
                className: "error-message",
                children: r.name
            }), u.jsx("label", {
                children: "Email"
            }), u.jsx("input", {
                type: "email",
                name: "email",
                placeholder: "Enter your email",
                value: t.email,
                onChange: a,
                className: r.email ? "error" : "",
                required: !0
            }), r.email && u.jsx("p", {
                className: "error-message",
                children: r.email
            }), u.jsx("label", {
                children: "Password"
            }), u.jsx("input", {
                type: "password",
                name: "password",
                placeholder: "••••••••",
                value: t.password,
                onChange: a,
                className: r.password ? "error" : "",
                required: !0
            }), r.password && u.jsx("p", {
                className: "error-message",
                children: r.password
            }), u.jsx("label", {
                children: "Confirm Password"
            }), u.jsx("input", {
                type: "password",
                name: "confirmPassword",
                placeholder: "••••••••",
                value: t.confirmPassword,
                onChange: a,
                className: r.confirmPassword ? "error" : "",
                required: !0
            }), r.confirmPassword && u.jsx("p", {
                className: "error-message",
                children: r.confirmPassword
            }), u.jsx("button", {
                type: "submit",
                className: "submit-btn",
                children: "Sign Up"
            }), u.jsxs("p", {
                children: ["Already have an account? ", u.jsx("a", {
                    href: "#",
                    onClick: e,
                    children: "Login"
                })]
            })]
        }), u.jsx(ya, {
            position: "top-right",
            autoClose: 2e3,
            hideProgressBar: !1
        })]
    })
}

function _v() {
    const e = Ue();
    return u.jsx("button", {
        className: "back-btn",
        onClick: () => e(-1),
        children: "←"
    })
}
const wa = "/assets/triangle-C6ItbXi-.svg";

function kv() {
    return u.jsxs("div", {
        className: "shapes",
        children: [u.jsx("img", {
            src: wa,
            alt: "Triangle",
            className: "triangle triangle-1"
        }), u.jsx("div", {
            className: "circle top-right"
        }), u.jsx("div", {
            className: "circle bottom-left"
        })]
    })
}
const Nv = () => {
        const [e, t] = x.useState(!1), {
            userName: n,
            logout: r
        } = hn(), o = Ue(), s = () => t(!e), l = async () => {
            await r(), o("/")
        }, i = () => {
            o("/profile")
        };
        return u.jsx("header", {
            className: "dashboard-header",
            children: u.jsxs("div", {
                className: "workspace-dropdown",
                onClick: s,
                children: [u.jsxs("span", {
                    children: [n, "'s workspace"]
                }), u.jsx("span", {
                    className: `arrow ${e?"up":"down"}`
                }), e && u.jsxs("div", {
                    className: "dropdown-menu",
                    children: [u.jsx("div", {
                        className: "dropdown-item",
                        onClick: i,
                        children: "Settings"
                    }), u.jsx("div", {
                        className: "dropdown-item logout",
                        onClick: l,
                        children: "Log Out"
                    })]
                })]
            })
        })
    },
    Cv = ({
        folders: e,
        onCreateFolder: t,
        onDeleteFolder: n,
        onSelectFolder: r
    }) => {
        const [o, s] = x.useState(null);
        x.useEffect(() => {
            e.length > 0 && !o && (s(e[0]._id), r(e[0]._id))
        }, [e, o, r]);
        const l = i => {
            s(i), r(i)
        };
        return u.jsxs("div", {
            className: "action-bar",
            children: [u.jsxs("button", {
                className: "create-folder-btn",
                onClick: t,
                children: [u.jsx("span", {
                    className: "folder-icon",
                    children: "📁"
                }), "Create a folder"]
            }), e.map(i => u.jsxs("button", {
                className: `network-btn ${o===i._id?"selected":""}`,
                onClick: () => l(i._id),
                children: [i.name, u.jsx("span", {
                    className: "delete-icon",
                    onClick: a => {
                        a.stopPropagation(), console.log("Deleting folder with ID:", i._id), n(i._id)
                    },
                    children: "🗑"
                })]
            }, i._id))]
        })
    },
    Fs = () => {
        const {
            isLoggedIn: e
        } = hn();
        return {
            authenticatedFetch: async (n, r = {}) => {
                if (!e) throw new Error("User is not authenticated");
                const s = {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    ...r.headers
                };
                console.log("Making authenticated request to:", n), console.log("Request options:", { ...r,
                    headers: s
                });
                const l = await fetch(n, { ...r,
                    headers: s
                });
                if (!l.ok) {
                    const i = await l.json();
                    throw new Error(i.message || "An error occurred")
                }
                return l.json()
            }
        }
    },
    op = ({
        onConfirm: e,
        onCancel: t,
        message: n
    }) => u.jsx("div", {
        className: "modal-overlay",
        children: u.jsxs("div", {
            className: "modal",
            children: [u.jsx("h2", {
                children: n
            }), u.jsxs("div", {
                className: "modal-actions",
                children: [u.jsx("button", {
                    onClick: e,
                    className: "btn-primary",
                    children: "Confirm"
                }), u.jsx("button", {
                    onClick: t,
                    className: "btn-secondary",
                    children: "Cancel"
                })]
            })]
        })
    }),
    jv = ({
        selectedFolderId: e,
        onDeleteForm: t
    }) => {
        const [n, r] = x.useState([]), [o, s] = x.useState(null), {
            authenticatedFetch: l
        } = Fs(), i = Ue();
        x.useEffect(() => {
            e && a(e)
        }, [e]);
        const a = async v => {
                try {
                    const y = await l(`${Z.apiFormsFolder}/${v}`);
                    r(y)
                } catch (y) {
                    console.error("Error fetching forms:", y)
                }
            },
            d = v => {
                console.log("Attempting to delete form with ID:", v), s(v)
            },
            c = async () => {
                if (o) {
                    console.log("Confirming deletion of form with ID:", o);
                    try {
                        await t(o), console.log("Form deleted successfully"), s(null), a(e)
                    } catch (v) {
                        console.error("Error deleting form:", v)
                    }
                }
            },
            f = () => {
                s(null)
            },
            p = v => {
                i(`/flow/${v}`)
            },
            w = () => {
                e ? i(`/flow?folderId=${e}`) : toast.error("Please select a folder before creating a typebot.")
            };
        return u.jsxs("div", {
            className: "card-grid",
            children: [u.jsxs("div", {
                className: "card create-typebot",
                onClick: w,
                children: [u.jsx("span", {
                    className: "plus-icon",
                    children: "+"
                }), u.jsx("p", {
                    children: e ? "Create a typebot" : "Select a folder to create a typebot"
                })]
            }), n.map(v => u.jsxs("div", {
                className: "card new-form",
                onClick: () => p(v.id),
                children: [u.jsx("p", {
                    children: v.title || "Untitled Form"
                }), u.jsx("span", {
                    className: "delete-icon",
                    onClick: y => {
                        y.stopPropagation(), d(v.id)
                    },
                    children: "🗑"
                })]
            }, v.id)), o && u.jsx(op, {
                onConfirm: c,
                onCancel: f,
                message: "Are you sure you want to delete this form?"
            })]
        })
    },
    Pv = ({
        onClose: e,
        onCreateFolder: t
    }) => {
        const [n, r] = x.useState(""), o = s => {
            s.preventDefault(), t(n), e()
        };
        return u.jsx("div", {
            className: "modal-overlay",
            children: u.jsxs("div", {
                className: "modal",
                children: [u.jsx("h2", {
                    children: "Create New Folder"
                }), u.jsxs("form", {
                    onSubmit: o,
                    children: [u.jsx("input", {
                        type: "text",
                        placeholder: "Enter folder name",
                        value: n,
                        onChange: s => r(s.target.value)
                    }), u.jsxs("div", {
                        className: "modal-actions",
                        children: [u.jsx("button", {
                            type: "submit",
                            className: "btn-primary",
                            children: "Done"
                        }), u.jsx("button", {
                            type: "button",
                            onClick: e,
                            className: "btn-secondary",
                            children: "Cancel"
                        })]
                    })]
                })]
            })
        })
    },
    ec = () => {
        const [e, t] = x.useState(!1), [n, r] = x.useState(!1), [o, s] = x.useState([]), [l, i] = x.useState(null), [a, d] = x.useState(!1), {
            isLoggedIn: c
        } = hn(), {
            authenticatedFetch: f
        } = Fs();
        x.useEffect(() => {
            c && v()
        }, [c]);
        const p = Ue(),
            w = dt();
        if (z.useEffect(() => {
                c || p("/auth", {
                    state: {
                        from: w
                    },
                    replace: !0
                })
            }, [c, p, w]), !c) return null;
        const v = async () => {
                d(!0);
                try {
                    const h = await f(Z.apiFoldersGet);
                    s(h), h.length > 0 && !l && i(h[0]._id)
                } catch (h) {
                    console.error("Error fetching folders:", h), M.error("Failed to fetch folders. Please try again.")
                } finally {
                    d(!1)
                }
            },
            y = async h => {
                d(!0);
                try {
                    await f(Z.apiFoldersPost, {
                        method: "POST",
                        body: JSON.stringify({
                            name: h
                        })
                    }), await v(), t(!1), M.success("Folder created successfully!")
                } catch (S) {
                    console.error("Error creating folder:", S), M.error("Failed to create folder. Please try again.")
                } finally {
                    d(!1)
                }
            },
            _ = async () => {
                if (l) {
                    d(!0);
                    try {
                        await f(Z.apiFoldersDelete(l), {
                            method: "DELETE"
                        }), await v(), r(!1), M.success("Folder deleted successfully!"), o.length > 0 ? i(o[0]._id) : i(null)
                    } catch (h) {
                        console.error("Error deleting folder:", h), M.error("Failed to delete folder. Please try again.")
                    } finally {
                        d(!1)
                    }
                }
            },
            g = async h => {
                d(!0);
                try {
                    await f(Z.apiFormsDelete(h), {
                        method: "DELETE"
                    }), M.success("Form deleted successfully!")
                } catch (S) {
                    console.error("Error deleting form:", S), M.error("Failed to delete form. Please try again.")
                } finally {
                    d(!1)
                }
            },
            m = h => {
                i(h)
            };
        return u.jsxs("div", {
            className: "dashboard",
            children: [u.jsx(Nv, {}), u.jsxs("main", {
                className: "dashboard-main",
                children: [u.jsx(Cv, {
                    folders: o,
                    selectedFolderId: l,
                    onCreateFolder: () => t(!0),
                    onDeleteFolder: h => {
                        i(h), r(!0)
                    },
                    onSelectFolder: m
                }), a ? u.jsx("div", {
                    className: "loading",
                    children: "Loading..."
                }) : u.jsx(jv, {
                    selectedFolderId: l,
                    onDeleteForm: g
                })]
            }), e && u.jsx(Pv, {
                onClose: () => t(!1),
                onCreateFolder: y
            }), n && u.jsx(op, {
                onConfirm: _,
                onCancel: () => r(!1),
                message: "Are you sure you want to delete this folder?"
            }), u.jsx(ya, {
                position: "top-right",
                autoClose: 3e3,
                hideProgressBar: !1
            })]
        })
    };

function Tv({
    formId: e,
    shareLink: t,
    onClose: n
}) {
    const [r, o] = x.useState(!1), s = () => {
        navigator.clipboard.writeText(t).then(() => {
            o(!0), setTimeout(() => o(!1), 2e3)
        })
    };
    return u.jsx("div", {
        className: "share-popup-overlay",
        children: u.jsxs("div", {
            className: "share-popup",
            children: [u.jsx("h3", {
                children: "Share Form"
            }), u.jsx("input", {
                type: "text",
                value: t,
                readOnly: !0
            }), u.jsx("button", {
                onClick: s,
                children: r ? "Copied!" : "Copy Link"
            }), u.jsx("button", {
                onClick: n,
                children: "Close"
            })]
        })
    })
}

function xa({
    formName: e,
    onSave: t,
    onFormNameChange: n,
    authenticatedFetch: r
}) {
    const o = Ue(),
        s = dt(),
        [l, i] = x.useState(!1),
        [a, d] = x.useState(""),
        c = s.pathname.split("/").pop(),
        f = async () => {
            try {
                const v = await await r(Z.apiFormsShare(c), {
                    method: "POST"
                });
                console.log(v.shareableLink), d(v.shareableLink), i(!0)
            } catch (w) {
                console.error("Error generating share link:", w)
            }
        },
        p = w => {
            switch (w) {
                case "Flow":
                    o(`/flow/${c}`);
                    break;
                case "Theme":
                    o(`/theme/${c}`);
                    break;
                case "Response":
                    o(`/response/${c}`);
                    break;
                default:
                    o("/workspace")
            }
        };
    return u.jsxs("header", {
        className: "dashboard-headerr",
        children: [u.jsx("input", {
            type: "text",
            placeholder: "Enter Form Name",
            className: "dashboard-header__form-name-input",
            value: e,
            onChange: w => n(w.target.value)
        }), u.jsxs("nav", {
            className: "dashboard-header__nav",
            children: [u.jsxs("button", {
                className: `dashboard-header__tab ${s.pathname.includes("/flow")?"active":""}`,
                onClick: () => p("Flow"),
                children: ["Flow", u.jsx("span", {
                    className: "dashboard-header__tab-indicator"
                })]
            }), u.jsxs("button", {
                className: `dashboard-header__tab ${s.pathname.includes("/theme")?"active":""}`,
                onClick: () => p("Theme"),
                children: ["Theme", u.jsx("span", {
                    className: "dashboard-header__tab-indicator"
                })]
            }), u.jsxs("button", {
                className: `dashboard-header__tab ${s.pathname.includes("/response")?"active":""}`,
                onClick: () => p("Response"),
                children: ["Response", u.jsx("span", {
                    className: "dashboard-header__tab-indicator"
                })]
            })]
        }), u.jsxs("div", {
            className: "dashboard-header__actions",
            children: [u.jsxs("button", {
                className: "dashboard-header__action-button dashboard-header__action-button--share",
                onClick: f,
                children: [u.jsx("span", {
                    className: "dashboard-header__action-icon",
                    children: "🔗"
                }), "Share"]
            }), u.jsxs("button", {
                className: "dashboard-header__action-button dashboard-header__action-button--save",
                onClick: t,
                children: [u.jsx("span", {
                    className: "dashboard-header__action-icon",
                    children: "💾"
                }), "Save"]
            }), u.jsx("button", {
                className: "dashboard-header__action-button dashboard-header__action-button--close",
                onClick: () => o("/workspace"),
                children: "✕"
            })]
        }), l && u.jsx(Tv, {
            formId: c,
            shareLink: a,
            onClose: () => i(!1)
        })]
    })
}

function Rv({
    addElement: e
}) {
    const t = [{
            type: "Image",
            icon: "🖼️"
        }, {
            type: "Video",
            icon: "🎥"
        }, {
            type: "GIF",
            icon: "GIF"
        }, {
            type: "Text",
            icon: "T"
        }, {
            type: "Number",
            icon: "#"
        }, {
            type: "Email",
            icon: "@"
        }, {
            type: "Phone",
            icon: "📞"
        }],
        n = [{
            type: "Date",
            icon: "📅"
        }, {
            type: "Radio",
            icon: "🔘"
        }, {
            type: "Checkbox",
            icon: "☑️"
        }, {
            type: "Dropdown",
            icon: "▼"
        }, {
            type: "StarRating",
            icon: "⭐"
        }, {
            type: "WordRating",
            icon: "ABC"
        }];
    return u.jsxs("div", {
        className: "sidebar",
        children: [u.jsx("h2", {
            className: "sidebar-title",
            children: "Bubbles"
        }), u.jsx("div", {
            className: "element-grid",
            children: t.map(r => u.jsxs("button", {
                className: "element-button",
                onClick: () => e(r.type),
                children: [u.jsx("span", {
                    className: "element-icon",
                    children: r.icon
                }), u.jsx("span", {
                    className: "element-type",
                    children: r.type
                })]
            }, r.type))
        }), u.jsx("h2", {
            className: "sidebar-title",
            children: "Inputs"
        }), u.jsx("div", {
            className: "element-grid",
            children: n.map(r => u.jsxs("button", {
                className: "element-button",
                onClick: () => e(r.type),
                children: [u.jsx("span", {
                    className: "element-icon",
                    children: r.icon
                }), u.jsx("span", {
                    className: "element-type",
                    children: r.type
                })]
            }, r.type))
        })]
    })
}

function Fv({
    elements: e,
    setFormData: t,
    description: n,
    onDescriptionChange: r
}) {
    const [o, s] = x.useState(""), l = x.useRef(null);
    x.useEffect(() => {
        var p;
        (p = l.current) == null || p.scrollIntoView({
            behavior: "smooth"
        })
    }, [e]);
    const i = (p, w) => {
            t(v => ({ ...v,
                fields: v.fields.map(y => y.id === p ? { ...y,
                    ...w
                } : y)
            }))
        },
        a = p => {
            t(w => ({ ...w,
                fields: w.fields.map(v => v.id === p ? { ...v,
                    options: [...v.options || [], `Option ${v.options.length+1}`]
                } : v)
            }))
        },
        d = (p, w) => {
            t(v => ({ ...v,
                fields: v.fields.map(y => y.id === p ? { ...y,
                    options: y.options.filter((_, g) => g !== w)
                } : y)
            }))
        },
        c = p => {
            t(w => w.fields.length > 1 ? (s(""), { ...w,
                fields: w.fields.filter(v => v.id !== p)
            }) : (s("At least one form field is required"), w))
        },
        f = p => {
            switch (p.type) {
                case "Text":
                case "Number":
                case "Email":
                case "Phone":
                case "Date":
                    return null;
                case "Radio":
                case "Checkbox":
                case "Dropdown":
                case "WordRating":
                    return u.jsxs("div", {
                        className: "canvasBoard__fieldOptions",
                        children: [u.jsx("h4", {
                            children: "Options:"
                        }), p.options.map((w, v) => u.jsxs("div", {
                            className: "canvasBoard__optionContainer",
                            children: [u.jsx("input", {
                                type: "text",
                                value: w,
                                onChange: y => {
                                    const _ = [...p.options];
                                    _[v] = y.target.value, i(p.id, {
                                        options: _
                                    })
                                },
                                className: "canvasBoard__optionInput"
                            }), u.jsx("button", {
                                className: "canvasBoard__removeOptionButton",
                                onClick: () => d(p.id, v),
                                children: "✕"
                            })]
                        }, v)), u.jsx("button", {
                            className: "canvasBoard__addOptionButton",
                            onClick: () => a(p.id),
                            children: "Add Option"
                        })]
                    });
                case "StarRating":
                    return u.jsx("div", {
                        className: "canvasBoard__starRating",
                        children: u.jsxs("label", {
                            children: ["Number of stars:", u.jsx("input", {
                                type: "number",
                                min: "1",
                                max: "10",
                                value: p.starCount || 5,
                                onChange: w => i(p.id, {
                                    starCount: parseInt(w.target.value)
                                })
                            })]
                        })
                    });
                case "Image":
                case "Video":
                case "GIF":
                    return u.jsx("div", {
                        children: u.jsx("input", {
                            type: "text",
                            placeholder: "Enter URL",
                            value: p.url || "",
                            onChange: w => i(p.id, {
                                url: w.target.value
                            }),
                            className: "canvasBoard__mediaInput"
                        })
                    });
                default:
                    return null
            }
        };
    return u.jsxs("div", {
        className: "canvasBoard",
        children: [o && u.jsx("div", {
            className: "canvasBoard__warning",
            children: o
        }), u.jsx("textarea", {
            className: "canvasBoard__description",
            placeholder: "Enter form description",
            value: n,
            onChange: p => r(p.target.value)
        }), e.map(p => u.jsxs("div", {
            className: "canvasBoard__element",
            children: [u.jsxs("div", {
                className: "canvasBoard__elementHeader",
                children: [u.jsx("input", {
                    type: "text",
                    placeholder: "Enter label",
                    value: p.label,
                    onChange: w => i(p.id, {
                        label: w.target.value
                    }),
                    className: "canvasBoard__input canvasBoard__input--label"
                }), u.jsx("button", {
                    className: "canvasBoard__removeButton",
                    onClick: () => c(p.id),
                    children: "✕"
                })]
            }), u.jsx("input", {
                type: "text",
                placeholder: "Enter error message",
                value: p.errorMessage,
                onChange: w => i(p.id, {
                    errorMessage: w.target.value
                }),
                className: "canvasBoard__input canvasBoard__input--error"
            }), u.jsxs("label", {
                className: "canvasBoard__requiredLabel",
                children: [u.jsx("input", {
                    type: "checkbox",
                    checked: p.required,
                    onChange: w => i(p.id, {
                        required: w.target.checked
                    }),
                    className: "canvasBoard__checkbox"
                }), "Required"]
            }), u.jsx("div", {
                className: "canvasBoard__options",
                children: f(p)
            })]
        }, p.id)), u.jsx("div", {
            ref: l
        })]
    })
}

function tc() {
    const {
        formId: e
    } = _s(), t = Ue(), n = dt(), {
        authenticatedFetch: r
    } = Fs(), [o, s] = x.useState({
        title: "",
        description: "",
        fields: [],
        background: "Dark",
        folder: new URLSearchParams(n.search).get("folderId") || ""
    });
    x.useEffect(() => {
        e && l()
    }, [e]);
    const l = async () => {
            try {
                const c = await r(Z.apiFormsById(e));
                s({ ...c,
                    fields: c.fields.map(f => ({ ...f,
                        id: f._id
                    })),
                    theme: c.theme || "Dark"
                })
            } catch (c) {
                console.error("Error fetching form data:", c)
            }
        },
        i = c => {
            const f = {
                type: c,
                id: Date.now(),
                label: `New ${c}`,
                required: !1,
                errorMessage: `Please enter a valid ${c.toLowerCase()}`
            };
            switch (c) {
                case "Text":
                case "Number":
                case "Email":
                case "Phone":
                case "Date":
                    break;
                case "Radio":
                case "Checkbox":
                case "Dropdown":
                    f.options = ["Option 1"];
                    break;
                case "StarRating":
                    f.starCount = 5;
                    break;
                case "WordRating":
                    f.options = ["Poor", "Fair", "Good", "Excellent"];
                    break;
                case "Image":
                case "Video":
                case "GIF":
                    f.url = "";
                    break
            }
            s(p => ({ ...p,
                fields: [...p.fields, f]
            }))
        },
        a = async () => {
            try {
                const c = { ...o,
                    fields: o.fields.map(({
                        id: f,
                        ...p
                    }) => p)
                };
                e ? await r(Z.apiFormsById(e), {
                    method: "PUT",
                    body: JSON.stringify(c)
                }) : await r(Z.apiForms, {
                    method: "POST",
                    body: JSON.stringify(c)
                }), t("/workspace")
            } catch (c) {
                console.error("Error saving form:", c)
            }
        },
        d = (c, f) => {
            s(p => ({ ...p,
                [c]: f
            }))
        };
    return u.jsxs("div", {
        className: "form-builder",
        children: [u.jsx(xa, {
            formName: o.title,
            onSave: a,
            onFormNameChange: c => d("title", c),
            authenticatedFetch: r
        }), u.jsxs("div", {
            className: "main-content",
            children: [u.jsx(Rv, {
                addElement: i
            }), u.jsx(Fv, {
                elements: o.fields,
                setFormData: s,
                description: o.description,
                onDescriptionChange: c => d("description", c)
            })]
        })]
    })
}

function Lv({
    selectedTheme: e,
    setSelectedTheme: t
}) {
    const n = [{
        name: "Light",
        color: "#FFFFFF"
    }, {
        name: "Dark",
        color: "#1E1E1E"
    }, {
        name: "Tail Blue",
        color: "#5F9EA0"
    }];
    return u.jsxs("div", {
        className: "theme-selector",
        children: [u.jsx("h2", {
            children: "Customize the theme"
        }), u.jsx("div", {
            className: "theme-options",
            children: n.map(r => u.jsxs("div", {
                className: `theme-option ${e===r.name?"selected":""}`,
                onClick: () => t(r.name),
                children: [u.jsxs("div", {
                    className: "theme-preview",
                    style: {
                        backgroundColor: r.color
                    },
                    children: [u.jsx("div", {
                        className: "preview-item blue-circle"
                    }), u.jsx("div", {
                        className: "preview-item orange-bar"
                    }), u.jsx("div", {
                        className: "preview-item blue-circle"
                    }), u.jsxs("div", {
                        className: "preview-item blue-squares",
                        children: [u.jsx("div", {}), u.jsx("div", {}), u.jsx("div", {})]
                    })]
                }), u.jsx("div", {
                    className: "theme-name",
                    children: r.name
                })]
            }, r.name))
        })]
    })
}

function Ov({
    theme: e
}) {
    const t = () => {
        switch (e) {
            case "Light":
                return "#FFFFFF";
            case "Dark":
                return "#1E1E1E";
            case "Tail Blue":
                return "#5F9EA0";
            default:
                return "#FFFFFF"
        }
    };
    return u.jsx("div", {
        className: "theme-preview-container",
        style: {
            backgroundColor: t()
        },
        children: u.jsxs("div", {
            className: "preview-content",
            children: [u.jsxs("div", {
                className: "preview-message assistant",
                children: [u.jsx("div", {
                    className: "avatar"
                }), u.jsx("div", {
                    className: "message-bubble",
                    children: "Hello"
                })]
            }), u.jsx("div", {
                className: "preview-message human",
                children: u.jsx("div", {
                    className: "message-bubble",
                    children: "Hi"
                })
            })]
        })
    })
}

function nc() {
    const {
        formId: e
    } = _s(), t = Ue(), n = dt(), {
        authenticatedFetch: r
    } = Fs(), [o, s] = x.useState({
        title: "",
        background: "Dark"
    }), [l, i] = x.useState(!1);
    x.useEffect(() => {
        e === "new" || n.pathname.includes("/new") ? i(!0) : a()
    }, [e, n]);
    const a = async () => {
            try {
                const p = await r(Z.apiFormsById(e));
                s(p)
            } catch (p) {
                console.error("Error fetching form data:", p)
            }
        },
        d = async p => {
            if (l) s(w => ({ ...w,
                background: p
            }));
            else try {
                const w = { ...o,
                    background: p
                };
                await r(Z.apiFormsById(e), {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(w)
                }), s(w), console.log("Theme updated:", p)
            } catch (w) {
                console.error("Error updating theme:", w)
            }
        },
        c = async () => {
            if (l) try {
                const w = await (await r(Z.apiForms, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(o)
                })).json();
                t(`/flow/${w._id}`)
            } catch (p) {
                console.error("Error creating new form:", p)
            } else t(`/flow/${e}`)
        },
        f = p => {
            s(w => ({ ...w,
                title: p
            }))
        };
    return u.jsxs("div", {
        className: "theme-page",
        children: [u.jsx(xa, {
            formName: o.title,
            onSave: c,
            onFormNameChange: f
        }), u.jsxs("div", {
            className: "theme-content",
            children: [u.jsx(Lv, {
                selectedTheme: o.background,
                setSelectedTheme: p => d(p)
            }), u.jsx(Ov, {
                theme: o.background
            })]
        })]
    })
}

function Iv({
    submissions: e
}) {
    const t = e.length,
        n = e.filter(o => o.responses.length > 0).length,
        r = t > 0 ? (n / t * 100).toFixed(2) : 0;
    return u.jsxs("div", {
        className: "response-summary",
        children: [u.jsxs("div", {
            className: "summary-item",
            children: [u.jsx("h2", {
                children: "Views"
            }), u.jsx("p", {
                children: t
            })]
        }), u.jsxs("div", {
            className: "summary-item",
            children: [u.jsx("h2", {
                children: "Starts"
            }), u.jsx("p", {
                children: n
            })]
        }), u.jsxs("div", {
            className: "summary-item",
            children: [u.jsx("h2", {
                children: "Completion rate"
            }), u.jsxs("p", {
                children: [r, "%"]
            })]
        })]
    })
}

function Dv({
    submissions: e
}) {
    const t = o => new Date(o).toLocaleString(),
        n = (o, s) => {
            const l = o.find(i => i.field === s);
            return l ? l.value : ""
        },
        r = [...new Set(e.flatMap(o => o.responses.map(s => s.field)))];
    return u.jsx("div", {
        className: "response-table-container",
        children: u.jsxs("table", {
            className: "response-table",
            children: [u.jsx("thead", {
                children: u.jsxs("tr", {
                    children: [u.jsx("th", {
                        children: "ID"
                    }), u.jsx("th", {
                        children: "Submitted at"
                    }), u.jsx("th", {
                        children: "Unique ID"
                    }), r.map(o => u.jsx("th", {
                        children: o
                    }, o))]
                })
            }), u.jsx("tbody", {
                children: e.map(o => u.jsxs("tr", {
                    children: [u.jsx("td", {
                        children: o._id
                    }), u.jsx("td", {
                        children: t(o.createdAt)
                    }), u.jsx("td", {
                        children: o.uniqueId
                    }), r.map(s => u.jsx("td", {
                        children: n(o.responses, s)
                    }, s))]
                }, o._id))
            })]
        })
    })
}

function rc() {
    const [e, t] = x.useState([]), [n, r] = x.useState(""), {
        formId: o
    } = _s();
    x.useEffect(() => {
        (async () => {
            try {
                const [a, d] = await Promise.all([$.get(`${Z.apiSubmissions}/form-submissions/${o}`), $.get(`${Z.apiForms}/${o}`)]);
                t(a.data), r(d.data.name)
            } catch (a) {
                console.error("Error fetching data:", a)
            }
        })()
    }, [o]);
    const s = i => {
            r(i)
        },
        l = async () => {
            try {
                await $.put(`${Z.apiForms}/${o}`, {
                    name: n
                })
            } catch (i) {
                console.error("Error saving form name:", i)
            }
        };
    return u.jsxs(u.Fragment, {
        children: [u.jsx(xa, {
            formName: n,
            onFormNameChange: s,
            onSave: l
        }), u.jsx("div", {
            className: "response-page",
            children: u.jsxs("div", {
                className: "response-content",
                children: [u.jsx(Iv, {
                    submissions: e
                }), u.jsx(Dv, {
                    submissions: e
                })]
            })
        })]
    })
}
const Mv = () => {
    $.interceptors.request.use(e => {
        const t = localStorage.getItem("token");
        return t && (e.headers.Authorization = `Bearer ${t}`), e
    }, e => Promise.reject(e))
};

function zv({
    onLogout: e,
    className: t
}) {
    const n = Ue(),
        [r, o] = x.useState(!1),
        s = () => {
            o(!0)
        },
        l = () => {
            localStorage.removeItem("token"), localStorage.removeItem("userName"), n("/"), e && e(), o(!1)
        },
        i = () => {
            o(!1)
        };
    return u.jsxs(u.Fragment, {
        children: [u.jsx("button", {
            onClick: s,
            className: `LogOut__button ${t}`,
            children: "Logout"
        }), r && u.jsx("div", {
            className: "LogOut__modalOverlay",
            children: u.jsxs("div", {
                className: "LogOut__modalContent",
                children: [u.jsx("h2", {
                    className: "LogOut__modalTitle",
                    children: "Confirm Logout"
                }), u.jsx("p", {
                    className: "LogOut__modalText",
                    children: "Are you sure you want to log out?"
                }), u.jsxs("div", {
                    className: "LogOut__modalActions",
                    children: [u.jsx("button", {
                        onClick: i,
                        className: "LogOut__modalButton LogOut__modalButtonSecondary",
                        children: "Cancel"
                    }), u.jsx("button", {
                        onClick: l,
                        className: "LogOut__modalButton LogOut__modalButtonPrimary",
                        children: "Logout"
                    })]
                })]
            })
        })]
    })
}
const Bv = "data:image/svg+xml,%3csvg%20width='35'%20height='36'%20viewBox='0%200%2035%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.5%200.5H3.5C1.567%200.5%200%202.067%200%204V32C0%2033.933%201.567%2035.5%203.5%2035.5H31.5C33.433%2035.5%2035%2033.933%2035%2032V4C35%202.067%2033.433%200.5%2031.5%200.5Z'%20fill='%230042DA'/%3e%3cpath%20d='M28.4375%2016.1831V14.1937C28.4375%2013.7105%2028.0457%2013.3187%2027.5625%2013.3187H12.4855C12.0023%2013.3187%2011.6105%2013.7105%2011.6105%2014.1937V16.1831C11.6105%2016.6663%2012.0023%2017.0581%2012.4855%2017.0581H27.5625C28.0457%2017.0581%2028.4375%2016.6663%2028.4375%2016.1831Z'%20fill='%23FF8E20'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.43216%2017.058C9.46474%2017.058%2010.3018%2016.221%2010.3018%2015.1884C10.3018%2014.1558%209.46474%2013.3187%208.43216%2013.3187C7.39957%2013.3187%206.5625%2014.1558%206.5625%2015.1884C6.5625%2016.221%207.39957%2017.058%208.43216%2017.058Z'%20fill='%23FF8E20'/%3e%3cpath%20d='M6.5625%2019.8028V21.7921C6.5625%2022.2754%206.95425%2022.6671%207.4375%2022.6671H22.5145C22.9977%2022.6671%2023.3895%2022.2754%2023.3895%2021.7921V19.8028C23.3895%2019.3195%2022.9977%2018.9278%2022.5145%2018.9278H7.4375C6.95425%2018.9278%206.5625%2019.3195%206.5625%2019.8028Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M26.5669%2018.9277C25.5343%2018.9277%2024.6973%2019.7648%2024.6973%2020.7974C24.6973%2021.83%2025.5343%2022.6671%2026.5669%2022.6671C27.5995%2022.6671%2028.4366%2021.83%2028.4366%2020.7974C28.4366%2019.7648%2027.5995%2018.9277%2026.5669%2018.9277Z'%20fill='white'/%3e%3c/svg%3e",
    sp = () => {
        const [e, t] = x.useState(!1), {
            isLoggedIn: n,
            userName: r,
            logout: o
        } = hn(), s = Ue(), l = () => {
            t(!e)
        };
        return u.jsxs("nav", {
            className: "MainNav",
            children: [u.jsxs("div", {
                className: "MainNav__logo",
                children: [u.jsx("div", {
                    children: u.jsx("img", {
                        src: Bv,
                        alt: "Triangle"
                    })
                }), " ", u.jsx("div", {
                    children: u.jsx("h4", {
                        children: "FormBot"
                    })
                })]
            }), u.jsxs("button", {
                className: `MainNav__menuButton ${e?"open":""}`,
                onClick: l,
                children: [u.jsx("span", {}), u.jsx("span", {}), u.jsx("span", {})]
            }), u.jsxs("div", {
                className: `MainNav__links ${e?"MainNav__links--open":""}`,
                children: [u.jsx(In, {
                    to: "/",
                    className: "MainNav__link",
                    onClick: l,
                    children: "Home"
                }), n ? u.jsxs(u.Fragment, {
                    children: [u.jsxs("span", {
                        className: "MainNav__greeting",
                        children: ["Hello, ", r, "!"]
                    }), u.jsx(In, {
                        to: "/profile",
                        className: "MainNav__avatar",
                        onClick: l,
                        children: r ? r[0].toUpperCase() : "U"
                    }), u.jsx(zv, {
                        onLogout: o
                    })]
                }) : u.jsxs(u.Fragment, {
                    children: [u.jsx(In, {
                        to: "/auth",
                        className: "MainNav__link MainNav__link--signin",
                        onClick: l,
                        children: "Sign in"
                    }), u.jsx("button", {
                        onClick: () => s("/workspace"),
                        className: "MainNav__link MainNav__link--create",
                        children: "Create a FormBot"
                    }), " "]
                })]
            })]
        })
    },
    Av = "/assets/DetailSectionHome-DX-dLDjp.png",
    lp = "/assets/halfcicrle-CIqzG665.svg",
    Uv = () => u.jsxs("section", {
        className: "DetailSection",
        children: [u.jsxs("div", {
            className: "DetailSection__header",
            children: [u.jsx("h1", {
                className: "DetailSection__title",
                children: "Build advanced chatbots visually"
            }), u.jsx("p", {
                children: "Typebot gives you powerful blocks to create unique chat experiences. Embed them anywhere on your web/mobile apps and start collecting results like magic."
            }), u.jsx(In, {
                to: "/workspace",
                className: "DetailSection__button",
                children: " Create a FormBot for free "
            })]
        }), u.jsxs("div", {
            className: "DetailSection__content",
            children: [u.jsxs("div", {
                className: "DetailSection__shapes",
                children: [u.jsx("div", {
                    className: "DetailSection__triangle",
                    children: u.jsx("img", {
                        src: wa,
                        alt: "Triangle"
                    })
                }), u.jsx("div", {
                    className: "DetailSection__arc",
                    children: u.jsx("img", {
                        src: lp,
                        alt: "Triangle"
                    })
                })]
            }), u.jsx("div", {
                className: "DetailSection__dashboard",
                children: u.jsx("img", {
                    src: Av,
                    alt: "FormBot Dashboard",
                    className: "DetailSection__dashboardImage"
                })
            })]
        })]
    }),
    $v = "/assets/welcome-D1VkQrrn.gif",
    Hv = "/assets/mahesh-DX6xTATw.png",
    bv = () => u.jsxs("section", {
        className: "HomeFormSection",
        children: [u.jsxs("div", {
            className: "HomeFormSection__tryItOut",
            children: [u.jsx("span", {
                children: "Try it out!"
            }), u.jsx("svg", {
                className: "HomeFormSection__arrow",
                viewBox: "0 0 24 24",
                children: u.jsx("path", {
                    d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
                })
            })]
        }), u.jsxs("h2", {
            className: "HomeFormSection__title",
            children: ["Replace your old school forms", u.jsx("br", {}), "with", u.jsx("br", {}), "chatbots"]
        }), u.jsx("p", {
            className: "HomeFormSection__description",
            children: "Typebot is a better way to ask for information. It leads to an increase in customer satisfaction and retention and multiply by your conversion rate compared to classical forms."
        }), u.jsxs("div", {
            className: "HomeFormSection__content",
            children: [u.jsxs("div", {
                className: "HomeFormSection__formWrapper",
                children: [u.jsx("div", {
                    className: "HomeFormSection__comparisonWrong",
                    children: u.jsx("span", {
                        className: "HomeFormSection__icon",
                        children: "✕"
                    })
                }), u.jsxs("div", {
                    className: "HomeFormSection__form",
                    children: [u.jsxs("div", {
                        className: "HomeFormSection__formField",
                        children: [u.jsx("label", {
                            htmlFor: "name",
                            className: "HomeFormSection__label",
                            children: "Your name *"
                        }), u.jsx("input", {
                            type: "text",
                            id: "name",
                            className: "HomeFormSection__input"
                        })]
                    }), u.jsxs("div", {
                        className: "HomeFormSection__formField",
                        children: [u.jsx("label", {
                            htmlFor: "email",
                            className: "HomeFormSection__label",
                            children: "Email *"
                        }), u.jsx("input", {
                            type: "email",
                            id: "email",
                            className: "HomeFormSection__input"
                        })]
                    }), u.jsxs("div", {
                        className: "HomeFormSection__formField",
                        children: [u.jsx("label", {
                            className: "HomeFormSection__label",
                            children: "What services are you interested in? *"
                        }), u.jsxs("div", {
                            className: "HomeFormSection__checkboxGroup",
                            children: [u.jsxs("label", {
                                className: "HomeFormSection__checkbox",
                                children: [u.jsx("input", {
                                    type: "checkbox"
                                }), " Website Dev"]
                            }), u.jsxs("label", {
                                className: "HomeFormSection__checkbox",
                                children: [u.jsx("input", {
                                    type: "checkbox"
                                }), " Content Marketing"]
                            }), u.jsxs("label", {
                                className: "HomeFormSection__checkbox",
                                children: [u.jsx("input", {
                                    type: "checkbox"
                                }), " Social Media"]
                            }), u.jsxs("label", {
                                className: "HomeFormSection__checkbox",
                                children: [u.jsx("input", {
                                    type: "checkbox"
                                }), " UIUX Design"]
                            })]
                        })]
                    }), u.jsxs("div", {
                        className: "HomeFormSection__formField",
                        children: [u.jsx("label", {
                            htmlFor: "additional",
                            className: "HomeFormSection__label",
                            children: "Additional information *"
                        }), u.jsx("textarea", {
                            id: "additional",
                            className: "HomeFormSection__textarea"
                        })]
                    }), u.jsx("button", {
                        className: "HomeFormSection__submit",
                        children: "Submit"
                    })]
                })]
            }), u.jsxs("div", {
                className: "HomeFormSection__chatWrapper",
                children: [u.jsx("div", {
                    className: "HomeFormSection__comparisonCorrect",
                    children: u.jsx("span", {
                        className: "HomeFormSection__icon",
                        children: "✓"
                    })
                }), u.jsxs("div", {
                    className: "HomeFormSection__chat",
                    children: [u.jsx("div", {
                        className: "HomeFormSection__chatHeader",
                        children: u.jsx("span", {
                            children: "Welcome to RA (Insurance Agency)"
                        })
                    }), u.jsxs("div", {
                        className: "HomeFormSection__chatContent",
                        children: [u.jsx("img", {
                            src: $v,
                            alt: "Welcome",
                            className: "HomeFormSection__welcomeImage"
                        }), u.jsxs("div", {
                            className: "HomeFormSection__message",
                            children: [u.jsx("img", {
                                src: Hv,
                                alt: "Avatar",
                                className: "HomeFormSection__avatar"
                            }), u.jsx("span", {
                                className: "HomeFormSection__messageText",
                                children: "Welcome!"
                            })]
                        })]
                    }), u.jsx("div", {
                        className: "HomeFormSection__chatFooter",
                        children: u.jsx("button", {
                            className: "HomeFormSection__chatButton",
                            children: "Hi"
                        })
                    })]
                })]
            })]
        })]
    }),
    Vv = "/assets/builder-dnd-D2vKQEBG.webp",
    Wv = "/assets/native-feeling-CXhpjEVb.webp",
    Qv = () => u.jsxs("section", {
        className: "MoreInfoSection",
        children: [u.jsxs("div", {
            className: "MoreInfoSection__item",
            children: [u.jsx("div", {
                className: "MoreInfoSection__imageWrapper MoreInfoSection__imageWrapper--blue",
                children: u.jsx("img", {
                    src: Vv,
                    alt: "Easy building experience",
                    className: "MoreInfoSection__image"
                })
            }), u.jsxs("div", {
                className: "MoreInfoSection__content",
                children: [u.jsx("h3", {
                    className: "MoreInfoSection__title",
                    children: "Easy building experience"
                }), u.jsx("p", {
                    className: "MoreInfoSection__description",
                    children: "All you have to do is drag and drop blocks to create your typebot. You can customize your bot's design until it fits your brand perfectly."
                })]
            })]
        }), u.jsxs("div", {
            className: "MoreInfoSection__item MoreInfoSection__item--reverse",
            children: [u.jsx("div", {
                className: "MoreInfoSection__imageWrapper MoreInfoSection__imageWrapper--orange",
                children: u.jsx("img", {
                    src: Wv,
                    alt: "Embed it in a click",
                    className: "MoreInfoSection__image"
                })
            }), u.jsxs("div", {
                className: "MoreInfoSection__content",
                children: [u.jsx("h3", {
                    className: "MoreInfoSection__title",
                    children: "Embed it in a click"
                }), u.jsx("p", {
                    className: "MoreInfoSection__description",
                    children: 'Embedding your typebot in your application is a walk in the park. Typebot gives you several easy-to-copy options, from a simple HTML snippet to React or Javascript code. Your typebot will always feel "native".'
                })]
            })]
        })]
    }),
    qv = [{
        name: "Gmail",
        url: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
    }, {
        name: "Mailchimp",
        url: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
    }, {
        name: "Notion",
        url: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
    }, {
        name: "Webflow",
        url: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
    }, {
        name: "WordPress",
        url: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
    }, {
        name: "Google Calendar",
        url: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
    }, {
        name: "Make",
        url: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
    }, {
        name: "Google Drive",
        url: "https://example.com/google-drive-logo.png"
    }, {
        name: "Slack",
        url: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
    }, {
        name: "Shopify",
        url: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
    }, {
        name: "Airtable",
        url: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
    }, {
        name: "Google Sheets",
        url: "https://example.com/google-sheets-logo.png"
    }, {
        name: "Zapier",
        url: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
    }, {
        name: "Crunchbase",
        url: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
    }, {
        name: "Salesforce",
        url: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
    }],
    Kv = () => {
        const e = x.useRef(null);
        return x.useEffect(() => {
            const t = e.current;
            if (t) {
                const n = t.scrollWidth,
                    r = t.clientWidth;
                let o = 0;
                const l = setInterval(() => {
                    o += 1, o > n - r && (o = 0), t.scrollTo(o, 0)
                }, 50);
                return () => clearInterval(l)
            }
        }, []), u.jsxs("section", {
            className: "OurPartnerSection",
            children: [u.jsx("div", {
                className: "OurPartnerSection__scrollContainer",
                ref: e,
                children: u.jsx("div", {
                    className: "OurPartnerSection__grid",
                    children: qv.map((t, n) => u.jsx("div", {
                        className: "OurPartnerSection__logoWrapper",
                        children: u.jsx("img", {
                            src: t.url,
                            alt: t.name,
                            className: "OurPartnerSection__logo"
                        })
                    }, n))
                })
            }), u.jsxs("div", {
                className: "OurPartnerSection__content",
                children: [u.jsx("h2", {
                    className: "OurPartnerSection__title",
                    children: "Integrate with any platform"
                }), u.jsx("p", {
                    className: "OurPartnerSection__description",
                    children: "Typebot offers several native integrations blocks as well as instructions on how to embed typebot on particular platforms"
                })]
            })]
        })
    },
    Gv = () => {
        const e = [{
            icon: "👤",
            title: "Hidden fields",
            description: "Include data in your form URL to segment your user and use its data directly in your form."
        }, {
            icon: "👥",
            title: "Team collaboration",
            description: "Invite your teammates to work on your typebots with you"
        }, {
            icon: "🔗",
            title: "Link to sub typebots",
            description: "Reuse your typebots in different parent bots."
        }, {
            icon: "🧮",
            title: "Custom code",
            description: "Customize everything with your own javascript & CSS code"
        }, {
            icon: "🌐",
            title: "Custom domain",
            description: "Connect your typebot to the custom URL of your choice"
        }, {
            icon: "📁",
            title: "Folder management",
            description: "Organize your typebots in specific folders to keep it clean and work with multiple clients"
        }];
        return u.jsxs("div", {
            className: "featureSection",
            children: [u.jsx("h2", {
                className: "featureSection__title",
                children: "Typebot makes form building easy and comes with powerful features"
            }), u.jsx("div", {
                className: "featureSection__grid",
                children: e.map((t, n) => u.jsx(Jv, { ...t
                }, n))
            })]
        })
    },
    Jv = ({
        icon: e,
        title: t,
        description: n
    }) => u.jsxs("div", {
        className: "featureSection__card",
        children: [u.jsx("div", {
            className: "featureSection__iconContainer",
            children: u.jsx("span", {
                className: "featureSection__icon",
                children: e
            })
        }), u.jsx("h3", {
            className: "featureSection__cardTitle",
            children: t
        }), u.jsx("p", {
            className: "featureSection__cardDescription",
            children: n
        })]
    }),
    Xv = () => {
        const e = [{
            name: "iBanFirst",
            src: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
        }, {
            name: "lemlist",
            src: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
        }, {
            name: "MakerLead",
            src: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
        }, {
            name: "WebiSharp",
            src: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
        }, {
            name: "SOCIALHACKRS",
            src: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
        }, {
            name: "PINPOINT INTERACTIVE",
            src: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
        }, {
            name: "BOLE",
            src: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
        }, {
            name: "Awwwsome",
            src: "https://mahesh-langote.github.io/MaheshLangote/mahesh.png"
        }];
        return u.jsx("section", {
            className: "lovedSection",
            children: u.jsx("div", {
                className: "lovedSection__container",
                children: e.map((t, n) => u.jsx("div", {
                    className: "lovedSection__logoWrapper",
                    children: u.jsx("img", {
                        src: t.src,
                        alt: t.name,
                        className: "lovedSection__logo"
                    })
                }, n))
            })
        })
    },
    Yv = () => u.jsx("section", {
        className: "contactUsSection",
        children: u.jsxs("div", {
            className: "contactUsSection__container",
            children: [u.jsx("div", {
                className: "contactUsSection__shape contactUsSection__shape--left",
                children: u.jsx("img", {
                    src: wa,
                    alt: "Triangle"
                })
            }), u.jsxs("div", {
                className: "contactUsSection__content",
                children: [u.jsxs("h2", {
                    children: ["Improve conversion and user  engagement ", u.jsx("br", {}), "with FormBots "]
                }), u.jsx(In, {
                    to: "/workspace",
                    className: "contactUsSection__button",
                    children: " Create a FormBot for free "
                }), u.jsx("p", {
                    className: "contactUsSection__text",
                    children: "No trial. Generous free plan."
                })]
            }), u.jsxs("div", {
                className: "contactUsSection__shape contactUsSection__shape--right",
                children: [" ", u.jsx("img", {
                    src: lp,
                    alt: "Triangle"
                })]
            })]
        })
    }),
    Zv = () => {
        const e = [{
            title: "Made with ❤️ by Baptiste",
            links: []
        }, {
            title: "Status",
            links: ["Documentation", "Roadmap", "Pricing"]
        }, {
            title: "Discord",
            links: ["GitHub repository", "Twitter", "LinkedIn", "OSS Friends"]
        }, {
            title: "About",
            links: ["Contact", "Terms of Service", "Privacy Policy"]
        }];
        return u.jsx("footer", {
            className: "mainFooter",
            children: u.jsx("div", {
                className: "mainFooter__container",
                children: e.map((t, n) => u.jsxs("div", {
                    className: "mainFooter__column",
                    children: [u.jsx("h3", {
                        className: "mainFooter__title",
                        children: t.title
                    }), t.links.length > 0 && u.jsx("ul", {
                        className: "mainFooter__list",
                        children: t.links.map((r, o) => u.jsx("li", {
                            className: "mainFooter__item",
                            children: u.jsx("a", {
                                href: "#",
                                className: "mainFooter__link",
                                children: r
                            })
                        }, o))
                    })]
                }, n))
            })
        })
    };

function ey() {
    return u.jsxs("div", {
        className: "home-container",
        children: [u.jsx(sp, {}), u.jsx(Uv, {}), u.jsx(bv, {}), u.jsx(Qv, {}), u.jsx(Kv, {}), u.jsx(Gv, {}), u.jsx(Xv, {}), u.jsx(Yv, {}), u.jsx(Zv, {})]
    })
}
var ip = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    oc = z.createContext && z.createContext(ip),
    ty = ["attr", "size", "title"];

function ny(e, t) {
    if (e == null) return {};
    var n = ry(e, t),
        r, o;
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (o = 0; o < s.length; o++) r = s[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function ry(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0) continue;
            n[r] = e[r]
        }
    return n
}

function os() {
    return os = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, os.apply(this, arguments)
}

function sc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function ss(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? sc(Object(n), !0).forEach(function(r) {
            oy(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function oy(e, t, n) {
    return t = sy(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function sy(e) {
    var t = ly(e, "string");
    return typeof t == "symbol" ? t : t + ""
}

function ly(e, t) {
    if (typeof e != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function ap(e) {
    return e && e.map((t, n) => z.createElement(t.tag, ss({
        key: n
    }, t.attr), ap(t.child)))
}

function qr(e) {
    return t => z.createElement(iy, os({
        attr: ss({}, e.attr)
    }, t), ap(e.child))
}

function iy(e) {
    var t = n => {
        var {
            attr: r,
            size: o,
            title: s
        } = e, l = ny(e, ty), i = o || n.size || "1em", a;
        return n.className && (a = n.className), e.className && (a = (a ? a + " " : "") + e.className), z.createElement("svg", os({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, l, {
            className: a,
            style: ss(ss({
                color: e.color || n.color
            }, n.style), e.style),
            height: i,
            width: i,
            xmlns: "http://www.w3.org/2000/svg"
        }), s && z.createElement("title", null, s), e.children)
    };
    return oc !== void 0 ? z.createElement(oc.Consumer, null, n => t(n)) : t(ip)
}

function ay(e) {
    return qr({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"
            },
            child: []
        }]
    })(e)
}

function uy(e) {
    return qr({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
            },
            child: []
        }]
    })(e)
}

function cy(e) {
    return qr({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
            },
            child: []
        }]
    })(e)
}

function dy(e) {
    return qr({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
            },
            child: []
        }]
    })(e)
}

function fy(e) {
    return qr({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
            },
            child: []
        }]
    })(e)
}

function py() {
    const [e, t] = x.useState(null), [n, r] = x.useState(!0), [o, s] = x.useState(!1), {
        isLoggedIn: l
    } = hn(), [i, a] = x.useState(!1);
    x.useEffect(() => {
        (async () => {
            if (!l) {
                s(!0);
                return
            }
            try {
                const p = localStorage.getItem("token");
                if (!p) throw new Error("No token found");
                const w = await $.get(Z.apiUserInfoGet, {
                    headers: {
                        Authorization: `Bearer ${p}`
                    }
                });
                t(w.data), r(!1)
            } catch (p) {
                console.error("Error fetching user info:", p), s(!0)
            }
        })()
    }, [l]);
    const d = () => {
            a(!i)
        },
        c = f => f.split(" ").map(p => p[0]).join("").toUpperCase();
    return o ? u.jsx(Du, {
        to: "/"
    }) : n ? u.jsx("div", {
        className: "UserProfile__loading",
        children: "Loading..."
    }) : e ? u.jsxs("div", {
        className: `UserProfile__page ${i?"UserProfile__darkMode":""}`,
        children: [u.jsx(sp, {}), u.jsxs("div", {
            className: "UserProfile__container",
            children: [u.jsxs("div", {
                className: "UserProfile__header",
                children: [u.jsx("div", {
                    className: "UserProfile__avatar",
                    children: c(e.name)
                }), u.jsx("h2", {
                    className: "UserProfile__name",
                    children: e.name
                }), u.jsx("button", {
                    className: "UserProfile__themeToggle",
                    onClick: d,
                    children: i ? u.jsx(dy, {}) : u.jsx(cy, {})
                })]
            }), u.jsxs("div", {
                className: "UserProfile__info",
                children: [u.jsxs("div", {
                    className: "UserProfile__infoItem",
                    children: [u.jsx(fy, {}), u.jsx("p", {
                        children: e.name
                    })]
                }), u.jsxs("div", {
                    className: "UserProfile__infoItem",
                    children: [u.jsx(uy, {}), u.jsx("p", {
                        children: e.email
                    })]
                })]
            }), u.jsxs(In, {
                to: "/workspace",
                className: "UserProfile__workspaceBtn",
                children: [u.jsx(ay, {}), "Go to Your Workspace"]
            })]
        })]
    }) : u.jsx(Du, {
        to: "/"
    })
}

function hy({
    message: e
}) {
    const t = () => {
        switch (e.fieldType) {
            case "Image":
                return u.jsx("img", {
                    src: e.content,
                    alt: "Form content",
                    className: "chatBot-image"
                });
            case "GIF":
                return u.jsx("img", {
                    src: e.content,
                    alt: "Form content",
                    className: "chatBot-gif"
                });
            case "Video":
                return u.jsx("video", {
                    src: e.content,
                    controls: !0,
                    className: "chatBot-video"
                });
            default:
                return u.jsx("span", {
                    className: "chatBot-content",
                    children: e.content
                })
        }
    };
    return u.jsxs("div", {
        className: `chatBot-message chatBot-${e.type}`,
        children: [e.type === "bot" && u.jsx("div", {
            className: "chatBot-avatar"
        }), t()]
    })
}

function my({
    onSendMessage: e,
    onSkip: t,
    field: n
}) {
    const [r, o] = x.useState(""), [s, l] = x.useState(""), i = () => {
        if (!n) return !0;
        if (n.required && !r.trim()) return l("This field is required."), !1;
        switch (n.type) {
            case "Email":
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)) return l("Please enter a valid email address."), !1;
                break;
            case "Phone":
                if (!/^\d{10}$/.test(r)) return l("Please enter a valid 10-digit phone number."), !1;
                break;
            case "Number":
                if (isNaN(r)) return l("Please enter a valid number."), !1;
                break
        }
        return l(""), !0
    }, a = c => {
        c.preventDefault(), i() && (e(r), o(""))
    }, d = () => {
        if (!n) return u.jsx("input", {
            type: "text",
            className: "chatBot-input",
            value: r,
            onChange: c => o(c.target.value),
            placeholder: "Type your message..."
        });
        switch (n.type) {
            case "Text":
            case "Email":
            case "Phone":
                return u.jsx("input", {
                    type: n.type.toLowerCase(),
                    className: "chatBot-input",
                    value: r,
                    onChange: c => o(c.target.value),
                    placeholder: `Enter ${n.label}`
                });
            case "Number":
                return u.jsx("input", {
                    type: "number",
                    className: "chatBot-input",
                    value: r,
                    onChange: c => o(c.target.value),
                    placeholder: `Enter ${n.label}`
                });
            case "Date":
                return u.jsx("input", {
                    type: "date",
                    className: "chatBot-input",
                    value: r,
                    onChange: c => o(c.target.value)
                });
            case "Radio":
                return u.jsx("div", {
                    className: "chatBot-radio-group",
                    children: n.options.map((c, f) => u.jsxs("label", {
                        className: "chatBot-radio-label",
                        children: [u.jsx("input", {
                            type: "radio",
                            value: c,
                            checked: r === c,
                            onChange: p => o(p.target.value)
                        }), c]
                    }, f))
                });
            case "Checkbox":
                return u.jsx("div", {
                    className: "chatBot-checkbox-group",
                    children: n.options.map((c, f) => u.jsxs("label", {
                        className: "chatBot-checkbox-label",
                        children: [u.jsx("input", {
                            type: "checkbox",
                            value: c,
                            checked: r.includes(c),
                            onChange: p => {
                                const w = r.includes(c) ? r.filter(v => v !== c) : [...r, c];
                                o(w)
                            }
                        }), c]
                    }, f))
                });
            case "StarRating":
                return u.jsx("div", {
                    className: "chatBot-star-rating",
                    children: [1, 2, 3, 4, 5].map(c => u.jsx("button", {
                        onClick: () => o(c.toString()),
                        className: c <= parseInt(r) ? "active" : "",
                        children: c
                    }, c))
                });
            case "WordRating":
                return u.jsxs("select", {
                    className: "chatBot-select",
                    value: r,
                    onChange: c => o(c.target.value),
                    children: [u.jsx("option", {
                        value: "",
                        children: "Select a rating"
                    }), n.options.map((c, f) => u.jsx("option", {
                        value: c,
                        children: c
                    }, f))]
                });
            default:
                return u.jsx("input", {
                    type: "text",
                    className: "chatBot-input",
                    value: r,
                    onChange: c => o(c.target.value),
                    placeholder: `Enter ${n.label}`
                })
        }
    };
    return u.jsxs("form", {
        className: "chatBot-input-form",
        onSubmit: a,
        children: [d(), s && u.jsx("div", {
            className: "chatBot-error",
            children: s
        }), u.jsxs("div", {
            className: "chatBot-button-group",
            children: [n && !n.required && u.jsx("button", {
                type: "button",
                className: "chatBot-skip-button",
                onClick: t,
                children: "Skip"
            }), u.jsx("button", {
                type: "submit",
                className: "chatBot-send-button",
                children: u.jsx("span", {
                    className: "chatBot-send-icon",
                    children: "▶"
                })
            })]
        })]
    })
}

function gy({
    formId: e
}) {
    const [t, n] = x.useState(null), [r, o] = x.useState(-1), [s, l] = x.useState({}), [i, a] = x.useState([]), [d, c] = x.useState(""), [f, p] = x.useState(!1), [w, v] = x.useState("Light"), y = x.useRef(null), _ = x.useRef(!1), [g, m] = x.useState(null);
    x.useEffect(() => {
        e && S()
    }, [e]), x.useEffect(() => {
        h()
    }, [i]);
    const h = () => {
        var F;
        (F = y.current) == null || F.scrollIntoView({
            behavior: "smooth"
        })
    };
    x.useEffect(() => {
        e && !_.current && S()
    }, [e]);
    const S = async () => {
            if (!_.current) {
                _.current = !0;
                try {
                    const j = (await $.get(Z.apiFormsPublic(e))).data;
                    n(j), m(j.id), v(j.background || "Light");
                    const A = await $.get(Z.apiGenerateUniqueId(e));
                    c(A.data.uniqueId), a([{
                        type: "bot",
                        content: "Hello!"
                    }, {
                        type: "bot",
                        content: `${j.title}`
                    }, {
                        type: "bot",
                        content: `${j.description}`
                    }]), console.log("Using form ID:", j.id)
                } catch (F) {
                    console.error("Error fetching form and unique ID:", F), a([{
                        type: "bot",
                        content: "Error loading the form. Please try again later."
                    }])
                } finally {
                    _.current = !0
                }
            }
        },
        C = F => {
            if (t && t.fields && F < t.fields.length) {
                const j = t.fields[F],
                    A = j.required ? " (Required)" : " (Optional)";
                a(le => [...le, {
                    type: "bot",
                    content: j.errorMessage + A,
                    fieldType: j.type,
                    options: j.options,
                    required: j.required
                }]), console.log(j)
            } else t && F === t.fields.length && (a(j => [...j, {
                type: "bot",
                content: "Thank you for completing the form!"
            }]), k())
        },
        T = async F => {
            if (a(j => [...j, {
                    type: "user",
                    content: F
                }]), !f) p(!0), a(j => [...j, {
                type: "bot",
                content: "Great! Let's start with the form questions."
            }]), o(0), C(0);
            else if (t && t.fields && r < t.fields.length) {
                const j = t.fields[r];
                l(A => ({ ...A,
                    [j._id]: F
                }));
                try {
                    const A = await k([{
                        field: j.label,
                        value: F
                    }]);
                    console.log("Submission successful:", A)
                } catch (A) {
                    console.error("Error during submission:", A), a(le => [...le, {
                        type: "bot",
                        content: "There was an error submitting your response. Please try again."
                    }]);
                    return
                }
                o(A => A + 1), C(r + 1)
            }
        },
        P = () => {
            if (t && t.fields && r < t.fields.length) {
                const F = t.fields[r];
                a(j => [...j, {
                    type: "user",
                    content: "Skipped"
                }]), a(j => [...j, {
                    type: "bot",
                    content: `Okay, I've skipped the "${F.label}" field.`
                }]), o(j => j + 1), C(r + 1)
            }
        },
        k = async (F = []) => {
            if (t && g) try {
                console.log("Submitting form ID:", g);
                const j = {
                    formId: g,
                    uniqueId: d,
                    responses: F
                };
                console.log("Submission data:", j);
                const A = await $.post(Z.apiSubmissions, j);
                return console.log("Submission response:", A.data), A.data
            } catch (j) {
                throw console.error("Error submitting responses:", j), j
            } else throw console.error("Form or formIdData is not available"), new Error("Form or formIdData is not available")
        };
    return !t || !d ? u.jsx("div", {
        className: "chatBot-loading",
        children: "Loading..."
    }) : u.jsx("div", {
        className: `chatBot-wrapper ${w.toLowerCase()}`,
        children: u.jsxs("div", {
            className: "chatBot-container",
            children: [u.jsxs("div", {
                className: "chatBot-messages",
                children: [i.map((F, j) => u.jsx(hy, {
                    message: F
                }, j)), u.jsx("div", {
                    ref: y
                })]
            }), u.jsx(my, {
                onSendMessage: T,
                onSkip: P,
                field: f && t && t.fields ? t.fields[r] : null
            })]
        })
    })
}

function lc() {
    const {
        formId: e
    } = _s();
    return u.jsx("div", {
        className: "chatBot-wrapper",
        children: u.jsx(gy, {
            formId: e
        })
    })
}

function vy() {
    const [e, t] = x.useState(!0);
    Mv(), x.useEffect(() => {
        (async () => {
            try {
                const o = await $.get("https://maheshlangote779-git-32705d-maheshlangote777-gmailcoms-projects.vercel.app/serverison");
                console.log("Server is awake:", o.data)
            } catch (o) {
                console.error("Error waking up server:", o)
            }
        })()
    }, []);
    const n = () => t(!e);
    return u.jsx(uv, {
        children: u.jsx(Og, {
            children: u.jsxs(Cg, {
                children: [u.jsx(Ne, {
                    path: "/",
                    element: u.jsx(ey, {})
                }), u.jsx(Ne, {
                    path: "/profile",
                    element: u.jsx(py, {})
                }), u.jsx(Ne, {
                    path: "/auth",
                    element: u.jsxs("div", {
                        className: "container",
                        children: [u.jsx(_v, {}), u.jsx(kv, {}), u.jsx("div", {
                            className: "auth-form-container",
                            children: e ? u.jsx(Sv, {
                                onToggle: n
                            }) : u.jsx(Ev, {
                                onToggle: n
                            })
                        })]
                    })
                }), u.jsx(Ne, {
                    path: "/workspace",
                    element: u.jsx(ec, {})
                }), u.jsx(Ne, {
                    path: "/dashboard",
                    element: u.jsx(ec, {})
                }), u.jsx(Ne, {
                    path: "/flow",
                    element: u.jsx(tc, {})
                }), u.jsx(Ne, {
                    path: "/flow/:formId",
                    element: u.jsx(tc, {})
                }), u.jsx(Ne, {
                    path: "/theme",
                    element: u.jsx(nc, {})
                }), u.jsx(Ne, {
                    path: "/theme/:formId",
                    element: u.jsx(nc, {})
                }), u.jsx(Ne, {
                    path: "/response",
                    element: u.jsx(rc, {})
                }), u.jsx(Ne, {
                    path: "/response/:formId",
                    element: u.jsx(rc, {})
                }), u.jsx(Ne, {
                    path: "/chat",
                    element: u.jsx(lc, {})
                }), u.jsx(Ne, {
                    path: "/chat/:formId",
                    element: u.jsx(lc, {})
                })]
            })
        })
    })
}
cl.createRoot(document.getElementById("root")).render(u.jsx(z.StrictMode, {
    children: u.jsx(vy, {})
}));