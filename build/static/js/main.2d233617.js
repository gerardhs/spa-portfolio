/*! For license information please see main.2d233617.js.LICENSE.txt */
!(function () {
  var e = {
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var m = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
                ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
                : ((t = a.attributeName),
                  (r = a.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (a = a.type) || (4 === a && !0 === n)
                          ? ""
                          : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(m, y);
            g[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(m, y);
              g[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(m, y);
            g[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          L = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          O = Symbol.for("react.suspense"),
          R = Symbol.for("react.suspense_list"),
          j = Symbol.for("react.memo"),
          T = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var _ = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var D = Symbol.iterator;
        function M(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (D && e[D]) || e["@@iterator"])
              ? e
              : null;
        }
        var z,
          F = Object.assign;
        function I(e) {
          if (void 0 === z)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              z = (t && t[1]) || "";
            }
          return "\n" + z + e;
        }
        var A = !1;
        function U(e, t) {
          if (!e || A) return "";
          A = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var u = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (A = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? I(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return I(e.type);
            case 16:
              return I("Lazy");
            case 13:
              return I("Suspense");
            case 19:
              return I("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function V(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case x:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case O:
              return "Suspense";
            case R:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case L:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case j:
                return null !== (t = e.displayName || null)
                  ? t
                  : V(e.type) || "Memo";
              case T:
                (t = e._payload), (e = e._init);
                try {
                  return V(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
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
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
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
              return V(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function $(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = $(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          G(e, t);
          var n = $(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, $(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + $(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: $(n) };
        }
        function oe(e, t) {
          var n = $(t.value),
            r = $(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
              ? "http://www.w3.org/1999/xhtml"
              : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
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
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
                "number" !== typeof t ||
                0 === t ||
                (pe.hasOwnProperty(e) && pe[e])
              ? ("" + t).trim()
              : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var me = F(
          { menuitem: !0 },
          {
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
            wbr: !0,
          },
        );
        function ye(e, t) {
          if (t) {
            if (
              me[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
              return !0;
          }
        }
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          Se = null,
          Ee = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof xe) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = ka(t)), xe(e.stateNode, e.type, t));
          }
        }
        function Le(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Ne() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Oe() {}
        var Re = !1;
        function je(e, t, n) {
          if (Re) return e(t, n);
          Re = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Re = !1), (null !== Se || null !== Ee) && (Oe(), Ne());
          }
        }
        function Te(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ka(n);
          if (null === r) return null;
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var _e = !1;
        if (c)
          try {
            var De = {};
            Object.defineProperty(De, "passive", {
              get: function () {
                _e = !0;
              },
            }),
              window.addEventListener("test", De, De),
              window.removeEventListener("test", De, De);
          } catch (ce) {
            _e = !1;
          }
        function Me(e, t, n, r, a, o, i, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var ze = !1,
          Fe = null,
          Ie = !1,
          Ae = null,
          Ue = {
            onError: function (e) {
              (ze = !0), (Fe = e);
            },
          };
        function Be(e, t, n, r, a, o, i, l, u) {
          (ze = !1), (Fe = null), Me.apply(Ue, arguments);
        }
        function Ve(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function $e(e) {
          if (Ve(e) !== e) throw Error(o(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ve(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return $e(a), e;
                    if (i === r) return $e(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, u = a.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = i.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ke(e)
            : null;
        }
        function Ke(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ke(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Qe = a.unstable_cancelCallback,
          Je = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Ge = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
              },
          lt = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = ft(l)) : 0 !== (o &= i) && (r = ft(o));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
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
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function vt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function mt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          xt,
          St,
          Et,
          Ct,
          Lt = !1,
          Nt = [],
          Pt = null,
          Ot = null,
          Rt = null,
          jt = new Map(),
          Tt = new Map(),
          _t = [],
          Dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function Mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Ot = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              jt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Tt.delete(t.pointerId);
          }
        }
        function zt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ft(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Ve(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function It(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function At(e, t, n) {
          It(e) && n.delete(t);
        }
        function Ut() {
          (Lt = !1),
            null !== Pt && It(Pt) && (Pt = null),
            null !== Ot && It(Ot) && (Ot = null),
            null !== Rt && It(Rt) && (Rt = null),
            jt.forEach(At),
            Tt.forEach(At);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Lt ||
              ((Lt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function Vt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Nt.length) {
            Bt(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Bt(Pt, e),
              null !== Ot && Bt(Ot, e),
              null !== Rt && Bt(Rt, e),
              jt.forEach(t),
              Tt.forEach(t),
              n = 0;
            n < _t.length;
            n++
          )
            (r = _t[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < _t.length && null === (n = _t[0]).blockedOn; )
            Ft(n), null === n.blockedOn && _t.shift();
        }
        var Ht = w.ReactCurrentBatchConfig,
          $t = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          var a = bt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = o);
          }
        }
        function qt(e, t, n, r) {
          if ($t) {
            var a = Jt(e, t, n, r);
            if (null === a) $r(e, t, r, Qt, n), Mt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = zt(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Ot = zt(Ot, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Rt = zt(Rt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return jt.set(o, zt(jt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Tt.set(o, zt(Tt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Mt(e, r), 4 & t && -1 < Dt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && kt(o),
                  null === (o = Jt(e, t, n, r)) && $r(e, t, r, Qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else $r(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Jt(e, t, n, r) {
          if (((Qt = null), null !== (e = ya((e = ke(r))))))
            if (null === (t = Ve(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function Yt(e) {
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
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Gt ? Gt.value : Gt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = F({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = F({}, fn, {
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
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          vn = an(F({}, pn, { dataTransfer: 0 })),
          gn = an(F({}, fn, { relatedTarget: 0 })),
          mn = an(
            F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = F({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(F({}, sn, { data: 0 })),
          kn = {
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
            MozPrintableKey: "Unidentified",
          },
          xn = {
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
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var Ln = F({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? xn[e.keyCode] || "Unidentified"
                  : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          Nn = an(Ln),
          Pn = an(
            F({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          On = an(
            F({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            }),
          ),
          Rn = an(
            F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          jn = F({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Tn = an(jn),
          _n = [9, 13, 27, 32],
          Dn = c && "CompositionEvent" in window,
          Mn = null;
        c && "documentMode" in document && (Mn = document.documentMode);
        var zn = c && "TextEvent" in window && !Mn,
          Fn = c && (!Dn || (Mn && 8 < Mn && 11 >= Mn)),
          In = String.fromCharCode(32),
          An = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== _n.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vn = !1;
        var Hn = {
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
          week: !0,
        };
        function $n(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Le(r),
            0 < (t = Kr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          qn = null;
        function Qn(e) {
          Ir(e, 0);
        }
        function Jn(e) {
          if (q(wa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Gn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Kn && (Kn.detachEvent("onpropertychange", nr), (qn = Kn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Jn(qn)) {
            var t = [];
            Wn(t, qn, e, ke(e)), je(Qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Kn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Jn(qn);
        }
        function or(e, t) {
          if ("click" === e) return Jn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Jn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          mr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          br ||
            null == gr ||
            gr !== Q(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Kr(mr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var Lr = Cr("animationend"),
          Nr = Cr("animationiteration"),
          Pr = Cr("animationstart"),
          Or = Cr("transitionend"),
          Rr = new Map(),
          jr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Tr(e, t) {
          Rr.set(e, t), u(t, [e]);
        }
        for (var _r = 0; _r < jr.length; _r++) {
          var Dr = jr[_r];
          Tr(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)));
        }
        Tr(Lr, "onAnimationEnd"),
          Tr(Nr, "onAnimationIteration"),
          Tr(Pr, "onAnimationStart"),
          Tr("dblclick", "onDoubleClick"),
          Tr("focusin", "onFocus"),
          Tr("focusout", "onBlur"),
          Tr(Or, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var Mr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          zr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Mr),
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, u, s) {
              if ((Be.apply(this, arguments), ze)) {
                if (!ze) throw Error(o(198));
                var c = Fe;
                (ze = !1), (Fe = null), Ie || ((Ie = !0), (Ae = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ir(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  Fr(a, l, s), (o = u);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((u = (l = r[i]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Fr(a, l, s), (o = u);
                }
            }
          }
          if (Ie) throw ((e = Ae), (Ie = !1), (Ae = null), e);
        }
        function Ar(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (zr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ur("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Kt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !_e ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1);
        }
        function $r(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = ya(l))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          je(function () {
            var r = o,
              a = ke(n),
              i = [];
            e: {
              var l = Rr.get(e);
              if (void 0 !== l) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Nn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = gn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = On;
                    break;
                  case Lr:
                  case Nr:
                  case Pr:
                    u = mn;
                    break;
                  case Or:
                    u = Rn;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = Tn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Pn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Te(h, d)) &&
                        c.push(Wr(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, n, a)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ya(s) && !s[ha])) &&
                  (u || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                        ? l.defaultView || l.parentWindow
                        : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ya(s)
                          : null) &&
                        (s !== (f = Ve(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? l : wa(u)),
                  (p = null == s ? l : wa(s)),
                  ((l = new c(v, h + "leave", u, n, a)).target = f),
                  (l.relatedTarget = p),
                  (v = null),
                  ya(a) === r &&
                    (((c = new c(d, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, v = d; v; v = qr(v)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Qr(i, l, u, c, !1),
                  null !== s && null !== f && Qr(i, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? wa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var g = Yn;
              else if ($n(l))
                if (Gn) g = ir;
                else {
                  g = ar;
                  var m = rr;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (g = or);
              switch (
                (g && (g = g(e, r))
                  ? Wn(i, g, n, a)
                  : (m && m(e, l, r),
                    "focusout" === e &&
                      (m = l._wrapperState) &&
                      m.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (m = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  ($n(m) || "true" === m.contentEditable) &&
                    ((gr = m), (mr = r), (yr = null));
                  break;
                case "focusout":
                  yr = mr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var y;
              if (Dn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Vn
                  ? Un(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Vn && (y = en())
                    : ((Xt = "value" in (Gt = a) ? Gt.value : Gt.textContent),
                      (Vn = !0))),
                0 < (m = Kr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: m }),
                  y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
                (y = zn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((An = !0), In);
                        case "textInput":
                          return (e = t.data) === In && An ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!Dn && Un(e, t))
                          ? ((e = en()), (Zt = Xt = Gt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Ir(i, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Kr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Te(e, n)) && r.unshift(Wr(e, o, a)),
              null != (o = Te(e, t)) && r.push(Wr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              a
                ? null != (u = Te(n, o)) && i.unshift(Wr(n, u, l))
                : a || (null != (u = Te(n, o)) && i.push(Wr(n, u, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Jr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Jr, "\n")
            .replace(Yr, "");
        }
        function Xr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
                ? function (e) {
                    return oa.resolve(null).then(e).catch(la);
                  }
                : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Vt(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ga = "__reactListeners$" + fa,
          ma = "__reactHandles$" + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ka(e) {
          return e[pa] || null;
        }
        var xa = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = xa[Sa]), (xa[Sa] = null), Sa--);
        }
        function La(e, t) {
          Sa++, (xa[Sa] = e.current), (e.current = t);
        }
        var Na = {},
          Pa = Ea(Na),
          Oa = Ea(!1),
          Ra = Na;
        function ja(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Na;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ta(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function _a() {
          Ca(Oa), Ca(Pa);
        }
        function Da(e, t, n) {
          if (Pa.current !== Na) throw Error(o(168));
          La(Pa, t), La(Oa, n);
        }
        function Ma(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, H(e) || "Unknown", a));
          return F({}, n, r);
        }
        function za(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Na),
            (Ra = Pa.current),
            La(Pa, e),
            La(Oa, Oa.current),
            !0
          );
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Ma(e, t, Ra)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Oa),
              Ca(Pa),
              La(Pa, e))
            : Ca(Oa),
            La(Oa, n);
        }
        var Ia = null,
          Aa = !1,
          Ua = !1;
        function Ba(e) {
          null === Ia ? (Ia = [e]) : Ia.push(e);
        }
        function Va() {
          if (!Ua && null !== Ia) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ia;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ia = null), (Aa = !1);
            } catch (a) {
              throw (null !== Ia && (Ia = Ia.slice(e + 1)), qe(Ze, Va), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var Ha = [],
          $a = 0,
          Wa = null,
          Ka = 0,
          qa = [],
          Qa = 0,
          Ja = null,
          Ya = 1,
          Ga = "";
        function Xa(e, t) {
          (Ha[$a++] = Ka), (Ha[$a++] = Wa), (Wa = e), (Ka = t);
        }
        function Za(e, t, n) {
          (qa[Qa++] = Ya), (qa[Qa++] = Ga), (qa[Qa++] = Ja), (Ja = e);
          var r = Ya;
          e = Ga;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ga = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Ga = e);
        }
        function eo(e) {
          null !== e.return && (Xa(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === Wa; )
            (Wa = Ha[--$a]), (Ha[$a] = null), (Ka = Ha[--$a]), (Ha[$a] = null);
          for (; e === Ja; )
            (Ja = qa[--Qa]),
              (qa[Qa] = null),
              (Ga = qa[--Qa]),
              (qa[Qa] = null),
              (Ya = qa[--Qa]),
              (qa[Qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Ts(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ja ? { id: Ya, overflow: Ga } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ts(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function so(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (uo(e)) throw Error(o(418));
                t = sa(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = sa(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = sa(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function vo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var go = w.ReactCurrentBatchConfig;
        function mo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yo = Ea(null),
          bo = null,
          wo = null,
          ko = null;
        function xo() {
          ko = wo = bo = null;
        }
        function So(e) {
          var t = yo.current;
          Ca(yo), (e._currentValue = t);
        }
        function Eo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Co(e, t) {
          (bo = e),
            (ko = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function Lo(e) {
          var t = e._currentValue;
          if (ko !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var No = null;
        function Po(e) {
          null === No ? (No = [e]) : No.push(e);
        }
        function Oo(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Po(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ro(e, r)
          );
        }
        function Ro(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var jo = !1;
        function To(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function _o(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Do(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Mo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ou))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ro(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Po(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ro(e, n)
          );
        }
        function zo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Fo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Io(e, t, n, r) {
          var a = e.updateQueue;
          jo = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var u = l,
              s = u.next;
            (u.next = null), null === i ? (o = s) : (i.next = s), (i = u);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = s) : (l.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== o) {
            var f = a.baseState;
            for (i = 0, c = s = u = null, l = o; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = l;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = F({}, f, d);
                      break e;
                    case 2:
                      jo = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Fu |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Ao(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Uo = new r.Component().refs;
        function Bo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Vo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Do(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Mo(e, o, a)) && (rs(t, e, a, r), zo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Do(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Mo(e, o, a)) && (rs(t, e, a, r), zo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              a = Do(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Mo(e, a, r)) && (rs(t, e, r, n), zo(t, e, r));
          },
        };
        function Ho(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, o);
        }
        function $o(e, t, n) {
          var r = !1,
            a = Na,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Lo(o))
              : ((a = Ta(t) ? Ra : Pa.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? ja(e, a)
                  : Na)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Vo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Wo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Vo.enqueueReplaceState(t, t.state, null);
        }
        function Ko(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Uo), To(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Lo(o))
            : ((o = Ta(t) ? Ra : Pa.current), (a.context = ja(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Bo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Vo.enqueueReplaceState(a, a.state, null),
              Io(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function qo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Uo && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            ))
          );
        }
        function Jo(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ds(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Is(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var o = n.type;
            return o === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === o ||
                    ("object" === typeof o &&
                      null !== o &&
                      o.$$typeof === T &&
                      Jo(o) === t.type))
                ? (((r = a(t, n.props)).ref = qo(e, t, n)), (r.return = e), r)
                : (((r = Ms(n.type, n.key, n.props, null, e.mode, r)).ref = qo(
                    e,
                    t,
                    n,
                  )),
                  (r.return = e),
                  r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = As(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = zs(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Is("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Ms(t.type, t.key, t.props, null, e.mode, n)).ref = qo(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = As(t, e.mode, n)).return = e), t;
                case T:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || M(t))
                return ((t = zs(t, e.mode, n, null)).return = e), t;
              Qo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a ? s(e, t, n, r) : null;
                case x:
                  return n.key === a ? c(e, t, n, r) : null;
                case T:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || M(n)) return null !== a ? null : f(e, t, n, r, null);
              Qo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case T:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || M(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Qo(t, r);
            }
            return null;
          }
          function v(a, o, l, u) {
            for (
              var s = null, c = null, f = o, v = (o = 0), g = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((g = f), (f = null)) : (g = f.sibling);
              var m = p(a, f, l[v], u);
              if (null === m) {
                null === f && (f = g);
                break;
              }
              e && f && null === m.alternate && t(a, f),
                (o = i(m, o, v)),
                null === c ? (s = m) : (c.sibling = m),
                (c = m),
                (f = g);
            }
            if (v === l.length) return n(a, f), ao && Xa(a, v), s;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = d(a, l[v], u)) &&
                  ((o = i(f, o, v)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return ao && Xa(a, v), s;
            }
            for (f = r(a, f); v < l.length; v++)
              null !== (g = h(f, a, v, l[v], u)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? v : g.key),
                (o = i(g, o, v)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, v),
              s
            );
          }
          function g(a, l, u, s) {
            var c = M(u);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var f = (c = null), v = l, g = (l = 0), m = null, y = u.next();
              null !== v && !y.done;
              g++, y = u.next()
            ) {
              v.index > g ? ((m = v), (v = null)) : (m = v.sibling);
              var b = p(a, v, y.value, s);
              if (null === b) {
                null === v && (v = m);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (l = i(b, l, g)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = m);
            }
            if (y.done) return n(a, v), ao && Xa(a, g), c;
            if (null === v) {
              for (; !y.done; g++, y = u.next())
                null !== (y = d(a, y.value, s)) &&
                  ((l = i(y, l, g)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return ao && Xa(a, g), c;
            }
            for (v = r(a, v); !y.done; g++, y = u.next())
              null !== (y = h(v, a, g, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? g : y.key),
                (l = i(y, l, g)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, g),
              c
            );
          }
          return function e(r, o, i, u) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case k:
                  e: {
                    for (var s = i.key, c = o; null !== c; ) {
                      if (c.key === s) {
                        if ((s = i.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === T &&
                            Jo(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, i.props)).ref = qo(r, c, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === S
                      ? (((o = zs(i.props.children, r.mode, u, i.key)).return =
                          r),
                        (r = o))
                      : (((u = Ms(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          u,
                        )).ref = qo(r, o, i)),
                        (u.return = r),
                        (r = u));
                  }
                  return l(r);
                case x:
                  e: {
                    for (c = i.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = As(i, r.mode, u)).return = r), (r = o);
                  }
                  return l(r);
                case T:
                  return e(r, o, (c = i._init)(i._payload), u);
              }
              if (te(i)) return v(r, o, i, u);
              if (M(i)) return g(r, o, i, u);
              Qo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Is(i, r.mode, u)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var Go = Yo(!0),
          Xo = Yo(!1),
          Zo = {},
          ei = Ea(Zo),
          ti = Ea(Zo),
          ni = Ea(Zo);
        function ri(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((La(ni, t), La(ti, e), La(ei, Zo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          Ca(ei), La(ei, t);
        }
        function oi() {
          Ca(ei), Ca(ti), Ca(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = ue(t, e.type);
          t !== n && (La(ti, e), La(ei, n));
        }
        function li(e) {
          ti.current === e && (Ca(ei), Ca(ti));
        }
        var ui = Ea(0);
        function si(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function fi() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var di = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          vi = null,
          gi = null,
          mi = null,
          yi = !1,
          bi = !1,
          wi = 0,
          ki = 0;
        function xi() {
          throw Error(o(321));
        }
        function Si(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Ei(e, t, n, r, a, i) {
          if (
            ((hi = i),
            (vi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? ll : ul),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (mi = gi = null),
                (t.updateQueue = null),
                (di.current = sl),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((di.current = il),
            (t = null !== gi && null !== gi.next),
            (hi = 0),
            (mi = gi = vi = null),
            (yi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Ci() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Li() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === mi ? (vi.memoizedState = mi = e) : (mi = mi.next = e), mi
          );
        }
        function Ni() {
          if (null === gi) {
            var e = vi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = gi.next;
          var t = null === mi ? vi.memoizedState : mi.next;
          if (null !== t) (mi = t), (gi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (gi = e).memoizedState,
              baseState: gi.baseState,
              baseQueue: gi.baseQueue,
              queue: gi.queue,
              next: null,
            }),
              null === mi ? (vi.memoizedState = mi = e) : (mi = mi.next = e);
          }
          return mi;
        }
        function Pi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Oi(e) {
          var t = Ni(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = gi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var u = (l = null),
              s = null,
              c = i;
            do {
              var f = c.lane;
              if ((hi & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (l = r)) : (s = s.next = d),
                  (vi.lanes |= f),
                  (Fu |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === s ? (l = r) : (s.next = u),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (vi.lanes |= i), (Fu |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ri(e) {
          var t = Ni(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (wl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function ji() {}
        function Ti(e, t) {
          var n = vi,
            r = Ni(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wl = !0)),
            (r = r.queue),
            $i(Mi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== mi && 1 & mi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ai(9, Di.bind(null, n, r, a, t), void 0, null),
              null === Ru)
            )
              throw Error(o(349));
            0 !== (30 & hi) || _i(n, t, a);
          }
          return a;
        }
        function _i(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e);
        }
        function Di(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), zi(t) && Fi(e);
        }
        function Mi(e, t, n) {
          return n(function () {
            zi(t) && Fi(e);
          });
        }
        function zi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Fi(e) {
          var t = Ro(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function Ii(e) {
          var t = Li();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Pi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, vi, e)),
            [t.memoizedState, e]
          );
        }
        function Ai(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          );
        }
        function Ui() {
          return Ni().memoizedState;
        }
        function Bi(e, t, n, r) {
          var a = Li();
          (vi.flags |= e),
            (a.memoizedState = Ai(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Vi(e, t, n, r) {
          var a = Ni();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== gi) {
            var i = gi.memoizedState;
            if (((o = i.destroy), null !== r && Si(r, i.deps)))
              return void (a.memoizedState = Ai(t, n, o, r));
          }
          (vi.flags |= e), (a.memoizedState = Ai(1 | t, n, o, r));
        }
        function Hi(e, t) {
          return Bi(8390656, 8, e, t);
        }
        function $i(e, t) {
          return Vi(2048, 8, e, t);
        }
        function Wi(e, t) {
          return Vi(4, 2, e, t);
        }
        function Ki(e, t) {
          return Vi(4, 4, e, t);
        }
        function qi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function Qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Vi(4, 4, qi.bind(null, t, e), n)
          );
        }
        function Ji() {}
        function Yi(e, t) {
          var n = Ni();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Gi(e, t) {
          var n = Ni();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xi(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = vt()), (vi.lanes |= n), (Fu |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function el() {
          return Ni().memoizedState;
        }
        function tl(e, t, n) {
          var r = ns(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = Oo(e, t, n, r))) {
            rs(n, e, r, ts()), ol(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = ns(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Po(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = Oo(e, t, a, r)) &&
              (rs(n, e, r, (a = ts())), ol(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === vi || (null !== t && t === vi);
        }
        function al(e, t) {
          bi = yi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ol(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var il = {
            readContext: Lo,
            useCallback: xi,
            useContext: xi,
            useEffect: xi,
            useImperativeHandle: xi,
            useInsertionEffect: xi,
            useLayoutEffect: xi,
            useMemo: xi,
            useReducer: xi,
            useRef: xi,
            useState: xi,
            useDebugValue: xi,
            useDeferredValue: xi,
            useTransition: xi,
            useMutableSource: xi,
            useSyncExternalStore: xi,
            useId: xi,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Lo,
            useCallback: function (e, t) {
              return (Li().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Lo,
            useEffect: Hi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bi(4194308, 4, qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Li();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Li();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, vi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Li().memoizedState = e);
            },
            useState: Ii,
            useDebugValue: Ji,
            useDeferredValue: function (e) {
              return (Li().memoizedState = e);
            },
            useTransition: function () {
              var e = Ii(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Li().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vi,
                a = Li();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ru)) throw Error(o(349));
                0 !== (30 & hi) || _i(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Hi(Mi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ai(9, Di.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Li(),
                t = Ru.identifierPrefix;
              if (ao) {
                var n = Ga;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ki++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Lo,
            useCallback: Yi,
            useContext: Lo,
            useEffect: $i,
            useImperativeHandle: Qi,
            useInsertionEffect: Wi,
            useLayoutEffect: Ki,
            useMemo: Gi,
            useReducer: Oi,
            useRef: Ui,
            useState: function () {
              return Oi(Pi);
            },
            useDebugValue: Ji,
            useDeferredValue: function (e) {
              return Xi(Ni(), gi.memoizedState, e);
            },
            useTransition: function () {
              return [Oi(Pi)[0], Ni().memoizedState];
            },
            useMutableSource: ji,
            useSyncExternalStore: Ti,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Lo,
            useCallback: Yi,
            useContext: Lo,
            useEffect: $i,
            useImperativeHandle: Qi,
            useInsertionEffect: Wi,
            useLayoutEffect: Ki,
            useMemo: Gi,
            useReducer: Ri,
            useRef: Ui,
            useState: function () {
              return Ri(Pi);
            },
            useDebugValue: Ji,
            useDeferredValue: function (e) {
              var t = Ni();
              return null === gi
                ? (t.memoizedState = e)
                : Xi(t, gi.memoizedState, e);
            },
            useTransition: function () {
              return [Ri(Pi)[0], Ni().memoizedState];
            },
            useMutableSource: ji,
            useSyncExternalStore: Ti,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Do(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wu || ((Wu = !0), (Ku = r)), dl(0, t);
            }),
            n
          );
        }
        function vl(e, t, n) {
          (n = Do(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === qu ? (qu = new Set([this])) : qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Ls.bind(null, e, t, n)), t.then(e, e));
        }
        function ml(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Do(-1, 1)).tag = 2), Mo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = w.ReactCurrentOwner,
          wl = !1;
        function kl(e, t, n, r) {
          t.child = null === e ? Xo(t, null, n, r) : Go(t, e.child, n, r);
        }
        function xl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Co(t, a),
            (r = Ei(e, t, n, r, o, a)),
            (n = Ci()),
            null === e || wl
              ? (ao && n && eo(t), (t.flags |= 1), kl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wl(e, t, a))
          );
        }
        function Sl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              _s(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ms(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), El(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(i, r) &&
              e.ref === t.ref
            )
              return Wl(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ds(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function El(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wl(e, t, a);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return Nl(e, t, n, r, a);
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                La(Du, _u),
                (_u |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  La(Du, _u),
                  (_u |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                La(Du, _u),
                (_u |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              La(Du, _u),
              (_u |= r);
          return kl(e, t, a, n), t.child;
        }
        function Ll(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Nl(e, t, n, r, a) {
          var o = Ta(n) ? Ra : Pa.current;
          return (
            (o = ja(t, o)),
            Co(t, a),
            (n = Ei(e, t, n, r, o, a)),
            (r = Ci()),
            null === e || wl
              ? (ao && r && eo(t), (t.flags |= 1), kl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wl(e, t, a))
          );
        }
        function Pl(e, t, n, r, a) {
          if (Ta(n)) {
            var o = !0;
            za(t);
          } else o = !1;
          if ((Co(t, a), null === t.stateNode))
            $l(e, t), $o(t, n, r), Ko(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = Lo(s))
              : (s = ja(t, (s = Ta(n) ? Ra : Pa.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || u !== s) && Wo(t, i, r, s)),
              (jo = !1);
            var d = t.memoizedState;
            (i.state = d),
              Io(t, r, i, a),
              (u = t.memoizedState),
              l !== r || d !== u || Oa.current || jo
                ? ("function" === typeof c &&
                    (Bo(t, n, c, r), (u = t.memoizedState)),
                  (l = jo || Ho(t, n, l, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = s),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              _o(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : mo(t.type, l)),
              (i.props = s),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Lo(u))
                : (u = ja(t, (u = Ta(n) ? Ra : Pa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== u) && Wo(t, i, r, u)),
              (jo = !1),
              (d = t.memoizedState),
              (i.state = d),
              Io(t, r, i, a);
            var h = t.memoizedState;
            l !== f || d !== h || Oa.current || jo
              ? ("function" === typeof p &&
                  (Bo(t, n, p, r), (h = t.memoizedState)),
                (s = jo || Ho(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, u),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = u),
                (r = s))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ol(e, t, n, r, o, a);
        }
        function Ol(e, t, n, r, a, o) {
          Ll(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Fa(t, n, !1), Wl(e, t, o);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Go(t, e.child, null, o)),
                (t.child = Go(t, null, l, o)))
              : kl(e, t, l, o),
            (t.memoizedState = r.state),
            a && Fa(t, n, !0),
            t.child
          );
        }
        function Rl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Da(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Da(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function jl(e, t, n, r, a) {
          return ho(), vo(a), (t.flags |= 256), kl(e, t, n, r), t.child;
        }
        var Tl,
          _l,
          Dl,
          Ml,
          zl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Il(e, t, n) {
          var r,
            a = t.pendingProps,
            i = ui.current,
            l = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            La(ui, 1 & i),
            null === e)
          )
            return (
              so(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = u))
                        : (l = Fs(u, a, 0, null)),
                      (e = zs(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Fl(n)),
                      (t.memoizedState = zl),
                      e)
                    : Al(t, u))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ul(e, t, l, (r = fl(Error(o(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((i = r.fallback),
                      (a = t.mode),
                      (r = Fs(
                        { mode: "visible", children: r.children },
                        a,
                        0,
                        null,
                      )),
                      ((i = zs(i, a, l, null)).flags |= 2),
                      (r.return = t),
                      (i.return = t),
                      (r.sibling = i),
                      (t.child = r),
                      0 !== (1 & t.mode) && Go(t, e.child, null, l),
                      (t.child.memoizedState = Fl(l)),
                      (t.memoizedState = zl),
                      i);
              if (0 === (1 & t.mode)) return Ul(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Ul(e, t, l, (r = fl((i = Error(o(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (l & e.childLanes)), wl || u)) {
                if (null !== (r = Ru)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Ro(e, a), rs(r, e, a, -1));
                }
                return gs(), Ul(e, t, l, (r = fl(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ps.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = sa(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((qa[Qa++] = Ya),
                    (qa[Qa++] = Ga),
                    (qa[Qa++] = Ja),
                    (Ya = e.id),
                    (Ga = e.overflow),
                    (Ja = t)),
                  (t = Al(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, i, n);
          if (l) {
            (l = a.fallback), (u = t.mode), (r = (i = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = Ds(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Ds(r, l))
                : ((l = zs(l, u, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Fl(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (l.memoizedState = u),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = zl),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Ds(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Al(e, t) {
          return (
            ((t = Fs(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function Ul(e, t, n, r) {
          return (
            null !== r && vo(r),
            Go(t, e.child, null, n),
            ((e = Al(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Eo(e.return, t, n);
        }
        function Vl(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Hl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((kl(e, t, r.children, n), 0 !== (2 & (r = ui.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bl(e, n, t);
                else if (19 === e.tag) Bl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((La(ui, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === si(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Vl(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === si(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Vl(t, !0, n, null, o);
                break;
              case "together":
                Vl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function $l(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ds((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ds(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Kl(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ql(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
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
              return ql(t), null;
            case 1:
            case 17:
              return Ta(t.type) && _a(), ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                Ca(Oa),
                Ca(Pa),
                fi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (ls(oo), (oo = null)))),
                _l(e, t),
                ql(t),
                null
              );
            case 5:
              li(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Dl(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return ql(t), null;
                }
                if (((e = ri(ei.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ar("cancel", r), Ar("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ar("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Mr.length; a++) Ar(Mr[a], r);
                      break;
                    case "source":
                      Ar("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ar("error", r), Ar("load", r);
                      break;
                    case "details":
                      Ar("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Ar("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ar("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Ar("invalid", r);
                  }
                  for (var u in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(u)) {
                      var s = i[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : l.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Ar("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      K(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      K(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                          ? (e = u.createElement(n, { is: r.is }))
                          : ((e = u.createElement(n)),
                            "select" === n &&
                              ((u = e),
                              r.multiple
                                ? (u.multiple = !0)
                                : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Tl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Ar("cancel", e), Ar("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ar("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Mr.length; a++) Ar(Mr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ar("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ar("error", e), Ar("load", e), (a = r);
                        break;
                      case "details":
                        Ar("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = J(e, r)), Ar("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          Ar("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ar("invalid", e);
                    }
                    for (i in (ye(n, a), (s = a)))
                      if (s.hasOwnProperty(i)) {
                        var c = s[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                            ? null != (c = c ? c.__html : void 0) && fe(e, c)
                            : "children" === i
                              ? "string" === typeof c
                                ? ("textarea" !== n || "" !== c) && de(e, c)
                                : "number" === typeof c && de(e, "" + c)
                              : "suppressContentEditableWarning" !== i &&
                                "suppressHydrationWarning" !== i &&
                                "autoFocus" !== i &&
                                (l.hasOwnProperty(i)
                                  ? null != c &&
                                    "onScroll" === i &&
                                    Ar("scroll", e)
                                  : null != c && b(e, i, c, u));
                      }
                    switch (n) {
                      case "input":
                        K(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        K(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + $(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
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
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return ql(t), null;
            case 6:
              if (e && null != t.stateNode) Ml(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return ql(t), null;
            case 13:
              if (
                (Ca(ui),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[da] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  ql(t), (i = !1);
                } else null !== oo && (ls(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ui.current)
                        ? 0 === Mu && (Mu = 3)
                        : gs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  ql(t),
                  null);
            case 4:
              return (
                oi(),
                _l(e, t),
                null === e && Vr(t.stateNode.containerInfo),
                ql(t),
                null
              );
            case 10:
              return So(t.type._context), ql(t), null;
            case 19:
              if ((Ca(ui), null === (i = t.memoizedState))) return ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = i.rendering)))
                if (r) Kl(i, !1);
                else {
                  if (0 !== Mu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = si(e))) {
                        for (
                          t.flags |= 128,
                            Kl(i, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (u = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = u.childLanes),
                                (i.lanes = u.lanes),
                                (i.child = u.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = u.memoizedProps),
                                (i.memoizedState = u.memoizedState),
                                (i.updateQueue = u.updateQueue),
                                (i.type = u.type),
                                (e = u.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return La(ui, (1 & ui.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ge() > Hu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Kl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Kl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !u.alternate &&
                        !ao)
                    )
                      return ql(t), null;
                  } else
                    2 * Ge() - i.renderingStartTime > Hu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Kl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = i.last) ? (n.sibling = u) : (t.child = u),
                    (i.last = u));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = ui.current),
                  La(ui, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (ql(t), null);
            case 22:
            case 23:
              return (
                ds(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & _u) &&
                    (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Jl(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ta(t.type) && _a(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                Ca(Oa),
                Ca(Pa),
                fi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if (
                (Ca(ui),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(ui), null;
            case 4:
              return oi(), null;
            case 10:
              return So(t.type._context), null;
            case 22:
            case 23:
              return ds(), null;
            default:
              return null;
          }
        }
        (Tl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (_l = function () {}),
          (Dl = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = J(e, a)), (r = J(e, r)), (i = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (s && s.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in s)
                        s.hasOwnProperty(o) &&
                          u[o] !== s[o] &&
                          (n || (n = {}), (n[o] = s[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (i = i || []).push(c, s))
                      : "children" === c
                        ? ("string" !== typeof s && "number" !== typeof s) ||
                          (i = i || []).push(c, "" + s)
                        : "suppressContentEditableWarning" !== c &&
                          "suppressHydrationWarning" !== c &&
                          (l.hasOwnProperty(c)
                            ? (null != s && "onScroll" === c && Ar("scroll", e),
                              i || u === s || (i = []))
                            : (i = i || []).push(c, s));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ml = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yl = !1,
          Gl = !1,
          Xl = "function" === typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Cs(e, t, r);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (r) {
            Cs(e, t, r);
          }
        }
        var nu = !1;
        function ru(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && tu(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function au(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ou(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function iu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), iu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[va],
              delete t[ga],
              delete t[ma]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function lu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || lu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        var fu = null,
          du = !1;
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
        }
        function hu(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Gl || eu(n, t);
            case 6:
              var r = fu,
                a = du;
              (fu = null),
                pu(e, t, n),
                (du = a),
                null !== (fu = r) &&
                  (du
                    ? ((e = fu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fu.removeChild(n.stateNode));
              break;
            case 18:
              null !== fu &&
                (du
                  ? ((e = fu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Vt(e))
                  : ua(fu, n.stateNode));
              break;
            case 4:
              (r = fu),
                (a = du),
                (fu = n.stateNode.containerInfo),
                (du = !0),
                pu(e, t, n),
                (fu = r),
                (du = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      tu(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (
                !Gl &&
                (eu(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Cs(n, t, l);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Gl = (r = Gl) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Gl = r))
                : pu(e, t, n);
              break;
            default:
              pu(e, t, n);
          }
        }
        function vu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xl()),
              t.forEach(function (t) {
                var r = Os.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  u = l;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (fu = u.stateNode), (du = !1);
                      break e;
                    case 3:
                    case 4:
                      (fu = u.stateNode.containerInfo), (du = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === fu) throw Error(o(160));
                hu(i, l, a), (fu = null), (du = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                Cs(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) mu(t, e), (t = t.sibling);
        }
        function mu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gu(t, e), yu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), au(3, e);
                } catch (g) {
                  Cs(e, e.return, g);
                }
                try {
                  ru(5, e, e.return);
                } catch (g) {
                  Cs(e, e.return, g);
                }
              }
              break;
            case 1:
              gu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if (
                (gu(t, e),
                yu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (g) {
                  Cs(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === i.type &&
                      null != i.name &&
                      G(a, i),
                      be(u, l);
                    var c = be(u, i);
                    for (l = 0; l < s.length; l += 2) {
                      var f = s[l],
                        d = s[l + 1];
                      "style" === f
                        ? ge(a, d)
                        : "dangerouslySetInnerHTML" === f
                          ? fe(a, d)
                          : "children" === f
                            ? de(a, d)
                            : b(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        X(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (g) {
                    Cs(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gu(t, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (g) {
                  Cs(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gu(t, e),
                yu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo);
                } catch (g) {
                  Cs(e, e.return, g);
                }
              break;
            case 4:
            default:
              gu(t, e), yu(e);
              break;
            case 13:
              gu(t, e),
                yu(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Vu = Ge())),
                4 & r && vu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Gl = (c = Gl) || f), gu(t, e), (Gl = c))
                  : gu(t, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Zl = e, f = e.child; null !== f; ) {
                    for (d = Zl = f; null !== Zl; ) {
                      switch (((h = (p = Zl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (g) {
                              Cs(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xu(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zl = h)) : xu(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((u = d.stateNode),
                              (l =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = ve("display", l)));
                      } catch (g) {
                        Cs(e, e.return, g);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (g) {
                        Cs(e, e.return, g);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              gu(t, e), yu(e), 4 & r && vu(e);
            case 21:
          }
        }
        function yu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (lu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cu(e, uu(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  su(e, uu(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              Cs(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bu(e, t, n) {
          (Zl = e), wu(e, t, n);
        }
        function wu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
            var a = Zl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Yl;
              if (!i) {
                var l = a.alternate,
                  u = (null !== l && null !== l.memoizedState) || Gl;
                l = Yl;
                var s = Gl;
                if (((Yl = i), (Gl = u) && !s))
                  for (Zl = a; null !== Zl; )
                    (u = (i = Zl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Su(a)
                        : null !== u
                          ? ((u.return = i), (Zl = u))
                          : Su(a);
                for (; null !== o; ) (Zl = o), wu(o, t, n), (o = o.sibling);
                (Zl = a), (Yl = l), (Gl = s);
              }
              ku(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zl = o))
                : ku(e);
          }
        }
        function ku(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gl || au(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : mo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Ao(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ao(t, l, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Vt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Gl || (512 & t.flags && ou(t));
              } catch (p) {
                Cs(t, t.return, p);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function xu(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function Su(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    au(4, t);
                  } catch (u) {
                    Cs(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Cs(t, a, u);
                    }
                  }
                  var o = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    Cs(t, o, u);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    Cs(t, i, u);
                  }
              }
            } catch (u) {
              Cs(t, t.return, u);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var Eu,
          Cu = Math.ceil,
          Lu = w.ReactCurrentDispatcher,
          Nu = w.ReactCurrentOwner,
          Pu = w.ReactCurrentBatchConfig,
          Ou = 0,
          Ru = null,
          ju = null,
          Tu = 0,
          _u = 0,
          Du = Ea(0),
          Mu = 0,
          zu = null,
          Fu = 0,
          Iu = 0,
          Au = 0,
          Uu = null,
          Bu = null,
          Vu = 0,
          Hu = 1 / 0,
          $u = null,
          Wu = !1,
          Ku = null,
          qu = null,
          Qu = !1,
          Ju = null,
          Yu = 0,
          Gu = 0,
          Xu = null,
          Zu = -1,
          es = 0;
        function ts() {
          return 0 !== (6 & Ou) ? Ge() : -1 !== Zu ? Zu : (Zu = Ge());
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ou) && 0 !== Tu
              ? Tu & -Tu
              : null !== go.transition
                ? (0 === es && (es = vt()), es)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Gu) throw ((Gu = 0), (Xu = null), Error(o(185)));
          mt(e, n, r),
            (0 !== (2 & Ou) && e === Ru) ||
              (e === Ru && (0 === (2 & Ou) && (Iu |= n), 4 === Mu && us(e, Tu)),
              as(e, r),
              1 === n &&
                0 === Ou &&
                0 === (1 & t.mode) &&
                ((Hu = Ge() + 500), Aa && Va()));
        }
        function as(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                u = a[i];
              -1 === u
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
                : u <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Ru ? Tu : 0);
          if (0 === r)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Aa = !0), Ba(e);
                  })(ss.bind(null, e))
                : Ba(ss.bind(null, e)),
                ia(function () {
                  0 === (6 & Ou) && Va();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Rs(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((Zu = -1), (es = 0), 0 !== (6 & Ou))) throw Error(o(327));
          var n = e.callbackNode;
          if (Ss() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ru ? Tu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ms(e, r);
          else {
            t = r;
            var a = Ou;
            Ou |= 2;
            var i = vs();
            for (
              (Ru === e && Tu === t) ||
              (($u = null), (Hu = Ge() + 500), ps(e, t));
              ;

            )
              try {
                bs();
                break;
              } catch (u) {
                hs(e, u);
              }
            xo(),
              (Lu.current = i),
              (Ou = a),
              null !== ju ? (t = 0) : ((Ru = null), (Tu = 0), (t = Mu));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = is(e, a))),
              1 === t)
            )
              throw ((n = zu), ps(e, 0), us(e, r), as(e, Ge()), n);
            if (6 === t) us(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = ms(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = is(e, i))),
                  1 === t))
              )
                throw ((n = zu), ps(e, 0), us(e, r), as(e, Ge()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  xs(e, Bu, $u);
                  break;
                case 3:
                  if (
                    (us(e, r),
                    (130023424 & r) === r && 10 < (t = Vu + 500 - Ge()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xs.bind(null, e, Bu, $u), t);
                    break;
                  }
                  xs(e, Bu, $u);
                  break;
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * Cu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xs.bind(null, e, Bu, $u), r);
                    break;
                  }
                  xs(e, Bu, $u);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return as(e, Ge()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function is(e, t) {
          var n = Uu;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = ms(e, t)) && ((t = Bu), (Bu = n), null !== t && ls(t)),
            e
          );
        }
        function ls(e) {
          null === Bu ? (Bu = e) : Bu.push.apply(Bu, e);
        }
        function us(e, t) {
          for (
            t &= ~Au,
              t &= ~Iu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ss(e) {
          if (0 !== (6 & Ou)) throw Error(o(327));
          Ss();
          var t = dt(e, 0);
          if (0 === (1 & t)) return as(e, Ge()), null;
          var n = ms(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = is(e, r)));
          }
          if (1 === n) throw ((n = zu), ps(e, 0), us(e, t), as(e, Ge()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xs(e, Bu, $u),
            as(e, Ge()),
            null
          );
        }
        function cs(e, t) {
          var n = Ou;
          Ou |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ou = n) && ((Hu = Ge() + 500), Aa && Va());
          }
        }
        function fs(e) {
          null !== Ju && 0 === Ju.tag && 0 === (6 & Ou) && Ss();
          var t = Ou;
          Ou |= 1;
          var n = Pu.transition,
            r = bt;
          try {
            if (((Pu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Pu.transition = n), 0 === (6 & (Ou = t)) && Va();
          }
        }
        function ds() {
          (_u = Du.current), Ca(Du);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== ju))
            for (n = ju.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    _a();
                  break;
                case 3:
                  oi(), Ca(Oa), Ca(Pa), fi();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  Ca(ui);
                  break;
                case 10:
                  So(r.type._context);
                  break;
                case 22:
                case 23:
                  ds();
              }
              n = n.return;
            }
          if (
            ((Ru = e),
            (ju = e = Ds(e.current, null)),
            (Tu = _u = t),
            (Mu = 0),
            (zu = null),
            (Au = Iu = Fu = 0),
            (Bu = Uu = null),
            null !== No)
          ) {
            for (t = 0; t < No.length; t++)
              if (null !== (r = (n = No[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            No = null;
          }
          return e;
        }
        function hs(e, t) {
          for (;;) {
            var n = ju;
            try {
              if ((xo(), (di.current = il), yi)) {
                for (var r = vi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yi = !1;
              }
              if (
                ((hi = 0),
                (mi = gi = vi = null),
                (bi = !1),
                (wi = 0),
                (Nu.current = null),
                null === n || null === n.return)
              ) {
                (Mu = 1), (zu = t), (ju = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Tu),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = ml(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      yl(h, l, u, 0, t),
                      1 & h.mode && gl(i, c, t),
                      (s = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var g = new Set();
                      g.add(s), (t.updateQueue = g);
                    } else v.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gl(i, c, t), gs();
                    break e;
                  }
                  s = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var m = ml(l);
                  if (null !== m) {
                    0 === (65536 & m.flags) && (m.flags |= 256),
                      yl(m, l, u, 0, t),
                      vo(cl(s, u));
                    break e;
                  }
                }
                (i = s = cl(s, u)),
                  4 !== Mu && (Mu = 2),
                  null === Uu ? (Uu = [i]) : Uu.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Fo(i, hl(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === qu || !qu.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Fo(i, vl(i, u, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              ks(n);
            } catch (w) {
              (t = w), ju === n && null !== n && (ju = n = n.return);
              continue;
            }
            break;
          }
        }
        function vs() {
          var e = Lu.current;
          return (Lu.current = il), null === e ? il : e;
        }
        function gs() {
          (0 !== Mu && 3 !== Mu && 2 !== Mu) || (Mu = 4),
            null === Ru ||
              (0 === (268435455 & Fu) && 0 === (268435455 & Iu)) ||
              us(Ru, Tu);
        }
        function ms(e, t) {
          var n = Ou;
          Ou |= 2;
          var r = vs();
          for ((Ru === e && Tu === t) || (($u = null), ps(e, t)); ; )
            try {
              ys();
              break;
            } catch (a) {
              hs(e, a);
            }
          if ((xo(), (Ou = n), (Lu.current = r), null !== ju))
            throw Error(o(261));
          return (Ru = null), (Tu = 0), Mu;
        }
        function ys() {
          for (; null !== ju; ) ws(ju);
        }
        function bs() {
          for (; null !== ju && !Je(); ) ws(ju);
        }
        function ws(e) {
          var t = Eu(e.alternate, e, _u);
          (e.memoizedProps = e.pendingProps),
            null === t ? ks(e) : (ju = t),
            (Nu.current = null);
        }
        function ks(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ql(n, t, _u))) return void (ju = n);
            } else {
              if (null !== (n = Jl(n, t)))
                return (n.flags &= 32767), void (ju = n);
              if (null === e) return (Mu = 6), void (ju = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (ju = t);
            ju = t = e;
          } while (null !== t);
          0 === Mu && (Mu = 5);
        }
        function xs(e, t, n) {
          var r = bt,
            a = Pu.transition;
          try {
            (Pu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Ss();
                } while (null !== Ju);
                if (0 !== (6 & Ou)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Ru && ((ju = Ru = null), (Tu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Qu ||
                    ((Qu = !0),
                    Rs(tt, function () {
                      return Ss(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Pu.transition), (Pu.transition = null);
                  var l = bt;
                  bt = 1;
                  var u = Ou;
                  (Ou |= 4),
                    (Nu.current = null),
                    (function (e, t) {
                      if (((ea = $t), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = l + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = l),
                                    p === i && ++f === r && (s = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          $t = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var g = v.memoizedProps,
                                        m = v.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : mo(t.type, g),
                                          m,
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (k) {
                              Cs(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (v = nu), (nu = !1);
                    })(e, n),
                    mu(n, e),
                    hr(ta),
                    ($t = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bu(n, e, a),
                    Ye(),
                    (Ou = u),
                    (bt = l),
                    (Pu.transition = i);
                } else e.current = n;
                if (
                  (Qu && ((Qu = !1), (Ju = e), (Yu = a)),
                  (i = e.pendingLanes),
                  0 === i && (qu = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  as(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Wu) throw ((Wu = !1), (e = Ku), (Ku = null), e);
                0 !== (1 & Yu) && 0 !== e.tag && Ss(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Xu
                      ? Gu++
                      : ((Gu = 0), (Xu = e))
                    : (Gu = 0),
                  Va();
              })(e, t, n, r);
          } finally {
            (Pu.transition = a), (bt = r);
          }
          return null;
        }
        function Ss() {
          if (null !== Ju) {
            var e = wt(Yu),
              t = Pu.transition,
              n = bt;
            try {
              if (((Pu.transition = null), (bt = 16 > e ? 16 : e), null === Ju))
                var r = !1;
              else {
                if (((e = Ju), (Ju = null), (Yu = 0), 0 !== (6 & Ou)))
                  throw Error(o(331));
                var a = Ou;
                for (Ou |= 4, Zl = e.current; null !== Zl; ) {
                  var i = Zl,
                    l = i.child;
                  if (0 !== (16 & Zl.flags)) {
                    var u = i.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Zl = c; null !== Zl; ) {
                          var f = Zl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Zl = d);
                          else
                            for (; null !== Zl; ) {
                              var p = (f = Zl).sibling,
                                h = f.return;
                              if ((iu(f), f === c)) {
                                Zl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zl = p);
                                break;
                              }
                              Zl = h;
                            }
                        }
                      }
                      var v = i.alternate;
                      if (null !== v) {
                        var g = v.child;
                        if (null !== g) {
                          v.child = null;
                          do {
                            var m = g.sibling;
                            (g.sibling = null), (g = m);
                          } while (null !== g);
                        }
                      }
                      Zl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (i = Zl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Zl = y);
                        break e;
                      }
                      Zl = i.return;
                    }
                }
                var b = e.current;
                for (Zl = b; null !== Zl; ) {
                  var w = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Zl = w);
                  else
                    e: for (l = b; null !== Zl; ) {
                      if (0 !== (2048 & (u = Zl).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(9, u);
                          }
                        } catch (x) {
                          Cs(u, u.return, x);
                        }
                      if (u === l) {
                        Zl = null;
                        break e;
                      }
                      var k = u.sibling;
                      if (null !== k) {
                        (k.return = u.return), (Zl = k);
                        break e;
                      }
                      Zl = u.return;
                    }
                }
                if (
                  ((Ou = a),
                  Va(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Pu.transition = t);
            }
          }
          return !1;
        }
        function Es(e, t, n) {
          (e = Mo(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (mt(e, 1, t), as(e, t));
        }
        function Cs(e, t, n) {
          if (3 === e.tag) Es(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Es(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === qu || !qu.has(r)))
                ) {
                  (t = Mo(t, (e = vl(t, (e = cl(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (mt(t, 1, e), as(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ls(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ru === e &&
              (Tu & n) === n &&
              (4 === Mu ||
              (3 === Mu && (130023424 & Tu) === Tu && 500 > Ge() - Vu)
                ? ps(e, 0)
                : (Au |= n)),
            as(e, t);
        }
        function Ns(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = Ro(e, t)) && (mt(e, t, n), as(e, n));
        }
        function Ps(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ns(e, n);
        }
        function Os(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Ns(e, n);
        }
        function Rs(e, t) {
          return qe(e, t);
        }
        function js(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ts(e, t, n, r) {
          return new js(e, t, n, r);
        }
        function _s(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ds(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ts(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ms(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) _s(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return zs(n.children, a, i, t);
              case E:
                (l = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Ts(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
                );
              case O:
                return (
                  ((e = Ts(13, n, t, a)).elementType = O), (e.lanes = i), e
                );
              case R:
                return (
                  ((e = Ts(19, n, t, a)).elementType = R), (e.lanes = i), e
                );
              case _:
                return Fs(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case L:
                      l = 10;
                      break e;
                    case N:
                      l = 9;
                      break e;
                    case P:
                      l = 11;
                      break e;
                    case j:
                      l = 14;
                      break e;
                    case T:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ts(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function zs(e, t, n, r) {
          return ((e = Ts(7, e, r, t)).lanes = n), e;
        }
        function Fs(e, t, n, r) {
          return (
            ((e = Ts(22, e, r, t)).elementType = _),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Is(e, t, n) {
          return ((e = Ts(6, e, null, t)).lanes = n), e;
        }
        function As(e, t, n) {
          return (
            ((t = Ts(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Us(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bs(e, t, n, r, a, o, i, l, u) {
          return (
            (e = new Us(e, t, n, l, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Ts(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            To(o),
            e
          );
        }
        function Vs(e) {
          if (!e) return Na;
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ta(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ta(n)) return Ma(e, n, t);
          }
          return t;
        }
        function Hs(e, t, n, r, a, o, i, l, u) {
          return (
            ((e = Bs(n, r, !0, e, 0, o, 0, l, u)).context = Vs(null)),
            (n = e.current),
            ((o = Do((r = ts()), (a = ns(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Mo(n, o, a),
            (e.current.lanes = a),
            mt(e, a, r),
            as(e, r),
            e
          );
        }
        function $s(e, t, n, r) {
          var a = t.current,
            o = ts(),
            i = ns(a);
          return (
            (n = Vs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Do(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Mo(a, t, i)) && (rs(e, a, i, o), zo(e, a, i)),
            i
          );
        }
        function Ws(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Ks(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qs(e, t) {
          Ks(e, t), (e = e.alternate) && Ks(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oa.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Rl(t), ho();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Ta(t.type) && za(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        La(yo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (La(ui, 1 & ui.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Il(e, t, n)
                              : (La(ui, 1 & ui.current),
                                null !== (e = Wl(e, t, n)) ? e.sibling : null);
                        La(ui, 1 & ui.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          La(ui, ui.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return Wl(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), ao && 0 !== (1048576 & t.flags) && Za(t, Ka, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              $l(e, t), (e = t.pendingProps);
              var a = ja(t, Pa.current);
              Co(t, n), (a = Ei(null, t, r, e, a, n));
              var i = Ci();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ta(r) ? ((i = !0), za(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    To(t),
                    (a.updater = Vo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Ko(t, r, e, n),
                    (t = Ol(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    kl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  ($l(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return _s(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === j) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = mo(r, e)),
                  a)
                ) {
                  case 0:
                    t = Nl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Pl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, mo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Nl(e, t, r, (a = t.elementType === r ? a : mo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pl(e, t, r, (a = t.elementType === r ? a : mo(r, a)), n)
              );
            case 3:
              e: {
                if ((Rl(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  _o(e, t),
                  Io(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = jl(e, t, r, n, (a = cl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = jl(e, t, r, n, (a = cl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = sa(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Xo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Wl(e, t, n);
                    break e;
                  }
                  kl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && so(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Ll(e, t),
                kl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && so(t), null;
            case 13:
              return Il(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Go(t, null, r, n)) : kl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xl(e, t, r, (a = t.elementType === r ? a : mo(r, a)), n)
              );
            case 7:
              return kl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return kl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  La(yo, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Oa.current) {
                      t = Wl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var u = i.dependencies;
                      if (null !== u) {
                        l = i.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === i.tag) {
                              (s = Do(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (i.lanes |= n),
                              null !== (s = i.alternate) && (s.lanes |= n),
                              Eo(i.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (u = l.alternate) && (u.lanes |= n),
                          Eo(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                kl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Co(t, n),
                (r = r((a = Lo(a)))),
                (t.flags |= 1),
                kl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = mo((r = t.type), t.pendingProps)),
                Sl(e, t, r, (a = mo(r.type, a)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : mo(r, a)),
                $l(e, t),
                (t.tag = 1),
                Ta(r) ? ((e = !0), za(t)) : (e = !1),
                Co(t, n),
                $o(t, r, a),
                Ko(t, r, a, n),
                Ol(null, t, r, !0, e, n)
              );
            case 19:
              return Hl(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Qs =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Js(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          this._internalRoot = e;
        }
        function Gs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zs() {}
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = Ws(i);
                l.call(e);
              };
            }
            $s(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Ws(i);
                    o.call(e);
                  };
                }
                var i = Hs(t, r, e, 0, null, !1, 0, "", Zs);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  fs(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Ws(u);
                  l.call(e);
                };
              }
              var u = Bs(e, 0, !1, null, 0, !1, 0, "", Zs);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                fs(function () {
                  $s(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Ws(i);
        }
        (Ys.prototype.render = Js.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            $s(e, t, null, null);
          }),
          (Ys.prototype.unmount = Js.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fs(function () {
                  $s(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ys.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < _t.length && 0 !== t && t < _t[n].priority;
                n++
              );
              _t.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    as(t, Ge()),
                    0 === (6 & Ou) && ((Hu = Ge() + 500), Va()));
                }
                break;
              case 13:
                fs(function () {
                  var t = Ro(e, 1);
                  if (null !== t) {
                    var n = ts();
                    rs(t, e, 1, n);
                  }
                }),
                  qs(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = Ro(e, 134217728);
              if (null !== t) rs(t, e, 134217728, ts());
              qs(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = Ro(e, t);
              if (null !== n) rs(n, e, t, ts());
              qs(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ka(r);
                      if (!a) throw Error(o(90));
                      q(r), X(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = cs),
          (Oe = fs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, ka, Le, Ne, cs],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gs(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: x,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gs(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Qs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bs(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new Js(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xs(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gs(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = Qs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Hs(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ha] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ys(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xs(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xs(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (fs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xs(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            o = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: o,
            _owner: l.current,
          };
        }
        (t.Fragment = o), (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          g = {};
        function m(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (m.prototype.isReactComponent = {}),
          (m.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (m.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = m.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), v(w, m.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              x.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: S.current,
          };
        }
        function L(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = "" === o ? "." + P(u, 0) : o),
              k(i)
                ? ((a = ""),
                  null != e && (a = e.replace(N, "$&/") + "/"),
                  O(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (L(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (u && u.key === i.key)
                          ? ""
                          : ("" + i.key).replace(N, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), k(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + P((l = e[s]), s);
              u += O(l, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += O((l = l.value), t, a, (c = o + P(l, s++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return u;
        }
        function R(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function j(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var T = { current: null },
          _ = { transition: null },
          D = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: _,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              R(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              R(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!L(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = m),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var a = v({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = S.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                x.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = L),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = _.transition;
            _.transition = {};
            try {
              e();
            } finally {
              _.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React.",
            );
          }),
          (t.useCallback = function (e, t) {
            return T.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return T.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return T.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return T.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return T.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return T.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return T.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return T.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return T.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return T.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return T.current.useRef(e);
          }),
          (t.useState = function (e) {
            return T.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return T.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return T.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                s = l + 1,
                c = e[s];
              if (0 > o(u, n))
                s < a && 0 > o(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[l] = n), (r = l));
              else {
                if (!(s < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          g = !1,
          m = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !v))
            if (null !== r(s)) (v = !0), _(x);
            else {
              var t = r(c);
              null !== t && D(k, t.startTime - e);
            }
        }
        function x(e, n) {
          (v = !1), g && ((g = !1), y(L), (L = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !O()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(s) && a(s),
                  w(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && D(k, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          C = null,
          L = -1,
          N = 5,
          P = -1;
        function O() {
          return !(t.unstable_now() - P < N);
        }
        function R() {
          if (null !== C) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(R);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var j = new MessageChannel(),
            T = j.port2;
          (j.port1.onmessage = R),
            (S = function () {
              T.postMessage(null);
            });
        } else
          S = function () {
            m(R, 0);
          };
        function _(e) {
          (C = e), E || ((E = !0), S());
        }
        function D(e, n) {
          L = m(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), _(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (g ? (y(L), (L = -1)) : (g = !0), D(k, o - i)))
                : ((e.sortIndex = l), n(s, e), v || h || ((v = !0), _(x))),
              e
            );
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      399: function (e) {
        e.exports = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        };
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & a && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach(function (e) {
            i[e] = function () {
              return r[e];
            };
          });
        return (
          (i.default = function () {
            return r;
          }),
          n.d(o, i),
          o
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, []),
      );
    }),
    (n.u = function (e) {
      return (
        "static/js/" +
        e +
        "." +
        {
          470: "71ab8e32",
          539: "a0520338",
          545: "97c9f861",
          660: "c8329f9b",
          787: "b9d66382",
          872: "068887a0",
        }[e] +
        ".chunk.js"
      );
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "spa-portfolio:";
      n.l = function (r, a, o, i) {
        if (e[r]) e[r].push(a);
        else {
          var l, u;
          if (void 0 !== o)
            for (
              var s = document.getElementsByTagName("script"), c = 0;
              c < s.length;
              c++
            ) {
              var f = s[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + o
              ) {
                l = f;
                break;
              }
            }
          l ||
            ((u = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + o),
            (l.src = r)),
            (e[r] = [a]);
          var d = function (t, n) {
              (l.onerror = l.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                a &&
                  a.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: l }),
              12e4,
            );
          (l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            u && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise(function (n, r) {
              a = e[t] = [n, r];
            });
            r.push((a[2] = o));
            var i = n.p + n.u(t),
              l = new Error();
            n.l(
              i,
              function (r) {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = o),
                    (l.request = i),
                    a[1](l);
                }
              },
              "chunk-" + t,
              t,
            );
          }
      };
      var t = function (t, r) {
          var a,
            o,
            i = r[0],
            l = r[1],
            u = r[2],
            s = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (u) u(n);
          }
          for (t && t(r); s < i.length; s++)
            (o = i[s]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkspa_portfolio =
          self.webpackChunkspa_portfolio || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      "use strict";
      var e = n(791),
        t = n.t(e, 2),
        r = n(250),
        a = n(184);
      var o = function () {
        return (0, a.jsx)("header", { children: (0, a.jsx)(Gr, {}) });
      };
      function i(e) {
        if (Array.isArray(e)) return e;
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e, t) {
        if (e) {
          if ("string" === typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? l(e, t)
                : void 0
          );
        }
      }
      function s() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      function c(e, t) {
        return (
          i(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o,
                i,
                l = [],
                u = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          u(e, t) ||
          s()
        );
      }
      function f(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var d = ["title", "titleId"];
      var p = e.forwardRef(function (t, n) {
          var r = t.title,
            a = t.titleId,
            o = f(t, d);
          return e.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: n,
                "aria-labelledby": a,
              },
              o,
            ),
            r ? e.createElement("title", { id: a }, r) : null,
            e.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M6 18L18 6M6 6l12 12",
            }),
          );
        }),
        h = ["title", "titleId"];
      var v,
        g = e.forwardRef(function (t, n) {
          var r = t.title,
            a = t.titleId,
            o = f(t, h);
          return e.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: n,
                "aria-labelledby": a,
              },
              o,
            ),
            r ? e.createElement("title", { id: a }, r) : null,
            e.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
            }),
          );
        });
      function m(e) {
        return (
          (m =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          m(e)
        );
      }
      function y() {
        y = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          l = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function s(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (e) {
          s = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, r) {
          var o = t && t.prototype instanceof b ? t : b,
            i = Object.create(o.prototype),
            l = new T(r || []);
          return a(i, "_invoke", { value: P(e, n, l) }), i;
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = c;
        var d = "suspendedStart",
          p = "suspendedYield",
          h = "executing",
          v = "completed",
          g = {};
        function b() {}
        function w() {}
        function k() {}
        var x = {};
        s(x, i, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          E = S && S(S(_([])));
        E && E !== n && r.call(E, i) && (x = E);
        var C = (k.prototype = b.prototype = Object.create(x));
        function L(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function N(e, t) {
          function n(a, o, i, l) {
            var u = f(e[a], e, o);
            if ("throw" !== u.type) {
              var s = u.arg,
                c = s.value;
              return c && "object" == m(c) && r.call(c, "__await")
                ? t.resolve(c.__await).then(
                    function (e) {
                      n("next", e, i, l);
                    },
                    function (e) {
                      n("throw", e, i, l);
                    },
                  )
                : t.resolve(c).then(
                    function (e) {
                      (s.value = e), i(s);
                    },
                    function (e) {
                      return n("throw", e, i, l);
                    },
                  );
            }
            l(u.arg);
          }
          var o;
          a(this, "_invoke", {
            value: function (e, r) {
              function a() {
                return new t(function (t, a) {
                  n(e, r, t, a);
                });
              }
              return (o = o ? o.then(a, a) : a());
            },
          });
        }
        function P(t, n, r) {
          var a = d;
          return function (o, i) {
            if (a === h) throw new Error("Generator is already running");
            if (a === v) {
              if ("throw" === o) throw i;
              return { value: e, done: !0 };
            }
            for (r.method = o, r.arg = i; ; ) {
              var l = r.delegate;
              if (l) {
                var u = O(l, r);
                if (u) {
                  if (u === g) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (a === d) throw ((a = v), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              a = h;
              var s = f(t, n, r);
              if ("normal" === s.type) {
                if (((a = r.done ? v : p), s.arg === g)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((a = v), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function O(t, n) {
          var r = n.method,
            a = t.iterator[r];
          if (a === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                O(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              g
            );
          var o = f(a, t.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), g
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((n[t.resultName] = i.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                g)
              : i
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function R(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function T(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(R, this),
            this.reset(!0);
        }
        function _(t) {
          if (t || "" === t) {
            var n = t[i];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var a = -1,
                o = function n() {
                  for (; ++a < t.length; )
                    if (r.call(t, a)) return (n.value = t[a]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(m(t) + " is not iterable");
        }
        return (
          (w.prototype = k),
          a(C, "constructor", { value: k, configurable: !0 }),
          a(k, "constructor", { value: w, configurable: !0 }),
          (w.displayName = s(k, u, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === w || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, k)
                : ((e.__proto__ = k), s(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(C)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          L(N.prototype),
          s(N.prototype, l, function () {
            return this;
          }),
          (t.AsyncIterator = N),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new N(c(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          L(C),
          s(C, u, "Generator"),
          s(C, i, function () {
            return this;
          }),
          s(C, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = _),
          (T.prototype = {
            constructor: T,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(j),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function a(r, a) {
                return (
                  (l.type = "throw"),
                  (l.arg = t),
                  (n.next = r),
                  a && ((n.method = "next"), (n.arg = e)),
                  !!a
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  l = i.completion;
                if ("root" === i.tryLoc) return a("end");
                if (i.tryLoc <= this.prev) {
                  var u = r.call(i, "catchLoc"),
                    s = r.call(i, "finallyLoc");
                  if (u && s) {
                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), g)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), j(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    j(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function b(e, t, n, r, a, o, i) {
        try {
          var l = e[o](i),
            u = l.value;
        } catch (s) {
          return void n(s);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function w(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              b(o, r, a, i, l, "next", e);
            }
            function l(e) {
              b(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function k(e) {
        var t = (function (e, t) {
          if ("object" !== m(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== m(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === m(t) ? t : String(t);
      }
      function x(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, k(r.key), r);
        }
      }
      function S(e, t, n) {
        return (
          t && x(e.prototype, t),
          n && x(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function E(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function C(e, t) {
        return (
          (C = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          C(e, t)
        );
      }
      function L(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && C(e, t);
      }
      function N(e) {
        return (
          (N = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          N(e)
        );
      }
      function P() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (er) {
          return !1;
        }
      }
      function O(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function R(e, t) {
        if (t && ("object" === m(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return O(e);
      }
      function j(e) {
        var t = P();
        return function () {
          var n,
            r = N(e);
          if (t) {
            var a = N(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return R(this, n);
        };
      }
      function T(e, t, n) {
        return (
          (t = k(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function _(e, t, n) {
        return (
          (_ = P()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && C(a, n.prototype), a;
              }),
          _.apply(null, arguments)
        );
      }
      function D(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (D = function (e) {
            if (
              null === e ||
              !(function (e) {
                try {
                  return (
                    -1 !== Function.toString.call(e).indexOf("[native code]")
                  );
                } catch (er) {
                  return "function" === typeof e;
                }
              })(e)
            )
              return e;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            function n() {
              return _(e, arguments, N(this).constructor);
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              C(n, e)
            );
          }),
          D(e)
        );
      }
      function M(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function z(e) {
        return i(e) || M(e) || u(e) || s();
      }
      function F(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = u(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var o,
          i = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (l = !0), (o = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function I(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return l(e);
          })(e) ||
          M(e) ||
          u(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function A() {
        return (
          (A = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          A.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(v || (v = {}));
      var U,
        B = "popstate";
      function V(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function H(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (er) {}
        }
      }
      function $(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function W(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          A(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? q(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            },
          )
        );
      }
      function K(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          o = e.hash,
          i = void 0 === o ? "" : o;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
          n
        );
      }
      function q(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function Q(e, t, n, r) {
        void 0 === r && (r = {});
        var a = r,
          o = a.window,
          i = void 0 === o ? document.defaultView : o,
          l = a.v5Compat,
          u = void 0 !== l && l,
          s = i.history,
          c = v.Pop,
          f = null,
          d = p();
        function p() {
          return (s.state || { idx: null }).idx;
        }
        function h() {
          c = v.Pop;
          var e = p(),
            t = null == e ? null : e - d;
          (d = e), f && f({ action: c, location: m.location, delta: t });
        }
        function g(e) {
          var t =
              "null" !== i.location.origin
                ? i.location.origin
                : i.location.href,
            n = "string" === typeof e ? e : K(e);
          return (
            V(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n,
            ),
            new URL(n, t)
          );
        }
        null == d && ((d = 0), s.replaceState(A({}, s.state, { idx: d }), ""));
        var m = {
          get action() {
            return c;
          },
          get location() {
            return e(i, s);
          },
          listen: function (e) {
            if (f)
              throw new Error("A history only accepts one active listener");
            return (
              i.addEventListener(B, h),
              (f = e),
              function () {
                i.removeEventListener(B, h), (f = null);
              }
            );
          },
          createHref: function (e) {
            return t(i, e);
          },
          createURL: g,
          encodeLocation: function (e) {
            var t = g(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            c = v.Push;
            var r = W(m.location, e, t);
            n && n(r, e);
            var a = $(r, (d = p() + 1)),
              o = m.createHref(r);
            try {
              s.pushState(a, "", o);
            } catch (l) {
              if (l instanceof DOMException && "DataCloneError" === l.name)
                throw l;
              i.location.assign(o);
            }
            u && f && f({ action: c, location: m.location, delta: 1 });
          },
          replace: function (e, t) {
            c = v.Replace;
            var r = W(m.location, e, t);
            n && n(r, e);
            var a = $(r, (d = p())),
              o = m.createHref(r);
            s.replaceState(a, "", o),
              u && f && f({ action: c, location: m.location, delta: 0 });
          },
          go: function (e) {
            return s.go(e);
          },
        };
        return m;
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(U || (U = {}));
      var J = new Set([
        "lazy",
        "caseSensitive",
        "path",
        "id",
        "index",
        "children",
      ]);
      function Y(e, t, n, r) {
        return (
          void 0 === n && (n = []),
          void 0 === r && (r = {}),
          e.map(function (e, a) {
            var o = [].concat(I(n), [a]),
              i = "string" === typeof e.id ? e.id : o.join("-");
            if (
              (V(
                !0 !== e.index || !e.children,
                "Cannot specify children on an index route",
              ),
              V(
                !r[i],
                'Found a route id collision on id "' +
                  i +
                  "\".  Route id's must be globally unique within Data Router usages",
              ),
              (function (e) {
                return !0 === e.index;
              })(e))
            ) {
              var l = A({}, e, t(e), { id: i });
              return (r[i] = l), l;
            }
            var u = A({}, e, t(e), { id: i, children: void 0 });
            return (
              (r[i] = u), e.children && (u.children = Y(e.children, t, o, r)), u
            );
          })
        );
      }
      function G(e, t, n) {
        void 0 === n && (n = "/");
        var r = fe(("string" === typeof t ? q(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = X(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                );
          });
        })(a);
        for (var o = null, i = 0; null == o && i < a.length; ++i)
          o = ue(a[i], ce(r));
        return o;
      }
      function X(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var a = function (e, a, o) {
          var i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (V(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          var l = ve([r, i.relativePath]),
            u = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (V(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".',
            ),
            X(e.children, t, u, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: le(l, e.index), routesMeta: u });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                o = F(Z(e.path));
              try {
                for (o.s(); !(r = o.n()).done; ) {
                  var i = r.value;
                  a(e, t, i);
                }
              } catch (l) {
                o.e(l);
              } finally {
                o.f();
              }
            } else a(e, t);
          }),
          t
        );
      }
      function Z(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n = z(t),
          r = n[0],
          a = n.slice(1),
          o = r.endsWith("?"),
          i = r.replace(/\?$/, "");
        if (0 === a.length) return o ? [i, ""] : [i];
        var l = Z(a.join("/")),
          u = [];
        return (
          u.push.apply(
            u,
            I(
              l.map(function (e) {
                return "" === e ? i : [i, e].join("/");
              }),
            ),
          ),
          o && u.push.apply(u, I(l)),
          u.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      var ee = /^:\w+$/,
        te = 3,
        ne = 2,
        re = 1,
        ae = 10,
        oe = -2,
        ie = function (e) {
          return "*" === e;
        };
      function le(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(ie) && (r += oe),
          t && (r += ne),
          n
            .filter(function (e) {
              return !ie(e);
            })
            .reduce(function (e, t) {
              return e + (ee.test(t) ? te : "" === t ? re : ae);
            }, r)
        );
      }
      function ue(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", o = [], i = 0;
          i < n.length;
          ++i
        ) {
          var l = n[i],
            u = i === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = se(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
              s,
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = l.route;
          o.push({
            params: r,
            pathname: ve([a, c.pathname]),
            pathnameBase: ge(ve([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = ve([a, c.pathnameBase]));
        }
        return o;
      }
      function se(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            H(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".',
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)(\?)?/g, function (e, t, n) {
                    return (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    );
                  });
            e.endsWith("*")
              ? (r.push({ paramName: "*" }),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
                ? (a += "\\/*$")
                : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          r = c(n, 2),
          a = r[0],
          o = r[1],
          i = t.match(a);
        if (!i) return null;
        var l = i[0],
          u = l.replace(/(.)\/+$/, "$1"),
          s = i.slice(1);
        return {
          params: o.reduce(function (e, t, n) {
            var r = t.paramName,
              a = t.isOptional;
            if ("*" === r) {
              var o = s[n] || "";
              u = l.slice(0, l.length - o.length).replace(/(.)\/+$/, "$1");
            }
            var i = s[n];
            return (
              (e[r] =
                a && !i
                  ? void 0
                  : (function (e, t) {
                      try {
                        return decodeURIComponent(e);
                      } catch (n) {
                        return (
                          H(
                            !1,
                            'The value for the URL param "' +
                              t +
                              '" will not be decoded because the string "' +
                              e +
                              '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                              n +
                              ").",
                          ),
                          e
                        );
                      }
                    })(i || "", r)),
              e
            );
          }, {}),
          pathname: l,
          pathnameBase: u,
          pattern: e,
        };
      }
      function ce(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            H(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ").",
            ),
            e
          );
        }
      }
      function fe(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function de(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function pe(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function he(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = q(e))
            : (V(
                !(a = A({}, e)).pathname || !a.pathname.includes("?"),
                de("?", "pathname", "search", a),
              ),
              V(
                !a.pathname || !a.pathname.includes("#"),
                de("#", "pathname", "hash", a),
              ),
              V(
                !a.search || !a.search.includes("#"),
                de("#", "search", "hash", a),
              ));
        var o,
          i = "" === e || "" === a.pathname,
          l = i ? "/" : a.pathname;
        if (r || null == l) o = n;
        else {
          var u = t.length - 1;
          if (l.startsWith("..")) {
            for (var s = l.split("/"); ".." === s[0]; ) s.shift(), (u -= 1);
            a.pathname = s.join("/");
          }
          o = u >= 0 ? t[u] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? q(e) : e,
              r = n.pathname,
              a = n.search,
              o = void 0 === a ? "" : a,
              i = n.hash,
              l = void 0 === i ? "" : i,
              u = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: u, search: me(o), hash: ye(l) };
          })(a, o),
          f = l && "/" !== l && l.endsWith("/"),
          d = (i || "." === l) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var ve = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        ge = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        me = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        ye = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        be = (function (e) {
          L(n, e);
          var t = j(n);
          function n() {
            return E(this, n), t.apply(this, arguments);
          }
          return S(n);
        })(D(Error));
      var we = S(function e(t, n, r, a) {
        E(this, e),
          void 0 === a && (a = !1),
          (this.status = t),
          (this.statusText = n || ""),
          (this.internal = a),
          r instanceof Error
            ? ((this.data = r.toString()), (this.error = r))
            : (this.data = r);
      });
      function ke(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      var xe = ["post", "put", "patch", "delete"],
        Se = new Set(xe),
        Ee = ["get"].concat(xe),
        Ce = new Set(Ee),
        Le = new Set([301, 302, 303, 307, 308]),
        Ne = new Set([307, 308]),
        Pe = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        Oe = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        Re = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0,
        },
        je = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Te = function (e) {
          return { hasErrorBoundary: Boolean(e.hasErrorBoundary) };
        },
        _e = "remix-router-transitions";
      function De(e) {
        var t,
          n = e.window
            ? e.window
            : "undefined" !== typeof window
              ? window
              : void 0,
          r =
            "undefined" !== typeof n &&
            "undefined" !== typeof n.document &&
            "undefined" !== typeof n.document.createElement,
          a = !r;
        if (
          (V(
            e.routes.length > 0,
            "You must provide a non-empty routes array to createRouter",
          ),
          e.mapRouteProperties)
        )
          t = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
          var o = e.detectErrorBoundary;
          t = function (e) {
            return { hasErrorBoundary: o(e) };
          };
        } else t = Te;
        var i,
          l = {},
          u = Y(e.routes, t, void 0, l),
          s = e.basename || "/",
          f = A(
            {
              v7_fetcherPersist: !1,
              v7_normalizeFormMethod: !1,
              v7_prependBasename: !1,
            },
            e.future,
          ),
          d = null,
          p = new Set(),
          h = null,
          g = null,
          m = null,
          b = null != e.hydrationData,
          k = G(u, e.history.location, s),
          x = null;
        if (null == k) {
          var S = Ze(404, { pathname: e.history.location.pathname }),
            E = Xe(u);
          (k = E.matches), (x = T({}, E.route.id, S));
        }
        var C,
          L,
          N =
            !k.some(function (e) {
              return e.route.lazy;
            }) &&
            (!k.some(function (e) {
              return e.route.loader;
            }) ||
              null != e.hydrationData),
          P = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: k,
            initialized: N,
            navigation: Pe,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || x,
            fetchers: new Map(),
            blockers: new Map(),
          },
          O = v.Pop,
          R = !1,
          j = !1,
          _ = new Map(),
          D = null,
          M = !1,
          z = !1,
          B = [],
          $ = [],
          K = new Map(),
          q = 0,
          Q = -1,
          J = new Map(),
          X = new Set(),
          Z = new Map(),
          ee = new Map(),
          te = new Set(),
          ne = new Map(),
          re = new Map(),
          ae = !1;
        function oe(e, t) {
          P = A({}, P, e);
          var n = [],
            r = [];
          f.v7_fetcherPersist &&
            P.fetchers.forEach(function (e, t) {
              "idle" === e.state && (te.has(t) ? r.push(t) : n.push(t));
            }),
            p.forEach(function (e) {
              return e(P, {
                deletedFetchers: r,
                unstable_viewTransitionOpts: t,
              });
            }),
            f.v7_fetcherPersist &&
              (n.forEach(function (e) {
                return P.fetchers.delete(e);
              }),
              r.forEach(function (e) {
                return Ce(e);
              }));
        }
        function ie(t, n) {
          var r,
            a,
            o,
            l =
              null != P.actionData &&
              null != P.navigation.formMethod &&
              st(P.navigation.formMethod) &&
              "loading" === P.navigation.state &&
              !0 !== (null == (r = t.state) ? void 0 : r._isRedirect);
          o = n.actionData
            ? Object.keys(n.actionData).length > 0
              ? n.actionData
              : null
            : l
              ? P.actionData
              : null;
          var s = n.loaderData
              ? Ye(P.loaderData, n.loaderData, n.matches || [], n.errors)
              : P.loaderData,
            c = P.blockers;
          c.size > 0 &&
            (c = new Map(c)).forEach(function (e, t) {
              return c.set(t, Re);
            });
          var f,
            d =
              !0 === R ||
              (null != P.navigation.formMethod &&
                st(P.navigation.formMethod) &&
                !0 !== (null == (a = t.state) ? void 0 : a._isRedirect));
          if (
            (i && ((u = i), (i = void 0)),
            M ||
              O === v.Pop ||
              (O === v.Push
                ? e.history.push(t, t.state)
                : O === v.Replace && e.history.replace(t, t.state)),
            O === v.Pop)
          ) {
            var p = _.get(P.location.pathname);
            p && p.has(t.pathname)
              ? (f = { currentLocation: P.location, nextLocation: t })
              : _.has(t.pathname) &&
                (f = { currentLocation: t, nextLocation: P.location });
          } else if (j) {
            var h = _.get(P.location.pathname);
            h
              ? h.add(t.pathname)
              : ((h = new Set([t.pathname])), _.set(P.location.pathname, h)),
              (f = { currentLocation: P.location, nextLocation: t });
          }
          oe(
            A({}, n, {
              actionData: o,
              loaderData: s,
              historyAction: O,
              location: t,
              initialized: !0,
              navigation: Pe,
              revalidation: "idle",
              restoreScrollPosition: Qe(t, n.matches || P.matches),
              preventScrollReset: d,
              blockers: c,
            }),
            f,
          ),
            (O = v.Pop),
            (R = !1),
            (j = !1),
            (M = !1),
            (z = !1),
            (B = []),
            ($ = []);
        }
        function le(e, t) {
          return ue.apply(this, arguments);
        }
        function ue() {
          return (
            (ue = w(
              y().mark(function t(n, r) {
                var a, o, i, l, u, c, d, p, h, g, m;
                return y().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if ("number" !== typeof n) {
                          t.next = 3;
                          break;
                        }
                        return e.history.go(n), t.abrupt("return");
                      case 3:
                        if (
                          ((a = Me(
                            P.location,
                            P.matches,
                            s,
                            f.v7_prependBasename,
                            n,
                            null == r ? void 0 : r.fromRouteId,
                            null == r ? void 0 : r.relative,
                          )),
                          (o = ze(f.v7_normalizeFormMethod, !1, a, r)),
                          (i = o.path),
                          (l = o.submission),
                          (u = o.error),
                          (c = P.location),
                          (d = A(
                            {},
                            (d = W(P.location, i, r && r.state)),
                            e.history.encodeLocation(d),
                          )),
                          (p = r && null != r.replace ? r.replace : void 0),
                          (h = v.Push),
                          !0 === p
                            ? (h = v.Replace)
                            : !1 === p ||
                              (null != l &&
                                st(l.formMethod) &&
                                l.formAction ===
                                  P.location.pathname + P.location.search &&
                                (h = v.Replace)),
                          (g =
                            r && "preventScrollReset" in r
                              ? !0 === r.preventScrollReset
                              : void 0),
                          !(m = Ve({
                            currentLocation: c,
                            nextLocation: d,
                            historyAction: h,
                          })))
                        ) {
                          t.next = 16;
                          break;
                        }
                        return (
                          Be(m, {
                            state: "blocked",
                            location: d,
                            proceed: function () {
                              Be(m, {
                                state: "proceeding",
                                proceed: void 0,
                                reset: void 0,
                                location: d,
                              }),
                                le(n, r);
                            },
                            reset: function () {
                              var e = new Map(P.blockers);
                              e.set(m, Re), oe({ blockers: e });
                            },
                          }),
                          t.abrupt("return")
                        );
                      case 16:
                        return (
                          (t.next = 18),
                          se(h, d, {
                            submission: l,
                            pendingError: u,
                            preventScrollReset: g,
                            replace: r && r.replace,
                            enableViewTransition:
                              r && r.unstable_viewTransition,
                          })
                        );
                      case 18:
                        return t.abrupt("return", t.sent);
                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            ue.apply(this, arguments)
          );
        }
        function se(e, t, n) {
          return ce.apply(this, arguments);
        }
        function ce() {
          return (
            (ce = w(
              y().mark(function t(n, r, a) {
                var o, l, c, f, d, p, h, v, g, m, b, w, k, x, S;
                return y().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          (L && L.abort(),
                          (L = null),
                          (O = n),
                          (M = !0 === (a && a.startUninterruptedRevalidation)),
                          qe(P.location, P.matches),
                          (R = !0 === (a && a.preventScrollReset)),
                          (j = !0 === (a && a.enableViewTransition)),
                          (o = i || u),
                          (l = a && a.overrideNavigation),
                          (c = G(o, r, s)))
                        ) {
                          t.next = 16;
                          break;
                        }
                        return (
                          (f = Ze(404, { pathname: r.pathname })),
                          (d = Xe(o)),
                          (p = d.matches),
                          (h = d.route),
                          $e(),
                          ie(r, {
                            matches: p,
                            loaderData: {},
                            errors: T({}, h.id, f),
                          }),
                          t.abrupt("return")
                        );
                      case 16:
                        if (
                          !P.initialized ||
                          z ||
                          !nt(P.location, r) ||
                          (a && a.submission && st(a.submission.formMethod))
                        ) {
                          t.next = 19;
                          break;
                        }
                        return ie(r, { matches: c }), t.abrupt("return");
                      case 19:
                        if (
                          ((L = new AbortController()),
                          (v = We(e.history, r, L.signal, a && a.submission)),
                          !a || !a.pendingError)
                        ) {
                          t.next = 25;
                          break;
                        }
                        (m = T({}, Ge(c).route.id, a.pendingError)),
                          (t.next = 35);
                        break;
                      case 25:
                        if (
                          !(a && a.submission && st(a.submission.formMethod))
                        ) {
                          t.next = 35;
                          break;
                        }
                        return (
                          (t.next = 28),
                          de(v, r, a.submission, c, { replace: a.replace })
                        );
                      case 28:
                        if (!(b = t.sent).shortCircuited) {
                          t.next = 31;
                          break;
                        }
                        return t.abrupt("return");
                      case 31:
                        (g = b.pendingActionData),
                          (m = b.pendingActionError),
                          (l = mt(r, a.submission)),
                          (v = new Request(v.url, { signal: v.signal }));
                      case 35:
                        return (
                          (t.next = 37),
                          he(
                            v,
                            r,
                            c,
                            l,
                            a && a.submission,
                            a && a.fetcherSubmission,
                            a && a.replace,
                            g,
                            m,
                          )
                        );
                      case 37:
                        if (
                          ((w = t.sent),
                          (k = w.shortCircuited),
                          (x = w.loaderData),
                          (S = w.errors),
                          !k)
                        ) {
                          t.next = 43;
                          break;
                        }
                        return t.abrupt("return");
                      case 43:
                        (L = null),
                          ie(
                            r,
                            A({ matches: c }, g ? { actionData: g } : {}, {
                              loaderData: x,
                              errors: S,
                            }),
                          );
                      case 45:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            ce.apply(this, arguments)
          );
        }
        function de(e, t, n, r, a) {
          return pe.apply(this, arguments);
        }
        function pe() {
          return (
            (pe = w(
              y().mark(function e(n, r, a, o, i) {
                var u, c, f, d;
                return y().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (void 0 === i && (i = {}),
                          Se(),
                          oe({ navigation: yt(r, a) }),
                          (c = vt(o, r)).route.action || c.route.lazy)
                        ) {
                          e.next = 9;
                          break;
                        }
                        (u = {
                          type: U.error,
                          error: Ze(405, {
                            method: n.method,
                            pathname: r.pathname,
                            routeId: c.route.id,
                          }),
                        }),
                          (e.next = 14);
                        break;
                      case 9:
                        return (e.next = 11), He("action", n, c, o, l, t, s);
                      case 11:
                        if (((u = e.sent), !n.signal.aborted)) {
                          e.next = 14;
                          break;
                        }
                        return e.abrupt("return", { shortCircuited: !0 });
                      case 14:
                        if (!ot(u)) {
                          e.next = 19;
                          break;
                        }
                        return (
                          (f =
                            i && null != i.replace
                              ? i.replace
                              : u.location ===
                                P.location.pathname + P.location.search),
                          (e.next = 18),
                          be(P, u, { submission: a, replace: f })
                        );
                      case 18:
                        return e.abrupt("return", { shortCircuited: !0 });
                      case 19:
                        if (!at(u)) {
                          e.next = 23;
                          break;
                        }
                        return (
                          (d = Ge(o, c.route.id)),
                          !0 !== (i && i.replace) && (O = v.Push),
                          e.abrupt("return", {
                            pendingActionData: {},
                            pendingActionError: T({}, d.route.id, u.error),
                          })
                        );
                      case 23:
                        if (!rt(u)) {
                          e.next = 25;
                          break;
                        }
                        throw Ze(400, { type: "defer-action" });
                      case 25:
                        return e.abrupt("return", {
                          pendingActionData: T({}, c.route.id, u.data),
                        });
                      case 26:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            pe.apply(this, arguments)
          );
        }
        function he(e, t, n, r, a, o, i, l, u) {
          return ve.apply(this, arguments);
        }
        function ve() {
          return (
            (ve = w(
              y().mark(function t(n, r, a, o, l, f, d, p, h) {
                var v,
                  g,
                  m,
                  b,
                  w,
                  k,
                  x,
                  S,
                  E,
                  C,
                  N,
                  O,
                  R,
                  j,
                  T,
                  _,
                  D,
                  F,
                  I,
                  U,
                  V,
                  H;
                return y().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((v = o || mt(r, l)),
                          (g = l || f || gt(v)),
                          (m = i || u),
                          (b = Ie(
                            e.history,
                            P,
                            a,
                            g,
                            r,
                            z,
                            B,
                            $,
                            Z,
                            X,
                            m,
                            s,
                            p,
                            h,
                          )),
                          (w = c(b, 2)),
                          (k = w[0]),
                          (x = w[1]),
                          $e(function (e) {
                            return (
                              !(
                                a &&
                                a.some(function (t) {
                                  return t.route.id === e;
                                })
                              ) ||
                              (k &&
                                k.some(function (t) {
                                  return t.route.id === e;
                                }))
                            );
                          }),
                          (Q = ++q),
                          0 !== k.length || 0 !== x.length)
                        ) {
                          t.next = 10;
                          break;
                        }
                        return (
                          (S = Fe()),
                          ie(
                            r,
                            A(
                              { matches: a, loaderData: {}, errors: h || null },
                              p ? { actionData: p } : {},
                              S ? { fetchers: new Map(P.fetchers) } : {},
                            ),
                          ),
                          t.abrupt("return", { shortCircuited: !0 })
                        );
                      case 10:
                        return (
                          M ||
                            (x.forEach(function (e) {
                              var t = P.fetchers.get(e.key),
                                n = bt(void 0, t ? t.data : void 0);
                              P.fetchers.set(e.key, n);
                            }),
                            (E = p || P.actionData),
                            oe(
                              A(
                                { navigation: v },
                                E
                                  ? 0 === Object.keys(E).length
                                    ? { actionData: null }
                                    : { actionData: E }
                                  : {},
                                x.length > 0
                                  ? { fetchers: new Map(P.fetchers) }
                                  : {},
                              ),
                            )),
                          x.forEach(function (e) {
                            K.has(e.key) && Le(e.key),
                              e.controller && K.set(e.key, e.controller);
                          }),
                          (C = function () {
                            return x.forEach(function (e) {
                              return Le(e.key);
                            });
                          }),
                          L && L.signal.addEventListener("abort", C),
                          (t.next = 16),
                          ke(P.matches, a, k, x, n)
                        );
                      case 16:
                        if (
                          ((N = t.sent),
                          (O = N.results),
                          (R = N.loaderResults),
                          (j = N.fetcherResults),
                          !n.signal.aborted)
                        ) {
                          t.next = 22;
                          break;
                        }
                        return t.abrupt("return", { shortCircuited: !0 });
                      case 22:
                        if (
                          (L && L.signal.removeEventListener("abort", C),
                          x.forEach(function (e) {
                            return K.delete(e.key);
                          }),
                          !(T = et(O)))
                        ) {
                          t.next = 30;
                          break;
                        }
                        return (
                          T.idx >= k.length &&
                            ((_ = x[T.idx - k.length].key), X.add(_)),
                          (t.next = 29),
                          be(P, T.result, { replace: d })
                        );
                      case 29:
                        return t.abrupt("return", { shortCircuited: !0 });
                      case 30:
                        return (
                          (D = Je(P, a, k, R, h, x, j, ne)),
                          (F = D.loaderData),
                          (I = D.errors),
                          ne.forEach(function (e, t) {
                            e.subscribe(function (n) {
                              (n || e.done) && ne.delete(t);
                            });
                          }),
                          (U = Fe()),
                          (V = Ae(Q)),
                          (H = U || V || x.length > 0),
                          t.abrupt(
                            "return",
                            A(
                              { loaderData: F, errors: I },
                              H ? { fetchers: new Map(P.fetchers) } : {},
                            ),
                          )
                        );
                      case 36:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            ve.apply(this, arguments)
          );
        }
        function ge(e) {
          return (
            f.v7_fetcherPersist &&
              (ee.set(e, (ee.get(e) || 0) + 1), te.has(e) && te.delete(e)),
            P.fetchers.get(e) || Oe
          );
        }
        function me() {
          return (
            (me = w(
              y().mark(function n(r, a, o, f, d, p) {
                var h,
                  v,
                  g,
                  m,
                  b,
                  w,
                  k,
                  x,
                  S,
                  E,
                  C,
                  N,
                  R,
                  j,
                  _,
                  D,
                  M,
                  F,
                  I,
                  A,
                  U,
                  H,
                  W,
                  Y,
                  ee,
                  re,
                  ae,
                  le,
                  ue,
                  se;
                return y().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          (Se(), Z.delete(r), f.route.action || f.route.lazy)
                        ) {
                          n.next = 6;
                          break;
                        }
                        return (
                          (h = Ze(405, {
                            method: p.formMethod,
                            pathname: o,
                            routeId: a,
                          })),
                          Ee(r, a, h),
                          n.abrupt("return")
                        );
                      case 6:
                        return (
                          (v = P.fetchers.get(r)),
                          (g = wt(p, v)),
                          P.fetchers.set(r, g),
                          oe({ fetchers: new Map(P.fetchers) }),
                          (m = new AbortController()),
                          (b = We(e.history, o, m.signal, p)),
                          K.set(r, m),
                          (w = q),
                          (n.next = 16),
                          He("action", b, f, d, l, t, s)
                        );
                      case 16:
                        if (((k = n.sent), !b.signal.aborted)) {
                          n.next = 20;
                          break;
                        }
                        return (
                          K.get(r) === m && K.delete(r), n.abrupt("return")
                        );
                      case 20:
                        if (!te.has(r)) {
                          n.next = 24;
                          break;
                        }
                        return (
                          P.fetchers.set(r, kt(void 0)),
                          oe({ fetchers: new Map(P.fetchers) }),
                          n.abrupt("return")
                        );
                      case 24:
                        if (!ot(k)) {
                          n.next = 38;
                          break;
                        }
                        if ((K.delete(r), !(Q > w))) {
                          n.next = 33;
                          break;
                        }
                        return (
                          (x = kt(void 0)),
                          P.fetchers.set(r, x),
                          oe({ fetchers: new Map(P.fetchers) }),
                          n.abrupt("return")
                        );
                      case 33:
                        return (
                          X.add(r),
                          (S = bt(p)),
                          P.fetchers.set(r, S),
                          oe({ fetchers: new Map(P.fetchers) }),
                          n.abrupt("return", be(P, k, { fetcherSubmission: p }))
                        );
                      case 38:
                        if (!at(k)) {
                          n.next = 41;
                          break;
                        }
                        return Ee(r, a, k.error), n.abrupt("return");
                      case 41:
                        if (!rt(k)) {
                          n.next = 43;
                          break;
                        }
                        throw Ze(400, { type: "defer-action" });
                      case 43:
                        return (
                          (E = P.navigation.location || P.location),
                          (C = We(e.history, E, m.signal)),
                          (N = i || u),
                          V(
                            (R =
                              "idle" !== P.navigation.state
                                ? G(N, P.navigation.location, s)
                                : P.matches),
                            "Didn't find any matches after fetcher action",
                          ),
                          (j = ++q),
                          J.set(r, j),
                          (_ = bt(p, k.data)),
                          P.fetchers.set(r, _),
                          (D = Ie(
                            e.history,
                            P,
                            R,
                            p,
                            E,
                            z,
                            B,
                            $,
                            Z,
                            X,
                            N,
                            s,
                            T({}, f.route.id, k.data),
                            void 0,
                          )),
                          (M = c(D, 2)),
                          (F = M[0]),
                          (I = M[1])
                            .filter(function (e) {
                              return e.key !== r;
                            })
                            .forEach(function (e) {
                              var t = e.key,
                                n = P.fetchers.get(t),
                                r = bt(void 0, n ? n.data : void 0);
                              P.fetchers.set(t, r),
                                K.has(t) && Le(t),
                                e.controller && K.set(t, e.controller);
                            }),
                          oe({ fetchers: new Map(P.fetchers) }),
                          (A = function () {
                            return I.forEach(function (e) {
                              return Le(e.key);
                            });
                          }),
                          m.signal.addEventListener("abort", A),
                          (n.next = 59),
                          ke(P.matches, R, F, I, C)
                        );
                      case 59:
                        if (
                          ((U = n.sent),
                          (H = U.results),
                          (W = U.loaderResults),
                          (Y = U.fetcherResults),
                          !m.signal.aborted)
                        ) {
                          n.next = 65;
                          break;
                        }
                        return n.abrupt("return");
                      case 65:
                        if (
                          (m.signal.removeEventListener("abort", A),
                          J.delete(r),
                          K.delete(r),
                          I.forEach(function (e) {
                            return K.delete(e.key);
                          }),
                          !(ee = et(H)))
                        ) {
                          n.next = 73;
                          break;
                        }
                        return (
                          ee.idx >= F.length &&
                            ((re = I[ee.idx - F.length].key), X.add(re)),
                          n.abrupt("return", be(P, ee.result))
                        );
                      case 73:
                        (ae = Je(P, P.matches, F, W, void 0, I, Y, ne)),
                          (le = ae.loaderData),
                          (ue = ae.errors),
                          P.fetchers.has(r) &&
                            ((se = kt(k.data)), P.fetchers.set(r, se)),
                          Ae(j),
                          "loading" === P.navigation.state && j > Q
                            ? (V(O, "Expected pending action"),
                              L && L.abort(),
                              ie(P.navigation.location, {
                                matches: R,
                                loaderData: le,
                                errors: ue,
                                fetchers: new Map(P.fetchers),
                              }))
                            : (oe({
                                errors: ue,
                                loaderData: Ye(P.loaderData, le, R, ue),
                                fetchers: new Map(P.fetchers),
                              }),
                              (z = !1));
                      case 77:
                      case "end":
                        return n.stop();
                    }
                }, n);
              }),
            )),
            me.apply(this, arguments)
          );
        }
        function ye() {
          return (
            (ye = w(
              y().mark(function n(r, a, o, i, u, c) {
                var f, d, p, h, v, g, m, b;
                return y().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (f = P.fetchers.get(r)),
                          (d = bt(c, f ? f.data : void 0)),
                          P.fetchers.set(r, d),
                          oe({ fetchers: new Map(P.fetchers) }),
                          (p = new AbortController()),
                          (h = We(e.history, o, p.signal)),
                          K.set(r, p),
                          (v = q),
                          (n.next = 10),
                          He("loader", h, i, u, l, t, s)
                        );
                      case 10:
                        if (!rt((g = n.sent))) {
                          n.next = 18;
                          break;
                        }
                        return (n.next = 14), dt(g, h.signal, !0);
                      case 14:
                        if (((n.t0 = n.sent), n.t0)) {
                          n.next = 17;
                          break;
                        }
                        n.t0 = g;
                      case 17:
                        g = n.t0;
                      case 18:
                        if (
                          (K.get(r) === p && K.delete(r), !h.signal.aborted)
                        ) {
                          n.next = 21;
                          break;
                        }
                        return n.abrupt("return");
                      case 21:
                        if (!te.has(r)) {
                          n.next = 25;
                          break;
                        }
                        return (
                          P.fetchers.set(r, kt(void 0)),
                          oe({ fetchers: new Map(P.fetchers) }),
                          n.abrupt("return")
                        );
                      case 25:
                        if (!ot(g)) {
                          n.next = 37;
                          break;
                        }
                        if (!(Q > v)) {
                          n.next = 33;
                          break;
                        }
                        return (
                          (m = kt(void 0)),
                          P.fetchers.set(r, m),
                          oe({ fetchers: new Map(P.fetchers) }),
                          n.abrupt("return")
                        );
                      case 33:
                        return X.add(r), (n.next = 36), be(P, g);
                      case 36:
                        return n.abrupt("return");
                      case 37:
                        if (!at(g)) {
                          n.next = 40;
                          break;
                        }
                        return Ee(r, a, g.error), n.abrupt("return");
                      case 40:
                        V(!rt(g), "Unhandled fetcher deferred data"),
                          (b = kt(g.data)),
                          P.fetchers.set(r, b),
                          oe({ fetchers: new Map(P.fetchers) });
                      case 44:
                      case "end":
                        return n.stop();
                    }
                }, n);
              }),
            )),
            ye.apply(this, arguments)
          );
        }
        function be(e, t, n) {
          return we.apply(this, arguments);
        }
        function we() {
          return (
            (we = w(
              y().mark(function t(a, o, i) {
                var l, u, c, f, d, p, h, g, m, b, w, k, x, S;
                return y().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((u = (l = void 0 === i ? {} : i).submission),
                          (c = l.fetcherSubmission),
                          (f = l.replace),
                          o.revalidate && (z = !0),
                          V(
                            (d = W(a.location, o.location, {
                              _isRedirect: !0,
                            })),
                            "Expected a location on the redirect navigation",
                          ),
                          !r)
                        ) {
                          t.next = 10;
                          break;
                        }
                        if (
                          ((p = !1),
                          o.reloadDocument
                            ? (p = !0)
                            : je.test(o.location) &&
                              ((h = e.history.createURL(o.location)),
                              (p =
                                h.origin !== n.location.origin ||
                                null == fe(h.pathname, s))),
                          !p)
                        ) {
                          t.next = 10;
                          break;
                        }
                        return (
                          f
                            ? n.location.replace(o.location)
                            : n.location.assign(o.location),
                          t.abrupt("return")
                        );
                      case 10:
                        if (
                          ((L = null),
                          (g = !0 === f ? v.Replace : v.Push),
                          (m = a.navigation),
                          (b = m.formMethod),
                          (w = m.formAction),
                          (k = m.formEncType),
                          !u && !c && b && w && k && (u = gt(a.navigation)),
                          (x = u || c),
                          !(Ne.has(o.status) && x && st(x.formMethod)))
                        ) {
                          t.next = 20;
                          break;
                        }
                        return (
                          (t.next = 18),
                          se(g, d, {
                            submission: A({}, x, { formAction: o.location }),
                            preventScrollReset: R,
                          })
                        );
                      case 18:
                        t.next = 23;
                        break;
                      case 20:
                        return (
                          (S = mt(d, u)),
                          (t.next = 23),
                          se(g, d, {
                            overrideNavigation: S,
                            fetcherSubmission: c,
                            preventScrollReset: R,
                          })
                        );
                      case 23:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            we.apply(this, arguments)
          );
        }
        function ke(e, t, n, r, a) {
          return xe.apply(this, arguments);
        }
        function xe() {
          return (
            (xe = w(
              y().mark(function n(r, a, o, i, u) {
                var c, f, d;
                return y().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          Promise.all(
                            [].concat(
                              I(
                                o.map(function (e) {
                                  return He("loader", u, e, a, l, t, s);
                                }),
                              ),
                              I(
                                i.map(function (n) {
                                  return n.matches && n.match && n.controller
                                    ? He(
                                        "loader",
                                        We(
                                          e.history,
                                          n.path,
                                          n.controller.signal,
                                        ),
                                        n.match,
                                        n.matches,
                                        l,
                                        t,
                                        s,
                                      )
                                    : {
                                        type: U.error,
                                        error: Ze(404, { pathname: n.path }),
                                      };
                                }),
                              ),
                            ),
                          )
                        );
                      case 2:
                        return (
                          (c = n.sent),
                          (f = c.slice(0, o.length)),
                          (d = c.slice(o.length)),
                          (n.next = 7),
                          Promise.all([
                            ct(
                              r,
                              o,
                              f,
                              f.map(function () {
                                return u.signal;
                              }),
                              !1,
                              P.loaderData,
                            ),
                            ct(
                              r,
                              i.map(function (e) {
                                return e.match;
                              }),
                              d,
                              i.map(function (e) {
                                return e.controller
                                  ? e.controller.signal
                                  : null;
                              }),
                              !0,
                            ),
                          ])
                        );
                      case 7:
                        return n.abrupt("return", {
                          results: c,
                          loaderResults: f,
                          fetcherResults: d,
                        });
                      case 8:
                      case "end":
                        return n.stop();
                    }
                }, n);
              }),
            )),
            xe.apply(this, arguments)
          );
        }
        function Se() {
          var e;
          (z = !0),
            (e = B).push.apply(e, I($e())),
            Z.forEach(function (e, t) {
              K.has(t) && ($.push(t), Le(t));
            });
        }
        function Ee(e, t, n) {
          var r = Ge(P.matches, t);
          Ce(e),
            oe({ errors: T({}, r.route.id, n), fetchers: new Map(P.fetchers) });
        }
        function Ce(e) {
          var t = P.fetchers.get(e);
          !K.has(e) || (t && "loading" === t.state && J.has(e)) || Le(e),
            Z.delete(e),
            J.delete(e),
            X.delete(e),
            te.delete(e),
            P.fetchers.delete(e);
        }
        function Le(e) {
          var t = K.get(e);
          V(t, "Expected fetch controller: " + e), t.abort(), K.delete(e);
        }
        function De(e) {
          var t,
            n = F(e);
          try {
            for (n.s(); !(t = n.n()).done; ) {
              var r = t.value,
                a = kt(ge(r).data);
              P.fetchers.set(r, a);
            }
          } catch (o) {
            n.e(o);
          } finally {
            n.f();
          }
        }
        function Fe() {
          var e,
            t = [],
            n = !1,
            r = F(X);
          try {
            for (r.s(); !(e = r.n()).done; ) {
              var a = e.value,
                o = P.fetchers.get(a);
              V(o, "Expected fetcher: " + a),
                "loading" === o.state && (X.delete(a), t.push(a), (n = !0));
            }
          } catch (i) {
            r.e(i);
          } finally {
            r.f();
          }
          return De(t), n;
        }
        function Ae(e) {
          var t,
            n = [],
            r = F(J);
          try {
            for (r.s(); !(t = r.n()).done; ) {
              var a = c(t.value, 2),
                o = a[0];
              if (a[1] < e) {
                var i = P.fetchers.get(o);
                V(i, "Expected fetcher: " + o),
                  "loading" === i.state && (Le(o), J.delete(o), n.push(o));
              }
            }
          } catch (l) {
            r.e(l);
          } finally {
            r.f();
          }
          return De(n), n.length > 0;
        }
        function Ue(e) {
          P.blockers.delete(e), re.delete(e);
        }
        function Be(e, t) {
          var n = P.blockers.get(e) || Re;
          V(
            ("unblocked" === n.state && "blocked" === t.state) ||
              ("blocked" === n.state && "blocked" === t.state) ||
              ("blocked" === n.state && "proceeding" === t.state) ||
              ("blocked" === n.state && "unblocked" === t.state) ||
              ("proceeding" === n.state && "unblocked" === t.state),
            "Invalid blocker state transition: " + n.state + " -> " + t.state,
          );
          var r = new Map(P.blockers);
          r.set(e, t), oe({ blockers: r });
        }
        function Ve(e) {
          var t = e.currentLocation,
            n = e.nextLocation,
            r = e.historyAction;
          if (0 !== re.size) {
            re.size > 1 &&
              H(!1, "A router only supports one blocker at a time");
            var a = Array.from(re.entries()),
              o = c(a[a.length - 1], 2),
              i = o[0],
              l = o[1],
              u = P.blockers.get(i);
            if (!u || "proceeding" !== u.state)
              return l({
                currentLocation: t,
                nextLocation: n,
                historyAction: r,
              })
                ? i
                : void 0;
          }
        }
        function $e(e) {
          var t = [];
          return (
            ne.forEach(function (n, r) {
              (e && !e(r)) || (n.cancel(), t.push(r), ne.delete(r));
            }),
            t
          );
        }
        function Ke(e, t) {
          if (g) {
            var n = g(
              e,
              t.map(function (e) {
                return (function (e, t) {
                  var n = e.route,
                    r = e.pathname,
                    a = e.params;
                  return {
                    id: n.id,
                    pathname: r,
                    params: a,
                    data: t[n.id],
                    handle: n.handle,
                  };
                })(e, P.loaderData);
              }),
            );
            return n || e.key;
          }
          return e.key;
        }
        function qe(e, t) {
          if (h && m) {
            var n = Ke(e, t);
            h[n] = m();
          }
        }
        function Qe(e, t) {
          if (h) {
            var n = Ke(e, t),
              r = h[n];
            if ("number" === typeof r) return r;
          }
          return null;
        }
        return (
          (C = {
            get basename() {
              return s;
            },
            get state() {
              return P;
            },
            get routes() {
              return u;
            },
            get window() {
              return n;
            },
            initialize: function () {
              if (
                ((d = e.history.listen(function (t) {
                  var n = t.action,
                    r = t.location,
                    a = t.delta;
                  if (!ae) {
                    H(
                      0 === re.size || null != a,
                      "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
                    );
                    var o = Ve({
                      currentLocation: P.location,
                      nextLocation: r,
                      historyAction: n,
                    });
                    return o && null != a
                      ? ((ae = !0),
                        e.history.go(-1 * a),
                        void Be(o, {
                          state: "blocked",
                          location: r,
                          proceed: function () {
                            Be(o, {
                              state: "proceeding",
                              proceed: void 0,
                              reset: void 0,
                              location: r,
                            }),
                              e.history.go(a);
                          },
                          reset: function () {
                            var e = new Map(P.blockers);
                            e.set(o, Re), oe({ blockers: e });
                          },
                        }))
                      : se(n, r);
                  }
                  ae = !1;
                })),
                r)
              ) {
                !(function (e, t) {
                  try {
                    var n = e.sessionStorage.getItem(_e);
                    if (n)
                      for (
                        var r = JSON.parse(n),
                          a = 0,
                          o = Object.entries(r || {});
                        a < o.length;
                        a++
                      ) {
                        var i = c(o[a], 2),
                          l = i[0],
                          u = i[1];
                        u && Array.isArray(u) && t.set(l, new Set(u || []));
                      }
                  } catch (er) {}
                })(n, _);
                var t = function () {
                  return (function (e, t) {
                    if (t.size > 0) {
                      var n,
                        r = {},
                        a = F(t);
                      try {
                        for (a.s(); !(n = a.n()).done; ) {
                          var o = c(n.value, 2),
                            i = o[0],
                            l = o[1];
                          r[i] = I(l);
                        }
                      } catch (u) {
                        a.e(u);
                      } finally {
                        a.f();
                      }
                      try {
                        e.sessionStorage.setItem(_e, JSON.stringify(r));
                      } catch (S) {
                        H(
                          !1,
                          "Failed to save applied view transitions in sessionStorage (" +
                            S +
                            ").",
                        );
                      }
                    }
                  })(n, _);
                };
                n.addEventListener("pagehide", t),
                  (D = function () {
                    return n.removeEventListener("pagehide", t);
                  });
              }
              return P.initialized || se(v.Pop, P.location), C;
            },
            subscribe: function (e) {
              return (
                p.add(e),
                function () {
                  return p.delete(e);
                }
              );
            },
            enableScrollRestoration: function (e, t, n) {
              if (
                ((h = e), (m = t), (g = n || null), !b && P.navigation === Pe)
              ) {
                b = !0;
                var r = Qe(P.location, P.matches);
                null != r && oe({ restoreScrollPosition: r });
              }
              return function () {
                (h = null), (m = null), (g = null);
              };
            },
            navigate: le,
            fetch: function (e, t, n, r) {
              if (a)
                throw new Error(
                  "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
                );
              K.has(e) && Le(e);
              var o = i || u,
                l = Me(
                  P.location,
                  P.matches,
                  s,
                  f.v7_prependBasename,
                  n,
                  t,
                  null == r ? void 0 : r.relative,
                ),
                c = G(o, l, s);
              if (c) {
                var d = ze(f.v7_normalizeFormMethod, !0, l, r),
                  p = d.path,
                  h = d.submission,
                  v = d.error;
                if (v) Ee(e, t, v);
                else {
                  var g = vt(c, p);
                  (R = !0 === (r && r.preventScrollReset)),
                    h && st(h.formMethod)
                      ? (function (e, t, n, r, a, o) {
                          me.apply(this, arguments);
                        })(e, t, p, g, c, h)
                      : (Z.set(e, { routeId: t, path: p }),
                        (function (e, t, n, r, a, o) {
                          ye.apply(this, arguments);
                        })(e, t, p, g, c, h));
                }
              } else Ee(e, t, Ze(404, { pathname: l }));
            },
            revalidate: function () {
              Se(),
                oe({ revalidation: "loading" }),
                "submitting" !== P.navigation.state &&
                  ("idle" !== P.navigation.state
                    ? se(O || P.historyAction, P.navigation.location, {
                        overrideNavigation: P.navigation,
                      })
                    : se(P.historyAction, P.location, {
                        startUninterruptedRevalidation: !0,
                      }));
            },
            createHref: function (t) {
              return e.history.createHref(t);
            },
            encodeLocation: function (t) {
              return e.history.encodeLocation(t);
            },
            getFetcher: ge,
            deleteFetcher: function (e) {
              if (f.v7_fetcherPersist) {
                var t = (ee.get(e) || 0) - 1;
                t <= 0 ? (ee.delete(e), te.add(e)) : ee.set(e, t);
              } else Ce(e);
              oe({ fetchers: new Map(P.fetchers) });
            },
            dispose: function () {
              d && d(),
                D && D(),
                p.clear(),
                L && L.abort(),
                P.fetchers.forEach(function (e, t) {
                  return Ce(t);
                }),
                P.blockers.forEach(function (e, t) {
                  return Ue(t);
                });
            },
            getBlocker: function (e, t) {
              var n = P.blockers.get(e) || Re;
              return re.get(e) !== t && re.set(e, t), n;
            },
            deleteBlocker: Ue,
            _internalFetchControllers: K,
            _internalActiveDeferreds: ne,
            _internalSetRoutes: function (e) {
              i = Y(e, t, void 0, (l = {}));
            },
          }),
          C
        );
      }
      Symbol("deferred");
      function Me(e, t, n, r, a, o, i) {
        var l, u;
        if (null != o && "path" !== i) {
          l = [];
          var s,
            c = F(t);
          try {
            for (c.s(); !(s = c.n()).done; ) {
              var f = s.value;
              if ((l.push(f), f.route.id === o)) {
                u = f;
                break;
              }
            }
          } catch (p) {
            c.e(p);
          } finally {
            c.f();
          }
        } else (l = t), (u = t[t.length - 1]);
        var d = he(
          a || ".",
          pe(l).map(function (e) {
            return e.pathnameBase;
          }),
          fe(e.pathname, n) || e.pathname,
          "path" === i,
        );
        return (
          null == a && ((d.search = e.search), (d.hash = e.hash)),
          (null != a && "" !== a && "." !== a) ||
            !u ||
            !u.route.index ||
            ht(d.search) ||
            (d.search = d.search
              ? d.search.replace(/^\?/, "?index&")
              : "?index"),
          r &&
            "/" !== n &&
            (d.pathname = "/" === d.pathname ? n : ve([n, d.pathname])),
          K(d)
        );
      }
      function ze(e, t, n, r) {
        if (
          !r ||
          !(function (e) {
            return (
              null != e &&
              (("formData" in e && null != e.formData) ||
                ("body" in e && void 0 !== e.body))
            );
          })(r)
        )
          return { path: n };
        if (r.formMethod && !ut(r.formMethod))
          return { path: n, error: Ze(405, { method: r.formMethod }) };
        var a,
          o,
          i = function () {
            return { path: n, error: Ze(400, { type: "invalid-body" }) };
          },
          l = r.formMethod || "get",
          u = e ? l.toUpperCase() : l.toLowerCase(),
          s = tt(n);
        if (void 0 !== r.body) {
          if ("text/plain" === r.formEncType) {
            if (!st(u)) return i();
            var f =
              "string" === typeof r.body
                ? r.body
                : r.body instanceof FormData ||
                    r.body instanceof URLSearchParams
                  ? Array.from(r.body.entries()).reduce(function (e, t) {
                      var n = c(t, 2);
                      return "" + e + n[0] + "=" + n[1] + "\n";
                    }, "")
                  : String(r.body);
            return {
              path: n,
              submission: {
                formMethod: u,
                formAction: s,
                formEncType: r.formEncType,
                formData: void 0,
                json: void 0,
                text: f,
              },
            };
          }
          if ("application/json" === r.formEncType) {
            if (!st(u)) return i();
            try {
              var d = "string" === typeof r.body ? JSON.parse(r.body) : r.body;
              return {
                path: n,
                submission: {
                  formMethod: u,
                  formAction: s,
                  formEncType: r.formEncType,
                  formData: void 0,
                  json: d,
                  text: void 0,
                },
              };
            } catch (er) {
              return i();
            }
          }
        }
        if (
          (V(
            "function" === typeof FormData,
            "FormData is not available in this environment",
          ),
          r.formData)
        )
          (a = Ke(r.formData)), (o = r.formData);
        else if (r.body instanceof FormData) (a = Ke(r.body)), (o = r.body);
        else if (r.body instanceof URLSearchParams) o = qe((a = r.body));
        else if (null == r.body)
          (a = new URLSearchParams()), (o = new FormData());
        else
          try {
            o = qe((a = new URLSearchParams(r.body)));
          } catch (er) {
            return i();
          }
        var p = {
          formMethod: u,
          formAction: s,
          formEncType:
            (r && r.formEncType) || "application/x-www-form-urlencoded",
          formData: o,
          json: void 0,
          text: void 0,
        };
        if (st(p.formMethod)) return { path: n, submission: p };
        var h = q(n);
        return (
          t && h.search && ht(h.search) && a.append("index", ""),
          (h.search = "?" + a),
          { path: K(h), submission: p }
        );
      }
      function Fe(e, t) {
        var n = e;
        if (t) {
          var r = e.findIndex(function (e) {
            return e.route.id === t;
          });
          r >= 0 && (n = e.slice(0, r));
        }
        return n;
      }
      function Ie(e, t, n, r, a, o, i, l, u, s, c, f, d, p) {
        var h = p ? Object.values(p)[0] : d ? Object.values(d)[0] : void 0,
          v = e.createURL(t.location),
          g = e.createURL(a),
          m = p ? Object.keys(p)[0] : void 0,
          y = Fe(n, m).filter(function (e, n) {
            if (e.route.lazy) return !0;
            if (null == e.route.loader) return !1;
            if (
              (function (e, t, n) {
                var r = !t || n.route.id !== t.route.id,
                  a = void 0 === e[n.route.id];
                return r || a;
              })(t.loaderData, t.matches[n], e) ||
              i.some(function (t) {
                return t === e.route.id;
              })
            )
              return !0;
            var a = t.matches[n],
              l = e;
            return Ue(
              e,
              A(
                {
                  currentUrl: v,
                  currentParams: a.params,
                  nextUrl: g,
                  nextParams: l.params,
                },
                r,
                {
                  actionResult: h,
                  defaultShouldRevalidate:
                    o ||
                    v.pathname + v.search === g.pathname + g.search ||
                    v.search !== g.search ||
                    Ae(a, l),
                },
              ),
            );
          }),
          b = [];
        return (
          u.forEach(function (e, a) {
            if (
              n.some(function (t) {
                return t.route.id === e.routeId;
              })
            ) {
              var i = G(c, e.path, f);
              if (i) {
                var u = t.fetchers.get(a),
                  d = vt(i, e.path);
                !s.has(a) &&
                  (!!l.includes(a) ||
                    (u && "idle" !== u.state && void 0 === u.data
                      ? o
                      : Ue(
                          d,
                          A(
                            {
                              currentUrl: v,
                              currentParams:
                                t.matches[t.matches.length - 1].params,
                              nextUrl: g,
                              nextParams: n[n.length - 1].params,
                            },
                            r,
                            { actionResult: h, defaultShouldRevalidate: o },
                          ),
                        ))) &&
                  b.push({
                    key: a,
                    routeId: e.routeId,
                    path: e.path,
                    matches: i,
                    match: d,
                    controller: new AbortController(),
                  });
              } else
                b.push({
                  key: a,
                  routeId: e.routeId,
                  path: e.path,
                  matches: null,
                  match: null,
                  controller: null,
                });
            }
          }),
          [y, b]
        );
      }
      function Ae(e, t) {
        var n = e.route.path;
        return (
          e.pathname !== t.pathname ||
          (null != n && n.endsWith("*") && e.params["*"] !== t.params["*"])
        );
      }
      function Ue(e, t) {
        if (e.route.shouldRevalidate) {
          var n = e.route.shouldRevalidate(t);
          if ("boolean" === typeof n) return n;
        }
        return t.defaultShouldRevalidate;
      }
      function Be(e, t, n) {
        return Ve.apply(this, arguments);
      }
      function Ve() {
        return (
          (Ve = w(
            y().mark(function e(t, n, r) {
              var a, o, i, l, u, s;
              return y().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t.lazy) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (e.next = 4), t.lazy();
                    case 4:
                      if (((a = e.sent), t.lazy)) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      for (l in (V((o = r[t.id]), "No route found in manifest"),
                      (i = {}),
                      a))
                        (u = o[l]),
                          H(
                            !(s = void 0 !== u && "hasErrorBoundary" !== l),
                            'Route "' +
                              o.id +
                              '" has a static property "' +
                              l +
                              '" defined but its lazy function is also returning a value for this property. The lazy route property "' +
                              l +
                              '" will be ignored.',
                          ),
                          s || J.has(l) || (i[l] = a[l]);
                      Object.assign(o, i),
                        Object.assign(o, A({}, n(o), { lazy: void 0 }));
                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )),
          Ve.apply(this, arguments)
        );
      }
      function He(e, t, n, r, a, o, i, l) {
        return $e.apply(this, arguments);
      }
      function $e() {
        return (
          ($e = w(
            y().mark(function e(t, n, r, a, o, i, l, u) {
              var s, c, f, d, p, h, v, g, m, b, w, k, x, S, E, C, L, N, P;
              return y().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (void 0 === u && (u = {}),
                          (d = function (e) {
                            var t,
                              a = new Promise(function (e, n) {
                                return (t = n);
                              });
                            return (
                              (f = function () {
                                return t();
                              }),
                              n.signal.addEventListener("abort", f),
                              Promise.race([
                                e({
                                  request: n,
                                  params: r.params,
                                  context: u.requestContext,
                                }),
                                a,
                              ])
                            );
                          }),
                          (e.prev = 2),
                          (p = r.route[t]),
                          !r.route.lazy)
                        ) {
                          e.next = 32;
                          break;
                        }
                        if (!p) {
                          e.next = 14;
                          break;
                        }
                        return (
                          (e.next = 8),
                          Promise.all([
                            d(p).catch(function (e) {
                              h = e;
                            }),
                            Be(r.route, i, o),
                          ])
                        );
                      case 8:
                        if (((v = e.sent), !h)) {
                          e.next = 11;
                          break;
                        }
                        throw h;
                      case 11:
                        (c = v[0]), (e.next = 30);
                        break;
                      case 14:
                        return (e.next = 16), Be(r.route, i, o);
                      case 16:
                        if (!(p = r.route[t])) {
                          e.next = 23;
                          break;
                        }
                        return (e.next = 20), d(p);
                      case 20:
                        (c = e.sent), (e.next = 30);
                        break;
                      case 23:
                        if ("action" !== t) {
                          e.next = 29;
                          break;
                        }
                        throw (
                          ((g = new URL(n.url)),
                          (m = g.pathname + g.search),
                          Ze(405, {
                            method: n.method,
                            pathname: m,
                            routeId: r.route.id,
                          }))
                        );
                      case 29:
                        return e.abrupt("return", {
                          type: U.data,
                          data: void 0,
                        });
                      case 30:
                        e.next = 41;
                        break;
                      case 32:
                        if (p) {
                          e.next = 38;
                          break;
                        }
                        throw (
                          ((b = new URL(n.url)),
                          Ze(404, { pathname: b.pathname + b.search }))
                        );
                      case 38:
                        return (e.next = 40), d(p);
                      case 40:
                        c = e.sent;
                      case 41:
                        V(
                          void 0 !== c,
                          "You defined " +
                            ("action" === t ? "an action" : "a loader") +
                            ' for route "' +
                            r.route.id +
                            "\" but didn't return anything from your `" +
                            t +
                            "` function. Please return a value or `null`.",
                        ),
                          (e.next = 48);
                        break;
                      case 44:
                        (e.prev = 44),
                          (e.t0 = e.catch(2)),
                          (s = U.error),
                          (c = e.t0);
                      case 48:
                        return (
                          (e.prev = 48),
                          f && n.signal.removeEventListener("abort", f),
                          e.finish(48)
                        );
                      case 51:
                        if (!lt(c)) {
                          e.next = 77;
                          break;
                        }
                        if (((w = c.status), !Le.has(w))) {
                          e.next = 61;
                          break;
                        }
                        if (
                          (V(
                            (k = c.headers.get("Location")),
                            "Redirects returned/thrown from loaders/actions must have a Location header",
                          ),
                          je.test(k)
                            ? u.isStaticRequest ||
                              ((x = new URL(n.url)),
                              (S = k.startsWith("//")
                                ? new URL(x.protocol + k)
                                : new URL(k)),
                              (E = null != fe(S.pathname, l)),
                              S.origin === x.origin &&
                                E &&
                                (k = S.pathname + S.search + S.hash))
                            : (k = Me(
                                new URL(n.url),
                                a.slice(0, a.indexOf(r) + 1),
                                l,
                                !0,
                                k,
                              )),
                          !u.isStaticRequest)
                        ) {
                          e.next = 60;
                          break;
                        }
                        throw (c.headers.set("Location", k), c);
                      case 60:
                        return e.abrupt("return", {
                          type: U.redirect,
                          status: w,
                          location: k,
                          revalidate:
                            null !== c.headers.get("X-Remix-Revalidate"),
                          reloadDocument:
                            null !== c.headers.get("X-Remix-Reload-Document"),
                        });
                      case 61:
                        if (!u.isRouteRequest) {
                          e.next = 64;
                          break;
                        }
                        throw {
                          type: s === U.error ? U.error : U.data,
                          response: c,
                        };
                      case 64:
                        if (
                          !(L = c.headers.get("Content-Type")) ||
                          !/\bapplication\/json\b/.test(L)
                        ) {
                          e.next = 71;
                          break;
                        }
                        return (e.next = 68), c.json();
                      case 68:
                        (C = e.sent), (e.next = 74);
                        break;
                      case 71:
                        return (e.next = 73), c.text();
                      case 73:
                        C = e.sent;
                      case 74:
                        if (s !== U.error) {
                          e.next = 76;
                          break;
                        }
                        return e.abrupt("return", {
                          type: s,
                          error: new we(w, c.statusText, C),
                          headers: c.headers,
                        });
                      case 76:
                        return e.abrupt("return", {
                          type: U.data,
                          data: C,
                          statusCode: c.status,
                          headers: c.headers,
                        });
                      case 77:
                        if (s !== U.error) {
                          e.next = 79;
                          break;
                        }
                        return e.abrupt("return", { type: s, error: c });
                      case 79:
                        if (!it(c)) {
                          e.next = 81;
                          break;
                        }
                        return e.abrupt("return", {
                          type: U.deferred,
                          deferredData: c,
                          statusCode: null == (N = c.init) ? void 0 : N.status,
                          headers:
                            (null == (P = c.init) ? void 0 : P.headers) &&
                            new Headers(c.init.headers),
                        });
                      case 81:
                        return e.abrupt("return", { type: U.data, data: c });
                      case 82:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 44, 48, 51]],
              );
            }),
          )),
          $e.apply(this, arguments)
        );
      }
      function We(e, t, n, r) {
        var a = e.createURL(tt(t)).toString(),
          o = { signal: n };
        if (r && st(r.formMethod)) {
          var i = r.formMethod,
            l = r.formEncType;
          (o.method = i.toUpperCase()),
            "application/json" === l
              ? ((o.headers = new Headers({ "Content-Type": l })),
                (o.body = JSON.stringify(r.json)))
              : "text/plain" === l
                ? (o.body = r.text)
                : "application/x-www-form-urlencoded" === l && r.formData
                  ? (o.body = Ke(r.formData))
                  : (o.body = r.formData);
        }
        return new Request(a, o);
      }
      function Ke(e) {
        var t,
          n = new URLSearchParams(),
          r = F(e.entries());
        try {
          for (r.s(); !(t = r.n()).done; ) {
            var a = c(t.value, 2),
              o = a[0],
              i = a[1];
            n.append(o, "string" === typeof i ? i : i.name);
          }
        } catch (l) {
          r.e(l);
        } finally {
          r.f();
        }
        return n;
      }
      function qe(e) {
        var t,
          n = new FormData(),
          r = F(e.entries());
        try {
          for (r.s(); !(t = r.n()).done; ) {
            var a = c(t.value, 2),
              o = a[0],
              i = a[1];
            n.append(o, i);
          }
        } catch (l) {
          r.e(l);
        } finally {
          r.f();
        }
        return n;
      }
      function Qe(e, t, n, r, a) {
        var o,
          i = {},
          l = null,
          u = !1,
          s = {};
        return (
          n.forEach(function (n, c) {
            var f = t[c].route.id;
            if (
              (V(!ot(n), "Cannot handle redirect results in processLoaderData"),
              at(n))
            ) {
              var d = Ge(e, f),
                p = n.error;
              r && ((p = Object.values(r)[0]), (r = void 0)),
                null == (l = l || {})[d.route.id] && (l[d.route.id] = p),
                (i[f] = void 0),
                u || ((u = !0), (o = ke(n.error) ? n.error.status : 500)),
                n.headers && (s[f] = n.headers);
            } else
              rt(n)
                ? (a.set(f, n.deferredData), (i[f] = n.deferredData.data))
                : (i[f] = n.data),
                null == n.statusCode ||
                  200 === n.statusCode ||
                  u ||
                  (o = n.statusCode),
                n.headers && (s[f] = n.headers);
          }),
          r && ((l = r), (i[Object.keys(r)[0]] = void 0)),
          { loaderData: i, errors: l, statusCode: o || 200, loaderHeaders: s }
        );
      }
      function Je(e, t, n, r, a, o, i, l) {
        for (
          var u = Qe(t, n, r, a, l), s = u.loaderData, c = u.errors, f = 0;
          f < o.length;
          f++
        ) {
          var d = o[f],
            p = d.key,
            h = d.match,
            v = d.controller;
          V(
            void 0 !== i && void 0 !== i[f],
            "Did not find corresponding fetcher result",
          );
          var g = i[f];
          if (!v || !v.signal.aborted)
            if (at(g)) {
              var m = Ge(e.matches, null == h ? void 0 : h.route.id);
              (c && c[m.route.id]) ||
                (c = A({}, c, T({}, m.route.id, g.error))),
                e.fetchers.delete(p);
            } else if (ot(g)) V(!1, "Unhandled fetcher revalidation redirect");
            else if (rt(g)) V(!1, "Unhandled fetcher deferred data");
            else {
              var y = kt(g.data);
              e.fetchers.set(p, y);
            }
        }
        return { loaderData: s, errors: c };
      }
      function Ye(e, t, n, r) {
        var a,
          o = A({}, t),
          i = F(n);
        try {
          for (i.s(); !(a = i.n()).done; ) {
            var l = a.value,
              u = l.route.id;
            if (
              (t.hasOwnProperty(u)
                ? void 0 !== t[u] && (o[u] = t[u])
                : void 0 !== e[u] && l.route.loader && (o[u] = e[u]),
              r && r.hasOwnProperty(u))
            )
              break;
          }
        } catch (s) {
          i.e(s);
        } finally {
          i.f();
        }
        return o;
      }
      function Ge(e, t) {
        return (
          (t
            ? e.slice(
                0,
                e.findIndex(function (e) {
                  return e.route.id === t;
                }) + 1,
              )
            : I(e)
          )
            .reverse()
            .find(function (e) {
              return !0 === e.route.hasErrorBoundary;
            }) || e[0]
        );
      }
      function Xe(e) {
        var t =
          1 === e.length
            ? e[0]
            : e.find(function (e) {
                return e.index || !e.path || "/" === e.path;
              }) || { id: "__shim-error-route__" };
        return {
          matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
          route: t,
        };
      }
      function Ze(e, t) {
        var n = void 0 === t ? {} : t,
          r = n.pathname,
          a = n.routeId,
          o = n.method,
          i = n.type,
          l = "Unknown Server Error",
          u = "Unknown @remix-run/router error";
        return (
          400 === e
            ? ((l = "Bad Request"),
              o && r && a
                ? (u =
                    "You made a " +
                    o +
                    ' request to "' +
                    r +
                    '" but did not provide a `loader` for route "' +
                    a +
                    '", so there is no way to handle the request.')
                : "defer-action" === i
                  ? (u = "defer() is not supported in actions")
                  : "invalid-body" === i &&
                    (u = "Unable to encode submission body"))
            : 403 === e
              ? ((l = "Forbidden"),
                (u = 'Route "' + a + '" does not match URL "' + r + '"'))
              : 404 === e
                ? ((l = "Not Found"), (u = 'No route matches URL "' + r + '"'))
                : 405 === e &&
                  ((l = "Method Not Allowed"),
                  o && r && a
                    ? (u =
                        "You made a " +
                        o.toUpperCase() +
                        ' request to "' +
                        r +
                        '" but did not provide an `action` for route "' +
                        a +
                        '", so there is no way to handle the request.')
                    : o &&
                      (u = 'Invalid request method "' + o.toUpperCase() + '"')),
          new we(e || 500, l, new Error(u), !0)
        );
      }
      function et(e) {
        for (var t = e.length - 1; t >= 0; t--) {
          var n = e[t];
          if (ot(n)) return { result: n, idx: t };
        }
      }
      function tt(e) {
        return K(A({}, "string" === typeof e ? q(e) : e, { hash: "" }));
      }
      function nt(e, t) {
        return (
          e.pathname === t.pathname &&
          e.search === t.search &&
          ("" === e.hash ? "" !== t.hash : e.hash === t.hash || "" !== t.hash)
        );
      }
      function rt(e) {
        return e.type === U.deferred;
      }
      function at(e) {
        return e.type === U.error;
      }
      function ot(e) {
        return (e && e.type) === U.redirect;
      }
      function it(e) {
        var t = e;
        return (
          t &&
          "object" === typeof t &&
          "object" === typeof t.data &&
          "function" === typeof t.subscribe &&
          "function" === typeof t.cancel &&
          "function" === typeof t.resolveData
        );
      }
      function lt(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "object" === typeof e.headers &&
          "undefined" !== typeof e.body
        );
      }
      function ut(e) {
        return Ce.has(e.toLowerCase());
      }
      function st(e) {
        return Se.has(e.toLowerCase());
      }
      function ct(e, t, n, r, a, o) {
        return ft.apply(this, arguments);
      }
      function ft() {
        return (ft = w(
          y().mark(function e(t, n, r, a, o, i) {
            var l, u;
            return y().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (l = y().mark(function e(l) {
                      var u, s, c, f, d;
                      return y().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((u = r[l]), (s = n[l]))) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return", 1);
                            case 4:
                              if (
                                ((c = t.find(function (e) {
                                  return e.route.id === s.route.id;
                                })),
                                (f =
                                  null != c &&
                                  !Ae(c, s) &&
                                  void 0 !== (i && i[s.route.id])),
                                !rt(u) || (!o && !f))
                              ) {
                                e.next = 11;
                                break;
                              }
                              return (
                                V(
                                  (d = a[l]),
                                  "Expected an AbortSignal for revalidating fetcher deferred result",
                                ),
                                (e.next = 11),
                                dt(u, d, o).then(function (e) {
                                  e && (r[l] = e || r[l]);
                                })
                              );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })),
                      (u = 0);
                  case 2:
                    if (!(u < r.length)) {
                      e.next = 9;
                      break;
                    }
                    return e.delegateYield(l(u), "t0", 4);
                  case 4:
                    if (!e.t0) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("continue", 6);
                  case 6:
                    u++, (e.next = 2);
                    break;
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function dt(e, t, n) {
        return pt.apply(this, arguments);
      }
      function pt() {
        return (pt = w(
          y().mark(function e(t, n, r) {
            return y().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        void 0 === r && (r = !1),
                        (e.next = 3),
                        t.deferredData.resolveData(n)
                      );
                    case 3:
                      if (!e.sent) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return");
                    case 6:
                      if (!r) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (e.prev = 7),
                        e.abrupt("return", {
                          type: U.data,
                          data: t.deferredData.unwrappedData,
                        })
                      );
                    case 11:
                      return (
                        (e.prev = 11),
                        (e.t0 = e.catch(7)),
                        e.abrupt("return", { type: U.error, error: e.t0 })
                      );
                    case 14:
                      return e.abrupt("return", {
                        type: U.data,
                        data: t.deferredData.data,
                      });
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[7, 11]],
            );
          }),
        )).apply(this, arguments);
      }
      function ht(e) {
        return new URLSearchParams(e).getAll("index").some(function (e) {
          return "" === e;
        });
      }
      function vt(e, t) {
        var n = "string" === typeof t ? q(t).search : t.search;
        if (e[e.length - 1].route.index && ht(n || "")) return e[e.length - 1];
        var r = pe(e);
        return r[r.length - 1];
      }
      function gt(e) {
        var t = e.formMethod,
          n = e.formAction,
          r = e.formEncType,
          a = e.text,
          o = e.formData,
          i = e.json;
        if (t && n && r)
          return null != a
            ? {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: a,
              }
            : null != o
              ? {
                  formMethod: t,
                  formAction: n,
                  formEncType: r,
                  formData: o,
                  json: void 0,
                  text: void 0,
                }
              : void 0 !== i
                ? {
                    formMethod: t,
                    formAction: n,
                    formEncType: r,
                    formData: void 0,
                    json: i,
                    text: void 0,
                  }
                : void 0;
      }
      function mt(e, t) {
        return t
          ? {
              state: "loading",
              location: e,
              formMethod: t.formMethod,
              formAction: t.formAction,
              formEncType: t.formEncType,
              formData: t.formData,
              json: t.json,
              text: t.text,
            }
          : {
              state: "loading",
              location: e,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
            };
      }
      function yt(e, t) {
        return {
          state: "submitting",
          location: e,
          formMethod: t.formMethod,
          formAction: t.formAction,
          formEncType: t.formEncType,
          formData: t.formData,
          json: t.json,
          text: t.text,
        };
      }
      function bt(e, t) {
        return e
          ? {
              state: "loading",
              formMethod: e.formMethod,
              formAction: e.formAction,
              formEncType: e.formEncType,
              formData: e.formData,
              json: e.json,
              text: e.text,
              data: t,
            }
          : {
              state: "loading",
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
              data: t,
            };
      }
      function wt(e, t) {
        return {
          state: "submitting",
          formMethod: e.formMethod,
          formAction: e.formAction,
          formEncType: e.formEncType,
          formData: e.formData,
          json: e.json,
          text: e.text,
          data: t ? t.data : void 0,
        };
      }
      function kt(e) {
        return {
          state: "idle",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: e,
        };
      }
      function xt() {
        return (
          (xt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          xt.apply(this, arguments)
        );
      }
      var St = e.createContext(null);
      var Et = e.createContext(null);
      var Ct = e.createContext(null);
      var Lt = e.createContext(null);
      var Nt = e.createContext(null);
      var Pt = e.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      var Ot = e.createContext(null);
      function Rt() {
        return null != e.useContext(Nt);
      }
      function jt() {
        return Rt() || V(!1), e.useContext(Nt).location;
      }
      function Tt(t) {
        e.useContext(Lt).static || e.useLayoutEffect(t);
      }
      function _t() {
        return e.useContext(Pt).isDataRoute
          ? (function () {
              var t = $t(Vt.UseNavigateStable).router,
                n = Kt(Ht.UseNavigateStable),
                r = e.useRef(!1);
              return (
                Tt(function () {
                  r.current = !0;
                }),
                e.useCallback(
                  function (e, a) {
                    void 0 === a && (a = {}),
                      r.current &&
                        ("number" === typeof e
                          ? t.navigate(e)
                          : t.navigate(e, xt({ fromRouteId: n }, a)));
                  },
                  [t, n],
                )
              );
            })()
          : (function () {
              Rt() || V(!1);
              var t = e.useContext(St),
                n = e.useContext(Lt),
                r = n.basename,
                a = n.navigator,
                o = e.useContext(Pt).matches,
                i = jt().pathname,
                l = JSON.stringify(
                  pe(o).map(function (e) {
                    return e.pathnameBase;
                  }),
                ),
                u = e.useRef(!1);
              return (
                Tt(function () {
                  u.current = !0;
                }),
                e.useCallback(
                  function (e, n) {
                    if ((void 0 === n && (n = {}), u.current))
                      if ("number" !== typeof e) {
                        var o = he(e, JSON.parse(l), i, "path" === n.relative);
                        null == t &&
                          "/" !== r &&
                          (o.pathname =
                            "/" === o.pathname ? r : ve([r, o.pathname])),
                          (n.replace ? a.replace : a.push)(o, n.state, n);
                      } else a.go(e);
                  },
                  [r, a, l, i, t],
                )
              );
            })();
      }
      var Dt = e.createContext(null);
      function Mt(t, n) {
        var r = (void 0 === n ? {} : n).relative,
          a = e.useContext(Pt).matches,
          o = jt().pathname,
          i = JSON.stringify(
            pe(a).map(function (e) {
              return e.pathnameBase;
            }),
          );
        return e.useMemo(
          function () {
            return he(t, JSON.parse(i), o, "path" === r);
          },
          [t, i, o, r],
        );
      }
      function zt(t, n, r) {
        Rt() || V(!1);
        var a,
          o = e.useContext(Lt).navigator,
          i = e.useContext(Pt).matches,
          l = i[i.length - 1],
          u = l ? l.params : {},
          s = (l && l.pathname, l ? l.pathnameBase : "/"),
          c = (l && l.route, jt());
        if (n) {
          var f,
            d = "string" === typeof n ? q(n) : n;
          "/" === s ||
            (null == (f = d.pathname) ? void 0 : f.startsWith(s)) ||
            V(!1),
            (a = d);
        } else a = c;
        var p = a.pathname || "/",
          h = G(t, { pathname: "/" === s ? p : p.slice(s.length) || "/" });
        var g = Bt(
          h &&
            h.map(function (e) {
              return Object.assign({}, e, {
                params: Object.assign({}, u, e.params),
                pathname: ve([
                  s,
                  o.encodeLocation
                    ? o.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? s
                    : ve([
                        s,
                        o.encodeLocation
                          ? o.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              });
            }),
          i,
          r,
        );
        return n && g
          ? e.createElement(
              Nt.Provider,
              {
                value: {
                  location: xt(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    a,
                  ),
                  navigationType: v.Pop,
                },
              },
              g,
            )
          : g;
      }
      function Ft() {
        var t = (function () {
            var t,
              n = e.useContext(Ot),
              r = Wt(Ht.UseRouteError),
              a = Kt(Ht.UseRouteError);
            if (n) return n;
            return null == (t = r.errors) ? void 0 : t[a];
          })(),
          n = ke(t)
            ? t.status + " " + t.statusText
            : t instanceof Error
              ? t.message
              : JSON.stringify(t),
          r = t instanceof Error ? t.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a };
        return e.createElement(
          e.Fragment,
          null,
          e.createElement("h2", null, "Unexpected Application Error!"),
          e.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? e.createElement("pre", { style: o }, r) : null,
          null,
        );
      }
      var It = e.createElement(Ft, null),
        At = (function (t) {
          L(r, t);
          var n = j(r);
          function r(e) {
            var t;
            return (
              E(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error,
              }),
              t
            );
          }
          return (
            S(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t,
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? e.createElement(
                          Pt.Provider,
                          { value: this.props.routeContext },
                          e.createElement(Ot.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          }),
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location ||
                      ("idle" !== t.revalidation && "idle" === e.revalidation)
                      ? {
                          error: e.error,
                          location: e.location,
                          revalidation: e.revalidation,
                        }
                      : {
                          error: e.error || t.error,
                          location: t.location,
                          revalidation: e.revalidation || t.revalidation,
                        };
                  },
                },
              ],
            ),
            r
          );
        })(e.Component);
      function Ut(t) {
        var n = t.routeContext,
          r = t.match,
          a = t.children,
          o = e.useContext(St);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          e.createElement(Pt.Provider, { value: n }, a)
        );
      }
      function Bt(t, n, r) {
        var a;
        if ((void 0 === n && (n = []), void 0 === r && (r = null), null == t)) {
          var o;
          if (null == (o = r) || !o.errors) return null;
          t = r.matches;
        }
        var i = t,
          l = null == (a = r) ? void 0 : a.errors;
        if (null != l) {
          var u = i.findIndex(function (e) {
            return e.route.id && (null == l ? void 0 : l[e.route.id]);
          });
          u >= 0 || V(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
        }
        return i.reduceRight(function (t, a, o) {
          var u = a.route.id ? (null == l ? void 0 : l[a.route.id]) : null,
            s = null;
          r && (s = a.route.errorElement || It);
          var c = n.concat(i.slice(0, o + 1)),
            f = function () {
              var n;
              return (
                (n = u
                  ? s
                  : a.route.Component
                    ? e.createElement(a.route.Component, null)
                    : a.route.element
                      ? a.route.element
                      : t),
                e.createElement(Ut, {
                  match: a,
                  routeContext: {
                    outlet: t,
                    matches: c,
                    isDataRoute: null != r,
                  },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o)
            ? e.createElement(At, {
                location: r.location,
                revalidation: r.revalidation,
                component: s,
                error: u,
                children: f(),
                routeContext: { outlet: null, matches: c, isDataRoute: !0 },
              })
            : f();
        }, null);
      }
      var Vt = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(Vt || {}),
        Ht = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(Ht || {});
      function $t(t) {
        var n = e.useContext(St);
        return n || V(!1), n;
      }
      function Wt(t) {
        var n = e.useContext(Et);
        return n || V(!1), n;
      }
      function Kt(t) {
        var n = (function (t) {
            var n = e.useContext(Pt);
            return n || V(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || V(!1), r.route.id;
      }
      t.startTransition;
      function qt(t) {
        return (function (t) {
          var n = e.useContext(Pt).outlet;
          return n ? e.createElement(Dt.Provider, { value: t }, n) : n;
        })(t.context);
      }
      function Qt(t) {
        var n = t.basename,
          r = void 0 === n ? "/" : n,
          a = t.children,
          o = void 0 === a ? null : a,
          i = t.location,
          l = t.navigationType,
          u = void 0 === l ? v.Pop : l,
          s = t.navigator,
          c = t.static,
          f = void 0 !== c && c;
        Rt() && V(!1);
        var d = r.replace(/^\/*/, "/"),
          p = e.useMemo(
            function () {
              return { basename: d, navigator: s, static: f };
            },
            [d, s, f],
          );
        "string" === typeof i && (i = q(i));
        var h = i,
          g = h.pathname,
          m = void 0 === g ? "/" : g,
          y = h.search,
          b = void 0 === y ? "" : y,
          w = h.hash,
          k = void 0 === w ? "" : w,
          x = h.state,
          S = void 0 === x ? null : x,
          E = h.key,
          C = void 0 === E ? "default" : E,
          L = e.useMemo(
            function () {
              var e = fe(m, d);
              return null == e
                ? null
                : {
                    location: {
                      pathname: e,
                      search: b,
                      hash: k,
                      state: S,
                      key: C,
                    },
                    navigationType: u,
                  };
            },
            [d, m, b, k, S, C, u],
          );
        return null == L
          ? null
          : e.createElement(
              Lt.Provider,
              { value: p },
              e.createElement(Nt.Provider, { children: o, value: L }),
            );
      }
      var Jt = (function (e) {
          return (
            (e[(e.pending = 0)] = "pending"),
            (e[(e.success = 1)] = "success"),
            (e[(e.error = 2)] = "error"),
            e
          );
        })(Jt || {}),
        Yt = new Promise(function () {});
      e.Component;
      function Gt(t) {
        var n = {
          hasErrorBoundary: null != t.ErrorBoundary || null != t.errorElement,
        };
        return (
          t.Component &&
            Object.assign(n, {
              element: e.createElement(t.Component),
              Component: void 0,
            }),
          t.ErrorBoundary &&
            Object.assign(n, {
              errorElement: e.createElement(t.ErrorBoundary),
              ErrorBoundary: void 0,
            }),
          n
        );
      }
      function Xt() {
        return (
          (Xt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Xt.apply(this, arguments)
        );
      }
      function Zt(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      var en = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
      ];
      function tn() {
        var e,
          t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = Xt({}, t, { errors: nn(t.errors) })), t;
      }
      function nn(e) {
        if (!e) return null;
        for (var t = {}, n = 0, r = Object.entries(e); n < r.length; n++) {
          var a = c(r[n], 2),
            o = a[0],
            i = a[1];
          if (i && "RouteErrorResponse" === i.__type)
            t[o] = new we(i.status, i.statusText, i.data, !0 === i.internal);
          else if (i && "Error" === i.__type) {
            if (i.__subType) {
              var l = window[i.__subType];
              if ("function" === typeof l)
                try {
                  var u = new l(i.message);
                  (u.stack = ""), (t[o] = u);
                } catch (er) {}
            }
            if (null == t[o]) {
              var s = new Error(i.message);
              (s.stack = ""), (t[o] = s);
            }
          } else t[o] = i;
        }
        return t;
      }
      var rn = e.createContext({ isTransitioning: !1 });
      var an = e.createContext(new Map());
      var on = t.startTransition;
      var ln = S(function e() {
        var t = this;
        E(this, e),
          (this.status = "pending"),
          (this.promise = new Promise(function (e, n) {
            (t.resolve = function (n) {
              "pending" === t.status && ((t.status = "resolved"), e(n));
            }),
              (t.reject = function (e) {
                "pending" === t.status && ((t.status = "rejected"), n(e));
              });
          }));
      });
      function un(t) {
        var n = t.fallbackElement,
          r = t.router,
          a = t.future,
          o = c(e.useState(r.state), 2),
          i = o[0],
          l = o[1],
          u = c(e.useState(), 2),
          s = u[0],
          f = u[1],
          d = c(e.useState({ isTransitioning: !1 }), 2),
          p = d[0],
          h = d[1],
          v = c(e.useState(), 2),
          g = v[0],
          m = v[1],
          b = c(e.useState(), 2),
          k = b[0],
          x = b[1],
          S = c(e.useState(), 2),
          E = S[0],
          C = S[1],
          L = e.useRef(new Map()),
          N = (a || {}).v7_startTransition,
          P = e.useCallback(
            function (e) {
              N
                ? (function (e) {
                    on ? on(e) : e();
                  })(e)
                : e();
            },
            [N],
          ),
          O = e.useCallback(
            function (e, t) {
              var n = t.deletedFetchers,
                a = t.unstable_viewTransitionOpts;
              n.forEach(function (e) {
                return L.current.delete(e);
              }),
                e.fetchers.forEach(function (e, t) {
                  void 0 !== e.data && L.current.set(t, e.data);
                }),
                a &&
                null != r.window &&
                "function" === typeof r.window.document.startViewTransition
                  ? k && g
                    ? (g.resolve(),
                      k.skipTransition(),
                      C({
                        state: e,
                        currentLocation: a.currentLocation,
                        nextLocation: a.nextLocation,
                      }))
                    : (f(e),
                      h({
                        isTransitioning: !0,
                        currentLocation: a.currentLocation,
                        nextLocation: a.nextLocation,
                      }))
                  : P(function () {
                      return l(e);
                    });
            },
            [r.window, k, g, L, P],
          );
        e.useLayoutEffect(
          function () {
            return r.subscribe(O);
          },
          [r, O],
        ),
          e.useEffect(
            function () {
              p.isTransitioning && m(new ln());
            },
            [p.isTransitioning],
          ),
          e.useEffect(
            function () {
              if (g && s && r.window) {
                var e = s,
                  t = g.promise,
                  n = r.window.document.startViewTransition(
                    w(
                      y().mark(function n() {
                        return y().wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  P(function () {
                                    return l(e);
                                  }),
                                  (n.next = 3),
                                  t
                                );
                              case 3:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                      }),
                    ),
                  );
                n.finished.finally(function () {
                  m(void 0), x(void 0), f(void 0), h({ isTransitioning: !1 });
                }),
                  x(n);
              }
            },
            [P, s, g, r.window],
          ),
          e.useEffect(
            function () {
              g && s && i.location.key === s.location.key && g.resolve();
            },
            [g, k, i.location, s],
          ),
          e.useEffect(
            function () {
              !p.isTransitioning &&
                E &&
                (f(E.state),
                h({
                  isTransitioning: !0,
                  currentLocation: E.currentLocation,
                  nextLocation: E.nextLocation,
                }),
                C(void 0));
            },
            [p.isTransitioning, E],
          );
        var R = e.useMemo(
            function () {
              return {
                createHref: r.createHref,
                encodeLocation: r.encodeLocation,
                go: function (e) {
                  return r.navigate(e);
                },
                push: function (e, t, n) {
                  return r.navigate(e, {
                    state: t,
                    preventScrollReset:
                      null == n ? void 0 : n.preventScrollReset,
                  });
                },
                replace: function (e, t, n) {
                  return r.navigate(e, {
                    replace: !0,
                    state: t,
                    preventScrollReset:
                      null == n ? void 0 : n.preventScrollReset,
                  });
                },
              };
            },
            [r],
          ),
          j = r.basename || "/",
          T = e.useMemo(
            function () {
              return { router: r, navigator: R, static: !1, basename: j };
            },
            [r, R, j],
          );
        return e.createElement(
          e.Fragment,
          null,
          e.createElement(
            St.Provider,
            { value: T },
            e.createElement(
              Et.Provider,
              { value: i },
              e.createElement(
                an.Provider,
                { value: L.current },
                e.createElement(
                  rn.Provider,
                  { value: p },
                  e.createElement(
                    Qt,
                    {
                      basename: j,
                      location: i.location,
                      navigationType: i.historyAction,
                      navigator: R,
                    },
                    i.initialized
                      ? e.createElement(sn, { routes: r.routes, state: i })
                      : n,
                  ),
                ),
              ),
            ),
          ),
          null,
        );
      }
      function sn(e) {
        return zt(e.routes, void 0, e.state);
      }
      var cn =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        fn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        dn = e.forwardRef(function (t, n) {
          var r,
            a = t.onClick,
            o = t.relative,
            i = t.reloadDocument,
            l = t.replace,
            u = t.state,
            s = t.target,
            c = t.to,
            f = t.preventScrollReset,
            d = t.unstable_viewTransition,
            p = Zt(t, en),
            h = e.useContext(Lt).basename,
            v = !1;
          if ("string" === typeof c && fn.test(c) && ((r = c), cn))
            try {
              var g = new URL(window.location.href),
                m = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c),
                y = fe(m.pathname, h);
              m.origin === g.origin && null != y
                ? (c = y + m.search + m.hash)
                : (v = !0);
            } catch (er) {}
          var b = (function (t, n) {
              var r = (void 0 === n ? {} : n).relative;
              Rt() || V(!1);
              var a = e.useContext(Lt),
                o = a.basename,
                i = a.navigator,
                l = Mt(t, { relative: r }),
                u = l.hash,
                s = l.pathname,
                c = l.search,
                f = s;
              return (
                "/" !== o && (f = "/" === s ? o : ve([o, s])),
                i.createHref({ pathname: f, search: c, hash: u })
              );
            })(c, { relative: o }),
            w = (function (t, n) {
              var r = void 0 === n ? {} : n,
                a = r.target,
                o = r.replace,
                i = r.state,
                l = r.preventScrollReset,
                u = r.relative,
                s = r.unstable_viewTransition,
                c = _t(),
                f = jt(),
                d = Mt(t, { relative: u });
              return e.useCallback(
                function (e) {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(e, a)
                  ) {
                    e.preventDefault();
                    var n = void 0 !== o ? o : K(f) === K(d);
                    c(t, {
                      replace: n,
                      state: i,
                      preventScrollReset: l,
                      relative: u,
                      unstable_viewTransition: s,
                    });
                  }
                },
                [f, c, d, o, i, a, t, l, u, s],
              );
            })(c, {
              replace: l,
              state: u,
              target: s,
              preventScrollReset: f,
              relative: o,
              unstable_viewTransition: d,
            });
          return e.createElement(
            "a",
            Xt({}, p, {
              href: r || b,
              onClick:
                v || i
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || w(e);
                    },
              ref: n,
              target: s,
            }),
          );
        });
      var pn, hn;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(pn || (pn = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(hn || (hn = {}));
      n(399);
      Object.create(null);
      function vn() {
        if (console && console.warn) {
          for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          "string" === typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])),
            (e = console).warn.apply(e, n);
        }
      }
      var gn = {};
      function mn() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        ("string" === typeof t[0] && gn[t[0]]) ||
          ("string" === typeof t[0] && (gn[t[0]] = new Date()),
          vn.apply(void 0, t));
      }
      var yn = function (e, t) {
        return function () {
          if (e.isInitialized) t();
          else {
            e.on("initialized", function n() {
              setTimeout(function () {
                e.off("initialized", n);
              }, 0),
                t();
            });
          }
        };
      };
      function bn(e, t, n) {
        e.loadNamespaces(t, yn(e, n));
      }
      function wn(e, t, n, r) {
        "string" === typeof n && (n = [n]),
          n.forEach(function (t) {
            e.options.ns.indexOf(t) < 0 && e.options.ns.push(t);
          }),
          e.loadLanguages(t, yn(e, r));
      }
      function kn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function xn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? kn(Object(n), !0).forEach(function (t) {
                T(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : kn(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Sn =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        En = {
          "&amp;": "&",
          "&#38;": "&",
          "&lt;": "<",
          "&#60;": "<",
          "&gt;": ">",
          "&#62;": ">",
          "&apos;": "'",
          "&#39;": "'",
          "&quot;": '"',
          "&#34;": '"',
          "&nbsp;": " ",
          "&#160;": " ",
          "&copy;": "\xa9",
          "&#169;": "\xa9",
          "&reg;": "\xae",
          "&#174;": "\xae",
          "&hellip;": "\u2026",
          "&#8230;": "\u2026",
          "&#x2F;": "/",
          "&#47;": "/",
        },
        Cn = function (e) {
          return En[e];
        },
        Ln = {
          bindI18n: "languageChanged",
          bindI18nStore: "",
          transEmptyNodeValue: "",
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: "",
          transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
          useSuspense: !0,
          unescape: function (e) {
            return e.replace(Sn, Cn);
          },
        };
      var Nn;
      var Pn = {
          type: "3rdParty",
          init: function (e) {
            !(function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              Ln = xn(xn({}, Ln), e);
            })(e.options.react),
              (function (e) {
                Nn = e;
              })(e);
          },
        },
        On = (0, e.createContext)(),
        Rn = (function () {
          function e() {
            E(this, e), (this.usedNamespaces = {});
          }
          return (
            S(e, [
              {
                key: "addUsedNamespaces",
                value: function (e) {
                  var t = this;
                  e.forEach(function (e) {
                    t.usedNamespaces[e] || (t.usedNamespaces[e] = !0);
                  });
                },
              },
              {
                key: "getUsedNamespaces",
                value: function () {
                  return Object.keys(this.usedNamespaces);
                },
              },
            ]),
            e
          );
        })();
      var jn = function (t, n) {
        var r = (0, e.useRef)();
        return (
          (0, e.useEffect)(
            function () {
              r.current = n ? r.current : t;
            },
            [t, n],
          ),
          r.current
        );
      };
      function Tn(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = n.i18n,
          a = (0, e.useContext)(On) || {},
          o = a.i18n,
          i = a.defaultNS,
          l = r || o || Nn;
        if ((l && !l.reportNamespaces && (l.reportNamespaces = new Rn()), !l)) {
          mn(
            "You will need to pass in an i18next instance by using initReactI18next",
          );
          var u = function (e, t) {
              return "string" === typeof t
                ? t
                : t &&
                    "object" === typeof t &&
                    "string" === typeof t.defaultValue
                  ? t.defaultValue
                  : Array.isArray(e)
                    ? e[e.length - 1]
                    : e;
            },
            s = [u, {}, !1];
          return (s.t = u), (s.i18n = {}), (s.ready = !1), s;
        }
        l.options.react &&
          void 0 !== l.options.react.wait &&
          mn(
            "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.",
          );
        var f = xn(xn(xn({}, Ln), l.options.react), n),
          d = f.useSuspense,
          p = f.keyPrefix,
          h = t || i || (l.options && l.options.defaultNS);
        (h = "string" === typeof h ? [h] : h || ["translation"]),
          l.reportNamespaces.addUsedNamespaces &&
            l.reportNamespaces.addUsedNamespaces(h);
        var v =
          (l.isInitialized || l.initializedStoreOnce) &&
          h.every(function (e) {
            return (function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              return t.languages && t.languages.length
                ? void 0 !== t.options.ignoreJSONStructure
                  ? t.hasLoadedNamespace(e, {
                      lng: n.lng,
                      precheck: function (t, r) {
                        if (
                          n.bindI18n &&
                          n.bindI18n.indexOf("languageChanging") > -1 &&
                          t.services.backendConnector.backend &&
                          t.isLanguageChangingTo &&
                          !r(t.isLanguageChangingTo, e)
                        )
                          return !1;
                      },
                    })
                  : (function (e, t) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        r = t.languages[0],
                        a = !!t.options && t.options.fallbackLng,
                        o = t.languages[t.languages.length - 1];
                      if ("cimode" === r.toLowerCase()) return !0;
                      var i = function (e, n) {
                        var r =
                          t.services.backendConnector.state[
                            "".concat(e, "|").concat(n)
                          ];
                        return -1 === r || 2 === r;
                      };
                      return (
                        !(
                          n.bindI18n &&
                          n.bindI18n.indexOf("languageChanging") > -1 &&
                          t.services.backendConnector.backend &&
                          t.isLanguageChangingTo &&
                          !i(t.isLanguageChangingTo, e)
                        ) &&
                        (!!t.hasResourceBundle(r, e) ||
                          !(
                            t.services.backendConnector.backend &&
                            (!t.options.resources ||
                              t.options.partialBundledLanguages)
                          ) ||
                          !(!i(r, e) || (a && !i(o, e))))
                      );
                    })(e, t, n)
                : (mn("i18n.languages were undefined or empty", t.languages),
                  !0);
            })(e, l, f);
          });
        function g() {
          return l.getFixedT(
            n.lng || null,
            "fallback" === f.nsMode ? h : h[0],
            p,
          );
        }
        var m = c((0, e.useState)(g), 2),
          y = m[0],
          b = m[1],
          w = h.join();
        n.lng && (w = "".concat(n.lng).concat(w));
        var k = jn(w),
          x = (0, e.useRef)(!0);
        (0, e.useEffect)(
          function () {
            var e = f.bindI18n,
              t = f.bindI18nStore;
            function r() {
              x.current && b(g);
            }
            return (
              (x.current = !0),
              v ||
                d ||
                (n.lng
                  ? wn(l, n.lng, h, function () {
                      x.current && b(g);
                    })
                  : bn(l, h, function () {
                      x.current && b(g);
                    })),
              v && k && k !== w && x.current && b(g),
              e && l && l.on(e, r),
              t && l && l.store.on(t, r),
              function () {
                (x.current = !1),
                  e &&
                    l &&
                    e.split(" ").forEach(function (e) {
                      return l.off(e, r);
                    }),
                  t &&
                    l &&
                    t.split(" ").forEach(function (e) {
                      return l.store.off(e, r);
                    });
              }
            );
          },
          [l, w],
        );
        var S = (0, e.useRef)(!0);
        (0, e.useEffect)(
          function () {
            x.current && !S.current && b(g), (S.current = !1);
          },
          [l, p],
        );
        var E = [y, l, v];
        if (((E.t = y), (E.i18n = l), (E.ready = v), v)) return E;
        if (!v && !d) return E;
        throw new Promise(function (e) {
          n.lng
            ? wn(l, n.lng, h, function () {
                return e();
              })
            : bn(l, h, function () {
                return e();
              });
        });
      }
      function _n(t) {
        var n = t.i18n,
          r = t.defaultNS,
          a = t.children,
          o = (0, e.useMemo)(
            function () {
              return { i18n: n, defaultNS: r };
            },
            [n, r],
          );
        return (0, e.createElement)(On.Provider, { value: o }, a);
      }
      var Dn = {
          HOME: "",
          ABOUT: "about",
          PROJECTS: "projects",
          CONTACT: "contact",
          PRIVACY: "privacy",
        },
        Mn = e.lazy(function () {
          return n.e(872).then(n.bind(n, 872));
        }),
        zn = e.lazy(function () {
          return n.e(470).then(n.bind(n, 470));
        }),
        Fn = e.lazy(function () {
          return n.e(539).then(n.bind(n, 539));
        }),
        In = e.lazy(function () {
          return n.e(660).then(n.bind(n, 660));
        }),
        An = e.lazy(function () {
          return n.e(545).then(n.bind(n, 545));
        }),
        Un = [
          { path: Dn.HOME, element: (0, a.jsx)(Mn, {}) },
          { path: Dn.ABOUT, element: (0, a.jsx)(zn, {}) },
          { path: Dn.PROJECTS, element: (0, a.jsx)(Fn, {}) },
          { path: Dn.CONTACT, element: (0, a.jsx)(In, {}) },
          { path: Dn.PRIVACY, element: (0, a.jsx)(An, {}) },
        ],
        Bn = { SELECTED_LANGUAGE: "selectedLanguage" },
        Vn = { ENGLISH: "en", CASTELLANO: "es", CATALA: "ca" },
        Hn = {
          GITHUB: "https://github.com/gerardhs",
          LINKEDIN: "https://www.linkedin.com/in/gerard-heredia/",
        },
        $n = function (e) {
          var t = e.onClose,
            n = Tn().t;
          return (0, a.jsxs)("div", {
            className:
              "border-y border-neutral-500 divide-y divide-neutral-500 overflow-x-hidden flex flex-col justify-center",
            children: [
              (0, a.jsx)(ta, {
                title: n("header.labels.home"),
                href: Dn.HOME,
                onClose: t,
              }),
              (0, a.jsx)(ta, {
                title: n("header.labels.about"),
                href: Dn.ABOUT,
                onClose: t,
              }),
              (0, a.jsx)(ta, {
                title: n("header.labels.projects"),
                href: Dn.PROJECTS,
                onClose: t,
              }),
              (0, a.jsx)(ta, {
                title: n("header.labels.contact"),
                href: Dn.CONTACT,
                onClose: t,
              }),
            ],
          });
        };
      function Wn() {
        var e = Tn().t;
        return (0, a.jsxs)("div", {
          className:
            "flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12",
          children: [
            (0, a.jsx)(ea, { title: e("header.labels.home"), href: Dn.HOME }),
            (0, a.jsx)(ea, { title: e("header.labels.about"), href: Dn.ABOUT }),
            (0, a.jsx)(ea, {
              title: e("header.labels.projects"),
              href: Dn.PROJECTS,
            }),
            (0, a.jsx)(ea, {
              title: e("header.labels.contact"),
              href: Dn.CONTACT,
            }),
          ],
        });
      }
      var Kn = ["title", "titleId"];
      var qn = e.forwardRef(function (t, n) {
          var r = t.title,
            a = t.titleId,
            o = f(t, Kn);
          return e.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: n,
                "aria-labelledby": a,
              },
              o,
            ),
            r ? e.createElement("title", { id: a }, r) : null,
            e.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
            }),
          );
        }),
        Qn = ["title", "titleId"];
      var Jn = e.forwardRef(function (t, n) {
          var r = t.title,
            a = t.titleId,
            o = f(t, Qn);
          return e.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: n,
                "aria-labelledby": a,
              },
              o,
            ),
            r ? e.createElement("title", { id: a }, r) : null,
            e.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
            }),
          );
        }),
        Yn = ["title", "titleId"];
      var Gn = e.forwardRef(function (t, n) {
        var r = t.title,
          a = t.titleId,
          o = f(t, Yn);
        return e.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: n,
              "aria-labelledby": a,
            },
            o,
          ),
          r ? e.createElement("title", { id: a }, r) : null,
          e.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
          }),
        );
      });
      function Xn() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return Array.from(
          new Set(
            t.flatMap(function (e) {
              return "string" == typeof e ? e.split(" ") : [];
            }),
          ),
        )
          .filter(Boolean)
          .join(" ");
      }
      function Zn(e, t) {
        if (e in t) {
          for (
            var n = t[e],
              r = arguments.length,
              a = new Array(r > 2 ? r - 2 : 0),
              o = 2;
            o < r;
            o++
          )
            a[o - 2] = arguments[o];
          return "function" == typeof n ? n.apply(void 0, a) : n;
        }
        var i = new Error(
          'Tried to handle "'
            .concat(
              e,
              '" but there is no handler defined. Only defined handlers are: ',
            )
            .concat(
              Object.keys(t)
                .map(function (e) {
                  return '"'.concat(e, '"');
                })
                .join(", "),
              ".",
            ),
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(i, Zn), i);
      }
      var er,
        tr = ["static"],
        nr = ["unmount"],
        rr = ["as", "children", "refName"],
        ar = (function (e) {
          return (
            (e[(e.None = 0)] = "None"),
            (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
            (e[(e.Static = 2)] = "Static"),
            e
          );
        })(ar || {}),
        or =
          (((er = or || {})[(er.Unmount = 0)] = "Unmount"),
          (er[(er.Hidden = 1)] = "Hidden"),
          er);
      function ir(e) {
        var t = e.ourProps,
          n = e.theirProps,
          r = e.slot,
          a = e.defaultTag,
          o = e.features,
          i = e.visible,
          l = void 0 === i || i,
          u = e.name,
          s = ur(n, t);
        if (l) return lr(s, r, a, u);
        var c = null != o ? o : 0;
        if (2 & c) {
          var d = s.static,
            p = void 0 !== d && d,
            h = f(s, tr);
          if (p) return lr(h, r, a, u);
        }
        if (1 & c) {
          var v,
            g = s.unmount,
            m = void 0 === g || g,
            y = f(s, nr);
          return Zn(
            m ? 0 : 1,
            (T((v = {}), 0, function () {
              return null;
            }),
            T(v, 1, function () {
              return lr(
                xn(xn({}, y), {}, { hidden: !0, style: { display: "none" } }),
                r,
                a,
                u,
              );
            }),
            v),
          );
        }
        return lr(s, r, a, u);
      }
      function lr(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = arguments.length > 3 ? arguments[3] : void 0,
          o = fr(t, ["unmount", "static"]),
          i = o.as,
          l = void 0 === i ? r : i,
          u = o.children,
          s = o.refName,
          d = void 0 === s ? "ref" : s,
          p = f(o, rr),
          h = void 0 !== t.ref ? T({}, d, t.ref) : {},
          v = "function" == typeof u ? u(n) : u;
        "className" in p &&
          p.className &&
          "function" == typeof p.className &&
          (p.className = p.className(n));
        var g = {};
        if (n) {
          for (
            var m = !1, y = [], b = 0, w = Object.entries(n);
            b < w.length;
            b++
          ) {
            var k = c(w[b], 2),
              x = k[0],
              S = k[1];
            "boolean" == typeof S && (m = !0), !0 === S && y.push(x);
          }
          m && (g["data-headlessui-state"] = y.join(" "));
        }
        if (l === e.Fragment && Object.keys(cr(p)).length > 0) {
          if (!(0, e.isValidElement)(v) || (Array.isArray(v) && v.length > 1))
            throw new Error(
              [
                'Passing props on "Fragment"!',
                "",
                "The current component <".concat(
                  a,
                  ' /> is rendering a "Fragment".',
                ),
                "However we need to passthrough the following props:",
                Object.keys(p)
                  .map(function (e) {
                    return "  - ".concat(e);
                  })
                  .join("\n"),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ]
                  .map(function (e) {
                    return "  - ".concat(e);
                  })
                  .join("\n"),
              ].join("\n"),
            );
          var E = v.props,
            C =
              "function" == typeof (null == E ? void 0 : E.className)
                ? function () {
                    return Xn(
                      null == E ? void 0 : E.className.apply(E, arguments),
                      p.className,
                    );
                  }
                : Xn(null == E ? void 0 : E.className, p.className),
            L = C ? { className: C } : {};
          return (0, e.cloneElement)(
            v,
            Object.assign(
              {},
              ur(v.props, cr(fr(p, ["ref"]))),
              g,
              h,
              (function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                return {
                  ref: t.every(function (e) {
                    return null == e;
                  })
                    ? void 0
                    : function (e) {
                        var n,
                          r = F(t);
                        try {
                          for (r.s(); !(n = r.n()).done; ) {
                            var a = n.value;
                            null != a &&
                              ("function" == typeof a ? a(e) : (a.current = e));
                          }
                        } catch (o) {
                          r.e(o);
                        } finally {
                          r.f();
                        }
                      },
                };
              })(v.ref, h.ref),
              L,
            ),
          );
        }
        return (0, e.createElement)(
          l,
          Object.assign(
            {},
            fr(p, ["ref"]),
            l !== e.Fragment && h,
            l !== e.Fragment && g,
          ),
          v,
        );
      }
      function ur() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (0 === t.length) return {};
        if (1 === t.length) return t[0];
        for (var r = {}, a = {}, o = 0, i = t; o < i.length; o++) {
          var l = i[o];
          for (var u in l)
            u.startsWith("on") && "function" == typeof l[u]
              ? (null != a[u] || (a[u] = []), a[u].push(l[u]))
              : (r[u] = l[u]);
        }
        if (r.disabled || r["aria-disabled"])
          return Object.assign(
            r,
            Object.fromEntries(
              Object.keys(a).map(function (e) {
                return [e, void 0];
              }),
            ),
          );
        var s = function (e) {
          Object.assign(
            r,
            T({}, e, function (t) {
              for (
                var n = a[e],
                  r = arguments.length,
                  o = new Array(r > 1 ? r - 1 : 0),
                  i = 1;
                i < r;
                i++
              )
                o[i - 1] = arguments[i];
              var l,
                u = F(n);
              try {
                for (u.s(); !(l = u.n()).done; ) {
                  var s = l.value;
                  if (
                    (t instanceof Event ||
                      (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                    t.defaultPrevented
                  )
                    return;
                  s.apply(void 0, [t].concat(o));
                }
              } catch (c) {
                u.e(c);
              } finally {
                u.f();
              }
            }),
          );
        };
        for (var c in a) s(c);
        return r;
      }
      function sr(t) {
        var n;
        return Object.assign((0, e.forwardRef)(t), {
          displayName: null != (n = t.displayName) ? n : t.name,
        });
      }
      function cr(e) {
        var t = Object.assign({}, e);
        for (var n in t) void 0 === t[n] && delete t[n];
        return t;
      }
      function fr(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = Object.assign({}, e),
          a = F(n);
        try {
          for (a.s(); !(t = a.n()).done; ) {
            var o = t.value;
            o in r && delete r[o];
          }
        } catch (i) {
          a.e(i);
        } finally {
          a.f();
        }
        return r;
      }
      var dr = (0, e.createContext)(null);
      dr.displayName = "OpenClosedContext";
      var pr = (function (e) {
        return (
          (e[(e.Open = 1)] = "Open"),
          (e[(e.Closed = 2)] = "Closed"),
          (e[(e.Closing = 4)] = "Closing"),
          (e[(e.Opening = 8)] = "Opening"),
          e
        );
      })(pr || {});
      function hr() {
        return (0, e.useContext)(dr);
      }
      function vr(t) {
        var n = t.value,
          r = t.children;
        return e.createElement(dr.Provider, { value: n }, r);
      }
      var gr = Object.defineProperty,
        mr = function (e, t, n) {
          return (
            (function (e, t, n) {
              t in e
                ? gr(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n,
                  })
                : (e[t] = n);
            })(e, "symbol" != typeof t ? t + "" : t, n),
            n
          );
        },
        yr = (function () {
          function e() {
            E(this, e),
              mr(this, "current", this.detect()),
              mr(this, "handoffState", "pending"),
              mr(this, "currentId", 0);
          }
          return (
            S(e, [
              {
                key: "set",
                value: function (e) {
                  this.current !== e &&
                    ((this.handoffState = "pending"),
                    (this.currentId = 0),
                    (this.current = e));
                },
              },
              {
                key: "reset",
                value: function () {
                  this.set(this.detect());
                },
              },
              {
                key: "nextId",
                value: function () {
                  return ++this.currentId;
                },
              },
              {
                key: "isServer",
                get: function () {
                  return "server" === this.current;
                },
              },
              {
                key: "isClient",
                get: function () {
                  return "client" === this.current;
                },
              },
              {
                key: "detect",
                value: function () {
                  return "undefined" == typeof window ||
                    "undefined" == typeof document
                    ? "server"
                    : "client";
                },
              },
              {
                key: "handoff",
                value: function () {
                  "pending" === this.handoffState &&
                    (this.handoffState = "complete");
                },
              },
              {
                key: "isHandoffComplete",
                get: function () {
                  return "complete" === this.handoffState;
                },
              },
            ]),
            e
          );
        })(),
        br = new yr(),
        wr = function (t, n) {
          br.isServer ? (0, e.useEffect)(t, n) : (0, e.useLayoutEffect)(t, n);
        };
      function kr() {
        var t = (0, e.useRef)(!1);
        return (
          wr(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1;
              }
            );
          }, []),
          t
        );
      }
      function xr(t) {
        var n = (0, e.useRef)(t);
        return (
          wr(
            function () {
              n.current = t;
            },
            [t],
          ),
          n
        );
      }
      function Sr() {
        var n = (function () {
            var e = "undefined" == typeof document;
            return (function (e) {
              return e.useSyncExternalStore;
            })(t)(
              function () {
                return function () {};
              },
              function () {
                return !1;
              },
              function () {
                return !e;
              },
            );
          })(),
          r = c(e.useState(br.isHandoffComplete), 2),
          a = r[0],
          o = r[1];
        return (
          a && !1 === br.isHandoffComplete && o(!1),
          e.useEffect(
            function () {
              !0 !== a && o(!0);
            },
            [a],
          ),
          e.useEffect(function () {
            return br.handoff();
          }, []),
          !n && a
        );
      }
      var Er = function (t) {
          var n = xr(t);
          return e.useCallback(
            function () {
              return n.current.apply(n, arguments);
            },
            [n],
          );
        },
        Cr = Symbol();
      function Lr() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        var a = (0, e.useRef)(n);
        (0, e.useEffect)(
          function () {
            a.current = n;
          },
          [n],
        );
        var o = Er(function (e) {
          var t,
            n = F(a.current);
          try {
            for (n.s(); !(t = n.n()).done; ) {
              var r = t.value;
              null != r && ("function" == typeof r ? r(e) : (r.current = e));
            }
          } catch (o) {
            n.e(o);
          } finally {
            n.f();
          }
        });
        return n.every(function (e) {
          return null == e || (null == e ? void 0 : e[Cr]);
        })
          ? void 0
          : o;
      }
      function Nr() {
        var e = [],
          t = {
            addEventListener: function (e, n, r, a) {
              return (
                e.addEventListener(n, r, a),
                t.add(function () {
                  return e.removeEventListener(n, r, a);
                })
              );
            },
            requestAnimationFrame: (function (e) {
              function t() {
                return e.apply(this, arguments);
              }
              return (
                (t.toString = function () {
                  return e.toString();
                }),
                t
              );
            })(function () {
              var e = requestAnimationFrame.apply(void 0, arguments);
              return t.add(function () {
                return cancelAnimationFrame(e);
              });
            }),
            nextFrame: function () {
              for (
                var e = arguments.length, n = new Array(e), r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              return t.requestAnimationFrame(function () {
                return t.requestAnimationFrame.apply(t, n);
              });
            },
            setTimeout: (function (e) {
              function t() {
                return e.apply(this, arguments);
              }
              return (
                (t.toString = function () {
                  return e.toString();
                }),
                t
              );
            })(function () {
              var e = setTimeout.apply(void 0, arguments);
              return t.add(function () {
                return clearTimeout(e);
              });
            }),
            microTask: function () {
              for (
                var e = arguments.length, n = new Array(e), r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              var a = { current: !0 };
              return (
                (function (e) {
                  "function" == typeof queueMicrotask
                    ? queueMicrotask(e)
                    : Promise.resolve()
                        .then(e)
                        .catch(function (e) {
                          return setTimeout(function () {
                            throw e;
                          });
                        });
                })(function () {
                  a.current && n[0]();
                }),
                t.add(function () {
                  a.current = !1;
                })
              );
            },
            style: function (e, t, n) {
              var r = e.style.getPropertyValue(t);
              return (
                Object.assign(e.style, T({}, t, n)),
                this.add(function () {
                  Object.assign(e.style, T({}, t, r));
                })
              );
            },
            group: function (e) {
              var t = Nr();
              return (
                e(t),
                this.add(function () {
                  return t.dispose();
                })
              );
            },
            add: function (t) {
              return (
                e.push(t),
                function () {
                  var n = e.indexOf(t);
                  if (n >= 0) {
                    var r,
                      a = F(e.splice(n, 1));
                    try {
                      for (a.s(); !(r = a.n()).done; ) {
                        (0, r.value)();
                      }
                    } catch (o) {
                      a.e(o);
                    } finally {
                      a.f();
                    }
                  }
                }
              );
            },
            dispose: function () {
              var t,
                n = F(e.splice(0));
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  (0, t.value)();
                }
              } catch (r) {
                n.e(r);
              } finally {
                n.f();
              }
            },
          };
        return t;
      }
      function Pr(e) {
        for (
          var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a];
        e && r.length > 0 && (t = e.classList).add.apply(t, r);
      }
      function Or(e) {
        for (
          var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a];
        e && r.length > 0 && (t = e.classList).remove.apply(t, r);
      }
      function Rr(e, t, n, r) {
        var a = n ? "enter" : "leave",
          o = Nr(),
          i =
            void 0 !== r
              ? (function (e) {
                  var t = { called: !1 };
                  return function () {
                    if (!t.called)
                      return (t.called = !0), e.apply(void 0, arguments);
                  };
                })(r)
              : function () {};
        "enter" === a && (e.removeAttribute("hidden"), (e.style.display = ""));
        var l = Zn(a, {
            enter: function () {
              return t.enter;
            },
            leave: function () {
              return t.leave;
            },
          }),
          u = Zn(a, {
            enter: function () {
              return t.enterTo;
            },
            leave: function () {
              return t.leaveTo;
            },
          }),
          s = Zn(a, {
            enter: function () {
              return t.enterFrom;
            },
            leave: function () {
              return t.leaveFrom;
            },
          });
        return (
          Or.apply(
            void 0,
            [e].concat(
              I(t.base),
              I(t.enter),
              I(t.enterTo),
              I(t.enterFrom),
              I(t.leave),
              I(t.leaveFrom),
              I(t.leaveTo),
              I(t.entered),
            ),
          ),
          Pr.apply(void 0, [e].concat(I(t.base), I(l), I(s))),
          o.nextFrame(function () {
            Or.apply(void 0, [e].concat(I(t.base), I(l), I(s))),
              Pr.apply(void 0, [e].concat(I(t.base), I(l), I(u))),
              (function (e, t) {
                var n = Nr();
                if (!e) return n.dispose;
                var r = getComputedStyle(e),
                  a = [r.transitionDuration, r.transitionDelay].map(
                    function (e) {
                      var t = e
                          .split(",")
                          .filter(Boolean)
                          .map(function (e) {
                            return e.includes("ms")
                              ? parseFloat(e)
                              : 1e3 * parseFloat(e);
                          })
                          .sort(function (e, t) {
                            return t - e;
                          }),
                        n = c(t, 1)[0];
                      return void 0 === n ? 0 : n;
                    },
                  ),
                  o = c(a, 2),
                  i = o[0] + o[1];
                if (0 !== i) {
                  n.group(function (n) {
                    n.setTimeout(function () {
                      t(), n.dispose();
                    }, i),
                      n.addEventListener(e, "transitionrun", function (e) {
                        e.target === e.currentTarget && n.dispose();
                      });
                  });
                  var l = n.addEventListener(e, "transitionend", function (e) {
                    e.target === e.currentTarget && (t(), l());
                  });
                } else t();
                n.add(function () {
                  return t();
                }),
                  n.dispose;
              })(e, function () {
                return (
                  Or.apply(void 0, [e].concat(I(t.base), I(l))),
                  Pr.apply(void 0, [e].concat(I(t.base), I(t.entered))),
                  i()
                );
              });
          }),
          o.dispose
        );
      }
      function jr() {
        var t = c((0, e.useState)(Nr), 1)[0];
        return (
          (0, e.useEffect)(
            function () {
              return function () {
                return t.dispose();
              };
            },
            [t],
          ),
          t
        );
      }
      function Tr(e) {
        var t = e.immediate,
          n = e.container,
          r = e.direction,
          a = e.classes,
          o = e.onStart,
          i = e.onStop,
          l = kr(),
          u = jr(),
          s = xr(r);
        wr(
          function () {
            t && (s.current = "enter");
          },
          [t],
        ),
          wr(
            function () {
              var e = Nr();
              u.add(e.dispose);
              var t = n.current;
              if (t && "idle" !== s.current && l.current)
                return (
                  e.dispose(),
                  o.current(s.current),
                  e.add(
                    Rr(t, a.current, "enter" === s.current, function () {
                      e.dispose(), i.current(s.current);
                    }),
                  ),
                  e.dispose
                );
            },
            [r],
          );
      }
      function _r() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          n = c((0, e.useState)(t), 2),
          r = n[0],
          a = n[1],
          o = kr(),
          i = (0, e.useCallback)(
            function (e) {
              o.current &&
                a(function (t) {
                  return t | e;
                });
            },
            [r, o],
          ),
          l = (0, e.useCallback)(
            function (e) {
              return Boolean(r & e);
            },
            [r],
          ),
          u = (0, e.useCallback)(
            function (e) {
              o.current &&
                a(function (t) {
                  return t & ~e;
                });
            },
            [a, o],
          ),
          s = (0, e.useCallback)(
            function (e) {
              o.current &&
                a(function (t) {
                  return t ^ e;
                });
            },
            [a],
          );
        return {
          flags: r,
          addFlag: i,
          hasFlag: l,
          removeFlag: u,
          toggleFlag: s,
        };
      }
      var Dr = [
          "beforeEnter",
          "afterEnter",
          "beforeLeave",
          "afterLeave",
          "enter",
          "enterFrom",
          "enterTo",
          "entered",
          "leave",
          "leaveFrom",
          "leaveTo",
        ],
        Mr = ["show", "appear", "unmount"];
      function zr() {
        return (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
        )
          .split(" ")
          .filter(function (e) {
            return e.trim().length > 1;
          });
      }
      var Fr = (0, e.createContext)(null);
      Fr.displayName = "TransitionContext";
      var Ir = (function (e) {
        return (e.Visible = "visible"), (e.Hidden = "hidden"), e;
      })(Ir || {});
      var Ar = (0, e.createContext)(null);
      function Ur(e) {
        return "children" in e
          ? Ur(e.children)
          : e.current
              .filter(function (e) {
                return null !== e.el.current;
              })
              .filter(function (e) {
                return "visible" === e.state;
              }).length > 0;
      }
      function Br(t, n) {
        var r = xr(t),
          a = (0, e.useRef)([]),
          o = kr(),
          i = jr(),
          l = Er(function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : or.Hidden,
              l = a.current.findIndex(function (t) {
                return t.el === e;
              });
            -1 !== l &&
              (Zn(
                n,
                (T((t = {}), or.Unmount, function () {
                  a.current.splice(l, 1);
                }),
                T(t, or.Hidden, function () {
                  a.current[l].state = "hidden";
                }),
                t),
              ),
              i.microTask(function () {
                var e;
                !Ur(a) && o.current && (null == (e = r.current) || e.call(r));
              }));
          }),
          u = Er(function (e) {
            var t = a.current.find(function (t) {
              return t.el === e;
            });
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : a.current.push({ el: e, state: "visible" }),
              function () {
                return l(e, or.Unmount);
              }
            );
          }),
          s = (0, e.useRef)([]),
          f = (0, e.useRef)(Promise.resolve()),
          d = (0, e.useRef)({ enter: [], leave: [], idle: [] }),
          p = Er(function (e, t, r) {
            s.current.splice(0),
              n &&
                (n.chains.current[t] = n.chains.current[t].filter(function (t) {
                  return c(t, 1)[0] !== e;
                })),
              null == n ||
                n.chains.current[t].push([
                  e,
                  new Promise(function (e) {
                    s.current.push(e);
                  }),
                ]),
              null == n ||
                n.chains.current[t].push([
                  e,
                  new Promise(function (e) {
                    Promise.all(
                      d.current[t].map(function (e) {
                        var t = c(e, 2);
                        t[0];
                        return t[1];
                      }),
                    ).then(function () {
                      return e();
                    });
                  }),
                ]),
              "enter" === t
                ? (f.current = f.current
                    .then(function () {
                      return null == n ? void 0 : n.wait.current;
                    })
                    .then(function () {
                      return r(t);
                    }))
                : r(t);
          }),
          h = Er(function (e, t, n) {
            Promise.all(
              d.current[t].splice(0).map(function (e) {
                var t = c(e, 2);
                t[0];
                return t[1];
              }),
            )
              .then(function () {
                var e;
                null == (e = s.current.shift()) || e();
              })
              .then(function () {
                return n(t);
              });
          });
        return (0, e.useMemo)(
          function () {
            return {
              children: a,
              register: u,
              unregister: l,
              onStart: p,
              onStop: h,
              wait: f,
              chains: d,
            };
          },
          [u, l, a, p, h, d, f],
        );
      }
      function Vr() {}
      Ar.displayName = "NestingContext";
      var Hr = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
      function $r(e) {
        var t,
          n,
          r = {},
          a = F(Hr);
        try {
          for (a.s(); !(n = a.n()).done; ) {
            var o = n.value;
            r[o] = null != (t = e[o]) ? t : Vr;
          }
        } catch (i) {
          a.e(i);
        } finally {
          a.f();
        }
        return r;
      }
      var Wr = ar.RenderStrategy;
      var Kr = sr(function (t, n) {
          var r = t.show,
            a = t.appear,
            o = void 0 !== a && a,
            i = t.unmount,
            l = void 0 === i || i,
            u = f(t, Mr),
            s = (0, e.useRef)(null),
            d = Lr(s, n);
          Sr();
          var p = hr();
          if (
            (void 0 === r && null !== p && (r = (p & pr.Open) === pr.Open),
            ![!0, !1].includes(r))
          )
            throw new Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop.",
            );
          var h = c((0, e.useState)(r ? "visible" : "hidden"), 2),
            v = h[0],
            g = h[1],
            m = Br(function () {
              g("hidden");
            }),
            y = c((0, e.useState)(!0), 2),
            b = y[0],
            w = y[1],
            k = (0, e.useRef)([r]);
          wr(
            function () {
              !1 !== b &&
                k.current[k.current.length - 1] !== r &&
                (k.current.push(r), w(!1));
            },
            [k, r],
          );
          var x = (0, e.useMemo)(
            function () {
              return { show: r, appear: o, initial: b };
            },
            [r, o, b],
          );
          (0, e.useEffect)(
            function () {
              if (r) g("visible");
              else if (Ur(m)) {
                var e = s.current;
                if (!e) return;
                var t = e.getBoundingClientRect();
                0 === t.x &&
                  0 === t.y &&
                  0 === t.width &&
                  0 === t.height &&
                  g("hidden");
              } else g("hidden");
            },
            [r, m],
          );
          var S = { unmount: l },
            E = Er(function () {
              var e;
              b && w(!1), null == (e = t.beforeEnter) || e.call(t);
            }),
            C = Er(function () {
              var e;
              b && w(!1), null == (e = t.beforeLeave) || e.call(t);
            });
          return e.createElement(
            Ar.Provider,
            { value: m },
            e.createElement(
              Fr.Provider,
              { value: x },
              ir({
                ourProps: xn(
                  xn({}, S),
                  {},
                  {
                    as: e.Fragment,
                    children: e.createElement(
                      qr,
                      xn(
                        xn(xn({ ref: d }, S), u),
                        {},
                        { beforeEnter: E, beforeLeave: C },
                      ),
                    ),
                  },
                ),
                theirProps: {},
                defaultTag: e.Fragment,
                features: Wr,
                visible: "visible" === v,
                name: "Transition",
              }),
            ),
          );
        }),
        qr = sr(function (t, n) {
          var r,
            a,
            o,
            i = t.beforeEnter,
            l = t.afterEnter,
            u = t.beforeLeave,
            s = t.afterLeave,
            d = t.enter,
            p = t.enterFrom,
            h = t.enterTo,
            v = t.entered,
            g = t.leave,
            m = t.leaveFrom,
            y = t.leaveTo,
            b = f(t, Dr),
            w = (0, e.useRef)(null),
            k = Lr(w, n),
            x = null == (a = b.unmount) || a ? or.Unmount : or.Hidden,
            S = (function () {
              var t = (0, e.useContext)(Fr);
              if (null === t)
                throw new Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
                );
              return t;
            })(),
            E = S.show,
            C = S.appear,
            L = S.initial,
            N = c((0, e.useState)(E ? "visible" : "hidden"), 2),
            P = N[0],
            O = N[1],
            R = (function () {
              var t = (0, e.useContext)(Ar);
              if (null === t)
                throw new Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
                );
              return t;
            })(),
            j = R.register,
            _ = R.unregister;
          (0, e.useEffect)(
            function () {
              return j(w);
            },
            [j, w],
          ),
            (0, e.useEffect)(
              function () {
                var e;
                if (x === or.Hidden && w.current)
                  return E && "visible" !== P
                    ? void O("visible")
                    : Zn(
                        P,
                        (T((e = {}), "hidden", function () {
                          return _(w);
                        }),
                        T(e, "visible", function () {
                          return j(w);
                        }),
                        e),
                      );
              },
              [P, w, j, _, E, x],
            );
          var D = xr({
              base: zr(b.className),
              enter: zr(d),
              enterFrom: zr(p),
              enterTo: zr(h),
              entered: zr(v),
              leave: zr(g),
              leaveFrom: zr(m),
              leaveTo: zr(y),
            }),
            M = (function (t) {
              var n = (0, e.useRef)($r(t));
              return (
                (0, e.useEffect)(
                  function () {
                    n.current = $r(t);
                  },
                  [t],
                ),
                n
              );
            })({
              beforeEnter: i,
              afterEnter: l,
              beforeLeave: u,
              afterLeave: s,
            }),
            z = Sr();
          (0, e.useEffect)(
            function () {
              if (z && "visible" === P && null === w.current)
                throw new Error(
                  "Did you forget to passthrough the `ref` to the actual DOM node?",
                );
            },
            [w, P, z],
          );
          var F = C && E && L,
            A = !z || (L && !C) ? "idle" : E ? "enter" : "leave",
            U = _r(0),
            B = Er(function (e) {
              return Zn(e, {
                enter: function () {
                  U.addFlag(pr.Opening), M.current.beforeEnter();
                },
                leave: function () {
                  U.addFlag(pr.Closing), M.current.beforeLeave();
                },
                idle: function () {},
              });
            }),
            V = Er(function (e) {
              return Zn(e, {
                enter: function () {
                  U.removeFlag(pr.Opening), M.current.afterEnter();
                },
                leave: function () {
                  U.removeFlag(pr.Closing), M.current.afterLeave();
                },
                idle: function () {},
              });
            }),
            H = Br(function () {
              O("hidden"), _(w);
            }, R);
          Tr({
            immediate: F,
            container: w,
            classes: D,
            direction: A,
            onStart: xr(function (e) {
              H.onStart(w, e, B);
            }),
            onStop: xr(function (e) {
              H.onStop(w, e, V), "leave" === e && !Ur(H) && (O("hidden"), _(w));
            }),
          });
          var $ = b,
            W = { ref: k };
          return (
            F
              ? ($ = xn(
                  xn({}, $),
                  {},
                  {
                    className: Xn.apply(
                      void 0,
                      [b.className].concat(
                        I(D.current.enter),
                        I(D.current.enterFrom),
                      ),
                    ),
                  },
                ))
              : (($.className = Xn(
                  b.className,
                  null == (o = w.current) ? void 0 : o.className,
                )),
                "" === $.className && delete $.className),
            e.createElement(
              Ar.Provider,
              { value: H },
              e.createElement(
                vr,
                {
                  value:
                    Zn(
                      P,
                      ((r = {}),
                      T(r, "visible", pr.Open),
                      T(r, "hidden", pr.Closed),
                      r),
                    ) | U.flags,
                },
                ir({
                  ourProps: W,
                  theirProps: $,
                  defaultTag: "div",
                  features: Wr,
                  visible: "visible" === P,
                  name: "Transition.Child",
                }),
              ),
            )
          );
        }),
        Qr = sr(function (t, n) {
          var r = null !== (0, e.useContext)(Fr),
            a = null !== hr();
          return e.createElement(
            e.Fragment,
            null,
            !r && a
              ? e.createElement(Kr, xn({ ref: n }, t))
              : e.createElement(qr, xn({ ref: n }, t)),
          );
        }),
        Jr = Object.assign(Kr, { Child: Qr, Root: Kr }),
        Yr = function () {
          var t = Tn(),
            n = t.t,
            r = t.i18n,
            o = (0, e.useRef)(null),
            i = (0, e.useRef)(null),
            l = c((0, e.useState)(!1), 2),
            u = l[0],
            s = l[1],
            f = function (e) {
              r.changeLanguage(e),
                localStorage.setItem(Bn.SELECTED_LANGUAGE, e);
            };
          return (
            (0, e.useEffect)(
              function () {
                var e = function (e) {
                  u &&
                  i.current &&
                  !i.current.contains(e.target) &&
                  o.current &&
                  !o.current.contains(e.target)
                    ? s(!1)
                    : i.current &&
                      !u &&
                      i.current.contains(e.target) &&
                      i.current.blur();
                };
                return (
                  window.addEventListener("click", e),
                  function () {
                    window.removeEventListener("click", e);
                  }
                );
              },
              [o, i, u],
            ),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("button", {
                  ref: i,
                  type: "button",
                  className:
                    "w-24  flex px-3 py-1.5 font-medium border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
                  onClick: function () {
                    s(!u);
                  },
                  children: [
                    (0, a.jsx)(qn, {
                      className: "h-4 w-4 me-1 mt-0.5",
                      strokeWidth: 1,
                    }),
                    (0, a.jsx)("span", {
                      className: "w-6",
                      children: r.language.toLocaleUpperCase(),
                    }),
                    (0, a.jsx)(Jn, {
                      className:
                        "h-4 w-4 ml-2 mt-[0.2rem] transition-transform duration-700 ease-in-out transform ".concat(
                          u
                            ? "translate-y-[-0.1em] rotate-[-180deg]"
                            : "rotate-0",
                        ),
                    }),
                  ],
                }),
                (0, a.jsx)(Jr, {
                  show: u,
                  enter: "transition-opacity duration-500",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "transition-opacity duration-500",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, a.jsx)("div", {
                    ref: o,
                    className:
                      "w-28 z-10 absolute translate-y-2 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700",
                    children: (0, a.jsxs)("ul", {
                      className:
                        "py-2 text-sm text-gray-700 dark:text-gray-200",
                      children: [
                        (0, a.jsx)("li", {
                          className:
                            "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer",
                          onClick: function () {
                            f(Vn.ENGLISH);
                          },
                          children: (0, a.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                              (0, a.jsx)("span", {
                                children: n("language.en"),
                              }),
                              r.language === Vn.ENGLISH &&
                                (0, a.jsx)(Gn, { className: "h-5 w-5" }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("li", {
                          className:
                            "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer",
                          onClick: function () {
                            f(Vn.CASTELLANO);
                          },
                          children: (0, a.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                              (0, a.jsxs)("span", {
                                children: [" ", n("language.es")],
                              }),
                              r.language === Vn.CASTELLANO &&
                                (0, a.jsx)(Gn, { className: "h-5 w-5" }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("li", {
                          className:
                            "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer",
                          onClick: function () {
                            f(Vn.CATALA);
                          },
                          children: (0, a.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                              (0, a.jsx)("span", {
                                children: n("language.ca"),
                              }),
                              r.language === Vn.CATALA &&
                                (0, a.jsx)(Gn, { className: "h-5 w-5" }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        };
      function Gr() {
        var t = Tn().t,
          n = c(e.useState(!1), 2),
          r = n[0],
          o = n[1],
          i = function () {
            return window.innerWidth >= 1024 && o(!1);
          };
        return (
          e.useEffect(function () {
            return (
              window.addEventListener("resize", i),
              function () {
                window.removeEventListener("resize", i);
              }
            );
          }, []),
          (0, a.jsxs)("nav", {
            className: "my-auto mx-auto max-w-screen-2xl px-3 py-6",
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, a.jsx)(dn, {
                    to: "",
                    className:
                      "mr-2 font-semibold text-xl cursor-pointer py-1.5",
                    children: t("header.name"),
                  }),
                  (0, a.jsxs)("div", {
                    className: "hidden lg:flex items-center gap-10",
                    children: [
                      (0, a.jsx)(Wn, {}),
                      (0, a.jsx)("div", {
                        className: "mr-2",
                        children: (0, a.jsx)(Yr, {}),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "lg:hidden",
                    children: (0, a.jsx)("button", {
                      className:
                        "ml-auto h-12 w-12 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent ",
                      onClick: function () {
                        return o(!r);
                      },
                      children: r
                        ? (0, a.jsx)(p, {
                            className: "h-12 w-12",
                            strokeWidth: 2,
                          })
                        : (0, a.jsx)(g, {
                            className: "h-12 w-12",
                            strokeWidth: 2,
                          }),
                    }),
                  }),
                ],
              }),
              r &&
                (0, a.jsx)("div", {
                  className:
                    "w-full block flex-grow lg:flex lg:items-center lg:w-auto ".concat(
                      r ? "block" : "hidden",
                    ),
                  children: (0, a.jsxs)("div", {
                    className: "max-h-64 overflow-y-auto flex flex-col gap-2",
                    children: [
                      (0, a.jsx)($n, {
                        onClose: function () {
                          o(!1);
                        },
                      }),
                      (0, a.jsx)("div", { className: "flex justify-end" }),
                    ],
                  }),
                }),
            ],
          })
        );
      }
      var Xr = function () {
        var e = Tn().t;
        return (0, a.jsx)("footer", {
          className: "fixed bottom-0 w-full",
          children: (0, a.jsxs)("div", {
            className:
              "p-2 w-full mx-auto max-w-screen-2xl flex items-center justify-between",
            children: [
              (0, a.jsx)("span", {
                className:
                  "text-sm text-gray-500 sm:text-center dark:text-gray-400",
                children: e("footer.copyright"),
              }),
              (0, a.jsxs)("ul", {
                className:
                  "flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0",
                children: [
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)(dn, {
                      to: Dn.HOME,
                      className:
                        "underline hover:no-underline hover:text-gray-900 m-4",
                      children: e("footer.labels.home"),
                    }),
                  }),
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)(dn, {
                      to: Dn.ABOUT,
                      className:
                        "underline hover:no-underline hover:text-gray-900 m-4",
                      children: e("footer.labels.about"),
                    }),
                  }),
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)(dn, {
                      to: Dn.PROJECTS,
                      className:
                        "underline hover:no-underline hover:text-gray-900 m-4",
                      children: e("footer.labels.projects"),
                    }),
                  }),
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)(dn, {
                      to: Dn.CONTACT,
                      className:
                        "underline hover:no-underline hover:text-gray-900 m-4",
                      children: e("footer.labels.contact"),
                    }),
                  }),
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)(dn, {
                      to: Dn.PRIVACY,
                      className:
                        "underline hover:no-underline hover:text-gray-900 m-4",
                      children: e("footer.labels.privacy"),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-6 m-4",
                    children: [
                      (0, a.jsx)(dn, {
                        to: Hn.GITHUB,
                        className: "p-1 rounded hover:text-gray-900",
                        children: (0, a.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-5 w-5",
                          fill: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, a.jsx)("path", {
                            d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                          }),
                        }),
                      }),
                      (0, a.jsx)(dn, {
                        to: Hn.LINKEDIN,
                        className: "p-1 rounded hover:text-gray-900",
                        children: (0, a.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-4 w-4",
                          fill: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, a.jsx)("path", {
                            d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      function Zr() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(o, {}),
            (0, a.jsx)("main", {
              children: (0, a.jsx)(e.Suspense, {
                fallback: (0, a.jsx)("div", { children: "Loading..." }),
                children: (0, a.jsx)(qt, {}),
              }),
            }),
            (0, a.jsx)(Xr, {}),
          ],
        });
      }
      var ea = function (e) {
          var t = e.href,
            n = e.title,
            r = jt().pathname.substring(1) === t;
          return (0, a.jsx)(dn, {
            to: t,
            className:
              "text-center font-medium transition-all duration-500 ease-in-out \n      relative before:content-[''] before:absolute before:block before:w-full before:h-[0.075rem] \n      before:bottom-0 before:left-0 before:bg-black\n      before:scale-x-0 before:origin-top-left before:hover:scale-x-100 \n      before:transition-all before:ease-in-out before:duration-500 ".concat(
                r ? "before:scale-x-100" : "",
              ),
            children: n,
          });
        },
        ta = function (e) {
          var t = e.href,
            n = e.title,
            r = e.onClose;
          return (0, a.jsx)(dn, {
            to: t,
            className:
              "font-medium p-2 duration-300 ease-in-out hover:bg-neutral-50",
            onClick: function () {
              r();
            },
            children: (0, a.jsx)("div", {
              className:
                "transition-all duration-300 ease-in-out hover:translate-x-2",
              children: n,
            }),
          });
        };
      var na = function () {
          var e = (function (e, t) {
            return De({
              basename: null == t ? void 0 : t.basename,
              future: Xt({}, null == t ? void 0 : t.future, {
                v7_prependBasename: !0,
              }),
              history:
                ((n = { window: null == t ? void 0 : t.window }),
                void 0 === n && (n = {}),
                Q(
                  function (e, t) {
                    var n = e.location;
                    return W(
                      "",
                      { pathname: n.pathname, search: n.search, hash: n.hash },
                      (t.state && t.state.usr) || null,
                      (t.state && t.state.key) || "default",
                    );
                  },
                  function (e, t) {
                    return "string" === typeof t ? t : K(t);
                  },
                  null,
                  n,
                )),
              hydrationData: (null == t ? void 0 : t.hydrationData) || tn(),
              routes: e,
              mapRouteProperties: Gt,
              window: null == t ? void 0 : t.window,
            }).initialize();
            var n;
          })([{ element: (0, a.jsx)(Zr, {}), children: Un }]);
          return (0, a.jsx)("div", {
            className: "bg-background h-screen",
            children: (0, a.jsx)(un, { router: e }),
          });
        },
        ra = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  o = t.getLCP,
                  i = t.getTTFB;
                n(e), r(e), a(e), o(e), i(e);
              });
        },
        aa = {
          type: "logger",
          log: function (e) {
            this.output("log", e);
          },
          warn: function (e) {
            this.output("warn", e);
          },
          error: function (e) {
            this.output("error", e);
          },
          output: function (e, t) {
            console && console[e] && console[e].apply(console, t);
          },
        },
        oa = (function () {
          function e(t) {
            E(this, e);
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            this.init(t, n);
          }
          return (
            S(e, [
              {
                key: "init",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (this.prefix = t.prefix || "i18next:"),
                    (this.logger = e || aa),
                    (this.options = t),
                    (this.debug = t.debug);
                },
              },
              {
                key: "log",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "log", "", !0);
                },
              },
              {
                key: "warn",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "warn", "", !0);
                },
              },
              {
                key: "error",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "error", "");
                },
              },
              {
                key: "deprecate",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
                },
              },
              {
                key: "forward",
                value: function (e, t, n, r) {
                  return r && !this.debug
                    ? null
                    : ("string" === typeof e[0] &&
                        (e[0] = ""
                          .concat(n)
                          .concat(this.prefix, " ")
                          .concat(e[0])),
                      this.logger[t](e));
                },
              },
              {
                key: "create",
                value: function (t) {
                  return new e(
                    this.logger,
                    xn(
                      xn(
                        {},
                        { prefix: "".concat(this.prefix, ":").concat(t, ":") },
                      ),
                      this.options,
                    ),
                  );
                },
              },
              {
                key: "clone",
                value: function (t) {
                  return (
                    ((t = t || this.options).prefix = t.prefix || this.prefix),
                    new e(this.logger, t)
                  );
                },
              },
            ]),
            e
          );
        })(),
        ia = new oa(),
        la = (function () {
          function e() {
            E(this, e), (this.observers = {});
          }
          return (
            S(e, [
              {
                key: "on",
                value: function (e, t) {
                  var n = this;
                  return (
                    e.split(" ").forEach(function (e) {
                      (n.observers[e] = n.observers[e] || []),
                        n.observers[e].push(t);
                    }),
                    this
                  );
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  this.observers[e] &&
                    (t
                      ? (this.observers[e] = this.observers[e].filter(
                          function (e) {
                            return e !== t;
                          },
                        ))
                      : delete this.observers[e]);
                },
              },
              {
                key: "emit",
                value: function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  this.observers[e] &&
                    [].concat(this.observers[e]).forEach(function (e) {
                      e.apply(void 0, n);
                    });
                  this.observers["*"] &&
                    [].concat(this.observers["*"]).forEach(function (t) {
                      t.apply(t, [e].concat(n));
                    });
                },
              },
            ]),
            e
          );
        })();
      function ua() {
        var e,
          t,
          n = new Promise(function (n, r) {
            (e = n), (t = r);
          });
        return (n.resolve = e), (n.reject = t), n;
      }
      function sa(e) {
        return null == e ? "" : "" + e;
      }
      function ca(e, t, n) {
        function r(e) {
          return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
        }
        function a() {
          return !e || "string" === typeof e;
        }
        for (
          var o = "string" !== typeof t ? [].concat(t) : t.split(".");
          o.length > 1;

        ) {
          if (a()) return {};
          var i = r(o.shift());
          !e[i] && n && (e[i] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, i) ? e[i] : {});
        }
        return a() ? {} : { obj: e, k: r(o.shift()) };
      }
      function fa(e, t, n) {
        var r = ca(e, t, Object);
        r.obj[r.k] = n;
      }
      function da(e, t) {
        var n = ca(e, t),
          r = n.obj,
          a = n.k;
        if (r) return r[a];
      }
      function pa(e, t, n) {
        for (var r in t)
          "__proto__" !== r &&
            "constructor" !== r &&
            (r in e
              ? "string" === typeof e[r] ||
                e[r] instanceof String ||
                "string" === typeof t[r] ||
                t[r] instanceof String
                ? n && (e[r] = t[r])
                : pa(e[r], t[r], n)
              : (e[r] = t[r]));
        return e;
      }
      function ha(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var va = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      function ga(e) {
        return "string" === typeof e
          ? e.replace(/[&<>"'\/]/g, function (e) {
              return va[e];
            })
          : e;
      }
      var ma = [" ", ",", "?", "!", ";"];
      function ya(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
        if (e) {
          if (e[t]) return e[t];
          for (var r = t.split(n), a = e, o = 0; o < r.length; ++o) {
            if (!a) return;
            if ("string" === typeof a[r[o]] && o + 1 < r.length) return;
            if (void 0 === a[r[o]]) {
              for (
                var i = 2, l = r.slice(o, o + i).join(n), u = a[l];
                void 0 === u && r.length > o + i;

              )
                i++, (u = a[(l = r.slice(o, o + i).join(n))]);
              if (void 0 === u) return;
              if (null === u) return null;
              if (t.endsWith(l)) {
                if ("string" === typeof u) return u;
                if (l && "string" === typeof u[l]) return u[l];
              }
              var s = r.slice(o + i).join(n);
              return s ? ya(u, s, n) : void 0;
            }
            a = a[r[o]];
          }
          return a;
        }
      }
      function ba(e) {
        return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
      }
      var wa = (function (e) {
          L(n, e);
          var t = j(n);
          function n(e) {
            var r;
            E(this, n);
            var a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { ns: ["translation"], defaultNS: "translation" };
            return (
              ((r = t.call(this)).data = e || {}),
              (r.options = a),
              void 0 === r.options.keySeparator &&
                (r.options.keySeparator = "."),
              void 0 === r.options.ignoreJSONStructure &&
                (r.options.ignoreJSONStructure = !0),
              r
            );
          }
          return (
            S(n, [
              {
                key: "addNamespaces",
                value: function (e) {
                  this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
                },
              },
              {
                key: "removeNamespaces",
                value: function (e) {
                  var t = this.options.ns.indexOf(e);
                  t > -1 && this.options.ns.splice(t, 1);
                },
              },
              {
                key: "getResource",
                value: function (e, t, n) {
                  var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    a =
                      void 0 !== r.keySeparator
                        ? r.keySeparator
                        : this.options.keySeparator,
                    o =
                      void 0 !== r.ignoreJSONStructure
                        ? r.ignoreJSONStructure
                        : this.options.ignoreJSONStructure,
                    i = [e, t];
                  n && "string" !== typeof n && (i = i.concat(n)),
                    n &&
                      "string" === typeof n &&
                      (i = i.concat(a ? n.split(a) : n)),
                    e.indexOf(".") > -1 && (i = e.split("."));
                  var l = da(this.data, i);
                  return l || !o || "string" !== typeof n
                    ? l
                    : ya(this.data && this.data[e] && this.data[e][t], n, a);
                },
              },
              {
                key: "addResource",
                value: function (e, t, n, r) {
                  var a =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    o =
                      void 0 !== a.keySeparator
                        ? a.keySeparator
                        : this.options.keySeparator,
                    i = [e, t];
                  n && (i = i.concat(o ? n.split(o) : n)),
                    e.indexOf(".") > -1 &&
                      ((r = t), (t = (i = e.split("."))[1])),
                    this.addNamespaces(t),
                    fa(this.data, i, r),
                    a.silent || this.emit("added", e, t, n, r);
                },
              },
              {
                key: "addResources",
                value: function (e, t, n) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 };
                  for (var a in n)
                    ("string" !== typeof n[a] &&
                      "[object Array]" !==
                        Object.prototype.toString.apply(n[a])) ||
                      this.addResource(e, t, a, n[a], { silent: !0 });
                  r.silent || this.emit("added", e, t, n);
                },
              },
              {
                key: "addResourceBundle",
                value: function (e, t, n, r, a) {
                  var o =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    i = [e, t];
                  e.indexOf(".") > -1 &&
                    ((r = n), (n = t), (t = (i = e.split("."))[1])),
                    this.addNamespaces(t);
                  var l = da(this.data, i) || {};
                  r ? pa(l, n, a) : (l = xn(xn({}, l), n)),
                    fa(this.data, i, l),
                    o.silent || this.emit("added", e, t, n);
                },
              },
              {
                key: "removeResourceBundle",
                value: function (e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit("removed", e, t);
                },
              },
              {
                key: "hasResourceBundle",
                value: function (e, t) {
                  return void 0 !== this.getResource(e, t);
                },
              },
              {
                key: "getResourceBundle",
                value: function (e, t) {
                  return (
                    t || (t = this.options.defaultNS),
                    "v1" === this.options.compatibilityAPI
                      ? xn(xn({}, {}), this.getResource(e, t))
                      : this.getResource(e, t)
                  );
                },
              },
              {
                key: "getDataByLanguage",
                value: function (e) {
                  return this.data[e];
                },
              },
              {
                key: "hasLanguageSomeTranslations",
                value: function (e) {
                  var t = this.getDataByLanguage(e);
                  return !!((t && Object.keys(t)) || []).find(function (e) {
                    return t[e] && Object.keys(t[e]).length > 0;
                  });
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return this.data;
                },
              },
            ]),
            n
          );
        })(la),
        ka = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e;
          },
          handle: function (e, t, n, r, a) {
            var o = this;
            return (
              e.forEach(function (e) {
                o.processors[e] && (t = o.processors[e].process(t, n, r, a));
              }),
              t
            );
          },
        },
        xa = {},
        Sa = (function (e) {
          L(n, e);
          var t = j(n);
          function n(e) {
            var r;
            E(this, n);
            var a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (
              (function (e, t, n) {
                e.forEach(function (e) {
                  t[e] && (n[e] = t[e]);
                });
              })(
                [
                  "resourceStore",
                  "languageUtils",
                  "pluralResolver",
                  "interpolator",
                  "backendConnector",
                  "i18nFormat",
                  "utils",
                ],
                e,
                O((r = t.call(this))),
              ),
              (r.options = a),
              void 0 === r.options.keySeparator &&
                (r.options.keySeparator = "."),
              (r.logger = ia.create("translator")),
              r
            );
          }
          return (
            S(
              n,
              [
                {
                  key: "changeLanguage",
                  value: function (e) {
                    e && (this.language = e);
                  },
                },
                {
                  key: "exists",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { interpolation: {} };
                    if (void 0 === e || null === e) return !1;
                    var n = this.resolve(e, t);
                    return n && void 0 !== n.res;
                  },
                },
                {
                  key: "extractFromKey",
                  value: function (e, t) {
                    var n =
                      void 0 !== t.nsSeparator
                        ? t.nsSeparator
                        : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var r =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      a = t.ns || this.options.defaultNS || [],
                      o = n && e.indexOf(n) > -1,
                      i =
                        !this.options.userDefinedKeySeparator &&
                        !t.keySeparator &&
                        !this.options.userDefinedNsSeparator &&
                        !t.nsSeparator &&
                        !(function (e, t, n) {
                          (t = t || ""), (n = n || "");
                          var r = ma.filter(function (e) {
                            return t.indexOf(e) < 0 && n.indexOf(e) < 0;
                          });
                          if (0 === r.length) return !0;
                          var a = new RegExp(
                              "(".concat(
                                r
                                  .map(function (e) {
                                    return "?" === e ? "\\?" : e;
                                  })
                                  .join("|"),
                                ")",
                              ),
                            ),
                            o = !a.test(e);
                          if (!o) {
                            var i = e.indexOf(n);
                            i > 0 && !a.test(e.substring(0, i)) && (o = !0);
                          }
                          return o;
                        })(e, n, r);
                    if (o && !i) {
                      var l = e.match(this.interpolator.nestingRegexp);
                      if (l && l.length > 0) return { key: e, namespaces: a };
                      var u = e.split(n);
                      (n !== r ||
                        (n === r && this.options.ns.indexOf(u[0]) > -1)) &&
                        (a = u.shift()),
                        (e = u.join(r));
                    }
                    return (
                      "string" === typeof a && (a = [a]),
                      { key: e, namespaces: a }
                    );
                  },
                },
                {
                  key: "translate",
                  value: function (e, t, r) {
                    var a = this;
                    if (
                      ("object" !== typeof t &&
                        this.options.overloadTranslationOptionHandler &&
                        (t =
                          this.options.overloadTranslationOptionHandler(
                            arguments,
                          )),
                      "object" === typeof t && (t = xn({}, t)),
                      t || (t = {}),
                      void 0 === e || null === e)
                    )
                      return "";
                    Array.isArray(e) || (e = [String(e)]);
                    var o =
                        void 0 !== t.returnDetails
                          ? t.returnDetails
                          : this.options.returnDetails,
                      i =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      l = this.extractFromKey(e[e.length - 1], t),
                      u = l.key,
                      s = l.namespaces,
                      c = s[s.length - 1],
                      f = t.lng || this.language,
                      d =
                        t.appendNamespaceToCIMode ||
                        this.options.appendNamespaceToCIMode;
                    if (f && "cimode" === f.toLowerCase()) {
                      if (d) {
                        var p = t.nsSeparator || this.options.nsSeparator;
                        return o
                          ? {
                              res: "".concat(c).concat(p).concat(u),
                              usedKey: u,
                              exactUsedKey: u,
                              usedLng: f,
                              usedNS: c,
                              usedParams: this.getUsedParamsDetails(t),
                            }
                          : "".concat(c).concat(p).concat(u);
                      }
                      return o
                        ? {
                            res: u,
                            usedKey: u,
                            exactUsedKey: u,
                            usedLng: f,
                            usedNS: c,
                            usedParams: this.getUsedParamsDetails(t),
                          }
                        : u;
                    }
                    var h = this.resolve(e, t),
                      v = h && h.res,
                      g = (h && h.usedKey) || u,
                      m = (h && h.exactUsedKey) || u,
                      y = Object.prototype.toString.apply(v),
                      b =
                        void 0 !== t.joinArrays
                          ? t.joinArrays
                          : this.options.joinArrays,
                      w = !this.i18nFormat || this.i18nFormat.handleAsObject;
                    if (
                      w &&
                      v &&
                      "string" !== typeof v &&
                      "boolean" !== typeof v &&
                      "number" !== typeof v &&
                      [
                        "[object Number]",
                        "[object Function]",
                        "[object RegExp]",
                      ].indexOf(y) < 0 &&
                      ("string" !== typeof b || "[object Array]" !== y)
                    ) {
                      if (!t.returnObjects && !this.options.returnObjects) {
                        this.options.returnedObjectHandler ||
                          this.logger.warn(
                            "accessing an object - but returnObjects options is not enabled!",
                          );
                        var k = this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(
                              g,
                              v,
                              xn(xn({}, t), {}, { ns: s }),
                            )
                          : "key '"
                              .concat(u, " (")
                              .concat(
                                this.language,
                                ")' returned an object instead of string.",
                              );
                        return o
                          ? ((h.res = k),
                            (h.usedParams = this.getUsedParamsDetails(t)),
                            h)
                          : k;
                      }
                      if (i) {
                        var x = "[object Array]" === y,
                          S = x ? [] : {},
                          E = x ? m : g;
                        for (var C in v)
                          if (Object.prototype.hasOwnProperty.call(v, C)) {
                            var L = "".concat(E).concat(i).concat(C);
                            (S[C] = this.translate(
                              L,
                              xn(xn({}, t), { joinArrays: !1, ns: s }),
                            )),
                              S[C] === L && (S[C] = v[C]);
                          }
                        v = S;
                      }
                    } else if (
                      w &&
                      "string" === typeof b &&
                      "[object Array]" === y
                    )
                      (v = v.join(b)) &&
                        (v = this.extendTranslation(v, e, t, r));
                    else {
                      var N = !1,
                        P = !1,
                        O = void 0 !== t.count && "string" !== typeof t.count,
                        R = n.hasDefaultValue(t),
                        j = O
                          ? this.pluralResolver.getSuffix(f, t.count, t)
                          : "",
                        T =
                          t.ordinal && O
                            ? this.pluralResolver.getSuffix(f, t.count, {
                                ordinal: !1,
                              })
                            : "",
                        _ =
                          t["defaultValue".concat(j)] ||
                          t["defaultValue".concat(T)] ||
                          t.defaultValue;
                      !this.isValidLookup(v) && R && ((N = !0), (v = _)),
                        this.isValidLookup(v) || ((P = !0), (v = u));
                      var D =
                          (t.missingKeyNoValueFallbackToKey ||
                            this.options.missingKeyNoValueFallbackToKey) &&
                          P
                            ? void 0
                            : v,
                        M = R && _ !== v && this.options.updateMissing;
                      if (P || N || M) {
                        if (
                          (this.logger.log(
                            M ? "updateKey" : "missingKey",
                            f,
                            c,
                            u,
                            M ? _ : v,
                          ),
                          i)
                        ) {
                          var z = this.resolve(
                            u,
                            xn(xn({}, t), {}, { keySeparator: !1 }),
                          );
                          z &&
                            z.res &&
                            this.logger.warn(
                              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
                            );
                        }
                        var F = [],
                          I = this.languageUtils.getFallbackCodes(
                            this.options.fallbackLng,
                            t.lng || this.language,
                          );
                        if (
                          "fallback" === this.options.saveMissingTo &&
                          I &&
                          I[0]
                        )
                          for (var A = 0; A < I.length; A++) F.push(I[A]);
                        else
                          "all" === this.options.saveMissingTo
                            ? (F = this.languageUtils.toResolveHierarchy(
                                t.lng || this.language,
                              ))
                            : F.push(t.lng || this.language);
                        var U = function (e, n, r) {
                          var o = R && r !== v ? r : D;
                          a.options.missingKeyHandler
                            ? a.options.missingKeyHandler(e, c, n, o, M, t)
                            : a.backendConnector &&
                              a.backendConnector.saveMissing &&
                              a.backendConnector.saveMissing(e, c, n, o, M, t),
                            a.emit("missingKey", e, c, n, v);
                        };
                        this.options.saveMissing &&
                          (this.options.saveMissingPlurals && O
                            ? F.forEach(function (e) {
                                a.pluralResolver
                                  .getSuffixes(e, t)
                                  .forEach(function (n) {
                                    U(
                                      [e],
                                      u + n,
                                      t["defaultValue".concat(n)] || _,
                                    );
                                  });
                              })
                            : U(F, u, _));
                      }
                      (v = this.extendTranslation(v, e, t, h, r)),
                        P &&
                          v === u &&
                          this.options.appendNamespaceToMissingKey &&
                          (v = "".concat(c, ":").concat(u)),
                        (P || N) &&
                          this.options.parseMissingKeyHandler &&
                          (v =
                            "v1" !== this.options.compatibilityAPI
                              ? this.options.parseMissingKeyHandler(
                                  this.options.appendNamespaceToMissingKey
                                    ? "".concat(c, ":").concat(u)
                                    : u,
                                  N ? v : void 0,
                                )
                              : this.options.parseMissingKeyHandler(v));
                    }
                    return o
                      ? ((h.res = v),
                        (h.usedParams = this.getUsedParamsDetails(t)),
                        h)
                      : v;
                  },
                },
                {
                  key: "extendTranslation",
                  value: function (e, t, n, r, a) {
                    var o = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                      e = this.i18nFormat.parse(
                        e,
                        xn(
                          xn({}, this.options.interpolation.defaultVariables),
                          n,
                        ),
                        n.lng || this.language || r.usedLng,
                        r.usedNS,
                        r.usedKey,
                        { resolved: r },
                      );
                    else if (!n.skipInterpolation) {
                      n.interpolation &&
                        this.interpolator.init(
                          xn(xn({}, n), {
                            interpolation: xn(
                              xn({}, this.options.interpolation),
                              n.interpolation,
                            ),
                          }),
                        );
                      var i,
                        l =
                          "string" === typeof e &&
                          (n &&
                          n.interpolation &&
                          void 0 !== n.interpolation.skipOnVariables
                            ? n.interpolation.skipOnVariables
                            : this.options.interpolation.skipOnVariables);
                      if (l) {
                        var u = e.match(this.interpolator.nestingRegexp);
                        i = u && u.length;
                      }
                      var s =
                        n.replace && "string" !== typeof n.replace
                          ? n.replace
                          : n;
                      if (
                        (this.options.interpolation.defaultVariables &&
                          (s = xn(
                            xn({}, this.options.interpolation.defaultVariables),
                            s,
                          )),
                        (e = this.interpolator.interpolate(
                          e,
                          s,
                          n.lng || this.language,
                          n,
                        )),
                        l)
                      ) {
                        var c = e.match(this.interpolator.nestingRegexp);
                        i < (c && c.length) && (n.nest = !1);
                      }
                      !n.lng &&
                        "v1" !== this.options.compatibilityAPI &&
                        r &&
                        r.res &&
                        (n.lng = r.usedLng),
                        !1 !== n.nest &&
                          (e = this.interpolator.nest(
                            e,
                            function () {
                              for (
                                var e = arguments.length,
                                  r = new Array(e),
                                  i = 0;
                                i < e;
                                i++
                              )
                                r[i] = arguments[i];
                              return a && a[0] === r[0] && !n.context
                                ? (o.logger.warn(
                                    "It seems you are nesting recursively key: "
                                      .concat(r[0], " in key: ")
                                      .concat(t[0]),
                                  ),
                                  null)
                                : o.translate.apply(o, r.concat([t]));
                            },
                            n,
                          )),
                        n.interpolation && this.interpolator.reset();
                    }
                    var f = n.postProcess || this.options.postProcess,
                      d = "string" === typeof f ? [f] : f;
                    return (
                      void 0 !== e &&
                        null !== e &&
                        d &&
                        d.length &&
                        !1 !== n.applyPostProcessor &&
                        (e = ka.handle(
                          d,
                          e,
                          t,
                          this.options && this.options.postProcessPassResolved
                            ? xn(
                                {
                                  i18nResolved: xn(
                                    xn({}, r),
                                    {},
                                    {
                                      usedParams: this.getUsedParamsDetails(n),
                                    },
                                  ),
                                },
                                n,
                              )
                            : n,
                          this,
                        )),
                      e
                    );
                  },
                },
                {
                  key: "resolve",
                  value: function (e) {
                    var t,
                      n,
                      r,
                      a,
                      o,
                      i = this,
                      l =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return (
                      "string" === typeof e && (e = [e]),
                      e.forEach(function (e) {
                        if (!i.isValidLookup(t)) {
                          var u = i.extractFromKey(e, l),
                            s = u.key;
                          n = s;
                          var c = u.namespaces;
                          i.options.fallbackNS &&
                            (c = c.concat(i.options.fallbackNS));
                          var f =
                              void 0 !== l.count && "string" !== typeof l.count,
                            d =
                              f &&
                              !l.ordinal &&
                              0 === l.count &&
                              i.pluralResolver.shouldUseIntlApi(),
                            p =
                              void 0 !== l.context &&
                              ("string" === typeof l.context ||
                                "number" === typeof l.context) &&
                              "" !== l.context,
                            h = l.lngs
                              ? l.lngs
                              : i.languageUtils.toResolveHierarchy(
                                  l.lng || i.language,
                                  l.fallbackLng,
                                );
                          c.forEach(function (e) {
                            i.isValidLookup(t) ||
                              ((o = e),
                              !xa["".concat(h[0], "-").concat(e)] &&
                                i.utils &&
                                i.utils.hasLoadedNamespace &&
                                !i.utils.hasLoadedNamespace(o) &&
                                ((xa["".concat(h[0], "-").concat(e)] = !0),
                                i.logger.warn(
                                  'key "'
                                    .concat(n, '" for languages "')
                                    .concat(
                                      h.join(", "),
                                      '" won\'t get resolved as namespace "',
                                    )
                                    .concat(o, '" was not yet loaded'),
                                  "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
                                )),
                              h.forEach(function (n) {
                                if (!i.isValidLookup(t)) {
                                  a = n;
                                  var o,
                                    u = [s];
                                  if (
                                    i.i18nFormat &&
                                    i.i18nFormat.addLookupKeys
                                  )
                                    i.i18nFormat.addLookupKeys(u, s, n, e, l);
                                  else {
                                    var c;
                                    f &&
                                      (c = i.pluralResolver.getSuffix(
                                        n,
                                        l.count,
                                        l,
                                      ));
                                    var h = "".concat(
                                        i.options.pluralSeparator,
                                        "zero",
                                      ),
                                      v = ""
                                        .concat(
                                          i.options.pluralSeparator,
                                          "ordinal",
                                        )
                                        .concat(i.options.pluralSeparator);
                                    if (
                                      (f &&
                                        (u.push(s + c),
                                        l.ordinal &&
                                          0 === c.indexOf(v) &&
                                          u.push(
                                            s +
                                              c.replace(
                                                v,
                                                i.options.pluralSeparator,
                                              ),
                                          ),
                                        d && u.push(s + h)),
                                      p)
                                    ) {
                                      var g = ""
                                        .concat(s)
                                        .concat(i.options.contextSeparator)
                                        .concat(l.context);
                                      u.push(g),
                                        f &&
                                          (u.push(g + c),
                                          l.ordinal &&
                                            0 === c.indexOf(v) &&
                                            u.push(
                                              g +
                                                c.replace(
                                                  v,
                                                  i.options.pluralSeparator,
                                                ),
                                            ),
                                          d && u.push(g + h));
                                    }
                                  }
                                  for (; (o = u.pop()); )
                                    i.isValidLookup(t) ||
                                      ((r = o),
                                      (t = i.getResource(n, e, o, l)));
                                }
                              }));
                          });
                        }
                      }),
                      {
                        res: t,
                        usedKey: n,
                        exactUsedKey: r,
                        usedLng: a,
                        usedNS: o,
                      }
                    );
                  },
                },
                {
                  key: "isValidLookup",
                  value: function (e) {
                    return (
                      void 0 !== e &&
                      !(!this.options.returnNull && null === e) &&
                      !(!this.options.returnEmptyString && "" === e)
                    );
                  },
                },
                {
                  key: "getResource",
                  value: function (e, t, n) {
                    var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
                    return this.i18nFormat && this.i18nFormat.getResource
                      ? this.i18nFormat.getResource(e, t, n, r)
                      : this.resourceStore.getResource(e, t, n, r);
                  },
                },
                {
                  key: "getUsedParamsDetails",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = e.replace && "string" !== typeof e.replace,
                      n = t ? e.replace : e;
                    if (
                      (t &&
                        "undefined" !== typeof e.count &&
                        (n.count = e.count),
                      this.options.interpolation.defaultVariables &&
                        (n = xn(
                          xn({}, this.options.interpolation.defaultVariables),
                          n,
                        )),
                      !t)
                    ) {
                      n = xn({}, n);
                      var r,
                        a = F([
                          "defaultValue",
                          "ordinal",
                          "context",
                          "replace",
                          "lng",
                          "lngs",
                          "fallbackLng",
                          "ns",
                          "keySeparator",
                          "nsSeparator",
                          "returnObjects",
                          "returnDetails",
                          "joinArrays",
                          "postProcess",
                          "interpolation",
                        ]);
                      try {
                        for (a.s(); !(r = a.n()).done; ) {
                          delete n[r.value];
                        }
                      } catch (o) {
                        a.e(o);
                      } finally {
                        a.f();
                      }
                    }
                    return n;
                  },
                },
              ],
              [
                {
                  key: "hasDefaultValue",
                  value: function (e) {
                    var t = "defaultValue";
                    for (var n in e)
                      if (
                        Object.prototype.hasOwnProperty.call(e, n) &&
                        t === n.substring(0, 12) &&
                        void 0 !== e[n]
                      )
                        return !0;
                    return !1;
                  },
                },
              ],
            ),
            n
          );
        })(la);
      function Ea(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var Ca = (function () {
          function e(t) {
            E(this, e),
              (this.options = t),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = ia.create("languageUtils"));
          }
          return (
            S(e, [
              {
                key: "getScriptPartFromCode",
                value: function (e) {
                  if (!(e = ba(e)) || e.indexOf("-") < 0) return null;
                  var t = e.split("-");
                  return 2 === t.length
                    ? null
                    : (t.pop(),
                      "x" === t[t.length - 1].toLowerCase()
                        ? null
                        : this.formatLanguageCode(t.join("-")));
                },
              },
              {
                key: "getLanguagePartFromCode",
                value: function (e) {
                  if (!(e = ba(e)) || e.indexOf("-") < 0) return e;
                  var t = e.split("-");
                  return this.formatLanguageCode(t[0]);
                },
              },
              {
                key: "formatLanguageCode",
                value: function (e) {
                  if ("string" === typeof e && e.indexOf("-") > -1) {
                    var t = [
                        "hans",
                        "hant",
                        "latn",
                        "cyrl",
                        "cans",
                        "mong",
                        "arab",
                      ],
                      n = e.split("-");
                    return (
                      this.options.lowerCaseLng
                        ? (n = n.map(function (e) {
                            return e.toLowerCase();
                          }))
                        : 2 === n.length
                          ? ((n[0] = n[0].toLowerCase()),
                            (n[1] = n[1].toUpperCase()),
                            t.indexOf(n[1].toLowerCase()) > -1 &&
                              (n[1] = Ea(n[1].toLowerCase())))
                          : 3 === n.length &&
                            ((n[0] = n[0].toLowerCase()),
                            2 === n[1].length && (n[1] = n[1].toUpperCase()),
                            "sgn" !== n[0] &&
                              2 === n[2].length &&
                              (n[2] = n[2].toUpperCase()),
                            t.indexOf(n[1].toLowerCase()) > -1 &&
                              (n[1] = Ea(n[1].toLowerCase())),
                            t.indexOf(n[2].toLowerCase()) > -1 &&
                              (n[2] = Ea(n[2].toLowerCase()))),
                      n.join("-")
                    );
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                    ? e.toLowerCase()
                    : e;
                },
              },
              {
                key: "isSupportedCode",
                value: function (e) {
                  return (
                    ("languageOnly" === this.options.load ||
                      this.options.nonExplicitSupportedLngs) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs ||
                      !this.supportedLngs.length ||
                      this.supportedLngs.indexOf(e) > -1
                  );
                },
              },
              {
                key: "getBestMatchFromCodes",
                value: function (e) {
                  var t,
                    n = this;
                  return e
                    ? (e.forEach(function (e) {
                        if (!t) {
                          var r = n.formatLanguageCode(e);
                          (n.options.supportedLngs && !n.isSupportedCode(r)) ||
                            (t = r);
                        }
                      }),
                      !t &&
                        this.options.supportedLngs &&
                        e.forEach(function (e) {
                          if (!t) {
                            var r = n.getLanguagePartFromCode(e);
                            if (n.isSupportedCode(r)) return (t = r);
                            t = n.options.supportedLngs.find(function (e) {
                              return e === r
                                ? e
                                : e.indexOf("-") < 0 && r.indexOf("-") < 0
                                  ? void 0
                                  : 0 === e.indexOf(r)
                                    ? e
                                    : void 0;
                            });
                          }
                        }),
                      t ||
                        (t = this.getFallbackCodes(
                          this.options.fallbackLng,
                        )[0]),
                      t)
                    : null;
                },
              },
              {
                key: "getFallbackCodes",
                value: function (e, t) {
                  if (!e) return [];
                  if (
                    ("function" === typeof e && (e = e(t)),
                    "string" === typeof e && (e = [e]),
                    "[object Array]" === Object.prototype.toString.apply(e))
                  )
                    return e;
                  if (!t) return e.default || [];
                  var n = e[t];
                  return (
                    n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                  );
                },
              },
              {
                key: "toResolveHierarchy",
                value: function (e, t) {
                  var n = this,
                    r = this.getFallbackCodes(
                      t || this.options.fallbackLng || [],
                      e,
                    ),
                    a = [],
                    o = function (e) {
                      e &&
                        (n.isSupportedCode(e)
                          ? a.push(e)
                          : n.logger.warn(
                              "rejecting language code not found in supportedLngs: ".concat(
                                e,
                              ),
                            ));
                    };
                  return (
                    "string" === typeof e &&
                    (e.indexOf("-") > -1 || e.indexOf("_") > -1)
                      ? ("languageOnly" !== this.options.load &&
                          o(this.formatLanguageCode(e)),
                        "languageOnly" !== this.options.load &&
                          "currentOnly" !== this.options.load &&
                          o(this.getScriptPartFromCode(e)),
                        "currentOnly" !== this.options.load &&
                          o(this.getLanguagePartFromCode(e)))
                      : "string" === typeof e && o(this.formatLanguageCode(e)),
                    r.forEach(function (e) {
                      a.indexOf(e) < 0 && o(n.formatLanguageCode(e));
                    }),
                    a
                  );
                },
              },
            ]),
            e
          );
        })(),
        La = [
          {
            lngs: [
              "ach",
              "ak",
              "am",
              "arn",
              "br",
              "fil",
              "gun",
              "ln",
              "mfe",
              "mg",
              "mi",
              "oc",
              "pt",
              "pt-BR",
              "tg",
              "tl",
              "ti",
              "tr",
              "uz",
              "wa",
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              "af",
              "an",
              "ast",
              "az",
              "bg",
              "bn",
              "ca",
              "da",
              "de",
              "dev",
              "el",
              "en",
              "eo",
              "es",
              "et",
              "eu",
              "fi",
              "fo",
              "fur",
              "fy",
              "gl",
              "gu",
              "ha",
              "hi",
              "hu",
              "hy",
              "ia",
              "it",
              "kk",
              "kn",
              "ku",
              "lb",
              "mai",
              "ml",
              "mn",
              "mr",
              "nah",
              "nap",
              "nb",
              "ne",
              "nl",
              "nn",
              "no",
              "nso",
              "pa",
              "pap",
              "pms",
              "ps",
              "pt-PT",
              "rm",
              "sco",
              "se",
              "si",
              "so",
              "son",
              "sq",
              "sv",
              "sw",
              "ta",
              "te",
              "tk",
              "ur",
              "yo",
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              "ay",
              "bo",
              "cgg",
              "fa",
              "ht",
              "id",
              "ja",
              "jbo",
              "ka",
              "km",
              "ko",
              "ky",
              "lo",
              "ms",
              "sah",
              "su",
              "th",
              "tt",
              "ug",
              "vi",
              "wo",
              "zh",
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
          { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
          { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ["fr"], nr: [1, 2], fc: 9 },
          { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ["is"], nr: [1, 2], fc: 12 },
          { lngs: ["jv"], nr: [0, 1], fc: 13 },
          { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
          { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
          { lngs: ["mk"], nr: [1, 2], fc: 17 },
          { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
          { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ["or"], nr: [2, 1], fc: 2 },
          { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
          { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        Na = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            );
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                  ? 1
                  : 2 == e
                    ? 2
                    : e % 100 >= 3 && e % 100 <= 10
                      ? 3
                      : e % 100 >= 11
                        ? 4
                        : 5,
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                  ? 1
                  : e > 2 && e < 20
                    ? 2
                    : 3,
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                  ? 1
                  : e % 100 > 10 && e % 100 < 20
                    ? 2
                    : 3,
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2,
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                  ? 2
                  : e % 100 == 3 || e % 100 == 4
                    ? 3
                    : 0,
            );
          },
          22: function (e) {
            return Number(
              1 == e
                ? 0
                : 2 == e
                  ? 1
                  : (e < 0 || e > 10) && e % 10 == 0
                    ? 2
                    : 3,
            );
          },
        },
        Pa = ["v1", "v2", "v3"],
        Oa = ["v4"],
        Ra = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
      var ja = (function () {
        function e(t) {
          E(this, e);
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.languageUtils = t),
            (this.options = n),
            (this.logger = ia.create("pluralResolver")),
            (this.options.compatibilityJSON &&
              !Oa.includes(this.options.compatibilityJSON)) ||
              ("undefined" !== typeof Intl && Intl.PluralRules) ||
              ((this.options.compatibilityJSON = "v3"),
              this.logger.error(
                "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.",
              )),
            (this.rules = (function () {
              var e = {};
              return (
                La.forEach(function (t) {
                  t.lngs.forEach(function (n) {
                    e[n] = { numbers: t.nr, plurals: Na[t.fc] };
                  });
                }),
                e
              );
            })());
        }
        return (
          S(e, [
            {
              key: "addRule",
              value: function (e, t) {
                this.rules[e] = t;
              },
            },
            {
              key: "getRule",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (this.shouldUseIntlApi())
                  try {
                    return new Intl.PluralRules(ba(e), {
                      type: t.ordinal ? "ordinal" : "cardinal",
                    });
                  } catch (n) {
                    return;
                  }
                return (
                  this.rules[e] ||
                  this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                );
              },
            },
            {
              key: "needsPlural",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = this.getRule(e, t);
                return this.shouldUseIntlApi()
                  ? n && n.resolvedOptions().pluralCategories.length > 1
                  : n && n.numbers.length > 1;
              },
            },
            {
              key: "getPluralFormsOfKey",
              value: function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return this.getSuffixes(e, n).map(function (e) {
                  return "".concat(t).concat(e);
                });
              },
            },
            {
              key: "getSuffixes",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = this.getRule(e, n);
                return r
                  ? this.shouldUseIntlApi()
                    ? r
                        .resolvedOptions()
                        .pluralCategories.sort(function (e, t) {
                          return Ra[e] - Ra[t];
                        })
                        .map(function (e) {
                          return ""
                            .concat(t.options.prepend)
                            .concat(
                              n.ordinal
                                ? "ordinal".concat(t.options.prepend)
                                : "",
                            )
                            .concat(e);
                        })
                    : r.numbers.map(function (r) {
                        return t.getSuffix(e, r, n);
                      })
                  : [];
              },
            },
            {
              key: "getSuffix",
              value: function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = this.getRule(e, n);
                return r
                  ? this.shouldUseIntlApi()
                    ? ""
                        .concat(this.options.prepend)
                        .concat(
                          n.ordinal
                            ? "ordinal".concat(this.options.prepend)
                            : "",
                        )
                        .concat(r.select(t))
                    : this.getSuffixRetroCompatible(r, t)
                  : (this.logger.warn("no plural rule found for: ".concat(e)),
                    "");
              },
            },
            {
              key: "getSuffixRetroCompatible",
              value: function (e, t) {
                var n = this,
                  r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                  a = e.numbers[r];
                this.options.simplifyPluralSuffix &&
                  2 === e.numbers.length &&
                  1 === e.numbers[0] &&
                  (2 === a ? (a = "plural") : 1 === a && (a = ""));
                var o = function () {
                  return n.options.prepend && a.toString()
                    ? n.options.prepend + a.toString()
                    : a.toString();
                };
                return "v1" === this.options.compatibilityJSON
                  ? 1 === a
                    ? ""
                    : "number" === typeof a
                      ? "_plural_".concat(a.toString())
                      : o()
                  : "v2" === this.options.compatibilityJSON ||
                      (this.options.simplifyPluralSuffix &&
                        2 === e.numbers.length &&
                        1 === e.numbers[0])
                    ? o()
                    : this.options.prepend && r.toString()
                      ? this.options.prepend + r.toString()
                      : r.toString();
              },
            },
            {
              key: "shouldUseIntlApi",
              value: function () {
                return !Pa.includes(this.options.compatibilityJSON);
              },
            },
          ]),
          e
        );
      })();
      function Ta(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : ".",
          a =
            !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          o = (function (e, t, n) {
            var r = da(e, n);
            return void 0 !== r ? r : da(t, n);
          })(e, t, n);
        return (
          !o &&
            a &&
            "string" === typeof n &&
            void 0 === (o = ya(e, n, r)) &&
            (o = ya(t, n, r)),
          o
        );
      }
      var _a = (function () {
        function e() {
          E(this, e);
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = ia.create("interpolator")),
            (this.options = t),
            (this.format =
              (t.interpolation && t.interpolation.format) ||
              function (e) {
                return e;
              }),
            this.init(t);
        }
        return (
          S(e, [
            {
              key: "init",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                e.interpolation || (e.interpolation = { escapeValue: !0 });
                var t = e.interpolation;
                (this.escape = void 0 !== t.escape ? t.escape : ga),
                  (this.escapeValue =
                    void 0 === t.escapeValue || t.escapeValue),
                  (this.useRawValueToEscape =
                    void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                  (this.prefix = t.prefix
                    ? ha(t.prefix)
                    : t.prefixEscaped || "{{"),
                  (this.suffix = t.suffix
                    ? ha(t.suffix)
                    : t.suffixEscaped || "}}"),
                  (this.formatSeparator = t.formatSeparator
                    ? t.formatSeparator
                    : t.formatSeparator || ","),
                  (this.unescapePrefix = t.unescapeSuffix
                    ? ""
                    : t.unescapePrefix || "-"),
                  (this.unescapeSuffix = this.unescapePrefix
                    ? ""
                    : t.unescapeSuffix || ""),
                  (this.nestingPrefix = t.nestingPrefix
                    ? ha(t.nestingPrefix)
                    : t.nestingPrefixEscaped || ha("$t(")),
                  (this.nestingSuffix = t.nestingSuffix
                    ? ha(t.nestingSuffix)
                    : t.nestingSuffixEscaped || ha(")")),
                  (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                    ? t.nestingOptionsSeparator
                    : t.nestingOptionsSeparator || ","),
                  (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                  (this.alwaysFormat =
                    void 0 !== t.alwaysFormat && t.alwaysFormat),
                  this.resetRegExp();
              },
            },
            {
              key: "reset",
              value: function () {
                this.options && this.init(this.options);
              },
            },
            {
              key: "resetRegExp",
              value: function () {
                var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                this.regexp = new RegExp(e, "g");
                var t = ""
                  .concat(this.prefix)
                  .concat(this.unescapePrefix, "(.+?)")
                  .concat(this.unescapeSuffix)
                  .concat(this.suffix);
                this.regexpUnescape = new RegExp(t, "g");
                var n = ""
                  .concat(this.nestingPrefix, "(.+?)")
                  .concat(this.nestingSuffix);
                this.nestingRegexp = new RegExp(n, "g");
              },
            },
            {
              key: "interpolate",
              value: function (e, t, n, r) {
                var a,
                  o,
                  i,
                  l = this,
                  u =
                    (this.options &&
                      this.options.interpolation &&
                      this.options.interpolation.defaultVariables) ||
                    {};
                function s(e) {
                  return e.replace(/\$/g, "$$$$");
                }
                var c = function (e) {
                  if (e.indexOf(l.formatSeparator) < 0) {
                    var a = Ta(
                      t,
                      u,
                      e,
                      l.options.keySeparator,
                      l.options.ignoreJSONStructure,
                    );
                    return l.alwaysFormat
                      ? l.format(
                          a,
                          void 0,
                          n,
                          xn(xn(xn({}, r), t), {}, { interpolationkey: e }),
                        )
                      : a;
                  }
                  var o = e.split(l.formatSeparator),
                    i = o.shift().trim(),
                    s = o.join(l.formatSeparator).trim();
                  return l.format(
                    Ta(
                      t,
                      u,
                      i,
                      l.options.keySeparator,
                      l.options.ignoreJSONStructure,
                    ),
                    s,
                    n,
                    xn(xn(xn({}, r), t), {}, { interpolationkey: i }),
                  );
                };
                this.resetRegExp();
                var f =
                    (r && r.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler,
                  d =
                    r &&
                    r.interpolation &&
                    void 0 !== r.interpolation.skipOnVariables
                      ? r.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables;
                return (
                  [
                    {
                      regex: this.regexpUnescape,
                      safeValue: function (e) {
                        return s(e);
                      },
                    },
                    {
                      regex: this.regexp,
                      safeValue: function (e) {
                        return l.escapeValue ? s(l.escape(e)) : s(e);
                      },
                    },
                  ].forEach(function (t) {
                    for (i = 0; (a = t.regex.exec(e)); ) {
                      var n = a[1].trim();
                      if (void 0 === (o = c(n)))
                        if ("function" === typeof f) {
                          var u = f(e, a, r);
                          o = "string" === typeof u ? u : "";
                        } else if (
                          r &&
                          Object.prototype.hasOwnProperty.call(r, n)
                        )
                          o = "";
                        else {
                          if (d) {
                            o = a[0];
                            continue;
                          }
                          l.logger.warn(
                            "missed to pass in variable "
                              .concat(n, " for interpolating ")
                              .concat(e),
                          ),
                            (o = "");
                        }
                      else
                        "string" === typeof o ||
                          l.useRawValueToEscape ||
                          (o = sa(o));
                      var s = t.safeValue(o);
                      if (
                        ((e = e.replace(a[0], s)),
                        d
                          ? ((t.regex.lastIndex += o.length),
                            (t.regex.lastIndex -= a[0].length))
                          : (t.regex.lastIndex = 0),
                        ++i >= l.maxReplaces)
                      )
                        break;
                    }
                  }),
                  e
                );
              },
            },
            {
              key: "nest",
              value: function (e, t) {
                var n,
                  r,
                  a,
                  o = this,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                function l(e, t) {
                  var n = this.nestingOptionsSeparator;
                  if (e.indexOf(n) < 0) return e;
                  var r = e.split(new RegExp("".concat(n, "[ ]*{"))),
                    o = "{".concat(r[1]);
                  e = r[0];
                  var i = (o = this.interpolate(o, a)).match(/'/g),
                    l = o.match(/"/g);
                  ((i && i.length % 2 === 0 && !l) || l.length % 2 !== 0) &&
                    (o = o.replace(/'/g, '"'));
                  try {
                    (a = JSON.parse(o)), t && (a = xn(xn({}, t), a));
                  } catch (er) {
                    return (
                      this.logger.warn(
                        "failed parsing options string in nesting for key ".concat(
                          e,
                        ),
                        er,
                      ),
                      "".concat(e).concat(n).concat(o)
                    );
                  }
                  return delete a.defaultValue, e;
                }
                for (; (n = this.nestingRegexp.exec(e)); ) {
                  var u = [];
                  ((a =
                    (a = xn({}, i)).replace && "string" !== typeof a.replace
                      ? a.replace
                      : a).applyPostProcessor = !1),
                    delete a.defaultValue;
                  var s = !1;
                  if (
                    -1 !== n[0].indexOf(this.formatSeparator) &&
                    !/{.*}/.test(n[1])
                  ) {
                    var c = n[1].split(this.formatSeparator).map(function (e) {
                      return e.trim();
                    });
                    (n[1] = c.shift()), (u = c), (s = !0);
                  }
                  if (
                    (r = t(l.call(this, n[1].trim(), a), a)) &&
                    n[0] === e &&
                    "string" !== typeof r
                  )
                    return r;
                  "string" !== typeof r && (r = sa(r)),
                    r ||
                      (this.logger.warn(
                        "missed to resolve "
                          .concat(n[1], " for nesting ")
                          .concat(e),
                      ),
                      (r = "")),
                    s &&
                      (r = u.reduce(function (e, t) {
                        return o.format(
                          e,
                          t,
                          i.lng,
                          xn(xn({}, i), {}, { interpolationkey: n[1].trim() }),
                        );
                      }, r.trim())),
                    (e = e.replace(n[0], r)),
                    (this.regexp.lastIndex = 0);
                }
                return e;
              },
            },
          ]),
          e
        );
      })();
      function Da(e) {
        var t = {};
        return function (n, r, a) {
          var o = r + JSON.stringify(a),
            i = t[o];
          return i || ((i = e(ba(r), a)), (t[o] = i)), i(n);
        };
      }
      var Ma = (function () {
        function e() {
          E(this, e);
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = ia.create("formatter")),
            (this.options = t),
            (this.formats = {
              number: Da(function (e, t) {
                var n = new Intl.NumberFormat(e, xn({}, t));
                return function (e) {
                  return n.format(e);
                };
              }),
              currency: Da(function (e, t) {
                var n = new Intl.NumberFormat(
                  e,
                  xn(xn({}, t), {}, { style: "currency" }),
                );
                return function (e) {
                  return n.format(e);
                };
              }),
              datetime: Da(function (e, t) {
                var n = new Intl.DateTimeFormat(e, xn({}, t));
                return function (e) {
                  return n.format(e);
                };
              }),
              relativetime: Da(function (e, t) {
                var n = new Intl.RelativeTimeFormat(e, xn({}, t));
                return function (e) {
                  return n.format(e, t.range || "day");
                };
              }),
              list: Da(function (e, t) {
                var n = new Intl.ListFormat(e, xn({}, t));
                return function (e) {
                  return n.format(e);
                };
              }),
            }),
            this.init(t);
        }
        return (
          S(e, [
            {
              key: "init",
              value: function (e) {
                var t = (
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { interpolation: {} }
                ).interpolation;
                this.formatSeparator = t.formatSeparator
                  ? t.formatSeparator
                  : t.formatSeparator || ",";
              },
            },
            {
              key: "add",
              value: function (e, t) {
                this.formats[e.toLowerCase().trim()] = t;
              },
            },
            {
              key: "addCached",
              value: function (e, t) {
                this.formats[e.toLowerCase().trim()] = Da(t);
              },
            },
            {
              key: "format",
              value: function (e, t, n) {
                var r = this,
                  a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {},
                  o = t.split(this.formatSeparator).reduce(function (e, t) {
                    var o = (function (e) {
                        var t = e.toLowerCase().trim(),
                          n = {};
                        if (e.indexOf("(") > -1) {
                          var r = e.split("(");
                          t = r[0].toLowerCase().trim();
                          var a = r[1].substring(0, r[1].length - 1);
                          "currency" === t && a.indexOf(":") < 0
                            ? n.currency || (n.currency = a.trim())
                            : "relativetime" === t && a.indexOf(":") < 0
                              ? n.range || (n.range = a.trim())
                              : a.split(";").forEach(function (e) {
                                  if (e) {
                                    var t = z(e.split(":")),
                                      r = t[0],
                                      a = t
                                        .slice(1)
                                        .join(":")
                                        .trim()
                                        .replace(/^'+|'+$/g, "");
                                    n[r.trim()] || (n[r.trim()] = a),
                                      "false" === a && (n[r.trim()] = !1),
                                      "true" === a && (n[r.trim()] = !0),
                                      isNaN(a) ||
                                        (n[r.trim()] = parseInt(a, 10));
                                  }
                                });
                        }
                        return { formatName: t, formatOptions: n };
                      })(t),
                      i = o.formatName,
                      l = o.formatOptions;
                    if (r.formats[i]) {
                      var u = e;
                      try {
                        var s =
                            (a &&
                              a.formatParams &&
                              a.formatParams[a.interpolationkey]) ||
                            {},
                          c = s.locale || s.lng || a.locale || a.lng || n;
                        u = r.formats[i](e, c, xn(xn(xn({}, l), a), s));
                      } catch (f) {
                        r.logger.warn(f);
                      }
                      return u;
                    }
                    return (
                      r.logger.warn(
                        "there was no format function for ".concat(i),
                      ),
                      e
                    );
                  }, e);
                return o;
              },
            },
          ]),
          e
        );
      })();
      var za = (function (e) {
        L(n, e);
        var t = j(n);
        function n(e, r, a) {
          var o;
          E(this, n);
          var i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return (
            ((o = t.call(this)).backend = e),
            (o.store = r),
            (o.services = a),
            (o.languageUtils = a.languageUtils),
            (o.options = i),
            (o.logger = ia.create("backendConnector")),
            (o.waitingReads = []),
            (o.maxParallelReads = i.maxParallelReads || 10),
            (o.readingCalls = 0),
            (o.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
            (o.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
            (o.state = {}),
            (o.queue = []),
            o.backend && o.backend.init && o.backend.init(a, i.backend, i),
            o
          );
        }
        return (
          S(n, [
            {
              key: "queueLoad",
              value: function (e, t, n, r) {
                var a = this,
                  o = {},
                  i = {},
                  l = {},
                  u = {};
                return (
                  e.forEach(function (e) {
                    var r = !0;
                    t.forEach(function (t) {
                      var l = "".concat(e, "|").concat(t);
                      !n.reload && a.store.hasResourceBundle(e, t)
                        ? (a.state[l] = 2)
                        : a.state[l] < 0 ||
                          (1 === a.state[l]
                            ? void 0 === i[l] && (i[l] = !0)
                            : ((a.state[l] = 1),
                              (r = !1),
                              void 0 === i[l] && (i[l] = !0),
                              void 0 === o[l] && (o[l] = !0),
                              void 0 === u[t] && (u[t] = !0)));
                    }),
                      r || (l[e] = !0);
                  }),
                  (Object.keys(o).length || Object.keys(i).length) &&
                    this.queue.push({
                      pending: i,
                      pendingCount: Object.keys(i).length,
                      loaded: {},
                      errors: [],
                      callback: r,
                    }),
                  {
                    toLoad: Object.keys(o),
                    pending: Object.keys(i),
                    toLoadLanguages: Object.keys(l),
                    toLoadNamespaces: Object.keys(u),
                  }
                );
              },
            },
            {
              key: "loaded",
              value: function (e, t, n) {
                var r = e.split("|"),
                  a = r[0],
                  o = r[1];
                t && this.emit("failedLoading", a, o, t),
                  n && this.store.addResourceBundle(a, o, n),
                  (this.state[e] = t ? -1 : 2);
                var i = {};
                this.queue.forEach(function (n) {
                  !(function (e, t, n, r) {
                    var a = ca(e, t, Object),
                      o = a.obj,
                      i = a.k;
                    (o[i] = o[i] || []),
                      r && (o[i] = o[i].concat(n)),
                      r || o[i].push(n);
                  })(n.loaded, [a], o),
                    (function (e, t) {
                      void 0 !== e.pending[t] &&
                        (delete e.pending[t], e.pendingCount--);
                    })(n, e),
                    t && n.errors.push(t),
                    0 !== n.pendingCount ||
                      n.done ||
                      (Object.keys(n.loaded).forEach(function (e) {
                        i[e] || (i[e] = {});
                        var t = n.loaded[e];
                        t.length &&
                          t.forEach(function (t) {
                            void 0 === i[e][t] && (i[e][t] = !0);
                          });
                      }),
                      (n.done = !0),
                      n.errors.length ? n.callback(n.errors) : n.callback());
                }),
                  this.emit("loaded", i),
                  (this.queue = this.queue.filter(function (e) {
                    return !e.done;
                  }));
              },
            },
            {
              key: "read",
              value: function (e, t, n) {
                var r = this,
                  a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  o =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : this.retryTimeout,
                  i = arguments.length > 5 ? arguments[5] : void 0;
                if (!e.length) return i(null, {});
                if (this.readingCalls >= this.maxParallelReads)
                  this.waitingReads.push({
                    lng: e,
                    ns: t,
                    fcName: n,
                    tried: a,
                    wait: o,
                    callback: i,
                  });
                else {
                  this.readingCalls++;
                  var l = function (l, u) {
                      if ((r.readingCalls--, r.waitingReads.length > 0)) {
                        var s = r.waitingReads.shift();
                        r.read(
                          s.lng,
                          s.ns,
                          s.fcName,
                          s.tried,
                          s.wait,
                          s.callback,
                        );
                      }
                      l && u && a < r.maxRetries
                        ? setTimeout(function () {
                            r.read.call(r, e, t, n, a + 1, 2 * o, i);
                          }, o)
                        : i(l, u);
                    },
                    u = this.backend[n].bind(this.backend);
                  if (2 !== u.length) return u(e, t, l);
                  try {
                    var s = u(e, t);
                    s && "function" === typeof s.then
                      ? s
                          .then(function (e) {
                            return l(null, e);
                          })
                          .catch(l)
                      : l(null, s);
                  } catch (c) {
                    l(c);
                  }
                }
              },
            },
            {
              key: "prepareLoading",
              value: function (e, t) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  a = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                  return (
                    this.logger.warn(
                      "No backend was added via i18next.use. Will not load resources.",
                    ),
                    a && a()
                  );
                "string" === typeof e &&
                  (e = this.languageUtils.toResolveHierarchy(e)),
                  "string" === typeof t && (t = [t]);
                var o = this.queueLoad(e, t, r, a);
                if (!o.toLoad.length) return o.pending.length || a(), null;
                o.toLoad.forEach(function (e) {
                  n.loadOne(e);
                });
              },
            },
            {
              key: "load",
              value: function (e, t, n) {
                this.prepareLoading(e, t, {}, n);
              },
            },
            {
              key: "reload",
              value: function (e, t, n) {
                this.prepareLoading(e, t, { reload: !0 }, n);
              },
            },
            {
              key: "loadOne",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  r = e.split("|"),
                  a = r[0],
                  o = r[1];
                this.read(a, o, "read", void 0, void 0, function (r, i) {
                  r &&
                    t.logger.warn(
                      ""
                        .concat(n, "loading namespace ")
                        .concat(o, " for language ")
                        .concat(a, " failed"),
                      r,
                    ),
                    !r &&
                      i &&
                      t.logger.log(
                        ""
                          .concat(n, "loaded namespace ")
                          .concat(o, " for language ")
                          .concat(a),
                        i,
                      ),
                    t.loaded(e, r, i);
                });
              },
            },
            {
              key: "saveMissing",
              value: function (e, t, n, r, a) {
                var o =
                    arguments.length > 5 && void 0 !== arguments[5]
                      ? arguments[5]
                      : {},
                  i =
                    arguments.length > 6 && void 0 !== arguments[6]
                      ? arguments[6]
                      : function () {};
                if (
                  this.services.utils &&
                  this.services.utils.hasLoadedNamespace &&
                  !this.services.utils.hasLoadedNamespace(t)
                )
                  this.logger.warn(
                    'did not save key "'
                      .concat(n, '" as the namespace "')
                      .concat(t, '" was not yet loaded'),
                    "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
                  );
                else if (void 0 !== n && null !== n && "" !== n) {
                  if (this.backend && this.backend.create) {
                    var l = xn(xn({}, o), {}, { isUpdate: a }),
                      u = this.backend.create.bind(this.backend);
                    if (u.length < 6)
                      try {
                        var s;
                        (s =
                          5 === u.length ? u(e, t, n, r, l) : u(e, t, n, r)) &&
                        "function" === typeof s.then
                          ? s
                              .then(function (e) {
                                return i(null, e);
                              })
                              .catch(i)
                          : i(null, s);
                      } catch (c) {
                        i(c);
                      }
                    else u(e, t, n, r, i, l);
                  }
                  e && e[0] && this.store.addResource(e[0], t, n, r);
                }
              },
            },
          ]),
          n
        );
      })(la);
      function Fa() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !1,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            var t = {};
            if (
              ("object" === typeof e[1] && (t = e[1]),
              "string" === typeof e[1] && (t.defaultValue = e[1]),
              "string" === typeof e[2] && (t.tDescription = e[2]),
              "object" === typeof e[2] || "object" === typeof e[3])
            ) {
              var n = e[3] || e[2];
              Object.keys(n).forEach(function (e) {
                t[e] = n[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: function (e, t, n, r) {
              return e;
            },
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        };
      }
      function Ia(e) {
        return (
          "string" === typeof e.ns && (e.ns = [e.ns]),
          "string" === typeof e.fallbackLng &&
            (e.fallbackLng = [e.fallbackLng]),
          "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            e.supportedLngs.indexOf("cimode") < 0 &&
            (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
          e
        );
      }
      function Aa() {}
      var Ua = (function (e) {
          L(n, e);
          var t = j(n);
          function n() {
            var e;
            E(this, n);
            var r,
              a =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              o = arguments.length > 1 ? arguments[1] : void 0;
            if (
              (((e = t.call(this)).options = Ia(a)),
              (e.services = {}),
              (e.logger = ia),
              (e.modules = { external: [] }),
              (r = O(e)),
              Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(
                function (e) {
                  "function" === typeof r[e] && (r[e] = r[e].bind(r));
                },
              ),
              o && !e.isInitialized && !a.isClone)
            ) {
              if (!e.options.initImmediate) return e.init(a, o), R(e, O(e));
              setTimeout(function () {
                e.init(a, o);
              }, 0);
            }
            return e;
          }
          return (
            S(
              n,
              [
                {
                  key: "init",
                  value: function () {
                    var e = this,
                      t = this,
                      n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      r = arguments.length > 1 ? arguments[1] : void 0;
                    "function" === typeof n && ((r = n), (n = {})),
                      !n.defaultNS &&
                        !1 !== n.defaultNS &&
                        n.ns &&
                        ("string" === typeof n.ns
                          ? (n.defaultNS = n.ns)
                          : n.ns.indexOf("translation") < 0 &&
                            (n.defaultNS = n.ns[0]));
                    var a = Fa();
                    function o(e) {
                      return e ? ("function" === typeof e ? new e() : e) : null;
                    }
                    if (
                      ((this.options = xn(xn(xn({}, a), this.options), Ia(n))),
                      "v1" !== this.options.compatibilityAPI &&
                        (this.options.interpolation = xn(
                          xn({}, a.interpolation),
                          this.options.interpolation,
                        )),
                      void 0 !== n.keySeparator &&
                        (this.options.userDefinedKeySeparator = n.keySeparator),
                      void 0 !== n.nsSeparator &&
                        (this.options.userDefinedNsSeparator = n.nsSeparator),
                      !this.options.isClone)
                    ) {
                      var i;
                      this.modules.logger
                        ? ia.init(o(this.modules.logger), this.options)
                        : ia.init(null, this.options),
                        this.modules.formatter
                          ? (i = this.modules.formatter)
                          : "undefined" !== typeof Intl && (i = Ma);
                      var l = new Ca(this.options);
                      this.store = new wa(this.options.resources, this.options);
                      var u = this.services;
                      (u.logger = ia),
                        (u.resourceStore = this.store),
                        (u.languageUtils = l),
                        (u.pluralResolver = new ja(l, {
                          prepend: this.options.pluralSeparator,
                          compatibilityJSON: this.options.compatibilityJSON,
                          simplifyPluralSuffix:
                            this.options.simplifyPluralSuffix,
                        })),
                        !i ||
                          (this.options.interpolation.format &&
                            this.options.interpolation.format !==
                              a.interpolation.format) ||
                          ((u.formatter = o(i)),
                          u.formatter.init(u, this.options),
                          (this.options.interpolation.format =
                            u.formatter.format.bind(u.formatter))),
                        (u.interpolator = new _a(this.options)),
                        (u.utils = {
                          hasLoadedNamespace:
                            this.hasLoadedNamespace.bind(this),
                        }),
                        (u.backendConnector = new za(
                          o(this.modules.backend),
                          u.resourceStore,
                          u,
                          this.options,
                        )),
                        u.backendConnector.on("*", function (e) {
                          for (
                            var n = arguments.length,
                              r = new Array(n > 1 ? n - 1 : 0),
                              a = 1;
                            a < n;
                            a++
                          )
                            r[a - 1] = arguments[a];
                          t.emit.apply(t, [e].concat(r));
                        }),
                        this.modules.languageDetector &&
                          ((u.languageDetector = o(
                            this.modules.languageDetector,
                          )),
                          u.languageDetector.init &&
                            u.languageDetector.init(
                              u,
                              this.options.detection,
                              this.options,
                            )),
                        this.modules.i18nFormat &&
                          ((u.i18nFormat = o(this.modules.i18nFormat)),
                          u.i18nFormat.init && u.i18nFormat.init(this)),
                        (this.translator = new Sa(this.services, this.options)),
                        this.translator.on("*", function (e) {
                          for (
                            var n = arguments.length,
                              r = new Array(n > 1 ? n - 1 : 0),
                              a = 1;
                            a < n;
                            a++
                          )
                            r[a - 1] = arguments[a];
                          t.emit.apply(t, [e].concat(r));
                        }),
                        this.modules.external.forEach(function (t) {
                          t.init && t.init(e);
                        });
                    }
                    if (
                      ((this.format = this.options.interpolation.format),
                      r || (r = Aa),
                      this.options.fallbackLng &&
                        !this.services.languageDetector &&
                        !this.options.lng)
                    ) {
                      var s = this.services.languageUtils.getFallbackCodes(
                        this.options.fallbackLng,
                      );
                      s.length > 0 &&
                        "dev" !== s[0] &&
                        (this.options.lng = s[0]);
                    }
                    this.services.languageDetector ||
                      this.options.lng ||
                      this.logger.warn(
                        "init: no languageDetector is used and no lng is defined",
                      );
                    [
                      "getResource",
                      "hasResourceBundle",
                      "getResourceBundle",
                      "getDataByLanguage",
                    ].forEach(function (n) {
                      e[n] = function () {
                        var e;
                        return (e = t.store)[n].apply(e, arguments);
                      };
                    });
                    [
                      "addResource",
                      "addResources",
                      "addResourceBundle",
                      "removeResourceBundle",
                    ].forEach(function (n) {
                      e[n] = function () {
                        var e;
                        return (e = t.store)[n].apply(e, arguments), t;
                      };
                    });
                    var c = ua(),
                      f = function () {
                        var t = function (t, n) {
                          e.isInitialized &&
                            !e.initializedStoreOnce &&
                            e.logger.warn(
                              "init: i18next is already initialized. You should call init just once!",
                            ),
                            (e.isInitialized = !0),
                            e.options.isClone ||
                              e.logger.log("initialized", e.options),
                            e.emit("initialized", e.options),
                            c.resolve(n),
                            r(t, n);
                        };
                        if (
                          e.languages &&
                          "v1" !== e.options.compatibilityAPI &&
                          !e.isInitialized
                        )
                          return t(null, e.t.bind(e));
                        e.changeLanguage(e.options.lng, t);
                      };
                    return (
                      this.options.resources || !this.options.initImmediate
                        ? f()
                        : setTimeout(f, 0),
                      c
                    );
                  },
                },
                {
                  key: "loadResources",
                  value: function (e) {
                    var t = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : Aa,
                      r = "string" === typeof e ? e : this.language;
                    if (
                      ("function" === typeof e && (n = e),
                      !this.options.resources ||
                        this.options.partialBundledLanguages)
                    ) {
                      if (
                        r &&
                        "cimode" === r.toLowerCase() &&
                        (!this.options.preload ||
                          0 === this.options.preload.length)
                      )
                        return n();
                      var a = [],
                        o = function (e) {
                          e &&
                            "cimode" !== e &&
                            t.services.languageUtils
                              .toResolveHierarchy(e)
                              .forEach(function (e) {
                                "cimode" !== e && a.indexOf(e) < 0 && a.push(e);
                              });
                        };
                      if (r) o(r);
                      else
                        this.services.languageUtils
                          .getFallbackCodes(this.options.fallbackLng)
                          .forEach(function (e) {
                            return o(e);
                          });
                      this.options.preload &&
                        this.options.preload.forEach(function (e) {
                          return o(e);
                        }),
                        this.services.backendConnector.load(
                          a,
                          this.options.ns,
                          function (e) {
                            e ||
                              t.resolvedLanguage ||
                              !t.language ||
                              t.setResolvedLanguage(t.language),
                              n(e);
                          },
                        );
                    } else n(null);
                  },
                },
                {
                  key: "reloadResources",
                  value: function (e, t, n) {
                    var r = ua();
                    return (
                      e || (e = this.languages),
                      t || (t = this.options.ns),
                      n || (n = Aa),
                      this.services.backendConnector.reload(e, t, function (e) {
                        r.resolve(), n(e);
                      }),
                      r
                    );
                  },
                },
                {
                  key: "use",
                  value: function (e) {
                    if (!e)
                      throw new Error(
                        "You are passing an undefined module! Please check the object you are passing to i18next.use()",
                      );
                    if (!e.type)
                      throw new Error(
                        "You are passing a wrong module! Please check the object you are passing to i18next.use()",
                      );
                    return (
                      "backend" === e.type && (this.modules.backend = e),
                      ("logger" === e.type || (e.log && e.warn && e.error)) &&
                        (this.modules.logger = e),
                      "languageDetector" === e.type &&
                        (this.modules.languageDetector = e),
                      "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                      "postProcessor" === e.type && ka.addPostProcessor(e),
                      "formatter" === e.type && (this.modules.formatter = e),
                      "3rdParty" === e.type && this.modules.external.push(e),
                      this
                    );
                  },
                },
                {
                  key: "setResolvedLanguage",
                  value: function (e) {
                    if (
                      e &&
                      this.languages &&
                      !(["cimode", "dev"].indexOf(e) > -1)
                    )
                      for (var t = 0; t < this.languages.length; t++) {
                        var n = this.languages[t];
                        if (
                          !(["cimode", "dev"].indexOf(n) > -1) &&
                          this.store.hasLanguageSomeTranslations(n)
                        ) {
                          this.resolvedLanguage = n;
                          break;
                        }
                      }
                  },
                },
                {
                  key: "changeLanguage",
                  value: function (e, t) {
                    var n = this,
                      r = this;
                    this.isLanguageChangingTo = e;
                    var a = ua();
                    this.emit("languageChanging", e);
                    var o = function (e) {
                        (n.language = e),
                          (n.languages =
                            n.services.languageUtils.toResolveHierarchy(e)),
                          (n.resolvedLanguage = void 0),
                          n.setResolvedLanguage(e);
                      },
                      i = function (i) {
                        e || i || !n.services.languageDetector || (i = []);
                        var l =
                          "string" === typeof i
                            ? i
                            : n.services.languageUtils.getBestMatchFromCodes(i);
                        l &&
                          (n.language || o(l),
                          n.translator.language ||
                            n.translator.changeLanguage(l),
                          n.services.languageDetector &&
                            n.services.languageDetector.cacheUserLanguage &&
                            n.services.languageDetector.cacheUserLanguage(l)),
                          n.loadResources(l, function (e) {
                            !(function (e, i) {
                              i
                                ? (o(i),
                                  n.translator.changeLanguage(i),
                                  (n.isLanguageChangingTo = void 0),
                                  n.emit("languageChanged", i),
                                  n.logger.log("languageChanged", i))
                                : (n.isLanguageChangingTo = void 0),
                                a.resolve(function () {
                                  return r.t.apply(r, arguments);
                                }),
                                t &&
                                  t(e, function () {
                                    return r.t.apply(r, arguments);
                                  });
                            })(e, l);
                          });
                      };
                    return (
                      e ||
                      !this.services.languageDetector ||
                      this.services.languageDetector.async
                        ? !e &&
                          this.services.languageDetector &&
                          this.services.languageDetector.async
                          ? 0 === this.services.languageDetector.detect.length
                            ? this.services.languageDetector.detect().then(i)
                            : this.services.languageDetector.detect(i)
                          : i(e)
                        : i(this.services.languageDetector.detect()),
                      a
                    );
                  },
                },
                {
                  key: "getFixedT",
                  value: function (e, t, n) {
                    var r = this,
                      a = function e(t, a) {
                        var o;
                        if ("object" !== typeof a) {
                          for (
                            var i = arguments.length,
                              l = new Array(i > 2 ? i - 2 : 0),
                              u = 2;
                            u < i;
                            u++
                          )
                            l[u - 2] = arguments[u];
                          o = r.options.overloadTranslationOptionHandler(
                            [t, a].concat(l),
                          );
                        } else o = xn({}, a);
                        (o.lng = o.lng || e.lng),
                          (o.lngs = o.lngs || e.lngs),
                          (o.ns = o.ns || e.ns),
                          (o.keyPrefix = o.keyPrefix || n || e.keyPrefix);
                        var s,
                          c = r.options.keySeparator || ".";
                        return (
                          (s =
                            o.keyPrefix && Array.isArray(t)
                              ? t.map(function (e) {
                                  return ""
                                    .concat(o.keyPrefix)
                                    .concat(c)
                                    .concat(e);
                                })
                              : o.keyPrefix
                                ? "".concat(o.keyPrefix).concat(c).concat(t)
                                : t),
                          r.t(s, o)
                        );
                      };
                    return (
                      "string" === typeof e ? (a.lng = e) : (a.lngs = e),
                      (a.ns = t),
                      (a.keyPrefix = n),
                      a
                    );
                  },
                },
                {
                  key: "t",
                  value: function () {
                    var e;
                    return (
                      this.translator &&
                      (e = this.translator).translate.apply(e, arguments)
                    );
                  },
                },
                {
                  key: "exists",
                  value: function () {
                    var e;
                    return (
                      this.translator &&
                      (e = this.translator).exists.apply(e, arguments)
                    );
                  },
                },
                {
                  key: "setDefaultNamespace",
                  value: function (e) {
                    this.options.defaultNS = e;
                  },
                },
                {
                  key: "hasLoadedNamespace",
                  value: function (e) {
                    var t = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    if (!this.isInitialized)
                      return (
                        this.logger.warn(
                          "hasLoadedNamespace: i18next was not initialized",
                          this.languages,
                        ),
                        !1
                      );
                    if (!this.languages || !this.languages.length)
                      return (
                        this.logger.warn(
                          "hasLoadedNamespace: i18n.languages were undefined or empty",
                          this.languages,
                        ),
                        !1
                      );
                    var r = n.lng || this.resolvedLanguage || this.languages[0],
                      a = !!this.options && this.options.fallbackLng,
                      o = this.languages[this.languages.length - 1];
                    if ("cimode" === r.toLowerCase()) return !0;
                    var i = function (e, n) {
                      var r =
                        t.services.backendConnector.state[
                          "".concat(e, "|").concat(n)
                        ];
                      return -1 === r || 2 === r;
                    };
                    if (n.precheck) {
                      var l = n.precheck(this, i);
                      if (void 0 !== l) return l;
                    }
                    return (
                      !!this.hasResourceBundle(r, e) ||
                      !(
                        this.services.backendConnector.backend &&
                        (!this.options.resources ||
                          this.options.partialBundledLanguages)
                      ) ||
                      !(!i(r, e) || (a && !i(o, e)))
                    );
                  },
                },
                {
                  key: "loadNamespaces",
                  value: function (e, t) {
                    var n = this,
                      r = ua();
                    return this.options.ns
                      ? ("string" === typeof e && (e = [e]),
                        e.forEach(function (e) {
                          n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                        }),
                        this.loadResources(function (e) {
                          r.resolve(), t && t(e);
                        }),
                        r)
                      : (t && t(), Promise.resolve());
                  },
                },
                {
                  key: "loadLanguages",
                  value: function (e, t) {
                    var n = ua();
                    "string" === typeof e && (e = [e]);
                    var r = this.options.preload || [],
                      a = e.filter(function (e) {
                        return r.indexOf(e) < 0;
                      });
                    return a.length
                      ? ((this.options.preload = r.concat(a)),
                        this.loadResources(function (e) {
                          n.resolve(), t && t(e);
                        }),
                        n)
                      : (t && t(), Promise.resolve());
                  },
                },
                {
                  key: "dir",
                  value: function (e) {
                    if (
                      (e ||
                        (e =
                          this.resolvedLanguage ||
                          (this.languages && this.languages.length > 0
                            ? this.languages[0]
                            : this.language)),
                      !e)
                    )
                      return "rtl";
                    var t =
                      (this.services && this.services.languageUtils) ||
                      new Ca(Fa());
                    return [
                      "ar",
                      "shu",
                      "sqr",
                      "ssh",
                      "xaa",
                      "yhd",
                      "yud",
                      "aao",
                      "abh",
                      "abv",
                      "acm",
                      "acq",
                      "acw",
                      "acx",
                      "acy",
                      "adf",
                      "ads",
                      "aeb",
                      "aec",
                      "afb",
                      "ajp",
                      "apc",
                      "apd",
                      "arb",
                      "arq",
                      "ars",
                      "ary",
                      "arz",
                      "auz",
                      "avl",
                      "ayh",
                      "ayl",
                      "ayn",
                      "ayp",
                      "bbz",
                      "pga",
                      "he",
                      "iw",
                      "ps",
                      "pbt",
                      "pbu",
                      "pst",
                      "prp",
                      "prd",
                      "ug",
                      "ur",
                      "ydd",
                      "yds",
                      "yih",
                      "ji",
                      "yi",
                      "hbo",
                      "men",
                      "xmn",
                      "fa",
                      "jpr",
                      "peo",
                      "pes",
                      "prs",
                      "dv",
                      "sam",
                      "ckb",
                    ].indexOf(t.getLanguagePartFromCode(e)) > -1 ||
                      e.toLowerCase().indexOf("-arab") > 1
                      ? "rtl"
                      : "ltr";
                  },
                },
                {
                  key: "cloneInstance",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : Aa,
                      a = t.forkResourceStore;
                    a && delete t.forkResourceStore;
                    var o = xn(xn(xn({}, this.options), t), { isClone: !0 }),
                      i = new n(o);
                    (void 0 === t.debug && void 0 === t.prefix) ||
                      (i.logger = i.logger.clone(t));
                    return (
                      ["store", "services", "language"].forEach(function (t) {
                        i[t] = e[t];
                      }),
                      (i.services = xn({}, this.services)),
                      (i.services.utils = {
                        hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                      }),
                      a &&
                        ((i.store = new wa(this.store.data, o)),
                        (i.services.resourceStore = i.store)),
                      (i.translator = new Sa(i.services, o)),
                      i.translator.on("*", function (e) {
                        for (
                          var t = arguments.length,
                            n = new Array(t > 1 ? t - 1 : 0),
                            r = 1;
                          r < t;
                          r++
                        )
                          n[r - 1] = arguments[r];
                        i.emit.apply(i, [e].concat(n));
                      }),
                      i.init(o, r),
                      (i.translator.options = o),
                      (i.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                      }),
                      i
                    );
                  },
                },
                {
                  key: "toJSON",
                  value: function () {
                    return {
                      options: this.options,
                      store: this.store,
                      language: this.language,
                      languages: this.languages,
                      resolvedLanguage: this.resolvedLanguage,
                    };
                  },
                },
              ],
              [
                {
                  key: "createInstance",
                  value: function () {
                    return new n(
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                      arguments.length > 1 ? arguments[1] : void 0,
                    );
                  },
                },
              ],
            ),
            n
          );
        })(la),
        Ba = Ua.createInstance();
      Ba.createInstance = Ua.createInstance;
      Ba.createInstance,
        Ba.dir,
        Ba.init,
        Ba.loadResources,
        Ba.reloadResources,
        Ba.use,
        Ba.changeLanguage,
        Ba.getFixedT,
        Ba.t,
        Ba.exists,
        Ba.setDefaultNamespace,
        Ba.hasLoadedNamespace,
        Ba.loadNamespaces,
        Ba.loadLanguages;
      var Va = {
        en: {
          translation: JSON.parse(
            '{"header":{"name":"Gerard Heredia","labels":{"home":"Home","about":"About","projects":"Projects","contact":"Contact"}},"language":{"en":"English","es":"Espa\xf1ol","ca":"Catal\xe0"},"footer":{"copyright":"\xa9 2023 Gerard Heredia. All Rights Reserved.","labels":{"home":"Home","about":"About","projects":"Projects","contact":"Contact","privacy":"Privacy policy"}}}',
          ),
        },
        ca: {
          translation: JSON.parse(
            '{"header":{"name":"Gerard Heredia","labels":{"home":"Inici","about":"Sobre mi","projects":"Projectes","contact":"Contacte"}},"language":{"en":"English","es":"Espa\xf1ol","ca":"Catal\xe0"},"footer":{"copyright":"\xa9 2023 Gerard Heredia. Tots els drets reservats.","labels":{"home":"Inici","about":"Sobre mi","projects":"Projectes","contact":"Contacte","privacy":"Pol\xedtica de privacitat"}}}',
          ),
        },
        es: {
          translation: JSON.parse(
            '{"header":{"name":"Gerard Heredia","labels":{"home":"Inicio","about":"Acerca de m\xed","projects":"Proyectos","contact":"Contacto"}},"language":{"en":"English","es":"Espa\xf1ol","ca":"Catal\xe0"},"footer":{"copyright":"\xa9 2023 Gerard Heredia. Todos los derechos reservados.","labels":{"home":"Inicio","about":"Acerca de m\xed","projects":"Proyectos","contact":"Contacto","privacy":"Pol\xedtica de privacidad"}}}',
          ),
        },
      };
      Ba.use(Pn).init({
        resources: Va,
        lng: localStorage.getItem(Bn.SELECTED_LANGUAGE) || Vn.ENGLISH,
        interpolation: { escapeValue: !1 },
      });
      var Ha = Ba;
      r.createRoot(document.getElementById("root")).render(
        (0, a.jsx)(e.StrictMode, {
          children: (0, a.jsx)(_n, {
            i18n: Ha,
            children: (0, a.jsx)(na, {}),
          }),
        }),
      ),
        ra();
    })();
})();
//# sourceMappingURL=main.2d233617.js.map
