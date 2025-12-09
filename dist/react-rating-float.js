import je, { useRef as dr, useMemo as Q, useEffect as pr } from "react";
var V = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function hr() {
  if (we) return I;
  we = 1;
  var o = je, f = Symbol.for("react.element"), b = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, O = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(E, l, T) {
    var d, _ = {}, y = null, k = null;
    T !== void 0 && (y = "" + T), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (k = l.ref);
    for (d in l) R.call(l, d) && !S.hasOwnProperty(d) && (_[d] = l[d]);
    if (E && E.defaultProps) for (d in l = E.defaultProps, l) _[d] === void 0 && (_[d] = l[d]);
    return { $$typeof: f, type: E, key: y, ref: k, props: _, _owner: O.current };
  }
  return I.Fragment = b, I.jsx = w, I.jsxs = w, I;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function gr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && (function() {
    var o = je, f = Symbol.for("react.element"), b = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), E = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), ee = Symbol.iterator, ke = "@@iterator";
    function xe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var x = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ae = !1, De = !1, $e = !1, Ie = !1, We = !1, re;
    re = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === S || We || e === O || e === T || e === d || Ie || e === k || Ae || De || $e || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === _ || e.$$typeof === w || e.$$typeof === E || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case b:
          return "Portal";
        case S:
          return "Profiler";
        case O:
          return "StrictMode";
        case T:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return te(r) + ".Consumer";
          case w:
            var t = e;
            return te(t._context) + ".Provider";
          case l:
            return Me(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case y: {
            var u = e, s = u._payload, i = u._init;
            try {
              return C(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, D = 0, ne, ae, oe, ie, ue, se, le;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Le() {
      {
        if (D === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, ue = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Ne() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ne
            }),
            info: P({}, e, {
              value: ae
            }),
            warn: P({}, e, {
              value: oe
            }),
            error: P({}, e, {
              value: ie
            }),
            group: P({}, e, {
              value: ue
            }),
            groupCollapsed: P({}, e, {
              value: se
            }),
            groupEnd: P({}, e, {
              value: le
            })
          });
        }
        D < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = x.ReactCurrentDispatcher, B;
    function Y(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var K = !1, M;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ve();
    }
    function ce(e, r) {
      if (!e || K)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = q.current, q.current = null, Le();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (g) {
              n = g;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var a = g.stack.split(`
`), h = n.stack.split(`
`), c = a.length - 1, v = h.length - 1; c >= 1 && v >= 0 && a[c] !== h[v]; )
            v--;
          for (; c >= 1 && v >= 0; c--, v--)
            if (a[c] !== h[v]) {
              if (c !== 1 || v !== 1)
                do
                  if (c--, v--, v < 0 || a[c] !== h[v]) {
                    var m = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, m), m;
                  }
                while (c >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        K = !1, q.current = s, Ne(), Error.prepareStackTrace = u;
      }
      var A = e ? e.displayName || e.name : "", j = A ? Y(A) : "";
      return typeof e == "function" && M.set(e, j), j;
    }
    function Ue(e, r, t) {
      return ce(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Je(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case T:
          return Y("Suspense");
        case d:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ue(e.render);
          case _:
            return L(e.type, r, t);
          case y: {
            var n = e, u = n._payload, s = n._init;
            try {
              return L(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, ve = {}, de = x.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, u) {
      {
        var s = Function.call.bind($);
        for (var i in e)
          if (s(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (N(u), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), N(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, N(u), p("Failed %s type: %s", t, a.message), N(null));
          }
      }
    }
    var Be = Array.isArray;
    function G(e) {
      return Be(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function he(e) {
      if (Ge(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), pe(e);
    }
    var ge = x.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, ye;
    function Xe(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function Qe(e, r) {
      {
        var t = function() {
          _e || (_e = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ye || (ye = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, u, s, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, u) {
      {
        var s, i = {}, a = null, h = null;
        t !== void 0 && (he(t), a = "" + t), He(r) && (he(r.key), a = "" + r.key), Xe(r) && (h = r.ref, Ze(r, u));
        for (s in r)
          $.call(r, s) && !ze.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            i[s] === void 0 && (i[s] = c[s]);
        }
        if (a || h) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(i, v), h && er(i, v);
        }
        return rr(e, a, h, u, n, ge.current, i);
      }
    }
    var z = x.ReactCurrentOwner, be = x.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function Re() {
      {
        if (z.current) {
          var e = C(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var Ee = {};
    function ar(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function me(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + C(e._owner.type) + "."), F(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && me(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = xe(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), i; !(i = s.next()).done; )
              H(i.value) && me(i.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var u = C(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var Oe = {};
    function Se(e, r, t, n, u, s) {
      {
        var i = Ye(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = nr();
          h ? a += h : a += Re();
          var c;
          e === null ? c = "null" : G(e) ? c = "array" : e !== void 0 && e.$$typeof === f ? (c = "<" + (C(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var v = tr(e, r, t, u, s);
        if (v == null)
          return v;
        if (i) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (G(m)) {
                for (var A = 0; A < m.length; A++)
                  Te(m[A], e);
                Object.freeze && Object.freeze(m);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(m, e);
        }
        if ($.call(r, "key")) {
          var j = C(e), g = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), Z = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[j + Z]) {
            var cr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, j, cr, j), Oe[j + Z] = !0;
          }
        }
        return e === R ? ir(v) : or(v), v;
      }
    }
    function ur(e, r, t) {
      return Se(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var lr = sr, fr = ur;
    W.Fragment = R, W.jsx = lr, W.jsxs = fr;
  })()), W;
}
var Pe;
function _r() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? V.exports = hr() : V.exports = gr()), V.exports;
}
var U = _r();
function yr(o, f, b) {
  o.save(), o.canvas.width = f, o.canvas.height = f, o.fillStyle = b, o.fillRect(0, 0, f, f), o.restore();
}
function br(o, f, b, R, O = 5, S = 0.5, w = {}) {
  const { empty: E = !1, fillColor: l = "gold" } = w;
  o.save(), E ? o.globalCompositeOperation = "destination-out" : o.fillStyle = l, o.beginPath(), o.translate(f, b), o.moveTo(0, -R);
  for (let T = 0; T < O; T++)
    o.rotate(Math.PI / O), o.lineTo(0, -R * S), o.rotate(Math.PI / O), o.lineTo(0, -R);
  o.fill(), o.restore();
}
function Rr(o, f, b) {
  yr(o, f * 2, b), br(o, f, f, f, 5, 0.5, { empty: !0 });
}
const Er = "_container_1cv76_1", mr = "_fill_1cv76_6", Tr = "_stars_1cv76_15", Or = "_star_1cv76_15", J = {
  container: Er,
  fill: mr,
  stars: Tr,
  star: Or
}, wr = ({
  raterDim: o = 20,
  rate: f = 0.5,
  total: b = 1,
  activeColor: R = "#FFB600",
  inactiveColor: O = "#bebebe",
  raterBg: S = "#fff",
  className: w = ""
}) => {
  const E = dr([]), l = Q(() => Math.max(Math.ceil(f), b), [f, b]), T = Q(() => l * o, [l, o]), d = Q(() => f / l * 100, [f, l]);
  return pr(() => {
    E.current.forEach((_) => {
      if (_) {
        const y = _.getContext("2d");
        y && Rr(y, o / 2, S);
      }
    });
  }, [o, S, l]), /* @__PURE__ */ U.jsxs(
    "div",
    {
      className: `${J.container} ${w}`.trim(),
      style: {
        width: `${T}px`,
        height: `${o}px`,
        backgroundColor: O
      },
      children: [
        /* @__PURE__ */ U.jsx(
          "div",
          {
            className: J.fill,
            style: {
              width: `${d}%`,
              backgroundColor: R
            }
          }
        ),
        /* @__PURE__ */ U.jsx("div", { className: J.stars, children: Array.from({ length: l }, (_, y) => /* @__PURE__ */ U.jsx(
          "canvas",
          {
            ref: (k) => E.current[y] = k,
            width: o,
            height: o,
            className: J.star
          },
          y
        )) })
      ]
    }
  );
};
export {
  wr as ReactRatingFloat
};
