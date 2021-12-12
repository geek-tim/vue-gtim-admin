!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : (((e =
        'undefined' != typeof globalThis
          ? globalThis
          : e || self).prettierPlugins = e.prettierPlugins || {}),
      (e.prettierPlugins.babel = t()))
})(this, function () {
  'use strict'
  var e =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {}
  function t(e) {
    return e && Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e
  }
  function s(e) {
    var t = { exports: {} }
    return e(t, t.exports), t.exports
  }
  var r,
    i,
    a = function (e) {
      return e && e.Math == Math && e
    },
    n =
      a('object' == typeof globalThis && globalThis) ||
      a('object' == typeof window && window) ||
      a('object' == typeof self && self) ||
      a('object' == typeof e && e) ||
      (function () {
        return this
      })() ||
      Function('return this')(),
    o = function (e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    },
    u = !o(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7
          }
        })[1]
      )
    }),
    h = {}.propertyIsEnumerable,
    c = Object.getOwnPropertyDescriptor,
    p = {
      f:
        c && !h.call({ 1: 2 }, 1)
          ? function (e) {
              var t = c(this, e)
              return !!t && t.enumerable
            }
          : h
    },
    l = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    },
    d = {}.toString,
    D = function (e) {
      return d.call(e).slice(8, -1)
    },
    m = ''.split,
    f = o(function () {
      return !Object('z').propertyIsEnumerable(0)
    })
      ? function (e) {
          return 'String' == D(e) ? m.call(e, '') : Object(e)
        }
      : Object,
    y = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e)
      return e
    },
    A = function (e) {
      return f(y(e))
    },
    E = function (e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e
    },
    C = function (e) {
      return 'function' == typeof e ? e : void 0
    },
    x = function (e, t) {
      return arguments.length < 2 ? C(n[e]) : n[e] && n[e][t]
    },
    F = x('navigator', 'userAgent') || '',
    g = n.process,
    b = n.Deno,
    P = (g && g.versions) || (b && b.version),
    T = P && P.v8
  T
    ? (i = (r = T.split('.'))[0] < 4 ? 1 : r[0] + r[1])
    : F &&
      (!(r = F.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
      (r = F.match(/Chrome\/(\d+)/)) &&
      (i = r[1])
  var w = i && +i,
    S =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        var e = Symbol()
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && w && w < 41)
        )
      }),
    B = S && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    N = B
      ? function (e) {
          return 'symbol' == typeof e
        }
      : function (e) {
          var t = x('Symbol')
          return 'function' == typeof t && Object(e) instanceof t
        },
    I = function (e, t) {
      try {
        Object.defineProperty(n, e, {
          value: t,
          configurable: !0,
          writable: !0
        })
      } catch (s) {
        n[e] = t
      }
      return t
    },
    v = '__core-js_shared__',
    k = n[v] || I(v, {}),
    L = s(function (e) {
      ;(e.exports = function (e, t) {
        return k[e] || (k[e] = void 0 !== t ? t : {})
      })('versions', []).push({
        version: '3.17.3',
        mode: 'global',
        copyright: '\xa9 2021 Denis Pushkarev (zloirock.ru)'
      })
    }),
    O = function (e) {
      return Object(y(e))
    },
    M = {}.hasOwnProperty,
    R =
      Object.hasOwn ||
      function (e, t) {
        return M.call(O(e), t)
      },
    j = 0,
    _ = Math.random(),
    U = function (e) {
      return (
        'Symbol(' +
        String(void 0 === e ? '' : e) +
        ')_' +
        (++j + _).toString(36)
      )
    },
    q = L('wks'),
    $ = n.Symbol,
    H = B ? $ : ($ && $.withoutSetter) || U,
    V = function (e) {
      return (
        (R(q, e) && (S || 'string' == typeof q[e])) ||
          (S && R($, e) ? (q[e] = $[e]) : (q[e] = H('Symbol.' + e))),
        q[e]
      )
    },
    z = V('toPrimitive'),
    W = function (e, t) {
      if (!E(e) || N(e)) return e
      var s,
        r = e[z]
      if (void 0 !== r) {
        if (
          (void 0 === t && (t = 'default'), (s = r.call(e, t)), !E(s) || N(s))
        )
          return s
        throw TypeError("Can't convert object to primitive value")
      }
      return (
        void 0 === t && (t = 'number'),
        (function (e, t) {
          var s, r
          if (
            'string' === t &&
            'function' == typeof (s = e.toString) &&
            !E((r = s.call(e)))
          )
            return r
          if ('function' == typeof (s = e.valueOf) && !E((r = s.call(e))))
            return r
          if (
            'string' !== t &&
            'function' == typeof (s = e.toString) &&
            !E((r = s.call(e)))
          )
            return r
          throw TypeError("Can't convert object to primitive value")
        })(e, t)
      )
    },
    G = function (e) {
      var t = W(e, 'string')
      return N(t) ? t : String(t)
    },
    K = n.document,
    X = E(K) && E(K.createElement),
    J =
      !u &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(
            ((e = 'div'), X ? K.createElement(e) : {}),
            'a',
            {
              get: function () {
                return 7
              }
            }
          ).a
        )
        var e
      }),
    Y = Object.getOwnPropertyDescriptor,
    Q = {
      f: u
        ? Y
        : function (e, t) {
            if (((e = A(e)), (t = G(t)), J))
              try {
                return Y(e, t)
              } catch (e) {}
            if (R(e, t)) return l(!p.f.call(e, t), e[t])
          }
    },
    Z = function (e) {
      if (!E(e)) throw TypeError(String(e) + ' is not an object')
      return e
    },
    ee = Object.defineProperty,
    te = {
      f: u
        ? ee
        : function (e, t, s) {
            if ((Z(e), (t = G(t)), Z(s), J))
              try {
                return ee(e, t, s)
              } catch (e) {}
            if ('get' in s || 'set' in s)
              throw TypeError('Accessors not supported')
            return 'value' in s && (e[t] = s.value), e
          }
    },
    se = u
      ? function (e, t, s) {
          return te.f(e, t, l(1, s))
        }
      : function (e, t, s) {
          return (e[t] = s), e
        },
    re = Function.toString
  'function' != typeof k.inspectSource &&
    (k.inspectSource = function (e) {
      return re.call(e)
    })
  var ie,
    ae,
    ne,
    oe,
    ue = k.inspectSource,
    he = n.WeakMap,
    ce = 'function' == typeof he && /native code/.test(ue(he)),
    pe = L('keys'),
    le = {},
    de = 'Object already initialized',
    De = n.WeakMap
  if (ce || k.state) {
    var me = k.state || (k.state = new De()),
      fe = me.get,
      ye = me.has,
      Ae = me.set
    ;(ie = function (e, t) {
      if (ye.call(me, e)) throw new TypeError(de)
      return (t.facade = e), Ae.call(me, e, t), t
    }),
      (ae = function (e) {
        return fe.call(me, e) || {}
      }),
      (ne = function (e) {
        return ye.call(me, e)
      })
  } else {
    var Ee = pe[(oe = 'state')] || (pe[oe] = U(oe))
    ;(le[Ee] = !0),
      (ie = function (e, t) {
        if (R(e, Ee)) throw new TypeError(de)
        return (t.facade = e), se(e, Ee, t), t
      }),
      (ae = function (e) {
        return R(e, Ee) ? e[Ee] : {}
      }),
      (ne = function (e) {
        return R(e, Ee)
      })
  }
  var Ce = {
      set: ie,
      get: ae,
      has: ne,
      enforce: function (e) {
        return ne(e) ? ae(e) : ie(e, {})
      },
      getterFor: function (e) {
        return function (t) {
          var s
          if (!E(t) || (s = ae(t)).type !== e)
            throw TypeError('Incompatible receiver, ' + e + ' required')
          return s
        }
      }
    },
    xe = s(function (e) {
      var t = Ce.get,
        s = Ce.enforce,
        r = String(String).split('String')
      ;(e.exports = function (e, t, i, a) {
        var o,
          u = !!a && !!a.unsafe,
          h = !!a && !!a.enumerable,
          c = !!a && !!a.noTargetGet
        'function' == typeof i &&
          ('string' != typeof t || R(i, 'name') || se(i, 'name', t),
          (o = s(i)).source ||
            (o.source = r.join('string' == typeof t ? t : ''))),
          e !== n
            ? (u ? !c && e[t] && (h = !0) : delete e[t],
              h ? (e[t] = i) : se(e, t, i))
            : h
            ? (e[t] = i)
            : I(t, i)
      })(Function.prototype, 'toString', function () {
        return ('function' == typeof this && t(this).source) || ue(this)
      })
    }),
    Fe = Math.ceil,
    ge = Math.floor,
    be = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? ge : Fe)(e)
    },
    Pe = Math.min,
    Te = function (e) {
      return e > 0 ? Pe(be(e), 9007199254740991) : 0
    },
    we = Math.max,
    Se = Math.min,
    Be = function (e) {
      return function (t, s, r) {
        var i,
          a = A(t),
          n = Te(a.length),
          o = (function (e, t) {
            var s = be(e)
            return s < 0 ? we(s + t, 0) : Se(s, t)
          })(r, n)
        if (e && s != s) {
          for (; n > o; ) if ((i = a[o++]) != i) return !0
        } else
          for (; n > o; o++) if ((e || o in a) && a[o] === s) return e || o || 0
        return !e && -1
      }
    },
    Ne = { includes: Be(!0), indexOf: Be(!1) }.indexOf,
    Ie = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ].concat('length', 'prototype'),
    ve = {
      f:
        Object.getOwnPropertyNames ||
        function (e) {
          return (function (e, t) {
            var s,
              r = A(e),
              i = 0,
              a = []
            for (s in r) !R(le, s) && R(r, s) && a.push(s)
            for (; t.length > i; )
              R(r, (s = t[i++])) && (~Ne(a, s) || a.push(s))
            return a
          })(e, Ie)
        }
    },
    ke = { f: Object.getOwnPropertySymbols },
    Le =
      x('Reflect', 'ownKeys') ||
      function (e) {
        var t = ve.f(Z(e)),
          s = ke.f
        return s ? t.concat(s(e)) : t
      },
    Oe = function (e, t) {
      for (var s = Le(t), r = te.f, i = Q.f, a = 0; a < s.length; a++) {
        var n = s[a]
        R(e, n) || r(e, n, i(t, n))
      }
    },
    Me = /#|\.prototype\./,
    Re = function (e, t) {
      var s = _e[je(e)]
      return s == qe || (s != Ue && ('function' == typeof t ? o(t) : !!t))
    },
    je = (Re.normalize = function (e) {
      return String(e).replace(Me, '.').toLowerCase()
    }),
    _e = (Re.data = {}),
    Ue = (Re.NATIVE = 'N'),
    qe = (Re.POLYFILL = 'P'),
    $e = Re,
    He = Q.f,
    Ve = function (e, t) {
      var s,
        r,
        i,
        a,
        o,
        u = e.target,
        h = e.global,
        c = e.stat
      if ((s = h ? n : c ? n[u] || I(u, {}) : (n[u] || {}).prototype))
        for (r in t) {
          if (
            ((a = t[r]),
            (i = e.noTargetGet ? (o = He(s, r)) && o.value : s[r]),
            !$e(h ? r : u + (c ? '.' : '#') + r, e.forced) && void 0 !== i)
          ) {
            if (typeof a == typeof i) continue
            Oe(a, i)
          }
          ;(e.sham || (i && i.sham)) && se(a, 'sham', !0), xe(s, r, a, e)
        }
    },
    ze =
      Array.isArray ||
      function (e) {
        return 'Array' == D(e)
      },
    We = function (e) {
      if ('function' != typeof e)
        throw TypeError(String(e) + ' is not a function')
      return e
    },
    Ge = function (e, t, s) {
      if ((We(e), void 0 === t)) return e
      switch (s) {
        case 0:
          return function () {
            return e.call(t)
          }
        case 1:
          return function (s) {
            return e.call(t, s)
          }
        case 2:
          return function (s, r) {
            return e.call(t, s, r)
          }
        case 3:
          return function (s, r, i) {
            return e.call(t, s, r, i)
          }
      }
      return function () {
        return e.apply(t, arguments)
      }
    },
    Ke = function (e, t, s, r, i, a, n, o) {
      for (var u, h = i, c = 0, p = !!n && Ge(n, o, 3); c < r; ) {
        if (c in s) {
          if (((u = p ? p(s[c], c, t) : s[c]), a > 0 && ze(u)))
            h = Ke(e, t, u, Te(u.length), h, a - 1) - 1
          else {
            if (h >= 9007199254740991)
              throw TypeError('Exceed the acceptable array length')
            e[h] = u
          }
          h++
        }
        c++
      }
      return h
    },
    Xe = Ke,
    Je = V('species'),
    Ye = function (e, t) {
      return new ((function (e) {
        var t
        return (
          ze(e) &&
            ('function' != typeof (t = e.constructor) ||
            (t !== Array && !ze(t.prototype))
              ? E(t) && null === (t = t[Je]) && (t = void 0)
              : (t = void 0)),
          void 0 === t ? Array : t
        )
      })(e))(0 === t ? 0 : t)
    }
  Ve(
    { target: 'Array', proto: !0 },
    {
      flatMap: function (e) {
        var t,
          s = O(this),
          r = Te(s.length)
        return (
          We(e),
          ((t = Ye(s, 0)).length = Xe(
            t,
            s,
            s,
            r,
            0,
            1,
            e,
            arguments.length > 1 ? arguments[1] : void 0
          )),
          t
        )
      }
    }
  )
  var Qe = function (...e) {
      let t
      for (const [s, r] of e.entries())
        try {
          return { result: r() }
        } catch (e) {
          0 === s && (t = e)
        }
      return { error: t }
    },
    Ze = (e) =>
      'string' == typeof e
        ? e.replace(
            (({ onlyFirst: e = !1 } = {}) => {
              const t = [
                '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
                '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
              ].join('|')
              return new RegExp(t, e ? void 0 : 'g')
            })(),
            ''
          )
        : e
  const et = (e) =>
    !Number.isNaN(e) &&
    e >= 4352 &&
    (e <= 4447 ||
      9001 === e ||
      9002 === e ||
      (11904 <= e && e <= 12871 && 12351 !== e) ||
      (12880 <= e && e <= 19903) ||
      (19968 <= e && e <= 42182) ||
      (43360 <= e && e <= 43388) ||
      (44032 <= e && e <= 55203) ||
      (63744 <= e && e <= 64255) ||
      (65040 <= e && e <= 65049) ||
      (65072 <= e && e <= 65131) ||
      (65281 <= e && e <= 65376) ||
      (65504 <= e && e <= 65510) ||
      (110592 <= e && e <= 110593) ||
      (127488 <= e && e <= 127569) ||
      (131072 <= e && e <= 262141))
  var tt = et,
    st = et
  tt.default = st
  const rt = (e) => {
    if ('string' != typeof e || 0 === e.length) return 0
    if (0 === (e = Ze(e)).length) return 0
    e = e.replace(
      /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g,
      '  '
    )
    let t = 0
    for (let s = 0; s < e.length; s++) {
      const r = e.codePointAt(s)
      r <= 31 ||
        (r >= 127 && r <= 159) ||
        (r >= 768 && r <= 879) ||
        (r > 65535 && s++, (t += tt(r) ? 2 : 1))
    }
    return t
  }
  var it = rt,
    at = rt
  it.default = at
  var nt = (e) => {
    if ('string' != typeof e) throw new TypeError('Expected a string')
    return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')
  }
  var ot = (e) => e[e.length - 1]
  function ut(e, t) {
    if (null == e) return {}
    var s,
      r,
      i = (function (e, t) {
        if (null == e) return {}
        var s,
          r,
          i = {},
          a = Object.keys(e)
        for (r = 0; r < a.length; r++)
          (s = a[r]), t.indexOf(s) >= 0 || (i[s] = e[s])
        return i
      })(e, t)
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e)
      for (r = 0; r < a.length; r++)
        (s = a[r]),
          t.indexOf(s) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, s) && (i[s] = e[s]))
    }
    return i
  }
  var ht,
    ct,
    pt = function (e) {
      if (N(e)) throw TypeError('Cannot convert a Symbol value to a string')
      return String(e)
    },
    lt = Math.floor,
    dt = function (e, t) {
      var s = e.length,
        r = lt(s / 2)
      return s < 8 ? Dt(e, t) : mt(dt(e.slice(0, r), t), dt(e.slice(r), t), t)
    },
    Dt = function (e, t) {
      for (var s, r, i = e.length, a = 1; a < i; ) {
        for (r = a, s = e[a]; r && t(e[r - 1], s) > 0; ) e[r] = e[--r]
        r !== a++ && (e[r] = s)
      }
      return e
    },
    mt = function (e, t, s) {
      for (
        var r = e.length, i = t.length, a = 0, n = 0, o = [];
        a < r || n < i;

      )
        a < r && n < i
          ? o.push(s(e[a], t[n]) <= 0 ? e[a++] : t[n++])
          : o.push(a < r ? e[a++] : t[n++])
      return o
    },
    ft = dt,
    yt = F.match(/firefox\/(\d+)/i),
    At = !!yt && +yt[1],
    Et = /MSIE|Trident/.test(F),
    Ct = F.match(/AppleWebKit\/(\d+)\./),
    xt = !!Ct && +Ct[1],
    Ft = [],
    gt = Ft.sort,
    bt = o(function () {
      Ft.sort(void 0)
    }),
    Pt = o(function () {
      Ft.sort(null)
    }),
    Tt =
      !!(ct = []['sort']) &&
      o(function () {
        ct.call(
          null,
          ht ||
            function () {
              throw 1
            },
          1
        )
      }),
    wt = !o(function () {
      if (w) return w < 70
      if (!(At && At > 3)) {
        if (Et) return !0
        if (xt) return xt < 603
        var e,
          t,
          s,
          r,
          i = ''
        for (e = 65; e < 76; e++) {
          switch (((t = String.fromCharCode(e)), e)) {
            case 66:
            case 69:
            case 70:
            case 72:
              s = 3
              break
            case 68:
            case 71:
              s = 4
              break
            default:
              s = 2
          }
          for (r = 0; r < 47; r++) Ft.push({ k: t + r, v: s })
        }
        for (
          Ft.sort(function (e, t) {
            return t.v - e.v
          }),
            r = 0;
          r < Ft.length;
          r++
        )
          (t = Ft[r].k.charAt(0)), i.charAt(i.length - 1) !== t && (i += t)
        return 'DGBEFHACIJK' !== i
      }
    })
  Ve(
    { target: 'Array', proto: !0, forced: bt || !Pt || !Tt || !wt },
    {
      sort: function (e) {
        void 0 !== e && We(e)
        var t = O(this)
        if (wt) return void 0 === e ? gt.call(t) : gt.call(t, e)
        var s,
          r,
          i = [],
          a = Te(t.length)
        for (r = 0; r < a; r++) r in t && i.push(t[r])
        for (
          s = (i = ft(
            i,
            (function (e) {
              return function (t, s) {
                return void 0 === s
                  ? -1
                  : void 0 === t
                  ? 1
                  : void 0 !== e
                  ? +e(t, s) || 0
                  : pt(t) > pt(s)
                  ? 1
                  : -1
              }
            })(e)
          )).length,
            r = 0;
          r < s;

        )
          t[r] = i[r++]
        for (; r < a; ) delete t[r++]
        return t
      }
    }
  )
  var St = {},
    Bt = V('iterator'),
    Nt = Array.prototype,
    It = {}
  It[V('toStringTag')] = 'z'
  var vt = '[object z]' === String(It),
    kt = V('toStringTag'),
    Lt =
      'Arguments' ==
      D(
        (function () {
          return arguments
        })()
      ),
    Ot = vt
      ? D
      : function (e) {
          var t, s, r
          return void 0 === e
            ? 'Undefined'
            : null === e
            ? 'Null'
            : 'string' ==
              typeof (s = (function (e, t) {
                try {
                  return e[t]
                } catch (e) {}
              })((t = Object(e)), kt))
            ? s
            : Lt
            ? D(t)
            : 'Object' == (r = D(t)) && 'function' == typeof t.callee
            ? 'Arguments'
            : r
        },
    Mt = V('iterator'),
    Rt = function (e) {
      if (null != e) return e[Mt] || e['@@iterator'] || St[Ot(e)]
    },
    jt = function (e, t, s) {
      var r, i
      Z(e)
      try {
        if (void 0 === (r = e.return)) {
          if ('throw' === t) throw s
          return s
        }
        r = r.call(e)
      } catch (e) {
        ;(i = !0), (r = e)
      }
      if ('throw' === t) throw s
      if (i) throw r
      return Z(r), s
    },
    _t = function (e, t) {
      ;(this.stopped = e), (this.result = t)
    },
    Ut = function (e, t, s) {
      var r,
        i,
        a,
        n,
        o,
        u,
        h,
        c,
        p = s && s.that,
        l = !(!s || !s.AS_ENTRIES),
        d = !(!s || !s.IS_ITERATOR),
        D = !(!s || !s.INTERRUPTED),
        m = Ge(t, p, 1 + l + D),
        f = function (e) {
          return r && jt(r, 'normal', e), new _t(!0, e)
        },
        y = function (e) {
          return l
            ? (Z(e), D ? m(e[0], e[1], f) : m(e[0], e[1]))
            : D
            ? m(e, f)
            : m(e)
        }
      if (d) r = e
      else {
        if ('function' != typeof (i = Rt(e)))
          throw TypeError('Target is not iterable')
        if (void 0 !== (c = i) && (St.Array === c || Nt[Bt] === c)) {
          for (a = 0, n = Te(e.length); n > a; a++)
            if ((o = y(e[a])) && o instanceof _t) return o
          return new _t(!1)
        }
        r = (function (e, t) {
          var s = arguments.length < 2 ? Rt(e) : t
          if ('function' != typeof s)
            throw TypeError(String(e) + ' is not iterable')
          return Z(s.call(e))
        })(e, i)
      }
      for (u = r.next; !(h = u.call(r)).done; ) {
        try {
          o = y(h.value)
        } catch (e) {
          jt(r, 'throw', e)
        }
        if ('object' == typeof o && o && o instanceof _t) return o
      }
      return new _t(!1)
    }
  Ve(
    { target: 'Object', stat: !0 },
    {
      fromEntries: function (e) {
        var t = {}
        return (
          Ut(
            e,
            function (e, s) {
              !(function (e, t, s) {
                var r = G(t)
                r in e ? te.f(e, r, l(0, s)) : (e[r] = s)
              })(t, e, s)
            },
            { AS_ENTRIES: !0 }
          ),
          t
        )
      }
    }
  )
  var qt =
    void 0 !== qt
      ? qt
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : {}
  function $t() {
    throw new Error('setTimeout has not been defined')
  }
  function Ht() {
    throw new Error('clearTimeout has not been defined')
  }
  var Vt = $t,
    zt = Ht
  function Wt(e) {
    if (Vt === setTimeout) return setTimeout(e, 0)
    if ((Vt === $t || !Vt) && setTimeout)
      return (Vt = setTimeout), setTimeout(e, 0)
    try {
      return Vt(e, 0)
    } catch (t) {
      try {
        return Vt.call(null, e, 0)
      } catch (t) {
        return Vt.call(this, e, 0)
      }
    }
  }
  'function' == typeof qt.setTimeout && (Vt = setTimeout),
    'function' == typeof qt.clearTimeout && (zt = clearTimeout)
  var Gt,
    Kt = [],
    Xt = !1,
    Jt = -1
  function Yt() {
    Xt &&
      Gt &&
      ((Xt = !1),
      Gt.length ? (Kt = Gt.concat(Kt)) : (Jt = -1),
      Kt.length && Qt())
  }
  function Qt() {
    if (!Xt) {
      var e = Wt(Yt)
      Xt = !0
      for (var t = Kt.length; t; ) {
        for (Gt = Kt, Kt = []; ++Jt < t; ) Gt && Gt[Jt].run()
        ;(Jt = -1), (t = Kt.length)
      }
      ;(Gt = null),
        (Xt = !1),
        (function (e) {
          if (zt === clearTimeout) return clearTimeout(e)
          if ((zt === Ht || !zt) && clearTimeout)
            return (zt = clearTimeout), clearTimeout(e)
          try {
            zt(e)
          } catch (t) {
            try {
              return zt.call(null, e)
            } catch (t) {
              return zt.call(this, e)
            }
          }
        })(e)
    }
  }
  function Zt(e, t) {
    ;(this.fun = e), (this.array = t)
  }
  Zt.prototype.run = function () {
    this.fun.apply(null, this.array)
  }
  function es() {}
  var ts = es,
    ss = es,
    rs = es,
    is = es,
    as = es,
    ns = es,
    os = es
  var us = qt.performance || {},
    hs =
      us.now ||
      us.mozNow ||
      us.msNow ||
      us.oNow ||
      us.webkitNow ||
      function () {
        return new Date().getTime()
      }
  var cs = new Date()
  var ps = {
    nextTick: function (e) {
      var t = new Array(arguments.length - 1)
      if (arguments.length > 1)
        for (var s = 1; s < arguments.length; s++) t[s - 1] = arguments[s]
      Kt.push(new Zt(e, t)), 1 !== Kt.length || Xt || Wt(Qt)
    },
    title: 'browser',
    browser: !0,
    env: {},
    argv: [],
    version: '',
    versions: {},
    on: ts,
    addListener: ss,
    once: rs,
    off: is,
    removeListener: as,
    removeAllListeners: ns,
    emit: os,
    binding: function (e) {
      throw new Error('process.binding is not supported')
    },
    cwd: function () {
      return '/'
    },
    chdir: function (e) {
      throw new Error('process.chdir is not supported')
    },
    umask: function () {
      return 0
    },
    hrtime: function (e) {
      var t = 0.001 * hs.call(us),
        s = Math.floor(t),
        r = Math.floor((t % 1) * 1e9)
      return e && ((s -= e[0]), (r -= e[1]) < 0 && (s--, (r += 1e9))), [s, r]
    },
    platform: 'browser',
    release: {},
    config: {},
    uptime: function () {
      return (new Date() - cs) / 1e3
    }
  }
  var ls =
    'object' == typeof ps &&
    ps.env &&
    ps.env.NODE_DEBUG &&
    /\bsemver\b/i.test(ps.env.NODE_DEBUG)
      ? (...e) => console.error('SEMVER', ...e)
      : () => {}
  var ds = {
      SEMVER_SPEC_VERSION: '2.0.0',
      MAX_LENGTH: 256,
      MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991,
      MAX_SAFE_COMPONENT_LENGTH: 16
    },
    Ds = s(function (e, t) {
      const { MAX_SAFE_COMPONENT_LENGTH: s } = ds,
        r = ((t = e.exports = {}).re = []),
        i = (t.src = []),
        a = (t.t = {})
      let n = 0
      const o = (e, t, s) => {
        const o = n++
        ls(o, t),
          (a[e] = o),
          (i[o] = t),
          (r[o] = new RegExp(t, s ? 'g' : void 0))
      }
      o('NUMERICIDENTIFIER', '0|[1-9]\\d*'),
        o('NUMERICIDENTIFIERLOOSE', '[0-9]+'),
        o('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*'),
        o(
          'MAINVERSION',
          `(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})\\.(${
            i[a.NUMERICIDENTIFIER]
          })`
        ),
        o(
          'MAINVERSIONLOOSE',
          `(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${
            i[a.NUMERICIDENTIFIERLOOSE]
          })\\.(${i[a.NUMERICIDENTIFIERLOOSE]})`
        ),
        o(
          'PRERELEASEIDENTIFIER',
          `(?:${i[a.NUMERICIDENTIFIER]}|${i[a.NONNUMERICIDENTIFIER]})`
        ),
        o(
          'PRERELEASEIDENTIFIERLOOSE',
          `(?:${i[a.NUMERICIDENTIFIERLOOSE]}|${i[a.NONNUMERICIDENTIFIER]})`
        ),
        o(
          'PRERELEASE',
          `(?:-(${i[a.PRERELEASEIDENTIFIER]}(?:\\.${
            i[a.PRERELEASEIDENTIFIER]
          })*))`
        ),
        o(
          'PRERELEASELOOSE',
          `(?:-?(${i[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
            i[a.PRERELEASEIDENTIFIERLOOSE]
          })*))`
        ),
        o('BUILDIDENTIFIER', '[0-9A-Za-z-]+'),
        o(
          'BUILD',
          `(?:\\+(${i[a.BUILDIDENTIFIER]}(?:\\.${i[a.BUILDIDENTIFIER]})*))`
        ),
        o(
          'FULLPLAIN',
          `v?${i[a.MAINVERSION]}${i[a.PRERELEASE]}?${i[a.BUILD]}?`
        ),
        o('FULL', `^${i[a.FULLPLAIN]}$`),
        o(
          'LOOSEPLAIN',
          `[v=\\s]*${i[a.MAINVERSIONLOOSE]}${i[a.PRERELEASELOOSE]}?${
            i[a.BUILD]
          }?`
        ),
        o('LOOSE', `^${i[a.LOOSEPLAIN]}$`),
        o('GTLT', '((?:<|>)?=?)'),
        o('XRANGEIDENTIFIERLOOSE', `${i[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
        o('XRANGEIDENTIFIER', `${i[a.NUMERICIDENTIFIER]}|x|X|\\*`),
        o(
          'XRANGEPLAIN',
          `[v=\\s]*(${i[a.XRANGEIDENTIFIER]})(?:\\.(${
            i[a.XRANGEIDENTIFIER]
          })(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:${i[a.PRERELEASE]})?${
            i[a.BUILD]
          }?)?)?`
        ),
        o(
          'XRANGEPLAINLOOSE',
          `[v=\\s]*(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
            i[a.XRANGEIDENTIFIERLOOSE]
          })(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:${i[a.PRERELEASELOOSE]})?${
            i[a.BUILD]
          }?)?)?`
        ),
        o('XRANGE', `^${i[a.GTLT]}\\s*${i[a.XRANGEPLAIN]}$`),
        o('XRANGELOOSE', `^${i[a.GTLT]}\\s*${i[a.XRANGEPLAINLOOSE]}$`),
        o(
          'COERCE',
          `(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?(?:$|[^\\d])`
        ),
        o('COERCERTL', i[a.COERCE], !0),
        o('LONETILDE', '(?:~>?)'),
        o('TILDETRIM', `(\\s*)${i[a.LONETILDE]}\\s+`, !0),
        (t.tildeTrimReplace = '$1~'),
        o('TILDE', `^${i[a.LONETILDE]}${i[a.XRANGEPLAIN]}$`),
        o('TILDELOOSE', `^${i[a.LONETILDE]}${i[a.XRANGEPLAINLOOSE]}$`),
        o('LONECARET', '(?:\\^)'),
        o('CARETTRIM', `(\\s*)${i[a.LONECARET]}\\s+`, !0),
        (t.caretTrimReplace = '$1^'),
        o('CARET', `^${i[a.LONECARET]}${i[a.XRANGEPLAIN]}$`),
        o('CARETLOOSE', `^${i[a.LONECARET]}${i[a.XRANGEPLAINLOOSE]}$`),
        o('COMPARATORLOOSE', `^${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]})$|^$`),
        o('COMPARATOR', `^${i[a.GTLT]}\\s*(${i[a.FULLPLAIN]})$|^$`),
        o(
          'COMPARATORTRIM',
          `(\\s*)${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]}|${i[a.XRANGEPLAIN]})`,
          !0
        ),
        (t.comparatorTrimReplace = '$1$2$3'),
        o(
          'HYPHENRANGE',
          `^\\s*(${i[a.XRANGEPLAIN]})\\s+-\\s+(${i[a.XRANGEPLAIN]})\\s*$`
        ),
        o(
          'HYPHENRANGELOOSE',
          `^\\s*(${i[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${
            i[a.XRANGEPLAINLOOSE]
          })\\s*$`
        ),
        o('STAR', '(<|>)?=?\\s*\\*'),
        o('GTE0', '^\\s*>=\\s*0.0.0\\s*$'),
        o('GTE0PRE', '^\\s*>=\\s*0.0.0-0\\s*$')
    })
  const ms = ['includePrerelease', 'loose', 'rtl']
  var fs = (e) =>
    e
      ? 'object' != typeof e
        ? { loose: !0 }
        : ms.filter((t) => e[t]).reduce((e, t) => ((e[t] = !0), e), {})
      : {}
  const ys = /^[0-9]+$/,
    As = (e, t) => {
      const s = ys.test(e),
        r = ys.test(t)
      return (
        s && r && ((e = +e), (t = +t)),
        e === t ? 0 : s && !r ? -1 : r && !s ? 1 : e < t ? -1 : 1
      )
    }
  var Es = { compareIdentifiers: As, rcompareIdentifiers: (e, t) => As(t, e) }
  const { MAX_LENGTH: Cs, MAX_SAFE_INTEGER: xs } = ds,
    { re: Fs, t: gs } = Ds,
    { compareIdentifiers: bs } = Es
  class Ps {
    constructor(e, t) {
      if (((t = fs(t)), e instanceof Ps)) {
        if (
          e.loose === !!t.loose &&
          e.includePrerelease === !!t.includePrerelease
        )
          return e
        e = e.version
      } else if ('string' != typeof e) throw new TypeError(`Invalid Version: ${e}`)
      if (e.length > Cs)
        throw new TypeError(`version is longer than ${Cs} characters`)
      ls('SemVer', e, t),
        (this.options = t),
        (this.loose = !!t.loose),
        (this.includePrerelease = !!t.includePrerelease)
      const s = e.trim().match(t.loose ? Fs[gs.LOOSE] : Fs[gs.FULL])
      if (!s) throw new TypeError(`Invalid Version: ${e}`)
      if (
        ((this.raw = e),
        (this.major = +s[1]),
        (this.minor = +s[2]),
        (this.patch = +s[3]),
        this.major > xs || this.major < 0)
      )
        throw new TypeError('Invalid major version')
      if (this.minor > xs || this.minor < 0)
        throw new TypeError('Invalid minor version')
      if (this.patch > xs || this.patch < 0)
        throw new TypeError('Invalid patch version')
      s[4]
        ? (this.prerelease = s[4].split('.').map((e) => {
            if (/^[0-9]+$/.test(e)) {
              const t = +e
              if (t >= 0 && t < xs) return t
            }
            return e
          }))
        : (this.prerelease = []),
        (this.build = s[5] ? s[5].split('.') : []),
        this.format()
    }
    format() {
      return (
        (this.version = `${this.major}.${this.minor}.${this.patch}`),
        this.prerelease.length &&
          (this.version += `-${this.prerelease.join('.')}`),
        this.version
      )
    }
    toString() {
      return this.version
    }
    compare(e) {
      if (
        (ls('SemVer.compare', this.version, this.options, e),
        !(e instanceof Ps))
      ) {
        if ('string' == typeof e && e === this.version) return 0
        e = new Ps(e, this.options)
      }
      return e.version === this.version
        ? 0
        : this.compareMain(e) || this.comparePre(e)
    }
    compareMain(e) {
      return (
        e instanceof Ps || (e = new Ps(e, this.options)),
        bs(this.major, e.major) ||
          bs(this.minor, e.minor) ||
          bs(this.patch, e.patch)
      )
    }
    comparePre(e) {
      if (
        (e instanceof Ps || (e = new Ps(e, this.options)),
        this.prerelease.length && !e.prerelease.length)
      )
        return -1
      if (!this.prerelease.length && e.prerelease.length) return 1
      if (!this.prerelease.length && !e.prerelease.length) return 0
      let t = 0
      do {
        const s = this.prerelease[t],
          r = e.prerelease[t]
        if ((ls('prerelease compare', t, s, r), void 0 === s && void 0 === r))
          return 0
        if (void 0 === r) return 1
        if (void 0 === s) return -1
        if (s !== r) return bs(s, r)
      } while (++t)
    }
    compareBuild(e) {
      e instanceof Ps || (e = new Ps(e, this.options))
      let t = 0
      do {
        const s = this.build[t],
          r = e.build[t]
        if ((ls('prerelease compare', t, s, r), void 0 === s && void 0 === r))
          return 0
        if (void 0 === r) return 1
        if (void 0 === s) return -1
        if (s !== r) return bs(s, r)
      } while (++t)
    }
    inc(e, t) {
      switch (e) {
        case 'premajor':
          ;(this.prerelease.length = 0),
            (this.patch = 0),
            (this.minor = 0),
            this.major++,
            this.inc('pre', t)
          break
        case 'preminor':
          ;(this.prerelease.length = 0),
            (this.patch = 0),
            this.minor++,
            this.inc('pre', t)
          break
        case 'prepatch':
          ;(this.prerelease.length = 0),
            this.inc('patch', t),
            this.inc('pre', t)
          break
        case 'prerelease':
          0 === this.prerelease.length && this.inc('patch', t),
            this.inc('pre', t)
          break
        case 'major':
          ;(0 === this.minor &&
            0 === this.patch &&
            0 !== this.prerelease.length) ||
            this.major++,
            (this.minor = 0),
            (this.patch = 0),
            (this.prerelease = [])
          break
        case 'minor':
          ;(0 === this.patch && 0 !== this.prerelease.length) || this.minor++,
            (this.patch = 0),
            (this.prerelease = [])
          break
        case 'patch':
          0 === this.prerelease.length && this.patch++, (this.prerelease = [])
          break
        case 'pre':
          if (0 === this.prerelease.length) this.prerelease = [0]
          else {
            let e = this.prerelease.length
            for (; --e >= 0; )
              'number' == typeof this.prerelease[e] &&
                (this.prerelease[e]++, (e = -2))
            ;-1 === e && this.prerelease.push(0)
          }
          t &&
            (this.prerelease[0] === t
              ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0])
              : (this.prerelease = [t, 0]))
          break
        default:
          throw new Error(`invalid increment argument: ${e}`)
      }
      return this.format(), (this.raw = this.version), this
    }
  }
  var Ts = Ps
  var ws = (e, t, s) => new Ts(e, s).compare(new Ts(t, s))
  var Ss = (e, t, s) => ws(e, t, s) < 0
  var Bs = (e, t, s) => ws(e, t, s) >= 0,
    Ns = s(function (e, t) {
      function s() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      }
      function r() {
        return 'undefined' != typeof WeakMap
          ? new WeakMap()
          : {
              add: s,
              delete: s,
              get: s,
              set: s,
              has: function (e) {
                return !1
              }
            }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.outdent = void 0)
      var i = Object.prototype.hasOwnProperty,
        a = function (e, t) {
          return i.call(e, t)
        }
      function n(e, t) {
        for (var s in t) a(t, s) && (e[s] = t[s])
        return e
      }
      var o = /^[ \t]*(?:\r\n|\r|\n)/,
        u = /(?:\r\n|\r|\n)[ \t]*$/,
        h = /^(?:[\r\n]|$)/,
        c = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,
        p = /^[ \t]*[\r\n][ \t\r\n]*$/
      function l(e, t, s) {
        var r = 0,
          i = e[0].match(c)
        i && (r = i[1].length)
        var a = new RegExp('(\\r\\n|\\r|\\n).{0,' + r + '}', 'g')
        t && (e = e.slice(1))
        var n = s.newline,
          h = s.trimLeadingNewline,
          p = s.trimTrailingNewline,
          l = 'string' == typeof n,
          d = e.length
        return e.map(function (e, t) {
          return (
            (e = e.replace(a, '$1')),
            0 === t && h && (e = e.replace(o, '')),
            t === d - 1 && p && (e = e.replace(u, '')),
            l &&
              (e = e.replace(/\r\n|\n|\r/g, function (e) {
                return n
              })),
            e
          )
        })
      }
      function d(e, t) {
        for (var s = '', r = 0, i = e.length; r < i; r++)
          (s += e[r]), r < i - 1 && (s += t[r])
        return s
      }
      function D(e) {
        return a(e, 'raw') && a(e, 'length')
      }
      var m = (function e(t) {
        var s = r(),
          i = r()
        return n(
          function r(a) {
            for (var o = [], u = 1; u < arguments.length; u++)
              o[u - 1] = arguments[u]
            if (D(a)) {
              var c = a,
                f = (o[0] === r || o[0] === m) && p.test(c[0]) && h.test(c[1]),
                y = f ? i : s,
                A = y.get(c)
              if ((A || ((A = l(c, f, t)), y.set(c, A)), 0 === o.length))
                return A[0]
              var E = d(A, f ? o.slice(1) : o)
              return E
            }
            return e(n(n({}, t), a || {}))
          },
          {
            string: function (e) {
              return l([e], !1, t)[0]
            }
          }
        )
      })({ trimLeadingNewline: !0, trimTrailingNewline: !0 })
      ;(t.outdent = m), (t.default = m)
      try {
        ;(e.exports = m),
          Object.defineProperty(m, '__esModule', { value: !0 }),
          (m.default = m),
          (m.outdent = m)
      } catch (e) {}
    })
  const { outdent: Is } = Ns,
    vs = 'Config',
    ks = 'Editor',
    Ls = 'Other',
    Os = 'Global',
    Ms = 'Special',
    Rs = {
      cursorOffset: {
        since: '1.4.0',
        category: Ms,
        type: 'int',
        default: -1,
        range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 },
        description: Is`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `,
        cliCategory: ks
      },
      endOfLine: {
        since: '1.15.0',
        category: Os,
        type: 'choice',
        default: [
          { since: '1.15.0', value: 'auto' },
          { since: '2.0.0', value: 'lf' }
        ],
        description: 'Which end of line characters to apply.',
        choices: [
          {
            value: 'lf',
            description:
              'Line Feed only (\\n), common on Linux and macOS as well as inside git repos'
          },
          {
            value: 'crlf',
            description:
              'Carriage Return + Line Feed characters (\\r\\n), common on Windows'
          },
          {
            value: 'cr',
            description:
              'Carriage Return character only (\\r), used very rarely'
          },
          {
            value: 'auto',
            description: Is`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        `
          }
        ]
      },
      filepath: {
        since: '1.4.0',
        category: Ms,
        type: 'path',
        description:
          'Specify the input filepath. This will be used to do parser inference.',
        cliName: 'stdin-filepath',
        cliCategory: Ls,
        cliDescription: 'Path to the file to pretend that stdin comes from.'
      },
      insertPragma: {
        since: '1.8.0',
        category: Ms,
        type: 'boolean',
        default: !1,
        description:
          "Insert @format pragma into file's first docblock comment.",
        cliCategory: Ls
      },
      parser: {
        since: '0.0.10',
        category: Os,
        type: 'choice',
        default: [
          { since: '0.0.10', value: 'babylon' },
          { since: '1.13.0', value: void 0 }
        ],
        description: 'Which parser to use.',
        exception: (e) => 'string' == typeof e || 'function' == typeof e,
        choices: [
          { value: 'flow', description: 'Flow' },
          { value: 'babel', since: '1.16.0', description: 'JavaScript' },
          { value: 'babel-flow', since: '1.16.0', description: 'Flow' },
          { value: 'babel-ts', since: '2.0.0', description: 'TypeScript' },
          { value: 'typescript', since: '1.4.0', description: 'TypeScript' },
          { value: 'espree', since: '2.2.0', description: 'JavaScript' },
          { value: 'meriyah', since: '2.2.0', description: 'JavaScript' },
          { value: 'css', since: '1.7.1', description: 'CSS' },
          { value: 'less', since: '1.7.1', description: 'Less' },
          { value: 'scss', since: '1.7.1', description: 'SCSS' },
          { value: 'json', since: '1.5.0', description: 'JSON' },
          { value: 'json5', since: '1.13.0', description: 'JSON5' },
          {
            value: 'json-stringify',
            since: '1.13.0',
            description: 'JSON.stringify'
          },
          { value: 'graphql', since: '1.5.0', description: 'GraphQL' },
          { value: 'markdown', since: '1.8.0', description: 'Markdown' },
          { value: 'mdx', since: '1.15.0', description: 'MDX' },
          { value: 'vue', since: '1.10.0', description: 'Vue' },
          { value: 'yaml', since: '1.14.0', description: 'YAML' },
          {
            value: 'glimmer',
            since: '2.3.0',
            description: 'Ember / Handlebars'
          },
          { value: 'html', since: '1.15.0', description: 'HTML' },
          { value: 'angular', since: '1.15.0', description: 'Angular' },
          {
            value: 'lwc',
            since: '1.17.0',
            description: 'Lightning Web Components'
          }
        ]
      },
      plugins: {
        since: '1.10.0',
        type: 'path',
        array: !0,
        default: [{ value: [] }],
        category: Os,
        description:
          'Add a plugin. Multiple plugins can be passed as separate `--plugin`s.',
        exception: (e) => 'string' == typeof e || 'object' == typeof e,
        cliName: 'plugin',
        cliCategory: vs
      },
      pluginSearchDirs: {
        since: '1.13.0',
        type: 'path',
        array: !0,
        default: [{ value: [] }],
        category: Os,
        description: Is`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `,
        exception: (e) => 'string' == typeof e || 'object' == typeof e,
        cliName: 'plugin-search-dir',
        cliCategory: vs
      },
      printWidth: {
        since: '0.0.0',
        category: Os,
        type: 'int',
        default: 80,
        description: 'The line length where Prettier will try wrap.',
        range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }
      },
      rangeEnd: {
        since: '1.4.0',
        category: Ms,
        type: 'int',
        default: Number.POSITIVE_INFINITY,
        range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 },
        description: Is`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `,
        cliCategory: ks
      },
      rangeStart: {
        since: '1.4.0',
        category: Ms,
        type: 'int',
        default: 0,
        range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 },
        description: Is`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `,
        cliCategory: ks
      },
      requirePragma: {
        since: '1.7.0',
        category: Ms,
        type: 'boolean',
        default: !1,
        description: Is`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `,
        cliCategory: Ls
      },
      tabWidth: {
        type: 'int',
        category: Os,
        default: 2,
        description: 'Number of spaces per indentation level.',
        range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }
      },
      useTabs: {
        since: '1.0.0',
        category: Os,
        type: 'boolean',
        default: !1,
        description: 'Indent with tabs instead of spaces.'
      },
      embeddedLanguageFormatting: {
        since: '2.1.0',
        category: Os,
        type: 'choice',
        default: [{ since: '2.1.0', value: 'auto' }],
        description:
          'Control how Prettier formats quoted code embedded in the file.',
        choices: [
          {
            value: 'auto',
            description:
              'Format embedded code if Prettier can automatically identify it.'
          },
          {
            value: 'off',
            description: 'Never automatically format embedded code.'
          }
        ]
      }
    }
  const js = ['cliName', 'cliCategory', 'cliDescription'],
    _s = { compare: ws, lt: Ss, gte: Bs },
    Us = '2.4.1',
    qs = {
      CATEGORY_CONFIG: vs,
      CATEGORY_EDITOR: ks,
      CATEGORY_FORMAT: 'Format',
      CATEGORY_OTHER: Ls,
      CATEGORY_OUTPUT: 'Output',
      CATEGORY_GLOBAL: Os,
      CATEGORY_SPECIAL: Ms,
      options: Rs
    }.options
  var $s = {
    getSupportInfo: function ({
      plugins: e = [],
      showUnreleased: t = !1,
      showDeprecated: s = !1,
      showInternal: r = !1
    } = {}) {
      const i = Us.split('-', 1)[0],
        a = e.flatMap((e) => e.languages || []).filter(h),
        n = ((o = Object.assign({}, ...e.map(({ options: e }) => e), qs)),
        (u = 'name'),
        Object.entries(o).map(([e, t]) => Object.assign({ [u]: e }, t)))
          .filter((e) => h(e) && c(e))
          .sort((e, t) => (e.name === t.name ? 0 : e.name < t.name ? -1 : 1))
          .map(function (e) {
            if (r) return e
            return ut(e, js)
          })
          .map((t) => {
            ;(t = Object.assign({}, t)),
              Array.isArray(t.default) &&
                (t.default =
                  1 === t.default.length
                    ? t.default[0].value
                    : t.default
                        .filter(h)
                        .sort((e, t) => _s.compare(t.since, e.since))[0].value),
              Array.isArray(t.choices) &&
                ((t.choices = t.choices.filter((e) => h(e) && c(e))),
                'parser' === t.name &&
                  (function (e, t, s) {
                    const r = new Set(e.choices.map((e) => e.value))
                    for (const i of t)
                      if (i.parsers)
                        for (const t of i.parsers)
                          if (!r.has(t)) {
                            r.add(t)
                            const a = s.find((e) => e.parsers && e.parsers[t])
                            let n = i.name
                            a && a.name && (n += ` (plugin: ${a.name})`),
                              e.choices.push({ value: t, description: n })
                          }
                  })(t, a, e))
            const s = Object.fromEntries(
              e
                .filter(
                  (e) => e.defaultOptions && void 0 !== e.defaultOptions[t.name]
                )
                .map((e) => [e.name, e.defaultOptions[t.name]])
            )
            return Object.assign(
              Object.assign({}, t),
              {},
              { pluginDefaults: s }
            )
          })
      var o, u
      return { languages: a, options: n }
      function h(e) {
        return t || !('since' in e) || (e.since && _s.gte(i, e.since))
      }
      function c(e) {
        return (
          s || !('deprecated' in e) || (e.deprecated && _s.lt(i, e.deprecated))
        )
      }
    }
  }
  const { getSupportInfo: Hs } = $s,
    Vs = /[^\x20-\x7F]/
  function zs(e) {
    return (t, s, r) => {
      const i = r && r.backwards
      if (!1 === s) return !1
      const { length: a } = t
      let n = s
      for (; n >= 0 && n < a; ) {
        const s = t.charAt(n)
        if (e instanceof RegExp) {
          if (!e.test(s)) return n
        } else if (!e.includes(s)) return n
        i ? n-- : n++
      }
      return (-1 === n || n === a) && n
    }
  }
  const Ws = zs(/\s/),
    Gs = zs(' \t'),
    Ks = zs(',; \t'),
    Xs = zs(/[^\n\r]/)
  function Js(e, t) {
    if (!1 === t) return !1
    if ('/' === e.charAt(t) && '*' === e.charAt(t + 1))
      for (let s = t + 2; s < e.length; ++s)
        if ('*' === e.charAt(s) && '/' === e.charAt(s + 1)) return s + 2
    return t
  }
  function Ys(e, t) {
    return (
      !1 !== t &&
      ('/' === e.charAt(t) && '/' === e.charAt(t + 1) ? Xs(e, t) : t)
    )
  }
  function Qs(e, t, s) {
    const r = s && s.backwards
    if (!1 === t) return !1
    const i = e.charAt(t)
    if (r) {
      if ('\r' === e.charAt(t - 1) && '\n' === i) return t - 2
      if ('\n' === i || '\r' === i || '\u2028' === i || '\u2029' === i)
        return t - 1
    } else {
      if ('\r' === i && '\n' === e.charAt(t + 1)) return t + 2
      if ('\n' === i || '\r' === i || '\u2028' === i || '\u2029' === i)
        return t + 1
    }
    return t
  }
  function Zs(e, t, s = {}) {
    const r = Gs(e, s.backwards ? t - 1 : t, s)
    return r !== Qs(e, r, s)
  }
  function er(e, t) {
    let s = null,
      r = t
    for (; r !== s; ) (s = r), (r = Ks(e, r)), (r = Js(e, r)), (r = Gs(e, r))
    return (r = Ys(e, r)), (r = Qs(e, r)), !1 !== r && Zs(e, r)
  }
  function tr(e, t) {
    let s = null,
      r = t
    for (; r !== s; )
      (s = r), (r = Gs(e, r)), (r = Js(e, r)), (r = Ys(e, r)), (r = Qs(e, r))
    return r
  }
  function sr(e, t, s) {
    return tr(e, s(t))
  }
  function rr(e, t, s = 0) {
    let r = 0
    for (let i = s; i < e.length; ++i)
      '\t' === e[i] ? (r = r + t - (r % t)) : r++
    return r
  }
  function ir(e, t) {
    const s = e.slice(1, -1),
      r = { quote: '"', regex: /"/g },
      i = { quote: "'", regex: /'/g },
      a = "'" === t ? i : r,
      n = a === i ? r : i
    let o = a.quote
    if (s.includes(a.quote) || s.includes(n.quote)) {
      o =
        (s.match(a.regex) || []).length > (s.match(n.regex) || []).length
          ? n.quote
          : a.quote
    }
    return o
  }
  function ar(e, t, s) {
    const r = '"' === t ? "'" : '"',
      i = e.replace(/\\(.)|(["'])/gs, (e, i, a) =>
        i === r
          ? i
          : a === t
          ? '\\' + a
          : a ||
            (s && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(i) ? i : '\\' + i)
      )
    return t + i + t
  }
  function nr(e, t) {
    ;(e.comments || (e.comments = [])).push(t),
      (t.printed = !1),
      (t.nodeDescription = (function (e) {
        const t = e.type || e.kind || '(unknown type)'
        let s = String(
          e.name ||
            (e.id && ('object' == typeof e.id ? e.id.name : e.id)) ||
            (e.key && ('object' == typeof e.key ? e.key.name : e.key)) ||
            (e.value && ('object' == typeof e.value ? '' : String(e.value))) ||
            e.operator ||
            ''
        )
        s.length > 20 && (s = s.slice(0, 19) + '\u2026')
        return t + (s ? ' ' + s : '')
      })(e))
  }
  var or,
    ur = {
      inferParserByLanguage: function (e, t) {
        const { languages: s } = Hs({ plugins: t.plugins }),
          r =
            s.find(({ name: t }) => t.toLowerCase() === e) ||
            s.find(({ aliases: t }) => Array.isArray(t) && t.includes(e)) ||
            s.find(
              ({ extensions: t }) => Array.isArray(t) && t.includes(`.${e}`)
            )
        return r && r.parsers[0]
      },
      getStringWidth: function (e) {
        return e ? (Vs.test(e) ? it(e) : e.length) : 0
      },
      getMaxContinuousCount: function (e, t) {
        const s = e.match(new RegExp(`(${nt(t)})+`, 'g'))
        return null === s
          ? 0
          : s.reduce((e, s) => Math.max(e, s.length / t.length), 0)
      },
      getMinNotPresentContinuousCount: function (e, t) {
        const s = e.match(new RegExp(`(${nt(t)})+`, 'g'))
        if (null === s) return 0
        const r = new Map()
        let i = 0
        for (const e of s) {
          const s = e.length / t.length
          r.set(s, !0), s > i && (i = s)
        }
        for (let e = 1; e < i; e++) if (!r.get(e)) return e
        return i + 1
      },
      getPenultimate: (e) => e[e.length - 2],
      getLast: ot,
      getNextNonSpaceNonCommentCharacterIndexWithStartIndex: tr,
      getNextNonSpaceNonCommentCharacterIndex: sr,
      getNextNonSpaceNonCommentCharacter: function (e, t, s) {
        return e.charAt(sr(e, t, s))
      },
      skip: zs,
      skipWhitespace: Ws,
      skipSpaces: Gs,
      skipToLineEnd: Ks,
      skipEverythingButNewLine: Xs,
      skipInlineComment: Js,
      skipTrailingComment: Ys,
      skipNewline: Qs,
      isNextLineEmptyAfterIndex: er,
      isNextLineEmpty: function (e, t, s) {
        return er(e, s(t))
      },
      isPreviousLineEmpty: function (e, t, s) {
        let r = s(t) - 1
        return (
          (r = Gs(e, r, { backwards: !0 })),
          (r = Qs(e, r, { backwards: !0 })),
          (r = Gs(e, r, { backwards: !0 })),
          r !== Qs(e, r, { backwards: !0 })
        )
      },
      hasNewline: Zs,
      hasNewlineInRange: function (e, t, s) {
        for (let r = t; r < s; ++r) if ('\n' === e.charAt(r)) return !0
        return !1
      },
      hasSpaces: function (e, t, s = {}) {
        return Gs(e, s.backwards ? t - 1 : t, s) !== t
      },
      getAlignmentSize: rr,
      getIndentSize: function (e, t) {
        const s = e.lastIndexOf('\n')
        return -1 === s ? 0 : rr(e.slice(s + 1).match(/^[\t ]*/)[0], t)
      },
      getPreferredQuote: ir,
      printString: function (e, t) {
        return ar(
          e.slice(1, -1),
          'json' === t.parser ||
            ('json5' === t.parser &&
              'preserve' === t.quoteProps &&
              !t.singleQuote)
            ? '"'
            : t.__isInHtmlAttribute
            ? "'"
            : ir(e, t.singleQuote ? "'" : '"'),
          !(
            'css' === t.parser ||
            'less' === t.parser ||
            'scss' === t.parser ||
            t.__embeddedInHtml
          )
        )
      },
      printNumber: function (e) {
        return e
          .toLowerCase()
          .replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, '$1$2$3')
          .replace(/^([+-]?[\d.]+)e[+-]?0+$/, '$1')
          .replace(/^([+-])?\./, '$10.')
          .replace(/(\.\d+?)0+(?=e|$)/, '$1')
          .replace(/\.(?=e|$)/, '')
      },
      makeString: ar,
      addLeadingComment: function (e, t) {
        ;(t.leading = !0), (t.trailing = !1), nr(e, t)
      },
      addDanglingComment: function (e, t, s) {
        ;(t.leading = !1), (t.trailing = !1), s && (t.marker = s), nr(e, t)
      },
      addTrailingComment: function (e, t) {
        ;(t.leading = !1), (t.trailing = !0), nr(e, t)
      },
      isFrontMatterNode: function (e) {
        return e && 'front-matter' === e.type
      },
      getShebang: function (e) {
        if (!e.startsWith('#!')) return ''
        const t = e.indexOf('\n')
        return -1 === t ? e : e.slice(0, t)
      },
      isNonEmptyArray: function (e) {
        return Array.isArray(e) && e.length > 0
      },
      createGroupIdMapper: function (e) {
        const t = new WeakMap()
        return function (s) {
          return t.has(s) || t.set(s, Symbol(e)), t.get(s)
        }
      }
    }
  function hr() {
    if (void 0 === or) {
      var e = new ArrayBuffer(2),
        t = new Uint8Array(e),
        s = new Uint16Array(e)
      if (((t[0] = 1), (t[1] = 2), 258 === s[0])) or = 'BE'
      else {
        if (513 !== s[0]) throw new Error('unable to figure out endianess')
        or = 'LE'
      }
    }
    return or
  }
  function cr() {
    return void 0 !== qt.location ? qt.location.hostname : ''
  }
  function pr() {
    return []
  }
  function lr() {
    return 0
  }
  function dr() {
    return Number.MAX_VALUE
  }
  function Dr() {
    return Number.MAX_VALUE
  }
  function mr() {
    return []
  }
  function fr() {
    return 'Browser'
  }
  function yr() {
    return void 0 !== qt.navigator ? qt.navigator.appVersion : ''
  }
  function Ar() {}
  function Er() {}
  function Cr() {
    return 'javascript'
  }
  function xr() {
    return 'browser'
  }
  function Fr() {
    return '/tmp'
  }
  var gr = Fr,
    br = {
      EOL: '\n',
      arch: Cr,
      platform: xr,
      tmpdir: gr,
      tmpDir: Fr,
      networkInterfaces: Ar,
      getNetworkInterfaces: Er,
      release: yr,
      type: fr,
      cpus: mr,
      totalmem: Dr,
      freemem: dr,
      uptime: lr,
      loadavg: pr,
      hostname: cr,
      endianness: hr
    },
    Pr = Object.freeze({
      __proto__: null,
      endianness: hr,
      hostname: cr,
      loadavg: pr,
      uptime: lr,
      freemem: dr,
      totalmem: Dr,
      cpus: mr,
      type: fr,
      release: yr,
      networkInterfaces: Ar,
      getNetworkInterfaces: Er,
      arch: Cr,
      platform: xr,
      tmpDir: Fr,
      tmpdir: gr,
      EOL: '\n',
      default: br
    })
  const Tr = (e) => {
    if ('string' != typeof e) throw new TypeError('Expected a string')
    const t = e.match(/(?:\r?\n)/g) || []
    if (0 === t.length) return
    const s = t.filter((e) => '\r\n' === e).length
    return s > t.length - s ? '\r\n' : '\n'
  }
  var wr = Tr
  wr.graceful = (e) => ('string' == typeof e && Tr(e)) || '\n'
  var Sr = t(Pr),
    Br = function (e) {
      const t = e.match(jr)
      return t ? t[0].trimLeft() : ''
    },
    Nr = function (e) {
      const t = e.match(jr)
      return t && t[0] ? e.substring(t[0].length) : e
    },
    Ir = function (e) {
      return zr(e).pragmas
    },
    vr = zr,
    kr = function ({ comments: e = '', pragmas: t = {} }) {
      const s = (0, Or().default)(e) || Lr().EOL,
        r = ' *',
        i = Object.keys(t),
        a = i
          .map((e) => Wr(e, t[e]))
          .reduce((e, t) => e.concat(t), [])
          .map((e) => ' * ' + e + s)
          .join('')
      if (!e) {
        if (0 === i.length) return ''
        if (1 === i.length && !Array.isArray(t[i[0]])) {
          const e = t[i[0]]
          return `/** ${Wr(i[0], e)[0]} */`
        }
      }
      const n =
        e
          .split(s)
          .map((e) => ` * ${e}`)
          .join(s) + s
      return '/**' + s + (e ? n : '') + (e && i.length ? r + s : '') + a + ' */'
    }
  function Lr() {
    const e = Sr
    return (
      (Lr = function () {
        return e
      }),
      e
    )
  }
  function Or() {
    const e = (t = wr) && t.__esModule ? t : { default: t }
    var t
    return (
      (Or = function () {
        return e
      }),
      e
    )
  }
  const Mr = /\*\/$/,
    Rr = /^\/\*\*/,
    jr = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
    _r = /(^|\s+)\/\/([^\r\n]*)/g,
    Ur = /^(\r?\n)+/,
    qr =
      /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,
    $r = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,
    Hr = /(\r?\n|^) *\* ?/g,
    Vr = []
  function zr(e) {
    const t = (0, Or().default)(e) || Lr().EOL
    e = e.replace(Rr, '').replace(Mr, '').replace(Hr, '$1')
    let s = ''
    for (; s !== e; ) (s = e), (e = e.replace(qr, `${t}$1 $2${t}`))
    e = e.replace(Ur, '').trimRight()
    const r = Object.create(null),
      i = e.replace($r, '').replace(Ur, '').trimRight()
    let a
    for (; (a = $r.exec(e)); ) {
      const e = a[2].replace(_r, '')
      'string' == typeof r[a[1]] || Array.isArray(r[a[1]])
        ? (r[a[1]] = Vr.concat(r[a[1]], e))
        : (r[a[1]] = e)
    }
    return { comments: i, pragmas: r }
  }
  function Wr(e, t) {
    return Vr.concat(t).map((t) => `@${e} ${t}`.trim())
  }
  var Gr = Object.defineProperty(
    { extract: Br, strip: Nr, parse: Ir, parseWithComments: vr, print: kr },
    '__esModule',
    { value: !0 }
  )
  var Kr = {
    guessEndOfLine: function (e) {
      const t = e.indexOf('\r')
      return t >= 0 ? ('\n' === e.charAt(t + 1) ? 'crlf' : 'cr') : 'lf'
    },
    convertEndOfLineToChars: function (e) {
      switch (e) {
        case 'cr':
          return '\r'
        case 'crlf':
          return '\r\n'
        default:
          return '\n'
      }
    },
    countEndOfLineChars: function (e, t) {
      let s
      if ('\n' === t) s = /\n/g
      else if ('\r' === t) s = /\r/g
      else {
        if ('\r\n' !== t)
          throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`)
        s = /\r\n/g
      }
      const r = e.match(s)
      return r ? r.length : 0
    },
    normalizeEndOfLine: function (e) {
      return e.replace(/\r\n?/g, '\n')
    }
  }
  const { parseWithComments: Xr, strip: Jr, extract: Yr, print: Qr } = Gr,
    { getShebang: Zr } = ur,
    { normalizeEndOfLine: ei } = Kr
  function ti(e) {
    const t = Zr(e)
    t && (e = e.slice(t.length + 1))
    const s = Yr(e),
      { pragmas: r, comments: i } = Xr(s)
    return { shebang: t, text: e, pragmas: r, comments: i }
  }
  var si = {
    hasPragma: function (e) {
      const t = Object.keys(ti(e).pragmas)
      return t.includes('prettier') || t.includes('format')
    },
    insertPragma: function (e) {
      const { shebang: t, text: s, pragmas: r, comments: i } = ti(e),
        a = Jr(s),
        n = Qr({
          pragmas: Object.assign({ format: '' }, r),
          comments: i.trimStart()
        })
      return (
        (t ? `${t}\n` : '') + ei(n) + (a.startsWith('\n') ? '\n' : '\n\n') + a
      )
    }
  }
  const { isNonEmptyArray: ri } = ur
  function ii(e, t) {
    const { ignoreDecorators: s } = t || {}
    if (!s) {
      const t = (e.declaration && e.declaration.decorators) || e.decorators
      if (ri(t)) return ii(t[0])
    }
    return e.range ? e.range[0] : e.start
  }
  function ai(e) {
    return e.range ? e.range[1] : e.end
  }
  function ni(e, t) {
    return ii(e) === ii(t)
  }
  var oi = {
    locStart: ii,
    locEnd: ai,
    hasSameLocStart: ni,
    hasSameLoc: function (e, t) {
      return (
        ni(e, t) &&
        (function (e, t) {
          return ai(e) === ai(t)
        })(e, t)
      )
    }
  }
  const { hasPragma: ui } = si,
    { locStart: hi, locEnd: ci } = oi
  var pi = function (e) {
    return (
      (e = 'function' == typeof e ? { parse: e } : e),
      Object.assign(
        { astFormat: 'estree', hasPragma: ui, locStart: hi, locEnd: ci },
        e
      )
    )
  }
  var li = function (e, t) {
    const s = new SyntaxError(
      e + ' (' + t.start.line + ':' + t.start.column + ')'
    )
    return (s.loc = t), s
  }
  var di = function (e) {
      const { message: t, loc: s } = e
      return li(t.replace(/ \(.*\)/, ''), {
        start: { line: s ? s.line : 0, column: s ? s.column + 1 : 0 }
      })
    },
    Di = s(function (e) {
      !(function () {
        function t(e) {
          if (null == e) return !1
          switch (e.type) {
            case 'BlockStatement':
            case 'BreakStatement':
            case 'ContinueStatement':
            case 'DebuggerStatement':
            case 'DoWhileStatement':
            case 'EmptyStatement':
            case 'ExpressionStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'IfStatement':
            case 'LabeledStatement':
            case 'ReturnStatement':
            case 'SwitchStatement':
            case 'ThrowStatement':
            case 'TryStatement':
            case 'VariableDeclaration':
            case 'WhileStatement':
            case 'WithStatement':
              return !0
          }
          return !1
        }
        function s(e) {
          switch (e.type) {
            case 'IfStatement':
              return null != e.alternate ? e.alternate : e.consequent
            case 'LabeledStatement':
            case 'ForStatement':
            case 'ForInStatement':
            case 'WhileStatement':
            case 'WithStatement':
              return e.body
          }
          return null
        }
        e.exports = {
          isExpression: function (e) {
            if (null == e) return !1
            switch (e.type) {
              case 'ArrayExpression':
              case 'AssignmentExpression':
              case 'BinaryExpression':
              case 'CallExpression':
              case 'ConditionalExpression':
              case 'FunctionExpression':
              case 'Identifier':
              case 'Literal':
              case 'LogicalExpression':
              case 'MemberExpression':
              case 'NewExpression':
              case 'ObjectExpression':
              case 'SequenceExpression':
              case 'ThisExpression':
              case 'UnaryExpression':
              case 'UpdateExpression':
                return !0
            }
            return !1
          },
          isStatement: t,
          isIterationStatement: function (e) {
            if (null == e) return !1
            switch (e.type) {
              case 'DoWhileStatement':
              case 'ForInStatement':
              case 'ForStatement':
              case 'WhileStatement':
                return !0
            }
            return !1
          },
          isSourceElement: function (e) {
            return t(e) || (null != e && 'FunctionDeclaration' === e.type)
          },
          isProblematicIfStatement: function (e) {
            var t
            if ('IfStatement' !== e.type) return !1
            if (null == e.alternate) return !1
            t = e.consequent
            do {
              if ('IfStatement' === t.type && null == t.alternate) return !0
              t = s(t)
            } while (t)
            return !1
          },
          trailingStatement: s
        }
      })()
    }),
    mi = s(function (e) {
      !(function () {
        var t, s, r, i, a, n
        function o(e) {
          return e <= 65535
            ? String.fromCharCode(e)
            : String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296) +
                String.fromCharCode(((e - 65536) % 1024) + 56320)
        }
        for (
          s = {
            NonAsciiIdentifierStart:
              /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
            NonAsciiIdentifierPart:
              /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
          },
            t = {
              NonAsciiIdentifierStart:
                /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
              NonAsciiIdentifierPart:
                /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
            },
            r = [
              5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201,
              8202, 8239, 8287, 12288, 65279
            ],
            i = new Array(128),
            n = 0;
          n < 128;
          ++n
        )
          i[n] =
            (n >= 97 && n <= 122) ||
            (n >= 65 && n <= 90) ||
            36 === n ||
            95 === n
        for (a = new Array(128), n = 0; n < 128; ++n)
          a[n] =
            (n >= 97 && n <= 122) ||
            (n >= 65 && n <= 90) ||
            (n >= 48 && n <= 57) ||
            36 === n ||
            95 === n
        e.exports = {
          isDecimalDigit: function (e) {
            return 48 <= e && e <= 57
          },
          isHexDigit: function (e) {
            return (
              (48 <= e && e <= 57) ||
              (97 <= e && e <= 102) ||
              (65 <= e && e <= 70)
            )
          },
          isOctalDigit: function (e) {
            return e >= 48 && e <= 55
          },
          isWhiteSpace: function (e) {
            return (
              32 === e ||
              9 === e ||
              11 === e ||
              12 === e ||
              160 === e ||
              (e >= 5760 && r.indexOf(e) >= 0)
            )
          },
          isLineTerminator: function (e) {
            return 10 === e || 13 === e || 8232 === e || 8233 === e
          },
          isIdentifierStartES5: function (e) {
            return e < 128 ? i[e] : s.NonAsciiIdentifierStart.test(o(e))
          },
          isIdentifierPartES5: function (e) {
            return e < 128 ? a[e] : s.NonAsciiIdentifierPart.test(o(e))
          },
          isIdentifierStartES6: function (e) {
            return e < 128 ? i[e] : t.NonAsciiIdentifierStart.test(o(e))
          },
          isIdentifierPartES6: function (e) {
            return e < 128 ? a[e] : t.NonAsciiIdentifierPart.test(o(e))
          }
        }
      })()
    }),
    fi = s(function (e) {
      !(function () {
        var t = mi
        function s(e, t) {
          return !(!t && 'yield' === e) && r(e, t)
        }
        function r(e, t) {
          if (
            t &&
            (function (e) {
              switch (e) {
                case 'implements':
                case 'interface':
                case 'package':
                case 'private':
                case 'protected':
                case 'public':
                case 'static':
                case 'let':
                  return !0
                default:
                  return !1
              }
            })(e)
          )
            return !0
          switch (e.length) {
            case 2:
              return 'if' === e || 'in' === e || 'do' === e
            case 3:
              return 'var' === e || 'for' === e || 'new' === e || 'try' === e
            case 4:
              return (
                'this' === e ||
                'else' === e ||
                'case' === e ||
                'void' === e ||
                'with' === e ||
                'enum' === e
              )
            case 5:
              return (
                'while' === e ||
                'break' === e ||
                'catch' === e ||
                'throw' === e ||
                'const' === e ||
                'yield' === e ||
                'class' === e ||
                'super' === e
              )
            case 6:
              return (
                'return' === e ||
                'typeof' === e ||
                'delete' === e ||
                'switch' === e ||
                'export' === e ||
                'import' === e
              )
            case 7:
              return 'default' === e || 'finally' === e || 'extends' === e
            case 8:
              return 'function' === e || 'continue' === e || 'debugger' === e
            case 10:
              return 'instanceof' === e
            default:
              return !1
          }
        }
        function i(e, t) {
          return 'null' === e || 'true' === e || 'false' === e || s(e, t)
        }
        function a(e, t) {
          return 'null' === e || 'true' === e || 'false' === e || r(e, t)
        }
        function n(e) {
          var s, r, i
          if (0 === e.length) return !1
          if (((i = e.charCodeAt(0)), !t.isIdentifierStartES5(i))) return !1
          for (s = 1, r = e.length; s < r; ++s)
            if (((i = e.charCodeAt(s)), !t.isIdentifierPartES5(i))) return !1
          return !0
        }
        function o(e) {
          var s, r, i, a, n
          if (0 === e.length) return !1
          for (n = t.isIdentifierStartES6, s = 0, r = e.length; s < r; ++s) {
            if (55296 <= (i = e.charCodeAt(s)) && i <= 56319) {
              if (++s >= r) return !1
              if (!(56320 <= (a = e.charCodeAt(s)) && a <= 57343)) return !1
              i = 1024 * (i - 55296) + (a - 56320) + 65536
            }
            if (!n(i)) return !1
            n = t.isIdentifierPartES6
          }
          return !0
        }
        e.exports = {
          isKeywordES5: s,
          isKeywordES6: r,
          isReservedWordES5: i,
          isReservedWordES6: a,
          isRestrictedWord: function (e) {
            return 'eval' === e || 'arguments' === e
          },
          isIdentifierNameES5: n,
          isIdentifierNameES6: o,
          isIdentifierES5: function (e, t) {
            return n(e) && !i(e, t)
          },
          isIdentifierES6: function (e, t) {
            return o(e) && !a(e, t)
          }
        }
      })()
    })
  const yi = s(function (e, t) {
      ;(t.ast = Di), (t.code = mi), (t.keyword = fi)
    }).keyword.isIdentifierNameES5,
    {
      getLast: Ai,
      hasNewline: Ei,
      skipWhitespace: Ci,
      isNonEmptyArray: xi,
      isNextLineEmptyAfterIndex: Fi,
      getStringWidth: gi
    } = ur,
    { locStart: bi, locEnd: Pi, hasSameLocStart: Ti } = oi,
    wi = new RegExp('^(?:(?=.)\\s)*:'),
    Si = new RegExp('^(?:(?=.)\\s)*::')
  function Bi(e) {
    return (
      'Block' === e.type || 'CommentBlock' === e.type || 'MultiLine' === e.type
    )
  }
  function Ni(e) {
    return (
      'Line' === e.type ||
      'CommentLine' === e.type ||
      'SingleLine' === e.type ||
      'HashbangComment' === e.type ||
      'HTMLOpen' === e.type ||
      'HTMLClose' === e.type
    )
  }
  const Ii = new Set([
    'ExportDefaultDeclaration',
    'ExportDefaultSpecifier',
    'DeclareExportDeclaration',
    'ExportNamedDeclaration',
    'ExportAllDeclaration'
  ])
  function vi(e) {
    return e && Ii.has(e.type)
  }
  function ki(e) {
    return (
      'NumericLiteral' === e.type ||
      ('Literal' === e.type && 'number' == typeof e.value)
    )
  }
  function Li(e) {
    return (
      'StringLiteral' === e.type ||
      ('Literal' === e.type && 'string' == typeof e.value)
    )
  }
  function Oi(e) {
    return (
      'FunctionExpression' === e.type || 'ArrowFunctionExpression' === e.type
    )
  }
  function Mi(e) {
    return (
      Hi(e) &&
      'Identifier' === e.callee.type &&
      ('async' === e.callee.name ||
        'inject' === e.callee.name ||
        'fakeAsync' === e.callee.name)
    )
  }
  function Ri(e) {
    return 'JSXElement' === e.type || 'JSXFragment' === e.type
  }
  function ji(e) {
    return 'get' === e.kind || 'set' === e.kind
  }
  function _i(e) {
    return ji(e) || Ti(e, e.value)
  }
  const Ui = new Set([
    'BinaryExpression',
    'LogicalExpression',
    'NGPipeExpression'
  ])
  const qi = new Set([
    'AnyTypeAnnotation',
    'TSAnyKeyword',
    'NullLiteralTypeAnnotation',
    'TSNullKeyword',
    'ThisTypeAnnotation',
    'TSThisType',
    'NumberTypeAnnotation',
    'TSNumberKeyword',
    'VoidTypeAnnotation',
    'TSVoidKeyword',
    'BooleanTypeAnnotation',
    'TSBooleanKeyword',
    'BigIntTypeAnnotation',
    'TSBigIntKeyword',
    'SymbolTypeAnnotation',
    'TSSymbolKeyword',
    'StringTypeAnnotation',
    'TSStringKeyword',
    'BooleanLiteralTypeAnnotation',
    'StringLiteralTypeAnnotation',
    'BigIntLiteralTypeAnnotation',
    'NumberLiteralTypeAnnotation',
    'TSLiteralType',
    'TSTemplateLiteralType',
    'EmptyTypeAnnotation',
    'MixedTypeAnnotation',
    'TSNeverKeyword',
    'TSObjectKeyword',
    'TSUndefinedKeyword',
    'TSUnknownKeyword'
  ])
  const $i = /^(?:skip|[fx]?(?:it|describe|test))$/
  function Hi(e) {
    return (
      e && ('CallExpression' === e.type || 'OptionalCallExpression' === e.type)
    )
  }
  function Vi(e) {
    return (
      e &&
      ('MemberExpression' === e.type || 'OptionalMemberExpression' === e.type)
    )
  }
  function zi(e) {
    return /^(?:\d+|\d+\.\d+)$/.test(e)
  }
  function Wi(e) {
    return e.quasis.some((e) => e.value.raw.includes('\n'))
  }
  function Gi(e) {
    return e.extra ? e.extra.raw : e.raw
  }
  const Ki = { '==': !0, '!=': !0, '===': !0, '!==': !0 },
    Xi = { '*': !0, '/': !0, '%': !0 },
    Ji = { '>>': !0, '>>>': !0, '<<': !0 }
  const Yi = {}
  for (const [e, t] of [
    ['|>'],
    ['??'],
    ['||'],
    ['&&'],
    ['|'],
    ['^'],
    ['&'],
    ['==', '===', '!=', '!=='],
    ['<', '>', '<=', '>=', 'in', 'instanceof'],
    ['>>', '<<', '>>>'],
    ['+', '-'],
    ['*', '/', '%'],
    ['**']
  ].entries())
    for (const s of t) Yi[s] = e
  function Qi(e) {
    return Yi[e]
  }
  const Zi = new WeakMap()
  function ea(e) {
    if (Zi.has(e)) return Zi.get(e)
    const t = []
    return (
      e.this && t.push(e.this),
      Array.isArray(e.parameters)
        ? t.push(...e.parameters)
        : Array.isArray(e.params) && t.push(...e.params),
      e.rest && t.push(e.rest),
      Zi.set(e, t),
      t
    )
  }
  const ta = new WeakMap()
  function sa(e) {
    if (ta.has(e)) return ta.get(e)
    let t = e.arguments
    return (
      'ImportExpression' === e.type &&
        ((t = [e.source]), e.attributes && t.push(e.attributes)),
      ta.set(e, t),
      t
    )
  }
  function ra(e) {
    return 'prettier-ignore' === e.value.trim() && !e.unignore
  }
  function ia(e) {
    return e && (e.prettierIgnore || oa(e, aa.PrettierIgnore))
  }
  const aa = {
      Leading: 2,
      Trailing: 4,
      Dangling: 8,
      Block: 16,
      Line: 32,
      PrettierIgnore: 64,
      First: 128,
      Last: 256
    },
    na = (e, t) => {
      if (('function' == typeof e && ((t = e), (e = 0)), e || t))
        return (s, r, i) =>
          !(
            (e & aa.Leading && !s.leading) ||
            (e & aa.Trailing && !s.trailing) ||
            (e & aa.Dangling && (s.leading || s.trailing)) ||
            (e & aa.Block && !Bi(s)) ||
            (e & aa.Line && !Ni(s)) ||
            (e & aa.First && 0 !== r) ||
            (e & aa.Last && r !== i.length - 1) ||
            (e & aa.PrettierIgnore && !ra(s)) ||
            (t && !t(s))
          )
    }
  function oa(e, t, s) {
    if (!e || !xi(e.comments)) return !1
    const r = na(t, s)
    return !r || e.comments.some(r)
  }
  function ua(e, t, s) {
    if (!e || !Array.isArray(e.comments)) return []
    const r = na(t, s)
    return r ? e.comments.filter(r) : e.comments
  }
  function ha(e) {
    return Hi(e) || 'NewExpression' === e.type || 'ImportExpression' === e.type
  }
  var ca = {
    getFunctionParameters: ea,
    iterateFunctionParametersPath: function (e, t) {
      const s = e.getValue()
      let r = 0
      const i = (e) => t(e, r++)
      s.this && e.call(i, 'this'),
        Array.isArray(s.parameters)
          ? e.each(i, 'parameters')
          : Array.isArray(s.params) && e.each(i, 'params'),
        s.rest && e.call(i, 'rest')
    },
    getCallArguments: sa,
    iterateCallArgumentsPath: function (e, t) {
      const s = e.getValue()
      'ImportExpression' === s.type
        ? (e.call((e) => t(e, 0), 'source'),
          s.attributes && e.call((e) => t(e, 1), 'attributes'))
        : e.each(t, 'arguments')
    },
    hasRestParameter: function (e) {
      if (e.rest) return !0
      const t = ea(e)
      return t.length > 0 && 'RestElement' === Ai(t).type
    },
    getLeftSide: function (e) {
      return e.expressions
        ? e.expressions[0]
        : e.left ||
            e.test ||
            e.callee ||
            e.object ||
            e.tag ||
            e.argument ||
            e.expression
    },
    getLeftSidePathName: function (e, t) {
      if (t.expressions) return ['expressions', 0]
      if (t.left) return ['left']
      if (t.test) return ['test']
      if (t.object) return ['object']
      if (t.callee) return ['callee']
      if (t.tag) return ['tag']
      if (t.argument) return ['argument']
      if (t.expression) return ['expression']
      throw new Error('Unexpected node has no left side.')
    },
    getParentExportDeclaration: function (e) {
      const t = e.getParentNode()
      return 'declaration' === e.getName() && vi(t) ? t : null
    },
    getTypeScriptMappedTypeModifier: function (e, t) {
      return '+' === e ? '+' + t : '-' === e ? '-' + t : t
    },
    hasFlowAnnotationComment: function (e) {
      return xi(e) && Bi(e[0]) && Si.test(e[0].value)
    },
    hasFlowShorthandAnnotationComment: function (e) {
      return (
        e.extra &&
        e.extra.parenthesized &&
        xi(e.trailingComments) &&
        Bi(e.trailingComments[0]) &&
        wi.test(e.trailingComments[0].value)
      )
    },
    hasLeadingOwnLineComment: function (e, t) {
      return Ri(t) ? ia(t) : oa(t, aa.Leading, (t) => Ei(e, Pi(t)))
    },
    hasNakedLeftSide: function (e) {
      return (
        'AssignmentExpression' === e.type ||
        'BinaryExpression' === e.type ||
        'LogicalExpression' === e.type ||
        'NGPipeExpression' === e.type ||
        'ConditionalExpression' === e.type ||
        Hi(e) ||
        Vi(e) ||
        'SequenceExpression' === e.type ||
        'TaggedTemplateExpression' === e.type ||
        'BindExpression' === e.type ||
        ('UpdateExpression' === e.type && !e.prefix) ||
        'TSAsExpression' === e.type ||
        'TSNonNullExpression' === e.type
      )
    },
    hasNode: function e(t, s) {
      if (!t || 'object' != typeof t) return !1
      if (Array.isArray(t)) return t.some((t) => e(t, s))
      const r = s(t)
      return 'boolean' == typeof r ? r : Object.values(t).some((t) => e(t, s))
    },
    hasIgnoreComment: function (e) {
      return ia(e.getValue())
    },
    hasNodeIgnoreComment: ia,
    identity: function (e) {
      return e
    },
    isBinaryish: function (e) {
      return Ui.has(e.type)
    },
    isBlockComment: Bi,
    isCallLikeExpression: ha,
    isLineComment: Ni,
    isPrettierIgnoreComment: ra,
    isCallExpression: Hi,
    isMemberExpression: Vi,
    isExportDeclaration: vi,
    isFlowAnnotationComment: function (e, t) {
      const s = bi(t),
        r = Ci(e, Pi(t))
      return (
        !1 !== r && '/*' === e.slice(s, s + 2) && '*/' === e.slice(r, r + 2)
      )
    },
    isFunctionCompositionArgs: function (e) {
      if (e.length <= 1) return !1
      let t = 0
      for (const s of e)
        if (Oi(s)) {
          if (((t += 1), t > 1)) return !0
        } else if (Hi(s)) for (const e of s.arguments) if (Oi(e)) return !0
      return !1
    },
    isFunctionNotation: _i,
    isFunctionOrArrowExpression: Oi,
    isGetterOrSetter: ji,
    isJestEachTemplateLiteral: function (e, t) {
      const s = /^[fx]?(?:describe|it|test)$/
      return (
        'TaggedTemplateExpression' === t.type &&
        t.quasi === e &&
        'MemberExpression' === t.tag.type &&
        'Identifier' === t.tag.property.type &&
        'each' === t.tag.property.name &&
        (('Identifier' === t.tag.object.type && s.test(t.tag.object.name)) ||
          ('MemberExpression' === t.tag.object.type &&
            'Identifier' === t.tag.object.property.type &&
            ('only' === t.tag.object.property.name ||
              'skip' === t.tag.object.property.name) &&
            'Identifier' === t.tag.object.object.type &&
            s.test(t.tag.object.object.name)))
      )
    },
    isJsxNode: Ri,
    isLiteral: function (e) {
      return (
        'BooleanLiteral' === e.type ||
        'DirectiveLiteral' === e.type ||
        'Literal' === e.type ||
        'NullLiteral' === e.type ||
        'NumericLiteral' === e.type ||
        'BigIntLiteral' === e.type ||
        'DecimalLiteral' === e.type ||
        'RegExpLiteral' === e.type ||
        'StringLiteral' === e.type ||
        'TemplateLiteral' === e.type ||
        'TSTypeLiteral' === e.type ||
        'JSXText' === e.type
      )
    },
    isLongCurriedCallExpression: function (e) {
      const t = e.getValue(),
        s = e.getParentNode()
      return (
        Hi(t) &&
        Hi(s) &&
        s.callee === t &&
        t.arguments.length > s.arguments.length &&
        s.arguments.length > 0
      )
    },
    isSimpleCallArgument: function e(t, s) {
      if (s >= 2) return !1
      const r = (t) => e(t, s + 1),
        i =
          ('Literal' === t.type && 'regex' in t && t.regex.pattern) ||
          ('RegExpLiteral' === t.type && t.pattern)
      return (
        !(i && gi(i) > 5) &&
        ('Literal' === t.type ||
          'BigIntLiteral' === t.type ||
          'DecimalLiteral' === t.type ||
          'BooleanLiteral' === t.type ||
          'NullLiteral' === t.type ||
          'NumericLiteral' === t.type ||
          'RegExpLiteral' === t.type ||
          'StringLiteral' === t.type ||
          'Identifier' === t.type ||
          'ThisExpression' === t.type ||
          'Super' === t.type ||
          'PrivateName' === t.type ||
          'PrivateIdentifier' === t.type ||
          'ArgumentPlaceholder' === t.type ||
          'Import' === t.type ||
          ('TemplateLiteral' === t.type
            ? t.quasis.every((e) => !e.value.raw.includes('\n')) &&
              t.expressions.every(r)
            : 'ObjectExpression' === t.type
            ? t.properties.every(
                (e) => !e.computed && (e.shorthand || (e.value && r(e.value)))
              )
            : 'ArrayExpression' === t.type
            ? t.elements.every((e) => null === e || r(e))
            : ha(t)
            ? ('ImportExpression' === t.type || e(t.callee, s)) &&
              sa(t).every(r)
            : Vi(t)
            ? e(t.object, s) && e(t.property, s)
            : 'UnaryExpression' !== t.type ||
              ('!' !== t.operator && '-' !== t.operator)
            ? 'TSNonNullExpression' === t.type && e(t.expression, s)
            : e(t.argument, s)))
      )
    },
    isMemberish: function (e) {
      return Vi(e) || ('BindExpression' === e.type && Boolean(e.object))
    },
    isNumericLiteral: ki,
    isSignedNumericLiteral: function (e) {
      return (
        'UnaryExpression' === e.type &&
        ('+' === e.operator || '-' === e.operator) &&
        ki(e.argument)
      )
    },
    isObjectProperty: function (e) {
      return (
        e &&
        ('ObjectProperty' === e.type ||
          ('Property' === e.type && !e.method && 'init' === e.kind))
      )
    },
    isObjectType: function (e) {
      return (
        'ObjectTypeAnnotation' === e.type ||
        'TSTypeLiteral' === e.type ||
        'TSMappedType' === e.type
      )
    },
    isObjectTypePropertyAFunction: function (e) {
      return !(
        ('ObjectTypeProperty' !== e.type &&
          'ObjectTypeInternalSlot' !== e.type) ||
        'FunctionTypeAnnotation' !== e.value.type ||
        e.static ||
        _i(e)
      )
    },
    isSimpleType: function (e) {
      return (
        !!e &&
        (!(
          ('GenericTypeAnnotation' !== e.type &&
            'TSTypeReference' !== e.type) ||
          e.typeParameters
        ) ||
          !!qi.has(e.type))
      )
    },
    isSimpleNumber: zi,
    isSimpleTemplateLiteral: function (e) {
      let t = 'expressions'
      'TSTemplateLiteralType' === e.type && (t = 'types')
      const s = e[t]
      return (
        0 !== s.length &&
        s.every((e) => {
          if (oa(e)) return !1
          if ('Identifier' === e.type || 'ThisExpression' === e.type) return !0
          if (Vi(e)) {
            let t = e
            for (; Vi(t); ) {
              if (
                'Identifier' !== t.property.type &&
                'Literal' !== t.property.type &&
                'StringLiteral' !== t.property.type &&
                'NumericLiteral' !== t.property.type
              )
                return !1
              if (((t = t.object), oa(t))) return !1
            }
            return 'Identifier' === t.type || 'ThisExpression' === t.type
          }
          return !1
        })
      )
    },
    isStringLiteral: Li,
    isStringPropSafeToUnquote: function (e, t) {
      return (
        'json' !== t.parser &&
        Li(e.key) &&
        Gi(e.key).slice(1, -1) === e.key.value &&
        ((yi(e.key.value) &&
          !(
            ('typescript' === t.parser || 'babel-ts' === t.parser) &&
            'ClassProperty' === e.type
          )) ||
          (zi(e.key.value) &&
            String(Number(e.key.value)) === e.key.value &&
            ('babel' === t.parser ||
              'espree' === t.parser ||
              'meriyah' === t.parser ||
              '__babel_estree' === t.parser)))
      )
    },
    isTemplateOnItsOwnLine: function (e, t) {
      return (
        (('TemplateLiteral' === e.type && Wi(e)) ||
          ('TaggedTemplateExpression' === e.type && Wi(e.quasi))) &&
        !Ei(t, bi(e), { backwards: !0 })
      )
    },
    isTestCall: function e(t, s) {
      if ('CallExpression' !== t.type) return !1
      if (1 === t.arguments.length) {
        if (Mi(t) && s && e(s)) return Oi(t.arguments[0])
        if (
          (function (e) {
            return (
              'Identifier' === e.callee.type &&
              /^(?:before|after)(?:Each|All)$/.test(e.callee.name) &&
              1 === e.arguments.length
            )
          })(t)
        )
          return Mi(t.arguments[0])
      } else if (
        (2 === t.arguments.length || 3 === t.arguments.length) &&
        (('Identifier' === t.callee.type && $i.test(t.callee.name)) ||
          (function (e) {
            return (
              Vi(e.callee) &&
              'Identifier' === e.callee.object.type &&
              'Identifier' === e.callee.property.type &&
              $i.test(e.callee.object.name) &&
              ('only' === e.callee.property.name ||
                'skip' === e.callee.property.name)
            )
          })(t)) &&
        ((function (e) {
          return 'TemplateLiteral' === e.type
        })(t.arguments[0]) ||
          Li(t.arguments[0]))
      )
        return (
          !(t.arguments[2] && !ki(t.arguments[2])) &&
          ((2 === t.arguments.length
            ? Oi(t.arguments[1])
            : (function (e) {
                return (
                  'FunctionExpression' === e.type ||
                  ('ArrowFunctionExpression' === e.type &&
                    'BlockStatement' === e.body.type)
                )
              })(t.arguments[1]) && ea(t.arguments[1]).length <= 1) ||
            Mi(t.arguments[1]))
        )
      return !1
    },
    isTheOnlyJsxElementInMarkdown: function (e, t) {
      if ('markdown' !== e.parentParser && 'mdx' !== e.parentParser) return !1
      const s = t.getNode()
      if (!s.expression || !Ri(s.expression)) return !1
      const r = t.getParentNode()
      return 'Program' === r.type && 1 === r.body.length
    },
    isTSXFile: function (e) {
      return e.filepath && /\.tsx$/i.test(e.filepath)
    },
    isTypeAnnotationAFunction: function (e) {
      return !(
        ('TypeAnnotation' !== e.type && 'TSTypeAnnotation' !== e.type) ||
        'FunctionTypeAnnotation' !== e.typeAnnotation.type ||
        e.static ||
        Ti(e, e.typeAnnotation)
      )
    },
    isNextLineEmpty: (e, { originalText: t }) => Fi(t, Pi(e)),
    needsHardlineAfterDanglingComment: function (e) {
      if (!oa(e)) return !1
      const t = Ai(ua(e, aa.Dangling))
      return t && !Bi(t)
    },
    rawText: Gi,
    shouldPrintComma: function (e, t = 'es5') {
      return (
        ('es5' === e.trailingComma && 'es5' === t) ||
        ('all' === e.trailingComma && ('all' === t || 'es5' === t))
      )
    },
    isBitwiseOperator: function (e) {
      return Boolean(Ji[e]) || '|' === e || '^' === e || '&' === e
    },
    shouldFlatten: function (e, t) {
      return (
        Qi(t) === Qi(e) &&
        '**' !== e &&
        (!Ki[e] || !Ki[t]) &&
        !(('%' === t && Xi[e]) || ('%' === e && Xi[t])) &&
        (t === e || !Xi[t] || !Xi[e]) &&
        (!Ji[e] || !Ji[t])
      )
    },
    startsWithNoLookaheadToken: function e(t, s) {
      switch (
        (t = (function (e) {
          for (; e.left; ) e = e.left
          return e
        })(t)).type
      ) {
        case 'FunctionExpression':
        case 'ClassExpression':
        case 'DoExpression':
          return s
        case 'ObjectExpression':
          return !0
        case 'MemberExpression':
        case 'OptionalMemberExpression':
          return e(t.object, s)
        case 'TaggedTemplateExpression':
          return 'FunctionExpression' !== t.tag.type && e(t.tag, s)
        case 'CallExpression':
        case 'OptionalCallExpression':
          return 'FunctionExpression' !== t.callee.type && e(t.callee, s)
        case 'ConditionalExpression':
          return e(t.test, s)
        case 'UpdateExpression':
          return !t.prefix && e(t.argument, s)
        case 'BindExpression':
          return t.object && e(t.object, s)
        case 'SequenceExpression':
          return e(t.expressions[0], s)
        case 'TSAsExpression':
        case 'TSNonNullExpression':
          return e(t.expression, s)
        default:
          return !1
      }
    },
    getPrecedence: Qi,
    hasComment: oa,
    getComments: ua,
    CommentCheckFlags: aa
  }
  const {
      getLast: pa,
      hasNewline: la,
      getNextNonSpaceNonCommentCharacterIndexWithStartIndex: da,
      getNextNonSpaceNonCommentCharacter: Da,
      hasNewlineInRange: ma,
      addLeadingComment: fa,
      addTrailingComment: ya,
      addDanglingComment: Aa,
      getNextNonSpaceNonCommentCharacterIndex: Ea,
      isNonEmptyArray: Ca
    } = ur,
    {
      isBlockComment: xa,
      getFunctionParameters: Fa,
      isPrettierIgnoreComment: ga,
      isJsxNode: ba,
      hasFlowShorthandAnnotationComment: Pa,
      hasFlowAnnotationComment: Ta,
      hasIgnoreComment: wa,
      isCallLikeExpression: Sa,
      getCallArguments: Ba,
      isCallExpression: Na,
      isMemberExpression: Ia,
      isObjectProperty: va,
      getComments: ka,
      CommentCheckFlags: La
    } = ca,
    { locStart: Oa, locEnd: Ma } = oi
  function Ra(e, t) {
    const s = (e.body || e.properties).find(
      ({ type: e }) => 'EmptyStatement' !== e
    )
    s ? fa(s, t) : Aa(e, t)
  }
  function ja(e, t) {
    'BlockStatement' === e.type ? Ra(e, t) : fa(e, t)
  }
  function _a({ comment: e, followingNode: t }) {
    return !(!t || !mn(e)) && (fa(t, e), !0)
  }
  function Ua({
    comment: e,
    precedingNode: t,
    enclosingNode: s,
    followingNode: r,
    text: i
  }) {
    if (!s || 'IfStatement' !== s.type || !r) return !1
    return ')' === Da(i, e, Ma)
      ? (ya(t, e), !0)
      : t === s.consequent && r === s.alternate
      ? ('BlockStatement' === t.type ? ya(t, e) : Aa(s, e), !0)
      : 'BlockStatement' === r.type
      ? (Ra(r, e), !0)
      : 'IfStatement' === r.type
      ? (ja(r.consequent, e), !0)
      : s.consequent === r && (fa(r, e), !0)
  }
  function qa({
    comment: e,
    precedingNode: t,
    enclosingNode: s,
    followingNode: r,
    text: i
  }) {
    if (!s || 'WhileStatement' !== s.type || !r) return !1
    return ')' === Da(i, e, Ma)
      ? (ya(t, e), !0)
      : 'BlockStatement' === r.type
      ? (Ra(r, e), !0)
      : s.body === r && (fa(r, e), !0)
  }
  function $a({
    comment: e,
    precedingNode: t,
    enclosingNode: s,
    followingNode: r
  }) {
    return (
      !(!s || ('TryStatement' !== s.type && 'CatchClause' !== s.type) || !r) &&
      ('CatchClause' === s.type && t
        ? (ya(t, e), !0)
        : 'BlockStatement' === r.type
        ? (Ra(r, e), !0)
        : 'TryStatement' === r.type
        ? (ja(r.finalizer, e), !0)
        : 'CatchClause' === r.type && (ja(r.body, e), !0))
    )
  }
  function Ha({ comment: e, enclosingNode: t, followingNode: s }) {
    return !(!Ia(t) || !s || 'Identifier' !== s.type) && (fa(t, e), !0)
  }
  function Va({
    comment: e,
    precedingNode: t,
    enclosingNode: s,
    followingNode: r,
    text: i
  }) {
    const a = t && !ma(i, Ma(t), Oa(e))
    return (
      !(
        (t && a) ||
        !s ||
        ('ConditionalExpression' !== s.type &&
          'TSConditionalType' !== s.type) ||
        !r
      ) && (fa(r, e), !0)
    )
  }
  function za({ comment: e, precedingNode: t, enclosingNode: s }) {
    return (
      !(
        !va(s) ||
        !s.shorthand ||
        s.key !== t ||
        'AssignmentPattern' !== s.value.type
      ) && (ya(s.value.left, e), !0)
    )
  }
  function Wa({
    comment: e,
    precedingNode: t,
    enclosingNode: s,
    followingNode: r
  }) {
    if (
      s &&
      ('ClassDeclaration' === s.type ||
        'ClassExpression' === s.type ||
        'DeclareClass' === s.type ||
        'DeclareInterface' === s.type ||
        'InterfaceDeclaration' === s.type ||
        'TSInterfaceDeclaration' === s.type)
    ) {
      if (Ca(s.decorators) && (!r || 'Decorator' !== r.type))
        return ya(pa(s.decorators), e), !0
      if (s.body && r === s.body) return Ra(s.body, e), !0
      if (r)
        for (const i of ['implements', 'extends', 'mixins'])
          if (s[i] && r === s[i][0])
            return (
              !t || (t !== s.id && t !== s.typeParameters && t !== s.superClass)
                ? Aa(s, e, i)
                : ya(t, e),
              !0
            )
    }
    return !1
  }
  function Ga({ comment: e, precedingNode: t, enclosingNode: s, text: r }) {
    return (
      ((s &&
        t &&
        ('Property' === s.type ||
          'TSDeclareMethod' === s.type ||
          'TSAbstractMethodDefinition' === s.type) &&
        'Identifier' === t.type &&
        s.key === t &&
        ':' !== Da(r, t, Ma)) ||
        !(
          !t ||
          !s ||
          'Decorator' !== t.type ||
          ('ClassMethod' !== s.type &&
            'ClassProperty' !== s.type &&
            'PropertyDefinition' !== s.type &&
            'TSAbstractClassProperty' !== s.type &&
            'TSAbstractMethodDefinition' !== s.type &&
            'TSDeclareMethod' !== s.type &&
            'MethodDefinition' !== s.type)
        )) &&
      (ya(t, e), !0)
    )
  }
  function Ka({ comment: e, precedingNode: t, enclosingNode: s, text: r }) {
    return (
      '(' === Da(r, e, Ma) &&
      !(
        !t ||
        !s ||
        ('FunctionDeclaration' !== s.type &&
          'FunctionExpression' !== s.type &&
          'ClassMethod' !== s.type &&
          'MethodDefinition' !== s.type &&
          'ObjectMethod' !== s.type)
      ) &&
      (ya(t, e), !0)
    )
  }
  function Xa({ comment: e, enclosingNode: t, text: s }) {
    if (!t || 'ArrowFunctionExpression' !== t.type) return !1
    const r = Ea(s, e, Ma)
    return !1 !== r && '=>' === s.slice(r, r + 2) && (Aa(t, e), !0)
  }
  function Ja({ comment: e, enclosingNode: t, text: s }) {
    return (
      ')' === Da(s, e, Ma) &&
      (t && ((Dn(t) && 0 === Fa(t).length) || (Sa(t) && 0 === Ba(t).length))
        ? (Aa(t, e), !0)
        : !(
            !t ||
            ('MethodDefinition' !== t.type &&
              'TSAbstractMethodDefinition' !== t.type) ||
            0 !== Fa(t.value).length
          ) && (Aa(t.value, e), !0))
    )
  }
  function Ya({
    comment: e,
    precedingNode: t,
    enclosingNode: s,
    followingNode: r,
    text: i
  }) {
    if (
      t &&
      'FunctionTypeParam' === t.type &&
      s &&
      'FunctionTypeAnnotation' === s.type &&
      r &&
      'FunctionTypeParam' !== r.type
    )
      return ya(t, e), !0
    if (
      t &&
      ('Identifier' === t.type || 'AssignmentPattern' === t.type) &&
      s &&
      Dn(s) &&
      ')' === Da(i, e, Ma)
    )
      return ya(t, e), !0
    if (
      s &&
      'FunctionDeclaration' === s.type &&
      r &&
      'BlockStatement' === r.type
    ) {
      const t = (() => {
        const e = Fa(s)
        if (e.length > 0) return da(i, Ma(pa(e)))
        const t = da(i, Ma(s.id))
        return !1 !== t && da(i, t + 1)
      })()
      if (Oa(e) > t) return Ra(r, e), !0
    }
    return !1
  }
  function Qa({ comment: e, enclosingNode: t }) {
    return !(!t || 'ImportSpecifier' !== t.type) && (fa(t, e), !0)
  }
  function Za({ comment: e, enclosingNode: t }) {
    return !(!t || 'LabeledStatement' !== t.type) && (fa(t, e), !0)
  }
  function en({ comment: e, enclosingNode: t }) {
    return (
      !(
        !t ||
        ('ContinueStatement' !== t.type && 'BreakStatement' !== t.type) ||
        t.label
      ) && (ya(t, e), !0)
    )
  }
  function tn({ comment: e, precedingNode: t, enclosingNode: s }) {
    return (
      !!(Na(s) && t && s.callee === t && s.arguments.length > 0) &&
      (fa(s.arguments[0], e), !0)
    )
  }
  function sn({
    comment: e,
    precedingNode: t,
    enclosingNode: s,
    followingNode: r
  }) {
    return !s || ('UnionTypeAnnotation' !== s.type && 'TSUnionType' !== s.type)
      ? (r &&
          ('UnionTypeAnnotation' === r.type || 'TSUnionType' === r.type) &&
          ga(e) &&
          ((r.types[0].prettierIgnore = !0), (e.unignore = !0)),
        !1)
      : (ga(e) && ((r.prettierIgnore = !0), (e.unignore = !0)),
        !!t && (ya(t, e), !0))
  }
  function rn({ comment: e, enclosingNode: t }) {
    return !!va(t) && (fa(t, e), !0)
  }
  function an({
    comment: e,
    enclosingNode: t,
    followingNode: s,
    ast: r,
    isLastComment: i
  }) {
    return r && r.body && 0 === r.body.length
      ? (i ? Aa(r, e) : fa(r, e), !0)
      : t && 'Program' === t.type && 0 === t.body.length && !Ca(t.directives)
      ? (i ? Aa(t, e) : fa(t, e), !0)
      : !(
          !s ||
          'Program' !== s.type ||
          0 !== s.body.length ||
          !t ||
          'ModuleExpression' !== t.type
        ) && (Aa(s, e), !0)
  }
  function nn({ comment: e, enclosingNode: t }) {
    return (
      !(!t || ('ForInStatement' !== t.type && 'ForOfStatement' !== t.type)) &&
      (fa(t, e), !0)
    )
  }
  function on({ comment: e, precedingNode: t, enclosingNode: s, text: r }) {
    return (
      !!(
        t &&
        'ImportSpecifier' === t.type &&
        s &&
        'ImportDeclaration' === s.type &&
        la(r, Ma(e))
      ) && (ya(t, e), !0)
    )
  }
  function un({ comment: e, enclosingNode: t }) {
    return !(!t || 'AssignmentPattern' !== t.type) && (fa(t, e), !0)
  }
  function hn({ comment: e, enclosingNode: t }) {
    return !(!t || 'TypeAlias' !== t.type) && (fa(t, e), !0)
  }
  function cn({ comment: e, enclosingNode: t, followingNode: s }) {
    return (
      !(
        !t ||
        ('VariableDeclarator' !== t.type &&
          'AssignmentExpression' !== t.type) ||
        !s ||
        ('ObjectExpression' !== s.type &&
          'ArrayExpression' !== s.type &&
          'TemplateLiteral' !== s.type &&
          'TaggedTemplateExpression' !== s.type &&
          !xa(e))
      ) && (fa(s, e), !0)
    )
  }
  function pn({ comment: e, enclosingNode: t, followingNode: s, text: r }) {
    return (
      !(
        s ||
        !t ||
        ('TSMethodSignature' !== t.type &&
          'TSDeclareFunction' !== t.type &&
          'TSAbstractMethodDefinition' !== t.type) ||
        ';' !== Da(r, e, Ma)
      ) && (ya(t, e), !0)
    )
  }
  function ln({ comment: e, enclosingNode: t, followingNode: s }) {
    if (
      ga(e) &&
      t &&
      'TSMappedType' === t.type &&
      s &&
      'TSTypeParameter' === s.type &&
      s.constraint
    )
      return (t.prettierIgnore = !0), (e.unignore = !0), !0
  }
  function dn({
    comment: e,
    precedingNode: t,
    enclosingNode: s,
    followingNode: r
  }) {
    return (
      !(!s || 'TSMappedType' !== s.type) &&
      (r && 'TSTypeParameter' === r.type && r.name
        ? (fa(r.name, e), !0)
        : !(!t || 'TSTypeParameter' !== t.type || !t.constraint) &&
          (ya(t.constraint, e), !0))
    )
  }
  function Dn(e) {
    return (
      'ArrowFunctionExpression' === e.type ||
      'FunctionExpression' === e.type ||
      'FunctionDeclaration' === e.type ||
      'ObjectMethod' === e.type ||
      'ClassMethod' === e.type ||
      'TSDeclareFunction' === e.type ||
      'TSCallSignatureDeclaration' === e.type ||
      'TSConstructSignatureDeclaration' === e.type ||
      'TSMethodSignature' === e.type ||
      'TSConstructorType' === e.type ||
      'TSFunctionType' === e.type ||
      'TSDeclareMethod' === e.type
    )
  }
  function mn(e) {
    return xa(e) && '*' === e.value[0] && /@type\b/.test(e.value)
  }
  var fn = {
    handleOwnLineComment: function (e) {
      return [ln, Ya, Ha, Ua, qa, $a, Wa, Qa, nn, sn, an, on, un, Ga, Za].some(
        (t) => t(e)
      )
    },
    handleEndOfLineComment: function (e) {
      return [_a, Ya, Va, Qa, Ua, qa, $a, Wa, Za, tn, rn, an, hn, cn].some(
        (t) => t(e)
      )
    },
    handleRemainingComment: function (e) {
      return [ln, Ua, qa, za, Ja, Ga, an, Xa, Ka, dn, en, pn].some((t) => t(e))
    },
    isTypeCastComment: mn,
    getCommentChildNodes: function (e, t) {
      if (
        ('typescript' === t.parser ||
          'flow' === t.parser ||
          'espree' === t.parser ||
          'meriyah' === t.parser ||
          '__babel_estree' === t.parser) &&
        'MethodDefinition' === e.type &&
        e.value &&
        'FunctionExpression' === e.value.type &&
        0 === Fa(e.value).length &&
        !e.value.returnType &&
        !Ca(e.value.typeParameters) &&
        e.value.body
      )
        return [...(e.decorators || []), e.key, e.value.body]
    },
    willPrintOwnComments: function (e) {
      const t = e.getValue(),
        s = e.getParentNode()
      return (
        ((t &&
          (ba(t) ||
            Pa(t) ||
            (Na(s) &&
              ((e) => Ta(ka(e, La.Leading)) || Ta(ka(e, La.Trailing)))(t)))) ||
          (s &&
            ('JSXSpreadAttribute' === s.type ||
              'JSXSpreadChild' === s.type ||
              'UnionTypeAnnotation' === s.type ||
              'TSUnionType' === s.type ||
              (('ClassDeclaration' === s.type ||
                'ClassExpression' === s.type) &&
                s.superClass === t)))) &&
        (!wa(e) || 'UnionTypeAnnotation' === s.type || 'TSUnionType' === s.type)
      )
    }
  }
  const { getLast: yn, getNextNonSpaceNonCommentCharacter: An } = ur,
    { locStart: En, locEnd: Cn } = oi,
    { isTypeCastComment: xn } = fn
  function Fn(e) {
    return (
      'CallExpression' === e.type
        ? ((e.type = 'OptionalCallExpression'), (e.callee = Fn(e.callee)))
        : 'MemberExpression' === e.type
        ? ((e.type = 'OptionalMemberExpression'), (e.object = Fn(e.object)))
        : 'TSNonNullExpression' === e.type && (e.expression = Fn(e.expression)),
      e
    )
  }
  function gn(e, t) {
    let s
    if (Array.isArray(e)) s = e.entries()
    else {
      if (!e || 'object' != typeof e || 'string' != typeof e.type) return e
      s = Object.entries(e)
    }
    for (const [r, i] of s) e[r] = gn(i, t)
    return Array.isArray(e) ? e : t(e) || e
  }
  function bn(e) {
    return (
      'LogicalExpression' === e.type &&
      'LogicalExpression' === e.right.type &&
      e.operator === e.right.operator
    )
  }
  function Pn(e) {
    return bn(e)
      ? Pn({
          type: 'LogicalExpression',
          operator: e.operator,
          left: Pn({
            type: 'LogicalExpression',
            operator: e.operator,
            left: e.left,
            right: e.right.left,
            range: [En(e.left), Cn(e.right.left)]
          }),
          right: e.right.right,
          range: [En(e), Cn(e)]
        })
      : e
  }
  var Tn = function (e, t) {
    if ('typescript' === t.parser && t.originalText.includes('@')) {
      const { esTreeNodeToTSNodeMap: s, tsNodeToESTreeNodeMap: r } =
        t.tsParseResult
      e = gn(e, (e) => {
        const t = s.get(e)
        if (!t) return
        const i = t.decorators
        if (!Array.isArray(i)) return
        const a = r.get(t)
        if (a !== e) return
        const n = a.decorators
        if (
          !Array.isArray(n) ||
          n.length !== i.length ||
          i.some((e) => {
            const t = r.get(e)
            return !t || !n.includes(t)
          })
        ) {
          const { start: e, end: t } = a.loc
          throw li(
            'Leading decorators must be attached to a class declaration',
            {
              start: { line: e.line, column: e.column + 1 },
              end: { line: t.line, column: t.column + 1 }
            }
          )
        }
      })
    }
    if (
      'typescript' !== t.parser &&
      'flow' !== t.parser &&
      'espree' !== t.parser &&
      'meriyah' !== t.parser
    ) {
      const t = new Set()
      ;(e = gn(e, (e) => {
        e.leadingComments && e.leadingComments.some(xn) && t.add(En(e))
      })),
        (e = gn(e, (e) => {
          if ('ParenthesizedExpression' === e.type) {
            const { expression: s } = e
            if ('TypeCastExpression' === s.type) return (s.range = e.range), s
            const r = En(e)
            if (!t.has(r))
              return (
                (s.extra = Object.assign(
                  Object.assign({}, s.extra),
                  {},
                  { parenthesized: !0 }
                )),
                s
              )
          }
        }))
    }
    return (e = gn(e, (e) => {
      switch (e.type) {
        case 'ChainExpression':
          return Fn(e.expression)
        case 'LogicalExpression':
          if (bn(e)) return Pn(e)
          break
        case 'VariableDeclaration': {
          const s = yn(e.declarations)
          s &&
            s.init &&
            (function (e, s) {
              if (';' === t.originalText[Cn(s)]) return
              e.range = [En(e), Cn(s)]
            })(e, s)
          break
        }
        case 'TSParenthesizedType':
          return (e.typeAnnotation.range = [En(e), Cn(e)]), e.typeAnnotation
        case 'TSTypeParameter':
          if ('string' == typeof e.name) {
            const t = En(e)
            e.name = {
              type: 'Identifier',
              name: e.name,
              range: [t, t + e.name.length]
            }
          }
          break
        case 'SequenceExpression': {
          const t = yn(e.expressions)
          e.range = [En(e), Math.min(Cn(t), Cn(e))]
          break
        }
        case 'ClassProperty':
          e.key &&
            'TSPrivateIdentifier' === e.key.type &&
            '?' === An(t.originalText, e.key, Cn) &&
            (e.optional = !0)
      }
    }))
  }
  const wn = !0,
    Sn = !0,
    Bn = !0,
    Nn = !0,
    In = !0
  class vn {
    constructor(e, t = {}) {
      ;(this.label = void 0),
        (this.keyword = void 0),
        (this.beforeExpr = void 0),
        (this.startsExpr = void 0),
        (this.rightAssociative = void 0),
        (this.isLoop = void 0),
        (this.isAssign = void 0),
        (this.prefix = void 0),
        (this.postfix = void 0),
        (this.binop = void 0),
        (this.updateContext = void 0),
        (this.label = e),
        (this.keyword = t.keyword),
        (this.beforeExpr = !!t.beforeExpr),
        (this.startsExpr = !!t.startsExpr),
        (this.rightAssociative = !!t.rightAssociative),
        (this.isLoop = !!t.isLoop),
        (this.isAssign = !!t.isAssign),
        (this.prefix = !!t.prefix),
        (this.postfix = !!t.postfix),
        (this.binop = null != t.binop ? t.binop : null),
        (this.updateContext = null)
    }
  }
  const kn = new Map()
  function Ln(e, t = {}) {
    t.keyword = e
    const s = new vn(e, t)
    return kn.set(e, s), s
  }
  function On(e, t) {
    return new vn(e, { beforeExpr: wn, binop: t })
  }
  const Mn = {
      num: new vn('num', { startsExpr: Sn }),
      bigint: new vn('bigint', { startsExpr: Sn }),
      decimal: new vn('decimal', { startsExpr: Sn }),
      regexp: new vn('regexp', { startsExpr: Sn }),
      string: new vn('string', { startsExpr: Sn }),
      name: new vn('name', { startsExpr: Sn }),
      privateName: new vn('#name', { startsExpr: Sn }),
      eof: new vn('eof'),
      bracketL: new vn('[', { beforeExpr: wn, startsExpr: Sn }),
      bracketHashL: new vn('#[', { beforeExpr: wn, startsExpr: Sn }),
      bracketBarL: new vn('[|', { beforeExpr: wn, startsExpr: Sn }),
      bracketR: new vn(']'),
      bracketBarR: new vn('|]'),
      braceL: new vn('{', { beforeExpr: wn, startsExpr: Sn }),
      braceBarL: new vn('{|', { beforeExpr: wn, startsExpr: Sn }),
      braceHashL: new vn('#{', { beforeExpr: wn, startsExpr: Sn }),
      braceR: new vn('}', { beforeExpr: wn }),
      braceBarR: new vn('|}'),
      parenL: new vn('(', { beforeExpr: wn, startsExpr: Sn }),
      parenR: new vn(')'),
      comma: new vn(',', { beforeExpr: wn }),
      semi: new vn(';', { beforeExpr: wn }),
      colon: new vn(':', { beforeExpr: wn }),
      doubleColon: new vn('::', { beforeExpr: wn }),
      dot: new vn('.'),
      question: new vn('?', { beforeExpr: wn }),
      questionDot: new vn('?.'),
      arrow: new vn('=>', { beforeExpr: wn }),
      template: new vn('template'),
      ellipsis: new vn('...', { beforeExpr: wn }),
      backQuote: new vn('`', { startsExpr: Sn }),
      dollarBraceL: new vn('${', { beforeExpr: wn, startsExpr: Sn }),
      at: new vn('@'),
      hash: new vn('#', { startsExpr: Sn }),
      interpreterDirective: new vn('#!...'),
      eq: new vn('=', { beforeExpr: wn, isAssign: Nn }),
      assign: new vn('_=', { beforeExpr: wn, isAssign: Nn }),
      slashAssign: new vn('_=', { beforeExpr: wn, isAssign: Nn }),
      moduloAssign: new vn('_=', { beforeExpr: wn, isAssign: Nn }),
      incDec: new vn('++/--', { prefix: In, postfix: !0, startsExpr: Sn }),
      bang: new vn('!', { beforeExpr: wn, prefix: In, startsExpr: Sn }),
      tilde: new vn('~', { beforeExpr: wn, prefix: In, startsExpr: Sn }),
      pipeline: On('|>', 0),
      nullishCoalescing: On('??', 1),
      logicalOR: On('||', 1),
      logicalAND: On('&&', 2),
      bitwiseOR: On('|', 3),
      bitwiseXOR: On('^', 4),
      bitwiseAND: On('&', 5),
      equality: On('==/!=/===/!==', 6),
      relational: On('</>/<=/>=', 7),
      bitShift: On('<</>>/>>>', 8),
      plusMin: new vn('+/-', {
        beforeExpr: wn,
        binop: 9,
        prefix: In,
        startsExpr: Sn
      }),
      modulo: new vn('%', { binop: 10, startsExpr: Sn }),
      star: new vn('*', { binop: 10 }),
      slash: On('/', 10),
      exponent: new vn('**', {
        beforeExpr: wn,
        binop: 11,
        rightAssociative: !0
      }),
      _break: Ln('break'),
      _case: Ln('case', { beforeExpr: wn }),
      _catch: Ln('catch'),
      _continue: Ln('continue'),
      _debugger: Ln('debugger'),
      _default: Ln('default', { beforeExpr: wn }),
      _do: Ln('do', { isLoop: Bn, beforeExpr: wn }),
      _else: Ln('else', { beforeExpr: wn }),
      _finally: Ln('finally'),
      _for: Ln('for', { isLoop: Bn }),
      _function: Ln('function', { startsExpr: Sn }),
      _if: Ln('if'),
      _return: Ln('return', { beforeExpr: wn }),
      _switch: Ln('switch'),
      _throw: Ln('throw', { beforeExpr: wn, prefix: In, startsExpr: Sn }),
      _try: Ln('try'),
      _var: Ln('var'),
      _const: Ln('const'),
      _while: Ln('while', { isLoop: Bn }),
      _with: Ln('with'),
      _new: Ln('new', { beforeExpr: wn, startsExpr: Sn }),
      _this: Ln('this', { startsExpr: Sn }),
      _super: Ln('super', { startsExpr: Sn }),
      _class: Ln('class', { startsExpr: Sn }),
      _extends: Ln('extends', { beforeExpr: wn }),
      _export: Ln('export'),
      _import: Ln('import', { startsExpr: Sn }),
      _null: Ln('null', { startsExpr: Sn }),
      _true: Ln('true', { startsExpr: Sn }),
      _false: Ln('false', { startsExpr: Sn }),
      _in: Ln('in', { beforeExpr: wn, binop: 7 }),
      _instanceof: Ln('instanceof', { beforeExpr: wn, binop: 7 }),
      _typeof: Ln('typeof', { beforeExpr: wn, prefix: In, startsExpr: Sn }),
      _void: Ln('void', { beforeExpr: wn, prefix: In, startsExpr: Sn }),
      _delete: Ln('delete', { beforeExpr: wn, prefix: In, startsExpr: Sn })
    },
    Rn = /\r\n?|[\n\u2028\u2029]/,
    jn = new RegExp(Rn.source, 'g')
  function _n(e) {
    switch (e) {
      case 10:
      case 13:
      case 8232:
      case 8233:
        return !0
      default:
        return !1
    }
  }
  const Un = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
    qn = new RegExp(
      '(?=(' +
        /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y.source +
        '))\\1' +
        /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source,
      'y'
    )
  function $n(e) {
    switch (e) {
      case 9:
      case 11:
      case 12:
      case 32:
      case 160:
      case 5760:
      case 8192:
      case 8193:
      case 8194:
      case 8195:
      case 8196:
      case 8197:
      case 8198:
      case 8199:
      case 8200:
      case 8201:
      case 8202:
      case 8239:
      case 8287:
      case 12288:
      case 65279:
        return !0
      default:
        return !1
    }
  }
  class Hn {
    constructor(e, t) {
      ;(this.line = void 0),
        (this.column = void 0),
        (this.line = e),
        (this.column = t)
    }
  }
  class Vn {
    constructor(e, t) {
      ;(this.start = void 0),
        (this.end = void 0),
        (this.filename = void 0),
        (this.identifierName = void 0),
        (this.start = e),
        (this.end = t)
    }
  }
  function zn(e, t) {
    void 0 === e.trailingComments
      ? (e.trailingComments = t)
      : e.trailingComments.unshift(...t)
  }
  function Wn(e, t) {
    void 0 === e.innerComments
      ? (e.innerComments = t)
      : void 0 !== t && e.innerComments.unshift(...t)
  }
  function Gn(e, t, s) {
    let r = null,
      i = t.length
    for (; null === r && i > 0; ) r = t[--i]
    null === r || r.start > s.start ? Wn(e, s.comments) : zn(r, s.comments)
  }
  const Kn = Object.freeze({
      SyntaxError: 'BABEL_PARSER_SYNTAX_ERROR',
      SourceTypeModuleError: 'BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED'
    }),
    Xn = Qn(
      {
        AccessorIsGenerator: 'A %0ter cannot be a generator.',
        ArgumentsInClass:
          "'arguments' is only allowed in functions and class methods.",
        AsyncFunctionInSingleStatementContext:
          'Async functions can only be declared at the top level or inside a block.',
        AwaitBindingIdentifier:
          "Can not use 'await' as identifier inside an async function.",
        AwaitBindingIdentifierInStaticBlock:
          "Can not use 'await' as identifier inside a static block.",
        AwaitExpressionFormalParameter:
          "'await' is not allowed in async function parameters.",
        AwaitNotInAsyncContext:
          "'await' is only allowed within async functions and at the top levels of modules.",
        AwaitNotInAsyncFunction:
          "'await' is only allowed within async functions.",
        BadGetterArity: "A 'get' accesor must not have any formal parameters.",
        BadSetterArity:
          "A 'set' accesor must have exactly one formal parameter.",
        BadSetterRestParameter:
          "A 'set' accesor function argument must not be a rest parameter.",
        ConstructorClassField:
          "Classes may not have a field named 'constructor'.",
        ConstructorClassPrivateField:
          "Classes may not have a private field named '#constructor'.",
        ConstructorIsAccessor: 'Class constructor may not be an accessor.',
        ConstructorIsAsync: "Constructor can't be an async function.",
        ConstructorIsGenerator: "Constructor can't be a generator.",
        DeclarationMissingInitializer: "'%0' require an initialization value.",
        DecoratorBeforeExport:
          "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax.",
        DecoratorConstructor:
          "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
        DecoratorExportClass:
          'Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead.',
        DecoratorSemicolon: 'Decorators must not be followed by a semicolon.',
        DecoratorStaticBlock: "Decorators can't be used with a static block.",
        DeletePrivateField: 'Deleting a private field is not allowed.',
        DestructureNamedImport:
          'ES2015 named imports do not destructure. Use another statement for destructuring after the import.',
        DuplicateConstructor: 'Duplicate constructor in the same class.',
        DuplicateDefaultExport: 'Only one default export allowed per module.',
        DuplicateExport:
          '`%0` has already been exported. Exported identifiers must be unique.',
        DuplicateProto: 'Redefinition of __proto__ property.',
        DuplicateRegExpFlags: 'Duplicate regular expression flag.',
        ElementAfterRest: 'Rest element must be last element.',
        EscapedCharNotAnIdentifier: 'Invalid Unicode escape.',
        ExportBindingIsString:
          "A string literal cannot be used as an exported binding without `from`.\n- Did you mean `export { '%0' as '%1' } from 'some-module'`?",
        ExportDefaultFromAsIdentifier:
          "'from' is not allowed as an identifier after 'export default'.",
        ForInOfLoopInitializer:
          "'%0' loop variable declaration may not have an initializer.",
        ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
        ForOfLet:
          "The left-hand side of a for-of loop may not start with 'let'.",
        GeneratorInSingleStatementContext:
          'Generators can only be declared at the top level or inside a block.',
        IllegalBreakContinue: 'Unsyntactic %0.',
        IllegalLanguageModeDirective:
          "Illegal 'use strict' directive in function with non-simple parameter list.",
        IllegalReturn: "'return' outside of function.",
        ImportBindingIsString:
          'A string literal cannot be used as an imported binding.\n- Did you mean `import { "%0" as foo }`?',
        ImportCallArgumentTrailingComma:
          'Trailing comma is disallowed inside import(...) arguments.',
        ImportCallArity: '`import()` requires exactly %0.',
        ImportCallNotNewExpression: 'Cannot use new with import(...).',
        ImportCallSpreadArgument: '`...` is not allowed in `import()`.',
        InvalidBigIntLiteral: 'Invalid BigIntLiteral.',
        InvalidCodePoint: 'Code point out of bounds.',
        InvalidDecimal: 'Invalid decimal.',
        InvalidDigit: 'Expected number in radix %0.',
        InvalidEscapeSequence: 'Bad character escape sequence.',
        InvalidEscapeSequenceTemplate: 'Invalid escape sequence in template.',
        InvalidEscapedReservedWord: 'Escape sequence in keyword %0.',
        InvalidIdentifier: 'Invalid identifier %0.',
        InvalidLhs: 'Invalid left-hand side in %0.',
        InvalidLhsBinding: 'Binding invalid left-hand side in %0.',
        InvalidNumber: 'Invalid number.',
        InvalidOrMissingExponent:
          "Floating-point numbers require a valid exponent after the 'e'.",
        InvalidOrUnexpectedToken: "Unexpected character '%0'.",
        InvalidParenthesizedAssignment:
          'Invalid parenthesized assignment pattern.',
        InvalidPrivateFieldResolution: 'Private name #%0 is not defined.',
        InvalidPropertyBindingPattern: 'Binding member expression.',
        InvalidRecordProperty:
          'Only properties and spread elements are allowed in record definitions.',
        InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
        LabelRedeclaration: "Label '%0' is already declared.",
        LetInLexicalBinding:
          "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
        LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
        MalformedRegExpFlags: 'Invalid regular expression flag.',
        MissingClassName: 'A class name is required.',
        MissingEqInAssignment:
          "Only '=' operator can be used for specifying default value.",
        MissingSemicolon: 'Missing semicolon.',
        MissingUnicodeEscape: 'Expecting Unicode escape sequence \\uXXXX.',
        MixingCoalesceWithLogical:
          'Nullish coalescing operator(??) requires parens when mixing with logical operators.',
        ModuleAttributeDifferentFromType:
          'The only accepted module attribute is `type`.',
        ModuleAttributeInvalidValue:
          'Only string literals are allowed as module attribute values.',
        ModuleAttributesWithDuplicateKeys:
          'Duplicate key "%0" is not allowed in module attributes.',
        ModuleExportNameHasLoneSurrogate:
          "An export name cannot include a lone surrogate, found '\\u%0'.",
        ModuleExportUndefined: "Export '%0' is not defined.",
        MultipleDefaultsInSwitch: 'Multiple default clauses.',
        NewlineAfterThrow: 'Illegal newline after throw.',
        NoCatchOrFinally: 'Missing catch or finally clause.',
        NumberIdentifier: 'Identifier directly after number.',
        NumericSeparatorInEscapeSequence:
          'Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.',
        ObsoleteAwaitStar:
          "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
        OptionalChainingNoNew:
          'Constructors in/after an Optional Chain are not allowed.',
        OptionalChainingNoTemplate:
          'Tagged Template Literals are not allowed in optionalChain.',
        OverrideOnConstructor:
          "'override' modifier cannot appear on a constructor declaration.",
        ParamDupe: 'Argument name clash.',
        PatternHasAccessor: "Object pattern can't contain getter or setter.",
        PatternHasMethod: "Object pattern can't contain methods.",
        PipeBodyIsTighter:
          'Unexpected %0 after pipeline body; any %0 expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.',
        PipeTopicRequiresHackPipes:
          'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
        PipeTopicUnbound:
          'Topic reference is unbound; it must be inside a pipe body.',
        PipeTopicUnconfiguredToken:
          'Invalid topic token %0. In order to use %0 as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "%0" }.',
        PipeTopicUnused:
          'Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.',
        PipelineBodyNoArrow:
          'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
        PipelineBodySequenceExpression:
          'Pipeline body may not be a comma-separated sequence expression.',
        PipelineHeadSequenceExpression:
          'Pipeline head should not be a comma-separated sequence expression.',
        PipelineTopicUnused:
          'Pipeline is in topic style but does not use topic reference.',
        PrimaryTopicNotAllowed:
          'Topic reference was used in a lexical context without topic binding.',
        PrimaryTopicRequiresSmartPipeline:
          'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
        PrivateInExpectedIn:
          'Private names are only allowed in property accesses (`obj.#%0`) or in `in` expressions (`#%0 in obj`).',
        PrivateNameRedeclaration: 'Duplicate private name #%0.',
        RecordExpressionBarIncorrectEndSyntaxType:
          "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
        RecordExpressionBarIncorrectStartSyntaxType:
          "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
        RecordExpressionHashIncorrectStartSyntaxType:
          "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
        RecordNoProto: "'__proto__' is not allowed in Record expressions.",
        RestTrailingComma: 'Unexpected trailing comma after rest element.',
        SloppyFunction:
          'In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.',
        StaticPrototype:
          'Classes may not have static property named prototype.',
        StrictDelete: 'Deleting local variable in strict mode.',
        StrictEvalArguments: "Assigning to '%0' in strict mode.",
        StrictEvalArgumentsBinding: "Binding '%0' in strict mode.",
        StrictFunction:
          'In strict mode code, functions can only be declared at top level or inside a block.',
        StrictNumericEscape:
          "The only valid numeric escape in strict mode is '\\0'.",
        StrictOctalLiteral:
          'Legacy octal literals are not allowed in strict mode.',
        StrictWith: "'with' in strict mode.",
        SuperNotAllowed:
          "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
        SuperPrivateField: "Private fields can't be accessed on super.",
        TrailingDecorator: 'Decorators must be attached to a class element.',
        TupleExpressionBarIncorrectEndSyntaxType:
          "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
        TupleExpressionBarIncorrectStartSyntaxType:
          "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
        TupleExpressionHashIncorrectStartSyntaxType:
          "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
        UnexpectedArgumentPlaceholder: 'Unexpected argument placeholder.',
        UnexpectedAwaitAfterPipelineBody:
          'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
        UnexpectedDigitAfterHash: 'Unexpected digit after hash token.',
        UnexpectedImportExport:
          "'import' and 'export' may only appear at the top level.",
        UnexpectedKeyword: "Unexpected keyword '%0'.",
        UnexpectedLeadingDecorator:
          'Leading decorators must be attached to a class declaration.',
        UnexpectedLexicalDeclaration:
          'Lexical declaration cannot appear in a single-statement context.',
        UnexpectedNewTarget:
          '`new.target` can only be used in functions or class properties.',
        UnexpectedNumericSeparator:
          'A numeric separator is only allowed between two digits.',
        UnexpectedPrivateField:
          'Private names can only be used as the name of a class element (i.e. class C { #p = 42; #m() {} } )\n or a property of member expression (i.e. this.#p).',
        UnexpectedReservedWord: "Unexpected reserved word '%0'.",
        UnexpectedSuper:
          "'super' is only allowed in object methods and classes.",
        UnexpectedToken: "Unexpected token '%0'.",
        UnexpectedTokenUnaryExponentiation:
          'Illegal expression. Wrap left hand side or entire exponentiation in parentheses.',
        UnsupportedBind: 'Binding should be performed on object property.',
        UnsupportedDecoratorExport:
          'A decorated export must export a class declaration.',
        UnsupportedDefaultExport:
          'Only expressions, functions or classes are allowed as the `default` export.',
        UnsupportedImport:
          '`import` can only be used in `import()` or `import.meta`.',
        UnsupportedMetaProperty:
          'The only valid meta property for %0 is %0.%1.',
        UnsupportedParameterDecorator:
          'Decorators cannot be used to decorate parameters.',
        UnsupportedPropertyDecorator:
          'Decorators cannot be used to decorate object literal properties.',
        UnsupportedSuper:
          "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
        UnterminatedComment: 'Unterminated comment.',
        UnterminatedRegExp: 'Unterminated regular expression.',
        UnterminatedString: 'Unterminated string constant.',
        UnterminatedTemplate: 'Unterminated template.',
        VarRedeclaration: "Identifier '%0' has already been declared.",
        YieldBindingIdentifier:
          "Can not use 'yield' as identifier inside a generator.",
        YieldInParameter:
          'Yield expression is not allowed in formal parameters.',
        ZeroDigitNumericSeparator:
          'Numeric separator can not be used after leading 0.'
      },
      Kn.SyntaxError
    ),
    Jn = Qn(
      {
        ImportMetaOutsideModule:
          'import.meta may appear only with \'sourceType: "module"\'',
        ImportOutsideModule:
          "'import' and 'export' may appear only with 'sourceType: \"module\"'"
      },
      Kn.SourceTypeModuleError
    )
  function Yn(e, t) {
    return 'flow' === t && 'PatternIsOptional' === e
      ? 'OptionalBindingPattern'
      : e
  }
  function Qn(e, t, s) {
    const r = {}
    return (
      Object.keys(e).forEach((i) => {
        r[i] = Object.freeze({ code: t, reasonCode: Yn(i, s), template: e[i] })
      }),
      Object.freeze(r)
    )
  }
  class Zn {
    constructor(e, t) {
      ;(this.token = void 0),
        (this.preserveSpace = void 0),
        (this.token = e),
        (this.preserveSpace = !!t)
    }
  }
  const eo = { brace: new Zn('{'), template: new Zn('`', !0) }
  ;(Mn.braceR.updateContext = (e) => {
    e.pop()
  }),
    (Mn.braceL.updateContext =
      Mn.braceHashL.updateContext =
      Mn.dollarBraceL.updateContext =
        (e) => {
          e.push(eo.brace)
        }),
    (Mn.backQuote.updateContext = (e) => {
      e[e.length - 1] === eo.template ? e.pop() : e.push(eo.template)
    })
  let to =
      '\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc',
    so =
      '\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf\u1ac0\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f'
  const ro = new RegExp('[' + to + ']'),
    io = new RegExp('[' + to + so + ']')
  to = so = null
  const ao = [
      0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48,
      48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35,
      5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3,
      22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16,
      3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14,
      17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21,
      107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0,
      13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9,
      8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52,
      19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42,
      14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2,
      0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0,
      35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5,
      2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749,
      1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18,
      689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8,
      8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84,
      2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6,
      2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30,
      2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43,
      1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2,
      0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0,
      2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4,
      2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507,
      4938
    ],
    no = [
      509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1,
      574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54,
      9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7,
      0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4,
      193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9,
      82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2,
      1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15,
      406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9,
      49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0,
      2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3,
      149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2,
      16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759,
      9, 787719, 239
    ]
  function oo(e, t) {
    let s = 65536
    for (let r = 0, i = t.length; r < i; r += 2) {
      if (((s += t[r]), s > e)) return !1
      if (((s += t[r + 1]), s >= e)) return !0
    }
    return !1
  }
  function uo(e) {
    return e < 65
      ? 36 === e
      : e <= 90 ||
          (e < 97
            ? 95 === e
            : e <= 122 ||
              (e <= 65535
                ? e >= 170 && ro.test(String.fromCharCode(e))
                : oo(e, ao)))
  }
  function ho(e) {
    return e < 48
      ? 36 === e
      : e < 58 ||
          (!(e < 65) &&
            (e <= 90 ||
              (e < 97
                ? 95 === e
                : e <= 122 ||
                  (e <= 65535
                    ? e >= 170 && io.test(String.fromCharCode(e))
                    : oo(e, ao) || oo(e, no)))))
  }
  const co = [
      'implements',
      'interface',
      'let',
      'package',
      'private',
      'protected',
      'public',
      'static',
      'yield'
    ],
    po = ['eval', 'arguments'],
    lo = new Set([
      'break',
      'case',
      'catch',
      'continue',
      'debugger',
      'default',
      'do',
      'else',
      'finally',
      'for',
      'function',
      'if',
      'return',
      'switch',
      'throw',
      'try',
      'var',
      'const',
      'while',
      'with',
      'new',
      'this',
      'super',
      'class',
      'extends',
      'export',
      'import',
      'null',
      'true',
      'false',
      'in',
      'instanceof',
      'typeof',
      'void',
      'delete'
    ]),
    Do = new Set(co),
    mo = new Set(po)
  function fo(e, t) {
    return (t && 'await' === e) || 'enum' === e
  }
  function yo(e, t) {
    return fo(e, t) || Do.has(e)
  }
  function Ao(e) {
    return mo.has(e)
  }
  function Eo(e, t) {
    return yo(e, t) || Ao(e)
  }
  function Co(e) {
    return lo.has(e)
  }
  const xo = new Set([
    'break',
    'case',
    'catch',
    'continue',
    'debugger',
    'default',
    'do',
    'else',
    'finally',
    'for',
    'function',
    'if',
    'return',
    'switch',
    'throw',
    'try',
    'var',
    'const',
    'while',
    'with',
    'new',
    'this',
    'super',
    'class',
    'extends',
    'export',
    'import',
    'null',
    'true',
    'false',
    'in',
    'instanceof',
    'typeof',
    'void',
    'delete',
    'implements',
    'interface',
    'let',
    'package',
    'private',
    'protected',
    'public',
    'static',
    'yield',
    'eval',
    'arguments',
    'enum',
    'await'
  ])
  const Fo = 64,
    go = 256,
    bo = 259,
    Po = 128,
    To = 1024,
    wo = 2048
  class So {
    constructor(e) {
      ;(this.var = new Set()),
        (this.lexical = new Set()),
        (this.functions = new Set()),
        (this.flags = e)
    }
  }
  class Bo {
    constructor(e, t) {
      ;(this.scopeStack = []),
        (this.undefinedExports = new Map()),
        (this.undefinedPrivateNames = new Map()),
        (this.raise = e),
        (this.inModule = t)
    }
    get inFunction() {
      return (2 & this.currentVarScopeFlags()) > 0
    }
    get allowSuper() {
      return (16 & this.currentThisScopeFlags()) > 0
    }
    get allowDirectSuper() {
      return (32 & this.currentThisScopeFlags()) > 0
    }
    get inClass() {
      return (this.currentThisScopeFlags() & Fo) > 0
    }
    get inClassAndNotInNonArrowFunction() {
      const e = this.currentThisScopeFlags()
      return (e & Fo) > 0 && 0 == (2 & e)
    }
    get inStaticBlock() {
      for (let e = this.scopeStack.length - 1; ; e--) {
        const { flags: t } = this.scopeStack[e]
        if (128 & t) return !0
        if (323 & t) return !1
      }
    }
    get inNonArrowFunction() {
      return (2 & this.currentThisScopeFlags()) > 0
    }
    get treatFunctionsAsVar() {
      return this.treatFunctionsAsVarInScope(this.currentScope())
    }
    createScope(e) {
      return new So(e)
    }
    enter(e) {
      this.scopeStack.push(this.createScope(e))
    }
    exit() {
      this.scopeStack.pop()
    }
    treatFunctionsAsVarInScope(e) {
      return !!(2 & e.flags || (!this.inModule && 1 & e.flags))
    }
    declareName(e, t, s) {
      let r = this.currentScope()
      if (8 & t || 16 & t)
        this.checkRedeclarationInScope(r, e, t, s),
          16 & t ? r.functions.add(e) : r.lexical.add(e),
          8 & t && this.maybeExportDefined(r, e)
      else if (4 & t)
        for (
          let i = this.scopeStack.length - 1;
          i >= 0 &&
          ((r = this.scopeStack[i]),
          this.checkRedeclarationInScope(r, e, t, s),
          r.var.add(e),
          this.maybeExportDefined(r, e),
          !(r.flags & bo));
          --i
        );
      this.inModule && 1 & r.flags && this.undefinedExports.delete(e)
    }
    maybeExportDefined(e, t) {
      this.inModule && 1 & e.flags && this.undefinedExports.delete(t)
    }
    checkRedeclarationInScope(e, t, s, r) {
      this.isRedeclaredInScope(e, t, s) && this.raise(r, Xn.VarRedeclaration, t)
    }
    isRedeclaredInScope(e, t, s) {
      return (
        !!(1 & s) &&
        (8 & s
          ? e.lexical.has(t) || e.functions.has(t) || e.var.has(t)
          : 16 & s
          ? e.lexical.has(t) ||
            (!this.treatFunctionsAsVarInScope(e) && e.var.has(t))
          : (e.lexical.has(t) &&
              !(8 & e.flags && e.lexical.values().next().value === t)) ||
            (!this.treatFunctionsAsVarInScope(e) && e.functions.has(t)))
      )
    }
    checkLocalExport(e) {
      const { name: t } = e,
        s = this.scopeStack[0]
      s.lexical.has(t) ||
        s.var.has(t) ||
        s.functions.has(t) ||
        this.undefinedExports.set(t, e.start)
    }
    currentScope() {
      return this.scopeStack[this.scopeStack.length - 1]
    }
    currentVarScopeFlags() {
      for (let e = this.scopeStack.length - 1; ; e--) {
        const { flags: t } = this.scopeStack[e]
        if (t & bo) return t
      }
    }
    currentThisScopeFlags() {
      for (let e = this.scopeStack.length - 1; ; e--) {
        const { flags: t } = this.scopeStack[e]
        if (323 & t && !(4 & t)) return t
      }
    }
  }
  class No extends So {
    constructor(...e) {
      super(...e), (this.declareFunctions = new Set())
    }
  }
  class Io extends Bo {
    createScope(e) {
      return new No(e)
    }
    declareName(e, t, s) {
      const r = this.currentScope()
      if (t & wo)
        return (
          this.checkRedeclarationInScope(r, e, t, s),
          this.maybeExportDefined(r, e),
          void r.declareFunctions.add(e)
        )
      super.declareName(...arguments)
    }
    isRedeclaredInScope(e, t, s) {
      return (
        !!super.isRedeclaredInScope(...arguments) ||
        (!!(s & wo) &&
          !e.declareFunctions.has(t) &&
          (e.lexical.has(t) || e.functions.has(t)))
      )
    }
    checkLocalExport(e) {
      this.scopeStack[0].declareFunctions.has(e.name) ||
        super.checkLocalExport(e)
    }
  }
  class vo {
    constructor() {
      ;(this.strict = void 0),
        (this.curLine = void 0),
        (this.startLoc = void 0),
        (this.endLoc = void 0),
        (this.errors = []),
        (this.potentialArrowAt = -1),
        (this.noArrowAt = []),
        (this.noArrowParamsConversionAt = []),
        (this.maybeInArrowParameters = !1),
        (this.inType = !1),
        (this.noAnonFunctionType = !1),
        (this.inPropertyName = !1),
        (this.hasFlowComment = !1),
        (this.isAmbientContext = !1),
        (this.inAbstractClass = !1),
        (this.topicContext = {
          maxNumOfResolvableTopics: 0,
          maxTopicIndex: null
        }),
        (this.soloAwait = !1),
        (this.inFSharpPipelineDirectBody = !1),
        (this.labels = []),
        (this.decoratorStack = [[]]),
        (this.comments = []),
        (this.commentStack = []),
        (this.pos = 0),
        (this.lineStart = 0),
        (this.type = Mn.eof),
        (this.value = null),
        (this.start = 0),
        (this.end = 0),
        (this.lastTokEndLoc = null),
        (this.lastTokStartLoc = null),
        (this.lastTokStart = 0),
        (this.lastTokEnd = 0),
        (this.context = [eo.brace]),
        (this.exprAllowed = !0),
        (this.containsEsc = !1),
        (this.strictErrors = new Map()),
        (this.tokensLength = 0)
    }
    init(e) {
      ;(this.strict =
        !1 !== e.strictMode &&
        (!0 === e.strictMode || 'module' === e.sourceType)),
        (this.curLine = e.startLine),
        (this.startLoc = this.endLoc = this.curPosition())
    }
    curPosition() {
      return new Hn(this.curLine, this.pos - this.lineStart)
    }
    clone(e) {
      const t = new vo(),
        s = Object.keys(this)
      for (let r = 0, i = s.length; r < i; r++) {
        const i = s[r]
        let a = this[i]
        !e && Array.isArray(a) && (a = a.slice()), (t[i] = a)
      }
      return t
    }
  }
  var ko = function (e) {
    return e >= 48 && e <= 57
  }
  const Lo = new Set([103, 109, 115, 105, 121, 117, 100]),
    Oo = {
      decBinOct: [46, 66, 69, 79, 95, 98, 101, 111],
      hex: [46, 88, 95, 120]
    },
    Mo = { bin: [48, 49] }
  ;(Mo.oct = [...Mo.bin, 50, 51, 52, 53, 54, 55]),
    (Mo.dec = [...Mo.oct, 56, 57]),
    (Mo.hex = [...Mo.dec, 65, 66, 67, 68, 69, 70, 97, 98, 99, 100, 101, 102])
  class Ro {
    constructor(e) {
      ;(this.type = e.type),
        (this.value = e.value),
        (this.start = e.start),
        (this.end = e.end),
        (this.loc = new Vn(e.startLoc, e.endLoc))
    }
  }
  class jo {
    constructor() {
      ;(this.privateNames = new Set()),
        (this.loneAccessors = new Map()),
        (this.undefinedPrivateNames = new Map())
    }
  }
  class _o {
    constructor(e) {
      ;(this.stack = []),
        (this.undefinedPrivateNames = new Map()),
        (this.raise = e)
    }
    current() {
      return this.stack[this.stack.length - 1]
    }
    enter() {
      this.stack.push(new jo())
    }
    exit() {
      const e = this.stack.pop(),
        t = this.current()
      for (const [s, r] of Array.from(e.undefinedPrivateNames))
        t
          ? t.undefinedPrivateNames.has(s) || t.undefinedPrivateNames.set(s, r)
          : this.raise(r, Xn.InvalidPrivateFieldResolution, s)
    }
    declarePrivateName(e, t, s) {
      const r = this.current()
      let i = r.privateNames.has(e)
      if (3 & t) {
        const s = i && r.loneAccessors.get(e)
        if (s) {
          const a = 4 & s,
            n = 4 & t
          ;(i = (3 & s) === (3 & t) || a !== n), i || r.loneAccessors.delete(e)
        } else i || r.loneAccessors.set(e, t)
      }
      i && this.raise(s, Xn.PrivateNameRedeclaration, e),
        r.privateNames.add(e),
        r.undefinedPrivateNames.delete(e)
    }
    usePrivateName(e, t) {
      let s
      for (s of this.stack) if (s.privateNames.has(e)) return
      s
        ? s.undefinedPrivateNames.set(e, t)
        : this.raise(t, Xn.InvalidPrivateFieldResolution, e)
    }
  }
  class Uo {
    constructor(e = 0) {
      ;(this.type = void 0), (this.type = e)
    }
    canBeArrowParameterDeclaration() {
      return 2 === this.type || 1 === this.type
    }
    isCertainlyParameterDeclaration() {
      return 3 === this.type
    }
  }
  class qo extends Uo {
    constructor(e) {
      super(e), (this.errors = new Map())
    }
    recordDeclarationError(e, t) {
      this.errors.set(e, t)
    }
    clearDeclarationError(e) {
      this.errors.delete(e)
    }
    iterateErrors(e) {
      this.errors.forEach(e)
    }
  }
  class $o {
    constructor(e) {
      ;(this.stack = [new Uo()]), (this.raise = e)
    }
    enter(e) {
      this.stack.push(e)
    }
    exit() {
      this.stack.pop()
    }
    recordParameterInitializerError(e, t) {
      const { stack: s } = this
      let r = s.length - 1,
        i = s[r]
      for (; !i.isCertainlyParameterDeclaration(); ) {
        if (!i.canBeArrowParameterDeclaration()) return
        i.recordDeclarationError(e, t), (i = s[--r])
      }
      this.raise(e, t)
    }
    recordParenthesizedIdentifierError(e, t) {
      const { stack: s } = this,
        r = s[s.length - 1]
      if (r.isCertainlyParameterDeclaration()) this.raise(e, t)
      else {
        if (!r.canBeArrowParameterDeclaration()) return
        r.recordDeclarationError(e, t)
      }
    }
    recordAsyncArrowParametersError(e, t) {
      const { stack: s } = this
      let r = s.length - 1,
        i = s[r]
      for (; i.canBeArrowParameterDeclaration(); )
        2 === i.type && i.recordDeclarationError(e, t), (i = s[--r])
    }
    validateAsPattern() {
      const { stack: e } = this,
        t = e[e.length - 1]
      t.canBeArrowParameterDeclaration() &&
        t.iterateErrors((t, s) => {
          this.raise(s, t)
          let r = e.length - 2,
            i = e[r]
          for (; i.canBeArrowParameterDeclaration(); )
            i.clearDeclarationError(s), (i = e[--r])
        })
    }
  }
  function Ho() {
    return new Uo()
  }
  class Vo {
    constructor() {
      this.stacks = []
    }
    enter(e) {
      this.stacks.push(e)
    }
    exit() {
      this.stacks.pop()
    }
    currentFlags() {
      return this.stacks[this.stacks.length - 1]
    }
    get hasAwait() {
      return (2 & this.currentFlags()) > 0
    }
    get hasYield() {
      return (1 & this.currentFlags()) > 0
    }
    get hasReturn() {
      return (4 & this.currentFlags()) > 0
    }
    get hasIn() {
      return (8 & this.currentFlags()) > 0
    }
  }
  function zo(e, t) {
    return (e ? 2 : 0) | (t ? 1 : 0)
  }
  class Wo {
    constructor() {
      ;(this.shorthandAssign = -1),
        (this.doubleProto = -1),
        (this.optionalParameters = -1)
    }
  }
  class Go {
    constructor(e, t, s) {
      ;(this.type = ''),
        (this.start = t),
        (this.end = 0),
        (this.loc = new Vn(s)),
        null != e && e.options.ranges && (this.range = [t, 0]),
        null != e && e.filename && (this.loc.filename = e.filename)
    }
  }
  const Ko = Go.prototype
  function Xo(e) {
    const {
        type: t,
        start: s,
        end: r,
        loc: i,
        range: a,
        extra: n,
        name: o
      } = e,
      u = Object.create(Ko)
    return (
      (u.type = t),
      (u.start = s),
      (u.end = r),
      (u.loc = i),
      (u.range = a),
      (u.extra = n),
      (u.name = o),
      'Placeholder' === t && (u.expectedNode = e.expectedNode),
      u
    )
  }
  function Jo(e) {
    const { type: t, start: s, end: r, loc: i, range: a, extra: n } = e
    if ('Placeholder' === t)
      return (function (e) {
        return Xo(e)
      })(e)
    const o = Object.create(Ko)
    return (
      (o.type = 'StringLiteral'),
      (o.start = s),
      (o.end = r),
      (o.loc = i),
      (o.range = a),
      (o.extra = n),
      (o.value = e.value),
      o
    )
  }
  Ko.__clone = function () {
    const e = new Go(),
      t = Object.keys(this)
    for (let s = 0, r = t.length; s < r; s++) {
      const r = t[s]
      'leadingComments' !== r &&
        'trailingComments' !== r &&
        'innerComments' !== r &&
        (e[r] = this[r])
    }
    return e
  }
  const Yo = new Set([
      '_',
      'any',
      'bool',
      'boolean',
      'empty',
      'extends',
      'false',
      'interface',
      'mixed',
      'null',
      'number',
      'static',
      'string',
      'true',
      'typeof',
      'void'
    ]),
    Qo = Qn(
      {
        AmbiguousConditionalArrow:
          'Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.',
        AmbiguousDeclareModuleKind:
          'Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.',
        AssignReservedType: 'Cannot overwrite reserved type %0.',
        DeclareClassElement:
          'The `declare` modifier can only appear on class fields.',
        DeclareClassFieldInitializer:
          'Initializers are not allowed in fields with the `declare` modifier.',
        DuplicateDeclareModuleExports:
          'Duplicate `declare module.exports` statement.',
        EnumBooleanMemberNotInitialized:
          'Boolean enum members need to be initialized. Use either `%0 = true,` or `%0 = false,` in enum `%1`.',
        EnumDuplicateMemberName:
          'Enum member names need to be unique, but the name `%0` has already been used before in enum `%1`.',
        EnumInconsistentMemberValues:
          'Enum `%0` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.',
        EnumInvalidExplicitType:
          'Enum type `%1` is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.',
        EnumInvalidExplicitTypeUnknownSupplied:
          'Supplied enum type is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.',
        EnumInvalidMemberInitializerPrimaryType:
          'Enum `%0` has type `%2`, so the initializer of `%1` needs to be a %2 literal.',
        EnumInvalidMemberInitializerSymbolType:
          'Symbol enum members cannot be initialized. Use `%1,` in enum `%0`.',
        EnumInvalidMemberInitializerUnknownType:
          'The enum member initializer for `%1` needs to be a literal (either a boolean, number, or string) in enum `%0`.',
        EnumInvalidMemberName:
          "Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `%0`, consider using `%1`, in enum `%2`.",
        EnumNumberMemberNotInitialized:
          'Number enum members need to be initialized, e.g. `%1 = 1` in enum `%0`.',
        EnumStringMemberInconsistentlyInitailized:
          'String enum members need to consistently either all use initializers, or use no initializers, in enum `%0`.',
        GetterMayNotHaveThisParam: 'A getter cannot have a `this` parameter.',
        ImportTypeShorthandOnlyInPureImport:
          'The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.',
        InexactInsideExact:
          'Explicit inexact syntax cannot appear inside an explicit exact object type.',
        InexactInsideNonObject:
          'Explicit inexact syntax cannot appear in class or interface definitions.',
        InexactVariance: 'Explicit inexact syntax cannot have variance.',
        InvalidNonTypeImportInDeclareModule:
          'Imports within a `declare module` body must always be `import type` or `import typeof`.',
        MissingTypeParamDefault:
          'Type parameter declaration needs a default, since a preceding type parameter declaration has a default.',
        NestedDeclareModule:
          '`declare module` cannot be used inside another `declare module`.',
        NestedFlowComment:
          'Cannot have a flow comment inside another flow comment.',
        PatternIsOptional:
          'A binding pattern parameter cannot be optional in an implementation signature.',
        SetterMayNotHaveThisParam: 'A setter cannot have a `this` parameter.',
        SpreadVariance: 'Spread properties cannot have variance.',
        ThisParamAnnotationRequired:
          'A type annotation is required for the `this` parameter.',
        ThisParamBannedInConstructor:
          "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
        ThisParamMayNotBeOptional: 'The `this` parameter cannot be optional.',
        ThisParamMustBeFirst:
          'The `this` parameter must be the first function parameter.',
        ThisParamNoDefault:
          'The `this` parameter may not have a default value.',
        TypeBeforeInitializer:
          'Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.',
        TypeCastInPattern:
          'The type cast expression is expected to be wrapped with parenthesis.',
        UnexpectedExplicitInexactInObject:
          'Explicit inexact syntax must appear at the end of an inexact object.',
        UnexpectedReservedType: 'Unexpected reserved type %0.',
        UnexpectedReservedUnderscore:
          '`_` is only allowed as a type argument to call or new.',
        UnexpectedSpaceBetweenModuloChecks:
          'Spaces between `%` and `checks` are not allowed here.',
        UnexpectedSpreadType:
          'Spread operator cannot appear in class or interface definitions.',
        UnexpectedSubtractionOperand:
          'Unexpected token, expected "number" or "bigint".',
        UnexpectedTokenAfterTypeParameter:
          'Expected an arrow function after this type parameter declaration.',
        UnexpectedTypeParameterBeforeAsyncArrowFunction:
          'Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.',
        UnsupportedDeclareExportKind:
          '`declare export %0` is not supported. Use `%1` instead.',
        UnsupportedStatementInDeclareModule:
          'Only declares and type imports are allowed inside declare module.',
        UnterminatedFlowComment: 'Unterminated flow-comment.'
      },
      Kn.SyntaxError,
      'flow'
    )
  function Zo(e) {
    return 'type' === e.importKind || 'typeof' === e.importKind
  }
  function eu(e) {
    return (e.type === Mn.name || !!e.type.keyword) && 'from' !== e.value
  }
  const tu = {
    const: 'declare export var',
    let: 'declare export var',
    type: 'export type',
    interface: 'export interface'
  }
  const su = /\*?\s*@((?:no)?flow)\b/
  const ru = {
      quot: '"',
      amp: '&',
      apos: "'",
      lt: '<',
      gt: '>',
      nbsp: '\xa0',
      iexcl: '\xa1',
      cent: '\xa2',
      pound: '\xa3',
      curren: '\xa4',
      yen: '\xa5',
      brvbar: '\xa6',
      sect: '\xa7',
      uml: '\xa8',
      copy: '\xa9',
      ordf: '\xaa',
      laquo: '\xab',
      not: '\xac',
      shy: '\xad',
      reg: '\xae',
      macr: '\xaf',
      deg: '\xb0',
      plusmn: '\xb1',
      sup2: '\xb2',
      sup3: '\xb3',
      acute: '\xb4',
      micro: '\xb5',
      para: '\xb6',
      middot: '\xb7',
      cedil: '\xb8',
      sup1: '\xb9',
      ordm: '\xba',
      raquo: '\xbb',
      frac14: '\xbc',
      frac12: '\xbd',
      frac34: '\xbe',
      iquest: '\xbf',
      Agrave: '\xc0',
      Aacute: '\xc1',
      Acirc: '\xc2',
      Atilde: '\xc3',
      Auml: '\xc4',
      Aring: '\xc5',
      AElig: '\xc6',
      Ccedil: '\xc7',
      Egrave: '\xc8',
      Eacute: '\xc9',
      Ecirc: '\xca',
      Euml: '\xcb',
      Igrave: '\xcc',
      Iacute: '\xcd',
      Icirc: '\xce',
      Iuml: '\xcf',
      ETH: '\xd0',
      Ntilde: '\xd1',
      Ograve: '\xd2',
      Oacute: '\xd3',
      Ocirc: '\xd4',
      Otilde: '\xd5',
      Ouml: '\xd6',
      times: '\xd7',
      Oslash: '\xd8',
      Ugrave: '\xd9',
      Uacute: '\xda',
      Ucirc: '\xdb',
      Uuml: '\xdc',
      Yacute: '\xdd',
      THORN: '\xde',
      szlig: '\xdf',
      agrave: '\xe0',
      aacute: '\xe1',
      acirc: '\xe2',
      atilde: '\xe3',
      auml: '\xe4',
      aring: '\xe5',
      aelig: '\xe6',
      ccedil: '\xe7',
      egrave: '\xe8',
      eacute: '\xe9',
      ecirc: '\xea',
      euml: '\xeb',
      igrave: '\xec',
      iacute: '\xed',
      icirc: '\xee',
      iuml: '\xef',
      eth: '\xf0',
      ntilde: '\xf1',
      ograve: '\xf2',
      oacute: '\xf3',
      ocirc: '\xf4',
      otilde: '\xf5',
      ouml: '\xf6',
      divide: '\xf7',
      oslash: '\xf8',
      ugrave: '\xf9',
      uacute: '\xfa',
      ucirc: '\xfb',
      uuml: '\xfc',
      yacute: '\xfd',
      thorn: '\xfe',
      yuml: '\xff',
      OElig: '\u0152',
      oelig: '\u0153',
      Scaron: '\u0160',
      scaron: '\u0161',
      Yuml: '\u0178',
      fnof: '\u0192',
      circ: '\u02c6',
      tilde: '\u02dc',
      Alpha: '\u0391',
      Beta: '\u0392',
      Gamma: '\u0393',
      Delta: '\u0394',
      Epsilon: '\u0395',
      Zeta: '\u0396',
      Eta: '\u0397',
      Theta: '\u0398',
      Iota: '\u0399',
      Kappa: '\u039a',
      Lambda: '\u039b',
      Mu: '\u039c',
      Nu: '\u039d',
      Xi: '\u039e',
      Omicron: '\u039f',
      Pi: '\u03a0',
      Rho: '\u03a1',
      Sigma: '\u03a3',
      Tau: '\u03a4',
      Upsilon: '\u03a5',
      Phi: '\u03a6',
      Chi: '\u03a7',
      Psi: '\u03a8',
      Omega: '\u03a9',
      alpha: '\u03b1',
      beta: '\u03b2',
      gamma: '\u03b3',
      delta: '\u03b4',
      epsilon: '\u03b5',
      zeta: '\u03b6',
      eta: '\u03b7',
      theta: '\u03b8',
      iota: '\u03b9',
      kappa: '\u03ba',
      lambda: '\u03bb',
      mu: '\u03bc',
      nu: '\u03bd',
      xi: '\u03be',
      omicron: '\u03bf',
      pi: '\u03c0',
      rho: '\u03c1',
      sigmaf: '\u03c2',
      sigma: '\u03c3',
      tau: '\u03c4',
      upsilon: '\u03c5',
      phi: '\u03c6',
      chi: '\u03c7',
      psi: '\u03c8',
      omega: '\u03c9',
      thetasym: '\u03d1',
      upsih: '\u03d2',
      piv: '\u03d6',
      ensp: '\u2002',
      emsp: '\u2003',
      thinsp: '\u2009',
      zwnj: '\u200c',
      zwj: '\u200d',
      lrm: '\u200e',
      rlm: '\u200f',
      ndash: '\u2013',
      mdash: '\u2014',
      lsquo: '\u2018',
      rsquo: '\u2019',
      sbquo: '\u201a',
      ldquo: '\u201c',
      rdquo: '\u201d',
      bdquo: '\u201e',
      dagger: '\u2020',
      Dagger: '\u2021',
      bull: '\u2022',
      hellip: '\u2026',
      permil: '\u2030',
      prime: '\u2032',
      Prime: '\u2033',
      lsaquo: '\u2039',
      rsaquo: '\u203a',
      oline: '\u203e',
      frasl: '\u2044',
      euro: '\u20ac',
      image: '\u2111',
      weierp: '\u2118',
      real: '\u211c',
      trade: '\u2122',
      alefsym: '\u2135',
      larr: '\u2190',
      uarr: '\u2191',
      rarr: '\u2192',
      darr: '\u2193',
      harr: '\u2194',
      crarr: '\u21b5',
      lArr: '\u21d0',
      uArr: '\u21d1',
      rArr: '\u21d2',
      dArr: '\u21d3',
      hArr: '\u21d4',
      forall: '\u2200',
      part: '\u2202',
      exist: '\u2203',
      empty: '\u2205',
      nabla: '\u2207',
      isin: '\u2208',
      notin: '\u2209',
      ni: '\u220b',
      prod: '\u220f',
      sum: '\u2211',
      minus: '\u2212',
      lowast: '\u2217',
      radic: '\u221a',
      prop: '\u221d',
      infin: '\u221e',
      ang: '\u2220',
      and: '\u2227',
      or: '\u2228',
      cap: '\u2229',
      cup: '\u222a',
      int: '\u222b',
      there4: '\u2234',
      sim: '\u223c',
      cong: '\u2245',
      asymp: '\u2248',
      ne: '\u2260',
      equiv: '\u2261',
      le: '\u2264',
      ge: '\u2265',
      sub: '\u2282',
      sup: '\u2283',
      nsub: '\u2284',
      sube: '\u2286',
      supe: '\u2287',
      oplus: '\u2295',
      otimes: '\u2297',
      perp: '\u22a5',
      sdot: '\u22c5',
      lceil: '\u2308',
      rceil: '\u2309',
      lfloor: '\u230a',
      rfloor: '\u230b',
      lang: '\u2329',
      rang: '\u232a',
      loz: '\u25ca',
      spades: '\u2660',
      clubs: '\u2663',
      hearts: '\u2665',
      diams: '\u2666'
    },
    iu = /^[\da-fA-F]+$/,
    au = /^\d+$/,
    nu = Qn(
      {
        AttributeIsEmpty:
          'JSX attributes must only be assigned a non-empty expression.',
        MissingClosingTagElement:
          'Expected corresponding JSX closing tag for <%0>.',
        MissingClosingTagFragment:
          'Expected corresponding JSX closing tag for <>.',
        UnexpectedSequenceExpression:
          'Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?',
        UnsupportedJsxValue:
          'JSX value should be either an expression or a quoted JSX text.',
        UnterminatedJsxContent: 'Unterminated JSX contents.',
        UnwrappedAdjacentJSXElements:
          'Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?'
      },
      Kn.SyntaxError,
      'jsx'
    )
  function ou(e) {
    return (
      !!e &&
      ('JSXOpeningFragment' === e.type || 'JSXClosingFragment' === e.type)
    )
  }
  function uu(e) {
    if ('JSXIdentifier' === e.type) return e.name
    if ('JSXNamespacedName' === e.type)
      return e.namespace.name + ':' + e.name.name
    if ('JSXMemberExpression' === e.type)
      return uu(e.object) + '.' + uu(e.property)
    throw new Error('Node had unexpected type: ' + e.type)
  }
  ;(eo.j_oTag = new Zn('<tag')),
    (eo.j_cTag = new Zn('</tag')),
    (eo.j_expr = new Zn('<tag>...</tag>', !0)),
    (Mn.jsxName = new vn('jsxName')),
    (Mn.jsxText = new vn('jsxText', { beforeExpr: !0 })),
    (Mn.jsxTagStart = new vn('jsxTagStart', { startsExpr: !0 })),
    (Mn.jsxTagEnd = new vn('jsxTagEnd')),
    (Mn.jsxTagStart.updateContext = (e) => {
      e.push(eo.j_expr, eo.j_oTag)
    })
  class hu extends So {
    constructor(...e) {
      super(...e),
        (this.types = new Set()),
        (this.enums = new Set()),
        (this.constEnums = new Set()),
        (this.classes = new Set()),
        (this.exportOnlyBindings = new Set())
    }
  }
  class cu extends Bo {
    createScope(e) {
      return new hu(e)
    }
    declareName(e, t, s) {
      const r = this.currentScope()
      if (t & To)
        return this.maybeExportDefined(r, e), void r.exportOnlyBindings.add(e)
      super.declareName(...arguments),
        2 & t &&
          (1 & t ||
            (this.checkRedeclarationInScope(r, e, t, s),
            this.maybeExportDefined(r, e)),
          r.types.add(e)),
        256 & t && r.enums.add(e),
        512 & t && r.constEnums.add(e),
        t & Po && r.classes.add(e)
    }
    isRedeclaredInScope(e, t, s) {
      if (e.enums.has(t)) {
        if (256 & s) {
          return !!(512 & s) !== e.constEnums.has(t)
        }
        return !0
      }
      return s & Po && e.classes.has(t)
        ? !!e.lexical.has(t) && !!(1 & s)
        : !!(2 & s && e.types.has(t)) || super.isRedeclaredInScope(...arguments)
    }
    checkLocalExport(e) {
      const t = this.scopeStack[0],
        { name: s } = e
      t.types.has(s) || t.exportOnlyBindings.has(s) || super.checkLocalExport(e)
    }
  }
  function pu(e) {
    if (null == e) throw new Error(`Unexpected ${e} value.`)
    return e
  }
  function lu(e) {
    if (!e) throw new Error('Assert fail')
  }
  const du = Qn(
    {
      AbstractMethodHasImplementation:
        "Method '%0' cannot have an implementation because it is marked abstract.",
      AbstractPropertyHasInitializer:
        "Property '%0' cannot have an initializer because it is marked abstract.",
      AccesorCannotDeclareThisParameter:
        "'get' and 'set' accessors cannot declare 'this' parameters.",
      AccesorCannotHaveTypeParameters:
        'An accessor cannot have type parameters.',
      ClassMethodHasDeclare:
        "Class methods cannot have the 'declare' modifier.",
      ClassMethodHasReadonly:
        "Class methods cannot have the 'readonly' modifier.",
      ConstructorHasTypeParameters:
        'Type parameters cannot appear on a constructor declaration.',
      DeclareAccessor: "'declare' is not allowed in %0ters.",
      DeclareClassFieldHasInitializer:
        'Initializers are not allowed in ambient contexts.',
      DeclareFunctionHasImplementation:
        'An implementation cannot be declared in ambient contexts.',
      DuplicateAccessibilityModifier: 'Accessibility modifier already seen.',
      DuplicateModifier: "Duplicate modifier: '%0'.",
      EmptyHeritageClauseType: "'%0' list cannot be empty.",
      EmptyTypeArguments: 'Type argument list cannot be empty.',
      EmptyTypeParameters: 'Type parameter list cannot be empty.',
      ExpectedAmbientAfterExportDeclare:
        "'export declare' must be followed by an ambient declaration.",
      ImportAliasHasImportType: "An import alias can not use 'import type'.",
      IncompatibleModifiers: "'%0' modifier cannot be used with '%1' modifier.",
      IndexSignatureHasAbstract:
        "Index signatures cannot have the 'abstract' modifier.",
      IndexSignatureHasAccessibility:
        "Index signatures cannot have an accessibility modifier ('%0').",
      IndexSignatureHasDeclare:
        "Index signatures cannot have the 'declare' modifier.",
      IndexSignatureHasOverride:
        "'override' modifier cannot appear on an index signature.",
      IndexSignatureHasStatic:
        "Index signatures cannot have the 'static' modifier.",
      InvalidModifierOnTypeMember:
        "'%0' modifier cannot appear on a type member.",
      InvalidModifiersOrder: "'%0' modifier must precede '%1' modifier.",
      InvalidTupleMemberLabel:
        'Tuple members must be labeled with a simple identifier.',
      MissingInterfaceName:
        "'interface' declarations must be followed by an identifier.",
      MixedLabeledAndUnlabeledElements:
        'Tuple members must all have names or all not have names.',
      NonAbstractClassHasAbstractMethod:
        'Abstract methods can only appear within an abstract class.',
      NonClassMethodPropertyHasAbstractModifer:
        "'abstract' modifier can only appear on a class, method, or property declaration.",
      OptionalTypeBeforeRequired:
        'A required element cannot follow an optional element.',
      OverrideNotInSubClass:
        "This member cannot have an 'override' modifier because its containing class does not extend another class.",
      PatternIsOptional:
        'A binding pattern parameter cannot be optional in an implementation signature.',
      PrivateElementHasAbstract:
        "Private elements cannot have the 'abstract' modifier.",
      PrivateElementHasAccessibility:
        "Private elements cannot have an accessibility modifier ('%0').",
      ReadonlyForMethodSignature:
        "'readonly' modifier can only appear on a property declaration or index signature.",
      SetAccesorCannotHaveOptionalParameter:
        "A 'set' accessor cannot have an optional parameter.",
      SetAccesorCannotHaveRestParameter:
        "A 'set' accessor cannot have rest parameter.",
      SetAccesorCannotHaveReturnType:
        "A 'set' accessor cannot have a return type annotation.",
      StaticBlockCannotHaveModifier:
        'Static class blocks cannot have any modifier.',
      TypeAnnotationAfterAssign:
        'Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.',
      TypeImportCannotSpecifyDefaultAndNamed:
        'A type-only import can specify a default import or named bindings, but not both.',
      UnexpectedParameterModifier:
        'A parameter property is only allowed in a constructor implementation.',
      UnexpectedReadonly:
        "'readonly' type modifier is only permitted on array and tuple literal types.",
      UnexpectedTypeAnnotation: 'Did not expect a type annotation here.',
      UnexpectedTypeCastInParameter:
        'Unexpected type cast in parameter position.',
      UnsupportedImportTypeArgument:
        'Argument in a type import must be a string literal.',
      UnsupportedParameterPropertyKind:
        'A parameter property may not be declared using a binding pattern.',
      UnsupportedSignatureParameterKind:
        'Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got %0.'
    },
    Kn.SyntaxError,
    'typescript'
  )
  function Du(e) {
    return 'private' === e || 'public' === e || 'protected' === e
  }
  Mn.placeholder = new vn('%%', { startsExpr: !0 })
  const mu = Qn(
    { ClassNameIsRequired: 'A class name is required.' },
    Kn.SyntaxError
  )
  function fu(e, t) {
    return e.some((e) => (Array.isArray(e) ? e[0] === t : e === t))
  }
  function yu(e, t, s) {
    const r = e.find((e) => (Array.isArray(e) ? e[0] === t : e === t))
    return r && Array.isArray(r) ? r[1][s] : null
  }
  const Au = ['minimal', 'fsharp', 'hack', 'smart'],
    Eu = ['%', '#'],
    Cu = ['hash', 'bar']
  const xu = {
      estree: (e) =>
        class extends e {
          parseRegExpLiteral({ pattern: e, flags: t }) {
            let s = null
            try {
              s = new RegExp(e, t)
            } catch (e) {}
            const r = this.estreeParseLiteral(s)
            return (r.regex = { pattern: e, flags: t }), r
          }
          parseBigIntLiteral(e) {
            let t
            try {
              t = BigInt(e)
            } catch (e) {
              t = null
            }
            const s = this.estreeParseLiteral(t)
            return (s.bigint = String(s.value || e)), s
          }
          parseDecimalLiteral(e) {
            const t = this.estreeParseLiteral(null)
            return (t.decimal = String(t.value || e)), t
          }
          estreeParseLiteral(e) {
            return this.parseLiteral(e, 'Literal')
          }
          parseStringLiteral(e) {
            return this.estreeParseLiteral(e)
          }
          parseNumericLiteral(e) {
            return this.estreeParseLiteral(e)
          }
          parseNullLiteral() {
            return this.estreeParseLiteral(null)
          }
          parseBooleanLiteral(e) {
            return this.estreeParseLiteral(e)
          }
          directiveToStmt(e) {
            const t = e.value,
              s = this.startNodeAt(e.start, e.loc.start),
              r = this.startNodeAt(t.start, t.loc.start)
            return (
              (r.value = t.extra.expressionValue),
              (r.raw = t.extra.raw),
              (s.expression = this.finishNodeAt(
                r,
                'Literal',
                t.end,
                t.loc.end
              )),
              (s.directive = t.extra.raw.slice(1, -1)),
              this.finishNodeAt(s, 'ExpressionStatement', e.end, e.loc.end)
            )
          }
          initFunction(e, t) {
            super.initFunction(e, t), (e.expression = !1)
          }
          checkDeclaration(e) {
            null != e && this.isObjectProperty(e)
              ? this.checkDeclaration(e.value)
              : super.checkDeclaration(e)
          }
          getObjectOrClassMethodParams(e) {
            return e.value.params
          }
          isValidDirective(e) {
            var t
            return (
              'ExpressionStatement' === e.type &&
              'Literal' === e.expression.type &&
              'string' == typeof e.expression.value &&
              !(null != (t = e.expression.extra) && t.parenthesized)
            )
          }
          stmtToDirective(e) {
            const t = e.expression.value,
              s = super.stmtToDirective(e)
            return this.addExtra(s.value, 'expressionValue', t), s
          }
          parseBlockBody(e, ...t) {
            super.parseBlockBody(e, ...t)
            const s = e.directives.map((e) => this.directiveToStmt(e))
            ;(e.body = s.concat(e.body)), delete e.directives
          }
          pushClassMethod(e, t, s, r, i, a) {
            this.parseMethod(t, s, r, i, a, 'ClassMethod', !0),
              t.typeParameters &&
                ((t.value.typeParameters = t.typeParameters),
                delete t.typeParameters),
              e.body.push(t)
          }
          parseMaybePrivateName(...e) {
            const t = super.parseMaybePrivateName(...e)
            return 'PrivateName' === t.type &&
              this.getPluginOption('estree', 'classFeatures')
              ? this.convertPrivateNameToPrivateIdentifier(t)
              : t
          }
          convertPrivateNameToPrivateIdentifier(e) {
            const t = super.getPrivateNameSV(e)
            return (
              delete (e = e).id, (e.name = t), (e.type = 'PrivateIdentifier'), e
            )
          }
          isPrivateName(e) {
            return this.getPluginOption('estree', 'classFeatures')
              ? 'PrivateIdentifier' === e.type
              : super.isPrivateName(e)
          }
          getPrivateNameSV(e) {
            return this.getPluginOption('estree', 'classFeatures')
              ? e.name
              : super.getPrivateNameSV(e)
          }
          parseLiteral(e, t) {
            const s = super.parseLiteral(e, t)
            return (s.raw = s.extra.raw), delete s.extra, s
          }
          parseFunctionBody(e, t, s = !1) {
            super.parseFunctionBody(e, t, s),
              (e.expression = 'BlockStatement' !== e.body.type)
          }
          parseMethod(e, t, s, r, i, a, n = !1) {
            let o = this.startNode()
            return (
              (o.kind = e.kind),
              (o = super.parseMethod(o, t, s, r, i, a, n)),
              (o.type = 'FunctionExpression'),
              delete o.kind,
              (e.value = o),
              'ClassPrivateMethod' === a && (e.computed = !1),
              (a = 'MethodDefinition'),
              this.finishNode(e, a)
            )
          }
          parseClassProperty(...e) {
            const t = super.parseClassProperty(...e)
            return (
              this.getPluginOption('estree', 'classFeatures') &&
                (t.type = 'PropertyDefinition'),
              t
            )
          }
          parseClassPrivateProperty(...e) {
            const t = super.parseClassPrivateProperty(...e)
            return (
              this.getPluginOption('estree', 'classFeatures') &&
                ((t.type = 'PropertyDefinition'), (t.computed = !1)),
              t
            )
          }
          parseObjectMethod(e, t, s, r, i) {
            const a = super.parseObjectMethod(e, t, s, r, i)
            return (
              a &&
                ((a.type = 'Property'),
                'method' === a.kind && (a.kind = 'init'),
                (a.shorthand = !1)),
              a
            )
          }
          parseObjectProperty(e, t, s, r, i) {
            const a = super.parseObjectProperty(e, t, s, r, i)
            return a && ((a.kind = 'init'), (a.type = 'Property')), a
          }
          isAssignable(e, t) {
            return null != e && this.isObjectProperty(e)
              ? this.isAssignable(e.value, t)
              : super.isAssignable(e, t)
          }
          toAssignable(e, t = !1) {
            return null != e && this.isObjectProperty(e)
              ? (this.toAssignable(e.value, t), e)
              : super.toAssignable(e, t)
          }
          toAssignableObjectExpressionProp(e, ...t) {
            'get' === e.kind || 'set' === e.kind
              ? this.raise(e.key.start, Xn.PatternHasAccessor)
              : e.method
              ? this.raise(e.key.start, Xn.PatternHasMethod)
              : super.toAssignableObjectExpressionProp(e, ...t)
          }
          finishCallExpression(e, t) {
            if (
              (super.finishCallExpression(e, t), 'Import' === e.callee.type)
            ) {
              var s
              if (
                ((e.type = 'ImportExpression'),
                (e.source = e.arguments[0]),
                this.hasPlugin('importAssertions'))
              )
                e.attributes = null != (s = e.arguments[1]) ? s : null
              delete e.arguments, delete e.callee
            }
            return e
          }
          toReferencedArguments(e) {
            'ImportExpression' !== e.type && super.toReferencedArguments(e)
          }
          parseExport(e) {
            switch ((super.parseExport(e), e.type)) {
              case 'ExportAllDeclaration':
                e.exported = null
                break
              case 'ExportNamedDeclaration':
                1 === e.specifiers.length &&
                  'ExportNamespaceSpecifier' === e.specifiers[0].type &&
                  ((e.type = 'ExportAllDeclaration'),
                  (e.exported = e.specifiers[0].exported),
                  delete e.specifiers)
            }
            return e
          }
          parseSubscript(e, t, s, r, i) {
            const a = super.parseSubscript(e, t, s, r, i)
            if (i.optionalChainMember) {
              if (
                (('OptionalMemberExpression' !== a.type &&
                  'OptionalCallExpression' !== a.type) ||
                  (a.type = a.type.substring(8)),
                i.stop)
              ) {
                const e = this.startNodeAtNode(a)
                return (e.expression = a), this.finishNode(e, 'ChainExpression')
              }
            } else
              ('MemberExpression' !== a.type && 'CallExpression' !== a.type) ||
                (a.optional = !1)
            return a
          }
          hasPropertyAsPrivateName(e) {
            return (
              'ChainExpression' === e.type && (e = e.expression),
              super.hasPropertyAsPrivateName(e)
            )
          }
          isOptionalChain(e) {
            return 'ChainExpression' === e.type
          }
          isObjectProperty(e) {
            return 'Property' === e.type && 'init' === e.kind && !e.method
          }
          isObjectMethod(e) {
            return e.method || 'get' === e.kind || 'set' === e.kind
          }
        },
      jsx: (e) =>
        class extends e {
          jsxReadToken() {
            let e = '',
              t = this.state.pos
            for (;;) {
              if (this.state.pos >= this.length)
                throw this.raise(this.state.start, nu.UnterminatedJsxContent)
              const s = this.input.charCodeAt(this.state.pos)
              switch (s) {
                case 60:
                case 123:
                  return this.state.pos === this.state.start
                    ? 60 === s && this.state.exprAllowed
                      ? (++this.state.pos, this.finishToken(Mn.jsxTagStart))
                      : super.getTokenFromCode(s)
                    : ((e += this.input.slice(t, this.state.pos)),
                      this.finishToken(Mn.jsxText, e))
                case 38:
                  ;(e += this.input.slice(t, this.state.pos)),
                    (e += this.jsxReadEntity()),
                    (t = this.state.pos)
                  break
                case 62:
                case 125:
                default:
                  _n(s)
                    ? ((e += this.input.slice(t, this.state.pos)),
                      (e += this.jsxReadNewLine(!0)),
                      (t = this.state.pos))
                    : ++this.state.pos
              }
            }
          }
          jsxReadNewLine(e) {
            const t = this.input.charCodeAt(this.state.pos)
            let s
            return (
              ++this.state.pos,
              13 === t && 10 === this.input.charCodeAt(this.state.pos)
                ? (++this.state.pos, (s = e ? '\n' : '\r\n'))
                : (s = String.fromCharCode(t)),
              ++this.state.curLine,
              (this.state.lineStart = this.state.pos),
              s
            )
          }
          jsxReadString(e) {
            let t = '',
              s = ++this.state.pos
            for (;;) {
              if (this.state.pos >= this.length)
                throw this.raise(this.state.start, Xn.UnterminatedString)
              const r = this.input.charCodeAt(this.state.pos)
              if (r === e) break
              38 === r
                ? ((t += this.input.slice(s, this.state.pos)),
                  (t += this.jsxReadEntity()),
                  (s = this.state.pos))
                : _n(r)
                ? ((t += this.input.slice(s, this.state.pos)),
                  (t += this.jsxReadNewLine(!1)),
                  (s = this.state.pos))
                : ++this.state.pos
            }
            return (
              (t += this.input.slice(s, this.state.pos++)),
              this.finishToken(Mn.string, t)
            )
          }
          jsxReadEntity() {
            let e,
              t = '',
              s = 0,
              r = this.input[this.state.pos]
            const i = ++this.state.pos
            for (; this.state.pos < this.length && s++ < 10; ) {
              if (((r = this.input[this.state.pos++]), ';' === r)) {
                '#' === t[0]
                  ? 'x' === t[1]
                    ? ((t = t.substr(2)),
                      iu.test(t) && (e = String.fromCodePoint(parseInt(t, 16))))
                    : ((t = t.substr(1)),
                      au.test(t) && (e = String.fromCodePoint(parseInt(t, 10))))
                  : (e = ru[t])
                break
              }
              t += r
            }
            return e || ((this.state.pos = i), '&')
          }
          jsxReadWord() {
            let e
            const t = this.state.pos
            do {
              e = this.input.charCodeAt(++this.state.pos)
            } while (ho(e) || 45 === e)
            return this.finishToken(
              Mn.jsxName,
              this.input.slice(t, this.state.pos)
            )
          }
          jsxParseIdentifier() {
            const e = this.startNode()
            return (
              this.match(Mn.jsxName)
                ? (e.name = this.state.value)
                : this.state.type.keyword
                ? (e.name = this.state.type.keyword)
                : this.unexpected(),
              this.next(),
              this.finishNode(e, 'JSXIdentifier')
            )
          }
          jsxParseNamespacedName() {
            const e = this.state.start,
              t = this.state.startLoc,
              s = this.jsxParseIdentifier()
            if (!this.eat(Mn.colon)) return s
            const r = this.startNodeAt(e, t)
            return (
              (r.namespace = s),
              (r.name = this.jsxParseIdentifier()),
              this.finishNode(r, 'JSXNamespacedName')
            )
          }
          jsxParseElementName() {
            const e = this.state.start,
              t = this.state.startLoc
            let s = this.jsxParseNamespacedName()
            if ('JSXNamespacedName' === s.type) return s
            for (; this.eat(Mn.dot); ) {
              const r = this.startNodeAt(e, t)
              ;(r.object = s),
                (r.property = this.jsxParseIdentifier()),
                (s = this.finishNode(r, 'JSXMemberExpression'))
            }
            return s
          }
          jsxParseAttributeValue() {
            let e
            switch (this.state.type) {
              case Mn.braceL:
                return (
                  (e = this.startNode()),
                  this.next(),
                  (e = this.jsxParseExpressionContainer(e)),
                  'JSXEmptyExpression' === e.expression.type &&
                    this.raise(e.start, nu.AttributeIsEmpty),
                  e
                )
              case Mn.jsxTagStart:
              case Mn.string:
                return this.parseExprAtom()
              default:
                throw this.raise(this.state.start, nu.UnsupportedJsxValue)
            }
          }
          jsxParseEmptyExpression() {
            const e = this.startNodeAt(
              this.state.lastTokEnd,
              this.state.lastTokEndLoc
            )
            return this.finishNodeAt(
              e,
              'JSXEmptyExpression',
              this.state.start,
              this.state.startLoc
            )
          }
          jsxParseSpreadChild(e) {
            return (
              this.next(),
              (e.expression = this.parseExpression()),
              this.expect(Mn.braceR),
              this.finishNode(e, 'JSXSpreadChild')
            )
          }
          jsxParseExpressionContainer(e) {
            if (this.match(Mn.braceR))
              e.expression = this.jsxParseEmptyExpression()
            else {
              const t = this.parseExpression()
              e.expression = t
            }
            return (
              this.expect(Mn.braceR),
              this.finishNode(e, 'JSXExpressionContainer')
            )
          }
          jsxParseAttribute() {
            const e = this.startNode()
            return this.eat(Mn.braceL)
              ? (this.expect(Mn.ellipsis),
                (e.argument = this.parseMaybeAssignAllowIn()),
                this.expect(Mn.braceR),
                this.finishNode(e, 'JSXSpreadAttribute'))
              : ((e.name = this.jsxParseNamespacedName()),
                (e.value = this.eat(Mn.eq)
                  ? this.jsxParseAttributeValue()
                  : null),
                this.finishNode(e, 'JSXAttribute'))
          }
          jsxParseOpeningElementAt(e, t) {
            const s = this.startNodeAt(e, t)
            return this.match(Mn.jsxTagEnd)
              ? (this.expect(Mn.jsxTagEnd),
                this.finishNode(s, 'JSXOpeningFragment'))
              : ((s.name = this.jsxParseElementName()),
                this.jsxParseOpeningElementAfterName(s))
          }
          jsxParseOpeningElementAfterName(e) {
            const t = []
            for (; !this.match(Mn.slash) && !this.match(Mn.jsxTagEnd); )
              t.push(this.jsxParseAttribute())
            return (
              (e.attributes = t),
              (e.selfClosing = this.eat(Mn.slash)),
              this.expect(Mn.jsxTagEnd),
              this.finishNode(e, 'JSXOpeningElement')
            )
          }
          jsxParseClosingElementAt(e, t) {
            const s = this.startNodeAt(e, t)
            return this.match(Mn.jsxTagEnd)
              ? (this.expect(Mn.jsxTagEnd),
                this.finishNode(s, 'JSXClosingFragment'))
              : ((s.name = this.jsxParseElementName()),
                this.expect(Mn.jsxTagEnd),
                this.finishNode(s, 'JSXClosingElement'))
          }
          jsxParseElementAt(e, t) {
            const s = this.startNodeAt(e, t),
              r = [],
              i = this.jsxParseOpeningElementAt(e, t)
            let a = null
            if (!i.selfClosing) {
              e: for (;;)
                switch (this.state.type) {
                  case Mn.jsxTagStart:
                    if (
                      ((e = this.state.start),
                      (t = this.state.startLoc),
                      this.next(),
                      this.eat(Mn.slash))
                    ) {
                      a = this.jsxParseClosingElementAt(e, t)
                      break e
                    }
                    r.push(this.jsxParseElementAt(e, t))
                    break
                  case Mn.jsxText:
                    r.push(this.parseExprAtom())
                    break
                  case Mn.braceL: {
                    const e = this.startNode()
                    this.next(),
                      this.match(Mn.ellipsis)
                        ? r.push(this.jsxParseSpreadChild(e))
                        : r.push(this.jsxParseExpressionContainer(e))
                    break
                  }
                  default:
                    throw this.unexpected()
                }
              ou(i) && !ou(a)
                ? this.raise(a.start, nu.MissingClosingTagFragment)
                : !ou(i) && ou(a)
                ? this.raise(a.start, nu.MissingClosingTagElement, uu(i.name))
                : ou(i) ||
                  ou(a) ||
                  (uu(a.name) !== uu(i.name) &&
                    this.raise(
                      a.start,
                      nu.MissingClosingTagElement,
                      uu(i.name)
                    ))
            }
            if (
              (ou(i)
                ? ((s.openingFragment = i), (s.closingFragment = a))
                : ((s.openingElement = i), (s.closingElement = a)),
              (s.children = r),
              this.isRelational('<'))
            )
              throw this.raise(
                this.state.start,
                nu.UnwrappedAdjacentJSXElements
              )
            return ou(i)
              ? this.finishNode(s, 'JSXFragment')
              : this.finishNode(s, 'JSXElement')
          }
          jsxParseElement() {
            const e = this.state.start,
              t = this.state.startLoc
            return this.next(), this.jsxParseElementAt(e, t)
          }
          parseExprAtom(e) {
            return this.match(Mn.jsxText)
              ? this.parseLiteral(this.state.value, 'JSXText')
              : this.match(Mn.jsxTagStart)
              ? this.jsxParseElement()
              : this.isRelational('<') &&
                33 !== this.input.charCodeAt(this.state.pos)
              ? (this.finishToken(Mn.jsxTagStart), this.jsxParseElement())
              : super.parseExprAtom(e)
          }
          createLookaheadState(e) {
            const t = super.createLookaheadState(e)
            return (t.inPropertyName = e.inPropertyName), t
          }
          getTokenFromCode(e) {
            if (this.state.inPropertyName) return super.getTokenFromCode(e)
            const t = this.curContext()
            if (t === eo.j_expr) return this.jsxReadToken()
            if (t === eo.j_oTag || t === eo.j_cTag) {
              if (uo(e)) return this.jsxReadWord()
              if (62 === e)
                return ++this.state.pos, this.finishToken(Mn.jsxTagEnd)
              if ((34 === e || 39 === e) && t === eo.j_oTag)
                return this.jsxReadString(e)
            }
            return 60 === e &&
              this.state.exprAllowed &&
              33 !== this.input.charCodeAt(this.state.pos + 1)
              ? (++this.state.pos, this.finishToken(Mn.jsxTagStart))
              : super.getTokenFromCode(e)
          }
          updateContext(e) {
            super.updateContext(e)
            const { context: t, type: s } = this.state
            if (s === Mn.slash && e === Mn.jsxTagStart)
              t.splice(-2, 2, eo.j_cTag), (this.state.exprAllowed = !1)
            else if (s === Mn.jsxTagEnd) {
              const s = t.pop()
              ;(s === eo.j_oTag && e === Mn.slash) || s === eo.j_cTag
                ? (t.pop(),
                  (this.state.exprAllowed = t[t.length - 1] === eo.j_expr))
                : (this.state.exprAllowed = !0)
            } else
              !s.keyword || (e !== Mn.dot && e !== Mn.questionDot)
                ? (this.state.exprAllowed = s.beforeExpr)
                : (this.state.exprAllowed = !1)
          }
        },
      flow: (e) =>
        class extends e {
          constructor(...e) {
            super(...e), (this.flowPragma = void 0)
          }
          getScopeHandler() {
            return Io
          }
          shouldParseTypes() {
            return (
              this.getPluginOption('flow', 'all') || 'flow' === this.flowPragma
            )
          }
          shouldParseEnums() {
            return !!this.getPluginOption('flow', 'enums')
          }
          finishToken(e, t) {
            return (
              e !== Mn.string &&
                e !== Mn.semi &&
                e !== Mn.interpreterDirective &&
                void 0 === this.flowPragma &&
                (this.flowPragma = null),
              super.finishToken(e, t)
            )
          }
          addComment(e) {
            if (void 0 === this.flowPragma) {
              const t = su.exec(e.value)
              if (t)
                if ('flow' === t[1]) this.flowPragma = 'flow'
                else {
                  if ('noflow' !== t[1])
                    throw new Error('Unexpected flow pragma')
                  this.flowPragma = 'noflow'
                }
              else;
            }
            return super.addComment(e)
          }
          flowParseTypeInitialiser(e) {
            const t = this.state.inType
            ;(this.state.inType = !0), this.expect(e || Mn.colon)
            const s = this.flowParseType()
            return (this.state.inType = t), s
          }
          flowParsePredicate() {
            const e = this.startNode(),
              t = this.state.start
            return (
              this.next(),
              this.expectContextual('checks'),
              this.state.lastTokStart > t + 1 &&
                this.raise(t, Qo.UnexpectedSpaceBetweenModuloChecks),
              this.eat(Mn.parenL)
                ? ((e.value = this.parseExpression()),
                  this.expect(Mn.parenR),
                  this.finishNode(e, 'DeclaredPredicate'))
                : this.finishNode(e, 'InferredPredicate')
            )
          }
          flowParseTypeAndPredicateInitialiser() {
            const e = this.state.inType
            ;(this.state.inType = !0), this.expect(Mn.colon)
            let t = null,
              s = null
            return (
              this.match(Mn.modulo)
                ? ((this.state.inType = e), (s = this.flowParsePredicate()))
                : ((t = this.flowParseType()),
                  (this.state.inType = e),
                  this.match(Mn.modulo) && (s = this.flowParsePredicate())),
              [t, s]
            )
          }
          flowParseDeclareClass(e) {
            return (
              this.next(),
              this.flowParseInterfaceish(e, !0),
              this.finishNode(e, 'DeclareClass')
            )
          }
          flowParseDeclareFunction(e) {
            this.next()
            const t = (e.id = this.parseIdentifier()),
              s = this.startNode(),
              r = this.startNode()
            this.isRelational('<')
              ? (s.typeParameters = this.flowParseTypeParameterDeclaration())
              : (s.typeParameters = null),
              this.expect(Mn.parenL)
            const i = this.flowParseFunctionTypeParams()
            return (
              (s.params = i.params),
              (s.rest = i.rest),
              (s.this = i._this),
              this.expect(Mn.parenR),
              ([s.returnType, e.predicate] =
                this.flowParseTypeAndPredicateInitialiser()),
              (r.typeAnnotation = this.finishNode(s, 'FunctionTypeAnnotation')),
              (t.typeAnnotation = this.finishNode(r, 'TypeAnnotation')),
              this.resetEndLocation(t),
              this.semicolon(),
              this.scope.declareName(e.id.name, 2048, e.id.start),
              this.finishNode(e, 'DeclareFunction')
            )
          }
          flowParseDeclare(e, t) {
            if (this.match(Mn._class)) return this.flowParseDeclareClass(e)
            if (this.match(Mn._function))
              return this.flowParseDeclareFunction(e)
            if (this.match(Mn._var)) return this.flowParseDeclareVariable(e)
            if (this.eatContextual('module'))
              return this.match(Mn.dot)
                ? this.flowParseDeclareModuleExports(e)
                : (t &&
                    this.raise(this.state.lastTokStart, Qo.NestedDeclareModule),
                  this.flowParseDeclareModule(e))
            if (this.isContextual('type'))
              return this.flowParseDeclareTypeAlias(e)
            if (this.isContextual('opaque'))
              return this.flowParseDeclareOpaqueType(e)
            if (this.isContextual('interface'))
              return this.flowParseDeclareInterface(e)
            if (this.match(Mn._export))
              return this.flowParseDeclareExportDeclaration(e, t)
            throw this.unexpected()
          }
          flowParseDeclareVariable(e) {
            return (
              this.next(),
              (e.id = this.flowParseTypeAnnotatableIdentifier(!0)),
              this.scope.declareName(e.id.name, 5, e.id.start),
              this.semicolon(),
              this.finishNode(e, 'DeclareVariable')
            )
          }
          flowParseDeclareModule(e) {
            this.scope.enter(0),
              this.match(Mn.string)
                ? (e.id = this.parseExprAtom())
                : (e.id = this.parseIdentifier())
            const t = (e.body = this.startNode()),
              s = (t.body = [])
            for (this.expect(Mn.braceL); !this.match(Mn.braceR); ) {
              let e = this.startNode()
              this.match(Mn._import)
                ? (this.next(),
                  this.isContextual('type') ||
                    this.match(Mn._typeof) ||
                    this.raise(
                      this.state.lastTokStart,
                      Qo.InvalidNonTypeImportInDeclareModule
                    ),
                  this.parseImport(e))
                : (this.expectContextual(
                    'declare',
                    Qo.UnsupportedStatementInDeclareModule
                  ),
                  (e = this.flowParseDeclare(e, !0))),
                s.push(e)
            }
            this.scope.exit(),
              this.expect(Mn.braceR),
              this.finishNode(t, 'BlockStatement')
            let r = null,
              i = !1
            return (
              s.forEach((e) => {
                !(function (e) {
                  return (
                    'DeclareExportAllDeclaration' === e.type ||
                    ('DeclareExportDeclaration' === e.type &&
                      (!e.declaration ||
                        ('TypeAlias' !== e.declaration.type &&
                          'InterfaceDeclaration' !== e.declaration.type)))
                  )
                })(e)
                  ? 'DeclareModuleExports' === e.type &&
                    (i && this.raise(e.start, Qo.DuplicateDeclareModuleExports),
                    'ES' === r &&
                      this.raise(e.start, Qo.AmbiguousDeclareModuleKind),
                    (r = 'CommonJS'),
                    (i = !0))
                  : ('CommonJS' === r &&
                      this.raise(e.start, Qo.AmbiguousDeclareModuleKind),
                    (r = 'ES'))
              }),
              (e.kind = r || 'CommonJS'),
              this.finishNode(e, 'DeclareModule')
            )
          }
          flowParseDeclareExportDeclaration(e, t) {
            if ((this.expect(Mn._export), this.eat(Mn._default)))
              return (
                this.match(Mn._function) || this.match(Mn._class)
                  ? (e.declaration = this.flowParseDeclare(this.startNode()))
                  : ((e.declaration = this.flowParseType()), this.semicolon()),
                (e.default = !0),
                this.finishNode(e, 'DeclareExportDeclaration')
              )
            if (
              this.match(Mn._const) ||
              this.isLet() ||
              ((this.isContextual('type') || this.isContextual('interface')) &&
                !t)
            ) {
              const e = this.state.value,
                t = tu[e]
              throw this.raise(
                this.state.start,
                Qo.UnsupportedDeclareExportKind,
                e,
                t
              )
            }
            if (
              this.match(Mn._var) ||
              this.match(Mn._function) ||
              this.match(Mn._class) ||
              this.isContextual('opaque')
            )
              return (
                (e.declaration = this.flowParseDeclare(this.startNode())),
                (e.default = !1),
                this.finishNode(e, 'DeclareExportDeclaration')
              )
            if (
              this.match(Mn.star) ||
              this.match(Mn.braceL) ||
              this.isContextual('interface') ||
              this.isContextual('type') ||
              this.isContextual('opaque')
            )
              return (
                'ExportNamedDeclaration' === (e = this.parseExport(e)).type &&
                  ((e.type = 'ExportDeclaration'),
                  (e.default = !1),
                  delete e.exportKind),
                (e.type = 'Declare' + e.type),
                e
              )
            throw this.unexpected()
          }
          flowParseDeclareModuleExports(e) {
            return (
              this.next(),
              this.expectContextual('exports'),
              (e.typeAnnotation = this.flowParseTypeAnnotation()),
              this.semicolon(),
              this.finishNode(e, 'DeclareModuleExports')
            )
          }
          flowParseDeclareTypeAlias(e) {
            return (
              this.next(),
              this.flowParseTypeAlias(e),
              (e.type = 'DeclareTypeAlias'),
              e
            )
          }
          flowParseDeclareOpaqueType(e) {
            return (
              this.next(),
              this.flowParseOpaqueType(e, !0),
              (e.type = 'DeclareOpaqueType'),
              e
            )
          }
          flowParseDeclareInterface(e) {
            return (
              this.next(),
              this.flowParseInterfaceish(e),
              this.finishNode(e, 'DeclareInterface')
            )
          }
          flowParseInterfaceish(e, t = !1) {
            if (
              ((e.id = this.flowParseRestrictedIdentifier(!t, !0)),
              this.scope.declareName(e.id.name, t ? 17 : 9, e.id.start),
              this.isRelational('<')
                ? (e.typeParameters = this.flowParseTypeParameterDeclaration())
                : (e.typeParameters = null),
              (e.extends = []),
              (e.implements = []),
              (e.mixins = []),
              this.eat(Mn._extends))
            )
              do {
                e.extends.push(this.flowParseInterfaceExtends())
              } while (!t && this.eat(Mn.comma))
            if (this.isContextual('mixins')) {
              this.next()
              do {
                e.mixins.push(this.flowParseInterfaceExtends())
              } while (this.eat(Mn.comma))
            }
            if (this.isContextual('implements')) {
              this.next()
              do {
                e.implements.push(this.flowParseInterfaceExtends())
              } while (this.eat(Mn.comma))
            }
            e.body = this.flowParseObjectType({
              allowStatic: t,
              allowExact: !1,
              allowSpread: !1,
              allowProto: t,
              allowInexact: !1
            })
          }
          flowParseInterfaceExtends() {
            const e = this.startNode()
            return (
              (e.id = this.flowParseQualifiedTypeIdentifier()),
              this.isRelational('<')
                ? (e.typeParameters =
                    this.flowParseTypeParameterInstantiation())
                : (e.typeParameters = null),
              this.finishNode(e, 'InterfaceExtends')
            )
          }
          flowParseInterface(e) {
            return (
              this.flowParseInterfaceish(e),
              this.finishNode(e, 'InterfaceDeclaration')
            )
          }
          checkNotUnderscore(e) {
            '_' === e &&
              this.raise(this.state.start, Qo.UnexpectedReservedUnderscore)
          }
          checkReservedType(e, t, s) {
            Yo.has(e) &&
              this.raise(
                t,
                s ? Qo.AssignReservedType : Qo.UnexpectedReservedType,
                e
              )
          }
          flowParseRestrictedIdentifier(e, t) {
            return (
              this.checkReservedType(this.state.value, this.state.start, t),
              this.parseIdentifier(e)
            )
          }
          flowParseTypeAlias(e) {
            return (
              (e.id = this.flowParseRestrictedIdentifier(!1, !0)),
              this.scope.declareName(e.id.name, 9, e.id.start),
              this.isRelational('<')
                ? (e.typeParameters = this.flowParseTypeParameterDeclaration())
                : (e.typeParameters = null),
              (e.right = this.flowParseTypeInitialiser(Mn.eq)),
              this.semicolon(),
              this.finishNode(e, 'TypeAlias')
            )
          }
          flowParseOpaqueType(e, t) {
            return (
              this.expectContextual('type'),
              (e.id = this.flowParseRestrictedIdentifier(!0, !0)),
              this.scope.declareName(e.id.name, 9, e.id.start),
              this.isRelational('<')
                ? (e.typeParameters = this.flowParseTypeParameterDeclaration())
                : (e.typeParameters = null),
              (e.supertype = null),
              this.match(Mn.colon) &&
                (e.supertype = this.flowParseTypeInitialiser(Mn.colon)),
              (e.impltype = null),
              t || (e.impltype = this.flowParseTypeInitialiser(Mn.eq)),
              this.semicolon(),
              this.finishNode(e, 'OpaqueType')
            )
          }
          flowParseTypeParameter(e = !1) {
            const t = this.state.start,
              s = this.startNode(),
              r = this.flowParseVariance(),
              i = this.flowParseTypeAnnotatableIdentifier()
            return (
              (s.name = i.name),
              (s.variance = r),
              (s.bound = i.typeAnnotation),
              this.match(Mn.eq)
                ? (this.eat(Mn.eq), (s.default = this.flowParseType()))
                : e && this.raise(t, Qo.MissingTypeParamDefault),
              this.finishNode(s, 'TypeParameter')
            )
          }
          flowParseTypeParameterDeclaration() {
            const e = this.state.inType,
              t = this.startNode()
            ;(t.params = []),
              (this.state.inType = !0),
              this.isRelational('<') || this.match(Mn.jsxTagStart)
                ? this.next()
                : this.unexpected()
            let s = !1
            do {
              const e = this.flowParseTypeParameter(s)
              t.params.push(e),
                e.default && (s = !0),
                this.isRelational('>') || this.expect(Mn.comma)
            } while (!this.isRelational('>'))
            return (
              this.expectRelational('>'),
              (this.state.inType = e),
              this.finishNode(t, 'TypeParameterDeclaration')
            )
          }
          flowParseTypeParameterInstantiation() {
            const e = this.startNode(),
              t = this.state.inType
            ;(e.params = []),
              (this.state.inType = !0),
              this.expectRelational('<')
            const s = this.state.noAnonFunctionType
            for (this.state.noAnonFunctionType = !1; !this.isRelational('>'); )
              e.params.push(this.flowParseType()),
                this.isRelational('>') || this.expect(Mn.comma)
            return (
              (this.state.noAnonFunctionType = s),
              this.expectRelational('>'),
              (this.state.inType = t),
              this.finishNode(e, 'TypeParameterInstantiation')
            )
          }
          flowParseTypeParameterInstantiationCallOrNew() {
            const e = this.startNode(),
              t = this.state.inType
            for (
              e.params = [], this.state.inType = !0, this.expectRelational('<');
              !this.isRelational('>');

            )
              e.params.push(this.flowParseTypeOrImplicitInstantiation()),
                this.isRelational('>') || this.expect(Mn.comma)
            return (
              this.expectRelational('>'),
              (this.state.inType = t),
              this.finishNode(e, 'TypeParameterInstantiation')
            )
          }
          flowParseInterfaceType() {
            const e = this.startNode()
            if (
              (this.expectContextual('interface'),
              (e.extends = []),
              this.eat(Mn._extends))
            )
              do {
                e.extends.push(this.flowParseInterfaceExtends())
              } while (this.eat(Mn.comma))
            return (
              (e.body = this.flowParseObjectType({
                allowStatic: !1,
                allowExact: !1,
                allowSpread: !1,
                allowProto: !1,
                allowInexact: !1
              })),
              this.finishNode(e, 'InterfaceTypeAnnotation')
            )
          }
          flowParseObjectPropertyKey() {
            return this.match(Mn.num) || this.match(Mn.string)
              ? this.parseExprAtom()
              : this.parseIdentifier(!0)
          }
          flowParseObjectTypeIndexer(e, t, s) {
            return (
              (e.static = t),
              this.lookahead().type === Mn.colon
                ? ((e.id = this.flowParseObjectPropertyKey()),
                  (e.key = this.flowParseTypeInitialiser()))
                : ((e.id = null), (e.key = this.flowParseType())),
              this.expect(Mn.bracketR),
              (e.value = this.flowParseTypeInitialiser()),
              (e.variance = s),
              this.finishNode(e, 'ObjectTypeIndexer')
            )
          }
          flowParseObjectTypeInternalSlot(e, t) {
            return (
              (e.static = t),
              (e.id = this.flowParseObjectPropertyKey()),
              this.expect(Mn.bracketR),
              this.expect(Mn.bracketR),
              this.isRelational('<') || this.match(Mn.parenL)
                ? ((e.method = !0),
                  (e.optional = !1),
                  (e.value = this.flowParseObjectTypeMethodish(
                    this.startNodeAt(e.start, e.loc.start)
                  )))
                : ((e.method = !1),
                  this.eat(Mn.question) && (e.optional = !0),
                  (e.value = this.flowParseTypeInitialiser())),
              this.finishNode(e, 'ObjectTypeInternalSlot')
            )
          }
          flowParseObjectTypeMethodish(e) {
            for (
              e.params = [],
                e.rest = null,
                e.typeParameters = null,
                e.this = null,
                this.isRelational('<') &&
                  (e.typeParameters = this.flowParseTypeParameterDeclaration()),
                this.expect(Mn.parenL),
                this.match(Mn._this) &&
                  ((e.this = this.flowParseFunctionTypeParam(!0)),
                  (e.this.name = null),
                  this.match(Mn.parenR) || this.expect(Mn.comma));
              !this.match(Mn.parenR) && !this.match(Mn.ellipsis);

            )
              e.params.push(this.flowParseFunctionTypeParam(!1)),
                this.match(Mn.parenR) || this.expect(Mn.comma)
            return (
              this.eat(Mn.ellipsis) &&
                (e.rest = this.flowParseFunctionTypeParam(!1)),
              this.expect(Mn.parenR),
              (e.returnType = this.flowParseTypeInitialiser()),
              this.finishNode(e, 'FunctionTypeAnnotation')
            )
          }
          flowParseObjectTypeCallProperty(e, t) {
            const s = this.startNode()
            return (
              (e.static = t),
              (e.value = this.flowParseObjectTypeMethodish(s)),
              this.finishNode(e, 'ObjectTypeCallProperty')
            )
          }
          flowParseObjectType({
            allowStatic: e,
            allowExact: t,
            allowSpread: s,
            allowProto: r,
            allowInexact: i
          }) {
            const a = this.state.inType
            this.state.inType = !0
            const n = this.startNode()
            let o, u
            ;(n.callProperties = []),
              (n.properties = []),
              (n.indexers = []),
              (n.internalSlots = [])
            let h = !1
            for (
              t && this.match(Mn.braceBarL)
                ? (this.expect(Mn.braceBarL), (o = Mn.braceBarR), (u = !0))
                : (this.expect(Mn.braceL), (o = Mn.braceR), (u = !1)),
                n.exact = u;
              !this.match(o);

            ) {
              let t = !1,
                a = null,
                o = null
              const c = this.startNode()
              if (r && this.isContextual('proto')) {
                const t = this.lookahead()
                t.type !== Mn.colon &&
                  t.type !== Mn.question &&
                  (this.next(), (a = this.state.start), (e = !1))
              }
              if (e && this.isContextual('static')) {
                const e = this.lookahead()
                e.type !== Mn.colon &&
                  e.type !== Mn.question &&
                  (this.next(), (t = !0))
              }
              const p = this.flowParseVariance()
              if (this.eat(Mn.bracketL))
                null != a && this.unexpected(a),
                  this.eat(Mn.bracketL)
                    ? (p && this.unexpected(p.start),
                      n.internalSlots.push(
                        this.flowParseObjectTypeInternalSlot(c, t)
                      ))
                    : n.indexers.push(this.flowParseObjectTypeIndexer(c, t, p))
              else if (this.match(Mn.parenL) || this.isRelational('<'))
                null != a && this.unexpected(a),
                  p && this.unexpected(p.start),
                  n.callProperties.push(
                    this.flowParseObjectTypeCallProperty(c, t)
                  )
              else {
                let e = 'init'
                if (this.isContextual('get') || this.isContextual('set')) {
                  const t = this.lookahead()
                  ;(t.type !== Mn.name &&
                    t.type !== Mn.string &&
                    t.type !== Mn.num) ||
                    ((e = this.state.value), this.next())
                }
                const r = this.flowParseObjectTypeProperty(
                  c,
                  t,
                  a,
                  p,
                  e,
                  s,
                  null != i ? i : !u
                )
                null === r
                  ? ((h = !0), (o = this.state.lastTokStart))
                  : n.properties.push(r)
              }
              this.flowObjectTypeSemicolon(),
                !o ||
                  this.match(Mn.braceR) ||
                  this.match(Mn.braceBarR) ||
                  this.raise(o, Qo.UnexpectedExplicitInexactInObject)
            }
            this.expect(o), s && (n.inexact = h)
            const c = this.finishNode(n, 'ObjectTypeAnnotation')
            return (this.state.inType = a), c
          }
          flowParseObjectTypeProperty(e, t, s, r, i, a, n) {
            if (this.eat(Mn.ellipsis)) {
              return this.match(Mn.comma) ||
                this.match(Mn.semi) ||
                this.match(Mn.braceR) ||
                this.match(Mn.braceBarR)
                ? (a
                    ? n ||
                      this.raise(this.state.lastTokStart, Qo.InexactInsideExact)
                    : this.raise(
                        this.state.lastTokStart,
                        Qo.InexactInsideNonObject
                      ),
                  r && this.raise(r.start, Qo.InexactVariance),
                  null)
                : (a ||
                    this.raise(
                      this.state.lastTokStart,
                      Qo.UnexpectedSpreadType
                    ),
                  null != s && this.unexpected(s),
                  r && this.raise(r.start, Qo.SpreadVariance),
                  (e.argument = this.flowParseType()),
                  this.finishNode(e, 'ObjectTypeSpreadProperty'))
            }
            {
              ;(e.key = this.flowParseObjectPropertyKey()),
                (e.static = t),
                (e.proto = null != s),
                (e.kind = i)
              let n = !1
              return (
                this.isRelational('<') || this.match(Mn.parenL)
                  ? ((e.method = !0),
                    null != s && this.unexpected(s),
                    r && this.unexpected(r.start),
                    (e.value = this.flowParseObjectTypeMethodish(
                      this.startNodeAt(e.start, e.loc.start)
                    )),
                    ('get' !== i && 'set' !== i) ||
                      this.flowCheckGetterSetterParams(e),
                    !a &&
                      'constructor' === e.key.name &&
                      e.value.this &&
                      this.raise(
                        e.value.this.start,
                        Qo.ThisParamBannedInConstructor
                      ))
                  : ('init' !== i && this.unexpected(),
                    (e.method = !1),
                    this.eat(Mn.question) && (n = !0),
                    (e.value = this.flowParseTypeInitialiser()),
                    (e.variance = r)),
                (e.optional = n),
                this.finishNode(e, 'ObjectTypeProperty')
              )
            }
          }
          flowCheckGetterSetterParams(e) {
            const t = 'get' === e.kind ? 0 : 1,
              s = e.start,
              r = e.value.params.length + (e.value.rest ? 1 : 0)
            e.value.this &&
              this.raise(
                e.value.this.start,
                'get' === e.kind
                  ? Qo.GetterMayNotHaveThisParam
                  : Qo.SetterMayNotHaveThisParam
              ),
              r !== t &&
                ('get' === e.kind
                  ? this.raise(s, Xn.BadGetterArity)
                  : this.raise(s, Xn.BadSetterArity)),
              'set' === e.kind &&
                e.value.rest &&
                this.raise(s, Xn.BadSetterRestParameter)
          }
          flowObjectTypeSemicolon() {
            this.eat(Mn.semi) ||
              this.eat(Mn.comma) ||
              this.match(Mn.braceR) ||
              this.match(Mn.braceBarR) ||
              this.unexpected()
          }
          flowParseQualifiedTypeIdentifier(e, t, s) {
            ;(e = e || this.state.start), (t = t || this.state.startLoc)
            let r = s || this.flowParseRestrictedIdentifier(!0)
            for (; this.eat(Mn.dot); ) {
              const s = this.startNodeAt(e, t)
              ;(s.qualification = r),
                (s.id = this.flowParseRestrictedIdentifier(!0)),
                (r = this.finishNode(s, 'QualifiedTypeIdentifier'))
            }
            return r
          }
          flowParseGenericType(e, t, s) {
            const r = this.startNodeAt(e, t)
            return (
              (r.typeParameters = null),
              (r.id = this.flowParseQualifiedTypeIdentifier(e, t, s)),
              this.isRelational('<') &&
                (r.typeParameters = this.flowParseTypeParameterInstantiation()),
              this.finishNode(r, 'GenericTypeAnnotation')
            )
          }
          flowParseTypeofType() {
            const e = this.startNode()
            return (
              this.expect(Mn._typeof),
              (e.argument = this.flowParsePrimaryType()),
              this.finishNode(e, 'TypeofTypeAnnotation')
            )
          }
          flowParseTupleType() {
            const e = this.startNode()
            for (
              e.types = [], this.expect(Mn.bracketL);
              this.state.pos < this.length &&
              !this.match(Mn.bracketR) &&
              (e.types.push(this.flowParseType()), !this.match(Mn.bracketR));

            )
              this.expect(Mn.comma)
            return (
              this.expect(Mn.bracketR),
              this.finishNode(e, 'TupleTypeAnnotation')
            )
          }
          flowParseFunctionTypeParam(e) {
            let t = null,
              s = !1,
              r = null
            const i = this.startNode(),
              a = this.lookahead(),
              n = this.state.type === Mn._this
            return (
              a.type === Mn.colon || a.type === Mn.question
                ? (n && !e && this.raise(i.start, Qo.ThisParamMustBeFirst),
                  (t = this.parseIdentifier(n)),
                  this.eat(Mn.question) &&
                    ((s = !0),
                    n && this.raise(i.start, Qo.ThisParamMayNotBeOptional)),
                  (r = this.flowParseTypeInitialiser()))
                : (r = this.flowParseType()),
              (i.name = t),
              (i.optional = s),
              (i.typeAnnotation = r),
              this.finishNode(i, 'FunctionTypeParam')
            )
          }
          reinterpretTypeAsFunctionTypeParam(e) {
            const t = this.startNodeAt(e.start, e.loc.start)
            return (
              (t.name = null),
              (t.optional = !1),
              (t.typeAnnotation = e),
              this.finishNode(t, 'FunctionTypeParam')
            )
          }
          flowParseFunctionTypeParams(e = []) {
            let t = null,
              s = null
            for (
              this.match(Mn._this) &&
              ((s = this.flowParseFunctionTypeParam(!0)),
              (s.name = null),
              this.match(Mn.parenR) || this.expect(Mn.comma));
              !this.match(Mn.parenR) && !this.match(Mn.ellipsis);

            )
              e.push(this.flowParseFunctionTypeParam(!1)),
                this.match(Mn.parenR) || this.expect(Mn.comma)
            return (
              this.eat(Mn.ellipsis) &&
                (t = this.flowParseFunctionTypeParam(!1)),
              { params: e, rest: t, _this: s }
            )
          }
          flowIdentToTypeAnnotation(e, t, s, r) {
            switch (r.name) {
              case 'any':
                return this.finishNode(s, 'AnyTypeAnnotation')
              case 'bool':
              case 'boolean':
                return this.finishNode(s, 'BooleanTypeAnnotation')
              case 'mixed':
                return this.finishNode(s, 'MixedTypeAnnotation')
              case 'empty':
                return this.finishNode(s, 'EmptyTypeAnnotation')
              case 'number':
                return this.finishNode(s, 'NumberTypeAnnotation')
              case 'string':
                return this.finishNode(s, 'StringTypeAnnotation')
              case 'symbol':
                return this.finishNode(s, 'SymbolTypeAnnotation')
              default:
                return (
                  this.checkNotUnderscore(r.name),
                  this.flowParseGenericType(e, t, r)
                )
            }
          }
          flowParsePrimaryType() {
            const e = this.state.start,
              t = this.state.startLoc,
              s = this.startNode()
            let r,
              i,
              a = !1
            const n = this.state.noAnonFunctionType
            switch (this.state.type) {
              case Mn.name:
                return this.isContextual('interface')
                  ? this.flowParseInterfaceType()
                  : this.flowIdentToTypeAnnotation(
                      e,
                      t,
                      s,
                      this.parseIdentifier()
                    )
              case Mn.braceL:
                return this.flowParseObjectType({
                  allowStatic: !1,
                  allowExact: !1,
                  allowSpread: !0,
                  allowProto: !1,
                  allowInexact: !0
                })
              case Mn.braceBarL:
                return this.flowParseObjectType({
                  allowStatic: !1,
                  allowExact: !0,
                  allowSpread: !0,
                  allowProto: !1,
                  allowInexact: !1
                })
              case Mn.bracketL:
                return (
                  (this.state.noAnonFunctionType = !1),
                  (i = this.flowParseTupleType()),
                  (this.state.noAnonFunctionType = n),
                  i
                )
              case Mn.relational:
                if ('<' === this.state.value)
                  return (
                    (s.typeParameters =
                      this.flowParseTypeParameterDeclaration()),
                    this.expect(Mn.parenL),
                    (r = this.flowParseFunctionTypeParams()),
                    (s.params = r.params),
                    (s.rest = r.rest),
                    (s.this = r._this),
                    this.expect(Mn.parenR),
                    this.expect(Mn.arrow),
                    (s.returnType = this.flowParseType()),
                    this.finishNode(s, 'FunctionTypeAnnotation')
                  )
                break
              case Mn.parenL:
                if (
                  (this.next(),
                  !this.match(Mn.parenR) && !this.match(Mn.ellipsis))
                )
                  if (this.match(Mn.name) || this.match(Mn._this)) {
                    const e = this.lookahead().type
                    a = e !== Mn.question && e !== Mn.colon
                  } else a = !0
                if (a) {
                  if (
                    ((this.state.noAnonFunctionType = !1),
                    (i = this.flowParseType()),
                    (this.state.noAnonFunctionType = n),
                    this.state.noAnonFunctionType ||
                      !(
                        this.match(Mn.comma) ||
                        (this.match(Mn.parenR) &&
                          this.lookahead().type === Mn.arrow)
                      ))
                  )
                    return this.expect(Mn.parenR), i
                  this.eat(Mn.comma)
                }
                return (
                  (r = i
                    ? this.flowParseFunctionTypeParams([
                        this.reinterpretTypeAsFunctionTypeParam(i)
                      ])
                    : this.flowParseFunctionTypeParams()),
                  (s.params = r.params),
                  (s.rest = r.rest),
                  (s.this = r._this),
                  this.expect(Mn.parenR),
                  this.expect(Mn.arrow),
                  (s.returnType = this.flowParseType()),
                  (s.typeParameters = null),
                  this.finishNode(s, 'FunctionTypeAnnotation')
                )
              case Mn.string:
                return this.parseLiteral(
                  this.state.value,
                  'StringLiteralTypeAnnotation'
                )
              case Mn._true:
              case Mn._false:
                return (
                  (s.value = this.match(Mn._true)),
                  this.next(),
                  this.finishNode(s, 'BooleanLiteralTypeAnnotation')
                )
              case Mn.plusMin:
                if ('-' === this.state.value) {
                  if ((this.next(), this.match(Mn.num)))
                    return this.parseLiteralAtNode(
                      -this.state.value,
                      'NumberLiteralTypeAnnotation',
                      s
                    )
                  if (this.match(Mn.bigint))
                    return this.parseLiteralAtNode(
                      -this.state.value,
                      'BigIntLiteralTypeAnnotation',
                      s
                    )
                  throw this.raise(
                    this.state.start,
                    Qo.UnexpectedSubtractionOperand
                  )
                }
                throw this.unexpected()
              case Mn.num:
                return this.parseLiteral(
                  this.state.value,
                  'NumberLiteralTypeAnnotation'
                )
              case Mn.bigint:
                return this.parseLiteral(
                  this.state.value,
                  'BigIntLiteralTypeAnnotation'
                )
              case Mn._void:
                return this.next(), this.finishNode(s, 'VoidTypeAnnotation')
              case Mn._null:
                return (
                  this.next(), this.finishNode(s, 'NullLiteralTypeAnnotation')
                )
              case Mn._this:
                return this.next(), this.finishNode(s, 'ThisTypeAnnotation')
              case Mn.star:
                return this.next(), this.finishNode(s, 'ExistsTypeAnnotation')
              default:
                if ('typeof' === this.state.type.keyword)
                  return this.flowParseTypeofType()
                if (this.state.type.keyword) {
                  const e = this.state.type.label
                  return this.next(), super.createIdentifier(s, e)
                }
            }
            throw this.unexpected()
          }
          flowParsePostfixType() {
            const e = this.state.start,
              t = this.state.startLoc
            let s = this.flowParsePrimaryType(),
              r = !1
            for (
              ;
              (this.match(Mn.bracketL) || this.match(Mn.questionDot)) &&
              !this.canInsertSemicolon();

            ) {
              const i = this.startNodeAt(e, t),
                a = this.eat(Mn.questionDot)
              ;(r = r || a),
                this.expect(Mn.bracketL),
                !a && this.match(Mn.bracketR)
                  ? ((i.elementType = s),
                    this.next(),
                    (s = this.finishNode(i, 'ArrayTypeAnnotation')))
                  : ((i.objectType = s),
                    (i.indexType = this.flowParseType()),
                    this.expect(Mn.bracketR),
                    r
                      ? ((i.optional = a),
                        (s = this.finishNode(i, 'OptionalIndexedAccessType')))
                      : (s = this.finishNode(i, 'IndexedAccessType')))
            }
            return s
          }
          flowParsePrefixType() {
            const e = this.startNode()
            return this.eat(Mn.question)
              ? ((e.typeAnnotation = this.flowParsePrefixType()),
                this.finishNode(e, 'NullableTypeAnnotation'))
              : this.flowParsePostfixType()
          }
          flowParseAnonFunctionWithoutParens() {
            const e = this.flowParsePrefixType()
            if (!this.state.noAnonFunctionType && this.eat(Mn.arrow)) {
              const t = this.startNodeAt(e.start, e.loc.start)
              return (
                (t.params = [this.reinterpretTypeAsFunctionTypeParam(e)]),
                (t.rest = null),
                (t.this = null),
                (t.returnType = this.flowParseType()),
                (t.typeParameters = null),
                this.finishNode(t, 'FunctionTypeAnnotation')
              )
            }
            return e
          }
          flowParseIntersectionType() {
            const e = this.startNode()
            this.eat(Mn.bitwiseAND)
            const t = this.flowParseAnonFunctionWithoutParens()
            for (e.types = [t]; this.eat(Mn.bitwiseAND); )
              e.types.push(this.flowParseAnonFunctionWithoutParens())
            return 1 === e.types.length
              ? t
              : this.finishNode(e, 'IntersectionTypeAnnotation')
          }
          flowParseUnionType() {
            const e = this.startNode()
            this.eat(Mn.bitwiseOR)
            const t = this.flowParseIntersectionType()
            for (e.types = [t]; this.eat(Mn.bitwiseOR); )
              e.types.push(this.flowParseIntersectionType())
            return 1 === e.types.length
              ? t
              : this.finishNode(e, 'UnionTypeAnnotation')
          }
          flowParseType() {
            const e = this.state.inType
            this.state.inType = !0
            const t = this.flowParseUnionType()
            return (this.state.inType = e), t
          }
          flowParseTypeOrImplicitInstantiation() {
            if (this.state.type === Mn.name && '_' === this.state.value) {
              const e = this.state.start,
                t = this.state.startLoc,
                s = this.parseIdentifier()
              return this.flowParseGenericType(e, t, s)
            }
            return this.flowParseType()
          }
          flowParseTypeAnnotation() {
            const e = this.startNode()
            return (
              (e.typeAnnotation = this.flowParseTypeInitialiser()),
              this.finishNode(e, 'TypeAnnotation')
            )
          }
          flowParseTypeAnnotatableIdentifier(e) {
            const t = e
              ? this.parseIdentifier()
              : this.flowParseRestrictedIdentifier()
            return (
              this.match(Mn.colon) &&
                ((t.typeAnnotation = this.flowParseTypeAnnotation()),
                this.resetEndLocation(t)),
              t
            )
          }
          typeCastToParameter(e) {
            return (
              (e.expression.typeAnnotation = e.typeAnnotation),
              this.resetEndLocation(
                e.expression,
                e.typeAnnotation.end,
                e.typeAnnotation.loc.end
              ),
              e.expression
            )
          }
          flowParseVariance() {
            let e = null
            return (
              this.match(Mn.plusMin) &&
                ((e = this.startNode()),
                '+' === this.state.value
                  ? (e.kind = 'plus')
                  : (e.kind = 'minus'),
                this.next(),
                this.finishNode(e, 'Variance')),
              e
            )
          }
          parseFunctionBody(e, t, s = !1) {
            return t
              ? this.forwardNoArrowParamsConversionAt(e, () =>
                  super.parseFunctionBody(e, !0, s)
                )
              : super.parseFunctionBody(e, !1, s)
          }
          parseFunctionBodyAndFinish(e, t, s = !1) {
            if (this.match(Mn.colon)) {
              const t = this.startNode()
              ;([t.typeAnnotation, e.predicate] =
                this.flowParseTypeAndPredicateInitialiser()),
                (e.returnType = t.typeAnnotation
                  ? this.finishNode(t, 'TypeAnnotation')
                  : null)
            }
            super.parseFunctionBodyAndFinish(e, t, s)
          }
          parseStatement(e, t) {
            if (
              this.state.strict &&
              this.match(Mn.name) &&
              'interface' === this.state.value
            ) {
              const e = this.lookahead()
              if (e.type === Mn.name || Co(e.value)) {
                const e = this.startNode()
                return this.next(), this.flowParseInterface(e)
              }
            } else if (this.shouldParseEnums() && this.isContextual('enum')) {
              const e = this.startNode()
              return this.next(), this.flowParseEnumDeclaration(e)
            }
            const s = super.parseStatement(e, t)
            return (
              void 0 !== this.flowPragma ||
                this.isValidDirective(s) ||
                (this.flowPragma = null),
              s
            )
          }
          parseExpressionStatement(e, t) {
            if ('Identifier' === t.type)
              if ('declare' === t.name) {
                if (
                  this.match(Mn._class) ||
                  this.match(Mn.name) ||
                  this.match(Mn._function) ||
                  this.match(Mn._var) ||
                  this.match(Mn._export)
                )
                  return this.flowParseDeclare(e)
              } else if (this.match(Mn.name)) {
                if ('interface' === t.name) return this.flowParseInterface(e)
                if ('type' === t.name) return this.flowParseTypeAlias(e)
                if ('opaque' === t.name) return this.flowParseOpaqueType(e, !1)
              }
            return super.parseExpressionStatement(e, t)
          }
          shouldParseExportDeclaration() {
            return (
              this.isContextual('type') ||
              this.isContextual('interface') ||
              this.isContextual('opaque') ||
              (this.shouldParseEnums() && this.isContextual('enum')) ||
              super.shouldParseExportDeclaration()
            )
          }
          isExportDefaultSpecifier() {
            return (
              (!this.match(Mn.name) ||
                !(
                  'type' === this.state.value ||
                  'interface' === this.state.value ||
                  'opaque' === this.state.value ||
                  (this.shouldParseEnums() && 'enum' === this.state.value)
                )) &&
              super.isExportDefaultSpecifier()
            )
          }
          parseExportDefaultExpression() {
            if (this.shouldParseEnums() && this.isContextual('enum')) {
              const e = this.startNode()
              return this.next(), this.flowParseEnumDeclaration(e)
            }
            return super.parseExportDefaultExpression()
          }
          parseConditional(e, t, s, r) {
            if (!this.match(Mn.question)) return e
            if (this.state.maybeInArrowParameters) {
              const t = this.lookaheadCharCode()
              if (44 === t || 61 === t || 58 === t || 41 === t)
                return this.setOptionalParametersError(r), e
            }
            this.expect(Mn.question)
            const i = this.state.clone(),
              a = this.state.noArrowAt,
              n = this.startNodeAt(t, s)
            let { consequent: o, failed: u } =
                this.tryParseConditionalConsequent(),
              [h, c] = this.getArrowLikeExpressions(o)
            if (u || c.length > 0) {
              const e = [...a]
              if (c.length > 0) {
                ;(this.state = i), (this.state.noArrowAt = e)
                for (let t = 0; t < c.length; t++) e.push(c[t].start)
                ;({ consequent: o, failed: u } =
                  this.tryParseConditionalConsequent()),
                  ([h, c] = this.getArrowLikeExpressions(o))
              }
              u &&
                h.length > 1 &&
                this.raise(i.start, Qo.AmbiguousConditionalArrow),
                u &&
                  1 === h.length &&
                  ((this.state = i),
                  e.push(h[0].start),
                  (this.state.noArrowAt = e),
                  ({ consequent: o, failed: u } =
                    this.tryParseConditionalConsequent()))
            }
            return (
              this.getArrowLikeExpressions(o, !0),
              (this.state.noArrowAt = a),
              this.expect(Mn.colon),
              (n.test = e),
              (n.consequent = o),
              (n.alternate = this.forwardNoArrowParamsConversionAt(n, () =>
                this.parseMaybeAssign(void 0, void 0)
              )),
              this.finishNode(n, 'ConditionalExpression')
            )
          }
          tryParseConditionalConsequent() {
            this.state.noArrowParamsConversionAt.push(this.state.start)
            const e = this.parseMaybeAssignAllowIn(),
              t = !this.match(Mn.colon)
            return (
              this.state.noArrowParamsConversionAt.pop(),
              { consequent: e, failed: t }
            )
          }
          getArrowLikeExpressions(e, t) {
            const s = [e],
              r = []
            for (; 0 !== s.length; ) {
              const e = s.pop()
              'ArrowFunctionExpression' === e.type
                ? (e.typeParameters || !e.returnType
                    ? this.finishArrowValidation(e)
                    : r.push(e),
                  s.push(e.body))
                : 'ConditionalExpression' === e.type &&
                  (s.push(e.consequent), s.push(e.alternate))
            }
            return t
              ? (r.forEach((e) => this.finishArrowValidation(e)), [r, []])
              : (function (e, t) {
                  const s = [],
                    r = []
                  for (let i = 0; i < e.length; i++)
                    (t(e[i], i, e) ? s : r).push(e[i])
                  return [s, r]
                })(r, (e) => e.params.every((e) => this.isAssignable(e, !0)))
          }
          finishArrowValidation(e) {
            var t
            this.toAssignableList(
              e.params,
              null == (t = e.extra) ? void 0 : t.trailingComma,
              !1
            ),
              this.scope.enter(6),
              super.checkParams(e, !1, !0),
              this.scope.exit()
          }
          forwardNoArrowParamsConversionAt(e, t) {
            let s
            return (
              -1 !== this.state.noArrowParamsConversionAt.indexOf(e.start)
                ? (this.state.noArrowParamsConversionAt.push(this.state.start),
                  (s = t()),
                  this.state.noArrowParamsConversionAt.pop())
                : (s = t()),
              s
            )
          }
          parseParenItem(e, t, s) {
            if (
              ((e = super.parseParenItem(e, t, s)),
              this.eat(Mn.question) &&
                ((e.optional = !0), this.resetEndLocation(e)),
              this.match(Mn.colon))
            ) {
              const r = this.startNodeAt(t, s)
              return (
                (r.expression = e),
                (r.typeAnnotation = this.flowParseTypeAnnotation()),
                this.finishNode(r, 'TypeCastExpression')
              )
            }
            return e
          }
          assertModuleNodeAllowed(e) {
            ;('ImportDeclaration' === e.type &&
              ('type' === e.importKind || 'typeof' === e.importKind)) ||
              ('ExportNamedDeclaration' === e.type &&
                'type' === e.exportKind) ||
              ('ExportAllDeclaration' === e.type && 'type' === e.exportKind) ||
              super.assertModuleNodeAllowed(e)
          }
          parseExport(e) {
            const t = super.parseExport(e)
            return (
              ('ExportNamedDeclaration' !== t.type &&
                'ExportAllDeclaration' !== t.type) ||
                (t.exportKind = t.exportKind || 'value'),
              t
            )
          }
          parseExportDeclaration(e) {
            if (this.isContextual('type')) {
              e.exportKind = 'type'
              const t = this.startNode()
              return (
                this.next(),
                this.match(Mn.braceL)
                  ? ((e.specifiers = this.parseExportSpecifiers()),
                    this.parseExportFrom(e),
                    null)
                  : this.flowParseTypeAlias(t)
              )
            }
            if (this.isContextual('opaque')) {
              e.exportKind = 'type'
              const t = this.startNode()
              return this.next(), this.flowParseOpaqueType(t, !1)
            }
            if (this.isContextual('interface')) {
              e.exportKind = 'type'
              const t = this.startNode()
              return this.next(), this.flowParseInterface(t)
            }
            if (this.shouldParseEnums() && this.isContextual('enum')) {
              e.exportKind = 'value'
              const t = this.startNode()
              return this.next(), this.flowParseEnumDeclaration(t)
            }
            return super.parseExportDeclaration(e)
          }
          eatExportStar(e) {
            return (
              !!super.eatExportStar(...arguments) ||
              (!(
                !this.isContextual('type') || this.lookahead().type !== Mn.star
              ) &&
                ((e.exportKind = 'type'), this.next(), this.next(), !0))
            )
          }
          maybeParseExportNamespaceSpecifier(e) {
            const t = this.state.start,
              s = super.maybeParseExportNamespaceSpecifier(e)
            return s && 'type' === e.exportKind && this.unexpected(t), s
          }
          parseClassId(e, t, s) {
            super.parseClassId(e, t, s),
              this.isRelational('<') &&
                (e.typeParameters = this.flowParseTypeParameterDeclaration())
          }
          parseClassMember(e, t, s) {
            const r = this.state.start
            if (this.isContextual('declare')) {
              if (this.parseClassMemberFromModifier(e, t)) return
              t.declare = !0
            }
            super.parseClassMember(e, t, s),
              t.declare &&
                ('ClassProperty' !== t.type &&
                'ClassPrivateProperty' !== t.type &&
                'PropertyDefinition' !== t.type
                  ? this.raise(r, Qo.DeclareClassElement)
                  : t.value &&
                    this.raise(t.value.start, Qo.DeclareClassFieldInitializer))
          }
          isIterator(e) {
            return 'iterator' === e || 'asyncIterator' === e
          }
          readIterator() {
            const e = super.readWord1(),
              t = '@@' + e
            ;(this.isIterator(e) && this.state.inType) ||
              this.raise(this.state.pos, Xn.InvalidIdentifier, t),
              this.finishToken(Mn.name, t)
          }
          getTokenFromCode(e) {
            const t = this.input.charCodeAt(this.state.pos + 1)
            return 123 === e && 124 === t
              ? this.finishOp(Mn.braceBarL, 2)
              : !this.state.inType || (62 !== e && 60 !== e)
              ? this.state.inType && 63 === e
                ? 46 === t
                  ? this.finishOp(Mn.questionDot, 2)
                  : this.finishOp(Mn.question, 1)
                : (function (e, t) {
                    return 64 === e && 64 === t
                  })(e, t)
                ? ((this.state.pos += 2), this.readIterator())
                : super.getTokenFromCode(e)
              : this.finishOp(Mn.relational, 1)
          }
          isAssignable(e, t) {
            return 'TypeCastExpression' === e.type
              ? this.isAssignable(e.expression, t)
              : super.isAssignable(e, t)
          }
          toAssignable(e, t = !1) {
            return 'TypeCastExpression' === e.type
              ? super.toAssignable(this.typeCastToParameter(e), t)
              : super.toAssignable(e, t)
          }
          toAssignableList(e, t, s) {
            for (let t = 0; t < e.length; t++) {
              const s = e[t]
              'TypeCastExpression' === (null == s ? void 0 : s.type) &&
                (e[t] = this.typeCastToParameter(s))
            }
            return super.toAssignableList(e, t, s)
          }
          toReferencedList(e, t) {
            for (let r = 0; r < e.length; r++) {
              var s
              const i = e[r]
              !i ||
                'TypeCastExpression' !== i.type ||
                (null != (s = i.extra) && s.parenthesized) ||
                (!(e.length > 1) && t) ||
                this.raise(i.typeAnnotation.start, Qo.TypeCastInPattern)
            }
            return e
          }
          parseArrayLike(e, t, s, r) {
            const i = super.parseArrayLike(e, t, s, r)
            return (
              t &&
                !this.state.maybeInArrowParameters &&
                this.toReferencedList(i.elements),
              i
            )
          }
          checkLVal(e, ...t) {
            if ('TypeCastExpression' !== e.type) return super.checkLVal(e, ...t)
          }
          parseClassProperty(e) {
            return (
              this.match(Mn.colon) &&
                (e.typeAnnotation = this.flowParseTypeAnnotation()),
              super.parseClassProperty(e)
            )
          }
          parseClassPrivateProperty(e) {
            return (
              this.match(Mn.colon) &&
                (e.typeAnnotation = this.flowParseTypeAnnotation()),
              super.parseClassPrivateProperty(e)
            )
          }
          isClassMethod() {
            return this.isRelational('<') || super.isClassMethod()
          }
          isClassProperty() {
            return this.match(Mn.colon) || super.isClassProperty()
          }
          isNonstaticConstructor(e) {
            return !this.match(Mn.colon) && super.isNonstaticConstructor(e)
          }
          pushClassMethod(e, t, s, r, i, a) {
            if (
              (t.variance && this.unexpected(t.variance.start),
              delete t.variance,
              this.isRelational('<') &&
                (t.typeParameters = this.flowParseTypeParameterDeclaration()),
              super.pushClassMethod(e, t, s, r, i, a),
              t.params && i)
            ) {
              const e = t.params
              e.length > 0 &&
                this.isThisParam(e[0]) &&
                this.raise(t.start, Qo.ThisParamBannedInConstructor)
            } else if ('MethodDefinition' === t.type && i && t.value.params) {
              const e = t.value.params
              e.length > 0 &&
                this.isThisParam(e[0]) &&
                this.raise(t.start, Qo.ThisParamBannedInConstructor)
            }
          }
          pushClassPrivateMethod(e, t, s, r) {
            t.variance && this.unexpected(t.variance.start),
              delete t.variance,
              this.isRelational('<') &&
                (t.typeParameters = this.flowParseTypeParameterDeclaration()),
              super.pushClassPrivateMethod(e, t, s, r)
          }
          parseClassSuper(e) {
            if (
              (super.parseClassSuper(e),
              e.superClass &&
                this.isRelational('<') &&
                (e.superTypeParameters =
                  this.flowParseTypeParameterInstantiation()),
              this.isContextual('implements'))
            ) {
              this.next()
              const t = (e.implements = [])
              do {
                const e = this.startNode()
                ;(e.id = this.flowParseRestrictedIdentifier(!0)),
                  this.isRelational('<')
                    ? (e.typeParameters =
                        this.flowParseTypeParameterInstantiation())
                    : (e.typeParameters = null),
                  t.push(this.finishNode(e, 'ClassImplements'))
              } while (this.eat(Mn.comma))
            }
          }
          checkGetterSetterParams(e) {
            super.checkGetterSetterParams(e)
            const t = this.getObjectOrClassMethodParams(e)
            if (t.length > 0) {
              const s = t[0]
              this.isThisParam(s) && 'get' === e.kind
                ? this.raise(s.start, Qo.GetterMayNotHaveThisParam)
                : this.isThisParam(s) &&
                  this.raise(s.start, Qo.SetterMayNotHaveThisParam)
            }
          }
          parsePropertyName(e, t) {
            const s = this.flowParseVariance(),
              r = super.parsePropertyName(e, t)
            return (e.variance = s), r
          }
          parseObjPropValue(e, t, s, r, i, a, n, o) {
            let u
            e.variance && this.unexpected(e.variance.start),
              delete e.variance,
              this.isRelational('<') &&
                !n &&
                ((u = this.flowParseTypeParameterDeclaration()),
                this.match(Mn.parenL) || this.unexpected()),
              super.parseObjPropValue(e, t, s, r, i, a, n, o),
              u && ((e.value || e).typeParameters = u)
          }
          parseAssignableListItemTypes(e) {
            return (
              this.eat(Mn.question) &&
                ('Identifier' !== e.type &&
                  this.raise(e.start, Qo.PatternIsOptional),
                this.isThisParam(e) &&
                  this.raise(e.start, Qo.ThisParamMayNotBeOptional),
                (e.optional = !0)),
              this.match(Mn.colon)
                ? (e.typeAnnotation = this.flowParseTypeAnnotation())
                : this.isThisParam(e) &&
                  this.raise(e.start, Qo.ThisParamAnnotationRequired),
              this.match(Mn.eq) &&
                this.isThisParam(e) &&
                this.raise(e.start, Qo.ThisParamNoDefault),
              this.resetEndLocation(e),
              e
            )
          }
          parseMaybeDefault(e, t, s) {
            const r = super.parseMaybeDefault(e, t, s)
            return (
              'AssignmentPattern' === r.type &&
                r.typeAnnotation &&
                r.right.start < r.typeAnnotation.start &&
                this.raise(r.typeAnnotation.start, Qo.TypeBeforeInitializer),
              r
            )
          }
          shouldParseDefaultImport(e) {
            return Zo(e) ? eu(this.state) : super.shouldParseDefaultImport(e)
          }
          parseImportSpecifierLocal(e, t, s, r) {
            ;(t.local = Zo(e)
              ? this.flowParseRestrictedIdentifier(!0, !0)
              : this.parseIdentifier()),
              this.checkLVal(t.local, r, 9),
              e.specifiers.push(this.finishNode(t, s))
          }
          maybeParseDefaultImportSpecifier(e) {
            e.importKind = 'value'
            let t = null
            if (
              (this.match(Mn._typeof)
                ? (t = 'typeof')
                : this.isContextual('type') && (t = 'type'),
              t)
            ) {
              const s = this.lookahead()
              'type' === t && s.type === Mn.star && this.unexpected(s.start),
                (eu(s) || s.type === Mn.braceL || s.type === Mn.star) &&
                  (this.next(), (e.importKind = t))
            }
            return super.maybeParseDefaultImportSpecifier(e)
          }
          parseImportSpecifier(e) {
            const t = this.startNode(),
              s = this.match(Mn.string),
              r = this.parseModuleExportName()
            let i = null
            'Identifier' === r.type &&
              ('type' === r.name
                ? (i = 'type')
                : 'typeof' === r.name && (i = 'typeof'))
            let a = !1
            if (this.isContextual('as') && !this.isLookaheadContextual('as')) {
              const e = this.parseIdentifier(!0)
              null === i || this.match(Mn.name) || this.state.type.keyword
                ? ((t.imported = r),
                  (t.importKind = null),
                  (t.local = this.parseIdentifier()))
                : ((t.imported = e), (t.importKind = i), (t.local = Xo(e)))
            } else {
              if (
                null !== i &&
                (this.match(Mn.name) || this.state.type.keyword)
              )
                (t.imported = this.parseIdentifier(!0)), (t.importKind = i)
              else {
                if (s)
                  throw this.raise(t.start, Xn.ImportBindingIsString, r.value)
                ;(t.imported = r), (t.importKind = null)
              }
              this.eatContextual('as')
                ? (t.local = this.parseIdentifier())
                : ((a = !0), (t.local = Xo(t.imported)))
            }
            const n = Zo(e),
              o = Zo(t)
            n &&
              o &&
              this.raise(t.start, Qo.ImportTypeShorthandOnlyInPureImport),
              (n || o) &&
                this.checkReservedType(t.local.name, t.local.start, !0),
              !a ||
                n ||
                o ||
                this.checkReservedWord(t.local.name, t.start, !0, !0),
              this.checkLVal(t.local, 'import specifier', 9),
              e.specifiers.push(this.finishNode(t, 'ImportSpecifier'))
          }
          parseBindingAtom() {
            switch (this.state.type) {
              case Mn._this:
                return this.parseIdentifier(!0)
              default:
                return super.parseBindingAtom()
            }
          }
          parseFunctionParams(e, t) {
            const s = e.kind
            'get' !== s &&
              'set' !== s &&
              this.isRelational('<') &&
              (e.typeParameters = this.flowParseTypeParameterDeclaration()),
              super.parseFunctionParams(e, t)
          }
          parseVarId(e, t) {
            super.parseVarId(e, t),
              this.match(Mn.colon) &&
                ((e.id.typeAnnotation = this.flowParseTypeAnnotation()),
                this.resetEndLocation(e.id))
          }
          parseAsyncArrowFromCallExpression(e, t) {
            if (this.match(Mn.colon)) {
              const t = this.state.noAnonFunctionType
              ;(this.state.noAnonFunctionType = !0),
                (e.returnType = this.flowParseTypeAnnotation()),
                (this.state.noAnonFunctionType = t)
            }
            return super.parseAsyncArrowFromCallExpression(e, t)
          }
          shouldParseAsyncArrow() {
            return this.match(Mn.colon) || super.shouldParseAsyncArrow()
          }
          parseMaybeAssign(e, t) {
            var s
            let r,
              i = null
            if (
              this.hasPlugin('jsx') &&
              (this.match(Mn.jsxTagStart) || this.isRelational('<'))
            ) {
              if (
                ((i = this.state.clone()),
                (r = this.tryParse(() => super.parseMaybeAssign(e, t), i)),
                !r.error)
              )
                return r.node
              const { context: s } = this.state,
                a = s[s.length - 1]
              a === eo.j_oTag
                ? (s.length -= 2)
                : a === eo.j_expr && (s.length -= 1)
            }
            if ((null != (s = r) && s.error) || this.isRelational('<')) {
              var a, n
              let s
              i = i || this.state.clone()
              const o = this.tryParse((r) => {
                var i
                s = this.flowParseTypeParameterDeclaration()
                const a = this.forwardNoArrowParamsConversionAt(s, () => {
                  const r = super.parseMaybeAssign(e, t)
                  return this.resetStartLocationFromNode(r, s), r
                })
                null != (i = a.extra) && i.parenthesized && r()
                const n = this.maybeUnwrapTypeCastExpression(a)
                return (
                  'ArrowFunctionExpression' !== n.type && r(),
                  (n.typeParameters = s),
                  this.resetStartLocationFromNode(n, s),
                  a
                )
              }, i)
              let u = null
              if (
                o.node &&
                'ArrowFunctionExpression' ===
                  this.maybeUnwrapTypeCastExpression(o.node).type
              ) {
                if (!o.error && !o.aborted)
                  return (
                    o.node.async &&
                      this.raise(
                        s.start,
                        Qo.UnexpectedTypeParameterBeforeAsyncArrowFunction
                      ),
                    o.node
                  )
                u = o.node
              }
              if (null != (a = r) && a.node)
                return (this.state = r.failState), r.node
              if (u) return (this.state = o.failState), u
              if (null != (n = r) && n.thrown) throw r.error
              if (o.thrown) throw o.error
              throw this.raise(s.start, Qo.UnexpectedTokenAfterTypeParameter)
            }
            return super.parseMaybeAssign(e, t)
          }
          parseArrow(e) {
            if (this.match(Mn.colon)) {
              const t = this.tryParse(() => {
                const t = this.state.noAnonFunctionType
                this.state.noAnonFunctionType = !0
                const s = this.startNode()
                return (
                  ([s.typeAnnotation, e.predicate] =
                    this.flowParseTypeAndPredicateInitialiser()),
                  (this.state.noAnonFunctionType = t),
                  this.canInsertSemicolon() && this.unexpected(),
                  this.match(Mn.arrow) || this.unexpected(),
                  s
                )
              })
              if (t.thrown) return null
              t.error && (this.state = t.failState),
                (e.returnType = t.node.typeAnnotation
                  ? this.finishNode(t.node, 'TypeAnnotation')
                  : null)
            }
            return super.parseArrow(e)
          }
          shouldParseArrow(e) {
            return this.match(Mn.colon) || super.shouldParseArrow(e)
          }
          setArrowFunctionParameters(e, t) {
            ;-1 !== this.state.noArrowParamsConversionAt.indexOf(e.start)
              ? (e.params = t)
              : super.setArrowFunctionParameters(e, t)
          }
          checkParams(e, t, s) {
            if (
              !s ||
              -1 === this.state.noArrowParamsConversionAt.indexOf(e.start)
            ) {
              for (let t = 0; t < e.params.length; t++)
                this.isThisParam(e.params[t]) &&
                  t > 0 &&
                  this.raise(e.params[t].start, Qo.ThisParamMustBeFirst)
              return super.checkParams(...arguments)
            }
          }
          parseParenAndDistinguishExpression(e) {
            return super.parseParenAndDistinguishExpression(
              e && -1 === this.state.noArrowAt.indexOf(this.state.start)
            )
          }
          parseSubscripts(e, t, s, r) {
            if (
              'Identifier' === e.type &&
              'async' === e.name &&
              -1 !== this.state.noArrowAt.indexOf(t)
            ) {
              this.next()
              const r = this.startNodeAt(t, s)
              ;(r.callee = e),
                (r.arguments = this.parseCallExpressionArguments(
                  Mn.parenR,
                  !1
                )),
                (e = this.finishNode(r, 'CallExpression'))
            } else if (
              'Identifier' === e.type &&
              'async' === e.name &&
              this.isRelational('<')
            ) {
              const i = this.state.clone(),
                a = this.tryParse(
                  (e) => this.parseAsyncArrowWithTypeParameters(t, s) || e(),
                  i
                )
              if (!a.error && !a.aborted) return a.node
              const n = this.tryParse(
                () => super.parseSubscripts(e, t, s, r),
                i
              )
              if (n.node && !n.error) return n.node
              if (a.node) return (this.state = a.failState), a.node
              if (n.node) return (this.state = n.failState), n.node
              throw a.error || n.error
            }
            return super.parseSubscripts(e, t, s, r)
          }
          parseSubscript(e, t, s, r, i) {
            if (this.match(Mn.questionDot) && this.isLookaheadToken_lt()) {
              if (((i.optionalChainMember = !0), r)) return (i.stop = !0), e
              this.next()
              const a = this.startNodeAt(t, s)
              return (
                (a.callee = e),
                (a.typeArguments = this.flowParseTypeParameterInstantiation()),
                this.expect(Mn.parenL),
                (a.arguments = this.parseCallExpressionArguments(
                  Mn.parenR,
                  !1
                )),
                (a.optional = !0),
                this.finishCallExpression(a, !0)
              )
            }
            if (!r && this.shouldParseTypes() && this.isRelational('<')) {
              const r = this.startNodeAt(t, s)
              r.callee = e
              const a = this.tryParse(
                () => (
                  (r.typeArguments =
                    this.flowParseTypeParameterInstantiationCallOrNew()),
                  this.expect(Mn.parenL),
                  (r.arguments = this.parseCallExpressionArguments(
                    Mn.parenR,
                    !1
                  )),
                  i.optionalChainMember && (r.optional = !1),
                  this.finishCallExpression(r, i.optionalChainMember)
                )
              )
              if (a.node) return a.error && (this.state = a.failState), a.node
            }
            return super.parseSubscript(e, t, s, r, i)
          }
          parseNewArguments(e) {
            let t = null
            this.shouldParseTypes() &&
              this.isRelational('<') &&
              (t = this.tryParse(() =>
                this.flowParseTypeParameterInstantiationCallOrNew()
              ).node),
              (e.typeArguments = t),
              super.parseNewArguments(e)
          }
          parseAsyncArrowWithTypeParameters(e, t) {
            const s = this.startNodeAt(e, t)
            if ((this.parseFunctionParams(s), this.parseArrow(s)))
              return this.parseArrowExpression(s, void 0, !0)
          }
          readToken_mult_modulo(e) {
            const t = this.input.charCodeAt(this.state.pos + 1)
            if (42 === e && 47 === t && this.state.hasFlowComment)
              return (
                (this.state.hasFlowComment = !1),
                (this.state.pos += 2),
                void this.nextToken()
              )
            super.readToken_mult_modulo(e)
          }
          readToken_pipe_amp(e) {
            const t = this.input.charCodeAt(this.state.pos + 1)
            124 !== e || 125 !== t
              ? super.readToken_pipe_amp(e)
              : this.finishOp(Mn.braceBarR, 2)
          }
          parseTopLevel(e, t) {
            const s = super.parseTopLevel(e, t)
            return (
              this.state.hasFlowComment &&
                this.raise(this.state.pos, Qo.UnterminatedFlowComment),
              s
            )
          }
          skipBlockComment() {
            if (this.hasPlugin('flowComments') && this.skipFlowComment())
              return (
                this.state.hasFlowComment &&
                  this.unexpected(null, Qo.NestedFlowComment),
                this.hasFlowCommentCompletion(),
                (this.state.pos += this.skipFlowComment()),
                void (this.state.hasFlowComment = !0)
              )
            if (!this.state.hasFlowComment) return super.skipBlockComment()
            {
              const e = this.input.indexOf('*-/', (this.state.pos += 2))
              if (-1 === e)
                throw this.raise(this.state.pos - 2, Xn.UnterminatedComment)
              this.state.pos = e + 3
            }
          }
          skipFlowComment() {
            const { pos: e } = this.state
            let t = 2
            for (; [32, 9].includes(this.input.charCodeAt(e + t)); ) t++
            const s = this.input.charCodeAt(t + e),
              r = this.input.charCodeAt(t + e + 1)
            return 58 === s && 58 === r
              ? t + 2
              : 'flow-include' === this.input.slice(t + e, t + e + 12)
              ? t + 12
              : 58 === s && 58 !== r && t
          }
          hasFlowCommentCompletion() {
            if (-1 === this.input.indexOf('*/', this.state.pos))
              throw this.raise(this.state.pos, Xn.UnterminatedComment)
          }
          flowEnumErrorBooleanMemberNotInitialized(
            e,
            { enumName: t, memberName: s }
          ) {
            this.raise(e, Qo.EnumBooleanMemberNotInitialized, s, t)
          }
          flowEnumErrorInvalidMemberName(e, { enumName: t, memberName: s }) {
            const r = s[0].toUpperCase() + s.slice(1)
            this.raise(e, Qo.EnumInvalidMemberName, s, r, t)
          }
          flowEnumErrorDuplicateMemberName(e, { enumName: t, memberName: s }) {
            this.raise(e, Qo.EnumDuplicateMemberName, s, t)
          }
          flowEnumErrorInconsistentMemberValues(e, { enumName: t }) {
            this.raise(e, Qo.EnumInconsistentMemberValues, t)
          }
          flowEnumErrorInvalidExplicitType(
            e,
            { enumName: t, suppliedType: s }
          ) {
            return this.raise(
              e,
              null === s
                ? Qo.EnumInvalidExplicitTypeUnknownSupplied
                : Qo.EnumInvalidExplicitType,
              t,
              s
            )
          }
          flowEnumErrorInvalidMemberInitializer(
            e,
            { enumName: t, explicitType: s, memberName: r }
          ) {
            let i = null
            switch (s) {
              case 'boolean':
              case 'number':
              case 'string':
                i = Qo.EnumInvalidMemberInitializerPrimaryType
                break
              case 'symbol':
                i = Qo.EnumInvalidMemberInitializerSymbolType
                break
              default:
                i = Qo.EnumInvalidMemberInitializerUnknownType
            }
            return this.raise(e, i, t, r, s)
          }
          flowEnumErrorNumberMemberNotInitialized(
            e,
            { enumName: t, memberName: s }
          ) {
            this.raise(e, Qo.EnumNumberMemberNotInitialized, t, s)
          }
          flowEnumErrorStringMemberInconsistentlyInitailized(
            e,
            { enumName: t }
          ) {
            this.raise(e, Qo.EnumStringMemberInconsistentlyInitailized, t)
          }
          flowEnumMemberInit() {
            const e = this.state.start,
              t = () => this.match(Mn.comma) || this.match(Mn.braceR)
            switch (this.state.type) {
              case Mn.num: {
                const s = this.parseNumericLiteral(this.state.value)
                return t()
                  ? { type: 'number', pos: s.start, value: s }
                  : { type: 'invalid', pos: e }
              }
              case Mn.string: {
                const s = this.parseStringLiteral(this.state.value)
                return t()
                  ? { type: 'string', pos: s.start, value: s }
                  : { type: 'invalid', pos: e }
              }
              case Mn._true:
              case Mn._false: {
                const s = this.parseBooleanLiteral(this.match(Mn._true))
                return t()
                  ? { type: 'boolean', pos: s.start, value: s }
                  : { type: 'invalid', pos: e }
              }
              default:
                return { type: 'invalid', pos: e }
            }
          }
          flowEnumMemberRaw() {
            const e = this.state.start
            return {
              id: this.parseIdentifier(!0),
              init: this.eat(Mn.eq)
                ? this.flowEnumMemberInit()
                : { type: 'none', pos: e }
            }
          }
          flowEnumCheckExplicitTypeMismatch(e, t, s) {
            const { explicitType: r } = t
            null !== r &&
              r !== s &&
              this.flowEnumErrorInvalidMemberInitializer(e, t)
          }
          flowEnumMembers({ enumName: e, explicitType: t }) {
            const s = new Set(),
              r = {
                booleanMembers: [],
                numberMembers: [],
                stringMembers: [],
                defaultedMembers: []
              }
            let i = !1
            for (; !this.match(Mn.braceR); ) {
              if (this.eat(Mn.ellipsis)) {
                i = !0
                break
              }
              const a = this.startNode(),
                { id: n, init: o } = this.flowEnumMemberRaw(),
                u = n.name
              if ('' === u) continue
              ;/^[a-z]/.test(u) &&
                this.flowEnumErrorInvalidMemberName(n.start, {
                  enumName: e,
                  memberName: u
                }),
                s.has(u) &&
                  this.flowEnumErrorDuplicateMemberName(n.start, {
                    enumName: e,
                    memberName: u
                  }),
                s.add(u)
              const h = { enumName: e, explicitType: t, memberName: u }
              switch (((a.id = n), o.type)) {
                case 'boolean':
                  this.flowEnumCheckExplicitTypeMismatch(o.pos, h, 'boolean'),
                    (a.init = o.value),
                    r.booleanMembers.push(
                      this.finishNode(a, 'EnumBooleanMember')
                    )
                  break
                case 'number':
                  this.flowEnumCheckExplicitTypeMismatch(o.pos, h, 'number'),
                    (a.init = o.value),
                    r.numberMembers.push(this.finishNode(a, 'EnumNumberMember'))
                  break
                case 'string':
                  this.flowEnumCheckExplicitTypeMismatch(o.pos, h, 'string'),
                    (a.init = o.value),
                    r.stringMembers.push(this.finishNode(a, 'EnumStringMember'))
                  break
                case 'invalid':
                  throw this.flowEnumErrorInvalidMemberInitializer(o.pos, h)
                case 'none':
                  switch (t) {
                    case 'boolean':
                      this.flowEnumErrorBooleanMemberNotInitialized(o.pos, h)
                      break
                    case 'number':
                      this.flowEnumErrorNumberMemberNotInitialized(o.pos, h)
                      break
                    default:
                      r.defaultedMembers.push(
                        this.finishNode(a, 'EnumDefaultedMember')
                      )
                  }
              }
              this.match(Mn.braceR) || this.expect(Mn.comma)
            }
            return { members: r, hasUnknownMembers: i }
          }
          flowEnumStringMembers(e, t, { enumName: s }) {
            if (0 === e.length) return t
            if (0 === t.length) return e
            if (t.length > e.length) {
              for (const t of e)
                this.flowEnumErrorStringMemberInconsistentlyInitailized(
                  t.start,
                  { enumName: s }
                )
              return t
            }
            for (const e of t)
              this.flowEnumErrorStringMemberInconsistentlyInitailized(e.start, {
                enumName: s
              })
            return e
          }
          flowEnumParseExplicitType({ enumName: e }) {
            if (this.eatContextual('of')) {
              if (!this.match(Mn.name))
                throw this.flowEnumErrorInvalidExplicitType(this.state.start, {
                  enumName: e,
                  suppliedType: null
                })
              const { value: t } = this.state
              return (
                this.next(),
                'boolean' !== t &&
                  'number' !== t &&
                  'string' !== t &&
                  'symbol' !== t &&
                  this.flowEnumErrorInvalidExplicitType(this.state.start, {
                    enumName: e,
                    suppliedType: t
                  }),
                t
              )
            }
            return null
          }
          flowEnumBody(e, { enumName: t, nameLoc: s }) {
            const r = this.flowEnumParseExplicitType({ enumName: t })
            this.expect(Mn.braceL)
            const { members: i, hasUnknownMembers: a } = this.flowEnumMembers({
              enumName: t,
              explicitType: r
            })
            switch (((e.hasUnknownMembers = a), r)) {
              case 'boolean':
                return (
                  (e.explicitType = !0),
                  (e.members = i.booleanMembers),
                  this.expect(Mn.braceR),
                  this.finishNode(e, 'EnumBooleanBody')
                )
              case 'number':
                return (
                  (e.explicitType = !0),
                  (e.members = i.numberMembers),
                  this.expect(Mn.braceR),
                  this.finishNode(e, 'EnumNumberBody')
                )
              case 'string':
                return (
                  (e.explicitType = !0),
                  (e.members = this.flowEnumStringMembers(
                    i.stringMembers,
                    i.defaultedMembers,
                    { enumName: t }
                  )),
                  this.expect(Mn.braceR),
                  this.finishNode(e, 'EnumStringBody')
                )
              case 'symbol':
                return (
                  (e.members = i.defaultedMembers),
                  this.expect(Mn.braceR),
                  this.finishNode(e, 'EnumSymbolBody')
                )
              default: {
                const r = () => (
                  (e.members = []),
                  this.expect(Mn.braceR),
                  this.finishNode(e, 'EnumStringBody')
                )
                e.explicitType = !1
                const a = i.booleanMembers.length,
                  n = i.numberMembers.length,
                  o = i.stringMembers.length,
                  u = i.defaultedMembers.length
                if (a || n || o || u) {
                  if (a || n) {
                    if (!n && !o && a >= u) {
                      for (const e of i.defaultedMembers)
                        this.flowEnumErrorBooleanMemberNotInitialized(e.start, {
                          enumName: t,
                          memberName: e.id.name
                        })
                      return (
                        (e.members = i.booleanMembers),
                        this.expect(Mn.braceR),
                        this.finishNode(e, 'EnumBooleanBody')
                      )
                    }
                    if (!a && !o && n >= u) {
                      for (const e of i.defaultedMembers)
                        this.flowEnumErrorNumberMemberNotInitialized(e.start, {
                          enumName: t,
                          memberName: e.id.name
                        })
                      return (
                        (e.members = i.numberMembers),
                        this.expect(Mn.braceR),
                        this.finishNode(e, 'EnumNumberBody')
                      )
                    }
                    return (
                      this.flowEnumErrorInconsistentMemberValues(s, {
                        enumName: t
                      }),
                      r()
                    )
                  }
                  return (
                    (e.members = this.flowEnumStringMembers(
                      i.stringMembers,
                      i.defaultedMembers,
                      { enumName: t }
                    )),
                    this.expect(Mn.braceR),
                    this.finishNode(e, 'EnumStringBody')
                  )
                }
                return r()
              }
            }
          }
          flowParseEnumDeclaration(e) {
            const t = this.parseIdentifier()
            return (
              (e.id = t),
              (e.body = this.flowEnumBody(this.startNode(), {
                enumName: t.name,
                nameLoc: t.start
              })),
              this.finishNode(e, 'EnumDeclaration')
            )
          }
          isLookaheadToken_lt() {
            const e = this.nextTokenStart()
            if (60 === this.input.charCodeAt(e)) {
              const t = this.input.charCodeAt(e + 1)
              return 60 !== t && 61 !== t
            }
            return !1
          }
          maybeUnwrapTypeCastExpression(e) {
            return 'TypeCastExpression' === e.type ? e.expression : e
          }
        },
      typescript: (e) =>
        class extends e {
          getScopeHandler() {
            return cu
          }
          tsIsIdentifier() {
            return this.match(Mn.name)
          }
          tsTokenCanFollowModifier() {
            return (
              (this.match(Mn.bracketL) ||
                this.match(Mn.braceL) ||
                this.match(Mn.star) ||
                this.match(Mn.ellipsis) ||
                this.match(Mn.privateName) ||
                this.isLiteralPropertyName()) &&
              !this.hasPrecedingLineBreak()
            )
          }
          tsNextTokenCanFollowModifier() {
            return this.next(), this.tsTokenCanFollowModifier()
          }
          tsParseModifier(e, t) {
            if (!this.match(Mn.name)) return
            const s = this.state.value
            if (-1 !== e.indexOf(s)) {
              if (t && this.tsIsStartOfStaticBlocks()) return
              if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))
                return s
            }
          }
          tsParseModifiers(e, t, s, r, i) {
            const a = (t, s, r, i) => {
                s === r && e[i] && this.raise(t, du.InvalidModifiersOrder, r, i)
              },
              n = (t, s, r, i) => {
                ;((e[r] && s === i) || (e[i] && s === r)) &&
                  this.raise(t, du.IncompatibleModifiers, r, i)
              }
            for (;;) {
              const o = this.state.start,
                u = this.tsParseModifier(t.concat(null != s ? s : []), i)
              if (!u) break
              Du(u)
                ? e.accessibility
                  ? this.raise(o, du.DuplicateAccessibilityModifier)
                  : (a(o, u, u, 'override'),
                    a(o, u, u, 'static'),
                    a(o, u, u, 'readonly'),
                    (e.accessibility = u))
                : (Object.hasOwnProperty.call(e, u)
                    ? this.raise(o, du.DuplicateModifier, u)
                    : (a(o, u, 'static', 'readonly'),
                      a(o, u, 'static', 'override'),
                      a(o, u, 'override', 'readonly'),
                      a(o, u, 'abstract', 'override'),
                      n(o, u, 'declare', 'override'),
                      n(o, u, 'static', 'abstract')),
                  (e[u] = !0)),
                null != s && s.includes(u) && this.raise(o, r, u)
            }
          }
          tsIsListTerminator(e) {
            switch (e) {
              case 'EnumMembers':
              case 'TypeMembers':
                return this.match(Mn.braceR)
              case 'HeritageClauseElement':
                return this.match(Mn.braceL)
              case 'TupleElementTypes':
                return this.match(Mn.bracketR)
              case 'TypeParametersOrArguments':
                return this.isRelational('>')
            }
            throw new Error('Unreachable')
          }
          tsParseList(e, t) {
            const s = []
            for (; !this.tsIsListTerminator(e); ) s.push(t())
            return s
          }
          tsParseDelimitedList(e, t) {
            return pu(this.tsParseDelimitedListWorker(e, t, !0))
          }
          tsParseDelimitedListWorker(e, t, s) {
            const r = []
            for (; !this.tsIsListTerminator(e); ) {
              const i = t()
              if (null == i) return
              if ((r.push(i), !this.eat(Mn.comma))) {
                if (this.tsIsListTerminator(e)) break
                return void (s && this.expect(Mn.comma))
              }
            }
            return r
          }
          tsParseBracketedList(e, t, s, r) {
            r || (s ? this.expect(Mn.bracketL) : this.expectRelational('<'))
            const i = this.tsParseDelimitedList(e, t)
            return s ? this.expect(Mn.bracketR) : this.expectRelational('>'), i
          }
          tsParseImportType() {
            const e = this.startNode()
            return (
              this.expect(Mn._import),
              this.expect(Mn.parenL),
              this.match(Mn.string) ||
                this.raise(this.state.start, du.UnsupportedImportTypeArgument),
              (e.argument = this.parseExprAtom()),
              this.expect(Mn.parenR),
              this.eat(Mn.dot) && (e.qualifier = this.tsParseEntityName(!0)),
              this.isRelational('<') &&
                (e.typeParameters = this.tsParseTypeArguments()),
              this.finishNode(e, 'TSImportType')
            )
          }
          tsParseEntityName(e) {
            let t = this.parseIdentifier()
            for (; this.eat(Mn.dot); ) {
              const s = this.startNodeAtNode(t)
              ;(s.left = t),
                (s.right = this.parseIdentifier(e)),
                (t = this.finishNode(s, 'TSQualifiedName'))
            }
            return t
          }
          tsParseTypeReference() {
            const e = this.startNode()
            return (
              (e.typeName = this.tsParseEntityName(!1)),
              !this.hasPrecedingLineBreak() &&
                this.isRelational('<') &&
                (e.typeParameters = this.tsParseTypeArguments()),
              this.finishNode(e, 'TSTypeReference')
            )
          }
          tsParseThisTypePredicate(e) {
            this.next()
            const t = this.startNodeAtNode(e)
            return (
              (t.parameterName = e),
              (t.typeAnnotation = this.tsParseTypeAnnotation(!1)),
              (t.asserts = !1),
              this.finishNode(t, 'TSTypePredicate')
            )
          }
          tsParseThisTypeNode() {
            const e = this.startNode()
            return this.next(), this.finishNode(e, 'TSThisType')
          }
          tsParseTypeQuery() {
            const e = this.startNode()
            return (
              this.expect(Mn._typeof),
              this.match(Mn._import)
                ? (e.exprName = this.tsParseImportType())
                : (e.exprName = this.tsParseEntityName(!0)),
              this.finishNode(e, 'TSTypeQuery')
            )
          }
          tsParseTypeParameter() {
            const e = this.startNode()
            return (
              (e.name = this.tsParseTypeParameterName()),
              (e.constraint = this.tsEatThenParseType(Mn._extends)),
              (e.default = this.tsEatThenParseType(Mn.eq)),
              this.finishNode(e, 'TSTypeParameter')
            )
          }
          tsTryParseTypeParameters() {
            if (this.isRelational('<')) return this.tsParseTypeParameters()
          }
          tsParseTypeParameters() {
            const e = this.startNode()
            return (
              this.isRelational('<') || this.match(Mn.jsxTagStart)
                ? this.next()
                : this.unexpected(),
              (e.params = this.tsParseBracketedList(
                'TypeParametersOrArguments',
                this.tsParseTypeParameter.bind(this),
                !1,
                !0
              )),
              0 === e.params.length &&
                this.raise(e.start, du.EmptyTypeParameters),
              this.finishNode(e, 'TSTypeParameterDeclaration')
            )
          }
          tsTryNextParseConstantContext() {
            return this.lookahead().type === Mn._const
              ? (this.next(), this.tsParseTypeReference())
              : null
          }
          tsFillSignature(e, t) {
            const s = e === Mn.arrow
            ;(t.typeParameters = this.tsTryParseTypeParameters()),
              this.expect(Mn.parenL),
              (t.parameters = this.tsParseBindingListForSignature()),
              (s || this.match(e)) &&
                (t.typeAnnotation =
                  this.tsParseTypeOrTypePredicateAnnotation(e))
          }
          tsParseBindingListForSignature() {
            return this.parseBindingList(Mn.parenR, 41).map(
              (e) => (
                'Identifier' !== e.type &&
                  'RestElement' !== e.type &&
                  'ObjectPattern' !== e.type &&
                  'ArrayPattern' !== e.type &&
                  this.raise(
                    e.start,
                    du.UnsupportedSignatureParameterKind,
                    e.type
                  ),
                e
              )
            )
          }
          tsParseTypeMemberSemicolon() {
            this.eat(Mn.comma) ||
              this.isLineTerminator() ||
              this.expect(Mn.semi)
          }
          tsParseSignatureMember(e, t) {
            return (
              this.tsFillSignature(Mn.colon, t),
              this.tsParseTypeMemberSemicolon(),
              this.finishNode(t, e)
            )
          }
          tsIsUnambiguouslyIndexSignature() {
            return this.next(), this.eat(Mn.name) && this.match(Mn.colon)
          }
          tsTryParseIndexSignature(e) {
            if (
              !this.match(Mn.bracketL) ||
              !this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))
            )
              return
            this.expect(Mn.bracketL)
            const t = this.parseIdentifier()
            ;(t.typeAnnotation = this.tsParseTypeAnnotation()),
              this.resetEndLocation(t),
              this.expect(Mn.bracketR),
              (e.parameters = [t])
            const s = this.tsTryParseTypeAnnotation()
            return (
              s && (e.typeAnnotation = s),
              this.tsParseTypeMemberSemicolon(),
              this.finishNode(e, 'TSIndexSignature')
            )
          }
          tsParsePropertyOrMethodSignature(e, t) {
            this.eat(Mn.question) && (e.optional = !0)
            const s = e
            if (this.match(Mn.parenL) || this.isRelational('<')) {
              t && this.raise(e.start, du.ReadonlyForMethodSignature)
              const r = s
              if (
                (r.kind &&
                  this.isRelational('<') &&
                  this.raise(
                    this.state.pos,
                    du.AccesorCannotHaveTypeParameters
                  ),
                this.tsFillSignature(Mn.colon, r),
                this.tsParseTypeMemberSemicolon(),
                'get' === r.kind)
              )
                r.parameters.length > 0 &&
                  (this.raise(this.state.pos, Xn.BadGetterArity),
                  this.isThisParam(r.parameters[0]) &&
                    this.raise(
                      this.state.pos,
                      du.AccesorCannotDeclareThisParameter
                    ))
              else if ('set' === r.kind) {
                if (1 !== r.parameters.length)
                  this.raise(this.state.pos, Xn.BadSetterArity)
                else {
                  const e = r.parameters[0]
                  this.isThisParam(e) &&
                    this.raise(
                      this.state.pos,
                      du.AccesorCannotDeclareThisParameter
                    ),
                    'Identifier' === e.type &&
                      e.optional &&
                      this.raise(
                        this.state.pos,
                        du.SetAccesorCannotHaveOptionalParameter
                      ),
                    'RestElement' === e.type &&
                      this.raise(
                        this.state.pos,
                        du.SetAccesorCannotHaveRestParameter
                      )
                }
                r.typeAnnotation &&
                  this.raise(
                    r.typeAnnotation.start,
                    du.SetAccesorCannotHaveReturnType
                  )
              } else r.kind = 'method'
              return this.finishNode(r, 'TSMethodSignature')
            }
            {
              const e = s
              t && (e.readonly = !0)
              const r = this.tsTryParseTypeAnnotation()
              return (
                r && (e.typeAnnotation = r),
                this.tsParseTypeMemberSemicolon(),
                this.finishNode(e, 'TSPropertySignature')
              )
            }
          }
          tsParseTypeMember() {
            const e = this.startNode()
            if (this.match(Mn.parenL) || this.isRelational('<'))
              return this.tsParseSignatureMember(
                'TSCallSignatureDeclaration',
                e
              )
            if (this.match(Mn._new)) {
              const t = this.startNode()
              return (
                this.next(),
                this.match(Mn.parenL) || this.isRelational('<')
                  ? this.tsParseSignatureMember(
                      'TSConstructSignatureDeclaration',
                      e
                    )
                  : ((e.key = this.createIdentifier(t, 'new')),
                    this.tsParsePropertyOrMethodSignature(e, !1))
              )
            }
            this.tsParseModifiers(
              e,
              ['readonly'],
              [
                'declare',
                'abstract',
                'private',
                'protected',
                'public',
                'static',
                'override'
              ],
              du.InvalidModifierOnTypeMember
            )
            const t = this.tsTryParseIndexSignature(e)
            return (
              t ||
              (this.parsePropertyName(e, !1),
              e.computed ||
                'Identifier' !== e.key.type ||
                ('get' !== e.key.name && 'set' !== e.key.name) ||
                !this.tsTokenCanFollowModifier() ||
                ((e.kind = e.key.name), this.parsePropertyName(e, !1)),
              this.tsParsePropertyOrMethodSignature(e, !!e.readonly))
            )
          }
          tsParseTypeLiteral() {
            const e = this.startNode()
            return (
              (e.members = this.tsParseObjectTypeMembers()),
              this.finishNode(e, 'TSTypeLiteral')
            )
          }
          tsParseObjectTypeMembers() {
            this.expect(Mn.braceL)
            const e = this.tsParseList(
              'TypeMembers',
              this.tsParseTypeMember.bind(this)
            )
            return this.expect(Mn.braceR), e
          }
          tsIsStartOfMappedType() {
            return (
              this.next(),
              this.eat(Mn.plusMin)
                ? this.isContextual('readonly')
                : (this.isContextual('readonly') && this.next(),
                  !!this.match(Mn.bracketL) &&
                    (this.next(),
                    !!this.tsIsIdentifier() &&
                      (this.next(), this.match(Mn._in))))
            )
          }
          tsParseMappedTypeParameter() {
            const e = this.startNode()
            return (
              (e.name = this.tsParseTypeParameterName()),
              (e.constraint = this.tsExpectThenParseType(Mn._in)),
              this.finishNode(e, 'TSTypeParameter')
            )
          }
          tsParseMappedType() {
            const e = this.startNode()
            return (
              this.expect(Mn.braceL),
              this.match(Mn.plusMin)
                ? ((e.readonly = this.state.value),
                  this.next(),
                  this.expectContextual('readonly'))
                : this.eatContextual('readonly') && (e.readonly = !0),
              this.expect(Mn.bracketL),
              (e.typeParameter = this.tsParseMappedTypeParameter()),
              (e.nameType = this.eatContextual('as')
                ? this.tsParseType()
                : null),
              this.expect(Mn.bracketR),
              this.match(Mn.plusMin)
                ? ((e.optional = this.state.value),
                  this.next(),
                  this.expect(Mn.question))
                : this.eat(Mn.question) && (e.optional = !0),
              (e.typeAnnotation = this.tsTryParseType()),
              this.semicolon(),
              this.expect(Mn.braceR),
              this.finishNode(e, 'TSMappedType')
            )
          }
          tsParseTupleType() {
            const e = this.startNode()
            e.elementTypes = this.tsParseBracketedList(
              'TupleElementTypes',
              this.tsParseTupleElementType.bind(this),
              !0,
              !1
            )
            let t = !1,
              s = null
            return (
              e.elementTypes.forEach((e) => {
                var r
                let { type: i } = e
                !t ||
                  'TSRestType' === i ||
                  'TSOptionalType' === i ||
                  ('TSNamedTupleMember' === i && e.optional) ||
                  this.raise(e.start, du.OptionalTypeBeforeRequired),
                  (t =
                    t ||
                    ('TSNamedTupleMember' === i && e.optional) ||
                    'TSOptionalType' === i),
                  'TSRestType' === i && (i = (e = e.typeAnnotation).type)
                const a = 'TSNamedTupleMember' === i
                ;(s = null != (r = s) ? r : a),
                  s !== a &&
                    this.raise(e.start, du.MixedLabeledAndUnlabeledElements)
              }),
              this.finishNode(e, 'TSTupleType')
            )
          }
          tsParseTupleElementType() {
            const { start: e, startLoc: t } = this.state,
              s = this.eat(Mn.ellipsis)
            let r = this.tsParseType()
            const i = this.eat(Mn.question)
            if (this.eat(Mn.colon)) {
              const e = this.startNodeAtNode(r)
              ;(e.optional = i),
                'TSTypeReference' !== r.type ||
                r.typeParameters ||
                'Identifier' !== r.typeName.type
                  ? (this.raise(r.start, du.InvalidTupleMemberLabel),
                    (e.label = r))
                  : (e.label = r.typeName),
                (e.elementType = this.tsParseType()),
                (r = this.finishNode(e, 'TSNamedTupleMember'))
            } else if (i) {
              const e = this.startNodeAtNode(r)
              ;(e.typeAnnotation = r),
                (r = this.finishNode(e, 'TSOptionalType'))
            }
            if (s) {
              const s = this.startNodeAt(e, t)
              ;(s.typeAnnotation = r), (r = this.finishNode(s, 'TSRestType'))
            }
            return r
          }
          tsParseParenthesizedType() {
            const e = this.startNode()
            return (
              this.expect(Mn.parenL),
              (e.typeAnnotation = this.tsParseType()),
              this.expect(Mn.parenR),
              this.finishNode(e, 'TSParenthesizedType')
            )
          }
          tsParseFunctionOrConstructorType(e, t) {
            const s = this.startNode()
            return (
              'TSConstructorType' === e &&
                ((s.abstract = !!t), t && this.next(), this.next()),
              this.tsFillSignature(Mn.arrow, s),
              this.finishNode(s, e)
            )
          }
          tsParseLiteralTypeNode() {
            const e = this.startNode()
            return (
              (e.literal = (() => {
                switch (this.state.type) {
                  case Mn.num:
                  case Mn.bigint:
                  case Mn.string:
                  case Mn._true:
                  case Mn._false:
                    return this.parseExprAtom()
                  default:
                    throw this.unexpected()
                }
              })()),
              this.finishNode(e, 'TSLiteralType')
            )
          }
          tsParseTemplateLiteralType() {
            const e = this.startNode()
            return (
              (e.literal = this.parseTemplate(!1)),
              this.finishNode(e, 'TSLiteralType')
            )
          }
          parseTemplateSubstitution() {
            return this.state.inType
              ? this.tsParseType()
              : super.parseTemplateSubstitution()
          }
          tsParseThisTypeOrThisTypePredicate() {
            const e = this.tsParseThisTypeNode()
            return this.isContextual('is') && !this.hasPrecedingLineBreak()
              ? this.tsParseThisTypePredicate(e)
              : e
          }
          tsParseNonArrayType() {
            switch (this.state.type) {
              case Mn.name:
              case Mn._void:
              case Mn._null: {
                const e = this.match(Mn._void)
                  ? 'TSVoidKeyword'
                  : this.match(Mn._null)
                  ? 'TSNullKeyword'
                  : (function (e) {
                      switch (e) {
                        case 'any':
                          return 'TSAnyKeyword'
                        case 'boolean':
                          return 'TSBooleanKeyword'
                        case 'bigint':
                          return 'TSBigIntKeyword'
                        case 'never':
                          return 'TSNeverKeyword'
                        case 'number':
                          return 'TSNumberKeyword'
                        case 'object':
                          return 'TSObjectKeyword'
                        case 'string':
                          return 'TSStringKeyword'
                        case 'symbol':
                          return 'TSSymbolKeyword'
                        case 'undefined':
                          return 'TSUndefinedKeyword'
                        case 'unknown':
                          return 'TSUnknownKeyword'
                        default:
                          return
                      }
                    })(this.state.value)
                if (void 0 !== e && 46 !== this.lookaheadCharCode()) {
                  const t = this.startNode()
                  return this.next(), this.finishNode(t, e)
                }
                return this.tsParseTypeReference()
              }
              case Mn.string:
              case Mn.num:
              case Mn.bigint:
              case Mn._true:
              case Mn._false:
                return this.tsParseLiteralTypeNode()
              case Mn.plusMin:
                if ('-' === this.state.value) {
                  const e = this.startNode(),
                    t = this.lookahead()
                  if (t.type !== Mn.num && t.type !== Mn.bigint)
                    throw this.unexpected()
                  return (
                    (e.literal = this.parseMaybeUnary()),
                    this.finishNode(e, 'TSLiteralType')
                  )
                }
                break
              case Mn._this:
                return this.tsParseThisTypeOrThisTypePredicate()
              case Mn._typeof:
                return this.tsParseTypeQuery()
              case Mn._import:
                return this.tsParseImportType()
              case Mn.braceL:
                return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this))
                  ? this.tsParseMappedType()
                  : this.tsParseTypeLiteral()
              case Mn.bracketL:
                return this.tsParseTupleType()
              case Mn.parenL:
                return this.tsParseParenthesizedType()
              case Mn.backQuote:
                return this.tsParseTemplateLiteralType()
            }
            throw this.unexpected()
          }
          tsParseArrayTypeOrHigher() {
            let e = this.tsParseNonArrayType()
            for (; !this.hasPrecedingLineBreak() && this.eat(Mn.bracketL); )
              if (this.match(Mn.bracketR)) {
                const t = this.startNodeAtNode(e)
                ;(t.elementType = e),
                  this.expect(Mn.bracketR),
                  (e = this.finishNode(t, 'TSArrayType'))
              } else {
                const t = this.startNodeAtNode(e)
                ;(t.objectType = e),
                  (t.indexType = this.tsParseType()),
                  this.expect(Mn.bracketR),
                  (e = this.finishNode(t, 'TSIndexedAccessType'))
              }
            return e
          }
          tsParseTypeOperator(e) {
            const t = this.startNode()
            return (
              this.expectContextual(e),
              (t.operator = e),
              (t.typeAnnotation = this.tsParseTypeOperatorOrHigher()),
              'readonly' === e && this.tsCheckTypeAnnotationForReadOnly(t),
              this.finishNode(t, 'TSTypeOperator')
            )
          }
          tsCheckTypeAnnotationForReadOnly(e) {
            switch (e.typeAnnotation.type) {
              case 'TSTupleType':
              case 'TSArrayType':
                return
              default:
                this.raise(e.start, du.UnexpectedReadonly)
            }
          }
          tsParseInferType() {
            const e = this.startNode()
            this.expectContextual('infer')
            const t = this.startNode()
            return (
              (t.name = this.tsParseTypeParameterName()),
              (e.typeParameter = this.finishNode(t, 'TSTypeParameter')),
              this.finishNode(e, 'TSInferType')
            )
          }
          tsParseTypeOperatorOrHigher() {
            const e = ['keyof', 'unique', 'readonly'].find((e) =>
              this.isContextual(e)
            )
            return e
              ? this.tsParseTypeOperator(e)
              : this.isContextual('infer')
              ? this.tsParseInferType()
              : this.tsParseArrayTypeOrHigher()
          }
          tsParseUnionOrIntersectionType(e, t, s) {
            const r = this.startNode(),
              i = this.eat(s),
              a = []
            do {
              a.push(t())
            } while (this.eat(s))
            return 1 !== a.length || i
              ? ((r.types = a), this.finishNode(r, e))
              : a[0]
          }
          tsParseIntersectionTypeOrHigher() {
            return this.tsParseUnionOrIntersectionType(
              'TSIntersectionType',
              this.tsParseTypeOperatorOrHigher.bind(this),
              Mn.bitwiseAND
            )
          }
          tsParseUnionTypeOrHigher() {
            return this.tsParseUnionOrIntersectionType(
              'TSUnionType',
              this.tsParseIntersectionTypeOrHigher.bind(this),
              Mn.bitwiseOR
            )
          }
          tsIsStartOfFunctionType() {
            return (
              !!this.isRelational('<') ||
              (this.match(Mn.parenL) &&
                this.tsLookAhead(
                  this.tsIsUnambiguouslyStartOfFunctionType.bind(this)
                ))
            )
          }
          tsSkipParameterStart() {
            if (this.match(Mn.name) || this.match(Mn._this))
              return this.next(), !0
            if (this.match(Mn.braceL)) {
              let e = 1
              for (this.next(); e > 0; )
                this.match(Mn.braceL) ? ++e : this.match(Mn.braceR) && --e,
                  this.next()
              return !0
            }
            if (this.match(Mn.bracketL)) {
              let e = 1
              for (this.next(); e > 0; )
                this.match(Mn.bracketL) ? ++e : this.match(Mn.bracketR) && --e,
                  this.next()
              return !0
            }
            return !1
          }
          tsIsUnambiguouslyStartOfFunctionType() {
            if ((this.next(), this.match(Mn.parenR) || this.match(Mn.ellipsis)))
              return !0
            if (this.tsSkipParameterStart()) {
              if (
                this.match(Mn.colon) ||
                this.match(Mn.comma) ||
                this.match(Mn.question) ||
                this.match(Mn.eq)
              )
                return !0
              if (this.match(Mn.parenR) && (this.next(), this.match(Mn.arrow)))
                return !0
            }
            return !1
          }
          tsParseTypeOrTypePredicateAnnotation(e) {
            return this.tsInType(() => {
              const t = this.startNode()
              this.expect(e)
              const s = this.startNode(),
                r = !!this.tsTryParse(
                  this.tsParseTypePredicateAsserts.bind(this)
                )
              if (r && this.match(Mn._this)) {
                let e = this.tsParseThisTypeOrThisTypePredicate()
                return (
                  'TSThisType' === e.type
                    ? ((s.parameterName = e),
                      (s.asserts = !0),
                      (s.typeAnnotation = null),
                      (e = this.finishNode(s, 'TSTypePredicate')))
                    : (this.resetStartLocationFromNode(e, s), (e.asserts = !0)),
                  (t.typeAnnotation = e),
                  this.finishNode(t, 'TSTypeAnnotation')
                )
              }
              const i =
                this.tsIsIdentifier() &&
                this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this))
              if (!i)
                return r
                  ? ((s.parameterName = this.parseIdentifier()),
                    (s.asserts = r),
                    (s.typeAnnotation = null),
                    (t.typeAnnotation = this.finishNode(s, 'TSTypePredicate')),
                    this.finishNode(t, 'TSTypeAnnotation'))
                  : this.tsParseTypeAnnotation(!1, t)
              const a = this.tsParseTypeAnnotation(!1)
              return (
                (s.parameterName = i),
                (s.typeAnnotation = a),
                (s.asserts = r),
                (t.typeAnnotation = this.finishNode(s, 'TSTypePredicate')),
                this.finishNode(t, 'TSTypeAnnotation')
              )
            })
          }
          tsTryParseTypeOrTypePredicateAnnotation() {
            return this.match(Mn.colon)
              ? this.tsParseTypeOrTypePredicateAnnotation(Mn.colon)
              : void 0
          }
          tsTryParseTypeAnnotation() {
            return this.match(Mn.colon) ? this.tsParseTypeAnnotation() : void 0
          }
          tsTryParseType() {
            return this.tsEatThenParseType(Mn.colon)
          }
          tsParseTypePredicatePrefix() {
            const e = this.parseIdentifier()
            if (this.isContextual('is') && !this.hasPrecedingLineBreak())
              return this.next(), e
          }
          tsParseTypePredicateAsserts() {
            if (
              !this.match(Mn.name) ||
              'asserts' !== this.state.value ||
              this.hasPrecedingLineBreak()
            )
              return !1
            const e = this.state.containsEsc
            return (
              this.next(),
              !(!this.match(Mn.name) && !this.match(Mn._this)) &&
                (e &&
                  this.raise(
                    this.state.lastTokStart,
                    Xn.InvalidEscapedReservedWord,
                    'asserts'
                  ),
                !0)
            )
          }
          tsParseTypeAnnotation(e = !0, t = this.startNode()) {
            return (
              this.tsInType(() => {
                e && this.expect(Mn.colon),
                  (t.typeAnnotation = this.tsParseType())
              }),
              this.finishNode(t, 'TSTypeAnnotation')
            )
          }
          tsParseType() {
            lu(this.state.inType)
            const e = this.tsParseNonConditionalType()
            if (this.hasPrecedingLineBreak() || !this.eat(Mn._extends)) return e
            const t = this.startNodeAtNode(e)
            return (
              (t.checkType = e),
              (t.extendsType = this.tsParseNonConditionalType()),
              this.expect(Mn.question),
              (t.trueType = this.tsParseType()),
              this.expect(Mn.colon),
              (t.falseType = this.tsParseType()),
              this.finishNode(t, 'TSConditionalType')
            )
          }
          isAbstractConstructorSignature() {
            return (
              this.isContextual('abstract') && this.lookahead().type === Mn._new
            )
          }
          tsParseNonConditionalType() {
            return this.tsIsStartOfFunctionType()
              ? this.tsParseFunctionOrConstructorType('TSFunctionType')
              : this.match(Mn._new)
              ? this.tsParseFunctionOrConstructorType('TSConstructorType')
              : this.isAbstractConstructorSignature()
              ? this.tsParseFunctionOrConstructorType('TSConstructorType', !0)
              : this.tsParseUnionTypeOrHigher()
          }
          tsParseTypeAssertion() {
            const e = this.startNode(),
              t = this.tsTryNextParseConstantContext()
            return (
              (e.typeAnnotation = t || this.tsNextThenParseType()),
              this.expectRelational('>'),
              (e.expression = this.parseMaybeUnary()),
              this.finishNode(e, 'TSTypeAssertion')
            )
          }
          tsParseHeritageClause(e) {
            const t = this.state.start,
              s = this.tsParseDelimitedList(
                'HeritageClauseElement',
                this.tsParseExpressionWithTypeArguments.bind(this)
              )
            return s.length || this.raise(t, du.EmptyHeritageClauseType, e), s
          }
          tsParseExpressionWithTypeArguments() {
            const e = this.startNode()
            return (
              (e.expression = this.tsParseEntityName(!1)),
              this.isRelational('<') &&
                (e.typeParameters = this.tsParseTypeArguments()),
              this.finishNode(e, 'TSExpressionWithTypeArguments')
            )
          }
          tsParseInterfaceDeclaration(e) {
            this.match(Mn.name)
              ? ((e.id = this.parseIdentifier()),
                this.checkLVal(e.id, 'typescript interface declaration', 130))
              : ((e.id = null),
                this.raise(this.state.start, du.MissingInterfaceName)),
              (e.typeParameters = this.tsTryParseTypeParameters()),
              this.eat(Mn._extends) &&
                (e.extends = this.tsParseHeritageClause('extends'))
            const t = this.startNode()
            return (
              (t.body = this.tsInType(
                this.tsParseObjectTypeMembers.bind(this)
              )),
              (e.body = this.finishNode(t, 'TSInterfaceBody')),
              this.finishNode(e, 'TSInterfaceDeclaration')
            )
          }
          tsParseTypeAliasDeclaration(e) {
            return (
              (e.id = this.parseIdentifier()),
              this.checkLVal(e.id, 'typescript type alias', 2),
              (e.typeParameters = this.tsTryParseTypeParameters()),
              (e.typeAnnotation = this.tsInType(() => {
                if (
                  (this.expect(Mn.eq),
                  this.isContextual('intrinsic') &&
                    this.lookahead().type !== Mn.dot)
                ) {
                  const e = this.startNode()
                  return this.next(), this.finishNode(e, 'TSIntrinsicKeyword')
                }
                return this.tsParseType()
              })),
              this.semicolon(),
              this.finishNode(e, 'TSTypeAliasDeclaration')
            )
          }
          tsInNoContext(e) {
            const t = this.state.context
            this.state.context = [t[0]]
            try {
              return e()
            } finally {
              this.state.context = t
            }
          }
          tsInType(e) {
            const t = this.state.inType
            this.state.inType = !0
            try {
              return e()
            } finally {
              this.state.inType = t
            }
          }
          tsEatThenParseType(e) {
            return this.match(e) ? this.tsNextThenParseType() : void 0
          }
          tsExpectThenParseType(e) {
            return this.tsDoThenParseType(() => this.expect(e))
          }
          tsNextThenParseType() {
            return this.tsDoThenParseType(() => this.next())
          }
          tsDoThenParseType(e) {
            return this.tsInType(() => (e(), this.tsParseType()))
          }
          tsParseEnumMember() {
            const e = this.startNode()
            return (
              (e.id = this.match(Mn.string)
                ? this.parseExprAtom()
                : this.parseIdentifier(!0)),
              this.eat(Mn.eq) &&
                (e.initializer = this.parseMaybeAssignAllowIn()),
              this.finishNode(e, 'TSEnumMember')
            )
          }
          tsParseEnumDeclaration(e, t) {
            return (
              t && (e.const = !0),
              (e.id = this.parseIdentifier()),
              this.checkLVal(
                e.id,
                'typescript enum declaration',
                t ? 779 : 267
              ),
              this.expect(Mn.braceL),
              (e.members = this.tsParseDelimitedList(
                'EnumMembers',
                this.tsParseEnumMember.bind(this)
              )),
              this.expect(Mn.braceR),
              this.finishNode(e, 'TSEnumDeclaration')
            )
          }
          tsParseModuleBlock() {
            const e = this.startNode()
            return (
              this.scope.enter(0),
              this.expect(Mn.braceL),
              this.parseBlockOrModuleBlockBody(
                (e.body = []),
                void 0,
                !0,
                Mn.braceR
              ),
              this.scope.exit(),
              this.finishNode(e, 'TSModuleBlock')
            )
          }
          tsParseModuleOrNamespaceDeclaration(e, t = !1) {
            if (
              ((e.id = this.parseIdentifier()),
              t ||
                this.checkLVal(e.id, 'module or namespace declaration', 1024),
              this.eat(Mn.dot))
            ) {
              const t = this.startNode()
              this.tsParseModuleOrNamespaceDeclaration(t, !0), (e.body = t)
            } else
              this.scope.enter(go),
                this.prodParam.enter(0),
                (e.body = this.tsParseModuleBlock()),
                this.prodParam.exit(),
                this.scope.exit()
            return this.finishNode(e, 'TSModuleDeclaration')
          }
          tsParseAmbientExternalModuleDeclaration(e) {
            return (
              this.isContextual('global')
                ? ((e.global = !0), (e.id = this.parseIdentifier()))
                : this.match(Mn.string)
                ? (e.id = this.parseExprAtom())
                : this.unexpected(),
              this.match(Mn.braceL)
                ? (this.scope.enter(go),
                  this.prodParam.enter(0),
                  (e.body = this.tsParseModuleBlock()),
                  this.prodParam.exit(),
                  this.scope.exit())
                : this.semicolon(),
              this.finishNode(e, 'TSModuleDeclaration')
            )
          }
          tsParseImportEqualsDeclaration(e, t) {
            ;(e.isExport = t || !1),
              (e.id = this.parseIdentifier()),
              this.checkLVal(e.id, 'import equals declaration', 9),
              this.expect(Mn.eq)
            const s = this.tsParseModuleReference()
            return (
              'type' === e.importKind &&
                'TSExternalModuleReference' !== s.type &&
                this.raise(s.start, du.ImportAliasHasImportType),
              (e.moduleReference = s),
              this.semicolon(),
              this.finishNode(e, 'TSImportEqualsDeclaration')
            )
          }
          tsIsExternalModuleReference() {
            return (
              this.isContextual('require') && 40 === this.lookaheadCharCode()
            )
          }
          tsParseModuleReference() {
            return this.tsIsExternalModuleReference()
              ? this.tsParseExternalModuleReference()
              : this.tsParseEntityName(!1)
          }
          tsParseExternalModuleReference() {
            const e = this.startNode()
            if (
              (this.expectContextual('require'),
              this.expect(Mn.parenL),
              !this.match(Mn.string))
            )
              throw this.unexpected()
            return (
              (e.expression = this.parseExprAtom()),
              this.expect(Mn.parenR),
              this.finishNode(e, 'TSExternalModuleReference')
            )
          }
          tsLookAhead(e) {
            const t = this.state.clone(),
              s = e()
            return (this.state = t), s
          }
          tsTryParseAndCatch(e) {
            const t = this.tryParse((t) => e() || t())
            if (!t.aborted && t.node)
              return t.error && (this.state = t.failState), t.node
          }
          tsTryParse(e) {
            const t = this.state.clone(),
              s = e()
            return void 0 !== s && !1 !== s ? s : void (this.state = t)
          }
          tsTryParseDeclare(e) {
            if (this.isLineTerminator()) return
            let t,
              s = this.state.type
            return (
              this.isContextual('let') && ((s = Mn._var), (t = 'let')),
              this.tsInAmbientContext(() => {
                switch (s) {
                  case Mn._function:
                    return (
                      (e.declare = !0), this.parseFunctionStatement(e, !1, !0)
                    )
                  case Mn._class:
                    return (e.declare = !0), this.parseClass(e, !0, !1)
                  case Mn._const:
                    if (
                      this.match(Mn._const) &&
                      this.isLookaheadContextual('enum')
                    )
                      return (
                        this.expect(Mn._const),
                        this.expectContextual('enum'),
                        this.tsParseEnumDeclaration(e, !0)
                      )
                  case Mn._var:
                    return (
                      (t = t || this.state.value), this.parseVarStatement(e, t)
                    )
                  case Mn.name: {
                    const t = this.state.value
                    return 'global' === t
                      ? this.tsParseAmbientExternalModuleDeclaration(e)
                      : this.tsParseDeclaration(e, t, !0)
                  }
                }
              })
            )
          }
          tsTryParseExportDeclaration() {
            return this.tsParseDeclaration(
              this.startNode(),
              this.state.value,
              !0
            )
          }
          tsParseExpressionStatement(e, t) {
            switch (t.name) {
              case 'declare': {
                const t = this.tsTryParseDeclare(e)
                if (t) return (t.declare = !0), t
                break
              }
              case 'global':
                if (this.match(Mn.braceL)) {
                  this.scope.enter(go), this.prodParam.enter(0)
                  const s = e
                  return (
                    (s.global = !0),
                    (s.id = t),
                    (s.body = this.tsParseModuleBlock()),
                    this.scope.exit(),
                    this.prodParam.exit(),
                    this.finishNode(s, 'TSModuleDeclaration')
                  )
                }
                break
              default:
                return this.tsParseDeclaration(e, t.name, !1)
            }
          }
          tsParseDeclaration(e, t, s) {
            switch (t) {
              case 'abstract':
                if (
                  this.tsCheckLineTerminator(s) &&
                  (this.match(Mn._class) || this.match(Mn.name))
                )
                  return this.tsParseAbstractDeclaration(e)
                break
              case 'enum':
                if (s || this.match(Mn.name))
                  return s && this.next(), this.tsParseEnumDeclaration(e, !1)
                break
              case 'interface':
                if (this.tsCheckLineTerminator(s) && this.match(Mn.name))
                  return this.tsParseInterfaceDeclaration(e)
                break
              case 'module':
                if (this.tsCheckLineTerminator(s)) {
                  if (this.match(Mn.string))
                    return this.tsParseAmbientExternalModuleDeclaration(e)
                  if (this.match(Mn.name))
                    return this.tsParseModuleOrNamespaceDeclaration(e)
                }
                break
              case 'namespace':
                if (this.tsCheckLineTerminator(s) && this.match(Mn.name))
                  return this.tsParseModuleOrNamespaceDeclaration(e)
                break
              case 'type':
                if (this.tsCheckLineTerminator(s) && this.match(Mn.name))
                  return this.tsParseTypeAliasDeclaration(e)
            }
          }
          tsCheckLineTerminator(e) {
            return e
              ? !this.hasFollowingLineBreak() && (this.next(), !0)
              : !this.isLineTerminator()
          }
          tsTryParseGenericAsyncArrowFunction(e, t) {
            if (!this.isRelational('<')) return
            const s = this.state.maybeInArrowParameters
            this.state.maybeInArrowParameters = !0
            const r = this.tsTryParseAndCatch(() => {
              const s = this.startNodeAt(e, t)
              return (
                (s.typeParameters = this.tsParseTypeParameters()),
                super.parseFunctionParams(s),
                (s.returnType = this.tsTryParseTypeOrTypePredicateAnnotation()),
                this.expect(Mn.arrow),
                s
              )
            })
            return (
              (this.state.maybeInArrowParameters = s),
              r ? this.parseArrowExpression(r, null, !0) : void 0
            )
          }
          tsParseTypeArguments() {
            const e = this.startNode()
            return (
              (e.params = this.tsInType(() =>
                this.tsInNoContext(
                  () => (
                    this.expectRelational('<'),
                    this.tsParseDelimitedList(
                      'TypeParametersOrArguments',
                      this.tsParseType.bind(this)
                    )
                  )
                )
              )),
              0 === e.params.length &&
                this.raise(e.start, du.EmptyTypeArguments),
              this.expectRelational('>'),
              this.finishNode(e, 'TSTypeParameterInstantiation')
            )
          }
          tsIsDeclarationStart() {
            if (this.match(Mn.name))
              switch (this.state.value) {
                case 'abstract':
                case 'declare':
                case 'enum':
                case 'interface':
                case 'module':
                case 'namespace':
                case 'type':
                  return !0
              }
            return !1
          }
          isExportDefaultSpecifier() {
            return (
              !this.tsIsDeclarationStart() && super.isExportDefaultSpecifier()
            )
          }
          parseAssignableListItem(e, t) {
            const s = this.state.start,
              r = this.state.startLoc
            let i,
              a = !1,
              n = !1
            if (void 0 !== e) {
              const t = {}
              this.tsParseModifiers(t, [
                'public',
                'private',
                'protected',
                'override',
                'readonly'
              ]),
                (i = t.accessibility),
                (n = t.override),
                (a = t.readonly),
                !1 === e &&
                  (i || a || n) &&
                  this.raise(s, du.UnexpectedParameterModifier)
            }
            const o = this.parseMaybeDefault()
            this.parseAssignableListItemTypes(o)
            const u = this.parseMaybeDefault(o.start, o.loc.start, o)
            if (i || a || n) {
              const e = this.startNodeAt(s, r)
              return (
                t.length && (e.decorators = t),
                i && (e.accessibility = i),
                a && (e.readonly = a),
                n && (e.override = n),
                'Identifier' !== u.type &&
                  'AssignmentPattern' !== u.type &&
                  this.raise(e.start, du.UnsupportedParameterPropertyKind),
                (e.parameter = u),
                this.finishNode(e, 'TSParameterProperty')
              )
            }
            return t.length && (o.decorators = t), u
          }
          parseFunctionBodyAndFinish(e, t, s = !1) {
            this.match(Mn.colon) &&
              (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(
                Mn.colon
              ))
            const r =
              'FunctionDeclaration' === t
                ? 'TSDeclareFunction'
                : 'ClassMethod' === t
                ? 'TSDeclareMethod'
                : void 0
            r && !this.match(Mn.braceL) && this.isLineTerminator()
              ? this.finishNode(e, r)
              : 'TSDeclareFunction' === r &&
                this.state.isAmbientContext &&
                (this.raise(e.start, du.DeclareFunctionHasImplementation),
                e.declare)
              ? super.parseFunctionBodyAndFinish(e, r, s)
              : super.parseFunctionBodyAndFinish(e, t, s)
          }
          registerFunctionStatementId(e) {
            !e.body && e.id
              ? this.checkLVal(e.id, 'function name', 1024)
              : super.registerFunctionStatementId(...arguments)
          }
          tsCheckForInvalidTypeCasts(e) {
            e.forEach((e) => {
              'TSTypeCastExpression' === (null == e ? void 0 : e.type) &&
                this.raise(e.typeAnnotation.start, du.UnexpectedTypeAnnotation)
            })
          }
          toReferencedList(e, t) {
            return this.tsCheckForInvalidTypeCasts(e), e
          }
          parseArrayLike(...e) {
            const t = super.parseArrayLike(...e)
            return (
              'ArrayExpression' === t.type &&
                this.tsCheckForInvalidTypeCasts(t.elements),
              t
            )
          }
          parseSubscript(e, t, s, r, i) {
            if (!this.hasPrecedingLineBreak() && this.match(Mn.bang)) {
              ;(this.state.exprAllowed = !1), this.next()
              const r = this.startNodeAt(t, s)
              return (
                (r.expression = e), this.finishNode(r, 'TSNonNullExpression')
              )
            }
            let a = !1
            if (this.match(Mn.questionDot) && 60 === this.lookaheadCharCode()) {
              if (r) return (i.stop = !0), e
              ;(i.optionalChainMember = a = !0), this.next()
            }
            if (this.isRelational('<')) {
              let n
              const o = this.tsTryParseAndCatch(() => {
                if (!r && this.atPossibleAsyncArrow(e)) {
                  const e = this.tsTryParseGenericAsyncArrowFunction(t, s)
                  if (e) return e
                }
                const o = this.startNodeAt(t, s)
                o.callee = e
                const u = this.tsParseTypeArguments()
                if (u) {
                  if (
                    (a &&
                      !this.match(Mn.parenL) &&
                      ((n = this.state.pos), this.unexpected()),
                    !r && this.eat(Mn.parenL))
                  )
                    return (
                      (o.arguments = this.parseCallExpressionArguments(
                        Mn.parenR,
                        !1
                      )),
                      this.tsCheckForInvalidTypeCasts(o.arguments),
                      (o.typeParameters = u),
                      i.optionalChainMember && (o.optional = a),
                      this.finishCallExpression(o, i.optionalChainMember)
                    )
                  if (this.match(Mn.backQuote)) {
                    const r = this.parseTaggedTemplateExpression(e, t, s, i)
                    return (r.typeParameters = u), r
                  }
                }
                this.unexpected()
              })
              if ((n && this.unexpected(n, Mn.parenL), o)) return o
            }
            return super.parseSubscript(e, t, s, r, i)
          }
          parseNewArguments(e) {
            if (this.isRelational('<')) {
              const t = this.tsTryParseAndCatch(() => {
                const e = this.tsParseTypeArguments()
                return this.match(Mn.parenL) || this.unexpected(), e
              })
              t && (e.typeParameters = t)
            }
            super.parseNewArguments(e)
          }
          parseExprOp(e, t, s, r) {
            if (
              pu(Mn._in.binop) > r &&
              !this.hasPrecedingLineBreak() &&
              this.isContextual('as')
            ) {
              const i = this.startNodeAt(t, s)
              i.expression = e
              const a = this.tsTryNextParseConstantContext()
              return (
                (i.typeAnnotation = a || this.tsNextThenParseType()),
                this.finishNode(i, 'TSAsExpression'),
                this.reScan_lt_gt(),
                this.parseExprOp(i, t, s, r)
              )
            }
            return super.parseExprOp(e, t, s, r)
          }
          checkReservedWord(e, t, s, r) {}
          checkDuplicateExports() {}
          parseImport(e) {
            if (
              ((e.importKind = 'value'),
              this.match(Mn.name) ||
                this.match(Mn.star) ||
                this.match(Mn.braceL))
            ) {
              let t = this.lookahead()
              if (
                (!this.isContextual('type') ||
                  t.type === Mn.comma ||
                  (t.type === Mn.name && 'from' === t.value) ||
                  t.type === Mn.eq ||
                  ((e.importKind = 'type'),
                  this.next(),
                  (t = this.lookahead())),
                this.match(Mn.name) && t.type === Mn.eq)
              )
                return this.tsParseImportEqualsDeclaration(e)
            }
            const t = super.parseImport(e)
            return (
              'type' === t.importKind &&
                t.specifiers.length > 1 &&
                'ImportDefaultSpecifier' === t.specifiers[0].type &&
                this.raise(t.start, du.TypeImportCannotSpecifyDefaultAndNamed),
              t
            )
          }
          parseExport(e) {
            if (this.match(Mn._import))
              return (
                this.next(),
                this.isContextual('type') && 61 !== this.lookaheadCharCode()
                  ? ((e.importKind = 'type'), this.next())
                  : (e.importKind = 'value'),
                this.tsParseImportEqualsDeclaration(e, !0)
              )
            if (this.eat(Mn.eq)) {
              const t = e
              return (
                (t.expression = this.parseExpression()),
                this.semicolon(),
                this.finishNode(t, 'TSExportAssignment')
              )
            }
            if (this.eatContextual('as')) {
              const t = e
              return (
                this.expectContextual('namespace'),
                (t.id = this.parseIdentifier()),
                this.semicolon(),
                this.finishNode(t, 'TSNamespaceExportDeclaration')
              )
            }
            return (
              this.isContextual('type') && this.lookahead().type === Mn.braceL
                ? (this.next(), (e.exportKind = 'type'))
                : (e.exportKind = 'value'),
              super.parseExport(e)
            )
          }
          isAbstractClass() {
            return (
              this.isContextual('abstract') &&
              this.lookahead().type === Mn._class
            )
          }
          parseExportDefaultExpression() {
            if (this.isAbstractClass()) {
              const e = this.startNode()
              return (
                this.next(), (e.abstract = !0), this.parseClass(e, !0, !0), e
              )
            }
            if ('interface' === this.state.value) {
              const e = this.startNode()
              this.next()
              const t = this.tsParseInterfaceDeclaration(e)
              if (t) return t
            }
            return super.parseExportDefaultExpression()
          }
          parseStatementContent(e, t) {
            if (this.state.type === Mn._const) {
              const e = this.lookahead()
              if (e.type === Mn.name && 'enum' === e.value) {
                const e = this.startNode()
                return (
                  this.expect(Mn._const),
                  this.expectContextual('enum'),
                  this.tsParseEnumDeclaration(e, !0)
                )
              }
            }
            return super.parseStatementContent(e, t)
          }
          parseAccessModifier() {
            return this.tsParseModifier(['public', 'protected', 'private'])
          }
          tsHasSomeModifiers(e, t) {
            return t.some((t) => (Du(t) ? e.accessibility === t : !!e[t]))
          }
          tsIsStartOfStaticBlocks() {
            return (
              this.isContextual('static') && 123 === this.lookaheadCharCode()
            )
          }
          parseClassMember(e, t, s) {
            const r = [
              'declare',
              'private',
              'public',
              'protected',
              'override',
              'abstract',
              'readonly',
              'static'
            ]
            this.tsParseModifiers(t, r, void 0, void 0, !0)
            const i = () => {
              this.tsIsStartOfStaticBlocks()
                ? (this.next(),
                  this.next(),
                  this.tsHasSomeModifiers(t, r) &&
                    this.raise(
                      this.state.pos,
                      du.StaticBlockCannotHaveModifier
                    ),
                  this.parseClassStaticBlock(e, t))
                : this.parseClassMemberWithIsStatic(e, t, s, !!t.static)
            }
            t.declare ? this.tsInAmbientContext(i) : i()
          }
          parseClassMemberWithIsStatic(e, t, s, r) {
            const i = this.tsTryParseIndexSignature(t)
            if (i)
              return (
                e.body.push(i),
                t.abstract && this.raise(t.start, du.IndexSignatureHasAbstract),
                t.accessibility &&
                  this.raise(
                    t.start,
                    du.IndexSignatureHasAccessibility,
                    t.accessibility
                  ),
                t.declare && this.raise(t.start, du.IndexSignatureHasDeclare),
                void (
                  t.override &&
                  this.raise(t.start, du.IndexSignatureHasOverride)
                )
              )
            !this.state.inAbstractClass &&
              t.abstract &&
              this.raise(t.start, du.NonAbstractClassHasAbstractMethod),
              t.override &&
                (s.hadSuperClass ||
                  this.raise(t.start, du.OverrideNotInSubClass)),
              super.parseClassMemberWithIsStatic(e, t, s, r)
          }
          parsePostMemberNameModifiers(e) {
            this.eat(Mn.question) && (e.optional = !0),
              e.readonly &&
                this.match(Mn.parenL) &&
                this.raise(e.start, du.ClassMethodHasReadonly),
              e.declare &&
                this.match(Mn.parenL) &&
                this.raise(e.start, du.ClassMethodHasDeclare)
          }
          parseExpressionStatement(e, t) {
            return (
              ('Identifier' === t.type
                ? this.tsParseExpressionStatement(e, t)
                : void 0) || super.parseExpressionStatement(e, t)
            )
          }
          shouldParseExportDeclaration() {
            return (
              !!this.tsIsDeclarationStart() ||
              super.shouldParseExportDeclaration()
            )
          }
          parseConditional(e, t, s, r) {
            if (!this.state.maybeInArrowParameters || !this.match(Mn.question))
              return super.parseConditional(e, t, s, r)
            const i = this.tryParse(() => super.parseConditional(e, t, s))
            return i.node
              ? (i.error && (this.state = i.failState), i.node)
              : (i.error && super.setOptionalParametersError(r, i.error), e)
          }
          parseParenItem(e, t, s) {
            if (
              ((e = super.parseParenItem(e, t, s)),
              this.eat(Mn.question) &&
                ((e.optional = !0), this.resetEndLocation(e)),
              this.match(Mn.colon))
            ) {
              const r = this.startNodeAt(t, s)
              return (
                (r.expression = e),
                (r.typeAnnotation = this.tsParseTypeAnnotation()),
                this.finishNode(r, 'TSTypeCastExpression')
              )
            }
            return e
          }
          parseExportDeclaration(e) {
            const t = this.state.start,
              s = this.state.startLoc,
              r = this.eatContextual('declare')
            if (
              r &&
              (this.isContextual('declare') ||
                !this.shouldParseExportDeclaration())
            )
              throw this.raise(
                this.state.start,
                du.ExpectedAmbientAfterExportDeclare
              )
            let i
            return (
              this.match(Mn.name) && (i = this.tsTryParseExportDeclaration()),
              i || (i = super.parseExportDeclaration(e)),
              i &&
                ('TSInterfaceDeclaration' === i.type ||
                  'TSTypeAliasDeclaration' === i.type ||
                  r) &&
                (e.exportKind = 'type'),
              i && r && (this.resetStartLocation(i, t, s), (i.declare = !0)),
              i
            )
          }
          parseClassId(e, t, s) {
            if ((!t || s) && this.isContextual('implements')) return
            super.parseClassId(e, t, s, e.declare ? 1024 : 139)
            const r = this.tsTryParseTypeParameters()
            r && (e.typeParameters = r)
          }
          parseClassPropertyAnnotation(e) {
            !e.optional && this.eat(Mn.bang) && (e.definite = !0)
            const t = this.tsTryParseTypeAnnotation()
            t && (e.typeAnnotation = t)
          }
          parseClassProperty(e) {
            if (
              (this.parseClassPropertyAnnotation(e),
              this.state.isAmbientContext &&
                this.match(Mn.eq) &&
                this.raise(
                  this.state.start,
                  du.DeclareClassFieldHasInitializer
                ),
              e.abstract && this.match(Mn.eq))
            ) {
              const { key: t } = e
              this.raise(
                this.state.start,
                du.AbstractPropertyHasInitializer,
                'Identifier' !== t.type || e.computed
                  ? `[${this.input.slice(t.start, t.end)}]`
                  : t.name
              )
            }
            return super.parseClassProperty(e)
          }
          parseClassPrivateProperty(e) {
            return (
              e.abstract && this.raise(e.start, du.PrivateElementHasAbstract),
              e.accessibility &&
                this.raise(
                  e.start,
                  du.PrivateElementHasAccessibility,
                  e.accessibility
                ),
              this.parseClassPropertyAnnotation(e),
              super.parseClassPrivateProperty(e)
            )
          }
          pushClassMethod(e, t, s, r, i, a) {
            const n = this.tsTryParseTypeParameters()
            n && i && this.raise(n.start, du.ConstructorHasTypeParameters),
              !t.declare ||
                ('get' !== t.kind && 'set' !== t.kind) ||
                this.raise(t.start, du.DeclareAccessor, t.kind),
              n && (t.typeParameters = n),
              super.pushClassMethod(e, t, s, r, i, a)
          }
          pushClassPrivateMethod(e, t, s, r) {
            const i = this.tsTryParseTypeParameters()
            i && (t.typeParameters = i),
              super.pushClassPrivateMethod(e, t, s, r)
          }
          parseClassSuper(e) {
            super.parseClassSuper(e),
              e.superClass &&
                this.isRelational('<') &&
                (e.superTypeParameters = this.tsParseTypeArguments()),
              this.eatContextual('implements') &&
                (e.implements = this.tsParseHeritageClause('implements'))
          }
          parseObjPropValue(e, ...t) {
            const s = this.tsTryParseTypeParameters()
            s && (e.typeParameters = s), super.parseObjPropValue(e, ...t)
          }
          parseFunctionParams(e, t) {
            const s = this.tsTryParseTypeParameters()
            s && (e.typeParameters = s), super.parseFunctionParams(e, t)
          }
          parseVarId(e, t) {
            super.parseVarId(e, t),
              'Identifier' === e.id.type &&
                this.eat(Mn.bang) &&
                (e.definite = !0)
            const s = this.tsTryParseTypeAnnotation()
            s && ((e.id.typeAnnotation = s), this.resetEndLocation(e.id))
          }
          parseAsyncArrowFromCallExpression(e, t) {
            return (
              this.match(Mn.colon) &&
                (e.returnType = this.tsParseTypeAnnotation()),
              super.parseAsyncArrowFromCallExpression(e, t)
            )
          }
          parseMaybeAssign(...e) {
            var t, s, r, i, a, n, o
            let u, h, c, p
            if (
              this.hasPlugin('jsx') &&
              (this.match(Mn.jsxTagStart) || this.isRelational('<'))
            ) {
              if (
                ((u = this.state.clone()),
                (h = this.tryParse(() => super.parseMaybeAssign(...e), u)),
                !h.error)
              )
                return h.node
              const { context: t } = this.state
              t[t.length - 1] === eo.j_oTag
                ? (t.length -= 2)
                : t[t.length - 1] === eo.j_expr && (t.length -= 1)
            }
            if (!((null != (t = h) && t.error) || this.isRelational('<')))
              return super.parseMaybeAssign(...e)
            u = u || this.state.clone()
            const l = this.tryParse((t) => {
              var s, r
              p = this.tsParseTypeParameters()
              const i = super.parseMaybeAssign(...e)
              return (
                ('ArrowFunctionExpression' !== i.type ||
                  (null != (s = i.extra) && s.parenthesized)) &&
                  t(),
                0 !== (null == (r = p) ? void 0 : r.params.length) &&
                  this.resetStartLocationFromNode(i, p),
                (i.typeParameters = p),
                i
              )
            }, u)
            if (!l.error && !l.aborted) return l.node
            if (
              !h &&
              (lu(!this.hasPlugin('jsx')),
              (c = this.tryParse(() => super.parseMaybeAssign(...e), u)),
              !c.error)
            )
              return c.node
            if (null != (s = h) && s.node)
              return (this.state = h.failState), h.node
            if (l.node) return (this.state = l.failState), l.node
            if (null != (r = c) && r.node)
              return (this.state = c.failState), c.node
            if (null != (i = h) && i.thrown) throw h.error
            if (l.thrown) throw l.error
            if (null != (a = c) && a.thrown) throw c.error
            throw (
              (null == (n = h) ? void 0 : n.error) ||
              l.error ||
              (null == (o = c) ? void 0 : o.error)
            )
          }
          parseMaybeUnary(e) {
            return !this.hasPlugin('jsx') && this.isRelational('<')
              ? this.tsParseTypeAssertion()
              : super.parseMaybeUnary(e)
          }
          parseArrow(e) {
            if (this.match(Mn.colon)) {
              const t = this.tryParse((e) => {
                const t = this.tsParseTypeOrTypePredicateAnnotation(Mn.colon)
                return (
                  (!this.canInsertSemicolon() && this.match(Mn.arrow)) || e(), t
                )
              })
              if (t.aborted) return
              t.thrown ||
                (t.error && (this.state = t.failState), (e.returnType = t.node))
            }
            return super.parseArrow(e)
          }
          parseAssignableListItemTypes(e) {
            this.eat(Mn.question) &&
              ('Identifier' === e.type ||
                this.state.isAmbientContext ||
                this.state.inType ||
                this.raise(e.start, du.PatternIsOptional),
              (e.optional = !0))
            const t = this.tsTryParseTypeAnnotation()
            return t && (e.typeAnnotation = t), this.resetEndLocation(e), e
          }
          isAssignable(e, t) {
            switch (e.type) {
              case 'TSTypeCastExpression':
                return this.isAssignable(e.expression, t)
              case 'TSParameterProperty':
                return !0
              default:
                return super.isAssignable(e, t)
            }
          }
          toAssignable(e, t = !1) {
            switch (e.type) {
              case 'TSTypeCastExpression':
                return super.toAssignable(this.typeCastToParameter(e), t)
              case 'TSParameterProperty':
                return super.toAssignable(e, t)
              case 'ParenthesizedExpression':
                return this.toAssignableParenthesizedExpression(e, t)
              case 'TSAsExpression':
              case 'TSNonNullExpression':
              case 'TSTypeAssertion':
                return (e.expression = this.toAssignable(e.expression, t)), e
              default:
                return super.toAssignable(e, t)
            }
          }
          toAssignableParenthesizedExpression(e, t) {
            switch (e.expression.type) {
              case 'TSAsExpression':
              case 'TSNonNullExpression':
              case 'TSTypeAssertion':
              case 'ParenthesizedExpression':
                return (e.expression = this.toAssignable(e.expression, t)), e
              default:
                return super.toAssignable(e, t)
            }
          }
          checkLVal(e, t, ...s) {
            var r
            switch (e.type) {
              case 'TSTypeCastExpression':
                return
              case 'TSParameterProperty':
                return void this.checkLVal(
                  e.parameter,
                  'parameter property',
                  ...s
                )
              case 'TSAsExpression':
              case 'TSTypeAssertion':
                if (
                  !(
                    s[0] ||
                    'parenthesized expression' === t ||
                    (null != (r = e.extra) && r.parenthesized)
                  )
                ) {
                  this.raise(e.start, Xn.InvalidLhs, t)
                  break
                }
                return void this.checkLVal(
                  e.expression,
                  'parenthesized expression',
                  ...s
                )
              case 'TSNonNullExpression':
                return void this.checkLVal(e.expression, t, ...s)
              default:
                return void super.checkLVal(e, t, ...s)
            }
          }
          parseBindingAtom() {
            switch (this.state.type) {
              case Mn._this:
                return this.parseIdentifier(!0)
              default:
                return super.parseBindingAtom()
            }
          }
          parseMaybeDecoratorArguments(e) {
            if (this.isRelational('<')) {
              const t = this.tsParseTypeArguments()
              if (this.match(Mn.parenL)) {
                const s = super.parseMaybeDecoratorArguments(e)
                return (s.typeParameters = t), s
              }
              this.unexpected(this.state.start, Mn.parenL)
            }
            return super.parseMaybeDecoratorArguments(e)
          }
          checkCommaAfterRest(e) {
            this.state.isAmbientContext &&
            this.match(Mn.comma) &&
            this.lookaheadCharCode() === e
              ? this.next()
              : super.checkCommaAfterRest(e)
          }
          isClassMethod() {
            return this.isRelational('<') || super.isClassMethod()
          }
          isClassProperty() {
            return (
              this.match(Mn.bang) ||
              this.match(Mn.colon) ||
              super.isClassProperty()
            )
          }
          parseMaybeDefault(...e) {
            const t = super.parseMaybeDefault(...e)
            return (
              'AssignmentPattern' === t.type &&
                t.typeAnnotation &&
                t.right.start < t.typeAnnotation.start &&
                this.raise(
                  t.typeAnnotation.start,
                  du.TypeAnnotationAfterAssign
                ),
              t
            )
          }
          getTokenFromCode(e) {
            return !this.state.inType || (62 !== e && 60 !== e)
              ? super.getTokenFromCode(e)
              : this.finishOp(Mn.relational, 1)
          }
          reScan_lt_gt() {
            if (this.match(Mn.relational)) {
              const e = this.input.charCodeAt(this.state.start)
              ;(60 !== e && 62 !== e) ||
                ((this.state.pos -= 1), this.readToken_lt_gt(e))
            }
          }
          toAssignableList(e) {
            for (let t = 0; t < e.length; t++) {
              const s = e[t]
              if (s)
                switch (s.type) {
                  case 'TSTypeCastExpression':
                    e[t] = this.typeCastToParameter(s)
                    break
                  case 'TSAsExpression':
                  case 'TSTypeAssertion':
                    this.state.maybeInArrowParameters
                      ? this.raise(s.start, du.UnexpectedTypeCastInParameter)
                      : (e[t] = this.typeCastToParameter(s))
                }
            }
            return super.toAssignableList(...arguments)
          }
          typeCastToParameter(e) {
            return (
              (e.expression.typeAnnotation = e.typeAnnotation),
              this.resetEndLocation(
                e.expression,
                e.typeAnnotation.end,
                e.typeAnnotation.loc.end
              ),
              e.expression
            )
          }
          shouldParseArrow(e) {
            return this.match(Mn.colon)
              ? e.every((e) => this.isAssignable(e, !0))
              : super.shouldParseArrow(e)
          }
          shouldParseAsyncArrow() {
            return this.match(Mn.colon) || super.shouldParseAsyncArrow()
          }
          canHaveLeadingDecorator() {
            return super.canHaveLeadingDecorator() || this.isAbstractClass()
          }
          jsxParseOpeningElementAfterName(e) {
            if (this.isRelational('<')) {
              const t = this.tsTryParseAndCatch(() =>
                this.tsParseTypeArguments()
              )
              t && (e.typeParameters = t)
            }
            return super.jsxParseOpeningElementAfterName(e)
          }
          getGetterSetterExpectedParamCount(e) {
            const t = super.getGetterSetterExpectedParamCount(e),
              s = this.getObjectOrClassMethodParams(e)[0]
            return s && this.isThisParam(s) ? t + 1 : t
          }
          parseCatchClauseParam() {
            const e = super.parseCatchClauseParam(),
              t = this.tsTryParseTypeAnnotation()
            return t && ((e.typeAnnotation = t), this.resetEndLocation(e)), e
          }
          tsInAmbientContext(e) {
            const t = this.state.isAmbientContext
            this.state.isAmbientContext = !0
            try {
              return e()
            } finally {
              this.state.isAmbientContext = t
            }
          }
          parseClass(e, ...t) {
            const s = this.state.inAbstractClass
            this.state.inAbstractClass = !!e.abstract
            try {
              return super.parseClass(e, ...t)
            } finally {
              this.state.inAbstractClass = s
            }
          }
          tsParseAbstractDeclaration(e) {
            if (this.match(Mn._class))
              return (e.abstract = !0), this.parseClass(e, !0, !1)
            if (this.isContextual('interface')) {
              if (!this.hasFollowingLineBreak())
                return (
                  (e.abstract = !0),
                  this.raise(
                    e.start,
                    du.NonClassMethodPropertyHasAbstractModifer
                  ),
                  this.next(),
                  this.tsParseInterfaceDeclaration(e)
                )
            } else this.unexpected(null, Mn._class)
          }
          parseMethod(...e) {
            const t = super.parseMethod(...e)
            if (t.abstract) {
              if (this.hasPlugin('estree') ? !!t.value.body : !!t.body) {
                const { key: e } = t
                this.raise(
                  t.start,
                  du.AbstractMethodHasImplementation,
                  'Identifier' !== e.type || t.computed
                    ? `[${this.input.slice(e.start, e.end)}]`
                    : e.name
                )
              }
            }
            return t
          }
          tsParseTypeParameterName() {
            return this.parseIdentifier().name
          }
          shouldParseAsAmbientContext() {
            return !!this.getPluginOption('typescript', 'dts')
          }
          parse() {
            return (
              this.shouldParseAsAmbientContext() &&
                (this.state.isAmbientContext = !0),
              super.parse()
            )
          }
          getExpression() {
            return (
              this.shouldParseAsAmbientContext() &&
                (this.state.isAmbientContext = !0),
              super.getExpression()
            )
          }
        },
      v8intrinsic: (e) =>
        class extends e {
          parseV8Intrinsic() {
            if (this.match(Mn.modulo)) {
              const e = this.state.start,
                t = this.startNode()
              if ((this.eat(Mn.modulo), this.match(Mn.name))) {
                const e = this.parseIdentifierName(this.state.start),
                  s = this.createIdentifier(t, e)
                if (((s.type = 'V8IntrinsicIdentifier'), this.match(Mn.parenL)))
                  return s
              }
              this.unexpected(e)
            }
          }
          parseExprAtom() {
            return this.parseV8Intrinsic() || super.parseExprAtom(...arguments)
          }
        },
      placeholders: (e) =>
        class extends e {
          parsePlaceholder(e) {
            if (this.match(Mn.placeholder)) {
              const t = this.startNode()
              return (
                this.next(),
                this.assertNoSpace('Unexpected space in placeholder.'),
                (t.name = super.parseIdentifier(!0)),
                this.assertNoSpace('Unexpected space in placeholder.'),
                this.expect(Mn.placeholder),
                this.finishPlaceholder(t, e)
              )
            }
          }
          finishPlaceholder(e, t) {
            const s = !(!e.expectedNode || 'Placeholder' !== e.type)
            return (
              (e.expectedNode = t), s ? e : this.finishNode(e, 'Placeholder')
            )
          }
          getTokenFromCode(e) {
            return 37 === e && 37 === this.input.charCodeAt(this.state.pos + 1)
              ? this.finishOp(Mn.placeholder, 2)
              : super.getTokenFromCode(...arguments)
          }
          parseExprAtom() {
            return (
              this.parsePlaceholder('Expression') ||
              super.parseExprAtom(...arguments)
            )
          }
          parseIdentifier() {
            return (
              this.parsePlaceholder('Identifier') ||
              super.parseIdentifier(...arguments)
            )
          }
          checkReservedWord(e) {
            void 0 !== e && super.checkReservedWord(...arguments)
          }
          parseBindingAtom() {
            return (
              this.parsePlaceholder('Pattern') ||
              super.parseBindingAtom(...arguments)
            )
          }
          checkLVal(e) {
            'Placeholder' !== e.type && super.checkLVal(...arguments)
          }
          toAssignable(e) {
            return e &&
              'Placeholder' === e.type &&
              'Expression' === e.expectedNode
              ? ((e.expectedNode = 'Pattern'), e)
              : super.toAssignable(...arguments)
          }
          isLet(e) {
            if (super.isLet(e)) return !0
            if (!this.isContextual('let')) return !1
            if (e) return !1
            return this.lookahead().type === Mn.placeholder
          }
          verifyBreakContinue(e) {
            ;(e.label && 'Placeholder' === e.label.type) ||
              super.verifyBreakContinue(...arguments)
          }
          parseExpressionStatement(e, t) {
            if ('Placeholder' !== t.type || (t.extra && t.extra.parenthesized))
              return super.parseExpressionStatement(...arguments)
            if (this.match(Mn.colon)) {
              const s = e
              return (
                (s.label = this.finishPlaceholder(t, 'Identifier')),
                this.next(),
                (s.body = this.parseStatement('label')),
                this.finishNode(s, 'LabeledStatement')
              )
            }
            return (
              this.semicolon(),
              (e.name = t.name),
              this.finishPlaceholder(e, 'Statement')
            )
          }
          parseBlock() {
            return (
              this.parsePlaceholder('BlockStatement') ||
              super.parseBlock(...arguments)
            )
          }
          parseFunctionId() {
            return (
              this.parsePlaceholder('Identifier') ||
              super.parseFunctionId(...arguments)
            )
          }
          parseClass(e, t, s) {
            const r = t ? 'ClassDeclaration' : 'ClassExpression'
            this.next(), this.takeDecorators(e)
            const i = this.state.strict,
              a = this.parsePlaceholder('Identifier')
            if (a)
              if (
                this.match(Mn._extends) ||
                this.match(Mn.placeholder) ||
                this.match(Mn.braceL)
              )
                e.id = a
              else {
                if (s || !t)
                  return (
                    (e.id = null),
                    (e.body = this.finishPlaceholder(a, 'ClassBody')),
                    this.finishNode(e, r)
                  )
                this.unexpected(null, mu.ClassNameIsRequired)
              }
            else this.parseClassId(e, t, s)
            return (
              this.parseClassSuper(e),
              (e.body =
                this.parsePlaceholder('ClassBody') ||
                this.parseClassBody(!!e.superClass, i)),
              this.finishNode(e, r)
            )
          }
          parseExport(e) {
            const t = this.parsePlaceholder('Identifier')
            if (!t) return super.parseExport(...arguments)
            if (!this.isContextual('from') && !this.match(Mn.comma))
              return (
                (e.specifiers = []),
                (e.source = null),
                (e.declaration = this.finishPlaceholder(t, 'Declaration')),
                this.finishNode(e, 'ExportNamedDeclaration')
              )
            this.expectPlugin('exportDefaultFrom')
            const s = this.startNode()
            return (
              (s.exported = t),
              (e.specifiers = [this.finishNode(s, 'ExportDefaultSpecifier')]),
              super.parseExport(e)
            )
          }
          isExportDefaultSpecifier() {
            if (this.match(Mn._default)) {
              const e = this.nextTokenStart()
              if (
                this.isUnparsedContextual(e, 'from') &&
                this.input.startsWith(
                  Mn.placeholder.label,
                  this.nextTokenStartSince(e + 4)
                )
              )
                return !0
            }
            return super.isExportDefaultSpecifier()
          }
          maybeParseExportDefaultSpecifier(e) {
            return (
              !!(e.specifiers && e.specifiers.length > 0) ||
              super.maybeParseExportDefaultSpecifier(...arguments)
            )
          }
          checkExport(e) {
            const { specifiers: t } = e
            null != t &&
              t.length &&
              (e.specifiers = t.filter(
                (e) => 'Placeholder' === e.exported.type
              )),
              super.checkExport(e),
              (e.specifiers = t)
          }
          parseImport(e) {
            const t = this.parsePlaceholder('Identifier')
            if (!t) return super.parseImport(...arguments)
            if (
              ((e.specifiers = []),
              !this.isContextual('from') && !this.match(Mn.comma))
            )
              return (
                (e.source = this.finishPlaceholder(t, 'StringLiteral')),
                this.semicolon(),
                this.finishNode(e, 'ImportDeclaration')
              )
            const s = this.startNodeAtNode(t)
            if (
              ((s.local = t),
              this.finishNode(s, 'ImportDefaultSpecifier'),
              e.specifiers.push(s),
              this.eat(Mn.comma))
            ) {
              this.maybeParseStarImportSpecifier(e) ||
                this.parseNamedImportSpecifiers(e)
            }
            return (
              this.expectContextual('from'),
              (e.source = this.parseImportSource()),
              this.semicolon(),
              this.finishNode(e, 'ImportDeclaration')
            )
          }
          parseImportSource() {
            return (
              this.parsePlaceholder('StringLiteral') ||
              super.parseImportSource(...arguments)
            )
          }
        }
    },
    Fu = Object.keys(xu),
    gu = {
      sourceType: 'script',
      sourceFilename: void 0,
      startLine: 1,
      allowAwaitOutsideFunction: !1,
      allowReturnOutsideFunction: !1,
      allowImportExportEverywhere: !1,
      allowSuperOutsideMethod: !1,
      allowUndeclaredExports: !1,
      plugins: [],
      strictMode: null,
      ranges: !1,
      tokens: !1,
      createParenthesizedExpressions: !1,
      errorRecovery: !1,
      attachComment: !0
    }
  const bu = (e) =>
    'ParenthesizedExpression' === e.type ? bu(e.expression) : e
  const Pu = { kind: 'loop' },
    Tu = { kind: 'switch' },
    wu = /[\uD800-\uDFFF]/u,
    Su = /in(?:stanceof)?/y
  class Bu extends class extends class extends class extends class extends class extends class extends class extends class extends class {
    constructor() {
      ;(this.sawUnambiguousESM = !1), (this.ambiguousScriptDifferentAst = !1)
    }
    hasPlugin(e) {
      return this.plugins.has(e)
    }
    getPluginOption(e, t) {
      if (this.hasPlugin(e)) return this.plugins.get(e)[t]
    }
  } {
    addComment(e) {
      this.filename && (e.loc.filename = this.filename),
        this.state.comments.push(e)
    }
    processComment(e) {
      const { commentStack: t } = this.state,
        s = t.length
      if (0 === s) return
      let r = s - 1
      const i = t[r]
      i.start === e.end && ((i.leadingNode = e), r--)
      const { start: a } = e
      for (; r >= 0; r--) {
        const s = t[r],
          i = s.end
        if (!(i > a)) {
          i === a && (s.trailingNode = e)
          break
        }
        ;(s.containingNode = e), this.finalizeComment(s), t.splice(r, 1)
      }
    }
    finalizeComment(e) {
      const { comments: t } = e
      if (null !== e.leadingNode || null !== e.trailingNode)
        null !== e.leadingNode && zn(e.leadingNode, t),
          null !== e.trailingNode && (e.trailingNode.leadingComments = t)
      else {
        const { containingNode: s, start: r } = e
        if (44 === this.input.charCodeAt(r - 1))
          switch (s.type) {
            case 'ObjectExpression':
            case 'ObjectPattern':
            case 'RecordExpression':
              Gn(s, s.properties, e)
              break
            case 'CallExpression':
            case 'OptionalCallExpression':
              Gn(s, s.arguments, e)
              break
            case 'FunctionDeclaration':
            case 'FunctionExpression':
            case 'ArrowFunctionExpression':
            case 'ObjectMethod':
            case 'ClassMethod':
            case 'ClassPrivateMethod':
              Gn(s, s.params, e)
              break
            case 'ArrayExpression':
            case 'ArrayPattern':
            case 'TupleExpression':
              Gn(s, s.elements, e)
              break
            case 'ExportNamedDeclaration':
            case 'ImportDeclaration':
              Gn(s, s.specifiers, e)
              break
            default:
              Wn(s, t)
          }
        else Wn(s, t)
      }
    }
    finalizeRemainingComments() {
      const { commentStack: e } = this.state
      for (let t = e.length - 1; t >= 0; t--) this.finalizeComment(e[t])
      this.state.commentStack = []
    }
    resetPreviousNodeTrailingComments(e) {
      const { commentStack: t } = this.state,
        { length: s } = t
      if (0 === s) return
      const r = t[s - 1]
      r.leadingNode === e && (r.leadingNode = null)
    }
  } {
    getLocationForPosition(e) {
      let t
      return (
        (t =
          e === this.state.start
            ? this.state.startLoc
            : e === this.state.lastTokStart
            ? this.state.lastTokStartLoc
            : e === this.state.end
            ? this.state.endLoc
            : e === this.state.lastTokEnd
            ? this.state.lastTokEndLoc
            : (function (e, t) {
                let s,
                  r = 1,
                  i = 0
                for (jn.lastIndex = 0; (s = jn.exec(e)) && s.index < t; )
                  r++, (i = jn.lastIndex)
                return new Hn(r, t - i)
              })(this.input, e)),
        t
      )
    }
    raise(e, { code: t, reasonCode: s, template: r }, ...i) {
      return this.raiseWithData(e, { code: t, reasonCode: s }, r, ...i)
    }
    raiseOverwrite(e, { code: t, template: s }, ...r) {
      const i = this.getLocationForPosition(e),
        a = s.replace(/%(\d+)/g, (e, t) => r[t]) + ` (${i.line}:${i.column})`
      if (this.options.errorRecovery) {
        const t = this.state.errors
        for (let s = t.length - 1; s >= 0; s--) {
          const r = t[s]
          if (r.pos === e) return Object.assign(r, { message: a })
          if (r.pos < e) break
        }
      }
      return this._raise({ code: t, loc: i, pos: e }, a)
    }
    raiseWithData(e, t, s, ...r) {
      const i = this.getLocationForPosition(e),
        a = s.replace(/%(\d+)/g, (e, t) => r[t]) + ` (${i.line}:${i.column})`
      return this._raise(Object.assign({ loc: i, pos: e }, t), a)
    }
    _raise(e, t) {
      const s = new SyntaxError(t)
      if ((Object.assign(s, e), this.options.errorRecovery))
        return this.isLookahead || this.state.errors.push(s), s
      throw s
    }
  } {
    constructor(e, t) {
      super(),
        (this.isLookahead = void 0),
        (this.tokens = []),
        (this.state = new vo()),
        this.state.init(e),
        (this.input = t),
        (this.length = t.length),
        (this.isLookahead = !1)
    }
    pushToken(e) {
      ;(this.tokens.length = this.state.tokensLength),
        this.tokens.push(e),
        ++this.state.tokensLength
    }
    next() {
      this.checkKeywordEscapes(),
        this.options.tokens && this.pushToken(new Ro(this.state)),
        (this.state.lastTokEnd = this.state.end),
        (this.state.lastTokStart = this.state.start),
        (this.state.lastTokEndLoc = this.state.endLoc),
        (this.state.lastTokStartLoc = this.state.startLoc),
        this.nextToken()
    }
    eat(e) {
      return !!this.match(e) && (this.next(), !0)
    }
    match(e) {
      return this.state.type === e
    }
    createLookaheadState(e) {
      return {
        pos: e.pos,
        value: null,
        type: e.type,
        start: e.start,
        end: e.end,
        lastTokEnd: e.end,
        context: [this.curContext()],
        inType: e.inType
      }
    }
    lookahead() {
      const e = this.state
      ;(this.state = this.createLookaheadState(e)),
        (this.isLookahead = !0),
        this.nextToken(),
        (this.isLookahead = !1)
      const t = this.state
      return (this.state = e), t
    }
    nextTokenStart() {
      return this.nextTokenStartSince(this.state.pos)
    }
    nextTokenStartSince(e) {
      return (Un.lastIndex = e), Un.test(this.input) ? Un.lastIndex : e
    }
    lookaheadCharCode() {
      return this.input.charCodeAt(this.nextTokenStart())
    }
    codePointAtPos(e) {
      let t = this.input.charCodeAt(e)
      if (55296 == (64512 & t) && ++e < this.input.length) {
        const s = this.input.charCodeAt(e)
        56320 == (64512 & s) && (t = 65536 + ((1023 & t) << 10) + (1023 & s))
      }
      return t
    }
    setStrict(e) {
      ;(this.state.strict = e),
        e &&
          (this.state.strictErrors.forEach((e, t) => this.raise(t, e)),
          this.state.strictErrors.clear())
    }
    curContext() {
      return this.state.context[this.state.context.length - 1]
    }
    nextToken() {
      const e = this.curContext()
      e.preserveSpace || this.skipSpace(),
        (this.state.start = this.state.pos),
        this.isLookahead || (this.state.startLoc = this.state.curPosition()),
        this.state.pos >= this.length
          ? this.finishToken(Mn.eof)
          : e === eo.template
          ? this.readTmplToken()
          : this.getTokenFromCode(this.codePointAtPos(this.state.pos))
    }
    skipBlockComment() {
      let e
      this.isLookahead || (e = this.state.curPosition())
      const t = this.state.pos,
        s = this.input.indexOf('*/', t + 2)
      if (-1 === s) throw this.raise(t, Xn.UnterminatedComment)
      for (
        this.state.pos = s + 2, jn.lastIndex = t + 2;
        jn.test(this.input) && jn.lastIndex <= s;

      )
        ++this.state.curLine, (this.state.lineStart = jn.lastIndex)
      if (this.isLookahead) return
      const r = {
        type: 'CommentBlock',
        value: this.input.slice(t + 2, s),
        start: t,
        end: s + 2,
        loc: new Vn(e, this.state.curPosition())
      }
      return this.options.tokens && this.pushToken(r), r
    }
    skipLineComment(e) {
      const t = this.state.pos
      let s
      this.isLookahead || (s = this.state.curPosition())
      let r = this.input.charCodeAt((this.state.pos += e))
      if (this.state.pos < this.length)
        for (; !_n(r) && ++this.state.pos < this.length; )
          r = this.input.charCodeAt(this.state.pos)
      if (this.isLookahead) return
      const i = this.state.pos,
        a = {
          type: 'CommentLine',
          value: this.input.slice(t + e, i),
          start: t,
          end: i,
          loc: new Vn(s, this.state.curPosition())
        }
      return this.options.tokens && this.pushToken(a), a
    }
    skipSpace() {
      const e = this.state.pos,
        t = []
      e: for (; this.state.pos < this.length; ) {
        const s = this.input.charCodeAt(this.state.pos)
        switch (s) {
          case 32:
          case 160:
          case 9:
            ++this.state.pos
            break
          case 13:
            10 === this.input.charCodeAt(this.state.pos + 1) && ++this.state.pos
          case 10:
          case 8232:
          case 8233:
            ++this.state.pos,
              ++this.state.curLine,
              (this.state.lineStart = this.state.pos)
            break
          case 47:
            switch (this.input.charCodeAt(this.state.pos + 1)) {
              case 42: {
                const e = this.skipBlockComment()
                void 0 !== e &&
                  (this.addComment(e), this.options.attachComment && t.push(e))
                break
              }
              case 47: {
                const e = this.skipLineComment(2)
                void 0 !== e &&
                  (this.addComment(e), this.options.attachComment && t.push(e))
                break
              }
              default:
                break e
            }
            break
          default:
            if ($n(s)) ++this.state.pos
            else if (45 !== s || this.inModule) {
              if (60 !== s || this.inModule) break e
              {
                const e = this.state.pos
                if (
                  33 !== this.input.charCodeAt(e + 1) ||
                  45 !== this.input.charCodeAt(e + 2) ||
                  45 !== this.input.charCodeAt(e + 3)
                )
                  break e
                {
                  const e = this.skipLineComment(4)
                  void 0 !== e &&
                    (this.addComment(e),
                    this.options.attachComment && t.push(e))
                }
              }
            } else {
              const s = this.state.pos
              if (
                45 !== this.input.charCodeAt(s + 1) ||
                62 !== this.input.charCodeAt(s + 2) ||
                !(0 === e || this.state.lineStart > e)
              )
                break e
              {
                const e = this.skipLineComment(3)
                void 0 !== e &&
                  (this.addComment(e), this.options.attachComment && t.push(e))
              }
            }
        }
      }
      if (t.length > 0) {
        const s = {
          start: e,
          end: this.state.pos,
          comments: t,
          leadingNode: null,
          trailingNode: null,
          containingNode: null
        }
        this.state.commentStack.push(s)
      }
    }
    finishToken(e, t) {
      this.state.end = this.state.pos
      const s = this.state.type
      ;(this.state.type = e),
        (this.state.value = t),
        this.isLookahead ||
          ((this.state.endLoc = this.state.curPosition()),
          this.updateContext(s))
    }
    readToken_numberSign() {
      if (0 === this.state.pos && this.readToken_interpreter()) return
      const e = this.state.pos + 1,
        t = this.codePointAtPos(e)
      if (t >= 48 && t <= 57)
        throw this.raise(this.state.pos, Xn.UnexpectedDigitAfterHash)
      if (123 === t || (91 === t && this.hasPlugin('recordAndTuple'))) {
        if (
          (this.expectPlugin('recordAndTuple'),
          'hash' !== this.getPluginOption('recordAndTuple', 'syntaxType'))
        )
          throw this.raise(
            this.state.pos,
            123 === t
              ? Xn.RecordExpressionHashIncorrectStartSyntaxType
              : Xn.TupleExpressionHashIncorrectStartSyntaxType
          )
        ;(this.state.pos += 2),
          123 === t
            ? this.finishToken(Mn.braceHashL)
            : this.finishToken(Mn.bracketHashL)
      } else uo(t) ? (++this.state.pos, this.finishToken(Mn.privateName, this.readWord1(t))) : 92 === t ? (++this.state.pos, this.finishToken(Mn.privateName, this.readWord1())) : this.finishOp(Mn.hash, 1)
    }
    readToken_dot() {
      const e = this.input.charCodeAt(this.state.pos + 1)
      e >= 48 && e <= 57
        ? this.readNumber(!0)
        : 46 === e && 46 === this.input.charCodeAt(this.state.pos + 2)
        ? ((this.state.pos += 3), this.finishToken(Mn.ellipsis))
        : (++this.state.pos, this.finishToken(Mn.dot))
    }
    readToken_slash() {
      61 === this.input.charCodeAt(this.state.pos + 1)
        ? this.finishOp(Mn.slashAssign, 2)
        : this.finishOp(Mn.slash, 1)
    }
    readToken_interpreter() {
      if (0 !== this.state.pos || this.length < 2) return !1
      let e = this.input.charCodeAt(this.state.pos + 1)
      if (33 !== e) return !1
      const t = this.state.pos
      for (this.state.pos += 1; !_n(e) && ++this.state.pos < this.length; )
        e = this.input.charCodeAt(this.state.pos)
      const s = this.input.slice(t + 2, this.state.pos)
      return this.finishToken(Mn.interpreterDirective, s), !0
    }
    readToken_mult_modulo(e) {
      let t = 42 === e ? Mn.star : Mn.modulo,
        s = 1,
        r = this.input.charCodeAt(this.state.pos + 1)
      42 === e &&
        42 === r &&
        (s++,
        (r = this.input.charCodeAt(this.state.pos + 2)),
        (t = Mn.exponent)),
        61 !== r ||
          this.state.inType ||
          (s++, (t = 37 === e ? Mn.moduloAssign : Mn.assign)),
        this.finishOp(t, s)
    }
    readToken_pipe_amp(e) {
      const t = this.input.charCodeAt(this.state.pos + 1)
      if (t !== e) {
        if (124 === e) {
          if (62 === t) return void this.finishOp(Mn.pipeline, 2)
          if (this.hasPlugin('recordAndTuple') && 125 === t) {
            if ('bar' !== this.getPluginOption('recordAndTuple', 'syntaxType'))
              throw this.raise(
                this.state.pos,
                Xn.RecordExpressionBarIncorrectEndSyntaxType
              )
            return (this.state.pos += 2), void this.finishToken(Mn.braceBarR)
          }
          if (this.hasPlugin('recordAndTuple') && 93 === t) {
            if ('bar' !== this.getPluginOption('recordAndTuple', 'syntaxType'))
              throw this.raise(
                this.state.pos,
                Xn.TupleExpressionBarIncorrectEndSyntaxType
              )
            return (this.state.pos += 2), void this.finishToken(Mn.bracketBarR)
          }
        }
        61 !== t
          ? this.finishOp(124 === e ? Mn.bitwiseOR : Mn.bitwiseAND, 1)
          : this.finishOp(Mn.assign, 2)
      } else 61 === this.input.charCodeAt(this.state.pos + 2) ? this.finishOp(Mn.assign, 3) : this.finishOp(124 === e ? Mn.logicalOR : Mn.logicalAND, 2)
    }
    readToken_caret() {
      61 === this.input.charCodeAt(this.state.pos + 1)
        ? this.finishOp(Mn.assign, 2)
        : this.finishOp(Mn.bitwiseXOR, 1)
    }
    readToken_plus_min(e) {
      const t = this.input.charCodeAt(this.state.pos + 1)
      t !== e
        ? 61 === t
          ? this.finishOp(Mn.assign, 2)
          : this.finishOp(Mn.plusMin, 1)
        : this.finishOp(Mn.incDec, 2)
    }
    readToken_lt_gt(e) {
      const t = this.input.charCodeAt(this.state.pos + 1)
      let s = 1
      if (t === e)
        return (
          (s =
            62 === e && 62 === this.input.charCodeAt(this.state.pos + 2)
              ? 3
              : 2),
          61 === this.input.charCodeAt(this.state.pos + s)
            ? void this.finishOp(Mn.assign, s + 1)
            : void this.finishOp(Mn.bitShift, s)
        )
      61 === t && (s = 2), this.finishOp(Mn.relational, s)
    }
    readToken_eq_excl(e) {
      const t = this.input.charCodeAt(this.state.pos + 1)
      if (61 !== t)
        return 61 === e && 62 === t
          ? ((this.state.pos += 2), void this.finishToken(Mn.arrow))
          : void this.finishOp(61 === e ? Mn.eq : Mn.bang, 1)
      this.finishOp(
        Mn.equality,
        61 === this.input.charCodeAt(this.state.pos + 2) ? 3 : 2
      )
    }
    readToken_question() {
      const e = this.input.charCodeAt(this.state.pos + 1),
        t = this.input.charCodeAt(this.state.pos + 2)
      63 === e
        ? 61 === t
          ? this.finishOp(Mn.assign, 3)
          : this.finishOp(Mn.nullishCoalescing, 2)
        : 46 !== e || (t >= 48 && t <= 57)
        ? (++this.state.pos, this.finishToken(Mn.question))
        : ((this.state.pos += 2), this.finishToken(Mn.questionDot))
    }
    getTokenFromCode(e) {
      switch (e) {
        case 46:
          return void this.readToken_dot()
        case 40:
          return ++this.state.pos, void this.finishToken(Mn.parenL)
        case 41:
          return ++this.state.pos, void this.finishToken(Mn.parenR)
        case 59:
          return ++this.state.pos, void this.finishToken(Mn.semi)
        case 44:
          return ++this.state.pos, void this.finishToken(Mn.comma)
        case 91:
          if (
            this.hasPlugin('recordAndTuple') &&
            124 === this.input.charCodeAt(this.state.pos + 1)
          ) {
            if ('bar' !== this.getPluginOption('recordAndTuple', 'syntaxType'))
              throw this.raise(
                this.state.pos,
                Xn.TupleExpressionBarIncorrectStartSyntaxType
              )
            ;(this.state.pos += 2), this.finishToken(Mn.bracketBarL)
          } else ++this.state.pos, this.finishToken(Mn.bracketL)
          return
        case 93:
          return ++this.state.pos, void this.finishToken(Mn.bracketR)
        case 123:
          if (
            this.hasPlugin('recordAndTuple') &&
            124 === this.input.charCodeAt(this.state.pos + 1)
          ) {
            if ('bar' !== this.getPluginOption('recordAndTuple', 'syntaxType'))
              throw this.raise(
                this.state.pos,
                Xn.RecordExpressionBarIncorrectStartSyntaxType
              )
            ;(this.state.pos += 2), this.finishToken(Mn.braceBarL)
          } else ++this.state.pos, this.finishToken(Mn.braceL)
          return
        case 125:
          return ++this.state.pos, void this.finishToken(Mn.braceR)
        case 58:
          return void (this.hasPlugin('functionBind') &&
          58 === this.input.charCodeAt(this.state.pos + 1)
            ? this.finishOp(Mn.doubleColon, 2)
            : (++this.state.pos, this.finishToken(Mn.colon)))
        case 63:
          return void this.readToken_question()
        case 96:
          return ++this.state.pos, void this.finishToken(Mn.backQuote)
        case 48: {
          const e = this.input.charCodeAt(this.state.pos + 1)
          if (120 === e || 88 === e) return void this.readRadixNumber(16)
          if (111 === e || 79 === e) return void this.readRadixNumber(8)
          if (98 === e || 66 === e) return void this.readRadixNumber(2)
        }
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return void this.readNumber(!1)
        case 34:
        case 39:
          return void this.readString(e)
        case 47:
          return void this.readToken_slash()
        case 37:
        case 42:
          return void this.readToken_mult_modulo(e)
        case 124:
        case 38:
          return void this.readToken_pipe_amp(e)
        case 94:
          return void this.readToken_caret()
        case 43:
        case 45:
          return void this.readToken_plus_min(e)
        case 60:
        case 62:
          return void this.readToken_lt_gt(e)
        case 61:
        case 33:
          return void this.readToken_eq_excl(e)
        case 126:
          return void this.finishOp(Mn.tilde, 1)
        case 64:
          return ++this.state.pos, void this.finishToken(Mn.at)
        case 35:
          return void this.readToken_numberSign()
        case 92:
          return void this.readWord()
        default:
          if (uo(e)) return void this.readWord(e)
      }
      throw this.raise(
        this.state.pos,
        Xn.InvalidOrUnexpectedToken,
        String.fromCodePoint(e)
      )
    }
    finishOp(e, t) {
      const s = this.input.slice(this.state.pos, this.state.pos + t)
      ;(this.state.pos += t), this.finishToken(e, s)
    }
    readRegexp() {
      const e = this.state.start + 1
      let t,
        s,
        { pos: r } = this.state
      for (; ; ++r) {
        if (r >= this.length) throw this.raise(e, Xn.UnterminatedRegExp)
        const i = this.input.charCodeAt(r)
        if (_n(i)) throw this.raise(e, Xn.UnterminatedRegExp)
        if (t) t = !1
        else {
          if (91 === i) s = !0
          else if (93 === i && s) s = !1
          else if (47 === i && !s) break
          t = 92 === i
        }
      }
      const i = this.input.slice(e, r)
      ++r
      let a = ''
      for (; r < this.length; ) {
        const e = this.codePointAtPos(r),
          t = String.fromCharCode(e)
        if (Lo.has(e))
          a.includes(t) && this.raise(r + 1, Xn.DuplicateRegExpFlags)
        else {
          if (!ho(e) && 92 !== e) break
          this.raise(r + 1, Xn.MalformedRegExpFlags)
        }
        ++r, (a += t)
      }
      ;(this.state.pos = r),
        this.finishToken(Mn.regexp, { pattern: i, flags: a })
    }
    readInt(e, t, s, r = !0) {
      const i = this.state.pos,
        a = 16 === e ? Oo.hex : Oo.decBinOct,
        n = 16 === e ? Mo.hex : 10 === e ? Mo.dec : 8 === e ? Mo.oct : Mo.bin
      let o = !1,
        u = 0
      for (let i = 0, h = null == t ? 1 / 0 : t; i < h; ++i) {
        const t = this.input.charCodeAt(this.state.pos)
        let h
        if (95 !== t) {
          if (
            ((h =
              t >= 97
                ? t - 97 + 10
                : t >= 65
                ? t - 65 + 10
                : ko(t)
                ? t - 48
                : 1 / 0),
            h >= e)
          )
            if (this.options.errorRecovery && h <= 9)
              (h = 0), this.raise(this.state.start + i + 2, Xn.InvalidDigit, e)
            else {
              if (!s) break
              ;(h = 0), (o = !0)
            }
          ++this.state.pos, (u = u * e + h)
        } else {
          const e = this.input.charCodeAt(this.state.pos - 1),
            t = this.input.charCodeAt(this.state.pos + 1)
          ;(-1 === n.indexOf(t) ||
            a.indexOf(e) > -1 ||
            a.indexOf(t) > -1 ||
            Number.isNaN(t)) &&
            this.raise(this.state.pos, Xn.UnexpectedNumericSeparator),
            r ||
              this.raise(this.state.pos, Xn.NumericSeparatorInEscapeSequence),
            ++this.state.pos
        }
      }
      return this.state.pos === i ||
        (null != t && this.state.pos - i !== t) ||
        o
        ? null
        : u
    }
    readRadixNumber(e) {
      const t = this.state.pos
      let s = !1
      this.state.pos += 2
      const r = this.readInt(e)
      null == r && this.raise(this.state.start + 2, Xn.InvalidDigit, e)
      const i = this.input.charCodeAt(this.state.pos)
      if (110 === i) ++this.state.pos, (s = !0)
      else if (109 === i) throw this.raise(t, Xn.InvalidDecimal)
      if (uo(this.codePointAtPos(this.state.pos)))
        throw this.raise(this.state.pos, Xn.NumberIdentifier)
      if (s) {
        const e = this.input.slice(t, this.state.pos).replace(/[_n]/g, '')
        this.finishToken(Mn.bigint, e)
      } else this.finishToken(Mn.num, r)
    }
    readNumber(e) {
      const t = this.state.pos
      let s = !1,
        r = !1,
        i = !1,
        a = !1,
        n = !1
      e || null !== this.readInt(10) || this.raise(t, Xn.InvalidNumber)
      const o = this.state.pos - t >= 2 && 48 === this.input.charCodeAt(t)
      if (o) {
        const e = this.input.slice(t, this.state.pos)
        if (
          (this.recordStrictModeErrors(t, Xn.StrictOctalLiteral),
          !this.state.strict)
        ) {
          const s = e.indexOf('_')
          s > 0 && this.raise(s + t, Xn.ZeroDigitNumericSeparator)
        }
        n = o && !/[89]/.test(e)
      }
      let u = this.input.charCodeAt(this.state.pos)
      if (
        (46 !== u ||
          n ||
          (++this.state.pos,
          this.readInt(10),
          (s = !0),
          (u = this.input.charCodeAt(this.state.pos))),
        (69 !== u && 101 !== u) ||
          n ||
          ((u = this.input.charCodeAt(++this.state.pos)),
          (43 !== u && 45 !== u) || ++this.state.pos,
          null === this.readInt(10) &&
            this.raise(t, Xn.InvalidOrMissingExponent),
          (s = !0),
          (a = !0),
          (u = this.input.charCodeAt(this.state.pos))),
        110 === u &&
          ((s || o) && this.raise(t, Xn.InvalidBigIntLiteral),
          ++this.state.pos,
          (r = !0)),
        109 === u &&
          (this.expectPlugin('decimal', this.state.pos),
          (a || o) && this.raise(t, Xn.InvalidDecimal),
          ++this.state.pos,
          (i = !0)),
        uo(this.codePointAtPos(this.state.pos)))
      )
        throw this.raise(this.state.pos, Xn.NumberIdentifier)
      const h = this.input.slice(t, this.state.pos).replace(/[_mn]/g, '')
      if (r) return void this.finishToken(Mn.bigint, h)
      if (i) return void this.finishToken(Mn.decimal, h)
      const c = n ? parseInt(h, 8) : parseFloat(h)
      this.finishToken(Mn.num, c)
    }
    readCodePoint(e) {
      let t
      if (123 === this.input.charCodeAt(this.state.pos)) {
        const s = ++this.state.pos
        if (
          ((t = this.readHexChar(
            this.input.indexOf('}', this.state.pos) - this.state.pos,
            !0,
            e
          )),
          ++this.state.pos,
          null !== t && t > 1114111)
        ) {
          if (!e) return null
          this.raise(s, Xn.InvalidCodePoint)
        }
      } else t = this.readHexChar(4, !1, e)
      return t
    }
    readString(e) {
      let t = '',
        s = ++this.state.pos
      for (;;) {
        if (this.state.pos >= this.length)
          throw this.raise(this.state.start, Xn.UnterminatedString)
        const r = this.input.charCodeAt(this.state.pos)
        if (r === e) break
        if (92 === r)
          (t += this.input.slice(s, this.state.pos)),
            (t += this.readEscapedChar(!1)),
            (s = this.state.pos)
        else if (8232 === r || 8233 === r)
          ++this.state.pos,
            ++this.state.curLine,
            (this.state.lineStart = this.state.pos)
        else {
          if (_n(r)) throw this.raise(this.state.start, Xn.UnterminatedString)
          ++this.state.pos
        }
      }
      ;(t += this.input.slice(s, this.state.pos++)),
        this.finishToken(Mn.string, t)
    }
    readTmplToken() {
      let e = '',
        t = this.state.pos,
        s = !1
      for (;;) {
        if (this.state.pos >= this.length)
          throw this.raise(this.state.start, Xn.UnterminatedTemplate)
        const r = this.input.charCodeAt(this.state.pos)
        if (
          96 === r ||
          (36 === r && 123 === this.input.charCodeAt(this.state.pos + 1))
        )
          return this.state.pos === this.state.start && this.match(Mn.template)
            ? 36 === r
              ? ((this.state.pos += 2), void this.finishToken(Mn.dollarBraceL))
              : (++this.state.pos, void this.finishToken(Mn.backQuote))
            : ((e += this.input.slice(t, this.state.pos)),
              void this.finishToken(Mn.template, s ? null : e))
        if (92 === r) {
          e += this.input.slice(t, this.state.pos)
          const r = this.readEscapedChar(!0)
          null === r ? (s = !0) : (e += r), (t = this.state.pos)
        } else if (_n(r)) {
          switch (
            ((e += this.input.slice(t, this.state.pos)), ++this.state.pos, r)
          ) {
            case 13:
              10 === this.input.charCodeAt(this.state.pos) && ++this.state.pos
            case 10:
              e += '\n'
              break
            default:
              e += String.fromCharCode(r)
          }
          ++this.state.curLine,
            (this.state.lineStart = this.state.pos),
            (t = this.state.pos)
        } else ++this.state.pos
      }
    }
    recordStrictModeErrors(e, t) {
      this.state.strict && !this.state.strictErrors.has(e)
        ? this.raise(e, t)
        : this.state.strictErrors.set(e, t)
    }
    readEscapedChar(e) {
      const t = !e,
        s = this.input.charCodeAt(++this.state.pos)
      switch ((++this.state.pos, s)) {
        case 110:
          return '\n'
        case 114:
          return '\r'
        case 120: {
          const e = this.readHexChar(2, !1, t)
          return null === e ? null : String.fromCharCode(e)
        }
        case 117: {
          const e = this.readCodePoint(t)
          return null === e ? null : String.fromCodePoint(e)
        }
        case 116:
          return '\t'
        case 98:
          return '\b'
        case 118:
          return '\v'
        case 102:
          return '\f'
        case 13:
          10 === this.input.charCodeAt(this.state.pos) && ++this.state.pos
        case 10:
          ;(this.state.lineStart = this.state.pos), ++this.state.curLine
        case 8232:
        case 8233:
          return ''
        case 56:
        case 57:
          if (e) return null
          this.recordStrictModeErrors(
            this.state.pos - 1,
            Xn.StrictNumericEscape
          )
        default:
          if (s >= 48 && s <= 55) {
            const t = this.state.pos - 1
            let s = this.input
                .substr(this.state.pos - 1, 3)
                .match(/^[0-7]+/)[0],
              r = parseInt(s, 8)
            r > 255 && ((s = s.slice(0, -1)), (r = parseInt(s, 8))),
              (this.state.pos += s.length - 1)
            const i = this.input.charCodeAt(this.state.pos)
            if ('0' !== s || 56 === i || 57 === i) {
              if (e) return null
              this.recordStrictModeErrors(t, Xn.StrictNumericEscape)
            }
            return String.fromCharCode(r)
          }
          return String.fromCharCode(s)
      }
    }
    readHexChar(e, t, s) {
      const r = this.state.pos,
        i = this.readInt(16, e, t, !1)
      return (
        null === i &&
          (s
            ? this.raise(r, Xn.InvalidEscapeSequence)
            : (this.state.pos = r - 1)),
        i
      )
    }
    readWord1(e) {
      this.state.containsEsc = !1
      let t = ''
      const s = this.state.pos
      let r = this.state.pos
      for (
        void 0 !== e && (this.state.pos += e <= 65535 ? 1 : 2);
        this.state.pos < this.length;

      ) {
        const e = this.codePointAtPos(this.state.pos)
        if (ho(e)) this.state.pos += e <= 65535 ? 1 : 2
        else {
          if (92 !== e) break
          {
            ;(this.state.containsEsc = !0),
              (t += this.input.slice(r, this.state.pos))
            const e = this.state.pos,
              i = this.state.pos === s ? uo : ho
            if (117 !== this.input.charCodeAt(++this.state.pos)) {
              this.raise(this.state.pos, Xn.MissingUnicodeEscape),
                (r = this.state.pos - 1)
              continue
            }
            ++this.state.pos
            const a = this.readCodePoint(!0)
            null !== a &&
              (i(a) || this.raise(e, Xn.EscapedCharNotAnIdentifier),
              (t += String.fromCodePoint(a))),
              (r = this.state.pos)
          }
        }
      }
      return t + this.input.slice(r, this.state.pos)
    }
    readWord(e) {
      const t = this.readWord1(e),
        s = kn.get(t) || Mn.name
      this.finishToken(s, t)
    }
    checkKeywordEscapes() {
      const e = this.state.type.keyword
      e &&
        this.state.containsEsc &&
        this.raise(this.state.start, Xn.InvalidEscapedReservedWord, e)
    }
    updateContext(e) {
      var t, s
      null == (t = (s = this.state.type).updateContext) ||
        t.call(s, this.state.context)
    }
  } {
    addExtra(e, t, s) {
      if (!e) return
      ;(e.extra = e.extra || {})[t] = s
    }
    isRelational(e) {
      return this.match(Mn.relational) && this.state.value === e
    }
    expectRelational(e) {
      this.isRelational(e) ? this.next() : this.unexpected(null, Mn.relational)
    }
    isContextual(e) {
      return (
        this.match(Mn.name) && this.state.value === e && !this.state.containsEsc
      )
    }
    isUnparsedContextual(e, t) {
      const s = e + t.length
      if (this.input.slice(e, s) === t) {
        const e = this.input.charCodeAt(s)
        return !(ho(e) || 55296 == (64512 & e))
      }
      return !1
    }
    isLookaheadContextual(e) {
      const t = this.nextTokenStart()
      return this.isUnparsedContextual(t, e)
    }
    eatContextual(e) {
      return this.isContextual(e) && this.eat(Mn.name)
    }
    expectContextual(e, t) {
      this.eatContextual(e) || this.unexpected(null, t)
    }
    canInsertSemicolon() {
      return (
        this.match(Mn.eof) ||
        this.match(Mn.braceR) ||
        this.hasPrecedingLineBreak()
      )
    }
    hasPrecedingLineBreak() {
      return Rn.test(this.input.slice(this.state.lastTokEnd, this.state.start))
    }
    hasFollowingLineBreak() {
      return (qn.lastIndex = this.state.end), qn.test(this.input)
    }
    isLineTerminator() {
      return this.eat(Mn.semi) || this.canInsertSemicolon()
    }
    semicolon(e = !0) {
      ;(e ? this.isLineTerminator() : this.eat(Mn.semi)) ||
        this.raise(this.state.lastTokEnd, Xn.MissingSemicolon)
    }
    expect(e, t) {
      this.eat(e) || this.unexpected(t, e)
    }
    assertNoSpace(e = 'Unexpected space.') {
      this.state.start > this.state.lastTokEnd &&
        this.raise(this.state.lastTokEnd, {
          code: Kn.SyntaxError,
          reasonCode: 'UnexpectedSpace',
          template: e
        })
    }
    unexpected(
      e,
      t = {
        code: Kn.SyntaxError,
        reasonCode: 'UnexpectedToken',
        template: 'Unexpected token'
      }
    ) {
      throw (
        (t instanceof vn &&
          (t = {
            code: Kn.SyntaxError,
            reasonCode: 'UnexpectedToken',
            template: `Unexpected token, expected "${t.label}"`
          }),
        this.raise(null != e ? e : this.state.start, t))
      )
    }
    expectPlugin(e, t) {
      if (!this.hasPlugin(e))
        throw this.raiseWithData(
          null != t ? t : this.state.start,
          { missingPlugin: [e] },
          `This experimental syntax requires enabling the parser plugin: '${e}'`
        )
      return !0
    }
    expectOnePlugin(e, t) {
      if (!e.some((e) => this.hasPlugin(e)))
        throw this.raiseWithData(
          null != t ? t : this.state.start,
          { missingPlugin: e },
          `This experimental syntax requires enabling one of the following parser plugin(s): '${e.join(
            ', '
          )}'`
        )
    }
    tryParse(e, t = this.state.clone()) {
      const s = { node: null }
      try {
        const r = e((e = null) => {
          throw ((s.node = e), s)
        })
        if (this.state.errors.length > t.errors.length) {
          const e = this.state
          return (
            (this.state = t),
            (this.state.tokensLength = e.tokensLength),
            {
              node: r,
              error: e.errors[t.errors.length],
              thrown: !1,
              aborted: !1,
              failState: e
            }
          )
        }
        return {
          node: r,
          error: null,
          thrown: !1,
          aborted: !1,
          failState: null
        }
      } catch (e) {
        const r = this.state
        if (((this.state = t), e instanceof SyntaxError))
          return { node: null, error: e, thrown: !0, aborted: !1, failState: r }
        if (e === s)
          return {
            node: s.node,
            error: null,
            thrown: !1,
            aborted: !0,
            failState: r
          }
        throw e
      }
    }
    checkExpressionErrors(e, t) {
      if (!e) return !1
      const { shorthandAssign: s, doubleProto: r, optionalParameters: i } = e
      if (!t) return s >= 0 || r >= 0 || i >= 0
      s >= 0 && this.unexpected(s),
        r >= 0 && this.raise(r, Xn.DuplicateProto),
        i >= 0 && this.unexpected(i)
    }
    isLiteralPropertyName() {
      return (
        this.match(Mn.name) ||
        !!this.state.type.keyword ||
        this.match(Mn.string) ||
        this.match(Mn.num) ||
        this.match(Mn.bigint) ||
        this.match(Mn.decimal)
      )
    }
    isPrivateName(e) {
      return 'PrivateName' === e.type
    }
    getPrivateNameSV(e) {
      return e.id.name
    }
    hasPropertyAsPrivateName(e) {
      return (
        ('MemberExpression' === e.type ||
          'OptionalMemberExpression' === e.type) &&
        this.isPrivateName(e.property)
      )
    }
    isOptionalChain(e) {
      return (
        'OptionalMemberExpression' === e.type ||
        'OptionalCallExpression' === e.type
      )
    }
    isObjectProperty(e) {
      return 'ObjectProperty' === e.type
    }
    isObjectMethod(e) {
      return 'ObjectMethod' === e.type
    }
    initializeScopes(e = 'module' === this.options.sourceType) {
      const t = this.state.labels
      this.state.labels = []
      const s = this.exportedIdentifiers
      this.exportedIdentifiers = new Set()
      const r = this.inModule
      this.inModule = e
      const i = this.scope,
        a = this.getScopeHandler()
      this.scope = new a(this.raise.bind(this), this.inModule)
      const n = this.prodParam
      this.prodParam = new Vo()
      const o = this.classScope
      this.classScope = new _o(this.raise.bind(this))
      const u = this.expressionScope
      return (
        (this.expressionScope = new $o(this.raise.bind(this))),
        () => {
          ;(this.state.labels = t),
            (this.exportedIdentifiers = s),
            (this.inModule = r),
            (this.scope = i),
            (this.prodParam = n),
            (this.classScope = o),
            (this.expressionScope = u)
        }
      )
    }
    enterInitialScopes() {
      let e = 0
      this.inModule && (e |= 2), this.scope.enter(1), this.prodParam.enter(e)
    }
  } {
    startNode() {
      return new Go(this, this.state.start, this.state.startLoc)
    }
    startNodeAt(e, t) {
      return new Go(this, e, t)
    }
    startNodeAtNode(e) {
      return this.startNodeAt(e.start, e.loc.start)
    }
    finishNode(e, t) {
      return this.finishNodeAt(
        e,
        t,
        this.state.lastTokEnd,
        this.state.lastTokEndLoc
      )
    }
    finishNodeAt(e, t, s, r) {
      return (
        (e.type = t),
        (e.end = s),
        (e.loc.end = r),
        this.options.ranges && (e.range[1] = s),
        this.options.attachComment && this.processComment(e),
        e
      )
    }
    resetStartLocation(e, t, s) {
      ;(e.start = t), (e.loc.start = s), this.options.ranges && (e.range[0] = t)
    }
    resetEndLocation(
      e,
      t = this.state.lastTokEnd,
      s = this.state.lastTokEndLoc
    ) {
      ;(e.end = t), (e.loc.end = s), this.options.ranges && (e.range[1] = t)
    }
    resetStartLocationFromNode(e, t) {
      this.resetStartLocation(e, t.start, t.loc.start)
    }
  } {
    toAssignable(e, t = !1) {
      var s, r
      let i
      switch (
        (('ParenthesizedExpression' === e.type ||
          (null != (s = e.extra) && s.parenthesized)) &&
          ((i = bu(e)),
          t
            ? 'Identifier' === i.type
              ? this.expressionScope.recordParenthesizedIdentifierError(
                  e.start,
                  Xn.InvalidParenthesizedAssignment
                )
              : 'MemberExpression' !== i.type &&
                this.raise(e.start, Xn.InvalidParenthesizedAssignment)
            : this.raise(e.start, Xn.InvalidParenthesizedAssignment)),
        e.type)
      ) {
        case 'Identifier':
        case 'ObjectPattern':
        case 'ArrayPattern':
        case 'AssignmentPattern':
        case 'RestElement':
          break
        case 'ObjectExpression':
          e.type = 'ObjectPattern'
          for (let s = 0, r = e.properties.length, i = r - 1; s < r; s++) {
            var a
            const r = e.properties[s],
              n = s === i
            this.toAssignableObjectExpressionProp(r, n, t),
              n &&
                'RestElement' === r.type &&
                null != (a = e.extra) &&
                a.trailingComma &&
                this.raiseRestNotLast(e.extra.trailingComma)
          }
          break
        case 'ObjectProperty':
          this.toAssignable(e.value, t)
          break
        case 'SpreadElement': {
          this.checkToRestConversion(e), (e.type = 'RestElement')
          const s = e.argument
          this.toAssignable(s, t)
          break
        }
        case 'ArrayExpression':
          ;(e.type = 'ArrayPattern'),
            this.toAssignableList(
              e.elements,
              null == (r = e.extra) ? void 0 : r.trailingComma,
              t
            )
          break
        case 'AssignmentExpression':
          '=' !== e.operator &&
            this.raise(e.left.end, Xn.MissingEqInAssignment),
            (e.type = 'AssignmentPattern'),
            delete e.operator,
            this.toAssignable(e.left, t)
          break
        case 'ParenthesizedExpression':
          this.toAssignable(i, t)
      }
      return e
    }
    toAssignableObjectExpressionProp(e, t, s) {
      if ('ObjectMethod' === e.type) {
        const t =
          'get' === e.kind || 'set' === e.kind
            ? Xn.PatternHasAccessor
            : Xn.PatternHasMethod
        this.raise(e.key.start, t)
      } else 'SpreadElement' !== e.type || t ? this.toAssignable(e, s) : this.raiseRestNotLast(e.start)
    }
    toAssignableList(e, t, s) {
      let r = e.length
      if (r) {
        const i = e[r - 1]
        if ('RestElement' === (null == i ? void 0 : i.type)) --r
        else if ('SpreadElement' === (null == i ? void 0 : i.type)) {
          i.type = 'RestElement'
          let e = i.argument
          this.toAssignable(e, s),
            (e = bu(e)),
            'Identifier' !== e.type &&
              'MemberExpression' !== e.type &&
              'ArrayPattern' !== e.type &&
              'ObjectPattern' !== e.type &&
              this.unexpected(e.start),
            t && this.raiseTrailingCommaAfterRest(t),
            --r
        }
      }
      for (let t = 0; t < r; t++) {
        const r = e[t]
        r &&
          (this.toAssignable(r, s),
          'RestElement' === r.type && this.raiseRestNotLast(r.start))
      }
      return e
    }
    isAssignable(e, t) {
      switch (e.type) {
        case 'Identifier':
        case 'ObjectPattern':
        case 'ArrayPattern':
        case 'AssignmentPattern':
        case 'RestElement':
          return !0
        case 'ObjectExpression': {
          const t = e.properties.length - 1
          return e.properties.every(
            (e, s) =>
              'ObjectMethod' !== e.type &&
              (s === t || 'SpreadElement' !== e.type) &&
              this.isAssignable(e)
          )
        }
        case 'ObjectProperty':
          return this.isAssignable(e.value)
        case 'SpreadElement':
          return this.isAssignable(e.argument)
        case 'ArrayExpression':
          return e.elements.every((e) => null === e || this.isAssignable(e))
        case 'AssignmentExpression':
          return '=' === e.operator
        case 'ParenthesizedExpression':
          return this.isAssignable(e.expression)
        case 'MemberExpression':
        case 'OptionalMemberExpression':
          return !t
        default:
          return !1
      }
    }
    toReferencedList(e, t) {
      return e
    }
    toReferencedListDeep(e, t) {
      this.toReferencedList(e, t)
      for (const t of e)
        'ArrayExpression' === (null == t ? void 0 : t.type) &&
          this.toReferencedListDeep(t.elements)
    }
    parseSpread(e, t) {
      const s = this.startNode()
      return (
        this.next(),
        (s.argument = this.parseMaybeAssignAllowIn(e, void 0, t)),
        this.finishNode(s, 'SpreadElement')
      )
    }
    parseRestBinding() {
      const e = this.startNode()
      return (
        this.next(),
        (e.argument = this.parseBindingAtom()),
        this.finishNode(e, 'RestElement')
      )
    }
    parseBindingAtom() {
      switch (this.state.type) {
        case Mn.bracketL: {
          const e = this.startNode()
          return (
            this.next(),
            (e.elements = this.parseBindingList(Mn.bracketR, 93, !0)),
            this.finishNode(e, 'ArrayPattern')
          )
        }
        case Mn.braceL:
          return this.parseObjectLike(Mn.braceR, !0)
      }
      return this.parseIdentifier()
    }
    parseBindingList(e, t, s, r) {
      const i = []
      let a = !0
      for (; !this.eat(e); )
        if ((a ? (a = !1) : this.expect(Mn.comma), s && this.match(Mn.comma)))
          i.push(null)
        else {
          if (this.eat(e)) break
          if (this.match(Mn.ellipsis)) {
            i.push(this.parseAssignableListItemTypes(this.parseRestBinding())),
              this.checkCommaAfterRest(t),
              this.expect(e)
            break
          }
          {
            const e = []
            for (
              this.match(Mn.at) &&
              this.hasPlugin('decorators') &&
              this.raise(this.state.start, Xn.UnsupportedParameterDecorator);
              this.match(Mn.at);

            )
              e.push(this.parseDecorator())
            i.push(this.parseAssignableListItem(r, e))
          }
        }
      return i
    }
    parseAssignableListItem(e, t) {
      const s = this.parseMaybeDefault()
      this.parseAssignableListItemTypes(s)
      const r = this.parseMaybeDefault(s.start, s.loc.start, s)
      return t.length && (s.decorators = t), r
    }
    parseAssignableListItemTypes(e) {
      return e
    }
    parseMaybeDefault(e, t, s) {
      var r, i, a
      if (
        ((t = null != (r = t) ? r : this.state.startLoc),
        (e = null != (i = e) ? i : this.state.start),
        (s = null != (a = s) ? a : this.parseBindingAtom()),
        !this.eat(Mn.eq))
      )
        return s
      const n = this.startNodeAt(e, t)
      return (
        (n.left = s),
        (n.right = this.parseMaybeAssignAllowIn()),
        this.finishNode(n, 'AssignmentPattern')
      )
    }
    checkLVal(e, t, s = 64, r, i, a = !1) {
      switch (e.type) {
        case 'Identifier': {
          const { name: t } = e
          this.state.strict &&
            (a ? Eo(t, this.inModule) : Ao(t)) &&
            this.raise(
              e.start,
              64 === s ? Xn.StrictEvalArguments : Xn.StrictEvalArgumentsBinding,
              t
            ),
            r && (r.has(t) ? this.raise(e.start, Xn.ParamDupe) : r.add(t)),
            i && 'let' === t && this.raise(e.start, Xn.LetInLexicalBinding),
            64 & s || this.scope.declareName(t, s, e.start)
          break
        }
        case 'MemberExpression':
          64 !== s && this.raise(e.start, Xn.InvalidPropertyBindingPattern)
          break
        case 'ObjectPattern':
          for (let t of e.properties) {
            if (this.isObjectProperty(t)) t = t.value
            else if (this.isObjectMethod(t)) continue
            this.checkLVal(t, 'object destructuring pattern', s, r, i)
          }
          break
        case 'ArrayPattern':
          for (const t of e.elements)
            t && this.checkLVal(t, 'array destructuring pattern', s, r, i)
          break
        case 'AssignmentPattern':
          this.checkLVal(e.left, 'assignment pattern', s, r)
          break
        case 'RestElement':
          this.checkLVal(e.argument, 'rest element', s, r)
          break
        case 'ParenthesizedExpression':
          this.checkLVal(e.expression, 'parenthesized expression', s, r)
          break
        default:
          this.raise(
            e.start,
            64 === s ? Xn.InvalidLhs : Xn.InvalidLhsBinding,
            t
          )
      }
    }
    checkToRestConversion(e) {
      'Identifier' !== e.argument.type &&
        'MemberExpression' !== e.argument.type &&
        this.raise(e.argument.start, Xn.InvalidRestAssignmentPattern)
    }
    checkCommaAfterRest(e) {
      this.match(Mn.comma) &&
        (this.lookaheadCharCode() === e
          ? this.raiseTrailingCommaAfterRest(this.state.start)
          : this.raiseRestNotLast(this.state.start))
    }
    raiseRestNotLast(e) {
      throw this.raise(e, Xn.ElementAfterRest)
    }
    raiseTrailingCommaAfterRest(e) {
      this.raise(e, Xn.RestTrailingComma)
    }
  } {
    checkProto(e, t, s, r) {
      if (
        'SpreadElement' === e.type ||
        this.isObjectMethod(e) ||
        e.computed ||
        e.shorthand
      )
        return
      const i = e.key
      if ('__proto__' === ('Identifier' === i.type ? i.name : i.value)) {
        if (t) return void this.raise(i.start, Xn.RecordNoProto)
        s.used &&
          (r
            ? -1 === r.doubleProto && (r.doubleProto = i.start)
            : this.raise(i.start, Xn.DuplicateProto)),
          (s.used = !0)
      }
    }
    shouldExitDescending(e, t) {
      return 'ArrowFunctionExpression' === e.type && e.start === t
    }
    getExpression() {
      this.enterInitialScopes(), this.nextToken()
      const e = this.parseExpression()
      return (
        this.match(Mn.eof) || this.unexpected(),
        this.finalizeRemainingComments(),
        (e.comments = this.state.comments),
        (e.errors = this.state.errors),
        this.options.tokens && (e.tokens = this.tokens),
        e
      )
    }
    parseExpression(e, t) {
      return e
        ? this.disallowInAnd(() => this.parseExpressionBase(t))
        : this.allowInAnd(() => this.parseExpressionBase(t))
    }
    parseExpressionBase(e) {
      const t = this.state.start,
        s = this.state.startLoc,
        r = this.parseMaybeAssign(e)
      if (this.match(Mn.comma)) {
        const i = this.startNodeAt(t, s)
        for (i.expressions = [r]; this.eat(Mn.comma); )
          i.expressions.push(this.parseMaybeAssign(e))
        return (
          this.toReferencedList(i.expressions),
          this.finishNode(i, 'SequenceExpression')
        )
      }
      return r
    }
    parseMaybeAssignDisallowIn(e, t) {
      return this.disallowInAnd(() => this.parseMaybeAssign(e, t))
    }
    parseMaybeAssignAllowIn(e, t) {
      return this.allowInAnd(() => this.parseMaybeAssign(e, t))
    }
    setOptionalParametersError(e, t) {
      var s
      e.optionalParameters =
        null != (s = null == t ? void 0 : t.pos) ? s : this.state.start
    }
    parseMaybeAssign(e, t) {
      const s = this.state.start,
        r = this.state.startLoc
      if (this.isContextual('yield') && this.prodParam.hasYield) {
        let e = this.parseYield()
        return t && (e = t.call(this, e, s, r)), e
      }
      let i
      e ? (i = !1) : ((e = new Wo()), (i = !0)),
        (this.match(Mn.parenL) || this.match(Mn.name)) &&
          (this.state.potentialArrowAt = this.state.start)
      let a = this.parseMaybeConditional(e)
      if ((t && (a = t.call(this, a, s, r)), this.state.type.isAssign)) {
        const t = this.startNodeAt(s, r),
          i = this.state.value
        t.operator = i
        if (
          'BinaryExpression' === a.type &&
          '|>' === a.operator &&
          'hack' === this.getPluginOption('pipelineOperator', 'proposal')
        )
          throw this.raise(this.state.start, Xn.PipeBodyIsTighter, i)
        return (
          this.match(Mn.eq)
            ? ((t.left = this.toAssignable(a, !0)), (e.doubleProto = -1))
            : (t.left = a),
          e.shorthandAssign >= t.left.start && (e.shorthandAssign = -1),
          this.checkLVal(a, 'assignment expression'),
          this.next(),
          (t.right = this.parseMaybeAssign()),
          this.finishNode(t, 'AssignmentExpression')
        )
      }
      return i && this.checkExpressionErrors(e, !0), a
    }
    parseMaybeConditional(e) {
      const t = this.state.start,
        s = this.state.startLoc,
        r = this.state.potentialArrowAt,
        i = this.parseExprOps(e)
      return this.shouldExitDescending(i, r)
        ? i
        : this.parseConditional(i, t, s, e)
    }
    parseConditional(e, t, s, r) {
      if (this.eat(Mn.question)) {
        const r = this.startNodeAt(t, s)
        return (
          (r.test = e),
          (r.consequent = this.parseMaybeAssignAllowIn()),
          this.expect(Mn.colon),
          (r.alternate = this.parseMaybeAssign()),
          this.finishNode(r, 'ConditionalExpression')
        )
      }
      return e
    }
    parseMaybeUnaryOrPrivate(e) {
      return this.match(Mn.privateName)
        ? this.parsePrivateName()
        : this.parseMaybeUnary(e)
    }
    parseExprOps(e) {
      const t = this.state.start,
        s = this.state.startLoc,
        r = this.state.potentialArrowAt,
        i = this.parseMaybeUnaryOrPrivate(e)
      return this.shouldExitDescending(i, r) ? i : this.parseExprOp(i, t, s, -1)
    }
    parseExprOp(e, t, s, r) {
      if (this.isPrivateName(e)) {
        const t = this.getPrivateNameSV(e),
          { start: s } = e
        ;(r >= Mn._in.binop || !this.prodParam.hasIn || !this.match(Mn._in)) &&
          this.raise(s, Xn.PrivateInExpectedIn, t),
          this.classScope.usePrivateName(t, s)
      }
      let i = this.state.type.binop
      if (null != i && (this.prodParam.hasIn || !this.match(Mn._in)) && i > r) {
        const a = this.state.type
        if (a === Mn.pipeline) {
          if (
            (this.expectPlugin('pipelineOperator'),
            this.state.inFSharpPipelineDirectBody)
          )
            return e
          this.checkPipelineAtInfixOperator(e, t)
        }
        const n = this.startNodeAt(t, s)
        ;(n.left = e), (n.operator = this.state.value)
        const o = a === Mn.logicalOR || a === Mn.logicalAND,
          u = a === Mn.nullishCoalescing
        if (
          (u && (i = Mn.logicalAND.binop),
          this.next(),
          a === Mn.pipeline &&
            'minimal' ===
              this.getPluginOption('pipelineOperator', 'proposal') &&
            this.match(Mn.name) &&
            'await' === this.state.value &&
            this.prodParam.hasAwait)
        )
          throw this.raise(
            this.state.start,
            Xn.UnexpectedAwaitAfterPipelineBody
          )
        ;(n.right = this.parseExprOpRightExpr(a, i)),
          this.finishNode(n, o || u ? 'LogicalExpression' : 'BinaryExpression')
        const h = this.state.type
        if (
          (u && (h === Mn.logicalOR || h === Mn.logicalAND)) ||
          (o && h === Mn.nullishCoalescing)
        )
          throw this.raise(this.state.start, Xn.MixingCoalesceWithLogical)
        return this.parseExprOp(n, t, s, r)
      }
      return e
    }
    parseExprOpRightExpr(e, t) {
      const s = this.state.start,
        r = this.state.startLoc
      switch (e) {
        case Mn.pipeline:
          switch (this.getPluginOption('pipelineOperator', 'proposal')) {
            case 'hack':
              return this.withTopicBindingContext(() => {
                const r = this.parseHackPipeBody(e, t)
                return this.checkHackPipeBodyEarlyErrors(s), r
              })
            case 'smart':
              return this.withTopicBindingContext(() => {
                const i = this.parseHackPipeBody(e, t)
                return this.parseSmartPipelineBodyInStyle(i, s, r)
              })
            case 'fsharp':
              return this.withSoloAwaitPermittingContext(() =>
                this.parseFSharpPipelineBody(t)
              )
          }
        default:
          return this.parseExprOpBaseRightExpr(e, t)
      }
    }
    parseExprOpBaseRightExpr(e, t) {
      const s = this.state.start,
        r = this.state.startLoc
      return this.parseExprOp(
        this.parseMaybeUnaryOrPrivate(),
        s,
        r,
        e.rightAssociative ? t - 1 : t
      )
    }
    parseHackPipeBody(e, t) {
      if (this.prodParam.hasYield && this.isContextual('yield'))
        throw this.raise(
          this.state.start,
          Xn.PipeBodyIsTighter,
          this.state.value
        )
      return this.parseExprOpBaseRightExpr(e, t)
    }
    checkExponentialAfterUnary(e) {
      this.match(Mn.exponent) &&
        this.raise(e.argument.start, Xn.UnexpectedTokenUnaryExponentiation)
    }
    parseMaybeUnary(e, t) {
      const s = this.state.start,
        r = this.state.startLoc,
        i = this.isContextual('await')
      if (i && this.isAwaitAllowed()) {
        this.next()
        const e = this.parseAwait(s, r)
        return t || this.checkExponentialAfterUnary(e), e
      }
      const a = this.match(Mn.incDec),
        n = this.startNode()
      if (this.state.type.prefix) {
        ;(n.operator = this.state.value),
          (n.prefix = !0),
          this.match(Mn._throw) && this.expectPlugin('throwExpressions')
        const s = this.match(Mn._delete)
        if (
          (this.next(),
          (n.argument = this.parseMaybeUnary(null, !0)),
          this.checkExpressionErrors(e, !0),
          this.state.strict && s)
        ) {
          const e = n.argument
          'Identifier' === e.type
            ? this.raise(n.start, Xn.StrictDelete)
            : this.hasPropertyAsPrivateName(e) &&
              this.raise(n.start, Xn.DeletePrivateField)
        }
        if (!a)
          return (
            t || this.checkExponentialAfterUnary(n),
            this.finishNode(n, 'UnaryExpression')
          )
      }
      const o = this.parseUpdate(n, a, e)
      if (i) {
        if (
          (this.hasPlugin('v8intrinsic')
            ? this.state.type.startsExpr
            : this.state.type.startsExpr && !this.match(Mn.modulo)) &&
          !this.isAmbiguousAwait()
        )
          return (
            this.raiseOverwrite(s, Xn.AwaitNotInAsyncContext),
            this.parseAwait(s, r)
          )
      }
      return o
    }
    parseUpdate(e, t, s) {
      if (t)
        return (
          this.checkLVal(e.argument, 'prefix operation'),
          this.finishNode(e, 'UpdateExpression')
        )
      const r = this.state.start,
        i = this.state.startLoc
      let a = this.parseExprSubscripts(s)
      if (this.checkExpressionErrors(s, !1)) return a
      for (; this.state.type.postfix && !this.canInsertSemicolon(); ) {
        const e = this.startNodeAt(r, i)
        ;(e.operator = this.state.value),
          (e.prefix = !1),
          (e.argument = a),
          this.checkLVal(a, 'postfix operation'),
          this.next(),
          (a = this.finishNode(e, 'UpdateExpression'))
      }
      return a
    }
    parseExprSubscripts(e) {
      const t = this.state.start,
        s = this.state.startLoc,
        r = this.state.potentialArrowAt,
        i = this.parseExprAtom(e)
      return this.shouldExitDescending(i, r) ? i : this.parseSubscripts(i, t, s)
    }
    parseSubscripts(e, t, s, r) {
      const i = {
        optionalChainMember: !1,
        maybeAsyncArrow: this.atPossibleAsyncArrow(e),
        stop: !1
      }
      do {
        ;(e = this.parseSubscript(e, t, s, r, i)), (i.maybeAsyncArrow = !1)
      } while (!i.stop)
      return e
    }
    parseSubscript(e, t, s, r, i) {
      if (!r && this.eat(Mn.doubleColon)) return this.parseBind(e, t, s, r, i)
      if (this.match(Mn.backQuote))
        return this.parseTaggedTemplateExpression(e, t, s, i)
      let a = !1
      if (this.match(Mn.questionDot)) {
        if (r && 40 === this.lookaheadCharCode()) return (i.stop = !0), e
        ;(i.optionalChainMember = a = !0), this.next()
      }
      if (!r && this.match(Mn.parenL))
        return this.parseCoverCallAndAsyncArrowHead(e, t, s, i, a)
      {
        const r = this.eat(Mn.bracketL)
        return r || a || this.eat(Mn.dot)
          ? this.parseMember(e, t, s, i, r, a)
          : ((i.stop = !0), e)
      }
    }
    parseMember(e, t, s, r, i, a) {
      const n = this.startNodeAt(t, s)
      ;(n.object = e), (n.computed = i)
      const o = !i && this.match(Mn.privateName) && this.state.value,
        u = i
          ? this.parseExpression()
          : o
          ? this.parsePrivateName()
          : this.parseIdentifier(!0)
      return (
        !1 !== o &&
          ('Super' === n.object.type && this.raise(t, Xn.SuperPrivateField),
          this.classScope.usePrivateName(o, u.start)),
        (n.property = u),
        i && this.expect(Mn.bracketR),
        r.optionalChainMember
          ? ((n.optional = a), this.finishNode(n, 'OptionalMemberExpression'))
          : this.finishNode(n, 'MemberExpression')
      )
    }
    parseBind(e, t, s, r, i) {
      const a = this.startNodeAt(t, s)
      return (
        (a.object = e),
        (a.callee = this.parseNoCallExpr()),
        (i.stop = !0),
        this.parseSubscripts(this.finishNode(a, 'BindExpression'), t, s, r)
      )
    }
    parseCoverCallAndAsyncArrowHead(e, t, s, r, i) {
      const a = this.state.maybeInArrowParameters
      let n = null
      ;(this.state.maybeInArrowParameters = !0), this.next()
      let o = this.startNodeAt(t, s)
      return (
        (o.callee = e),
        r.maybeAsyncArrow &&
          (this.expressionScope.enter(new qo(2)), (n = new Wo())),
        r.optionalChainMember && (o.optional = i),
        (o.arguments = i
          ? this.parseCallExpressionArguments(Mn.parenR)
          : this.parseCallExpressionArguments(
              Mn.parenR,
              'Import' === e.type,
              'Super' !== e.type,
              o,
              n
            )),
        this.finishCallExpression(o, r.optionalChainMember),
        r.maybeAsyncArrow && this.shouldParseAsyncArrow() && !i
          ? ((r.stop = !0),
            this.expressionScope.validateAsPattern(),
            this.expressionScope.exit(),
            (o = this.parseAsyncArrowFromCallExpression(
              this.startNodeAt(t, s),
              o
            )))
          : (r.maybeAsyncArrow &&
              (this.checkExpressionErrors(n, !0), this.expressionScope.exit()),
            this.toReferencedArguments(o)),
        (this.state.maybeInArrowParameters = a),
        o
      )
    }
    toReferencedArguments(e, t) {
      this.toReferencedListDeep(e.arguments, t)
    }
    parseTaggedTemplateExpression(e, t, s, r) {
      const i = this.startNodeAt(t, s)
      return (
        (i.tag = e),
        (i.quasi = this.parseTemplate(!0)),
        r.optionalChainMember && this.raise(t, Xn.OptionalChainingNoTemplate),
        this.finishNode(i, 'TaggedTemplateExpression')
      )
    }
    atPossibleAsyncArrow(e) {
      return (
        'Identifier' === e.type &&
        'async' === e.name &&
        this.state.lastTokEnd === e.end &&
        !this.canInsertSemicolon() &&
        e.end - e.start == 5 &&
        e.start === this.state.potentialArrowAt
      )
    }
    finishCallExpression(e, t) {
      if ('Import' === e.callee.type)
        if (
          (2 === e.arguments.length &&
            (this.hasPlugin('moduleAttributes') ||
              this.expectPlugin('importAssertions')),
          0 === e.arguments.length || e.arguments.length > 2)
        )
          this.raise(
            e.start,
            Xn.ImportCallArity,
            this.hasPlugin('importAssertions') ||
              this.hasPlugin('moduleAttributes')
              ? 'one or two arguments'
              : 'one argument'
          )
        else
          for (const t of e.arguments)
            'SpreadElement' === t.type &&
              this.raise(t.start, Xn.ImportCallSpreadArgument)
      return this.finishNode(e, t ? 'OptionalCallExpression' : 'CallExpression')
    }
    parseCallExpressionArguments(e, t, s, r, i) {
      const a = []
      let n = !0
      const o = this.state.inFSharpPipelineDirectBody
      for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(e); ) {
        if (n) n = !1
        else if ((this.expect(Mn.comma), this.match(e))) {
          !t ||
            this.hasPlugin('importAssertions') ||
            this.hasPlugin('moduleAttributes') ||
            this.raise(
              this.state.lastTokStart,
              Xn.ImportCallArgumentTrailingComma
            ),
            r && this.addExtra(r, 'trailingComma', this.state.lastTokStart),
            this.next()
          break
        }
        a.push(this.parseExprListItem(!1, i, s))
      }
      return (this.state.inFSharpPipelineDirectBody = o), a
    }
    shouldParseAsyncArrow() {
      return this.match(Mn.arrow) && !this.canInsertSemicolon()
    }
    parseAsyncArrowFromCallExpression(e, t) {
      var s
      return (
        this.resetPreviousNodeTrailingComments(t),
        this.expect(Mn.arrow),
        this.parseArrowExpression(
          e,
          t.arguments,
          !0,
          null == (s = t.extra) ? void 0 : s.trailingComma
        ),
        Wn(e, t.innerComments),
        Wn(e, t.callee.trailingComments),
        e
      )
    }
    parseNoCallExpr() {
      const e = this.state.start,
        t = this.state.startLoc
      return this.parseSubscripts(this.parseExprAtom(), e, t, !0)
    }
    parseExprAtom(e) {
      let t
      switch (this.state.type) {
        case Mn._super:
          return this.parseSuper()
        case Mn._import:
          return (
            (t = this.startNode()),
            this.next(),
            this.match(Mn.dot)
              ? this.parseImportMetaProperty(t)
              : (this.match(Mn.parenL) ||
                  this.raise(this.state.lastTokStart, Xn.UnsupportedImport),
                this.finishNode(t, 'Import'))
          )
        case Mn._this:
          return (
            (t = this.startNode()),
            this.next(),
            this.finishNode(t, 'ThisExpression')
          )
        case Mn.name: {
          if (
            this.isContextual('module') &&
            123 === this.lookaheadCharCode() &&
            !this.hasFollowingLineBreak()
          )
            return this.parseModuleExpression()
          const e = this.state.potentialArrowAt === this.state.start,
            t = this.state.containsEsc,
            s = this.parseIdentifier()
          if (!t && 'async' === s.name && !this.canInsertSemicolon()) {
            if (this.match(Mn._function))
              return (
                this.resetPreviousNodeTrailingComments(s),
                this.next(),
                this.parseFunction(this.startNodeAtNode(s), void 0, !0)
              )
            if (this.match(Mn.name))
              return 61 === this.lookaheadCharCode()
                ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(s))
                : s
            if (this.match(Mn._do))
              return (
                this.resetPreviousNodeTrailingComments(s),
                this.parseDo(this.startNodeAtNode(s), !0)
              )
          }
          return e && this.match(Mn.arrow) && !this.canInsertSemicolon()
            ? (this.next(),
              this.parseArrowExpression(this.startNodeAtNode(s), [s], !1))
            : s
        }
        case Mn._do:
          return this.parseDo(this.startNode(), !1)
        case Mn.slash:
        case Mn.slashAssign:
          return this.readRegexp(), this.parseRegExpLiteral(this.state.value)
        case Mn.num:
          return this.parseNumericLiteral(this.state.value)
        case Mn.bigint:
          return this.parseBigIntLiteral(this.state.value)
        case Mn.decimal:
          return this.parseDecimalLiteral(this.state.value)
        case Mn.string:
          return this.parseStringLiteral(this.state.value)
        case Mn._null:
          return this.parseNullLiteral()
        case Mn._true:
          return this.parseBooleanLiteral(!0)
        case Mn._false:
          return this.parseBooleanLiteral(!1)
        case Mn.parenL: {
          const e = this.state.potentialArrowAt === this.state.start
          return this.parseParenAndDistinguishExpression(e)
        }
        case Mn.bracketBarL:
        case Mn.bracketHashL:
          return this.parseArrayLike(
            this.state.type === Mn.bracketBarL ? Mn.bracketBarR : Mn.bracketR,
            !1,
            !0,
            e
          )
        case Mn.bracketL:
          return this.parseArrayLike(Mn.bracketR, !0, !1, e)
        case Mn.braceBarL:
        case Mn.braceHashL:
          return this.parseObjectLike(
            this.state.type === Mn.braceBarL ? Mn.braceBarR : Mn.braceR,
            !1,
            !0,
            e
          )
        case Mn.braceL:
          return this.parseObjectLike(Mn.braceR, !1, !1, e)
        case Mn._function:
          return this.parseFunctionOrFunctionSent()
        case Mn.at:
          this.parseDecorators()
        case Mn._class:
          return (
            (t = this.startNode()),
            this.takeDecorators(t),
            this.parseClass(t, !1)
          )
        case Mn._new:
          return this.parseNewOrNewTarget()
        case Mn.backQuote:
          return this.parseTemplate(!1)
        case Mn.doubleColon: {
          ;(t = this.startNode()), this.next(), (t.object = null)
          const e = (t.callee = this.parseNoCallExpr())
          if ('MemberExpression' === e.type)
            return this.finishNode(t, 'BindExpression')
          throw this.raise(e.start, Xn.UnsupportedBind)
        }
        case Mn.privateName:
          return (
            this.raise(
              this.state.start,
              Xn.PrivateInExpectedIn,
              this.state.value
            ),
            this.parsePrivateName()
          )
        case Mn.moduloAssign:
          if (
            'hack' !== this.getPluginOption('pipelineOperator', 'proposal') ||
            '%' !== this.getPluginOption('pipelineOperator', 'topicToken')
          )
            throw this.unexpected()
          ;(this.state.value = '%'),
            (this.state.type = Mn.modulo),
            this.state.pos--,
            this.state.end--,
            this.state.endLoc.column--
        case Mn.modulo:
        case Mn.hash: {
          const e = this.getPluginOption('pipelineOperator', 'proposal')
          if (e) {
            t = this.startNode()
            const s = this.state.start,
              r = this.state.type
            return this.next(), this.finishTopicReference(t, s, e, r)
          }
        }
        case Mn.relational:
          if ('<' === this.state.value) {
            const e = this.input.codePointAt(this.nextTokenStart())
            ;(uo(e) || 62 === e) &&
              this.expectOnePlugin(['jsx', 'flow', 'typescript'])
          }
        default:
          throw this.unexpected()
      }
    }
    finishTopicReference(e, t, s, r) {
      if (this.testTopicReferenceConfiguration(s, t, r)) {
        let r
        return (
          (r =
            'smart' === s ? 'PipelinePrimaryTopicReference' : 'TopicReference'),
          this.topicReferenceIsAllowedInCurrentContext() ||
            ('smart' === s
              ? this.raise(t, Xn.PrimaryTopicNotAllowed)
              : this.raise(t, Xn.PipeTopicUnbound)),
          this.registerTopicReference(),
          this.finishNode(e, r)
        )
      }
      throw this.raise(t, Xn.PipeTopicUnconfiguredToken, r.label)
    }
    testTopicReferenceConfiguration(e, t, s) {
      switch (e) {
        case 'hack': {
          const e = this.getPluginOption('pipelineOperator', 'topicToken')
          return s.label === e
        }
        case 'smart':
          return s === Mn.hash
        default:
          throw this.raise(t, Xn.PipeTopicRequiresHackPipes)
      }
    }
    parseAsyncArrowUnaryFunction(e) {
      this.prodParam.enter(zo(!0, this.prodParam.hasYield))
      const t = [this.parseIdentifier()]
      return (
        this.prodParam.exit(),
        this.hasPrecedingLineBreak() &&
          this.raise(this.state.pos, Xn.LineTerminatorBeforeArrow),
        this.expect(Mn.arrow),
        this.parseArrowExpression(e, t, !0),
        e
      )
    }
    parseDo(e, t) {
      this.expectPlugin('doExpressions'),
        t && this.expectPlugin('asyncDoExpressions'),
        (e.async = t),
        this.next()
      const s = this.state.labels
      return (
        (this.state.labels = []),
        t
          ? (this.prodParam.enter(2),
            (e.body = this.parseBlock()),
            this.prodParam.exit())
          : (e.body = this.parseBlock()),
        (this.state.labels = s),
        this.finishNode(e, 'DoExpression')
      )
    }
    parseSuper() {
      const e = this.startNode()
      return (
        this.next(),
        !this.match(Mn.parenL) ||
        this.scope.allowDirectSuper ||
        this.options.allowSuperOutsideMethod
          ? this.scope.allowSuper ||
            this.options.allowSuperOutsideMethod ||
            this.raise(e.start, Xn.UnexpectedSuper)
          : this.raise(e.start, Xn.SuperNotAllowed),
        this.match(Mn.parenL) ||
          this.match(Mn.bracketL) ||
          this.match(Mn.dot) ||
          this.raise(e.start, Xn.UnsupportedSuper),
        this.finishNode(e, 'Super')
      )
    }
    parseMaybePrivateName(e) {
      return this.match(Mn.privateName)
        ? (e || this.raise(this.state.start + 1, Xn.UnexpectedPrivateField),
          this.parsePrivateName())
        : this.parseIdentifier(!0)
    }
    parsePrivateName() {
      const e = this.startNode(),
        t = this.startNodeAt(
          this.state.start + 1,
          new Hn(
            this.state.curLine,
            this.state.start + 1 - this.state.lineStart
          )
        ),
        s = this.state.value
      return (
        this.next(),
        (e.id = this.createIdentifier(t, s)),
        this.finishNode(e, 'PrivateName')
      )
    }
    parseFunctionOrFunctionSent() {
      const e = this.startNode()
      if ((this.next(), this.prodParam.hasYield && this.match(Mn.dot))) {
        const t = this.createIdentifier(this.startNodeAtNode(e), 'function')
        return this.next(), this.parseMetaProperty(e, t, 'sent')
      }
      return this.parseFunction(e)
    }
    parseMetaProperty(e, t, s) {
      ;(e.meta = t),
        'function' === t.name &&
          'sent' === s &&
          (this.isContextual(s)
            ? this.expectPlugin('functionSent')
            : this.hasPlugin('functionSent') || this.unexpected())
      const r = this.state.containsEsc
      return (
        (e.property = this.parseIdentifier(!0)),
        (e.property.name !== s || r) &&
          this.raise(e.property.start, Xn.UnsupportedMetaProperty, t.name, s),
        this.finishNode(e, 'MetaProperty')
      )
    }
    parseImportMetaProperty(e) {
      const t = this.createIdentifier(this.startNodeAtNode(e), 'import')
      return (
        this.next(),
        this.isContextual('meta') &&
          (this.inModule || this.raise(t.start, Jn.ImportMetaOutsideModule),
          (this.sawUnambiguousESM = !0)),
        this.parseMetaProperty(e, t, 'meta')
      )
    }
    parseLiteralAtNode(e, t, s) {
      return (
        this.addExtra(s, 'rawValue', e),
        this.addExtra(s, 'raw', this.input.slice(s.start, this.state.end)),
        (s.value = e),
        this.next(),
        this.finishNode(s, t)
      )
    }
    parseLiteral(e, t) {
      const s = this.startNode()
      return this.parseLiteralAtNode(e, t, s)
    }
    parseStringLiteral(e) {
      return this.parseLiteral(e, 'StringLiteral')
    }
    parseNumericLiteral(e) {
      return this.parseLiteral(e, 'NumericLiteral')
    }
    parseBigIntLiteral(e) {
      return this.parseLiteral(e, 'BigIntLiteral')
    }
    parseDecimalLiteral(e) {
      return this.parseLiteral(e, 'DecimalLiteral')
    }
    parseRegExpLiteral(e) {
      const t = this.parseLiteral(e.value, 'RegExpLiteral')
      return (t.pattern = e.pattern), (t.flags = e.flags), t
    }
    parseBooleanLiteral(e) {
      const t = this.startNode()
      return (t.value = e), this.next(), this.finishNode(t, 'BooleanLiteral')
    }
    parseNullLiteral() {
      const e = this.startNode()
      return this.next(), this.finishNode(e, 'NullLiteral')
    }
    parseParenAndDistinguishExpression(e) {
      const t = this.state.start,
        s = this.state.startLoc
      let r
      this.next(), this.expressionScope.enter(new qo(1))
      const i = this.state.maybeInArrowParameters,
        a = this.state.inFSharpPipelineDirectBody
      ;(this.state.maybeInArrowParameters = !0),
        (this.state.inFSharpPipelineDirectBody = !1)
      const n = this.state.start,
        o = this.state.startLoc,
        u = [],
        h = new Wo()
      let c,
        p,
        l = !0
      for (; !this.match(Mn.parenR); ) {
        if (l) l = !1
        else if (
          (this.expect(
            Mn.comma,
            -1 === h.optionalParameters ? null : h.optionalParameters
          ),
          this.match(Mn.parenR))
        ) {
          p = this.state.start
          break
        }
        if (this.match(Mn.ellipsis)) {
          const e = this.state.start,
            t = this.state.startLoc
          ;(c = this.state.start),
            u.push(this.parseParenItem(this.parseRestBinding(), e, t)),
            this.checkCommaAfterRest(41)
          break
        }
        u.push(this.parseMaybeAssignAllowIn(h, this.parseParenItem))
      }
      const d = this.state.lastTokEnd,
        D = this.state.lastTokEndLoc
      this.expect(Mn.parenR),
        (this.state.maybeInArrowParameters = i),
        (this.state.inFSharpPipelineDirectBody = a)
      let m = this.startNodeAt(t, s)
      if (e && this.shouldParseArrow(u) && (m = this.parseArrow(m)))
        return (
          this.expressionScope.validateAsPattern(),
          this.expressionScope.exit(),
          this.parseArrowExpression(m, u, !1),
          m
        )
      if (
        (this.expressionScope.exit(),
        u.length || this.unexpected(this.state.lastTokStart),
        p && this.unexpected(p),
        c && this.unexpected(c),
        this.checkExpressionErrors(h, !0),
        this.toReferencedListDeep(u, !0),
        u.length > 1
          ? ((r = this.startNodeAt(n, o)),
            (r.expressions = u),
            this.finishNode(r, 'SequenceExpression'),
            (r.end = d),
            (r.loc.end = D))
          : (r = u[0]),
        !this.options.createParenthesizedExpressions)
      )
        return (
          this.addExtra(r, 'parenthesized', !0),
          this.addExtra(r, 'parenStart', t),
          r
        )
      const f = this.startNodeAt(t, s)
      return (
        (f.expression = r), this.finishNode(f, 'ParenthesizedExpression'), f
      )
    }
    shouldParseArrow(e) {
      return !this.canInsertSemicolon()
    }
    parseArrow(e) {
      if (this.eat(Mn.arrow)) return e
    }
    parseParenItem(e, t, s) {
      return e
    }
    parseNewOrNewTarget() {
      const e = this.startNode()
      if ((this.next(), this.match(Mn.dot))) {
        const t = this.createIdentifier(this.startNodeAtNode(e), 'new')
        this.next()
        const s = this.parseMetaProperty(e, t, 'target')
        return (
          this.scope.inNonArrowFunction ||
            this.scope.inClass ||
            this.raise(s.start, Xn.UnexpectedNewTarget),
          s
        )
      }
      return this.parseNew(e)
    }
    parseNew(e) {
      return (
        (e.callee = this.parseNoCallExpr()),
        'Import' === e.callee.type
          ? this.raise(e.callee.start, Xn.ImportCallNotNewExpression)
          : this.isOptionalChain(e.callee)
          ? this.raise(this.state.lastTokEnd, Xn.OptionalChainingNoNew)
          : this.eat(Mn.questionDot) &&
            this.raise(this.state.start, Xn.OptionalChainingNoNew),
        this.parseNewArguments(e),
        this.finishNode(e, 'NewExpression')
      )
    }
    parseNewArguments(e) {
      if (this.eat(Mn.parenL)) {
        const t = this.parseExprList(Mn.parenR)
        this.toReferencedList(t), (e.arguments = t)
      } else e.arguments = []
    }
    parseTemplateElement(e) {
      const t = this.startNode()
      return (
        null === this.state.value &&
          (e ||
            this.raise(this.state.start + 1, Xn.InvalidEscapeSequenceTemplate)),
        (t.value = {
          raw: this.input
            .slice(this.state.start, this.state.end)
            .replace(/\r\n?/g, '\n'),
          cooked: this.state.value
        }),
        this.next(),
        (t.tail = this.match(Mn.backQuote)),
        this.finishNode(t, 'TemplateElement')
      )
    }
    parseTemplate(e) {
      const t = this.startNode()
      this.next(), (t.expressions = [])
      let s = this.parseTemplateElement(e)
      for (t.quasis = [s]; !s.tail; )
        this.expect(Mn.dollarBraceL),
          t.expressions.push(this.parseTemplateSubstitution()),
          this.expect(Mn.braceR),
          t.quasis.push((s = this.parseTemplateElement(e)))
      return this.next(), this.finishNode(t, 'TemplateLiteral')
    }
    parseTemplateSubstitution() {
      return this.parseExpression()
    }
    parseObjectLike(e, t, s, r) {
      s && this.expectPlugin('recordAndTuple')
      const i = this.state.inFSharpPipelineDirectBody
      this.state.inFSharpPipelineDirectBody = !1
      const a = Object.create(null)
      let n = !0
      const o = this.startNode()
      for (o.properties = [], this.next(); !this.match(e); ) {
        if (n) n = !1
        else if ((this.expect(Mn.comma), this.match(e))) {
          this.addExtra(o, 'trailingComma', this.state.lastTokStart)
          break
        }
        const i = this.parsePropertyDefinition(t, r)
        t || this.checkProto(i, s, a, r),
          s &&
            !this.isObjectProperty(i) &&
            'SpreadElement' !== i.type &&
            this.raise(i.start, Xn.InvalidRecordProperty),
          i.shorthand && this.addExtra(i, 'shorthand', !0),
          o.properties.push(i)
      }
      this.next(), (this.state.inFSharpPipelineDirectBody = i)
      let u = 'ObjectExpression'
      return (
        t ? (u = 'ObjectPattern') : s && (u = 'RecordExpression'),
        this.finishNode(o, u)
      )
    }
    maybeAsyncOrAccessorProp(e) {
      return (
        !e.computed &&
        'Identifier' === e.key.type &&
        (this.isLiteralPropertyName() ||
          this.match(Mn.bracketL) ||
          this.match(Mn.star))
      )
    }
    parsePropertyDefinition(e, t) {
      let s = []
      if (this.match(Mn.at))
        for (
          this.hasPlugin('decorators') &&
          this.raise(this.state.start, Xn.UnsupportedPropertyDecorator);
          this.match(Mn.at);

        )
          s.push(this.parseDecorator())
      const r = this.startNode()
      let i,
        a,
        n = !1,
        o = !1,
        u = !1
      if (this.match(Mn.ellipsis))
        return (
          s.length && this.unexpected(),
          e
            ? (this.next(),
              (r.argument = this.parseIdentifier()),
              this.checkCommaAfterRest(125),
              this.finishNode(r, 'RestElement'))
            : this.parseSpread()
        )
      s.length && ((r.decorators = s), (s = [])),
        (r.method = !1),
        (e || t) && ((i = this.state.start), (a = this.state.startLoc)),
        e || (n = this.eat(Mn.star))
      const h = this.state.containsEsc,
        c = this.parsePropertyName(r, !1)
      if (!e && !n && !h && this.maybeAsyncOrAccessorProp(r)) {
        const e = c.name
        'async' !== e ||
          this.hasPrecedingLineBreak() ||
          ((o = !0),
          this.resetPreviousNodeTrailingComments(c),
          (n = this.eat(Mn.star)),
          this.parsePropertyName(r, !1)),
          ('get' !== e && 'set' !== e) ||
            ((u = !0),
            this.resetPreviousNodeTrailingComments(c),
            (r.kind = e),
            this.match(Mn.star) &&
              ((n = !0),
              this.raise(this.state.pos, Xn.AccessorIsGenerator, e),
              this.next()),
            this.parsePropertyName(r, !1))
      }
      return this.parseObjPropValue(r, i, a, n, o, e, u, t), r
    }
    getGetterSetterExpectedParamCount(e) {
      return 'get' === e.kind ? 0 : 1
    }
    getObjectOrClassMethodParams(e) {
      return e.params
    }
    checkGetterSetterParams(e) {
      var t
      const s = this.getGetterSetterExpectedParamCount(e),
        r = this.getObjectOrClassMethodParams(e),
        i = e.start
      r.length !== s &&
        ('get' === e.kind
          ? this.raise(i, Xn.BadGetterArity)
          : this.raise(i, Xn.BadSetterArity)),
        'set' === e.kind &&
          'RestElement' === (null == (t = r[r.length - 1]) ? void 0 : t.type) &&
          this.raise(i, Xn.BadSetterRestParameter)
    }
    parseObjectMethod(e, t, s, r, i) {
      return i
        ? (this.parseMethod(e, t, !1, !1, !1, 'ObjectMethod'),
          this.checkGetterSetterParams(e),
          e)
        : s || t || this.match(Mn.parenL)
        ? (r && this.unexpected(),
          (e.kind = 'method'),
          (e.method = !0),
          this.parseMethod(e, t, s, !1, !1, 'ObjectMethod'))
        : void 0
    }
    parseObjectProperty(e, t, s, r, i) {
      return (
        (e.shorthand = !1),
        this.eat(Mn.colon)
          ? ((e.value = r
              ? this.parseMaybeDefault(this.state.start, this.state.startLoc)
              : this.parseMaybeAssignAllowIn(i)),
            this.finishNode(e, 'ObjectProperty'))
          : e.computed || 'Identifier' !== e.key.type
          ? void 0
          : (this.checkReservedWord(e.key.name, e.key.start, !0, !1),
            r
              ? (e.value = this.parseMaybeDefault(t, s, Xo(e.key)))
              : this.match(Mn.eq) && i
              ? (-1 === i.shorthandAssign &&
                  (i.shorthandAssign = this.state.start),
                (e.value = this.parseMaybeDefault(t, s, Xo(e.key))))
              : (e.value = Xo(e.key)),
            (e.shorthand = !0),
            this.finishNode(e, 'ObjectProperty'))
      )
    }
    parseObjPropValue(e, t, s, r, i, a, n, o) {
      const u =
        this.parseObjectMethod(e, r, i, a, n) ||
        this.parseObjectProperty(e, t, s, a, o)
      return u || this.unexpected(), u
    }
    parsePropertyName(e, t) {
      if (this.eat(Mn.bracketL))
        (e.computed = !0),
          (e.key = this.parseMaybeAssignAllowIn()),
          this.expect(Mn.bracketR)
      else {
        const s = this.state.inPropertyName
        this.state.inPropertyName = !0
        const r = this.state.type
        ;(e.key =
          r === Mn.num || r === Mn.string || r === Mn.bigint || r === Mn.decimal
            ? this.parseExprAtom()
            : this.parseMaybePrivateName(t)),
          r !== Mn.privateName && (e.computed = !1),
          (this.state.inPropertyName = s)
      }
      return e.key
    }
    initFunction(e, t) {
      ;(e.id = null), (e.generator = !1), (e.async = !!t)
    }
    parseMethod(e, t, s, r, i, a, n = !1) {
      this.initFunction(e, s), (e.generator = !!t)
      const o = r
      return (
        this.scope.enter(18 | (n ? Fo : 0) | (i ? 32 : 0)),
        this.prodParam.enter(zo(s, e.generator)),
        this.parseFunctionParams(e, o),
        this.parseFunctionBodyAndFinish(e, a, !0),
        this.prodParam.exit(),
        this.scope.exit(),
        e
      )
    }
    parseArrayLike(e, t, s, r) {
      s && this.expectPlugin('recordAndTuple')
      const i = this.state.inFSharpPipelineDirectBody
      this.state.inFSharpPipelineDirectBody = !1
      const a = this.startNode()
      return (
        this.next(),
        (a.elements = this.parseExprList(e, !s, r, a)),
        (this.state.inFSharpPipelineDirectBody = i),
        this.finishNode(a, s ? 'TupleExpression' : 'ArrayExpression')
      )
    }
    parseArrowExpression(e, t, s, r) {
      this.scope.enter(6)
      let i = zo(s, !1)
      !this.match(Mn.bracketL) && this.prodParam.hasIn && (i |= 8),
        this.prodParam.enter(i),
        this.initFunction(e, s)
      const a = this.state.maybeInArrowParameters
      return (
        t &&
          ((this.state.maybeInArrowParameters = !0),
          this.setArrowFunctionParameters(e, t, r)),
        (this.state.maybeInArrowParameters = !1),
        this.parseFunctionBody(e, !0),
        this.prodParam.exit(),
        this.scope.exit(),
        (this.state.maybeInArrowParameters = a),
        this.finishNode(e, 'ArrowFunctionExpression')
      )
    }
    setArrowFunctionParameters(e, t, s) {
      e.params = this.toAssignableList(t, s, !1)
    }
    parseFunctionBodyAndFinish(e, t, s = !1) {
      this.parseFunctionBody(e, !1, s), this.finishNode(e, t)
    }
    parseFunctionBody(e, t, s = !1) {
      const r = t && !this.match(Mn.braceL)
      if ((this.expressionScope.enter(Ho()), r))
        (e.body = this.parseMaybeAssign()), this.checkParams(e, !1, t, !1)
      else {
        const r = this.state.strict,
          i = this.state.labels
        ;(this.state.labels = []),
          this.prodParam.enter(4 | this.prodParam.currentFlags()),
          (e.body = this.parseBlock(!0, !1, (i) => {
            const a = !this.isSimpleParamList(e.params)
            if (i && a) {
              const t =
                ('method' !== e.kind && 'constructor' !== e.kind) || !e.key
                  ? e.start
                  : e.key.end
              this.raise(t, Xn.IllegalLanguageModeDirective)
            }
            const n = !r && this.state.strict
            this.checkParams(e, !(this.state.strict || t || s || a), t, n),
              this.state.strict &&
                e.id &&
                this.checkLVal(e.id, 'function name', 65, void 0, void 0, n)
          })),
          this.prodParam.exit(),
          this.expressionScope.exit(),
          (this.state.labels = i)
      }
    }
    isSimpleParamList(e) {
      for (let t = 0, s = e.length; t < s; t++)
        if ('Identifier' !== e[t].type) return !1
      return !0
    }
    checkParams(e, t, s, r = !0) {
      const i = new Set()
      for (const s of e.params)
        this.checkLVal(s, 'function parameter list', 5, t ? null : i, void 0, r)
    }
    parseExprList(e, t, s, r) {
      const i = []
      let a = !0
      for (; !this.eat(e); ) {
        if (a) a = !1
        else if ((this.expect(Mn.comma), this.match(e))) {
          r && this.addExtra(r, 'trailingComma', this.state.lastTokStart),
            this.next()
          break
        }
        i.push(this.parseExprListItem(t, s))
      }
      return i
    }
    parseExprListItem(e, t, s) {
      let r
      if (this.match(Mn.comma))
        e || this.raise(this.state.pos, Xn.UnexpectedToken, ','), (r = null)
      else if (this.match(Mn.ellipsis)) {
        const e = this.state.start,
          s = this.state.startLoc
        r = this.parseParenItem(this.parseSpread(t), e, s)
      } else if (this.match(Mn.question)) {
        this.expectPlugin('partialApplication'),
          s || this.raise(this.state.start, Xn.UnexpectedArgumentPlaceholder)
        const e = this.startNode()
        this.next(), (r = this.finishNode(e, 'ArgumentPlaceholder'))
      } else r = this.parseMaybeAssignAllowIn(t, this.parseParenItem)
      return r
    }
    parseIdentifier(e) {
      const t = this.startNode(),
        s = this.parseIdentifierName(t.start, e)
      return this.createIdentifier(t, s)
    }
    createIdentifier(e, t) {
      return (
        (e.name = t),
        (e.loc.identifierName = t),
        this.finishNode(e, 'Identifier')
      )
    }
    parseIdentifierName(e, t) {
      let s
      const { start: r, type: i } = this.state
      if (i === Mn.name) s = this.state.value
      else {
        if (!i.keyword) throw this.unexpected()
        s = i.keyword
      }
      return (
        t
          ? (this.state.type = Mn.name)
          : this.checkReservedWord(s, r, !!i.keyword, !1),
        this.next(),
        s
      )
    }
    checkReservedWord(e, t, s, r) {
      if (e.length > 10) return
      if (
        !(function (e) {
          return xo.has(e)
        })(e)
      )
        return
      if ('yield' === e) {
        if (this.prodParam.hasYield)
          return void this.raise(t, Xn.YieldBindingIdentifier)
      } else if ('await' === e) {
        if (this.prodParam.hasAwait)
          return void this.raise(t, Xn.AwaitBindingIdentifier)
        if (this.scope.inStaticBlock)
          return void this.raise(t, Xn.AwaitBindingIdentifierInStaticBlock)
        this.expressionScope.recordAsyncArrowParametersError(
          t,
          Xn.AwaitBindingIdentifier
        )
      } else if (
        'arguments' === e &&
        this.scope.inClassAndNotInNonArrowFunction
      )
        return void this.raise(t, Xn.ArgumentsInClass)
      if (s && Co(e)) return void this.raise(t, Xn.UnexpectedKeyword, e)
      ;(this.state.strict ? (r ? Eo : yo) : fo)(e, this.inModule) &&
        this.raise(t, Xn.UnexpectedReservedWord, e)
    }
    isAwaitAllowed() {
      return (
        !!this.prodParam.hasAwait ||
        !(!this.options.allowAwaitOutsideFunction || this.scope.inFunction)
      )
    }
    parseAwait(e, t) {
      const s = this.startNodeAt(e, t)
      return (
        this.expressionScope.recordParameterInitializerError(
          s.start,
          Xn.AwaitExpressionFormalParameter
        ),
        this.eat(Mn.star) && this.raise(s.start, Xn.ObsoleteAwaitStar),
        this.scope.inFunction ||
          this.options.allowAwaitOutsideFunction ||
          (this.isAmbiguousAwait()
            ? (this.ambiguousScriptDifferentAst = !0)
            : (this.sawUnambiguousESM = !0)),
        this.state.soloAwait || (s.argument = this.parseMaybeUnary(null, !0)),
        this.finishNode(s, 'AwaitExpression')
      )
    }
    isAmbiguousAwait() {
      return (
        this.hasPrecedingLineBreak() ||
        this.match(Mn.plusMin) ||
        this.match(Mn.parenL) ||
        this.match(Mn.bracketL) ||
        this.match(Mn.backQuote) ||
        this.match(Mn.regexp) ||
        this.match(Mn.slash) ||
        (this.hasPlugin('v8intrinsic') && this.match(Mn.modulo))
      )
    }
    parseYield() {
      const e = this.startNode()
      this.expressionScope.recordParameterInitializerError(
        e.start,
        Xn.YieldInParameter
      ),
        this.next()
      let t = !1,
        s = null
      if (!this.hasPrecedingLineBreak())
        switch (((t = this.eat(Mn.star)), this.state.type)) {
          case Mn.semi:
          case Mn.eof:
          case Mn.braceR:
          case Mn.parenR:
          case Mn.bracketR:
          case Mn.braceBarR:
          case Mn.colon:
          case Mn.comma:
            if (!t) break
          default:
            s = this.parseMaybeAssign()
        }
      return (
        (e.delegate = t),
        (e.argument = s),
        this.finishNode(e, 'YieldExpression')
      )
    }
    checkPipelineAtInfixOperator(e, t) {
      'smart' === this.getPluginOption('pipelineOperator', 'proposal') &&
        'SequenceExpression' === e.type &&
        this.raise(t, Xn.PipelineHeadSequenceExpression)
    }
    checkHackPipeBodyEarlyErrors(e) {
      if (this.match(Mn.arrow))
        throw this.raise(this.state.start, Xn.PipeBodyIsTighter, Mn.arrow.label)
      this.topicReferenceWasUsedInCurrentContext() ||
        this.raise(e, Xn.PipeTopicUnused)
    }
    parseSmartPipelineBodyInStyle(e, t, s) {
      const r = this.startNodeAt(t, s)
      return this.isSimpleReference(e)
        ? ((r.callee = e), this.finishNode(r, 'PipelineBareFunction'))
        : (this.checkSmartPipeTopicBodyEarlyErrors(t),
          (r.expression = e),
          this.finishNode(r, 'PipelineTopicExpression'))
    }
    isSimpleReference(e) {
      switch (e.type) {
        case 'MemberExpression':
          return !e.computed && this.isSimpleReference(e.object)
        case 'Identifier':
          return !0
        default:
          return !1
      }
    }
    checkSmartPipeTopicBodyEarlyErrors(e) {
      if (this.match(Mn.arrow))
        throw this.raise(this.state.start, Xn.PipelineBodyNoArrow)
      this.topicReferenceWasUsedInCurrentContext() ||
        this.raise(e, Xn.PipelineTopicUnused)
    }
    withTopicBindingContext(e) {
      const t = this.state.topicContext
      this.state.topicContext = {
        maxNumOfResolvableTopics: 1,
        maxTopicIndex: null
      }
      try {
        return e()
      } finally {
        this.state.topicContext = t
      }
    }
    withSmartMixTopicForbiddingContext(e) {
      if ('smart' !== this.getPluginOption('pipelineOperator', 'proposal'))
        return e()
      {
        const t = this.state.topicContext
        this.state.topicContext = {
          maxNumOfResolvableTopics: 0,
          maxTopicIndex: null
        }
        try {
          return e()
        } finally {
          this.state.topicContext = t
        }
      }
    }
    withSoloAwaitPermittingContext(e) {
      const t = this.state.soloAwait
      this.state.soloAwait = !0
      try {
        return e()
      } finally {
        this.state.soloAwait = t
      }
    }
    allowInAnd(e) {
      const t = this.prodParam.currentFlags()
      if (8 & ~t) {
        this.prodParam.enter(8 | t)
        try {
          return e()
        } finally {
          this.prodParam.exit()
        }
      }
      return e()
    }
    disallowInAnd(e) {
      const t = this.prodParam.currentFlags()
      if (8 & t) {
        this.prodParam.enter(-9 & t)
        try {
          return e()
        } finally {
          this.prodParam.exit()
        }
      }
      return e()
    }
    registerTopicReference() {
      this.state.topicContext.maxTopicIndex = 0
    }
    topicReferenceIsAllowedInCurrentContext() {
      return this.state.topicContext.maxNumOfResolvableTopics >= 1
    }
    topicReferenceWasUsedInCurrentContext() {
      return (
        null != this.state.topicContext.maxTopicIndex &&
        this.state.topicContext.maxTopicIndex >= 0
      )
    }
    parseFSharpPipelineBody(e) {
      const t = this.state.start,
        s = this.state.startLoc
      this.state.potentialArrowAt = this.state.start
      const r = this.state.inFSharpPipelineDirectBody
      this.state.inFSharpPipelineDirectBody = !0
      const i = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), t, s, e)
      return (this.state.inFSharpPipelineDirectBody = r), i
    }
    parseModuleExpression() {
      this.expectPlugin('moduleBlocks')
      const e = this.startNode()
      this.next(), this.eat(Mn.braceL)
      const t = this.initializeScopes(!0)
      this.enterInitialScopes()
      const s = this.startNode()
      try {
        e.body = this.parseProgram(s, Mn.braceR, 'module')
      } finally {
        t()
      }
      return this.eat(Mn.braceR), this.finishNode(e, 'ModuleExpression')
    }
  } {
    parseTopLevel(e, t) {
      return (
        (e.program = this.parseProgram(t)),
        (e.comments = this.state.comments),
        this.options.tokens &&
          (e.tokens = (function (e) {
            for (let t = 0; t < e.length; t++) {
              const s = e[t]
              if (s.type === Mn.privateName) {
                const { loc: r, start: i, value: a, end: n } = s,
                  o = i + 1,
                  u = new Hn(r.start.line, r.start.column + 1)
                e.splice(
                  t,
                  1,
                  new Ro({
                    type: Mn.hash,
                    value: '#',
                    start: i,
                    end: o,
                    startLoc: r.start,
                    endLoc: u
                  }),
                  new Ro({
                    type: Mn.name,
                    value: a,
                    start: o,
                    end: n,
                    startLoc: u,
                    endLoc: r.end
                  })
                )
              }
            }
            return e
          })(this.tokens)),
        this.finishNode(e, 'File')
      )
    }
    parseProgram(e, t = Mn.eof, s = this.options.sourceType) {
      if (
        ((e.sourceType = s),
        (e.interpreter = this.parseInterpreterDirective()),
        this.parseBlockBody(e, !0, !0, t),
        this.inModule &&
          !this.options.allowUndeclaredExports &&
          this.scope.undefinedExports.size > 0)
      )
        for (const [e] of Array.from(this.scope.undefinedExports)) {
          const t = this.scope.undefinedExports.get(e)
          this.raise(t, Xn.ModuleExportUndefined, e)
        }
      return this.finishNode(e, 'Program')
    }
    stmtToDirective(e) {
      const t = e
      ;(t.type = 'Directive'), (t.value = t.expression), delete t.expression
      const s = t.value,
        r = this.input.slice(s.start, s.end),
        i = (s.value = r.slice(1, -1))
      return (
        this.addExtra(s, 'raw', r),
        this.addExtra(s, 'rawValue', i),
        (s.type = 'DirectiveLiteral'),
        t
      )
    }
    parseInterpreterDirective() {
      if (!this.match(Mn.interpreterDirective)) return null
      const e = this.startNode()
      return (
        (e.value = this.state.value),
        this.next(),
        this.finishNode(e, 'InterpreterDirective')
      )
    }
    isLet(e) {
      return !!this.isContextual('let') && this.isLetKeyword(e)
    }
    isLetKeyword(e) {
      const t = this.nextTokenStart(),
        s = this.codePointAtPos(t)
      if (92 === s || 91 === s) return !0
      if (e) return !1
      if (123 === s) return !0
      if (uo(s)) {
        if (((Su.lastIndex = t), Su.test(this.input))) {
          const e = this.codePointAtPos(Su.lastIndex)
          if (!ho(e) && 92 !== e) return !1
        }
        return !0
      }
      return !1
    }
    parseStatement(e, t) {
      return (
        this.match(Mn.at) && this.parseDecorators(!0),
        this.parseStatementContent(e, t)
      )
    }
    parseStatementContent(e, t) {
      let s = this.state.type
      const r = this.startNode()
      let i
      switch ((this.isLet(e) && ((s = Mn._var), (i = 'let')), s)) {
        case Mn._break:
        case Mn._continue:
          return this.parseBreakContinueStatement(r, s.keyword)
        case Mn._debugger:
          return this.parseDebuggerStatement(r)
        case Mn._do:
          return this.parseDoStatement(r)
        case Mn._for:
          return this.parseForStatement(r)
        case Mn._function:
          if (46 === this.lookaheadCharCode()) break
          return (
            e &&
              (this.state.strict
                ? this.raise(this.state.start, Xn.StrictFunction)
                : 'if' !== e &&
                  'label' !== e &&
                  this.raise(this.state.start, Xn.SloppyFunction)),
            this.parseFunctionStatement(r, !1, !e)
          )
        case Mn._class:
          return e && this.unexpected(), this.parseClass(r, !0)
        case Mn._if:
          return this.parseIfStatement(r)
        case Mn._return:
          return this.parseReturnStatement(r)
        case Mn._switch:
          return this.parseSwitchStatement(r)
        case Mn._throw:
          return this.parseThrowStatement(r)
        case Mn._try:
          return this.parseTryStatement(r)
        case Mn._const:
        case Mn._var:
          return (
            (i = i || this.state.value),
            e &&
              'var' !== i &&
              this.raise(this.state.start, Xn.UnexpectedLexicalDeclaration),
            this.parseVarStatement(r, i)
          )
        case Mn._while:
          return this.parseWhileStatement(r)
        case Mn._with:
          return this.parseWithStatement(r)
        case Mn.braceL:
          return this.parseBlock()
        case Mn.semi:
          return this.parseEmptyStatement(r)
        case Mn._import: {
          const e = this.lookaheadCharCode()
          if (40 === e || 46 === e) break
        }
        case Mn._export: {
          let e
          return (
            this.options.allowImportExportEverywhere ||
              t ||
              this.raise(this.state.start, Xn.UnexpectedImportExport),
            this.next(),
            s === Mn._import
              ? ((e = this.parseImport(r)),
                'ImportDeclaration' !== e.type ||
                  (e.importKind && 'value' !== e.importKind) ||
                  (this.sawUnambiguousESM = !0))
              : ((e = this.parseExport(r)),
                (('ExportNamedDeclaration' !== e.type ||
                  (e.exportKind && 'value' !== e.exportKind)) &&
                  ('ExportAllDeclaration' !== e.type ||
                    (e.exportKind && 'value' !== e.exportKind)) &&
                  'ExportDefaultDeclaration' !== e.type) ||
                  (this.sawUnambiguousESM = !0)),
            this.assertModuleNodeAllowed(r),
            e
          )
        }
        default:
          if (this.isAsyncFunction())
            return (
              e &&
                this.raise(
                  this.state.start,
                  Xn.AsyncFunctionInSingleStatementContext
                ),
              this.next(),
              this.parseFunctionStatement(r, !0, !e)
            )
      }
      const a = this.state.value,
        n = this.parseExpression()
      return s === Mn.name && 'Identifier' === n.type && this.eat(Mn.colon)
        ? this.parseLabeledStatement(r, a, n, e)
        : this.parseExpressionStatement(r, n)
    }
    assertModuleNodeAllowed(e) {
      this.options.allowImportExportEverywhere ||
        this.inModule ||
        this.raise(e.start, Jn.ImportOutsideModule)
    }
    takeDecorators(e) {
      const t = this.state.decoratorStack[this.state.decoratorStack.length - 1]
      t.length &&
        ((e.decorators = t),
        this.resetStartLocationFromNode(e, t[0]),
        (this.state.decoratorStack[this.state.decoratorStack.length - 1] = []))
    }
    canHaveLeadingDecorator() {
      return this.match(Mn._class)
    }
    parseDecorators(e) {
      const t = this.state.decoratorStack[this.state.decoratorStack.length - 1]
      for (; this.match(Mn.at); ) {
        const e = this.parseDecorator()
        t.push(e)
      }
      if (this.match(Mn._export))
        e || this.unexpected(),
          this.hasPlugin('decorators') &&
            !this.getPluginOption('decorators', 'decoratorsBeforeExport') &&
            this.raise(this.state.start, Xn.DecoratorExportClass)
      else if (!this.canHaveLeadingDecorator())
        throw this.raise(this.state.start, Xn.UnexpectedLeadingDecorator)
    }
    parseDecorator() {
      this.expectOnePlugin(['decorators-legacy', 'decorators'])
      const e = this.startNode()
      if ((this.next(), this.hasPlugin('decorators'))) {
        this.state.decoratorStack.push([])
        const t = this.state.start,
          s = this.state.startLoc
        let r
        if (this.eat(Mn.parenL))
          (r = this.parseExpression()), this.expect(Mn.parenR)
        else
          for (r = this.parseIdentifier(!1); this.eat(Mn.dot); ) {
            const e = this.startNodeAt(t, s)
            ;(e.object = r),
              (e.property = this.parseIdentifier(!0)),
              (e.computed = !1),
              (r = this.finishNode(e, 'MemberExpression'))
          }
        ;(e.expression = this.parseMaybeDecoratorArguments(r)),
          this.state.decoratorStack.pop()
      } else e.expression = this.parseExprSubscripts()
      return this.finishNode(e, 'Decorator')
    }
    parseMaybeDecoratorArguments(e) {
      if (this.eat(Mn.parenL)) {
        const t = this.startNodeAtNode(e)
        return (
          (t.callee = e),
          (t.arguments = this.parseCallExpressionArguments(Mn.parenR, !1)),
          this.toReferencedList(t.arguments),
          this.finishNode(t, 'CallExpression')
        )
      }
      return e
    }
    parseBreakContinueStatement(e, t) {
      const s = 'break' === t
      return (
        this.next(),
        this.isLineTerminator()
          ? (e.label = null)
          : ((e.label = this.parseIdentifier()), this.semicolon()),
        this.verifyBreakContinue(e, t),
        this.finishNode(e, s ? 'BreakStatement' : 'ContinueStatement')
      )
    }
    verifyBreakContinue(e, t) {
      const s = 'break' === t
      let r
      for (r = 0; r < this.state.labels.length; ++r) {
        const t = this.state.labels[r]
        if (null == e.label || t.name === e.label.name) {
          if (null != t.kind && (s || 'loop' === t.kind)) break
          if (e.label && s) break
        }
      }
      r === this.state.labels.length &&
        this.raise(e.start, Xn.IllegalBreakContinue, t)
    }
    parseDebuggerStatement(e) {
      return (
        this.next(), this.semicolon(), this.finishNode(e, 'DebuggerStatement')
      )
    }
    parseHeaderExpression() {
      this.expect(Mn.parenL)
      const e = this.parseExpression()
      return this.expect(Mn.parenR), e
    }
    parseDoStatement(e) {
      return (
        this.next(),
        this.state.labels.push(Pu),
        (e.body = this.withSmartMixTopicForbiddingContext(() =>
          this.parseStatement('do')
        )),
        this.state.labels.pop(),
        this.expect(Mn._while),
        (e.test = this.parseHeaderExpression()),
        this.eat(Mn.semi),
        this.finishNode(e, 'DoWhileStatement')
      )
    }
    parseForStatement(e) {
      this.next(), this.state.labels.push(Pu)
      let t = -1
      if (
        (this.isAwaitAllowed() &&
          this.eatContextual('await') &&
          (t = this.state.lastTokStart),
        this.scope.enter(0),
        this.expect(Mn.parenL),
        this.match(Mn.semi))
      )
        return t > -1 && this.unexpected(t), this.parseFor(e, null)
      const s = this.isContextual('let'),
        r = s && this.isLetKeyword()
      if (this.match(Mn._var) || this.match(Mn._const) || r) {
        const s = this.startNode(),
          i = r ? 'let' : this.state.value
        return (
          this.next(),
          this.parseVar(s, !0, i),
          this.finishNode(s, 'VariableDeclaration'),
          (this.match(Mn._in) || this.isContextual('of')) &&
          1 === s.declarations.length
            ? this.parseForIn(e, s, t)
            : (t > -1 && this.unexpected(t), this.parseFor(e, s))
        )
      }
      const i = this.match(Mn.name) && !this.state.containsEsc,
        a = new Wo(),
        n = this.parseExpression(!0, a),
        o = this.isContextual('of')
      if (
        (o &&
          (s
            ? this.raise(n.start, Xn.ForOfLet)
            : -1 === t &&
              i &&
              'Identifier' === n.type &&
              'async' === n.name &&
              this.raise(n.start, Xn.ForOfAsync)),
        o || this.match(Mn._in))
      ) {
        this.toAssignable(n, !0)
        const s = o ? 'for-of statement' : 'for-in statement'
        return this.checkLVal(n, s), this.parseForIn(e, n, t)
      }
      return (
        this.checkExpressionErrors(a, !0),
        t > -1 && this.unexpected(t),
        this.parseFor(e, n)
      )
    }
    parseFunctionStatement(e, t, s) {
      return this.next(), this.parseFunction(e, 1 | (s ? 0 : 2), t)
    }
    parseIfStatement(e) {
      return (
        this.next(),
        (e.test = this.parseHeaderExpression()),
        (e.consequent = this.parseStatement('if')),
        (e.alternate = this.eat(Mn._else) ? this.parseStatement('if') : null),
        this.finishNode(e, 'IfStatement')
      )
    }
    parseReturnStatement(e) {
      return (
        this.prodParam.hasReturn ||
          this.options.allowReturnOutsideFunction ||
          this.raise(this.state.start, Xn.IllegalReturn),
        this.next(),
        this.isLineTerminator()
          ? (e.argument = null)
          : ((e.argument = this.parseExpression()), this.semicolon()),
        this.finishNode(e, 'ReturnStatement')
      )
    }
    parseSwitchStatement(e) {
      this.next(), (e.discriminant = this.parseHeaderExpression())
      const t = (e.cases = [])
      let s, r
      for (
        this.expect(Mn.braceL), this.state.labels.push(Tu), this.scope.enter(0);
        !this.match(Mn.braceR);

      )
        if (this.match(Mn._case) || this.match(Mn._default)) {
          const e = this.match(Mn._case)
          s && this.finishNode(s, 'SwitchCase'),
            t.push((s = this.startNode())),
            (s.consequent = []),
            this.next(),
            e
              ? (s.test = this.parseExpression())
              : (r &&
                  this.raise(
                    this.state.lastTokStart,
                    Xn.MultipleDefaultsInSwitch
                  ),
                (r = !0),
                (s.test = null)),
            this.expect(Mn.colon)
        } else
          s ? s.consequent.push(this.parseStatement(null)) : this.unexpected()
      return (
        this.scope.exit(),
        s && this.finishNode(s, 'SwitchCase'),
        this.next(),
        this.state.labels.pop(),
        this.finishNode(e, 'SwitchStatement')
      )
    }
    parseThrowStatement(e) {
      return (
        this.next(),
        this.hasPrecedingLineBreak() &&
          this.raise(this.state.lastTokEnd, Xn.NewlineAfterThrow),
        (e.argument = this.parseExpression()),
        this.semicolon(),
        this.finishNode(e, 'ThrowStatement')
      )
    }
    parseCatchClauseParam() {
      const e = this.parseBindingAtom(),
        t = 'Identifier' === e.type
      return (
        this.scope.enter(t ? 8 : 0), this.checkLVal(e, 'catch clause', 9), e
      )
    }
    parseTryStatement(e) {
      if (
        (this.next(),
        (e.block = this.parseBlock()),
        (e.handler = null),
        this.match(Mn._catch))
      ) {
        const t = this.startNode()
        this.next(),
          this.match(Mn.parenL)
            ? (this.expect(Mn.parenL),
              (t.param = this.parseCatchClauseParam()),
              this.expect(Mn.parenR))
            : ((t.param = null), this.scope.enter(0)),
          (t.body = this.withSmartMixTopicForbiddingContext(() =>
            this.parseBlock(!1, !1)
          )),
          this.scope.exit(),
          (e.handler = this.finishNode(t, 'CatchClause'))
      }
      return (
        (e.finalizer = this.eat(Mn._finally) ? this.parseBlock() : null),
        e.handler || e.finalizer || this.raise(e.start, Xn.NoCatchOrFinally),
        this.finishNode(e, 'TryStatement')
      )
    }
    parseVarStatement(e, t) {
      return (
        this.next(),
        this.parseVar(e, !1, t),
        this.semicolon(),
        this.finishNode(e, 'VariableDeclaration')
      )
    }
    parseWhileStatement(e) {
      return (
        this.next(),
        (e.test = this.parseHeaderExpression()),
        this.state.labels.push(Pu),
        (e.body = this.withSmartMixTopicForbiddingContext(() =>
          this.parseStatement('while')
        )),
        this.state.labels.pop(),
        this.finishNode(e, 'WhileStatement')
      )
    }
    parseWithStatement(e) {
      return (
        this.state.strict && this.raise(this.state.start, Xn.StrictWith),
        this.next(),
        (e.object = this.parseHeaderExpression()),
        (e.body = this.withSmartMixTopicForbiddingContext(() =>
          this.parseStatement('with')
        )),
        this.finishNode(e, 'WithStatement')
      )
    }
    parseEmptyStatement(e) {
      return this.next(), this.finishNode(e, 'EmptyStatement')
    }
    parseLabeledStatement(e, t, s, r) {
      for (const e of this.state.labels)
        e.name === t && this.raise(s.start, Xn.LabelRedeclaration, t)
      const i = this.state.type.isLoop
        ? 'loop'
        : this.match(Mn._switch)
        ? 'switch'
        : null
      for (let t = this.state.labels.length - 1; t >= 0; t--) {
        const s = this.state.labels[t]
        if (s.statementStart !== e.start) break
        ;(s.statementStart = this.state.start), (s.kind = i)
      }
      return (
        this.state.labels.push({
          name: t,
          kind: i,
          statementStart: this.state.start
        }),
        (e.body = this.parseStatement(
          r ? (-1 === r.indexOf('label') ? r + 'label' : r) : 'label'
        )),
        this.state.labels.pop(),
        (e.label = s),
        this.finishNode(e, 'LabeledStatement')
      )
    }
    parseExpressionStatement(e, t) {
      return (
        (e.expression = t),
        this.semicolon(),
        this.finishNode(e, 'ExpressionStatement')
      )
    }
    parseBlock(e = !1, t = !0, s) {
      const r = this.startNode()
      return (
        e && this.state.strictErrors.clear(),
        this.expect(Mn.braceL),
        t && this.scope.enter(0),
        this.parseBlockBody(r, e, !1, Mn.braceR, s),
        t && this.scope.exit(),
        this.finishNode(r, 'BlockStatement')
      )
    }
    isValidDirective(e) {
      return (
        'ExpressionStatement' === e.type &&
        'StringLiteral' === e.expression.type &&
        !e.expression.extra.parenthesized
      )
    }
    parseBlockBody(e, t, s, r, i) {
      const a = (e.body = []),
        n = (e.directives = [])
      this.parseBlockOrModuleBlockBody(a, t ? n : void 0, s, r, i)
    }
    parseBlockOrModuleBlockBody(e, t, s, r, i) {
      const a = this.state.strict
      let n = !1,
        o = !1
      for (; !this.match(r); ) {
        const r = this.parseStatement(null, s)
        if (t && !o) {
          if (this.isValidDirective(r)) {
            const e = this.stmtToDirective(r)
            t.push(e),
              n ||
                'use strict' !== e.value.value ||
                ((n = !0), this.setStrict(!0))
            continue
          }
          ;(o = !0), this.state.strictErrors.clear()
        }
        e.push(r)
      }
      i && i.call(this, n), a || this.setStrict(!1), this.next()
    }
    parseFor(e, t) {
      return (
        (e.init = t),
        this.semicolon(!1),
        (e.test = this.match(Mn.semi) ? null : this.parseExpression()),
        this.semicolon(!1),
        (e.update = this.match(Mn.parenR) ? null : this.parseExpression()),
        this.expect(Mn.parenR),
        (e.body = this.withSmartMixTopicForbiddingContext(() =>
          this.parseStatement('for')
        )),
        this.scope.exit(),
        this.state.labels.pop(),
        this.finishNode(e, 'ForStatement')
      )
    }
    parseForIn(e, t, s) {
      const r = this.match(Mn._in)
      return (
        this.next(),
        r ? s > -1 && this.unexpected(s) : (e.await = s > -1),
        'VariableDeclaration' !== t.type ||
        null == t.declarations[0].init ||
        (r &&
          !this.state.strict &&
          'var' === t.kind &&
          'Identifier' === t.declarations[0].id.type)
          ? 'AssignmentPattern' === t.type &&
            this.raise(t.start, Xn.InvalidLhs, 'for-loop')
          : this.raise(
              t.start,
              Xn.ForInOfLoopInitializer,
              r ? 'for-in' : 'for-of'
            ),
        (e.left = t),
        (e.right = r ? this.parseExpression() : this.parseMaybeAssignAllowIn()),
        this.expect(Mn.parenR),
        (e.body = this.withSmartMixTopicForbiddingContext(() =>
          this.parseStatement('for')
        )),
        this.scope.exit(),
        this.state.labels.pop(),
        this.finishNode(e, r ? 'ForInStatement' : 'ForOfStatement')
      )
    }
    parseVar(e, t, s) {
      const r = (e.declarations = []),
        i = this.hasPlugin('typescript')
      for (e.kind = s; ; ) {
        const e = this.startNode()
        if (
          (this.parseVarId(e, s),
          this.eat(Mn.eq)
            ? (e.init = t
                ? this.parseMaybeAssignDisallowIn()
                : this.parseMaybeAssignAllowIn())
            : ('const' !== s || this.match(Mn._in) || this.isContextual('of')
                ? 'Identifier' === e.id.type ||
                  (t && (this.match(Mn._in) || this.isContextual('of'))) ||
                  this.raise(
                    this.state.lastTokEnd,
                    Xn.DeclarationMissingInitializer,
                    'Complex binding patterns'
                  )
                : i ||
                  this.raise(
                    this.state.lastTokEnd,
                    Xn.DeclarationMissingInitializer,
                    'Const declarations'
                  ),
              (e.init = null)),
          r.push(this.finishNode(e, 'VariableDeclarator')),
          !this.eat(Mn.comma))
        )
          break
      }
      return e
    }
    parseVarId(e, t) {
      ;(e.id = this.parseBindingAtom()),
        this.checkLVal(
          e.id,
          'variable declaration',
          'var' === t ? 5 : 9,
          void 0,
          'var' !== t
        )
    }
    parseFunction(e, t = 0, s = !1) {
      const r = 1 & t,
        i = 2 & t,
        a = !(!r || 4 & t)
      this.initFunction(e, s),
        this.match(Mn.star) &&
          i &&
          this.raise(this.state.start, Xn.GeneratorInSingleStatementContext),
        (e.generator = this.eat(Mn.star)),
        r && (e.id = this.parseFunctionId(a))
      const n = this.state.maybeInArrowParameters
      return (
        (this.state.maybeInArrowParameters = !1),
        this.scope.enter(2),
        this.prodParam.enter(zo(s, e.generator)),
        r || (e.id = this.parseFunctionId()),
        this.parseFunctionParams(e, !1),
        this.withSmartMixTopicForbiddingContext(() => {
          this.parseFunctionBodyAndFinish(
            e,
            r ? 'FunctionDeclaration' : 'FunctionExpression'
          )
        }),
        this.prodParam.exit(),
        this.scope.exit(),
        r && !i && this.registerFunctionStatementId(e),
        (this.state.maybeInArrowParameters = n),
        e
      )
    }
    parseFunctionId(e) {
      return e || this.match(Mn.name) ? this.parseIdentifier() : null
    }
    parseFunctionParams(e, t) {
      this.expect(Mn.parenL),
        this.expressionScope.enter(new Uo(3)),
        (e.params = this.parseBindingList(Mn.parenR, 41, !1, t)),
        this.expressionScope.exit()
    }
    registerFunctionStatementId(e) {
      e.id &&
        this.scope.declareName(
          e.id.name,
          this.state.strict || e.generator || e.async
            ? this.scope.treatFunctionsAsVar
              ? 5
              : 9
            : 17,
          e.id.start
        )
    }
    parseClass(e, t, s) {
      this.next(), this.takeDecorators(e)
      const r = this.state.strict
      return (
        (this.state.strict = !0),
        this.parseClassId(e, t, s),
        this.parseClassSuper(e),
        (e.body = this.parseClassBody(!!e.superClass, r)),
        this.finishNode(e, t ? 'ClassDeclaration' : 'ClassExpression')
      )
    }
    isClassProperty() {
      return this.match(Mn.eq) || this.match(Mn.semi) || this.match(Mn.braceR)
    }
    isClassMethod() {
      return this.match(Mn.parenL)
    }
    isNonstaticConstructor(e) {
      return !(
        e.computed ||
        e.static ||
        ('constructor' !== e.key.name && 'constructor' !== e.key.value)
      )
    }
    parseClassBody(e, t) {
      this.classScope.enter()
      const s = { hadConstructor: !1, hadSuperClass: e }
      let r = []
      const i = this.startNode()
      if (
        ((i.body = []),
        this.expect(Mn.braceL),
        this.withSmartMixTopicForbiddingContext(() => {
          for (; !this.match(Mn.braceR); ) {
            if (this.eat(Mn.semi)) {
              if (r.length > 0)
                throw this.raise(this.state.lastTokEnd, Xn.DecoratorSemicolon)
              continue
            }
            if (this.match(Mn.at)) {
              r.push(this.parseDecorator())
              continue
            }
            const e = this.startNode()
            r.length &&
              ((e.decorators = r),
              this.resetStartLocationFromNode(e, r[0]),
              (r = [])),
              this.parseClassMember(i, e, s),
              'constructor' === e.kind &&
                e.decorators &&
                e.decorators.length > 0 &&
                this.raise(e.start, Xn.DecoratorConstructor)
          }
        }),
        (this.state.strict = t),
        this.next(),
        r.length)
      )
        throw this.raise(this.state.start, Xn.TrailingDecorator)
      return this.classScope.exit(), this.finishNode(i, 'ClassBody')
    }
    parseClassMemberFromModifier(e, t) {
      const s = this.parseIdentifier(!0)
      if (this.isClassMethod()) {
        const r = t
        return (
          (r.kind = 'method'),
          (r.computed = !1),
          (r.key = s),
          (r.static = !1),
          this.pushClassMethod(e, r, !1, !1, !1, !1),
          !0
        )
      }
      if (this.isClassProperty()) {
        const r = t
        return (
          (r.computed = !1),
          (r.key = s),
          (r.static = !1),
          e.body.push(this.parseClassProperty(r)),
          !0
        )
      }
      return this.resetPreviousNodeTrailingComments(s), !1
    }
    parseClassMember(e, t, s) {
      const r = this.isContextual('static')
      if (r) {
        if (this.parseClassMemberFromModifier(e, t)) return
        if (this.eat(Mn.braceL)) return void this.parseClassStaticBlock(e, t)
      }
      this.parseClassMemberWithIsStatic(e, t, s, r)
    }
    parseClassMemberWithIsStatic(e, t, s, r) {
      const i = t,
        a = t,
        n = t,
        o = t,
        u = i,
        h = i
      if (((t.static = r), this.eat(Mn.star))) {
        u.kind = 'method'
        const t = this.match(Mn.privateName)
        return (
          this.parseClassElementName(u),
          t
            ? void this.pushClassPrivateMethod(e, a, !0, !1)
            : (this.isNonstaticConstructor(i) &&
                this.raise(i.key.start, Xn.ConstructorIsGenerator),
              void this.pushClassMethod(e, i, !0, !1, !1, !1))
        )
      }
      const c = this.match(Mn.name) && !this.state.containsEsc,
        p = this.match(Mn.privateName),
        l = this.parseClassElementName(t),
        d = this.state.start
      if ((this.parsePostMemberNameModifiers(h), this.isClassMethod())) {
        if (((u.kind = 'method'), p))
          return void this.pushClassPrivateMethod(e, a, !1, !1)
        const r = this.isNonstaticConstructor(i)
        let n = !1
        r &&
          ((i.kind = 'constructor'),
          s.hadConstructor &&
            !this.hasPlugin('typescript') &&
            this.raise(l.start, Xn.DuplicateConstructor),
          r &&
            this.hasPlugin('typescript') &&
            t.override &&
            this.raise(l.start, Xn.OverrideOnConstructor),
          (s.hadConstructor = !0),
          (n = s.hadSuperClass)),
          this.pushClassMethod(e, i, !1, !1, r, n)
      } else if (this.isClassProperty())
        p ? this.pushClassPrivateProperty(e, o) : this.pushClassProperty(e, n)
      else if (c && 'async' === l.name && !this.isLineTerminator()) {
        this.resetPreviousNodeTrailingComments(l)
        const t = this.eat(Mn.star)
        h.optional && this.unexpected(d), (u.kind = 'method')
        const s = this.match(Mn.privateName)
        this.parseClassElementName(u),
          this.parsePostMemberNameModifiers(h),
          s
            ? this.pushClassPrivateMethod(e, a, t, !0)
            : (this.isNonstaticConstructor(i) &&
                this.raise(i.key.start, Xn.ConstructorIsAsync),
              this.pushClassMethod(e, i, t, !0, !1, !1))
      } else if (
        !c ||
        ('get' !== l.name && 'set' !== l.name) ||
        (this.match(Mn.star) && this.isLineTerminator())
      )
        this.isLineTerminator()
          ? p
            ? this.pushClassPrivateProperty(e, o)
            : this.pushClassProperty(e, n)
          : this.unexpected()
      else {
        this.resetPreviousNodeTrailingComments(l), (u.kind = l.name)
        const t = this.match(Mn.privateName)
        this.parseClassElementName(i),
          t
            ? this.pushClassPrivateMethod(e, a, !1, !1)
            : (this.isNonstaticConstructor(i) &&
                this.raise(i.key.start, Xn.ConstructorIsAccessor),
              this.pushClassMethod(e, i, !1, !1, !1, !1)),
          this.checkGetterSetterParams(i)
      }
    }
    parseClassElementName(e) {
      const { type: t, value: s, start: r } = this.state
      return (
        (t !== Mn.name && t !== Mn.string) ||
          !e.static ||
          'prototype' !== s ||
          this.raise(r, Xn.StaticPrototype),
        t === Mn.privateName &&
          'constructor' === s &&
          this.raise(r, Xn.ConstructorClassPrivateField),
        this.parsePropertyName(e, !0)
      )
    }
    parseClassStaticBlock(e, t) {
      var s
      this.expectPlugin('classStaticBlock', t.start), this.scope.enter(208)
      const r = this.state.labels
      ;(this.state.labels = []), this.prodParam.enter(0)
      const i = (t.body = [])
      this.parseBlockOrModuleBlockBody(i, void 0, !1, Mn.braceR),
        this.prodParam.exit(),
        this.scope.exit(),
        (this.state.labels = r),
        e.body.push(this.finishNode(t, 'StaticBlock')),
        null != (s = t.decorators) &&
          s.length &&
          this.raise(t.start, Xn.DecoratorStaticBlock)
    }
    pushClassProperty(e, t) {
      t.computed ||
        ('constructor' !== t.key.name && 'constructor' !== t.key.value) ||
        this.raise(t.key.start, Xn.ConstructorClassField),
        e.body.push(this.parseClassProperty(t))
    }
    pushClassPrivateProperty(e, t) {
      const s = this.parseClassPrivateProperty(t)
      e.body.push(s),
        this.classScope.declarePrivateName(
          this.getPrivateNameSV(s.key),
          0,
          s.key.start
        )
    }
    pushClassMethod(e, t, s, r, i, a) {
      e.body.push(this.parseMethod(t, s, r, i, a, 'ClassMethod', !0))
    }
    pushClassPrivateMethod(e, t, s, r) {
      const i = this.parseMethod(t, s, r, !1, !1, 'ClassPrivateMethod', !0)
      e.body.push(i)
      const a =
        'get' === i.kind
          ? i.static
            ? 6
            : 2
          : 'set' === i.kind
          ? i.static
            ? 5
            : 1
          : 0
      this.classScope.declarePrivateName(
        this.getPrivateNameSV(i.key),
        a,
        i.key.start
      )
    }
    parsePostMemberNameModifiers(e) {}
    parseClassPrivateProperty(e) {
      return (
        this.parseInitializer(e),
        this.semicolon(),
        this.finishNode(e, 'ClassPrivateProperty')
      )
    }
    parseClassProperty(e) {
      return (
        this.parseInitializer(e),
        this.semicolon(),
        this.finishNode(e, 'ClassProperty')
      )
    }
    parseInitializer(e) {
      this.scope.enter(80),
        this.expressionScope.enter(Ho()),
        this.prodParam.enter(0),
        (e.value = this.eat(Mn.eq) ? this.parseMaybeAssignAllowIn() : null),
        this.expressionScope.exit(),
        this.prodParam.exit(),
        this.scope.exit()
    }
    parseClassId(e, t, s, r = 139) {
      this.match(Mn.name)
        ? ((e.id = this.parseIdentifier()),
          t && this.checkLVal(e.id, 'class name', r))
        : s || !t
        ? (e.id = null)
        : this.unexpected(null, Xn.MissingClassName)
    }
    parseClassSuper(e) {
      e.superClass = this.eat(Mn._extends) ? this.parseExprSubscripts() : null
    }
    parseExport(e) {
      const t = this.maybeParseExportDefaultSpecifier(e),
        s = !t || this.eat(Mn.comma),
        r = s && this.eatExportStar(e),
        i = r && this.maybeParseExportNamespaceSpecifier(e),
        a = s && (!i || this.eat(Mn.comma)),
        n = t || r
      if (r && !i)
        return (
          t && this.unexpected(),
          this.parseExportFrom(e, !0),
          this.finishNode(e, 'ExportAllDeclaration')
        )
      const o = this.maybeParseExportNamedSpecifiers(e)
      if ((t && s && !r && !o) || (i && a && !o))
        throw this.unexpected(null, Mn.braceL)
      let u
      if (
        (n || o
          ? ((u = !1), this.parseExportFrom(e, n))
          : (u = this.maybeParseExportDeclaration(e)),
        n || o || u)
      )
        return (
          this.checkExport(e, !0, !1, !!e.source),
          this.finishNode(e, 'ExportNamedDeclaration')
        )
      if (this.eat(Mn._default))
        return (
          (e.declaration = this.parseExportDefaultExpression()),
          this.checkExport(e, !0, !0),
          this.finishNode(e, 'ExportDefaultDeclaration')
        )
      throw this.unexpected(null, Mn.braceL)
    }
    eatExportStar(e) {
      return this.eat(Mn.star)
    }
    maybeParseExportDefaultSpecifier(e) {
      if (this.isExportDefaultSpecifier()) {
        this.expectPlugin('exportDefaultFrom')
        const t = this.startNode()
        return (
          (t.exported = this.parseIdentifier(!0)),
          (e.specifiers = [this.finishNode(t, 'ExportDefaultSpecifier')]),
          !0
        )
      }
      return !1
    }
    maybeParseExportNamespaceSpecifier(e) {
      if (this.isContextual('as')) {
        e.specifiers || (e.specifiers = [])
        const t = this.startNodeAt(
          this.state.lastTokStart,
          this.state.lastTokStartLoc
        )
        return (
          this.next(),
          (t.exported = this.parseModuleExportName()),
          e.specifiers.push(this.finishNode(t, 'ExportNamespaceSpecifier')),
          !0
        )
      }
      return !1
    }
    maybeParseExportNamedSpecifiers(e) {
      return (
        !!this.match(Mn.braceL) &&
        (e.specifiers || (e.specifiers = []),
        e.specifiers.push(...this.parseExportSpecifiers()),
        (e.source = null),
        (e.declaration = null),
        !0)
      )
    }
    maybeParseExportDeclaration(e) {
      return (
        !!this.shouldParseExportDeclaration() &&
        ((e.specifiers = []),
        (e.source = null),
        (e.declaration = this.parseExportDeclaration(e)),
        !0)
      )
    }
    isAsyncFunction() {
      if (!this.isContextual('async')) return !1
      const e = this.nextTokenStart()
      return (
        !Rn.test(this.input.slice(this.state.pos, e)) &&
        this.isUnparsedContextual(e, 'function')
      )
    }
    parseExportDefaultExpression() {
      const e = this.startNode(),
        t = this.isAsyncFunction()
      if (this.match(Mn._function) || t)
        return this.next(), t && this.next(), this.parseFunction(e, 5, t)
      if (this.match(Mn._class)) return this.parseClass(e, !0, !0)
      if (this.match(Mn.at))
        return (
          this.hasPlugin('decorators') &&
            this.getPluginOption('decorators', 'decoratorsBeforeExport') &&
            this.raise(this.state.start, Xn.DecoratorBeforeExport),
          this.parseDecorators(!1),
          this.parseClass(e, !0, !0)
        )
      if (this.match(Mn._const) || this.match(Mn._var) || this.isLet())
        throw this.raise(this.state.start, Xn.UnsupportedDefaultExport)
      {
        const e = this.parseMaybeAssignAllowIn()
        return this.semicolon(), e
      }
    }
    parseExportDeclaration(e) {
      return this.parseStatement(null)
    }
    isExportDefaultSpecifier() {
      if (this.match(Mn.name)) {
        const e = this.state.value
        if (('async' === e && !this.state.containsEsc) || 'let' === e) return !1
        if (('type' === e || 'interface' === e) && !this.state.containsEsc) {
          const e = this.lookahead()
          if (
            (e.type === Mn.name && 'from' !== e.value) ||
            e.type === Mn.braceL
          )
            return this.expectOnePlugin(['flow', 'typescript']), !1
        }
      } else if (!this.match(Mn._default)) return !1
      const e = this.nextTokenStart(),
        t = this.isUnparsedContextual(e, 'from')
      if (44 === this.input.charCodeAt(e) || (this.match(Mn.name) && t))
        return !0
      if (this.match(Mn._default) && t) {
        const t = this.input.charCodeAt(this.nextTokenStartSince(e + 4))
        return 34 === t || 39 === t
      }
      return !1
    }
    parseExportFrom(e, t) {
      if (this.eatContextual('from')) {
        ;(e.source = this.parseImportSource()), this.checkExport(e)
        const t = this.maybeParseImportAssertions()
        t && (e.assertions = t)
      } else t ? this.unexpected() : (e.source = null)
      this.semicolon()
    }
    shouldParseExportDeclaration() {
      if (
        this.match(Mn.at) &&
        (this.expectOnePlugin(['decorators', 'decorators-legacy']),
        this.hasPlugin('decorators'))
      ) {
        if (!this.getPluginOption('decorators', 'decoratorsBeforeExport'))
          return !0
        this.unexpected(this.state.start, Xn.DecoratorBeforeExport)
      }
      return (
        'var' === this.state.type.keyword ||
        'const' === this.state.type.keyword ||
        'function' === this.state.type.keyword ||
        'class' === this.state.type.keyword ||
        this.isLet() ||
        this.isAsyncFunction()
      )
    }
    checkExport(e, t, s, r) {
      if (t)
        if (s) {
          if (
            (this.checkDuplicateExports(e, 'default'),
            this.hasPlugin('exportDefaultFrom'))
          ) {
            var i
            const t = e.declaration
            'Identifier' !== t.type ||
              'from' !== t.name ||
              t.end - t.start != 4 ||
              (null != (i = t.extra) && i.parenthesized) ||
              this.raise(t.start, Xn.ExportDefaultFromAsIdentifier)
          }
        } else if (e.specifiers && e.specifiers.length)
          for (const t of e.specifiers) {
            const { exported: e } = t,
              s = 'Identifier' === e.type ? e.name : e.value
            if ((this.checkDuplicateExports(t, s), !r && t.local)) {
              const { local: e } = t
              'Identifier' !== e.type
                ? this.raise(t.start, Xn.ExportBindingIsString, e.value, s)
                : (this.checkReservedWord(e.name, e.start, !0, !1),
                  this.scope.checkLocalExport(e))
            }
          }
        else if (e.declaration)
          if (
            'FunctionDeclaration' === e.declaration.type ||
            'ClassDeclaration' === e.declaration.type
          ) {
            const t = e.declaration.id
            if (!t) throw new Error('Assertion failure')
            this.checkDuplicateExports(e, t.name)
          } else if ('VariableDeclaration' === e.declaration.type)
            for (const t of e.declaration.declarations)
              this.checkDeclaration(t.id)
      if (
        this.state.decoratorStack[this.state.decoratorStack.length - 1].length
      )
        throw this.raise(e.start, Xn.UnsupportedDecoratorExport)
    }
    checkDeclaration(e) {
      if ('Identifier' === e.type) this.checkDuplicateExports(e, e.name)
      else if ('ObjectPattern' === e.type)
        for (const t of e.properties) this.checkDeclaration(t)
      else if ('ArrayPattern' === e.type)
        for (const t of e.elements) t && this.checkDeclaration(t)
      else
        'ObjectProperty' === e.type
          ? this.checkDeclaration(e.value)
          : 'RestElement' === e.type
          ? this.checkDeclaration(e.argument)
          : 'AssignmentPattern' === e.type && this.checkDeclaration(e.left)
    }
    checkDuplicateExports(e, t) {
      this.exportedIdentifiers.has(t) &&
        this.raise(
          e.start,
          'default' === t ? Xn.DuplicateDefaultExport : Xn.DuplicateExport,
          t
        ),
        this.exportedIdentifiers.add(t)
    }
    parseExportSpecifiers() {
      const e = []
      let t = !0
      for (this.expect(Mn.braceL); !this.eat(Mn.braceR); ) {
        if (t) t = !1
        else if ((this.expect(Mn.comma), this.eat(Mn.braceR))) break
        const s = this.startNode(),
          r = this.match(Mn.string),
          i = this.parseModuleExportName()
        ;(s.local = i),
          this.eatContextual('as')
            ? (s.exported = this.parseModuleExportName())
            : (s.exported = r ? Jo(i) : Xo(i)),
          e.push(this.finishNode(s, 'ExportSpecifier'))
      }
      return e
    }
    parseModuleExportName() {
      if (this.match(Mn.string)) {
        const e = this.parseStringLiteral(this.state.value),
          t = e.value.match(wu)
        return (
          t &&
            this.raise(
              e.start,
              Xn.ModuleExportNameHasLoneSurrogate,
              t[0].charCodeAt(0).toString(16)
            ),
          e
        )
      }
      return this.parseIdentifier(!0)
    }
    parseImport(e) {
      if (((e.specifiers = []), !this.match(Mn.string))) {
        const t =
            !this.maybeParseDefaultImportSpecifier(e) || this.eat(Mn.comma),
          s = t && this.maybeParseStarImportSpecifier(e)
        t && !s && this.parseNamedImportSpecifiers(e),
          this.expectContextual('from')
      }
      e.source = this.parseImportSource()
      const t = this.maybeParseImportAssertions()
      if (t) e.assertions = t
      else {
        const t = this.maybeParseModuleAttributes()
        t && (e.attributes = t)
      }
      return this.semicolon(), this.finishNode(e, 'ImportDeclaration')
    }
    parseImportSource() {
      return this.match(Mn.string) || this.unexpected(), this.parseExprAtom()
    }
    shouldParseDefaultImport(e) {
      return this.match(Mn.name)
    }
    parseImportSpecifierLocal(e, t, s, r) {
      ;(t.local = this.parseIdentifier()),
        this.checkLVal(t.local, r, 9),
        e.specifiers.push(this.finishNode(t, s))
    }
    parseAssertEntries() {
      const e = [],
        t = new Set()
      do {
        if (this.match(Mn.braceR)) break
        const s = this.startNode(),
          r = this.state.value
        if (
          (t.has(r) &&
            this.raise(
              this.state.start,
              Xn.ModuleAttributesWithDuplicateKeys,
              r
            ),
          t.add(r),
          this.match(Mn.string)
            ? (s.key = this.parseStringLiteral(r))
            : (s.key = this.parseIdentifier(!0)),
          this.expect(Mn.colon),
          !this.match(Mn.string))
        )
          throw this.unexpected(
            this.state.start,
            Xn.ModuleAttributeInvalidValue
          )
        ;(s.value = this.parseStringLiteral(this.state.value)),
          this.finishNode(s, 'ImportAttribute'),
          e.push(s)
      } while (this.eat(Mn.comma))
      return e
    }
    maybeParseModuleAttributes() {
      if (!this.match(Mn._with) || this.hasPrecedingLineBreak())
        return this.hasPlugin('moduleAttributes') ? [] : null
      this.expectPlugin('moduleAttributes'), this.next()
      const e = [],
        t = new Set()
      do {
        const s = this.startNode()
        if (
          ((s.key = this.parseIdentifier(!0)),
          'type' !== s.key.name &&
            this.raise(
              s.key.start,
              Xn.ModuleAttributeDifferentFromType,
              s.key.name
            ),
          t.has(s.key.name) &&
            this.raise(
              s.key.start,
              Xn.ModuleAttributesWithDuplicateKeys,
              s.key.name
            ),
          t.add(s.key.name),
          this.expect(Mn.colon),
          !this.match(Mn.string))
        )
          throw this.unexpected(
            this.state.start,
            Xn.ModuleAttributeInvalidValue
          )
        ;(s.value = this.parseStringLiteral(this.state.value)),
          this.finishNode(s, 'ImportAttribute'),
          e.push(s)
      } while (this.eat(Mn.comma))
      return e
    }
    maybeParseImportAssertions() {
      if (!this.isContextual('assert') || this.hasPrecedingLineBreak())
        return this.hasPlugin('importAssertions') ? [] : null
      this.expectPlugin('importAssertions'), this.next(), this.eat(Mn.braceL)
      const e = this.parseAssertEntries()
      return this.eat(Mn.braceR), e
    }
    maybeParseDefaultImportSpecifier(e) {
      return (
        !!this.shouldParseDefaultImport(e) &&
        (this.parseImportSpecifierLocal(
          e,
          this.startNode(),
          'ImportDefaultSpecifier',
          'default import specifier'
        ),
        !0)
      )
    }
    maybeParseStarImportSpecifier(e) {
      if (this.match(Mn.star)) {
        const t = this.startNode()
        return (
          this.next(),
          this.expectContextual('as'),
          this.parseImportSpecifierLocal(
            e,
            t,
            'ImportNamespaceSpecifier',
            'import namespace specifier'
          ),
          !0
        )
      }
      return !1
    }
    parseNamedImportSpecifiers(e) {
      let t = !0
      for (this.expect(Mn.braceL); !this.eat(Mn.braceR); ) {
        if (t) t = !1
        else {
          if (this.eat(Mn.colon))
            throw this.raise(this.state.start, Xn.DestructureNamedImport)
          if ((this.expect(Mn.comma), this.eat(Mn.braceR))) break
        }
        this.parseImportSpecifier(e)
      }
    }
    parseImportSpecifier(e) {
      const t = this.startNode(),
        s = this.match(Mn.string)
      if (
        ((t.imported = this.parseModuleExportName()), this.eatContextual('as'))
      )
        t.local = this.parseIdentifier()
      else {
        const { imported: e } = t
        if (s) throw this.raise(t.start, Xn.ImportBindingIsString, e.value)
        this.checkReservedWord(e.name, t.start, !0, !0), (t.local = Xo(e))
      }
      this.checkLVal(t.local, 'import specifier', 9),
        e.specifiers.push(this.finishNode(t, 'ImportSpecifier'))
    }
    isThisParam(e) {
      return 'Identifier' === e.type && 'this' === e.name
    }
  } {
    constructor(e, t) {
      super(
        (e = (function (e) {
          const t = {}
          for (const s of Object.keys(gu))
            t[s] = e && null != e[s] ? e[s] : gu[s]
          return t
        })(e)),
        t
      ),
        (this.options = e),
        this.initializeScopes(),
        (this.plugins = (function (e) {
          const t = new Map()
          for (const s of e) {
            const [e, r] = Array.isArray(s) ? s : [s, {}]
            t.has(e) || t.set(e, r || {})
          }
          return t
        })(this.options.plugins)),
        (this.filename = e.sourceFilename)
    }
    getScopeHandler() {
      return Bo
    }
    parse() {
      this.enterInitialScopes()
      const e = this.startNode(),
        t = this.startNode()
      return (
        this.nextToken(),
        (e.errors = null),
        this.parseTopLevel(e, t),
        (e.errors = this.state.errors),
        e
      )
    }
  }
  function Nu(e, t) {
    let s = Bu
    return (
      null != e &&
        e.plugins &&
        (!(function (e) {
          if (fu(e, 'decorators')) {
            if (fu(e, 'decorators-legacy'))
              throw new Error(
                'Cannot use the decorators and decorators-legacy plugin together'
              )
            const t = yu(e, 'decorators', 'decoratorsBeforeExport')
            if (null == t)
              throw new Error(
                "The 'decorators' plugin requires a 'decoratorsBeforeExport' option, whose value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the 'decorators-legacy' plugin instead of 'decorators'."
              )
            if ('boolean' != typeof t)
              throw new Error("'decoratorsBeforeExport' must be a boolean.")
          }
          if (fu(e, 'flow') && fu(e, 'typescript'))
            throw new Error('Cannot combine flow and typescript plugins.')
          if (fu(e, 'placeholders') && fu(e, 'v8intrinsic'))
            throw new Error(
              'Cannot combine placeholders and v8intrinsic plugins.'
            )
          if (fu(e, 'pipelineOperator')) {
            const t = yu(e, 'pipelineOperator', 'proposal')
            if (!Au.includes(t)) {
              const e = Au.map((e) => `"${e}"`).join(', ')
              throw new Error(
                `"pipelineOperator" requires "proposal" option whose value must be one of: ${e}.`
              )
            }
            const s =
              fu(e, 'recordAndTuple') &&
              'hash' === yu(e, 'recordAndTuple', 'syntaxType')
            if ('hack' === t) {
              if (fu(e, 'placeholders'))
                throw new Error(
                  'Cannot combine placeholders plugin and Hack-style pipes.'
                )
              if (fu(e, 'v8intrinsic'))
                throw new Error(
                  'Cannot combine v8intrinsic plugin and Hack-style pipes.'
                )
              const t = yu(e, 'pipelineOperator', 'topicToken')
              if (!Eu.includes(t)) {
                const e = Eu.map((e) => `"${e}"`).join(', ')
                throw new Error(
                  `"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${e}.`
                )
              }
              if ('#' === t && s)
                throw new Error(
                  'Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.'
                )
            } else if ('smart' === t && s)
              throw new Error(
                'Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.'
              )
          }
          if (fu(e, 'moduleAttributes')) {
            if (fu(e, 'importAssertions'))
              throw new Error(
                'Cannot combine importAssertions and moduleAttributes plugins.'
              )
            if ('may-2020' !== yu(e, 'moduleAttributes', 'version'))
              throw new Error(
                "The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'."
              )
          }
          if (
            fu(e, 'recordAndTuple') &&
            !Cu.includes(yu(e, 'recordAndTuple', 'syntaxType'))
          )
            throw new Error(
              "'recordAndTuple' requires 'syntaxType' option whose value should be one of: " +
                Cu.map((e) => `'${e}'`).join(', ')
            )
          if (fu(e, 'asyncDoExpressions') && !fu(e, 'doExpressions')) {
            const e = new Error(
              "'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins."
            )
            throw ((e.missingPlugins = 'doExpressions'), e)
          }
        })(e.plugins),
        (s = (function (e) {
          const t = Fu.filter((t) => fu(e, t)),
            s = t.join('/')
          let r = Iu[s]
          if (!r) {
            r = Bu
            for (const e of t) r = xu[e](r)
            Iu[s] = r
          }
          return r
        })(e.plugins))),
      new s(e, t)
    )
  }
  const Iu = {}
  var vu = function (e, t) {
      var s
      if ('unambiguous' !== (null == (s = t) ? void 0 : s.sourceType))
        return Nu(t, e).parse()
      t = Object.assign({}, t)
      try {
        t.sourceType = 'module'
        const s = Nu(t, e),
          r = s.parse()
        if (s.sawUnambiguousESM) return r
        if (s.ambiguousScriptDifferentAst)
          try {
            return (t.sourceType = 'script'), Nu(t, e).parse()
          } catch (e) {}
        else r.program.sourceType = 'script'
        return r
      } catch (s) {
        try {
          return (t.sourceType = 'script'), Nu(t, e).parse()
        } catch (e) {}
        throw s
      }
    },
    ku = function (e, t) {
      const s = Nu(t, e)
      return s.options.strictMode && (s.state.strict = !0), s.getExpression()
    },
    Lu = Mn,
    Ou = Object.defineProperty(
      { parse: vu, parseExpression: ku, tokTypes: Lu },
      '__esModule',
      { value: !0 }
    )
  const { isNonEmptyArray: Mu } = ur
  function Ru(e = {}) {
    const { allowComments: t = !0 } = e
    return function (e) {
      const { parseExpression: s } = Ou
      let r
      try {
        r = s(e, { tokens: !0, ranges: !0 })
      } catch (e) {
        throw di(e)
      }
      if (!t && Mu(r.comments)) throw ju(r.comments[0], 'Comment')
      return _u(r), r
    }
  }
  function ju(e, t) {
    const [s, r] = [e.loc.start, e.loc.end].map(({ line: e, column: t }) => ({
      line: e,
      column: t + 1
    }))
    return li(`${t} is not allowed in JSON.`, { start: s, end: r })
  }
  function _u(e) {
    switch (e.type) {
      case 'ArrayExpression':
        for (const t of e.elements) null !== t && _u(t)
        return
      case 'ObjectExpression':
        for (const t of e.properties) _u(t)
        return
      case 'ObjectProperty':
        if (e.computed) throw ju(e.key, 'Computed key')
        if (e.shorthand) throw ju(e.key, 'Shorthand property')
        return 'Identifier' !== e.key.type && _u(e.key), void _u(e.value)
      case 'UnaryExpression': {
        const { operator: t, argument: s } = e
        if ('+' !== t && '-' !== t) throw ju(e, `Operator '${e.operator}'`)
        if (
          'NumericLiteral' === s.type ||
          ('Identifier' === s.type &&
            ('Infinity' === s.name || 'NaN' === s.name))
        )
          return
        throw ju(s, `Operator '${t}' before '${s.type}'`)
      }
      case 'Identifier':
        if ('Infinity' !== e.name && 'NaN' !== e.name && 'undefined' !== e.name)
          throw ju(e, `Identifier '${e.name}'`)
        return
      case 'TemplateLiteral':
        if (Mu(e.expressions))
          throw ju(e.expressions[0], "'TemplateLiteral' with expression")
        for (const t of e.quasis) _u(t)
        return
      case 'NullLiteral':
      case 'BooleanLiteral':
      case 'NumericLiteral':
      case 'StringLiteral':
      case 'TemplateElement':
        return
      default:
        throw ju(e, `'${e.type}'`)
    }
  }
  const Uu = Ru()
  var qu = {
    json: pi({ parse: Uu, hasPragma: () => !0 }),
    json5: pi(Uu),
    'json-stringify': pi({
      parse: Ru({ allowComments: !1 }),
      astFormat: 'estree-json'
    })
  }
  const {
      getNextNonSpaceNonCommentCharacterIndexWithStartIndex: $u,
      getShebang: Hu
    } = ur,
    Vu = {
      sourceType: 'module',
      allowImportExportEverywhere: !0,
      allowReturnOutsideFunction: !0,
      allowSuperOutsideMethod: !0,
      allowUndeclaredExports: !0,
      errorRecovery: !0,
      createParenthesizedExpressions: !0,
      plugins: [
        'doExpressions',
        'exportDefaultFrom',
        'functionBind',
        'functionSent',
        'throwExpressions',
        'partialApplication',
        ['decorators', { decoratorsBeforeExport: !1 }],
        'importAssertions',
        'decimal',
        'classStaticBlock',
        'moduleBlocks',
        'asyncDoExpressions'
      ],
      tokens: !0,
      ranges: !0
    },
    zu = ['recordAndTuple', { syntaxType: 'hash' }],
    Wu = 'v8intrinsic',
    Gu = [
      ['pipelineOperator', { proposal: 'hack', topicToken: '%' }],
      ['pipelineOperator', { proposal: 'minimal' }],
      ['pipelineOperator', { proposal: 'fsharp' }]
    ],
    Ku = (e, t = Vu) =>
      Object.assign(
        Object.assign({}, t),
        {},
        { plugins: [...t.plugins, ...e] }
      ),
    Xu = /@(?:no)?flow\b/
  function Ju(e, ...t) {
    return (s, r, i = {}) => {
      if (
        ('babel' === i.parser || '__babel_estree' === i.parser) &&
        (function (e, t) {
          if (t.filepath && t.filepath.endsWith('.js.flow')) return !0
          const s = Hu(e)
          s && (e = e.slice(s.length))
          const r = $u(e, 0)
          return !1 !== r && (e = e.slice(0, r)), Xu.test(e)
        })(s, i)
      )
        return (i.parser = 'babel-flow'), Qu(s, r, i)
      let a = t
      'script' === i.__babelSourceType &&
        (a = a.map((e) =>
          Object.assign(Object.assign({}, e), {}, { sourceType: 'script' })
        )),
        /#[[{]/.test(s) && (a = a.map((e) => Ku([zu], e)))
      const n = /%[A-Z]/.test(s)
      if (s.includes('|>')) {
        const e = n ? [...Gu, Wu] : Gu
        a = e.flatMap((e) => a.map((t) => Ku([e], t)))
      } else n && (a = a.map((e) => Ku([Wu], e)))
      const { result: o, error: u } = Qe(
        ...a.map(
          (t) => () =>
            (function (e, t, s) {
              const r = (0, Ou[e])(t, s),
                i = r.errors.find((e) => !sh.has(e.reasonCode))
              if (i) throw i
              return r
            })(e, s, t)
        )
      )
      if (!o) throw di(u)
      return Tn(o, Object.assign(Object.assign({}, i), {}, { originalText: s }))
    }
  }
  const Yu = Ju('parse', Ku(['jsx', 'flow'])),
    Qu = Ju('parse', Ku(['jsx', ['flow', { all: !0, enums: !0 }]])),
    Zu = Ju('parse', Ku(['jsx', 'typescript']), Ku(['typescript'])),
    eh = Ju('parse', Ku(['jsx', 'flow', 'estree'])),
    th = Ju('parseExpression', Ku(['jsx'])),
    sh = new Set([
      'StrictNumericEscape',
      'StrictWith',
      'StrictOctalLiteral',
      'EmptyTypeArguments',
      'EmptyTypeParameters',
      'ConstructorHasTypeParameters',
      'UnsupportedParameterPropertyKind',
      'UnexpectedParameterModifier',
      'MixedLabeledAndUnlabeledElements',
      'InvalidTupleMemberLabel',
      'NonClassMethodPropertyHasAbstractModifer',
      'ReadonlyForMethodSignature',
      'ClassMethodHasDeclare',
      'ClassMethodHasReadonly',
      'InvalidModifierOnTypeMember',
      'DuplicateAccessibilityModifier',
      'IndexSignatureHasDeclare',
      'DecoratorExportClass',
      'ParamDupe',
      'InvalidDecimal',
      'RestTrailingComma',
      'UnsupportedParameterDecorator',
      'UnterminatedJsxContent',
      'UnexpectedReservedWord',
      'ModuleAttributesWithDuplicateKeys',
      'LineTerminatorBeforeArrow',
      'InvalidEscapeSequenceTemplate',
      'NonAbstractClassHasAbstractMethod',
      'UnsupportedPropertyDecorator',
      'OptionalTypeBeforeRequired',
      'PatternIsOptional',
      'OptionalBindingPattern',
      'DeclareClassFieldHasInitializer',
      'TypeImportCannotSpecifyDefaultAndNamed',
      'DeclareFunctionHasImplementation',
      'ConstructorClassField',
      'VarRedeclaration',
      'InvalidPrivateFieldResolution',
      'DuplicateExport'
    ]),
    rh = pi(Yu),
    ih = pi(th)
  return {
    parsers: Object.assign(
      Object.assign(
        { babel: rh, 'babel-flow': pi(Qu), 'babel-ts': pi(Zu) },
        qu
      ),
      {},
      {
        __js_expression: ih,
        __vue_expression: ih,
        __vue_event_binding: rh,
        __babel_estree: pi(eh)
      }
    )
  }
})
