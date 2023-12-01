/*! For license information please see main.4a7f4afb.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      470: function (e, t, n) {
        n.r(t);
        n(791);
        var r = n(184);
        t.default = function () {
          return (0, r.jsx)("div", { children: "About Component" });
        };
      },
      660: function (e, t, n) {
        n.r(t);
        n(791);
        var r = n(184);
        t.default = function () {
          return (0, r.jsx)("div", { children: "Contact Component" });
        };
      },
      872: function (e, t, n) {
        n.r(t);
        var r = n(184);
        t.default = function () {
          return (0, r.jsx)("div", { children: "Home Component" });
        };
      },
      539: function (e, t, n) {
        n.r(t);
        n(791);
        var r = n(184);
        t.default = function () {
          return (0, r.jsx)("div", { children: "Projects Component" });
        };
      },
      463: function (e, t, n) {
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
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
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
            var t = e.replace(y, g);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(
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
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          _ = Symbol.for("react.provider"),
          P = Symbol.for("react.context"),
          L = Symbol.for("react.forward_ref"),
          R = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          N = Symbol.for("react.memo"),
          O = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var z = Symbol.for("react.offscreen");
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
        var j,
          F = Object.assign;
        function U(e) {
          if (void 0 === j)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              j = (t && t[1]) || "";
            }
          return "\n" + j + e;
        }
        var I = !1;
        function A(e, t) {
          if (!e || I) return "";
          I = !0;
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
            (I = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? U(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return U(e.type);
            case 16:
              return U("Lazy");
            case 13:
              return U("Suspense");
            case 19:
              return U("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = A(e.type, !1));
            case 11:
              return (e = A(e.type.render, !1));
            case 1:
              return (e = A(e.type, !0));
            default:
              return "";
          }
        }
        function $(e) {
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
            case R:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || "Context") + ".Consumer";
              case _:
                return (e._context.displayName || "Context") + ".Provider";
              case L:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case N:
                return null !== (t = e.displayName || null)
                  ? t
                  : $(e.type) || "Memo";
              case O:
                (t = e._payload), (e = e._init);
                try {
                  return $(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
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
              return $(t);
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
        function H(e) {
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
        function V(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = V(e) ? "checked" : "value",
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
            e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
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
        function Y(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function G(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = H(t.value),
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
              ee(e, t.type, H(t.defaultValue)),
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
          ("number" === t && K(e.ownerDocument) === e) ||
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
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
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
          e._wrapperState = { initialValue: H(n) };
        }
        function oe(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
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
        function me(e, t) {
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
        var ye = F(
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
        function ge(e, t) {
          if (t) {
            if (
              ye[e] &&
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
        function _e(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Pe() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Le(e, t) {
          return e(t);
        }
        function Re() {}
        var Te = !1;
        function Ne(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return Le(e, t, n);
          } finally {
            (Te = !1), (null !== Se || null !== Ee) && (Re(), Pe());
          }
        }
        function Oe(e, t) {
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
        var ze = !1;
        if (c)
          try {
            var De = {};
            Object.defineProperty(De, "passive", {
              get: function () {
                ze = !0;
              },
            }),
              window.addEventListener("test", De, De),
              window.removeEventListener("test", De, De);
          } catch (ce) {
            ze = !1;
          }
        function Me(e, t, n, r, a, o, i, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var je = !1,
          Fe = null,
          Ue = !1,
          Ie = null,
          Ae = {
            onError: function (e) {
              (je = !0), (Fe = e);
            },
          };
        function Be(e, t, n, r, a, o, i, l, u) {
          (je = !1), (Fe = null), Me.apply(Ae, arguments);
        }
        function $e(e) {
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
        function We(e) {
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
        function He(e) {
          if ($e(e) !== e) throw Error(o(188));
        }
        function Ve(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = $e(e))) throw Error(o(188));
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
                    if (i === n) return He(a), e;
                    if (i === r) return He(a), t;
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
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Ge = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
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
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function gt(e, t) {
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
          _t = !1,
          Pt = [],
          Lt = null,
          Rt = null,
          Tt = null,
          Nt = new Map(),
          Ot = new Map(),
          zt = [],
          Dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function Mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Lt = null;
              break;
            case "dragenter":
            case "dragleave":
              Rt = null;
              break;
            case "mouseover":
            case "mouseout":
              Tt = null;
              break;
            case "pointerover":
            case "pointerout":
              Nt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ot.delete(t.pointerId);
          }
        }
        function jt(e, t, n, r, a, o) {
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
          var t = ga(e.target);
          if (null !== t) {
            var n = $e(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
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
        function Ut(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function It(e, t, n) {
          Ut(e) && n.delete(t);
        }
        function At() {
          (_t = !1),
            null !== Lt && Ut(Lt) && (Lt = null),
            null !== Rt && Ut(Rt) && (Rt = null),
            null !== Tt && Ut(Tt) && (Tt = null),
            Nt.forEach(It),
            Ot.forEach(It);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            _t ||
              ((_t = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, At)));
        }
        function $t(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Pt.length) {
            Bt(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Lt && Bt(Lt, e),
              null !== Rt && Bt(Rt, e),
              null !== Tt && Bt(Tt, e),
              Nt.forEach(t),
              Ot.forEach(t),
              n = 0;
            n < zt.length;
            n++
          )
            (r = zt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < zt.length && null === (n = zt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && zt.shift();
        }
        var Wt = w.ReactCurrentBatchConfig,
          Ht = !0;
        function Vt(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function qt(e, t, n, r) {
          if (Ht) {
            var a = Yt(e, t, n, r);
            if (null === a) Hr(e, t, r, Kt, n), Mt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Lt = jt(Lt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Rt = jt(Rt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Tt = jt(Tt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Nt.set(o, jt(Nt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Ot.set(o, jt(Ot.get(o) || null, e, t, n, r, a)),
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
                  null === (o = Yt(e, t, n, r)) && Hr(e, t, r, Kt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Yt(e, t, n, r) {
          if (((Kt = null), null !== (e = ga((e = ke(r))))))
            if (null === (t = $e(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Gt(e) {
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
              switch (Je()) {
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
        var Xt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
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
          mn = an(F({}, fn, { relatedTarget: 0 })),
          yn = an(
            F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          gn = F({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(gn),
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
        var _n = F({}, fn, {
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
          Pn = an(_n),
          Ln = an(
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
          Rn = an(
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
          Tn = an(
            F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Nn = F({}, pn, {
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
          On = an(Nn),
          zn = [9, 13, 27, 32],
          Dn = c && "CompositionEvent" in window,
          Mn = null;
        c && "documentMode" in document && (Mn = document.documentMode);
        var jn = c && "TextEvent" in window && !Mn,
          Fn = c && (!Dn || (Mn && 8 < Mn && 11 >= Mn)),
          Un = String.fromCharCode(32),
          In = !1;
        function An(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== zn.indexOf(t.keyCode);
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
        var $n = !1;
        var Wn = {
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
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function Vn(e, t, n, r) {
          _e(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          qn = null;
        function Kn(e) {
          Ur(e, 0);
        }
        function Yn(e) {
          if (q(wa(e))) return e;
        }
        function Gn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (qn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(qn)) {
            var t = [];
            Vn(t, qn, e, ke(e)), Ne(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(qn);
        }
        function or(e, t) {
          if ("click" === e) return Yn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
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
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
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
          mr = null,
          yr = null,
          gr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          br ||
            null == mr ||
            mr !== K(r) ||
            ("selectionStart" in (r = mr) && pr(r)
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
            (gr && ur(gr, r)) ||
              ((gr = r),
              0 < (r = Qr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
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
        var _r = Cr("animationend"),
          Pr = Cr("animationiteration"),
          Lr = Cr("animationstart"),
          Rr = Cr("transitionend"),
          Tr = new Map(),
          Nr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Or(e, t) {
          Tr.set(e, t), u(t, [e]);
        }
        for (var zr = 0; zr < Nr.length; zr++) {
          var Dr = Nr[zr];
          Or(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)));
        }
        Or(_r, "onAnimationEnd"),
          Or(Pr, "onAnimationIteration"),
          Or(Lr, "onAnimationStart"),
          Or("dblclick", "onDoubleClick"),
          Or("focusin", "onFocus"),
          Or("focusout", "onBlur"),
          Or(Rr, "onTransitionEnd"),
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
          jr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Mr),
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, u, s) {
              if ((Be.apply(this, arguments), je)) {
                if (!je) throw Error(o(198));
                var c = Fe;
                (je = !1), (Fe = null), Ue || ((Ue = !0), (Ie = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ur(e, t) {
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
          if (Ue) throw ((e = Ie), (Ue = !1), (Ie = null), e);
        }
        function Ir(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Ar(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function $r(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (jr.has(t) || Ar(t, !1, e), Ar(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ar("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var a = Vt;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !ze ||
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
        function Hr(e, t, n, r, a) {
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
                  if (null === (i = ga(l))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Ne(function () {
            var r = o,
              a = ke(n),
              i = [];
            e: {
              var l = Tr.get(e);
              if (void 0 !== l) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Pn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = mn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = mn;
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
                    u = Rn;
                    break;
                  case _r:
                  case Pr:
                  case Lr:
                    u = yn;
                    break;
                  case Rr:
                    u = Tn;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = On;
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
                    u = Ln;
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
                        null != (v = Oe(h, d)) &&
                        c.push(Vr(h, v, p))),
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
                  (!ga(s) && !s[ha])) &&
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
                          ? ga(s)
                          : null) &&
                        (s !== (f = $e(s)) || (5 !== s.tag && 6 !== s.tag)) &&
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
                    ((c = Ln),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? l : wa(u)),
                  (p = null == s ? l : wa(s)),
                  ((l = new c(v, h + "leave", u, n, a)).target = f),
                  (l.relatedTarget = p),
                  (v = null),
                  ga(a) === r &&
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
                null !== u && Kr(i, l, u, c, !1),
                  null !== s && null !== f && Kr(i, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? wa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var m = Gn;
              else if (Hn(l))
                if (Xn) m = ir;
                else {
                  m = ar;
                  var y = rr;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = or);
              switch (
                (m && (m = m(e, r))
                  ? Vn(i, m, n, a)
                  : (y && y(e, l, r),
                    "focusout" === e &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (y = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(y) || "true" === y.contentEditable) &&
                    ((mr = y), (yr = r), (gr = null));
                  break;
                case "focusout":
                  gr = yr = mr = null;
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
              var g;
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
                $n
                  ? An(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  ($n || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && $n && (g = en())
                    : ((Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      ($n = !0))),
                0 < (y = Qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = Bn(n)) && (b.data = g))),
                (g = jn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((In = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && In ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if ($n)
                        return "compositionend" === e || (!Dn && An(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), ($n = !1), e)
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
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            Ur(i, t);
          });
        }
        function Vr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Oe(e, n)) && r.unshift(Vr(e, o, a)),
              null != (o = Oe(e, t)) && r.push(Vr(e, o, a))),
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
        function Kr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              a
                ? null != (u = Oe(n, o)) && i.unshift(Vr(n, u, l))
                : a || (null != (u = Oe(n, o)) && i.push(Vr(n, u, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Yr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Gr, "");
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
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
                if (0 === r) return e.removeChild(a), void $t(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          $t(t);
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
          ma = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;
        function ga(e) {
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
        function _a(e, t) {
          Sa++, (xa[Sa] = e.current), (e.current = t);
        }
        var Pa = {},
          La = Ea(Pa),
          Ra = Ea(!1),
          Ta = Pa;
        function Na(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Pa;
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
        function Oa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function za() {
          Ca(Ra), Ca(La);
        }
        function Da(e, t, n) {
          if (La.current !== Pa) throw Error(o(168));
          _a(La, t), _a(Ra, n);
        }
        function Ma(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, W(e) || "Unknown", a));
          return F({}, n, r);
        }
        function ja(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Pa),
            (Ta = La.current),
            _a(La, e),
            _a(Ra, Ra.current),
            !0
          );
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Ma(e, t, Ta)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Ra),
              Ca(La),
              _a(La, e))
            : Ca(Ra),
            _a(Ra, n);
        }
        var Ua = null,
          Ia = !1,
          Aa = !1;
        function Ba(e) {
          null === Ua ? (Ua = [e]) : Ua.push(e);
        }
        function $a() {
          if (!Aa && null !== Ua) {
            Aa = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ua;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ua = null), (Ia = !1);
            } catch (a) {
              throw (null !== Ua && (Ua = Ua.slice(e + 1)), qe(Ze, $a), a);
            } finally {
              (bt = t), (Aa = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ha = 0,
          Va = null,
          Qa = 0,
          qa = [],
          Ka = 0,
          Ya = null,
          Ga = 1,
          Xa = "";
        function Ja(e, t) {
          (Wa[Ha++] = Qa), (Wa[Ha++] = Va), (Va = e), (Qa = t);
        }
        function Za(e, t, n) {
          (qa[Ka++] = Ga), (qa[Ka++] = Xa), (qa[Ka++] = Ya), (Ya = e);
          var r = Ga;
          e = Xa;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ga = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Xa = o + e);
          } else (Ga = (1 << o) | (n << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === Va; )
            (Va = Wa[--Ha]), (Wa[Ha] = null), (Qa = Wa[--Ha]), (Wa[Ha] = null);
          for (; e === Ya; )
            (Ya = qa[--Ka]),
              (qa[Ka] = null),
              (Xa = qa[--Ka]),
              (qa[Ka] = null),
              (Ga = qa[--Ka]),
              (qa[Ka] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Os(5, null, null, 0);
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
                ((n = null !== Ya ? { id: Ga, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Os(18, null, null, 0)).stateNode = t),
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
        var mo = w.ReactCurrentBatchConfig;
        function yo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var go = Ea(null),
          bo = null,
          wo = null,
          ko = null;
        function xo() {
          ko = wo = bo = null;
        }
        function So(e) {
          var t = go.current;
          Ca(go), (e._currentValue = t);
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
        function _o(e) {
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
        var Po = null;
        function Lo(e) {
          null === Po ? (Po = [e]) : Po.push(e);
        }
        function Ro(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Lo(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            To(e, r)
          );
        }
        function To(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var No = !1;
        function Oo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function zo(e, t) {
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
          if (((r = r.shared), 0 !== (2 & Ru))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              To(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Lo(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            To(e, n)
          );
        }
        function jo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
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
        function Uo(e, t, n, r) {
          var a = e.updateQueue;
          No = !1;
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
                      No = !0;
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
        function Io(e, t, n) {
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
        var Ao = new r.Component().refs;
        function Bo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var $o = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && $e(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Do(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Mo(e, o, a)) && (rs(t, e, a, r), jo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Do(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Mo(e, o, a)) && (rs(t, e, a, r), jo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              a = Do(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Mo(e, a, r)) && (rs(t, e, r, n), jo(t, e, r));
          },
        };
        function Wo(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, o);
        }
        function Ho(e, t, n) {
          var r = !1,
            a = Pa,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = _o(o))
              : ((a = Oa(t) ? Ta : La.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Na(e, a)
                  : Pa)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = $o),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Vo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && $o.enqueueReplaceState(t, t.state, null);
        }
        function Qo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Ao), Oo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = _o(o))
            : ((o = Oa(t) ? Ta : La.current), (a.context = Na(e, o))),
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
              t !== a.state && $o.enqueueReplaceState(a, a.state, null),
              Uo(e, n, a, r),
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
                    t === Ao && (t = a.refs = {}),
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
        function Ko(e, t) {
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
        function Yo(e) {
          return (0, e._init)(e._payload);
        }
        function Go(e) {
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
              ? (((t = Us(n, e.mode, r)).return = e), t)
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
                      o.$$typeof === O &&
                      Yo(o) === t.type))
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
              ? (((t = Is(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = js(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Us("" + t, e.mode, n)).return = e), t;
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
                  return ((t = Is(t, e.mode, n)).return = e), t;
                case O:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || M(t))
                return ((t = js(t, e.mode, n, null)).return = e), t;
              Ko(e, t);
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
                case O:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || M(n)) return null !== a ? null : f(e, t, n, r, null);
              Ko(e, n);
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
                case O:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || M(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Ko(t, r);
            }
            return null;
          }
          function v(a, o, l, u) {
            for (
              var s = null, c = null, f = o, v = (o = 0), m = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var y = p(a, f, l[v], u);
              if (null === y) {
                null === f && (f = m);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (o = i(y, o, v)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (f = m);
            }
            if (v === l.length) return n(a, f), ao && Ja(a, v), s;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = d(a, l[v], u)) &&
                  ((o = i(f, o, v)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return ao && Ja(a, v), s;
            }
            for (f = r(a, f); v < l.length; v++)
              null !== (m = h(f, a, v, l[v], u)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (o = i(m, o, v)),
                null === c ? (s = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, v),
              s
            );
          }
          function m(a, l, u, s) {
            var c = M(u);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var f = (c = null), v = l, m = (l = 0), y = null, g = u.next();
              null !== v && !g.done;
              m++, g = u.next()
            ) {
              v.index > m ? ((y = v), (v = null)) : (y = v.sibling);
              var b = p(a, v, g.value, s);
              if (null === b) {
                null === v && (v = y);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (l = i(b, l, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = y);
            }
            if (g.done) return n(a, v), ao && Ja(a, m), c;
            if (null === v) {
              for (; !g.done; m++, g = u.next())
                null !== (g = d(a, g.value, s)) &&
                  ((l = i(g, l, m)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return ao && Ja(a, m), c;
            }
            for (v = r(a, v); !g.done; m++, g = u.next())
              null !== (g = h(v, a, m, g.value, s)) &&
                (e &&
                  null !== g.alternate &&
                  v.delete(null === g.key ? m : g.key),
                (l = i(g, l, m)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, m),
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
                            s.$$typeof === O &&
                            Yo(s) === c.type)
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
                      ? (((o = js(i.props.children, r.mode, u, i.key)).return =
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
                    ((o = Is(i, r.mode, u)).return = r), (r = o);
                  }
                  return l(r);
                case O:
                  return e(r, o, (c = i._init)(i._payload), u);
              }
              if (te(i)) return v(r, o, i, u);
              if (M(i)) return m(r, o, i, u);
              Ko(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Us(i, r.mode, u)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var Xo = Go(!0),
          Jo = Go(!1),
          Zo = {},
          ei = Ea(Zo),
          ti = Ea(Zo),
          ni = Ea(Zo);
        function ri(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((_a(ni, t), _a(ti, e), _a(ei, Zo), (e = t.nodeType))) {
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
          Ca(ei), _a(ei, t);
        }
        function oi() {
          Ca(ei), Ca(ti), Ca(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = ue(t, e.type);
          t !== n && (_a(ti, e), _a(ei, n));
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
          mi = null,
          yi = null,
          gi = !1,
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
                (yi = mi = null),
                (t.updateQueue = null),
                (di.current = sl),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((di.current = il),
            (t = null !== mi && null !== mi.next),
            (hi = 0),
            (yi = mi = vi = null),
            (gi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Ci() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function _i() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e), yi
          );
        }
        function Pi() {
          if (null === mi) {
            var e = vi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var t = null === yi ? vi.memoizedState : yi.next;
          if (null !== t) (yi = t), (mi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e);
          }
          return yi;
        }
        function Li(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ri(e) {
          var t = Pi(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = mi,
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
        function Ti(e) {
          var t = Pi(),
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
        function Ni() {}
        function Oi(e, t) {
          var n = vi,
            r = Pi(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wl = !0)),
            (r = r.queue),
            Hi(Mi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== yi && 1 & yi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ii(9, Di.bind(null, n, r, a, t), void 0, null),
              null === Tu)
            )
              throw Error(o(349));
            0 !== (30 & hi) || zi(n, t, a);
          }
          return a;
        }
        function zi(e, t, n) {
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
          (t.value = n), (t.getSnapshot = r), ji(t) && Fi(e);
        }
        function Mi(e, t, n) {
          return n(function () {
            ji(t) && Fi(e);
          });
        }
        function ji(e) {
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
          var t = To(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function Ui(e) {
          var t = _i();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Li,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, vi, e)),
            [t.memoizedState, e]
          );
        }
        function Ii(e, t, n, r) {
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
        function Ai() {
          return Pi().memoizedState;
        }
        function Bi(e, t, n, r) {
          var a = _i();
          (vi.flags |= e),
            (a.memoizedState = Ii(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function $i(e, t, n, r) {
          var a = Pi();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((o = i.destroy), null !== r && Si(r, i.deps)))
              return void (a.memoizedState = Ii(t, n, o, r));
          }
          (vi.flags |= e), (a.memoizedState = Ii(1 | t, n, o, r));
        }
        function Wi(e, t) {
          return Bi(8390656, 8, e, t);
        }
        function Hi(e, t) {
          return $i(2048, 8, e, t);
        }
        function Vi(e, t) {
          return $i(4, 2, e, t);
        }
        function Qi(e, t) {
          return $i(4, 4, e, t);
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
        function Ki(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            $i(4, 4, qi.bind(null, t, e), n)
          );
        }
        function Yi() {}
        function Gi(e, t) {
          var n = Pi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xi(e, t) {
          var n = Pi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ji(e, t, n) {
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
          return Pi().memoizedState;
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
          else if (null !== (n = Ro(e, t, n, r))) {
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
                      ? ((a.next = a), Lo(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = Ro(e, t, a, r)) &&
              (rs(n, e, r, (a = ts())), ol(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === vi || (null !== t && t === vi);
        }
        function al(e, t) {
          bi = gi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ol(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var il = {
            readContext: _o,
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
            readContext: _o,
            useCallback: function (e, t) {
              return (_i().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: _o,
            useEffect: Wi,
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
              var n = _i();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = _i();
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
              return (e = { current: e }), (_i().memoizedState = e);
            },
            useState: Ui,
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return (_i().memoizedState = e);
            },
            useTransition: function () {
              var e = Ui(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (_i().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vi,
                a = _i();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Tu)) throw Error(o(349));
                0 !== (30 & hi) || zi(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Wi(Mi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ii(9, Di.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = _i(),
                t = Tu.identifierPrefix;
              if (ao) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ga & ~(1 << (32 - it(Ga) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ki++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: _o,
            useCallback: Gi,
            useContext: _o,
            useEffect: Hi,
            useImperativeHandle: Ki,
            useInsertionEffect: Vi,
            useLayoutEffect: Qi,
            useMemo: Xi,
            useReducer: Ri,
            useRef: Ai,
            useState: function () {
              return Ri(Li);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return Ji(Pi(), mi.memoizedState, e);
            },
            useTransition: function () {
              return [Ri(Li)[0], Pi().memoizedState];
            },
            useMutableSource: Ni,
            useSyncExternalStore: Oi,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: _o,
            useCallback: Gi,
            useContext: _o,
            useEffect: Hi,
            useImperativeHandle: Ki,
            useInsertionEffect: Vi,
            useLayoutEffect: Qi,
            useMemo: Xi,
            useReducer: Ti,
            useRef: Ai,
            useState: function () {
              return Ti(Li);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              var t = Pi();
              return null === mi
                ? (t.memoizedState = e)
                : Ji(t, mi.memoizedState, e);
            },
            useTransition: function () {
              return [Ti(Li)[0], Pi().memoizedState];
            },
            useMutableSource: Ni,
            useSyncExternalStore: Oi,
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
              Vu || ((Vu = !0), (Qu = r)), dl(0, t);
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
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = _s.bind(null, e, t, n)), t.then(e, e));
        }
        function yl(e) {
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
        function gl(e, t, n, r, a) {
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
          t.child = null === e ? Jo(t, null, n, r) : Xo(t, e.child, n, r);
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
                Vl(e, t, a))
          );
        }
        function Sl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              zs(o) ||
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
              return Vl(e, t, a);
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
                return (t.lanes = e.lanes), Vl(e, t, a);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return Pl(e, t, n, r, a);
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
                _a(Du, zu),
                (zu |= n);
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
                  _a(Du, zu),
                  (zu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                _a(Du, zu),
                (zu |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              _a(Du, zu),
              (zu |= r);
          return kl(e, t, a, n), t.child;
        }
        function _l(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Pl(e, t, n, r, a) {
          var o = Oa(n) ? Ta : La.current;
          return (
            (o = Na(t, o)),
            Co(t, a),
            (n = Ei(e, t, n, r, o, a)),
            (r = Ci()),
            null === e || wl
              ? (ao && r && eo(t), (t.flags |= 1), kl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vl(e, t, a))
          );
        }
        function Ll(e, t, n, r, a) {
          if (Oa(n)) {
            var o = !0;
            ja(t);
          } else o = !1;
          if ((Co(t, a), null === t.stateNode))
            Hl(e, t), Ho(t, n, r), Qo(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = _o(s))
              : (s = Na(t, (s = Oa(n) ? Ta : La.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || u !== s) && Vo(t, i, r, s)),
              (No = !1);
            var d = t.memoizedState;
            (i.state = d),
              Uo(t, r, i, a),
              (u = t.memoizedState),
              l !== r || d !== u || Ra.current || No
                ? ("function" === typeof c &&
                    (Bo(t, n, c, r), (u = t.memoizedState)),
                  (l = No || Wo(t, n, l, r, d, u, s))
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
              zo(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : yo(t.type, l)),
              (i.props = s),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = _o(u))
                : (u = Na(t, (u = Oa(n) ? Ta : La.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== u) && Vo(t, i, r, u)),
              (No = !1),
              (d = t.memoizedState),
              (i.state = d),
              Uo(t, r, i, a);
            var h = t.memoizedState;
            l !== f || d !== h || Ra.current || No
              ? ("function" === typeof p &&
                  (Bo(t, n, p, r), (h = t.memoizedState)),
                (s = No || Wo(t, n, s, r, d, h, u) || !1)
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
          return Rl(e, t, n, r, o, a);
        }
        function Rl(e, t, n, r, a, o) {
          _l(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Fa(t, n, !1), Vl(e, t, o);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Xo(t, e.child, null, o)),
                (t.child = Xo(t, null, l, o)))
              : kl(e, t, l, o),
            (t.memoizedState = r.state),
            a && Fa(t, n, !0),
            t.child
          );
        }
        function Tl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Da(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Da(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function Nl(e, t, n, r, a) {
          return ho(), vo(a), (t.flags |= 256), kl(e, t, n, r), t.child;
        }
        var Ol,
          zl,
          Dl,
          Ml,
          jl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ul(e, t, n) {
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
            _a(ui, 1 & i),
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
                      (e = js(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Fl(n)),
                      (t.memoizedState = jl),
                      e)
                    : Il(t, u))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Al(e, t, l, (r = fl(Error(o(422))))))
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
                      ((i = js(i, a, l, null)).flags |= 2),
                      (r.return = t),
                      (i.return = t),
                      (r.sibling = i),
                      (t.child = r),
                      0 !== (1 & t.mode) && Xo(t, e.child, null, l),
                      (t.child.memoizedState = Fl(l)),
                      (t.memoizedState = jl),
                      i);
              if (0 === (1 & t.mode)) return Al(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Al(e, t, l, (r = fl((i = Error(o(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (l & e.childLanes)), wl || u)) {
                if (null !== (r = Tu)) {
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
                    ((i.retryLane = a), To(e, a), rs(r, e, a, -1));
                }
                return ms(), Al(e, t, l, (r = fl(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ls.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = sa(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((qa[Ka++] = Ga),
                    (qa[Ka++] = Xa),
                    (qa[Ka++] = Ya),
                    (Ga = e.id),
                    (Xa = e.overflow),
                    (Ya = t)),
                  (t = Il(t, r.children)),
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
                : ((l = js(l, u, n, null)).flags |= 2),
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
              (t.memoizedState = jl),
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
        function Il(e, t) {
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
        function Al(e, t, n, r) {
          return (
            null !== r && vo(r),
            Xo(t, e.child, null, n),
            ((e = Il(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Eo(e.return, t, n);
        }
        function $l(e, t, n, r, a) {
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
        function Wl(e, t, n) {
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
          if ((_a(ui, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === si(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  $l(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === si(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                $l(t, !0, n, null, o);
                break;
              case "together":
                $l(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vl(e, t, n) {
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
        function Ql(e, t) {
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
        function Kl(e, t, n) {
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
              return Oa(t.type) && za(), ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                Ca(Ra),
                Ca(La),
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
                zl(e, t),
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
                      Ir("cancel", r), Ir("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ir("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Mr.length; a++) Ir(Mr[a], r);
                      break;
                    case "source":
                      Ir("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ir("error", r), Ir("load", r);
                      break;
                    case "details":
                      Ir("toggle", r);
                      break;
                    case "input":
                      G(r, i), Ir("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ir("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Ir("invalid", r);
                  }
                  for (var u in (ge(n, i), (a = null), i))
                    if (i.hasOwnProperty(u)) {
                      var s = i[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : l.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Ir("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      Q(r), ie(r);
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
                    Ol(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Ir("cancel", e), Ir("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ir("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Mr.length; a++) Ir(Mr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ir("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ir("error", e), Ir("load", e), (a = r);
                        break;
                      case "details":
                        Ir("toggle", e), (a = r);
                        break;
                      case "input":
                        G(e, r), (a = Y(e, r)), Ir("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          Ir("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ir("invalid", e);
                    }
                    for (i in (ge(n, a), (s = a)))
                      if (s.hasOwnProperty(i)) {
                        var c = s[i];
                        "style" === i
                          ? me(e, c)
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
                                    Ir("scroll", e)
                                  : null != c && b(e, i, c, u));
                      }
                    switch (n) {
                      case "input":
                        Q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
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
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
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
                        : ms())),
                  null !== t.updateQueue && (t.flags |= 4),
                  ql(t),
                  null);
            case 4:
              return (
                oi(),
                zl(e, t),
                null === e && $r(t.stateNode.containerInfo),
                ql(t),
                null
              );
            case 10:
              return So(t.type._context), ql(t), null;
            case 19:
              if ((Ca(ui), null === (i = t.memoizedState))) return ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = i.rendering)))
                if (r) Ql(i, !1);
                else {
                  if (0 !== Mu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = si(e))) {
                        for (
                          t.flags |= 128,
                            Ql(i, !1),
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
                        return _a(ui, (1 & ui.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Wu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ql(i, !1),
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
                      Ql(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !u.alternate &&
                        !ao)
                    )
                      return ql(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Wu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ql(i, !1),
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
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = ui.current),
                  _a(ui, r ? (1 & n) | 2 : 1 & n),
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
                  ? 0 !== (1073741824 & zu) &&
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
        function Yl(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Oa(t.type) && za(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                Ca(Ra),
                Ca(La),
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
        (Ol = function (e, t) {
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
          (zl = function () {}),
          (Dl = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = Y(e, a)), (r = Y(e, r)), (i = []);
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
              for (c in (ge(n, r), (n = null), a))
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
                            ? (null != s && "onScroll" === c && Ir("scroll", e),
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
        var Gl = !1,
          Xl = !1,
          Jl = "function" === typeof WeakSet ? WeakSet : Set,
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
              delete t[ma],
              delete t[ya]),
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
              Xl || eu(n, t);
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
                    $t(e))
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
                !Xl &&
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
                !Xl &&
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
                ? ((Xl = (r = Xl) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Xl = r))
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
            null === n && (n = e.stateNode = new Jl()),
              t.forEach(function (t) {
                var r = Rs.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function mu(e, t) {
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
            for (t = t.child; null !== t; ) yu(t, e), (t = t.sibling);
        }
        function yu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mu(t, e), gu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), au(3, e);
                } catch (m) {
                  Cs(e, e.return, m);
                }
                try {
                  ru(5, e, e.return);
                } catch (m) {
                  Cs(e, e.return, m);
                }
              }
              break;
            case 1:
              mu(t, e), gu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if (
                (mu(t, e),
                gu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  Cs(e, e.return, m);
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
                      X(a, i),
                      be(u, l);
                    var c = be(u, i);
                    for (l = 0; l < s.length; l += 2) {
                      var f = s[l],
                        d = s[l + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                          ? fe(a, d)
                          : "children" === f
                            ? de(a, d)
                            : b(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        J(a, i);
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
                  } catch (m) {
                    Cs(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((mu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (m) {
                  Cs(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (mu(t, e),
                gu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  $t(t.containerInfo);
                } catch (m) {
                  Cs(e, e.return, m);
                }
              break;
            case 4:
            default:
              mu(t, e), gu(e);
              break;
            case 13:
              mu(t, e),
                gu(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    ($u = Xe())),
                4 & r && vu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xl = (c = Xl) || f), mu(t, e), (Xl = c))
                  : mu(t, e),
                gu(e),
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
                            } catch (m) {
                              Cs(r, n, m);
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
                      } catch (m) {
                        Cs(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        Cs(e, e.return, m);
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
              mu(t, e), gu(e), 4 & r && vu(e);
            case 21:
          }
        }
        function gu(e) {
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
              var i = null !== a.memoizedState || Gl;
              if (!i) {
                var l = a.alternate,
                  u = (null !== l && null !== l.memoizedState) || Xl;
                l = Gl;
                var s = Xl;
                if (((Gl = i), (Xl = u) && !s))
                  for (Zl = a; null !== Zl; )
                    (u = (i = Zl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Su(a)
                        : null !== u
                          ? ((u.return = i), (Zl = u))
                          : Su(a);
                for (; null !== o; ) (Zl = o), wu(o, t, n), (o = o.sibling);
                (Zl = a), (Gl = l), (Xl = s);
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
                      Xl || au(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Io(t, i, r);
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
                        Io(t, l, n);
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
                            null !== d && $t(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Xl || (512 & t.flags && ou(t));
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
          _u = w.ReactCurrentDispatcher,
          Pu = w.ReactCurrentOwner,
          Lu = w.ReactCurrentBatchConfig,
          Ru = 0,
          Tu = null,
          Nu = null,
          Ou = 0,
          zu = 0,
          Du = Ea(0),
          Mu = 0,
          ju = null,
          Fu = 0,
          Uu = 0,
          Iu = 0,
          Au = null,
          Bu = null,
          $u = 0,
          Wu = 1 / 0,
          Hu = null,
          Vu = !1,
          Qu = null,
          qu = null,
          Ku = !1,
          Yu = null,
          Gu = 0,
          Xu = 0,
          Ju = null,
          Zu = -1,
          es = 0;
        function ts() {
          return 0 !== (6 & Ru) ? Xe() : -1 !== Zu ? Zu : (Zu = Xe());
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ru) && 0 !== Ou
              ? Ou & -Ou
              : null !== mo.transition
                ? (0 === es && (es = vt()), es)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Xu) throw ((Xu = 0), (Ju = null), Error(o(185)));
          yt(e, n, r),
            (0 !== (2 & Ru) && e === Tu) ||
              (e === Tu && (0 === (2 & Ru) && (Uu |= n), 4 === Mu && us(e, Ou)),
              as(e, r),
              1 === n &&
                0 === Ru &&
                0 === (1 & t.mode) &&
                ((Wu = Xe() + 500), Ia && $a()));
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
          var r = dt(e, e === Tu ? Ou : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ia = !0), Ba(e);
                  })(ss.bind(null, e))
                : Ba(ss.bind(null, e)),
                ia(function () {
                  0 === (6 & Ru) && $a();
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
              n = Ts(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((Zu = -1), (es = 0), 0 !== (6 & Ru))) throw Error(o(327));
          var n = e.callbackNode;
          if (Ss() && e.callbackNode !== n) return null;
          var r = dt(e, e === Tu ? Ou : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ys(e, r);
          else {
            t = r;
            var a = Ru;
            Ru |= 2;
            var i = vs();
            for (
              (Tu === e && Ou === t) ||
              ((Hu = null), (Wu = Xe() + 500), ps(e, t));
              ;

            )
              try {
                bs();
                break;
              } catch (u) {
                hs(e, u);
              }
            xo(),
              (_u.current = i),
              (Ru = a),
              null !== Nu ? (t = 0) : ((Tu = null), (Ou = 0), (t = Mu));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = is(e, a))),
              1 === t)
            )
              throw ((n = ju), ps(e, 0), us(e, r), as(e, Xe()), n);
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
                  (2 === (t = ys(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = is(e, i))),
                  1 === t))
              )
                throw ((n = ju), ps(e, 0), us(e, r), as(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  xs(e, Bu, Hu);
                  break;
                case 3:
                  if (
                    (us(e, r),
                    (130023424 & r) === r && 10 < (t = $u + 500 - Xe()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xs.bind(null, e, Bu, Hu), t);
                    break;
                  }
                  xs(e, Bu, Hu);
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
                        (120 > (r = Xe() - r)
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
                    e.timeoutHandle = ra(xs.bind(null, e, Bu, Hu), r);
                    break;
                  }
                  xs(e, Bu, Hu);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return as(e, Xe()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function is(e, t) {
          var n = Au;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = ys(e, t)) && ((t = Bu), (Bu = n), null !== t && ls(t)),
            e
          );
        }
        function ls(e) {
          null === Bu ? (Bu = e) : Bu.push.apply(Bu, e);
        }
        function us(e, t) {
          for (
            t &= ~Iu,
              t &= ~Uu,
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
          if (0 !== (6 & Ru)) throw Error(o(327));
          Ss();
          var t = dt(e, 0);
          if (0 === (1 & t)) return as(e, Xe()), null;
          var n = ys(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = is(e, r)));
          }
          if (1 === n) throw ((n = ju), ps(e, 0), us(e, t), as(e, Xe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xs(e, Bu, Hu),
            as(e, Xe()),
            null
          );
        }
        function cs(e, t) {
          var n = Ru;
          Ru |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ru = n) && ((Wu = Xe() + 500), Ia && $a());
          }
        }
        function fs(e) {
          null !== Yu && 0 === Yu.tag && 0 === (6 & Ru) && Ss();
          var t = Ru;
          Ru |= 1;
          var n = Lu.transition,
            r = bt;
          try {
            if (((Lu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Lu.transition = n), 0 === (6 & (Ru = t)) && $a();
          }
        }
        function ds() {
          (zu = Du.current), Ca(Du);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Nu))
            for (n = Nu.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    za();
                  break;
                case 3:
                  oi(), Ca(Ra), Ca(La), fi();
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
            ((Tu = e),
            (Nu = e = Ds(e.current, null)),
            (Ou = zu = t),
            (Mu = 0),
            (ju = null),
            (Iu = Uu = Fu = 0),
            (Bu = Au = null),
            null !== Po)
          ) {
            for (t = 0; t < Po.length; t++)
              if (null !== (r = (n = Po[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Po = null;
          }
          return e;
        }
        function hs(e, t) {
          for (;;) {
            var n = Nu;
            try {
              if ((xo(), (di.current = il), gi)) {
                for (var r = vi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                gi = !1;
              }
              if (
                ((hi = 0),
                (yi = mi = vi = null),
                (bi = !1),
                (wi = 0),
                (Pu.current = null),
                null === n || null === n.return)
              ) {
                (Mu = 1), (ju = t), (Nu = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Ou),
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
                  var h = yl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      gl(h, l, u, 0, t),
                      1 & h.mode && ml(i, c, t),
                      (s = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(s), (t.updateQueue = m);
                    } else v.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(i, c, t), ms();
                    break e;
                  }
                  s = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var y = yl(l);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      gl(y, l, u, 0, t),
                      vo(cl(s, u));
                    break e;
                  }
                }
                (i = s = cl(s, u)),
                  4 !== Mu && (Mu = 2),
                  null === Au ? (Au = [i]) : Au.push(i),
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
                      var g = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
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
              (t = w), Nu === n && null !== n && (Nu = n = n.return);
              continue;
            }
            break;
          }
        }
        function vs() {
          var e = _u.current;
          return (_u.current = il), null === e ? il : e;
        }
        function ms() {
          (0 !== Mu && 3 !== Mu && 2 !== Mu) || (Mu = 4),
            null === Tu ||
              (0 === (268435455 & Fu) && 0 === (268435455 & Uu)) ||
              us(Tu, Ou);
        }
        function ys(e, t) {
          var n = Ru;
          Ru |= 2;
          var r = vs();
          for ((Tu === e && Ou === t) || ((Hu = null), ps(e, t)); ; )
            try {
              gs();
              break;
            } catch (a) {
              hs(e, a);
            }
          if ((xo(), (Ru = n), (_u.current = r), null !== Nu))
            throw Error(o(261));
          return (Tu = null), (Ou = 0), Mu;
        }
        function gs() {
          for (; null !== Nu; ) ws(Nu);
        }
        function bs() {
          for (; null !== Nu && !Ye(); ) ws(Nu);
        }
        function ws(e) {
          var t = Eu(e.alternate, e, zu);
          (e.memoizedProps = e.pendingProps),
            null === t ? ks(e) : (Nu = t),
            (Pu.current = null);
        }
        function ks(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Kl(n, t, zu))) return void (Nu = n);
            } else {
              if (null !== (n = Yl(n, t)))
                return (n.flags &= 32767), void (Nu = n);
              if (null === e) return (Mu = 6), void (Nu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Nu = t);
            Nu = t = e;
          } while (null !== t);
          0 === Mu && (Mu = 5);
        }
        function xs(e, t, n) {
          var r = bt,
            a = Lu.transition;
          try {
            (Lu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Ss();
                } while (null !== Yu);
                if (0 !== (6 & Ru)) throw Error(o(327));
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
                  e === Tu && ((Nu = Tu = null), (Ou = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ku ||
                    ((Ku = !0),
                    Ts(tt, function () {
                      return Ss(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Lu.transition), (Lu.transition = null);
                  var l = bt;
                  bt = 1;
                  var u = Ru;
                  (Ru |= 4),
                    (Pu.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = dr())))) {
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
                          Ht = !1,
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
                                      var m = v.memoizedProps,
                                        y = v.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : yo(t.type, m),
                                          y,
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
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
                    yu(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bu(n, e, a),
                    Ge(),
                    (Ru = u),
                    (bt = l),
                    (Lu.transition = i);
                } else e.current = n;
                if (
                  (Ku && ((Ku = !1), (Yu = e), (Gu = a)),
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
                  as(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Vu) throw ((Vu = !1), (e = Qu), (Qu = null), e);
                0 !== (1 & Gu) && 0 !== e.tag && Ss(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Ju
                      ? Xu++
                      : ((Xu = 0), (Ju = e))
                    : (Xu = 0),
                  $a();
              })(e, t, n, r);
          } finally {
            (Lu.transition = a), (bt = r);
          }
          return null;
        }
        function Ss() {
          if (null !== Yu) {
            var e = wt(Gu),
              t = Lu.transition,
              n = bt;
            try {
              if (((Lu.transition = null), (bt = 16 > e ? 16 : e), null === Yu))
                var r = !1;
              else {
                if (((e = Yu), (Yu = null), (Gu = 0), 0 !== (6 & Ru)))
                  throw Error(o(331));
                var a = Ru;
                for (Ru |= 4, Zl = e.current; null !== Zl; ) {
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
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var y = m.sibling;
                            (m.sibling = null), (m = y);
                          } while (null !== m);
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
                      var g = i.sibling;
                      if (null !== g) {
                        (g.return = i.return), (Zl = g);
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
                  ((Ru = a),
                  $a(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Lu.transition = t);
            }
          }
          return !1;
        }
        function Es(e, t, n) {
          (e = Mo(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (yt(e, 1, t), as(e, t));
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
                    null !== t && (yt(t, 1, e), as(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function _s(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Tu === e &&
              (Ou & n) === n &&
              (4 === Mu ||
              (3 === Mu && (130023424 & Ou) === Ou && 500 > Xe() - $u)
                ? ps(e, 0)
                : (Iu |= n)),
            as(e, t);
        }
        function Ps(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = To(e, t)) && (yt(e, t, n), as(e, n));
        }
        function Ls(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ps(e, n);
        }
        function Rs(e, t) {
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
          null !== r && r.delete(t), Ps(e, n);
        }
        function Ts(e, t) {
          return qe(e, t);
        }
        function Ns(e, t, n, r) {
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
        function Os(e, t, n, r) {
          return new Ns(e, t, n, r);
        }
        function zs(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ds(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Os(e.tag, t, e.key, e.mode)).elementType =
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
          if (((r = e), "function" === typeof e)) zs(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return js(n.children, a, i, t);
              case E:
                (l = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Os(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
                );
              case R:
                return (
                  ((e = Os(13, n, t, a)).elementType = R), (e.lanes = i), e
                );
              case T:
                return (
                  ((e = Os(19, n, t, a)).elementType = T), (e.lanes = i), e
                );
              case z:
                return Fs(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case _:
                      l = 10;
                      break e;
                    case P:
                      l = 9;
                      break e;
                    case L:
                      l = 11;
                      break e;
                    case N:
                      l = 14;
                      break e;
                    case O:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Os(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function js(e, t, n, r) {
          return ((e = Os(7, e, r, t)).lanes = n), e;
        }
        function Fs(e, t, n, r) {
          return (
            ((e = Os(22, e, r, t)).elementType = z),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Us(e, t, n) {
          return ((e = Os(6, e, null, t)).lanes = n), e;
        }
        function Is(e, t, n) {
          return (
            ((t = Os(
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
        function As(e, t, n, r, a) {
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
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bs(e, t, n, r, a, o, i, l, u) {
          return (
            (e = new As(e, t, n, l, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Os(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Oo(o),
            e
          );
        }
        function $s(e) {
          if (!e) return Pa;
          e: {
            if ($e((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Oa(t.type)) {
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
            if (Oa(n)) return Ma(e, n, t);
          }
          return t;
        }
        function Ws(e, t, n, r, a, o, i, l, u) {
          return (
            ((e = Bs(n, r, !0, e, 0, o, 0, l, u)).context = $s(null)),
            (n = e.current),
            ((o = Do((r = ts()), (a = ns(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Mo(n, o, a),
            (e.current.lanes = a),
            yt(e, a, r),
            as(e, r),
            e
          );
        }
        function Hs(e, t, n, r) {
          var a = t.current,
            o = ts(),
            i = ns(a);
          return (
            (n = $s(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Do(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Mo(a, t, i)) && (rs(e, a, i, o), jo(e, a, i)),
            i
          );
        }
        function Vs(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qs(e, t) {
          Qs(e, t), (e = e.alternate) && Qs(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ra.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Tl(t), ho();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Oa(t.type) && ja(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        _a(go, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (_a(ui, 1 & ui.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Ul(e, t, n)
                              : (_a(ui, 1 & ui.current),
                                null !== (e = Vl(e, t, n)) ? e.sibling : null);
                        _a(ui, 1 & ui.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Wl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          _a(ui, ui.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return Vl(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), ao && 0 !== (1048576 & t.flags) && Za(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hl(e, t), (e = t.pendingProps);
              var a = Na(t, La.current);
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
                    Oa(r) ? ((i = !0), ja(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Oo(t),
                    (a.updater = $o),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Qo(t, r, e, n),
                    (t = Rl(null, t, r, !0, i, n)))
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
                  (Hl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return zs(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === L) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yo(r, e)),
                  a)
                ) {
                  case 0:
                    t = Pl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ll(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, yo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ll(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 3:
              e: {
                if ((Tl(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  zo(e, t),
                  Uo(t, r, null, n);
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
                    t = Nl(e, t, r, n, (a = cl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Nl(e, t, r, n, (a = cl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = sa(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Jo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Vl(e, t, n);
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
                _l(e, t),
                kl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && so(t), null;
            case 13:
              return Ul(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xo(t, null, r, n)) : kl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
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
                  _a(go, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Ra.current) {
                      t = Vl(e, t, n);
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
                (r = r((a = _o(a)))),
                (t.flags |= 1),
                kl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = yo((r = t.type), t.pendingProps)),
                Sl(e, t, r, (a = yo(r.type, a)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : yo(r, a)),
                Hl(e, t),
                (t.tag = 1),
                Oa(r) ? ((e = !0), ja(t)) : (e = !1),
                Co(t, n),
                Ho(t, r, a),
                Qo(t, r, a, n),
                Rl(null, t, r, !0, e, n)
              );
            case 19:
              return Wl(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Ks =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ys(e) {
          this._internalRoot = e;
        }
        function Gs(e) {
          this._internalRoot = e;
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Js(e) {
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
                var e = Vs(i);
                l.call(e);
              };
            }
            Hs(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Vs(i);
                    o.call(e);
                  };
                }
                var i = Ws(t, r, e, 0, null, !1, 0, "", Zs);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  $r(8 === e.nodeType ? e.parentNode : e),
                  fs(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Vs(u);
                  l.call(e);
                };
              }
              var u = Bs(e, 0, !1, null, 0, !1, 0, "", Zs);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                $r(8 === e.nodeType ? e.parentNode : e),
                fs(function () {
                  Hs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Vs(i);
        }
        (Gs.prototype.render = Ys.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Hs(e, t, null, null);
          }),
          (Gs.prototype.unmount = Ys.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fs(function () {
                  Hs(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Gs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < zt.length && 0 !== t && t < zt[n].priority;
                n++
              );
              zt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    as(t, Xe()),
                    0 === (6 & Ru) && ((Wu = Xe() + 500), $a()));
                }
                break;
              case 13:
                fs(function () {
                  var t = To(e, 1);
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
              var t = To(e, 134217728);
              if (null !== t) rs(t, e, 134217728, ts());
              qs(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = To(e, t);
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
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
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
                      q(r), J(r, a);
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
          (Le = cs),
          (Re = fs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, ka, _e, Pe, cs],
          },
          nc = {
            findFiberByHostInstance: ga,
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
              return null === (e = Ve(e)) ? null : e.stateNode;
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
            if (!Xs(t)) throw Error(o(200));
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
            if (!Xs(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Ks;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bs(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              $r(8 === e.nodeType ? e.parentNode : e),
              new Ys(t)
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
            return (e = null === (e = Ve(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Js(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xs(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = Ks;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Ws(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ha] = t.current),
              $r(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Gs(t);
          }),
          (t.render = function (e, t, n) {
            if (!Js(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Js(e)) throw Error(o(40));
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
            if (!Js(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
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
          m = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var w = (b.prototype = new g());
        (w.constructor = b), v(w, y.prototype), (w.isPureReactComponent = !0);
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
        function _(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function L(e, t) {
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
        function R(e, t, a, o, i) {
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
              (e = "" === o ? "." + L(u, 0) : o),
              k(i)
                ? ((a = ""),
                  null != e && (a = e.replace(P, "$&/") + "/"),
                  R(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (_(i) &&
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
                          : ("" + i.key).replace(P, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), k(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + L((l = e[s]), s);
              u += R(l, t, a, c, i);
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
              u += R((l = l.value), t, a, (c = o + L(l, s++)), i);
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
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            R(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function N(e) {
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
        var O = { current: null },
          z = { transition: null },
          D = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: z,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
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
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!_(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = y),
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
          (t.isValidElement = _),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: N,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = z.transition;
            z.transition = {};
            try {
              e();
            } finally {
              z.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React.",
            );
          }),
          (t.useCallback = function (e, t) {
            return O.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return O.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return O.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return O.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return O.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return O.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return O.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return O.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return O.current.useRef(e);
          }),
          (t.useState = function (e) {
            return O.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return O.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return O.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
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
          m = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
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
          if (((m = !1), w(e), !v))
            if (null !== r(s)) (v = !0), z(x);
            else {
              var t = r(c);
              null !== t && D(k, t.startTime - e);
            }
        }
        function x(e, n) {
          (v = !1), m && ((m = !1), g(_), (_ = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !R()));

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
          _ = -1,
          P = 5,
          L = -1;
        function R() {
          return !(t.unstable_now() - L < P);
        }
        function T() {
          if (null !== C) {
            var e = t.unstable_now();
            L = e;
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
            b(T);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var N = new MessageChannel(),
            O = N.port2;
          (N.port1.onmessage = T),
            (S = function () {
              O.postMessage(null);
            });
        } else
          S = function () {
            y(T, 0);
          };
        function z(e) {
          (C = e), E || ((E = !0), S());
        }
        function D(e, n) {
          _ = y(function () {
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
            v || h || ((v = !0), z(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
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
                    (m ? (g(_), (_ = -1)) : (m = !0), D(k, o - i)))
                : ((e.sortIndex = l), n(s, e), v || h || ((v = !0), z(x))),
              e
            );
          }),
          (t.unstable_shouldYield = R),
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
        e.exports = n(813);
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
      return "static/js/" + e + ".b9d66382.chunk.js";
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
      var e = n(791),
        t = n.t(e, 2),
        r = n(250),
        a = n(184);
      var o = function () {
        return (0, a.jsx)("header", { children: (0, a.jsx)(vn, {}) });
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
        m = e.forwardRef(function (t, n) {
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
      function y(e) {
        return (
          (y =
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
          y(e)
        );
      }
      function g() {
        g = function () {
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
            l = new O(r || []);
          return a(i, "_invoke", { value: L(e, n, l) }), i;
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
          m = {};
        function b() {}
        function w() {}
        function k() {}
        var x = {};
        s(x, i, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          E = S && S(S(z([])));
        E && E !== n && r.call(E, i) && (x = E);
        var C = (k.prototype = b.prototype = Object.create(x));
        function _(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function P(e, t) {
          function n(a, o, i, l) {
            var u = f(e[a], e, o);
            if ("throw" !== u.type) {
              var s = u.arg,
                c = s.value;
              return c && "object" == y(c) && r.call(c, "__await")
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
        function L(t, n, r) {
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
                var u = R(l, r);
                if (u) {
                  if (u === m) continue;
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
                if (((a = r.done ? v : p), s.arg === m)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((a = v), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function R(t, n) {
          var r = n.method,
            a = t.iterator[r];
          if (a === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                R(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              m
            );
          var o = f(a, t.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), m
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((n[t.resultName] = i.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                m)
              : i
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              m);
        }
        function T(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function N(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(T, this),
            this.reset(!0);
        }
        function z(t) {
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
          throw new TypeError(y(t) + " is not iterable");
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
          _(P.prototype),
          s(P.prototype, l, function () {
            return this;
          }),
          (t.AsyncIterator = P),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new P(c(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          _(C),
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
          (t.values = z),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(N),
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
                  ? ((this.method = "next"), (this.next = o.finallyLoc), m)
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
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), N(n), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    N(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: z(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                m
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
          if ("object" !== y(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== y(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === y(t) ? t : String(t);
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
      function _(e, t) {
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
      function P(e) {
        return (
          (P = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          P(e)
        );
      }
      function L() {
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
        } catch (e) {
          return !1;
        }
      }
      function R(e, t) {
        if (t && ("object" === y(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return e;
        })(e);
      }
      function T(e) {
        var t = L();
        return function () {
          var n,
            r = P(e);
          if (t) {
            var a = P(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return R(this, n);
        };
      }
      function N(e, t, n) {
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
      function O(e, t, n) {
        return (
          (O = L()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && C(a, n.prototype), a;
              }),
          O.apply(null, arguments)
        );
      }
      function z(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (z = function (e) {
            if (
              null === e ||
              !(function (e) {
                try {
                  return (
                    -1 !== Function.toString.call(e).indexOf("[native code]")
                  );
                } catch (t) {
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
              return O(e, arguments, P(this).constructor);
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
          z(e)
        );
      }
      function D(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function M(e, t) {
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
      function j(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return l(e);
          })(e) ||
          D(e) ||
          u(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function F() {
        return (
          (F = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          F.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(v || (v = {}));
      var U,
        I = "popstate";
      function A(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function B(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function $(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function W(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          F(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? V(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            },
          )
        );
      }
      function H(e) {
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
      function V(e) {
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
          (d = e), f && f({ action: c, location: y.location, delta: t });
        }
        function m(e) {
          var t =
              "null" !== i.location.origin
                ? i.location.origin
                : i.location.href,
            n = "string" === typeof e ? e : H(e);
          return (
            A(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n,
            ),
            new URL(n, t)
          );
        }
        null == d && ((d = 0), s.replaceState(F({}, s.state, { idx: d }), ""));
        var y = {
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
              i.addEventListener(I, h),
              (f = e),
              function () {
                i.removeEventListener(I, h), (f = null);
              }
            );
          },
          createHref: function (e) {
            return t(i, e);
          },
          createURL: m,
          encodeLocation: function (e) {
            var t = m(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            c = v.Push;
            var r = W(y.location, e, t);
            n && n(r, e);
            var a = $(r, (d = p() + 1)),
              o = y.createHref(r);
            try {
              s.pushState(a, "", o);
            } catch (l) {
              if (l instanceof DOMException && "DataCloneError" === l.name)
                throw l;
              i.location.assign(o);
            }
            u && f && f({ action: c, location: y.location, delta: 1 });
          },
          replace: function (e, t) {
            c = v.Replace;
            var r = W(y.location, e, t);
            n && n(r, e);
            var a = $(r, (d = p())),
              o = y.createHref(r);
            s.replaceState(a, "", o),
              u && f && f({ action: c, location: y.location, delta: 0 });
          },
          go: function (e) {
            return s.go(e);
          },
        };
        return y;
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(U || (U = {}));
      var q = new Set([
        "lazy",
        "caseSensitive",
        "path",
        "id",
        "index",
        "children",
      ]);
      function K(e, t, n, r) {
        return (
          void 0 === n && (n = []),
          void 0 === r && (r = {}),
          e.map(function (e, a) {
            var o = [].concat(j(n), [a]),
              i = "string" === typeof e.id ? e.id : o.join("-");
            if (
              (A(
                !0 !== e.index || !e.children,
                "Cannot specify children on an index route",
              ),
              A(
                !r[i],
                'Found a route id collision on id "' +
                  i +
                  "\".  Route id's must be globally unique within Data Router usages",
              ),
              (function (e) {
                return !0 === e.index;
              })(e))
            ) {
              var l = F({}, e, t(e), { id: i });
              return (r[i] = l), l;
            }
            var u = F({}, e, t(e), { id: i, children: void 0 });
            return (
              (r[i] = u), e.children && (u.children = K(e.children, t, o, r)), u
            );
          })
        );
      }
      function Y(e, t, n) {
        void 0 === n && (n = "/");
        var r = se(("string" === typeof t ? V(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = G(e);
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
          o = ie(a[i], ue(r));
        return o;
      }
      function G(e, t, n, r) {
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
            (A(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          var l = pe([r, i.relativePath]),
            u = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (A(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".',
            ),
            G(e.children, t, u, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: oe(l, e.index), routesMeta: u });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                o = M(X(e.path));
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
      function X(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = i((n = t)) || D(n) || u(n) || s(),
          a = r[0],
          o = r.slice(1),
          l = a.endsWith("?"),
          c = a.replace(/\?$/, "");
        if (0 === o.length) return l ? [c, ""] : [c];
        var f = X(o.join("/")),
          d = [];
        return (
          d.push.apply(
            d,
            j(
              f.map(function (e) {
                return "" === e ? c : [c, e].join("/");
              }),
            ),
          ),
          l && d.push.apply(d, j(f)),
          d.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      var J = /^:\w+$/,
        Z = 3,
        ee = 2,
        te = 1,
        ne = 10,
        re = -2,
        ae = function (e) {
          return "*" === e;
        };
      function oe(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(ae) && (r += re),
          t && (r += ee),
          n
            .filter(function (e) {
              return !ae(e);
            })
            .reduce(function (e, t) {
              return e + (J.test(t) ? Z : "" === t ? te : ne);
            }, r)
        );
      }
      function ie(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", o = [], i = 0;
          i < n.length;
          ++i
        ) {
          var l = n[i],
            u = i === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = le(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
              s,
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = l.route;
          o.push({
            params: r,
            pathname: pe([a, c.pathname]),
            pathnameBase: he(pe([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = pe([a, c.pathnameBase]));
        }
        return o;
      }
      function le(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            B(
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
                          B(
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
      function ue(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            B(
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
      function se(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function ce(e, t, n, r) {
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
      function fe(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function de(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = V(e))
            : (A(
                !(a = F({}, e)).pathname || !a.pathname.includes("?"),
                ce("?", "pathname", "search", a),
              ),
              A(
                !a.pathname || !a.pathname.includes("#"),
                ce("#", "pathname", "hash", a),
              ),
              A(
                !a.search || !a.search.includes("#"),
                ce("#", "search", "hash", a),
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
            var n = "string" === typeof e ? V(e) : e,
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
            return { pathname: u, search: ve(o), hash: me(l) };
          })(a, o),
          f = l && "/" !== l && l.endsWith("/"),
          d = (i || "." === l) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var pe = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        he = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        ve = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        me = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        ye = (function (e) {
          _(n, e);
          var t = T(n);
          function n() {
            return E(this, n), t.apply(this, arguments);
          }
          return S(n);
        })(z(Error));
      var ge = S(function e(t, n, r, a) {
        E(this, e),
          void 0 === a && (a = !1),
          (this.status = t),
          (this.statusText = n || ""),
          (this.internal = a),
          r instanceof Error
            ? ((this.data = r.toString()), (this.error = r))
            : (this.data = r);
      });
      function be(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      var we = ["post", "put", "patch", "delete"],
        ke = new Set(we),
        xe = ["get"].concat(we),
        Se = new Set(xe),
        Ee = new Set([301, 302, 303, 307, 308]),
        Ce = new Set([307, 308]),
        _e = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        Pe = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        Le = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0,
        },
        Re = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Te = function (e) {
          return { hasErrorBoundary: Boolean(e.hasErrorBoundary) };
        },
        Ne = "remix-router-transitions";
      function Oe(e) {
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
          (A(
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
          u = K(e.routes, t, void 0, l),
          s = e.basename || "/",
          f = F(
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
          m = null,
          y = null,
          b = null != e.hydrationData,
          k = Y(u, e.history.location, s),
          x = null;
        if (null == k) {
          var S = Xe(404, { pathname: e.history.location.pathname }),
            E = Ge(u);
          (k = E.matches), (x = N({}, E.route.id, S));
        }
        var C,
          _,
          P =
            !k.some(function (e) {
              return e.route.lazy;
            }) &&
            (!k.some(function (e) {
              return e.route.loader;
            }) ||
              null != e.hydrationData),
          L = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: k,
            initialized: P,
            navigation: _e,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || x,
            fetchers: new Map(),
            blockers: new Map(),
          },
          R = v.Pop,
          T = !1,
          O = !1,
          z = new Map(),
          D = null,
          I = !1,
          $ = !1,
          H = [],
          V = [],
          Q = new Map(),
          q = 0,
          G = -1,
          X = new Map(),
          J = new Set(),
          Z = new Map(),
          ee = new Map(),
          te = new Set(),
          ne = new Map(),
          re = new Map(),
          ae = !1;
        function oe(e, t) {
          L = F({}, L, e);
          var n = [],
            r = [];
          f.v7_fetcherPersist &&
            L.fetchers.forEach(function (e, t) {
              "idle" === e.state && (te.has(t) ? r.push(t) : n.push(t));
            }),
            p.forEach(function (e) {
              return e(L, {
                deletedFetchers: r,
                unstable_viewTransitionOpts: t,
              });
            }),
            f.v7_fetcherPersist &&
              (n.forEach(function (e) {
                return L.fetchers.delete(e);
              }),
              r.forEach(function (e) {
                return Oe(e);
              }));
        }
        function ie(t, n) {
          var r,
            a,
            o,
            l =
              null != L.actionData &&
              null != L.navigation.formMethod &&
              lt(L.navigation.formMethod) &&
              "loading" === L.navigation.state &&
              !0 !== (null == (r = t.state) ? void 0 : r._isRedirect);
          o = n.actionData
            ? Object.keys(n.actionData).length > 0
              ? n.actionData
              : null
            : l
              ? L.actionData
              : null;
          var s = n.loaderData
              ? Ke(L.loaderData, n.loaderData, n.matches || [], n.errors)
              : L.loaderData,
            c = L.blockers;
          c.size > 0 &&
            (c = new Map(c)).forEach(function (e, t) {
              return c.set(t, Le);
            });
          var f,
            d =
              !0 === T ||
              (null != L.navigation.formMethod &&
                lt(L.navigation.formMethod) &&
                !0 !== (null == (a = t.state) ? void 0 : a._isRedirect));
          if (
            (i && ((u = i), (i = void 0)),
            I ||
              R === v.Pop ||
              (R === v.Push
                ? e.history.push(t, t.state)
                : R === v.Replace && e.history.replace(t, t.state)),
            R === v.Pop)
          ) {
            var p = z.get(L.location.pathname);
            p && p.has(t.pathname)
              ? (f = { currentLocation: L.location, nextLocation: t })
              : z.has(t.pathname) &&
                (f = { currentLocation: t, nextLocation: L.location });
          } else if (O) {
            var h = z.get(L.location.pathname);
            h
              ? h.add(t.pathname)
              : ((h = new Set([t.pathname])), z.set(L.location.pathname, h)),
              (f = { currentLocation: L.location, nextLocation: t });
          }
          oe(
            F({}, n, {
              actionData: o,
              loaderData: s,
              historyAction: R,
              location: t,
              initialized: !0,
              navigation: _e,
              revalidation: "idle",
              restoreScrollPosition: at(t, n.matches || L.matches),
              preventScrollReset: d,
              blockers: c,
            }),
            f,
          ),
            (R = v.Pop),
            (T = !1),
            (O = !1),
            (I = !1),
            ($ = !1),
            (H = []),
            (V = []);
        }
        function le(e, t) {
          return ue.apply(this, arguments);
        }
        function ue() {
          return (
            (ue = w(
              g().mark(function t(n, r) {
                var a, o, i, l, u, c, d, p, h, m, y;
                return g().wrap(function (t) {
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
                          ((a = ze(
                            L.location,
                            L.matches,
                            s,
                            f.v7_prependBasename,
                            n,
                            null == r ? void 0 : r.fromRouteId,
                            null == r ? void 0 : r.relative,
                          )),
                          (o = De(f.v7_normalizeFormMethod, !1, a, r)),
                          (i = o.path),
                          (l = o.submission),
                          (u = o.error),
                          (c = L.location),
                          (d = F(
                            {},
                            (d = W(L.location, i, r && r.state)),
                            e.history.encodeLocation(d),
                          )),
                          (p = r && null != r.replace ? r.replace : void 0),
                          (h = v.Push),
                          !0 === p
                            ? (h = v.Replace)
                            : !1 === p ||
                              (null != l &&
                                lt(l.formMethod) &&
                                l.formAction ===
                                  L.location.pathname + L.location.search &&
                                (h = v.Replace)),
                          (m =
                            r && "preventScrollReset" in r
                              ? !0 === r.preventScrollReset
                              : void 0),
                          !(y = He({
                            currentLocation: c,
                            nextLocation: d,
                            historyAction: h,
                          })))
                        ) {
                          t.next = 16;
                          break;
                        }
                        return (
                          $e(y, {
                            state: "blocked",
                            location: d,
                            proceed: function () {
                              $e(y, {
                                state: "proceeding",
                                proceed: void 0,
                                reset: void 0,
                                location: d,
                              }),
                                le(n, r);
                            },
                            reset: function () {
                              var e = new Map(L.blockers);
                              e.set(y, Le), oe({ blockers: e });
                            },
                          }),
                          t.abrupt("return")
                        );
                      case 16:
                        return (
                          (t.next = 18),
                          ce(h, d, {
                            submission: l,
                            pendingError: u,
                            preventScrollReset: m,
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
        function ce(e, t, n) {
          return fe.apply(this, arguments);
        }
        function fe() {
          return (
            (fe = w(
              g().mark(function t(n, r, a) {
                var o, l, c, f, d, p, h, v, m, y, b, w, k, x, S;
                return g().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          (_ && _.abort(),
                          (_ = null),
                          (R = n),
                          (I = !0 === (a && a.startUninterruptedRevalidation)),
                          Ze(L.location, L.matches),
                          (T = !0 === (a && a.preventScrollReset)),
                          (O = !0 === (a && a.enableViewTransition)),
                          (o = i || u),
                          (l = a && a.overrideNavigation),
                          (c = Y(o, r, s)))
                        ) {
                          t.next = 16;
                          break;
                        }
                        return (
                          (f = Xe(404, { pathname: r.pathname })),
                          (d = Ge(o)),
                          (p = d.matches),
                          (h = d.route),
                          Ve(),
                          ie(r, {
                            matches: p,
                            loaderData: {},
                            errors: N({}, h.id, f),
                          }),
                          t.abrupt("return")
                        );
                      case 16:
                        if (
                          !L.initialized ||
                          $ ||
                          !et(L.location, r) ||
                          (a && a.submission && lt(a.submission.formMethod))
                        ) {
                          t.next = 19;
                          break;
                        }
                        return ie(r, { matches: c }), t.abrupt("return");
                      case 19:
                        if (
                          ((_ = new AbortController()),
                          (v = We(e.history, r, _.signal, a && a.submission)),
                          !a || !a.pendingError)
                        ) {
                          t.next = 25;
                          break;
                        }
                        (y = N({}, Ye(c).route.id, a.pendingError)),
                          (t.next = 35);
                        break;
                      case 25:
                        if (
                          !(a && a.submission && lt(a.submission.formMethod))
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
                        (m = b.pendingActionData),
                          (y = b.pendingActionError),
                          (l = vt(r, a.submission)),
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
                            m,
                            y,
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
                        (_ = null),
                          ie(
                            r,
                            F({ matches: c }, m ? { actionData: m } : {}, {
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
            fe.apply(this, arguments)
          );
        }
        function de(e, t, n, r, a) {
          return pe.apply(this, arguments);
        }
        function pe() {
          return (
            (pe = w(
              g().mark(function e(n, r, a, o, i) {
                var u, c, f, d;
                return g().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (void 0 === i && (i = {}),
                          Se(),
                          oe({ navigation: mt(r, a) }),
                          (c = pt(o, r)).route.action || c.route.lazy)
                        ) {
                          e.next = 9;
                          break;
                        }
                        (u = {
                          type: U.error,
                          error: Xe(405, {
                            method: n.method,
                            pathname: r.pathname,
                            routeId: c.route.id,
                          }),
                        }),
                          (e.next = 14);
                        break;
                      case 9:
                        return (e.next = 11), Be("action", n, c, o, l, t, s);
                      case 11:
                        if (((u = e.sent), !n.signal.aborted)) {
                          e.next = 14;
                          break;
                        }
                        return e.abrupt("return", { shortCircuited: !0 });
                      case 14:
                        if (!rt(u)) {
                          e.next = 19;
                          break;
                        }
                        return (
                          (f =
                            i && null != i.replace
                              ? i.replace
                              : u.location ===
                                L.location.pathname + L.location.search),
                          (e.next = 18),
                          be(L, u, { submission: a, replace: f })
                        );
                      case 18:
                        return e.abrupt("return", { shortCircuited: !0 });
                      case 19:
                        if (!nt(u)) {
                          e.next = 23;
                          break;
                        }
                        return (
                          (d = Ye(o, c.route.id)),
                          !0 !== (i && i.replace) && (R = v.Push),
                          e.abrupt("return", {
                            pendingActionData: {},
                            pendingActionError: N({}, d.route.id, u.error),
                          })
                        );
                      case 23:
                        if (!tt(u)) {
                          e.next = 25;
                          break;
                        }
                        throw Xe(400, { type: "defer-action" });
                      case 25:
                        return e.abrupt("return", {
                          pendingActionData: N({}, c.route.id, u.data),
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
              g().mark(function t(n, r, a, o, l, f, d, p, h) {
                var v,
                  m,
                  y,
                  b,
                  w,
                  k,
                  x,
                  S,
                  E,
                  C,
                  P,
                  R,
                  T,
                  N,
                  O,
                  z,
                  D,
                  M,
                  j,
                  U,
                  A,
                  B;
                return g().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((v = o || vt(r, l)),
                          (m = l || f || ht(v)),
                          (y = i || u),
                          (b = je(
                            e.history,
                            L,
                            a,
                            m,
                            r,
                            $,
                            H,
                            V,
                            Z,
                            J,
                            y,
                            s,
                            p,
                            h,
                          )),
                          (w = c(b, 2)),
                          (k = w[0]),
                          (x = w[1]),
                          Ve(function (e) {
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
                          (G = ++q),
                          0 !== k.length || 0 !== x.length)
                        ) {
                          t.next = 10;
                          break;
                        }
                        return (
                          (S = Ue()),
                          ie(
                            r,
                            F(
                              { matches: a, loaderData: {}, errors: h || null },
                              p ? { actionData: p } : {},
                              S ? { fetchers: new Map(L.fetchers) } : {},
                            ),
                          ),
                          t.abrupt("return", { shortCircuited: !0 })
                        );
                      case 10:
                        return (
                          I ||
                            (x.forEach(function (e) {
                              var t = L.fetchers.get(e.key),
                                n = yt(void 0, t ? t.data : void 0);
                              L.fetchers.set(e.key, n);
                            }),
                            (E = p || L.actionData),
                            oe(
                              F(
                                { navigation: v },
                                E
                                  ? 0 === Object.keys(E).length
                                    ? { actionData: null }
                                    : { actionData: E }
                                  : {},
                                x.length > 0
                                  ? { fetchers: new Map(L.fetchers) }
                                  : {},
                              ),
                            )),
                          x.forEach(function (e) {
                            Q.has(e.key) && Me(e.key),
                              e.controller && Q.set(e.key, e.controller);
                          }),
                          (C = function () {
                            return x.forEach(function (e) {
                              return Me(e.key);
                            });
                          }),
                          _ && _.signal.addEventListener("abort", C),
                          (t.next = 16),
                          ke(L.matches, a, k, x, n)
                        );
                      case 16:
                        if (
                          ((P = t.sent),
                          (R = P.results),
                          (T = P.loaderResults),
                          (N = P.fetcherResults),
                          !n.signal.aborted)
                        ) {
                          t.next = 22;
                          break;
                        }
                        return t.abrupt("return", { shortCircuited: !0 });
                      case 22:
                        if (
                          (_ && _.signal.removeEventListener("abort", C),
                          x.forEach(function (e) {
                            return Q.delete(e.key);
                          }),
                          !(O = Je(R)))
                        ) {
                          t.next = 30;
                          break;
                        }
                        return (
                          O.idx >= k.length &&
                            ((z = x[O.idx - k.length].key), J.add(z)),
                          (t.next = 29),
                          be(L, O.result, { replace: d })
                        );
                      case 29:
                        return t.abrupt("return", { shortCircuited: !0 });
                      case 30:
                        return (
                          (D = qe(L, a, k, T, h, x, N, ne)),
                          (M = D.loaderData),
                          (j = D.errors),
                          ne.forEach(function (e, t) {
                            e.subscribe(function (n) {
                              (n || e.done) && ne.delete(t);
                            });
                          }),
                          (U = Ue()),
                          (A = Ie(G)),
                          (B = U || A || x.length > 0),
                          t.abrupt(
                            "return",
                            F(
                              { loaderData: M, errors: j },
                              B ? { fetchers: new Map(L.fetchers) } : {},
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
        function me(e) {
          return (
            f.v7_fetcherPersist &&
              (ee.set(e, (ee.get(e) || 0) + 1), te.has(e) && te.delete(e)),
            L.fetchers.get(e) || Pe
          );
        }
        function ye() {
          return (
            (ye = w(
              g().mark(function n(r, a, o, f, d, p) {
                var h,
                  v,
                  m,
                  y,
                  b,
                  w,
                  k,
                  x,
                  S,
                  E,
                  C,
                  P,
                  T,
                  O,
                  z,
                  D,
                  M,
                  j,
                  F,
                  U,
                  I,
                  B,
                  W,
                  K,
                  ee,
                  re,
                  ae,
                  le,
                  ue,
                  se;
                return g().wrap(function (n) {
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
                          (h = Xe(405, {
                            method: p.formMethod,
                            pathname: o,
                            routeId: a,
                          })),
                          Ee(r, a, h),
                          n.abrupt("return")
                        );
                      case 6:
                        return (
                          (v = L.fetchers.get(r)),
                          (m = gt(p, v)),
                          L.fetchers.set(r, m),
                          oe({ fetchers: new Map(L.fetchers) }),
                          (y = new AbortController()),
                          (b = We(e.history, o, y.signal, p)),
                          Q.set(r, y),
                          (w = q),
                          (n.next = 16),
                          Be("action", b, f, d, l, t, s)
                        );
                      case 16:
                        if (((k = n.sent), !b.signal.aborted)) {
                          n.next = 20;
                          break;
                        }
                        return (
                          Q.get(r) === y && Q.delete(r), n.abrupt("return")
                        );
                      case 20:
                        if (!te.has(r)) {
                          n.next = 24;
                          break;
                        }
                        return (
                          L.fetchers.set(r, bt(void 0)),
                          oe({ fetchers: new Map(L.fetchers) }),
                          n.abrupt("return")
                        );
                      case 24:
                        if (!rt(k)) {
                          n.next = 38;
                          break;
                        }
                        if ((Q.delete(r), !(G > w))) {
                          n.next = 33;
                          break;
                        }
                        return (
                          (x = bt(void 0)),
                          L.fetchers.set(r, x),
                          oe({ fetchers: new Map(L.fetchers) }),
                          n.abrupt("return")
                        );
                      case 33:
                        return (
                          J.add(r),
                          (S = yt(p)),
                          L.fetchers.set(r, S),
                          oe({ fetchers: new Map(L.fetchers) }),
                          n.abrupt("return", be(L, k, { fetcherSubmission: p }))
                        );
                      case 38:
                        if (!nt(k)) {
                          n.next = 41;
                          break;
                        }
                        return Ee(r, a, k.error), n.abrupt("return");
                      case 41:
                        if (!tt(k)) {
                          n.next = 43;
                          break;
                        }
                        throw Xe(400, { type: "defer-action" });
                      case 43:
                        return (
                          (E = L.navigation.location || L.location),
                          (C = We(e.history, E, y.signal)),
                          (P = i || u),
                          A(
                            (T =
                              "idle" !== L.navigation.state
                                ? Y(P, L.navigation.location, s)
                                : L.matches),
                            "Didn't find any matches after fetcher action",
                          ),
                          (O = ++q),
                          X.set(r, O),
                          (z = yt(p, k.data)),
                          L.fetchers.set(r, z),
                          (D = je(
                            e.history,
                            L,
                            T,
                            p,
                            E,
                            $,
                            H,
                            V,
                            Z,
                            J,
                            P,
                            s,
                            N({}, f.route.id, k.data),
                            void 0,
                          )),
                          (M = c(D, 2)),
                          (j = M[0]),
                          (F = M[1])
                            .filter(function (e) {
                              return e.key !== r;
                            })
                            .forEach(function (e) {
                              var t = e.key,
                                n = L.fetchers.get(t),
                                r = yt(void 0, n ? n.data : void 0);
                              L.fetchers.set(t, r),
                                Q.has(t) && Me(t),
                                e.controller && Q.set(t, e.controller);
                            }),
                          oe({ fetchers: new Map(L.fetchers) }),
                          (U = function () {
                            return F.forEach(function (e) {
                              return Me(e.key);
                            });
                          }),
                          y.signal.addEventListener("abort", U),
                          (n.next = 59),
                          ke(L.matches, T, j, F, C)
                        );
                      case 59:
                        if (
                          ((I = n.sent),
                          (B = I.results),
                          (W = I.loaderResults),
                          (K = I.fetcherResults),
                          !y.signal.aborted)
                        ) {
                          n.next = 65;
                          break;
                        }
                        return n.abrupt("return");
                      case 65:
                        if (
                          (y.signal.removeEventListener("abort", U),
                          X.delete(r),
                          Q.delete(r),
                          F.forEach(function (e) {
                            return Q.delete(e.key);
                          }),
                          !(ee = Je(B)))
                        ) {
                          n.next = 73;
                          break;
                        }
                        return (
                          ee.idx >= j.length &&
                            ((re = F[ee.idx - j.length].key), J.add(re)),
                          n.abrupt("return", be(L, ee.result))
                        );
                      case 73:
                        (ae = qe(L, L.matches, j, W, void 0, F, K, ne)),
                          (le = ae.loaderData),
                          (ue = ae.errors),
                          L.fetchers.has(r) &&
                            ((se = bt(k.data)), L.fetchers.set(r, se)),
                          Ie(O),
                          "loading" === L.navigation.state && O > G
                            ? (A(R, "Expected pending action"),
                              _ && _.abort(),
                              ie(L.navigation.location, {
                                matches: T,
                                loaderData: le,
                                errors: ue,
                                fetchers: new Map(L.fetchers),
                              }))
                            : (oe({
                                errors: ue,
                                loaderData: Ke(L.loaderData, le, T, ue),
                                fetchers: new Map(L.fetchers),
                              }),
                              ($ = !1));
                      case 77:
                      case "end":
                        return n.stop();
                    }
                }, n);
              }),
            )),
            ye.apply(this, arguments)
          );
        }
        function ge() {
          return (
            (ge = w(
              g().mark(function n(r, a, o, i, u, c) {
                var f, d, p, h, v, m, y, b;
                return g().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (f = L.fetchers.get(r)),
                          (d = yt(c, f ? f.data : void 0)),
                          L.fetchers.set(r, d),
                          oe({ fetchers: new Map(L.fetchers) }),
                          (p = new AbortController()),
                          (h = We(e.history, o, p.signal)),
                          Q.set(r, p),
                          (v = q),
                          (n.next = 10),
                          Be("loader", h, i, u, l, t, s)
                        );
                      case 10:
                        if (!tt((m = n.sent))) {
                          n.next = 18;
                          break;
                        }
                        return (n.next = 14), ct(m, h.signal, !0);
                      case 14:
                        if (((n.t0 = n.sent), n.t0)) {
                          n.next = 17;
                          break;
                        }
                        n.t0 = m;
                      case 17:
                        m = n.t0;
                      case 18:
                        if (
                          (Q.get(r) === p && Q.delete(r), !h.signal.aborted)
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
                          L.fetchers.set(r, bt(void 0)),
                          oe({ fetchers: new Map(L.fetchers) }),
                          n.abrupt("return")
                        );
                      case 25:
                        if (!rt(m)) {
                          n.next = 37;
                          break;
                        }
                        if (!(G > v)) {
                          n.next = 33;
                          break;
                        }
                        return (
                          (y = bt(void 0)),
                          L.fetchers.set(r, y),
                          oe({ fetchers: new Map(L.fetchers) }),
                          n.abrupt("return")
                        );
                      case 33:
                        return J.add(r), (n.next = 36), be(L, m);
                      case 36:
                        return n.abrupt("return");
                      case 37:
                        if (!nt(m)) {
                          n.next = 40;
                          break;
                        }
                        return Ee(r, a, m.error), n.abrupt("return");
                      case 40:
                        A(!tt(m), "Unhandled fetcher deferred data"),
                          (b = bt(m.data)),
                          L.fetchers.set(r, b),
                          oe({ fetchers: new Map(L.fetchers) });
                      case 44:
                      case "end":
                        return n.stop();
                    }
                }, n);
              }),
            )),
            ge.apply(this, arguments)
          );
        }
        function be(e, t, n) {
          return we.apply(this, arguments);
        }
        function we() {
          return (
            (we = w(
              g().mark(function t(a, o, i) {
                var l, u, c, f, d, p, h, m, y, b, w, k, x, S;
                return g().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((u = (l = void 0 === i ? {} : i).submission),
                          (c = l.fetcherSubmission),
                          (f = l.replace),
                          o.revalidate && ($ = !0),
                          A(
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
                            : Re.test(o.location) &&
                              ((h = e.history.createURL(o.location)),
                              (p =
                                h.origin !== n.location.origin ||
                                null == se(h.pathname, s))),
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
                          ((_ = null),
                          (m = !0 === f ? v.Replace : v.Push),
                          (y = a.navigation),
                          (b = y.formMethod),
                          (w = y.formAction),
                          (k = y.formEncType),
                          !u && !c && b && w && k && (u = ht(a.navigation)),
                          (x = u || c),
                          !(Ce.has(o.status) && x && lt(x.formMethod)))
                        ) {
                          t.next = 20;
                          break;
                        }
                        return (
                          (t.next = 18),
                          ce(m, d, {
                            submission: F({}, x, { formAction: o.location }),
                            preventScrollReset: T,
                          })
                        );
                      case 18:
                        t.next = 23;
                        break;
                      case 20:
                        return (
                          (S = vt(d, u)),
                          (t.next = 23),
                          ce(m, d, {
                            overrideNavigation: S,
                            fetcherSubmission: c,
                            preventScrollReset: T,
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
              g().mark(function n(r, a, o, i, u) {
                var c, f, d;
                return g().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          Promise.all(
                            [].concat(
                              j(
                                o.map(function (e) {
                                  return Be("loader", u, e, a, l, t, s);
                                }),
                              ),
                              j(
                                i.map(function (n) {
                                  return n.matches && n.match && n.controller
                                    ? Be(
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
                                        error: Xe(404, { pathname: n.path }),
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
                            ut(
                              r,
                              o,
                              f,
                              f.map(function () {
                                return u.signal;
                              }),
                              !1,
                              L.loaderData,
                            ),
                            ut(
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
          ($ = !0),
            (e = H).push.apply(e, j(Ve())),
            Z.forEach(function (e, t) {
              Q.has(t) && (V.push(t), Me(t));
            });
        }
        function Ee(e, t, n) {
          var r = Ye(L.matches, t);
          Oe(e),
            oe({ errors: N({}, r.route.id, n), fetchers: new Map(L.fetchers) });
        }
        function Oe(e) {
          var t = L.fetchers.get(e);
          !Q.has(e) || (t && "loading" === t.state && X.has(e)) || Me(e),
            Z.delete(e),
            X.delete(e),
            J.delete(e),
            te.delete(e),
            L.fetchers.delete(e);
        }
        function Me(e) {
          var t = Q.get(e);
          A(t, "Expected fetch controller: " + e), t.abort(), Q.delete(e);
        }
        function Fe(e) {
          var t,
            n = M(e);
          try {
            for (n.s(); !(t = n.n()).done; ) {
              var r = t.value,
                a = bt(me(r).data);
              L.fetchers.set(r, a);
            }
          } catch (o) {
            n.e(o);
          } finally {
            n.f();
          }
        }
        function Ue() {
          var e,
            t = [],
            n = !1,
            r = M(J);
          try {
            for (r.s(); !(e = r.n()).done; ) {
              var a = e.value,
                o = L.fetchers.get(a);
              A(o, "Expected fetcher: " + a),
                "loading" === o.state && (J.delete(a), t.push(a), (n = !0));
            }
          } catch (i) {
            r.e(i);
          } finally {
            r.f();
          }
          return Fe(t), n;
        }
        function Ie(e) {
          var t,
            n = [],
            r = M(X);
          try {
            for (r.s(); !(t = r.n()).done; ) {
              var a = c(t.value, 2),
                o = a[0];
              if (a[1] < e) {
                var i = L.fetchers.get(o);
                A(i, "Expected fetcher: " + o),
                  "loading" === i.state && (Me(o), X.delete(o), n.push(o));
              }
            }
          } catch (l) {
            r.e(l);
          } finally {
            r.f();
          }
          return Fe(n), n.length > 0;
        }
        function Ae(e) {
          L.blockers.delete(e), re.delete(e);
        }
        function $e(e, t) {
          var n = L.blockers.get(e) || Le;
          A(
            ("unblocked" === n.state && "blocked" === t.state) ||
              ("blocked" === n.state && "blocked" === t.state) ||
              ("blocked" === n.state && "proceeding" === t.state) ||
              ("blocked" === n.state && "unblocked" === t.state) ||
              ("proceeding" === n.state && "unblocked" === t.state),
            "Invalid blocker state transition: " + n.state + " -> " + t.state,
          );
          var r = new Map(L.blockers);
          r.set(e, t), oe({ blockers: r });
        }
        function He(e) {
          var t = e.currentLocation,
            n = e.nextLocation,
            r = e.historyAction;
          if (0 !== re.size) {
            re.size > 1 &&
              B(!1, "A router only supports one blocker at a time");
            var a = Array.from(re.entries()),
              o = c(a[a.length - 1], 2),
              i = o[0],
              l = o[1],
              u = L.blockers.get(i);
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
        function Ve(e) {
          var t = [];
          return (
            ne.forEach(function (n, r) {
              (e && !e(r)) || (n.cancel(), t.push(r), ne.delete(r));
            }),
            t
          );
        }
        function Qe(e, t) {
          if (m) {
            var n = m(
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
                })(e, L.loaderData);
              }),
            );
            return n || e.key;
          }
          return e.key;
        }
        function Ze(e, t) {
          if (h && y) {
            var n = Qe(e, t);
            h[n] = y();
          }
        }
        function at(e, t) {
          if (h) {
            var n = Qe(e, t),
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
              return L;
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
                    B(
                      0 === re.size || null != a,
                      "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
                    );
                    var o = He({
                      currentLocation: L.location,
                      nextLocation: r,
                      historyAction: n,
                    });
                    return o && null != a
                      ? ((ae = !0),
                        e.history.go(-1 * a),
                        void $e(o, {
                          state: "blocked",
                          location: r,
                          proceed: function () {
                            $e(o, {
                              state: "proceeding",
                              proceed: void 0,
                              reset: void 0,
                              location: r,
                            }),
                              e.history.go(a);
                          },
                          reset: function () {
                            var e = new Map(L.blockers);
                            e.set(o, Le), oe({ blockers: e });
                          },
                        }))
                      : ce(n, r);
                  }
                  ae = !1;
                })),
                r)
              ) {
                !(function (e, t) {
                  try {
                    var n = e.sessionStorage.getItem(Ne);
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
                  } catch (s) {}
                })(n, z);
                var t = function () {
                  return (function (e, t) {
                    if (t.size > 0) {
                      var n,
                        r = {},
                        a = M(t);
                      try {
                        for (a.s(); !(n = a.n()).done; ) {
                          var o = c(n.value, 2),
                            i = o[0],
                            l = o[1];
                          r[i] = j(l);
                        }
                      } catch (u) {
                        a.e(u);
                      } finally {
                        a.f();
                      }
                      try {
                        e.sessionStorage.setItem(Ne, JSON.stringify(r));
                      } catch (S) {
                        B(
                          !1,
                          "Failed to save applied view transitions in sessionStorage (" +
                            S +
                            ").",
                        );
                      }
                    }
                  })(n, z);
                };
                n.addEventListener("pagehide", t),
                  (D = function () {
                    return n.removeEventListener("pagehide", t);
                  });
              }
              return L.initialized || ce(v.Pop, L.location), C;
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
                ((h = e), (y = t), (m = n || null), !b && L.navigation === _e)
              ) {
                b = !0;
                var r = at(L.location, L.matches);
                null != r && oe({ restoreScrollPosition: r });
              }
              return function () {
                (h = null), (y = null), (m = null);
              };
            },
            navigate: le,
            fetch: function (e, t, n, r) {
              if (a)
                throw new Error(
                  "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
                );
              Q.has(e) && Me(e);
              var o = i || u,
                l = ze(
                  L.location,
                  L.matches,
                  s,
                  f.v7_prependBasename,
                  n,
                  t,
                  null == r ? void 0 : r.relative,
                ),
                c = Y(o, l, s);
              if (c) {
                var d = De(f.v7_normalizeFormMethod, !0, l, r),
                  p = d.path,
                  h = d.submission,
                  v = d.error;
                if (v) Ee(e, t, v);
                else {
                  var m = pt(c, p);
                  (T = !0 === (r && r.preventScrollReset)),
                    h && lt(h.formMethod)
                      ? (function (e, t, n, r, a, o) {
                          ye.apply(this, arguments);
                        })(e, t, p, m, c, h)
                      : (Z.set(e, { routeId: t, path: p }),
                        (function (e, t, n, r, a, o) {
                          ge.apply(this, arguments);
                        })(e, t, p, m, c, h));
                }
              } else Ee(e, t, Xe(404, { pathname: l }));
            },
            revalidate: function () {
              Se(),
                oe({ revalidation: "loading" }),
                "submitting" !== L.navigation.state &&
                  ("idle" !== L.navigation.state
                    ? ce(R || L.historyAction, L.navigation.location, {
                        overrideNavigation: L.navigation,
                      })
                    : ce(L.historyAction, L.location, {
                        startUninterruptedRevalidation: !0,
                      }));
            },
            createHref: function (t) {
              return e.history.createHref(t);
            },
            encodeLocation: function (t) {
              return e.history.encodeLocation(t);
            },
            getFetcher: me,
            deleteFetcher: function (e) {
              if (f.v7_fetcherPersist) {
                var t = (ee.get(e) || 0) - 1;
                t <= 0 ? (ee.delete(e), te.add(e)) : ee.set(e, t);
              } else Oe(e);
              oe({ fetchers: new Map(L.fetchers) });
            },
            dispose: function () {
              d && d(),
                D && D(),
                p.clear(),
                _ && _.abort(),
                L.fetchers.forEach(function (e, t) {
                  return Oe(t);
                }),
                L.blockers.forEach(function (e, t) {
                  return Ae(t);
                });
            },
            getBlocker: function (e, t) {
              var n = L.blockers.get(e) || Le;
              return re.get(e) !== t && re.set(e, t), n;
            },
            deleteBlocker: Ae,
            _internalFetchControllers: Q,
            _internalActiveDeferreds: ne,
            _internalSetRoutes: function (e) {
              i = K(e, t, void 0, (l = {}));
            },
          }),
          C
        );
      }
      Symbol("deferred");
      function ze(e, t, n, r, a, o, i) {
        var l, u;
        if (null != o && "path" !== i) {
          l = [];
          var s,
            c = M(t);
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
        var d = de(
          a || ".",
          fe(l).map(function (e) {
            return e.pathnameBase;
          }),
          se(e.pathname, n) || e.pathname,
          "path" === i,
        );
        return (
          null == a && ((d.search = e.search), (d.hash = e.hash)),
          (null != a && "" !== a && "." !== a) ||
            !u ||
            !u.route.index ||
            dt(d.search) ||
            (d.search = d.search
              ? d.search.replace(/^\?/, "?index&")
              : "?index"),
          r &&
            "/" !== n &&
            (d.pathname = "/" === d.pathname ? n : pe([n, d.pathname])),
          H(d)
        );
      }
      function De(e, t, n, r) {
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
        if (r.formMethod && !it(r.formMethod))
          return { path: n, error: Xe(405, { method: r.formMethod }) };
        var a,
          o,
          i = function () {
            return { path: n, error: Xe(400, { type: "invalid-body" }) };
          },
          l = r.formMethod || "get",
          u = e ? l.toUpperCase() : l.toLowerCase(),
          s = Ze(n);
        if (void 0 !== r.body) {
          if ("text/plain" === r.formEncType) {
            if (!lt(u)) return i();
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
            if (!lt(u)) return i();
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
            } catch (v) {
              return i();
            }
          }
        }
        if (
          (A(
            "function" === typeof FormData,
            "FormData is not available in this environment",
          ),
          r.formData)
        )
          (a = He(r.formData)), (o = r.formData);
        else if (r.body instanceof FormData) (a = He(r.body)), (o = r.body);
        else if (r.body instanceof URLSearchParams) o = Ve((a = r.body));
        else if (null == r.body)
          (a = new URLSearchParams()), (o = new FormData());
        else
          try {
            o = Ve((a = new URLSearchParams(r.body)));
          } catch (v) {
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
        if (lt(p.formMethod)) return { path: n, submission: p };
        var h = V(n);
        return (
          t && h.search && dt(h.search) && a.append("index", ""),
          (h.search = "?" + a),
          { path: H(h), submission: p }
        );
      }
      function Me(e, t) {
        var n = e;
        if (t) {
          var r = e.findIndex(function (e) {
            return e.route.id === t;
          });
          r >= 0 && (n = e.slice(0, r));
        }
        return n;
      }
      function je(e, t, n, r, a, o, i, l, u, s, c, f, d, p) {
        var h = p ? Object.values(p)[0] : d ? Object.values(d)[0] : void 0,
          v = e.createURL(t.location),
          m = e.createURL(a),
          y = p ? Object.keys(p)[0] : void 0,
          g = Me(n, y).filter(function (e, n) {
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
              F(
                {
                  currentUrl: v,
                  currentParams: a.params,
                  nextUrl: m,
                  nextParams: l.params,
                },
                r,
                {
                  actionResult: h,
                  defaultShouldRevalidate:
                    o ||
                    v.pathname + v.search === m.pathname + m.search ||
                    v.search !== m.search ||
                    Fe(a, l),
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
              var i = Y(c, e.path, f);
              if (i) {
                var u = t.fetchers.get(a),
                  d = pt(i, e.path);
                !s.has(a) &&
                  (!!l.includes(a) ||
                    (u && "idle" !== u.state && void 0 === u.data
                      ? o
                      : Ue(
                          d,
                          F(
                            {
                              currentUrl: v,
                              currentParams:
                                t.matches[t.matches.length - 1].params,
                              nextUrl: m,
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
          [g, b]
        );
      }
      function Fe(e, t) {
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
      function Ie(e, t, n) {
        return Ae.apply(this, arguments);
      }
      function Ae() {
        return (
          (Ae = w(
            g().mark(function e(t, n, r) {
              var a, o, i, l, u, s;
              return g().wrap(function (e) {
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
                      for (l in (A((o = r[t.id]), "No route found in manifest"),
                      (i = {}),
                      a))
                        (u = o[l]),
                          B(
                            !(s = void 0 !== u && "hasErrorBoundary" !== l),
                            'Route "' +
                              o.id +
                              '" has a static property "' +
                              l +
                              '" defined but its lazy function is also returning a value for this property. The lazy route property "' +
                              l +
                              '" will be ignored.',
                          ),
                          s || q.has(l) || (i[l] = a[l]);
                      Object.assign(o, i),
                        Object.assign(o, F({}, n(o), { lazy: void 0 }));
                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )),
          Ae.apply(this, arguments)
        );
      }
      function Be(e, t, n, r, a, o, i, l) {
        return $e.apply(this, arguments);
      }
      function $e() {
        return (
          ($e = w(
            g().mark(function e(t, n, r, a, o, i, l, u) {
              var s, c, f, d, p, h, v, m, y, b, w, k, x, S, E, C, _, P, L;
              return g().wrap(
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
                            Ie(r.route, i, o),
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
                        return (e.next = 16), Ie(r.route, i, o);
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
                          ((m = new URL(n.url)),
                          (y = m.pathname + m.search),
                          Xe(405, {
                            method: n.method,
                            pathname: y,
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
                          Xe(404, { pathname: b.pathname + b.search }))
                        );
                      case 38:
                        return (e.next = 40), d(p);
                      case 40:
                        c = e.sent;
                      case 41:
                        A(
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
                        if (!ot(c)) {
                          e.next = 77;
                          break;
                        }
                        if (((w = c.status), !Ee.has(w))) {
                          e.next = 61;
                          break;
                        }
                        if (
                          (A(
                            (k = c.headers.get("Location")),
                            "Redirects returned/thrown from loaders/actions must have a Location header",
                          ),
                          Re.test(k)
                            ? u.isStaticRequest ||
                              ((x = new URL(n.url)),
                              (S = k.startsWith("//")
                                ? new URL(x.protocol + k)
                                : new URL(k)),
                              (E = null != se(S.pathname, l)),
                              S.origin === x.origin &&
                                E &&
                                (k = S.pathname + S.search + S.hash))
                            : (k = ze(
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
                          !(_ = c.headers.get("Content-Type")) ||
                          !/\bapplication\/json\b/.test(_)
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
                          error: new ge(w, c.statusText, C),
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
                        if (!at(c)) {
                          e.next = 81;
                          break;
                        }
                        return e.abrupt("return", {
                          type: U.deferred,
                          deferredData: c,
                          statusCode: null == (P = c.init) ? void 0 : P.status,
                          headers:
                            (null == (L = c.init) ? void 0 : L.headers) &&
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
        var a = e.createURL(Ze(t)).toString(),
          o = { signal: n };
        if (r && lt(r.formMethod)) {
          var i = r.formMethod,
            l = r.formEncType;
          (o.method = i.toUpperCase()),
            "application/json" === l
              ? ((o.headers = new Headers({ "Content-Type": l })),
                (o.body = JSON.stringify(r.json)))
              : "text/plain" === l
                ? (o.body = r.text)
                : "application/x-www-form-urlencoded" === l && r.formData
                  ? (o.body = He(r.formData))
                  : (o.body = r.formData);
        }
        return new Request(a, o);
      }
      function He(e) {
        var t,
          n = new URLSearchParams(),
          r = M(e.entries());
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
      function Ve(e) {
        var t,
          n = new FormData(),
          r = M(e.entries());
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
              (A(!rt(n), "Cannot handle redirect results in processLoaderData"),
              nt(n))
            ) {
              var d = Ye(e, f),
                p = n.error;
              r && ((p = Object.values(r)[0]), (r = void 0)),
                null == (l = l || {})[d.route.id] && (l[d.route.id] = p),
                (i[f] = void 0),
                u || ((u = !0), (o = be(n.error) ? n.error.status : 500)),
                n.headers && (s[f] = n.headers);
            } else
              tt(n)
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
      function qe(e, t, n, r, a, o, i, l) {
        for (
          var u = Qe(t, n, r, a, l), s = u.loaderData, c = u.errors, f = 0;
          f < o.length;
          f++
        ) {
          var d = o[f],
            p = d.key,
            h = d.match,
            v = d.controller;
          A(
            void 0 !== i && void 0 !== i[f],
            "Did not find corresponding fetcher result",
          );
          var m = i[f];
          if (!v || !v.signal.aborted)
            if (nt(m)) {
              var y = Ye(e.matches, null == h ? void 0 : h.route.id);
              (c && c[y.route.id]) ||
                (c = F({}, c, N({}, y.route.id, m.error))),
                e.fetchers.delete(p);
            } else if (rt(m)) A(!1, "Unhandled fetcher revalidation redirect");
            else if (tt(m)) A(!1, "Unhandled fetcher deferred data");
            else {
              var g = bt(m.data);
              e.fetchers.set(p, g);
            }
        }
        return { loaderData: s, errors: c };
      }
      function Ke(e, t, n, r) {
        var a,
          o = F({}, t),
          i = M(n);
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
      function Ye(e, t) {
        return (
          (t
            ? e.slice(
                0,
                e.findIndex(function (e) {
                  return e.route.id === t;
                }) + 1,
              )
            : j(e)
          )
            .reverse()
            .find(function (e) {
              return !0 === e.route.hasErrorBoundary;
            }) || e[0]
        );
      }
      function Ge(e) {
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
      function Xe(e, t) {
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
          new ge(e || 500, l, new Error(u), !0)
        );
      }
      function Je(e) {
        for (var t = e.length - 1; t >= 0; t--) {
          var n = e[t];
          if (rt(n)) return { result: n, idx: t };
        }
      }
      function Ze(e) {
        return H(F({}, "string" === typeof e ? V(e) : e, { hash: "" }));
      }
      function et(e, t) {
        return (
          e.pathname === t.pathname &&
          e.search === t.search &&
          ("" === e.hash ? "" !== t.hash : e.hash === t.hash || "" !== t.hash)
        );
      }
      function tt(e) {
        return e.type === U.deferred;
      }
      function nt(e) {
        return e.type === U.error;
      }
      function rt(e) {
        return (e && e.type) === U.redirect;
      }
      function at(e) {
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
      function ot(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "object" === typeof e.headers &&
          "undefined" !== typeof e.body
        );
      }
      function it(e) {
        return Se.has(e.toLowerCase());
      }
      function lt(e) {
        return ke.has(e.toLowerCase());
      }
      function ut(e, t, n, r, a, o) {
        return st.apply(this, arguments);
      }
      function st() {
        return (st = w(
          g().mark(function e(t, n, r, a, o, i) {
            var l, u;
            return g().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (l = g().mark(function e(l) {
                      var u, s, c, f, d;
                      return g().wrap(function (e) {
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
                                  !Fe(c, s) &&
                                  void 0 !== (i && i[s.route.id])),
                                !tt(u) || (!o && !f))
                              ) {
                                e.next = 11;
                                break;
                              }
                              return (
                                A(
                                  (d = a[l]),
                                  "Expected an AbortSignal for revalidating fetcher deferred result",
                                ),
                                (e.next = 11),
                                ct(u, d, o).then(function (e) {
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
      function ct(e, t, n) {
        return ft.apply(this, arguments);
      }
      function ft() {
        return (ft = w(
          g().mark(function e(t, n, r) {
            return g().wrap(
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
      function dt(e) {
        return new URLSearchParams(e).getAll("index").some(function (e) {
          return "" === e;
        });
      }
      function pt(e, t) {
        var n = "string" === typeof t ? V(t).search : t.search;
        if (e[e.length - 1].route.index && dt(n || "")) return e[e.length - 1];
        var r = fe(e);
        return r[r.length - 1];
      }
      function ht(e) {
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
      function vt(e, t) {
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
      function mt(e, t) {
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
      function yt(e, t) {
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
      function gt(e, t) {
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
      function bt(e) {
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
      function wt() {
        return (
          (wt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          wt.apply(this, arguments)
        );
      }
      var kt = e.createContext(null);
      var xt = e.createContext(null);
      var St = e.createContext(null);
      var Et = e.createContext(null);
      var Ct = e.createContext(null);
      var _t = e.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      var Pt = e.createContext(null);
      function Lt() {
        return null != e.useContext(Ct);
      }
      function Rt() {
        return Lt() || A(!1), e.useContext(Ct).location;
      }
      function Tt(t) {
        e.useContext(Et).static || e.useLayoutEffect(t);
      }
      function Nt() {
        return e.useContext(_t).isDataRoute
          ? (function () {
              var t = $t(At.UseNavigateStable).router,
                n = Ht(Bt.UseNavigateStable),
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
                          : t.navigate(e, wt({ fromRouteId: n }, a)));
                  },
                  [t, n],
                )
              );
            })()
          : (function () {
              Lt() || A(!1);
              var t = e.useContext(kt),
                n = e.useContext(Et),
                r = n.basename,
                a = n.navigator,
                o = e.useContext(_t).matches,
                i = Rt().pathname,
                l = JSON.stringify(
                  fe(o).map(function (e) {
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
                        var o = de(e, JSON.parse(l), i, "path" === n.relative);
                        null == t &&
                          "/" !== r &&
                          (o.pathname =
                            "/" === o.pathname ? r : pe([r, o.pathname])),
                          (n.replace ? a.replace : a.push)(o, n.state, n);
                      } else a.go(e);
                  },
                  [r, a, l, i, t],
                )
              );
            })();
      }
      var Ot = e.createContext(null);
      function zt(t, n) {
        var r = (void 0 === n ? {} : n).relative,
          a = e.useContext(_t).matches,
          o = Rt().pathname,
          i = JSON.stringify(
            fe(a).map(function (e) {
              return e.pathnameBase;
            }),
          );
        return e.useMemo(
          function () {
            return de(t, JSON.parse(i), o, "path" === r);
          },
          [t, i, o, r],
        );
      }
      function Dt(t, n, r) {
        Lt() || A(!1);
        var a,
          o = e.useContext(Et).navigator,
          i = e.useContext(_t).matches,
          l = i[i.length - 1],
          u = l ? l.params : {},
          s = (l && l.pathname, l ? l.pathnameBase : "/"),
          c = (l && l.route, Rt());
        if (n) {
          var f,
            d = "string" === typeof n ? V(n) : n;
          "/" === s ||
            (null == (f = d.pathname) ? void 0 : f.startsWith(s)) ||
            A(!1),
            (a = d);
        } else a = c;
        var p = a.pathname || "/",
          h = Y(t, { pathname: "/" === s ? p : p.slice(s.length) || "/" });
        var m = It(
          h &&
            h.map(function (e) {
              return Object.assign({}, e, {
                params: Object.assign({}, u, e.params),
                pathname: pe([
                  s,
                  o.encodeLocation
                    ? o.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? s
                    : pe([
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
        return n && m
          ? e.createElement(
              Ct.Provider,
              {
                value: {
                  location: wt(
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
              m,
            )
          : m;
      }
      function Mt() {
        var t = (function () {
            var t,
              n = e.useContext(Pt),
              r = Wt(Bt.UseRouteError),
              a = Ht(Bt.UseRouteError);
            if (n) return n;
            return null == (t = r.errors) ? void 0 : t[a];
          })(),
          n = be(t)
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
      var jt = e.createElement(Mt, null),
        Ft = (function (t) {
          _(r, t);
          var n = T(r);
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
                          _t.Provider,
                          { value: this.props.routeContext },
                          e.createElement(Pt.Provider, {
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
          o = e.useContext(kt);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          e.createElement(_t.Provider, { value: n }, a)
        );
      }
      function It(t, n, r) {
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
          u >= 0 || A(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
        }
        return i.reduceRight(function (t, a, o) {
          var u = a.route.id ? (null == l ? void 0 : l[a.route.id]) : null,
            s = null;
          r && (s = a.route.errorElement || jt);
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
            ? e.createElement(Ft, {
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
      var At = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(At || {}),
        Bt = (function (e) {
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
        })(Bt || {});
      function $t(t) {
        var n = e.useContext(kt);
        return n || A(!1), n;
      }
      function Wt(t) {
        var n = e.useContext(xt);
        return n || A(!1), n;
      }
      function Ht(t) {
        var n = (function (t) {
            var n = e.useContext(_t);
            return n || A(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || A(!1), r.route.id;
      }
      t.startTransition;
      function Vt(t) {
        return (function (t) {
          var n = e.useContext(_t).outlet;
          return n ? e.createElement(Ot.Provider, { value: t }, n) : n;
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
        Lt() && A(!1);
        var d = r.replace(/^\/*/, "/"),
          p = e.useMemo(
            function () {
              return { basename: d, navigator: s, static: f };
            },
            [d, s, f],
          );
        "string" === typeof i && (i = V(i));
        var h = i,
          m = h.pathname,
          y = void 0 === m ? "/" : m,
          g = h.search,
          b = void 0 === g ? "" : g,
          w = h.hash,
          k = void 0 === w ? "" : w,
          x = h.state,
          S = void 0 === x ? null : x,
          E = h.key,
          C = void 0 === E ? "default" : E,
          _ = e.useMemo(
            function () {
              var e = se(y, d);
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
            [d, y, b, k, S, C, u],
          );
        return null == _
          ? null
          : e.createElement(
              Et.Provider,
              { value: p },
              e.createElement(Ct.Provider, { children: o, value: _ }),
            );
      }
      var qt = (function (e) {
          return (
            (e[(e.pending = 0)] = "pending"),
            (e[(e.success = 1)] = "success"),
            (e[(e.error = 2)] = "error"),
            e
          );
        })(qt || {}),
        Kt = new Promise(function () {});
      e.Component;
      function Yt(t) {
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
      function Gt() {
        return (
          (Gt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Gt.apply(this, arguments)
        );
      }
      function Xt(e, t) {
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
      var Jt = [
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
      function Zt() {
        var e,
          t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = Gt({}, t, { errors: en(t.errors) })), t;
      }
      function en(e) {
        if (!e) return null;
        for (var t = {}, n = 0, r = Object.entries(e); n < r.length; n++) {
          var a = c(r[n], 2),
            o = a[0],
            i = a[1];
          if (i && "RouteErrorResponse" === i.__type)
            t[o] = new ge(i.status, i.statusText, i.data, !0 === i.internal);
          else if (i && "Error" === i.__type) {
            if (i.__subType) {
              var l = window[i.__subType];
              if ("function" === typeof l)
                try {
                  var u = new l(i.message);
                  (u.stack = ""), (t[o] = u);
                } catch (f) {}
            }
            if (null == t[o]) {
              var s = new Error(i.message);
              (s.stack = ""), (t[o] = s);
            }
          } else t[o] = i;
        }
        return t;
      }
      var tn = e.createContext({ isTransitioning: !1 });
      var nn = e.createContext(new Map());
      var rn = t.startTransition;
      var an = S(function e() {
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
      function on(t) {
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
          m = v[0],
          y = v[1],
          b = c(e.useState(), 2),
          k = b[0],
          x = b[1],
          S = c(e.useState(), 2),
          E = S[0],
          C = S[1],
          _ = e.useRef(new Map()),
          P = (a || {}).v7_startTransition,
          L = e.useCallback(
            function (e) {
              P
                ? (function (e) {
                    rn ? rn(e) : e();
                  })(e)
                : e();
            },
            [P],
          ),
          R = e.useCallback(
            function (e, t) {
              var n = t.deletedFetchers,
                a = t.unstable_viewTransitionOpts;
              n.forEach(function (e) {
                return _.current.delete(e);
              }),
                e.fetchers.forEach(function (e, t) {
                  void 0 !== e.data && _.current.set(t, e.data);
                }),
                a &&
                null != r.window &&
                "function" === typeof r.window.document.startViewTransition
                  ? k && m
                    ? (m.resolve(),
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
                  : L(function () {
                      return l(e);
                    });
            },
            [r.window, k, m, _, L],
          );
        e.useLayoutEffect(
          function () {
            return r.subscribe(R);
          },
          [r, R],
        ),
          e.useEffect(
            function () {
              p.isTransitioning && y(new an());
            },
            [p.isTransitioning],
          ),
          e.useEffect(
            function () {
              if (m && s && r.window) {
                var e = s,
                  t = m.promise,
                  n = r.window.document.startViewTransition(
                    w(
                      g().mark(function n() {
                        return g().wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  L(function () {
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
                  y(void 0), x(void 0), f(void 0), h({ isTransitioning: !1 });
                }),
                  x(n);
              }
            },
            [L, s, m, r.window],
          ),
          e.useEffect(
            function () {
              m && s && i.location.key === s.location.key && m.resolve();
            },
            [m, k, i.location, s],
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
        var T = e.useMemo(
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
          N = r.basename || "/",
          O = e.useMemo(
            function () {
              return { router: r, navigator: T, static: !1, basename: N };
            },
            [r, T, N],
          );
        return e.createElement(
          e.Fragment,
          null,
          e.createElement(
            kt.Provider,
            { value: O },
            e.createElement(
              xt.Provider,
              { value: i },
              e.createElement(
                nn.Provider,
                { value: _.current },
                e.createElement(
                  tn.Provider,
                  { value: p },
                  e.createElement(
                    Qt,
                    {
                      basename: N,
                      location: i.location,
                      navigationType: i.historyAction,
                      navigator: T,
                    },
                    i.initialized
                      ? e.createElement(ln, { routes: r.routes, state: i })
                      : n,
                  ),
                ),
              ),
            ),
          ),
          null,
        );
      }
      function ln(e) {
        return Dt(e.routes, void 0, e.state);
      }
      var un =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        sn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        cn = e.forwardRef(function (t, n) {
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
            p = Xt(t, Jt),
            h = e.useContext(Et).basename,
            v = !1;
          if ("string" === typeof c && sn.test(c) && ((r = c), un))
            try {
              var m = new URL(window.location.href),
                y = c.startsWith("//") ? new URL(m.protocol + c) : new URL(c),
                g = se(y.pathname, h);
              y.origin === m.origin && null != g
                ? (c = g + y.search + y.hash)
                : (v = !0);
            } catch (k) {}
          var b = (function (t, n) {
              var r = (void 0 === n ? {} : n).relative;
              Lt() || A(!1);
              var a = e.useContext(Et),
                o = a.basename,
                i = a.navigator,
                l = zt(t, { relative: r }),
                u = l.hash,
                s = l.pathname,
                c = l.search,
                f = s;
              return (
                "/" !== o && (f = "/" === s ? o : pe([o, s])),
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
                c = Nt(),
                f = Rt(),
                d = zt(t, { relative: u });
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
                    var n = void 0 !== o ? o : H(f) === H(d);
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
            Gt({}, p, {
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
      var fn, dn;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(fn || (fn = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(dn || (dn = {}));
      var pn = function (e) {
        var t = e.onClose;
        return (0, a.jsxs)("div", {
          className:
            "border-y border-neutral-500 divide-y divide-neutral-500 overflow-x-hidden flex flex-col justify-center",
          children: [
            (0, a.jsx)(bn, { title: "Home", href: "/", onClose: t }),
            (0, a.jsx)(bn, { title: "About", href: "/about", onClose: t }),
            (0, a.jsx)(bn, {
              title: "Projects",
              href: "/projects",
              onClose: t,
            }),
            (0, a.jsx)(bn, { title: "Contact", href: "/contact", onClose: t }),
          ],
        });
      };
      function hn() {
        return (0, a.jsxs)("div", {
          className:
            "my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12",
          children: [
            (0, a.jsx)(gn, { title: "Home", href: "/" }),
            (0, a.jsx)(gn, { title: "About", href: "/about" }),
            (0, a.jsx)(gn, { title: "Projects", href: "/projects" }),
            (0, a.jsx)(gn, { title: "Contact", href: "/contact" }),
          ],
        });
      }
      function vn() {
        var t = c(e.useState(!1), 2),
          n = t[0],
          r = t[1],
          o = function () {
            return window.innerWidth >= 1024 && r(!1);
          };
        return (
          e.useEffect(function () {
            return (
              window.addEventListener("resize", o),
              function () {
                window.removeEventListener("resize", o);
              }
            );
          }, []),
          (0, a.jsxs)("nav", {
            className: "my-auto mx-auto max-w-screen-2xl px-3 py-6",
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, a.jsx)(cn, {
                    to: "/",
                    className:
                      "mr-4 font-black hover:text-tertiary cursor-pointer py-1.5",
                    children: "Gerard",
                  }),
                  (0, a.jsx)("div", {
                    className: "hidden lg:block",
                    children: (0, a.jsx)(hn, {}),
                  }),
                  (0, a.jsx)("button", {
                    className:
                      "ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden",
                    onClick: function () {
                      return r(!n);
                    },
                    children: n
                      ? (0, a.jsx)(p, { className: "h-6 w-6", strokeWidth: 2 })
                      : (0, a.jsx)(m, { className: "h-6 w-6", strokeWidth: 2 }),
                  }),
                ],
              }),
              n &&
                (0, a.jsx)("div", {
                  className:
                    "w-full block flex-grow lg:flex lg:items-center lg:w-auto ".concat(
                      n ? "block" : "hidden",
                    ),
                  children: (0, a.jsx)("div", {
                    className: "max-h-64 overflow-y-auto",
                    children: (0, a.jsx)(pn, {
                      onClose: function () {
                        r(!1);
                      },
                    }),
                  }),
                }),
            ],
          })
        );
      }
      var mn = function () {
        return (0, a.jsx)("footer", { children: "Footer" });
      };
      function yn() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(o, {}),
            (0, a.jsx)("main", {
              children: (0, a.jsx)(e.Suspense, {
                fallback: (0, a.jsx)("div", { children: "Loading..." }),
                children: (0, a.jsx)(Vt, {}),
              }),
            }),
            (0, a.jsx)(mn, {}),
          ],
        });
      }
      var gn = function (e) {
          var t = e.href,
            n = e.title,
            r = Rt().pathname === t;
          return (0, a.jsx)(cn, {
            to: t,
            className:
              "text-center font-black transition-all duration-500 ease-in-out \n      relative before:content-[''] before:absolute before:block before:w-full before:h-[0.1rem] \n      before:bottom-0 before:left-0 before:bg-black\n      before:scale-x-0 before:origin-top-left before:hover:scale-x-100 \n      before:transition-all before:ease-in-out before:duration-500 ".concat(
                r ? "before:scale-x-100" : "",
              ),
            children: n,
          });
        },
        bn = function (e) {
          var t = e.href,
            n = e.title,
            r = e.onClose;
          return (0, a.jsx)(cn, {
            to: t,
            className:
              "font-black p-2 duration-300 ease-in-out hover:bg-neutral-50",
            onClick: function () {
              r();
            },
            children: (0, a.jsx)("div", {
              className:
                "transition-all duration-300 ease-in-out hover:translate-x-2",
              children: n,
            }),
          });
        },
        wn =
          (n(872),
          n(470),
          n(660),
          n(539),
          {
            HOME: "/",
            ABOUT: "about",
            PROJECTS: "projects",
            CONTACT: "contact",
          }),
        kn = e.lazy(function () {
          return Promise.resolve().then(n.bind(n, 872));
        }),
        xn = e.lazy(function () {
          return Promise.resolve().then(n.bind(n, 470));
        }),
        Sn = e.lazy(function () {
          return Promise.resolve().then(n.bind(n, 539));
        }),
        En = e.lazy(function () {
          return Promise.resolve().then(n.bind(n, 660));
        }),
        Cn = [
          { path: wn.HOME, element: (0, a.jsx)(kn, {}) },
          { path: wn.ABOUT, element: (0, a.jsx)(xn, {}) },
          { path: wn.PROJECTS, element: (0, a.jsx)(Sn, {}) },
          { path: wn.CONTACT, element: (0, a.jsx)(En, {}) },
        ];
      var _n = function () {
          var e = (function (e, t) {
            return Oe({
              basename: null == t ? void 0 : t.basename,
              future: Gt({}, null == t ? void 0 : t.future, {
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
                    return "string" === typeof t ? t : H(t);
                  },
                  null,
                  n,
                )),
              hydrationData: (null == t ? void 0 : t.hydrationData) || Zt(),
              routes: e,
              mapRouteProperties: Yt,
              window: null == t ? void 0 : t.window,
            }).initialize();
            var n;
          })([{ element: (0, a.jsx)(yn, {}), children: Cn }]);
          return (0, a.jsx)("div", {
            className: "bg-background h-screen",
            children: (0, a.jsx)(on, { router: e }),
          });
        },
        Pn = function (e) {
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
        };
      r
        .createRoot(document.getElementById("root"))
        .render((0, a.jsx)(e.StrictMode, { children: (0, a.jsx)(_n, {}) })),
        Pn();
    })();
})();
//# sourceMappingURL=main.4a7f4afb.js.map
