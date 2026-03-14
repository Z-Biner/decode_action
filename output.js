//Sat Mar 14 2026 14:14:36 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
!function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var i = n[r] = {
      i: r,
      l: false,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, t), i.l = true, i.exports;
  }
  var n = {};
  return t.m = e, t.c = n, t.i = function (e) {
    return e;
  }, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: false,
      enumerable: true,
      get: r
    });
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = "", t(t.s = 24);
}([function (e, t, n) {
  "use strict";

  var r = function (e, t) {
    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
    for (var n = Object(e), r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      if (null != i) for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }
    return n;
  };
  t.a = r;
}, function (e, t, n) {
  var r, i;
  !function (t, n) {
    "use strict";

    "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, true) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e);
    } : n(t);
  }("undefined" != typeof window ? window : this, function (n, o) {
    "use strict";

    function s(e, t) {
      t = t || oe;
      var n = t.createElement("script");
      n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
    }
    function a(e) {
      var t = !!e && "length" in e && e.length,
        n = ye.type(e);
      return "function" === n || ye.isWindow(e) ? false : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
    }
    function u(e, t, n) {
      return ye.isFunction(t) ? ye.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      }) : t.nodeType ? ye.grep(e, function (e) {
        return e === t !== n;
      }) : "string" != typeof t ? ye.grep(e, function (e) {
        return ce.call(t, e) > -1 !== n;
      }) : Se.test(t) ? ye.filter(t, e, n) : (t = ye.filter(t, e), ye.grep(e, function (e) {
        return ce.call(t, e) > -1 !== n && 1 === e.nodeType;
      }));
    }
    function l(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;);
      return e;
    }
    function c(e) {
      var t = {};
      return ye.each(e.match(Ae) || [], function (e, n) {
        t[n] = true;
      }), t;
    }
    function f(e) {
      return e;
    }
    function d(e) {
      throw e;
    }
    function h(e, t, n) {
      var r;
      try {
        e && ye.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && ye.isFunction(r = e.then) ? r.call(e, t, n) : t.call(undefined, e);
      } catch (e) {
        n.call(undefined, e);
      }
    }
    function p() {
      oe.removeEventListener("DOMContentLoaded", p), n.removeEventListener("load", p), ye.ready();
    }
    function m() {
      this.expando = ye.expando + m.uid++;
    }
    function g(e) {
      return "true" === e ? true : "false" === e ? false : "null" === e ? null : e === +e + "" ? +e : Ie.test(e) ? JSON.parse(e) : e;
    }
    function v(e, t, n) {
      var r;
      if (undefined === n && 1 === e.nodeType) if (r = "data-" + t.replace(Be, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
        try {
          n = g(n);
        } catch (i) {}
        We.set(e, t, n);
      } else n = undefined;
      return n;
    }
    function y(e, t, n, r) {
      var i,
        o = 1,
        s = 20,
        a = r ? function () {
          return r.cur();
        } : function () {
          return ye.css(e, t, "");
        },
        u = a(),
        l = n && n[3] || (ye.cssNumber[t] ? "" : "px"),
        c = (ye.cssNumber[t] || "px" !== l && +u) && ze.exec(ye.css(e, t));
      if (c && c[3] !== l) {
        l = l || c[3], n = n || [], c = +u || 1;
        do o = o || ".5", c /= o, ye.style(e, t, c + l); while (o !== (o = a() / u) && 1 !== o && --s);
      }
      return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
    }
    function x(e) {
      var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = Ge[r];
      return i ? i : (t = n.body.appendChild(n.createElement(r)), i = ye.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Ge[r] = i, i);
    }
    function b(e, t) {
      for (var n, r, i = [], o = 0, s = e.length; s > o; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Fe.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Ye(r) && (i[o] = x(r))) : "none" !== n && (i[o] = "none", Fe.set(r, "display", n)));
      for (o = 0; s > o; o++) null != i[o] && (e[o].style.display = i[o]);
      return e;
    }
    function w(e, t) {
      var n;
      return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], undefined === t || t && ye.nodeName(e, t) ? ye.merge([e], n) : n;
    }
    function T(e, t) {
      for (var n = 0, r = e.length; r > n; n++) Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"));
    }
    function D(e, t, n, r, i) {
      for (var o, s, a, u, l, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === ye.type(o)) ye.merge(d, o.nodeType ? [o] : o);else if (Ze.test(o)) {
        for (s = s || f.appendChild(t.createElement("div")), a = (Ve.exec(o) || ["", ""])[1].toLowerCase(), u = Je[a] || Je._default, s.innerHTML = u[1] + ye.htmlPrefilter(o) + u[2], c = u[0]; c--;) s = s.lastChild;
        ye.merge(d, s.childNodes), s = f.firstChild, s.textContent = "";
      } else d.push(t.createTextNode(o));
      for (f.textContent = "", h = 0; o = d[h++];) if (r && ye.inArray(o, r) > -1) i && i.push(o);else if (l = ye.contains(o.ownerDocument, o), s = w(f.appendChild(o), "script"), l && T(s), n) for (c = 0; o = s[c++];) Qe.test(o.type || "") && n.push(o);
      return f;
    }
    function C() {
      return true;
    }
    function E() {
      return false;
    }
    function _() {
      try {
        return oe.activeElement;
      } catch (e) {}
    }
    function k(e, t, n, r, i, o) {
      var s, a;
      if ("object" == typeof t) {
        "string" != typeof n && (r = r || n, n = undefined);
        for (a in t) k(e, a, n, r, t[a], o);
        return e;
      }
      if (null == r && null == i ? (i = n, r = n = undefined) : null == i && ("string" == typeof n ? (i = r, r = undefined) : (i = r, r = n, n = undefined)), i === false) i = E;else if (!i) return e;
      return 1 === o && (s = i, i = function (e) {
        return ye().off(e), s.apply(this, arguments);
      }, i.guid = s.guid || (s.guid = ye.guid++)), e.each(function () {
        ye.event.add(this, t, i, r, n);
      });
    }
    function S(e, t) {
      return ye.nodeName(e, "table") && ye.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e;
    }
    function L(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function N(e) {
      var t = at.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function j(e, t) {
      var n, r, i, o, s, a, u, l;
      if (1 === t.nodeType) {
        if (Fe.hasData(e) && (o = Fe.access(e), s = Fe.set(t, o), l = o.events)) {
          delete s.handle, s.events = {};
          for (i in l) for (n = 0, r = l[i].length; r > n; n++) ye.event.add(t, i, l[i][n]);
        }
        We.hasData(e) && (a = We.access(e), u = ye.extend({}, a), We.set(t, u));
      }
    }
    function H(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Ke.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
    function P(e, t, n, r) {
      t = ue.apply([], t);
      var i,
        o,
        a,
        u,
        l,
        c,
        f = 0,
        d = e.length,
        h = d - 1,
        p = t[0],
        m = ye.isFunction(p);
      if (m || d > 1 && "string" == typeof p && !ge.checkClone && st.test(p)) return e.each(function (i) {
        var o = e.eq(i);
        m && (t[0] = p.call(this, i, o.html())), P(o, t, n, r);
      });
      if (d && (i = D(t, e[0].ownerDocument, false, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
        for (a = ye.map(w(i, "script"), L), u = a.length; d > f; f++) l = i, f !== h && (l = ye.clone(l, true, true), u && ye.merge(a, w(l, "script"))), n.call(e[f], l, f);
        if (u) for (c = a[a.length - 1].ownerDocument, ye.map(a, N), f = 0; u > f; f++) l = a[f], Qe.test(l.type || "") && !Fe.access(l, "globalEval") && ye.contains(c, l) && (l.src ? ye._evalUrl && ye._evalUrl(l.src) : s(l.textContent.replace(ut, ""), c));
      }
      return e;
    }
    function A(e, t, n) {
      for (var r, i = t ? ye.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ye.cleanData(w(r)), r.parentNode && (n && ye.contains(r.ownerDocument, r) && T(w(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    function M(e, t, n) {
      var r,
        i,
        o,
        s,
        a = e.style;
      return n = n || ft(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || ye.contains(e.ownerDocument, e) || (s = ye.style(e, t)), !ge.pixelMarginRight() && ct.test(s) && lt.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), undefined !== s ? s + "" : s;
    }
    function R(e, t) {
      return {
        get: function () {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments);
        }
      };
    }
    function q(e) {
      if (e in gt) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = mt.length; n--;) if (e = mt[n] + t, e in gt) return e;
    }
    function O(e, t, n) {
      var r = ze.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function F(e, t, n, r, i) {
      var o,
        s = 0;
      for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; 4 > o; o += 2) "margin" === n && (s += ye.css(e, n + Ue[o], true, i)), r ? ("content" === n && (s -= ye.css(e, "padding" + Ue[o], true, i)), "margin" !== n && (s -= ye.css(e, "border" + Ue[o] + "Width", true, i))) : (s += ye.css(e, "padding" + Ue[o], true, i), "padding" !== n && (s += ye.css(e, "border" + Ue[o] + "Width", true, i)));
      return s;
    }
    function W(e, t, n) {
      var r,
        i = true,
        o = ft(e),
        s = "border-box" === ye.css(e, "boxSizing", false, o);
      if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), 0 >= r || null == r) {
        if (r = M(e, t, o), (0 > r || null == r) && (r = e.style[t]), ct.test(r)) return r;
        i = s && (ge.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0;
      }
      return r + F(e, t, n || (s ? "border" : "content"), i, o) + "px";
    }
    function I(e, t, n, r, i) {
      return new I.prototype.init(e, t, n, r, i);
    }
    function B() {
      yt && (n.requestAnimationFrame(B), ye.fx.tick());
    }
    function $() {
      return n.setTimeout(function () {
        vt = undefined;
      }), vt = ye.now();
    }
    function z(e, t) {
      var n,
        r = 0,
        i = {
          height: e
        };
      for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ue[r], i["margin" + n] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i;
    }
    function U(e, t, n) {
      for (var r, i = (G.tweeners[t] || []).concat(G.tweeners["*"]), o = 0, s = i.length; s > o; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function Y(e, t, n) {
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        d = this,
        h = {},
        p = e.style,
        m = e.nodeType && Ye(e),
        g = Fe.get(e, "fxshow");
      n.queue || (s = ye._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a();
      }), s.unqueued++, d.always(function () {
        d.always(function () {
          s.unqueued--, ye.queue(e, "fx").length || s.empty.fire();
        });
      }));
      for (r in t) if (i = t[r], xt.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
          if ("show" !== i || !g || undefined === g[r]) continue;
          m = true;
        }
        h[r] = g && g[r] || ye.style(e, r);
      }
      if (u = !ye.isEmptyObject(t), u || !ye.isEmptyObject(h)) {
        f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = g && g.display, null == l && (l = Fe.get(e, "display")), c = ye.css(e, "display"), "none" === c && (l ? c = l : (b([e], true), l = e.style.display || l, c = ye.css(e, "display"), b([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ye.css(e, "float") && (u || (d.done(function () {
          p.display = l;
        }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
          p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        })), u = false;
        for (r in h) u || (g ? "hidden" in g && (m = g.hidden) : g = Fe.access(e, "fxshow", {
          display: l
        }), o && (g.hidden = !m), m && b([e], true), d.done(function () {
          m || b([e]), Fe.remove(e, "fxshow");
          for (r in h) ye.style(e, r, h[r]);
        })), u = U(m ? g[r] : 0, r, d), r in g || (g[r] = u.start, m && (u.end = u.start, u.start = 0));
      }
    }
    function X(e, t) {
      var n, r, i, o, s;
      for (n in e) if (r = ye.camelCase(n), i = t[r], o = e[n], ye.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = ye.cssHooks[r], s && "expand" in s) {
        o = s.expand(o), delete e[r];
        for (n in o) n in e || (e[n] = o[n], t[n] = i);
      } else t[r] = i;
    }
    function G(e, t, n) {
      var r,
        i,
        o = 0,
        s = G.prefilters.length,
        a = ye.Deferred().always(function () {
          delete u.elem;
        }),
        u = function () {
          if (i) return false;
          for (var t = vt || $(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
          return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), false);
        },
        l = a.promise({
          elem: e,
          props: ye.extend({}, t),
          opts: ye.extend(true, {
            specialEasing: {},
            easing: ye.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: vt || $(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var r = ye.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
            return l.tweens.push(r), r;
          },
          stop: function (t) {
            var n = 0,
              r = t ? l.tweens.length : 0;
            if (i) return this;
            for (i = true; r > n; n++) l.tweens[n].run(1);
            return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this;
          }
        }),
        c = l.props;
      for (X(c, l.opts.specialEasing); s > o; o++) if (r = G.prefilters[o].call(l, e, c, l.opts)) return ye.isFunction(r.stop) && (ye._queueHooks(l.elem, l.opts.queue).stop = ye.proxy(r.stop, r)), r;
      return ye.map(c, U, l), ye.isFunction(l.opts.start) && l.opts.start.call(e, l), ye.fx.timer(ye.extend(u, {
        elem: e,
        anim: l,
        queue: l.opts.queue
      })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function K(e) {
      var t = e.match(Ae) || [];
      return t.join(" ");
    }
    function V(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }
    function Q(e, t, n, r) {
      var i;
      if (ye.isArray(t)) ye.each(t, function (t, i) {
        n || Nt.test(e) ? r(e, i) : Q(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
      });else if (n || "object" !== ye.type(t)) r(e, t);else for (i in t) Q(e + "[" + i + "]", t[i], n, r);
    }
    function J(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var r,
          i = 0,
          o = "*".toLowerCase().match(Ae) || [];
        if (ye.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      };
    }
    function Z(e, t, n, r) {
      function i(a) {
        var u;
        return o[a] = true, ye.each(e[a] || [], function (e, a) {
          var l = a(t, n, r);
          return "string" != typeof l || s || o[l] ? s ? !(u = l) : undefined : (t.dataTypes.unshift(l), i(l), false);
        }), u;
      }
      var o = {},
        s = e === Bt;
      return i(t.dataTypes[0]) || !o["*"] && i("*");
    }
    function ee(e, t) {
      var n,
        r,
        i = ye.ajaxSettings.flatOptions || {};
      for (n in t) undefined !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && ye.extend(true, e, r), e;
    }
    function te(e, t, n) {
      for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), undefined === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r) for (i in a) if (a[i] && a[i].test(r)) {
        u.unshift(i);
        break;
      }
      if (u[0] in n) o = u[0];else {
        for (i in n) {
          if (!u[0] || e.converters[i + " " + u[0]]) {
            o = i;
            break;
          }
          s || (s = i);
        }
        o = o || s;
      }
      return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined;
    }
    function ne(e, t, n, r) {
      var i,
        o,
        s,
        a,
        u,
        l = {},
        c = e.dataTypes.slice();
      if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
      for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
          s === true ? s = l[i] : l[i] !== true && (o = a[0], c.unshift(a[1]));
          break;
        }
        if (s !== true) if (s && e["throws"]) t = s(t);else try {
          t = s(t);
        } catch (f) {
          return {
            state: "parsererror",
            error: s ? f : "No conversion from " + u + " to " + o
          };
        }
      }
      return {
        state: "success",
        data: t
      };
    }
    function re(e) {
      return ye.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    var ie = [],
      oe = n.document,
      se = Object.getPrototypeOf,
      ae = ie.slice,
      ue = ie.concat,
      le = ie.push,
      ce = ie.indexOf,
      fe = {},
      de = fe.toString,
      he = fe.hasOwnProperty,
      pe = he.toString,
      me = pe.call(Object),
      ge = {},
      ve = "3.1.1",
      ye = function (e, t) {
        return new ye.fn.init(e, t);
      },
      xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      be = /^-ms-/,
      we = /-([a-z])/g,
      Te = function (e, t) {
        return t.toUpperCase();
      };
    ye.fn = ye.prototype = {
      jquery: ve,
      constructor: ye,
      length: 0,
      toArray: function () {
        return ae.call(this);
      },
      get: function (e) {
        return null == e ? ae.call(this) : 0 > e ? this[e + this.length] : this[e];
      },
      pushStack: function (e) {
        var t = ye.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      each: function (e) {
        return ye.each(this, e);
      },
      map: function (e) {
        return this.pushStack(ye.map(this, function (t, n) {
          return e.call(t, n, t);
        }));
      },
      slice: function () {
        return this.pushStack(ae.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: le,
      sort: ie.sort,
      splice: ie.splice
    }, ye.extend = ye.fn.extend = function () {
      var e,
        t,
        n,
        r,
        i,
        o,
        s = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = false;
      for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || ye.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], r = e[t], s !== r && (l && r && (ye.isPlainObject(r) || (i = ye.isArray(r))) ? (i ? (i = false, o = n && ye.isArray(n) ? n : []) : o = n && ye.isPlainObject(n) ? n : {}, s[t] = ye.extend(l, o, r)) : undefined !== r && (s[t] = r));
      return s;
    }, ye.extend({
      expando: "jQuery" + (ve + Math.random()).replace(/\D/g, ""),
      isReady: true,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === ye.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        var t = ye.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      },
      isPlainObject: function (e) {
        var t, n;
        return e && "[object Object]" === de.call(e) ? (t = se(e)) ? (n = he.call(t, "constructor") && t.constructor, "function" == typeof n && pe.call(n) === me) : true : false;
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return false;
        return true;
      },
      type: function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? fe[de.call(e)] || "object" : typeof e;
      },
      globalEval: function (e) {
        s(e);
      },
      camelCase: function (e) {
        return e.replace(be, "ms-").replace(we, Te);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (a(e)) for (n = e.length; n > r && t.call(e[r], r, e[r]) !== false; r++);else for (r in e) if (t.call(e[r], r, e[r]) === false) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(xe, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return null != e && (a(Object(e)) ? ye.merge(n, "string" == typeof e ? [e] : e) : le.call(n, e)), n;
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : ce.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
        return e.length = i, e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (a(e)) for (r = e.length; r > o; o++) i = t(e[o], o, n), null != i && s.push(i);else for (o in e) i = t(e[o], o, n), null != i && s.push(i);
        return ue.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        return "string" == typeof t && (n = e[t], t = e, e = n), ye.isFunction(e) ? (r = ae.call(arguments, 2), i = function () {
          return e.apply(t || this, r.concat(ae.call(arguments)));
        }, i.guid = e.guid = e.guid || ye.guid++, i) : undefined;
      },
      now: Date.now,
      support: ge
    }), "function" == typeof Symbol && (ye.fn[Symbol.iterator] = ie[Symbol.iterator]), ye.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      fe["[object " + t + "]"] = t.toLowerCase();
    });
    var De = function (e) {
      function t(e, t, n, r) {
        var i,
          o,
          s,
          a,
          u,
          l,
          c,
          d = t && t.ownerDocument,
          p = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
        if (!r && ((t ? t.ownerDocument || t : I) !== P && H(t), t = t || P, M)) {
          if (11 !== p && (u = ve.exec(e))) if (i = u[1]) {
            if (9 === p) {
              if (!(s = t.getElementById(i))) return n;
              if (s.id === i) return n.push(s), n;
            } else if (d && (s = d.getElementById(i)) && F(t, s) && s.id === i) return n.push(s), n;
          } else {
            if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
            if ((i = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(i)), n;
          }
          if (T.qsa && !Y[e + " "] && (!R || !R.test(e))) {
            if (1 !== p) d = t, c = e;else if ("object" !== t.nodeName.toLowerCase()) {
              for ((a = t.getAttribute("id")) ? a = a.replace(we, Te) : t.setAttribute("id", a = W), l = _(e), o = l.length; o--;) l[o] = "#" + a + " " + h(l[o]);
              c = l.join(","), d = ye.test(e) && f(t.parentNode) || t;
            }
            if (c) try {
              return J.apply(n, d.querySelectorAll(c)), n;
            } catch (m) {} finally {
              a === W && t.removeAttribute("id");
            }
          }
        }
        return S(e.replace(ae, "$1"), t, n, r);
      }
      function n() {
        function e(n, r) {
          return t.push(n + " ") > D.cacheLength && delete e[t.shift()], e[n + " "] = r;
        }
        var t = [];
        return e;
      }
      function r(e) {
        return e[W] = true, e;
      }
      function i(e) {
        var t = P.createElement("fieldset");
        try {
          return !!e(t);
        } catch (n) {
          return false;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }
      function o(e, t) {
        for (var n = e.split("|"), r = n.length; r--;) D.attrHandle[n[r]] = t;
      }
      function s(e, t) {
        var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) for (; n = n.nextSibling;) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function a(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return "input" === n && t.type === e;
        };
      }
      function u(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function l(e) {
        return function (t) {
          return "form" in t ? t.parentNode && t.disabled === false ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t ? t.disabled === e : false;
        };
      }
      function c(e) {
        return r(function (t) {
          return t = +t, r(function (n, r) {
            for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]));
          });
        });
      }
      function f(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      function d() {}
      function h(e) {
        for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
        return r;
      }
      function p(e, t, n) {
        var r = t.dir,
          i = t.next,
          o = i || r,
          s = n && "parentNode" === o,
          a = $++;
        return t.first ? function (t, n, i) {
          for (; t = t[r];) if (1 === t.nodeType || s) return e(t, n, i);
          return false;
        } : function (t, n, u) {
          var l,
            c,
            f,
            d = [B, a];
          if (u) {
            for (; t = t[r];) if ((1 === t.nodeType || s) && e(t, n, u)) return true;
          } else for (; t = t[r];) if (1 === t.nodeType || s) if (f = t[W] || (t[W] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === B && l[1] === a) return d[2] = l[2];
            if (c[o] = d, d[2] = e(t, n, u)) return true;
          }
          return false;
        };
      }
      function m(e) {
        return e.length > 1 ? function (t, n, r) {
          for (var i = e.length; i--;) if (!e[i](t, n, r)) return false;
          return true;
        } : e[0];
      }
      function g(e, n, r) {
        for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
        return r;
      }
      function v(e, t, n, r, i) {
        for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++) (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
        return s;
      }
      function y(e, t, n, i, o, s) {
        return i && !i[W] && (i = y(i)), o && !o[W] && (o = y(o, s)), r(function (r, s, a, u) {
          var l,
            c,
            f,
            d = [],
            h = [],
            p = s.length,
            m = r || g(t || "*", a.nodeType ? [a] : a, []),
            y = !e || !r && t ? m : v(m, d, e, a, u),
            x = n ? o || (r ? e : p || i) ? [] : s : y;
          if (n && n(y, x, a, u), i) for (l = v(x, h), i(l, [], a, u), c = l.length; c--;) (f = l[c]) && (x[h[c]] = !(y[h[c]] = f));
          if (r) {
            if (o || e) {
              if (o) {
                for (l = [], c = x.length; c--;) (f = x[c]) && l.push(y[c] = f);
                o(null, x = [], l, u);
              }
              for (c = x.length; c--;) (f = x[c]) && (l = o ? ee(r, f) : d[c]) > -1 && (r[l] = !(s[l] = f));
            }
          } else x = v(x === s ? x.splice(p, x.length) : x), o ? o(null, s, x, u) : J.apply(s, x);
        });
      }
      function x(e) {
        for (var t, n, r, i = e.length, o = D.relative[e[0].type], s = o || D.relative[" "], a = o ? 1 : 0, u = p(function (e) {
            return e === t;
          }, s, true), l = p(function (e) {
            return ee(t, e) > -1;
          }, s, true), c = [function (e, n, r) {
            var i = !o && (r || n !== L) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
            return t = null, i;
          }]; i > a; a++) if (n = D.relative[e[a].type]) c = [p(m(c), n)];else {
          if (n = D.filter[e[a].type].apply(null, e[a].matches), n[W]) {
            for (r = ++a; i > r && !D.relative[e[r].type]; r++);
            return y(a > 1 && m(c), a > 1 && h(e.slice(0, a - 1).concat({
              value: " " === e[a - 2].type ? "*" : ""
            })).replace(ae, "$1"), n, r > a && x(e.slice(a, r)), i > r && x(e = e.slice(r)), i > r && h(e));
          }
          c.push(n);
        }
        return m(c);
      }
      function b(e, n) {
        var i = n.length > 0,
          o = e.length > 0,
          s = function (r, s, a, u, l) {
            var c,
              f,
              d,
              h = 0,
              p = "0",
              m = r && [],
              g = [],
              y = L,
              x = r || o && D.find.TAG("*", l),
              b = B += null == y ? 1 : Math.random() || .1,
              w = x.length;
            for (l && (L = s === P || s || l); p !== w && null != (c = x[p]); p++) {
              if (o && c) {
                for (f = 0, s || c.ownerDocument === P || (H(c), a = !M); d = e[f++];) if (d(c, s || P, a)) {
                  u.push(c);
                  break;
                }
                l && (B = b);
              }
              i && ((c = !d && c) && h--, r && m.push(c));
            }
            if (h += p, i && p !== h) {
              for (f = 0; d = n[f++];) d(m, g, s, a);
              if (r) {
                if (h > 0) for (; p--;) m[p] || g[p] || (g[p] = V.call(u));
                g = v(g);
              }
              J.apply(u, g), l && !r && g.length > 0 && h + n.length > 1 && t.uniqueSort(u);
            }
            return l && (B = b, L = y), m;
          };
        return i ? r(s) : s;
      }
      var w,
        T,
        D,
        C,
        E,
        _,
        k,
        S,
        L,
        N,
        j,
        H,
        P,
        A,
        M,
        R,
        q,
        O,
        F,
        W = "sizzle" + 1 * new Date(),
        I = e.document,
        B = 0,
        $ = 0,
        z = n(),
        U = n(),
        Y = n(),
        X = function (e, t) {
          return e === t && (j = true), 0;
        },
        G = {}.hasOwnProperty,
        K = [],
        V = K.pop,
        Q = K.push,
        J = K.push,
        Z = K.slice,
        ee = function (e, t) {
          for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
          return -1;
        },
        te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        re = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
        ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
        oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
        se = new RegExp(ne + "+", "g"),
        ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
        ue = new RegExp("^" + ne + "*," + ne + "*"),
        le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
        fe = new RegExp(oe),
        de = new RegExp("^" + re + "$"),
        he = {
          ID: new RegExp("^#(" + re + ")"),
          CLASS: new RegExp("^\\.(" + re + ")"),
          TAG: new RegExp("^(" + re + "|[*])"),
          ATTR: new RegExp("^" + ie),
          PSEUDO: new RegExp("^" + oe),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + te + ")$", "i"),
          needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        },
        pe = /^(?:input|select|textarea|button)$/i,
        me = /^h\d$/i,
        ge = /^[^{]+\{\s*\[native \w/,
        ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ye = /[+~]/,
        xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
        be = function (e, t, n) {
          var r = "0x" + t - 65536;
          return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        },
        we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        Te = function (e, t) {
          return t ? "\x00" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
        De = function () {
          H();
        },
        Ce = p(function (e) {
          return e.disabled === true && ("form" in e || "label" in e);
        }, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        J.apply(K = Z.call(I.childNodes), I.childNodes), K[I.childNodes.length].nodeType;
      } catch (Ee) {
        J = {
          apply: K.length ? function (e, t) {
            Q.apply(e, Z.call(t));
          } : function (e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];);
            e.length = n - 1;
          }
        };
      }
      T = t.support = {}, E = t.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return t ? "HTML" !== t.nodeName : false;
      }, H = t.setDocument = function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : I;
        return r !== P && 9 === r.nodeType && r.documentElement ? (P = r, A = P.documentElement, M = !E(P), I !== P && (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", De, false) : n.attachEvent && n.attachEvent("onunload", De)), T.attributes = i(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), T.getElementsByTagName = i(function (e) {
          return e.appendChild(P.createComment("")), !e.getElementsByTagName("*").length;
        }), T.getElementsByClassName = ge.test(P.getElementsByClassName), T.getById = i(function (e) {
          return A.appendChild(e).id = W, !P.getElementsByName || !P.getElementsByName(W).length;
        }), T.getById ? (D.filter.ID = function (e) {
          var t = e.replace(xe, be);
          return function (e) {
            return e.getAttribute("id") === t;
          };
        }, D.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && M) {
            var n = t.getElementById(e);
            return n ? [n] : [];
          }
        }) : (D.filter.ID = function (e) {
          var t = e.replace(xe, be);
          return function (e) {
            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t;
          };
        }, D.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && M) {
            var n,
              r,
              i,
              o = t.getElementById(e);
            if (o) {
              if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
              for (i = t.getElementsByName(e), r = 0; o = i[r++];) if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
            }
            return [];
          }
        }), D.find.TAG = T.getElementsByTagName ? function (e, t) {
          return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : undefined;
        } : function (e, t) {
          var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
            return r;
          }
          return o;
        }, D.find.CLASS = T.getElementsByClassName && function (e, t) {
          return "undefined" != typeof t.getElementsByClassName && M ? t.getElementsByClassName(e) : undefined;
        }, q = [], R = [], (T.qsa = ge.test(P.querySelectorAll)) && (i(function (e) {
          A.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || R.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || R.push("~="), e.querySelectorAll(":checked").length || R.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || R.push(".#.+[+~]");
        }), i(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = P.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && R.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled"), A.appendChild(e).disabled = true, 2 !== e.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:");
        })), (T.matchesSelector = ge.test(O = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && i(function (e) {
          T.disconnectedMatch = O.call(e, "*"), O.call(e, "[s!='']:x"), q.push("!=", oe);
        }), R = R.length && new RegExp(R.join("|")), q = q.length && new RegExp(q.join("|")), t = ge.test(A.compareDocumentPosition), F = t || ge.test(A.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) if (t === e) return true;
          return false;
        }, X = t ? function (e, t) {
          if (e === t) return j = true, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === P || e.ownerDocument === I && F(I, e) ? -1 : t === P || t.ownerDocument === I && F(I, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1);
        } : function (e, t) {
          if (e === t) return j = true, 0;
          var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            u = [t];
          if (!i || !o) return e === P ? -1 : t === P ? 1 : i ? -1 : o ? 1 : N ? ee(N, e) - ee(N, t) : 0;
          if (i === o) return s(e, t);
          for (n = e; n = n.parentNode;) a.unshift(n);
          for (n = t; n = n.parentNode;) u.unshift(n);
          for (; a[r] === u[r];) r++;
          return r ? s(a[r], u[r]) : a[r] === I ? -1 : u[r] === I ? 1 : 0;
        }, P) : P;
      }, t.matches = function (e, n) {
        return t(e, null, null, n);
      }, t.matchesSelector = function (e, n) {
        if ((e.ownerDocument || e) !== P && H(e), n = n.replace(ce, "='$1']"), T.matchesSelector && M && !Y[n + " "] && (!q || !q.test(n)) && (!R || !R.test(n))) try {
          var r = O.call(e, n);
          if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
        } catch (i) {}
        return t(n, P, null, [e]).length > 0;
      }, t.contains = function (e, t) {
        return (e.ownerDocument || e) !== P && H(e), F(e, t);
      }, t.attr = function (e, t) {
        (e.ownerDocument || e) !== P && H(e);
        var n = D.attrHandle[t.toLowerCase()],
          r = n && G.call(D.attrHandle, t.toLowerCase()) ? n(e, t, !M) : undefined;
        return undefined !== r ? r : T.attributes || !M ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }, t.escape = function (e) {
        return (e + "").replace(we, Te);
      }, t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, t.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (j = !T.detectDuplicates, N = !T.sortStable && e.slice(0), e.sort(X), j) {
          for (; t = e[i++];) t === e[i] && (r = n.push(i));
          for (; r--;) e.splice(n[r], 1);
        }
        return N = null, e;
      }, C = t.getText = function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; t = e[r++];) n += C(t);
        return n;
      }, D = t.selectors = {
        cacheLength: 50,
        createPseudo: r,
        match: he,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: true
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: true
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function (e) {
            return e[1] = e[1].replace(xe, be), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = _(n, true)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(xe, be).toLowerCase();
            return "*" === e ? function () {
              return true;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          },
          CLASS: function (e) {
            var t = z[e + " "];
            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function (e) {
              return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR: function (e, n, r) {
            return function (i) {
              var o = t.attr(i, e);
              return null == o ? "!=" === n : n ? (o += "", "=" === n ? "" === r : "!=" === n ? "" !== r : "^=" === n ? r && 0 === "".indexOf(r) : "*=" === n ? r && "".indexOf(r) > -1 : "$=" === n ? r && "".slice(-r.length) === r : "~=" === n ? (" " + "".replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? "" === r || "".slice(0, r.length + 1) === r + "-" : false) : true;
            };
          },
          CHILD: function (e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === r && 0 === i ? function (e) {
              return !!e.parentNode;
            } : function (t, n, u) {
              var l,
                c,
                f,
                d,
                h,
                p,
                m = o !== s ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                y = !u && !a,
                x = false;
              if (g) {
                if (o) {
                  for (; m;) {
                    for (d = t; d = d[m];) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return false;
                    p = m = "only" === e && !p && "nextSibling";
                  }
                  return true;
                }
                if (p = [s ? g.firstChild : g.lastChild], s && y) {
                  for (d = g, f = d[W] || (d[W] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], h = l[0] === B && l[1], x = h && l[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (x = h = 0) || p.pop();) if (1 === d.nodeType && ++x && d === t) {
                    c[e] = [B, h, x];
                    break;
                  }
                } else if (y && (d = t, f = d[W] || (d[W] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], h = l[0] === B && l[1], x = h), x === false) for (; (d = ++h && d && d[m] || (x = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && (f = d[W] || (d[W] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [B, x]), d !== t)););
                return x -= i, x === r || x % r === 0 && x / r >= 0;
              }
            };
          },
          PSEUDO: function (e, n) {
            var i,
              o = D.pseudos[e] || D.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
            return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], D.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
              for (var r, i = o(e, n), s = i.length; s--;) r = ee(e, i[s]), e[r] = !(t[r] = i[s]);
            }) : function (e) {
              return o(e, 0, i);
            }) : o;
          }
        },
        pseudos: {
          not: r(function (e) {
            var t = [],
              n = [],
              i = k(e.replace(ae, "$1"));
            return i[W] ? r(function (e, t, n, r) {
              for (var o, s = i(e, null, r, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o));
            }) : function (e, r, o) {
              return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
            };
          }),
          has: r(function (e) {
            return function (n) {
              return t(e, n).length > 0;
            };
          }),
          contains: r(function (e) {
            return e = e.replace(xe, be), function (t) {
              return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
            };
          }),
          lang: r(function (e) {
            return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, be).toLowerCase(), function (t) {
              var n;
              do if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
              return false;
            };
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === A;
          },
          focus: function (e) {
            return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: l(false),
          disabled: l(true),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected;
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, e.selected === true;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return false;
            return true;
          },
          parent: function (e) {
            return !D.pseudos.empty(e);
          },
          header: function (e) {
            return me.test(e.nodeName);
          },
          input: function (e) {
            return pe.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t;
          },
          text: function (e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: c(function () {
            return [0];
          }),
          last: c(function (e, t) {
            return [t - 1];
          }),
          eq: c(function (e, t, n) {
            return [0 > n ? n + t : n];
          }),
          even: c(function (e, t) {
            for (var n = 0; t > n; n += 2) e.push(n);
            return e;
          }),
          odd: c(function (e, t) {
            for (var n = 1; t > n; n += 2) e.push(n);
            return e;
          }),
          lt: c(function (e, t, n) {
            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
            return e;
          }),
          gt: c(function (e, t, n) {
            for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
            return e;
          })
        }
      }, D.pseudos.nth = D.pseudos.eq;
      for (w in {
        radio: true,
        checkbox: true,
        file: true,
        password: true,
        image: true
      }) D.pseudos[w] = a(w);
      for (w in {
        submit: true,
        reset: true
      }) D.pseudos[w] = u(w);
      return d.prototype = D.filters = D.pseudos, D.setFilters = new d(), _ = t.tokenize = function (e, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = U[e + " "];
        if (c) return n ? 0 : c.slice(0);
        for (a = e, u = [], l = D.preFilter; a;) {
          (!r || (i = ue.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = false, (i = le.exec(a)) && (r = i.shift(), o.push({
            value: r,
            type: i[0].replace(ae, " ")
          }), a = a.slice(r.length));
          for (s in D.filter) !(i = he[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
            value: r,
            type: s,
            matches: i
          }), a = a.slice(r.length));
          if (!r) break;
        }
        return n ? a.length : a ? t.error(e) : U(e, u).slice(0);
      }, k = t.compile = function (e, t) {
        var n,
          r = [],
          i = [],
          o = Y[e + " "];
        if (!o) {
          for (t || (t = _(e)), n = t.length; n--;) o = x(t[n]), o[W] ? r.push(o) : i.push(o);
          o = Y(e, b(i, r)), o.selector = e;
        }
        return o;
      }, S = t.select = function (e, t, n, r) {
        var i,
          o,
          s,
          a,
          u,
          l = "function" == typeof e && e,
          c = !r && _(e = l.selector || e);
        if (n = n || [], 1 === c.length) {
          if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && M && D.relative[o[1].type]) {
            if (t = (D.find.ID(s.matches[0].replace(xe, be), t) || [])[0], !t) return n;
            l && (t = t.parentNode), e = e.slice(o.shift().value.length);
          }
          for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !D.relative[a = s.type]);) if ((u = D.find[a]) && (r = u(s.matches[0].replace(xe, be), ye.test(o[0].type) && f(t.parentNode) || t))) {
            if (o.splice(i, 1), e = r.length && h(o), !e) return J.apply(n, r), n;
            break;
          }
        }
        return (l || k(e, c))(r, t, !M, n, !t || ye.test(e) && f(t.parentNode) || t), n;
      }, T.sortStable = W.split("").sort(X).join("") === W, T.detectDuplicates = !!j, H(), T.sortDetached = i(function (e) {
        return 1 & e.compareDocumentPosition(P.createElement("fieldset"));
      }), i(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || o("type|href|height|width", function (e, t, n) {
        return n ? undefined : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), T.attributes && i(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || o("value", function (e, t, n) {
        return n || "input" !== e.nodeName.toLowerCase() ? undefined : e.defaultValue;
      }), i(function (e) {
        return null == e.getAttribute("disabled");
      }) || o(te, function (e, t, n) {
        var r;
        return n ? undefined : e[t] === true ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }), t;
    }(n);
    ye.find = De, ye.expr = De.selectors, ye.expr[":"] = ye.expr.pseudos, ye.uniqueSort = ye.unique = De.uniqueSort, ye.text = De.getText, ye.isXMLDoc = De.isXML, ye.contains = De.contains, ye.escapeSelector = De.escape;
    var Ce = function (e, t, n) {
        for (var r = [], i = undefined !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
          if (i && ye(e).is(n)) break;
          r.push(e);
        }
        return r;
      },
      Ee = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      _e = ye.expr.match.needsContext,
      ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      Se = /^.[^:#\[\.,]*$/;
    ye.filter = function (e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ye.find.matchesSelector(r, e) ? [r] : [] : ye.find.matches(e, ye.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, ye.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e) return this.pushStack(ye(e).filter(function () {
          for (t = 0; r > t; t++) if (ye.contains(i[t], this)) return true;
        }));
        for (n = this.pushStack([]), t = 0; r > t; t++) ye.find(e, i[t], n);
        return r > 1 ? ye.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(u(this, e || [], false));
      },
      not: function (e) {
        return this.pushStack(u(this, e || [], true));
      },
      is: function (e) {
        return !!u(this, "string" == typeof e && _e.test(e) ? ye(e) : e || [], false).length;
      }
    });
    var Le,
      Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      je = ye.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || Le, "string" == typeof e) {
          if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ne.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
            if (t = t instanceof ye ? t[0] : t, ye.merge(this, ye.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : oe, true)), ke.test(r[1]) && ye.isPlainObject(t)) for (r in t) ye.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return i = oe.getElementById(r[2]), i && (this[0] = i, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : ye.isFunction(e) ? undefined !== n.ready ? n.ready(e) : e(ye) : ye.makeArray(e, this);
      };
    je.prototype = ye.fn, Le = ye(oe);
    var He = /^(?:parents|prev(?:Until|All))/,
      Pe = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
    ye.fn.extend({
      has: function (e) {
        var t = ye(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; n > e; e++) if (ye.contains(this, t[e])) return true;
        });
      },
      closest: function (e, t) {
        var n,
          r = 0,
          i = this.length,
          o = [],
          s = "string" != typeof e && ye(e);
        if (!_e.test(e)) for (; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ye.find.matchesSelector(n, e))) {
          o.push(n);
          break;
        }
        return this.pushStack(o.length > 1 ? ye.uniqueSort(o) : o);
      },
      index: function (e) {
        return e ? "string" == typeof e ? ce.call(ye(e), this[0]) : ce.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function (e, t) {
        return this.pushStack(ye.uniqueSort(ye.merge(this.get(), ye(e, t))));
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }), ye.each({
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function (e) {
        return Ce(e, "parentNode");
      },
      parentsUntil: function (e, t, n) {
        return Ce(e, "parentNode", n);
      },
      next: function (e) {
        return l(e, "nextSibling");
      },
      prev: function (e) {
        return l(e, "previousSibling");
      },
      nextAll: function (e) {
        return Ce(e, "nextSibling");
      },
      prevAll: function (e) {
        return Ce(e, "previousSibling");
      },
      nextUntil: function (e, t, n) {
        return Ce(e, "nextSibling", n);
      },
      prevUntil: function (e, t, n) {
        return Ce(e, "previousSibling", n);
      },
      siblings: function (e) {
        return Ee((e.parentNode || {}).firstChild, e);
      },
      children: function (e) {
        return Ee(e.firstChild);
      },
      contents: function (e) {
        return e.contentDocument || ye.merge([], e.childNodes);
      }
    }, function (e, t) {
      ye.fn[e] = function (n, r) {
        var i = ye.map(this, t, n);
        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ye.filter(r, i)), this.length > 1 && (Pe[e] || ye.uniqueSort(i), He.test(e) && i.reverse()), this.pushStack(i);
      };
    });
    var Ae = /[^\x20\t\r\n\f]+/g;
    ye.Callbacks = function (e) {
      e = "string" == typeof e ? c(e) : ye.extend({}, e);
      var t,
        n,
        r,
        i,
        o = [],
        s = [],
        a = -1,
        u = function () {
          for (i = e.once, r = t = true; s.length; a = -1) for (n = s.shift(); ++a < o.length;) o[a].apply(n[0], n[1]) === false && e.stopOnFalse && (a = o.length, n = false);
          e.memory || (n = false), t = false, i && (o = n ? [] : "");
        },
        l = {
          add: function () {
            return o && (n && !t && (a = o.length - 1, s.push(n)), function r(t) {
              ye.each(t, function (t, n) {
                ye.isFunction(n) ? e.unique && l.has(n) || o.push(n) : n && n.length && "string" !== ye.type(n) && r(n);
              });
            }(arguments), n && !t && u()), this;
          },
          remove: function () {
            return ye.each(arguments, function (e, t) {
              for (var n; (n = ye.inArray(t, o, n)) > -1;) o.splice(n, 1), a >= n && a--;
            }), this;
          },
          has: function (e) {
            return e ? ye.inArray(e, o) > -1 : o.length > 0;
          },
          empty: function () {
            return o && (o = []), this;
          },
          disable: function () {
            return i = s = [], o = n = "", this;
          },
          disabled: function () {
            return !o;
          },
          lock: function () {
            return i = s = [], n || t || (o = n = ""), this;
          },
          locked: function () {
            return !!i;
          },
          fireWith: function (e, n) {
            return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this;
          },
          fire: function () {
            return l.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!r;
          }
        };
      return l;
    }, ye.extend({
      Deferred: function (e) {
        var t = [["notify", "progress", ye.Callbacks("memory"), ye.Callbacks("memory"), 2], ["resolve", "done", ye.Callbacks("once memory"), ye.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ye.Callbacks("once memory"), ye.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = {
            state: function () {
              return r;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            "catch": function (e) {
              return i.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return ye.Deferred(function (n) {
                ye.each(t, function (t, r) {
                  var i = ye.isFunction(e[r[4]]) && e[r[4]];
                  o[r[1]](function () {
                    var e = i && i.apply(this, arguments);
                    e && ye.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                  });
                }), e = null;
              }).promise();
            },
            then: function (e, r, i) {
              function o(e, t, r, i) {
                return function () {
                  var a = this,
                    u = arguments,
                    l = function () {
                      var n, l;
                      if (!(s > e)) {
                        if (n = r.apply(a, u), n === t.promise()) throw new TypeError("Thenable self-resolution");
                        l = n && ("object" == typeof n || "function" == typeof n) && n.then, ye.isFunction(l) ? i ? l.call(n, o(s, t, f, i), o(s, t, d, i)) : (s++, l.call(n, o(s, t, f, i), o(s, t, d, i), o(s, t, f, t.notifyWith))) : (r !== f && (a = undefined, u = [n]), (i || t.resolveWith)(a, u));
                      }
                    },
                    c = i ? l : function () {
                      try {
                        l();
                      } catch (n) {
                        ye.Deferred.exceptionHook && ye.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= s && (r !== d && (a = undefined, u = [n]), t.rejectWith(a, u));
                      }
                    };
                  e ? c() : (ye.Deferred.getStackHook && (c.stackTrace = ye.Deferred.getStackHook()), n.setTimeout(c));
                };
              }
              var s = 0;
              return ye.Deferred(function (n) {
                t[0][3].add(o(0, n, ye.isFunction(i) ? i : f, n.notifyWith)), t[1][3].add(o(0, n, ye.isFunction(e) ? e : f)), t[2][3].add(o(0, n, ye.isFunction(r) ? r : d));
              }).promise();
            },
            promise: function (e) {
              return null != e ? ye.extend(e, i) : i;
            }
          },
          o = {};
        return ye.each(t, function (e, n) {
          var s = n[2],
            a = n[5];
          i[n[1]] = s.add, a && s.add(function () {
            r = a;
          }, t[3 - e][2].disable, t[0][2].lock), s.add(n[3].fire), o[n[0]] = function () {
            return o[n[0] + "With"](this === o ? undefined : this, arguments), this;
          }, o[n[0] + "With"] = s.fireWith;
        }), i.promise(o), e && e.call(o, o), o;
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          i = ae.call(arguments),
          o = ye.Deferred(),
          s = function (e) {
            return function (n) {
              r[e] = this, i[e] = arguments.length > 1 ? ae.call(arguments) : n, --t || o.resolveWith(r, i);
            };
          };
        if (1 >= t && (h(e, o.done(s(n)).resolve, o.reject), "pending" === o.state() || ye.isFunction(i[n] && i[n].then))) return o.then();
        for (; n--;) h(i[n], s(n), o.reject);
        return o.promise();
      }
    });
    var Me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ye.Deferred.exceptionHook = function (e, t) {
      n.console && n.console.warn && e && Me.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, ye.readyException = function (e) {
      n.setTimeout(function () {
        throw e;
      });
    };
    var Re = ye.Deferred();
    ye.fn.ready = function (e) {
      return Re.then(e)["catch"](function (e) {
        ye.readyException(e);
      }), this;
    }, ye.extend({
      isReady: false,
      readyWait: 1,
      holdReady: function (e) {
        e ? ye.readyWait++ : ye.ready(true);
      },
      ready: function (e) {
        (e === true ? --ye.readyWait : ye.isReady) || (ye.isReady = true, e !== true && --ye.readyWait > 0 || Re.resolveWith(oe, [ye]));
      }
    }), ye.ready.then = Re.then, "complete" === oe.readyState || "loading" !== oe.readyState && !oe.documentElement.doScroll ? n.setTimeout(ye.ready) : (oe.addEventListener("DOMContentLoaded", p), n.addEventListener("load", p));
    var qe = function (e, t, n, r, i, o, s) {
        var a = 0,
          u = e.length,
          l = null == n;
        if ("object" === ye.type(n)) {
          i = true;
          for (a in n) qe(e, t, a, n[a], true, o, s);
        } else if (undefined !== r && (i = true, ye.isFunction(r) || (s = true), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
          return l.call(ye(e), n);
        })), t)) for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
      },
      Oe = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
    m.uid = 1, m.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return t || (t = {}, Oe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: true
        }))), t;
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[ye.camelCase(t)] = n;else for (r in t) i[ye.camelCase(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return undefined === t ? this.cache(e) : e[this.expando] && e[this.expando][ye.camelCase(t)];
      },
      access: function (e, t, n) {
        return undefined === t || t && "string" == typeof t && undefined === n ? this.get(e, t) : (this.set(e, t, n), undefined !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (undefined !== r) {
          if (undefined !== t) {
            ye.isArray(t) ? t = t.map(ye.camelCase) : (t = ye.camelCase(t), t = t in r ? [t] : t.match(Ae) || []), n = t.length;
            for (; n--;) delete r[t[n]];
          }
          (undefined === t || ye.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = undefined : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return undefined !== t && !ye.isEmptyObject(t);
      }
    };
    var Fe = new m(),
      We = new m(),
      Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Be = /[A-Z]/g;
    ye.extend({
      hasData: function (e) {
        return We.hasData(e) || Fe.hasData(e);
      },
      data: function (e, t, n) {
        return We.access(e, t, n);
      },
      removeData: function (e, t) {
        We.remove(e, t);
      },
      _data: function (e, t, n) {
        return Fe.access(e, t, n);
      },
      _removeData: function (e, t) {
        Fe.remove(e, t);
      }
    }), ye.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          s = o && o.attributes;
        if (undefined === e) {
          if (this.length && (i = We.get(o), 1 === o.nodeType && !Fe.get(o, "hasDataAttrs"))) {
            for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = ye.camelCase(r.slice(5)), v(o, r, i[r])));
            Fe.set(o, "hasDataAttrs", true);
          }
          return i;
        }
        return "object" == typeof e ? this.each(function () {
          We.set(this, e);
        }) : qe(this, function (t) {
          var n;
          if (o && undefined === t) {
            if (n = We.get(o, e), undefined !== n) return n;
            if (n = v(o, e), undefined !== n) return n;
          } else this.each(function () {
            We.set(this, e, t);
          });
        }, null, t, arguments.length > 1, null, true);
      },
      removeData: function (e) {
        return this.each(function () {
          We.remove(this, e);
        });
      }
    }), ye.extend({
      queue: function (e, t, n) {
        var r;
        return e ? (t = (t || "fx") + "queue", r = Fe.get(e, t), n && (!r || ye.isArray(n) ? r = Fe.access(e, t, ye.makeArray(n)) : r.push(n)), r || []) : undefined;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ye.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ye._queueHooks(e, t),
          s = function () {
            ye.dequeue(e, t);
          };
        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return Fe.get(e, n) || Fe.access(e, n, {
          empty: ye.Callbacks("once memory").add(function () {
            Fe.remove(e, [t + "queue", n]);
          })
        });
      }
    }), ye.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ye.queue(this[0], "fx") : undefined === t ? this : this.each(function () {
          var n = ye.queue(this, "fx", t);
          ye._queueHooks(this, "fx"), true && "inprogress" !== n[0] && ye.dequeue(this, "fx");
        });
      },
      dequeue: function (e) {
        return this.each(function () {
          ye.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ye.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --r || i.resolveWith(o, [o]);
          };
        for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; s--;) n = Fe.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
        return a(), i.promise(t);
      }
    });
    var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ze = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
      Ue = ["Top", "Right", "Bottom", "Left"],
      Ye = function (e, t) {
        return e = t || e, "none" === e.style.display || "" === e.style.display && ye.contains(e.ownerDocument, e) && "none" === ye.css(e, "display");
      },
      Xe = function (e, t, n, r) {
        var i,
          o,
          s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i;
      },
      Ge = {};
    ye.fn.extend({
      show: function () {
        return b(this, true);
      },
      hide: function () {
        return b(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          Ye(this) ? ye(this).show() : ye(this).hide();
        });
      }
    });
    var Ke = /^(?:checkbox|radio)$/i,
      Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      Qe = /^$|\/(?:java|ecma)script/i,
      Je = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td;
    var Ze = /<|&#?\w+;/;
    !function () {
      var e = oe.createDocumentFragment(),
        t = e.appendChild(oe.createElement("div")),
        n = oe.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ge.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ge.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue;
    }();
    var et = oe.documentElement,
      tt = /^key/,
      nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rt = /^([^.]*)(?:\.(.+)|)/;
    ye.event = {
      global: {},
      add: function (e, t, n, r, i) {
        var o,
          s,
          a,
          u,
          l,
          c,
          f,
          d,
          h,
          p,
          m,
          g = Fe.get(e);
        if (g) for (n.handler && (o = n, n = o.handler, i = o.selector), i && ye.find.matchesSelector(et, i), n.guid || (n.guid = ye.guid++), (u = g.events) || (u = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
          return "undefined" != typeof ye && ye.event.triggered !== t.type ? ye.event.dispatch.apply(e, arguments) : undefined;
        }), t = (t || "").match(Ae) || [""], l = t.length; l--;) a = rt.exec(t[l]) || [], h = m = a[1], p = (a[2] || "").split(".").sort(), h && (f = ye.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = ye.event.special[h] || {}, c = ye.extend({
          type: h,
          origType: m,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && ye.expr.match.needsContext.test(i),
          namespace: p.join(".")
        }, o), (d = u[h]) || (d = u[h] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, p, s) !== false || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), ye.event.global[h] = true);
      },
      remove: function (e, t, n, r, i) {
        var o,
          s,
          a,
          u,
          l,
          c,
          f,
          d,
          h,
          p,
          m,
          g = Fe.hasData(e) && Fe.get(e);
        if (g && (u = g.events)) {
          for (t = (t || "").match(Ae) || [""], l = t.length; l--;) if (a = rt.exec(t[l]) || [], h = m = a[1], p = (a[2] || "").split(".").sort(), h) {
            for (f = ye.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, d = u[h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !i && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
            s && !d.length && (f.teardown && f.teardown.call(e, p, g.handle) !== false || ye.removeEvent(e, h, g.handle), delete u[h]);
          } else for (h in u) ye.event.remove(e, h + t[l], n, r, true);
          ye.isEmptyObject(u) && Fe.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a = ye.event.fix(e),
          u = new Array(arguments.length),
          l = (Fe.get(this, "events") || {})[a.type] || [],
          c = ye.event.special[a.type] || {};
        for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
        if (a.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, a) !== false) {
          for (s = ye.event.handlers.call(this, a, l), t = 0; (i = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) (!a.rnamespace || a.rnamespace.test(o.namespace)) && (a.handleObj = o, a.data = o.data, r = ((ye.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u), undefined !== r && (a.result = r) === false && (a.preventDefault(), a.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          i,
          o,
          s,
          a = [],
          u = t.delegateCount,
          l = e.target;
        if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || l.disabled !== true)) {
          for (o = [], s = {}, n = 0; u > n; n++) r = t[n], i = r.selector + " ", undefined === s[i] && (s[i] = r.needsContext ? ye(i, this).index(l) > -1 : ye.find(i, this, null, [l]).length), s[i] && o.push(r);
          o.length && a.push({
            elem: l,
            handlers: o
          });
        }
        return l = this, u < t.length && a.push({
          elem: l,
          handlers: t.slice(u)
        }), a;
      },
      addProp: function (e, t) {
        Object.defineProperty(ye.Event.prototype, e, {
          enumerable: true,
          configurable: true,
          get: ye.isFunction(t) ? function () {
            return this.originalEvent ? t(this.originalEvent) : undefined;
          } : function () {
            return this.originalEvent ? this.originalEvent[e] : undefined;
          },
          set: function (t) {
            Object.defineProperty(this, e, {
              enumerable: true,
              configurable: true,
              writable: true,
              value: t
            });
          }
        });
      },
      fix: function (e) {
        return e[ye.expando] ? e : new ye.Event(e);
      },
      special: {
        load: {
          noBubble: true
        },
        focus: {
          trigger: function () {
            return this !== _() && this.focus ? (this.focus(), false) : undefined;
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function () {
            return this === _() && this.blur ? (this.blur(), false) : undefined;
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type && this.click && ye.nodeName(this, "input") ? (this.click(), false) : undefined;
          },
          _default: function (e) {
            return ye.nodeName(e.target, "a");
          }
        },
        beforeunload: {
          postDispatch: function (e) {
            undefined !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }, ye.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, ye.Event = function (e, t) {
      return this instanceof ye.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || undefined === e.defaultPrevented && e.returnValue === false ? C : E, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ye.extend(this, t), this.timeStamp = e && e.timeStamp || ye.now(), void (this[ye.expando] = true)) : new ye.Event(e, t);
    }, ye.Event.prototype = {
      constructor: ye.Event,
      isDefaultPrevented: E,
      isPropagationStopped: E,
      isImmediatePropagationStopped: E,
      isSimulated: false,
      preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = C, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = C, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = C, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, ye.each({
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      "char": true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
      which: function (e) {
        var t = e.button;
        return null == e.which && tt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && undefined !== t && nt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
      }
    }, ye.event.addProp), ye.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      ye.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function (e) {
          var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
          return (!i || i !== r && !ye.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
        }
      };
    }), ye.fn.extend({
      on: function (e, t, n, r) {
        return k(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return k(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ye(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (t === false || "function" == typeof t) && (n = t, t = undefined), n === false && (n = E), this.each(function () {
          ye.event.remove(this, e, n, t);
        });
      }
    });
    var it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      ot = /<script|<style|<link/i,
      st = /checked\s*(?:[^=]|=\s*.checked.)/i,
      at = /^true\/(.*)/,
      ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ye.extend({
      htmlPrefilter: function (e) {
        return e.replace(it, "<$1></$2>");
      },
      clone: function (e, t, n) {
        var r,
          i,
          o,
          s,
          a = e.cloneNode(true),
          u = ye.contains(e.ownerDocument, e);
        if (!(ge.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ye.isXMLDoc(e))) for (s = w(a), o = w(e), r = 0, i = o.length; i > r; r++) H(o[r], s[r]);
        if (t) if (n) for (o = o || w(e), s = s || w(a), r = 0, i = o.length; i > r; r++) j(o[r], s[r]);else j(e, a);
        return s = w(a, "script"), s.length > 0 && T(s, !u && w(e, "script")), a;
      },
      cleanData: function (e) {
        for (var t, n, r, i = ye.event.special, o = 0; undefined !== (n = e[o]); o++) if (Oe(n)) {
          if (t = n[Fe.expando]) {
            if (t.events) for (r in t.events) i[r] ? ye.event.remove(n, r) : ye.removeEvent(n, r, t.handle);
            n[Fe.expando] = undefined;
          }
          n[We.expando] && (n[We.expando] = undefined);
        }
      }
    }), ye.fn.extend({
      detach: function (e) {
        return A(this, e, true);
      },
      remove: function (e) {
        return A(this, e);
      },
      text: function (e) {
        return qe(this, function (e) {
          return undefined === e ? ye.text(this) : this.empty().each(function () {
            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e);
          });
        }, null, e, arguments.length);
      },
      append: function () {
        return P(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = S(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function () {
        return P(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = S(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return P(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return P(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ye.cleanData(w(e, false)), e.textContent = "");
        return this;
      },
      clone: function (e, t) {
        return e = null == e ? false : e, t = null == t ? e : t, this.map(function () {
          return ye.clone(this, e, t);
        });
      },
      html: function (e) {
        return qe(this, function (e) {
          var t = this[0] || {},
            n = 0,
            r = this.length;
          if (undefined === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !ot.test(e) && !Je[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = ye.htmlPrefilter(e);
            try {
              for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ye.cleanData(w(t, false)), t.innerHTML = e);
              t = 0;
            } catch (i) {}
          }
          t && this.empty().append(e);
        }, null, e, arguments.length);
      },
      replaceWith: function () {
        var e = [];
        return P(this, arguments, function (t) {
          var n = this.parentNode;
          ye.inArray(this, e) < 0 && (ye.cleanData(w(this)), n && n.replaceChild(t, this));
        }, e);
      }
    }), ye.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      ye.fn[e] = function (e) {
        for (var n, r = [], i = ye(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(true), ye(i[s])[t](n), le.apply(r, n.get());
        return this.pushStack(r);
      };
    });
    var lt = /^margin/,
      ct = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"),
      ft = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = n), t.getComputedStyle(e);
      };
    !function () {
      function e() {
        if (a) {
          a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", et.appendChild(s);
          var e = n.getComputedStyle(a);
          t = "1%" !== e.top, o = "2px" === e.marginLeft, r = "4px" === e.width, a.style.marginRight = "50%", i = "4px" === e.marginRight, et.removeChild(s), a = null;
        }
      }
      var t,
        r,
        i,
        o,
        s = oe.createElement("div"),
        a = oe.createElement("div");
      a.style && (a.style.backgroundClip = "content-box", a.cloneNode(true).style.backgroundClip = "", ge.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ye.extend(ge, {
        pixelPosition: function () {
          return e(), t;
        },
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelMarginRight: function () {
          return e(), i;
        },
        reliableMarginLeft: function () {
          return e(), o;
        }
      }));
    }();
    var dt = /^(none|table(?!-c[ea]).+)/,
      ht = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      pt = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      mt = ["Webkit", "Moz", "ms"],
      gt = oe.createElement("div").style;
    ye.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = M(e, "opacity");
              return "" === n ? "1" : n;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: true,
        columnCount: true,
        fillOpacity: true,
        flexGrow: true,
        flexShrink: true,
        fontWeight: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        widows: true,
        zIndex: true,
        zoom: true
      },
      cssProps: {
        "float": "cssFloat"
      },
      style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
            o,
            s,
            a = ye.camelCase(t),
            u = e.style;
          return t = ye.cssProps[a] || (ye.cssProps[a] = q(a) || a), s = ye.cssHooks[t] || ye.cssHooks[a], undefined === n ? s && "get" in s && undefined !== (i = s.get(e, false, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = ze.exec(n)) && i[1] && (n = y(e, t, i), o = "number"), void (null != n && n === n && ("number" === o && (n += i && i[3] || (ye.cssNumber[a] ? "" : "px")), ge.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && undefined === (n = s.set(e, n, r)) || (u[t] = n))));
        }
      },
      css: function (e, t, n, r) {
        var i,
          o,
          s,
          a = ye.camelCase(t);
        return t = ye.cssProps[a] || (ye.cssProps[a] = q(a) || a), s = ye.cssHooks[t] || ye.cssHooks[a], s && "get" in s && (i = s.get(e, true, n)), undefined === i && (i = M(e, t, r)), "normal" === i && t in pt && (i = pt[t]), "" === n || n ? (o = parseFloat(i), n === true || isFinite(o) ? o || 0 : i) : i;
      }
    }), ye.each(["height", "width"], function (e, t) {
      ye.cssHooks[t] = {
        get: function (e, n, r) {
          return n ? !dt.test(ye.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? W(e, t, r) : Xe(e, ht, function () {
            return W(e, t, r);
          }) : undefined;
        },
        set: function (e, n, r) {
          var i,
            o = r && ft(e),
            s = r && F(e, t, r, "border-box" === ye.css(e, "boxSizing", false, o), o);
          return s && (i = ze.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = ye.css(e, t)), O(e, n, s);
        }
      };
    }), ye.cssHooks.marginLeft = R(ge.reliableMarginLeft, function (e, t) {
      return t ? (parseFloat(M(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + "px" : undefined;
    }), ye.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      ye.cssHooks[e + t] = {
        expand: function (n) {
          for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Ue[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        }
      }, lt.test(e) || (ye.cssHooks[e + t].set = O);
    }), ye.fn.extend({
      css: function (e, t) {
        return qe(this, function (e, t, n) {
          var r,
            i,
            o = {},
            s = 0;
          if (ye.isArray(t)) {
            for (r = ft(e), i = t.length; i > s; s++) o[t[s]] = ye.css(e, t[s], false, r);
            return o;
          }
          return undefined !== n ? ye.style(e, t, n) : ye.css(e, t);
        }, e, t, arguments.length > 1);
      }
    }), ye.Tween = I, I.prototype = {
      constructor: I,
      init: function (e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || ye.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ye.cssNumber[n] ? "" : "px");
      },
      cur: function () {
        var e = I.propHooks[this.prop];
        return e && e.get ? e.get(this) : I.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = I.propHooks[this.prop];
        return this.options.duration ? this.pos = t = ye.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this;
      }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ye.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0);
        },
        set: function (e) {
          ye.fx.step[e.prop] ? ye.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ye.cssProps[e.prop]] && !ye.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ye.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, ye.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, ye.fx = I.prototype.init, ye.fx.step = {};
    var vt,
      yt,
      xt = /^(?:toggle|show|hide)$/,
      bt = /queueHooks$/;
    ye.Animation = ye.extend(G, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return y(n.elem, e, ze.exec(t), n), n;
        }]
      },
      tweener: function (e, t) {
        ye.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
        for (var n, r = 0, i = e.length; i > r; r++) n = e[r], G.tweeners[n] = G.tweeners[n] || [], G.tweeners[n].unshift(t);
      },
      prefilters: [Y],
      prefilter: function (e, t) {
        t ? G.prefilters.unshift(e) : G.prefilters.push(e);
      }
    }), ye.speed = function (e, t, n) {
      var r = e && "object" == typeof e ? ye.extend({}, e) : {
        complete: n || !n && t || ye.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !ye.isFunction(t) && t
      };
      return ye.fx.off || oe.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ye.fx.speeds ? r.duration = ye.fx.speeds[r.duration] : r.duration = ye.fx.speeds._default), (null == r.queue || r.queue === true) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
        ye.isFunction(r.old) && r.old.call(this), r.queue && ye.dequeue(this, r.queue);
      }, r;
    }, ye.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(Ye).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = ye.isEmptyObject(e),
          o = ye.speed(t, n, r),
          s = function () {
            var t = G(this, ye.extend({}, e), o);
            (i || Fe.get(this, "finish")) && t.stop(true);
          };
        return s.finish = s, i || o.queue === false ? this.each(s) : this.queue(o.queue, s);
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return "string" != typeof e && (n = t, t = e, e = undefined), t && e !== false && this.queue(e || "fx", []), this.each(function () {
          var t = true,
            i = null != e && e + "queueHooks",
            o = ye.timers,
            s = Fe.get(this);
          if (i) s[i] && s[i].stop && r(s[i]);else for (i in s) s[i] && s[i].stop && bt.test(i) && r(s[i]);
          for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = false, o.splice(i, 1));
          (t || !n) && ye.dequeue(this, e);
        });
      },
      finish: function (e) {
        return e !== false && (e = e || "fx"), this.each(function () {
          var t,
            n = Fe.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = ye.timers,
            s = r ? r.length : 0;
          for (n.finish = true, ye.queue(this, e, []), i && i.stop && i.stop.call(this, true), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(true), o.splice(t, 1));
          for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
          delete n.finish;
        });
      }
    }), ye.each(["toggle", "show", "hide"], function (e, t) {
      var n = ye.fn[t];
      ye.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, true), e, r, i);
      };
    }), ye.each({
      slideDown: z("show"),
      slideUp: z("hide"),
      slideToggle: z("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, t) {
      ye.fn[e] = function (e, n, r) {
        return this.animate(t, e, n, r);
      };
    }), ye.timers = [], ye.fx.tick = function () {
      var e,
        t = 0,
        n = ye.timers;
      for (vt = ye.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
      n.length || ye.fx.stop(), vt = undefined;
    }, ye.fx.timer = function (e) {
      ye.timers.push(e), e() ? ye.fx.start() : ye.timers.pop();
    }, ye.fx.interval = 13, ye.fx.start = function () {
      yt || (yt = n.requestAnimationFrame ? n.requestAnimationFrame(B) : n.setInterval(ye.fx.tick, ye.fx.interval));
    }, ye.fx.stop = function () {
      n.cancelAnimationFrame ? n.cancelAnimationFrame(yt) : n.clearInterval(yt), yt = null;
    }, ye.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, ye.fn.delay = function (e, t) {
      return e = ye.fx ? ye.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, r) {
        var i = n.setTimeout(t, e);
        r.stop = function () {
          n.clearTimeout(i);
        };
      });
    }, function () {
      var e = oe.createElement("input"),
        t = oe.createElement("select"),
        n = t.appendChild(oe.createElement("option"));
      e.type = "checkbox", ge.checkOn = "" !== e.value, ge.optSelected = n.selected, e = oe.createElement("input"), e.value = "t", e.type = "radio", ge.radioValue = "t" === e.value;
    }();
    var wt,
      Tt = ye.expr.attrHandle;
    ye.fn.extend({
      attr: function (e, t) {
        return qe(this, ye.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          ye.removeAttr(this, e);
        });
      }
    }), ye.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        return 3 !== o && 8 !== o && 2 !== o ? "undefined" == typeof e.getAttribute ? ye.prop(e, t, n) : (1 === o && ye.isXMLDoc(e) || (i = ye.attrHooks[t.toLowerCase()] || (ye.expr.match.bool.test(t) ? wt : undefined)), undefined !== n ? null === n ? void ye.removeAttr(e, t) : i && "set" in i && undefined !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ye.find.attr(e, t), null == r ? undefined : r)) : undefined;
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!ge.radioValue && "radio" === t && ye.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(Ae);
        if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n);
      }
    }), wt = {
      set: function (e, t, n) {
        return t === false ? ye.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, ye.each(ye.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = Tt[t] || ye.find.attr;
      Tt[t] = function (e, t, r) {
        var i,
          o,
          s = t.toLowerCase();
        return r || (o = Tt[s], Tt[s] = i, i = null != n(e, t, r) ? s : null, Tt[s] = o), i;
      };
    });
    var Dt = /^(?:input|select|textarea|button)$/i,
      Ct = /^(?:a|area)$/i;
    ye.fn.extend({
      prop: function (e, t) {
        return qe(this, ye.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[ye.propFix[e] || e];
        });
      }
    }), ye.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        return 3 !== o && 8 !== o && 2 !== o ? (1 === o && ye.isXMLDoc(e) || (t = ye.propFix[t] || t, i = ye.propHooks[t]), undefined !== n ? i && "set" in i && undefined !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : undefined;
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ye.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : Dt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), ge.optSelected || (ye.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function (e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), ye.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      ye.propFix[this.toLowerCase()] = this;
    }), ye.fn.extend({
      addClass: function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          u = 0;
        if (ye.isFunction(e)) return this.each(function (t) {
          ye(this).addClass(e.call(this, t, V(this)));
        });
        if ("string" == typeof e && e) for (t = e.match(Ae) || []; n = this[u++];) if (i = V(n), r = 1 === n.nodeType && " " + K(i) + " ") {
          for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          a = K(r), i !== a && n.setAttribute("class", a);
        }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          u = 0;
        if (ye.isFunction(e)) return this.each(function (t) {
          ye(this).removeClass(e.call(this, t, V(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e) for (t = e.match(Ae) || []; n = this[u++];) if (i = V(n), r = 1 === n.nodeType && " " + K(i) + " ") {
          for (s = 0; o = t[s++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
          a = K(r), i !== a && n.setAttribute("class", a);
        }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ye.isFunction(e) ? this.each(function (n) {
          ye(this).toggleClass(e.call(this, n, V(this), t), t);
        }) : this.each(function () {
          var t, r, i, o;
          if ("string" === n) for (r = 0, i = ye(this), o = e.match(Ae) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);else (undefined === e || "boolean" === n) && (t = V(this), t && Fe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === false ? "" : Fe.get(this, "__className__") || ""));
        });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + K(V(n)) + " ").indexOf(t) > -1) return true;
        return false;
      }
    });
    var Et = /\r/g;
    ye.fn.extend({
      val: function (e) {
        var t,
          n,
          r,
          i = this[0];
        return arguments.length ? (r = ye.isFunction(e), this.each(function (n) {
          var i;
          1 === this.nodeType && (i = r ? e.call(this, n, ye(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ye.isArray(i) && (i = ye.map(i, function (e) {
            return null == e ? "" : e + "";
          })), t = ye.valHooks[this.type] || ye.valHooks[this.nodeName.toLowerCase()], t && "set" in t && undefined !== t.set(this, i, "value") || (this.value = i));
        })) : i ? (t = ye.valHooks[i.type] || ye.valHooks[i.nodeName.toLowerCase()], t && "get" in t && undefined !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Et, "") : null == n ? "" : n)) : undefined;
      }
    }), ye.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ye.find.attr(e, "value");
            return null != t ? t : K(ye.text(e));
          }
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              u = s ? o + 1 : i.length;
            for (r = 0 > o ? u : s ? o : 0; u > r; r++) if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !ye.nodeName(n.parentNode, "optgroup"))) {
              if (t = ye(n).val(), s) return t;
              a.push(t);
            }
            return a;
          },
          set: function (e, t) {
            for (var n, r, i = e.options, o = ye.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = ye.inArray(ye.valHooks.option.get(r), o) > -1) && (n = true);
            return n || (e.selectedIndex = -1), o;
          }
        }
      }
    }), ye.each(["radio", "checkbox"], function () {
      ye.valHooks[this] = {
        set: function (e, t) {
          return ye.isArray(t) ? e.checked = ye.inArray(ye(e).val(), t) > -1 : undefined;
        }
      }, ge.checkOn || (ye.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    });
    var _t = /^(?:focusinfocus|focusoutblur)$/;
    ye.extend(ye.event, {
      trigger: function (e, t, r, i) {
        var o,
          s,
          a,
          u,
          l,
          c,
          f,
          d = [r || oe],
          h = he.call(e, "type") ? e.type : e,
          p = he.call(e, "namespace") ? e.namespace.split(".") : [];
        if (s = a = r = r || oe, 3 !== r.nodeType && 8 !== r.nodeType && !_t.test(h + ye.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, e = e[ye.expando] ? e : new ye.Event(h, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = r), t = null == t ? [e] : ye.makeArray(t, [e]), f = ye.event.special[h] || {}, i || !f.trigger || f.trigger.apply(r, t) !== false)) {
          if (!i && !f.noBubble && !ye.isWindow(r)) {
            for (u = f.delegateType || h, _t.test(u + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
            a === (r.ownerDocument || oe) && d.push(a.defaultView || a.parentWindow || n);
          }
          for (o = 0; (s = d[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u : f.bindType || h, c = (Fe.get(s, "events") || {})[e.type] && Fe.get(s, "handle"), c && c.apply(s, t), c = l && s[l], c && c.apply && Oe(s) && (e.result = c.apply(s, t), e.result === false && e.preventDefault());
          return e.type = h, i || e.isDefaultPrevented() || f._default && f._default.apply(d.pop(), t) !== false || !Oe(r) || l && ye.isFunction(r[h]) && !ye.isWindow(r) && (a = r[l], a && (r[l] = null), ye.event.triggered = h, r[h](), ye.event.triggered = undefined, a && (r[l] = a)), e.result;
        }
      },
      simulate: function (e, t, n) {
        var r = ye.extend(new ye.Event(), n, {
          type: e,
          isSimulated: true
        });
        ye.event.trigger(r, null, t);
      }
    }), ye.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ye.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? ye.event.trigger(e, t, n, true) : undefined;
      }
    }), ye.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      ye.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }), ye.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), ge.focusin = "onfocusin" in n, ge.focusin || ye.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var n = function (e) {
        ye.event.simulate(t, e.target, ye.event.fix(e));
      };
      ye.event.special[t] = {
        setup: function () {
          var r = this.ownerDocument || this,
            i = Fe.access(r, t);
          i || r.addEventListener(e, n, true), Fe.access(r, t, (i || 0) + 1);
        },
        teardown: function () {
          var r = this.ownerDocument || this,
            i = Fe.access(r, t) - 1;
          i ? Fe.access(r, t, i) : (r.removeEventListener(e, n, true), Fe.remove(r, t));
        }
      };
    });
    var kt = n.location,
      St = ye.now(),
      Lt = /\?/;
    ye.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = new n.DOMParser().parseFromString(e, "text/xml");
      } catch (r) {
        t = undefined;
      }
      return (!t || t.getElementsByTagName("parsererror").length) && ye.error("Invalid XML: " + e), t;
    };
    var Nt = /\[\]$/,
      jt = /\r?\n/g,
      Ht = /^(?:submit|button|image|reset|file)$/i,
      Pt = /^(?:input|select|textarea|keygen)/i;
    ye.param = function (e, t) {
      var n,
        r = [],
        i = function (e, t) {
          var n = ye.isFunction(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
      if (ye.isArray(e) || e.jquery && !ye.isPlainObject(e)) ye.each(e, function () {
        i(this.name, this.value);
      });else for (n in e) Q(n, e[n], t, i);
      return r.join("&");
    }, ye.fn.extend({
      serialize: function () {
        return ye.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ye.prop(this, "elements");
          return e ? ye.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !ye(this).is(":disabled") && Pt.test(this.nodeName) && !Ht.test(e) && (this.checked || !Ke.test(e));
        }).map(function (e, t) {
          var n = ye(this).val();
          return null == n ? null : ye.isArray(n) ? ye.map(n, function (e) {
            return {
              name: t.name,
              value: e.replace(jt, "\r\n")
            };
          }) : {
            name: t.name,
            value: n.replace(jt, "\r\n")
          };
        }).get();
      }
    });
    var At = /%20/g,
      Mt = /#.*$/,
      Rt = /([?&])_=[^&]*/,
      qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ft = /^(?:GET|HEAD)$/,
      Wt = /^\/\//,
      It = {},
      Bt = {},
      $t = "*/".concat("*"),
      zt = oe.createElement("a");
    zt.href = kt.href, ye.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: kt.href,
        type: "GET",
        isLocal: Ot.test(kt.protocol),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": $t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": true,
          "text json": JSON.parse,
          "text xml": ye.parseXML
        },
        flatOptions: {
          url: true,
          context: true
        }
      },
      ajaxSetup: function (e, t) {
        return t ? ee(ee(e, ye.ajaxSettings), t) : ee(ye.ajaxSettings, e);
      },
      ajaxPrefilter: J(It),
      ajaxTransport: J(Bt),
      ajax: function (e, t) {
        function r(e, t, r, a) {
          var l,
            d,
            h,
            b,
            w,
            T = t;
          c || (c = true, u && n.clearTimeout(u), i = undefined, s = a || "", D.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, r && (b = te(p, D, r)), b = ne(p, b, D, l), l ? (p.ifModified && (w = D.getResponseHeader("Last-Modified"), w && (ye.lastModified[o] = w), w = D.getResponseHeader("etag"), w && (ye.etag[o] = w)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, d = b.data, h = b.error, l = !h)) : (h = T, (e || !T) && (T = "error", 0 > e && (e = 0))), D.status = e, D.statusText = (t || T) + "", l ? v.resolveWith(m, [d, T, D]) : v.rejectWith(m, [D, T, h]), D.statusCode(x), x = undefined, f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [D, p, l ? d : h]), y.fireWith(m, [D, T]), f && (g.trigger("ajaxComplete", [D, p]), --ye.active || ye.event.trigger("ajaxStop")));
        }
        "object" == typeof e && (t = e, e = undefined), t = t || {};
        var i,
          o,
          s,
          a,
          u,
          l,
          c,
          f,
          d,
          h,
          p = ye.ajaxSetup({}, t),
          m = p.context || p,
          g = p.context && (m.nodeType || m.jquery) ? ye(m) : ye.event,
          v = ye.Deferred(),
          y = ye.Callbacks("once memory"),
          x = p.statusCode || {},
          b = {},
          w = {},
          T = "canceled",
          D = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!a) for (a = {}; t = qt.exec(s);) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return c ? s : null;
            },
            setRequestHeader: function (e, t) {
              return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this;
            },
            overrideMimeType: function (e) {
              return null == c && (p.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e) if (c) D.always(e[D.status]);else for (t in e) x[t] = [x[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return i && i.abort(t), r(0, t), this;
            }
          };
        if (v.promise(D), p.url = ((e || p.url || kt.href) + "").replace(Wt, kt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Ae) || [""], null == p.crossDomain) {
          l = oe.createElement("a");
          try {
            l.href = p.url, l.href = l.href, p.crossDomain = zt.protocol + "//" + zt.host != l.protocol + "//" + l.host;
          } catch (C) {
            p.crossDomain = true;
          }
        }
        if (p.data && p.processData && "string" != typeof p.data && (p.data = ye.param(p.data, p.traditional)), Z(It, p, t, D), c) return D;
        f = ye.event && p.global, f && 0 === ye.active++ && ye.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ft.test(p.type), o = p.url.replace(Mt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(At, "+")) : (h = p.url.slice(o.length), p.data && (o += (Lt.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === false && (o = o.replace(Rt, "$1"), h = (Lt.test(o) ? "&" : "?") + "_=" + St++ + h), p.url = o + h), p.ifModified && (ye.lastModified[o] && D.setRequestHeader("If-Modified-Since", ye.lastModified[o]), ye.etag[o] && D.setRequestHeader("If-None-Match", ye.etag[o])), (p.data && p.hasContent && p.contentType !== false || t.contentType) && D.setRequestHeader("Content-Type", p.contentType), D.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : p.accepts["*"]);
        for (d in p.headers) D.setRequestHeader(d, p.headers[d]);
        if (p.beforeSend && (p.beforeSend.call(m, D, p) === false || c)) return D.abort();
        if (T = "abort", y.add(p.complete), D.done(p.success), D.fail(p.error), i = Z(Bt, p, t, D)) {
          if (D.readyState = 1, f && g.trigger("ajaxSend", [D, p]), c) return D;
          p.async && p.timeout > 0 && (u = n.setTimeout(function () {
            D.abort("timeout");
          }, p.timeout));
          try {
            c = false, i.send(b, r);
          } catch (C) {
            if (c) throw C;
            r(-1, C);
          }
        } else r(-1, "No Transport");
        return D;
      },
      getJSON: function (e, t, n) {
        return ye.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ye.get(e, undefined, t, "script");
      }
    }), ye.each(["get", "post"], function (e, t) {
      ye[t] = function (e, n, r, i) {
        return ye.isFunction(n) && (i = i || r, r = n, n = undefined), ye.ajax(ye.extend({
          url: e,
          type: t,
          dataType: i,
          data: n,
          success: r
        }, ye.isPlainObject(e) && e));
      };
    }), ye._evalUrl = function (e) {
      return ye.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,
        "throws": true
      });
    }, ye.fn.extend({
      wrapAll: function (e) {
        var t;
        return this[0] && (ye.isFunction(e) && (e = e.call(this[0])), t = ye(e, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e;
        }).append(this)), this;
      },
      wrapInner: function (e) {
        return ye.isFunction(e) ? this.each(function (t) {
          ye(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = ye(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function (e) {
        var t = ye.isFunction(e);
        return this.each(function (n) {
          ye(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return this.parent(e).not("body").each(function () {
          ye(this).replaceWith(this.childNodes);
        }), this;
      }
    }), ye.expr.pseudos.hidden = function (e) {
      return !ye.expr.pseudos.visible(e);
    }, ye.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, ye.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (e) {}
    };
    var Ut = {
        0: 200,
        1223: 204
      },
      Yt = ye.ajaxSettings.xhr();
    ge.cors = !!Yt && "withCredentials" in Yt, ge.ajax = Yt = !!Yt, ye.ajaxTransport(function (e) {
      var t, r;
      return ge.cors || Yt && !e.crossDomain ? {
        send: function (i, o) {
          var s,
            a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
          e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
          for (s in i) a.setRequestHeader(s, i[s]);
          t = function (e) {
            return function () {
              t && (t = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ut[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()));
            };
          }, a.onload = t(), r = a.onerror = t("error"), undefined !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
            4 === a.readyState && n.setTimeout(function () {
              t && r();
            });
          }, t = t("abort");
          try {
            a.send(e.hasContent && e.data || null);
          } catch (u) {
            if (t) throw u;
          }
        },
        abort: function () {
          t && t();
        }
      } : undefined;
    }), ye.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = false);
    }), ye.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function (e) {
          return ye.globalEval(e), e;
        }
      }
    }), ye.ajaxPrefilter("script", function (e) {
      undefined === e.cache && (e.cache = false), e.crossDomain && (e.type = "GET");
    }), ye.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (r, i) {
            t = ye("<script>").prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", n = function (e) {
              t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type);
            }), oe.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          }
        };
      }
    });
    var Xt = [],
      Gt = /(=)\?(?=&|$)|\?\?/;
    ye.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Xt.pop() || ye.expando + "_" + St++;
        return this[e] = true, e;
      }
    }), ye.ajaxPrefilter("json jsonp", function (e, t, r) {
      var i,
        o,
        s,
        a = e.jsonp !== false && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
      return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = ye.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Gt, "$1" + i) : e.jsonp !== false && (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
        return s || ye.error(i + " was not called"), s[0];
      }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
        s = arguments;
      }, r.always(function () {
        undefined === o ? ye(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Xt.push(i)), s && ye.isFunction(o) && o(s[0]), s = o = undefined;
      }), "script") : undefined;
    }), ge.createHTMLDocument = function () {
      var e = oe.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), ye.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && (n = t, t = false);
      var r, i, o;
      return t || (ge.createHTMLDocument ? (t = oe.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = oe.location.href, t.head.appendChild(r)) : t = oe), i = ke.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = D([e], t, o), o && o.length && ye(o).remove(), ye.merge([], i.childNodes));
    }, ye.fn.load = function (e, t, n) {
      var r,
        o,
        s = this,
        a = e.indexOf(" ");
      return a > -1 && (r = K(e.slice(a)), e = e.slice(0, a)), ye.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t, s.length > 0 && ye.ajax({
        url: e,
        type: "POST" || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        o = arguments, s.html(r ? ye("<div>").append(ye.parseHTML(e)).find(r) : e);
      }).always(n && function (e, t) {
        s.each(function () {
          n.apply(this, o || [e.responseText, t, e]);
        });
      }), this;
    }, ye.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      ye.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), ye.expr.pseudos.animated = function (e) {
      return ye.grep(ye.timers, function (t) {
        return e === t.elem;
      }).length;
    }, ye.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = ye.css(e, "position"),
          f = ye(e),
          d = {};
        "static" === c && (e.style.position = "relative"), a = f.offset(), o = ye.css(e, "top"), u = ye.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), ye.isFunction(t) && (t = t.call(e, n, ye.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : f.css(d);
      }
    }, ye.fn.extend({
      offset: function (e) {
        if (arguments.length) return undefined === e ? this : this.each(function (t) {
          ye.offset.setOffset(this, e, t);
        });
        var t,
          n,
          r,
          i,
          o = this[0];
        return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), r.width || r.height ? (i = o.ownerDocument, n = re(i), t = i.documentElement, {
          top: r.top + n.pageYOffset - t.clientTop,
          left: r.left + n.pageXOffset - t.clientLeft
        }) : r) : {
          top: 0,
          left: 0
        } : undefined;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            r = {
              top: 0,
              left: 0
            };
          return "fixed" === ye.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ye.nodeName(e[0], "html") || (r = e.offset()), r = {
            top: r.top + ye.css(e[0], "borderTopWidth", true),
            left: r.left + ye.css(e[0], "borderLeftWidth", true)
          }), {
            top: t.top - r.top - ye.css(n, "marginTop", true),
            left: t.left - r.left - ye.css(n, "marginLeft", true)
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === ye.css(e, "position");) e = e.offsetParent;
          return e || et;
        });
      }
    }), ye.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var n = "pageYOffset" === t;
      ye.fn[e] = function (r) {
        return qe(this, function (e, r, i) {
          var o = re(e);
          return undefined === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i);
        }, e, r, arguments.length);
      };
    }), ye.each(["top", "left"], function (e, t) {
      ye.cssHooks[t] = R(ge.pixelPosition, function (e, n) {
        return n ? (n = M(e, t), ct.test(n) ? ye(e).position()[t] + "px" : n) : undefined;
      });
    }), ye.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      ye.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (n, r) {
        ye.fn[r] = function (i, o) {
          var s = arguments.length && (n || "boolean" != typeof i),
            a = n || (i === true || o === true ? "margin" : "border");
          return qe(this, function (t, n, i) {
            var o;
            return ye.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : undefined === i ? ye.css(t, n, a) : ye.style(t, n, i, a);
          }, t, s ? i : undefined, s);
        };
      });
    }), ye.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      }
    }), ye.parseJSON = JSON.parse, r = [], i = function () {
      return ye;
    }.apply(t, r), !(undefined !== i && (e.exports = i));
    var Kt = n.jQuery,
      Vt = n.$;
    return ye.noConflict = function (e) {
      return n.$ === ye && (n.$ = Vt), e && n.jQuery === ye && (n.jQuery = Kt), ye;
    }, o || (n.jQuery = n.$ = ye), ye;
  });
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function i() {
    return true;
  }
  function o(e, t) {
    "transform" in t && (t.webkitTransform = t.transform), "transition" in t && (t.webkitTransition = t.transition), e.forEach(function (e) {
      return e && n.i(l.a)(e.style, t);
    });
  }
  function s(e, t) {
    e.style.clip = "rect(" + t + "px 1000px 1000px 0)";
  }
  function a() {}
  var u = n(6),
    l = n(0),
    c = n(4),
    f = n.n(c),
    d = n(3),
    h = n.n(d),
    p = n(5),
    m = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
    g = function () {
      function e() {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        r(this, e), this._options = n.i(l.a)({}, e.defaults, t);
        var i = this._options.container || document.querySelector(".scrollload-container");
        if (this.container = i, !(i instanceof HTMLElement)) throw new Error("container must be a HTMLElement instance!");
        if (this.win = this._options.window, this.isGlobalScroll = this.win === window, this.contentDom = this._options.content || this.container.querySelector(".scrollload-content"), !(this.contentDom instanceof HTMLElement)) throw new Error("content must be a HTMLElement instance!");
        this._options.enableLoadMore && (this.windowHeight = window.innerHeight, this.isLock = this._options.isInitLock, this.hasMoreData = true, this.createBottomDom(), this.scrollListener = this.scrollListener.bind(this), this.resizeListener = this.resizeListener.bind(this), this.scrollListenerWrapThrottle = n.i(u.a)(this.scrollListener, 50), this.resizeListenerWrapThrottle = n.i(u.a)(this.resizeListener, 50), this.attachScrollListener()), this._options.enablePullRefresh && (this.createTopDom(), this.startPageY = 0, this.prePageY = 0, this.isMoving = false, this.isMovingDown = true, this.isRefreshing = false, this.enterTouchStart = false, this.distance = 0, this.attachTouchListener()), this.fixLocalScroll(), this._options.initedHandler.call(this, this);
      }
      return m(e, [{
        key: "fixLocalScroll",
        value: function () {
          this.win !== window && i() ? (this._options.useLocalScrollFix && (this.localScrollFix = new f.a(this.win)), this._options.useScrollFix && new h.a(this.win)) : (this._options.useLocalScrollFix = false, this._options.useScrollFix = false);
        }
      }, {
        key: "createBottomDom",
        value: function () {
          this.container.insertAdjacentHTML("beforeend", '<div class="scrollload-bottom">' + this._options.loadingHtml + "</div>"), this.bottomDom = this.container.querySelector(".scrollload-bottom");
        }
      }, {
        key: "createTopDom",
        value: function () {
          var e = this._options,
            t = e.notEnoughRefreshPortHtml,
            n = e.overRefreshPortHtml,
            r = e.refreshingHtml;
          this.container.insertAdjacentHTML("afterbegin", '<div class="scrollload-top" style="position: relative;">\n                <div class="scrollload-top-content" style="position: absolute; left: 0; right: 0;">\n                    <div class="scrollload-notEnoughRefreshPort" style="display: block">' + t + '</div>\n                    <div class="scrollload-overRefreshPort" style="display: none">' + n + '</div>\n                    <div class="scrollload-refreshing" style="display: none">' + r + "</div>\n                </div>\n            </div>"), this.topDom = this.container.querySelector(".scrollload-top"), this.topContentDom = this.topDom.querySelector(".scrollload-top-content"), this.topDomHeight = this.topContentDom.clientHeight, this.topDom.style.top = "-" + this.topDomHeight + "px", this.topContentDom.style.clip = "rect(1000px 1000px 1000px 0)", this.notEnoughRefreshPortDom = this.topContentDom.querySelector(".scrollload-notEnoughRefreshPort"), this.overRefreshPortDom = this.topContentDom.querySelector(".scrollload-overRefreshPort"), this.refreshingDom = this.topContentDom.querySelector(".scrollload-refreshing");
        }
      }, {
        key: "showNoMoreDataDom",
        value: function () {
          this.bottomDom.innerHTML = this._options.noMoreDataHtml;
        }
      }, {
        key: "showLoadingDom",
        value: function () {
          this.bottomDom.innerHTML = this._options.loadingHtml;
        }
      }, {
        key: "showExceptionDom",
        value: function () {
          this.bottomDom.innerHTML = this._options.exceptionHtml;
        }
      }, {
        key: "showNotEnoughRefreshPortDom",
        value: function () {
          o([this.overRefreshPortDom, this.refreshingDom], {
            display: "none"
          }), o([this.notEnoughRefreshPortDom], {
            display: "block"
          });
        }
      }, {
        key: "showOverRefreshPortDom",
        value: function () {
          o([this.notEnoughRefreshPortDom, this.refreshingDom], {
            display: "none"
          }), o([this.overRefreshPortDom], {
            display: "block"
          });
        }
      }, {
        key: "showRefreshingDom",
        value: function () {
          o([this.notEnoughRefreshPortDom, this.overRefreshPortDom], {
            display: "none"
          }), o([this.refreshingDom], {
            display: "block"
          });
        }
      }, {
        key: "calMovingDistance",
        value: function (e, t) {
          this.distance = this._options.calMovingDistance(e, t);
        }
      }, {
        key: "isTop",
        value: function () {
          return this.isGlobalScroll ? window.pageYOffset <= 0 : this.win.scrollTop <= 1;
        }
      }, {
        key: "refreshComplete",
        value: function () {
          o([this.topDom, this.contentDom, this.bottomDom], {
            transition: "all 300ms",
            transform: "translate3d(0, 0, 0)"
          }), o([this.topContentDom], {
            transition: "all 300ms"
          }), s(this.topContentDom, this.topDomHeight), this.isRefreshing = false;
        }
      }, {
        key: "movingHandler",
        value: function () {
          this.isArrivedRefreshPort() && this.arrivedRefreshPortHandler(), this.isOverRefreshPort() ? this.overRefreshPortHandler() : this.notEnoughRefreshPortHandler();
          var e = Math.max(this.distance, 0);
          0 === e && (this.isMoving = false), o([this.topDom, this.contentDom, this.bottomDom], {
            transform: "translate3d(0, " + e + "px, 0)"
          }), s(this.topContentDom, this.topDomHeight - e), this._options.touchMove.call(this, this);
        }
      }, {
        key: "isOverRefreshPort",
        value: function () {
          return this.distance >= this.topDomHeight;
        }
      }, {
        key: "triggerPullResfresh",
        value: function () {
          this.showRefreshingDom(), this.isRefreshing = true, this._options.pullRefresh.call(this, this), o([this.topDom, this.contentDom, this.bottomDom], {
            transition: "all 300ms",
            transform: "translate3d(0, " + this.topDomHeight + "px, 0)"
          });
        }
      }, {
        key: "overRefreshPortHandler",
        value: function () {
          this._options.overRefreshPortHandler.call(this, this);
        }
      }, {
        key: "notEnoughRefreshPortHandler",
        value: function () {
          this._options.notEnoughRefreshPortHandler.call(this, this);
        }
      }, {
        key: "isArrivedRefreshPort",
        value: function () {
          var e = this._options.calMovingDistance(this.startPageY, this.prePageY);
          return this.distance >= this.topDomHeight && e < this.topDomHeight || this.distance <= this.topDomHeight && e > this.topDomHeight;
        }
      }, {
        key: "arrivedRefreshPortHandler",
        value: function () {
          this.isMovingDown ? this.showOverRefreshPortDom() : this.showNotEnoughRefreshPortDom(), this._options.arrivedRefreshPortHandler.call(this, this);
        }
      }, {
        key: "touchStart",
        value: function (e) {
          this.isRefreshing || (0 === this.topDomHeight && (this.topDomHeight = this.topContentDom.clientHeight, this.topDom.style.top = "-" + this.topDomHeight + "px"), this.enterTouchStart = true, this.startPageY = this.prePageY = e.touches[0].pageY, o([this.topDom, this.contentDom, this.bottomDom], {
            transform: "translate3d(0, 0, 0)",
            transition: "none"
          }), o([this.topContentDom], {
            transition: "none"
          }), this.showNotEnoughRefreshPortDom(), this._options.touchStart.call(this, this));
        }
      }, {
        key: "touchMove",
        value: function (e) {
          if (this.enterTouchStart) {
            var t = e.touches[0].pageY;
            this.isMovingDown = t >= this.prePageY, this.isMoving ? (this.calMovingDistance(this.startPageY, t), this.movingHandler(), e.preventDefault()) : this.isTop() && this.isMovingDown && (this.isMoving = true, e.preventDefault()), this.prePageY = t;
          }
        }
      }, {
        key: "touchEnd",
        value: function (e) {
          this.isMoving && (this._options.touchEnd.call(this, this), this.isOverRefreshPort() ? this.triggerPullResfresh() : this.refreshComplete(), this.startPageY = this.prePageY = 0, this.isMoving = false);
        }
      }, {
        key: "scrollListener",
        value: function () {
          this.isLock || this.isBottom() && (this.isLock = true, this._options.loadMore.call(this, this));
        }
      }, {
        key: "isBottom",
        value: function () {
          var e = this.win,
            t = this.bottomDom,
            n = this.windowHeight,
            r = t.getBoundingClientRect().top,
            i = undefined;
          if (this.isGlobalScroll) i = n;else {
            var o = e.getBoundingClientRect(),
              s = o.height,
              a = o.top;
            i = s, r -= a;
          }
          return r - i <= this._options.threshold;
        }
      }, {
        key: "resizeListener",
        value: function () {
          this.isGlobalScroll && (this.windowHeight = window.innerHeight), this.scrollListener();
        }
      }, {
        key: "attachScrollListener",
        value: function () {
          this.win.addEventListener("scroll", this.scrollListenerWrapThrottle), this.win.addEventListener("resize", this.resizeListenerWrapThrottle), this.scrollListener();
        }
      }, {
        key: "detachScrollListener",
        value: function () {
          this.win.removeEventListener("scroll", this.scrollListenerWrapThrottle), this.win.removeEventListener("resize", this.resizeListenerWrapThrottle);
        }
      }, {
        key: "attachTouchListener",
        value: function () {
          var e = this;
          this.container.addEventListener("touchstart", function (t) {
            e.enterTouchStart = false, e.touchStart(t);
          }), this.container.addEventListener("touchmove", function (t) {
            e.touchMove(t);
          }), this.container.addEventListener("touchend", function (t) {
            e.touchEnd(t);
          });
        }
      }, {
        key: "lock",
        value: function () {
          this.isLock = true;
        }
      }, {
        key: "unLock",
        value: function () {
          this.isLock = false, this.hasMoreData && this.scrollListener(), this._options.useLocalScrollFix && this.localScrollFix.update();
        }
      }, {
        key: "noMoreData",
        value: function () {
          this.lock(), this.hasMoreData = false, this.showNoMoreDataDom(), this._options.useLocalScrollFix && !this.localScrollFix.isArrived && this.localScrollFix.arrived(), this.detachScrollListener();
        }
      }, {
        key: "refreshData",
        value: function () {
          this.showLoadingDom(), this.isLock = false, this.hasMoreData = true, this._options.useLocalScrollFix && (this.localScrollFix = new f.a(this.win)), this.attachScrollListener();
        }
      }, {
        key: "throwException",
        value: function () {
          this.showExceptionDom();
        }
      }, {
        key: "solveException",
        value: function () {
          this.hasMoreData ? (this.showLoadingDom(), this.unLock()) : this.showNoMoreDataDom();
        }
      }, {
        key: "setOptions",
        value: function (e) {
          n.i(l.a)(this._options, e);
        }
      }, {
        key: "getOptions",
        value: function () {
          return n.i(l.a)({}, this._options);
        }
      }], [{
        key: "setGlobalOptions",
        value: function (t) {
          n.i(l.a)(e.defaults, t);
        }
      }]), e;
    }();
  g.defaults = {
    enableLoadMore: true,
    isInitLock: false,
    threshold: 10,
    window: window,
    useLocalScrollFix: false,
    useScrollFix: false,
    loadingHtml: "",
    noMoreDataHtml: "",
    exceptionHtml: "",
    loadMore: a,
    enablePullRefresh: false,
    notEnoughRefreshPortHtml: "",
    overRefreshPortHtml: "",
    refreshingHtml: "",
    pullRefresh: a,
    arrivedRefreshPortHandler: a,
    touchStart: a,
    touchMove: a,
    touchEnd: a,
    overRefreshPortHandler: a,
    notEnoughRefreshPortHandler: a,
    calMovingDistance: function (e, t) {
      return (t - e) / 3;
    },
    initedHandler: a
  }, g.setStyles = o, t.a = g, g.setGlobalOptions(p.a), window.Scrollload = g;
}, function (e, t) {
  !function () {
    var t = function (e) {
      var t, n;
      e = e || document.querySelector(e), e && e.addEventListener("touchstart", function (r) {
        t = r.touches[0].pageY, n = e.scrollTop, 0 >= n && (e.scrollTop = 1), n + e.offsetHeight >= e.scrollHeight && (e.scrollTop = e.scrollHeight - e.offsetHeight - 1);
      }, false);
    };
    "undefined" != typeof window && "undefined" == typeof e ? window.ScrollFix = t : e.exports = t;
  }();
}, function (e, t, n) {
  !function (t, n) {
    e.exports = n();
  }(this, function () {
    return function (e) {
      function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
          i: r,
          l: false,
          exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = true, i.exports;
      }
      var n = {};
      return t.m = e, t.c = n, t.i = function (e) {
        return e;
      }, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
          configurable: false,
          enumerable: true,
          get: r
        });
      }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
          return e["default"];
        } : function () {
          return e;
        };
        return t.d(n, "a", n), n;
      }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, t.p = "", t(t.s = 0);
    }([function (e, t, n) {
      "use strict";

      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var i = function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        }(),
        o = function () {
          function e(t) {
            if (r(this, e), !t || t === window) return null;
            if (!(t instanceof HTMLElement)) throw new Error("parameter 1 must be a HTMLElement instance!");
            this.win = t;
            var n = t.querySelector(".localScrollFix-fixDom");
            n ? this.fixDom = n : this.createFixDom(), this.isArrived = false, this.update();
          }
          return i(e, [{
            key: "createFixDom",
            value: function () {
              this.win.insertAdjacentHTML("beforeend", '<div class="localScrollFix-fixDom" style="margin: 0; padding: 0"></div>'), this.fixDom = this.win.querySelector(".localScrollFix-fixDom");
            }
          }, {
            key: "removeFixDom",
            value: function () {
              this.win.removeChild(this.fixDom), this.fixDom = null;
            }
          }, {
            key: "arrived",
            value: function () {
              this.isArrived = true, this.removeFixDom();
            }
          }, {
            key: "update",
            value: function () {
              if (!this.isArrived) {
                var e = this.computerFixDomPaddingTop();
                e >= 0 ? this.fixDom.style.paddingTop = e + 3 + "px" : this.arrived();
              }
            }
          }, {
            key: "computerFixDomPaddingTop",
            value: function () {
              var e = this.fixDom,
                t = this.win,
                n = e.getBoundingClientRect().top,
                r = t.getBoundingClientRect().bottom,
                i = window.getComputedStyle(t, null),
                o = i.paddingBottom,
                s = i.borderBottomWidth;
              return r - parseFloat(o) - parseFloat(s) - n;
            }
          }]), e;
        }();
      t["default"] = o, window.LocalScrollFix = o;
    }]);
  });
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return '<div style="text-align: center;font-size: 12px;line-height: 50px;">' + e + "</div>";
  }
  function i(e, t) {
    "transform" in t && (t.webkitTransform = t.transform), "transition" in t && (t.webkitTransition = t.transition), e.forEach(function (e) {
      return e && n.i(o.a)(e.style, t);
    });
  }
  var o = n(0),
    s = '\n    <div style="height: 50px;">\n        <svg class="scrollload-movingHtml" width="20px" height="30px" style="display: block;margin: 0 auto;transition: all 300ms;-webkit-transition: all 300ms;">\n            <line x1="10" y1="2" x2="10" y2="25" stroke="#666" stroke-width="2" />\n            <polyline points="3 17 10 25 17 17" fill="none" stroke="#666" stroke-width="2"/>\n        </svg>\n    </div>\n',
    a = "\n    <div style=\"display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center; height: 50px;\">\n        <svg  width='24px' height='24px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-default\"><rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333' transform='rotate(0 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333' transform='rotate(30 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.08333333333333333s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333' transform='rotate(60 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.16666666666666666s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333' transform='rotate(90 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.25s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333' transform='rotate(120 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.3333333333333333s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333' transform='rotate(150 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.4166666666666667s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333' transform='rotate(180 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.5s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333' transform='rotate(210 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.5833333333333334s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333' transform='rotate(240 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.6666666666666666s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333' transform='rotate(270 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.75s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333' transform='rotate(300 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.8333333333333334s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333' transform='rotate(330 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.9166666666666666s' repeatCount='indefinite'/></rect></svg>\n    </div>\n",
    u = {
      loadingHtml: a,
      noMoreDataHtml: r("\u6ca1\u6709\u66f4\u591a\u6570\u636e\u4e86"),
      exceptionHtml: r("\u51fa\u73b0\u5f02\u5e38"),
      notEnoughRefreshPortHtml: s,
      overRefreshPortHtml: s,
      refreshingHtml: a,
      arrivedRefreshPortHandler: function (e) {
        document.body.clientWidth;
        var t = e.notEnoughRefreshPortDom.querySelector(".scrollload-movingHtml"),
          n = e.overRefreshPortDom.querySelector(".scrollload-movingHtml");
        e.isMovingDown ? i([t, n], {
          transform: "rotate(180deg)"
        }) : i([t, n], {
          transform: "rotate(0deg)"
        });
      },
      touchEnd: function (e) {
        var t = e.notEnoughRefreshPortDom.querySelector(".scrollload-movingHtml"),
          n = e.overRefreshPortDom.querySelector(".scrollload-movingHtml");
        Scrollload.setStyles([t, n], {
          transform: "rotate(0deg)"
        });
      }
    };
  t.a = u;
}, function (e, t, n) {
  "use strict";

  t.a = function (e, t, n) {
    var r,
      i,
      o,
      s,
      a = 0;
    n || (n = {});
    var u = function () {
        a = n.leading === false ? 0 : Date.now(), r = null, s = e.apply(i, o), r || (i = o = null);
      },
      l = function () {
        var l = Date.now();
        a || n.leading !== false || (a = l);
        var c = t - (l - a);
        return i = this, o = arguments, 0 >= c || c > t ? (r && (clearTimeout(r), r = null), a = l, s = e.apply(i, o), r || (i = o = null)) : r || n.trailing === false || (r = setTimeout(u, c)), s;
      };
    return l.cancel = function () {
      clearTimeout(r), a = 0, r = i = o = null;
    }, l;
  };
},,,,,,,, function (e, t) {},,,,,,,,,, function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  function img_init() {
    $("img.lazy").each(function (e, t) {
      if (!$(t).attr("is_load")) {
        var n = $(t).attr("data-original");
        n = test(n), n = bs64DeCode(n).replace("\ue600", ""), $(t).attr("data-original", n), $(t).attr("is_load", 1);
      }
    });
  }
  function getData(data) {
    if (0 != is_next) {
      var obj = $(data),
        title = data.toString().match(/<title>(.*)<\/title>/)[1];
      $("title").text(title);
      var b = data.toString().match(/<ul id="view-bottom-bar" class="view-bottom-bar">([\s\S]+)<\/ul>/)[1],
        c = data.toString().match(/<div id="view-fix-bottom-bar" class="view-fix-bottom-bar" mode="0">([\s\S]+)<\/div>/)[1],
        d = data.toString().match(/<script id="code">([\s\S]+)<\/script>/)[1],
        html = obj.find("#cp_img").html();
      next_url = obj.find(".next_page").attr("href"), next_url || (is_next = false);
      var current_next_url = next_url;
      return $("#view-fix-bottom-bar").html(c), $(".view-fix-top-bar").html(obj.find(".view-fix-top-bar").html()), $("#view-bottom-bar").html(b), eval(d), is_app || window1.history.pushState({}, "", current_next_url), html;
    }
  }
  img_init(), Object.defineProperty(__webpack_exports__, "__esModule", {
    value: true
  });
  var __WEBPACK_IMPORTED_MODULE_0__Scrollload__ = __webpack_require__(2),
    __WEBPACK_IMPORTED_MODULE_1__index_css__ = __webpack_require__(14),
    __WEBPACK_IMPORTED_MODULE_1__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_css__),
    __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(1),
    __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__),
    page = 1,
    window = document.querySelector(".window");
  is_app && setTimeout(function () {
    new __WEBPACK_IMPORTED_MODULE_0__Scrollload__.a({
      useLocalScrollFix: true,
      useScrollFix: true,
      loadMore: function (e) {
        return is_next ? is_jump ? (setTimeout(function () {
          window1.location.href = next_url;
        }, 2e3), void e.noMoreData()) : (page >= jump_page && (window1.location.href = next_url, page = 1), __WEBPACK_IMPORTED_MODULE_2_jquery___default.a.ajax({
          type: "GET",
          url: next_url,
          dataType: "html",
          success: function (t) {
            __WEBPACK_IMPORTED_MODULE_2_jquery___default()(e.contentDom).append(getData(t)), img_init(), setTimeout(function () {
              e.unLock();
            }, 5e3);
          },
          error: function (t, n) {
            e.throwException();
          }
        }), void page++) : void e.noMoreData();
      },
      enablePullRefresh: false,
      pullRefresh: function (e) {
        __WEBPACK_IMPORTED_MODULE_2_jquery___default.a.ajax({
          type: "GET",
          url: "https://fa-ge.github.io/Scrollload/gamelist.json?page=" + Math.floor(100 * Math.random()),
          dataType: "json",
          success: function (t) {
            __WEBPACK_IMPORTED_MODULE_2_jquery___default()(e.contentDom).prepend(getData(t));
          }
        });
      }
    });
  }, 7e3);
}]);