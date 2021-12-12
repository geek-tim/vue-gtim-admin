!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e =
        'undefined' != typeof globalThis ? globalThis : e || self).prettier =
        t())
})(this, function () {
  'use strict'
  var e = { version: '2.4.1' },
    t =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {}
  function n(e) {
    return e && Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e
  }
  function r(e) {
    var t = { exports: {} }
    return e(t, t.exports), t.exports
  }
  var i = r(function (e, t) {
      function n() {}
      function r(e, t, n, r, i) {
        for (var u = 0, o = t.length, s = 0, a = 0; u < o; u++) {
          var c = t[u]
          if (c.removed) {
            if (
              ((c.value = e.join(r.slice(a, a + c.count))),
              (a += c.count),
              u && t[u - 1].added)
            ) {
              var l = t[u - 1]
              ;(t[u - 1] = t[u]), (t[u] = l)
            }
          } else {
            if (!c.added && i) {
              var p = n.slice(s, s + c.count)
              ;(p = p.map(function (e, t) {
                var n = r[a + t]
                return n.length > e.length ? n : e
              })),
                (c.value = e.join(p))
            } else c.value = e.join(n.slice(s, s + c.count))
            ;(s += c.count), c.added || (a += c.count)
          }
        }
        var f = t[o - 1]
        return (
          o > 1 &&
            'string' == typeof f.value &&
            (f.added || f.removed) &&
            e.equals('', f.value) &&
            ((t[o - 2].value += f.value), t.pop()),
          t
        )
      }
      function i(e) {
        return { newPos: e.newPos, components: e.components.slice(0) }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = n),
        (n.prototype = {
          diff: function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              u = n.callback
            'function' == typeof n && ((u = n), (n = {})), (this.options = n)
            var o = this
            function s(e) {
              return u
                ? (setTimeout(function () {
                    u(void 0, e)
                  }, 0),
                  !0)
                : e
            }
            ;(e = this.castInput(e)),
              (t = this.castInput(t)),
              (e = this.removeEmpty(this.tokenize(e)))
            var a = (t = this.removeEmpty(this.tokenize(t))).length,
              c = e.length,
              l = 1,
              p = a + c,
              f = [{ newPos: -1, components: [] }],
              d = this.extractCommon(f[0], t, e, 0)
            if (f[0].newPos + 1 >= a && d + 1 >= c)
              return s([{ value: this.join(t), count: t.length }])
            function h() {
              for (var n = -1 * l; n <= l; n += 2) {
                var u = void 0,
                  p = f[n - 1],
                  d = f[n + 1],
                  h = (d ? d.newPos : 0) - n
                p && (f[n - 1] = void 0)
                var g = p && p.newPos + 1 < a,
                  m = d && 0 <= h && h < c
                if (g || m) {
                  if (
                    (!g || (m && p.newPos < d.newPos)
                      ? ((u = i(d)), o.pushComponent(u.components, void 0, !0))
                      : ((u = p).newPos++,
                        o.pushComponent(u.components, !0, void 0)),
                    (h = o.extractCommon(u, t, e, n)),
                    u.newPos + 1 >= a && h + 1 >= c)
                  )
                    return s(r(o, u.components, t, e, o.useLongestToken))
                  f[n] = u
                } else f[n] = void 0
              }
              l++
            }
            if (u)
              !(function e() {
                setTimeout(function () {
                  if (l > p) return u()
                  h() || e()
                }, 0)
              })()
            else
              for (; l <= p; ) {
                var g = h()
                if (g) return g
              }
          },
          pushComponent: function (e, t, n) {
            var r = e[e.length - 1]
            r && r.added === t && r.removed === n
              ? (e[e.length - 1] = { count: r.count + 1, added: t, removed: n })
              : e.push({ count: 1, added: t, removed: n })
          },
          extractCommon: function (e, t, n, r) {
            for (
              var i = t.length, u = n.length, o = e.newPos, s = o - r, a = 0;
              o + 1 < i && s + 1 < u && this.equals(t[o + 1], n[s + 1]);

            )
              o++, s++, a++
            return a && e.components.push({ count: a }), (e.newPos = o), s
          },
          equals: function (e, t) {
            return this.options.comparator
              ? this.options.comparator(e, t)
              : e === t ||
                  (this.options.ignoreCase &&
                    e.toLowerCase() === t.toLowerCase())
          },
          removeEmpty: function (e) {
            for (var t = [], n = 0; n < e.length; n++) e[n] && t.push(e[n])
            return t
          },
          castInput: function (e) {
            return e
          },
          tokenize: function (e) {
            return e.split('')
          },
          join: function (e) {
            return e.join('')
          }
        })
    }),
    u = r(function (e, t) {
      var n
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.diffChars = function (e, t, n) {
          return r.diff(e, t, n)
        }),
        (t.characterDiff = void 0)
      var r = new ((n = i) && n.__esModule ? n : { default: n }).default()
      t.characterDiff = r
    }),
    o = function (e, t) {
      if ('function' == typeof e) t.callback = e
      else if (e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
      return t
    }
  var s,
    a,
    c = Object.defineProperty({ generateOptions: o }, '__esModule', {
      value: !0
    }),
    l = r(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.diffWords = function (e, t, n) {
          return (
            (n = (0, c.generateOptions)(n, { ignoreWhitespace: !0 })),
            s.diff(e, t, n)
          )
        }),
        (t.diffWordsWithSpace = function (e, t, n) {
          return s.diff(e, t, n)
        }),
        (t.wordDiff = void 0)
      var n,
        r = (n = i) && n.__esModule ? n : { default: n }
      var u = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
        o = /\S/,
        s = new r.default()
      ;(t.wordDiff = s),
        (s.equals = function (e, t) {
          return (
            this.options.ignoreCase &&
              ((e = e.toLowerCase()), (t = t.toLowerCase())),
            e === t ||
              (this.options.ignoreWhitespace && !o.test(e) && !o.test(t))
          )
        }),
        (s.tokenize = function (e) {
          for (
            var t = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), n = 0;
            n < t.length - 1;
            n++
          )
            !t[n + 1] &&
              t[n + 2] &&
              u.test(t[n]) &&
              u.test(t[n + 2]) &&
              ((t[n] += t[n + 2]), t.splice(n + 1, 2), n--)
          return t
        })
    }),
    p = r(function (e, t) {
      var n
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.diffLines = function (e, t, n) {
          return r.diff(e, t, n)
        }),
        (t.diffTrimmedLines = function (e, t, n) {
          var i = (0, c.generateOptions)(n, { ignoreWhitespace: !0 })
          return r.diff(e, t, i)
        }),
        (t.lineDiff = void 0)
      var r = new ((n = i) && n.__esModule ? n : { default: n }).default()
      ;(t.lineDiff = r),
        (r.tokenize = function (e) {
          var t = [],
            n = e.split(/(\n|\r\n)/)
          n[n.length - 1] || n.pop()
          for (var r = 0; r < n.length; r++) {
            var i = n[r]
            r % 2 && !this.options.newlineIsToken
              ? (t[t.length - 1] += i)
              : (this.options.ignoreWhitespace && (i = i.trim()), t.push(i))
          }
          return t
        })
    }),
    f = r(function (e, t) {
      var n
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.diffSentences = function (e, t, n) {
          return r.diff(e, t, n)
        }),
        (t.sentenceDiff = void 0)
      var r = new ((n = i) && n.__esModule ? n : { default: n }).default()
      ;(t.sentenceDiff = r),
        (r.tokenize = function (e) {
          return e.split(/(\S.+?[.!?])(?=\s+|$)/)
        })
    }),
    d = r(function (e, t) {
      var n
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.diffCss = function (e, t, n) {
          return r.diff(e, t, n)
        }),
        (t.cssDiff = void 0)
      var r = new ((n = i) && n.__esModule ? n : { default: n }).default()
      ;(t.cssDiff = r),
        (r.tokenize = function (e) {
          return e.split(/([{}:;,]|\s+)/)
        })
    }),
    h = function (e) {
      return e && e.Math == Math && e
    },
    g =
      h('object' == typeof globalThis && globalThis) ||
      h('object' == typeof window && window) ||
      h('object' == typeof self && self) ||
      h('object' == typeof t && t) ||
      (function () {
        return this
      })() ||
      Function('return this')(),
    m = function (e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    },
    y = !m(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7
          }
        })[1]
      )
    }),
    D = {}.propertyIsEnumerable,
    E = Object.getOwnPropertyDescriptor,
    C = {
      f:
        E && !D.call({ 1: 2 }, 1)
          ? function (e) {
              var t = E(this, e)
              return !!t && t.enumerable
            }
          : D
    },
    b = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    },
    A = {}.toString,
    v = function (e) {
      return A.call(e).slice(8, -1)
    },
    F = ''.split,
    x = m(function () {
      return !Object('z').propertyIsEnumerable(0)
    })
      ? function (e) {
          return 'String' == v(e) ? F.call(e, '') : Object(e)
        }
      : Object,
    S = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e)
      return e
    },
    w = function (e) {
      return x(S(e))
    },
    T = function (e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e
    },
    B = function (e) {
      return 'function' == typeof e ? e : void 0
    },
    N = function (e, t) {
      return arguments.length < 2 ? B(g[e]) : g[e] && g[e][t]
    },
    k = N('navigator', 'userAgent') || '',
    P = g.process,
    O = g.Deno,
    I = (P && P.versions) || (O && O.version),
    L = I && I.v8
  L
    ? (a = (s = L.split('.'))[0] < 4 ? 1 : s[0] + s[1])
    : k &&
      (!(s = k.match(/Edge\/(\d+)/)) || s[1] >= 74) &&
      (s = k.match(/Chrome\/(\d+)/)) &&
      (a = s[1])
  var j = a && +a,
    _ =
      !!Object.getOwnPropertySymbols &&
      !m(function () {
        var e = Symbol()
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && j && j < 41)
        )
      }),
    M = _ && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    R = M
      ? function (e) {
          return 'symbol' == typeof e
        }
      : function (e) {
          var t = N('Symbol')
          return 'function' == typeof t && Object(e) instanceof t
        },
    $ = function (e, t) {
      try {
        Object.defineProperty(g, e, {
          value: t,
          configurable: !0,
          writable: !0
        })
      } catch (n) {
        g[e] = t
      }
      return t
    },
    V = '__core-js_shared__',
    W = g[V] || $(V, {}),
    q = r(function (e) {
      ;(e.exports = function (e, t) {
        return W[e] || (W[e] = void 0 !== t ? t : {})
      })('versions', []).push({
        version: '3.17.3',
        mode: 'global',
        copyright: '\xa9 2021 Denis Pushkarev (zloirock.ru)'
      })
    }),
    U = function (e) {
      return Object(S(e))
    },
    z = {}.hasOwnProperty,
    G =
      Object.hasOwn ||
      function (e, t) {
        return z.call(U(e), t)
      },
    H = 0,
    J = Math.random(),
    X = function (e) {
      return (
        'Symbol(' +
        String(void 0 === e ? '' : e) +
        ')_' +
        (++H + J).toString(36)
      )
    },
    Y = q('wks'),
    K = g.Symbol,
    Q = M ? K : (K && K.withoutSetter) || X,
    Z = function (e) {
      return (
        (G(Y, e) && (_ || 'string' == typeof Y[e])) ||
          (_ && G(K, e) ? (Y[e] = K[e]) : (Y[e] = Q('Symbol.' + e))),
        Y[e]
      )
    },
    ee = Z('toPrimitive'),
    te = function (e, t) {
      if (!T(e) || R(e)) return e
      var n,
        r = e[ee]
      if (void 0 !== r) {
        if (
          (void 0 === t && (t = 'default'), (n = r.call(e, t)), !T(n) || R(n))
        )
          return n
        throw TypeError("Can't convert object to primitive value")
      }
      return (
        void 0 === t && (t = 'number'),
        (function (e, t) {
          var n, r
          if (
            'string' === t &&
            'function' == typeof (n = e.toString) &&
            !T((r = n.call(e)))
          )
            return r
          if ('function' == typeof (n = e.valueOf) && !T((r = n.call(e))))
            return r
          if (
            'string' !== t &&
            'function' == typeof (n = e.toString) &&
            !T((r = n.call(e)))
          )
            return r
          throw TypeError("Can't convert object to primitive value")
        })(e, t)
      )
    },
    ne = function (e) {
      var t = te(e, 'string')
      return R(t) ? t : String(t)
    },
    re = g.document,
    ie = T(re) && T(re.createElement),
    ue =
      !y &&
      !m(function () {
        return (
          7 !=
          Object.defineProperty(
            ((e = 'div'), ie ? re.createElement(e) : {}),
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
    oe = Object.getOwnPropertyDescriptor,
    se = {
      f: y
        ? oe
        : function (e, t) {
            if (((e = w(e)), (t = ne(t)), ue))
              try {
                return oe(e, t)
              } catch (e) {}
            if (G(e, t)) return b(!C.f.call(e, t), e[t])
          }
    },
    ae = function (e) {
      if (!T(e)) throw TypeError(String(e) + ' is not an object')
      return e
    },
    ce = Object.defineProperty,
    le = {
      f: y
        ? ce
        : function (e, t, n) {
            if ((ae(e), (t = ne(t)), ae(n), ue))
              try {
                return ce(e, t, n)
              } catch (e) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported')
            return 'value' in n && (e[t] = n.value), e
          }
    },
    pe = y
      ? function (e, t, n) {
          return le.f(e, t, b(1, n))
        }
      : function (e, t, n) {
          return (e[t] = n), e
        },
    fe = Function.toString
  'function' != typeof W.inspectSource &&
    (W.inspectSource = function (e) {
      return fe.call(e)
    })
  var de,
    he,
    ge,
    me,
    ye = W.inspectSource,
    De = g.WeakMap,
    Ee = 'function' == typeof De && /native code/.test(ye(De)),
    Ce = q('keys'),
    be = {},
    Ae = 'Object already initialized',
    ve = g.WeakMap
  if (Ee || W.state) {
    var Fe = W.state || (W.state = new ve()),
      xe = Fe.get,
      Se = Fe.has,
      we = Fe.set
    ;(de = function (e, t) {
      if (Se.call(Fe, e)) throw new TypeError(Ae)
      return (t.facade = e), we.call(Fe, e, t), t
    }),
      (he = function (e) {
        return xe.call(Fe, e) || {}
      }),
      (ge = function (e) {
        return Se.call(Fe, e)
      })
  } else {
    var Te = Ce[(me = 'state')] || (Ce[me] = X(me))
    ;(be[Te] = !0),
      (de = function (e, t) {
        if (G(e, Te)) throw new TypeError(Ae)
        return (t.facade = e), pe(e, Te, t), t
      }),
      (he = function (e) {
        return G(e, Te) ? e[Te] : {}
      }),
      (ge = function (e) {
        return G(e, Te)
      })
  }
  var Be,
    Ne,
    ke = {
      set: de,
      get: he,
      has: ge,
      enforce: function (e) {
        return ge(e) ? he(e) : de(e, {})
      },
      getterFor: function (e) {
        return function (t) {
          var n
          if (!T(t) || (n = he(t)).type !== e)
            throw TypeError('Incompatible receiver, ' + e + ' required')
          return n
        }
      }
    },
    Pe = r(function (e) {
      var t = ke.get,
        n = ke.enforce,
        r = String(String).split('String')
      ;(e.exports = function (e, t, i, u) {
        var o,
          s = !!u && !!u.unsafe,
          a = !!u && !!u.enumerable,
          c = !!u && !!u.noTargetGet
        'function' == typeof i &&
          ('string' != typeof t || G(i, 'name') || pe(i, 'name', t),
          (o = n(i)).source ||
            (o.source = r.join('string' == typeof t ? t : ''))),
          e !== g
            ? (s ? !c && e[t] && (a = !0) : delete e[t],
              a ? (e[t] = i) : pe(e, t, i))
            : a
            ? (e[t] = i)
            : $(t, i)
      })(Function.prototype, 'toString', function () {
        return ('function' == typeof this && t(this).source) || ye(this)
      })
    }),
    Oe = Math.ceil,
    Ie = Math.floor,
    Le = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? Ie : Oe)(e)
    },
    je = Math.min,
    _e = function (e) {
      return e > 0 ? je(Le(e), 9007199254740991) : 0
    },
    Me = Math.max,
    Re = Math.min,
    $e = function (e) {
      return function (t, n, r) {
        var i,
          u = w(t),
          o = _e(u.length),
          s = (function (e, t) {
            var n = Le(e)
            return n < 0 ? Me(n + t, 0) : Re(n, t)
          })(r, o)
        if (e && n != n) {
          for (; o > s; ) if ((i = u[s++]) != i) return !0
        } else
          for (; o > s; s++) if ((e || s in u) && u[s] === n) return e || s || 0
        return !e && -1
      }
    },
    Ve = { includes: $e(!0), indexOf: $e(!1) }.indexOf,
    We = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ].concat('length', 'prototype'),
    qe = {
      f:
        Object.getOwnPropertyNames ||
        function (e) {
          return (function (e, t) {
            var n,
              r = w(e),
              i = 0,
              u = []
            for (n in r) !G(be, n) && G(r, n) && u.push(n)
            for (; t.length > i; )
              G(r, (n = t[i++])) && (~Ve(u, n) || u.push(n))
            return u
          })(e, We)
        }
    },
    Ue = { f: Object.getOwnPropertySymbols },
    ze =
      N('Reflect', 'ownKeys') ||
      function (e) {
        var t = qe.f(ae(e)),
          n = Ue.f
        return n ? t.concat(n(e)) : t
      },
    Ge = function (e, t) {
      for (var n = ze(t), r = le.f, i = se.f, u = 0; u < n.length; u++) {
        var o = n[u]
        G(e, o) || r(e, o, i(t, o))
      }
    },
    He = /#|\.prototype\./,
    Je = function (e, t) {
      var n = Ye[Xe(e)]
      return n == Qe || (n != Ke && ('function' == typeof t ? m(t) : !!t))
    },
    Xe = (Je.normalize = function (e) {
      return String(e).replace(He, '.').toLowerCase()
    }),
    Ye = (Je.data = {}),
    Ke = (Je.NATIVE = 'N'),
    Qe = (Je.POLYFILL = 'P'),
    Ze = Je,
    et = se.f,
    tt = function (e, t) {
      var n,
        r,
        i,
        u,
        o,
        s = e.target,
        a = e.global,
        c = e.stat
      if ((n = a ? g : c ? g[s] || $(s, {}) : (g[s] || {}).prototype))
        for (r in t) {
          if (
            ((u = t[r]),
            (i = e.noTargetGet ? (o = et(n, r)) && o.value : n[r]),
            !Ze(a ? r : s + (c ? '.' : '#') + r, e.forced) && void 0 !== i)
          ) {
            if (typeof u == typeof i) continue
            Ge(u, i)
          }
          ;(e.sham || (i && i.sham)) && pe(u, 'sham', !0), Pe(n, r, u, e)
        }
    },
    nt = function (e) {
      if ('function' != typeof e)
        throw TypeError(String(e) + ' is not a function')
      return e
    },
    rt = function (e) {
      if (R(e)) throw TypeError('Cannot convert a Symbol value to a string')
      return String(e)
    },
    it = Math.floor,
    ut = function (e, t) {
      var n = e.length,
        r = it(n / 2)
      return n < 8 ? ot(e, t) : st(ut(e.slice(0, r), t), ut(e.slice(r), t), t)
    },
    ot = function (e, t) {
      for (var n, r, i = e.length, u = 1; u < i; ) {
        for (r = u, n = e[u]; r && t(e[r - 1], n) > 0; ) e[r] = e[--r]
        r !== u++ && (e[r] = n)
      }
      return e
    },
    st = function (e, t, n) {
      for (
        var r = e.length, i = t.length, u = 0, o = 0, s = [];
        u < r || o < i;

      )
        u < r && o < i
          ? s.push(n(e[u], t[o]) <= 0 ? e[u++] : t[o++])
          : s.push(u < r ? e[u++] : t[o++])
      return s
    },
    at = ut,
    ct = k.match(/firefox\/(\d+)/i),
    lt = !!ct && +ct[1],
    pt = /MSIE|Trident/.test(k),
    ft = k.match(/AppleWebKit\/(\d+)\./),
    dt = !!ft && +ft[1],
    ht = [],
    gt = ht.sort,
    mt = m(function () {
      ht.sort(void 0)
    }),
    yt = m(function () {
      ht.sort(null)
    }),
    Dt =
      !!(Ne = []['sort']) &&
      m(function () {
        Ne.call(
          null,
          Be ||
            function () {
              throw 1
            },
          1
        )
      }),
    Et = !m(function () {
      if (j) return j < 70
      if (!(lt && lt > 3)) {
        if (pt) return !0
        if (dt) return dt < 603
        var e,
          t,
          n,
          r,
          i = ''
        for (e = 65; e < 76; e++) {
          switch (((t = String.fromCharCode(e)), e)) {
            case 66:
            case 69:
            case 70:
            case 72:
              n = 3
              break
            case 68:
            case 71:
              n = 4
              break
            default:
              n = 2
          }
          for (r = 0; r < 47; r++) ht.push({ k: t + r, v: n })
        }
        for (
          ht.sort(function (e, t) {
            return t.v - e.v
          }),
            r = 0;
          r < ht.length;
          r++
        )
          (t = ht[r].k.charAt(0)), i.charAt(i.length - 1) !== t && (i += t)
        return 'DGBEFHACIJK' !== i
      }
    })
  tt(
    { target: 'Array', proto: !0, forced: mt || !yt || !Dt || !Et },
    {
      sort: function (e) {
        void 0 !== e && nt(e)
        var t = U(this)
        if (Et) return void 0 === e ? gt.call(t) : gt.call(t, e)
        var n,
          r,
          i = [],
          u = _e(t.length)
        for (r = 0; r < u; r++) r in t && i.push(t[r])
        for (
          n = (i = at(
            i,
            (function (e) {
              return function (t, n) {
                return void 0 === n
                  ? -1
                  : void 0 === t
                  ? 1
                  : void 0 !== e
                  ? +e(t, n) || 0
                  : rt(t) > rt(n)
                  ? 1
                  : -1
              }
            })(e)
          )).length,
            r = 0;
          r < n;

        )
          t[r] = i[r++]
        for (; r < u; ) delete t[r++]
        return t
      }
    }
  )
  var Ct = r(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.diffJson = function (e, t, n) {
          return s.diff(e, t, n)
        }),
        (t.canonicalize = a),
        (t.jsonDiff = void 0)
      var n,
        r = (n = i) && n.__esModule ? n : { default: n }
      function u(e) {
        return (u =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      var o = Object.prototype.toString,
        s = new r.default()
      function a(e, t, n, r, i) {
        var s, c
        for (
          t = t || [], n = n || [], r && (e = r(i, e)), s = 0;
          s < t.length;
          s += 1
        )
          if (t[s] === e) return n[s]
        if ('[object Array]' === o.call(e)) {
          for (
            t.push(e), c = new Array(e.length), n.push(c), s = 0;
            s < e.length;
            s += 1
          )
            c[s] = a(e[s], t, n, r, i)
          return t.pop(), n.pop(), c
        }
        if (
          (e && e.toJSON && (e = e.toJSON()), 'object' === u(e) && null !== e)
        ) {
          t.push(e), (c = {}), n.push(c)
          var l,
            p = []
          for (l in e) e.hasOwnProperty(l) && p.push(l)
          for (p.sort(), s = 0; s < p.length; s += 1)
            c[(l = p[s])] = a(e[l], t, n, r, l)
          t.pop(), n.pop()
        } else c = e
        return c
      }
      ;(t.jsonDiff = s),
        (s.useLongestToken = !0),
        (s.tokenize = p.lineDiff.tokenize),
        (s.castInput = function (e) {
          var t = this.options,
            n = t.undefinedReplacement,
            r = t.stringifyReplacer,
            i =
              void 0 === r
                ? function (e, t) {
                    return void 0 === t ? n : t
                  }
                : r
          return 'string' == typeof e
            ? e
            : JSON.stringify(a(e, null, null, i), i, '  ')
        }),
        (s.equals = function (e, t) {
          return r.default.prototype.equals.call(
            s,
            e.replace(/,([\r\n])/g, '$1'),
            t.replace(/,([\r\n])/g, '$1')
          )
        })
    }),
    bt = r(function (e, t) {
      var n
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.diffArrays = function (e, t, n) {
          return r.diff(e, t, n)
        }),
        (t.arrayDiff = void 0)
      var r = new ((n = i) && n.__esModule ? n : { default: n }).default()
      ;(t.arrayDiff = r),
        (r.tokenize = function (e) {
          return e.slice()
        }),
        (r.join = r.removeEmpty =
          function (e) {
            return e
          })
    }),
    At = function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e.split(/\r\n|[\n\v\f\r\x85]/),
        r = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        i = [],
        u = 0
      function o() {
        var e = {}
        for (i.push(e); u < n.length; ) {
          var r = n[u]
          if (/^(\-\-\-|\+\+\+|@@)\s/.test(r)) break
          var o = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(r)
          o && (e.index = o[1]), u++
        }
        for (s(e), s(e), e.hunks = []; u < n.length; ) {
          var c = n[u]
          if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(c)) break
          if (/^@@/.test(c)) e.hunks.push(a())
          else {
            if (c && t.strict)
              throw new Error(
                'Unknown line ' + (u + 1) + ' ' + JSON.stringify(c)
              )
            u++
          }
        }
      }
      function s(e) {
        var t = /^(---|\+\+\+)\s+(.*)$/.exec(n[u])
        if (t) {
          var r = '---' === t[1] ? 'old' : 'new',
            i = t[2].split('\t', 2),
            o = i[0].replace(/\\\\/g, '\\')
          ;/^".*"$/.test(o) && (o = o.substr(1, o.length - 2)),
            (e[r + 'FileName'] = o),
            (e[r + 'Header'] = (i[1] || '').trim()),
            u++
        }
      }
      function a() {
        var e = u,
          i = n[u++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),
          o = {
            oldStart: +i[1],
            oldLines: void 0 === i[2] ? 1 : +i[2],
            newStart: +i[3],
            newLines: void 0 === i[4] ? 1 : +i[4],
            lines: [],
            linedelimiters: []
          }
        0 === o.oldLines && (o.oldStart += 1),
          0 === o.newLines && (o.newStart += 1)
        for (
          var s = 0, a = 0;
          u < n.length &&
          !(
            0 === n[u].indexOf('--- ') &&
            u + 2 < n.length &&
            0 === n[u + 1].indexOf('+++ ') &&
            0 === n[u + 2].indexOf('@@')
          );
          u++
        ) {
          var c = 0 == n[u].length && u != n.length - 1 ? ' ' : n[u][0]
          if ('+' !== c && '-' !== c && ' ' !== c && '\\' !== c) break
          o.lines.push(n[u]),
            o.linedelimiters.push(r[u] || '\n'),
            '+' === c ? s++ : '-' === c ? a++ : ' ' === c && (s++, a++)
        }
        if (
          (s || 1 !== o.newLines || (o.newLines = 0),
          a || 1 !== o.oldLines || (o.oldLines = 0),
          t.strict)
        ) {
          if (s !== o.newLines)
            throw new Error(
              'Added line count did not match for hunk at line ' + (e + 1)
            )
          if (a !== o.oldLines)
            throw new Error(
              'Removed line count did not match for hunk at line ' + (e + 1)
            )
        }
        return o
      }
      for (; u < n.length; ) o()
      return i
    }
  var vt,
    Ft = Object.defineProperty({ parsePatch: At }, '__esModule', { value: !0 }),
    xt = r(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t, n) {
          var r = !0,
            i = !1,
            u = !1,
            o = 1
          return function s() {
            if (r && !u) {
              if ((i ? o++ : (r = !1), e + o <= n)) return o
              u = !0
            }
            if (!i) return u || (r = !0), t <= e - o ? -o++ : ((i = !0), s())
          }
        })
    }),
    St = Bt,
    wt = function (e, t) {
      'string' == typeof e && (e = (0, Ft.parsePatch)(e))
      var n = 0
      !(function r() {
        var i = e[n++]
        if (!i) return t.complete()
        t.loadFile(i, function (e, n) {
          if (e) return t.complete(e)
          var u = Bt(n, i, t)
          t.patched(i, u, function (e) {
            if (e) return t.complete(e)
            r()
          })
        })
      })()
    },
    Tt = (vt = xt) && vt.__esModule ? vt : { default: vt }
  function Bt(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
    if (
      ('string' == typeof t && (t = (0, Ft.parsePatch)(t)), Array.isArray(t))
    ) {
      if (t.length > 1)
        throw new Error('applyPatch only works with a single input.')
      t = t[0]
    }
    var r,
      i,
      u = e.split(/\r\n|[\n\v\f\r\x85]/),
      o = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
      s = t.hunks,
      a =
        n.compareLine ||
        function (e, t, n, r) {
          return t === r
        },
      c = 0,
      l = n.fuzzFactor || 0,
      p = 0,
      f = 0
    function d(e, t) {
      for (var n = 0; n < e.lines.length; n++) {
        var r = e.lines[n],
          i = r.length > 0 ? r[0] : ' ',
          o = r.length > 0 ? r.substr(1) : r
        if (' ' === i || '-' === i) {
          if (!a(t + 1, u[t], i, o) && ++c > l) return !1
          t++
        }
      }
      return !0
    }
    for (var h = 0; h < s.length; h++) {
      for (
        var g = s[h],
          m = u.length - g.oldLines,
          y = 0,
          D = f + g.oldStart - 1,
          E = (0, Tt.default)(D, p, m);
        void 0 !== y;
        y = E()
      )
        if (d(g, D + y)) {
          g.offset = f += y
          break
        }
      if (void 0 === y) return !1
      p = g.offset + g.oldStart + g.oldLines
    }
    for (var C = 0, b = 0; b < s.length; b++) {
      var A = s[b],
        v = A.oldStart + A.offset + C - 1
      C += A.newLines - A.oldLines
      for (var F = 0; F < A.lines.length; F++) {
        var x = A.lines[F],
          S = x.length > 0 ? x[0] : ' ',
          w = x.length > 0 ? x.substr(1) : x,
          T = A.linedelimiters[F]
        if (' ' === S) v++
        else if ('-' === S) u.splice(v, 1), o.splice(v, 1)
        else if ('+' === S) u.splice(v, 0, w), o.splice(v, 0, T), v++
        else if ('\\' === S) {
          var B = A.lines[F - 1] ? A.lines[F - 1][0] : null
          '+' === B ? (r = !0) : '-' === B && (i = !0)
        }
      }
    }
    if (r) for (; !u[u.length - 1]; ) u.pop(), o.pop()
    else i && (u.push(''), o.push('\n'))
    for (var N = 0; N < u.length - 1; N++) u[N] = u[N] + o[N]
    return u.join('')
  }
  var Nt = Object.defineProperty(
      { applyPatch: St, applyPatches: wt },
      '__esModule',
      { value: !0 }
    ),
    kt = _t,
    Pt = Mt,
    Ot = Rt,
    It = function (e, t, n, r, i, u) {
      return Rt(e, e, t, n, r, i, u)
    }
  function Lt(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return jt(e)
      })(e) ||
      (function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e)
      })(e) ||
      (function (e, t) {
        if (!e) return
        if ('string' == typeof e) return jt(e, t)
        var n = Object.prototype.toString.call(e).slice(8, -1)
        'Object' === n && e.constructor && (n = e.constructor.name)
        if ('Map' === n || 'Set' === n) return Array.from(e)
        if (
          'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return jt(e, t)
      })(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function jt(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
    return r
  }
  function _t(e, t, n, r, i, u, o) {
    o || (o = {}), void 0 === o.context && (o.context = 4)
    var s = (0, p.diffLines)(n, r, o)
    function a(e) {
      return e.map(function (e) {
        return ' ' + e
      })
    }
    s.push({ value: '', lines: [] })
    for (
      var c = [],
        l = 0,
        f = 0,
        d = [],
        h = 1,
        g = 1,
        m = function (e) {
          var t = s[e],
            i = t.lines || t.value.replace(/\n$/, '').split('\n')
          if (((t.lines = i), t.added || t.removed)) {
            var u
            if (!l) {
              var p = s[e - 1]
              ;(l = h),
                (f = g),
                p &&
                  ((d = o.context > 0 ? a(p.lines.slice(-o.context)) : []),
                  (l -= d.length),
                  (f -= d.length))
            }
            ;(u = d).push.apply(
              u,
              Lt(
                i.map(function (e) {
                  return (t.added ? '+' : '-') + e
                })
              )
            ),
              t.added ? (g += i.length) : (h += i.length)
          } else {
            if (l)
              if (i.length <= 2 * o.context && e < s.length - 2) {
                var m
                ;(m = d).push.apply(m, Lt(a(i)))
              } else {
                var y,
                  D = Math.min(i.length, o.context)
                ;(y = d).push.apply(y, Lt(a(i.slice(0, D))))
                var E = {
                  oldStart: l,
                  oldLines: h - l + D,
                  newStart: f,
                  newLines: g - f + D,
                  lines: d
                }
                if (e >= s.length - 2 && i.length <= o.context) {
                  var C = /\n$/.test(n),
                    b = /\n$/.test(r),
                    A = 0 == i.length && d.length > E.oldLines
                  !C &&
                    A &&
                    n.length > 0 &&
                    d.splice(E.oldLines, 0, '\\ No newline at end of file'),
                    ((C || A) && b) || d.push('\\ No newline at end of file')
                }
                c.push(E), (l = 0), (f = 0), (d = [])
              }
            ;(h += i.length), (g += i.length)
          }
        },
        y = 0;
      y < s.length;
      y++
    )
      m(y)
    return {
      oldFileName: e,
      newFileName: t,
      oldHeader: i,
      newHeader: u,
      hunks: c
    }
  }
  function Mt(e) {
    var t = []
    e.oldFileName == e.newFileName && t.push('Index: ' + e.oldFileName),
      t.push(
        '==================================================================='
      ),
      t.push(
        '--- ' +
          e.oldFileName +
          (void 0 === e.oldHeader ? '' : '\t' + e.oldHeader)
      ),
      t.push(
        '+++ ' +
          e.newFileName +
          (void 0 === e.newHeader ? '' : '\t' + e.newHeader)
      )
    for (var n = 0; n < e.hunks.length; n++) {
      var r = e.hunks[n]
      0 === r.oldLines && (r.oldStart -= 1),
        0 === r.newLines && (r.newStart -= 1),
        t.push(
          '@@ -' +
            r.oldStart +
            ',' +
            r.oldLines +
            ' +' +
            r.newStart +
            ',' +
            r.newLines +
            ' @@'
        ),
        t.push.apply(t, r.lines)
    }
    return t.join('\n') + '\n'
  }
  function Rt(e, t, n, r, i, u, o) {
    return Mt(_t(e, t, n, r, i, u, o))
  }
  var $t = Object.defineProperty(
      {
        structuredPatch: kt,
        formatPatch: Pt,
        createTwoFilesPatch: Ot,
        createPatch: It
      },
      '__esModule',
      { value: !0 }
    ),
    Vt = function (e, t) {
      if (e.length !== t.length) return !1
      return qt(e, t)
    },
    Wt = qt
  function qt(e, t) {
    if (t.length > e.length) return !1
    for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1
    return !0
  }
  var Ut = Object.defineProperty(
      { arrayEqual: Vt, arrayStartsWith: Wt },
      '__esModule',
      { value: !0 }
    ),
    zt = Xt,
    Gt = function (e, t, n) {
      ;(e = Yt(e, n)), (t = Yt(t, n))
      var r = {}
      ;(e.index || t.index) && (r.index = e.index || t.index)
      ;(e.newFileName || t.newFileName) &&
        (Kt(e)
          ? Kt(t)
            ? ((r.oldFileName = Qt(r, e.oldFileName, t.oldFileName)),
              (r.newFileName = Qt(r, e.newFileName, t.newFileName)),
              (r.oldHeader = Qt(r, e.oldHeader, t.oldHeader)),
              (r.newHeader = Qt(r, e.newHeader, t.newHeader)))
            : ((r.oldFileName = e.oldFileName),
              (r.newFileName = e.newFileName),
              (r.oldHeader = e.oldHeader),
              (r.newHeader = e.newHeader))
          : ((r.oldFileName = t.oldFileName || e.oldFileName),
            (r.newFileName = t.newFileName || e.newFileName),
            (r.oldHeader = t.oldHeader || e.oldHeader),
            (r.newHeader = t.newHeader || e.newHeader)))
      r.hunks = []
      var i = 0,
        u = 0,
        o = 0,
        s = 0
      for (; i < e.hunks.length || u < t.hunks.length; ) {
        var a = e.hunks[i] || { oldStart: 1 / 0 },
          c = t.hunks[u] || { oldStart: 1 / 0 }
        if (Zt(a, c))
          r.hunks.push(en(a, o)), i++, (s += a.newLines - a.oldLines)
        else if (Zt(c, a))
          r.hunks.push(en(c, s)), u++, (o += c.newLines - c.oldLines)
        else {
          var l = {
            oldStart: Math.min(a.oldStart, c.oldStart),
            oldLines: 0,
            newStart: Math.min(a.newStart + o, c.oldStart + s),
            newLines: 0,
            lines: []
          }
          tn(l, a.oldStart, a.lines, c.oldStart, c.lines),
            u++,
            i++,
            r.hunks.push(l)
        }
      }
      return r
    }
  function Ht(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return Jt(e)
      })(e) ||
      (function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e)
      })(e) ||
      (function (e, t) {
        if (!e) return
        if ('string' == typeof e) return Jt(e, t)
        var n = Object.prototype.toString.call(e).slice(8, -1)
        'Object' === n && e.constructor && (n = e.constructor.name)
        if ('Map' === n || 'Set' === n) return Array.from(e)
        if (
          'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return Jt(e, t)
      })(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function Jt(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
    return r
  }
  function Xt(e) {
    var t = pn(e.lines),
      n = t.oldLines,
      r = t.newLines
    void 0 !== n ? (e.oldLines = n) : delete e.oldLines,
      void 0 !== r ? (e.newLines = r) : delete e.newLines
  }
  function Yt(e, t) {
    if ('string' == typeof e) {
      if (/^@@/m.test(e) || /^Index:/m.test(e)) return (0, Ft.parsePatch)(e)[0]
      if (!t)
        throw new Error('Must provide a base reference or pass in a patch')
      return (0, $t.structuredPatch)(void 0, void 0, t, e)
    }
    return e
  }
  function Kt(e) {
    return e.newFileName && e.newFileName !== e.oldFileName
  }
  function Qt(e, t, n) {
    return t === n ? t : ((e.conflict = !0), { mine: t, theirs: n })
  }
  function Zt(e, t) {
    return e.oldStart < t.oldStart && e.oldStart + e.oldLines < t.oldStart
  }
  function en(e, t) {
    return {
      oldStart: e.oldStart,
      oldLines: e.oldLines,
      newStart: e.newStart + t,
      newLines: e.newLines,
      lines: e.lines
    }
  }
  function tn(e, t, n, r, i) {
    var u = { offset: t, lines: n, index: 0 },
      o = { offset: r, lines: i, index: 0 }
    for (
      on(e, u, o), on(e, o, u);
      u.index < u.lines.length && o.index < o.lines.length;

    ) {
      var s = u.lines[u.index],
        a = o.lines[o.index]
      if (('-' !== s[0] && '+' !== s[0]) || ('-' !== a[0] && '+' !== a[0]))
        if ('+' === s[0] && ' ' === a[0]) {
          var c
          ;(c = e.lines).push.apply(c, Ht(an(u)))
        } else if ('+' === a[0] && ' ' === s[0]) {
          var l
          ;(l = e.lines).push.apply(l, Ht(an(o)))
        } else
          '-' === s[0] && ' ' === a[0]
            ? rn(e, u, o)
            : '-' === a[0] && ' ' === s[0]
            ? rn(e, o, u, !0)
            : s === a
            ? (e.lines.push(s), u.index++, o.index++)
            : un(e, an(u), an(o))
      else nn(e, u, o)
    }
    sn(e, u), sn(e, o), Xt(e)
  }
  function nn(e, t, n) {
    var r = an(t),
      i = an(n)
    if (cn(r) && cn(i)) {
      var u, o
      if ((0, Ut.arrayStartsWith)(r, i) && ln(n, r, r.length - i.length))
        return void (u = e.lines).push.apply(u, Ht(r))
      if ((0, Ut.arrayStartsWith)(i, r) && ln(t, i, i.length - r.length))
        return void (o = e.lines).push.apply(o, Ht(i))
    } else if ((0, Ut.arrayEqual)(r, i)) {
      var s
      return void (s = e.lines).push.apply(s, Ht(r))
    }
    un(e, r, i)
  }
  function rn(e, t, n, r) {
    var i,
      u = an(t),
      o = (function (e, t) {
        var n = [],
          r = [],
          i = 0,
          u = !1,
          o = !1
        for (; i < t.length && e.index < e.lines.length; ) {
          var s = e.lines[e.index],
            a = t[i]
          if ('+' === a[0]) break
          if (((u = u || ' ' !== s[0]), r.push(a), i++, '+' === s[0]))
            for (o = !0; '+' === s[0]; ) n.push(s), (s = e.lines[++e.index])
          a.substr(1) === s.substr(1) ? (n.push(s), e.index++) : (o = !0)
        }
        '+' === (t[i] || '')[0] && u && (o = !0)
        if (o) return n
        for (; i < t.length; ) r.push(t[i++])
        return { merged: r, changes: n }
      })(n, u)
    o.merged
      ? (i = e.lines).push.apply(i, Ht(o.merged))
      : un(e, r ? o : u, r ? u : o)
  }
  function un(e, t, n) {
    ;(e.conflict = !0), e.lines.push({ conflict: !0, mine: t, theirs: n })
  }
  function on(e, t, n) {
    for (; t.offset < n.offset && t.index < t.lines.length; ) {
      var r = t.lines[t.index++]
      e.lines.push(r), t.offset++
    }
  }
  function sn(e, t) {
    for (; t.index < t.lines.length; ) {
      var n = t.lines[t.index++]
      e.lines.push(n)
    }
  }
  function an(e) {
    for (var t = [], n = e.lines[e.index][0]; e.index < e.lines.length; ) {
      var r = e.lines[e.index]
      if (('-' === n && '+' === r[0] && (n = '+'), n !== r[0])) break
      t.push(r), e.index++
    }
    return t
  }
  function cn(e) {
    return e.reduce(function (e, t) {
      return e && '-' === t[0]
    }, !0)
  }
  function ln(e, t, n) {
    for (var r = 0; r < n; r++) {
      var i = t[t.length - n + r].substr(1)
      if (e.lines[e.index + r] !== ' ' + i) return !1
    }
    return (e.index += n), !0
  }
  function pn(e) {
    var t = 0,
      n = 0
    return (
      e.forEach(function (e) {
        if ('string' != typeof e) {
          var r = pn(e.mine),
            i = pn(e.theirs)
          void 0 !== t &&
            (r.oldLines === i.oldLines ? (t += r.oldLines) : (t = void 0)),
            void 0 !== n &&
              (r.newLines === i.newLines ? (n += r.newLines) : (n = void 0))
        } else void 0 === n || ('+' !== e[0] && ' ' !== e[0]) || n++, void 0 === t || ('-' !== e[0] && ' ' !== e[0]) || t++
      }),
      { oldLines: t, newLines: n }
    )
  }
  var fn = Object.defineProperty(
      { calcLineCount: zt, merge: Gt },
      '__esModule',
      { value: !0 }
    ),
    dn = function (e) {
      for (var t, n, r = [], i = 0; i < e.length; i++)
        (t = e[i]), (n = t.added ? 1 : t.removed ? -1 : 0), r.push([n, t.value])
      return r
    }
  var hn = Object.defineProperty({ convertChangesToDMP: dn }, '__esModule', {
      value: !0
    }),
    gn = function (e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = e[n]
        r.added ? t.push('<ins>') : r.removed && t.push('<del>'),
          t.push(mn(r.value)),
          r.added ? t.push('</ins>') : r.removed && t.push('</del>')
      }
      return t.join('')
    }
  function mn(e) {
    var t = e
    return (t = (t = (t = (t = t.replace(/&/g, '&amp;')).replace(
      /</g,
      '&lt;'
    )).replace(/>/g, '&gt;')).replace(/"/g, '&quot;'))
  }
  var yn = Object.defineProperty({ convertChangesToXML: gn }, '__esModule', {
      value: !0
    }),
    Dn = r(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'Diff', {
          enumerable: !0,
          get: function () {
            return n.default
          }
        }),
        Object.defineProperty(t, 'diffChars', {
          enumerable: !0,
          get: function () {
            return u.diffChars
          }
        }),
        Object.defineProperty(t, 'diffWords', {
          enumerable: !0,
          get: function () {
            return l.diffWords
          }
        }),
        Object.defineProperty(t, 'diffWordsWithSpace', {
          enumerable: !0,
          get: function () {
            return l.diffWordsWithSpace
          }
        }),
        Object.defineProperty(t, 'diffLines', {
          enumerable: !0,
          get: function () {
            return p.diffLines
          }
        }),
        Object.defineProperty(t, 'diffTrimmedLines', {
          enumerable: !0,
          get: function () {
            return p.diffTrimmedLines
          }
        }),
        Object.defineProperty(t, 'diffSentences', {
          enumerable: !0,
          get: function () {
            return f.diffSentences
          }
        }),
        Object.defineProperty(t, 'diffCss', {
          enumerable: !0,
          get: function () {
            return d.diffCss
          }
        }),
        Object.defineProperty(t, 'diffJson', {
          enumerable: !0,
          get: function () {
            return Ct.diffJson
          }
        }),
        Object.defineProperty(t, 'canonicalize', {
          enumerable: !0,
          get: function () {
            return Ct.canonicalize
          }
        }),
        Object.defineProperty(t, 'diffArrays', {
          enumerable: !0,
          get: function () {
            return bt.diffArrays
          }
        }),
        Object.defineProperty(t, 'applyPatch', {
          enumerable: !0,
          get: function () {
            return Nt.applyPatch
          }
        }),
        Object.defineProperty(t, 'applyPatches', {
          enumerable: !0,
          get: function () {
            return Nt.applyPatches
          }
        }),
        Object.defineProperty(t, 'parsePatch', {
          enumerable: !0,
          get: function () {
            return Ft.parsePatch
          }
        }),
        Object.defineProperty(t, 'merge', {
          enumerable: !0,
          get: function () {
            return fn.merge
          }
        }),
        Object.defineProperty(t, 'structuredPatch', {
          enumerable: !0,
          get: function () {
            return $t.structuredPatch
          }
        }),
        Object.defineProperty(t, 'createTwoFilesPatch', {
          enumerable: !0,
          get: function () {
            return $t.createTwoFilesPatch
          }
        }),
        Object.defineProperty(t, 'createPatch', {
          enumerable: !0,
          get: function () {
            return $t.createPatch
          }
        }),
        Object.defineProperty(t, 'convertChangesToDMP', {
          enumerable: !0,
          get: function () {
            return hn.convertChangesToDMP
          }
        }),
        Object.defineProperty(t, 'convertChangesToXML', {
          enumerable: !0,
          get: function () {
            return yn.convertChangesToXML
          }
        })
      var n = (function (e) {
        return e && e.__esModule ? e : { default: e }
      })(i)
    })
  function En(e) {
    return { type: 'concat', parts: e }
  }
  function Cn(e) {
    return { type: 'indent', contents: e }
  }
  function bn(e, t) {
    return { type: 'align', contents: t, n: e }
  }
  function An(e, t = {}) {
    return {
      type: 'group',
      id: t.id,
      contents: e,
      break: Boolean(t.shouldBreak),
      expandedStates: t.expandedStates
    }
  }
  const vn = { type: 'break-parent' },
    Fn = { type: 'line', hard: !0 },
    xn = { type: 'line', hard: !0, literal: !0 },
    Sn = En([Fn, vn]),
    wn = En([xn, vn])
  var Tn = {
      concat: En,
      join: function (e, t) {
        const n = []
        for (let r = 0; r < t.length; r++) 0 !== r && n.push(e), n.push(t[r])
        return En(n)
      },
      line: { type: 'line' },
      softline: { type: 'line', soft: !0 },
      hardline: Sn,
      literalline: wn,
      group: An,
      conditionalGroup: function (e, t) {
        return An(
          e[0],
          Object.assign(Object.assign({}, t), {}, { expandedStates: e })
        )
      },
      fill: function (e) {
        return { type: 'fill', parts: e }
      },
      lineSuffix: function (e) {
        return { type: 'line-suffix', contents: e }
      },
      lineSuffixBoundary: { type: 'line-suffix-boundary' },
      cursor: { type: 'cursor', placeholder: Symbol('cursor') },
      breakParent: vn,
      ifBreak: function (e, t, n = {}) {
        return {
          type: 'if-break',
          breakContents: e,
          flatContents: t,
          groupId: n.groupId
        }
      },
      trim: { type: 'trim' },
      indent: Cn,
      indentIfBreak: function (e, t) {
        return {
          type: 'indent-if-break',
          contents: e,
          groupId: t.groupId,
          negate: t.negate
        }
      },
      align: bn,
      addAlignmentToDoc: function (e, t, n) {
        let r = e
        if (t > 0) {
          for (let e = 0; e < Math.floor(t / n); ++e) r = Cn(r)
          ;(r = bn(t % n, r)), (r = bn(Number.NEGATIVE_INFINITY, r))
        }
        return r
      },
      markAsRoot: function (e) {
        return bn({ type: 'root' }, e)
      },
      dedentToRoot: function (e) {
        return bn(Number.NEGATIVE_INFINITY, e)
      },
      dedent: function (e) {
        return bn(-1, e)
      },
      hardlineWithoutBreakParent: Fn,
      literallineWithoutBreakParent: xn,
      label: function (e, t) {
        return { type: 'label', label: e, contents: t }
      }
    },
    Bn = (e) =>
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
  const Nn = (e) =>
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
  var kn = Nn,
    Pn = Nn
  kn.default = Pn
  const On = (e) => {
    if ('string' != typeof e || 0 === e.length) return 0
    if (0 === (e = Bn(e)).length) return 0
    e = e.replace(
      /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g,
      '  '
    )
    let t = 0
    for (let n = 0; n < e.length; n++) {
      const r = e.codePointAt(n)
      r <= 31 ||
        (r >= 127 && r <= 159) ||
        (r >= 768 && r <= 879) ||
        (r > 65535 && n++, (t += kn(r) ? 2 : 1))
    }
    return t
  }
  var In = On,
    Ln = On
  In.default = Ln
  var jn = (e) => {
    if ('string' != typeof e) throw new TypeError('Expected a string')
    return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')
  }
  var _n = (e) => e[e.length - 1]
  function Mn(e, t) {
    if (null == e) return {}
    var n,
      r,
      i = (function (e, t) {
        if (null == e) return {}
        var n,
          r,
          i = {},
          u = Object.keys(e)
        for (r = 0; r < u.length; r++)
          (n = u[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
        return i
      })(e, t)
    if (Object.getOwnPropertySymbols) {
      var u = Object.getOwnPropertySymbols(e)
      for (r = 0; r < u.length; r++)
        (n = u[r]),
          t.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]))
    }
    return i
  }
  var Rn =
      Array.isArray ||
      function (e) {
        return 'Array' == v(e)
      },
    $n = function (e, t, n) {
      if ((nt(e), void 0 === t)) return e
      switch (n) {
        case 0:
          return function () {
            return e.call(t)
          }
        case 1:
          return function (n) {
            return e.call(t, n)
          }
        case 2:
          return function (n, r) {
            return e.call(t, n, r)
          }
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i)
          }
      }
      return function () {
        return e.apply(t, arguments)
      }
    },
    Vn = function (e, t, n, r, i, u, o, s) {
      for (var a, c = i, l = 0, p = !!o && $n(o, s, 3); l < r; ) {
        if (l in n) {
          if (((a = p ? p(n[l], l, t) : n[l]), u > 0 && Rn(a)))
            c = Vn(e, t, a, _e(a.length), c, u - 1) - 1
          else {
            if (c >= 9007199254740991)
              throw TypeError('Exceed the acceptable array length')
            e[c] = a
          }
          c++
        }
        l++
      }
      return c
    },
    Wn = Vn,
    qn = Z('species'),
    Un = function (e, t) {
      return new ((function (e) {
        var t
        return (
          Rn(e) &&
            ('function' != typeof (t = e.constructor) ||
            (t !== Array && !Rn(t.prototype))
              ? T(t) && null === (t = t[qn]) && (t = void 0)
              : (t = void 0)),
          void 0 === t ? Array : t
        )
      })(e))(0 === t ? 0 : t)
    }
  tt(
    { target: 'Array', proto: !0 },
    {
      flatMap: function (e) {
        var t,
          n = U(this),
          r = _e(n.length)
        return (
          nt(e),
          ((t = Un(n, 0)).length = Wn(
            t,
            n,
            n,
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
  var zn = {},
    Gn = Z('iterator'),
    Hn = Array.prototype,
    Jn = {}
  Jn[Z('toStringTag')] = 'z'
  var Xn = '[object z]' === String(Jn),
    Yn = Z('toStringTag'),
    Kn =
      'Arguments' ==
      v(
        (function () {
          return arguments
        })()
      ),
    Qn = Xn
      ? v
      : function (e) {
          var t, n, r
          return void 0 === e
            ? 'Undefined'
            : null === e
            ? 'Null'
            : 'string' ==
              typeof (n = (function (e, t) {
                try {
                  return e[t]
                } catch (e) {}
              })((t = Object(e)), Yn))
            ? n
            : Kn
            ? v(t)
            : 'Object' == (r = v(t)) && 'function' == typeof t.callee
            ? 'Arguments'
            : r
        },
    Zn = Z('iterator'),
    er = function (e) {
      if (null != e) return e[Zn] || e['@@iterator'] || zn[Qn(e)]
    },
    tr = function (e, t, n) {
      var r, i
      ae(e)
      try {
        if (void 0 === (r = e.return)) {
          if ('throw' === t) throw n
          return n
        }
        r = r.call(e)
      } catch (e) {
        ;(i = !0), (r = e)
      }
      if ('throw' === t) throw n
      if (i) throw r
      return ae(r), n
    },
    nr = function (e, t) {
      ;(this.stopped = e), (this.result = t)
    },
    rr = function (e, t, n) {
      var r,
        i,
        u,
        o,
        s,
        a,
        c,
        l,
        p = n && n.that,
        f = !(!n || !n.AS_ENTRIES),
        d = !(!n || !n.IS_ITERATOR),
        h = !(!n || !n.INTERRUPTED),
        g = $n(t, p, 1 + f + h),
        m = function (e) {
          return r && tr(r, 'normal', e), new nr(!0, e)
        },
        y = function (e) {
          return f
            ? (ae(e), h ? g(e[0], e[1], m) : g(e[0], e[1]))
            : h
            ? g(e, m)
            : g(e)
        }
      if (d) r = e
      else {
        if ('function' != typeof (i = er(e)))
          throw TypeError('Target is not iterable')
        if (void 0 !== (l = i) && (zn.Array === l || Hn[Gn] === l)) {
          for (u = 0, o = _e(e.length); o > u; u++)
            if ((s = y(e[u])) && s instanceof nr) return s
          return new nr(!1)
        }
        r = (function (e, t) {
          var n = arguments.length < 2 ? er(e) : t
          if ('function' != typeof n)
            throw TypeError(String(e) + ' is not iterable')
          return ae(n.call(e))
        })(e, i)
      }
      for (a = r.next; !(c = a.call(r)).done; ) {
        try {
          s = y(c.value)
        } catch (e) {
          tr(r, 'throw', e)
        }
        if ('object' == typeof s && s && s instanceof nr) return s
      }
      return new nr(!1)
    }
  tt(
    { target: 'Object', stat: !0 },
    {
      fromEntries: function (e) {
        var t = {}
        return (
          rr(
            e,
            function (e, n) {
              !(function (e, t, n) {
                var r = ne(t)
                r in e ? le.f(e, r, b(0, n)) : (e[r] = n)
              })(t, e, n)
            },
            { AS_ENTRIES: !0 }
          ),
          t
        )
      }
    }
  )
  var ir =
    void 0 !== ir
      ? ir
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : {}
  function ur() {
    throw new Error('setTimeout has not been defined')
  }
  function or() {
    throw new Error('clearTimeout has not been defined')
  }
  var sr = ur,
    ar = or
  function cr(e) {
    if (sr === setTimeout) return setTimeout(e, 0)
    if ((sr === ur || !sr) && setTimeout)
      return (sr = setTimeout), setTimeout(e, 0)
    try {
      return sr(e, 0)
    } catch (t) {
      try {
        return sr.call(null, e, 0)
      } catch (t) {
        return sr.call(this, e, 0)
      }
    }
  }
  'function' == typeof ir.setTimeout && (sr = setTimeout),
    'function' == typeof ir.clearTimeout && (ar = clearTimeout)
  var lr,
    pr = [],
    fr = !1,
    dr = -1
  function hr() {
    fr &&
      lr &&
      ((fr = !1),
      lr.length ? (pr = lr.concat(pr)) : (dr = -1),
      pr.length && gr())
  }
  function gr() {
    if (!fr) {
      var e = cr(hr)
      fr = !0
      for (var t = pr.length; t; ) {
        for (lr = pr, pr = []; ++dr < t; ) lr && lr[dr].run()
        ;(dr = -1), (t = pr.length)
      }
      ;(lr = null),
        (fr = !1),
        (function (e) {
          if (ar === clearTimeout) return clearTimeout(e)
          if ((ar === or || !ar) && clearTimeout)
            return (ar = clearTimeout), clearTimeout(e)
          try {
            ar(e)
          } catch (t) {
            try {
              return ar.call(null, e)
            } catch (t) {
              return ar.call(this, e)
            }
          }
        })(e)
    }
  }
  function mr(e, t) {
    ;(this.fun = e), (this.array = t)
  }
  mr.prototype.run = function () {
    this.fun.apply(null, this.array)
  }
  function yr() {}
  var Dr = yr,
    Er = yr,
    Cr = yr,
    br = yr,
    Ar = yr,
    vr = yr,
    Fr = yr
  var xr = ir.performance || {},
    Sr =
      xr.now ||
      xr.mozNow ||
      xr.msNow ||
      xr.oNow ||
      xr.webkitNow ||
      function () {
        return new Date().getTime()
      }
  var wr = new Date()
  var Tr = {
    nextTick: function (e) {
      var t = new Array(arguments.length - 1)
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      pr.push(new mr(e, t)), 1 !== pr.length || fr || cr(gr)
    },
    title: 'browser',
    browser: !0,
    env: {},
    argv: [],
    version: '',
    versions: {},
    on: Dr,
    addListener: Er,
    once: Cr,
    off: br,
    removeListener: Ar,
    removeAllListeners: vr,
    emit: Fr,
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
      var t = 0.001 * Sr.call(xr),
        n = Math.floor(t),
        r = Math.floor((t % 1) * 1e9)
      return e && ((n -= e[0]), (r -= e[1]) < 0 && (n--, (r += 1e9))), [n, r]
    },
    platform: 'browser',
    release: {},
    config: {},
    uptime: function () {
      return (new Date() - wr) / 1e3
    }
  }
  var Br =
    'object' == typeof Tr &&
    Tr.env &&
    Tr.env.NODE_DEBUG &&
    /\bsemver\b/i.test(Tr.env.NODE_DEBUG)
      ? (...e) => console.error('SEMVER', ...e)
      : () => {}
  var Nr = {
      SEMVER_SPEC_VERSION: '2.0.0',
      MAX_LENGTH: 256,
      MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991,
      MAX_SAFE_COMPONENT_LENGTH: 16
    },
    kr = r(function (e, t) {
      const { MAX_SAFE_COMPONENT_LENGTH: n } = Nr,
        r = ((t = e.exports = {}).re = []),
        i = (t.src = []),
        u = (t.t = {})
      let o = 0
      const s = (e, t, n) => {
        const s = o++
        Br(s, t),
          (u[e] = s),
          (i[s] = t),
          (r[s] = new RegExp(t, n ? 'g' : void 0))
      }
      s('NUMERICIDENTIFIER', '0|[1-9]\\d*'),
        s('NUMERICIDENTIFIERLOOSE', '[0-9]+'),
        s('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*'),
        s(
          'MAINVERSION',
          `(${i[u.NUMERICIDENTIFIER]})\\.(${i[u.NUMERICIDENTIFIER]})\\.(${
            i[u.NUMERICIDENTIFIER]
          })`
        ),
        s(
          'MAINVERSIONLOOSE',
          `(${i[u.NUMERICIDENTIFIERLOOSE]})\\.(${
            i[u.NUMERICIDENTIFIERLOOSE]
          })\\.(${i[u.NUMERICIDENTIFIERLOOSE]})`
        ),
        s(
          'PRERELEASEIDENTIFIER',
          `(?:${i[u.NUMERICIDENTIFIER]}|${i[u.NONNUMERICIDENTIFIER]})`
        ),
        s(
          'PRERELEASEIDENTIFIERLOOSE',
          `(?:${i[u.NUMERICIDENTIFIERLOOSE]}|${i[u.NONNUMERICIDENTIFIER]})`
        ),
        s(
          'PRERELEASE',
          `(?:-(${i[u.PRERELEASEIDENTIFIER]}(?:\\.${
            i[u.PRERELEASEIDENTIFIER]
          })*))`
        ),
        s(
          'PRERELEASELOOSE',
          `(?:-?(${i[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
            i[u.PRERELEASEIDENTIFIERLOOSE]
          })*))`
        ),
        s('BUILDIDENTIFIER', '[0-9A-Za-z-]+'),
        s(
          'BUILD',
          `(?:\\+(${i[u.BUILDIDENTIFIER]}(?:\\.${i[u.BUILDIDENTIFIER]})*))`
        ),
        s(
          'FULLPLAIN',
          `v?${i[u.MAINVERSION]}${i[u.PRERELEASE]}?${i[u.BUILD]}?`
        ),
        s('FULL', `^${i[u.FULLPLAIN]}$`),
        s(
          'LOOSEPLAIN',
          `[v=\\s]*${i[u.MAINVERSIONLOOSE]}${i[u.PRERELEASELOOSE]}?${
            i[u.BUILD]
          }?`
        ),
        s('LOOSE', `^${i[u.LOOSEPLAIN]}$`),
        s('GTLT', '((?:<|>)?=?)'),
        s('XRANGEIDENTIFIERLOOSE', `${i[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
        s('XRANGEIDENTIFIER', `${i[u.NUMERICIDENTIFIER]}|x|X|\\*`),
        s(
          'XRANGEPLAIN',
          `[v=\\s]*(${i[u.XRANGEIDENTIFIER]})(?:\\.(${
            i[u.XRANGEIDENTIFIER]
          })(?:\\.(${i[u.XRANGEIDENTIFIER]})(?:${i[u.PRERELEASE]})?${
            i[u.BUILD]
          }?)?)?`
        ),
        s(
          'XRANGEPLAINLOOSE',
          `[v=\\s]*(${i[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
            i[u.XRANGEIDENTIFIERLOOSE]
          })(?:\\.(${i[u.XRANGEIDENTIFIERLOOSE]})(?:${i[u.PRERELEASELOOSE]})?${
            i[u.BUILD]
          }?)?)?`
        ),
        s('XRANGE', `^${i[u.GTLT]}\\s*${i[u.XRANGEPLAIN]}$`),
        s('XRANGELOOSE', `^${i[u.GTLT]}\\s*${i[u.XRANGEPLAINLOOSE]}$`),
        s(
          'COERCE',
          `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`
        ),
        s('COERCERTL', i[u.COERCE], !0),
        s('LONETILDE', '(?:~>?)'),
        s('TILDETRIM', `(\\s*)${i[u.LONETILDE]}\\s+`, !0),
        (t.tildeTrimReplace = '$1~'),
        s('TILDE', `^${i[u.LONETILDE]}${i[u.XRANGEPLAIN]}$`),
        s('TILDELOOSE', `^${i[u.LONETILDE]}${i[u.XRANGEPLAINLOOSE]}$`),
        s('LONECARET', '(?:\\^)'),
        s('CARETTRIM', `(\\s*)${i[u.LONECARET]}\\s+`, !0),
        (t.caretTrimReplace = '$1^'),
        s('CARET', `^${i[u.LONECARET]}${i[u.XRANGEPLAIN]}$`),
        s('CARETLOOSE', `^${i[u.LONECARET]}${i[u.XRANGEPLAINLOOSE]}$`),
        s('COMPARATORLOOSE', `^${i[u.GTLT]}\\s*(${i[u.LOOSEPLAIN]})$|^$`),
        s('COMPARATOR', `^${i[u.GTLT]}\\s*(${i[u.FULLPLAIN]})$|^$`),
        s(
          'COMPARATORTRIM',
          `(\\s*)${i[u.GTLT]}\\s*(${i[u.LOOSEPLAIN]}|${i[u.XRANGEPLAIN]})`,
          !0
        ),
        (t.comparatorTrimReplace = '$1$2$3'),
        s(
          'HYPHENRANGE',
          `^\\s*(${i[u.XRANGEPLAIN]})\\s+-\\s+(${i[u.XRANGEPLAIN]})\\s*$`
        ),
        s(
          'HYPHENRANGELOOSE',
          `^\\s*(${i[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${
            i[u.XRANGEPLAINLOOSE]
          })\\s*$`
        ),
        s('STAR', '(<|>)?=?\\s*\\*'),
        s('GTE0', '^\\s*>=\\s*0.0.0\\s*$'),
        s('GTE0PRE', '^\\s*>=\\s*0.0.0-0\\s*$')
    })
  const Pr = ['includePrerelease', 'loose', 'rtl']
  var Or = (e) =>
    e
      ? 'object' != typeof e
        ? { loose: !0 }
        : Pr.filter((t) => e[t]).reduce((e, t) => ((e[t] = !0), e), {})
      : {}
  const Ir = /^[0-9]+$/,
    Lr = (e, t) => {
      const n = Ir.test(e),
        r = Ir.test(t)
      return (
        n && r && ((e = +e), (t = +t)),
        e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1
      )
    }
  var jr = { compareIdentifiers: Lr, rcompareIdentifiers: (e, t) => Lr(t, e) }
  const { MAX_LENGTH: _r, MAX_SAFE_INTEGER: Mr } = Nr,
    { re: Rr, t: $r } = kr,
    { compareIdentifiers: Vr } = jr
  class Wr {
    constructor(e, t) {
      if (((t = Or(t)), e instanceof Wr)) {
        if (
          e.loose === !!t.loose &&
          e.includePrerelease === !!t.includePrerelease
        )
          return e
        e = e.version
      } else if ('string' != typeof e) throw new TypeError(`Invalid Version: ${e}`)
      if (e.length > _r)
        throw new TypeError(`version is longer than ${_r} characters`)
      Br('SemVer', e, t),
        (this.options = t),
        (this.loose = !!t.loose),
        (this.includePrerelease = !!t.includePrerelease)
      const n = e.trim().match(t.loose ? Rr[$r.LOOSE] : Rr[$r.FULL])
      if (!n) throw new TypeError(`Invalid Version: ${e}`)
      if (
        ((this.raw = e),
        (this.major = +n[1]),
        (this.minor = +n[2]),
        (this.patch = +n[3]),
        this.major > Mr || this.major < 0)
      )
        throw new TypeError('Invalid major version')
      if (this.minor > Mr || this.minor < 0)
        throw new TypeError('Invalid minor version')
      if (this.patch > Mr || this.patch < 0)
        throw new TypeError('Invalid patch version')
      n[4]
        ? (this.prerelease = n[4].split('.').map((e) => {
            if (/^[0-9]+$/.test(e)) {
              const t = +e
              if (t >= 0 && t < Mr) return t
            }
            return e
          }))
        : (this.prerelease = []),
        (this.build = n[5] ? n[5].split('.') : []),
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
        (Br('SemVer.compare', this.version, this.options, e),
        !(e instanceof Wr))
      ) {
        if ('string' == typeof e && e === this.version) return 0
        e = new Wr(e, this.options)
      }
      return e.version === this.version
        ? 0
        : this.compareMain(e) || this.comparePre(e)
    }
    compareMain(e) {
      return (
        e instanceof Wr || (e = new Wr(e, this.options)),
        Vr(this.major, e.major) ||
          Vr(this.minor, e.minor) ||
          Vr(this.patch, e.patch)
      )
    }
    comparePre(e) {
      if (
        (e instanceof Wr || (e = new Wr(e, this.options)),
        this.prerelease.length && !e.prerelease.length)
      )
        return -1
      if (!this.prerelease.length && e.prerelease.length) return 1
      if (!this.prerelease.length && !e.prerelease.length) return 0
      let t = 0
      do {
        const n = this.prerelease[t],
          r = e.prerelease[t]
        if ((Br('prerelease compare', t, n, r), void 0 === n && void 0 === r))
          return 0
        if (void 0 === r) return 1
        if (void 0 === n) return -1
        if (n !== r) return Vr(n, r)
      } while (++t)
    }
    compareBuild(e) {
      e instanceof Wr || (e = new Wr(e, this.options))
      let t = 0
      do {
        const n = this.build[t],
          r = e.build[t]
        if ((Br('prerelease compare', t, n, r), void 0 === n && void 0 === r))
          return 0
        if (void 0 === r) return 1
        if (void 0 === n) return -1
        if (n !== r) return Vr(n, r)
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
  var qr = Wr
  var Ur = (e, t, n) => new qr(e, n).compare(new qr(t, n))
  var zr = (e, t, n) => Ur(e, t, n) < 0
  var Gr = (e, t, n) => Ur(e, t, n) >= 0,
    Hr = r(function (e, t) {
      function n() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      }
      function r() {
        return 'undefined' != typeof WeakMap
          ? new WeakMap()
          : {
              add: n,
              delete: n,
              get: n,
              set: n,
              has: function (e) {
                return !1
              }
            }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.outdent = void 0)
      var i = Object.prototype.hasOwnProperty,
        u = function (e, t) {
          return i.call(e, t)
        }
      function o(e, t) {
        for (var n in t) u(t, n) && (e[n] = t[n])
        return e
      }
      var s = /^[ \t]*(?:\r\n|\r|\n)/,
        a = /(?:\r\n|\r|\n)[ \t]*$/,
        c = /^(?:[\r\n]|$)/,
        l = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,
        p = /^[ \t]*[\r\n][ \t\r\n]*$/
      function f(e, t, n) {
        var r = 0,
          i = e[0].match(l)
        i && (r = i[1].length)
        var u = new RegExp('(\\r\\n|\\r|\\n).{0,' + r + '}', 'g')
        t && (e = e.slice(1))
        var o = n.newline,
          c = n.trimLeadingNewline,
          p = n.trimTrailingNewline,
          f = 'string' == typeof o,
          d = e.length
        return e.map(function (e, t) {
          return (
            (e = e.replace(u, '$1')),
            0 === t && c && (e = e.replace(s, '')),
            t === d - 1 && p && (e = e.replace(a, '')),
            f &&
              (e = e.replace(/\r\n|\n|\r/g, function (e) {
                return o
              })),
            e
          )
        })
      }
      function d(e, t) {
        for (var n = '', r = 0, i = e.length; r < i; r++)
          (n += e[r]), r < i - 1 && (n += t[r])
        return n
      }
      function h(e) {
        return u(e, 'raw') && u(e, 'length')
      }
      var g = (function e(t) {
        var n = r(),
          i = r()
        return o(
          function r(u) {
            for (var s = [], a = 1; a < arguments.length; a++)
              s[a - 1] = arguments[a]
            if (h(u)) {
              var l = u,
                m = (s[0] === r || s[0] === g) && p.test(l[0]) && c.test(l[1]),
                y = m ? i : n,
                D = y.get(l)
              if ((D || ((D = f(l, m, t)), y.set(l, D)), 0 === s.length))
                return D[0]
              var E = d(D, m ? s.slice(1) : s)
              return E
            }
            return e(o(o({}, t), u || {}))
          },
          {
            string: function (e) {
              return f([e], !1, t)[0]
            }
          }
        )
      })({ trimLeadingNewline: !0, trimTrailingNewline: !0 })
      ;(t.outdent = g), (t.default = g)
      try {
        ;(e.exports = g),
          Object.defineProperty(g, '__esModule', { value: !0 }),
          (g.default = g),
          (g.outdent = g)
      } catch (e) {}
    })
  const { outdent: Jr } = Hr,
    Xr = 'Config',
    Yr = 'Editor',
    Kr = 'Other',
    Qr = 'Global',
    Zr = 'Special',
    ei = {
      cursorOffset: {
        since: '1.4.0',
        category: Zr,
        type: 'int',
        default: -1,
        range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 },
        description: Jr`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `,
        cliCategory: Yr
      },
      endOfLine: {
        since: '1.15.0',
        category: Qr,
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
            description: Jr`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        `
          }
        ]
      },
      filepath: {
        since: '1.4.0',
        category: Zr,
        type: 'path',
        description:
          'Specify the input filepath. This will be used to do parser inference.',
        cliName: 'stdin-filepath',
        cliCategory: Kr,
        cliDescription: 'Path to the file to pretend that stdin comes from.'
      },
      insertPragma: {
        since: '1.8.0',
        category: Zr,
        type: 'boolean',
        default: !1,
        description:
          "Insert @format pragma into file's first docblock comment.",
        cliCategory: Kr
      },
      parser: {
        since: '0.0.10',
        category: Qr,
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
        category: Qr,
        description:
          'Add a plugin. Multiple plugins can be passed as separate `--plugin`s.',
        exception: (e) => 'string' == typeof e || 'object' == typeof e,
        cliName: 'plugin',
        cliCategory: Xr
      },
      pluginSearchDirs: {
        since: '1.13.0',
        type: 'path',
        array: !0,
        default: [{ value: [] }],
        category: Qr,
        description: Jr`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `,
        exception: (e) => 'string' == typeof e || 'object' == typeof e,
        cliName: 'plugin-search-dir',
        cliCategory: Xr
      },
      printWidth: {
        since: '0.0.0',
        category: Qr,
        type: 'int',
        default: 80,
        description: 'The line length where Prettier will try wrap.',
        range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }
      },
      rangeEnd: {
        since: '1.4.0',
        category: Zr,
        type: 'int',
        default: Number.POSITIVE_INFINITY,
        range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 },
        description: Jr`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `,
        cliCategory: Yr
      },
      rangeStart: {
        since: '1.4.0',
        category: Zr,
        type: 'int',
        default: 0,
        range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 },
        description: Jr`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `,
        cliCategory: Yr
      },
      requirePragma: {
        since: '1.7.0',
        category: Zr,
        type: 'boolean',
        default: !1,
        description: Jr`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `,
        cliCategory: Kr
      },
      tabWidth: {
        type: 'int',
        category: Qr,
        default: 2,
        description: 'Number of spaces per indentation level.',
        range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }
      },
      useTabs: {
        since: '1.0.0',
        category: Qr,
        type: 'boolean',
        default: !1,
        description: 'Indent with tabs instead of spaces.'
      },
      embeddedLanguageFormatting: {
        since: '2.1.0',
        category: Qr,
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
  const ti = ['cliName', 'cliCategory', 'cliDescription'],
    ni = { compare: Ur, lt: zr, gte: Gr },
    ri = e.version,
    ii = {
      CATEGORY_CONFIG: Xr,
      CATEGORY_EDITOR: Yr,
      CATEGORY_FORMAT: 'Format',
      CATEGORY_OTHER: Kr,
      CATEGORY_OUTPUT: 'Output',
      CATEGORY_GLOBAL: Qr,
      CATEGORY_SPECIAL: Zr,
      options: ei
    }.options
  var ui = {
    getSupportInfo: function ({
      plugins: e = [],
      showUnreleased: t = !1,
      showDeprecated: n = !1,
      showInternal: r = !1
    } = {}) {
      const i = ri.split('-', 1)[0],
        u = e.flatMap((e) => e.languages || []).filter(s),
        o = ((e, t) =>
          Object.entries(e).map(([e, n]) => Object.assign({ [t]: e }, n)))(
          Object.assign({}, ...e.map(({ options: e }) => e), ii),
          'name'
        )
          .filter((e) => s(e) && a(e))
          .sort((e, t) => (e.name === t.name ? 0 : e.name < t.name ? -1 : 1))
          .map(function (e) {
            if (r) return e
            return Mn(e, ti)
          })
          .map((t) => {
            ;(t = Object.assign({}, t)),
              Array.isArray(t.default) &&
                (t.default =
                  1 === t.default.length
                    ? t.default[0].value
                    : t.default
                        .filter(s)
                        .sort((e, t) => ni.compare(t.since, e.since))[0].value),
              Array.isArray(t.choices) &&
                ((t.choices = t.choices.filter((e) => s(e) && a(e))),
                'parser' === t.name &&
                  (function (e, t, n) {
                    const r = new Set(e.choices.map((e) => e.value))
                    for (const i of t)
                      if (i.parsers)
                        for (const t of i.parsers)
                          if (!r.has(t)) {
                            r.add(t)
                            const u = n.find((e) => e.parsers && e.parsers[t])
                            let o = i.name
                            u && u.name && (o += ` (plugin: ${u.name})`),
                              e.choices.push({ value: t, description: o })
                          }
                  })(t, u, e))
            const n = Object.fromEntries(
              e
                .filter(
                  (e) => e.defaultOptions && void 0 !== e.defaultOptions[t.name]
                )
                .map((e) => [e.name, e.defaultOptions[t.name]])
            )
            return Object.assign(
              Object.assign({}, t),
              {},
              { pluginDefaults: n }
            )
          })
      return { languages: u, options: o }
      function s(e) {
        return t || !('since' in e) || (e.since && ni.gte(i, e.since))
      }
      function a(e) {
        return (
          n || !('deprecated' in e) || (e.deprecated && ni.lt(i, e.deprecated))
        )
      }
    }
  }
  const { getSupportInfo: oi } = ui,
    si = /[^\x20-\x7F]/
  function ai(e) {
    return (t, n, r) => {
      const i = r && r.backwards
      if (!1 === n) return !1
      const { length: u } = t
      let o = n
      for (; o >= 0 && o < u; ) {
        const n = t.charAt(o)
        if (e instanceof RegExp) {
          if (!e.test(n)) return o
        } else if (!e.includes(n)) return o
        i ? o-- : o++
      }
      return (-1 === o || o === u) && o
    }
  }
  const ci = ai(/\s/),
    li = ai(' \t'),
    pi = ai(',; \t'),
    fi = ai(/[^\n\r]/)
  function di(e, t) {
    if (!1 === t) return !1
    if ('/' === e.charAt(t) && '*' === e.charAt(t + 1))
      for (let n = t + 2; n < e.length; ++n)
        if ('*' === e.charAt(n) && '/' === e.charAt(n + 1)) return n + 2
    return t
  }
  function hi(e, t) {
    return (
      !1 !== t &&
      ('/' === e.charAt(t) && '/' === e.charAt(t + 1) ? fi(e, t) : t)
    )
  }
  function gi(e, t, n) {
    const r = n && n.backwards
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
  function mi(e, t, n = {}) {
    const r = li(e, n.backwards ? t - 1 : t, n)
    return r !== gi(e, r, n)
  }
  function yi(e, t) {
    let n = null,
      r = t
    for (; r !== n; ) (n = r), (r = pi(e, r)), (r = di(e, r)), (r = li(e, r))
    return (r = hi(e, r)), (r = gi(e, r)), !1 !== r && mi(e, r)
  }
  function Di(e, t) {
    let n = null,
      r = t
    for (; r !== n; )
      (n = r), (r = li(e, r)), (r = di(e, r)), (r = hi(e, r)), (r = gi(e, r))
    return r
  }
  function Ei(e, t, n) {
    return Di(e, n(t))
  }
  function Ci(e, t, n = 0) {
    let r = 0
    for (let i = n; i < e.length; ++i)
      '\t' === e[i] ? (r = r + t - (r % t)) : r++
    return r
  }
  function bi(e, t) {
    const n = e.slice(1, -1),
      r = { quote: '"', regex: /"/g },
      i = { quote: "'", regex: /'/g },
      u = "'" === t ? i : r,
      o = u === i ? r : i
    let s = u.quote
    if (n.includes(u.quote) || n.includes(o.quote)) {
      s =
        (n.match(u.regex) || []).length > (n.match(o.regex) || []).length
          ? o.quote
          : u.quote
    }
    return s
  }
  function Ai(e, t, n) {
    const r = '"' === t ? "'" : '"',
      i = e.replace(/\\(.)|(["'])/gs, (e, i, u) =>
        i === r
          ? i
          : u === t
          ? '\\' + u
          : u ||
            (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(i) ? i : '\\' + i)
      )
    return t + i + t
  }
  function vi(e, t) {
    ;(e.comments || (e.comments = [])).push(t),
      (t.printed = !1),
      (t.nodeDescription = (function (e) {
        const t = e.type || e.kind || '(unknown type)'
        let n = String(
          e.name ||
            (e.id && ('object' == typeof e.id ? e.id.name : e.id)) ||
            (e.key && ('object' == typeof e.key ? e.key.name : e.key)) ||
            (e.value && ('object' == typeof e.value ? '' : String(e.value))) ||
            e.operator ||
            ''
        )
        n.length > 20 && (n = n.slice(0, 19) + '\u2026')
        return t + (n ? ' ' + n : '')
      })(e))
  }
  var Fi = {
    inferParserByLanguage: function (e, t) {
      const { languages: n } = oi({ plugins: t.plugins }),
        r =
          n.find(({ name: t }) => t.toLowerCase() === e) ||
          n.find(({ aliases: t }) => Array.isArray(t) && t.includes(e)) ||
          n.find(({ extensions: t }) => Array.isArray(t) && t.includes(`.${e}`))
      return r && r.parsers[0]
    },
    getStringWidth: function (e) {
      return e ? (si.test(e) ? In(e) : e.length) : 0
    },
    getMaxContinuousCount: function (e, t) {
      const n = e.match(new RegExp(`(${jn(t)})+`, 'g'))
      return null === n
        ? 0
        : n.reduce((e, n) => Math.max(e, n.length / t.length), 0)
    },
    getMinNotPresentContinuousCount: function (e, t) {
      const n = e.match(new RegExp(`(${jn(t)})+`, 'g'))
      if (null === n) return 0
      const r = new Map()
      let i = 0
      for (const e of n) {
        const n = e.length / t.length
        r.set(n, !0), n > i && (i = n)
      }
      for (let e = 1; e < i; e++) if (!r.get(e)) return e
      return i + 1
    },
    getPenultimate: (e) => e[e.length - 2],
    getLast: _n,
    getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Di,
    getNextNonSpaceNonCommentCharacterIndex: Ei,
    getNextNonSpaceNonCommentCharacter: function (e, t, n) {
      return e.charAt(Ei(e, t, n))
    },
    skip: ai,
    skipWhitespace: ci,
    skipSpaces: li,
    skipToLineEnd: pi,
    skipEverythingButNewLine: fi,
    skipInlineComment: di,
    skipTrailingComment: hi,
    skipNewline: gi,
    isNextLineEmptyAfterIndex: yi,
    isNextLineEmpty: function (e, t, n) {
      return yi(e, n(t))
    },
    isPreviousLineEmpty: function (e, t, n) {
      let r = n(t) - 1
      return (
        (r = li(e, r, { backwards: !0 })),
        (r = gi(e, r, { backwards: !0 })),
        (r = li(e, r, { backwards: !0 })),
        r !== gi(e, r, { backwards: !0 })
      )
    },
    hasNewline: mi,
    hasNewlineInRange: function (e, t, n) {
      for (let r = t; r < n; ++r) if ('\n' === e.charAt(r)) return !0
      return !1
    },
    hasSpaces: function (e, t, n = {}) {
      return li(e, n.backwards ? t - 1 : t, n) !== t
    },
    getAlignmentSize: Ci,
    getIndentSize: function (e, t) {
      const n = e.lastIndexOf('\n')
      return -1 === n ? 0 : Ci(e.slice(n + 1).match(/^[\t ]*/)[0], t)
    },
    getPreferredQuote: bi,
    printString: function (e, t) {
      return Ai(
        e.slice(1, -1),
        'json' === t.parser ||
          ('json5' === t.parser &&
            'preserve' === t.quoteProps &&
            !t.singleQuote)
          ? '"'
          : t.__isInHtmlAttribute
          ? "'"
          : bi(e, t.singleQuote ? "'" : '"'),
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
    makeString: Ai,
    addLeadingComment: function (e, t) {
      ;(t.leading = !0), (t.trailing = !1), vi(e, t)
    },
    addDanglingComment: function (e, t, n) {
      ;(t.leading = !1), (t.trailing = !1), n && (t.marker = n), vi(e, t)
    },
    addTrailingComment: function (e, t) {
      ;(t.leading = !1), (t.trailing = !0), vi(e, t)
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
      return function (n) {
        return t.has(n) || t.set(n, Symbol(e)), t.get(n)
      }
    }
  }
  var xi = {
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
      let n
      if ('\n' === t) n = /\n/g
      else if ('\r' === t) n = /\r/g
      else {
        if ('\r\n' !== t)
          throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`)
        n = /\r\n/g
      }
      const r = e.match(n)
      return r ? r.length : 0
    },
    normalizeEndOfLine: function (e) {
      return e.replace(/\r\n?/g, '\n')
    }
  }
  const { literalline: Si, join: wi } = Tn,
    Ti = (e) => Array.isArray(e) || (e && 'concat' === e.type),
    Bi = (e) => {
      if (Array.isArray(e)) return e
      if ('concat' !== e.type && 'fill' !== e.type)
        throw new Error('Expect doc type to be `concat` or `fill`.')
      return e.parts
    },
    Ni = {}
  function ki(e, t, n, r) {
    const i = [e]
    for (; i.length > 0; ) {
      const e = i.pop()
      if (e !== Ni) {
        if ((n && i.push(e, Ni), !t || !1 !== t(e)))
          if (Ti(e) || 'fill' === e.type) {
            const t = Bi(e)
            for (let e = t.length - 1; e >= 0; --e) i.push(t[e])
          } else if ('if-break' === e.type)
            e.flatContents && i.push(e.flatContents),
              e.breakContents && i.push(e.breakContents)
          else if ('group' === e.type && e.expandedStates)
            if (r)
              for (let t = e.expandedStates.length - 1; t >= 0; --t)
                i.push(e.expandedStates[t])
            else i.push(e.contents)
          else e.contents && i.push(e.contents)
      } else n(i.pop())
    }
  }
  function Pi(e, t) {
    const n = new Map()
    return r(e)
    function r(e) {
      if (n.has(e)) return n.get(e)
      const i = (function (e) {
        if (Array.isArray(e)) return t(e.map(r))
        if ('concat' === e.type || 'fill' === e.type) {
          const n = e.parts.map(r)
          return t(Object.assign(Object.assign({}, e), {}, { parts: n }))
        }
        if ('if-break' === e.type) {
          const n = e.breakContents && r(e.breakContents),
            i = e.flatContents && r(e.flatContents)
          return t(
            Object.assign(
              Object.assign({}, e),
              {},
              { breakContents: n, flatContents: i }
            )
          )
        }
        if ('group' === e.type && e.expandedStates) {
          const n = e.expandedStates.map(r),
            i = n[0]
          return t(
            Object.assign(
              Object.assign({}, e),
              {},
              { contents: i, expandedStates: n }
            )
          )
        }
        if (e.contents) {
          const n = r(e.contents)
          return t(Object.assign(Object.assign({}, e), {}, { contents: n }))
        }
        return t(e)
      })(e)
      return n.set(e, i), i
    }
  }
  function Oi(e, t, n) {
    let r = n,
      i = !1
    return (
      ki(e, function (e) {
        const n = t(e)
        if ((void 0 !== n && ((i = !0), (r = n)), i)) return !1
      }),
      r
    )
  }
  function Ii(e) {
    return (
      !('group' !== e.type || !e.break) ||
      !('line' !== e.type || !e.hard) ||
      'break-parent' === e.type ||
      void 0
    )
  }
  function Li(e) {
    if (e.length > 0) {
      const t = _n(e)
      t.expandedStates || t.break || (t.break = 'propagated')
    }
    return null
  }
  function ji(e) {
    return 'line' !== e.type || e.hard
      ? 'if-break' === e.type
        ? e.flatContents || ''
        : e
      : e.soft
      ? ''
      : ' '
  }
  const _i = (e, t) =>
    e && 'line' === e.type && e.hard && t && 'break-parent' === t.type
  function Mi(e) {
    if (!e) return e
    if (Ti(e) || 'fill' === e.type) {
      const t = Bi(e)
      for (; t.length > 1 && _i(...t.slice(-2)); ) t.length -= 2
      if (t.length > 0) {
        const e = Mi(_n(t))
        t[t.length - 1] = e
      }
      return Array.isArray(e)
        ? t
        : Object.assign(Object.assign({}, e), {}, { parts: t })
    }
    switch (e.type) {
      case 'align':
      case 'indent':
      case 'indent-if-break':
      case 'group':
      case 'line-suffix':
      case 'label': {
        const t = Mi(e.contents)
        return Object.assign(Object.assign({}, e), {}, { contents: t })
      }
      case 'if-break': {
        const t = Mi(e.breakContents),
          n = Mi(e.flatContents)
        return Object.assign(
          Object.assign({}, e),
          {},
          { breakContents: t, flatContents: n }
        )
      }
    }
    return e
  }
  function Ri(e) {
    return Pi(e, (e) =>
      (function (e) {
        switch (e.type) {
          case 'fill':
            if (0 === e.parts.length || e.parts.every((e) => '' === e))
              return ''
            break
          case 'group':
            if (!(e.contents || e.id || e.break || e.expandedStates)) return ''
            if (
              'group' === e.contents.type &&
              e.contents.id === e.id &&
              e.contents.break === e.break &&
              e.contents.expandedStates === e.expandedStates
            )
              return e.contents
            break
          case 'align':
          case 'indent':
          case 'indent-if-break':
          case 'line-suffix':
            if (!e.contents) return ''
            break
          case 'if-break':
            if (!e.flatContents && !e.breakContents) return ''
        }
        if (!Ti(e)) return e
        const t = []
        for (const n of Bi(e)) {
          if (!n) continue
          const [e, ...r] = Ti(n) ? Bi(n) : [n]
          'string' == typeof e && 'string' == typeof _n(t)
            ? (t[t.length - 1] += e)
            : t.push(e),
            t.push(...r)
        }
        return 0 === t.length
          ? ''
          : 1 === t.length
          ? t[0]
          : Array.isArray(e)
          ? t
          : Object.assign(Object.assign({}, e), {}, { parts: t })
      })(e)
    )
  }
  function $i(e) {
    const t = [],
      n = e.filter(Boolean)
    for (; n.length > 0; ) {
      const e = n.shift()
      e &&
        (Ti(e)
          ? n.unshift(...Bi(e))
          : t.length > 0 && 'string' == typeof _n(t) && 'string' == typeof e
          ? (t[t.length - 1] += e)
          : t.push(e))
    }
    return t
  }
  function Vi(e, t = Si) {
    return wi(t, e.split('\n')).parts
  }
  var Wi = {
    isConcat: Ti,
    getDocParts: Bi,
    willBreak: function (e) {
      return Oi(e, Ii, !1)
    },
    traverseDoc: ki,
    findInDoc: Oi,
    mapDoc: Pi,
    propagateBreaks: function (e) {
      const t = new Set(),
        n = []
      ki(
        e,
        function (e) {
          if (('break-parent' === e.type && Li(n), 'group' === e.type)) {
            if ((n.push(e), t.has(e))) return !1
            t.add(e)
          }
        },
        function (e) {
          if ('group' === e.type) {
            n.pop().break && Li(n)
          }
        },
        !0
      )
    },
    removeLines: function (e) {
      return Pi(e, ji)
    },
    stripTrailingHardline: function (e) {
      return Mi(Ri(e))
    },
    normalizeParts: $i,
    normalizeDoc: function (e) {
      return Pi(e, (e) =>
        Array.isArray(e)
          ? $i(e)
          : e.parts
          ? Object.assign(Object.assign({}, e), {}, { parts: $i(e.parts) })
          : e
      )
    },
    cleanDoc: Ri,
    replaceTextEndOfLine: Vi,
    replaceEndOfLine: function (e) {
      return Pi(e, (e) =>
        'string' == typeof e && e.includes('\n') ? Vi(e) : e
      )
    }
  }
  const { getStringWidth: qi, getLast: Ui } = Fi,
    { convertEndOfLineToChars: zi } = xi,
    { fill: Gi, cursor: Hi, indent: Ji } = Tn,
    { isConcat: Xi, getDocParts: Yi } = Wi
  let Ki
  function Qi(e, t) {
    return eu(e, { type: 'indent' }, t)
  }
  function Zi(e, t, n) {
    if (t === Number.NEGATIVE_INFINITY)
      return e.root || { value: '', length: 0, queue: [] }
    if (t < 0) return eu(e, { type: 'dedent' }, n)
    if (!t) return e
    if ('root' === t.type)
      return Object.assign(Object.assign({}, e), {}, { root: e })
    return eu(
      e,
      { type: 'string' == typeof t ? 'stringAlign' : 'numberAlign', n: t },
      n
    )
  }
  function eu(e, t, n) {
    const r = 'dedent' === t.type ? e.queue.slice(0, -1) : [...e.queue, t]
    let i = '',
      u = 0,
      o = 0,
      s = 0
    for (const e of r)
      switch (e.type) {
        case 'indent':
          l(), n.useTabs ? a(1) : c(n.tabWidth)
          break
        case 'stringAlign':
          l(), (i += e.n), (u += e.n.length)
          break
        case 'numberAlign':
          ;(o += 1), (s += e.n)
          break
        default:
          throw new Error(`Unexpected type '${e.type}'`)
      }
    return (
      p(),
      Object.assign(Object.assign({}, e), {}, { value: i, length: u, queue: r })
    )
    function a(e) {
      ;(i += '\t'.repeat(e)), (u += n.tabWidth * e)
    }
    function c(e) {
      ;(i += ' '.repeat(e)), (u += e)
    }
    function l() {
      n.useTabs
        ? (function () {
            o > 0 && a(o)
            f()
          })()
        : p()
    }
    function p() {
      s > 0 && c(s), f()
    }
    function f() {
      ;(o = 0), (s = 0)
    }
  }
  function tu(e) {
    if (0 === e.length) return 0
    let t = 0
    for (; e.length > 0 && 'string' == typeof Ui(e) && /^[\t ]*$/.test(Ui(e)); )
      t += e.pop().length
    if (e.length > 0 && 'string' == typeof Ui(e)) {
      const n = Ui(e).replace(/[\t ]*$/, '')
      ;(t += Ui(e).length - n.length), (e[e.length - 1] = n)
    }
    return t
  }
  function nu(e, t, n, r, i, u) {
    let o = t.length
    const s = [e],
      a = []
    for (; n >= 0; ) {
      if (0 === s.length) {
        if (0 === o) return !0
        s.push(t[o - 1]), o--
        continue
      }
      const [e, c, l] = s.pop()
      if ('string' == typeof l) a.push(l), (n -= qi(l))
      else if (Xi(l)) {
        const t = Yi(l)
        for (let n = t.length - 1; n >= 0; n--) s.push([e, c, t[n]])
      } else
        switch (l.type) {
          case 'indent':
            s.push([Qi(e, r), c, l.contents])
            break
          case 'align':
            s.push([Zi(e, l.n, r), c, l.contents])
            break
          case 'trim':
            n += tu(a)
            break
          case 'group': {
            if (u && l.break) return !1
            const t = l.break ? 1 : c
            s.push([
              e,
              t,
              l.expandedStates && 1 === t ? Ui(l.expandedStates) : l.contents
            ]),
              l.id && (Ki[l.id] = t)
            break
          }
          case 'fill':
            for (let t = l.parts.length - 1; t >= 0; t--)
              s.push([e, c, l.parts[t]])
            break
          case 'if-break':
          case 'indent-if-break': {
            const t = l.groupId ? Ki[l.groupId] : c
            if (1 === t) {
              const t =
                'if-break' === l.type
                  ? l.breakContents
                  : l.negate
                  ? l.contents
                  : Ji(l.contents)
              t && s.push([e, c, t])
            }
            if (2 === t) {
              const t =
                'if-break' === l.type
                  ? l.flatContents
                  : l.negate
                  ? Ji(l.contents)
                  : l.contents
              t && s.push([e, c, t])
            }
            break
          }
          case 'line':
            switch (c) {
              case 2:
                if (!l.hard) {
                  l.soft || (a.push(' '), (n -= 1))
                  break
                }
                return !0
              case 1:
                return !0
            }
            break
          case 'line-suffix':
            i = !0
            break
          case 'line-suffix-boundary':
            if (i) return !1
            break
          case 'label':
            s.push([e, c, l.contents])
        }
    }
    return !1
  }
  var ru = {
    printDocToString: function (e, t) {
      Ki = {}
      const n = t.printWidth,
        r = zi(t.endOfLine)
      let i = 0
      const u = [[{ value: '', length: 0, queue: [] }, 1, e]],
        o = []
      let s = !1,
        a = []
      for (; u.length > 0; ) {
        const [e, c, l] = u.pop()
        if ('string' == typeof l) {
          const e = '\n' !== r ? l.replace(/\n/g, r) : l
          o.push(e), (i += qi(e))
        } else if (Xi(l)) {
          const t = Yi(l)
          for (let n = t.length - 1; n >= 0; n--) u.push([e, c, t[n]])
        } else
          switch (l.type) {
            case 'cursor':
              o.push(Hi.placeholder)
              break
            case 'indent':
              u.push([Qi(e, t), c, l.contents])
              break
            case 'align':
              u.push([Zi(e, l.n, t), c, l.contents])
              break
            case 'trim':
              i -= tu(o)
              break
            case 'group':
              switch (c) {
                case 2:
                  if (!s) {
                    u.push([e, l.break ? 1 : 2, l.contents])
                    break
                  }
                case 1: {
                  s = !1
                  const r = [e, 2, l.contents],
                    o = n - i,
                    c = a.length > 0
                  if (!l.break && nu(r, u, o, t, c)) u.push(r)
                  else if (l.expandedStates) {
                    const n = Ui(l.expandedStates)
                    if (l.break) {
                      u.push([e, 1, n])
                      break
                    }
                    for (let r = 1; r < l.expandedStates.length + 1; r++) {
                      if (r >= l.expandedStates.length) {
                        u.push([e, 1, n])
                        break
                      }
                      {
                        const n = [e, 2, l.expandedStates[r]]
                        if (nu(n, u, o, t, c)) {
                          u.push(n)
                          break
                        }
                      }
                    }
                  } else u.push([e, 1, l.contents])
                  break
                }
              }
              l.id && (Ki[l.id] = Ui(u)[1])
              break
            case 'fill': {
              const r = n - i,
                { parts: o } = l
              if (0 === o.length) break
              const [s, p] = o,
                f = [e, 2, s],
                d = [e, 1, s],
                h = nu(f, [], r, t, a.length > 0, !0)
              if (1 === o.length) {
                h ? u.push(f) : u.push(d)
                break
              }
              const g = [e, 2, p],
                m = [e, 1, p]
              if (2 === o.length) {
                h ? u.push(g, f) : u.push(m, d)
                break
              }
              o.splice(0, 2)
              const y = [e, c, Gi(o)]
              nu([e, 2, [s, p, o[0]]], [], r, t, a.length > 0, !0)
                ? u.push(y, g, f)
                : h
                ? u.push(y, m, f)
                : u.push(y, m, d)
              break
            }
            case 'if-break':
            case 'indent-if-break': {
              const t = l.groupId ? Ki[l.groupId] : c
              if (1 === t) {
                const t =
                  'if-break' === l.type
                    ? l.breakContents
                    : l.negate
                    ? l.contents
                    : Ji(l.contents)
                t && u.push([e, c, t])
              }
              if (2 === t) {
                const t =
                  'if-break' === l.type
                    ? l.flatContents
                    : l.negate
                    ? Ji(l.contents)
                    : l.contents
                t && u.push([e, c, t])
              }
              break
            }
            case 'line-suffix':
              a.push([e, c, l.contents])
              break
            case 'line-suffix-boundary':
              a.length > 0 && u.push([e, c, { type: 'line', hard: !0 }])
              break
            case 'line':
              switch (c) {
                case 2:
                  if (!l.hard) {
                    l.soft || (o.push(' '), (i += 1))
                    break
                  }
                  s = !0
                case 1:
                  if (a.length > 0) {
                    u.push([e, c, l], ...a.reverse()), (a = [])
                    break
                  }
                  l.literal
                    ? e.root
                      ? (o.push(r, e.root.value), (i = e.root.length))
                      : (o.push(r), (i = 0))
                    : ((i -= tu(o)), o.push(r + e.value), (i = e.length))
              }
              break
            case 'label':
              u.push([e, c, l.contents])
          }
        0 === u.length && a.length > 0 && (u.push(...a.reverse()), (a = []))
      }
      const c = o.indexOf(Hi.placeholder)
      if (-1 !== c) {
        const e = o.indexOf(Hi.placeholder, c + 1),
          t = o.slice(0, c).join(''),
          n = o.slice(c + 1, e).join('')
        return {
          formatted: t + n + o.slice(e + 1).join(''),
          cursorNodeStart: t.length,
          cursorNodeText: n
        }
      }
      return { formatted: o.join('') }
    }
  }
  const { isConcat: iu, getDocParts: uu } = Wi
  function ou(e) {
    if (!e) return ''
    if (iu(e)) {
      const t = []
      for (const n of uu(e))
        if (iu(n)) t.push(...ou(n).parts)
        else {
          const e = ou(n)
          '' !== e && t.push(e)
        }
      return { type: 'concat', parts: t }
    }
    return 'if-break' === e.type
      ? Object.assign(
          Object.assign({}, e),
          {},
          {
            breakContents: ou(e.breakContents),
            flatContents: ou(e.flatContents)
          }
        )
      : 'group' === e.type
      ? Object.assign(
          Object.assign({}, e),
          {},
          {
            contents: ou(e.contents),
            expandedStates: e.expandedStates && e.expandedStates.map(ou)
          }
        )
      : 'fill' === e.type
      ? { type: 'fill', parts: e.parts.map(ou) }
      : e.contents
      ? Object.assign(Object.assign({}, e), {}, { contents: ou(e.contents) })
      : e
  }
  var su = {
      builders: Tn,
      printer: ru,
      utils: Wi,
      debug: {
        printDocToDebug: function (e) {
          const t = Object.create(null),
            n = new Set()
          return (function e(t, n, i) {
            if ('string' == typeof t) return JSON.stringify(t)
            if (iu(t)) {
              const n = uu(t).map(e).filter(Boolean)
              return 1 === n.length ? n[0] : `[${n.join(', ')}]`
            }
            if ('line' === t.type) {
              const e =
                Array.isArray(i) && i[n + 1] && 'break-parent' === i[n + 1].type
              return t.literal
                ? e
                  ? 'literalline'
                  : 'literallineWithoutBreakParent'
                : t.hard
                ? e
                  ? 'hardline'
                  : 'hardlineWithoutBreakParent'
                : t.soft
                ? 'softline'
                : 'line'
            }
            if ('break-parent' === t.type) {
              return Array.isArray(i) &&
                i[n - 1] &&
                'line' === i[n - 1].type &&
                i[n - 1].hard
                ? void 0
                : 'breakParent'
            }
            if ('trim' === t.type) return 'trim'
            if ('indent' === t.type) return 'indent(' + e(t.contents) + ')'
            if ('align' === t.type)
              return t.n === Number.NEGATIVE_INFINITY
                ? 'dedentToRoot(' + e(t.contents) + ')'
                : t.n < 0
                ? 'dedent(' + e(t.contents) + ')'
                : 'root' === t.n.type
                ? 'markAsRoot(' + e(t.contents) + ')'
                : 'align(' + JSON.stringify(t.n) + ', ' + e(t.contents) + ')'
            if ('if-break' === t.type)
              return (
                'ifBreak(' +
                e(t.breakContents) +
                (t.flatContents ? ', ' + e(t.flatContents) : '') +
                (t.groupId
                  ? (t.flatContents ? '' : ', ""') +
                    `, { groupId: ${r(t.groupId)} }`
                  : '') +
                ')'
              )
            if ('indent-if-break' === t.type) {
              const n = []
              t.negate && n.push('negate: true'),
                t.groupId && n.push(`groupId: ${r(t.groupId)}`)
              const i = n.length > 0 ? `, { ${n.join(', ')} }` : ''
              return `indentIfBreak(${e(t.contents)}${i})`
            }
            if ('group' === t.type) {
              const n = []
              t.break &&
                'propagated' !== t.break &&
                n.push('shouldBreak: true'),
                t.id && n.push(`id: ${r(t.id)}`)
              const i = n.length > 0 ? `, { ${n.join(', ')} }` : ''
              return t.expandedStates
                ? `conditionalGroup([${t.expandedStates
                    .map((t) => e(t))
                    .join(',')}]${i})`
                : `group(${e(t.contents)}${i})`
            }
            if ('fill' === t.type)
              return `fill([${t.parts.map((t) => e(t)).join(', ')}])`
            if ('line-suffix' === t.type)
              return 'lineSuffix(' + e(t.contents) + ')'
            if ('line-suffix-boundary' === t.type) return 'lineSuffixBoundary'
            if ('label' === t.type)
              return `label(${JSON.stringify(t.label)}, ${e(t.contents)})`
            throw new Error('Unknown doc type ' + t.type)
          })(ou(e))
          function r(e) {
            if ('symbol' != typeof e) return JSON.stringify(String(e))
            if (e in t) return t[e]
            const r = String(e).slice(7, -1) || 'symbol'
            for (let i = 0; ; i++) {
              const u = r + (i > 0 ? ` #${i}` : '')
              if (!n.has(u))
                return n.add(u), (t[e] = `Symbol.for(${JSON.stringify(u)})`)
            }
          }
        }
      }
    },
    au = Object.freeze({ __proto__: null, default: {} })
  function cu(e, t) {
    for (var n = 0, r = e.length - 1; r >= 0; r--) {
      var i = e[r]
      '.' === i
        ? e.splice(r, 1)
        : '..' === i
        ? (e.splice(r, 1), n++)
        : n && (e.splice(r, 1), n--)
    }
    if (t) for (; n--; n) e.unshift('..')
    return e
  }
  var lu = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
    pu = function (e) {
      return lu.exec(e).slice(1)
    }
  function fu() {
    for (var e = '', t = !1, n = arguments.length - 1; n >= -1 && !t; n--) {
      var r = n >= 0 ? arguments[n] : '/'
      if ('string' != typeof r)
        throw new TypeError('Arguments to path.resolve must be strings')
      r && ((e = r + '/' + e), (t = '/' === r.charAt(0)))
    }
    return (
      (t ? '/' : '') +
        (e = cu(
          bu(e.split('/'), function (e) {
            return !!e
          }),
          !t
        ).join('/')) || '.'
    )
  }
  function du(e) {
    var t = hu(e),
      n = '/' === Au(e, -1)
    return (
      (e = cu(
        bu(e.split('/'), function (e) {
          return !!e
        }),
        !t
      ).join('/')) ||
        t ||
        (e = '.'),
      e && n && (e += '/'),
      (t ? '/' : '') + e
    )
  }
  function hu(e) {
    return '/' === e.charAt(0)
  }
  function gu() {
    var e = Array.prototype.slice.call(arguments, 0)
    return du(
      bu(e, function (e, t) {
        if ('string' != typeof e)
          throw new TypeError('Arguments to path.join must be strings')
        return e
      }).join('/')
    )
  }
  function mu(e, t) {
    function n(e) {
      for (var t = 0; t < e.length && '' === e[t]; t++);
      for (var n = e.length - 1; n >= 0 && '' === e[n]; n--);
      return t > n ? [] : e.slice(t, n - t + 1)
    }
    ;(e = fu(e).substr(1)), (t = fu(t).substr(1))
    for (
      var r = n(e.split('/')),
        i = n(t.split('/')),
        u = Math.min(r.length, i.length),
        o = u,
        s = 0;
      s < u;
      s++
    )
      if (r[s] !== i[s]) {
        o = s
        break
      }
    var a = []
    for (s = o; s < r.length; s++) a.push('..')
    return (a = a.concat(i.slice(o))).join('/')
  }
  function yu(e) {
    var t = pu(e),
      n = t[0],
      r = t[1]
    return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : '.'
  }
  function Du(e, t) {
    var n = pu(e)[2]
    return (
      t &&
        n.substr(-1 * t.length) === t &&
        (n = n.substr(0, n.length - t.length)),
      n
    )
  }
  function Eu(e) {
    return pu(e)[3]
  }
  var Cu = {
    extname: Eu,
    basename: Du,
    dirname: yu,
    sep: '/',
    delimiter: ':',
    relative: mu,
    join: gu,
    isAbsolute: hu,
    normalize: du,
    resolve: fu
  }
  function bu(e, t) {
    if (e.filter) return e.filter(t)
    for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r])
    return n
  }
  var Au =
      'b' === 'ab'.substr(-1)
        ? function (e, t, n) {
            return e.substr(t, n)
          }
        : function (e, t, n) {
            return t < 0 && (t = e.length + t), e.substr(t, n)
          },
    vu = Object.freeze({
      __proto__: null,
      resolve: fu,
      normalize: du,
      isAbsolute: hu,
      join: gu,
      relative: mu,
      sep: '/',
      delimiter: ':',
      dirname: yu,
      basename: Du,
      extname: Eu,
      default: Cu
    }),
    Fu = [],
    xu = [],
    Su = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
    wu = !1
  function Tu() {
    wu = !0
    for (
      var e =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        t = 0,
        n = e.length;
      t < n;
      ++t
    )
      (Fu[t] = e[t]), (xu[e.charCodeAt(t)] = t)
    ;(xu['-'.charCodeAt(0)] = 62), (xu['_'.charCodeAt(0)] = 63)
  }
  function Bu(e, t, n) {
    for (var r, i, u = [], o = t; o < n; o += 3)
      (r = (e[o] << 16) + (e[o + 1] << 8) + e[o + 2]),
        u.push(
          Fu[((i = r) >> 18) & 63] +
            Fu[(i >> 12) & 63] +
            Fu[(i >> 6) & 63] +
            Fu[63 & i]
        )
    return u.join('')
  }
  function Nu(e) {
    var t
    wu || Tu()
    for (
      var n = e.length, r = n % 3, i = '', u = [], o = 16383, s = 0, a = n - r;
      s < a;
      s += o
    )
      u.push(Bu(e, s, s + o > a ? a : s + o))
    return (
      1 === r
        ? ((t = e[n - 1]),
          (i += Fu[t >> 2]),
          (i += Fu[(t << 4) & 63]),
          (i += '=='))
        : 2 === r &&
          ((t = (e[n - 2] << 8) + e[n - 1]),
          (i += Fu[t >> 10]),
          (i += Fu[(t >> 4) & 63]),
          (i += Fu[(t << 2) & 63]),
          (i += '=')),
      u.push(i),
      u.join('')
    )
  }
  function ku(e, t, n, r, i) {
    var u,
      o,
      s = 8 * i - r - 1,
      a = (1 << s) - 1,
      c = a >> 1,
      l = -7,
      p = n ? i - 1 : 0,
      f = n ? -1 : 1,
      d = e[t + p]
    for (
      p += f, u = d & ((1 << -l) - 1), d >>= -l, l += s;
      l > 0;
      u = 256 * u + e[t + p], p += f, l -= 8
    );
    for (
      o = u & ((1 << -l) - 1), u >>= -l, l += r;
      l > 0;
      o = 256 * o + e[t + p], p += f, l -= 8
    );
    if (0 === u) u = 1 - c
    else {
      if (u === a) return o ? NaN : (1 / 0) * (d ? -1 : 1)
      ;(o += Math.pow(2, r)), (u -= c)
    }
    return (d ? -1 : 1) * o * Math.pow(2, u - r)
  }
  function Pu(e, t, n, r, i, u) {
    var o,
      s,
      a,
      c = 8 * u - i - 1,
      l = (1 << c) - 1,
      p = l >> 1,
      f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      d = r ? 0 : u - 1,
      h = r ? 1 : -1,
      g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
    for (
      t = Math.abs(t),
        isNaN(t) || t === 1 / 0
          ? ((s = isNaN(t) ? 1 : 0), (o = l))
          : ((o = Math.floor(Math.log(t) / Math.LN2)),
            t * (a = Math.pow(2, -o)) < 1 && (o--, (a *= 2)),
            (t += o + p >= 1 ? f / a : f * Math.pow(2, 1 - p)) * a >= 2 &&
              (o++, (a /= 2)),
            o + p >= l
              ? ((s = 0), (o = l))
              : o + p >= 1
              ? ((s = (t * a - 1) * Math.pow(2, i)), (o += p))
              : ((s = t * Math.pow(2, p - 1) * Math.pow(2, i)), (o = 0)));
      i >= 8;
      e[n + d] = 255 & s, d += h, s /= 256, i -= 8
    );
    for (
      o = (o << i) | s, c += i;
      c > 0;
      e[n + d] = 255 & o, d += h, o /= 256, c -= 8
    );
    e[n + d - h] |= 128 * g
  }
  var Ou = {}.toString,
    Iu =
      Array.isArray ||
      function (e) {
        return '[object Array]' == Ou.call(e)
      }
  function Lu() {
    return _u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
  }
  function ju(e, t) {
    if (Lu() < t) throw new RangeError('Invalid typed array length')
    return (
      _u.TYPED_ARRAY_SUPPORT
        ? ((e = new Uint8Array(t)).__proto__ = _u.prototype)
        : (null === e && (e = new _u(t)), (e.length = t)),
      e
    )
  }
  function _u(e, t, n) {
    if (!(_u.TYPED_ARRAY_SUPPORT || this instanceof _u)) return new _u(e, t, n)
    if ('number' == typeof e) {
      if ('string' == typeof t)
        throw new Error(
          'If encoding is specified then the first argument must be a string'
        )
      return $u(this, e)
    }
    return Mu(this, e, t, n)
  }
  function Mu(e, t, n, r) {
    if ('number' == typeof t)
      throw new TypeError('"value" argument must not be a number')
    return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer
      ? (function (e, t, n, r) {
          if ((t.byteLength, n < 0 || t.byteLength < n))
            throw new RangeError("'offset' is out of bounds")
          if (t.byteLength < n + (r || 0))
            throw new RangeError("'length' is out of bounds")
          t =
            void 0 === n && void 0 === r
              ? new Uint8Array(t)
              : void 0 === r
              ? new Uint8Array(t, n)
              : new Uint8Array(t, n, r)
          _u.TYPED_ARRAY_SUPPORT
            ? ((e = t).__proto__ = _u.prototype)
            : (e = Vu(e, t))
          return e
        })(e, t, n, r)
      : 'string' == typeof t
      ? (function (e, t, n) {
          ;('string' == typeof n && '' !== n) || (n = 'utf8')
          if (!_u.isEncoding(n))
            throw new TypeError('"encoding" must be a valid string encoding')
          var r = 0 | Uu(t, n),
            i = (e = ju(e, r)).write(t, n)
          i !== r && (e = e.slice(0, i))
          return e
        })(e, t, n)
      : (function (e, t) {
          if (qu(t)) {
            var n = 0 | Wu(t.length)
            return 0 === (e = ju(e, n)).length || t.copy(e, 0, 0, n), e
          }
          if (t) {
            if (
              ('undefined' != typeof ArrayBuffer &&
                t.buffer instanceof ArrayBuffer) ||
              'length' in t
            )
              return 'number' != typeof t.length || (r = t.length) != r
                ? ju(e, 0)
                : Vu(e, t)
            if ('Buffer' === t.type && Iu(t.data)) return Vu(e, t.data)
          }
          var r
          throw new TypeError(
            'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
          )
        })(e, t)
  }
  function Ru(e) {
    if ('number' != typeof e)
      throw new TypeError('"size" argument must be a number')
    if (e < 0) throw new RangeError('"size" argument must not be negative')
  }
  function $u(e, t) {
    if ((Ru(t), (e = ju(e, t < 0 ? 0 : 0 | Wu(t))), !_u.TYPED_ARRAY_SUPPORT))
      for (var n = 0; n < t; ++n) e[n] = 0
    return e
  }
  function Vu(e, t) {
    var n = t.length < 0 ? 0 : 0 | Wu(t.length)
    e = ju(e, n)
    for (var r = 0; r < n; r += 1) e[r] = 255 & t[r]
    return e
  }
  function Wu(e) {
    if (e >= Lu())
      throw new RangeError(
        'Attempt to allocate Buffer larger than maximum size: 0x' +
          Lu().toString(16) +
          ' bytes'
      )
    return 0 | e
  }
  function qu(e) {
    return !(null == e || !e._isBuffer)
  }
  function Uu(e, t) {
    if (qu(e)) return e.length
    if (
      'undefined' != typeof ArrayBuffer &&
      'function' == typeof ArrayBuffer.isView &&
      (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
    )
      return e.byteLength
    'string' != typeof e && (e = '' + e)
    var n = e.length
    if (0 === n) return 0
    for (var r = !1; ; )
      switch (t) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return n
        case 'utf8':
        case 'utf-8':
        case void 0:
          return Do(e).length
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return 2 * n
        case 'hex':
          return n >>> 1
        case 'base64':
          return Eo(e).length
        default:
          if (r) return Do(e).length
          ;(t = ('' + t).toLowerCase()), (r = !0)
      }
  }
  function zu(e, t, n) {
    var r = !1
    if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return ''
    if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
      return ''
    if ((n >>>= 0) <= (t >>>= 0)) return ''
    for (e || (e = 'utf8'); ; )
      switch (e) {
        case 'hex':
          return oo(this, t, n)
        case 'utf8':
        case 'utf-8':
          return no(this, t, n)
        case 'ascii':
          return io(this, t, n)
        case 'latin1':
        case 'binary':
          return uo(this, t, n)
        case 'base64':
          return to(this, t, n)
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return so(this, t, n)
        default:
          if (r) throw new TypeError('Unknown encoding: ' + e)
          ;(e = (e + '').toLowerCase()), (r = !0)
      }
  }
  function Gu(e, t, n) {
    var r = e[t]
    ;(e[t] = e[n]), (e[n] = r)
  }
  function Hu(e, t, n, r, i) {
    if (0 === e.length) return -1
    if (
      ('string' == typeof n
        ? ((r = n), (n = 0))
        : n > 2147483647
        ? (n = 2147483647)
        : n < -2147483648 && (n = -2147483648),
      (n = +n),
      isNaN(n) && (n = i ? 0 : e.length - 1),
      n < 0 && (n = e.length + n),
      n >= e.length)
    ) {
      if (i) return -1
      n = e.length - 1
    } else if (n < 0) {
      if (!i) return -1
      n = 0
    }
    if (('string' == typeof t && (t = _u.from(t, r)), qu(t)))
      return 0 === t.length ? -1 : Ju(e, t, n, r, i)
    if ('number' == typeof t)
      return (
        (t &= 255),
        _u.TYPED_ARRAY_SUPPORT &&
        'function' == typeof Uint8Array.prototype.indexOf
          ? i
            ? Uint8Array.prototype.indexOf.call(e, t, n)
            : Uint8Array.prototype.lastIndexOf.call(e, t, n)
          : Ju(e, [t], n, r, i)
      )
    throw new TypeError('val must be string, number or Buffer')
  }
  function Ju(e, t, n, r, i) {
    var u,
      o = 1,
      s = e.length,
      a = t.length
    if (
      void 0 !== r &&
      ('ucs2' === (r = String(r).toLowerCase()) ||
        'ucs-2' === r ||
        'utf16le' === r ||
        'utf-16le' === r)
    ) {
      if (e.length < 2 || t.length < 2) return -1
      ;(o = 2), (s /= 2), (a /= 2), (n /= 2)
    }
    function c(e, t) {
      return 1 === o ? e[t] : e.readUInt16BE(t * o)
    }
    if (i) {
      var l = -1
      for (u = n; u < s; u++)
        if (c(e, u) === c(t, -1 === l ? 0 : u - l)) {
          if ((-1 === l && (l = u), u - l + 1 === a)) return l * o
        } else -1 !== l && (u -= u - l), (l = -1)
    } else
      for (n + a > s && (n = s - a), u = n; u >= 0; u--) {
        for (var p = !0, f = 0; f < a; f++)
          if (c(e, u + f) !== c(t, f)) {
            p = !1
            break
          }
        if (p) return u
      }
    return -1
  }
  function Xu(e, t, n, r) {
    n = Number(n) || 0
    var i = e.length - n
    r ? (r = Number(r)) > i && (r = i) : (r = i)
    var u = t.length
    if (u % 2 != 0) throw new TypeError('Invalid hex string')
    r > u / 2 && (r = u / 2)
    for (var o = 0; o < r; ++o) {
      var s = parseInt(t.substr(2 * o, 2), 16)
      if (isNaN(s)) return o
      e[n + o] = s
    }
    return o
  }
  function Yu(e, t, n, r) {
    return Co(Do(t, e.length - n), e, n, r)
  }
  function Ku(e, t, n, r) {
    return Co(
      (function (e) {
        for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n))
        return t
      })(t),
      e,
      n,
      r
    )
  }
  function Qu(e, t, n, r) {
    return Ku(e, t, n, r)
  }
  function Zu(e, t, n, r) {
    return Co(Eo(t), e, n, r)
  }
  function eo(e, t, n, r) {
    return Co(
      (function (e, t) {
        for (var n, r, i, u = [], o = 0; o < e.length && !((t -= 2) < 0); ++o)
          (r = (n = e.charCodeAt(o)) >> 8), (i = n % 256), u.push(i), u.push(r)
        return u
      })(t, e.length - n),
      e,
      n,
      r
    )
  }
  function to(e, t, n) {
    return 0 === t && n === e.length ? Nu(e) : Nu(e.slice(t, n))
  }
  function no(e, t, n) {
    n = Math.min(e.length, n)
    for (var r = [], i = t; i < n; ) {
      var u,
        o,
        s,
        a,
        c = e[i],
        l = null,
        p = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1
      if (i + p <= n)
        switch (p) {
          case 1:
            c < 128 && (l = c)
            break
          case 2:
            128 == (192 & (u = e[i + 1])) &&
              (a = ((31 & c) << 6) | (63 & u)) > 127 &&
              (l = a)
            break
          case 3:
            ;(u = e[i + 1]),
              (o = e[i + 2]),
              128 == (192 & u) &&
                128 == (192 & o) &&
                (a = ((15 & c) << 12) | ((63 & u) << 6) | (63 & o)) > 2047 &&
                (a < 55296 || a > 57343) &&
                (l = a)
            break
          case 4:
            ;(u = e[i + 1]),
              (o = e[i + 2]),
              (s = e[i + 3]),
              128 == (192 & u) &&
                128 == (192 & o) &&
                128 == (192 & s) &&
                (a =
                  ((15 & c) << 18) |
                  ((63 & u) << 12) |
                  ((63 & o) << 6) |
                  (63 & s)) > 65535 &&
                a < 1114112 &&
                (l = a)
        }
      null === l
        ? ((l = 65533), (p = 1))
        : l > 65535 &&
          ((l -= 65536),
          r.push(((l >>> 10) & 1023) | 55296),
          (l = 56320 | (1023 & l))),
        r.push(l),
        (i += p)
    }
    return (function (e) {
      var t = e.length
      if (t <= ro) return String.fromCharCode.apply(String, e)
      var n = '',
        r = 0
      for (; r < t; )
        n += String.fromCharCode.apply(String, e.slice(r, (r += ro)))
      return n
    })(r)
  }
  ;(_u.TYPED_ARRAY_SUPPORT =
    void 0 === ir.TYPED_ARRAY_SUPPORT || ir.TYPED_ARRAY_SUPPORT),
    (_u.poolSize = 8192),
    (_u._augment = function (e) {
      return (e.__proto__ = _u.prototype), e
    }),
    (_u.from = function (e, t, n) {
      return Mu(null, e, t, n)
    }),
    _u.TYPED_ARRAY_SUPPORT &&
      ((_u.prototype.__proto__ = Uint8Array.prototype),
      (_u.__proto__ = Uint8Array)),
    (_u.alloc = function (e, t, n) {
      return (function (e, t, n, r) {
        return (
          Ru(t),
          t <= 0
            ? ju(e, t)
            : void 0 !== n
            ? 'string' == typeof r
              ? ju(e, t).fill(n, r)
              : ju(e, t).fill(n)
            : ju(e, t)
        )
      })(null, e, t, n)
    }),
    (_u.allocUnsafe = function (e) {
      return $u(null, e)
    }),
    (_u.allocUnsafeSlow = function (e) {
      return $u(null, e)
    }),
    (_u.isBuffer = bo),
    (_u.compare = function (e, t) {
      if (!qu(e) || !qu(t)) throw new TypeError('Arguments must be Buffers')
      if (e === t) return 0
      for (
        var n = e.length, r = t.length, i = 0, u = Math.min(n, r);
        i < u;
        ++i
      )
        if (e[i] !== t[i]) {
          ;(n = e[i]), (r = t[i])
          break
        }
      return n < r ? -1 : r < n ? 1 : 0
    }),
    (_u.isEncoding = function (e) {
      switch (String(e).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return !0
        default:
          return !1
      }
    }),
    (_u.concat = function (e, t) {
      if (!Iu(e))
        throw new TypeError('"list" argument must be an Array of Buffers')
      if (0 === e.length) return _u.alloc(0)
      var n
      if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length
      var r = _u.allocUnsafe(t),
        i = 0
      for (n = 0; n < e.length; ++n) {
        var u = e[n]
        if (!qu(u))
          throw new TypeError('"list" argument must be an Array of Buffers')
        u.copy(r, i), (i += u.length)
      }
      return r
    }),
    (_u.byteLength = Uu),
    (_u.prototype._isBuffer = !0),
    (_u.prototype.swap16 = function () {
      var e = this.length
      if (e % 2 != 0)
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      for (var t = 0; t < e; t += 2) Gu(this, t, t + 1)
      return this
    }),
    (_u.prototype.swap32 = function () {
      var e = this.length
      if (e % 4 != 0)
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      for (var t = 0; t < e; t += 4) Gu(this, t, t + 3), Gu(this, t + 1, t + 2)
      return this
    }),
    (_u.prototype.swap64 = function () {
      var e = this.length
      if (e % 8 != 0)
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      for (var t = 0; t < e; t += 8)
        Gu(this, t, t + 7),
          Gu(this, t + 1, t + 6),
          Gu(this, t + 2, t + 5),
          Gu(this, t + 3, t + 4)
      return this
    }),
    (_u.prototype.toString = function () {
      var e = 0 | this.length
      return 0 === e
        ? ''
        : 0 === arguments.length
        ? no(this, 0, e)
        : zu.apply(this, arguments)
    }),
    (_u.prototype.equals = function (e) {
      if (!qu(e)) throw new TypeError('Argument must be a Buffer')
      return this === e || 0 === _u.compare(this, e)
    }),
    (_u.prototype.inspect = function () {
      var e = ''
      return (
        this.length > 0 &&
          ((e = this.toString('hex', 0, 50).match(/.{2}/g).join(' ')),
          this.length > 50 && (e += ' ... ')),
        '<Buffer ' + e + '>'
      )
    }),
    (_u.prototype.compare = function (e, t, n, r, i) {
      if (!qu(e)) throw new TypeError('Argument must be a Buffer')
      if (
        (void 0 === t && (t = 0),
        void 0 === n && (n = e ? e.length : 0),
        void 0 === r && (r = 0),
        void 0 === i && (i = this.length),
        t < 0 || n > e.length || r < 0 || i > this.length)
      )
        throw new RangeError('out of range index')
      if (r >= i && t >= n) return 0
      if (r >= i) return -1
      if (t >= n) return 1
      if (this === e) return 0
      for (
        var u = (i >>>= 0) - (r >>>= 0),
          o = (n >>>= 0) - (t >>>= 0),
          s = Math.min(u, o),
          a = this.slice(r, i),
          c = e.slice(t, n),
          l = 0;
        l < s;
        ++l
      )
        if (a[l] !== c[l]) {
          ;(u = a[l]), (o = c[l])
          break
        }
      return u < o ? -1 : o < u ? 1 : 0
    }),
    (_u.prototype.includes = function (e, t, n) {
      return -1 !== this.indexOf(e, t, n)
    }),
    (_u.prototype.indexOf = function (e, t, n) {
      return Hu(this, e, t, n, !0)
    }),
    (_u.prototype.lastIndexOf = function (e, t, n) {
      return Hu(this, e, t, n, !1)
    }),
    (_u.prototype.write = function (e, t, n, r) {
      if (void 0 === t) (r = 'utf8'), (n = this.length), (t = 0)
      else if (void 0 === n && 'string' == typeof t)
        (r = t), (n = this.length), (t = 0)
      else {
        if (!isFinite(t))
          throw new Error(
            'Buffer.write(string, encoding, offset[, length]) is no longer supported'
          )
        ;(t |= 0),
          isFinite(n)
            ? ((n |= 0), void 0 === r && (r = 'utf8'))
            : ((r = n), (n = void 0))
      }
      var i = this.length - t
      if (
        ((void 0 === n || n > i) && (n = i),
        (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
      )
        throw new RangeError('Attempt to write outside buffer bounds')
      r || (r = 'utf8')
      for (var u = !1; ; )
        switch (r) {
          case 'hex':
            return Xu(this, e, t, n)
          case 'utf8':
          case 'utf-8':
            return Yu(this, e, t, n)
          case 'ascii':
            return Ku(this, e, t, n)
          case 'latin1':
          case 'binary':
            return Qu(this, e, t, n)
          case 'base64':
            return Zu(this, e, t, n)
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return eo(this, e, t, n)
          default:
            if (u) throw new TypeError('Unknown encoding: ' + r)
            ;(r = ('' + r).toLowerCase()), (u = !0)
        }
    }),
    (_u.prototype.toJSON = function () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    })
  var ro = 4096
  function io(e, t, n) {
    var r = ''
    n = Math.min(e.length, n)
    for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i])
    return r
  }
  function uo(e, t, n) {
    var r = ''
    n = Math.min(e.length, n)
    for (var i = t; i < n; ++i) r += String.fromCharCode(e[i])
    return r
  }
  function oo(e, t, n) {
    var r = e.length
    ;(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r)
    for (var i = '', u = t; u < n; ++u) i += yo(e[u])
    return i
  }
  function so(e, t, n) {
    for (var r = e.slice(t, n), i = '', u = 0; u < r.length; u += 2)
      i += String.fromCharCode(r[u] + 256 * r[u + 1])
    return i
  }
  function ao(e, t, n) {
    if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint')
    if (e + t > n) throw new RangeError('Trying to access beyond buffer length')
  }
  function co(e, t, n, r, i, u) {
    if (!qu(e))
      throw new TypeError('"buffer" argument must be a Buffer instance')
    if (t > i || t < u)
      throw new RangeError('"value" argument is out of bounds')
    if (n + r > e.length) throw new RangeError('Index out of range')
  }
  function lo(e, t, n, r) {
    t < 0 && (t = 65535 + t + 1)
    for (var i = 0, u = Math.min(e.length - n, 2); i < u; ++i)
      e[n + i] = (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i))
  }
  function po(e, t, n, r) {
    t < 0 && (t = 4294967295 + t + 1)
    for (var i = 0, u = Math.min(e.length - n, 4); i < u; ++i)
      e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255
  }
  function fo(e, t, n, r, i, u) {
    if (n + r > e.length) throw new RangeError('Index out of range')
    if (n < 0) throw new RangeError('Index out of range')
  }
  function ho(e, t, n, r, i) {
    return i || fo(e, 0, n, 4), Pu(e, t, n, r, 23, 4), n + 4
  }
  function go(e, t, n, r, i) {
    return i || fo(e, 0, n, 8), Pu(e, t, n, r, 52, 8), n + 8
  }
  ;(_u.prototype.slice = function (e, t) {
    var n,
      r = this.length
    if (
      ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
      (t = void 0 === t ? r : ~~t) < 0
        ? (t += r) < 0 && (t = 0)
        : t > r && (t = r),
      t < e && (t = e),
      _u.TYPED_ARRAY_SUPPORT)
    )
      (n = this.subarray(e, t)).__proto__ = _u.prototype
    else {
      var i = t - e
      n = new _u(i, void 0)
      for (var u = 0; u < i; ++u) n[u] = this[u + e]
    }
    return n
  }),
    (_u.prototype.readUIntLE = function (e, t, n) {
      ;(e |= 0), (t |= 0), n || ao(e, t, this.length)
      for (var r = this[e], i = 1, u = 0; ++u < t && (i *= 256); )
        r += this[e + u] * i
      return r
    }),
    (_u.prototype.readUIntBE = function (e, t, n) {
      ;(e |= 0), (t |= 0), n || ao(e, t, this.length)
      for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
        r += this[e + --t] * i
      return r
    }),
    (_u.prototype.readUInt8 = function (e, t) {
      return t || ao(e, 1, this.length), this[e]
    }),
    (_u.prototype.readUInt16LE = function (e, t) {
      return t || ao(e, 2, this.length), this[e] | (this[e + 1] << 8)
    }),
    (_u.prototype.readUInt16BE = function (e, t) {
      return t || ao(e, 2, this.length), (this[e] << 8) | this[e + 1]
    }),
    (_u.prototype.readUInt32LE = function (e, t) {
      return (
        t || ao(e, 4, this.length),
        (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
          16777216 * this[e + 3]
      )
    }),
    (_u.prototype.readUInt32BE = function (e, t) {
      return (
        t || ao(e, 4, this.length),
        16777216 * this[e] +
          ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
      )
    }),
    (_u.prototype.readIntLE = function (e, t, n) {
      ;(e |= 0), (t |= 0), n || ao(e, t, this.length)
      for (var r = this[e], i = 1, u = 0; ++u < t && (i *= 256); )
        r += this[e + u] * i
      return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
    }),
    (_u.prototype.readIntBE = function (e, t, n) {
      ;(e |= 0), (t |= 0), n || ao(e, t, this.length)
      for (var r = t, i = 1, u = this[e + --r]; r > 0 && (i *= 256); )
        u += this[e + --r] * i
      return u >= (i *= 128) && (u -= Math.pow(2, 8 * t)), u
    }),
    (_u.prototype.readInt8 = function (e, t) {
      return (
        t || ao(e, 1, this.length),
        128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
      )
    }),
    (_u.prototype.readInt16LE = function (e, t) {
      t || ao(e, 2, this.length)
      var n = this[e] | (this[e + 1] << 8)
      return 32768 & n ? 4294901760 | n : n
    }),
    (_u.prototype.readInt16BE = function (e, t) {
      t || ao(e, 2, this.length)
      var n = this[e + 1] | (this[e] << 8)
      return 32768 & n ? 4294901760 | n : n
    }),
    (_u.prototype.readInt32LE = function (e, t) {
      return (
        t || ao(e, 4, this.length),
        this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
      )
    }),
    (_u.prototype.readInt32BE = function (e, t) {
      return (
        t || ao(e, 4, this.length),
        (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
      )
    }),
    (_u.prototype.readFloatLE = function (e, t) {
      return t || ao(e, 4, this.length), ku(this, e, !0, 23, 4)
    }),
    (_u.prototype.readFloatBE = function (e, t) {
      return t || ao(e, 4, this.length), ku(this, e, !1, 23, 4)
    }),
    (_u.prototype.readDoubleLE = function (e, t) {
      return t || ao(e, 8, this.length), ku(this, e, !0, 52, 8)
    }),
    (_u.prototype.readDoubleBE = function (e, t) {
      return t || ao(e, 8, this.length), ku(this, e, !1, 52, 8)
    }),
    (_u.prototype.writeUIntLE = function (e, t, n, r) {
      ;((e = +e), (t |= 0), (n |= 0), r) ||
        co(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
      var i = 1,
        u = 0
      for (this[t] = 255 & e; ++u < n && (i *= 256); )
        this[t + u] = (e / i) & 255
      return t + n
    }),
    (_u.prototype.writeUIntBE = function (e, t, n, r) {
      ;((e = +e), (t |= 0), (n |= 0), r) ||
        co(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
      var i = n - 1,
        u = 1
      for (this[t + i] = 255 & e; --i >= 0 && (u *= 256); )
        this[t + i] = (e / u) & 255
      return t + n
    }),
    (_u.prototype.writeUInt8 = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || co(this, e, t, 1, 255, 0),
        _u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
        (this[t] = 255 & e),
        t + 1
      )
    }),
    (_u.prototype.writeUInt16LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || co(this, e, t, 2, 65535, 0),
        _u.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
          : lo(this, e, t, !0),
        t + 2
      )
    }),
    (_u.prototype.writeUInt16BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || co(this, e, t, 2, 65535, 0),
        _u.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
          : lo(this, e, t, !1),
        t + 2
      )
    }),
    (_u.prototype.writeUInt32LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || co(this, e, t, 4, 4294967295, 0),
        _u.TYPED_ARRAY_SUPPORT
          ? ((this[t + 3] = e >>> 24),
            (this[t + 2] = e >>> 16),
            (this[t + 1] = e >>> 8),
            (this[t] = 255 & e))
          : po(this, e, t, !0),
        t + 4
      )
    }),
    (_u.prototype.writeUInt32BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || co(this, e, t, 4, 4294967295, 0),
        _u.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e))
          : po(this, e, t, !1),
        t + 4
      )
    }),
    (_u.prototype.writeIntLE = function (e, t, n, r) {
      if (((e = +e), (t |= 0), !r)) {
        var i = Math.pow(2, 8 * n - 1)
        co(this, e, t, n, i - 1, -i)
      }
      var u = 0,
        o = 1,
        s = 0
      for (this[t] = 255 & e; ++u < n && (o *= 256); )
        e < 0 && 0 === s && 0 !== this[t + u - 1] && (s = 1),
          (this[t + u] = (((e / o) >> 0) - s) & 255)
      return t + n
    }),
    (_u.prototype.writeIntBE = function (e, t, n, r) {
      if (((e = +e), (t |= 0), !r)) {
        var i = Math.pow(2, 8 * n - 1)
        co(this, e, t, n, i - 1, -i)
      }
      var u = n - 1,
        o = 1,
        s = 0
      for (this[t + u] = 255 & e; --u >= 0 && (o *= 256); )
        e < 0 && 0 === s && 0 !== this[t + u + 1] && (s = 1),
          (this[t + u] = (((e / o) >> 0) - s) & 255)
      return t + n
    }),
    (_u.prototype.writeInt8 = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || co(this, e, t, 1, 127, -128),
        _u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
        e < 0 && (e = 255 + e + 1),
        (this[t] = 255 & e),
        t + 1
      )
    }),
    (_u.prototype.writeInt16LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || co(this, e, t, 2, 32767, -32768),
        _u.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
          : lo(this, e, t, !0),
        t + 2
      )
    }),
    (_u.prototype.writeInt16BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || co(this, e, t, 2, 32767, -32768),
        _u.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
          : lo(this, e, t, !1),
        t + 2
      )
    }),
    (_u.prototype.writeInt32LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || co(this, e, t, 4, 2147483647, -2147483648),
        _u.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24))
          : po(this, e, t, !0),
        t + 4
      )
    }),
    (_u.prototype.writeInt32BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || co(this, e, t, 4, 2147483647, -2147483648),
        e < 0 && (e = 4294967295 + e + 1),
        _u.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e))
          : po(this, e, t, !1),
        t + 4
      )
    }),
    (_u.prototype.writeFloatLE = function (e, t, n) {
      return ho(this, e, t, !0, n)
    }),
    (_u.prototype.writeFloatBE = function (e, t, n) {
      return ho(this, e, t, !1, n)
    }),
    (_u.prototype.writeDoubleLE = function (e, t, n) {
      return go(this, e, t, !0, n)
    }),
    (_u.prototype.writeDoubleBE = function (e, t, n) {
      return go(this, e, t, !1, n)
    }),
    (_u.prototype.copy = function (e, t, n, r) {
      if (
        (n || (n = 0),
        r || 0 === r || (r = this.length),
        t >= e.length && (t = e.length),
        t || (t = 0),
        r > 0 && r < n && (r = n),
        r === n)
      )
        return 0
      if (0 === e.length || 0 === this.length) return 0
      if (t < 0) throw new RangeError('targetStart out of bounds')
      if (n < 0 || n >= this.length)
        throw new RangeError('sourceStart out of bounds')
      if (r < 0) throw new RangeError('sourceEnd out of bounds')
      r > this.length && (r = this.length),
        e.length - t < r - n && (r = e.length - t + n)
      var i,
        u = r - n
      if (this === e && n < t && t < r)
        for (i = u - 1; i >= 0; --i) e[i + t] = this[i + n]
      else if (u < 1e3 || !_u.TYPED_ARRAY_SUPPORT)
        for (i = 0; i < u; ++i) e[i + t] = this[i + n]
      else Uint8Array.prototype.set.call(e, this.subarray(n, n + u), t)
      return u
    }),
    (_u.prototype.fill = function (e, t, n, r) {
      if ('string' == typeof e) {
        if (
          ('string' == typeof t
            ? ((r = t), (t = 0), (n = this.length))
            : 'string' == typeof n && ((r = n), (n = this.length)),
          1 === e.length)
        ) {
          var i = e.charCodeAt(0)
          i < 256 && (e = i)
        }
        if (void 0 !== r && 'string' != typeof r)
          throw new TypeError('encoding must be a string')
        if ('string' == typeof r && !_u.isEncoding(r))
          throw new TypeError('Unknown encoding: ' + r)
      } else 'number' == typeof e && (e &= 255)
      if (t < 0 || this.length < t || this.length < n)
        throw new RangeError('Out of range index')
      if (n <= t) return this
      var u
      if (
        ((t >>>= 0),
        (n = void 0 === n ? this.length : n >>> 0),
        e || (e = 0),
        'number' == typeof e)
      )
        for (u = t; u < n; ++u) this[u] = e
      else {
        var o = qu(e) ? e : Do(new _u(e, r).toString()),
          s = o.length
        for (u = 0; u < n - t; ++u) this[u + t] = o[u % s]
      }
      return this
    })
  var mo = /[^+\/0-9A-Za-z-_]/g
  function yo(e) {
    return e < 16 ? '0' + e.toString(16) : e.toString(16)
  }
  function Do(e, t) {
    var n
    t = t || 1 / 0
    for (var r = e.length, i = null, u = [], o = 0; o < r; ++o) {
      if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
        if (!i) {
          if (n > 56319) {
            ;(t -= 3) > -1 && u.push(239, 191, 189)
            continue
          }
          if (o + 1 === r) {
            ;(t -= 3) > -1 && u.push(239, 191, 189)
            continue
          }
          i = n
          continue
        }
        if (n < 56320) {
          ;(t -= 3) > -1 && u.push(239, 191, 189), (i = n)
          continue
        }
        n = 65536 + (((i - 55296) << 10) | (n - 56320))
      } else i && (t -= 3) > -1 && u.push(239, 191, 189)
      if (((i = null), n < 128)) {
        if ((t -= 1) < 0) break
        u.push(n)
      } else if (n < 2048) {
        if ((t -= 2) < 0) break
        u.push((n >> 6) | 192, (63 & n) | 128)
      } else if (n < 65536) {
        if ((t -= 3) < 0) break
        u.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128)
      } else {
        if (!(n < 1114112)) throw new Error('Invalid code point')
        if ((t -= 4) < 0) break
        u.push(
          (n >> 18) | 240,
          ((n >> 12) & 63) | 128,
          ((n >> 6) & 63) | 128,
          (63 & n) | 128
        )
      }
    }
    return u
  }
  function Eo(e) {
    return (function (e) {
      var t, n, r, i, u, o
      wu || Tu()
      var s = e.length
      if (s % 4 > 0)
        throw new Error('Invalid string. Length must be a multiple of 4')
      ;(u = '=' === e[s - 2] ? 2 : '=' === e[s - 1] ? 1 : 0),
        (o = new Su((3 * s) / 4 - u)),
        (r = u > 0 ? s - 4 : s)
      var a = 0
      for (t = 0, n = 0; t < r; t += 4, n += 3)
        (i =
          (xu[e.charCodeAt(t)] << 18) |
          (xu[e.charCodeAt(t + 1)] << 12) |
          (xu[e.charCodeAt(t + 2)] << 6) |
          xu[e.charCodeAt(t + 3)]),
          (o[a++] = (i >> 16) & 255),
          (o[a++] = (i >> 8) & 255),
          (o[a++] = 255 & i)
      return (
        2 === u
          ? ((i = (xu[e.charCodeAt(t)] << 2) | (xu[e.charCodeAt(t + 1)] >> 4)),
            (o[a++] = 255 & i))
          : 1 === u &&
            ((i =
              (xu[e.charCodeAt(t)] << 10) |
              (xu[e.charCodeAt(t + 1)] << 4) |
              (xu[e.charCodeAt(t + 2)] >> 2)),
            (o[a++] = (i >> 8) & 255),
            (o[a++] = 255 & i)),
        o
      )
    })(
      (function (e) {
        if (
          (e = (function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '')
          })(e).replace(mo, '')).length < 2
        )
          return ''
        for (; e.length % 4 != 0; ) e += '='
        return e
      })(e)
    )
  }
  function Co(e, t, n, r) {
    for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)
      t[i + n] = e[i]
    return i
  }
  function bo(e) {
    return (
      null != e &&
      (!!e._isBuffer ||
        Ao(e) ||
        (function (e) {
          return (
            'function' == typeof e.readFloatLE &&
            'function' == typeof e.slice &&
            Ao(e.slice(0, 0))
          )
        })(e))
    )
  }
  function Ao(e) {
    return (
      !!e.constructor &&
      'function' == typeof e.constructor.isBuffer &&
      e.constructor.isBuffer(e)
    )
  }
  var vo = n(au)
  var Fo = class {
    constructor(e, t) {
      ;(t = t || {}).readChunk || (t.readChunk = 1024),
        t.newLineCharacter
          ? (t.newLineCharacter = t.newLineCharacter.charCodeAt(0))
          : (t.newLineCharacter = 10),
        (this.fd = 'number' == typeof e ? e : vo.openSync(e, 'r')),
        (this.options = t),
        (this.newLineCharacter = t.newLineCharacter),
        this.reset()
    }
    _searchInBuffer(e, t) {
      let n = -1
      for (let r = 0; r <= e.length; r++) {
        if (e[r] === t) {
          n = r
          break
        }
      }
      return n
    }
    reset() {
      ;(this.eofReached = !1), (this.linesCache = []), (this.fdPosition = 0)
    }
    close() {
      vo.closeSync(this.fd), (this.fd = null)
    }
    _extractLines(e) {
      let t
      const n = []
      let r = 0,
        i = 0
      for (;;) {
        let u = e[r++]
        if (u === this.newLineCharacter) (t = e.slice(i, r)), n.push(t), (i = r)
        else if (void 0 === u) break
      }
      let u = e.slice(i, r)
      return u.length && n.push(u), n
    }
    _readChunk(e) {
      let t,
        n = 0
      const r = []
      do {
        const e = new _u(this.options.readChunk)
        ;(t = vo.readSync(
          this.fd,
          e,
          0,
          this.options.readChunk,
          this.fdPosition
        )),
          (n += t),
          (this.fdPosition = this.fdPosition + t),
          r.push(e)
      } while (
        t &&
        -1 ===
          this._searchInBuffer(r[r.length - 1], this.options.newLineCharacter)
      )
      let i = _u.concat(r)
      return (
        t < this.options.readChunk &&
          ((this.eofReached = !0), (i = i.slice(0, n))),
        n &&
          ((this.linesCache = this._extractLines(i)),
          e && (this.linesCache[0] = _u.concat([e, this.linesCache[0]]))),
        n
      )
    }
    next() {
      if (!this.fd) return !1
      let e,
        t = !1
      if (this.eofReached && 0 === this.linesCache.length) return t
      if (
        (this.linesCache.length || (e = this._readChunk()),
        this.linesCache.length)
      ) {
        t = this.linesCache.shift()
        t[t.length - 1] !== this.newLineCharacter &&
          ((e = this._readChunk(t)), e && (t = this.linesCache.shift()))
      }
      return (
        this.eofReached && 0 === this.linesCache.length && this.close(),
        t &&
          t[t.length - 1] === this.newLineCharacter &&
          (t = t.slice(0, t.length - 1)),
        t
      )
    }
  }
  class xo extends Error {}
  class So extends Error {}
  class wo extends Error {}
  class To extends Error {}
  var Bo = {
      ConfigError: xo,
      DebugError: So,
      UndefinedParserError: wo,
      ArgExpansionBailout: To
    },
    No = function (e, t) {
      return (No =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }
  /*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */ var ko =
    function () {
      return (ko =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          return e
        }).apply(this, arguments)
    }
  function Po(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0
    if (n) return n.call(e)
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return (
            e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          )
        }
      }
    throw new TypeError(
      t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    )
  }
  function Oo(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!n) return e
    var r,
      i,
      u = n.call(e),
      o = []
    try {
      for (; (void 0 === t || t-- > 0) && !(r = u.next()).done; )
        o.push(r.value)
    } catch (e) {
      i = { error: e }
    } finally {
      try {
        r && !r.done && (n = u.return) && n.call(u)
      } finally {
        if (i) throw i.error
      }
    }
    return o
  }
  function Io(e) {
    return this instanceof Io ? ((this.v = e), this) : new Io(e)
  }
  var Lo = Object.freeze({
      __proto__: null,
      __extends: function (e, t) {
        function n() {
          this.constructor = e
        }
        No(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()))
      },
      get __assign() {
        return ko
      },
      __rest: function (e, t) {
        var n = {}
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r])
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var i = 0
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]])
        }
        return n
      },
      __decorate: function (e, t, n, r) {
        var i,
          u = arguments.length,
          o =
            u < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, n, r)
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (o = (u < 3 ? i(o) : u > 3 ? i(t, n, o) : i(t, n)) || o)
        return u > 3 && o && Object.defineProperty(t, n, o), o
      },
      __param: function (e, t) {
        return function (n, r) {
          t(n, r, e)
        }
      },
      __metadata: function (e, t) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
          return Reflect.metadata(e, t)
      },
      __awaiter: function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, u) {
          function o(e) {
            try {
              a(r.next(e))
            } catch (e) {
              u(e)
            }
          }
          function s(e) {
            try {
              a(r.throw(e))
            } catch (e) {
              u(e)
            }
          }
          function a(e) {
            var t
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t)
                    })).then(o, s)
          }
          a((r = r.apply(e, t || [])).next())
        })
      },
      __generator: function (e, t) {
        var n,
          r,
          i,
          u,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1]
              return i[1]
            },
            trys: [],
            ops: []
          }
        return (
          (u = { next: s(0), throw: s(1), return: s(2) }),
          'function' == typeof Symbol &&
            (u[Symbol.iterator] = function () {
              return this
            }),
          u
        )
        function s(u) {
          return function (s) {
            return (function (u) {
              if (n) throw new TypeError('Generator is already executing.')
              for (; o; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & u[0]
                          ? r.return
                          : u[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, u[1])).done)
                  )
                    return i
                  switch (((r = 0), i && (u = [2 & u[0], i.value]), u[0])) {
                    case 0:
                    case 1:
                      i = u
                      break
                    case 4:
                      return o.label++, { value: u[1], done: !1 }
                    case 5:
                      o.label++, (r = u[1]), (u = [0])
                      continue
                    case 7:
                      ;(u = o.ops.pop()), o.trys.pop()
                      continue
                    default:
                      if (
                        !((i = o.trys),
                        (i = i.length > 0 && i[i.length - 1]) ||
                          (6 !== u[0] && 2 !== u[0]))
                      ) {
                        o = 0
                        continue
                      }
                      if (3 === u[0] && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                        o.label = u[1]
                        break
                      }
                      if (6 === u[0] && o.label < i[1]) {
                        ;(o.label = i[1]), (i = u)
                        break
                      }
                      if (i && o.label < i[2]) {
                        ;(o.label = i[2]), o.ops.push(u)
                        break
                      }
                      i[2] && o.ops.pop(), o.trys.pop()
                      continue
                  }
                  u = t.call(e, o)
                } catch (e) {
                  ;(u = [6, e]), (r = 0)
                } finally {
                  n = i = 0
                }
              if (5 & u[0]) throw u[1]
              return { value: u[0] ? u[1] : void 0, done: !0 }
            })([u, s])
          }
        }
      },
      __createBinding: function (e, t, n, r) {
        void 0 === r && (r = n), (e[r] = t[n])
      },
      __exportStar: function (e, t) {
        for (var n in e) 'default' === n || t.hasOwnProperty(n) || (t[n] = e[n])
      },
      __values: Po,
      __read: Oo,
      __spread: function () {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(Oo(arguments[t]))
        return e
      },
      __spreadArrays: function () {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length
        var r = Array(e),
          i = 0
        for (t = 0; t < n; t++)
          for (var u = arguments[t], o = 0, s = u.length; o < s; o++, i++)
            r[i] = u[o]
        return r
      },
      __await: Io,
      __asyncGenerator: function (e, t, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.')
        var r,
          i = n.apply(e, t || []),
          u = []
        return (
          (r = {}),
          o('next'),
          o('throw'),
          o('return'),
          (r[Symbol.asyncIterator] = function () {
            return this
          }),
          r
        )
        function o(e) {
          i[e] &&
            (r[e] = function (t) {
              return new Promise(function (n, r) {
                u.push([e, t, n, r]) > 1 || s(e, t)
              })
            })
        }
        function s(e, t) {
          try {
            ;(n = i[e](t)).value instanceof Io
              ? Promise.resolve(n.value.v).then(a, c)
              : l(u[0][2], n)
          } catch (e) {
            l(u[0][3], e)
          }
          var n
        }
        function a(e) {
          s('next', e)
        }
        function c(e) {
          s('throw', e)
        }
        function l(e, t) {
          e(t), u.shift(), u.length && s(u[0][0], u[0][1])
        }
      },
      __asyncDelegator: function (e) {
        var t, n
        return (
          (t = {}),
          r('next'),
          r('throw', function (e) {
            throw e
          }),
          r('return'),
          (t[Symbol.iterator] = function () {
            return this
          }),
          t
        )
        function r(r, i) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n)
                  ? { value: Io(e[r](t)), done: 'return' === r }
                  : i
                  ? i(t)
                  : t
              }
            : i
        }
      },
      __asyncValues: function (e) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.')
        var t,
          n = e[Symbol.asyncIterator]
        return n
          ? n.call(e)
          : ((e = Po(e)),
            (t = {}),
            r('next'),
            r('throw'),
            r('return'),
            (t[Symbol.asyncIterator] = function () {
              return this
            }),
            t)
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, i) {
                ;(function (e, t, n, r) {
                  Promise.resolve(r).then(function (t) {
                    e({ value: t, done: n })
                  }, t)
                })(r, i, (t = e[n](t)).done, t.value)
              })
            }
        }
      },
      __makeTemplateObject: function (e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, 'raw', { value: t })
            : (e.raw = t),
          e
        )
      },
      __importStar: function (e) {
        if (e && e.__esModule) return e
        var t = {}
        if (null != e)
          for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n])
        return (t.default = e), t
      },
      __importDefault: function (e) {
        return e && e.__esModule ? e : { default: e }
      },
      __classPrivateFieldGet: function (e, t) {
        if (!t.has(e))
          throw new TypeError('attempted to get private field on non-instance')
        return t.get(e)
      },
      __classPrivateFieldSet: function (e, t, n) {
        if (!t.has(e))
          throw new TypeError('attempted to set private field on non-instance')
        return t.set(e, n), n
      }
    }),
    jo = r(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.apiDescriptor = {
          key: (e) =>
            /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e),
          value(e) {
            if (null === e || 'object' != typeof e) return JSON.stringify(e)
            if (Array.isArray(e))
              return `[${e.map((e) => t.apiDescriptor.value(e)).join(', ')}]`
            const n = Object.keys(e)
            return 0 === n.length
              ? '{}'
              : `{ ${n
                  .map(
                    (n) =>
                      `${t.apiDescriptor.key(n)}: ${t.apiDescriptor.value(
                        e[n]
                      )}`
                  )
                  .join(', ')} }`
          },
          pair: ({ key: e, value: n }) => t.apiDescriptor.value({ [e]: n })
        })
    }),
    _o = r(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Lo.__exportStar(jo, t)
    }),
    Mo = /[|\\{}()[\]^$+*?.]/g,
    Ro = function (e) {
      if ('string' != typeof e) throw new TypeError('Expected a string')
      return e.replace(Mo, '\\$&')
    },
    $o = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    },
    Vo = r(function (e) {
      var t = {}
      for (var n in $o) $o.hasOwnProperty(n) && (t[$o[n]] = n)
      var r = (e.exports = {
        rgb: { channels: 3, labels: 'rgb' },
        hsl: { channels: 3, labels: 'hsl' },
        hsv: { channels: 3, labels: 'hsv' },
        hwb: { channels: 3, labels: 'hwb' },
        cmyk: { channels: 4, labels: 'cmyk' },
        xyz: { channels: 3, labels: 'xyz' },
        lab: { channels: 3, labels: 'lab' },
        lch: { channels: 3, labels: 'lch' },
        hex: { channels: 1, labels: ['hex'] },
        keyword: { channels: 1, labels: ['keyword'] },
        ansi16: { channels: 1, labels: ['ansi16'] },
        ansi256: { channels: 1, labels: ['ansi256'] },
        hcg: { channels: 3, labels: ['h', 'c', 'g'] },
        apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
        gray: { channels: 1, labels: ['gray'] }
      })
      for (var i in r)
        if (r.hasOwnProperty(i)) {
          if (!('channels' in r[i]))
            throw new Error('missing channels property: ' + i)
          if (!('labels' in r[i]))
            throw new Error('missing channel labels property: ' + i)
          if (r[i].labels.length !== r[i].channels)
            throw new Error('channel and label counts mismatch: ' + i)
          var u = r[i].channels,
            o = r[i].labels
          delete r[i].channels,
            delete r[i].labels,
            Object.defineProperty(r[i], 'channels', { value: u }),
            Object.defineProperty(r[i], 'labels', { value: o })
        }
      ;(r.rgb.hsl = function (e) {
        var t,
          n,
          r = e[0] / 255,
          i = e[1] / 255,
          u = e[2] / 255,
          o = Math.min(r, i, u),
          s = Math.max(r, i, u),
          a = s - o
        return (
          s === o
            ? (t = 0)
            : r === s
            ? (t = (i - u) / a)
            : i === s
            ? (t = 2 + (u - r) / a)
            : u === s && (t = 4 + (r - i) / a),
          (t = Math.min(60 * t, 360)) < 0 && (t += 360),
          (n = (o + s) / 2),
          [
            t,
            100 * (s === o ? 0 : n <= 0.5 ? a / (s + o) : a / (2 - s - o)),
            100 * n
          ]
        )
      }),
        (r.rgb.hsv = function (e) {
          var t,
            n,
            r,
            i,
            u,
            o = e[0] / 255,
            s = e[1] / 255,
            a = e[2] / 255,
            c = Math.max(o, s, a),
            l = c - Math.min(o, s, a),
            p = function (e) {
              return (c - e) / 6 / l + 0.5
            }
          return (
            0 === l
              ? (i = u = 0)
              : ((u = l / c),
                (t = p(o)),
                (n = p(s)),
                (r = p(a)),
                o === c
                  ? (i = r - n)
                  : s === c
                  ? (i = 1 / 3 + t - r)
                  : a === c && (i = 2 / 3 + n - t),
                i < 0 ? (i += 1) : i > 1 && (i -= 1)),
            [360 * i, 100 * u, 100 * c]
          )
        }),
        (r.rgb.hwb = function (e) {
          var t = e[0],
            n = e[1],
            i = e[2]
          return [
            r.rgb.hsl(e)[0],
            100 * ((1 / 255) * Math.min(t, Math.min(n, i))),
            100 * (i = 1 - (1 / 255) * Math.max(t, Math.max(n, i)))
          ]
        }),
        (r.rgb.cmyk = function (e) {
          var t,
            n = e[0] / 255,
            r = e[1] / 255,
            i = e[2] / 255
          return [
            100 *
              ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - i))) / (1 - t) || 0),
            100 * ((1 - r - t) / (1 - t) || 0),
            100 * ((1 - i - t) / (1 - t) || 0),
            100 * t
          ]
        }),
        (r.rgb.keyword = function (e) {
          var n = t[e]
          if (n) return n
          var r,
            i,
            u,
            o = 1 / 0
          for (var s in $o)
            if ($o.hasOwnProperty(s)) {
              var a = $o[s],
                c =
                  ((i = e),
                  (u = a),
                  Math.pow(i[0] - u[0], 2) +
                    Math.pow(i[1] - u[1], 2) +
                    Math.pow(i[2] - u[2], 2))
              c < o && ((o = c), (r = s))
            }
          return r
        }),
        (r.keyword.rgb = function (e) {
          return $o[e]
        }),
        (r.rgb.xyz = function (e) {
          var t = e[0] / 255,
            n = e[1] / 255,
            r = e[2] / 255
          return [
            100 *
              (0.4124 *
                (t =
                  t > 0.04045
                    ? Math.pow((t + 0.055) / 1.055, 2.4)
                    : t / 12.92) +
                0.3576 *
                  (n =
                    n > 0.04045
                      ? Math.pow((n + 0.055) / 1.055, 2.4)
                      : n / 12.92) +
                0.1805 *
                  (r =
                    r > 0.04045
                      ? Math.pow((r + 0.055) / 1.055, 2.4)
                      : r / 12.92)),
            100 * (0.2126 * t + 0.7152 * n + 0.0722 * r),
            100 * (0.0193 * t + 0.1192 * n + 0.9505 * r)
          ]
        }),
        (r.rgb.lab = function (e) {
          var t = r.rgb.xyz(e),
            n = t[0],
            i = t[1],
            u = t[2]
          return (
            (i /= 100),
            (u /= 108.883),
            (n =
              (n /= 95.047) > 0.008856
                ? Math.pow(n, 1 / 3)
                : 7.787 * n + 16 / 116),
            [
              116 *
                (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) -
                16,
              500 * (n - i),
              200 *
                (i -
                  (u =
                    u > 0.008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116))
            ]
          )
        }),
        (r.hsl.rgb = function (e) {
          var t,
            n,
            r,
            i,
            u,
            o = e[0] / 360,
            s = e[1] / 100,
            a = e[2] / 100
          if (0 === s) return [(u = 255 * a), u, u]
          ;(t = 2 * a - (n = a < 0.5 ? a * (1 + s) : a + s - a * s)),
            (i = [0, 0, 0])
          for (var c = 0; c < 3; c++)
            (r = o + (1 / 3) * -(c - 1)) < 0 && r++,
              r > 1 && r--,
              (u =
                6 * r < 1
                  ? t + 6 * (n - t) * r
                  : 2 * r < 1
                  ? n
                  : 3 * r < 2
                  ? t + (n - t) * (2 / 3 - r) * 6
                  : t),
              (i[c] = 255 * u)
          return i
        }),
        (r.hsl.hsv = function (e) {
          var t = e[0],
            n = e[1] / 100,
            r = e[2] / 100,
            i = n,
            u = Math.max(r, 0.01)
          return (
            (n *= (r *= 2) <= 1 ? r : 2 - r),
            (i *= u <= 1 ? u : 2 - u),
            [
              t,
              100 * (0 === r ? (2 * i) / (u + i) : (2 * n) / (r + n)),
              100 * ((r + n) / 2)
            ]
          )
        }),
        (r.hsv.rgb = function (e) {
          var t = e[0] / 60,
            n = e[1] / 100,
            r = e[2] / 100,
            i = Math.floor(t) % 6,
            u = t - Math.floor(t),
            o = 255 * r * (1 - n),
            s = 255 * r * (1 - n * u),
            a = 255 * r * (1 - n * (1 - u))
          switch (((r *= 255), i)) {
            case 0:
              return [r, a, o]
            case 1:
              return [s, r, o]
            case 2:
              return [o, r, a]
            case 3:
              return [o, s, r]
            case 4:
              return [a, o, r]
            case 5:
              return [r, o, s]
          }
        }),
        (r.hsv.hsl = function (e) {
          var t,
            n,
            r,
            i = e[0],
            u = e[1] / 100,
            o = e[2] / 100,
            s = Math.max(o, 0.01)
          return (
            (r = (2 - u) * o),
            (n = u * s),
            [
              i,
              100 * (n = (n /= (t = (2 - u) * s) <= 1 ? t : 2 - t) || 0),
              100 * (r /= 2)
            ]
          )
        }),
        (r.hwb.rgb = function (e) {
          var t,
            n,
            r,
            i,
            u,
            o,
            s,
            a = e[0] / 360,
            c = e[1] / 100,
            l = e[2] / 100,
            p = c + l
          switch (
            (p > 1 && ((c /= p), (l /= p)),
            (r = 6 * a - (t = Math.floor(6 * a))),
            0 != (1 & t) && (r = 1 - r),
            (i = c + r * ((n = 1 - l) - c)),
            t)
          ) {
            default:
            case 6:
            case 0:
              ;(u = n), (o = i), (s = c)
              break
            case 1:
              ;(u = i), (o = n), (s = c)
              break
            case 2:
              ;(u = c), (o = n), (s = i)
              break
            case 3:
              ;(u = c), (o = i), (s = n)
              break
            case 4:
              ;(u = i), (o = c), (s = n)
              break
            case 5:
              ;(u = n), (o = c), (s = i)
          }
          return [255 * u, 255 * o, 255 * s]
        }),
        (r.cmyk.rgb = function (e) {
          var t = e[0] / 100,
            n = e[1] / 100,
            r = e[2] / 100,
            i = e[3] / 100
          return [
            255 * (1 - Math.min(1, t * (1 - i) + i)),
            255 * (1 - Math.min(1, n * (1 - i) + i)),
            255 * (1 - Math.min(1, r * (1 - i) + i))
          ]
        }),
        (r.xyz.rgb = function (e) {
          var t,
            n,
            r,
            i = e[0] / 100,
            u = e[1] / 100,
            o = e[2] / 100
          return (
            (n = -0.9689 * i + 1.8758 * u + 0.0415 * o),
            (r = 0.0557 * i + -0.204 * u + 1.057 * o),
            (t =
              (t = 3.2406 * i + -1.5372 * u + -0.4986 * o) > 0.0031308
                ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055
                : 12.92 * t),
            (n =
              n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n),
            (r =
              r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r),
            [
              255 * (t = Math.min(Math.max(0, t), 1)),
              255 * (n = Math.min(Math.max(0, n), 1)),
              255 * (r = Math.min(Math.max(0, r), 1))
            ]
          )
        }),
        (r.xyz.lab = function (e) {
          var t = e[0],
            n = e[1],
            r = e[2]
          return (
            (n /= 100),
            (r /= 108.883),
            (t =
              (t /= 95.047) > 0.008856
                ? Math.pow(t, 1 / 3)
                : 7.787 * t + 16 / 116),
            [
              116 *
                (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) -
                16,
              500 * (t - n),
              200 *
                (n -
                  (r =
                    r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))
            ]
          )
        }),
        (r.lab.xyz = function (e) {
          var t,
            n,
            r,
            i = e[0]
          ;(t = e[1] / 500 + (n = (i + 16) / 116)), (r = n - e[2] / 200)
          var u = Math.pow(n, 3),
            o = Math.pow(t, 3),
            s = Math.pow(r, 3)
          return (
            (n = u > 0.008856 ? u : (n - 16 / 116) / 7.787),
            (t = o > 0.008856 ? o : (t - 16 / 116) / 7.787),
            (r = s > 0.008856 ? s : (r - 16 / 116) / 7.787),
            [(t *= 95.047), (n *= 100), (r *= 108.883)]
          )
        }),
        (r.lab.lch = function (e) {
          var t,
            n = e[0],
            r = e[1],
            i = e[2]
          return (
            (t = (360 * Math.atan2(i, r)) / 2 / Math.PI) < 0 && (t += 360),
            [n, Math.sqrt(r * r + i * i), t]
          )
        }),
        (r.lch.lab = function (e) {
          var t,
            n = e[0],
            r = e[1]
          return (
            (t = (e[2] / 360) * 2 * Math.PI),
            [n, r * Math.cos(t), r * Math.sin(t)]
          )
        }),
        (r.rgb.ansi16 = function (e) {
          var t = e[0],
            n = e[1],
            i = e[2],
            u = 1 in arguments ? arguments[1] : r.rgb.hsv(e)[2]
          if (0 === (u = Math.round(u / 50))) return 30
          var o =
            30 +
            ((Math.round(i / 255) << 2) |
              (Math.round(n / 255) << 1) |
              Math.round(t / 255))
          return 2 === u && (o += 60), o
        }),
        (r.hsv.ansi16 = function (e) {
          return r.rgb.ansi16(r.hsv.rgb(e), e[2])
        }),
        (r.rgb.ansi256 = function (e) {
          var t = e[0],
            n = e[1],
            r = e[2]
          return t === n && n === r
            ? t < 8
              ? 16
              : t > 248
              ? 231
              : Math.round(((t - 8) / 247) * 24) + 232
            : 16 +
                36 * Math.round((t / 255) * 5) +
                6 * Math.round((n / 255) * 5) +
                Math.round((r / 255) * 5)
        }),
        (r.ansi16.rgb = function (e) {
          var t = e % 10
          if (0 === t || 7 === t)
            return e > 50 && (t += 3.5), [(t = (t / 10.5) * 255), t, t]
          var n = 0.5 * (1 + ~~(e > 50))
          return [
            (1 & t) * n * 255,
            ((t >> 1) & 1) * n * 255,
            ((t >> 2) & 1) * n * 255
          ]
        }),
        (r.ansi256.rgb = function (e) {
          if (e >= 232) {
            var t = 10 * (e - 232) + 8
            return [t, t, t]
          }
          var n
          return (
            (e -= 16),
            [
              (Math.floor(e / 36) / 5) * 255,
              (Math.floor((n = e % 36) / 6) / 5) * 255,
              ((n % 6) / 5) * 255
            ]
          )
        }),
        (r.rgb.hex = function (e) {
          var t = (
            ((255 & Math.round(e[0])) << 16) +
            ((255 & Math.round(e[1])) << 8) +
            (255 & Math.round(e[2]))
          )
            .toString(16)
            .toUpperCase()
          return '000000'.substring(t.length) + t
        }),
        (r.hex.rgb = function (e) {
          var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
          if (!t) return [0, 0, 0]
          var n = t[0]
          3 === t[0].length &&
            (n = n
              .split('')
              .map(function (e) {
                return e + e
              })
              .join(''))
          var r = parseInt(n, 16)
          return [(r >> 16) & 255, (r >> 8) & 255, 255 & r]
        }),
        (r.rgb.hcg = function (e) {
          var t,
            n = e[0] / 255,
            r = e[1] / 255,
            i = e[2] / 255,
            u = Math.max(Math.max(n, r), i),
            o = Math.min(Math.min(n, r), i),
            s = u - o
          return (
            (t =
              s <= 0
                ? 0
                : u === n
                ? ((r - i) / s) % 6
                : u === r
                ? 2 + (i - n) / s
                : 4 + (n - r) / s + 4),
            (t /= 6),
            [360 * (t %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]
          )
        }),
        (r.hsl.hcg = function (e) {
          var t = e[1] / 100,
            n = e[2] / 100,
            r = 1,
            i = 0
          return (
            (r = n < 0.5 ? 2 * t * n : 2 * t * (1 - n)) < 1 &&
              (i = (n - 0.5 * r) / (1 - r)),
            [e[0], 100 * r, 100 * i]
          )
        }),
        (r.hsv.hcg = function (e) {
          var t = e[1] / 100,
            n = e[2] / 100,
            r = t * n,
            i = 0
          return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]
        }),
        (r.hcg.rgb = function (e) {
          var t = e[0] / 360,
            n = e[1] / 100,
            r = e[2] / 100
          if (0 === n) return [255 * r, 255 * r, 255 * r]
          var i,
            u = [0, 0, 0],
            o = (t % 1) * 6,
            s = o % 1,
            a = 1 - s
          switch (Math.floor(o)) {
            case 0:
              ;(u[0] = 1), (u[1] = s), (u[2] = 0)
              break
            case 1:
              ;(u[0] = a), (u[1] = 1), (u[2] = 0)
              break
            case 2:
              ;(u[0] = 0), (u[1] = 1), (u[2] = s)
              break
            case 3:
              ;(u[0] = 0), (u[1] = a), (u[2] = 1)
              break
            case 4:
              ;(u[0] = s), (u[1] = 0), (u[2] = 1)
              break
            default:
              ;(u[0] = 1), (u[1] = 0), (u[2] = a)
          }
          return (
            (i = (1 - n) * r),
            [255 * (n * u[0] + i), 255 * (n * u[1] + i), 255 * (n * u[2] + i)]
          )
        }),
        (r.hcg.hsv = function (e) {
          var t = e[1] / 100,
            n = t + (e[2] / 100) * (1 - t),
            r = 0
          return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n]
        }),
        (r.hcg.hsl = function (e) {
          var t = e[1] / 100,
            n = (e[2] / 100) * (1 - t) + 0.5 * t,
            r = 0
          return (
            n > 0 && n < 0.5
              ? (r = t / (2 * n))
              : n >= 0.5 && n < 1 && (r = t / (2 * (1 - n))),
            [e[0], 100 * r, 100 * n]
          )
        }),
        (r.hcg.hwb = function (e) {
          var t = e[1] / 100,
            n = t + (e[2] / 100) * (1 - t)
          return [e[0], 100 * (n - t), 100 * (1 - n)]
        }),
        (r.hwb.hcg = function (e) {
          var t = e[1] / 100,
            n = 1 - e[2] / 100,
            r = n - t,
            i = 0
          return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]
        }),
        (r.apple.rgb = function (e) {
          return [
            (e[0] / 65535) * 255,
            (e[1] / 65535) * 255,
            (e[2] / 65535) * 255
          ]
        }),
        (r.rgb.apple = function (e) {
          return [
            (e[0] / 255) * 65535,
            (e[1] / 255) * 65535,
            (e[2] / 255) * 65535
          ]
        }),
        (r.gray.rgb = function (e) {
          return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255]
        }),
        (r.gray.hsl = r.gray.hsv =
          function (e) {
            return [0, 0, e[0]]
          }),
        (r.gray.hwb = function (e) {
          return [0, 100, e[0]]
        }),
        (r.gray.cmyk = function (e) {
          return [0, 0, 0, e[0]]
        }),
        (r.gray.lab = function (e) {
          return [e[0], 0, 0]
        }),
        (r.gray.hex = function (e) {
          var t = 255 & Math.round((e[0] / 100) * 255),
            n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase()
          return '000000'.substring(n.length) + n
        }),
        (r.rgb.gray = function (e) {
          return [((e[0] + e[1] + e[2]) / 3 / 255) * 100]
        })
    })
  function Wo(e) {
    var t = (function () {
        for (var e = {}, t = Object.keys(Vo), n = t.length, r = 0; r < n; r++)
          e[t[r]] = { distance: -1, parent: null }
        return e
      })(),
      n = [e]
    for (t[e].distance = 0; n.length; )
      for (
        var r = n.pop(), i = Object.keys(Vo[r]), u = i.length, o = 0;
        o < u;
        o++
      ) {
        var s = i[o],
          a = t[s]
        ;-1 === a.distance &&
          ((a.distance = t[r].distance + 1), (a.parent = r), n.unshift(s))
      }
    return t
  }
  function qo(e, t) {
    return function (n) {
      return t(e(n))
    }
  }
  function Uo(e, t) {
    for (
      var n = [t[e].parent, e], r = Vo[t[e].parent][e], i = t[e].parent;
      t[i].parent;

    )
      n.unshift(t[i].parent), (r = qo(Vo[t[i].parent][i], r)), (i = t[i].parent)
    return (r.conversion = n), r
  }
  var zo = {}
  Object.keys(Vo).forEach(function (e) {
    ;(zo[e] = {}),
      Object.defineProperty(zo[e], 'channels', { value: Vo[e].channels }),
      Object.defineProperty(zo[e], 'labels', { value: Vo[e].labels })
    var t = (function (e) {
      for (
        var t = Wo(e), n = {}, r = Object.keys(t), i = r.length, u = 0;
        u < i;
        u++
      ) {
        var o = r[u]
        null !== t[o].parent && (n[o] = Uo(o, t))
      }
      return n
    })(e)
    Object.keys(t).forEach(function (n) {
      var r = t[n]
      ;(zo[e][n] = (function (e) {
        var t = function (t) {
          if (null == t) return t
          arguments.length > 1 && (t = Array.prototype.slice.call(arguments))
          var n = e(t)
          if ('object' == typeof n)
            for (var r = n.length, i = 0; i < r; i++) n[i] = Math.round(n[i])
          return n
        }
        return 'conversion' in e && (t.conversion = e.conversion), t
      })(r)),
        (zo[e][n].raw = (function (e) {
          var t = function (t) {
            return null == t
              ? t
              : (arguments.length > 1 &&
                  (t = Array.prototype.slice.call(arguments)),
                e(t))
          }
          return 'conversion' in e && (t.conversion = e.conversion), t
        })(r))
    })
  })
  var Go,
    Ho = zo,
    Jo = r(function (e) {
      const t = (e, t) =>
          function () {
            const n = e.apply(Ho, arguments)
            return `\x1b[${n + t}m`
          },
        n = (e, t) =>
          function () {
            const n = e.apply(Ho, arguments)
            return `\x1b[${38 + t};5;${n}m`
          },
        r = (e, t) =>
          function () {
            const n = e.apply(Ho, arguments)
            return `\x1b[${38 + t};2;${n[0]};${n[1]};${n[2]}m`
          }
      Object.defineProperty(e, 'exports', {
        enumerable: !0,
        get: function () {
          const e = new Map(),
            i = {
              modifier: {
                reset: [0, 0],
                bold: [1, 22],
                dim: [2, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                hidden: [8, 28],
                strikethrough: [9, 29]
              },
              color: {
                black: [30, 39],
                red: [31, 39],
                green: [32, 39],
                yellow: [33, 39],
                blue: [34, 39],
                magenta: [35, 39],
                cyan: [36, 39],
                white: [37, 39],
                gray: [90, 39],
                redBright: [91, 39],
                greenBright: [92, 39],
                yellowBright: [93, 39],
                blueBright: [94, 39],
                magentaBright: [95, 39],
                cyanBright: [96, 39],
                whiteBright: [97, 39]
              },
              bgColor: {
                bgBlack: [40, 49],
                bgRed: [41, 49],
                bgGreen: [42, 49],
                bgYellow: [43, 49],
                bgBlue: [44, 49],
                bgMagenta: [45, 49],
                bgCyan: [46, 49],
                bgWhite: [47, 49],
                bgBlackBright: [100, 49],
                bgRedBright: [101, 49],
                bgGreenBright: [102, 49],
                bgYellowBright: [103, 49],
                bgBlueBright: [104, 49],
                bgMagentaBright: [105, 49],
                bgCyanBright: [106, 49],
                bgWhiteBright: [107, 49]
              }
            }
          i.color.grey = i.color.gray
          for (const t of Object.keys(i)) {
            const n = i[t]
            for (const t of Object.keys(n)) {
              const r = n[t]
              ;(i[t] = { open: `\x1b[${r[0]}m`, close: `\x1b[${r[1]}m` }),
                (n[t] = i[t]),
                e.set(r[0], r[1])
            }
            Object.defineProperty(i, t, { value: n, enumerable: !1 }),
              Object.defineProperty(i, 'codes', { value: e, enumerable: !1 })
          }
          const u = (e) => e,
            o = (e, t, n) => [e, t, n]
          ;(i.color.close = '\x1b[39m'),
            (i.bgColor.close = '\x1b[49m'),
            (i.color.ansi = { ansi: t(u, 0) }),
            (i.color.ansi256 = { ansi256: n(u, 0) }),
            (i.color.ansi16m = { rgb: r(o, 0) }),
            (i.bgColor.ansi = { ansi: t(u, 10) }),
            (i.bgColor.ansi256 = { ansi256: n(u, 10) }),
            (i.bgColor.ansi16m = { rgb: r(o, 10) })
          for (let e of Object.keys(Ho)) {
            if ('object' != typeof Ho[e]) continue
            const u = Ho[e]
            'ansi16' === e && (e = 'ansi'),
              'ansi16' in u &&
                ((i.color.ansi[e] = t(u.ansi16, 0)),
                (i.bgColor.ansi[e] = t(u.ansi16, 10))),
              'ansi256' in u &&
                ((i.color.ansi256[e] = n(u.ansi256, 0)),
                (i.bgColor.ansi256[e] = n(u.ansi256, 10))),
              'rgb' in u &&
                ((i.color.ansi16m[e] = r(u.rgb, 0)),
                (i.bgColor.ansi16m[e] = r(u.rgb, 10)))
          }
          return i
        }
      })
    })
  function Xo() {
    if (void 0 === Go) {
      var e = new ArrayBuffer(2),
        t = new Uint8Array(e),
        n = new Uint16Array(e)
      if (((t[0] = 1), (t[1] = 2), 258 === n[0])) Go = 'BE'
      else {
        if (513 !== n[0]) throw new Error('unable to figure out endianess')
        Go = 'LE'
      }
    }
    return Go
  }
  function Yo() {
    return void 0 !== ir.location ? ir.location.hostname : ''
  }
  function Ko() {
    return []
  }
  function Qo() {
    return 0
  }
  function Zo() {
    return Number.MAX_VALUE
  }
  function es() {
    return Number.MAX_VALUE
  }
  function ts() {
    return []
  }
  function ns() {
    return 'Browser'
  }
  function rs() {
    return void 0 !== ir.navigator ? ir.navigator.appVersion : ''
  }
  function is() {}
  function us() {}
  function os() {
    return 'javascript'
  }
  function ss() {
    return 'browser'
  }
  function as() {
    return '/tmp'
  }
  var cs = as,
    ls = {
      EOL: '\n',
      arch: os,
      platform: ss,
      tmpdir: cs,
      tmpDir: as,
      networkInterfaces: is,
      getNetworkInterfaces: us,
      release: rs,
      type: ns,
      cpus: ts,
      totalmem: es,
      freemem: Zo,
      uptime: Qo,
      loadavg: Ko,
      hostname: Yo,
      endianness: Xo
    },
    ps = (e, t) => {
      t = t || Tr.argv
      const n = e.startsWith('-') ? '' : 1 === e.length ? '-' : '--',
        r = t.indexOf(n + e),
        i = t.indexOf('--')
      return -1 !== r && (-1 === i || r < i)
    },
    fs = n(
      Object.freeze({
        __proto__: null,
        endianness: Xo,
        hostname: Yo,
        loadavg: Ko,
        uptime: Qo,
        freemem: Zo,
        totalmem: es,
        cpus: ts,
        type: ns,
        release: rs,
        networkInterfaces: is,
        getNetworkInterfaces: us,
        arch: os,
        platform: ss,
        tmpDir: as,
        tmpdir: cs,
        EOL: '\n',
        default: ls
      })
    )
  const ds = Tr.env
  let hs
  function gs(e) {
    return (function (e) {
      return (
        0 !== e && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 }
      )
    })(
      (function (e) {
        if (!1 === hs) return 0
        if (ps('color=16m') || ps('color=full') || ps('color=truecolor'))
          return 3
        if (ps('color=256')) return 2
        if (e && !e.isTTY && !0 !== hs) return 0
        const t = hs ? 1 : 0
        if ('win32' === Tr.platform) {
          const e = fs.release().split('.')
          return Number(Tr.versions.node.split('.')[0]) >= 8 &&
            Number(e[0]) >= 10 &&
            Number(e[2]) >= 10586
            ? Number(e[2]) >= 14931
              ? 3
              : 2
            : 1
        }
        if ('CI' in ds)
          return ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(
            (e) => e in ds
          ) || 'codeship' === ds.CI_NAME
            ? 1
            : t
        if ('TEAMCITY_VERSION' in ds)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(ds.TEAMCITY_VERSION)
            ? 1
            : 0
        if ('truecolor' === ds.COLORTERM) return 3
        if ('TERM_PROGRAM' in ds) {
          const e = parseInt((ds.TERM_PROGRAM_VERSION || '').split('.')[0], 10)
          switch (ds.TERM_PROGRAM) {
            case 'iTerm.app':
              return e >= 3 ? 3 : 2
            case 'Apple_Terminal':
              return 2
          }
        }
        return /-256(color)?$/i.test(ds.TERM)
          ? 2
          : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
              ds.TERM
            ) || 'COLORTERM' in ds
          ? 1
          : (ds.TERM, t)
      })(e)
    )
  }
  ps('no-color') || ps('no-colors') || ps('color=false')
    ? (hs = !1)
    : (ps('color') || ps('colors') || ps('color=true') || ps('color=always')) &&
      (hs = !0),
    'FORCE_COLOR' in ds &&
      (hs = 0 === ds.FORCE_COLOR.length || 0 !== parseInt(ds.FORCE_COLOR, 10))
  var ms = { supportsColor: gs, stdout: gs(Tr.stdout), stderr: gs(Tr.stderr) }
  const ys =
      /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
    Ds = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
    Es = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
    Cs = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
    bs = new Map([
      ['n', '\n'],
      ['r', '\r'],
      ['t', '\t'],
      ['b', '\b'],
      ['f', '\f'],
      ['v', '\v'],
      ['0', '\0'],
      ['\\', '\\'],
      ['e', '\x1b'],
      ['a', '\x07']
    ])
  function As(e) {
    return ('u' === e[0] && 5 === e.length) || ('x' === e[0] && 3 === e.length)
      ? String.fromCharCode(parseInt(e.slice(1), 16))
      : bs.get(e) || e
  }
  function vs(e, t) {
    const n = [],
      r = t.trim().split(/\s*,\s*/g)
    let i
    for (const t of r)
      if (isNaN(t)) {
        if (!(i = t.match(Es)))
          throw new Error(
            `Invalid Chalk template style argument: ${t} (in style '${e}')`
          )
        n.push(i[2].replace(Cs, (e, t, n) => (t ? As(t) : n)))
      } else n.push(Number(t))
    return n
  }
  function Fs(e) {
    Ds.lastIndex = 0
    const t = []
    let n
    for (; null !== (n = Ds.exec(e)); ) {
      const e = n[1]
      if (n[2]) {
        const r = vs(e, n[2])
        t.push([e].concat(r))
      } else t.push([e])
    }
    return t
  }
  function xs(e, t) {
    const n = {}
    for (const e of t)
      for (const t of e.styles) n[t[0]] = e.inverse ? null : t.slice(1)
    let r = e
    for (const e of Object.keys(n))
      if (Array.isArray(n[e])) {
        if (!(e in r)) throw new Error(`Unknown Chalk style: ${e}`)
        r = n[e].length > 0 ? r[e].apply(r, n[e]) : r[e]
      }
    return r
  }
  var Ss = (e, t) => {
      const n = [],
        r = []
      let i = []
      if (
        (t.replace(ys, (t, u, o, s, a, c) => {
          if (u) i.push(As(u))
          else if (s) {
            const t = i.join('')
            ;(i = []),
              r.push(0 === n.length ? t : xs(e, n)(t)),
              n.push({ inverse: o, styles: Fs(s) })
          } else if (a) {
            if (0 === n.length)
              throw new Error('Found extraneous } in Chalk template literal')
            r.push(xs(e, n)(i.join(''))), (i = []), n.pop()
          } else i.push(c)
        }),
        r.push(i.join('')),
        n.length > 0)
      ) {
        const e = `Chalk template literal is missing ${
          n.length
        } closing bracket${1 === n.length ? '' : 's'} (\`}\`)`
        throw new Error(e)
      }
      return r.join('')
    },
    ws = r(function (e) {
      const t = ms.stdout,
        n =
          'win32' === Tr.platform &&
          !(Tr.env.TERM || '').toLowerCase().startsWith('xterm'),
        r = ['ansi', 'ansi', 'ansi256', 'ansi16m'],
        i = new Set(['gray']),
        u = Object.create(null)
      function o(e, n) {
        n = n || {}
        const r = t ? t.level : 0
        ;(e.level = void 0 === n.level ? r : n.level),
          (e.enabled = 'enabled' in n ? n.enabled : e.level > 0)
      }
      function s(e) {
        if (!this || !(this instanceof s) || this.template) {
          const t = {}
          return (
            o(t, e),
            (t.template = function () {
              const e = [].slice.call(arguments)
              return p.apply(null, [t.template].concat(e))
            }),
            Object.setPrototypeOf(t, s.prototype),
            Object.setPrototypeOf(t.template, t),
            (t.template.constructor = s),
            t.template
          )
        }
        o(this, e)
      }
      n && (Jo.blue.open = '\x1b[94m')
      for (const e of Object.keys(Jo))
        (Jo[e].closeRe = new RegExp(Ro(Jo[e].close), 'g')),
          (u[e] = {
            get() {
              const t = Jo[e]
              return c.call(
                this,
                this._styles ? this._styles.concat(t) : [t],
                this._empty,
                e
              )
            }
          })
      ;(u.visible = {
        get() {
          return c.call(this, this._styles || [], !0, 'visible')
        }
      }),
        (Jo.color.closeRe = new RegExp(Ro(Jo.color.close), 'g'))
      for (const e of Object.keys(Jo.color.ansi))
        i.has(e) ||
          (u[e] = {
            get() {
              const t = this.level
              return function () {
                const n = Jo.color[r[t]][e].apply(null, arguments),
                  i = {
                    open: n,
                    close: Jo.color.close,
                    closeRe: Jo.color.closeRe
                  }
                return c.call(
                  this,
                  this._styles ? this._styles.concat(i) : [i],
                  this._empty,
                  e
                )
              }
            }
          })
      Jo.bgColor.closeRe = new RegExp(Ro(Jo.bgColor.close), 'g')
      for (const e of Object.keys(Jo.bgColor.ansi)) {
        if (i.has(e)) continue
        u['bg' + e[0].toUpperCase() + e.slice(1)] = {
          get() {
            const t = this.level
            return function () {
              const n = Jo.bgColor[r[t]][e].apply(null, arguments),
                i = {
                  open: n,
                  close: Jo.bgColor.close,
                  closeRe: Jo.bgColor.closeRe
                }
              return c.call(
                this,
                this._styles ? this._styles.concat(i) : [i],
                this._empty,
                e
              )
            }
          }
        }
      }
      const a = Object.defineProperties(() => {}, u)
      function c(e, t, n) {
        const r = function () {
          return l.apply(r, arguments)
        }
        ;(r._styles = e), (r._empty = t)
        const i = this
        return (
          Object.defineProperty(r, 'level', {
            enumerable: !0,
            get: () => i.level,
            set(e) {
              i.level = e
            }
          }),
          Object.defineProperty(r, 'enabled', {
            enumerable: !0,
            get: () => i.enabled,
            set(e) {
              i.enabled = e
            }
          }),
          (r.hasGrey = this.hasGrey || 'gray' === n || 'grey' === n),
          (r.__proto__ = a),
          r
        )
      }
      function l() {
        const e = arguments,
          t = e.length
        let r = String(arguments[0])
        if (0 === t) return ''
        if (t > 1) for (let n = 1; n < t; n++) r += ' ' + e[n]
        if (!this.enabled || this.level <= 0 || !r) return this._empty ? '' : r
        const i = Jo.dim.open
        n && this.hasGrey && (Jo.dim.open = '')
        for (const e of this._styles.slice().reverse())
          (r = e.open + r.replace(e.closeRe, e.open) + e.close),
            (r = r.replace(/\r?\n/g, `${e.close}$&${e.open}`))
        return (Jo.dim.open = i), r
      }
      function p(e, t) {
        if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(' ')
        const n = [].slice.call(arguments, 2),
          r = [t.raw[0]]
        for (let e = 1; e < t.length; e++)
          r.push(String(n[e - 1]).replace(/[{}\\]/g, '\\$&')),
            r.push(String(t.raw[e]))
        return Ss(e, r.join(''))
      }
      Object.defineProperties(s.prototype, u),
        (e.exports = s()),
        (e.exports.supportsColor = t),
        (e.exports.default = e.exports)
    }),
    Ts = Object.defineProperty(
      {
        commonDeprecatedHandler: (e, t, { descriptor: n }) => {
          const r = [
            `${ws.default.yellow(
              'string' == typeof e ? n.key(e) : n.pair(e)
            )} is deprecated`
          ]
          return (
            t &&
              r.push(
                `we now treat it as ${ws.default.blue(
                  'string' == typeof t ? n.key(t) : n.pair(t)
                )}`
              ),
            r.join('; ') + '.'
          )
        }
      },
      '__esModule',
      { value: !0 }
    ),
    Bs = r(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Lo.__exportStar(Ts, t)
    }),
    Ns = Object.defineProperty(
      {
        commonInvalidHandler: (e, t, n) =>
          [
            `Invalid ${ws.default.red(n.descriptor.key(e))} value.`,
            `Expected ${ws.default.blue(n.schemas[e].expected(n))},`,
            `but received ${ws.default.red(n.descriptor.value(t))}.`
          ].join(' ')
      },
      '__esModule',
      { value: !0 }
    ),
    ks = r(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Lo.__exportStar(Ns, t)
    }),
    Ps = [],
    Os = [],
    Is = Object.defineProperty(
      {
        levenUnknownHandler: (
          e,
          t,
          { descriptor: n, logger: r, schemas: i }
        ) => {
          const u = [
              `Ignored unknown option ${ws.default.yellow(
                n.pair({ key: e, value: t })
              )}.`
            ],
            o = Object.keys(i)
              .sort()
              .find(
                (t) =>
                  (function (e, t) {
                    if (e === t) return 0
                    var n = e
                    e.length > t.length && ((e = t), (t = n))
                    var r = e.length,
                      i = t.length
                    if (0 === r) return i
                    if (0 === i) return r
                    for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-i); )
                      r--, i--
                    if (0 === r) return i
                    for (
                      var u, o, s, a, c = 0;
                      c < r && e.charCodeAt(c) === t.charCodeAt(c);

                    )
                      c++
                    if (((i -= c), 0 == (r -= c))) return i
                    for (var l = 0, p = 0; l < r; )
                      (Os[c + l] = e.charCodeAt(c + l)), (Ps[l] = ++l)
                    for (; p < i; )
                      for (
                        u = t.charCodeAt(c + p), s = p++, o = p, l = 0;
                        l < r;
                        l++
                      )
                        (a = u === Os[c + l] ? s : s + 1),
                          (s = Ps[l]),
                          (o = Ps[l] =
                            s > o ? (a > o ? o + 1 : a) : a > s ? s + 1 : a)
                    return o
                  })(e, t) < 3
              )
          o && u.push(`Did you mean ${ws.default.blue(n.key(o))}?`),
            r.warn(u.join(' '))
        }
      },
      '__esModule',
      { value: !0 }
    ),
    Ls = r(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Lo.__exportStar(Is, t)
    }),
    js = r(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Lo.__exportStar(Bs, t),
        Lo.__exportStar(ks, t),
        Lo.__exportStar(Ls, t)
    })
  const _s = [
    'default',
    'expected',
    'validate',
    'deprecated',
    'forward',
    'redirect',
    'overlap',
    'preprocess',
    'postprocess'
  ]
  function Ms(e, t) {
    const n = new e(t),
      r = Object.create(n)
    for (const e of _s) e in t && (r[e] = Ws(t[e], n, $s.prototype[e].length))
    return r
  }
  var Rs = Ms
  class $s {
    constructor(e) {
      this.name = e.name
    }
    static create(e) {
      return Ms(this, e)
    }
    default(e) {}
    expected(e) {
      return 'nothing'
    }
    validate(e, t) {
      return !1
    }
    deprecated(e, t) {
      return !1
    }
    forward(e, t) {}
    redirect(e, t) {}
    overlap(e, t, n) {
      return e
    }
    preprocess(e, t) {
      return e
    }
    postprocess(e, t) {
      return e
    }
  }
  var Vs = $s
  function Ws(e, t, n) {
    return 'function' == typeof e
      ? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1))
      : () => e
  }
  var qs = Object.defineProperty(
    { createSchema: Rs, Schema: Vs },
    '__esModule',
    { value: !0 }
  )
  class Us extends qs.Schema {
    constructor(e) {
      super(e), (this._sourceName = e.sourceName)
    }
    expected(e) {
      return e.schemas[this._sourceName].expected(e)
    }
    validate(e, t) {
      return t.schemas[this._sourceName].validate(e, t)
    }
    redirect(e, t) {
      return this._sourceName
    }
  }
  var zs = Us,
    Gs = Object.defineProperty({ AliasSchema: zs }, '__esModule', { value: !0 })
  class Hs extends qs.Schema {
    expected() {
      return 'anything'
    }
    validate() {
      return !0
    }
  }
  var Js = Hs,
    Xs = Object.defineProperty({ AnySchema: Js }, '__esModule', { value: !0 })
  class Ys extends qs.Schema {
    constructor(e) {
      var { valueSchema: t, name: n = t.name } = e,
        r = Lo.__rest(e, ['valueSchema', 'name'])
      super(Object.assign({}, r, { name: n })), (this._valueSchema = t)
    }
    expected(e) {
      return `an array of ${this._valueSchema.expected(e)}`
    }
    validate(e, t) {
      if (!Array.isArray(e)) return !1
      const n = []
      for (const r of e) {
        const e = t.normalizeValidateResult(this._valueSchema.validate(r, t), r)
        !0 !== e && n.push(e.value)
      }
      return 0 === n.length || { value: n }
    }
    deprecated(e, t) {
      const n = []
      for (const r of e) {
        const e = t.normalizeDeprecatedResult(
          this._valueSchema.deprecated(r, t),
          r
        )
        !1 !== e && n.push(...e.map(({ value: e }) => ({ value: [e] })))
      }
      return n
    }
    forward(e, t) {
      const n = []
      for (const r of e) {
        const e = t.normalizeForwardResult(this._valueSchema.forward(r, t), r)
        n.push(...e.map(Qs))
      }
      return n
    }
    redirect(e, t) {
      const n = [],
        r = []
      for (const i of e) {
        const e = t.normalizeRedirectResult(this._valueSchema.redirect(i, t), i)
        'remain' in e && n.push(e.remain), r.push(...e.redirect.map(Qs))
      }
      return 0 === n.length ? { redirect: r } : { redirect: r, remain: n }
    }
    overlap(e, t) {
      return e.concat(t)
    }
  }
  var Ks = Ys
  function Qs({ from: e, to: t }) {
    return { from: [e], to: t }
  }
  var Zs = Object.defineProperty({ ArraySchema: Ks }, '__esModule', {
    value: !0
  })
  class ea extends qs.Schema {
    expected() {
      return 'true or false'
    }
    validate(e) {
      return 'boolean' == typeof e
    }
  }
  var ta = ea,
    na = Object.defineProperty({ BooleanSchema: ta }, '__esModule', {
      value: !0
    })
  var ra = function (e, t) {
    const n = Object.create(null)
    for (const r of e) {
      const e = r[t]
      if (n[e]) throw new Error(`Duplicate ${t} ${JSON.stringify(e)}`)
      n[e] = r
    }
    return n
  }
  var ia = function (e, t) {
    const n = new Map()
    for (const r of e) {
      const e = r[t]
      if (n.has(e)) throw new Error(`Duplicate ${t} ${JSON.stringify(e)}`)
      n.set(e, r)
    }
    return n
  }
  var ua = function () {
    const e = Object.create(null)
    return (t) => {
      const n = JSON.stringify(t)
      return !!e[n] || ((e[n] = !0), !1)
    }
  }
  var oa = function (e, t) {
    const n = [],
      r = []
    for (const i of e) t(i) ? n.push(i) : r.push(i)
    return [n, r]
  }
  var sa = function (e) {
    return e === Math.floor(e)
  }
  var aa = function (e, t) {
    if (e === t) return 0
    const n = typeof e,
      r = typeof t,
      i = ['undefined', 'object', 'boolean', 'number', 'string']
    return n !== r
      ? i.indexOf(n) - i.indexOf(r)
      : 'string' !== n
      ? Number(e) - Number(t)
      : e.localeCompare(t)
  }
  var ca = function (e) {
    return void 0 === e ? {} : e
  }
  var la = function (e, t) {
    return !0 === e || (!1 === e ? { value: t } : e)
  }
  var pa = function (e, t, n = !1) {
    return (
      !1 !== e &&
      (!0 === e
        ? !!n || [{ value: t }]
        : 'value' in e
        ? [e]
        : 0 !== e.length && e)
    )
  }
  function fa(e, t) {
    return 'string' == typeof e || 'key' in e
      ? { from: t, to: e }
      : 'from' in e
      ? { from: e.from, to: e.to }
      : { from: t, to: e.to }
  }
  var da = fa
  function ha(e, t) {
    return void 0 === e
      ? []
      : Array.isArray(e)
      ? e.map((e) => fa(e, t))
      : [fa(e, t)]
  }
  var ga = ha
  var ma = function (e, t) {
      const n = ha('object' == typeof e && 'redirect' in e ? e.redirect : e, t)
      return 0 === n.length
        ? { remain: t, redirect: n }
        : 'object' == typeof e && 'remain' in e
        ? { remain: e.remain, redirect: n }
        : { redirect: n }
    },
    ya = Object.defineProperty(
      {
        recordFromArray: ra,
        mapFromArray: ia,
        createAutoChecklist: ua,
        partition: oa,
        isInt: sa,
        comparePrimitive: aa,
        normalizeDefaultResult: ca,
        normalizeValidateResult: la,
        normalizeDeprecatedResult: pa,
        normalizeTransferResult: da,
        normalizeForwardResult: ga,
        normalizeRedirectResult: ma
      },
      '__esModule',
      { value: !0 }
    )
  class Da extends qs.Schema {
    constructor(e) {
      super(e),
        (this._choices = ya.mapFromArray(
          e.choices.map((e) => (e && 'object' == typeof e ? e : { value: e })),
          'value'
        ))
    }
    expected({ descriptor: e }) {
      const t = Array.from(this._choices.keys())
          .map((e) => this._choices.get(e))
          .filter((e) => !e.deprecated)
          .map((e) => e.value)
          .sort(ya.comparePrimitive)
          .map(e.value),
        n = t.slice(0, -2),
        r = t.slice(-2)
      return n.concat(r.join(' or ')).join(', ')
    }
    validate(e) {
      return this._choices.has(e)
    }
    deprecated(e) {
      const t = this._choices.get(e)
      return !(!t || !t.deprecated) && { value: e }
    }
    forward(e) {
      const t = this._choices.get(e)
      return t ? t.forward : void 0
    }
    redirect(e) {
      const t = this._choices.get(e)
      return t ? t.redirect : void 0
    }
  }
  var Ea = Da,
    Ca = Object.defineProperty({ ChoiceSchema: Ea }, '__esModule', {
      value: !0
    })
  class ba extends qs.Schema {
    expected() {
      return 'a number'
    }
    validate(e, t) {
      return 'number' == typeof e
    }
  }
  var Aa = ba,
    va = Object.defineProperty({ NumberSchema: Aa }, '__esModule', {
      value: !0
    })
  class Fa extends va.NumberSchema {
    expected() {
      return 'an integer'
    }
    validate(e, t) {
      return (
        !0 === t.normalizeValidateResult(super.validate(e, t), e) && ya.isInt(e)
      )
    }
  }
  var xa = Fa,
    Sa = Object.defineProperty({ IntegerSchema: xa }, '__esModule', {
      value: !0
    })
  class wa extends qs.Schema {
    expected() {
      return 'a string'
    }
    validate(e) {
      return 'string' == typeof e
    }
  }
  var Ta = wa,
    Ba = Object.defineProperty({ StringSchema: Ta }, '__esModule', {
      value: !0
    }),
    Na = r(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Lo.__exportStar(Gs, t),
        Lo.__exportStar(Xs, t),
        Lo.__exportStar(Zs, t),
        Lo.__exportStar(na, t),
        Lo.__exportStar(Ca, t),
        Lo.__exportStar(Sa, t),
        Lo.__exportStar(va, t),
        Lo.__exportStar(Ba, t)
    }),
    ka = jo.apiDescriptor,
    Pa = Is.levenUnknownHandler,
    Oa = ks.commonInvalidHandler,
    Ia = Ts.commonDeprecatedHandler,
    La = Object.defineProperty(
      {
        defaultDescriptor: ka,
        defaultUnknownHandler: Pa,
        defaultInvalidHandler: Oa,
        defaultDeprecatedHandler: Ia
      },
      '__esModule',
      { value: !0 }
    )
  class ja {
    constructor(e, t) {
      const {
        logger: n = console,
        descriptor: r = La.defaultDescriptor,
        unknown: i = La.defaultUnknownHandler,
        invalid: u = La.defaultInvalidHandler,
        deprecated: o = La.defaultDeprecatedHandler
      } = t || {}
      ;(this._utils = {
        descriptor: r,
        logger: n || { warn: () => {} },
        schemas: ya.recordFromArray(e, 'name'),
        normalizeDefaultResult: ya.normalizeDefaultResult,
        normalizeDeprecatedResult: ya.normalizeDeprecatedResult,
        normalizeForwardResult: ya.normalizeForwardResult,
        normalizeRedirectResult: ya.normalizeRedirectResult,
        normalizeValidateResult: ya.normalizeValidateResult
      }),
        (this._unknownHandler = i),
        (this._invalidHandler = u),
        (this._deprecatedHandler = o),
        this.cleanHistory()
    }
    cleanHistory() {
      this._hasDeprecationWarned = ya.createAutoChecklist()
    }
    normalize(e) {
      const t = {},
        n = [e],
        r = () => {
          for (; 0 !== n.length; ) {
            const e = n.shift(),
              r = this._applyNormalization(e, t)
            n.push(...r)
          }
        }
      r()
      for (const e of Object.keys(this._utils.schemas)) {
        const r = this._utils.schemas[e]
        if (!(e in t)) {
          const t = ya.normalizeDefaultResult(r.default(this._utils))
          'value' in t && n.push({ [e]: t.value })
        }
      }
      r()
      for (const e of Object.keys(this._utils.schemas)) {
        const n = this._utils.schemas[e]
        e in t && (t[e] = n.postprocess(t[e], this._utils))
      }
      return t
    }
    _applyNormalization(e, t) {
      const n = [],
        [r, i] = ya.partition(Object.keys(e), (e) => e in this._utils.schemas)
      for (const i of r) {
        const r = this._utils.schemas[i],
          u = r.preprocess(e[i], this._utils),
          o = ya.normalizeValidateResult(r.validate(u, this._utils), u)
        if (!0 !== o) {
          const { value: e } = o,
            t = this._invalidHandler(i, e, this._utils)
          throw 'string' == typeof t ? new Error(t) : t
        }
        const s = ({ from: e, to: t }) => {
            n.push('string' == typeof t ? { [t]: e } : { [t.key]: t.value })
          },
          a = ({ value: e, redirectTo: t }) => {
            const n = ya.normalizeDeprecatedResult(
              r.deprecated(e, this._utils),
              u,
              !0
            )
            if (!1 !== n)
              if (!0 === n)
                this._hasDeprecationWarned(i) ||
                  this._utils.logger.warn(
                    this._deprecatedHandler(i, t, this._utils)
                  )
              else
                for (const { value: e } of n) {
                  const n = { key: i, value: e }
                  if (!this._hasDeprecationWarned(n)) {
                    const r = 'string' == typeof t ? { key: t, value: e } : t
                    this._utils.logger.warn(
                      this._deprecatedHandler(n, r, this._utils)
                    )
                  }
                }
          }
        ya.normalizeForwardResult(r.forward(u, this._utils), u).forEach(s)
        const c = ya.normalizeRedirectResult(r.redirect(u, this._utils), u)
        if ((c.redirect.forEach(s), 'remain' in c)) {
          const e = c.remain
          ;(t[i] = i in t ? r.overlap(t[i], e, this._utils) : e),
            a({ value: e })
        }
        for (const { from: e, to: t } of c.redirect)
          a({ value: e, redirectTo: t })
      }
      for (const r of i) {
        const i = e[r],
          u = this._unknownHandler(r, i, this._utils)
        if (u)
          for (const e of Object.keys(u)) {
            const r = { [e]: u[e] }
            e in this._utils.schemas ? n.push(r) : Object.assign(t, r)
          }
      }
      return n
    }
  }
  var _a = ja,
    Ma = Object.defineProperty(
      { normalize: (e, t, n) => new ja(t, n).normalize(e), Normalizer: _a },
      '__esModule',
      { value: !0 }
    ),
    Ra = r(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Lo.__exportStar(_o, t),
        Lo.__exportStar(js, t),
        Lo.__exportStar(Na, t),
        Lo.__exportStar(Ma, t),
        Lo.__exportStar(qs, t)
    })
  const $a = [],
    Va = [],
    Wa = (e, t) => {
      if (e === t) return 0
      const n = e
      e.length > t.length && ((e = t), (t = n))
      let r = e.length,
        i = t.length
      for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-i); ) r--, i--
      let u,
        o,
        s,
        a,
        c = 0
      for (; c < r && e.charCodeAt(c) === t.charCodeAt(c); ) c++
      if (((r -= c), (i -= c), 0 === r)) return i
      let l = 0,
        p = 0
      for (; l < r; ) (Va[l] = e.charCodeAt(c + l)), ($a[l] = ++l)
      for (; p < i; )
        for (u = t.charCodeAt(c + p), s = p++, o = p, l = 0; l < r; l++)
          (a = u === Va[l] ? s : s + 1),
            (s = $a[l]),
            (o = $a[l] = s > o ? (a > o ? o + 1 : a) : a > s ? s + 1 : a)
      return o
    }
  var qa = Wa,
    Ua = Wa
  qa.default = Ua
  var za = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  }
  const Ga = {}
  for (const e of Object.keys(za)) Ga[za[e]] = e
  const Ha = {
    rgb: { channels: 3, labels: 'rgb' },
    hsl: { channels: 3, labels: 'hsl' },
    hsv: { channels: 3, labels: 'hsv' },
    hwb: { channels: 3, labels: 'hwb' },
    cmyk: { channels: 4, labels: 'cmyk' },
    xyz: { channels: 3, labels: 'xyz' },
    lab: { channels: 3, labels: 'lab' },
    lch: { channels: 3, labels: 'lch' },
    hex: { channels: 1, labels: ['hex'] },
    keyword: { channels: 1, labels: ['keyword'] },
    ansi16: { channels: 1, labels: ['ansi16'] },
    ansi256: { channels: 1, labels: ['ansi256'] },
    hcg: { channels: 3, labels: ['h', 'c', 'g'] },
    apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
    gray: { channels: 1, labels: ['gray'] }
  }
  var Ja = Ha
  for (const e of Object.keys(Ha)) {
    if (!('channels' in Ha[e]))
      throw new Error('missing channels property: ' + e)
    if (!('labels' in Ha[e]))
      throw new Error('missing channel labels property: ' + e)
    if (Ha[e].labels.length !== Ha[e].channels)
      throw new Error('channel and label counts mismatch: ' + e)
    const { channels: t, labels: n } = Ha[e]
    delete Ha[e].channels,
      delete Ha[e].labels,
      Object.defineProperty(Ha[e], 'channels', { value: t }),
      Object.defineProperty(Ha[e], 'labels', { value: n })
  }
  function Xa(e) {
    const t = (function () {
        const e = {},
          t = Object.keys(Ja)
        for (let n = t.length, r = 0; r < n; r++)
          e[t[r]] = { distance: -1, parent: null }
        return e
      })(),
      n = [e]
    for (t[e].distance = 0; n.length; ) {
      const e = n.pop(),
        r = Object.keys(Ja[e])
      for (let i = r.length, u = 0; u < i; u++) {
        const i = r[u],
          o = t[i]
        ;-1 === o.distance &&
          ((o.distance = t[e].distance + 1), (o.parent = e), n.unshift(i))
      }
    }
    return t
  }
  function Ya(e, t) {
    return function (n) {
      return t(e(n))
    }
  }
  function Ka(e, t) {
    const n = [t[e].parent, e]
    let r = Ja[t[e].parent][e],
      i = t[e].parent
    for (; t[i].parent; )
      n.unshift(t[i].parent), (r = Ya(Ja[t[i].parent][i], r)), (i = t[i].parent)
    return (r.conversion = n), r
  }
  ;(Ha.rgb.hsl = function (e) {
    const t = e[0] / 255,
      n = e[1] / 255,
      r = e[2] / 255,
      i = Math.min(t, n, r),
      u = Math.max(t, n, r),
      o = u - i
    let s, a
    u === i
      ? (s = 0)
      : t === u
      ? (s = (n - r) / o)
      : n === u
      ? (s = 2 + (r - t) / o)
      : r === u && (s = 4 + (t - n) / o),
      (s = Math.min(60 * s, 360)),
      s < 0 && (s += 360)
    const c = (i + u) / 2
    return (
      (a = u === i ? 0 : c <= 0.5 ? o / (u + i) : o / (2 - u - i)),
      [s, 100 * a, 100 * c]
    )
  }),
    (Ha.rgb.hsv = function (e) {
      let t, n, r, i, u
      const o = e[0] / 255,
        s = e[1] / 255,
        a = e[2] / 255,
        c = Math.max(o, s, a),
        l = c - Math.min(o, s, a),
        p = function (e) {
          return (c - e) / 6 / l + 0.5
        }
      return (
        0 === l
          ? ((i = 0), (u = 0))
          : ((u = l / c),
            (t = p(o)),
            (n = p(s)),
            (r = p(a)),
            o === c
              ? (i = r - n)
              : s === c
              ? (i = 1 / 3 + t - r)
              : a === c && (i = 2 / 3 + n - t),
            i < 0 ? (i += 1) : i > 1 && (i -= 1)),
        [360 * i, 100 * u, 100 * c]
      )
    }),
    (Ha.rgb.hwb = function (e) {
      const t = e[0],
        n = e[1]
      let r = e[2]
      const i = Ha.rgb.hsl(e)[0],
        u = (1 / 255) * Math.min(t, Math.min(n, r))
      return (
        (r = 1 - (1 / 255) * Math.max(t, Math.max(n, r))), [i, 100 * u, 100 * r]
      )
    }),
    (Ha.rgb.cmyk = function (e) {
      const t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        i = Math.min(1 - t, 1 - n, 1 - r)
      return [
        100 * ((1 - t - i) / (1 - i) || 0),
        100 * ((1 - n - i) / (1 - i) || 0),
        100 * ((1 - r - i) / (1 - i) || 0),
        100 * i
      ]
    }),
    (Ha.rgb.keyword = function (e) {
      const t = Ga[e]
      if (t) return t
      let n,
        r = 1 / 0
      for (const t of Object.keys(za)) {
        const o =
          ((u = za[t]),
          ((i = e)[0] - u[0]) ** 2 + (i[1] - u[1]) ** 2 + (i[2] - u[2]) ** 2)
        o < r && ((r = o), (n = t))
      }
      var i, u
      return n
    }),
    (Ha.keyword.rgb = function (e) {
      return za[e]
    }),
    (Ha.rgb.xyz = function (e) {
      let t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255
      ;(t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
        (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92),
        (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92)
      return [
        100 * (0.4124 * t + 0.3576 * n + 0.1805 * r),
        100 * (0.2126 * t + 0.7152 * n + 0.0722 * r),
        100 * (0.0193 * t + 0.1192 * n + 0.9505 * r)
      ]
    }),
    (Ha.rgb.lab = function (e) {
      const t = Ha.rgb.xyz(e)
      let n = t[0],
        r = t[1],
        i = t[2]
      ;(n /= 95.047),
        (r /= 100),
        (i /= 108.883),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (i = i > 0.008856 ? i ** (1 / 3) : 7.787 * i + 16 / 116)
      return [116 * r - 16, 500 * (n - r), 200 * (r - i)]
    }),
    (Ha.hsl.rgb = function (e) {
      const t = e[0] / 360,
        n = e[1] / 100,
        r = e[2] / 100
      let i, u, o
      if (0 === n) return (o = 255 * r), [o, o, o]
      i = r < 0.5 ? r * (1 + n) : r + n - r * n
      const s = 2 * r - i,
        a = [0, 0, 0]
      for (let e = 0; e < 3; e++)
        (u = t + (1 / 3) * -(e - 1)),
          u < 0 && u++,
          u > 1 && u--,
          (o =
            6 * u < 1
              ? s + 6 * (i - s) * u
              : 2 * u < 1
              ? i
              : 3 * u < 2
              ? s + (i - s) * (2 / 3 - u) * 6
              : s),
          (a[e] = 255 * o)
      return a
    }),
    (Ha.hsl.hsv = function (e) {
      const t = e[0]
      let n = e[1] / 100,
        r = e[2] / 100,
        i = n
      const u = Math.max(r, 0.01)
      ;(r *= 2), (n *= r <= 1 ? r : 2 - r), (i *= u <= 1 ? u : 2 - u)
      return [
        t,
        100 * (0 === r ? (2 * i) / (u + i) : (2 * n) / (r + n)),
        100 * ((r + n) / 2)
      ]
    }),
    (Ha.hsv.rgb = function (e) {
      const t = e[0] / 60,
        n = e[1] / 100
      let r = e[2] / 100
      const i = Math.floor(t) % 6,
        u = t - Math.floor(t),
        o = 255 * r * (1 - n),
        s = 255 * r * (1 - n * u),
        a = 255 * r * (1 - n * (1 - u))
      switch (((r *= 255), i)) {
        case 0:
          return [r, a, o]
        case 1:
          return [s, r, o]
        case 2:
          return [o, r, a]
        case 3:
          return [o, s, r]
        case 4:
          return [a, o, r]
        case 5:
          return [r, o, s]
      }
    }),
    (Ha.hsv.hsl = function (e) {
      const t = e[0],
        n = e[1] / 100,
        r = e[2] / 100,
        i = Math.max(r, 0.01)
      let u, o
      o = (2 - n) * r
      const s = (2 - n) * i
      return (
        (u = n * i),
        (u /= s <= 1 ? s : 2 - s),
        (u = u || 0),
        (o /= 2),
        [t, 100 * u, 100 * o]
      )
    }),
    (Ha.hwb.rgb = function (e) {
      const t = e[0] / 360
      let n = e[1] / 100,
        r = e[2] / 100
      const i = n + r
      let u
      i > 1 && ((n /= i), (r /= i))
      const o = Math.floor(6 * t),
        s = 1 - r
      ;(u = 6 * t - o), 0 != (1 & o) && (u = 1 - u)
      const a = n + u * (s - n)
      let c, l, p
      switch (o) {
        default:
        case 6:
        case 0:
          ;(c = s), (l = a), (p = n)
          break
        case 1:
          ;(c = a), (l = s), (p = n)
          break
        case 2:
          ;(c = n), (l = s), (p = a)
          break
        case 3:
          ;(c = n), (l = a), (p = s)
          break
        case 4:
          ;(c = a), (l = n), (p = s)
          break
        case 5:
          ;(c = s), (l = n), (p = a)
      }
      return [255 * c, 255 * l, 255 * p]
    }),
    (Ha.cmyk.rgb = function (e) {
      const t = e[0] / 100,
        n = e[1] / 100,
        r = e[2] / 100,
        i = e[3] / 100
      return [
        255 * (1 - Math.min(1, t * (1 - i) + i)),
        255 * (1 - Math.min(1, n * (1 - i) + i)),
        255 * (1 - Math.min(1, r * (1 - i) + i))
      ]
    }),
    (Ha.xyz.rgb = function (e) {
      const t = e[0] / 100,
        n = e[1] / 100,
        r = e[2] / 100
      let i, u, o
      return (
        (i = 3.2406 * t + -1.5372 * n + -0.4986 * r),
        (u = -0.9689 * t + 1.8758 * n + 0.0415 * r),
        (o = 0.0557 * t + -0.204 * n + 1.057 * r),
        (i = i > 0.0031308 ? 1.055 * i ** (1 / 2.4) - 0.055 : 12.92 * i),
        (u = u > 0.0031308 ? 1.055 * u ** (1 / 2.4) - 0.055 : 12.92 * u),
        (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : 12.92 * o),
        (i = Math.min(Math.max(0, i), 1)),
        (u = Math.min(Math.max(0, u), 1)),
        (o = Math.min(Math.max(0, o), 1)),
        [255 * i, 255 * u, 255 * o]
      )
    }),
    (Ha.xyz.lab = function (e) {
      let t = e[0],
        n = e[1],
        r = e[2]
      ;(t /= 95.047),
        (n /= 100),
        (r /= 108.883),
        (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116)
      return [116 * n - 16, 500 * (t - n), 200 * (n - r)]
    }),
    (Ha.lab.xyz = function (e) {
      let t, n, r
      ;(n = (e[0] + 16) / 116), (t = e[1] / 500 + n), (r = n - e[2] / 200)
      const i = n ** 3,
        u = t ** 3,
        o = r ** 3
      return (
        (n = i > 0.008856 ? i : (n - 16 / 116) / 7.787),
        (t = u > 0.008856 ? u : (t - 16 / 116) / 7.787),
        (r = o > 0.008856 ? o : (r - 16 / 116) / 7.787),
        (t *= 95.047),
        (n *= 100),
        (r *= 108.883),
        [t, n, r]
      )
    }),
    (Ha.lab.lch = function (e) {
      const t = e[0],
        n = e[1],
        r = e[2]
      let i
      ;(i = (360 * Math.atan2(r, n)) / 2 / Math.PI), i < 0 && (i += 360)
      return [t, Math.sqrt(n * n + r * r), i]
    }),
    (Ha.lch.lab = function (e) {
      const t = e[0],
        n = e[1],
        r = (e[2] / 360) * 2 * Math.PI
      return [t, n * Math.cos(r), n * Math.sin(r)]
    }),
    (Ha.rgb.ansi16 = function (e, t = null) {
      const [n, r, i] = e
      let u = null === t ? Ha.rgb.hsv(e)[2] : t
      if (((u = Math.round(u / 50)), 0 === u)) return 30
      let o =
        30 +
        ((Math.round(i / 255) << 2) |
          (Math.round(r / 255) << 1) |
          Math.round(n / 255))
      return 2 === u && (o += 60), o
    }),
    (Ha.hsv.ansi16 = function (e) {
      return Ha.rgb.ansi16(Ha.hsv.rgb(e), e[2])
    }),
    (Ha.rgb.ansi256 = function (e) {
      const t = e[0],
        n = e[1],
        r = e[2]
      if (t === n && n === r)
        return t < 8
          ? 16
          : t > 248
          ? 231
          : Math.round(((t - 8) / 247) * 24) + 232
      return (
        16 +
        36 * Math.round((t / 255) * 5) +
        6 * Math.round((n / 255) * 5) +
        Math.round((r / 255) * 5)
      )
    }),
    (Ha.ansi16.rgb = function (e) {
      let t = e % 10
      if (0 === t || 7 === t)
        return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t]
      const n = 0.5 * (1 + ~~(e > 50))
      return [
        (1 & t) * n * 255,
        ((t >> 1) & 1) * n * 255,
        ((t >> 2) & 1) * n * 255
      ]
    }),
    (Ha.ansi256.rgb = function (e) {
      if (e >= 232) {
        const t = 10 * (e - 232) + 8
        return [t, t, t]
      }
      let t
      e -= 16
      return [
        (Math.floor(e / 36) / 5) * 255,
        (Math.floor((t = e % 36) / 6) / 5) * 255,
        ((t % 6) / 5) * 255
      ]
    }),
    (Ha.rgb.hex = function (e) {
      const t = (
        ((255 & Math.round(e[0])) << 16) +
        ((255 & Math.round(e[1])) << 8) +
        (255 & Math.round(e[2]))
      )
        .toString(16)
        .toUpperCase()
      return '000000'.substring(t.length) + t
    }),
    (Ha.hex.rgb = function (e) {
      const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
      if (!t) return [0, 0, 0]
      let n = t[0]
      3 === t[0].length &&
        (n = n
          .split('')
          .map((e) => e + e)
          .join(''))
      const r = parseInt(n, 16)
      return [(r >> 16) & 255, (r >> 8) & 255, 255 & r]
    }),
    (Ha.rgb.hcg = function (e) {
      const t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        i = Math.max(Math.max(t, n), r),
        u = Math.min(Math.min(t, n), r),
        o = i - u
      let s, a
      return (
        (s = o < 1 ? u / (1 - o) : 0),
        (a =
          o <= 0
            ? 0
            : i === t
            ? ((n - r) / o) % 6
            : i === n
            ? 2 + (r - t) / o
            : 4 + (t - n) / o),
        (a /= 6),
        (a %= 1),
        [360 * a, 100 * o, 100 * s]
      )
    }),
    (Ha.hsl.hcg = function (e) {
      const t = e[1] / 100,
        n = e[2] / 100,
        r = n < 0.5 ? 2 * t * n : 2 * t * (1 - n)
      let i = 0
      return r < 1 && (i = (n - 0.5 * r) / (1 - r)), [e[0], 100 * r, 100 * i]
    }),
    (Ha.hsv.hcg = function (e) {
      const t = e[1] / 100,
        n = e[2] / 100,
        r = t * n
      let i = 0
      return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]
    }),
    (Ha.hcg.rgb = function (e) {
      const t = e[0] / 360,
        n = e[1] / 100,
        r = e[2] / 100
      if (0 === n) return [255 * r, 255 * r, 255 * r]
      const i = [0, 0, 0],
        u = (t % 1) * 6,
        o = u % 1,
        s = 1 - o
      let a = 0
      switch (Math.floor(u)) {
        case 0:
          ;(i[0] = 1), (i[1] = o), (i[2] = 0)
          break
        case 1:
          ;(i[0] = s), (i[1] = 1), (i[2] = 0)
          break
        case 2:
          ;(i[0] = 0), (i[1] = 1), (i[2] = o)
          break
        case 3:
          ;(i[0] = 0), (i[1] = s), (i[2] = 1)
          break
        case 4:
          ;(i[0] = o), (i[1] = 0), (i[2] = 1)
          break
        default:
          ;(i[0] = 1), (i[1] = 0), (i[2] = s)
      }
      return (
        (a = (1 - n) * r),
        [255 * (n * i[0] + a), 255 * (n * i[1] + a), 255 * (n * i[2] + a)]
      )
    }),
    (Ha.hcg.hsv = function (e) {
      const t = e[1] / 100,
        n = t + (e[2] / 100) * (1 - t)
      let r = 0
      return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n]
    }),
    (Ha.hcg.hsl = function (e) {
      const t = e[1] / 100,
        n = (e[2] / 100) * (1 - t) + 0.5 * t
      let r = 0
      return (
        n > 0 && n < 0.5
          ? (r = t / (2 * n))
          : n >= 0.5 && n < 1 && (r = t / (2 * (1 - n))),
        [e[0], 100 * r, 100 * n]
      )
    }),
    (Ha.hcg.hwb = function (e) {
      const t = e[1] / 100,
        n = t + (e[2] / 100) * (1 - t)
      return [e[0], 100 * (n - t), 100 * (1 - n)]
    }),
    (Ha.hwb.hcg = function (e) {
      const t = e[1] / 100,
        n = 1 - e[2] / 100,
        r = n - t
      let i = 0
      return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]
    }),
    (Ha.apple.rgb = function (e) {
      return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255]
    }),
    (Ha.rgb.apple = function (e) {
      return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535]
    }),
    (Ha.gray.rgb = function (e) {
      return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255]
    }),
    (Ha.gray.hsl = function (e) {
      return [0, 0, e[0]]
    }),
    (Ha.gray.hsv = Ha.gray.hsl),
    (Ha.gray.hwb = function (e) {
      return [0, 100, e[0]]
    }),
    (Ha.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]]
    }),
    (Ha.gray.lab = function (e) {
      return [e[0], 0, 0]
    }),
    (Ha.gray.hex = function (e) {
      const t = 255 & Math.round((e[0] / 100) * 255),
        n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase()
      return '000000'.substring(n.length) + n
    }),
    (Ha.rgb.gray = function (e) {
      return [((e[0] + e[1] + e[2]) / 3 / 255) * 100]
    })
  const Qa = {}
  Object.keys(Ja).forEach((e) => {
    ;(Qa[e] = {}),
      Object.defineProperty(Qa[e], 'channels', { value: Ja[e].channels }),
      Object.defineProperty(Qa[e], 'labels', { value: Ja[e].labels })
    const t = (function (e) {
      const t = Xa(e),
        n = {},
        r = Object.keys(t)
      for (let e = r.length, i = 0; i < e; i++) {
        const e = r[i]
        null !== t[e].parent && (n[e] = Ka(e, t))
      }
      return n
    })(e)
    Object.keys(t).forEach((n) => {
      const r = t[n]
      ;(Qa[e][n] = (function (e) {
        const t = function (...t) {
          const n = t[0]
          if (null == n) return n
          n.length > 1 && (t = n)
          const r = e(t)
          if ('object' == typeof r)
            for (let e = r.length, t = 0; t < e; t++) r[t] = Math.round(r[t])
          return r
        }
        return 'conversion' in e && (t.conversion = e.conversion), t
      })(r)),
        (Qa[e][n].raw = (function (e) {
          const t = function (...t) {
            const n = t[0]
            return null == n ? n : (n.length > 1 && (t = n), e(t))
          }
          return 'conversion' in e && (t.conversion = e.conversion), t
        })(r))
    })
  })
  var Za = Qa,
    ec = r(function (e) {
      const t =
          (e, t) =>
          (...n) =>
            `\x1b[${e(...n) + t}m`,
        n =
          (e, t) =>
          (...n) => {
            const r = e(...n)
            return `\x1b[${38 + t};5;${r}m`
          },
        r =
          (e, t) =>
          (...n) => {
            const r = e(...n)
            return `\x1b[${38 + t};2;${r[0]};${r[1]};${r[2]}m`
          },
        i = (e) => e,
        u = (e, t, n) => [e, t, n],
        o = (e, t, n) => {
          Object.defineProperty(e, t, {
            get: () => {
              const r = n()
              return (
                Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0
                }),
                r
              )
            },
            enumerable: !0,
            configurable: !0
          })
        }
      let s
      const a = (e, t, n, r) => {
        void 0 === s && (s = Za)
        const i = r ? 10 : 0,
          u = {}
        for (const [r, o] of Object.entries(s)) {
          const s = 'ansi16' === r ? 'ansi' : r
          r === t
            ? (u[s] = e(n, i))
            : 'object' == typeof o && (u[s] = e(o[t], i))
        }
        return u
      }
      Object.defineProperty(e, 'exports', {
        enumerable: !0,
        get: function () {
          const e = new Map(),
            s = {
              modifier: {
                reset: [0, 0],
                bold: [1, 22],
                dim: [2, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                hidden: [8, 28],
                strikethrough: [9, 29]
              },
              color: {
                black: [30, 39],
                red: [31, 39],
                green: [32, 39],
                yellow: [33, 39],
                blue: [34, 39],
                magenta: [35, 39],
                cyan: [36, 39],
                white: [37, 39],
                blackBright: [90, 39],
                redBright: [91, 39],
                greenBright: [92, 39],
                yellowBright: [93, 39],
                blueBright: [94, 39],
                magentaBright: [95, 39],
                cyanBright: [96, 39],
                whiteBright: [97, 39]
              },
              bgColor: {
                bgBlack: [40, 49],
                bgRed: [41, 49],
                bgGreen: [42, 49],
                bgYellow: [43, 49],
                bgBlue: [44, 49],
                bgMagenta: [45, 49],
                bgCyan: [46, 49],
                bgWhite: [47, 49],
                bgBlackBright: [100, 49],
                bgRedBright: [101, 49],
                bgGreenBright: [102, 49],
                bgYellowBright: [103, 49],
                bgBlueBright: [104, 49],
                bgMagentaBright: [105, 49],
                bgCyanBright: [106, 49],
                bgWhiteBright: [107, 49]
              }
            }
          ;(s.color.gray = s.color.blackBright),
            (s.bgColor.bgGray = s.bgColor.bgBlackBright),
            (s.color.grey = s.color.blackBright),
            (s.bgColor.bgGrey = s.bgColor.bgBlackBright)
          for (const [t, n] of Object.entries(s)) {
            for (const [t, r] of Object.entries(n))
              (s[t] = { open: `\x1b[${r[0]}m`, close: `\x1b[${r[1]}m` }),
                (n[t] = s[t]),
                e.set(r[0], r[1])
            Object.defineProperty(s, t, { value: n, enumerable: !1 })
          }
          return (
            Object.defineProperty(s, 'codes', { value: e, enumerable: !1 }),
            (s.color.close = '\x1b[39m'),
            (s.bgColor.close = '\x1b[49m'),
            o(s.color, 'ansi', () => a(t, 'ansi16', i, !1)),
            o(s.color, 'ansi256', () => a(n, 'ansi256', i, !1)),
            o(s.color, 'ansi16m', () => a(r, 'rgb', u, !1)),
            o(s.bgColor, 'ansi', () => a(t, 'ansi16', i, !0)),
            o(s.bgColor, 'ansi256', () => a(n, 'ansi256', i, !0)),
            o(s.bgColor, 'ansi16m', () => a(r, 'rgb', u, !0)),
            s
          )
        }
      })
    })
  function tc() {
    return !1
  }
  function nc() {
    throw new Error('tty.ReadStream is not implemented')
  }
  function rc() {
    throw new Error('tty.ReadStream is not implemented')
  }
  var ic = { isatty: tc, ReadStream: nc, WriteStream: rc },
    uc = (e, t = Tr.argv) => {
      const n = e.startsWith('-') ? '' : 1 === e.length ? '-' : '--',
        r = t.indexOf(n + e),
        i = t.indexOf('--')
      return -1 !== r && (-1 === i || r < i)
    },
    oc = n(
      Object.freeze({
        __proto__: null,
        isatty: tc,
        ReadStream: nc,
        WriteStream: rc,
        default: ic
      })
    )
  const { env: sc } = Tr
  let ac
  function cc(e) {
    return 0 !== e && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 }
  }
  function lc(e, t) {
    if (0 === ac) return 0
    if (uc('color=16m') || uc('color=full') || uc('color=truecolor')) return 3
    if (uc('color=256')) return 2
    if (e && !t && void 0 === ac) return 0
    const n = ac || 0
    if ('dumb' === sc.TERM) return n
    if ('win32' === Tr.platform) {
      const e = fs.release().split('.')
      return Number(e[0]) >= 10 && Number(e[2]) >= 10586
        ? Number(e[2]) >= 14931
          ? 3
          : 2
        : 1
    }
    if ('CI' in sc)
      return [
        'TRAVIS',
        'CIRCLECI',
        'APPVEYOR',
        'GITLAB_CI',
        'GITHUB_ACTIONS',
        'BUILDKITE'
      ].some((e) => e in sc) || 'codeship' === sc.CI_NAME
        ? 1
        : n
    if ('TEAMCITY_VERSION' in sc)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(sc.TEAMCITY_VERSION) ? 1 : 0
    if ('truecolor' === sc.COLORTERM) return 3
    if ('TERM_PROGRAM' in sc) {
      const e = parseInt((sc.TERM_PROGRAM_VERSION || '').split('.')[0], 10)
      switch (sc.TERM_PROGRAM) {
        case 'iTerm.app':
          return e >= 3 ? 3 : 2
        case 'Apple_Terminal':
          return 2
      }
    }
    return /-256(color)?$/i.test(sc.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
          sc.TERM
        ) || 'COLORTERM' in sc
      ? 1
      : n
  }
  uc('no-color') || uc('no-colors') || uc('color=false') || uc('color=never')
    ? (ac = 0)
    : (uc('color') || uc('colors') || uc('color=true') || uc('color=always')) &&
      (ac = 1),
    'FORCE_COLOR' in sc &&
      (ac =
        'true' === sc.FORCE_COLOR
          ? 1
          : 'false' === sc.FORCE_COLOR
          ? 0
          : 0 === sc.FORCE_COLOR.length
          ? 1
          : Math.min(parseInt(sc.FORCE_COLOR, 10), 3))
  var pc = {
    supportsColor: function (e) {
      return cc(lc(e, e && e.isTTY))
    },
    stdout: cc(lc(!0, oc.isatty(1))),
    stderr: cc(lc(!0, oc.isatty(2)))
  }
  var fc = {
    stringReplaceAll: (e, t, n) => {
      let r = e.indexOf(t)
      if (-1 === r) return e
      const i = t.length
      let u = 0,
        o = ''
      do {
        ;(o += e.substr(u, r - u) + t + n), (u = r + i), (r = e.indexOf(t, u))
      } while (-1 !== r)
      return (o += e.substr(u)), o
    },
    stringEncaseCRLFWithFirstIndex: (e, t, n, r) => {
      let i = 0,
        u = ''
      do {
        const o = '\r' === e[r - 1]
        ;(u += e.substr(i, (o ? r - 1 : r) - i) + t + (o ? '\r\n' : '\n') + n),
          (i = r + 1),
          (r = e.indexOf('\n', i))
      } while (-1 !== r)
      return (u += e.substr(i)), u
    }
  }
  const dc =
      /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
    hc = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
    gc = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
    mc = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
    yc = new Map([
      ['n', '\n'],
      ['r', '\r'],
      ['t', '\t'],
      ['b', '\b'],
      ['f', '\f'],
      ['v', '\v'],
      ['0', '\0'],
      ['\\', '\\'],
      ['e', '\x1b'],
      ['a', '\x07']
    ])
  function Dc(e) {
    const t = 'u' === e[0],
      n = '{' === e[1]
    return (t && !n && 5 === e.length) || ('x' === e[0] && 3 === e.length)
      ? String.fromCharCode(parseInt(e.slice(1), 16))
      : t && n
      ? String.fromCodePoint(parseInt(e.slice(2, -1), 16))
      : yc.get(e) || e
  }
  function Ec(e, t) {
    const n = [],
      r = t.trim().split(/\s*,\s*/g)
    let i
    for (const t of r) {
      const r = Number(t)
      if (Number.isNaN(r)) {
        if (!(i = t.match(gc)))
          throw new Error(
            `Invalid Chalk template style argument: ${t} (in style '${e}')`
          )
        n.push(i[2].replace(mc, (e, t, n) => (t ? Dc(t) : n)))
      } else n.push(r)
    }
    return n
  }
  function Cc(e) {
    hc.lastIndex = 0
    const t = []
    let n
    for (; null !== (n = hc.exec(e)); ) {
      const e = n[1]
      if (n[2]) {
        const r = Ec(e, n[2])
        t.push([e].concat(r))
      } else t.push([e])
    }
    return t
  }
  function bc(e, t) {
    const n = {}
    for (const e of t)
      for (const t of e.styles) n[t[0]] = e.inverse ? null : t.slice(1)
    let r = e
    for (const [e, t] of Object.entries(n))
      if (Array.isArray(t)) {
        if (!(e in r)) throw new Error(`Unknown Chalk style: ${e}`)
        r = t.length > 0 ? r[e](...t) : r[e]
      }
    return r
  }
  var Ac = (e, t) => {
    const n = [],
      r = []
    let i = []
    if (
      (t.replace(dc, (t, u, o, s, a, c) => {
        if (u) i.push(Dc(u))
        else if (s) {
          const t = i.join('')
          ;(i = []),
            r.push(0 === n.length ? t : bc(e, n)(t)),
            n.push({ inverse: o, styles: Cc(s) })
        } else if (a) {
          if (0 === n.length)
            throw new Error('Found extraneous } in Chalk template literal')
          r.push(bc(e, n)(i.join(''))), (i = []), n.pop()
        } else i.push(c)
      }),
      r.push(i.join('')),
      n.length > 0)
    ) {
      const e = `Chalk template literal is missing ${n.length} closing bracket${
        1 === n.length ? '' : 's'
      } (\`}\`)`
      throw new Error(e)
    }
    return r.join('')
  }
  const { stdout: vc, stderr: Fc } = pc,
    { stringReplaceAll: xc, stringEncaseCRLFWithFirstIndex: Sc } = fc,
    { isArray: wc } = Array,
    Tc = ['ansi', 'ansi', 'ansi256', 'ansi16m'],
    Bc = Object.create(null)
  class Nc {
    constructor(e) {
      return kc(e)
    }
  }
  const kc = (e) => {
    const t = {}
    return (
      ((e, t = {}) => {
        if (
          t.level &&
          !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3)
        )
          throw new Error('The `level` option should be an integer from 0 to 3')
        const n = vc ? vc.level : 0
        e.level = void 0 === t.level ? n : t.level
      })(t, e),
      (t.template = (...e) => Rc(t.template, ...e)),
      Object.setPrototypeOf(t, Pc.prototype),
      Object.setPrototypeOf(t.template, t),
      (t.template.constructor = () => {
        throw new Error(
          '`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.'
        )
      }),
      (t.template.Instance = Nc),
      t.template
    )
  }
  function Pc(e) {
    return kc(e)
  }
  for (const [e, t] of Object.entries(ec))
    Bc[e] = {
      get() {
        const n = jc(this, Lc(t.open, t.close, this._styler), this._isEmpty)
        return Object.defineProperty(this, e, { value: n }), n
      }
    }
  Bc.visible = {
    get() {
      const e = jc(this, this._styler, !0)
      return Object.defineProperty(this, 'visible', { value: e }), e
    }
  }
  const Oc = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256']
  for (const e of Oc)
    Bc[e] = {
      get() {
        const { level: t } = this
        return function (...n) {
          const r = Lc(ec.color[Tc[t]][e](...n), ec.color.close, this._styler)
          return jc(this, r, this._isEmpty)
        }
      }
    }
  for (const e of Oc) {
    Bc['bg' + e[0].toUpperCase() + e.slice(1)] = {
      get() {
        const { level: t } = this
        return function (...n) {
          const r = Lc(
            ec.bgColor[Tc[t]][e](...n),
            ec.bgColor.close,
            this._styler
          )
          return jc(this, r, this._isEmpty)
        }
      }
    }
  }
  const Ic = Object.defineProperties(
      () => {},
      Object.assign(
        Object.assign({}, Bc),
        {},
        {
          level: {
            enumerable: !0,
            get() {
              return this._generator.level
            },
            set(e) {
              this._generator.level = e
            }
          }
        }
      )
    ),
    Lc = (e, t, n) => {
      let r, i
      return (
        void 0 === n
          ? ((r = e), (i = t))
          : ((r = n.openAll + e), (i = t + n.closeAll)),
        { open: e, close: t, openAll: r, closeAll: i, parent: n }
      )
    },
    jc = (e, t, n) => {
      const r = (...e) =>
        wc(e[0]) && wc(e[0].raw)
          ? _c(r, Rc(r, ...e))
          : _c(r, 1 === e.length ? '' + e[0] : e.join(' '))
      return (
        Object.setPrototypeOf(r, Ic),
        (r._generator = e),
        (r._styler = t),
        (r._isEmpty = n),
        r
      )
    },
    _c = (e, t) => {
      if (e.level <= 0 || !t) return e._isEmpty ? '' : t
      let n = e._styler
      if (void 0 === n) return t
      const { openAll: r, closeAll: i } = n
      if (-1 !== t.indexOf('\x1b'))
        for (; void 0 !== n; ) (t = xc(t, n.close, n.open)), (n = n.parent)
      const u = t.indexOf('\n')
      return -1 !== u && (t = Sc(t, i, r, u)), r + t + i
    }
  let Mc
  const Rc = (e, ...t) => {
    const [n] = t
    if (!wc(n) || !wc(n.raw)) return t.join(' ')
    const r = t.slice(1),
      i = [n.raw[0]]
    for (let e = 1; e < n.length; e++)
      i.push(String(r[e - 1]).replace(/[{}\\]/g, '\\$&'), String(n.raw[e]))
    return void 0 === Mc && (Mc = Ac), Mc(e, i.join(''))
  }
  Object.defineProperties(Pc.prototype, Bc)
  const $c = Pc()
  ;($c.supportsColor = vc),
    ($c.stderr = Pc({ level: Fc ? Fc.level : 0 })),
    ($c.stderr.supportsColor = Fc)
  var Vc = $c
  const Wc = ['_'],
    qc = {
      key: (e) => (1 === e.length ? `-${e}` : `--${e}`),
      value: (e) => Ra.apiDescriptor.value(e),
      pair: ({ key: e, value: t }) =>
        !1 === t
          ? `--no-${e}`
          : !0 === t
          ? qc.key(e)
          : '' === t
          ? `${qc.key(e)} without an argument`
          : `${qc.key(e)}=${t}`
    }
  class Uc extends Ra.ChoiceSchema {
    constructor({ name: e, flags: t }) {
      super({ name: e, choices: t }), (this._flags = [...t].sort())
    }
    preprocess(e, t) {
      if ('string' == typeof e && e.length > 0 && !this._flags.includes(e)) {
        const n = this._flags.find((t) => qa(t, e) < 3)
        if (n)
          return (
            t.logger.warn(
              [
                `Unknown flag ${Vc.yellow(t.descriptor.value(e))},`,
                `did you mean ${Vc.blue(t.descriptor.value(n))}?`
              ].join(' ')
            ),
            n
          )
      }
      return e
    }
    expected() {
      return 'a flag'
    }
  }
  let zc
  function Gc(e, t, { logger: n, isCLI: r = !1, passThrough: i = !1 } = {}) {
    const u = i
        ? Array.isArray(i)
          ? (e, t) => (i.includes(e) ? { [e]: t } : void 0)
          : (e, t) => ({ [e]: t })
        : (e, t, n) => {
            const r = Mn(n.schemas, Wc)
            return Ra.levenUnknownHandler(
              e,
              t,
              Object.assign(Object.assign({}, n), {}, { schemas: r })
            )
          },
      o = r ? qc : Ra.apiDescriptor,
      s = (function (e, { isCLI: t }) {
        const n = []
        t && n.push(Ra.AnySchema.create({ name: '_' }))
        for (const r of e)
          n.push(Hc(r, { isCLI: t, optionInfos: e })),
            r.alias &&
              t &&
              n.push(
                Ra.AliasSchema.create({ name: r.alias, sourceName: r.name })
              )
        return n
      })(t, { isCLI: r }),
      a = new Ra.Normalizer(s, { logger: n, unknown: u, descriptor: o }),
      c = !1 !== n
    c && zc && (a._hasDeprecationWarned = zc)
    const l = a.normalize(e)
    return c && (zc = a._hasDeprecationWarned), l
  }
  function Hc(e, { isCLI: t, optionInfos: n }) {
    let r
    const i = { name: e.name },
      u = {}
    switch (e.type) {
      case 'int':
        ;(r = Ra.IntegerSchema), t && (i.preprocess = (e) => Number(e))
        break
      case 'string':
        r = Ra.StringSchema
        break
      case 'choice':
        ;(r = Ra.ChoiceSchema),
          (i.choices = e.choices.map((t) =>
            'object' == typeof t && t.redirect
              ? Object.assign(
                  Object.assign({}, t),
                  {},
                  { redirect: { to: { key: e.name, value: t.redirect } } }
                )
              : t
          ))
        break
      case 'boolean':
        r = Ra.BooleanSchema
        break
      case 'flag':
        ;(r = Uc),
          (i.flags = n.flatMap((e) =>
            [
              e.alias,
              e.description && e.name,
              e.oppositeDescription && `no-${e.name}`
            ].filter(Boolean)
          ))
        break
      case 'path':
        r = Ra.StringSchema
        break
      default:
        throw new Error(`Unexpected type ${e.type}`)
    }
    if (
      (e.exception
        ? (i.validate = (t, n, r) => e.exception(t) || n.validate(t, r))
        : (i.validate = (e, t, n) => void 0 === e || t.validate(e, n)),
      e.redirect &&
        (u.redirect = (t) =>
          t
            ? { to: { key: e.redirect.option, value: e.redirect.value } }
            : void 0),
      e.deprecated && (u.deprecated = !0),
      t && !e.array)
    ) {
      const e = i.preprocess || ((e) => e)
      i.preprocess = (t, n, r) =>
        n.preprocess(e(Array.isArray(t) ? _n(t) : t), r)
    }
    return e.array
      ? Ra.ArraySchema.create(
          Object.assign(
            Object.assign(
              Object.assign(
                {},
                t ? { preprocess: (e) => (Array.isArray(e) ? e : [e]) } : {}
              ),
              u
            ),
            {},
            { valueSchema: r.create(i) }
          )
        )
      : r.create(Object.assign(Object.assign({}, i), u))
  }
  var Jc = {
    normalizeApiOptions: function (e, t, n) {
      return Gc(e, t, n)
    },
    normalizeCliOptions: function (e, t, n) {
      return Gc(e, t, Object.assign({ isCLI: !0 }, n))
    }
  }
  const { isNonEmptyArray: Xc } = Fi
  function Yc(e, t) {
    const { ignoreDecorators: n } = t || {}
    if (!n) {
      const t = (e.declaration && e.declaration.decorators) || e.decorators
      if (Xc(t)) return Yc(t[0])
    }
    return e.range ? e.range[0] : e.start
  }
  function Kc(e) {
    return e.range ? e.range[1] : e.end
  }
  function Qc(e, t) {
    return Yc(e) === Yc(t)
  }
  var Zc = {
      locStart: Yc,
      locEnd: Kc,
      hasSameLocStart: Qc,
      hasSameLoc: function (e, t) {
        return (
          Qc(e, t) &&
          (function (e, t) {
            return Kc(e) === Kc(t)
          })(e, t)
        )
      }
    },
    el = Object.defineProperty(
      {
        default:
          /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g,
        matchToToken: function (e) {
          var t = { type: 'invalid', value: e[0], closed: void 0 }
          return (
            e[1]
              ? ((t.type = 'string'), (t.closed = !(!e[3] && !e[4])))
              : e[5]
              ? (t.type = 'comment')
              : e[6]
              ? ((t.type = 'comment'), (t.closed = !!e[7]))
              : e[8]
              ? (t.type = 'regex')
              : e[9]
              ? (t.type = 'number')
              : e[10]
              ? (t.type = 'name')
              : e[11]
              ? (t.type = 'punctuator')
              : e[12] && (t.type = 'whitespace'),
            t
          )
        }
      },
      '__esModule',
      { value: !0 }
    ),
    tl = pl,
    nl = fl,
    rl = function (e) {
      let t = !0
      for (let n = 0; n < e.length; n++) {
        let r = e.charCodeAt(n)
        if (55296 == (64512 & r) && n + 1 < e.length) {
          const t = e.charCodeAt(++n)
          56320 == (64512 & t) && (r = 65536 + ((1023 & r) << 10) + (1023 & t))
        }
        if (t) {
          if (((t = !1), !pl(r))) return !1
        } else if (!fl(r)) return !1
      }
      return !t
    }
  let il =
      '\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc',
    ul =
      '\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf\u1ac0\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f'
  const ol = new RegExp('[' + il + ']'),
    sl = new RegExp('[' + il + ul + ']')
  il = ul = null
  const al = [
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
    cl = [
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
  function ll(e, t) {
    let n = 65536
    for (let r = 0, i = t.length; r < i; r += 2) {
      if (((n += t[r]), n > e)) return !1
      if (((n += t[r + 1]), n >= e)) return !0
    }
    return !1
  }
  function pl(e) {
    return e < 65
      ? 36 === e
      : e <= 90 ||
          (e < 97
            ? 95 === e
            : e <= 122 ||
              (e <= 65535
                ? e >= 170 && ol.test(String.fromCharCode(e))
                : ll(e, al)))
  }
  function fl(e) {
    return e < 48
      ? 36 === e
      : e < 58 ||
          (!(e < 65) &&
            (e <= 90 ||
              (e < 97
                ? 95 === e
                : e <= 122 ||
                  (e <= 65535
                    ? e >= 170 && sl.test(String.fromCharCode(e))
                    : ll(e, al) || ll(e, cl)))))
  }
  var dl = Object.defineProperty(
      { isIdentifierStart: tl, isIdentifierChar: nl, isIdentifierName: rl },
      '__esModule',
      { value: !0 }
    ),
    hl = Fl,
    gl = xl,
    ml = Sl,
    yl = function (e, t) {
      return xl(e, t) || Sl(e)
    },
    Dl = function (e) {
      return bl.has(e)
    }
  const El = [
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
    Cl = ['eval', 'arguments'],
    bl = new Set([
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
    Al = new Set(El),
    vl = new Set(Cl)
  function Fl(e, t) {
    return (t && 'await' === e) || 'enum' === e
  }
  function xl(e, t) {
    return Fl(e, t) || Al.has(e)
  }
  function Sl(e) {
    return vl.has(e)
  }
  var wl = Object.defineProperty(
      {
        isReservedWord: hl,
        isStrictReservedWord: gl,
        isStrictBindOnlyReservedWord: ml,
        isStrictBindReservedWord: yl,
        isKeyword: Dl
      },
      '__esModule',
      { value: !0 }
    ),
    Tl = r(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isIdentifierName', {
          enumerable: !0,
          get: function () {
            return dl.isIdentifierName
          }
        }),
        Object.defineProperty(t, 'isIdentifierChar', {
          enumerable: !0,
          get: function () {
            return dl.isIdentifierChar
          }
        }),
        Object.defineProperty(t, 'isIdentifierStart', {
          enumerable: !0,
          get: function () {
            return dl.isIdentifierStart
          }
        }),
        Object.defineProperty(t, 'isReservedWord', {
          enumerable: !0,
          get: function () {
            return wl.isReservedWord
          }
        }),
        Object.defineProperty(t, 'isStrictBindOnlyReservedWord', {
          enumerable: !0,
          get: function () {
            return wl.isStrictBindOnlyReservedWord
          }
        }),
        Object.defineProperty(t, 'isStrictBindReservedWord', {
          enumerable: !0,
          get: function () {
            return wl.isStrictBindReservedWord
          }
        }),
        Object.defineProperty(t, 'isStrictReservedWord', {
          enumerable: !0,
          get: function () {
            return wl.isStrictReservedWord
          }
        }),
        Object.defineProperty(t, 'isKeyword', {
          enumerable: !0,
          get: function () {
            return wl.isKeyword
          }
        })
    }),
    Bl = /[|\\{}()[\]^$+*?.]/g,
    Nl = function (e) {
      if ('string' != typeof e) throw new TypeError('Expected a string')
      return e.replace(Bl, '\\$&')
    },
    kl = r(function (e) {
      const t = (e, t) =>
          function () {
            const n = e.apply(Ho, arguments)
            return `\x1b[${n + t}m`
          },
        n = (e, t) =>
          function () {
            const n = e.apply(Ho, arguments)
            return `\x1b[${38 + t};5;${n}m`
          },
        r = (e, t) =>
          function () {
            const n = e.apply(Ho, arguments)
            return `\x1b[${38 + t};2;${n[0]};${n[1]};${n[2]}m`
          }
      Object.defineProperty(e, 'exports', {
        enumerable: !0,
        get: function () {
          const e = new Map(),
            i = {
              modifier: {
                reset: [0, 0],
                bold: [1, 22],
                dim: [2, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                hidden: [8, 28],
                strikethrough: [9, 29]
              },
              color: {
                black: [30, 39],
                red: [31, 39],
                green: [32, 39],
                yellow: [33, 39],
                blue: [34, 39],
                magenta: [35, 39],
                cyan: [36, 39],
                white: [37, 39],
                gray: [90, 39],
                redBright: [91, 39],
                greenBright: [92, 39],
                yellowBright: [93, 39],
                blueBright: [94, 39],
                magentaBright: [95, 39],
                cyanBright: [96, 39],
                whiteBright: [97, 39]
              },
              bgColor: {
                bgBlack: [40, 49],
                bgRed: [41, 49],
                bgGreen: [42, 49],
                bgYellow: [43, 49],
                bgBlue: [44, 49],
                bgMagenta: [45, 49],
                bgCyan: [46, 49],
                bgWhite: [47, 49],
                bgBlackBright: [100, 49],
                bgRedBright: [101, 49],
                bgGreenBright: [102, 49],
                bgYellowBright: [103, 49],
                bgBlueBright: [104, 49],
                bgMagentaBright: [105, 49],
                bgCyanBright: [106, 49],
                bgWhiteBright: [107, 49]
              }
            }
          i.color.grey = i.color.gray
          for (const t of Object.keys(i)) {
            const n = i[t]
            for (const t of Object.keys(n)) {
              const r = n[t]
              ;(i[t] = { open: `\x1b[${r[0]}m`, close: `\x1b[${r[1]}m` }),
                (n[t] = i[t]),
                e.set(r[0], r[1])
            }
            Object.defineProperty(i, t, { value: n, enumerable: !1 }),
              Object.defineProperty(i, 'codes', { value: e, enumerable: !1 })
          }
          const u = (e) => e,
            o = (e, t, n) => [e, t, n]
          ;(i.color.close = '\x1b[39m'),
            (i.bgColor.close = '\x1b[49m'),
            (i.color.ansi = { ansi: t(u, 0) }),
            (i.color.ansi256 = { ansi256: n(u, 0) }),
            (i.color.ansi16m = { rgb: r(o, 0) }),
            (i.bgColor.ansi = { ansi: t(u, 10) }),
            (i.bgColor.ansi256 = { ansi256: n(u, 10) }),
            (i.bgColor.ansi16m = { rgb: r(o, 10) })
          for (let e of Object.keys(Ho)) {
            if ('object' != typeof Ho[e]) continue
            const u = Ho[e]
            'ansi16' === e && (e = 'ansi'),
              'ansi16' in u &&
                ((i.color.ansi[e] = t(u.ansi16, 0)),
                (i.bgColor.ansi[e] = t(u.ansi16, 10))),
              'ansi256' in u &&
                ((i.color.ansi256[e] = n(u.ansi256, 0)),
                (i.bgColor.ansi256[e] = n(u.ansi256, 10))),
              'rgb' in u &&
                ((i.color.ansi16m[e] = r(u.rgb, 0)),
                (i.bgColor.ansi16m[e] = r(u.rgb, 10)))
          }
          return i
        }
      })
    }),
    Pl = (e, t) => {
      t = t || Tr.argv
      const n = e.startsWith('-') ? '' : 1 === e.length ? '-' : '--',
        r = t.indexOf(n + e),
        i = t.indexOf('--')
      return -1 !== r && (-1 === i || r < i)
    }
  const Ol = Tr.env
  let Il
  function Ll(e) {
    return (function (e) {
      return (
        0 !== e && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 }
      )
    })(
      (function (e) {
        if (!1 === Il) return 0
        if (Pl('color=16m') || Pl('color=full') || Pl('color=truecolor'))
          return 3
        if (Pl('color=256')) return 2
        if (e && !e.isTTY && !0 !== Il) return 0
        const t = Il ? 1 : 0
        if ('win32' === Tr.platform) {
          const e = fs.release().split('.')
          return Number(Tr.versions.node.split('.')[0]) >= 8 &&
            Number(e[0]) >= 10 &&
            Number(e[2]) >= 10586
            ? Number(e[2]) >= 14931
              ? 3
              : 2
            : 1
        }
        if ('CI' in Ol)
          return ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(
            (e) => e in Ol
          ) || 'codeship' === Ol.CI_NAME
            ? 1
            : t
        if ('TEAMCITY_VERSION' in Ol)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Ol.TEAMCITY_VERSION)
            ? 1
            : 0
        if ('truecolor' === Ol.COLORTERM) return 3
        if ('TERM_PROGRAM' in Ol) {
          const e = parseInt((Ol.TERM_PROGRAM_VERSION || '').split('.')[0], 10)
          switch (Ol.TERM_PROGRAM) {
            case 'iTerm.app':
              return e >= 3 ? 3 : 2
            case 'Apple_Terminal':
              return 2
          }
        }
        return /-256(color)?$/i.test(Ol.TERM)
          ? 2
          : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
              Ol.TERM
            ) || 'COLORTERM' in Ol
          ? 1
          : (Ol.TERM, t)
      })(e)
    )
  }
  Pl('no-color') || Pl('no-colors') || Pl('color=false')
    ? (Il = !1)
    : (Pl('color') || Pl('colors') || Pl('color=true') || Pl('color=always')) &&
      (Il = !0),
    'FORCE_COLOR' in Ol &&
      (Il = 0 === Ol.FORCE_COLOR.length || 0 !== parseInt(Ol.FORCE_COLOR, 10))
  var jl = { supportsColor: Ll, stdout: Ll(Tr.stdout), stderr: Ll(Tr.stderr) }
  const _l =
      /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
    Ml = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
    Rl = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
    $l = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
    Vl = new Map([
      ['n', '\n'],
      ['r', '\r'],
      ['t', '\t'],
      ['b', '\b'],
      ['f', '\f'],
      ['v', '\v'],
      ['0', '\0'],
      ['\\', '\\'],
      ['e', '\x1b'],
      ['a', '\x07']
    ])
  function Wl(e) {
    return ('u' === e[0] && 5 === e.length) || ('x' === e[0] && 3 === e.length)
      ? String.fromCharCode(parseInt(e.slice(1), 16))
      : Vl.get(e) || e
  }
  function ql(e, t) {
    const n = [],
      r = t.trim().split(/\s*,\s*/g)
    let i
    for (const t of r)
      if (isNaN(t)) {
        if (!(i = t.match(Rl)))
          throw new Error(
            `Invalid Chalk template style argument: ${t} (in style '${e}')`
          )
        n.push(i[2].replace($l, (e, t, n) => (t ? Wl(t) : n)))
      } else n.push(Number(t))
    return n
  }
  function Ul(e) {
    Ml.lastIndex = 0
    const t = []
    let n
    for (; null !== (n = Ml.exec(e)); ) {
      const e = n[1]
      if (n[2]) {
        const r = ql(e, n[2])
        t.push([e].concat(r))
      } else t.push([e])
    }
    return t
  }
  function zl(e, t) {
    const n = {}
    for (const e of t)
      for (const t of e.styles) n[t[0]] = e.inverse ? null : t.slice(1)
    let r = e
    for (const e of Object.keys(n))
      if (Array.isArray(n[e])) {
        if (!(e in r)) throw new Error(`Unknown Chalk style: ${e}`)
        r = n[e].length > 0 ? r[e].apply(r, n[e]) : r[e]
      }
    return r
  }
  var Gl = (e, t) => {
      const n = [],
        r = []
      let i = []
      if (
        (t.replace(_l, (t, u, o, s, a, c) => {
          if (u) i.push(Wl(u))
          else if (s) {
            const t = i.join('')
            ;(i = []),
              r.push(0 === n.length ? t : zl(e, n)(t)),
              n.push({ inverse: o, styles: Ul(s) })
          } else if (a) {
            if (0 === n.length)
              throw new Error('Found extraneous } in Chalk template literal')
            r.push(zl(e, n)(i.join(''))), (i = []), n.pop()
          } else i.push(c)
        }),
        r.push(i.join('')),
        n.length > 0)
      ) {
        const e = `Chalk template literal is missing ${
          n.length
        } closing bracket${1 === n.length ? '' : 's'} (\`}\`)`
        throw new Error(e)
      }
      return r.join('')
    },
    Hl = r(function (e) {
      const t = jl.stdout,
        n =
          'win32' === Tr.platform &&
          !(Tr.env.TERM || '').toLowerCase().startsWith('xterm'),
        r = ['ansi', 'ansi', 'ansi256', 'ansi16m'],
        i = new Set(['gray']),
        u = Object.create(null)
      function o(e, n) {
        n = n || {}
        const r = t ? t.level : 0
        ;(e.level = void 0 === n.level ? r : n.level),
          (e.enabled = 'enabled' in n ? n.enabled : e.level > 0)
      }
      function s(e) {
        if (!this || !(this instanceof s) || this.template) {
          const t = {}
          return (
            o(t, e),
            (t.template = function () {
              const e = [].slice.call(arguments)
              return p.apply(null, [t.template].concat(e))
            }),
            Object.setPrototypeOf(t, s.prototype),
            Object.setPrototypeOf(t.template, t),
            (t.template.constructor = s),
            t.template
          )
        }
        o(this, e)
      }
      n && (kl.blue.open = '\x1b[94m')
      for (const e of Object.keys(kl))
        (kl[e].closeRe = new RegExp(Nl(kl[e].close), 'g')),
          (u[e] = {
            get() {
              const t = kl[e]
              return c.call(
                this,
                this._styles ? this._styles.concat(t) : [t],
                this._empty,
                e
              )
            }
          })
      ;(u.visible = {
        get() {
          return c.call(this, this._styles || [], !0, 'visible')
        }
      }),
        (kl.color.closeRe = new RegExp(Nl(kl.color.close), 'g'))
      for (const e of Object.keys(kl.color.ansi))
        i.has(e) ||
          (u[e] = {
            get() {
              const t = this.level
              return function () {
                const n = kl.color[r[t]][e].apply(null, arguments),
                  i = {
                    open: n,
                    close: kl.color.close,
                    closeRe: kl.color.closeRe
                  }
                return c.call(
                  this,
                  this._styles ? this._styles.concat(i) : [i],
                  this._empty,
                  e
                )
              }
            }
          })
      kl.bgColor.closeRe = new RegExp(Nl(kl.bgColor.close), 'g')
      for (const e of Object.keys(kl.bgColor.ansi)) {
        if (i.has(e)) continue
        u['bg' + e[0].toUpperCase() + e.slice(1)] = {
          get() {
            const t = this.level
            return function () {
              const n = kl.bgColor[r[t]][e].apply(null, arguments),
                i = {
                  open: n,
                  close: kl.bgColor.close,
                  closeRe: kl.bgColor.closeRe
                }
              return c.call(
                this,
                this._styles ? this._styles.concat(i) : [i],
                this._empty,
                e
              )
            }
          }
        }
      }
      const a = Object.defineProperties(() => {}, u)
      function c(e, t, n) {
        const r = function () {
          return l.apply(r, arguments)
        }
        ;(r._styles = e), (r._empty = t)
        const i = this
        return (
          Object.defineProperty(r, 'level', {
            enumerable: !0,
            get: () => i.level,
            set(e) {
              i.level = e
            }
          }),
          Object.defineProperty(r, 'enabled', {
            enumerable: !0,
            get: () => i.enabled,
            set(e) {
              i.enabled = e
            }
          }),
          (r.hasGrey = this.hasGrey || 'gray' === n || 'grey' === n),
          (r.__proto__ = a),
          r
        )
      }
      function l() {
        const e = arguments,
          t = e.length
        let r = String(arguments[0])
        if (0 === t) return ''
        if (t > 1) for (let n = 1; n < t; n++) r += ' ' + e[n]
        if (!this.enabled || this.level <= 0 || !r) return this._empty ? '' : r
        const i = kl.dim.open
        n && this.hasGrey && (kl.dim.open = '')
        for (const e of this._styles.slice().reverse())
          (r = e.open + r.replace(e.closeRe, e.open) + e.close),
            (r = r.replace(/\r?\n/g, `${e.close}$&${e.open}`))
        return (kl.dim.open = i), r
      }
      function p(e, t) {
        if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(' ')
        const n = [].slice.call(arguments, 2),
          r = [t.raw[0]]
        for (let e = 1; e < t.length; e++)
          r.push(String(n[e - 1]).replace(/[{}\\]/g, '\\$&')),
            r.push(String(t.raw[e]))
        return Gl(e, r.join(''))
      }
      Object.defineProperties(s.prototype, u),
        (e.exports = s()),
        (e.exports.supportsColor = t),
        (e.exports.default = e.exports)
    }),
    Jl = tp,
    Xl = np,
    Yl = function (e, t = {}) {
      if (tp(t)) {
        const n = np(t)
        return (function (e, t) {
          let n = ''
          for (const { type: r, value: i } of ep(t)) {
            const t = e[r]
            n += t
              ? i
                  .split(Ql)
                  .map((e) => t(e))
                  .join('\n')
              : i
          }
          return n
        })(
          (function (e) {
            return {
              keyword: e.cyan,
              capitalized: e.yellow,
              jsxIdentifier: e.yellow,
              punctuator: e.yellow,
              number: e.magenta,
              string: e.green,
              regex: e.magenta,
              comment: e.grey,
              invalid: e.white.bgRed.bold
            }
          })(n),
          e
        )
      }
      return e
    }
  const Kl = new Set(['as', 'async', 'from', 'get', 'of', 'set'])
  const Ql = /\r\n|[\n\r\u2028\u2029]/,
    Zl = /^[()[\]{}]$/
  let ep
  {
    const e = /^[a-z][\w-]*$/i,
      t = function (t, n, r) {
        if ('name' === t.type) {
          if (
            (0, Tl.isKeyword)(t.value) ||
            (0, Tl.isStrictReservedWord)(t.value, !0) ||
            Kl.has(t.value)
          )
            return 'keyword'
          if (
            e.test(t.value) &&
            ('<' === r[n - 1] || '</' == r.substr(n - 2, 2))
          )
            return 'jsxIdentifier'
          if (t.value[0] !== t.value[0].toLowerCase()) return 'capitalized'
        }
        return 'punctuator' === t.type && Zl.test(t.value)
          ? 'bracket'
          : 'invalid' !== t.type || ('@' !== t.value && '#' !== t.value)
          ? t.type
          : 'punctuator'
      }
    ep = function* (e) {
      let n
      for (; (n = el.default.exec(e)); ) {
        const r = el.matchToToken(n)
        yield { type: t(r, n.index, e), value: r.value }
      }
    }
  }
  function tp(e) {
    return !!Hl.supportsColor || e.forceColor
  }
  function np(e) {
    return e.forceColor ? new Hl.constructor({ enabled: !0, level: 1 }) : Hl
  }
  var rp = Object.defineProperty(
      { shouldHighlight: Jl, getChalk: Xl, default: Yl },
      '__esModule',
      { value: !0 }
    ),
    ip = ap,
    up = function (e, t, n, r = {}) {
      if (!op) {
        op = !0
        const e =
          'Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.'
        if (Tr.emitWarning) Tr.emitWarning(e, 'DeprecationWarning')
        else {
          ;(new Error(e).name = 'DeprecationWarning'),
            console.warn(new Error(e))
        }
      }
      n = Math.max(n, 0)
      return ap(e, { start: { column: n, line: t } }, r)
    }
  let op = !1
  const sp = /\r\n|[\n\r\u2028\u2029]/
  function ap(e, t, n = {}) {
    const r = (n.highlightCode || n.forceColor) && (0, rp.shouldHighlight)(n),
      i = (0, rp.getChalk)(n),
      u = (function (e) {
        return { gutter: e.grey, marker: e.red.bold, message: e.red.bold }
      })(i),
      o = (e, t) => (r ? e(t) : t),
      s = e.split(sp),
      {
        start: a,
        end: c,
        markerLines: l
      } = (function (e, t, n) {
        const r = Object.assign({ column: 0, line: -1 }, e.start),
          i = Object.assign({}, r, e.end),
          { linesAbove: u = 2, linesBelow: o = 3 } = n || {},
          s = r.line,
          a = r.column,
          c = i.line,
          l = i.column
        let p = Math.max(s - (u + 1), 0),
          f = Math.min(t.length, c + o)
        ;-1 === s && (p = 0), -1 === c && (f = t.length)
        const d = c - s,
          h = {}
        if (d)
          for (let e = 0; e <= d; e++) {
            const n = e + s
            if (a)
              if (0 === e) {
                const e = t[n - 1].length
                h[n] = [a, e - a + 1]
              } else if (e === d) h[n] = [0, l]
              else {
                const r = t[n - e].length
                h[n] = [0, r]
              }
            else h[n] = !0
          }
        else h[s] = a === l ? !a || [a, 0] : [a, l - a]
        return { start: p, end: f, markerLines: h }
      })(t, s, n),
      p = t.start && 'number' == typeof t.start.column,
      f = String(c).length
    let d = (r ? (0, rp.default)(e, n) : e)
      .split(sp)
      .slice(a, c)
      .map((e, t) => {
        const r = a + 1 + t,
          i = ` ${` ${r}`.slice(-f)} |`,
          s = l[r],
          c = !l[r + 1]
        if (s) {
          let t = ''
          if (Array.isArray(s)) {
            const r = e.slice(0, Math.max(s[0] - 1, 0)).replace(/[^\t]/g, ' '),
              a = s[1] || 1
            ;(t = [
              '\n ',
              o(u.gutter, i.replace(/\d/g, ' ')),
              ' ',
              r,
              o(u.marker, '^').repeat(a)
            ].join('')),
              c && n.message && (t += ' ' + o(u.message, n.message))
          }
          return [
            o(u.marker, '>'),
            o(u.gutter, i),
            e.length > 0 ? ` ${e}` : '',
            t
          ].join('')
        }
        return ` ${o(u.gutter, i)}${e.length > 0 ? ` ${e}` : ''}`
      })
      .join('\n')
    return (
      n.message && !p && (d = `${' '.repeat(f + 1)}${n.message}\n${d}`),
      r ? i.reset(d) : d
    )
  }
  var cp = Object.defineProperty(
      { codeFrameColumns: ip, default: up },
      '__esModule',
      { value: !0 }
    ),
    lp = n(vu)
  const { ConfigError: pp } = Bo,
    { locStart: fp, locEnd: dp } = Zc,
    hp = Object.getOwnPropertyNames,
    gp = Object.getOwnPropertyDescriptor
  function mp(e) {
    const t = {}
    for (const n of e.plugins)
      if (n.parsers)
        for (const e of hp(n.parsers))
          Object.defineProperty(t, e, gp(n.parsers, e))
    return t
  }
  function yp(e, t = mp(e)) {
    if ('function' == typeof e.parser)
      return { parse: e.parser, astFormat: 'estree', locStart: fp, locEnd: dp }
    if ('string' == typeof e.parser) {
      if (Object.prototype.hasOwnProperty.call(t, e.parser)) return t[e.parser]
      throw new pp(
        `Couldn't resolve parser "${e.parser}". Parsers must be explicitly added to the standalone bundle.`
      )
    }
  }
  var Dp = {
    parse: function (e, t) {
      const n = mp(t),
        r = Object.defineProperties(
          {},
          Object.fromEntries(
            Object.keys(n).map((e) => [
              e,
              { enumerable: !0, get: () => n[e].parse }
            ])
          )
        ),
        i = yp(t, n)
      try {
        return (
          i.preprocess && (e = i.preprocess(e, t)),
          { text: e, ast: i.parse(e, r, t) }
        )
      } catch (t) {
        const { loc: n } = t
        if (n) {
          const { codeFrameColumns: r } = cp
          throw (
            ((t.codeFrame = r(e, n, { highlightCode: !0 })),
            (t.message += '\n' + t.codeFrame),
            t)
          )
        }
        throw t.stack
      }
    },
    resolveParser: yp
  }
  const { UndefinedParserError: Ep } = Bo,
    { getSupportInfo: Cp } = ui,
    { resolveParser: bp } = Dp,
    Ap = {
      astFormat: 'estree',
      printer: {},
      originalText: void 0,
      locStart: null,
      locEnd: null
    }
  function vp(e, t) {
    const n = lp.basename(e).toLowerCase(),
      r = Cp({ plugins: t }).languages.filter((e) => null !== e.since)
    let i = r.find(
      (e) =>
        (e.extensions && e.extensions.some((e) => n.endsWith(e))) ||
        (e.filenames && e.filenames.some((e) => e.toLowerCase() === n))
    )
    if (!i && !n.includes('.')) {
      const t = (function (e) {
        if ('string' != typeof e) return ''
        let t
        try {
          t = vo.openSync(e, 'r')
        } catch {
          return ''
        }
        try {
          const e = new Fo(t).next().toString('utf8'),
            n = e.match(/^#!\/(?:usr\/)?bin\/env\s+(\S+)/)
          if (n) return n[1]
          const r = e.match(/^#!\/(?:usr\/(?:local\/)?)?bin\/(\S+)/)
          return r ? r[1] : ''
        } catch {
          return ''
        } finally {
          try {
            vo.closeSync(t)
          } catch {}
        }
      })(e)
      i = r.find((e) => e.interpreters && e.interpreters.includes(t))
    }
    return i && i.parsers[0]
  }
  var Fp = {
    normalize: function (e, t = {}) {
      const n = Object.assign({}, e),
        r = Cp({
          plugins: e.plugins,
          showUnreleased: !0,
          showDeprecated: !0
        }).options,
        i = Object.assign(
          Object.assign({}, Ap),
          Object.fromEntries(
            r
              .filter((e) => void 0 !== e.default)
              .map((e) => [e.name, e.default])
          )
        )
      if (!n.parser)
        if (n.filepath) {
          if (((n.parser = vp(n.filepath, n.plugins)), !n.parser))
            throw new Ep(`No parser could be inferred for file: ${n.filepath}`)
        } else {
          ;(t.logger || console).warn(
            "No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."
          ),
            (n.parser = 'babel')
        }
      const u = bp(
        Jc.normalizeApiOptions(n, [r.find((e) => 'parser' === e.name)], {
          passThrough: !0,
          logger: !1
        })
      )
      ;(n.astFormat = u.astFormat),
        (n.locEnd = u.locEnd),
        (n.locStart = u.locStart)
      const o = (function (e) {
        const { astFormat: t } = e
        if (!t) throw new Error('getPlugin() requires astFormat to be set')
        const n = e.plugins.find((e) => e.printers && e.printers[t])
        if (!n) throw new Error(`Couldn't find plugin for AST format "${t}"`)
        return n
      })(n)
      n.printer = o.printers[n.astFormat]
      const s = Object.fromEntries(
          r
            .filter(
              (e) => e.pluginDefaults && void 0 !== e.pluginDefaults[o.name]
            )
            .map((e) => [e.name, e.pluginDefaults[o.name]])
        ),
        a = Object.assign(Object.assign({}, i), s)
      for (const [e, t] of Object.entries(a))
        (null !== n[e] && void 0 !== n[e]) || (n[e] = t)
      return (
        'json' === n.parser && (n.trailingComma = 'none'),
        Jc.normalizeApiOptions(
          n,
          r,
          Object.assign({ passThrough: Object.keys(Ap) }, t)
        )
      )
    },
    hiddenDefaults: Ap,
    inferParser: vp
  }
  var xp = function e(t, n, r) {
      if (Array.isArray(t)) return t.map((t) => e(t, n, r)).filter(Boolean)
      if (!t || 'object' != typeof t) return t
      const i = n.printer.massageAstNode
      let u
      u = i && i.ignoredProperties ? i.ignoredProperties : new Set()
      const o = {}
      for (const [r, i] of Object.entries(t))
        u.has(r) || 'function' == typeof i || (o[r] = e(i, n, t))
      if (i) {
        const e = i(t, o, r)
        if (null === e) return
        if (e) return e
      }
      return o
    },
    Sp =
      'function' == typeof Object.create
        ? function (e, t) {
            ;(e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              }))
          }
        : function (e, t) {
            e.super_ = t
            var n = function () {}
            ;(n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e)
          }
  function wp(e, t) {
    var n = { seen: [], stylize: Bp }
    return (
      arguments.length >= 3 && (n.depth = arguments[2]),
      arguments.length >= 4 && (n.colors = arguments[3]),
      Op(t) ? (n.showHidden = t) : t && Up(n, t),
      jp(n.showHidden) && (n.showHidden = !1),
      jp(n.depth) && (n.depth = 2),
      jp(n.colors) && (n.colors = !1),
      jp(n.customInspect) && (n.customInspect = !0),
      n.colors && (n.stylize = Tp),
      Np(n, e, n.depth)
    )
  }
  function Tp(e, t) {
    var n = wp.styles[t]
    return n
      ? '\x1b[' + wp.colors[n][0] + 'm' + e + '\x1b[' + wp.colors[n][1] + 'm'
      : e
  }
  function Bp(e, t) {
    return e
  }
  function Np(e, t, n) {
    if (
      e.customInspect &&
      t &&
      Vp(t.inspect) &&
      t.inspect !== wp &&
      (!t.constructor || t.constructor.prototype !== t)
    ) {
      var r = t.inspect(n, e)
      return Lp(r) || (r = Np(e, r, n)), r
    }
    var i = (function (e, t) {
      if (jp(t)) return e.stylize('undefined', 'undefined')
      if (Lp(t)) {
        var n =
          "'" +
          JSON.stringify(t)
            .replace(/^"|"$/g, '')
            .replace(/'/g, "\\'")
            .replace(/\\"/g, '"') +
          "'"
        return e.stylize(n, 'string')
      }
      if (((r = t), 'number' == typeof r)) return e.stylize('' + t, 'number')
      var r
      if (Op(t)) return e.stylize('' + t, 'boolean')
      if (Ip(t)) return e.stylize('null', 'null')
    })(e, t)
    if (i) return i
    var u = Object.keys(t),
      o = (function (e) {
        var t = {}
        return (
          e.forEach(function (e, n) {
            t[e] = !0
          }),
          t
        )
      })(u)
    if (
      (e.showHidden && (u = Object.getOwnPropertyNames(t)),
      $p(t) && (u.indexOf('message') >= 0 || u.indexOf('description') >= 0))
    )
      return kp(t)
    if (0 === u.length) {
      if (Vp(t)) {
        var s = t.name ? ': ' + t.name : ''
        return e.stylize('[Function' + s + ']', 'special')
      }
      if (_p(t)) return e.stylize(RegExp.prototype.toString.call(t), 'regexp')
      if (Rp(t)) return e.stylize(Date.prototype.toString.call(t), 'date')
      if ($p(t)) return kp(t)
    }
    var a,
      c,
      l = '',
      p = !1,
      f = ['{', '}']
    ;((a = t), Array.isArray(a) && ((p = !0), (f = ['[', ']'])), Vp(t)) &&
      (l = ' [Function' + (t.name ? ': ' + t.name : '') + ']')
    return (
      _p(t) && (l = ' ' + RegExp.prototype.toString.call(t)),
      Rp(t) && (l = ' ' + Date.prototype.toUTCString.call(t)),
      $p(t) && (l = ' ' + kp(t)),
      0 !== u.length || (p && 0 != t.length)
        ? n < 0
          ? _p(t)
            ? e.stylize(RegExp.prototype.toString.call(t), 'regexp')
            : e.stylize('[Object]', 'special')
          : (e.seen.push(t),
            (c = p
              ? (function (e, t, n, r, i) {
                  for (var u = [], o = 0, s = t.length; o < s; ++o)
                    zp(t, String(o))
                      ? u.push(Pp(e, t, n, r, String(o), !0))
                      : u.push('')
                  return (
                    i.forEach(function (i) {
                      i.match(/^\d+$/) || u.push(Pp(e, t, n, r, i, !0))
                    }),
                    u
                  )
                })(e, t, n, o, u)
              : u.map(function (r) {
                  return Pp(e, t, n, o, r, p)
                })),
            e.seen.pop(),
            (function (e, t, n) {
              if (
                e.reduce(function (e, t) {
                  return (
                    t.indexOf('\n'),
                    e + t.replace(/\u001b\[\d\d?m/g, '').length + 1
                  )
                }, 0) > 60
              )
                return (
                  n[0] +
                  ('' === t ? '' : t + '\n ') +
                  ' ' +
                  e.join(',\n  ') +
                  ' ' +
                  n[1]
                )
              return n[0] + t + ' ' + e.join(', ') + ' ' + n[1]
            })(c, l, f))
        : f[0] + l + f[1]
    )
  }
  function kp(e) {
    return '[' + Error.prototype.toString.call(e) + ']'
  }
  function Pp(e, t, n, r, i, u) {
    var o, s, a
    if (
      ((a = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get
        ? (s = a.set
            ? e.stylize('[Getter/Setter]', 'special')
            : e.stylize('[Getter]', 'special'))
        : a.set && (s = e.stylize('[Setter]', 'special')),
      zp(r, i) || (o = '[' + i + ']'),
      s ||
        (e.seen.indexOf(a.value) < 0
          ? (s = Ip(n) ? Np(e, a.value, null) : Np(e, a.value, n - 1)).indexOf(
              '\n'
            ) > -1 &&
            (s = u
              ? s
                  .split('\n')
                  .map(function (e) {
                    return '  ' + e
                  })
                  .join('\n')
                  .substr(2)
              : '\n' +
                s
                  .split('\n')
                  .map(function (e) {
                    return '   ' + e
                  })
                  .join('\n'))
          : (s = e.stylize('[Circular]', 'special'))),
      jp(o))
    ) {
      if (u && i.match(/^\d+$/)) return s
      ;(o = JSON.stringify('' + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
        ? ((o = o.substr(1, o.length - 2)), (o = e.stylize(o, 'name')))
        : ((o = o
            .replace(/'/g, "\\'")
            .replace(/\\"/g, '"')
            .replace(/(^"|"$)/g, "'")),
          (o = e.stylize(o, 'string')))
    }
    return o + ': ' + s
  }
  function Op(e) {
    return 'boolean' == typeof e
  }
  function Ip(e) {
    return null === e
  }
  function Lp(e) {
    return 'string' == typeof e
  }
  function jp(e) {
    return void 0 === e
  }
  function _p(e) {
    return Mp(e) && '[object RegExp]' === qp(e)
  }
  function Mp(e) {
    return 'object' == typeof e && null !== e
  }
  function Rp(e) {
    return Mp(e) && '[object Date]' === qp(e)
  }
  function $p(e) {
    return Mp(e) && ('[object Error]' === qp(e) || e instanceof Error)
  }
  function Vp(e) {
    return 'function' == typeof e
  }
  function Wp(e) {
    return (
      null === e ||
      'boolean' == typeof e ||
      'number' == typeof e ||
      'string' == typeof e ||
      'symbol' == typeof e ||
      void 0 === e
    )
  }
  function qp(e) {
    return Object.prototype.toString.call(e)
  }
  function Up(e, t) {
    if (!t || !Mp(t)) return e
    for (var n = Object.keys(t), r = n.length; r--; ) e[n[r]] = t[n[r]]
    return e
  }
  function zp(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }
  function Gp(e, t) {
    if (e === t) return 0
    for (var n = e.length, r = t.length, i = 0, u = Math.min(n, r); i < u; ++i)
      if (e[i] !== t[i]) {
        ;(n = e[i]), (r = t[i])
        break
      }
    return n < r ? -1 : r < n ? 1 : 0
  }
  ;(wp.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  }),
    (wp.styles = {
      special: 'cyan',
      number: 'yellow',
      boolean: 'yellow',
      undefined: 'grey',
      null: 'bold',
      string: 'green',
      date: 'magenta',
      regexp: 'red'
    })
  var Hp,
    Jp = Object.prototype.hasOwnProperty,
    Xp =
      Object.keys ||
      function (e) {
        var t = []
        for (var n in e) Jp.call(e, n) && t.push(n)
        return t
      },
    Yp = Array.prototype.slice
  function Kp() {
    return void 0 !== Hp ? Hp : (Hp = 'foo' === function () {}.name)
  }
  function Qp(e) {
    return Object.prototype.toString.call(e)
  }
  function Zp(e) {
    return (
      !bo(e) &&
      'function' == typeof ir.ArrayBuffer &&
      ('function' == typeof ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : !!e &&
          (e instanceof DataView ||
            !!(e.buffer && e.buffer instanceof ArrayBuffer)))
    )
  }
  function ef(e, t) {
    e || sf(e, !0, t, '==', af)
  }
  var tf = /\s*function\s+([^\(\s]*)\s*/
  function nf(e) {
    if (Vp(e)) {
      if (Kp()) return e.name
      var t = e.toString().match(tf)
      return t && t[1]
    }
  }
  function rf(e) {
    ;(this.name = 'AssertionError'),
      (this.actual = e.actual),
      (this.expected = e.expected),
      (this.operator = e.operator),
      e.message
        ? ((this.message = e.message), (this.generatedMessage = !1))
        : ((this.message = (function (e) {
            return (
              uf(of(e.actual), 128) +
              ' ' +
              e.operator +
              ' ' +
              uf(of(e.expected), 128)
            )
          })(this)),
          (this.generatedMessage = !0))
    var t = e.stackStartFunction || sf
    if (Error.captureStackTrace) Error.captureStackTrace(this, t)
    else {
      var n = new Error()
      if (n.stack) {
        var r = n.stack,
          i = nf(t),
          u = r.indexOf('\n' + i)
        if (u >= 0) {
          var o = r.indexOf('\n', u + 1)
          r = r.substring(o + 1)
        }
        this.stack = r
      }
    }
  }
  function uf(e, t) {
    return 'string' == typeof e ? (e.length < t ? e : e.slice(0, t)) : e
  }
  function of(e) {
    if (Kp() || !Vp(e)) return wp(e)
    var t = nf(e)
    return '[Function' + (t ? ': ' + t : '') + ']'
  }
  function sf(e, t, n, r, i) {
    throw new rf({
      message: n,
      actual: e,
      expected: t,
      operator: r,
      stackStartFunction: i
    })
  }
  function af(e, t) {
    e || sf(e, !0, t, '==', af)
  }
  function cf(e, t, n) {
    e != t && sf(e, t, n, '==', cf)
  }
  function lf(e, t, n) {
    e == t && sf(e, t, n, '!=', lf)
  }
  function pf(e, t, n) {
    df(e, t, !1) || sf(e, t, n, 'deepEqual', pf)
  }
  function ff(e, t, n) {
    df(e, t, !0) || sf(e, t, n, 'deepStrictEqual', ff)
  }
  function df(e, t, n, r) {
    if (e === t) return !0
    if (bo(e) && bo(t)) return 0 === Gp(e, t)
    if (Rp(e) && Rp(t)) return e.getTime() === t.getTime()
    if (_p(e) && _p(t))
      return (
        e.source === t.source &&
        e.global === t.global &&
        e.multiline === t.multiline &&
        e.lastIndex === t.lastIndex &&
        e.ignoreCase === t.ignoreCase
      )
    if (
      (null !== e && 'object' == typeof e) ||
      (null !== t && 'object' == typeof t)
    ) {
      if (
        Zp(e) &&
        Zp(t) &&
        Qp(e) === Qp(t) &&
        !(e instanceof Float32Array || e instanceof Float64Array)
      )
        return 0 === Gp(new Uint8Array(e.buffer), new Uint8Array(t.buffer))
      if (bo(e) !== bo(t)) return !1
      var i = (r = r || { actual: [], expected: [] }).actual.indexOf(e)
      return (
        (-1 !== i && i === r.expected.indexOf(t)) ||
        (r.actual.push(e),
        r.expected.push(t),
        (function (e, t, n, r) {
          if (null == e || null == t) return !1
          if (Wp(e) || Wp(t)) return e === t
          if (n && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t))
            return !1
          var i = hf(e),
            u = hf(t)
          if ((i && !u) || (!i && u)) return !1
          if (i) return df((e = Yp.call(e)), (t = Yp.call(t)), n)
          var o,
            s,
            a = Xp(e),
            c = Xp(t)
          if (a.length !== c.length) return !1
          for (a.sort(), c.sort(), s = a.length - 1; s >= 0; s--)
            if (a[s] !== c[s]) return !1
          for (s = a.length - 1; s >= 0; s--)
            if (!df(e[(o = a[s])], t[o], n, r)) return !1
          return !0
        })(e, t, n, r))
      )
    }
    return n ? e === t : e == t
  }
  function hf(e) {
    return '[object Arguments]' == Object.prototype.toString.call(e)
  }
  function gf(e, t, n) {
    df(e, t, !1) && sf(e, t, n, 'notDeepEqual', gf)
  }
  function mf(e, t, n) {
    df(e, t, !0) && sf(e, t, n, 'notDeepStrictEqual', mf)
  }
  function yf(e, t, n) {
    e !== t && sf(e, t, n, '===', yf)
  }
  function Df(e, t, n) {
    e === t && sf(e, t, n, '!==', Df)
  }
  function Ef(e, t) {
    if (!e || !t) return !1
    if ('[object RegExp]' == Object.prototype.toString.call(t)) return t.test(e)
    try {
      if (e instanceof t) return !0
    } catch (e) {}
    return !Error.isPrototypeOf(t) && !0 === t.call({}, e)
  }
  function Cf(e, t, n, r) {
    var i
    if ('function' != typeof t)
      throw new TypeError('"block" argument must be a function')
    'string' == typeof n && ((r = n), (n = null)),
      (i = (function (e) {
        var t
        try {
          e()
        } catch (e) {
          t = e
        }
        return t
      })(t)),
      (r = (n && n.name ? ' (' + n.name + ').' : '.') + (r ? ' ' + r : '.')),
      e && !i && sf(i, n, 'Missing expected exception' + r)
    var u = 'string' == typeof r,
      o = !e && i && !n
    if (
      (((!e && $p(i) && u && Ef(i, n)) || o) &&
        sf(i, n, 'Got unwanted exception' + r),
      (e && i && n && !Ef(i, n)) || (!e && i))
    )
      throw i
  }
  function bf(e, t, n) {
    Cf(!0, e, t, n)
  }
  function Af(e, t, n) {
    Cf(!1, e, t, n)
  }
  function vf(e) {
    if (e) throw e
  }
  ;(ef.AssertionError = rf),
    Sp(rf, Error),
    (ef.fail = sf),
    (ef.ok = af),
    (ef.equal = cf),
    (ef.notEqual = lf),
    (ef.deepEqual = pf),
    (ef.deepStrictEqual = ff),
    (ef.notDeepEqual = gf),
    (ef.notDeepStrictEqual = mf),
    (ef.strictEqual = yf),
    (ef.notStrictEqual = Df),
    (ef.throws = bf),
    (ef.doesNotThrow = Af),
    (ef.ifError = vf)
  var Ff = n(
    Object.freeze({
      __proto__: null,
      default: ef,
      AssertionError: rf,
      fail: sf,
      ok: af,
      assert: af,
      equal: cf,
      notEqual: lf,
      deepEqual: pf,
      deepStrictEqual: ff,
      notDeepEqual: gf,
      notDeepStrictEqual: mf,
      strictEqual: yf,
      notStrictEqual: Df,
      throws: bf,
      doesNotThrow: Af,
      ifError: vf
    })
  )
  const {
      builders: {
        line: xf,
        hardline: Sf,
        breakParent: wf,
        indent: Tf,
        lineSuffix: Bf,
        join: Nf,
        cursor: kf
      }
    } = su,
    {
      hasNewline: Pf,
      skipNewline: Of,
      skipSpaces: If,
      isPreviousLineEmpty: Lf,
      addLeadingComment: jf,
      addDanglingComment: _f,
      addTrailingComment: Mf
    } = Fi,
    Rf = new WeakMap()
  function $f(e, t, n) {
    if (!e) return
    const { printer: r, locStart: i, locEnd: u } = t
    if (n) {
      if (r.canAttachComment && r.canAttachComment(e)) {
        let t
        for (
          t = n.length - 1;
          t >= 0 && !(i(n[t]) <= i(e) && u(n[t]) <= u(e));
          --t
        );
        return void n.splice(t + 1, 0, e)
      }
    } else if (Rf.has(e)) return Rf.get(e)
    const o =
      (r.getCommentChildNodes && r.getCommentChildNodes(e, t)) ||
      ('object' == typeof e &&
        Object.entries(e)
          .filter(
            ([e]) =>
              'enclosingNode' !== e &&
              'precedingNode' !== e &&
              'followingNode' !== e &&
              'tokens' !== e &&
              'comments' !== e
          )
          .map(([, e]) => e))
    if (o) {
      n || ((n = []), Rf.set(e, n))
      for (const e of o) $f(e, t, n)
      return n
    }
  }
  function Vf(e, t, n, r) {
    const { locStart: i, locEnd: u } = n,
      o = i(t),
      s = u(t),
      a = $f(e, n)
    let c,
      l,
      p = 0,
      f = a.length
    for (; p < f; ) {
      const e = (p + f) >> 1,
        r = a[e],
        d = i(r),
        h = u(r)
      if (d <= o && s <= h) return Vf(r, t, n, r)
      if (h <= o) (c = r), (p = e + 1)
      else {
        if (!(s <= d))
          throw new Error('Comment location overlaps with node location')
        ;(l = r), (f = e)
      }
    }
    if (r && 'TemplateLiteral' === r.type) {
      const { quasis: e } = r,
        i = Jf(e, t, n)
      c && Jf(e, c, n) !== i && (c = null), l && Jf(e, l, n) !== i && (l = null)
    }
    return { enclosingNode: r, precedingNode: c, followingNode: l }
  }
  const Wf = () => !1
  const qf = (e) => !/[\S\n\u2028\u2029]/.test(e)
  function Uf(e, t, n, r) {
    const { comment: i, precedingNode: u } = n[r],
      { locStart: o, locEnd: s } = t
    let a = o(i)
    if (u)
      for (let t = r - 1; t >= 0; t--) {
        const { comment: r, precedingNode: i } = n[t]
        if (i !== u || !qf(e.slice(s(r), a))) break
        a = o(r)
      }
    return Pf(e, a, { backwards: !0 })
  }
  function zf(e, t, n, r) {
    const { comment: i, followingNode: u } = n[r],
      { locStart: o, locEnd: s } = t
    let a = s(i)
    if (u)
      for (let t = r + 1; t < n.length; t++) {
        const { comment: r, followingNode: i } = n[t]
        if (i !== u || !qf(e.slice(a, o(r)))) break
        a = s(r)
      }
    return Pf(e, a)
  }
  function Gf(e, t, n) {
    const r = e.length
    if (0 === r) return
    const { precedingNode: i, followingNode: u, enclosingNode: o } = e[0],
      s = (n.printer.getGapRegex && n.printer.getGapRegex(o)) || /^[\s(]*$/
    let a,
      c = n.locStart(u)
    for (a = r; a > 0; --a) {
      const { comment: r, precedingNode: o, followingNode: l } = e[a - 1]
      Ff.strictEqual(o, i), Ff.strictEqual(l, u)
      const p = t.slice(n.locEnd(r), c)
      if (!s.test(p)) break
      c = n.locStart(r)
    }
    for (const [t, { comment: n }] of e.entries()) t < a ? Mf(i, n) : jf(u, n)
    for (const e of [i, u])
      e.comments &&
        e.comments.length > 1 &&
        e.comments.sort((e, t) => n.locStart(e) - n.locStart(t))
    e.length = 0
  }
  function Hf(e, t) {
    return (e.getValue().printed = !0), t.printer.printComment(e, t)
  }
  function Jf(e, t, n) {
    const r = n.locStart(t) - 1
    for (let t = 1; t < e.length; ++t) if (r < n.locStart(e[t])) return t - 1
    return 0
  }
  function Xf(e, t, n) {
    const r = e.getValue()
    if (!r) return {}
    let i = r.comments || []
    n && (i = i.filter((e) => !n.has(e)))
    const u = r === t.cursorNode
    if (0 === i.length) {
      const e = u ? kf : ''
      return { leading: e, trailing: e }
    }
    const o = [],
      s = []
    return (
      e.each(() => {
        const r = e.getValue()
        if (n && n.has(r)) return
        const { leading: i, trailing: u } = r
        i
          ? o.push(
              (function (e, t) {
                const n = e.getValue(),
                  r = [Hf(e, t)],
                  { printer: i, originalText: u, locStart: o, locEnd: s } = t
                if (i.isBlockComment && i.isBlockComment(n)) {
                  const e = Pf(u, s(n))
                    ? Pf(u, o(n), { backwards: !0 })
                      ? Sf
                      : xf
                    : ' '
                  r.push(e)
                } else r.push(Sf)
                const a = Of(u, If(u, s(n)))
                return !1 !== a && Pf(u, a) && r.push(Sf), r
              })(e, t)
            )
          : u &&
            s.push(
              (function (e, t) {
                const n = e.getValue(),
                  r = Hf(e, t),
                  { printer: i, originalText: u, locStart: o } = t,
                  s = i.isBlockComment && i.isBlockComment(n)
                if (Pf(u, o(n), { backwards: !0 })) {
                  const e = Lf(u, n, o)
                  return Bf([Sf, e ? Sf : '', r])
                }
                let a = [' ', r]
                return s || (a = [Bf(a), wf]), a
              })(e, t)
            )
      }, 'comments'),
      u && (o.unshift(kf), s.push(kf)),
      { leading: o, trailing: s }
    )
  }
  var Yf = {
    attach: function (e, t, n, r) {
      if (!Array.isArray(e)) return
      const i = [],
        {
          locStart: u,
          locEnd: o,
          printer: { handleComments: s = {} }
        } = r,
        {
          avoidAstMutation: a,
          ownLine: c = Wf,
          endOfLine: l = Wf,
          remaining: p = Wf
        } = s,
        f = e.map((i, u) =>
          Object.assign(
            Object.assign({}, Vf(t, i, r)),
            {},
            {
              comment: i,
              text: n,
              options: r,
              ast: t,
              isLastComment: e.length - 1 === u
            }
          )
        )
      for (const [e, t] of f.entries()) {
        const {
          comment: n,
          precedingNode: r,
          enclosingNode: s,
          followingNode: d,
          text: h,
          options: g,
          ast: m,
          isLastComment: y
        } = t
        if (
          'json' === g.parser ||
          'json5' === g.parser ||
          '__js_expression' === g.parser ||
          '__vue_expression' === g.parser
        ) {
          if (u(n) - u(m) <= 0) {
            jf(m, n)
            continue
          }
          if (o(n) - o(m) >= 0) {
            Mf(m, n)
            continue
          }
        }
        let D
        if (
          (a
            ? (D = [t])
            : ((n.enclosingNode = s),
              (n.precedingNode = r),
              (n.followingNode = d),
              (D = [n, h, g, m, y])),
          Uf(h, g, f, e))
        )
          (n.placement = 'ownLine'),
            c(...D) || (d ? jf(d, n) : r ? Mf(r, n) : _f(s || m, n))
        else if (zf(h, g, f, e))
          (n.placement = 'endOfLine'),
            l(...D) || (r ? Mf(r, n) : d ? jf(d, n) : _f(s || m, n))
        else if (((n.placement = 'remaining'), p(...D)));
        else if (r && d) {
          const e = i.length
          if (e > 0) {
            i[e - 1].followingNode !== d && Gf(i, h, g)
          }
          i.push(t)
        } else r ? Mf(r, n) : d ? jf(d, n) : _f(s || m, n)
      }
      if ((Gf(i, n, r), !a))
        for (const t of e)
          delete t.precedingNode, delete t.enclosingNode, delete t.followingNode
    },
    printComments: function (e, t, n, r) {
      const { leading: i, trailing: u } = Xf(e, n, r)
      return i || u ? [i, t, u] : t
    },
    printCommentsSeparately: Xf,
    printDanglingComments: function (e, t, n, r) {
      const i = [],
        u = e.getValue()
      return u && u.comments
        ? (e.each(() => {
            const n = e.getValue()
            n.leading || n.trailing || (r && !r(n)) || i.push(Hf(e, t))
          }, 'comments'),
          0 === i.length ? '' : n ? Nf(Sf, i) : Tf([Sf, Nf(Sf, i)]))
        : ''
    },
    getSortedChildNodes: $f,
    ensureAllCommentsPrinted: function (e) {
      if (e)
        for (const t of e) {
          if (!t.printed)
            throw new Error(
              'Comment "' +
                t.value.trim() +
                '" was not printed. Please report this error!'
            )
          delete t.printed
        }
    }
  }
  function Kf(e, t) {
    const n = Qf(e.stack, t)
    return -1 === n ? null : e.stack[n]
  }
  function Qf(e, t) {
    for (let n = e.length - 1; n >= 0; n -= 2) {
      const r = e[n]
      if (r && !Array.isArray(r) && --t < 0) return n
    }
    return -1
  }
  var Zf = class {
    constructor(e) {
      this.stack = [e]
    }
    getName() {
      const { stack: e } = this,
        { length: t } = e
      return t > 1 ? e[t - 2] : null
    }
    getValue() {
      return _n(this.stack)
    }
    getNode(e = 0) {
      return Kf(this, e)
    }
    getParentNode(e = 0) {
      return Kf(this, e + 1)
    }
    call(e, ...t) {
      const { stack: n } = this,
        { length: r } = n
      let i = _n(n)
      for (const e of t) (i = i[e]), n.push(e, i)
      const u = e(this)
      return (n.length = r), u
    }
    callParent(e, t = 0) {
      const n = Qf(this.stack, t + 1),
        r = this.stack.splice(n + 1),
        i = e(this)
      return this.stack.push(...r), i
    }
    each(e, ...t) {
      const { stack: n } = this,
        { length: r } = n
      let i = _n(n)
      for (const e of t) (i = i[e]), n.push(e, i)
      for (let t = 0; t < i.length; ++t)
        n.push(t, i[t]), e(this, t, i), (n.length -= 2)
      n.length = r
    }
    map(e, ...t) {
      const n = []
      return (
        this.each((t, r, i) => {
          n[r] = e(t, r, i)
        }, ...t),
        n
      )
    }
    try(e) {
      const { stack: t } = this,
        n = [...t]
      try {
        return e()
      } finally {
        ;(t.length = 0), t.push(...n)
      }
    }
    match(...e) {
      let t = this.stack.length - 1,
        n = null,
        r = this.stack[t--]
      for (const i of e) {
        if (void 0 === r) return !1
        let e = null
        if (
          ('number' == typeof n &&
            ((e = n), (n = this.stack[t--]), (r = this.stack[t--])),
          i && !i(r, n, e))
        )
          return !1
        ;(n = this.stack[t--]), (r = this.stack[t--])
      }
      return !0
    }
    findAncestor(e) {
      let t = this.stack.length - 1,
        n = null,
        r = this.stack[t--]
      for (; r; ) {
        let i = null
        if (
          ('number' == typeof n &&
            ((i = n), (n = this.stack[t--]), (r = this.stack[t--])),
          null !== n && e(r, n, i))
        )
          return r
        ;(n = this.stack[t--]), (r = this.stack[t--])
      }
    }
  }
  const {
      utils: { stripTrailingHardline: ed }
    } = su,
    { normalize: td } = Fp
  var nd = {
    printSubtree: function (e, t, n, r) {
      if (n.printer.embed && 'auto' === n.embeddedLanguageFormatting)
        return n.printer.embed(
          e,
          t,
          (e, t, i) =>
            (function (e, t, n, r, { stripTrailingHardline: i = !1 } = {}) {
              const u = td(
                  Object.assign(
                    Object.assign(Object.assign({}, n), t),
                    {},
                    { parentParser: n.parser, originalText: e }
                  ),
                  { passThrough: !0 }
                ),
                o = Dp.parse(e, u),
                { ast: s } = o
              e = o.text
              const a = s.comments
              delete s.comments,
                Yf.attach(a, s, e, u),
                (u[Symbol.for('comments')] = a || []),
                (u[Symbol.for('tokens')] = s.tokens || [])
              const c = r(s, u)
              if ((Yf.ensureAllCommentsPrinted(a), i))
                return 'string' == typeof c
                  ? c.replace(/(?:\r?\n)*$/, '')
                  : ed(c)
              return c
            })(e, t, n, r, i),
          n
        )
    }
  }
  const {
      builders: { hardline: rd, addAlignmentToDoc: id },
      utils: { propagateBreaks: ud }
    } = su,
    { printComments: od } = Yf
  function sd(e, n, r = 0) {
    const { printer: i } = n
    i.preprocess && (e = i.preprocess(e, n))
    const u = new Map(),
      o = new Zf(e)
    let s = a()
    return r > 0 && (s = id([rd, s], r, n.tabWidth)), ud(s), s
    function a(e, t) {
      return void 0 === e || e === o
        ? c(t)
        : Array.isArray(e)
        ? o.call(() => c(t), ...e)
        : o.call(() => c(t), e)
    }
    function c(e) {
      const r = o.getValue(),
        i = r && 'object' == typeof r && void 0 === e
      if (i && u.has(r)) return u.get(r)
      const s = (function (e, n, r, i) {
        const u = e.getValue(),
          { printer: o } = n
        let s, a
        if (o.hasPrettierIgnore && o.hasPrettierIgnore(e))
          ({ doc: s, printedComments: a } = (function (e, t) {
            const {
                originalText: n,
                [Symbol.for('comments')]: r,
                locStart: i,
                locEnd: u
              } = t,
              o = i(e),
              s = u(e),
              a = new Set()
            for (const e of r)
              i(e) >= o && u(e) <= s && ((e.printed = !0), a.add(e))
            return { doc: n.slice(o, s), printedComments: a }
          })(u, n))
        else {
          if (u)
            try {
              s = nd.printSubtree(e, r, n, sd)
            } catch (e) {
              if (t.PRETTIER_DEBUG) throw e
            }
          s || (s = o.print(e, n, r, i))
        }
        ;(o.willPrintOwnComments && o.willPrintOwnComments(e, n)) ||
          (s = od(e, s, n, a))
        return s
      })(o, n, a, e)
      return i && u.set(r, s), s
    }
  }
  var ad = sd
  function cd(e) {
    let t = e.length - 1
    for (;;) {
      const n = e[t]
      if (!n || ('Program' !== n.type && 'File' !== n.type)) break
      t--
    }
    return e.slice(0, t + 1)
  }
  function ld(e, t, n, r, i = [], u) {
    const { locStart: o, locEnd: s } = n,
      a = o(e),
      c = s(e)
    if (
      !(
        t > c ||
        t < a ||
        ('rangeEnd' === u && t === a) ||
        ('rangeStart' === u && t === c)
      )
    ) {
      for (const o of Yf.getSortedChildNodes(e, n)) {
        const s = ld(o, t, n, r, [e, ...i], u)
        if (s) return s
      }
      return !r || r(e, i[0]) ? { node: e, parentNodes: i } : void 0
    }
  }
  const pd = new Set([
      'ObjectExpression',
      'ArrayExpression',
      'StringLiteral',
      'NumericLiteral',
      'BooleanLiteral',
      'NullLiteral',
      'UnaryExpression',
      'TemplateLiteral'
    ]),
    fd = new Set([
      'OperationDefinition',
      'FragmentDefinition',
      'VariableDefinition',
      'TypeExtensionDefinition',
      'ObjectTypeDefinition',
      'FieldDefinition',
      'DirectiveDefinition',
      'EnumTypeDefinition',
      'EnumValueDefinition',
      'InputValueDefinition',
      'InputObjectTypeDefinition',
      'SchemaDefinition',
      'OperationTypeDefinition',
      'InterfaceTypeDefinition',
      'UnionTypeDefinition',
      'ScalarTypeDefinition'
    ])
  function dd(e, t, n) {
    if (!t) return !1
    switch (e.parser) {
      case 'flow':
      case 'babel':
      case 'babel-flow':
      case 'babel-ts':
      case 'typescript':
      case 'espree':
      case 'meriyah':
      case '__babel_estree':
        return (function (e, t) {
          return (
            'DeclareExportDeclaration' !== t &&
            'TypeParameterDeclaration' !== e &&
            ('Directive' === e ||
              'TypeAlias' === e ||
              'TSExportAssignment' === e ||
              e.startsWith('Declare') ||
              e.startsWith('TSDeclare') ||
              e.endsWith('Statement') ||
              e.endsWith('Declaration'))
          )
        })(t.type, n && n.type)
      case 'json':
      case 'json5':
      case 'json-stringify':
        return pd.has(t.type)
      case 'graphql':
        return fd.has(t.kind)
      case 'vue':
        return 'root' !== t.tag
    }
    return !1
  }
  var hd = {
    calculateRange: function (e, t, n) {
      let { rangeStart: r, rangeEnd: i, locStart: u, locEnd: o } = t
      Ff.ok(i > r)
      const s = e.slice(r, i).search(/\S/),
        a = -1 === s
      if (!a) for (r += s; i > r && !/\S/.test(e[i - 1]); --i);
      const c = ld(n, r, t, (e, n) => dd(t, e, n), [], 'rangeStart'),
        l = a ? c : ld(n, i, t, (e) => dd(t, e), [], 'rangeEnd')
      if (!c || !l) return { rangeStart: 0, rangeEnd: 0 }
      let p, f
      if (
        (({ parser: e }) =>
          'json' === e || 'json5' === e || 'json-stringify' === e)(t)
      ) {
        const e = (function (e, t) {
          const n = [e.node, ...e.parentNodes],
            r = new Set([t.node, ...t.parentNodes])
          return n.find((e) => pd.has(e.type) && r.has(e))
        })(c, l)
        ;(p = e), (f = e)
      } else
        ({ startNode: p, endNode: f } = (function (
          e,
          t,
          { locStart: n, locEnd: r }
        ) {
          let i = e.node,
            u = t.node
          if (i === u) return { startNode: i, endNode: u }
          const o = n(e.node)
          for (const e of cd(t.parentNodes)) {
            if (!(n(e) >= o)) break
            u = e
          }
          const s = r(t.node)
          for (const t of cd(e.parentNodes)) {
            if (!(r(t) <= s)) break
            i = t
          }
          return { startNode: i, endNode: u }
        })(c, l, t))
      return {
        rangeStart: Math.min(u(p), u(f)),
        rangeEnd: Math.max(o(p), o(f))
      }
    },
    findNodeAtOffset: ld
  }
  const {
      printer: { printDocToString: gd },
      debug: { printDocToDebug: md }
    } = su,
    { getAlignmentSize: yd } = Fi,
    {
      guessEndOfLine: Dd,
      convertEndOfLineToChars: Ed,
      countEndOfLineChars: Cd,
      normalizeEndOfLine: bd
    } = xi,
    Ad = Fp.normalize,
    vd = Symbol('cursor')
  function Fd(e, t, n) {
    const r = t.comments
    return (
      r && (delete t.comments, Yf.attach(r, t, e, n)),
      (n[Symbol.for('comments')] = r || []),
      (n[Symbol.for('tokens')] = t.tokens || []),
      (n.originalText = e),
      r
    )
  }
  function xd(e, t, n = 0) {
    if (!e || 0 === e.trim().length)
      return { formatted: '', cursorOffset: -1, comments: [] }
    const { ast: r, text: i } = Dp.parse(e, t)
    if (t.cursorOffset >= 0) {
      const e = hd.findNodeAtOffset(r, t.cursorOffset, t)
      e && e.node && (t.cursorNode = e.node)
    }
    const u = Fd(i, r, t),
      o = ad(r, t, n),
      s = gd(o, t)
    if ((Yf.ensureAllCommentsPrinted(u), n > 0)) {
      const e = s.formatted.trim()
      void 0 !== s.cursorNodeStart &&
        (s.cursorNodeStart -= s.formatted.indexOf(e)),
        (s.formatted = e + Ed(t.endOfLine))
    }
    if (t.cursorOffset >= 0) {
      let e, n, r, o, a
      if (
        (t.cursorNode && s.cursorNodeText
          ? ((e = t.locStart(t.cursorNode)),
            (n = i.slice(e, t.locEnd(t.cursorNode))),
            (r = t.cursorOffset - e),
            (o = s.cursorNodeStart),
            (a = s.cursorNodeText))
          : ((e = 0),
            (n = i),
            (r = t.cursorOffset),
            (o = 0),
            (a = s.formatted)),
        n === a)
      )
        return { formatted: s.formatted, cursorOffset: o + r, comments: u }
      const c = [...n]
      c.splice(r, 0, vd)
      const l = [...a],
        p = Dn.diffArrays(c, l)
      let f = o
      for (const e of p)
        if (e.removed) {
          if (e.value.includes(vd)) break
        } else f += e.count
      return { formatted: s.formatted, cursorOffset: f, comments: u }
    }
    return { formatted: s.formatted, cursorOffset: -1, comments: u }
  }
  function Sd(e, t, n) {
    return 'number' != typeof t || Number.isNaN(t) || t < 0 || t > e.length
      ? n
      : t
  }
  function wd(e, t) {
    let { cursorOffset: n, rangeStart: r, rangeEnd: i } = t
    return (
      (n = Sd(e, n, -1)),
      (r = Sd(e, r, 0)),
      (i = Sd(e, i, e.length)),
      Object.assign(
        Object.assign({}, t),
        {},
        { cursorOffset: n, rangeStart: r, rangeEnd: i }
      )
    )
  }
  function Td(e, t) {
    let { cursorOffset: n, rangeStart: r, rangeEnd: i, endOfLine: u } = wd(e, t)
    const o = '\ufeff' === e.charAt(0)
    if (
      (o && ((e = e.slice(1)), n--, r--, i--),
      'auto' === u && (u = Dd(e)),
      e.includes('\r'))
    ) {
      const t = (t) => Cd(e.slice(0, Math.max(t, 0)), '\r\n')
      ;(n -= t(n)), (r -= t(r)), (i -= t(i)), (e = bd(e))
    }
    return {
      hasBOM: o,
      text: e,
      options: wd(
        e,
        Object.assign(
          Object.assign({}, t),
          {},
          { cursorOffset: n, rangeStart: r, rangeEnd: i, endOfLine: u }
        )
      )
    }
  }
  function Bd(e, t) {
    const n = Dp.resolveParser(t)
    return !n.hasPragma || n.hasPragma(e)
  }
  function Nd(e, t) {
    let n,
      { hasBOM: r, text: i, options: u } = Td(e, Ad(t))
    return (u.rangeStart >= u.rangeEnd && '' !== i) ||
      (u.requirePragma && !Bd(i, u))
      ? { formatted: e, cursorOffset: t.cursorOffset, comments: [] }
      : (u.rangeStart > 0 || u.rangeEnd < i.length
          ? (n = (function (e, t) {
              const { ast: n, text: r } = Dp.parse(e, t),
                { rangeStart: i, rangeEnd: u } = hd.calculateRange(r, t, n),
                o = r.slice(i, u),
                s = Math.min(i, r.lastIndexOf('\n', i) + 1),
                a = r.slice(s, i).match(/^\s*/)[0],
                c = yd(a, t.tabWidth),
                l = xd(
                  o,
                  Object.assign(
                    Object.assign({}, t),
                    {},
                    {
                      rangeStart: 0,
                      rangeEnd: Number.POSITIVE_INFINITY,
                      cursorOffset:
                        t.cursorOffset > i && t.cursorOffset <= u
                          ? t.cursorOffset - i
                          : -1,
                      endOfLine: 'lf'
                    }
                  ),
                  c
                ),
                p = l.formatted.trimEnd()
              let { cursorOffset: f } = t
              f > u
                ? (f += p.length - o.length)
                : l.cursorOffset >= 0 && (f = l.cursorOffset + i)
              let d = r.slice(0, i) + p + r.slice(u)
              if ('lf' !== t.endOfLine) {
                const e = Ed(t.endOfLine)
                f >= 0 && '\r\n' === e && (f += Cd(d.slice(0, f), '\n')),
                  (d = d.replace(/\n/g, e))
              }
              return { formatted: d, cursorOffset: f, comments: l.comments }
            })(i, u))
          : (!u.requirePragma &&
              u.insertPragma &&
              u.printer.insertPragma &&
              !Bd(i, u) &&
              (i = u.printer.insertPragma(i)),
            (n = xd(i, u))),
        r &&
          ((n.formatted = '\ufeff' + n.formatted),
          n.cursorOffset >= 0 && n.cursorOffset++),
        n)
  }
  var kd = {
    formatWithCursor: Nd,
    parse(e, t, n) {
      const { text: r, options: i } = Td(e, Ad(t)),
        u = Dp.parse(r, i)
      return n && (u.ast = xp(u.ast, i)), u
    },
    formatAST(e, t) {
      t = Ad(t)
      const n = ad(e, t)
      return gd(n, t)
    },
    formatDoc: (e, t) =>
      Nd(
        md(e),
        Object.assign(Object.assign({}, t), {}, { parser: '__js_expression' })
      ).formatted,
    printToDoc(e, t) {
      t = Ad(t)
      const { ast: n, text: r } = Dp.parse(e, t)
      return Fd(r, n, t), ad(n, t)
    },
    printDocToString: (e, t) => gd(e, Ad(t))
  }
  const {
    getMaxContinuousCount: Pd,
    getStringWidth: Od,
    getAlignmentSize: Id,
    getIndentSize: Ld,
    skip: jd,
    skipWhitespace: _d,
    skipSpaces: Md,
    skipNewline: Rd,
    skipToLineEnd: $d,
    skipEverythingButNewLine: Vd,
    skipInlineComment: Wd,
    skipTrailingComment: qd,
    hasNewline: Ud,
    hasNewlineInRange: zd,
    hasSpaces: Gd,
    isNextLineEmpty: Hd,
    isNextLineEmptyAfterIndex: Jd,
    isPreviousLineEmpty: Xd,
    getNextNonSpaceNonCommentCharacterIndex: Yd,
    makeString: Kd,
    addLeadingComment: Qd,
    addDanglingComment: Zd,
    addTrailingComment: eh
  } = Fi
  var th = {
    getMaxContinuousCount: Pd,
    getStringWidth: Od,
    getAlignmentSize: Id,
    getIndentSize: Ld,
    skip: jd,
    skipWhitespace: _d,
    skipSpaces: Md,
    skipNewline: Rd,
    skipToLineEnd: $d,
    skipEverythingButNewLine: Vd,
    skipInlineComment: Wd,
    skipTrailingComment: qd,
    hasNewline: Ud,
    hasNewlineInRange: zd,
    hasSpaces: Gd,
    isNextLineEmpty: Hd,
    isNextLineEmptyAfterIndex: Jd,
    isPreviousLineEmpty: Xd,
    getNextNonSpaceNonCommentCharacterIndex: Yd,
    makeString: Kd,
    addLeadingComment: Qd,
    addDanglingComment: Zd,
    addTrailingComment: eh
  }
  const nh = ['languageId']
  var rh = function (e, t) {
      const { languageId: n } = e,
        r = Mn(e, nh)
      return Object.assign(Object.assign({ linguistLanguageId: n }, r), t(e))
    },
    ih = r(function (e) {
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
        function n(e) {
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
              t = n(t)
            } while (t)
            return !1
          },
          trailingStatement: n
        }
      })()
    }),
    uh = r(function (e) {
      !(function () {
        var t, n, r, i, u, o
        function s(e) {
          return e <= 65535
            ? String.fromCharCode(e)
            : String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296) +
                String.fromCharCode(((e - 65536) % 1024) + 56320)
        }
        for (
          n = {
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
            o = 0;
          o < 128;
          ++o
        )
          i[o] =
            (o >= 97 && o <= 122) ||
            (o >= 65 && o <= 90) ||
            36 === o ||
            95 === o
        for (u = new Array(128), o = 0; o < 128; ++o)
          u[o] =
            (o >= 97 && o <= 122) ||
            (o >= 65 && o <= 90) ||
            (o >= 48 && o <= 57) ||
            36 === o ||
            95 === o
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
            return e < 128 ? i[e] : n.NonAsciiIdentifierStart.test(s(e))
          },
          isIdentifierPartES5: function (e) {
            return e < 128 ? u[e] : n.NonAsciiIdentifierPart.test(s(e))
          },
          isIdentifierStartES6: function (e) {
            return e < 128 ? i[e] : t.NonAsciiIdentifierStart.test(s(e))
          },
          isIdentifierPartES6: function (e) {
            return e < 128 ? u[e] : t.NonAsciiIdentifierPart.test(s(e))
          }
        }
      })()
    }),
    oh = r(function (e) {
      !(function () {
        var t = uh
        function n(e, t) {
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
          return 'null' === e || 'true' === e || 'false' === e || n(e, t)
        }
        function u(e, t) {
          return 'null' === e || 'true' === e || 'false' === e || r(e, t)
        }
        function o(e) {
          var n, r, i
          if (0 === e.length) return !1
          if (((i = e.charCodeAt(0)), !t.isIdentifierStartES5(i))) return !1
          for (n = 1, r = e.length; n < r; ++n)
            if (((i = e.charCodeAt(n)), !t.isIdentifierPartES5(i))) return !1
          return !0
        }
        function s(e) {
          var n, r, i, u, o
          if (0 === e.length) return !1
          for (o = t.isIdentifierStartES6, n = 0, r = e.length; n < r; ++n) {
            if (55296 <= (i = e.charCodeAt(n)) && i <= 56319) {
              if (++n >= r) return !1
              if (!(56320 <= (u = e.charCodeAt(n)) && u <= 57343)) return !1
              i = 1024 * (i - 55296) + (u - 56320) + 65536
            }
            if (!o(i)) return !1
            o = t.isIdentifierPartES6
          }
          return !0
        }
        e.exports = {
          isKeywordES5: n,
          isKeywordES6: r,
          isReservedWordES5: i,
          isReservedWordES6: u,
          isRestrictedWord: function (e) {
            return 'eval' === e || 'arguments' === e
          },
          isIdentifierNameES5: o,
          isIdentifierNameES6: s,
          isIdentifierES5: function (e, t) {
            return o(e) && !i(e, t)
          },
          isIdentifierES6: function (e, t) {
            return s(e) && !u(e, t)
          }
        }
      })()
    })
  const sh = r(function (e, t) {
      ;(t.ast = ih), (t.code = uh), (t.keyword = oh)
    }).keyword.isIdentifierNameES5,
    {
      getLast: ah,
      hasNewline: ch,
      skipWhitespace: lh,
      isNonEmptyArray: ph,
      isNextLineEmptyAfterIndex: fh,
      getStringWidth: dh
    } = Fi,
    { locStart: hh, locEnd: gh, hasSameLocStart: mh } = Zc,
    yh = new RegExp('^(?:(?=.)\\s)*:'),
    Dh = new RegExp('^(?:(?=.)\\s)*::')
  function Eh(e) {
    return (
      'Block' === e.type || 'CommentBlock' === e.type || 'MultiLine' === e.type
    )
  }
  function Ch(e) {
    return (
      'Line' === e.type ||
      'CommentLine' === e.type ||
      'SingleLine' === e.type ||
      'HashbangComment' === e.type ||
      'HTMLOpen' === e.type ||
      'HTMLClose' === e.type
    )
  }
  const bh = new Set([
    'ExportDefaultDeclaration',
    'ExportDefaultSpecifier',
    'DeclareExportDeclaration',
    'ExportNamedDeclaration',
    'ExportAllDeclaration'
  ])
  function Ah(e) {
    return e && bh.has(e.type)
  }
  function vh(e) {
    return (
      'NumericLiteral' === e.type ||
      ('Literal' === e.type && 'number' == typeof e.value)
    )
  }
  function Fh(e) {
    return (
      'StringLiteral' === e.type ||
      ('Literal' === e.type && 'string' == typeof e.value)
    )
  }
  function xh(e) {
    return (
      'FunctionExpression' === e.type || 'ArrowFunctionExpression' === e.type
    )
  }
  function Sh(e) {
    return (
      Oh(e) &&
      'Identifier' === e.callee.type &&
      ('async' === e.callee.name ||
        'inject' === e.callee.name ||
        'fakeAsync' === e.callee.name)
    )
  }
  function wh(e) {
    return 'JSXElement' === e.type || 'JSXFragment' === e.type
  }
  function Th(e) {
    return 'get' === e.kind || 'set' === e.kind
  }
  function Bh(e) {
    return Th(e) || mh(e, e.value)
  }
  const Nh = new Set([
    'BinaryExpression',
    'LogicalExpression',
    'NGPipeExpression'
  ])
  const kh = new Set([
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
  const Ph = /^(?:skip|[fx]?(?:it|describe|test))$/
  function Oh(e) {
    return (
      e && ('CallExpression' === e.type || 'OptionalCallExpression' === e.type)
    )
  }
  function Ih(e) {
    return (
      e &&
      ('MemberExpression' === e.type || 'OptionalMemberExpression' === e.type)
    )
  }
  function Lh(e) {
    return /^(?:\d+|\d+\.\d+)$/.test(e)
  }
  function jh(e) {
    return e.quasis.some((e) => e.value.raw.includes('\n'))
  }
  function _h(e) {
    return e.extra ? e.extra.raw : e.raw
  }
  const Mh = { '==': !0, '!=': !0, '===': !0, '!==': !0 },
    Rh = { '*': !0, '/': !0, '%': !0 },
    $h = { '>>': !0, '>>>': !0, '<<': !0 }
  const Vh = {}
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
    for (const n of t) Vh[n] = e
  function Wh(e) {
    return Vh[e]
  }
  const qh = new WeakMap()
  function Uh(e) {
    if (qh.has(e)) return qh.get(e)
    const t = []
    return (
      e.this && t.push(e.this),
      Array.isArray(e.parameters)
        ? t.push(...e.parameters)
        : Array.isArray(e.params) && t.push(...e.params),
      e.rest && t.push(e.rest),
      qh.set(e, t),
      t
    )
  }
  const zh = new WeakMap()
  function Gh(e) {
    if (zh.has(e)) return zh.get(e)
    let t = e.arguments
    return (
      'ImportExpression' === e.type &&
        ((t = [e.source]), e.attributes && t.push(e.attributes)),
      zh.set(e, t),
      t
    )
  }
  function Hh(e) {
    return 'prettier-ignore' === e.value.trim() && !e.unignore
  }
  function Jh(e) {
    return e && (e.prettierIgnore || Kh(e, Xh.PrettierIgnore))
  }
  const Xh = {
      Leading: 2,
      Trailing: 4,
      Dangling: 8,
      Block: 16,
      Line: 32,
      PrettierIgnore: 64,
      First: 128,
      Last: 256
    },
    Yh = (e, t) => {
      if (('function' == typeof e && ((t = e), (e = 0)), e || t))
        return (n, r, i) =>
          !(
            (e & Xh.Leading && !n.leading) ||
            (e & Xh.Trailing && !n.trailing) ||
            (e & Xh.Dangling && (n.leading || n.trailing)) ||
            (e & Xh.Block && !Eh(n)) ||
            (e & Xh.Line && !Ch(n)) ||
            (e & Xh.First && 0 !== r) ||
            (e & Xh.Last && r !== i.length - 1) ||
            (e & Xh.PrettierIgnore && !Hh(n)) ||
            (t && !t(n))
          )
    }
  function Kh(e, t, n) {
    if (!e || !ph(e.comments)) return !1
    const r = Yh(t, n)
    return !r || e.comments.some(r)
  }
  function Qh(e, t, n) {
    if (!e || !Array.isArray(e.comments)) return []
    const r = Yh(t, n)
    return r ? e.comments.filter(r) : e.comments
  }
  function Zh(e) {
    return Oh(e) || 'NewExpression' === e.type || 'ImportExpression' === e.type
  }
  var eg = {
    getFunctionParameters: Uh,
    iterateFunctionParametersPath: function (e, t) {
      const n = e.getValue()
      let r = 0
      const i = (e) => t(e, r++)
      n.this && e.call(i, 'this'),
        Array.isArray(n.parameters)
          ? e.each(i, 'parameters')
          : Array.isArray(n.params) && e.each(i, 'params'),
        n.rest && e.call(i, 'rest')
    },
    getCallArguments: Gh,
    iterateCallArgumentsPath: function (e, t) {
      const n = e.getValue()
      'ImportExpression' === n.type
        ? (e.call((e) => t(e, 0), 'source'),
          n.attributes && e.call((e) => t(e, 1), 'attributes'))
        : e.each(t, 'arguments')
    },
    hasRestParameter: function (e) {
      if (e.rest) return !0
      const t = Uh(e)
      return t.length > 0 && 'RestElement' === ah(t).type
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
      return 'declaration' === e.getName() && Ah(t) ? t : null
    },
    getTypeScriptMappedTypeModifier: function (e, t) {
      return '+' === e ? '+' + t : '-' === e ? '-' + t : t
    },
    hasFlowAnnotationComment: function (e) {
      return ph(e) && Eh(e[0]) && Dh.test(e[0].value)
    },
    hasFlowShorthandAnnotationComment: function (e) {
      return (
        e.extra &&
        e.extra.parenthesized &&
        ph(e.trailingComments) &&
        Eh(e.trailingComments[0]) &&
        yh.test(e.trailingComments[0].value)
      )
    },
    hasLeadingOwnLineComment: function (e, t) {
      return wh(t) ? Jh(t) : Kh(t, Xh.Leading, (t) => ch(e, gh(t)))
    },
    hasNakedLeftSide: function (e) {
      return (
        'AssignmentExpression' === e.type ||
        'BinaryExpression' === e.type ||
        'LogicalExpression' === e.type ||
        'NGPipeExpression' === e.type ||
        'ConditionalExpression' === e.type ||
        Oh(e) ||
        Ih(e) ||
        'SequenceExpression' === e.type ||
        'TaggedTemplateExpression' === e.type ||
        'BindExpression' === e.type ||
        ('UpdateExpression' === e.type && !e.prefix) ||
        'TSAsExpression' === e.type ||
        'TSNonNullExpression' === e.type
      )
    },
    hasNode: function e(t, n) {
      if (!t || 'object' != typeof t) return !1
      if (Array.isArray(t)) return t.some((t) => e(t, n))
      const r = n(t)
      return 'boolean' == typeof r ? r : Object.values(t).some((t) => e(t, n))
    },
    hasIgnoreComment: function (e) {
      return Jh(e.getValue())
    },
    hasNodeIgnoreComment: Jh,
    identity: function (e) {
      return e
    },
    isBinaryish: function (e) {
      return Nh.has(e.type)
    },
    isBlockComment: Eh,
    isCallLikeExpression: Zh,
    isLineComment: Ch,
    isPrettierIgnoreComment: Hh,
    isCallExpression: Oh,
    isMemberExpression: Ih,
    isExportDeclaration: Ah,
    isFlowAnnotationComment: function (e, t) {
      const n = hh(t),
        r = lh(e, gh(t))
      return (
        !1 !== r && '/*' === e.slice(n, n + 2) && '*/' === e.slice(r, r + 2)
      )
    },
    isFunctionCompositionArgs: function (e) {
      if (e.length <= 1) return !1
      let t = 0
      for (const n of e)
        if (xh(n)) {
          if (((t += 1), t > 1)) return !0
        } else if (Oh(n)) for (const e of n.arguments) if (xh(e)) return !0
      return !1
    },
    isFunctionNotation: Bh,
    isFunctionOrArrowExpression: xh,
    isGetterOrSetter: Th,
    isJestEachTemplateLiteral: function (e, t) {
      const n = /^[fx]?(?:describe|it|test)$/
      return (
        'TaggedTemplateExpression' === t.type &&
        t.quasi === e &&
        'MemberExpression' === t.tag.type &&
        'Identifier' === t.tag.property.type &&
        'each' === t.tag.property.name &&
        (('Identifier' === t.tag.object.type && n.test(t.tag.object.name)) ||
          ('MemberExpression' === t.tag.object.type &&
            'Identifier' === t.tag.object.property.type &&
            ('only' === t.tag.object.property.name ||
              'skip' === t.tag.object.property.name) &&
            'Identifier' === t.tag.object.object.type &&
            n.test(t.tag.object.object.name)))
      )
    },
    isJsxNode: wh,
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
        n = e.getParentNode()
      return (
        Oh(t) &&
        Oh(n) &&
        n.callee === t &&
        t.arguments.length > n.arguments.length &&
        n.arguments.length > 0
      )
    },
    isSimpleCallArgument: function e(t, n) {
      if (n >= 2) return !1
      const r = (t) => e(t, n + 1),
        i =
          ('Literal' === t.type && 'regex' in t && t.regex.pattern) ||
          ('RegExpLiteral' === t.type && t.pattern)
      return (
        !(i && dh(i) > 5) &&
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
            : Zh(t)
            ? ('ImportExpression' === t.type || e(t.callee, n)) &&
              Gh(t).every(r)
            : Ih(t)
            ? e(t.object, n) && e(t.property, n)
            : 'UnaryExpression' !== t.type ||
              ('!' !== t.operator && '-' !== t.operator)
            ? 'TSNonNullExpression' === t.type && e(t.expression, n)
            : e(t.argument, n)))
      )
    },
    isMemberish: function (e) {
      return Ih(e) || ('BindExpression' === e.type && Boolean(e.object))
    },
    isNumericLiteral: vh,
    isSignedNumericLiteral: function (e) {
      return (
        'UnaryExpression' === e.type &&
        ('+' === e.operator || '-' === e.operator) &&
        vh(e.argument)
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
        Bh(e)
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
          !!kh.has(e.type))
      )
    },
    isSimpleNumber: Lh,
    isSimpleTemplateLiteral: function (e) {
      let t = 'expressions'
      'TSTemplateLiteralType' === e.type && (t = 'types')
      const n = e[t]
      return (
        0 !== n.length &&
        n.every((e) => {
          if (Kh(e)) return !1
          if ('Identifier' === e.type || 'ThisExpression' === e.type) return !0
          if (Ih(e)) {
            let t = e
            for (; Ih(t); ) {
              if (
                'Identifier' !== t.property.type &&
                'Literal' !== t.property.type &&
                'StringLiteral' !== t.property.type &&
                'NumericLiteral' !== t.property.type
              )
                return !1
              if (((t = t.object), Kh(t))) return !1
            }
            return 'Identifier' === t.type || 'ThisExpression' === t.type
          }
          return !1
        })
      )
    },
    isStringLiteral: Fh,
    isStringPropSafeToUnquote: function (e, t) {
      return (
        'json' !== t.parser &&
        Fh(e.key) &&
        _h(e.key).slice(1, -1) === e.key.value &&
        ((sh(e.key.value) &&
          !(
            ('typescript' === t.parser || 'babel-ts' === t.parser) &&
            'ClassProperty' === e.type
          )) ||
          (Lh(e.key.value) &&
            String(Number(e.key.value)) === e.key.value &&
            ('babel' === t.parser ||
              'espree' === t.parser ||
              'meriyah' === t.parser ||
              '__babel_estree' === t.parser)))
      )
    },
    isTemplateOnItsOwnLine: function (e, t) {
      return (
        (('TemplateLiteral' === e.type && jh(e)) ||
          ('TaggedTemplateExpression' === e.type && jh(e.quasi))) &&
        !ch(t, hh(e), { backwards: !0 })
      )
    },
    isTestCall: function e(t, n) {
      if ('CallExpression' !== t.type) return !1
      if (1 === t.arguments.length) {
        if (Sh(t) && n && e(n)) return xh(t.arguments[0])
        if (
          (function (e) {
            return (
              'Identifier' === e.callee.type &&
              /^(?:before|after)(?:Each|All)$/.test(e.callee.name) &&
              1 === e.arguments.length
            )
          })(t)
        )
          return Sh(t.arguments[0])
      } else if (
        (2 === t.arguments.length || 3 === t.arguments.length) &&
        (('Identifier' === t.callee.type && Ph.test(t.callee.name)) ||
          (function (e) {
            return (
              Ih(e.callee) &&
              'Identifier' === e.callee.object.type &&
              'Identifier' === e.callee.property.type &&
              Ph.test(e.callee.object.name) &&
              ('only' === e.callee.property.name ||
                'skip' === e.callee.property.name)
            )
          })(t)) &&
        ((function (e) {
          return 'TemplateLiteral' === e.type
        })(t.arguments[0]) ||
          Fh(t.arguments[0]))
      )
        return (
          !(t.arguments[2] && !vh(t.arguments[2])) &&
          ((2 === t.arguments.length
            ? xh(t.arguments[1])
            : (function (e) {
                return (
                  'FunctionExpression' === e.type ||
                  ('ArrowFunctionExpression' === e.type &&
                    'BlockStatement' === e.body.type)
                )
              })(t.arguments[1]) && Uh(t.arguments[1]).length <= 1) ||
            Sh(t.arguments[1]))
        )
      return !1
    },
    isTheOnlyJsxElementInMarkdown: function (e, t) {
      if ('markdown' !== e.parentParser && 'mdx' !== e.parentParser) return !1
      const n = t.getNode()
      if (!n.expression || !wh(n.expression)) return !1
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
        mh(e, e.typeAnnotation)
      )
    },
    isNextLineEmpty: (e, { originalText: t }) => fh(t, gh(e)),
    needsHardlineAfterDanglingComment: function (e) {
      if (!Kh(e)) return !1
      const t = ah(Qh(e, Xh.Dangling))
      return t && !Eh(t)
    },
    rawText: _h,
    shouldPrintComma: function (e, t = 'es5') {
      return (
        ('es5' === e.trailingComma && 'es5' === t) ||
        ('all' === e.trailingComma && ('all' === t || 'es5' === t))
      )
    },
    isBitwiseOperator: function (e) {
      return Boolean($h[e]) || '|' === e || '^' === e || '&' === e
    },
    shouldFlatten: function (e, t) {
      return (
        Wh(t) === Wh(e) &&
        '**' !== e &&
        (!Mh[e] || !Mh[t]) &&
        !(('%' === t && Rh[e]) || ('%' === e && Rh[t])) &&
        (t === e || !Rh[t] || !Rh[e]) &&
        (!$h[e] || !$h[t])
      )
    },
    startsWithNoLookaheadToken: function e(t, n) {
      switch (
        (t = (function (e) {
          for (; e.left; ) e = e.left
          return e
        })(t)).type
      ) {
        case 'FunctionExpression':
        case 'ClassExpression':
        case 'DoExpression':
          return n
        case 'ObjectExpression':
          return !0
        case 'MemberExpression':
        case 'OptionalMemberExpression':
          return e(t.object, n)
        case 'TaggedTemplateExpression':
          return 'FunctionExpression' !== t.tag.type && e(t.tag, n)
        case 'CallExpression':
        case 'OptionalCallExpression':
          return 'FunctionExpression' !== t.callee.type && e(t.callee, n)
        case 'ConditionalExpression':
          return e(t.test, n)
        case 'UpdateExpression':
          return !t.prefix && e(t.argument, n)
        case 'BindExpression':
          return t.object && e(t.object, n)
        case 'SequenceExpression':
          return e(t.expressions[0], n)
        case 'TSAsExpression':
        case 'TSNonNullExpression':
          return e(t.expression, n)
        default:
          return !1
      }
    },
    getPrecedence: Wh,
    hasComment: Kh,
    getComments: Qh,
    CommentCheckFlags: Xh
  }
  const { getStringWidth: tg, getIndentSize: ng } = Fi,
    {
      builders: {
        join: rg,
        hardline: ig,
        softline: ug,
        group: og,
        indent: sg,
        align: ag,
        lineSuffixBoundary: cg,
        addAlignmentToDoc: lg
      },
      printer: { printDocToString: pg },
      utils: { mapDoc: fg }
    } = su,
    {
      isBinaryish: dg,
      isJestEachTemplateLiteral: hg,
      isSimpleTemplateLiteral: gg,
      hasComment: mg,
      isMemberExpression: yg
    } = eg
  function Dg(e) {
    return e.replace(/([\\`]|\${)/g, '\\$1')
  }
  var Eg = {
    printTemplateLiteral: function (e, t, n) {
      const r = e.getValue()
      if ('TemplateLiteral' === r.type && hg(r, e.getParentNode())) {
        const r = (function (e, t, n) {
          const r = e.getNode(),
            i = r.quasis[0].value.raw.trim().split(/\s*\|\s*/)
          if (i.length > 1 || i.some((e) => e.length > 0)) {
            t.__inJestEach = !0
            const u = e.map(n, 'expressions')
            t.__inJestEach = !1
            const o = [],
              s = u.map(
                (e) =>
                  '${' +
                  pg(
                    e,
                    Object.assign(
                      Object.assign({}, t),
                      {},
                      { printWidth: Number.POSITIVE_INFINITY, endOfLine: 'lf' }
                    )
                  ).formatted +
                  '}'
              ),
              a = [{ hasLineBreak: !1, cells: [] }]
            for (let e = 1; e < r.quasis.length; e++) {
              const t = _n(a),
                n = s[e - 1]
              t.cells.push(n),
                n.includes('\n') && (t.hasLineBreak = !0),
                r.quasis[e].value.raw.includes('\n') &&
                  a.push({ hasLineBreak: !1, cells: [] })
            }
            const c = Math.max(i.length, ...a.map((e) => e.cells.length)),
              l = Array.from({ length: c }).fill(0),
              p = [{ cells: i }, ...a.filter((e) => e.cells.length > 0)]
            for (const { cells: e } of p.filter((e) => !e.hasLineBreak))
              for (const [t, n] of e.entries()) l[t] = Math.max(l[t], tg(n))
            return (
              o.push(
                cg,
                '`',
                sg([
                  ig,
                  rg(
                    ig,
                    p.map((e) =>
                      rg(
                        ' | ',
                        e.cells.map((t, n) =>
                          e.hasLineBreak ? t : t + ' '.repeat(l[n] - tg(t))
                        )
                      )
                    )
                  )
                ]),
                ig,
                '`'
              ),
              o
            )
          }
        })(e, n, t)
        if (r) return r
      }
      let i = 'expressions'
      'TSTemplateLiteralType' === r.type && (i = 'types')
      const u = []
      let o = e.map(t, i)
      const s = gg(r)
      return (
        s &&
          (o = o.map(
            (e) =>
              pg(
                e,
                Object.assign(
                  Object.assign({}, n),
                  {},
                  { printWidth: Number.POSITIVE_INFINITY }
                )
              ).formatted
          )),
        u.push(cg, '`'),
        e.each((e) => {
          const a = e.getName()
          if ((u.push(t()), a < o.length)) {
            const { tabWidth: t } = n,
              c = e.getValue(),
              l = ng(c.value.raw, t)
            let p = o[a]
            if (!s) {
              const e = r[i][a]
              ;(mg(e) ||
                yg(e) ||
                'ConditionalExpression' === e.type ||
                'SequenceExpression' === e.type ||
                'TSAsExpression' === e.type ||
                dg(e)) &&
                (p = [sg([ug, p]), ug])
            }
            const f =
              0 === l && c.value.raw.endsWith('\n')
                ? ag(Number.NEGATIVE_INFINITY, p)
                : lg(p, l, t)
            u.push(og(['${', f, cg, '}']))
          }
        }, 'quasis'),
        u.push('`'),
        u
      )
    },
    printTemplateExpressions: function (e, t) {
      return e.map(
        (e) =>
          (function (e, t) {
            const n = e.getValue()
            let r = t()
            return mg(n) && (r = og([sg([ug, r]), ug])), ['${', r, cg, '}']
          })(e, t),
        'expressions'
      )
    },
    escapeTemplateCharacters: function (e, t) {
      return fg(e, (e) =>
        'string' == typeof e ? (t ? e.replace(/(\\*)`/g, '$1$1\\`') : Dg(e)) : e
      )
    },
    uncookTemplateElementValue: Dg
  }
  const {
      builders: { indent: Cg, softline: bg, literalline: Ag, dedentToRoot: vg }
    } = su,
    { escapeTemplateCharacters: Fg } = Eg
  var xg = function (e, t, n) {
    let r = e
      .getValue()
      .quasis[0].value.raw.replace(
        /((?:\\\\)*)\\`/g,
        (e, t) => '\\'.repeat(t.length / 2) + '`'
      )
    const i = (function (e) {
        const t = e.match(/^([^\S\n]*)\S/m)
        return null === t ? '' : t[1]
      })(r),
      u = '' !== i
    u && (r = r.replace(new RegExp(`^${i}`, 'gm'), ''))
    const o = Fg(
      n(
        r,
        { parser: 'markdown', __inJsTemplate: !0 },
        { stripTrailingHardline: !0 }
      ),
      !0
    )
    return ['`', u ? Cg([bg, o]) : [Ag, vg(o)], bg, '`']
  }
  const { isNonEmptyArray: Sg } = Fi,
    {
      builders: { indent: wg, hardline: Tg, softline: Bg },
      utils: { mapDoc: Ng, replaceEndOfLine: kg, cleanDoc: Pg }
    } = su,
    { printTemplateExpressions: Og } = Eg
  var Ig = function (e, t, n) {
    const r = e.getValue(),
      i = r.quasis.map((e) => e.value.raw)
    let u = 0
    return (function (e, t, n) {
      if (1 === t.quasis.length && !t.quasis[0].value.raw.trim()) return '``'
      const r = (function (e, t) {
        if (!Sg(t)) return e
        let n = 0
        const r = Ng(Pg(e), (e) =>
          'string' == typeof e && e.includes('@prettier-placeholder')
            ? e
                .split(/@prettier-placeholder-(\d+)-id/)
                .map((e, r) => (r % 2 == 0 ? kg(e) : (n++, t[e])))
            : e
        )
        return t.length === n ? r : null
      })(e, n)
      if (!r) throw new Error("Couldn't insert all the expressions")
      return ['`', wg([Tg, r]), Bg, '`']
    })(
      n(
        i.reduce(
          (e, t, n) =>
            0 === n ? t : e + '@prettier-placeholder-' + u++ + '-id' + t,
          ''
        ),
        { parser: 'scss' },
        { stripTrailingHardline: !0 }
      ),
      r,
      Og(e, t)
    )
  }
  const {
      builders: { indent: Lg, join: jg, hardline: _g }
    } = su,
    { escapeTemplateCharacters: Mg, printTemplateExpressions: Rg } = Eg
  function $g(e) {
    const t = []
    let n = !1
    const r = e.map((e) => e.trim())
    for (const [e, i] of r.entries())
      '' !== i && ('' === r[e - 1] && n ? t.push([_g, i]) : t.push(i), (n = !0))
    return 0 === t.length ? null : jg(_g, t)
  }
  var Vg = function (e, t, n) {
    const r = e.getValue(),
      i = r.quasis.length
    if (1 === i && '' === r.quasis[0].value.raw.trim()) return '``'
    const u = Rg(e, t),
      o = []
    for (let e = 0; e < i; e++) {
      const t = 0 === e,
        s = e === i - 1,
        a = r.quasis[e].value.cooked,
        c = a.split('\n'),
        l = c.length,
        p = u[e],
        f = l > 2 && '' === c[0].trim() && '' === c[1].trim(),
        d = l > 2 && '' === c[l - 1].trim() && '' === c[l - 2].trim(),
        h = c.every((e) => /^\s*(?:#[^\n\r]*)?$/.test(e))
      if (!s && /#[^\n\r]*$/.test(c[l - 1])) return null
      let g = null
      ;(g = h
        ? $g(c)
        : n(a, { parser: 'graphql' }, { stripTrailingHardline: !0 })),
        g
          ? ((g = Mg(g, !1)),
            !t && f && o.push(''),
            o.push(g),
            !s && d && o.push(''))
          : t || s || !f || o.push(''),
        p && o.push(p)
    }
    return ['`', Lg([_g, jg(_g, o)]), _g, '`']
  }
  const {
      builders: { indent: Wg, line: qg, hardline: Ug, group: zg },
      utils: { mapDoc: Gg }
    } = su,
    { printTemplateExpressions: Hg, uncookTemplateElementValue: Jg } = Eg
  let Xg = 0
  var Yg = function (e, t, n, r, { parser: i }) {
    const u = e.getValue(),
      o = Xg
    Xg = (Xg + 1) >>> 0
    const s = (e) => `PRETTIER_HTML_PLACEHOLDER_${e}_${o}_IN_JS`,
      a = u.quasis
        .map((e, t, n) =>
          t === n.length - 1 ? e.value.cooked : e.value.cooked + s(t)
        )
        .join(''),
      c = Hg(e, t)
    if (0 === c.length && 0 === a.trim().length) return '``'
    const l = new RegExp(s('(\\d+)'), 'g')
    let p = 0
    const f = n(
        a,
        {
          parser: i,
          __onHtmlRoot(e) {
            p = e.children.length
          }
        },
        { stripTrailingHardline: !0 }
      ),
      d = Gg(f, (e) => {
        if ('string' != typeof e) return e
        const t = [],
          n = e.split(l)
        for (let e = 0; e < n.length; e++) {
          let i = n[e]
          if (e % 2 == 0) {
            i &&
              ((i = Jg(i)),
              r.__embeddedInHtml &&
                (i = i.replace(/<\/(script)\b/gi, '<\\/$1')),
              t.push(i))
            continue
          }
          const u = Number(i)
          t.push(c[u])
        }
        return t
      }),
      h = /^\s/.test(a) ? ' ' : '',
      g = /\s$/.test(a) ? ' ' : '',
      m = 'ignore' === r.htmlWhitespaceSensitivity ? Ug : h && g ? qg : null
    return zg(
      m
        ? ['`', Wg([m, zg(d)]), m, '`']
        : ['`', h, p > 1 ? Wg(zg(d)) : zg(d), g, '`']
    )
  }
  const { hasComment: Kg, CommentCheckFlags: Qg, isObjectProperty: Zg } = eg
  function em(e) {
    return (function (e) {
      const t = e.getValue(),
        n = e.getParentNode(),
        r = e.getParentNode(1)
      return (
        (r &&
          t.quasis &&
          'JSXExpressionContainer' === n.type &&
          'JSXElement' === r.type &&
          'style' === r.openingElement.name.name &&
          r.openingElement.attributes.some((e) => 'jsx' === e.name.name)) ||
        (n &&
          'TaggedTemplateExpression' === n.type &&
          'Identifier' === n.tag.type &&
          'css' === n.tag.name) ||
        (n &&
          'TaggedTemplateExpression' === n.type &&
          'MemberExpression' === n.tag.type &&
          'css' === n.tag.object.name &&
          ('global' === n.tag.property.name ||
            'resolve' === n.tag.property.name))
      )
    })(e) ||
      (function (e) {
        const t = e.getParentNode()
        if (!t || 'TaggedTemplateExpression' !== t.type) return !1
        const n =
          'ParenthesizedExpression' === t.tag.type ? t.tag.expression : t.tag
        switch (n.type) {
          case 'MemberExpression':
            return nm(n.object) || rm(n)
          case 'CallExpression':
            return (
              nm(n.callee) ||
              ('MemberExpression' === n.callee.type &&
                (('MemberExpression' === n.callee.object.type &&
                  (nm(n.callee.object.object) || rm(n.callee.object))) ||
                  ('CallExpression' === n.callee.object.type &&
                    nm(n.callee.object.callee))))
            )
          case 'Identifier':
            return 'css' === n.name
          default:
            return !1
        }
      })(e) ||
      (function (e) {
        const t = e.getParentNode(),
          n = e.getParentNode(1)
        return (
          n &&
          'JSXExpressionContainer' === t.type &&
          'JSXAttribute' === n.type &&
          'JSXIdentifier' === n.name.type &&
          'css' === n.name.name
        )
      })(e) ||
      (function (e) {
        return e.match(
          (e) => 'TemplateLiteral' === e.type,
          (e, t) => 'ArrayExpression' === e.type && 'elements' === t,
          (e, t) =>
            Zg(e) &&
            'Identifier' === e.key.type &&
            'styles' === e.key.name &&
            'value' === t,
          ...tm
        )
      })(e)
      ? 'css'
      : (function (e) {
          const t = e.getValue(),
            n = e.getParentNode()
          return (
            im(t, 'GraphQL') ||
            (n &&
              (('TaggedTemplateExpression' === n.type &&
                (('MemberExpression' === n.tag.type &&
                  'graphql' === n.tag.object.name &&
                  'experimental' === n.tag.property.name) ||
                  ('Identifier' === n.tag.type &&
                    ('gql' === n.tag.name || 'graphql' === n.tag.name)))) ||
                ('CallExpression' === n.type &&
                  'Identifier' === n.callee.type &&
                  'graphql' === n.callee.name)))
          )
        })(e)
      ? 'graphql'
      : (function (e) {
          return (
            im(e.getValue(), 'HTML') ||
            e.match(
              (e) => 'TemplateLiteral' === e.type,
              (e, t) =>
                'TaggedTemplateExpression' === e.type &&
                'Identifier' === e.tag.type &&
                'html' === e.tag.name &&
                'quasi' === t
            )
          )
        })(e)
      ? 'html'
      : (function (e) {
          return e.match(
            (e) => 'TemplateLiteral' === e.type,
            (e, t) =>
              Zg(e) &&
              'Identifier' === e.key.type &&
              'template' === e.key.name &&
              'value' === t,
            ...tm
          )
        })(e)
      ? 'angular'
      : (function (e) {
          const t = e.getValue(),
            n = e.getParentNode()
          return (
            n &&
            'TaggedTemplateExpression' === n.type &&
            1 === t.quasis.length &&
            'Identifier' === n.tag.type &&
            ('md' === n.tag.name || 'markdown' === n.tag.name)
          )
        })(e)
      ? 'markdown'
      : void 0
  }
  const tm = [
    (e, t) => 'ObjectExpression' === e.type && 'properties' === t,
    (e, t) =>
      'CallExpression' === e.type &&
      'Identifier' === e.callee.type &&
      'Component' === e.callee.name &&
      'arguments' === t,
    (e, t) => 'Decorator' === e.type && 'expression' === t
  ]
  function nm(e) {
    return 'Identifier' === e.type && 'styled' === e.name
  }
  function rm(e) {
    return /^[A-Z]/.test(e.object.name) && 'extend' === e.property.name
  }
  function im(e, t) {
    return Kg(e, Qg.Block | Qg.Leading, ({ value: e }) => e === ` ${t} `)
  }
  var um = function (e, t, n, r) {
    const i = e.getValue()
    if (
      'TemplateLiteral' !== i.type ||
      (function ({ quasis: e }) {
        return e.some(({ value: { cooked: e } }) => null === e)
      })(i)
    )
      return
    const u = em(e)
    return u
      ? 'markdown' === u
        ? xg(e, t, n)
        : 'css' === u
        ? Ig(e, t, n)
        : 'graphql' === u
        ? Vg(e, t, n)
        : 'html' === u || 'angular' === u
        ? Yg(e, t, n, r, { parser: u })
        : void 0
      : void 0
  }
  const { isBlockComment: om } = eg,
    sm = new Set([
      'range',
      'raw',
      'comments',
      'leadingComments',
      'trailingComments',
      'innerComments',
      'extra',
      'start',
      'end',
      'loc',
      'flags',
      'errors',
      'tokens'
    ]),
    am = (e) => {
      for (const t of e.quasis) delete t.value
    }
  function cm(e, t, n) {
    if (
      ('Program' === e.type && delete t.sourceType,
      ('BigIntLiteral' !== e.type &&
        'BigIntLiteralTypeAnnotation' !== e.type) ||
        (t.value && (t.value = t.value.toLowerCase())),
      ('BigIntLiteral' !== e.type && 'Literal' !== e.type) ||
        (t.bigint && (t.bigint = t.bigint.toLowerCase())),
      'DecimalLiteral' === e.type && (t.value = Number(t.value)),
      'Literal' === e.type && t.decimal && (t.decimal = Number(t.decimal)),
      'EmptyStatement' === e.type)
    )
      return null
    if ('JSXText' === e.type) return null
    if (
      'JSXExpressionContainer' === e.type &&
      ('Literal' === e.expression.type ||
        'StringLiteral' === e.expression.type) &&
      ' ' === e.expression.value
    )
      return null
    if (
      (('Property' !== e.type &&
        'ObjectProperty' !== e.type &&
        'MethodDefinition' !== e.type &&
        'ClassProperty' !== e.type &&
        'ClassMethod' !== e.type &&
        'PropertyDefinition' !== e.type &&
        'TSDeclareMethod' !== e.type &&
        'TSPropertySignature' !== e.type &&
        'ObjectTypeProperty' !== e.type) ||
        'object' != typeof e.key ||
        !e.key ||
        ('Literal' !== e.key.type &&
          'NumericLiteral' !== e.key.type &&
          'StringLiteral' !== e.key.type &&
          'Identifier' !== e.key.type) ||
        delete t.key,
      'JSXElement' === e.type &&
        'style' === e.openingElement.name.name &&
        e.openingElement.attributes.some((e) => 'jsx' === e.name.name))
    )
      for (const { type: e, expression: n } of t.children)
        'JSXExpressionContainer' === e && 'TemplateLiteral' === n.type && am(n)
    'JSXAttribute' === e.type &&
      'css' === e.name.name &&
      'JSXExpressionContainer' === e.value.type &&
      'TemplateLiteral' === e.value.expression.type &&
      am(t.value.expression),
      'JSXAttribute' === e.type &&
        e.value &&
        'Literal' === e.value.type &&
        /["']|&quot;|&apos;/.test(e.value.value) &&
        (t.value.value = t.value.value.replace(/["']|&quot;|&apos;/g, '"'))
    const r = e.expression || e.callee
    if (
      'Decorator' === e.type &&
      'CallExpression' === r.type &&
      'Component' === r.callee.name &&
      1 === r.arguments.length
    ) {
      const n = e.expression.arguments[0].properties
      for (const [e, r] of t.expression.arguments[0].properties.entries())
        switch (n[e].key.name) {
          case 'styles':
            'ArrayExpression' === r.value.type && am(r.value.elements[0])
            break
          case 'template':
            'TemplateLiteral' === r.value.type && am(r.value)
        }
    }
    if (
      ('TaggedTemplateExpression' !== e.type ||
        ('MemberExpression' !== e.tag.type &&
          ('Identifier' !== e.tag.type ||
            ('gql' !== e.tag.name &&
              'graphql' !== e.tag.name &&
              'css' !== e.tag.name &&
              'md' !== e.tag.name &&
              'markdown' !== e.tag.name &&
              'html' !== e.tag.name)) &&
          'CallExpression' !== e.tag.type) ||
        am(t.quasi),
      'TemplateLiteral' === e.type)
    ) {
      ;((e.leadingComments &&
        e.leadingComments.some(
          (e) => om(e) && ['GraphQL', 'HTML'].some((t) => e.value === ` ${t} `)
        )) ||
        ('CallExpression' === n.type && 'graphql' === n.callee.name) ||
        !e.leadingComments) &&
        am(t)
    }
    return (
      'InterpreterDirective' === e.type && (t.value = t.value.trimEnd()),
      ('TSIntersectionType' !== e.type && 'TSUnionType' !== e.type) ||
      1 !== e.types.length
        ? void 0
        : t.types[0]
    )
  }
  cm.ignoredProperties = sm
  var lm = cm
  const pm = (e) => {
    if ('string' != typeof e) throw new TypeError('Expected a string')
    const t = e.match(/(?:\r?\n)/g) || []
    if (0 === t.length) return
    const n = t.filter((e) => '\r\n' === e).length
    return n > t.length - n ? '\r\n' : '\n'
  }
  var fm = pm
  fm.graceful = (e) => ('string' == typeof e && pm(e)) || '\n'
  var dm = function (e) {
      const t = e.match(Am)
      return t ? t[0].trimLeft() : ''
    },
    hm = function (e) {
      const t = e.match(Am)
      return t && t[0] ? e.substring(t[0].length) : e
    },
    gm = function (e) {
      return Bm(e).pragmas
    },
    mm = Bm,
    ym = function ({ comments: e = '', pragmas: t = {} }) {
      const n = (0, Em().default)(e) || Dm().EOL,
        r = ' *',
        i = Object.keys(t),
        u = i
          .map((e) => Nm(e, t[e]))
          .reduce((e, t) => e.concat(t), [])
          .map((e) => ' * ' + e + n)
          .join('')
      if (!e) {
        if (0 === i.length) return ''
        if (1 === i.length && !Array.isArray(t[i[0]])) {
          const e = t[i[0]]
          return `/** ${Nm(i[0], e)[0]} */`
        }
      }
      const o =
        e
          .split(n)
          .map((e) => ` * ${e}`)
          .join(n) + n
      return '/**' + n + (e ? o : '') + (e && i.length ? r + n : '') + u + ' */'
    }
  function Dm() {
    const e = fs
    return (
      (Dm = function () {
        return e
      }),
      e
    )
  }
  function Em() {
    const e = (function (e) {
      return e && e.__esModule ? e : { default: e }
    })(fm)
    return (
      (Em = function () {
        return e
      }),
      e
    )
  }
  const Cm = /\*\/$/,
    bm = /^\/\*\*/,
    Am = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
    vm = /(^|\s+)\/\/([^\r\n]*)/g,
    Fm = /^(\r?\n)+/,
    xm =
      /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,
    Sm = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,
    wm = /(\r?\n|^) *\* ?/g,
    Tm = []
  function Bm(e) {
    const t = (0, Em().default)(e) || Dm().EOL
    e = e.replace(bm, '').replace(Cm, '').replace(wm, '$1')
    let n = ''
    for (; n !== e; ) (n = e), (e = e.replace(xm, `${t}$1 $2${t}`))
    e = e.replace(Fm, '').trimRight()
    const r = Object.create(null),
      i = e.replace(Sm, '').replace(Fm, '').trimRight()
    let u
    for (; (u = Sm.exec(e)); ) {
      const e = u[2].replace(vm, '')
      'string' == typeof r[u[1]] || Array.isArray(r[u[1]])
        ? (r[u[1]] = Tm.concat(r[u[1]], e))
        : (r[u[1]] = e)
    }
    return { comments: i, pragmas: r }
  }
  function Nm(e, t) {
    return Tm.concat(t).map((t) => `@${e} ${t}`.trim())
  }
  var km = Object.defineProperty(
    { extract: dm, strip: hm, parse: gm, parseWithComments: mm, print: ym },
    '__esModule',
    { value: !0 }
  )
  const { parseWithComments: Pm, strip: Om, extract: Im, print: Lm } = km,
    { getShebang: jm } = Fi,
    { normalizeEndOfLine: _m } = xi
  function Mm(e) {
    const t = jm(e)
    t && (e = e.slice(t.length + 1))
    const n = Im(e),
      { pragmas: r, comments: i } = Pm(n)
    return { shebang: t, text: e, pragmas: r, comments: i }
  }
  var Rm = {
    hasPragma: function (e) {
      const t = Object.keys(Mm(e).pragmas)
      return t.includes('prettier') || t.includes('format')
    },
    insertPragma: function (e) {
      const { shebang: t, text: n, pragmas: r, comments: i } = Mm(e),
        u = Om(n),
        o = Lm({
          pragmas: Object.assign({ format: '' }, r),
          comments: i.trimStart()
        })
      return (
        (t ? `${t}\n` : '') + _m(o) + (u.startsWith('\n') ? '\n' : '\n\n') + u
      )
    }
  }
  const {
      getLast: $m,
      hasNewline: Vm,
      getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Wm,
      getNextNonSpaceNonCommentCharacter: qm,
      hasNewlineInRange: Um,
      addLeadingComment: zm,
      addTrailingComment: Gm,
      addDanglingComment: Hm,
      getNextNonSpaceNonCommentCharacterIndex: Jm,
      isNonEmptyArray: Xm
    } = Fi,
    {
      isBlockComment: Ym,
      getFunctionParameters: Km,
      isPrettierIgnoreComment: Qm,
      isJsxNode: Zm,
      hasFlowShorthandAnnotationComment: ey,
      hasFlowAnnotationComment: ty,
      hasIgnoreComment: ny,
      isCallLikeExpression: ry,
      getCallArguments: iy,
      isCallExpression: uy,
      isMemberExpression: oy,
      isObjectProperty: sy,
      getComments: ay,
      CommentCheckFlags: cy
    } = eg,
    { locStart: ly, locEnd: py } = Zc
  function fy(e, t) {
    const n = (e.body || e.properties).find(
      ({ type: e }) => 'EmptyStatement' !== e
    )
    n ? zm(n, t) : Hm(e, t)
  }
  function dy(e, t) {
    'BlockStatement' === e.type ? fy(e, t) : zm(e, t)
  }
  function hy({ comment: e, followingNode: t }) {
    return !(!t || !qy(e)) && (zm(t, e), !0)
  }
  function gy({
    comment: e,
    precedingNode: t,
    enclosingNode: n,
    followingNode: r,
    text: i
  }) {
    if (!n || 'IfStatement' !== n.type || !r) return !1
    return ')' === qm(i, e, py)
      ? (Gm(t, e), !0)
      : t === n.consequent && r === n.alternate
      ? ('BlockStatement' === t.type ? Gm(t, e) : Hm(n, e), !0)
      : 'BlockStatement' === r.type
      ? (fy(r, e), !0)
      : 'IfStatement' === r.type
      ? (dy(r.consequent, e), !0)
      : n.consequent === r && (zm(r, e), !0)
  }
  function my({
    comment: e,
    precedingNode: t,
    enclosingNode: n,
    followingNode: r,
    text: i
  }) {
    if (!n || 'WhileStatement' !== n.type || !r) return !1
    return ')' === qm(i, e, py)
      ? (Gm(t, e), !0)
      : 'BlockStatement' === r.type
      ? (fy(r, e), !0)
      : n.body === r && (zm(r, e), !0)
  }
  function yy({
    comment: e,
    precedingNode: t,
    enclosingNode: n,
    followingNode: r
  }) {
    return (
      !(!n || ('TryStatement' !== n.type && 'CatchClause' !== n.type) || !r) &&
      ('CatchClause' === n.type && t
        ? (Gm(t, e), !0)
        : 'BlockStatement' === r.type
        ? (fy(r, e), !0)
        : 'TryStatement' === r.type
        ? (dy(r.finalizer, e), !0)
        : 'CatchClause' === r.type && (dy(r.body, e), !0))
    )
  }
  function Dy({ comment: e, enclosingNode: t, followingNode: n }) {
    return !(!oy(t) || !n || 'Identifier' !== n.type) && (zm(t, e), !0)
  }
  function Ey({
    comment: e,
    precedingNode: t,
    enclosingNode: n,
    followingNode: r,
    text: i
  }) {
    const u = t && !Um(i, py(t), ly(e))
    return (
      !(
        (t && u) ||
        !n ||
        ('ConditionalExpression' !== n.type &&
          'TSConditionalType' !== n.type) ||
        !r
      ) && (zm(r, e), !0)
    )
  }
  function Cy({ comment: e, precedingNode: t, enclosingNode: n }) {
    return (
      !(
        !sy(n) ||
        !n.shorthand ||
        n.key !== t ||
        'AssignmentPattern' !== n.value.type
      ) && (Gm(n.value.left, e), !0)
    )
  }
  function by({
    comment: e,
    precedingNode: t,
    enclosingNode: n,
    followingNode: r
  }) {
    if (
      n &&
      ('ClassDeclaration' === n.type ||
        'ClassExpression' === n.type ||
        'DeclareClass' === n.type ||
        'DeclareInterface' === n.type ||
        'InterfaceDeclaration' === n.type ||
        'TSInterfaceDeclaration' === n.type)
    ) {
      if (Xm(n.decorators) && (!r || 'Decorator' !== r.type))
        return Gm($m(n.decorators), e), !0
      if (n.body && r === n.body) return fy(n.body, e), !0
      if (r)
        for (const i of ['implements', 'extends', 'mixins'])
          if (n[i] && r === n[i][0])
            return (
              !t || (t !== n.id && t !== n.typeParameters && t !== n.superClass)
                ? Hm(n, e, i)
                : Gm(t, e),
              !0
            )
    }
    return !1
  }
  function Ay({ comment: e, precedingNode: t, enclosingNode: n, text: r }) {
    return (
      ((n &&
        t &&
        ('Property' === n.type ||
          'TSDeclareMethod' === n.type ||
          'TSAbstractMethodDefinition' === n.type) &&
        'Identifier' === t.type &&
        n.key === t &&
        ':' !== qm(r, t, py)) ||
        !(
          !t ||
          !n ||
          'Decorator' !== t.type ||
          ('ClassMethod' !== n.type &&
            'ClassProperty' !== n.type &&
            'PropertyDefinition' !== n.type &&
            'TSAbstractClassProperty' !== n.type &&
            'TSAbstractMethodDefinition' !== n.type &&
            'TSDeclareMethod' !== n.type &&
            'MethodDefinition' !== n.type)
        )) &&
      (Gm(t, e), !0)
    )
  }
  function vy({ comment: e, precedingNode: t, enclosingNode: n, text: r }) {
    return (
      '(' === qm(r, e, py) &&
      !(
        !t ||
        !n ||
        ('FunctionDeclaration' !== n.type &&
          'FunctionExpression' !== n.type &&
          'ClassMethod' !== n.type &&
          'MethodDefinition' !== n.type &&
          'ObjectMethod' !== n.type)
      ) &&
      (Gm(t, e), !0)
    )
  }
  function Fy({ comment: e, enclosingNode: t, text: n }) {
    if (!t || 'ArrowFunctionExpression' !== t.type) return !1
    const r = Jm(n, e, py)
    return !1 !== r && '=>' === n.slice(r, r + 2) && (Hm(t, e), !0)
  }
  function xy({ comment: e, enclosingNode: t, text: n }) {
    return (
      ')' === qm(n, e, py) &&
      (t && ((Wy(t) && 0 === Km(t).length) || (ry(t) && 0 === iy(t).length))
        ? (Hm(t, e), !0)
        : !(
            !t ||
            ('MethodDefinition' !== t.type &&
              'TSAbstractMethodDefinition' !== t.type) ||
            0 !== Km(t.value).length
          ) && (Hm(t.value, e), !0))
    )
  }
  function Sy({
    comment: e,
    precedingNode: t,
    enclosingNode: n,
    followingNode: r,
    text: i
  }) {
    if (
      t &&
      'FunctionTypeParam' === t.type &&
      n &&
      'FunctionTypeAnnotation' === n.type &&
      r &&
      'FunctionTypeParam' !== r.type
    )
      return Gm(t, e), !0
    if (
      t &&
      ('Identifier' === t.type || 'AssignmentPattern' === t.type) &&
      n &&
      Wy(n) &&
      ')' === qm(i, e, py)
    )
      return Gm(t, e), !0
    if (
      n &&
      'FunctionDeclaration' === n.type &&
      r &&
      'BlockStatement' === r.type
    ) {
      const t = (() => {
        const e = Km(n)
        if (e.length > 0) return Wm(i, py($m(e)))
        const t = Wm(i, py(n.id))
        return !1 !== t && Wm(i, t + 1)
      })()
      if (ly(e) > t) return fy(r, e), !0
    }
    return !1
  }
  function wy({ comment: e, enclosingNode: t }) {
    return !(!t || 'ImportSpecifier' !== t.type) && (zm(t, e), !0)
  }
  function Ty({ comment: e, enclosingNode: t }) {
    return !(!t || 'LabeledStatement' !== t.type) && (zm(t, e), !0)
  }
  function By({ comment: e, enclosingNode: t }) {
    return (
      !(
        !t ||
        ('ContinueStatement' !== t.type && 'BreakStatement' !== t.type) ||
        t.label
      ) && (Gm(t, e), !0)
    )
  }
  function Ny({ comment: e, precedingNode: t, enclosingNode: n }) {
    return (
      !!(uy(n) && t && n.callee === t && n.arguments.length > 0) &&
      (zm(n.arguments[0], e), !0)
    )
  }
  function ky({
    comment: e,
    precedingNode: t,
    enclosingNode: n,
    followingNode: r
  }) {
    return !n || ('UnionTypeAnnotation' !== n.type && 'TSUnionType' !== n.type)
      ? (r &&
          ('UnionTypeAnnotation' === r.type || 'TSUnionType' === r.type) &&
          Qm(e) &&
          ((r.types[0].prettierIgnore = !0), (e.unignore = !0)),
        !1)
      : (Qm(e) && ((r.prettierIgnore = !0), (e.unignore = !0)),
        !!t && (Gm(t, e), !0))
  }
  function Py({ comment: e, enclosingNode: t }) {
    return !!sy(t) && (zm(t, e), !0)
  }
  function Oy({
    comment: e,
    enclosingNode: t,
    followingNode: n,
    ast: r,
    isLastComment: i
  }) {
    return r && r.body && 0 === r.body.length
      ? (i ? Hm(r, e) : zm(r, e), !0)
      : t && 'Program' === t.type && 0 === t.body.length && !Xm(t.directives)
      ? (i ? Hm(t, e) : zm(t, e), !0)
      : !(
          !n ||
          'Program' !== n.type ||
          0 !== n.body.length ||
          !t ||
          'ModuleExpression' !== t.type
        ) && (Hm(n, e), !0)
  }
  function Iy({ comment: e, enclosingNode: t }) {
    return (
      !(!t || ('ForInStatement' !== t.type && 'ForOfStatement' !== t.type)) &&
      (zm(t, e), !0)
    )
  }
  function Ly({ comment: e, precedingNode: t, enclosingNode: n, text: r }) {
    return (
      !!(
        t &&
        'ImportSpecifier' === t.type &&
        n &&
        'ImportDeclaration' === n.type &&
        Vm(r, py(e))
      ) && (Gm(t, e), !0)
    )
  }
  function jy({ comment: e, enclosingNode: t }) {
    return !(!t || 'AssignmentPattern' !== t.type) && (zm(t, e), !0)
  }
  function _y({ comment: e, enclosingNode: t }) {
    return !(!t || 'TypeAlias' !== t.type) && (zm(t, e), !0)
  }
  function My({ comment: e, enclosingNode: t, followingNode: n }) {
    return (
      !(
        !t ||
        ('VariableDeclarator' !== t.type &&
          'AssignmentExpression' !== t.type) ||
        !n ||
        ('ObjectExpression' !== n.type &&
          'ArrayExpression' !== n.type &&
          'TemplateLiteral' !== n.type &&
          'TaggedTemplateExpression' !== n.type &&
          !Ym(e))
      ) && (zm(n, e), !0)
    )
  }
  function Ry({ comment: e, enclosingNode: t, followingNode: n, text: r }) {
    return (
      !(
        n ||
        !t ||
        ('TSMethodSignature' !== t.type &&
          'TSDeclareFunction' !== t.type &&
          'TSAbstractMethodDefinition' !== t.type) ||
        ';' !== qm(r, e, py)
      ) && (Gm(t, e), !0)
    )
  }
  function $y({ comment: e, enclosingNode: t, followingNode: n }) {
    if (
      Qm(e) &&
      t &&
      'TSMappedType' === t.type &&
      n &&
      'TSTypeParameter' === n.type &&
      n.constraint
    )
      return (t.prettierIgnore = !0), (e.unignore = !0), !0
  }
  function Vy({
    comment: e,
    precedingNode: t,
    enclosingNode: n,
    followingNode: r
  }) {
    return (
      !(!n || 'TSMappedType' !== n.type) &&
      (r && 'TSTypeParameter' === r.type && r.name
        ? (zm(r.name, e), !0)
        : !(!t || 'TSTypeParameter' !== t.type || !t.constraint) &&
          (Gm(t.constraint, e), !0))
    )
  }
  function Wy(e) {
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
  function qy(e) {
    return Ym(e) && '*' === e.value[0] && /@type\b/.test(e.value)
  }
  var Uy = {
    handleOwnLineComment: function (e) {
      return [$y, Sy, Dy, gy, my, yy, by, wy, Iy, ky, Oy, Ly, jy, Ay, Ty].some(
        (t) => t(e)
      )
    },
    handleEndOfLineComment: function (e) {
      return [hy, Sy, Ey, wy, gy, my, yy, by, Ty, Ny, Py, Oy, _y, My].some(
        (t) => t(e)
      )
    },
    handleRemainingComment: function (e) {
      return [$y, gy, my, Cy, xy, Ay, Oy, Fy, vy, Vy, By, Ry].some((t) => t(e))
    },
    isTypeCastComment: qy,
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
        0 === Km(e.value).length &&
        !e.value.returnType &&
        !Xm(e.value.typeParameters) &&
        e.value.body
      )
        return [...(e.decorators || []), e.key, e.value.body]
    },
    willPrintOwnComments: function (e) {
      const t = e.getValue(),
        n = e.getParentNode()
      return (
        ((t &&
          (Zm(t) ||
            ey(t) ||
            (uy(n) &&
              ((e) => ty(ay(e, cy.Leading)) || ty(ay(e, cy.Trailing)))(t)))) ||
          (n &&
            ('JSXSpreadAttribute' === n.type ||
              'JSXSpreadChild' === n.type ||
              'UnionTypeAnnotation' === n.type ||
              'TSUnionType' === n.type ||
              (('ClassDeclaration' === n.type ||
                'ClassExpression' === n.type) &&
                n.superClass === t)))) &&
        (!ny(e) || 'UnionTypeAnnotation' === n.type || 'TSUnionType' === n.type)
      )
    }
  }
  const {
    getFunctionParameters: zy,
    getLeftSidePathName: Gy,
    hasFlowShorthandAnnotationComment: Hy,
    hasNakedLeftSide: Jy,
    hasNode: Xy,
    isBitwiseOperator: Yy,
    startsWithNoLookaheadToken: Ky,
    shouldFlatten: Qy,
    getPrecedence: Zy,
    isCallExpression: eD,
    isMemberExpression: tD,
    isObjectProperty: nD
  } = eg
  function rD(e, t) {
    const n = e.getParentNode()
    if (!n) return !1
    const r = e.getName(),
      i = e.getNode()
    if (
      t.__isInHtmlInterpolation &&
      !t.bracketSpacing &&
      (function (e) {
        switch (e.type) {
          case 'ObjectExpression':
            return !0
          default:
            return !1
        }
      })(i) &&
      iD(e)
    )
      return !0
    if (
      (function (e) {
        return (
          'BlockStatement' === e.type ||
          'BreakStatement' === e.type ||
          'ClassBody' === e.type ||
          'ClassDeclaration' === e.type ||
          'ClassMethod' === e.type ||
          'ClassProperty' === e.type ||
          'PropertyDefinition' === e.type ||
          'ClassPrivateProperty' === e.type ||
          'ContinueStatement' === e.type ||
          'DebuggerStatement' === e.type ||
          'DeclareClass' === e.type ||
          'DeclareExportAllDeclaration' === e.type ||
          'DeclareExportDeclaration' === e.type ||
          'DeclareFunction' === e.type ||
          'DeclareInterface' === e.type ||
          'DeclareModule' === e.type ||
          'DeclareModuleExports' === e.type ||
          'DeclareVariable' === e.type ||
          'DoWhileStatement' === e.type ||
          'EnumDeclaration' === e.type ||
          'ExportAllDeclaration' === e.type ||
          'ExportDefaultDeclaration' === e.type ||
          'ExportNamedDeclaration' === e.type ||
          'ExpressionStatement' === e.type ||
          'ForInStatement' === e.type ||
          'ForOfStatement' === e.type ||
          'ForStatement' === e.type ||
          'FunctionDeclaration' === e.type ||
          'IfStatement' === e.type ||
          'ImportDeclaration' === e.type ||
          'InterfaceDeclaration' === e.type ||
          'LabeledStatement' === e.type ||
          'MethodDefinition' === e.type ||
          'ReturnStatement' === e.type ||
          'SwitchStatement' === e.type ||
          'ThrowStatement' === e.type ||
          'TryStatement' === e.type ||
          'TSDeclareFunction' === e.type ||
          'TSEnumDeclaration' === e.type ||
          'TSImportEqualsDeclaration' === e.type ||
          'TSInterfaceDeclaration' === e.type ||
          'TSModuleDeclaration' === e.type ||
          'TSNamespaceExportDeclaration' === e.type ||
          'TypeAlias' === e.type ||
          'VariableDeclaration' === e.type ||
          'WhileStatement' === e.type ||
          'WithStatement' === e.type
        )
      })(i)
    )
      return !1
    if ('flow' !== t.parser && Hy(e.getValue())) return !0
    if ('Identifier' === i.type)
      return (
        !!(
          i.extra &&
          i.extra.parenthesized &&
          /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(i.name)
        ) ||
        ('left' === r &&
          'async' === i.name &&
          'ForOfStatement' === n.type &&
          !n.await)
      )
    switch (n.type) {
      case 'ParenthesizedExpression':
        return !1
      case 'ClassDeclaration':
      case 'ClassExpression':
        if (
          'superClass' === r &&
          ('ArrowFunctionExpression' === i.type ||
            'AssignmentExpression' === i.type ||
            'AwaitExpression' === i.type ||
            'BinaryExpression' === i.type ||
            'ConditionalExpression' === i.type ||
            'LogicalExpression' === i.type ||
            'NewExpression' === i.type ||
            'ObjectExpression' === i.type ||
            'ParenthesizedExpression' === i.type ||
            'SequenceExpression' === i.type ||
            'TaggedTemplateExpression' === i.type ||
            'UnaryExpression' === i.type ||
            'UpdateExpression' === i.type ||
            'YieldExpression' === i.type ||
            'TSNonNullExpression' === i.type)
        )
          return !0
        break
      case 'ExportDefaultDeclaration':
        return uD(e, t) || 'SequenceExpression' === i.type
      case 'Decorator':
        if ('expression' === r) {
          let e = !1,
            t = !1,
            n = i
          for (; n; )
            switch (n.type) {
              case 'MemberExpression':
                ;(t = !0), (n = n.object)
                break
              case 'CallExpression':
                if (t || e) return !0
                ;(e = !0), (n = n.callee)
                break
              case 'Identifier':
                return !1
              default:
                return !0
            }
          return !0
        }
        break
      case 'ExpressionStatement':
        if (Ky(i, !0)) return !0
        break
      case 'ArrowFunctionExpression':
        if ('body' === r && 'SequenceExpression' !== i.type && Ky(i, !1))
          return !0
    }
    switch (i.type) {
      case 'UpdateExpression':
        if ('UnaryExpression' === n.type)
          return (
            i.prefix &&
            (('++' === i.operator && '+' === n.operator) ||
              ('--' === i.operator && '-' === n.operator))
          )
      case 'UnaryExpression':
        switch (n.type) {
          case 'UnaryExpression':
            return (
              i.operator === n.operator &&
              ('+' === i.operator || '-' === i.operator)
            )
          case 'BindExpression':
            return !0
          case 'MemberExpression':
          case 'OptionalMemberExpression':
            return 'object' === r
          case 'TaggedTemplateExpression':
            return !0
          case 'NewExpression':
          case 'CallExpression':
          case 'OptionalCallExpression':
            return 'callee' === r
          case 'BinaryExpression':
            return 'left' === r && '**' === n.operator
          case 'TSNonNullExpression':
            return !0
          default:
            return !1
        }
      case 'BinaryExpression':
        if (
          'UpdateExpression' === n.type ||
          ('PipelineTopicExpression' === n.type && '|>' === i.operator)
        )
          return !0
        if (
          'in' === i.operator &&
          (function (e) {
            let t = 0,
              n = e.getValue()
            for (; n; ) {
              const r = e.getParentNode(t++)
              if (r && 'ForStatement' === r.type && r.init === n) return !0
              n = r
            }
            return !1
          })(e)
        )
          return !0
        if ('|>' === i.operator && i.extra && i.extra.parenthesized) {
          const t = e.getParentNode(1)
          if ('BinaryExpression' === t.type && '|>' === t.operator) return !0
        }
      case 'TSTypeAssertion':
      case 'TSAsExpression':
      case 'LogicalExpression':
        switch (n.type) {
          case 'TSAsExpression':
            return 'TSAsExpression' !== i.type
          case 'ConditionalExpression':
            return 'TSAsExpression' === i.type
          case 'CallExpression':
          case 'NewExpression':
          case 'OptionalCallExpression':
            return 'callee' === r
          case 'ClassExpression':
          case 'ClassDeclaration':
            return 'superClass' === r
          case 'TSTypeAssertion':
          case 'TaggedTemplateExpression':
          case 'UnaryExpression':
          case 'JSXSpreadAttribute':
          case 'SpreadElement':
          case 'SpreadProperty':
          case 'BindExpression':
          case 'AwaitExpression':
          case 'TSNonNullExpression':
          case 'UpdateExpression':
            return !0
          case 'MemberExpression':
          case 'OptionalMemberExpression':
            return 'object' === r
          case 'AssignmentExpression':
          case 'AssignmentPattern':
            return (
              'left' === r &&
              ('TSTypeAssertion' === i.type || 'TSAsExpression' === i.type)
            )
          case 'LogicalExpression':
            if ('LogicalExpression' === i.type) return n.operator !== i.operator
          case 'BinaryExpression': {
            const { operator: e, type: t } = i
            if (!e && 'TSTypeAssertion' !== t) return !0
            const u = Zy(e),
              o = n.operator,
              s = Zy(o)
            return (
              s > u ||
              ('right' === r && s === u) ||
              (s === u && !Qy(o, e)) ||
              (s < u && '%' === e ? '+' === o || '-' === o : !!Yy(o))
            )
          }
          default:
            return !1
        }
      case 'SequenceExpression':
        switch (n.type) {
          case 'ReturnStatement':
          case 'ForStatement':
            return !1
          case 'ExpressionStatement':
            return 'expression' !== r
          case 'ArrowFunctionExpression':
            return 'body' !== r
          default:
            return !0
        }
      case 'YieldExpression':
        if (
          'UnaryExpression' === n.type ||
          'AwaitExpression' === n.type ||
          'TSAsExpression' === n.type ||
          'TSNonNullExpression' === n.type
        )
          return !0
        if (
          'expression' === r &&
          i.argument &&
          'PipelinePrimaryTopicReference' === i.argument.type &&
          'PipelineTopicExpression' === n.type
        )
          return !0
      case 'AwaitExpression':
        switch (n.type) {
          case 'TaggedTemplateExpression':
          case 'UnaryExpression':
          case 'LogicalExpression':
          case 'SpreadElement':
          case 'SpreadProperty':
          case 'TSAsExpression':
          case 'TSNonNullExpression':
          case 'BindExpression':
            return !0
          case 'MemberExpression':
          case 'OptionalMemberExpression':
            return 'object' === r
          case 'NewExpression':
          case 'CallExpression':
          case 'OptionalCallExpression':
            return 'callee' === r
          case 'ConditionalExpression':
            return 'test' === r
          case 'BinaryExpression':
            return !(!i.argument && '|>' === n.operator)
          default:
            return !1
        }
      case 'TSConditionalType':
        if ('extendsType' === r && 'TSConditionalType' === n.type) return !0
      case 'TSFunctionType':
      case 'TSConstructorType':
        if ('checkType' === r && 'TSConditionalType' === n.type) return !0
      case 'TSUnionType':
      case 'TSIntersectionType':
        if (
          ('TSUnionType' === n.type || 'TSIntersectionType' === n.type) &&
          n.types.length > 1 &&
          (!i.types || i.types.length > 1)
        )
          return !0
      case 'TSInferType':
        if ('TSInferType' === i.type && 'TSRestType' === n.type) return !1
      case 'TSTypeOperator':
        return (
          'TSArrayType' === n.type ||
          'TSOptionalType' === n.type ||
          'TSRestType' === n.type ||
          ('objectType' === r && 'TSIndexedAccessType' === n.type) ||
          'TSTypeOperator' === n.type ||
          ('TSTypeAnnotation' === n.type &&
            /^TSJSDoc/.test(e.getParentNode(1).type))
        )
      case 'ArrayTypeAnnotation':
        return 'NullableTypeAnnotation' === n.type
      case 'IntersectionTypeAnnotation':
      case 'UnionTypeAnnotation':
        return (
          'ArrayTypeAnnotation' === n.type ||
          'NullableTypeAnnotation' === n.type ||
          'IntersectionTypeAnnotation' === n.type ||
          'UnionTypeAnnotation' === n.type ||
          ('objectType' === r &&
            ('IndexedAccessType' === n.type ||
              'OptionalIndexedAccessType' === n.type))
        )
      case 'NullableTypeAnnotation':
        return (
          'ArrayTypeAnnotation' === n.type ||
          ('objectType' === r &&
            ('IndexedAccessType' === n.type ||
              'OptionalIndexedAccessType' === n.type))
        )
      case 'FunctionTypeAnnotation': {
        const t = 'NullableTypeAnnotation' === n.type ? e.getParentNode(1) : n
        return (
          'UnionTypeAnnotation' === t.type ||
          'IntersectionTypeAnnotation' === t.type ||
          'ArrayTypeAnnotation' === t.type ||
          ('objectType' === r &&
            ('IndexedAccessType' === t.type ||
              'OptionalIndexedAccessType' === t.type)) ||
          'NullableTypeAnnotation' === t.type ||
          ('FunctionTypeParam' === n.type &&
            null === n.name &&
            zy(i).some(
              (e) =>
                e.typeAnnotation &&
                'NullableTypeAnnotation' === e.typeAnnotation.type
            ))
        )
      }
      case 'OptionalIndexedAccessType':
        return 'objectType' === r && 'IndexedAccessType' === n.type
      case 'TypeofTypeAnnotation':
        return (
          'objectType' === r &&
          ('IndexedAccessType' === n.type ||
            'OptionalIndexedAccessType' === n.type)
        )
      case 'StringLiteral':
      case 'NumericLiteral':
      case 'Literal':
        if (
          'string' == typeof i.value &&
          'ExpressionStatement' === n.type &&
          !n.directive
        ) {
          const t = e.getParentNode(1)
          return 'Program' === t.type || 'BlockStatement' === t.type
        }
        return (
          'object' === r &&
          'MemberExpression' === n.type &&
          'number' == typeof i.value
        )
      case 'AssignmentExpression': {
        const t = e.getParentNode(1)
        return (
          ('body' === r && 'ArrowFunctionExpression' === n.type) ||
          (('key' !== r ||
            ('ClassProperty' !== n.type && 'PropertyDefinition' !== n.type) ||
            !n.computed) &&
            (('init' !== r && 'update' !== r) || 'ForStatement' !== n.type) &&
            ('ExpressionStatement' === n.type
              ? 'ObjectPattern' === i.left.type
              : ('key' !== r || 'TSPropertySignature' !== n.type) &&
                'AssignmentExpression' !== n.type &&
                ('SequenceExpression' !== n.type ||
                  !t ||
                  'ForStatement' !== t.type ||
                  (t.init !== n && t.update !== n)) &&
                ('value' !== r ||
                  'Property' !== n.type ||
                  !t ||
                  'ObjectPattern' !== t.type ||
                  !t.properties.includes(n)) &&
                'NGChainedExpression' !== n.type))
        )
      }
      case 'ConditionalExpression':
        switch (n.type) {
          case 'TaggedTemplateExpression':
          case 'UnaryExpression':
          case 'SpreadElement':
          case 'SpreadProperty':
          case 'BinaryExpression':
          case 'LogicalExpression':
          case 'NGPipeExpression':
          case 'ExportDefaultDeclaration':
          case 'AwaitExpression':
          case 'JSXSpreadAttribute':
          case 'TSTypeAssertion':
          case 'TypeCastExpression':
          case 'TSAsExpression':
          case 'TSNonNullExpression':
            return !0
          case 'NewExpression':
          case 'CallExpression':
          case 'OptionalCallExpression':
            return 'callee' === r
          case 'ConditionalExpression':
            return 'test' === r
          case 'MemberExpression':
          case 'OptionalMemberExpression':
            return 'object' === r
          default:
            return !1
        }
      case 'FunctionExpression':
        switch (n.type) {
          case 'NewExpression':
          case 'CallExpression':
          case 'OptionalCallExpression':
            return 'callee' === r
          case 'TaggedTemplateExpression':
            return !0
          default:
            return !1
        }
      case 'ArrowFunctionExpression':
        switch (n.type) {
          case 'PipelineTopicExpression':
            return Boolean(i.extra && i.extra.parenthesized)
          case 'BinaryExpression':
            return '|>' !== n.operator || (i.extra && i.extra.parenthesized)
          case 'NewExpression':
          case 'CallExpression':
          case 'OptionalCallExpression':
            return 'callee' === r
          case 'MemberExpression':
          case 'OptionalMemberExpression':
            return 'object' === r
          case 'TSAsExpression':
          case 'TSNonNullExpression':
          case 'BindExpression':
          case 'TaggedTemplateExpression':
          case 'UnaryExpression':
          case 'LogicalExpression':
          case 'AwaitExpression':
          case 'TSTypeAssertion':
            return !0
          case 'ConditionalExpression':
            return 'test' === r
          default:
            return !1
        }
      case 'ClassExpression':
        switch (n.type) {
          case 'NewExpression':
            return 'callee' === r
          default:
            return !1
        }
      case 'OptionalMemberExpression':
      case 'OptionalCallExpression': {
        const t = e.getParentNode(1)
        if (
          ('object' === r && 'MemberExpression' === n.type) ||
          ('callee' === r &&
            ('CallExpression' === n.type || 'NewExpression' === n.type)) ||
          ('TSNonNullExpression' === n.type &&
            'MemberExpression' === t.type &&
            t.object === n)
        )
          return !0
      }
      case 'CallExpression':
      case 'MemberExpression':
      case 'TaggedTemplateExpression':
      case 'TSNonNullExpression':
        if (
          'callee' === r &&
          ('BindExpression' === n.type || 'NewExpression' === n.type)
        ) {
          let e = i
          for (; e; )
            switch (e.type) {
              case 'CallExpression':
              case 'OptionalCallExpression':
                return !0
              case 'MemberExpression':
              case 'OptionalMemberExpression':
              case 'BindExpression':
                e = e.object
                break
              case 'TaggedTemplateExpression':
                e = e.tag
                break
              case 'TSNonNullExpression':
                e = e.expression
                break
              default:
                return !1
            }
        }
        return !1
      case 'BindExpression':
        return (
          ('callee' === r &&
            ('BindExpression' === n.type || 'NewExpression' === n.type)) ||
          ('object' === r && tD(n))
        )
      case 'NGPipeExpression':
        return !(
          'NGRoot' === n.type ||
          'NGMicrosyntaxExpression' === n.type ||
          ('ObjectProperty' === n.type &&
            (!i.extra || !i.extra.parenthesized)) ||
          'ArrayExpression' === n.type ||
          (eD(n) && n.arguments[r] === i) ||
          ('right' === r && 'NGPipeExpression' === n.type) ||
          ('property' === r && 'MemberExpression' === n.type) ||
          'AssignmentExpression' === n.type
        )
      case 'JSXFragment':
      case 'JSXElement':
        return (
          'callee' === r ||
          ('left' === r &&
            'BinaryExpression' === n.type &&
            '<' === n.operator) ||
          ('ArrayExpression' !== n.type &&
            'ArrowFunctionExpression' !== n.type &&
            'AssignmentExpression' !== n.type &&
            'AssignmentPattern' !== n.type &&
            'BinaryExpression' !== n.type &&
            'NewExpression' !== n.type &&
            'ConditionalExpression' !== n.type &&
            'ExpressionStatement' !== n.type &&
            'JsExpressionRoot' !== n.type &&
            'JSXAttribute' !== n.type &&
            'JSXElement' !== n.type &&
            'JSXExpressionContainer' !== n.type &&
            'JSXFragment' !== n.type &&
            'LogicalExpression' !== n.type &&
            !eD(n) &&
            !nD(n) &&
            'ReturnStatement' !== n.type &&
            'ThrowStatement' !== n.type &&
            'TypeCastExpression' !== n.type &&
            'VariableDeclarator' !== n.type &&
            'YieldExpression' !== n.type)
        )
      case 'TypeAnnotation':
        return (
          'returnType' === r &&
          'ArrowFunctionExpression' === n.type &&
          (function (e) {
            return Xy(
              e,
              (e) =>
                ('ObjectTypeAnnotation' === e.type &&
                  Xy(
                    e,
                    (e) => 'FunctionTypeAnnotation' === e.type || void 0
                  )) ||
                void 0
            )
          })(i)
        )
    }
    return !1
  }
  function iD(e) {
    const t = e.getValue(),
      n = e.getParentNode(),
      r = e.getName()
    switch (n.type) {
      case 'NGPipeExpression':
        if (
          'number' == typeof r &&
          n.arguments[r] === t &&
          n.arguments.length - 1 === r
        )
          return e.callParent(iD)
        break
      case 'ObjectProperty':
        if ('value' === r) {
          const t = e.getParentNode(1)
          return _n(t.properties) === n
        }
        break
      case 'BinaryExpression':
      case 'LogicalExpression':
        if ('right' === r) return e.callParent(iD)
        break
      case 'ConditionalExpression':
        if ('alternate' === r) return e.callParent(iD)
        break
      case 'UnaryExpression':
        if (n.prefix) return e.callParent(iD)
    }
    return !1
  }
  function uD(e, t) {
    const n = e.getValue(),
      r = e.getParentNode()
    return 'FunctionExpression' === n.type || 'ClassExpression' === n.type
      ? 'ExportDefaultDeclaration' === r.type || !rD(e, t)
      : !(!Jy(n) || ('ExportDefaultDeclaration' !== r.type && rD(e, t))) &&
          e.call((e) => uD(e, t), ...Gy(e, n))
  }
  var oD = rD
  var sD = function (e, t) {
    switch (t.parser) {
      case 'json':
      case 'json5':
      case 'json-stringify':
      case '__js_expression':
      case '__vue_expression':
        return Object.assign(
          Object.assign({}, e),
          {},
          {
            type: t.parser.startsWith('__') ? 'JsExpressionRoot' : 'JsonRoot',
            node: e,
            comments: [],
            rootMarker: t.rootMarker
          }
        )
      default:
        return e
    }
  }
  const {
    builders: { join: aD, line: cD, group: lD, softline: pD, indent: fD }
  } = su
  var dD = {
    isVueEventBindingExpression: function e(t) {
      switch (t.type) {
        case 'MemberExpression':
          switch (t.property.type) {
            case 'Identifier':
            case 'NumericLiteral':
            case 'StringLiteral':
              return e(t.object)
          }
          return !1
        case 'Identifier':
          return !0
        default:
          return !1
      }
    },
    printHtmlBinding: function (e, t, n) {
      const r = e.getValue()
      if (
        (t.__onHtmlBindingRoot &&
          null === e.getName() &&
          t.__onHtmlBindingRoot(r, t),
        'File' === r.type)
      )
        return t.__isVueForBindingLeft
          ? e.call(
              (e) => {
                const t = aD([',', cD], e.map(n, 'params')),
                  { params: r } = e.getValue()
                return 1 === r.length ? t : ['(', fD([pD, lD(t)]), pD, ')']
              },
              'program',
              'body',
              0
            )
          : t.__isVueBindings
          ? e.call(
              (e) => aD([',', cD], e.map(n, 'params')),
              'program',
              'body',
              0
            )
          : void 0
    }
  }
  const { printComments: hD } = Yf,
    { getLast: gD } = Fi,
    {
      builders: {
        join: mD,
        line: yD,
        softline: DD,
        group: ED,
        indent: CD,
        align: bD,
        ifBreak: AD,
        indentIfBreak: vD
      },
      utils: { cleanDoc: FD, getDocParts: xD, isConcat: SD }
    } = su,
    {
      hasLeadingOwnLineComment: wD,
      isBinaryish: TD,
      isJsxNode: BD,
      shouldFlatten: ND,
      hasComment: kD,
      CommentCheckFlags: PD,
      isCallExpression: OD,
      isMemberExpression: ID,
      isObjectProperty: LD
    } = eg
  let jD = 0
  function _D(e, t, n, r, i) {
    let u = []
    const o = e.getValue()
    if (TD(o)) {
      ND(o.operator, o.left.operator)
        ? (u = [...u, ...e.call((e) => _D(e, t, n, !0, i), 'left')])
        : u.push(ED(t('left')))
      const s = MD(o),
        a =
          ('|>' === o.operator ||
            'NGPipeExpression' === o.type ||
            ('|' === o.operator && '__vue_expression' === n.parser)) &&
          !wD(n.originalText, o.right),
        c = 'NGPipeExpression' === o.type ? '|' : o.operator,
        l =
          'NGPipeExpression' === o.type && o.arguments.length > 0
            ? ED(
                CD([
                  DD,
                  ': ',
                  mD(
                    [DD, ':', AD(' ')],
                    e.map(t, 'arguments').map((e) => bD(2, ED(e)))
                  )
                ])
              )
            : '',
        p = s
          ? [c, ' ', t('right'), l]
          : [a ? yD : '', c, a ? ' ' : yD, t('right'), l],
        f = e.getParentNode(),
        d = kD(o.left, PD.Trailing | PD.Line),
        h =
          d ||
          (!(i && 'LogicalExpression' === o.type) &&
            f.type !== o.type &&
            o.left.type !== o.type &&
            o.right.type !== o.type)
      if (
        (u.push(a ? '' : ' ', h ? ED(p, { shouldBreak: d }) : p), r && kD(o))
      ) {
        const t = FD(hD(e, u, n))
        u = SD(t) || 'fill' === t.type ? xD(t) : [t]
      }
    } else u.push(ED(t()))
    return u
  }
  function MD(e) {
    return (
      'LogicalExpression' === e.type &&
      (('ObjectExpression' === e.right.type && e.right.properties.length > 0) ||
        ('ArrayExpression' === e.right.type && e.right.elements.length > 0) ||
        !!BD(e.right))
    )
  }
  var RD = {
    printBinaryishExpression: function (e, t, n) {
      const r = e.getValue(),
        i = e.getParentNode(),
        u = e.getParentNode(1),
        o =
          r !== i.body &&
          ('IfStatement' === i.type ||
            'WhileStatement' === i.type ||
            'SwitchStatement' === i.type ||
            'DoWhileStatement' === i.type),
        s = _D(e, n, t, !1, o)
      if (o) return s
      if (
        (OD(i) && i.callee === r) ||
        'UnaryExpression' === i.type ||
        (ID(i) && !i.computed)
      )
        return ED([CD([DD, ...s]), DD])
      const a =
          'ReturnStatement' === i.type ||
          'ThrowStatement' === i.type ||
          ('JSXExpressionContainer' === i.type && 'JSXAttribute' === u.type) ||
          ('|' !== r.operator && 'JsExpressionRoot' === i.type) ||
          ('NGPipeExpression' !== r.type &&
            (('NGRoot' === i.type && '__ng_binding' === t.parser) ||
              ('NGMicrosyntaxExpression' === i.type &&
                'NGMicrosyntax' === u.type &&
                1 === u.body.length))) ||
          (r === i.body && 'ArrowFunctionExpression' === i.type) ||
          (r !== i.body && 'ForStatement' === i.type) ||
          ('ConditionalExpression' === i.type &&
            'ReturnStatement' !== u.type &&
            'ThrowStatement' !== u.type &&
            !OD(u)) ||
          'TemplateLiteral' === i.type,
        c =
          'AssignmentExpression' === i.type ||
          'VariableDeclarator' === i.type ||
          'ClassProperty' === i.type ||
          'PropertyDefinition' === i.type ||
          'TSAbstractClassProperty' === i.type ||
          'ClassPrivateProperty' === i.type ||
          LD(i),
        l = TD(r.left) && ND(r.operator, r.left.operator)
      if (a || (MD(r) && !l) || (!MD(r) && c)) return ED(s)
      if (0 === s.length) return ''
      const p = BD(r.right),
        f = s.findIndex(
          (e) => 'string' != typeof e && !Array.isArray(e) && 'group' === e.type
        ),
        d = s.slice(0, -1 === f ? 1 : f + 1),
        h = s.slice(d.length, p ? -1 : void 0),
        g = Symbol('logicalChain-' + ++jD),
        m = ED([...d, CD(h)], { id: g })
      if (!p) return m
      const y = gD(s)
      return ED([m, vD(y, { groupId: g })])
    },
    shouldInlineLogicalExpression: MD
  }
  const {
      builders: { join: $D, line: VD, group: WD }
    } = su,
    { hasNode: qD, hasComment: UD, getComments: zD } = eg,
    { printBinaryishExpression: GD } = RD
  function HD(e, t, n) {
    return (
      'NGMicrosyntaxKeyedExpression' === e.type &&
      'of' === e.key.name &&
      1 === t &&
      'NGMicrosyntaxLet' === n.body[0].type &&
      null === n.body[0].value
    )
  }
  var JD = {
    printAngular: function (e, t, n) {
      const r = e.getValue()
      if (r.type.startsWith('NG'))
        switch (r.type) {
          case 'NGRoot':
            return [
              n('node'),
              UD(r.node) ? ' //' + zD(r.node)[0].value.trimEnd() : ''
            ]
          case 'NGPipeExpression':
            return GD(e, t, n)
          case 'NGChainedExpression':
            return WD(
              $D(
                [';', VD],
                e.map(
                  (e) =>
                    (function (e) {
                      return qD(e.getValue(), (e) => {
                        switch (e.type) {
                          case void 0:
                            return !1
                          case 'CallExpression':
                          case 'OptionalCallExpression':
                          case 'AssignmentExpression':
                            return !0
                        }
                      })
                    })(e)
                      ? n()
                      : ['(', n(), ')'],
                  'expressions'
                )
              )
            )
          case 'NGEmptyExpression':
            return ''
          case 'NGQuotedExpression':
            return [r.prefix, ': ', r.value.trim()]
          case 'NGMicrosyntax':
            return e.map(
              (e, t) => [
                0 === t ? '' : HD(e.getValue(), t, r) ? ' ' : [';', VD],
                n()
              ],
              'body'
            )
          case 'NGMicrosyntaxKey':
            return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(r.name)
              ? r.name
              : JSON.stringify(r.name)
          case 'NGMicrosyntaxExpression':
            return [
              n('expression'),
              null === r.alias ? '' : [' as ', n('alias')]
            ]
          case 'NGMicrosyntaxKeyedExpression': {
            const t = e.getName(),
              i = e.getParentNode(),
              u =
                HD(r, t, i) ||
                (((1 === t &&
                  ('then' === r.key.name || 'else' === r.key.name)) ||
                  (2 === t &&
                    'else' === r.key.name &&
                    'NGMicrosyntaxKeyedExpression' === i.body[t - 1].type &&
                    'then' === i.body[t - 1].key.name)) &&
                  'NGMicrosyntaxExpression' === i.body[0].type)
            return [n('key'), u ? ' ' : ': ', n('expression')]
          }
          case 'NGMicrosyntaxLet':
            return [
              'let ',
              n('key'),
              null === r.value ? '' : [' = ', n('value')]
            ]
          case 'NGMicrosyntaxAs':
            return [n('key'), ' as ', n('alias')]
          default:
            throw new Error(
              `Unknown Angular node type: ${JSON.stringify(r.type)}.`
            )
        }
    }
  }
  const { printComments: XD, printDanglingComments: YD } = Yf,
    {
      builders: {
        line: KD,
        hardline: QD,
        softline: ZD,
        group: eE,
        indent: tE,
        conditionalGroup: nE,
        fill: rE,
        ifBreak: iE,
        lineSuffixBoundary: uE,
        join: oE
      },
      utils: { willBreak: sE }
    } = su,
    { getLast: aE, getPreferredQuote: cE } = Fi,
    {
      isJsxNode: lE,
      rawText: pE,
      isLiteral: fE,
      isCallExpression: dE,
      isStringLiteral: hE,
      isBinaryish: gE,
      hasComment: mE,
      CommentCheckFlags: yE,
      hasNodeIgnoreComment: DE
    } = eg,
    { willPrintOwnComments: EE } = Uy,
    CE = (e) => '' === e || e === KD || e === QD || e === ZD
  function bE(e, t, n) {
    const r = e.getValue()
    if (
      'JSXElement' === r.type &&
      (function (e) {
        if (0 === e.children.length) return !0
        if (e.children.length > 1) return !1
        const t = e.children[0]
        return fE(t) && !BE(t)
      })(r)
    )
      return [n('openingElement'), n('closingElement')]
    const i =
        'JSXElement' === r.type ? n('openingElement') : n('openingFragment'),
      u = 'JSXElement' === r.type ? n('closingElement') : n('closingFragment')
    if (
      1 === r.children.length &&
      'JSXExpressionContainer' === r.children[0].type &&
      ('TemplateLiteral' === r.children[0].expression.type ||
        'TaggedTemplateExpression' === r.children[0].expression.type)
    )
      return [i, ...e.map(n, 'children'), u]
    r.children = r.children.map((e) =>
      (function (e) {
        return (
          'JSXExpressionContainer' === e.type &&
          fE(e.expression) &&
          ' ' === e.expression.value &&
          !mE(e.expression)
        )
      })(e)
        ? { type: 'JSXText', value: ' ', raw: ' ' }
        : e
    )
    const o = r.children.filter(lE).length > 0,
      s =
        r.children.filter((e) => 'JSXExpressionContainer' === e.type).length >
        1,
      a = 'JSXElement' === r.type && r.openingElement.attributes.length > 1
    let c = sE(i) || o || a || s
    const l = 'mdx' === e.getParentNode().rootMarker,
      p = t.singleQuote ? "{' '}" : '{" "}',
      f = l ? ' ' : iE([p, ZD], ' '),
      d = (function (e, t, n, r, i) {
        const u = []
        return (
          e.each((e, t, o) => {
            const s = e.getValue()
            if (fE(s)) {
              const e = pE(s)
              if (BE(s)) {
                const n = e.split(SE)
                if ('' === n[0]) {
                  if ((u.push(''), n.shift(), /\n/.test(n[0]))) {
                    const e = o[t + 1]
                    u.push(vE(i, n[1], s, e))
                  } else u.push(r)
                  n.shift()
                }
                let a
                if (('' === aE(n) && (n.pop(), (a = n.pop())), 0 === n.length))
                  return
                for (const [e, t] of n.entries())
                  e % 2 == 1 ? u.push(KD) : u.push(t)
                if (void 0 !== a)
                  if (/\n/.test(a)) {
                    const e = o[t + 1]
                    u.push(vE(i, aE(u), s, e))
                  } else u.push(r)
                else {
                  const e = o[t + 1]
                  u.push(AE(i, aE(u), s, e))
                }
              } else
                /\n/.test(e)
                  ? e.match(/\n/g).length > 1 && u.push('', QD)
                  : u.push('', r)
            } else {
              const e = n()
              u.push(e)
              const r = o[t + 1]
              if (r && BE(r)) {
                const e = TE(pE(r)).split(SE)[0]
                u.push(AE(i, e, s, r))
              } else u.push(QD)
            }
          }, 'children'),
          u
        )
      })(
        e,
        0,
        n,
        f,
        r.openingElement &&
          r.openingElement.name &&
          'fbt' === r.openingElement.name.name
      ),
      h = r.children.some((e) => BE(e))
    for (let e = d.length - 2; e >= 0; e--) {
      const t = '' === d[e] && '' === d[e + 1],
        n = d[e] === QD && '' === d[e + 1] && d[e + 2] === QD,
        r = (d[e] === ZD || d[e] === QD) && '' === d[e + 1] && d[e + 2] === f,
        i =
          d[e] === f && '' === d[e + 1] && (d[e + 2] === ZD || d[e + 2] === QD),
        u = d[e] === f && '' === d[e + 1] && d[e + 2] === f,
        o =
          (d[e] === ZD && '' === d[e + 1] && d[e + 2] === QD) ||
          (d[e] === QD && '' === d[e + 1] && d[e + 2] === ZD)
      ;(n && h) || t || r || u || o ? d.splice(e, 2) : i && d.splice(e + 1, 2)
    }
    for (; d.length > 0 && CE(aE(d)); ) d.pop()
    for (; d.length > 1 && CE(d[0]) && CE(d[1]); ) d.shift(), d.shift()
    const g = []
    for (const [e, t] of d.entries()) {
      if (t === f) {
        if (1 === e && '' === d[e - 1]) {
          if (2 === d.length) {
            g.push(p)
            continue
          }
          g.push([p, QD])
          continue
        }
        if (e === d.length - 1) {
          g.push(p)
          continue
        }
        if ('' === d[e - 1] && d[e - 2] === QD) {
          g.push(p)
          continue
        }
      }
      g.push(t), sE(t) && (c = !0)
    }
    const m = h ? rE(g) : eE(g, { shouldBreak: !0 })
    if (l) return m
    const y = eE([i, tE([QD, m]), QD, u])
    return c ? y : nE([eE([i, ...d, u]), y])
  }
  function AE(e, t, n, r) {
    return e
      ? ''
      : ('JSXElement' === n.type && !n.closingElement) ||
        (r && 'JSXElement' === r.type && !r.closingElement)
      ? 1 === t.length
        ? ZD
        : QD
      : ZD
  }
  function vE(e, t, n, r) {
    return e
      ? QD
      : 1 === t.length
      ? ('JSXElement' === n.type && !n.closingElement) ||
        (r && 'JSXElement' === r.type && !r.closingElement)
        ? QD
        : ZD
      : QD
  }
  function FE(e, t, n) {
    return (function (e, t, n) {
      const r = e.getParentNode()
      if (!r) return t
      if (
        {
          ArrayExpression: !0,
          JSXAttribute: !0,
          JSXElement: !0,
          JSXExpressionContainer: !0,
          JSXFragment: !0,
          ExpressionStatement: !0,
          CallExpression: !0,
          OptionalCallExpression: !0,
          ConditionalExpression: !0,
          JsExpressionRoot: !0
        }[r.type]
      )
        return t
      const i = e.match(
          void 0,
          (e) => 'ArrowFunctionExpression' === e.type,
          dE,
          (e) => 'JSXExpressionContainer' === e.type
        ),
        u = oD(e, n)
      return eE([u ? '' : iE('('), tE([ZD, t]), ZD, u ? '' : iE(')')], {
        shouldBreak: i
      })
    })(e, XD(e, bE(e, t, n), t), t)
  }
  function xE(e, t, n) {
    const r = e.getValue()
    return [
      '{',
      e.call(
        (e) => {
          const r = ['...', n()],
            i = e.getValue()
          return mE(i) && EE(e) ? [tE([ZD, XD(e, r, t)]), ZD] : r
        },
        'JSXSpreadAttribute' === r.type ? 'argument' : 'expression'
      ),
      '}'
    ]
  }
  const SE = new RegExp('([ \n\r\t]+)'),
    wE = new RegExp('[^ \n\r\t]'),
    TE = (e) =>
      e.replace(new RegExp('(?:^' + SE.source + '|' + SE.source + '$)'), '')
  function BE(e) {
    return fE(e) && (wE.test(pE(e)) || !/\n/.test(pE(e)))
  }
  var NE = {
    hasJsxIgnoreComment: function (e) {
      const t = e.getValue(),
        n = e.getParentNode()
      if (!(n && t && lE(t) && lE(n))) return !1
      let r = null
      for (let e = n.children.indexOf(t); e > 0; e--) {
        const t = n.children[e - 1]
        if ('JSXText' !== t.type || BE(t)) {
          r = t
          break
        }
      }
      return (
        r &&
        'JSXExpressionContainer' === r.type &&
        'JSXEmptyExpression' === r.expression.type &&
        DE(r.expression)
      )
    },
    printJsx: function (e, t, n) {
      const r = e.getValue()
      if (r.type.startsWith('JSX'))
        switch (r.type) {
          case 'JSXAttribute':
            return (function (e, t, n) {
              const r = e.getValue(),
                i = []
              if ((i.push(n('name')), r.value)) {
                let e
                if (hE(r.value)) {
                  let n = pE(r.value)
                    .replace(/&apos;/g, "'")
                    .replace(/&quot;/g, '"')
                  const i = cE(n, t.jsxSingleQuote ? "'" : '"'),
                    u = "'" === i ? '&apos;' : '&quot;'
                  ;(n = n.slice(1, -1).replace(new RegExp(i, 'g'), u)),
                    (e = [i, n, i])
                } else e = n('value')
                i.push('=', e)
              }
              return i
            })(e, t, n)
          case 'JSXIdentifier':
            return String(r.name)
          case 'JSXNamespacedName':
            return oE(':', [n('namespace'), n('name')])
          case 'JSXMemberExpression':
            return oE('.', [n('object'), n('property')])
          case 'JSXSpreadAttribute':
            return xE(e, t, n)
          case 'JSXSpreadChild':
            return xE(e, t, n)
          case 'JSXExpressionContainer':
            return (function (e, t, n) {
              const r = e.getValue(),
                i = e.getParentNode(0),
                u =
                  'JSXEmptyExpression' === r.expression.type ||
                  (!mE(r.expression) &&
                    ('ArrayExpression' === r.expression.type ||
                      'ObjectExpression' === r.expression.type ||
                      'ArrowFunctionExpression' === r.expression.type ||
                      dE(r.expression) ||
                      'FunctionExpression' === r.expression.type ||
                      'TemplateLiteral' === r.expression.type ||
                      'TaggedTemplateExpression' === r.expression.type ||
                      'DoExpression' === r.expression.type ||
                      (lE(i) &&
                        ('ConditionalExpression' === r.expression.type ||
                          gE(r.expression)))))
              return eE(
                u
                  ? ['{', n('expression'), uE, '}']
                  : ['{', tE([ZD, n('expression')]), ZD, uE, '}']
              )
            })(e, 0, n)
          case 'JSXFragment':
          case 'JSXElement':
            return FE(e, t, n)
          case 'JSXOpeningElement':
            return (function (e, t, n) {
              const r = e.getValue(),
                i =
                  (r.name && mE(r.name)) ||
                  (r.typeParameters && mE(r.typeParameters))
              if (r.selfClosing && 0 === r.attributes.length && !i)
                return ['<', n('name'), n('typeParameters'), ' />']
              if (
                r.attributes &&
                1 === r.attributes.length &&
                r.attributes[0].value &&
                hE(r.attributes[0].value) &&
                !r.attributes[0].value.value.includes('\n') &&
                !i &&
                !mE(r.attributes[0])
              )
                return eE([
                  '<',
                  n('name'),
                  n('typeParameters'),
                  ' ',
                  ...e.map(n, 'attributes'),
                  r.selfClosing ? ' />' : '>'
                ])
              const u =
                  r.attributes.length > 0 && mE(aE(r.attributes), yE.Trailing),
                o =
                  (0 === r.attributes.length && !i) ||
                  ((t.bracketSameLine || t.jsxBracketSameLine) &&
                    (!i || r.attributes.length > 0) &&
                    !u),
                s =
                  r.attributes &&
                  r.attributes.some(
                    (e) =>
                      e.value && hE(e.value) && e.value.value.includes('\n')
                  )
              return eE(
                [
                  '<',
                  n('name'),
                  n('typeParameters'),
                  tE(e.map(() => [KD, n()], 'attributes')),
                  r.selfClosing ? KD : o ? '>' : ZD,
                  r.selfClosing ? '/>' : o ? '' : '>'
                ],
                { shouldBreak: s }
              )
            })(e, t, n)
          case 'JSXClosingElement':
            return (function (e, t, n) {
              const r = e.getValue(),
                i = []
              i.push('</')
              const u = n('name')
              return (
                mE(r.name, yE.Leading | yE.Line)
                  ? i.push(tE([QD, u]), QD)
                  : mE(r.name, yE.Leading | yE.Block)
                  ? i.push(' ', u)
                  : i.push(u),
                i.push('>'),
                i
              )
            })(e, 0, n)
          case 'JSXOpeningFragment':
          case 'JSXClosingFragment':
            return (function (e, t) {
              const n = e.getValue(),
                r = mE(n),
                i = mE(n, yE.Line),
                u = 'JSXOpeningFragment' === n.type
              return [
                u ? '<' : '</',
                tE([i ? QD : r && !u ? ' ' : '', YD(e, t, !0)]),
                i ? QD : '',
                '>'
              ]
            })(e, t)
          case 'JSXEmptyExpression':
            return (function (e, t) {
              const n = e.getValue(),
                r = mE(n, yE.Line)
              return [YD(e, t, !r), r ? QD : '']
            })(e, t)
          case 'JSXText':
            throw new Error('JSXTest should be handled by JSXElement')
          default:
            throw new Error(`Unknown JSX node type: ${JSON.stringify(r.type)}.`)
        }
    }
  }
  tt(
    { target: 'Array', proto: !0 },
    {
      flat: function () {
        var e = arguments.length ? arguments[0] : void 0,
          t = U(this),
          n = _e(t.length),
          r = Un(t, 0)
        return (r.length = Wn(r, t, t, n, 0, void 0 === e ? 1 : Le(e))), r
      }
    }
  )
  const { isNonEmptyArray: kE } = Fi,
    {
      builders: { indent: PE, join: OE, line: IE }
    } = su,
    { isFlowAnnotationComment: LE } = eg
  function jE(e, t, n) {
    const r = e.getValue()
    if (!r.typeAnnotation) return ''
    const i = e.getParentNode(),
      u = r.definite || (i && 'VariableDeclarator' === i.type && i.definite),
      o = 'DeclareFunction' === i.type && i.id === r
    return LE(t.originalText, r.typeAnnotation)
      ? [' /*: ', n('typeAnnotation'), ' */']
      : [o ? '' : u ? '!: ' : ': ', n('typeAnnotation')]
  }
  var _E = {
    printOptionalToken: function (e) {
      const t = e.getValue()
      return !t.optional ||
        ('Identifier' === t.type && t === e.getParentNode().key)
        ? ''
        : 'OptionalCallExpression' === t.type ||
          ('OptionalMemberExpression' === t.type && t.computed)
        ? '?.'
        : '?'
    },
    printFunctionTypeParameters: function (e, t, n) {
      const r = e.getValue()
      return r.typeArguments
        ? n('typeArguments')
        : r.typeParameters
        ? n('typeParameters')
        : ''
    },
    printBindExpressionCallee: function (e, t, n) {
      return ['::', n('callee')]
    },
    printTypeScriptModifiers: function (e, t, n) {
      const r = e.getValue()
      return kE(r.modifiers) ? [OE(' ', e.map(n, 'modifiers')), ' '] : ''
    },
    printTypeAnnotation: jE,
    printRestSpread: function (e, t, n) {
      return ['...', n('argument'), jE(e, t, n)]
    },
    adjustClause: function (e, t, n) {
      return 'EmptyStatement' === e.type
        ? ';'
        : 'BlockStatement' === e.type || n
        ? [' ', t]
        : PE([IE, t])
    }
  }
  const { printDanglingComments: ME } = Yf,
    {
      builders: {
        line: RE,
        softline: $E,
        hardline: VE,
        group: WE,
        indent: qE,
        ifBreak: UE,
        fill: zE
      }
    } = su,
    { getLast: GE, hasNewline: HE } = Fi,
    {
      shouldPrintComma: JE,
      hasComment: XE,
      CommentCheckFlags: YE,
      isNextLineEmpty: KE,
      isNumericLiteral: QE,
      isSignedNumericLiteral: ZE
    } = eg,
    { locStart: eC } = Zc,
    { printOptionalToken: tC, printTypeAnnotation: nC } = _E
  function rC(e, t) {
    return (
      e.elements.length > 1 &&
      e.elements.every(
        (e) =>
          e &&
          (QE(e) || (ZE(e) && !XE(e.argument))) &&
          !XE(
            e,
            YE.Trailing | YE.Line,
            (e) => !HE(t.originalText, eC(e), { backwards: !0 })
          )
      )
    )
  }
  function iC(e, t, n, r) {
    const i = []
    let u = []
    return (
      e.each((e) => {
        i.push(u, WE(r())),
          (u = [',', RE]),
          e.getValue() && KE(e.getValue(), t) && u.push($E)
      }, n),
      i
    )
  }
  function uC(e, t, n, r) {
    const i = []
    return (
      e.each((e, u, o) => {
        const s = u === o.length - 1
        i.push([n(), s ? r : ',']),
          s ||
            i.push(
              KE(e.getValue(), t)
                ? [VE, VE]
                : XE(o[u + 1], YE.Leading | YE.Line)
                ? VE
                : RE
            )
      }, 'elements'),
      zE(i)
    )
  }
  var oC = {
    printArray: function (e, t, n) {
      const r = e.getValue(),
        i = [],
        u = 'TupleExpression' === r.type ? '#[' : '['
      if (0 === r.elements.length)
        XE(r, YE.Dangling) ? i.push(WE([u, ME(e, t), $E, ']'])) : i.push(u, ']')
      else {
        const o = GE(r.elements),
          s = !(o && 'RestElement' === o.type),
          a = null === o,
          c = Symbol('array'),
          l =
            !t.__inJestEach &&
            r.elements.length > 1 &&
            r.elements.every((e, t, n) => {
              const r = e && e.type
              if ('ArrayExpression' !== r && 'ObjectExpression' !== r) return !1
              const i = n[t + 1]
              if (i && r !== i.type) return !1
              const u = 'ArrayExpression' === r ? 'elements' : 'properties'
              return e[u] && e[u].length > 1
            }),
          p = rC(r, t),
          f = s
            ? a
              ? ','
              : JE(t)
              ? p
                ? UE(',', '', { groupId: c })
                : UE(',')
              : ''
            : ''
        i.push(
          WE(
            [
              u,
              qE([
                $E,
                p ? uC(e, t, n, f) : [iC(e, t, 'elements', n), f],
                ME(e, t, !0)
              ]),
              $E,
              ']'
            ],
            { shouldBreak: l, id: c }
          )
        )
      }
      return i.push(tC(e), nC(e, t, n)), i
    },
    printArrayItems: iC,
    isConciselyPrintedArray: rC
  }
  const { printDanglingComments: sC } = Yf,
    { getLast: aC, getPenultimate: cC } = Fi,
    {
      getFunctionParameters: lC,
      hasComment: pC,
      CommentCheckFlags: fC,
      isFunctionCompositionArgs: dC,
      isJsxNode: hC,
      isLongCurriedCallExpression: gC,
      shouldPrintComma: mC,
      getCallArguments: yC,
      iterateCallArgumentsPath: DC,
      isNextLineEmpty: EC,
      isCallExpression: CC,
      isStringLiteral: bC,
      isObjectProperty: AC
    } = eg,
    {
      builders: {
        line: vC,
        hardline: FC,
        softline: xC,
        group: SC,
        indent: wC,
        conditionalGroup: TC,
        ifBreak: BC,
        breakParent: NC
      },
      utils: { willBreak: kC }
    } = su,
    { ArgExpansionBailout: PC } = Bo,
    { isConciselyPrintedArray: OC } = oC
  function IC(e, t = !1) {
    return (
      ('ObjectExpression' === e.type && (e.properties.length > 0 || pC(e))) ||
      ('ArrayExpression' === e.type && (e.elements.length > 0 || pC(e))) ||
      ('TSTypeAssertion' === e.type && IC(e.expression)) ||
      ('TSAsExpression' === e.type && IC(e.expression)) ||
      'FunctionExpression' === e.type ||
      ('ArrowFunctionExpression' === e.type &&
        (!e.returnType ||
          !e.returnType.typeAnnotation ||
          'TSTypeReference' !== e.returnType.typeAnnotation.type ||
          ('BlockStatement' === (n = e.body).type &&
            (n.body.some((e) => 'EmptyStatement' !== e.type) ||
              pC(n, fC.Dangling)))) &&
        ('BlockStatement' === e.body.type ||
          ('ArrowFunctionExpression' === e.body.type && IC(e.body, !0)) ||
          'ObjectExpression' === e.body.type ||
          'ArrayExpression' === e.body.type ||
          (!t && (CC(e.body) || 'ConditionalExpression' === e.body.type)) ||
          hC(e.body))) ||
      'DoExpression' === e.type ||
      'ModuleExpression' === e.type
    )
    var n
  }
  var LC = function (e, t, n) {
    const r = e.getValue(),
      i = 'ImportExpression' === r.type,
      u = yC(r)
    if (0 === u.length) return ['(', sC(e, t, !0), ')']
    if (
      (function (e) {
        return (
          2 === e.length &&
          'ArrowFunctionExpression' === e[0].type &&
          0 === lC(e[0]).length &&
          'BlockStatement' === e[0].body.type &&
          'ArrayExpression' === e[1].type &&
          !e.some((e) => pC(e))
        )
      })(u)
    )
      return ['(', n(['arguments', 0]), ', ', n(['arguments', 1]), ')']
    let o = !1,
      s = !1
    const a = u.length - 1,
      c = []
    DC(e, (e, r) => {
      const i = e.getNode(),
        u = [n()]
      r === a ||
        (EC(i, t)
          ? (0 === r && (s = !0), (o = !0), u.push(',', FC, FC))
          : u.push(',', vC)),
        c.push(u)
    })
    const l =
      i || (r.callee && 'Import' === r.callee.type) || !mC(t, 'all') ? '' : ','
    function p() {
      return SC(['(', wC([vC, ...c]), l, vC, ')'], { shouldBreak: !0 })
    }
    if (o || ('Decorator' !== e.getParentNode().type && dC(u))) return p()
    const f = (function (e) {
        if (2 !== e.length) return !1
        const [t, n] = e
        if (
          'ModuleExpression' === t.type &&
          (function (e) {
            return (
              'ObjectExpression' === e.type &&
              1 === e.properties.length &&
              AC(e.properties[0]) &&
              'Identifier' === e.properties[0].key.type &&
              'type' === e.properties[0].key.name &&
              bC(e.properties[0].value) &&
              'module' === e.properties[0].value.value
            )
          })(n)
        )
          return !0
        return (
          !pC(t) &&
          ('FunctionExpression' === t.type ||
            ('ArrowFunctionExpression' === t.type &&
              'BlockStatement' === t.body.type)) &&
          'FunctionExpression' !== n.type &&
          'ArrowFunctionExpression' !== n.type &&
          'ConditionalExpression' !== n.type &&
          !IC(n)
        )
      })(u),
      d = (function (e, t) {
        const n = aC(e),
          r = cC(e)
        return (
          !pC(n, fC.Leading) &&
          !pC(n, fC.Trailing) &&
          IC(n) &&
          (!r || r.type !== n.type) &&
          (2 !== e.length ||
            'ArrowFunctionExpression' !== r.type ||
            'ArrayExpression' !== n.type) &&
          !(e.length > 1 && 'ArrayExpression' === n.type && OC(n, t))
        )
      })(u, t)
    if (f || d) {
      if (f ? c.slice(1).some(kC) : c.slice(0, -1).some(kC)) return p()
      let t = []
      try {
        e.try(() => {
          DC(e, (e, r) => {
            f &&
              0 === r &&
              (t = [
                [
                  n([], { expandFirstArg: !0 }),
                  c.length > 1 ? ',' : '',
                  s ? FC : vC,
                  s ? FC : ''
                ],
                ...c.slice(1)
              ]),
              d &&
                r === a &&
                (t = [...c.slice(0, -1), n([], { expandLastArg: !0 })])
          })
        })
      } catch (e) {
        if (e instanceof PC) return p()
        throw e
      }
      return [
        c.some(kC) ? NC : '',
        TC([
          ['(', ...t, ')'],
          f
            ? ['(', SC(t[0], { shouldBreak: !0 }), ...t.slice(1), ')']
            : ['(', ...c.slice(0, -1), SC(aC(t), { shouldBreak: !0 }), ')'],
          p()
        ])
      ]
    }
    const h = ['(', wC([xC, ...c]), BC(l), xC, ')']
    return gC(e) ? h : SC(h, { shouldBreak: c.some(kC) || o })
  }
  const {
      builders: { softline: jC, group: _C, indent: MC, label: RC }
    } = su,
    { isNumericLiteral: $C, isMemberExpression: VC, isCallExpression: WC } = eg,
    { printOptionalToken: qC } = _E
  function UC(e, t, n) {
    const r = n('property'),
      i = e.getValue(),
      u = qC(e)
    return i.computed
      ? !i.property || $C(i.property)
        ? [u, '[', r, ']']
        : _C([u, '[', MC([jC, r]), jC, ']'])
      : [u, '.', r]
  }
  var zC = {
    printMemberExpression: function (e, t, n) {
      const r = e.getValue(),
        i = e.getParentNode()
      let u,
        o = 0
      do {
        ;(u = e.getParentNode(o)), o++
      } while (u && (VC(u) || 'TSNonNullExpression' === u.type))
      const s = n('object'),
        a = UC(e, t, n),
        c =
          (u &&
            ('NewExpression' === u.type ||
              'BindExpression' === u.type ||
              ('AssignmentExpression' === u.type &&
                'Identifier' !== u.left.type))) ||
          r.computed ||
          ('Identifier' === r.object.type &&
            'Identifier' === r.property.type &&
            !VC(i)) ||
          (('AssignmentExpression' === i.type ||
            'VariableDeclarator' === i.type) &&
            ((WC(r.object) && r.object.arguments.length > 0) ||
              ('TSNonNullExpression' === r.object.type &&
                WC(r.object.expression) &&
                r.object.expression.arguments.length > 0) ||
              'member-chain' === s.label))
      return RC('member-chain' === s.label ? 'member-chain' : 'member', [
        s,
        c ? a : _C(MC([jC, a]))
      ])
    },
    printMemberLookup: UC
  }
  const { printComments: GC } = Yf,
    {
      getLast: HC,
      isNextLineEmptyAfterIndex: JC,
      getNextNonSpaceNonCommentCharacterIndex: XC
    } = Fi,
    {
      isCallExpression: YC,
      isMemberExpression: KC,
      isFunctionOrArrowExpression: QC,
      isLongCurriedCallExpression: ZC,
      isMemberish: eb,
      isNumericLiteral: tb,
      isSimpleCallArgument: nb,
      hasComment: rb,
      CommentCheckFlags: ib,
      isNextLineEmpty: ub
    } = eg,
    { locEnd: ob } = Zc,
    {
      builders: {
        join: sb,
        hardline: ab,
        group: cb,
        indent: lb,
        conditionalGroup: pb,
        breakParent: fb,
        label: db
      },
      utils: { willBreak: hb }
    } = su,
    { printMemberLookup: gb } = zC,
    {
      printOptionalToken: mb,
      printFunctionTypeParameters: yb,
      printBindExpressionCallee: Db
    } = _E
  var Eb = function (e, t, n) {
    const r = e.getParentNode(),
      i = !r || 'ExpressionStatement' === r.type,
      u = []
    function o(e) {
      const { originalText: n } = t,
        r = XC(n, e, ob)
      return ')' === n.charAt(r) ? !1 !== r && JC(n, r + 1) : ub(e, t)
    }
    function s(e) {
      const r = e.getValue()
      YC(r) && (eb(r.callee) || YC(r.callee))
        ? (u.unshift({
            node: r,
            printed: [
              GC(e, [mb(e), yb(e, t, n), LC(e, t, n)], t),
              o(r) ? ab : ''
            ]
          }),
          e.call((e) => s(e), 'callee'))
        : eb(r)
        ? (u.unshift({
            node: r,
            needsParens: oD(e, t),
            printed: GC(e, KC(r) ? gb(e, t, n) : Db(e, t, n), t)
          }),
          e.call((e) => s(e), 'object'))
        : 'TSNonNullExpression' === r.type
        ? (u.unshift({ node: r, printed: GC(e, '!', t) }),
          e.call((e) => s(e), 'expression'))
        : u.unshift({ node: r, printed: n() })
    }
    const a = e.getValue()
    u.unshift({ node: a, printed: [mb(e), yb(e, t, n), LC(e, t, n)] }),
      a.callee && e.call((e) => s(e), 'callee')
    const c = []
    let l = [u[0]],
      p = 1
    for (
      ;
      p < u.length &&
      ('TSNonNullExpression' === u[p].node.type ||
        YC(u[p].node) ||
        (KC(u[p].node) && u[p].node.computed && tb(u[p].node.property)));
      ++p
    )
      l.push(u[p])
    if (!YC(u[0].node))
      for (; p + 1 < u.length && eb(u[p].node) && eb(u[p + 1].node); ++p)
        l.push(u[p])
    c.push(l), (l = [])
    let f = !1
    for (; p < u.length; ++p) {
      if (f && eb(u[p].node)) {
        if (u[p].node.computed && tb(u[p].node.property)) {
          l.push(u[p])
          continue
        }
        c.push(l), (l = []), (f = !1)
      }
      ;(YC(u[p].node) || 'ImportExpression' === u[p].node.type) && (f = !0),
        l.push(u[p]),
        rb(u[p].node, ib.Trailing) && (c.push(l), (l = []), (f = !1))
    }
    function d(e) {
      return /^[A-Z]|^[$_]+$/.test(e)
    }
    l.length > 0 && c.push(l)
    const h =
      c.length >= 2 &&
      !rb(c[1][0].node) &&
      (function (e) {
        const n = e[1].length > 0 && e[1][0].node.computed
        if (1 === e[0].length) {
          const r = e[0][0].node
          return (
            'ThisExpression' === r.type ||
            ('Identifier' === r.type &&
              (d(r.name) ||
                (i &&
                  (function (e) {
                    return e.length <= t.tabWidth
                  })(r.name)) ||
                n))
          )
        }
        const r = HC(e[0]).node
        return (
          KC(r) && 'Identifier' === r.property.type && (d(r.property.name) || n)
        )
      })(c)
    function g(e) {
      const t = e.map((e) => e.printed)
      return e.length > 0 && HC(e).needsParens ? ['(', ...t, ')'] : t
    }
    const m = c.map(g),
      y = m,
      D = h ? 3 : 2,
      E = c.flat(),
      C =
        E.slice(1, -1).some((e) => rb(e.node, ib.Leading)) ||
        E.slice(0, -1).some((e) => rb(e.node, ib.Trailing)) ||
        (c[D] && rb(c[D][0].node, ib.Leading))
    if (c.length <= D && !C) return ZC(e) ? y : cb(y)
    const b = HC(c[h ? 1 : 0]).node,
      A = !YC(b) && o(b),
      v = [
        g(c[0]),
        h ? c.slice(1, 2).map(g) : '',
        A ? ab : '',
        (function (e) {
          return 0 === e.length ? '' : lb(cb([ab, sb(ab, e.map(g))]))
        })(c.slice(h ? 2 : 1))
      ],
      F = u.map(({ node: e }) => e).filter(YC)
    let x
    return (
      (x =
        C ||
        (F.length > 2 && F.some((e) => !e.arguments.every((e) => nb(e, 0)))) ||
        m.slice(0, -1).some(hb) ||
        (function () {
          const e = HC(HC(c)).node,
            t = HC(m)
          return (
            YC(e) && hb(t) && F.slice(0, -1).some((e) => e.arguments.some(QC))
          )
        })()
          ? cb(v)
          : [hb(y) || A ? fb : '', pb([y, v])]),
      db('member-chain', x)
    )
  }
  const {
      builders: { join: Cb, group: bb }
    } = su,
    {
      getCallArguments: Ab,
      hasFlowAnnotationComment: vb,
      isCallExpression: Fb,
      isMemberish: xb,
      isStringLiteral: Sb,
      isTemplateOnItsOwnLine: wb,
      isTestCall: Tb,
      iterateCallArgumentsPath: Bb
    } = eg,
    { printOptionalToken: Nb, printFunctionTypeParameters: kb } = _E
  var Pb = {
    printCallExpression: function (e, t, n) {
      const r = e.getValue(),
        i = e.getParentNode(),
        u = 'NewExpression' === r.type,
        o = 'ImportExpression' === r.type,
        s = Nb(e),
        a = Ab(r)
      if (
        a.length > 0 &&
        ((!o &&
          !u &&
          (function (e, t) {
            if ('Identifier' !== e.callee.type) return !1
            if ('require' === e.callee.name) return !0
            if ('define' === e.callee.name) {
              const n = Ab(e)
              return (
                'ExpressionStatement' === t.type &&
                (1 === n.length ||
                  (2 === n.length && 'ArrayExpression' === n[0].type) ||
                  (3 === n.length &&
                    Sb(n[0]) &&
                    'ArrayExpression' === n[1].type))
              )
            }
            return !1
          })(r, i)) ||
          (1 === a.length && wb(a[0], t.originalText)) ||
          (!u && Tb(r, i)))
      ) {
        const r = []
        return (
          Bb(e, () => {
            r.push(n())
          }),
          [u ? 'new ' : '', n('callee'), s, kb(e, t, n), '(', Cb(', ', r), ')']
        )
      }
      const c =
        ('babel' === t.parser || 'babel-flow' === t.parser) &&
        r.callee &&
        'Identifier' === r.callee.type &&
        vb(r.callee.trailingComments)
      if (
        (c && (r.callee.trailingComments[0].printed = !0),
        !o && !u && xb(r.callee) && !e.call((e) => oD(e, t), 'callee'))
      )
        return Eb(e, t, n)
      const l = [
        u ? 'new ' : '',
        o ? 'import' : n('callee'),
        s,
        c
          ? `/*:: ${r.callee.trailingComments[0].value.slice(2).trim()} */`
          : '',
        kb(e, t, n),
        LC(e, t, n)
      ]
      return o || Fb(r.callee) ? bb(l) : l
    }
  }
  const { isNonEmptyArray: Ob, getStringWidth: Ib } = Fi,
    {
      builders: { line: Lb, group: jb, indent: _b, indentIfBreak: Mb },
      utils: { cleanDoc: Rb, willBreak: $b }
    } = su,
    {
      hasLeadingOwnLineComment: Vb,
      isBinaryish: Wb,
      isStringLiteral: qb,
      isLiteral: Ub,
      isNumericLiteral: zb,
      isCallExpression: Gb,
      isMemberExpression: Hb,
      getCallArguments: Jb,
      rawText: Xb,
      hasComment: Yb,
      isSignedNumericLiteral: Kb,
      isObjectProperty: Qb
    } = eg,
    { shouldInlineLogicalExpression: Zb } = RD,
    { printCallExpression: eA } = Pb
  function tA(e, t, n, r, i, u) {
    const o = (function (e, t, n, r, i) {
        const u = e.getValue(),
          o = u[i]
        if (!o) return 'only-left'
        const s = !nA(o)
        if (
          e.match(
            nA,
            rA,
            (e) =>
              !s ||
              ('ExpressionStatement' !== e.type &&
                'VariableDeclaration' !== e.type)
          )
        )
          return s
            ? 'ArrowFunctionExpression' === o.type &&
              'ArrowFunctionExpression' === o.body.type
              ? 'chain-tail-arrow-chain'
              : 'chain-tail'
            : 'chain'
        if ((!s && nA(o.right)) || Vb(t.originalText, o))
          return 'break-after-operator'
        if (
          ('CallExpression' === o.type && 'require' === o.callee.name) ||
          'json5' === t.parser ||
          'json' === t.parser
        )
          return 'never-break-after-operator'
        if (
          (function (e) {
            if (rA(e)) {
              const t = e.left || e.id
              return (
                'ObjectPattern' === t.type &&
                t.properties.length > 2 &&
                t.properties.some(
                  (e) =>
                    Qb(e) &&
                    (!e.shorthand ||
                      (e.value && 'AssignmentPattern' === e.value.type))
                )
              )
            }
            return !1
          })(u) ||
          (function (e) {
            const t = (function (e) {
              if (
                (function (e) {
                  return (
                    'TSTypeAliasDeclaration' === e.type ||
                    'TypeAlias' === e.type
                  )
                })(e) &&
                e.typeParameters &&
                e.typeParameters.params
              )
                return e.typeParameters.params
              return null
            })(e)
            if (Ob(t)) {
              const n =
                'TSTypeAliasDeclaration' === e.type ? 'constraint' : 'bound'
              if (t.length > 1 && t.some((e) => e[n] || e.default)) return !0
            }
            return !1
          })(u) ||
          (function (e) {
            if ('VariableDeclarator' !== e.type) return !1
            const { typeAnnotation: t } = e.id
            if (!t || !t.typeAnnotation) return !1
            const n = iA(t.typeAnnotation)
            return (
              Ob(n) &&
              n.length > 1 &&
              n.some((e) => Ob(iA(e)) || 'TSConditionalType' === e.type)
            )
          })(u)
        )
          return 'break-lhs'
        const a = (function (e, t, n) {
          if (!Qb(e)) return !1
          t = Rb(t)
          const r = 3
          return 'string' == typeof t && Ib(t) < n.tabWidth + r
        })(u, r, t)
        if (
          e.call(
            () =>
              (function (e, t, n, r) {
                const i = e.getValue()
                if (Wb(i) && !Zb(i)) return !0
                switch (i.type) {
                  case 'StringLiteralTypeAnnotation':
                  case 'SequenceExpression':
                    return !0
                  case 'ConditionalExpression': {
                    const { test: e } = i
                    return Wb(e) && !Zb(e)
                  }
                  case 'ClassExpression':
                    return Ob(i.decorators)
                }
                if (r) return !1
                let u = i
                const o = []
                for (;;)
                  if ('UnaryExpression' === u.type)
                    (u = u.argument), o.push('argument')
                  else {
                    if ('TSNonNullExpression' !== u.type) break
                    ;(u = u.expression), o.push('expression')
                  }
                if (qb(u) || e.call(() => uA(e, t, n), ...o)) return !0
                return !1
              })(e, t, n, a),
            i
          )
        )
          return 'break-after-operator'
        if (
          a ||
          'TemplateLiteral' === o.type ||
          'TaggedTemplateExpression' === o.type ||
          'BooleanLiteral' === o.type ||
          zb(o) ||
          'ClassExpression' === o.type
        )
          return 'never-break-after-operator'
        return 'fluid'
      })(e, t, n, r, u),
      s = n(u, { assignmentLayout: o })
    switch (o) {
      case 'break-after-operator':
        return jb([jb(r), i, jb(_b([Lb, s]))])
      case 'never-break-after-operator':
        return jb([jb(r), i, ' ', s])
      case 'fluid': {
        const e = Symbol('assignment')
        return jb([jb(r), i, jb(_b(Lb), { id: e }), Mb(s, { groupId: e })])
      }
      case 'break-lhs':
        return jb([r, i, ' ', jb(s)])
      case 'chain':
        return [jb(r), i, Lb, s]
      case 'chain-tail':
        return [jb(r), i, _b([Lb, s])]
      case 'chain-tail-arrow-chain':
        return [jb(r), i, s]
      case 'only-left':
        return r
    }
  }
  function nA(e) {
    return 'AssignmentExpression' === e.type
  }
  function rA(e) {
    return nA(e) || 'VariableDeclarator' === e.type
  }
  function iA(e) {
    return (function (e) {
      return 'TSTypeReference' === e.type || 'GenericTypeAnnotation' === e.type
    })(e) &&
      e.typeParameters &&
      e.typeParameters.params
      ? e.typeParameters.params
      : null
  }
  function uA(e, t, n, r = !1) {
    const i = e.getValue(),
      u = () => uA(e, t, n, !0)
    if ('TSNonNullExpression' === i.type) return e.call(u, 'expression')
    if (Gb(i)) {
      if ('member-chain' === eA(e, t, n).label) return !1
      const r = Jb(i)
      return (
        !!(
          0 === r.length ||
          (1 === r.length &&
            (function (e, { printWidth: t }) {
              if (Yb(e)) return !1
              const n = 0.25 * t
              if (
                'ThisExpression' === e.type ||
                ('Identifier' === e.type && e.name.length <= n) ||
                (Kb(e) && !Yb(e.argument))
              )
                return !0
              const r =
                ('Literal' === e.type && 'regex' in e && e.regex.pattern) ||
                ('RegExpLiteral' === e.type && e.pattern)
              if (r) return r.length <= n
              if (qb(e)) return Xb(e).length <= n
              if ('TemplateLiteral' === e.type)
                return (
                  0 === e.expressions.length &&
                  e.quasis[0].value.raw.length <= n &&
                  !e.quasis[0].value.raw.includes('\n')
                )
              return Ub(e)
            })(r[0], t))
        ) &&
        !(function (e, t) {
          const n = (function (e) {
            return (
              (e.typeParameters && e.typeParameters.params) ||
              (e.typeArguments && e.typeArguments.params)
            )
          })(e)
          if (Ob(n)) {
            if (n.length > 1) return !0
            if (1 === n.length) {
              const e = n[0]
              if (
                'TSUnionType' === e.type ||
                'UnionTypeAnnotation' === e.type ||
                'TSIntersectionType' === e.type ||
                'IntersectionTypeAnnotation' === e.type
              )
                return !0
            }
            const r = e.typeParameters ? 'typeParameters' : 'typeArguments'
            if ($b(t(r))) return !0
          }
          return !1
        })(i, n) &&
        e.call(u, 'callee')
      )
    }
    return Hb(i)
      ? e.call(u, 'object')
      : r && ('Identifier' === i.type || 'ThisExpression' === i.type)
  }
  var oA = {
    printVariableDeclarator: function (e, t, n) {
      return tA(e, t, n, n('id'), ' =', 'init')
    },
    printAssignmentExpression: function (e, t, n) {
      const r = e.getValue()
      return tA(e, t, n, n('left'), [' ', r.operator], 'right')
    },
    printAssignment: tA
  }
  const { getNextNonSpaceNonCommentCharacter: sA } = Fi,
    { printDanglingComments: aA } = Yf,
    {
      builders: {
        line: cA,
        hardline: lA,
        softline: pA,
        group: fA,
        indent: dA,
        ifBreak: hA
      },
      utils: { removeLines: gA, willBreak: mA }
    } = su,
    {
      getFunctionParameters: yA,
      iterateFunctionParametersPath: DA,
      isSimpleType: EA,
      isTestCall: CA,
      isTypeAnnotationAFunction: bA,
      isObjectType: AA,
      isObjectTypePropertyAFunction: vA,
      hasRestParameter: FA,
      shouldPrintComma: xA,
      hasComment: SA,
      isNextLineEmpty: wA
    } = eg,
    { locEnd: TA } = Zc,
    { ArgExpansionBailout: BA } = Bo,
    { printFunctionTypeParameters: NA } = _E
  function kA(e) {
    if (!e) return !1
    const t = yA(e)
    if (1 !== t.length) return !1
    const [n] = t
    return (
      !SA(n) &&
      ('ObjectPattern' === n.type ||
        'ArrayPattern' === n.type ||
        ('Identifier' === n.type &&
          n.typeAnnotation &&
          ('TypeAnnotation' === n.typeAnnotation.type ||
            'TSTypeAnnotation' === n.typeAnnotation.type) &&
          AA(n.typeAnnotation.typeAnnotation)) ||
        ('FunctionTypeParam' === n.type && AA(n.typeAnnotation)) ||
        ('AssignmentPattern' === n.type &&
          ('ObjectPattern' === n.left.type || 'ArrayPattern' === n.left.type) &&
          ('Identifier' === n.right.type ||
            ('ObjectExpression' === n.right.type &&
              0 === n.right.properties.length) ||
            ('ArrayExpression' === n.right.type &&
              0 === n.right.elements.length))))
    )
  }
  var PA = {
    printFunctionParameters: function (e, t, n, r, i) {
      const u = e.getValue(),
        o = yA(u),
        s = i ? NA(e, n, t) : ''
      if (0 === o.length)
        return [
          s,
          '(',
          aA(e, n, !0, (e) => ')' === sA(n.originalText, e, TA)),
          ')'
        ]
      const a = e.getParentNode(),
        c = CA(a),
        l = kA(u),
        p = []
      if (
        (DA(e, (e, r) => {
          const i = r === o.length - 1
          i && u.rest && p.push('...'),
            p.push(t()),
            i ||
              (p.push(','),
              c || l ? p.push(' ') : wA(o[r], n) ? p.push(lA, lA) : p.push(cA))
        }),
        r)
      ) {
        if (mA(s) || mA(p)) throw new BA()
        return fA([gA(s), '(', gA(p), ')'])
      }
      const f = o.every((e) => !e.decorators)
      return (l && f) || c
        ? [s, '(', ...p, ')']
        : (vA(a) ||
            bA(a) ||
            'TypeAlias' === a.type ||
            'UnionTypeAnnotation' === a.type ||
            'TSUnionType' === a.type ||
            'IntersectionTypeAnnotation' === a.type ||
            ('FunctionTypeAnnotation' === a.type && a.returnType === u)) &&
          1 === o.length &&
          null === o[0].name &&
          u.this !== o[0] &&
          o[0].typeAnnotation &&
          null === u.typeParameters &&
          EA(o[0].typeAnnotation) &&
          !u.rest
        ? 'always' === n.arrowParens
          ? ['(', ...p, ')']
          : p
        : [
            s,
            '(',
            dA([pA, ...p]),
            hA(!FA(u) && xA(n, 'all') ? ',' : ''),
            pA,
            ')'
          ]
    },
    shouldHugFunctionParameters: kA,
    shouldGroupFunctionParameters: function (e, t) {
      const n = (function (e) {
        let t
        return (
          e.returnType
            ? ((t = e.returnType), t.typeAnnotation && (t = t.typeAnnotation))
            : e.typeAnnotation && (t = e.typeAnnotation),
          t
        )
      })(e)
      if (!n) return !1
      const r = e.typeParameters && e.typeParameters.params
      if (r) {
        if (r.length > 1) return !1
        if (1 === r.length) {
          const e = r[0]
          if (e.constraint || e.default) return !1
        }
      }
      return 1 === yA(e).length && (AA(n) || mA(t))
    }
  }
  const { printComments: OA, printDanglingComments: IA } = Yf,
    { getLast: LA } = Fi,
    {
      builders: {
        group: jA,
        join: _A,
        line: MA,
        softline: RA,
        indent: $A,
        align: VA,
        ifBreak: WA
      }
    } = su,
    { locStart: qA } = Zc,
    {
      isSimpleType: UA,
      isObjectType: zA,
      hasLeadingOwnLineComment: GA,
      isObjectTypePropertyAFunction: HA,
      shouldPrintComma: JA
    } = eg,
    { printAssignment: XA } = oA,
    { printFunctionParameters: YA, shouldGroupFunctionParameters: KA } = PA,
    { printArrayItems: QA } = oC
  function ZA(e) {
    if (UA(e) || zA(e)) return !0
    if ('UnionTypeAnnotation' === e.type || 'TSUnionType' === e.type) {
      const t = e.types.filter(
          (e) =>
            'VoidTypeAnnotation' === e.type ||
            'TSVoidKeyword' === e.type ||
            'NullLiteralTypeAnnotation' === e.type ||
            'TSNullKeyword' === e.type
        ).length,
        n = e.types.some(
          (e) =>
            'ObjectTypeAnnotation' === e.type ||
            'TSTypeLiteral' === e.type ||
            'GenericTypeAnnotation' === e.type ||
            'TSTypeReference' === e.type
        )
      if (e.types.length - 1 === t && n) return !0
    }
    return !1
  }
  var ev = {
    printOpaqueType: function (e, t, n) {
      const r = t.semi ? ';' : '',
        i = e.getValue(),
        u = []
      return (
        u.push('opaque type ', n('id'), n('typeParameters')),
        i.supertype && u.push(': ', n('supertype')),
        i.impltype && u.push(' = ', n('impltype')),
        u.push(r),
        u
      )
    },
    printTypeAlias: function (e, t, n) {
      const r = t.semi ? ';' : '',
        i = e.getValue(),
        u = []
      i.declare && u.push('declare '),
        u.push('type ', n('id'), n('typeParameters'))
      const o = 'TSTypeAliasDeclaration' === i.type ? 'typeAnnotation' : 'right'
      return [XA(e, t, n, u, ' =', o), r]
    },
    printIntersectionType: function (e, t, n) {
      const r = e.getValue(),
        i = e.map(n, 'types'),
        u = []
      let o = !1
      for (let e = 0; e < i.length; ++e)
        0 === e
          ? u.push(i[e])
          : zA(r.types[e - 1]) && zA(r.types[e])
          ? u.push([' & ', o ? $A(i[e]) : i[e]])
          : zA(r.types[e - 1]) || zA(r.types[e])
          ? (e > 1 && (o = !0), u.push(' & ', e > 1 ? $A(i[e]) : i[e]))
          : u.push($A([' &', MA, i[e]]))
      return jA(u)
    },
    printUnionType: function (e, t, n) {
      const r = e.getValue(),
        i = e.getParentNode(),
        u = !(
          'TypeParameterInstantiation' === i.type ||
          'TSTypeParameterInstantiation' === i.type ||
          'GenericTypeAnnotation' === i.type ||
          'TSTypeReference' === i.type ||
          'TSTypeAssertion' === i.type ||
          'TupleTypeAnnotation' === i.type ||
          'TSTupleType' === i.type ||
          ('FunctionTypeParam' === i.type &&
            !i.name &&
            e.getParentNode(1).this !== i) ||
          (('TypeAlias' === i.type ||
            'VariableDeclarator' === i.type ||
            'TSTypeAliasDeclaration' === i.type) &&
            GA(t.originalText, r))
        ),
        o = ZA(r),
        s = e.map((e) => {
          let r = n()
          return o || (r = VA(2, r)), OA(e, r, t)
        }, 'types')
      if (o) return _A(' | ', s)
      const a = u && !GA(t.originalText, r),
        c = [WA([a ? MA : '', '| ']), _A([MA, '| '], s)]
      return oD(e, t)
        ? jA([$A(c), RA])
        : ('TupleTypeAnnotation' === i.type && i.types.length > 1) ||
          ('TSTupleType' === i.type && i.elementTypes.length > 1)
        ? jA([$A([WA(['(', RA]), c]), RA, WA(')')])
        : jA(u ? $A(c) : c)
    },
    printFunctionType: function (e, t, n) {
      const r = e.getValue(),
        i = [],
        u = e.getParentNode(0),
        o = e.getParentNode(1),
        s = e.getParentNode(2)
      let a =
          'TSFunctionType' === r.type ||
          !(
            (('ObjectTypeProperty' === u.type ||
              'ObjectTypeInternalSlot' === u.type) &&
              !u.variance &&
              !u.optional &&
              qA(u) === qA(r)) ||
            'ObjectTypeCallProperty' === u.type ||
            (s && 'DeclareFunction' === s.type)
          ),
        c = a && ('TypeAnnotation' === u.type || 'TSTypeAnnotation' === u.type)
      const l =
        c &&
        a &&
        ('TypeAnnotation' === u.type || 'TSTypeAnnotation' === u.type) &&
        'ArrowFunctionExpression' === o.type
      HA(u) && ((a = !0), (c = !0)), l && i.push('(')
      const p = YA(e, n, t, !1, !0),
        f =
          r.returnType || r.predicate || r.typeAnnotation
            ? [
                a ? ' => ' : ': ',
                n('returnType'),
                n('predicate'),
                n('typeAnnotation')
              ]
            : '',
        d = KA(r, f)
      return i.push(d ? jA(p) : p), f && i.push(f), l && i.push(')'), jA(i)
    },
    printTupleType: function (e, t, n) {
      const r = e.getValue(),
        i = 'TSTupleType' === r.type ? 'elementTypes' : 'types',
        u = r[i].length > 0 && 'TSRestType' === LA(r[i]).type
      return jA([
        '[',
        $A([RA, QA(e, t, i, n)]),
        WA(JA(t, 'all') && !u ? ',' : ''),
        IA(e, t, !0),
        RA,
        ']'
      ])
    },
    printIndexedAccessType: function (e, t, n) {
      const r = e.getValue(),
        i = 'OptionalIndexedAccessType' === r.type && r.optional ? '?.[' : '['
      return [n('objectType'), i, n('indexType'), ']']
    },
    shouldHugType: ZA
  }
  const { printDanglingComments: tv } = Yf,
    {
      builders: {
        join: nv,
        line: rv,
        hardline: iv,
        softline: uv,
        group: ov,
        indent: sv,
        ifBreak: av
      }
    } = su,
    {
      isTestCall: cv,
      hasComment: lv,
      CommentCheckFlags: pv,
      isTSXFile: fv,
      shouldPrintComma: dv,
      getFunctionParameters: hv
    } = eg,
    { createGroupIdMapper: gv } = Fi,
    { shouldHugType: mv } = ev,
    yv = gv('typeParameters')
  function Dv(e, t) {
    const n = e.getValue()
    if (!lv(n, pv.Dangling)) return ''
    const r = !lv(n, pv.Line),
      i = tv(e, t, r)
    return r ? i : [i, iv]
  }
  var Ev = {
    printTypeParameter: function (e, t, n) {
      const r = e.getValue(),
        i = [],
        u = e.getParentNode()
      return 'TSMappedType' === u.type
        ? (i.push('[', n('name')),
          r.constraint && i.push(' in ', n('constraint')),
          u.nameType &&
            i.push(
              ' as ',
              e.callParent(() => n('nameType'))
            ),
          i.push(']'),
          i)
        : (r.variance && i.push(n('variance')),
          i.push(n('name')),
          r.bound && i.push(': ', n('bound')),
          r.constraint && i.push(' extends ', n('constraint')),
          r.default && i.push(' = ', n('default')),
          i)
    },
    printTypeParameters: function (e, t, n, r) {
      const i = e.getValue()
      if (!i[r]) return ''
      if (!Array.isArray(i[r])) return n(r)
      const u = e.getNode(2)
      if (
        (u && cv(u)) ||
        0 === i[r].length ||
        (1 === i[r].length &&
          (mv(i[r][0]) || 'NullableTypeAnnotation' === i[r][0].type))
      )
        return ['<', nv(', ', e.map(n, r)), Dv(e, t), '>']
      const o =
        'TSTypeParameterInstantiation' === i.type
          ? ''
          : 1 === hv(i).length &&
            fv(t) &&
            !i[r][0].constraint &&
            'ArrowFunctionExpression' === e.getParentNode().type
          ? ','
          : dv(t, 'all')
          ? av(',')
          : ''
      return ov(['<', sv([uv, nv([',', rv], e.map(n, r))]), o, uv, '>'], {
        id: yv(i)
      })
    },
    getTypeParametersGroupId: yv
  }
  const { printComments: Cv } = Yf,
    { printString: bv, printNumber: Av } = Fi,
    {
      isNumericLiteral: vv,
      isSimpleNumber: Fv,
      isStringLiteral: xv,
      isStringPropSafeToUnquote: Sv,
      rawText: wv
    } = eg,
    { printAssignment: Tv } = oA,
    Bv = new WeakMap()
  function Nv(e, t, n) {
    const r = e.getNode()
    if (r.computed) return ['[', n('key'), ']']
    const i = e.getParentNode(),
      { key: u } = r
    if ('ClassPrivateProperty' === r.type && 'Identifier' === u.type)
      return ['#', n('key')]
    if ('consistent' === t.quoteProps && !Bv.has(i)) {
      const e = (i.properties || i.body || i.members).some(
        (e) => !e.computed && e.key && xv(e.key) && !Sv(e, t)
      )
      Bv.set(i, e)
    }
    if (
      ('Identifier' === u.type ||
        (vv(u) &&
          Fv(Av(wv(u))) &&
          String(u.value) === Av(wv(u)) &&
          'typescript' !== t.parser &&
          'babel-ts' !== t.parser)) &&
      ('json' === t.parser || ('consistent' === t.quoteProps && Bv.get(i)))
    ) {
      const n = bv(
        JSON.stringify('Identifier' === u.type ? u.name : u.value.toString()),
        t
      )
      return e.call((e) => Cv(e, n, t), 'key')
    }
    return Sv(r, t) &&
      ('as-needed' === t.quoteProps ||
        ('consistent' === t.quoteProps && !Bv.get(i)))
      ? e.call(
          (e) => Cv(e, /^\d/.test(u.value) ? Av(u.value) : u.value, t),
          'key'
        )
      : n('key')
  }
  var kv = {
    printProperty: function (e, t, n) {
      return e.getValue().shorthand
        ? n('value')
        : Tv(e, t, n, Nv(e, t, n), ':', 'value')
    },
    printPropertyKey: Nv
  }
  const { printDanglingComments: Pv, printCommentsSeparately: Ov } = Yf,
    { getNextNonSpaceNonCommentCharacterIndex: Iv } = Fi,
    {
      builders: {
        line: Lv,
        softline: jv,
        group: _v,
        indent: Mv,
        ifBreak: Rv,
        hardline: $v,
        join: Vv,
        indentIfBreak: Wv
      },
      utils: { removeLines: qv, willBreak: Uv }
    } = su,
    { ArgExpansionBailout: zv } = Bo,
    {
      getFunctionParameters: Gv,
      hasLeadingOwnLineComment: Hv,
      isFlowAnnotationComment: Jv,
      isJsxNode: Xv,
      isTemplateOnItsOwnLine: Yv,
      shouldPrintComma: Kv,
      startsWithNoLookaheadToken: Qv,
      isBinaryish: Zv,
      isLineComment: eF,
      hasComment: tF,
      getComments: nF,
      CommentCheckFlags: rF,
      isCallLikeExpression: iF,
      isCallExpression: uF,
      getCallArguments: oF,
      hasNakedLeftSide: sF,
      getLeftSide: aF
    } = eg,
    { locEnd: cF } = Zc,
    { printFunctionParameters: lF, shouldGroupFunctionParameters: pF } = PA,
    { printPropertyKey: fF } = kv,
    { printFunctionTypeParameters: dF } = _E
  function hF(e, t, n) {
    const r = e.getNode(),
      i = lF(e, n, t),
      u = mF(e, n, t),
      o = pF(r, u),
      s = [dF(e, t, n), _v([o ? _v(i) : i, u])]
    return r.body ? s.push(' ', n('body')) : s.push(t.semi ? ';' : ''), s
  }
  function gF(e, t) {
    if ('always' === t.arrowParens) return !1
    if ('avoid' === t.arrowParens) {
      return (function (e) {
        const t = Gv(e)
        return !(
          1 !== t.length ||
          e.typeParameters ||
          tF(e, rF.Dangling) ||
          'Identifier' !== t[0].type ||
          t[0].typeAnnotation ||
          tF(t[0]) ||
          t[0].optional ||
          e.predicate ||
          e.returnType
        )
      })(e.getValue())
    }
    return !1
  }
  function mF(e, t, n) {
    const r = e.getValue(),
      i = t('returnType')
    if (r.returnType && Jv(n.originalText, r.returnType))
      return [' /*: ', i, ' */']
    const u = [i]
    return (
      r.returnType && r.returnType.typeAnnotation && u.unshift(': '),
      r.predicate && u.push(r.returnType ? ' ' : ': ', t('predicate')),
      u
    )
  }
  function yF(e, t, n) {
    const r = e.getValue(),
      i = t.semi ? ';' : '',
      u = []
    r.argument &&
      (!(function (e, t) {
        if (Hv(e.originalText, t)) return !0
        if (sF(t)) {
          let n,
            r = t
          for (; (n = aF(r)); ) if (((r = n), Hv(e.originalText, r))) return !0
        }
        return !1
      })(t, r.argument)
        ? Zv(r.argument) || 'SequenceExpression' === r.argument.type
          ? u.push(_v([Rv(' (', ' '), Mv([jv, n('argument')]), jv, Rv(')')]))
          : u.push(' ', n('argument'))
        : u.push([' (', Mv([$v, n('argument')]), $v, ')']))
    const o = nF(r),
      s = _n(o),
      a = s && eF(s)
    return (
      a && u.push(i),
      tF(r, rF.Dangling) && u.push(' ', Pv(e, t, !0)),
      a || u.push(i),
      u
    )
  }
  var DF = {
    printFunction: function (e, t, n, r) {
      const i = e.getValue()
      let u = !1
      if (
        ('FunctionDeclaration' === i.type || 'FunctionExpression' === i.type) &&
        r &&
        r.expandLastArg
      ) {
        const t = e.getParentNode()
        uF(t) && oF(t).length > 1 && (u = !0)
      }
      const o = []
      'TSDeclareFunction' === i.type && i.declare && o.push('declare '),
        i.async && o.push('async '),
        i.generator ? o.push('function* ') : o.push('function '),
        i.id && o.push(t('id'))
      const s = lF(e, t, n, u),
        a = mF(e, t, n),
        c = pF(i, a)
      return (
        o.push(
          dF(e, n, t),
          _v([c ? _v(s) : s, a]),
          i.body ? ' ' : '',
          t('body')
        ),
        !n.semi || (!i.declare && i.body) || o.push(';'),
        o
      )
    },
    printArrowFunction: function (e, t, n, r) {
      let i = e.getValue()
      const u = [],
        o = []
      let s = !1
      if (
        ((function a() {
          const c = (function (e, t, n, r) {
            const i = []
            if ((e.getValue().async && i.push('async '), gF(e, t)))
              i.push(n(['params', 0]))
            else {
              const u = r && (r.expandLastArg || r.expandFirstArg)
              let o = mF(e, n, t)
              if (u) {
                if (Uv(o)) throw new zv()
                o = _v(qv(o))
              }
              i.push(_v([lF(e, n, t, u, !0), o]))
            }
            const u = Pv(e, t, !0, (e) => {
              const n = Iv(t.originalText, e, cF)
              return !1 !== n && '=>' === t.originalText.slice(n, n + 2)
            })
            return u && i.push(' ', u), i
          })(e, t, n, r)
          if (0 === u.length) u.push(c)
          else {
            const { leading: n, trailing: r } = Ov(e, t)
            u.push([n, c]), o.unshift(r)
          }
          ;(s =
            s ||
            (i.returnType && Gv(i).length > 0) ||
            i.typeParameters ||
            Gv(i).some((e) => 'Identifier' !== e.type)),
            'ArrowFunctionExpression' !== i.body.type || (r && r.expandLastArg)
              ? o.unshift(n('body', r))
              : ((i = i.body), e.call(a, 'body'))
        })(),
        u.length > 1)
      )
        return (function (e, t, n, r, i, u) {
          const o = e.getName(),
            s = e.getParentNode(),
            a = iF(s) && 'callee' === o,
            c = Boolean(t && t.assignmentLayout),
            l =
              'BlockStatement' !== u.body.type &&
              'ObjectExpression' !== u.body.type,
            p =
              (a && l) ||
              (t && 'chain-tail-arrow-chain' === t.assignmentLayout),
            f = Symbol('arrow-chain')
          return _v([
            _v(
              Mv([
                a || c ? jv : '',
                _v(Vv([' =>', Lv], n), { shouldBreak: r })
              ]),
              { id: f, shouldBreak: p }
            ),
            ' =>',
            Wv(l ? Mv([Lv, i]) : [' ', i], { groupId: f }),
            a ? Rv(jv, '', { groupId: f }) : ''
          ])
        })(e, r, u, s, o, i)
      const a = u
      if (
        (a.push(' =>'),
        !Hv(t.originalText, i.body) &&
          ('ArrayExpression' === i.body.type ||
            'ObjectExpression' === i.body.type ||
            'BlockStatement' === i.body.type ||
            Xv(i.body) ||
            Yv(i.body, t.originalText) ||
            'ArrowFunctionExpression' === i.body.type ||
            'DoExpression' === i.body.type))
      )
        return _v([...a, ' ', o])
      if ('SequenceExpression' === i.body.type)
        return _v([...a, _v([' (', Mv([jv, o]), jv, ')'])])
      const c =
          ((r && r.expandLastArg) ||
            'JSXExpressionContainer' === e.getParentNode().type) &&
          !tF(i),
        l = r && r.expandLastArg && Kv(t, 'all'),
        p = 'ConditionalExpression' === i.body.type && !Qv(i.body, !1)
      return _v([
        ...a,
        _v([
          Mv([Lv, p ? Rv('', '(') : '', o, p ? Rv('', ')') : '']),
          c ? [Rv(l ? ',' : ''), jv] : ''
        ])
      ])
    },
    printMethod: function (e, t, n) {
      const r = e.getNode(),
        { kind: i } = r,
        u = r.value || r,
        o = []
      return (
        i && 'init' !== i && 'method' !== i && 'constructor' !== i
          ? (Ff.ok('get' === i || 'set' === i), o.push(i, ' '))
          : u.async && o.push('async '),
        u.generator && o.push('*'),
        o.push(fF(e, t, n), r.optional || r.key.optional ? '?' : ''),
        r === u
          ? o.push(hF(e, t, n))
          : 'FunctionExpression' === u.type
          ? o.push(e.call((e) => hF(e, t, n), 'value'))
          : o.push(n('value')),
        o
      )
    },
    printReturnStatement: function (e, t, n) {
      return ['return', yF(e, t, n)]
    },
    printThrowStatement: function (e, t, n) {
      return ['throw', yF(e, t, n)]
    },
    printMethodInternal: hF,
    shouldPrintParamsWithoutParens: gF
  }
  const { isNonEmptyArray: EF, hasNewline: CF } = Fi,
    {
      builders: { line: bF, hardline: AF, join: vF, breakParent: FF, group: xF }
    } = su,
    { locStart: SF, locEnd: wF } = Zc,
    { getParentExportDeclaration: TF } = eg
  function BF(e, t) {
    return e.decorators.some((e) => CF(t.originalText, wF(e)))
  }
  function NF(e) {
    if (
      'ExportDefaultDeclaration' !== e.type &&
      'ExportNamedDeclaration' !== e.type &&
      'DeclareExportDeclaration' !== e.type
    )
      return !1
    const t = e.declaration && e.declaration.decorators
    return EF(t) && SF(e, { ignoreDecorators: !0 }) > SF(t[0])
  }
  var kF = {
    printDecorators: function (e, t, n) {
      const r = e.getValue(),
        { decorators: i } = r
      if (!EF(i) || NF(e.getParentNode())) return
      const u =
        'ClassExpression' === r.type ||
        'ClassDeclaration' === r.type ||
        BF(r, t)
      return [TF(e) ? AF : u ? FF : '', vF(bF, e.map(n, 'decorators')), bF]
    },
    printClassMemberDecorators: function (e, t, n) {
      const r = e.getValue()
      return xF([vF(bF, e.map(n, 'decorators')), BF(r, t) ? AF : bF])
    },
    printDecoratorsBeforeExport: function (e, t, n) {
      return [vF(AF, e.map(n, 'declaration', 'decorators')), AF]
    },
    hasDecoratorsBeforeExport: NF
  }
  const { isNonEmptyArray: PF, createGroupIdMapper: OF } = Fi,
    { printComments: IF, printDanglingComments: LF } = Yf,
    {
      builders: {
        join: jF,
        line: _F,
        hardline: MF,
        softline: RF,
        group: $F,
        indent: VF,
        ifBreak: WF
      }
    } = su,
    { hasComment: qF, CommentCheckFlags: UF } = eg,
    { getTypeParametersGroupId: zF } = Ev,
    { printMethod: GF } = DF,
    { printOptionalToken: HF, printTypeAnnotation: JF } = _E,
    { printPropertyKey: XF } = kv,
    { printAssignment: YF } = oA,
    { printClassMemberDecorators: KF } = kF
  const QF = OF('heritageGroup')
  function ZF(e) {
    return (
      e.typeParameters &&
      !qF(e.typeParameters, UF.Trailing | UF.Line) &&
      !(function (e) {
        return (
          ['superClass', 'extends', 'mixins', 'implements'].filter((t) =>
            Boolean(e[t])
          ).length > 1
        )
      })(e)
    )
  }
  function ex(e, t, n, r) {
    const i = e.getValue()
    if (!PF(i[r])) return ''
    const u = LF(e, t, !0, ({ marker: e }) => e === r)
    return [
      ZF(i) ? WF(' ', _F, { groupId: zF(i.typeParameters) }) : _F,
      u,
      u && MF,
      r,
      $F(VF([_F, jF([',', _F], e.map(n, r))]))
    ]
  }
  function tx(e, t, n) {
    const r = n('superClass')
    return 'AssignmentExpression' === e.getParentNode().type
      ? $F(WF(['(', VF([RF, r]), RF, ')'], r))
      : r
  }
  var nx = {
    printClass: function (e, t, n) {
      const r = e.getValue(),
        i = []
      r.declare && i.push('declare '),
        r.abstract && i.push('abstract '),
        i.push('class')
      const u =
          (r.id && qF(r.id, UF.Trailing)) ||
          (r.superClass && qF(r.superClass)) ||
          PF(r.extends) ||
          PF(r.mixins) ||
          PF(r.implements),
        o = [],
        s = []
      if (
        (r.id && o.push(' ', n('id')),
        o.push(n('typeParameters')),
        r.superClass)
      ) {
        const r = ['extends ', tx(e, t, n), n('superTypeParameters')],
          i = e.call((e) => IF(e, r, t), 'superClass')
        u ? s.push(_F, $F(i)) : s.push(' ', i)
      } else s.push(ex(e, t, n, 'extends'))
      if ((s.push(ex(e, t, n, 'mixins'), ex(e, t, n, 'implements')), u)) {
        let e
        ;(e = ZF(r) ? [...o, VF(s)] : VF([...o, s])),
          i.push($F(e, { id: QF(r) }))
      } else i.push(...o, ...s)
      return i.push(' ', n('body')), i
    },
    printClassMethod: function (e, t, n) {
      const r = e.getValue(),
        i = []
      return (
        PF(r.decorators) && i.push(KF(e, t, n)),
        r.accessibility && i.push(r.accessibility + ' '),
        r.readonly && i.push('readonly '),
        r.declare && i.push('declare '),
        r.static && i.push('static '),
        ('TSAbstractMethodDefinition' === r.type || r.abstract) &&
          i.push('abstract '),
        r.override && i.push('override '),
        i.push(GF(e, t, n)),
        i
      )
    },
    printClassProperty: function (e, t, n) {
      const r = e.getValue(),
        i = [],
        u = t.semi ? ';' : ''
      return (
        PF(r.decorators) && i.push(KF(e, t, n)),
        r.accessibility && i.push(r.accessibility + ' '),
        r.declare && i.push('declare '),
        r.static && i.push('static '),
        ('TSAbstractClassProperty' === r.type || r.abstract) &&
          i.push('abstract '),
        r.override && i.push('override '),
        r.readonly && i.push('readonly '),
        r.variance && i.push(n('variance')),
        i.push(XF(e, t, n), HF(e), JF(e, t, n)),
        [YF(e, t, n, i, ' =', 'value'), u]
      )
    },
    printHardlineAfterHeritage: function (e) {
      return WF(MF, '', { groupId: QF(e) })
    }
  }
  const { isNonEmptyArray: rx } = Fi,
    {
      builders: { join: ix, line: ux, group: ox, indent: sx, ifBreak: ax }
    } = su,
    { hasComment: cx, identity: lx, CommentCheckFlags: px } = eg,
    { getTypeParametersGroupId: fx } = Ev,
    { printTypeScriptModifiers: dx } = _E
  var hx = {
    printInterface: function (e, t, n) {
      const r = e.getValue(),
        i = []
      r.declare && i.push('declare '),
        'TSInterfaceDeclaration' === r.type &&
          i.push(r.abstract ? 'abstract ' : '', dx(e, t, n)),
        i.push('interface')
      const u = [],
        o = []
      'InterfaceTypeAnnotation' !== r.type &&
        u.push(' ', n('id'), n('typeParameters'))
      const s = r.typeParameters && !cx(r.typeParameters, px.Trailing | px.Line)
      return (
        rx(r.extends) &&
          o.push(
            s ? ax(' ', ux, { groupId: fx(r.typeParameters) }) : ux,
            'extends ',
            (1 === r.extends.length ? lx : sx)(
              ix([',', ux], e.map(n, 'extends'))
            )
          ),
        (r.id && cx(r.id, px.Trailing)) || rx(r.extends)
          ? s
            ? i.push(ox([...u, sx(o)]))
            : i.push(ox(sx([...u, ...o])))
          : i.push(...u, ...o),
        i.push(' ', n('body')),
        ox(i)
      )
    }
  }
  const { isNonEmptyArray: gx } = Fi,
    {
      builders: {
        softline: mx,
        group: yx,
        indent: Dx,
        join: Ex,
        line: Cx,
        ifBreak: bx,
        hardline: Ax
      }
    } = su,
    { printDanglingComments: vx } = Yf,
    {
      hasComment: Fx,
      CommentCheckFlags: xx,
      shouldPrintComma: Sx,
      needsHardlineAfterDanglingComment: wx
    } = eg,
    { locStart: Tx, hasSameLoc: Bx } = Zc,
    { hasDecoratorsBeforeExport: Nx, printDecoratorsBeforeExport: kx } = kF
  function Px(e, t, n) {
    const r = e.getValue()
    if (!r.source) return ''
    const i = []
    return Ix(r, t) || i.push(' from'), i.push(' ', n('source')), i
  }
  function Ox(e, t, n) {
    const r = e.getValue()
    if (Ix(r, t)) return ''
    const i = [' ']
    if (gx(r.specifiers)) {
      const u = [],
        o = []
      if (
        (e.each(() => {
          const t = e.getValue().type
          if (
            'ExportNamespaceSpecifier' === t ||
            'ExportDefaultSpecifier' === t ||
            'ImportNamespaceSpecifier' === t ||
            'ImportDefaultSpecifier' === t
          )
            u.push(n())
          else {
            if ('ExportSpecifier' !== t && 'ImportSpecifier' !== t)
              throw new Error(`Unknown specifier type ${JSON.stringify(t)}`)
            o.push(n())
          }
        }, 'specifiers'),
        i.push(Ex(', ', u)),
        o.length > 0)
      ) {
        u.length > 0 && i.push(', ')
        o.length > 1 || u.length > 0 || r.specifiers.some((e) => Fx(e))
          ? i.push(
              yx([
                '{',
                Dx([t.bracketSpacing ? Cx : mx, Ex([',', Cx], o)]),
                bx(Sx(t) ? ',' : ''),
                t.bracketSpacing ? Cx : mx,
                '}'
              ])
            )
          : i.push([
              '{',
              t.bracketSpacing ? ' ' : '',
              ...o,
              t.bracketSpacing ? ' ' : '',
              '}'
            ])
      }
    } else i.push('{}')
    return i
  }
  function Ix(e, t) {
    const { type: n, importKind: r, source: i, specifiers: u } = e
    return (
      'ImportDeclaration' === n &&
      !gx(u) &&
      'type' !== r &&
      !/{\s*}/.test(t.originalText.slice(Tx(e), Tx(i)))
    )
  }
  function Lx(e, t, n) {
    const r = e.getNode()
    return gx(r.assertions)
      ? [
          ' assert {',
          t.bracketSpacing ? ' ' : '',
          Ex(', ', e.map(n, 'assertions')),
          t.bracketSpacing ? ' ' : '',
          '}'
        ]
      : ''
  }
  var jx = {
    printImportDeclaration: function (e, t, n) {
      const r = e.getValue(),
        i = t.semi ? ';' : '',
        u = [],
        { importKind: o } = r
      return (
        u.push('import'),
        o && 'value' !== o && u.push(' ', o),
        u.push(Ox(e, t, n), Px(e, t, n), Lx(e, t, n), i),
        u
      )
    },
    printExportDeclaration: function (e, t, n) {
      const r = e.getValue(),
        i = []
      Nx(r) && i.push(kx(e, t, n))
      const { type: u, exportKind: o, declaration: s } = r
      return (
        i.push('export'),
        (r.default || 'ExportDefaultDeclaration' === u) && i.push(' default'),
        Fx(r, xx.Dangling) && (i.push(' ', vx(e, t, !0)), wx(r) && i.push(Ax)),
        s
          ? i.push(' ', n('declaration'))
          : i.push(
              'type' === o ? ' type' : '',
              Ox(e, t, n),
              Px(e, t, n),
              Lx(e, t, n)
            ),
        (function (e, t) {
          if (!t.semi) return !1
          const { type: n, declaration: r } = e,
            i = e.default || 'ExportDefaultDeclaration' === n
          if (!r) return !0
          const { type: u } = r
          if (
            i &&
            'ClassDeclaration' !== u &&
            'FunctionDeclaration' !== u &&
            'TSInterfaceDeclaration' !== u &&
            'DeclareClass' !== u &&
            'DeclareFunction' !== u &&
            'TSDeclareFunction' !== u &&
            'EnumDeclaration' !== u
          )
            return !0
          return !1
        })(r, t) && i.push(';'),
        i
      )
    },
    printExportAllDeclaration: function (e, t, n) {
      const r = e.getValue(),
        i = t.semi ? ';' : '',
        u = [],
        { exportKind: o, exported: s } = r
      return (
        u.push('export'),
        'type' === o && u.push(' type'),
        u.push(' *'),
        s && u.push(' as ', n('exported')),
        u.push(Px(e, t, n), Lx(e, t, n), i),
        u
      )
    },
    printModuleSpecifier: function (e, t, n) {
      const r = e.getNode(),
        { type: i, importKind: u } = r,
        o = []
      'ImportSpecifier' === i && u && o.push(u, ' ')
      const s = i.startsWith('Import'),
        a = s ? 'imported' : 'local',
        c = s ? 'local' : 'exported'
      let l = '',
        p = ''
      return (
        'ExportNamespaceSpecifier' === i || 'ImportNamespaceSpecifier' === i
          ? (l = '*')
          : r[a] && (l = n(a)),
        !r[c] || (r[a] && Bx(r[a], r[c])) || (p = n(c)),
        o.push(l, l && p ? ' as ' : '', p),
        o
      )
    }
  }
  const { printDanglingComments: _x } = Yf,
    {
      builders: {
        line: Mx,
        softline: Rx,
        group: $x,
        indent: Vx,
        ifBreak: Wx,
        hardline: qx
      }
    } = su,
    {
      getLast: Ux,
      hasNewlineInRange: zx,
      hasNewline: Gx,
      isNonEmptyArray: Hx
    } = Fi,
    {
      shouldPrintComma: Jx,
      hasComment: Xx,
      getComments: Yx,
      CommentCheckFlags: Kx,
      isNextLineEmpty: Qx
    } = eg,
    { locStart: Zx, locEnd: eS } = Zc,
    { printOptionalToken: tS, printTypeAnnotation: nS } = _E,
    { shouldHugFunctionParameters: rS } = PA,
    { shouldHugType: iS } = ev,
    { printHardlineAfterHeritage: uS } = nx
  var oS = {
    printObject: function (e, t, n) {
      const r = t.semi ? ';' : '',
        i = e.getValue()
      let u
      u =
        'TSTypeLiteral' === i.type
          ? 'members'
          : 'TSInterfaceBody' === i.type
          ? 'body'
          : 'properties'
      const o = 'ObjectTypeAnnotation' === i.type,
        s = [u]
      o && s.push('indexers', 'callProperties', 'internalSlots')
      const a = s.map((e) => i[e][0]).sort((e, t) => Zx(e) - Zx(t))[0],
        c = e.getParentNode(0),
        l =
          o &&
          c &&
          ('InterfaceDeclaration' === c.type ||
            'DeclareInterface' === c.type ||
            'DeclareClass' === c.type) &&
          'body' === e.getName(),
        p =
          'TSInterfaceBody' === i.type ||
          l ||
          ('ObjectPattern' === i.type &&
            'FunctionDeclaration' !== c.type &&
            'FunctionExpression' !== c.type &&
            'ArrowFunctionExpression' !== c.type &&
            'ObjectMethod' !== c.type &&
            'ClassMethod' !== c.type &&
            'ClassPrivateMethod' !== c.type &&
            'AssignmentPattern' !== c.type &&
            'CatchClause' !== c.type &&
            i.properties.some(
              (e) =>
                e.value &&
                ('ObjectPattern' === e.value.type ||
                  'ArrayPattern' === e.value.type)
            )) ||
          ('ObjectPattern' !== i.type && a && zx(t.originalText, Zx(i), Zx(a))),
        f = l
          ? ';'
          : 'TSInterfaceBody' === i.type || 'TSTypeLiteral' === i.type
          ? Wx(r, ';')
          : ',',
        d = 'RecordExpression' === i.type ? '#{' : i.exact ? '{|' : '{',
        h = i.exact ? '|}' : '}',
        g = []
      for (const t of s)
        e.each((e) => {
          const t = e.getValue()
          g.push({ node: t, printed: n(), loc: Zx(t) })
        }, t)
      s.length > 1 && g.sort((e, t) => e.loc - t.loc)
      let m = []
      const y = g.map((e) => {
        const n = [...m, $x(e.printed)]
        return (
          (m = [f, Mx]),
          ('TSPropertySignature' !== e.node.type &&
            'TSMethodSignature' !== e.node.type &&
            'TSConstructSignatureDeclaration' !== e.node.type) ||
            !Xx(e.node, Kx.PrettierIgnore) ||
            m.shift(),
          Qx(e.node, t) && m.push(qx),
          n
        )
      })
      if (i.inexact) {
        let n
        if (Xx(i, Kx.Dangling)) {
          const r = Xx(i, Kx.Line)
          n = [
            _x(e, t, !0),
            r || Gx(t.originalText, eS(Ux(Yx(i)))) ? qx : Mx,
            '...'
          ]
        } else n = ['...']
        y.push([...m, ...n])
      }
      const D = Ux(i[u]),
        E = !(
          i.inexact ||
          (D && 'RestElement' === D.type) ||
          (D &&
            ('TSPropertySignature' === D.type ||
              'TSCallSignatureDeclaration' === D.type ||
              'TSMethodSignature' === D.type ||
              'TSConstructSignatureDeclaration' === D.type) &&
            Xx(D, Kx.PrettierIgnore))
        )
      let C
      if (0 === y.length) {
        if (!Xx(i, Kx.Dangling)) return [d, h, nS(e, t, n)]
        C = $x([d, _x(e, t), Rx, h, tS(e), nS(e, t, n)])
      } else
        C = [
          l && Hx(i.properties) ? uS(c) : '',
          d,
          Vx([t.bracketSpacing ? Mx : Rx, ...y]),
          Wx(E && (',' !== f || Jx(t)) ? f : ''),
          t.bracketSpacing ? Mx : Rx,
          h,
          tS(e),
          nS(e, t, n)
        ]
      return e.match(
        (e) => 'ObjectPattern' === e.type && !e.decorators,
        (e, t, n) =>
          rS(e) &&
          ('params' === t ||
            'parameters' === t ||
            'this' === t ||
            'rest' === t) &&
          0 === n
      ) ||
        e.match(
          iS,
          (e, t) => 'typeAnnotation' === t,
          (e, t) => 'typeAnnotation' === t,
          (e, t, n) =>
            rS(e) &&
            ('params' === t ||
              'parameters' === t ||
              'this' === t ||
              'rest' === t) &&
            0 === n
        ) ||
        (!p &&
          e.match(
            (e) => 'ObjectPattern' === e.type,
            (e) =>
              'AssignmentExpression' === e.type ||
              'VariableDeclarator' === e.type
          ))
        ? C
        : $x(C, { shouldBreak: p })
    }
  }
  const { printDanglingComments: sS } = Yf,
    { printString: aS, printNumber: cS } = Fi,
    {
      builders: { hardline: lS, softline: pS, group: fS, indent: dS }
    } = su,
    {
      getParentExportDeclaration: hS,
      isFunctionNotation: gS,
      isGetterOrSetter: mS,
      rawText: yS,
      shouldPrintComma: DS
    } = eg,
    { locStart: ES, locEnd: CS } = Zc,
    { printClass: bS } = nx,
    {
      printOpaqueType: AS,
      printTypeAlias: vS,
      printIntersectionType: FS,
      printUnionType: xS,
      printFunctionType: SS,
      printTupleType: wS,
      printIndexedAccessType: TS
    } = ev,
    { printInterface: BS } = hx,
    { printTypeParameter: NS, printTypeParameters: kS } = Ev,
    { printExportDeclaration: PS, printExportAllDeclaration: OS } = jx,
    { printArrayItems: IS } = oC,
    { printObject: LS } = oS,
    { printPropertyKey: jS } = kv,
    {
      printOptionalToken: _S,
      printTypeAnnotation: MS,
      printRestSpread: RS
    } = _E
  function $S(e, t) {
    const n = hS(e)
    return n
      ? (Ff.strictEqual(n.type, 'DeclareExportDeclaration'), t)
      : ['declare ', t]
  }
  var VS = {
    printFlow: function (e, t, n) {
      const r = e.getValue(),
        i = t.semi ? ';' : '',
        u = []
      switch (r.type) {
        case 'DeclareClass':
          return $S(e, bS(e, t, n))
        case 'DeclareFunction':
          return $S(e, [
            'function ',
            n('id'),
            r.predicate ? ' ' : '',
            n('predicate'),
            i
          ])
        case 'DeclareModule':
          return $S(e, ['module ', n('id'), ' ', n('body')])
        case 'DeclareModuleExports':
          return $S(e, ['module.exports', ': ', n('typeAnnotation'), i])
        case 'DeclareVariable':
          return $S(e, ['var ', n('id'), i])
        case 'DeclareOpaqueType':
          return $S(e, AS(e, t, n))
        case 'DeclareInterface':
          return $S(e, BS(e, t, n))
        case 'DeclareTypeAlias':
          return $S(e, vS(e, t, n))
        case 'DeclareExportDeclaration':
          return $S(e, PS(e, t, n))
        case 'DeclareExportAllDeclaration':
          return $S(e, OS(e, t, n))
        case 'OpaqueType':
          return AS(e, t, n)
        case 'TypeAlias':
          return vS(e, t, n)
        case 'IntersectionTypeAnnotation':
          return FS(e, t, n)
        case 'UnionTypeAnnotation':
          return xS(e, t, n)
        case 'FunctionTypeAnnotation':
          return SS(e, t, n)
        case 'TupleTypeAnnotation':
          return wS(e, t, n)
        case 'GenericTypeAnnotation':
          return [n('id'), kS(e, t, n, 'typeParameters')]
        case 'IndexedAccessType':
        case 'OptionalIndexedAccessType':
          return TS(e, t, n)
        case 'TypeAnnotation':
          return n('typeAnnotation')
        case 'TypeParameter':
          return NS(e, t, n)
        case 'TypeofTypeAnnotation':
          return ['typeof ', n('argument')]
        case 'ExistsTypeAnnotation':
          return '*'
        case 'EmptyTypeAnnotation':
          return 'empty'
        case 'MixedTypeAnnotation':
          return 'mixed'
        case 'ArrayTypeAnnotation':
          return [n('elementType'), '[]']
        case 'BooleanLiteralTypeAnnotation':
          return String(r.value)
        case 'EnumDeclaration':
          return ['enum ', n('id'), ' ', n('body')]
        case 'EnumBooleanBody':
        case 'EnumNumberBody':
        case 'EnumStringBody':
        case 'EnumSymbolBody':
          if ('EnumSymbolBody' === r.type || r.explicitType) {
            let e = null
            switch (r.type) {
              case 'EnumBooleanBody':
                e = 'boolean'
                break
              case 'EnumNumberBody':
                e = 'number'
                break
              case 'EnumStringBody':
                e = 'string'
                break
              case 'EnumSymbolBody':
                e = 'symbol'
            }
            u.push('of ', e, ' ')
          }
          if (0 !== r.members.length || r.hasUnknownMembers) {
            const i =
              r.members.length > 0
                ? [
                    lS,
                    IS(e, t, 'members', n),
                    r.hasUnknownMembers || DS(t) ? ',' : ''
                  ]
                : []
            u.push(
              fS([
                '{',
                dS([...i, ...(r.hasUnknownMembers ? [lS, '...'] : [])]),
                sS(e, t, !0),
                lS,
                '}'
              ])
            )
          } else u.push(fS(['{', sS(e, t), pS, '}']))
          return u
        case 'EnumBooleanMember':
        case 'EnumNumberMember':
        case 'EnumStringMember':
          return [
            n('id'),
            ' = ',
            'object' == typeof r.init ? n('init') : String(r.init)
          ]
        case 'EnumDefaultedMember':
          return n('id')
        case 'FunctionTypeParam': {
          const t = r.name
            ? n('name')
            : e.getParentNode().this === r
            ? 'this'
            : ''
          return [t, _S(e), t ? ': ' : '', n('typeAnnotation')]
        }
        case 'InterfaceDeclaration':
        case 'InterfaceTypeAnnotation':
          return BS(e, t, n)
        case 'ClassImplements':
        case 'InterfaceExtends':
          return [n('id'), n('typeParameters')]
        case 'NullableTypeAnnotation':
          return ['?', n('typeAnnotation')]
        case 'Variance': {
          const { kind: e } = r
          return Ff.ok('plus' === e || 'minus' === e), 'plus' === e ? '+' : '-'
        }
        case 'ObjectTypeCallProperty':
          return r.static && u.push('static '), u.push(n('value')), u
        case 'ObjectTypeIndexer':
          return [
            r.variance ? n('variance') : '',
            '[',
            n('id'),
            r.id ? ': ' : '',
            n('key'),
            ']: ',
            n('value')
          ]
        case 'ObjectTypeProperty': {
          let i = ''
          return (
            r.proto ? (i = 'proto ') : r.static && (i = 'static '),
            [
              i,
              mS(r) ? r.kind + ' ' : '',
              r.variance ? n('variance') : '',
              jS(e, t, n),
              _S(e),
              gS(r) ? '' : ': ',
              n('value')
            ]
          )
        }
        case 'ObjectTypeAnnotation':
          return LS(e, t, n)
        case 'ObjectTypeInternalSlot':
          return [
            r.static ? 'static ' : '',
            '[[',
            n('id'),
            ']]',
            _S(e),
            r.method ? '' : ': ',
            n('value')
          ]
        case 'ObjectTypeSpreadProperty':
          return RS(e, t, n)
        case 'QualifiedTypeIdentifier':
          return [n('qualification'), '.', n('id')]
        case 'StringLiteralTypeAnnotation':
          return aS(yS(r), t)
        case 'NumberLiteralTypeAnnotation':
          Ff.strictEqual(typeof r.value, 'number')
        case 'BigIntLiteralTypeAnnotation':
          return r.extra ? cS(r.extra.raw) : cS(r.raw)
        case 'TypeCastExpression':
          return ['(', n('expression'), MS(e, t, n), ')']
        case 'TypeParameterDeclaration':
        case 'TypeParameterInstantiation': {
          const i = kS(e, t, n, 'params')
          if ('flow' === t.parser) {
            const e = ES(r),
              n = CS(r),
              u = t.originalText.lastIndexOf('/*', e),
              o = t.originalText.indexOf('*/', n)
            if (-1 !== u && -1 !== o) {
              const e = t.originalText.slice(u + 2, o).trim()
              if (e.startsWith('::') && !e.includes('/*') && !e.includes('*/'))
                return ['/*:: ', i, ' */']
            }
          }
          return i
        }
        case 'InferredPredicate':
          return '%checks'
        case 'DeclaredPredicate':
          return ['%checks(', n('value'), ')']
        case 'AnyTypeAnnotation':
          return 'any'
        case 'BooleanTypeAnnotation':
          return 'boolean'
        case 'BigIntTypeAnnotation':
          return 'bigint'
        case 'NullLiteralTypeAnnotation':
          return 'null'
        case 'NumberTypeAnnotation':
          return 'number'
        case 'SymbolTypeAnnotation':
          return 'symbol'
        case 'StringTypeAnnotation':
          return 'string'
        case 'VoidTypeAnnotation':
          return 'void'
        case 'ThisTypeAnnotation':
          return 'this'
        case 'Node':
        case 'Printable':
        case 'SourceLocation':
        case 'Position':
        case 'Statement':
        case 'Function':
        case 'Pattern':
        case 'Expression':
        case 'Declaration':
        case 'Specifier':
        case 'NamedSpecifier':
        case 'Comment':
        case 'MemberTypeAnnotation':
        case 'Type':
          throw new Error('unprintable type: ' + JSON.stringify(r.type))
      }
    }
  }
  const { hasNewlineInRange: WS } = Fi,
    {
      isJsxNode: qS,
      isBlockComment: US,
      getComments: zS,
      isCallExpression: GS,
      isMemberExpression: HS
    } = eg,
    { locStart: JS, locEnd: XS } = Zc,
    {
      builders: {
        line: YS,
        softline: KS,
        group: QS,
        indent: ZS,
        align: ew,
        ifBreak: tw,
        dedent: nw,
        breakParent: rw
      }
    } = su
  function iw(e, t, n) {
    const r = e.getValue(),
      i = 'ConditionalExpression' === r.type,
      u = i ? 'alternate' : 'falseType',
      o = e.getParentNode(),
      s = i
        ? n('test')
        : [n('checkType'), ' ', 'extends', ' ', n('extendsType')]
    return o.type === r.type && o[u] === r ? ew(2, s) : s
  }
  const uw = new Map([
    ['AssignmentExpression', 'right'],
    ['VariableDeclarator', 'init'],
    ['ReturnStatement', 'argument'],
    ['ThrowStatement', 'argument'],
    ['UnaryExpression', 'argument'],
    ['YieldExpression', 'argument']
  ])
  var ow = {
    printTernary: function (e, t, n) {
      const r = e.getValue(),
        i = 'ConditionalExpression' === r.type,
        u = i ? 'consequent' : 'trueType',
        o = i ? 'alternate' : 'falseType',
        s = i ? ['test'] : ['checkType', 'extendsType'],
        a = r[u],
        c = r[o],
        l = []
      let p = !1
      const f = e.getParentNode(),
        d = f.type === r.type && s.some((e) => f[e] === r)
      let h,
        g,
        m = f.type === r.type && !d,
        y = 0
      do {
        ;(g = h || r), (h = e.getParentNode(y)), y++
      } while (h && h.type === r.type && s.every((e) => h[e] !== g))
      const D = h || f,
        E = g
      if (
        i &&
        (qS(r[s[0]]) ||
          qS(a) ||
          qS(c) ||
          (function (e) {
            const t = [e]
            for (let e = 0; e < t.length; e++) {
              const n = t[e]
              for (const e of ['test', 'consequent', 'alternate']) {
                const r = n[e]
                if (qS(r)) return !0
                'ConditionalExpression' === r.type && t.push(r)
              }
            }
            return !1
          })(E))
      ) {
        ;(p = !0), (m = !0)
        const e = (e) => [tw('('), ZS([KS, e]), KS, tw(')')],
          t = (e) =>
            'NullLiteral' === e.type ||
            ('Literal' === e.type && null === e.value) ||
            ('Identifier' === e.type && 'undefined' === e.name)
        l.push(
          ' ? ',
          t(a) ? n(u) : e(n(u)),
          ' : ',
          c.type === r.type || t(c) ? n(o) : e(n(o))
        )
      } else {
        const e = [
          YS,
          '? ',
          a.type === r.type ? tw('', '(') : '',
          ew(2, n(u)),
          a.type === r.type ? tw('', ')') : '',
          YS,
          ': ',
          c.type === r.type ? n(o) : ew(2, n(o))
        ]
        l.push(
          f.type !== r.type || f[o] === r || d
            ? e
            : t.useTabs
            ? nw(ZS(e))
            : ew(Math.max(0, t.tabWidth - 2), e)
        )
      }
      const C = [...s.map((e) => zS(r[e])), zS(a), zS(c)]
          .flat()
          .some((e) => US(e) && WS(t.originalText, JS(e), XS(e))),
        b =
          !p &&
          (HS(f) || ('NGPipeExpression' === f.type && f.left === r)) &&
          !f.computed,
        A = (function (e) {
          const t = e.getValue()
          if ('ConditionalExpression' !== t.type) return !1
          let n,
            r = t
          for (let t = 0; !n; t++) {
            const i = e.getParentNode(t)
            ;(GS(i) && i.callee === r) ||
            (HS(i) && i.object === r) ||
            ('TSNonNullExpression' === i.type && i.expression === r)
              ? (r = i)
              : ('NewExpression' === i.type && i.callee === r) ||
                ('TSAsExpression' === i.type && i.expression === r)
              ? ((n = e.getParentNode(t + 1)), (r = i))
              : (n = i)
          }
          return r !== t && n[uw.get(n.type)] === r
        })(e),
        v =
          ((F = [iw(e, 0, n), m ? l : ZS(l), i && b && !A ? KS : '']),
          f === D ? QS(F, { shouldBreak: C }) : C ? [F, rw] : F)
      var F
      return d || A ? QS([ZS([KS, v]), KS]) : v
    }
  }
  const {
      builders: { hardline: sw }
    } = su,
    {
      getLeftSidePathName: aw,
      hasNakedLeftSide: cw,
      isJsxNode: lw,
      isTheOnlyJsxElementInMarkdown: pw,
      hasComment: fw,
      CommentCheckFlags: dw,
      isNextLineEmpty: hw
    } = eg,
    { shouldPrintParamsWithoutParens: gw } = DF
  function mw(e, t, n, r) {
    const i = e.getValue(),
      u = [],
      o = 'ClassBody' === i.type,
      s = (function (e) {
        for (let t = e.length - 1; t >= 0; t--) {
          const n = e[t]
          if ('EmptyStatement' !== n.type) return n
        }
      })(i[r])
    return (
      e.each((e, r, i) => {
        const a = e.getValue()
        if ('EmptyStatement' === a.type) return
        const c = n()
        t.semi ||
        o ||
        pw(t, e) ||
        !(function (e, t) {
          if ('ExpressionStatement' !== e.getNode().type) return !1
          return e.call((e) => yw(e, t), 'expression')
        })(e, t)
          ? u.push(c)
          : fw(a, dw.Leading)
          ? u.push(n([], { needsSemi: !0 }))
          : u.push(';', c),
          !t.semi &&
            o &&
            Dw(a) &&
            (function (e, t) {
              const n = e.key && e.key.name
              if (
                !(
                  ('static' !== n && 'get' !== n && 'set' !== n) ||
                  e.value ||
                  e.typeAnnotation
                )
              )
                return !0
              if (!t) return !1
              if (t.static || t.accessibility) return !1
              if (!t.computed) {
                const e = t.key && t.key.name
                if ('in' === e || 'instanceof' === e) return !0
              }
              if (Dw(t) && t.variance && !t.static && !t.declare) return !0
              switch (t.type) {
                case 'ClassProperty':
                case 'PropertyDefinition':
                case 'TSAbstractClassProperty':
                  return t.computed
                case 'MethodDefinition':
                case 'TSAbstractMethodDefinition':
                case 'ClassMethod':
                case 'ClassPrivateMethod': {
                  if (
                    (t.value ? t.value.async : t.async) ||
                    'get' === t.kind ||
                    'set' === t.kind
                  )
                    return !1
                  const e = t.value ? t.value.generator : t.generator
                  return !(!t.computed && !e)
                }
                case 'TSIndexSignature':
                  return !0
              }
              return !1
            })(a, i[r + 1]) &&
            u.push(';'),
          a !== s && (u.push(sw), hw(a, t) && u.push(sw))
      }, r),
      u
    )
  }
  function yw(e, t) {
    const n = e.getValue()
    switch (n.type) {
      case 'ParenthesizedExpression':
      case 'TypeCastExpression':
      case 'ArrayExpression':
      case 'ArrayPattern':
      case 'TemplateLiteral':
      case 'TemplateElement':
      case 'RegExpLiteral':
        return !0
      case 'ArrowFunctionExpression':
        if (!gw(e, t)) return !0
        break
      case 'UnaryExpression': {
        const { prefix: e, operator: t } = n
        if (e && ('+' === t || '-' === t)) return !0
        break
      }
      case 'BindExpression':
        if (!n.object) return !0
        break
      case 'Literal':
        if (n.regex) return !0
        break
      default:
        if (lw(n)) return !0
    }
    return !!oD(e, t) || (!!cw(n) && e.call((e) => yw(e, t), ...aw(e, n)))
  }
  const Dw = ({ type: e }) =>
    'ClassProperty' === e ||
    'PropertyDefinition' === e ||
    'ClassPrivateProperty' === e
  var Ew = {
    printBody: function (e, t, n) {
      return mw(e, t, n, 'body')
    },
    printSwitchCaseConsequent: function (e, t, n) {
      return mw(e, t, n, 'consequent')
    }
  }
  const { printDanglingComments: Cw } = Yf,
    { isNonEmptyArray: bw } = Fi,
    {
      builders: { hardline: Aw, indent: vw }
    } = su,
    { hasComment: Fw, CommentCheckFlags: xw, isNextLineEmpty: Sw } = eg,
    { printHardlineAfterHeritage: ww } = nx,
    { printBody: Tw } = Ew
  function Bw(e, t, n) {
    const r = e.getValue(),
      i = bw(r.directives),
      u = r.body.some((e) => 'EmptyStatement' !== e.type),
      o = Fw(r, xw.Dangling)
    if (!i && !u && !o) return ''
    const s = []
    if (
      (i &&
        e.each((e, r, i) => {
          s.push(n()),
            (r < i.length - 1 || u || o) &&
              (s.push(Aw), Sw(e.getValue(), t) && s.push(Aw))
        }, 'directives'),
      u && s.push(Tw(e, t, n)),
      o && s.push(Cw(e, t, !0)),
      'Program' === r.type)
    ) {
      const t = e.getParentNode()
      ;(t && 'ModuleExpression' === t.type) || s.push(Aw)
    }
    return s
  }
  var Nw = {
    printBlock: function (e, t, n) {
      const r = e.getValue(),
        i = []
      if (
        ('StaticBlock' === r.type && i.push('static '),
        'ClassBody' === r.type && bw(r.body))
      ) {
        const t = e.getParentNode()
        i.push(ww(t))
      }
      i.push('{')
      const u = Bw(e, t, n)
      if (u) i.push(vw([Aw, u]), Aw)
      else {
        const t = e.getParentNode(),
          n = e.getParentNode(1)
        'ArrowFunctionExpression' === t.type ||
          'FunctionExpression' === t.type ||
          'FunctionDeclaration' === t.type ||
          'ObjectMethod' === t.type ||
          'ClassMethod' === t.type ||
          'ClassPrivateMethod' === t.type ||
          'ForStatement' === t.type ||
          'WhileStatement' === t.type ||
          'DoWhileStatement' === t.type ||
          'DoExpression' === t.type ||
          ('CatchClause' === t.type && !n.finalizer) ||
          'TSModuleDeclaration' === t.type ||
          'TSDeclareFunction' === t.type ||
          'StaticBlock' === r.type ||
          'ClassBody' === r.type ||
          i.push(Aw)
      }
      return i.push('}'), i
    },
    printBlockBody: Bw
  }
  const { printDanglingComments: kw } = Yf,
    { hasNewlineInRange: Pw } = Fi,
    {
      builders: {
        join: Ow,
        line: Iw,
        hardline: Lw,
        softline: jw,
        group: _w,
        indent: Mw,
        conditionalGroup: Rw,
        ifBreak: $w
      }
    } = su,
    {
      isLiteral: Vw,
      getTypeScriptMappedTypeModifier: Ww,
      shouldPrintComma: qw,
      isCallExpression: Uw,
      isMemberExpression: zw
    } = eg,
    { locStart: Gw, locEnd: Hw } = Zc,
    { printOptionalToken: Jw, printTypeScriptModifiers: Xw } = _E,
    { printTernary: Yw } = ow,
    { printFunctionParameters: Kw, shouldGroupFunctionParameters: Qw } = PA,
    { printTemplateLiteral: Zw } = Eg,
    { printArrayItems: eT } = oC,
    { printObject: tT } = oS,
    { printClassProperty: nT, printClassMethod: rT } = nx,
    { printTypeParameter: iT, printTypeParameters: uT } = Ev,
    { printPropertyKey: oT } = kv,
    { printFunction: sT, printMethodInternal: aT } = DF,
    { printInterface: cT } = hx,
    { printBlock: lT } = Nw,
    {
      printTypeAlias: pT,
      printIntersectionType: fT,
      printUnionType: dT,
      printFunctionType: hT,
      printTupleType: gT,
      printIndexedAccessType: mT
    } = ev
  var yT = {
    printTypescript: function (e, t, n) {
      const r = e.getValue()
      if (!r.type.startsWith('TS')) return
      if (r.type.endsWith('Keyword')) return r.type.slice(2, -7).toLowerCase()
      const i = t.semi ? ';' : '',
        u = []
      switch (r.type) {
        case 'TSThisType':
          return 'this'
        case 'TSTypeAssertion': {
          const e = !(
              'ArrayExpression' === r.expression.type ||
              'ObjectExpression' === r.expression.type
            ),
            t = _w(['<', Mw([jw, n('typeAnnotation')]), jw, '>']),
            i = [$w('('), Mw([jw, n('expression')]), jw, $w(')')]
          return e
            ? Rw([
                [t, n('expression')],
                [t, _w(i, { shouldBreak: !0 })],
                [t, n('expression')]
              ])
            : _w([t, n('expression')])
        }
        case 'TSDeclareFunction':
          return sT(e, n, t)
        case 'TSExportAssignment':
          return ['export = ', n('expression'), i]
        case 'TSModuleBlock':
          return lT(e, t, n)
        case 'TSInterfaceBody':
        case 'TSTypeLiteral':
          return tT(e, t, n)
        case 'TSTypeAliasDeclaration':
          return pT(e, t, n)
        case 'TSQualifiedName':
          return Ow('.', [n('left'), n('right')])
        case 'TSAbstractMethodDefinition':
        case 'TSDeclareMethod':
          return rT(e, t, n)
        case 'TSAbstractClassProperty':
          return nT(e, t, n)
        case 'TSInterfaceHeritage':
        case 'TSExpressionWithTypeArguments':
          return (
            u.push(n('expression')),
            r.typeParameters && u.push(n('typeParameters')),
            u
          )
        case 'TSTemplateLiteralType':
          return Zw(e, n, t)
        case 'TSNamedTupleMember':
          return [n('label'), r.optional ? '?' : '', ': ', n('elementType')]
        case 'TSRestType':
          return ['...', n('typeAnnotation')]
        case 'TSOptionalType':
          return [n('typeAnnotation'), '?']
        case 'TSInterfaceDeclaration':
          return cT(e, t, n)
        case 'TSClassImplements':
          return [n('expression'), n('typeParameters')]
        case 'TSTypeParameterDeclaration':
        case 'TSTypeParameterInstantiation':
          return uT(e, t, n, 'params')
        case 'TSTypeParameter':
          return iT(e, t, n)
        case 'TSAsExpression': {
          u.push(n('expression'), ' as ', n('typeAnnotation'))
          const t = e.getParentNode()
          return (Uw(t) && t.callee === r) || (zw(t) && t.object === r)
            ? _w([Mw([jw, ...u]), jw])
            : u
        }
        case 'TSArrayType':
          return [n('elementType'), '[]']
        case 'TSPropertySignature':
          return (
            r.readonly && u.push('readonly '),
            u.push(oT(e, t, n), Jw(e)),
            r.typeAnnotation && u.push(': ', n('typeAnnotation')),
            r.initializer && u.push(' = ', n('initializer')),
            u
          )
        case 'TSParameterProperty':
          return (
            r.accessibility && u.push(r.accessibility + ' '),
            r.export && u.push('export '),
            r.static && u.push('static '),
            r.override && u.push('override '),
            r.readonly && u.push('readonly '),
            u.push(n('parameter')),
            u
          )
        case 'TSTypeQuery':
          return ['typeof ', n('exprName')]
        case 'TSIndexSignature': {
          const u = e.getParentNode(),
            o = r.parameters.length > 1 ? $w(qw(t) ? ',' : '') : '',
            s = _w([Mw([jw, Ow([', ', jw], e.map(n, 'parameters'))]), o, jw])
          return [
            r.export ? 'export ' : '',
            r.accessibility ? [r.accessibility, ' '] : '',
            r.static ? 'static ' : '',
            r.readonly ? 'readonly ' : '',
            r.declare ? 'declare ' : '',
            '[',
            r.parameters ? s : '',
            r.typeAnnotation ? ']: ' : ']',
            r.typeAnnotation ? n('typeAnnotation') : '',
            'ClassBody' === u.type ? i : ''
          ]
        }
        case 'TSTypePredicate':
          return [
            r.asserts ? 'asserts ' : '',
            n('parameterName'),
            r.typeAnnotation ? [' is ', n('typeAnnotation')] : ''
          ]
        case 'TSNonNullExpression':
          return [n('expression'), '!']
        case 'TSImportType':
          return [
            r.isTypeOf ? 'typeof ' : '',
            'import(',
            n(r.parameter ? 'parameter' : 'argument'),
            ')',
            r.qualifier ? ['.', n('qualifier')] : '',
            uT(e, t, n, 'typeParameters')
          ]
        case 'TSLiteralType':
          return n('literal')
        case 'TSIndexedAccessType':
          return mT(e, t, n)
        case 'TSConstructSignatureDeclaration':
        case 'TSCallSignatureDeclaration':
        case 'TSConstructorType':
          if (
            ('TSConstructorType' === r.type &&
              r.abstract &&
              u.push('abstract '),
            'TSCallSignatureDeclaration' !== r.type && u.push('new '),
            u.push(_w(Kw(e, n, t, !1, !0))),
            r.returnType || r.typeAnnotation)
          ) {
            const e = 'TSConstructorType' === r.type
            u.push(e ? ' => ' : ': ', n('returnType'), n('typeAnnotation'))
          }
          return u
        case 'TSTypeOperator':
          return [r.operator, ' ', n('typeAnnotation')]
        case 'TSMappedType': {
          const u = Pw(t.originalText, Gw(r), Hw(r))
          return _w(
            [
              '{',
              Mw([
                t.bracketSpacing ? Iw : jw,
                r.readonly ? [Ww(r.readonly, 'readonly'), ' '] : '',
                Xw(e, t, n),
                n('typeParameter'),
                r.optional ? Ww(r.optional, '?') : '',
                r.typeAnnotation ? ': ' : '',
                n('typeAnnotation'),
                $w(i)
              ]),
              kw(e, t, !0),
              t.bracketSpacing ? Iw : jw,
              '}'
            ],
            { shouldBreak: u }
          )
        }
        case 'TSMethodSignature': {
          const i = r.kind && 'method' !== r.kind ? `${r.kind} ` : ''
          u.push(
            r.accessibility ? [r.accessibility, ' '] : '',
            i,
            r.export ? 'export ' : '',
            r.static ? 'static ' : '',
            r.readonly ? 'readonly ' : '',
            r.abstract ? 'abstract ' : '',
            r.declare ? 'declare ' : '',
            r.computed ? '[' : '',
            n('key'),
            r.computed ? ']' : '',
            Jw(e)
          )
          const o = Kw(e, n, t, !1, !0),
            s = r.returnType ? 'returnType' : 'typeAnnotation',
            a = r[s],
            c = a ? n(s) : '',
            l = Qw(r, c)
          return u.push(l ? _w(o) : o), a && u.push(': ', _w(c)), _w(u)
        }
        case 'TSNamespaceExportDeclaration':
          return (
            u.push('export as namespace ', n('id')),
            t.semi && u.push(';'),
            _w(u)
          )
        case 'TSEnumDeclaration':
          return (
            r.declare && u.push('declare '),
            r.modifiers && u.push(Xw(e, t, n)),
            r.const && u.push('const '),
            u.push('enum ', n('id'), ' '),
            0 === r.members.length
              ? u.push(_w(['{', kw(e, t), jw, '}']))
              : u.push(
                  _w([
                    '{',
                    Mw([Lw, eT(e, t, 'members', n), qw(t, 'es5') ? ',' : '']),
                    kw(e, t, !0),
                    Lw,
                    '}'
                  ])
                ),
            u
          )
        case 'TSEnumMember':
          return (
            u.push(n('id')), r.initializer && u.push(' = ', n('initializer')), u
          )
        case 'TSImportEqualsDeclaration':
          return (
            r.isExport && u.push('export '),
            u.push('import '),
            r.importKind &&
              'value' !== r.importKind &&
              u.push(r.importKind, ' '),
            u.push(n('id'), ' = ', n('moduleReference')),
            t.semi && u.push(';'),
            _w(u)
          )
        case 'TSExternalModuleReference':
          return ['require(', n('expression'), ')']
        case 'TSModuleDeclaration': {
          const o = e.getParentNode(),
            s = Vw(r.id),
            a = 'TSModuleDeclaration' === o.type,
            c = r.body && 'TSModuleDeclaration' === r.body.type
          if (a) u.push('.')
          else {
            r.declare && u.push('declare '), u.push(Xw(e, t, n))
            const i = t.originalText.slice(Gw(r), Gw(r.id))
            ;('Identifier' === r.id.type &&
              'global' === r.id.name &&
              !/namespace|module/.test(i)) ||
              u.push(
                s || /(?:^|\s)module(?:\s|$)/.test(i) ? 'module ' : 'namespace '
              )
          }
          return (
            u.push(n('id')),
            c
              ? u.push(n('body'))
              : r.body
              ? u.push(' ', _w(n('body')))
              : u.push(i),
            u
          )
        }
        case 'TSPrivateIdentifier':
          return r.escapedText
        case 'TSConditionalType':
          return Yw(e, t, n)
        case 'TSInferType':
          return ['infer', ' ', n('typeParameter')]
        case 'TSIntersectionType':
          return fT(e, t, n)
        case 'TSUnionType':
          return dT(e, t, n)
        case 'TSFunctionType':
          return hT(e, t, n)
        case 'TSTupleType':
          return gT(e, t, n)
        case 'TSTypeReference':
          return [n('typeName'), uT(e, t, n, 'typeParameters')]
        case 'TSTypeAnnotation':
          return n('typeAnnotation')
        case 'TSEmptyBodyFunctionExpression':
          return aT(e, t, n)
        case 'TSJSDocAllType':
          return '*'
        case 'TSJSDocUnknownType':
          return '?'
        case 'TSJSDocNullableType':
          return ['?', n('typeAnnotation')]
        case 'TSJSDocNonNullableType':
          return ['!', n('typeAnnotation')]
        default:
          throw new Error(
            `Unknown TypeScript node type: ${JSON.stringify(r.type)}.`
          )
      }
    }
  }
  const { hasNewline: DT } = Fi,
    {
      builders: { join: ET, hardline: CT },
      utils: { replaceTextEndOfLine: bT }
    } = su,
    { isLineComment: AT, isBlockComment: vT } = eg,
    { locStart: FT, locEnd: xT } = Zc
  var ST = {
    printComment: function (e, t) {
      const n = e.getValue()
      if (AT(n)) return t.originalText.slice(FT(n), xT(n)).trimEnd()
      if (vT(n)) {
        if (
          (function (e) {
            const t = `*${e.value}*`.split('\n')
            return t.length > 1 && t.every((e) => '*' === e.trim()[0])
          })(n)
        ) {
          const e = (function (e) {
            const t = e.value.split('\n')
            return [
              '/*',
              ET(
                CT,
                t.map((e, n) =>
                  0 === n
                    ? e.trimEnd()
                    : ' ' + (n < t.length - 1 ? e.trim() : e.trimStart())
                )
              ),
              '*/'
            ]
          })(n)
          return n.trailing && !DT(t.originalText, FT(n), { backwards: !0 })
            ? [CT, e]
            : e
        }
        const e = xT(n),
          r = '*-/' === t.originalText.slice(e - 3, e)
        return ['/*', bT(n.value), r ? '*-/' : '*/']
      }
      throw new Error('Not a comment: ' + JSON.stringify(n))
    }
  }
  const { printString: wT, printNumber: TT } = Fi
  function BT(e) {
    return e.toLowerCase()
  }
  function NT({ pattern: e, flags: t }) {
    return `/${e}/${(t = [...t].sort().join(''))}`
  }
  var kT = {
    printLiteral: function (e, t) {
      const n = e.getNode()
      switch (n.type) {
        case 'RegExpLiteral':
          return NT(n)
        case 'BigIntLiteral':
          return BT(n.bigint || n.extra.raw)
        case 'NumericLiteral':
          return TT(n.extra.raw)
        case 'StringLiteral':
          return wT(n.extra.raw, t)
        case 'NullLiteral':
          return 'null'
        case 'BooleanLiteral':
          return String(n.value)
        case 'DecimalLiteral':
          return TT(n.value) + 'm'
        case 'Literal': {
          if (n.regex) return NT(n.regex)
          if (n.bigint) return BT(n.raw)
          if (n.decimal) return TT(n.decimal) + 'm'
          const { value: e } = n
          return 'number' == typeof e
            ? TT(n.raw)
            : 'string' == typeof e
            ? wT(n.raw, t)
            : String(e)
        }
      }
    }
  }
  const { printDanglingComments: PT } = Yf,
    { hasNewline: OT } = Fi,
    {
      builders: {
        join: IT,
        line: LT,
        hardline: jT,
        softline: _T,
        group: MT,
        indent: RT
      },
      utils: { replaceTextEndOfLine: $T }
    } = su,
    { insertPragma: VT } = Rm,
    {
      hasFlowShorthandAnnotationComment: WT,
      hasComment: qT,
      CommentCheckFlags: UT,
      isTheOnlyJsxElementInMarkdown: zT,
      isBlockComment: GT,
      isLineComment: HT,
      isNextLineEmpty: JT,
      needsHardlineAfterDanglingComment: XT,
      rawText: YT,
      hasIgnoreComment: KT,
      isCallExpression: QT,
      isMemberExpression: ZT
    } = eg,
    { locStart: eB, locEnd: tB } = Zc,
    { printHtmlBinding: nB, isVueEventBindingExpression: rB } = dD,
    { printAngular: iB } = JD,
    { printJsx: uB, hasJsxIgnoreComment: oB } = NE,
    { printFlow: sB } = VS,
    { printTypescript: aB } = yT,
    {
      printOptionalToken: cB,
      printBindExpressionCallee: lB,
      printTypeAnnotation: pB,
      adjustClause: fB,
      printRestSpread: dB
    } = _E,
    {
      printImportDeclaration: hB,
      printExportDeclaration: gB,
      printExportAllDeclaration: mB,
      printModuleSpecifier: yB
    } = jx,
    { printTernary: DB } = ow,
    { printTemplateLiteral: EB } = Eg,
    { printArray: CB } = oC,
    { printObject: bB } = oS,
    { printClass: AB, printClassMethod: vB, printClassProperty: FB } = nx,
    { printProperty: xB } = kv,
    {
      printFunction: SB,
      printArrowFunction: wB,
      printMethod: TB,
      printReturnStatement: BB,
      printThrowStatement: NB
    } = DF,
    { printCallExpression: kB } = Pb,
    { printVariableDeclarator: PB, printAssignmentExpression: OB } = oA,
    { printBinaryishExpression: IB } = RD,
    { printSwitchCaseConsequent: LB } = Ew,
    { printMemberExpression: jB } = zC,
    { printBlock: _B, printBlockBody: MB } = Nw,
    { printComment: RB } = ST,
    { printLiteral: $B } = kT,
    { printDecorators: VB } = kF
  function WB(e, t) {
    const n = YT(e),
      r = n.slice(1, -1)
    if (r.includes('"') || r.includes("'")) return n
    const i = t.singleQuote ? "'" : '"'
    return i + r + i
  }
  var qB = {
    preprocess: sD,
    print: function (e, t, n, r) {
      const i = (function (e, t, n, r) {
        const i = e.getValue(),
          u = t.semi ? ';' : ''
        if (!i) return ''
        if ('string' == typeof i) return i
        for (const r of [$B, nB, iB, uB, sB, aB]) {
          const i = r(e, t, n)
          if (void 0 !== i) return i
        }
        let o = []
        switch (i.type) {
          case 'JsExpressionRoot':
            return n('node')
          case 'JsonRoot':
            return [n('node'), jT]
          case 'File':
            return (
              i.program &&
                i.program.interpreter &&
                o.push(n(['program', 'interpreter'])),
              o.push(n('program')),
              o
            )
          case 'Program':
            return MB(e, t, n)
          case 'EmptyStatement':
            return ''
          case 'ExpressionStatement':
            if (i.directive) return [WB(i.expression, t), u]
            if ('__vue_event_binding' === t.parser) {
              const t = e.getParentNode()
              if (
                'Program' === t.type &&
                1 === t.body.length &&
                t.body[0] === i
              )
                return [n('expression'), rB(i.expression) ? ';' : '']
            }
            return [n('expression'), zT(t, e) ? '' : u]
          case 'ParenthesizedExpression':
            return !qT(i.expression) &&
              ('ObjectExpression' === i.expression.type ||
                'ArrayExpression' === i.expression.type)
              ? ['(', n('expression'), ')']
              : MT(['(', RT([_T, n('expression')]), _T, ')'])
          case 'AssignmentExpression':
            return OB(e, t, n)
          case 'VariableDeclarator':
            return PB(e, t, n)
          case 'BinaryExpression':
          case 'LogicalExpression':
            return IB(e, t, n)
          case 'AssignmentPattern':
            return [n('left'), ' = ', n('right')]
          case 'OptionalMemberExpression':
          case 'MemberExpression':
            return jB(e, t, n)
          case 'MetaProperty':
            return [n('meta'), '.', n('property')]
          case 'BindExpression':
            return (
              i.object && o.push(n('object')),
              o.push(MT(RT([_T, lB(e, t, n)]))),
              o
            )
          case 'Identifier':
            return [i.name, cB(e), pB(e, t, n)]
          case 'V8IntrinsicIdentifier':
            return ['%', i.name]
          case 'SpreadElement':
          case 'SpreadElementPattern':
          case 'SpreadProperty':
          case 'SpreadPropertyPattern':
          case 'RestElement':
            return dB(e, t, n)
          case 'FunctionDeclaration':
          case 'FunctionExpression':
            return SB(e, n, t, r)
          case 'ArrowFunctionExpression':
            return wB(e, t, n, r)
          case 'YieldExpression':
            return (
              o.push('yield'),
              i.delegate && o.push('*'),
              i.argument && o.push(' ', n('argument')),
              o
            )
          case 'AwaitExpression':
            if ((o.push('await'), i.argument)) {
              o.push(' ', n('argument'))
              const t = e.getParentNode()
              if ((QT(t) && t.callee === i) || (ZT(t) && t.object === i)) {
                o = [RT([_T, ...o]), _T]
                const t = e.findAncestor(
                  (e) =>
                    'AwaitExpression' === e.type || 'BlockStatement' === e.type
                )
                if (!t || 'AwaitExpression' !== t.type) return MT(o)
              }
            }
            return o
          case 'ExportDefaultDeclaration':
          case 'ExportNamedDeclaration':
            return gB(e, t, n)
          case 'ExportAllDeclaration':
            return mB(e, t, n)
          case 'ImportDeclaration':
            return hB(e, t, n)
          case 'ImportSpecifier':
          case 'ExportSpecifier':
          case 'ImportNamespaceSpecifier':
          case 'ExportNamespaceSpecifier':
          case 'ImportDefaultSpecifier':
          case 'ExportDefaultSpecifier':
            return yB(e, t, n)
          case 'ImportAttribute':
            return [n('key'), ': ', n('value')]
          case 'Import':
            return 'import'
          case 'BlockStatement':
          case 'StaticBlock':
          case 'ClassBody':
            return _B(e, t, n)
          case 'ThrowStatement':
            return NB(e, t, n)
          case 'ReturnStatement':
            return BB(e, t, n)
          case 'NewExpression':
          case 'ImportExpression':
          case 'OptionalCallExpression':
          case 'CallExpression':
            return kB(e, t, n)
          case 'ObjectExpression':
          case 'ObjectPattern':
          case 'RecordExpression':
            return bB(e, t, n)
          case 'ObjectProperty':
          case 'Property':
            return i.method || 'get' === i.kind || 'set' === i.kind
              ? TB(e, t, n)
              : xB(e, t, n)
          case 'ObjectMethod':
            return TB(e, t, n)
          case 'Decorator':
            return ['@', n('expression')]
          case 'ArrayExpression':
          case 'ArrayPattern':
          case 'TupleExpression':
            return CB(e, t, n)
          case 'SequenceExpression': {
            const t = e.getParentNode(0)
            if ('ExpressionStatement' === t.type || 'ForStatement' === t.type) {
              const t = []
              return (
                e.each((e, r) => {
                  0 === r ? t.push(n()) : t.push(',', RT([LT, n()]))
                }, 'expressions'),
                MT(t)
              )
            }
            return MT(IT([',', LT], e.map(n, 'expressions')))
          }
          case 'ThisExpression':
            return 'this'
          case 'Super':
            return 'super'
          case 'Directive':
            return [n('value'), u]
          case 'DirectiveLiteral':
            return WB(i, t)
          case 'UnaryExpression':
            return (
              o.push(i.operator),
              /[a-z]$/.test(i.operator) && o.push(' '),
              qT(i.argument)
                ? o.push(MT(['(', RT([_T, n('argument')]), _T, ')']))
                : o.push(n('argument')),
              o
            )
          case 'UpdateExpression':
            return o.push(n('argument'), i.operator), i.prefix && o.reverse(), o
          case 'ConditionalExpression':
            return DB(e, t, n)
          case 'VariableDeclaration': {
            const t = e.map(n, 'declarations'),
              r = e.getParentNode(),
              s =
                'ForStatement' === r.type ||
                'ForInStatement' === r.type ||
                'ForOfStatement' === r.type,
              a = i.declarations.some((e) => e.init)
            let c
            return (
              1 !== t.length || qT(i.declarations[0])
                ? t.length > 0 && (c = RT(t[0]))
                : (c = t[0]),
              (o = [
                i.declare ? 'declare ' : '',
                i.kind,
                c ? [' ', c] : '',
                RT(t.slice(1).map((e) => [',', a && !s ? jT : LT, e]))
              ]),
              (s && r.body !== i) || o.push(u),
              MT(o)
            )
          }
          case 'WithStatement':
            return MT(['with (', n('object'), ')', fB(i.body, n('body'))])
          case 'IfStatement': {
            const r = fB(i.consequent, n('consequent')),
              u = MT(['if (', MT([RT([_T, n('test')]), _T]), ')', r])
            if ((o.push(u), i.alternate)) {
              const r = qT(i.consequent, UT.Trailing | UT.Line) || XT(i),
                u = 'BlockStatement' === i.consequent.type && !r
              o.push(u ? ' ' : jT),
                qT(i, UT.Dangling) && o.push(PT(e, t, !0), r ? jT : ' '),
                o.push(
                  'else',
                  MT(
                    fB(
                      i.alternate,
                      n('alternate'),
                      'IfStatement' === i.alternate.type
                    )
                  )
                )
            }
            return o
          }
          case 'ForStatement': {
            const r = fB(i.body, n('body')),
              u = PT(e, t, !0),
              o = u ? [u, _T] : ''
            return i.init || i.test || i.update
              ? [
                  o,
                  MT([
                    'for (',
                    MT([
                      RT([
                        _T,
                        n('init'),
                        ';',
                        LT,
                        n('test'),
                        ';',
                        LT,
                        n('update')
                      ]),
                      _T
                    ]),
                    ')',
                    r
                  ])
                ]
              : [o, MT(['for (;;)', r])]
          }
          case 'WhileStatement':
            return MT([
              'while (',
              MT([RT([_T, n('test')]), _T]),
              ')',
              fB(i.body, n('body'))
            ])
          case 'ForInStatement':
            return MT([
              'for (',
              n('left'),
              ' in ',
              n('right'),
              ')',
              fB(i.body, n('body'))
            ])
          case 'ForOfStatement':
            return MT([
              'for',
              i.await ? ' await' : '',
              ' (',
              n('left'),
              ' of ',
              n('right'),
              ')',
              fB(i.body, n('body'))
            ])
          case 'DoWhileStatement': {
            const e = fB(i.body, n('body'))
            return (
              (o = [MT(['do', e])]),
              'BlockStatement' === i.body.type ? o.push(' ') : o.push(jT),
              o.push('while (', MT([RT([_T, n('test')]), _T]), ')', u),
              o
            )
          }
          case 'DoExpression':
            return [i.async ? 'async ' : '', 'do ', n('body')]
          case 'BreakStatement':
            return (
              o.push('break'), i.label && o.push(' ', n('label')), o.push(u), o
            )
          case 'ContinueStatement':
            return (
              o.push('continue'),
              i.label && o.push(' ', n('label')),
              o.push(u),
              o
            )
          case 'LabeledStatement':
            return 'EmptyStatement' === i.body.type
              ? [n('label'), ':;']
              : [n('label'), ': ', n('body')]
          case 'TryStatement':
            return [
              'try ',
              n('block'),
              i.handler ? [' ', n('handler')] : '',
              i.finalizer ? [' finally ', n('finalizer')] : ''
            ]
          case 'CatchClause':
            if (i.param) {
              const e = qT(
                  i.param,
                  (e) =>
                    !GT(e) ||
                    (e.leading && OT(t.originalText, tB(e))) ||
                    (e.trailing && OT(t.originalText, eB(e), { backwards: !0 }))
                ),
                r = n('param')
              return [
                'catch ',
                e ? ['(', RT([_T, r]), _T, ') '] : ['(', r, ') '],
                n('body')
              ]
            }
            return ['catch ', n('body')]
          case 'SwitchStatement':
            return [
              MT(['switch (', RT([_T, n('discriminant')]), _T, ')']),
              ' {',
              i.cases.length > 0
                ? RT([
                    jT,
                    IT(
                      jT,
                      e.map((e, r, i) => {
                        const u = e.getValue()
                        return [n(), r !== i.length - 1 && JT(u, t) ? jT : '']
                      }, 'cases')
                    )
                  ])
                : '',
              jT,
              '}'
            ]
          case 'SwitchCase': {
            i.test ? o.push('case ', n('test'), ':') : o.push('default:')
            const r = i.consequent.filter((e) => 'EmptyStatement' !== e.type)
            if (r.length > 0) {
              const i = LB(e, t, n)
              o.push(
                1 === r.length && 'BlockStatement' === r[0].type
                  ? [' ', i]
                  : RT([jT, i])
              )
            }
            return o
          }
          case 'DebuggerStatement':
            return ['debugger', u]
          case 'ClassDeclaration':
          case 'ClassExpression':
            return AB(e, t, n)
          case 'ClassMethod':
          case 'ClassPrivateMethod':
          case 'MethodDefinition':
            return vB(e, t, n)
          case 'ClassProperty':
          case 'PropertyDefinition':
          case 'ClassPrivateProperty':
            return FB(e, t, n)
          case 'TemplateElement':
            return $T(i.value.raw)
          case 'TemplateLiteral':
            return EB(e, n, t)
          case 'TaggedTemplateExpression':
            return [n('tag'), n('typeParameters'), n('quasi')]
          case 'PrivateIdentifier':
            return ['#', n('name')]
          case 'PrivateName':
            return ['#', n('id')]
          case 'InterpreterDirective':
            return o.push('#!', i.value, jT), JT(i, t) && o.push(jT), o
          case 'TopicReference':
            return '%'
          case 'ArgumentPlaceholder':
            return '?'
          case 'ModuleExpression': {
            o.push('module {')
            const e = n('body')
            return e && o.push(RT([jT, e]), jT), o.push('}'), o
          }
          default:
            throw new Error('unknown type: ' + JSON.stringify(i.type))
        }
      })(e, t, n, r)
      if (!i) return ''
      const u = e.getValue(),
        { type: o } = u
      if (
        'ClassMethod' === o ||
        'ClassPrivateMethod' === o ||
        'ClassProperty' === o ||
        'PropertyDefinition' === o ||
        'TSAbstractClassProperty' === o ||
        'ClassPrivateProperty' === o ||
        'MethodDefinition' === o ||
        'TSAbstractMethodDefinition' === o ||
        'TSDeclareMethod' === o
      )
        return i
      const s = VB(e, t, n)
      if (s) return MT([...s, i])
      if (!oD(e, t)) return r && r.needsSemi ? [';', i] : i
      const a = [r && r.needsSemi ? ';(' : '(', i]
      if (WT(u)) {
        const [e] = u.trailingComments
        a.push(' /*', e.value.trimStart(), '*/'), (e.printed = !0)
      }
      return a.push(')'), a
    },
    embed: um,
    insertPragma: VT,
    massageAstNode: lm,
    hasPrettierIgnore: (e) => KT(e) || oB(e),
    willPrintOwnComments: Uy.willPrintOwnComments,
    canAttachComment: function (e) {
      return (
        e.type &&
        !GT(e) &&
        !HT(e) &&
        'EmptyStatement' !== e.type &&
        'TemplateElement' !== e.type &&
        'Import' !== e.type &&
        'TSEmptyBodyFunctionExpression' !== e.type
      )
    },
    printComment: RB,
    isBlockComment: GT,
    handleComments: {
      avoidAstMutation: !0,
      ownLine: Uy.handleOwnLineComment,
      endOfLine: Uy.handleEndOfLineComment,
      remaining: Uy.handleRemainingComment
    },
    getCommentChildNodes: Uy.getCommentChildNodes
  }
  const {
    builders: { hardline: UB, indent: zB, join: GB }
  } = su
  const HB = new Set([
    'start',
    'end',
    'extra',
    'loc',
    'comments',
    'leadingComments',
    'trailingComments',
    'innerComments',
    'errors',
    'range',
    'tokens'
  ])
  function JB(e, t) {
    const { type: n } = e
    if ('ObjectProperty' !== n || 'Identifier' !== e.key.type) {
      if ('UnaryExpression' === n && '+' === e.operator) return t.argument
      if ('ArrayExpression' !== n)
        return 'TemplateLiteral' === n
          ? { type: 'StringLiteral', value: e.quasis[0].value.cooked }
          : void 0
      for (const [n, r] of e.elements.entries())
        null === r && t.elements.splice(n, 0, { type: 'NullLiteral' })
    } else t.key = { type: 'StringLiteral', value: e.key.name }
  }
  JB.ignoredProperties = HB
  var XB = {
    preprocess: sD,
    print: function (e, t, n) {
      const r = e.getValue()
      switch (r.type) {
        case 'JsonRoot':
          return [n('node'), UB]
        case 'ArrayExpression': {
          if (0 === r.elements.length) return '[]'
          const t = e.map(
            () => (null === e.getValue() ? 'null' : n()),
            'elements'
          )
          return ['[', zB([UB, GB([',', UB], t)]), UB, ']']
        }
        case 'ObjectExpression':
          return 0 === r.properties.length
            ? '{}'
            : ['{', zB([UB, GB([',', UB], e.map(n, 'properties'))]), UB, '}']
        case 'ObjectProperty':
          return [n('key'), ': ', n('value')]
        case 'UnaryExpression':
          return ['+' === r.operator ? '' : r.operator, n('argument')]
        case 'NullLiteral':
          return 'null'
        case 'BooleanLiteral':
          return r.value ? 'true' : 'false'
        case 'StringLiteral':
        case 'NumericLiteral':
          return JSON.stringify(r.value)
        case 'Identifier': {
          const t = e.getParentNode()
          return t && 'ObjectProperty' === t.type && t.key === r
            ? JSON.stringify(r.name)
            : r.name
        }
        case 'TemplateLiteral':
          return n(['quasis', 0])
        case 'TemplateElement':
          return JSON.stringify(r.value.cooked)
        default:
          throw new Error('unknown type: ' + JSON.stringify(r.type))
      }
    },
    massageAstNode: JB
  }
  const YB = 'Common'
  var KB = {
    bracketSpacing: {
      since: '0.0.0',
      category: YB,
      type: 'boolean',
      default: !0,
      description: 'Print spaces between brackets.',
      oppositeDescription: 'Do not print spaces between brackets.'
    },
    singleQuote: {
      since: '0.0.0',
      category: YB,
      type: 'boolean',
      default: !1,
      description: 'Use single quotes instead of double quotes.'
    },
    proseWrap: {
      since: '1.8.2',
      category: YB,
      type: 'choice',
      default: [
        { since: '1.8.2', value: !0 },
        { since: '1.9.0', value: 'preserve' }
      ],
      description: 'How to wrap prose.',
      choices: [
        {
          since: '1.9.0',
          value: 'always',
          description: 'Wrap prose if it exceeds the print width.'
        },
        { since: '1.9.0', value: 'never', description: 'Do not wrap prose.' },
        { since: '1.9.0', value: 'preserve', description: 'Wrap prose as-is.' }
      ]
    },
    bracketSameLine: {
      since: '2.4.0',
      category: YB,
      type: 'boolean',
      default: !1,
      description:
        'Put > of opening tags on the last line instead of on a new line.'
    }
  }
  const QB = 'JavaScript'
  var ZB = {
      arrowParens: {
        since: '1.9.0',
        category: QB,
        type: 'choice',
        default: [
          { since: '1.9.0', value: 'avoid' },
          { since: '2.0.0', value: 'always' }
        ],
        description:
          'Include parentheses around a sole arrow function parameter.',
        choices: [
          {
            value: 'always',
            description: 'Always include parens. Example: `(x) => x`'
          },
          {
            value: 'avoid',
            description: 'Omit parens when possible. Example: `x => x`'
          }
        ]
      },
      bracketSameLine: KB.bracketSameLine,
      bracketSpacing: KB.bracketSpacing,
      jsxBracketSameLine: {
        since: '0.17.0',
        category: QB,
        type: 'boolean',
        description: 'Put > on the last line instead of at a new line.',
        deprecated: '2.4.0'
      },
      semi: {
        since: '1.0.0',
        category: QB,
        type: 'boolean',
        default: !0,
        description: 'Print semicolons.',
        oppositeDescription:
          'Do not print semicolons, except at the beginning of lines which may need them.'
      },
      singleQuote: KB.singleQuote,
      jsxSingleQuote: {
        since: '1.15.0',
        category: QB,
        type: 'boolean',
        default: !1,
        description: 'Use single quotes in JSX.'
      },
      quoteProps: {
        since: '1.17.0',
        category: QB,
        type: 'choice',
        default: 'as-needed',
        description: 'Change when properties in objects are quoted.',
        choices: [
          {
            value: 'as-needed',
            description:
              'Only add quotes around object properties where required.'
          },
          {
            value: 'consistent',
            description:
              'If at least one property in an object requires quotes, quote all properties.'
          },
          {
            value: 'preserve',
            description: 'Respect the input use of quotes in object properties.'
          }
        ]
      },
      trailingComma: {
        since: '0.0.0',
        category: QB,
        type: 'choice',
        default: [
          { since: '0.0.0', value: !1 },
          { since: '0.19.0', value: 'none' },
          { since: '2.0.0', value: 'es5' }
        ],
        description: 'Print trailing commas wherever possible when multi-line.',
        choices: [
          {
            value: 'es5',
            description:
              'Trailing commas where valid in ES5 (objects, arrays, etc.)'
          },
          { value: 'none', description: 'No trailing commas.' },
          {
            value: 'all',
            description:
              'Trailing commas wherever possible (including function arguments).'
          }
        ]
      }
    },
    eN = {
      name: 'JavaScript',
      type: 'programming',
      tmScope: 'source.js',
      aceMode: 'javascript',
      codemirrorMode: 'javascript',
      codemirrorMimeType: 'text/javascript',
      color: '#f1e05a',
      aliases: ['js', 'node'],
      extensions: [
        '.js',
        '._js',
        '.bones',
        '.cjs',
        '.es',
        '.es6',
        '.frag',
        '.gs',
        '.jake',
        '.jsb',
        '.jscad',
        '.jsfl',
        '.jsm',
        '.jss',
        '.jsx',
        '.mjs',
        '.njs',
        '.pac',
        '.sjs',
        '.ssjs',
        '.xsjs',
        '.xsjslib'
      ],
      filenames: ['Jakefile'],
      interpreters: [
        'chakra',
        'd8',
        'gjs',
        'js',
        'node',
        'nodejs',
        'qjs',
        'rhino',
        'v8',
        'v8-shell'
      ],
      languageId: 183
    },
    tN = {
      name: 'TypeScript',
      type: 'programming',
      color: '#2b7489',
      aliases: ['ts'],
      interpreters: ['deno', 'ts-node'],
      extensions: ['.ts'],
      tmScope: 'source.ts',
      aceMode: 'typescript',
      codemirrorMode: 'javascript',
      codemirrorMimeType: 'application/typescript',
      languageId: 378
    },
    nN = {
      name: 'TSX',
      type: 'programming',
      group: 'TypeScript',
      extensions: ['.tsx'],
      tmScope: 'source.tsx',
      aceMode: 'javascript',
      codemirrorMode: 'jsx',
      codemirrorMimeType: 'text/jsx',
      languageId: 94901924
    },
    rN = {
      name: 'JSON',
      type: 'data',
      tmScope: 'source.json',
      aceMode: 'json',
      codemirrorMode: 'javascript',
      codemirrorMimeType: 'application/json',
      extensions: [
        '.json',
        '.avsc',
        '.geojson',
        '.gltf',
        '.har',
        '.ice',
        '.JSON-tmLanguage',
        '.jsonl',
        '.mcmeta',
        '.tfstate',
        '.tfstate.backup',
        '.topojson',
        '.webapp',
        '.webmanifest',
        '.yy',
        '.yyp'
      ],
      filenames: [
        '.arcconfig',
        '.htmlhintrc',
        '.imgbotconfig',
        '.tern-config',
        '.tern-project',
        '.watchmanconfig',
        'Pipfile.lock',
        'composer.lock',
        'mcmod.info'
      ],
      languageId: 174
    },
    iN = {
      name: 'JSON with Comments',
      type: 'data',
      group: 'JSON',
      tmScope: 'source.js',
      aceMode: 'javascript',
      codemirrorMode: 'javascript',
      codemirrorMimeType: 'text/javascript',
      aliases: ['jsonc'],
      extensions: [
        '.jsonc',
        '.sublime-build',
        '.sublime-commands',
        '.sublime-completions',
        '.sublime-keymap',
        '.sublime-macro',
        '.sublime-menu',
        '.sublime-mousemap',
        '.sublime-project',
        '.sublime-settings',
        '.sublime-theme',
        '.sublime-workspace',
        '.sublime_metrics',
        '.sublime_session'
      ],
      filenames: [
        '.babelrc',
        '.eslintrc.json',
        '.jscsrc',
        '.jshintrc',
        '.jslintrc',
        'api-extractor.json',
        'devcontainer.json',
        'jsconfig.json',
        'language-configuration.json',
        'tsconfig.json',
        'tslint.json'
      ],
      languageId: 423
    },
    uN = {
      name: 'JSON5',
      type: 'data',
      extensions: ['.json5'],
      tmScope: 'source.js',
      aceMode: 'javascript',
      codemirrorMode: 'javascript',
      codemirrorMimeType: 'application/json',
      languageId: 175
    }
  var oN = {
    languages: [
      rh(eN, (e) => ({
        since: '0.0.0',
        parsers: [
          'babel',
          'espree',
          'meriyah',
          'babel-flow',
          'babel-ts',
          'flow',
          'typescript'
        ],
        vscodeLanguageIds: ['javascript', 'mongo'],
        interpreters: [...e.interpreters, 'zx'],
        extensions: [...e.extensions.filter((e) => '.jsx' !== e), '.wxs']
      })),
      rh(eN, () => ({
        name: 'Flow',
        since: '0.0.0',
        parsers: ['flow', 'babel-flow'],
        vscodeLanguageIds: ['javascript'],
        aliases: [],
        filenames: [],
        extensions: ['.js.flow']
      })),
      rh(eN, () => ({
        name: 'JSX',
        since: '0.0.0',
        parsers: [
          'babel',
          'babel-flow',
          'babel-ts',
          'flow',
          'typescript',
          'espree',
          'meriyah'
        ],
        vscodeLanguageIds: ['javascriptreact'],
        aliases: void 0,
        filenames: void 0,
        extensions: ['.jsx'],
        group: 'JavaScript',
        interpreters: void 0,
        tmScope: 'source.js.jsx',
        aceMode: 'javascript',
        codemirrorMode: 'jsx',
        codemirrorMimeType: 'text/jsx',
        color: void 0
      })),
      rh(tN, () => ({
        since: '1.4.0',
        parsers: ['typescript', 'babel-ts'],
        vscodeLanguageIds: ['typescript']
      })),
      rh(nN, () => ({
        since: '1.4.0',
        parsers: ['typescript', 'babel-ts'],
        vscodeLanguageIds: ['typescriptreact']
      })),
      rh(rN, () => ({
        name: 'JSON.stringify',
        since: '1.13.0',
        parsers: ['json-stringify'],
        vscodeLanguageIds: ['json'],
        extensions: [],
        filenames: ['package.json', 'package-lock.json', 'composer.json']
      })),
      rh(rN, (e) => ({
        since: '1.5.0',
        parsers: ['json'],
        vscodeLanguageIds: ['json'],
        extensions: e.extensions.filter((e) => '.jsonl' !== e)
      })),
      rh(iN, (e) => ({
        since: '1.5.0',
        parsers: ['json'],
        vscodeLanguageIds: ['jsonc'],
        filenames: [...e.filenames, '.eslintrc']
      })),
      rh(uN, () => ({
        since: '1.13.0',
        parsers: ['json5'],
        vscodeLanguageIds: ['json5']
      }))
    ],
    options: ZB,
    printers: { estree: qB, 'estree-json': XB },
    parsers: undefined
  }
  const { isFrontMatterNode: sN } = Fi,
    aN = new Set([
      'raw',
      'raws',
      'sourceIndex',
      'source',
      'before',
      'after',
      'trailingComma'
    ])
  function cN(e, t, n) {
    if (
      (sN(e) && 'yaml' === e.lang && delete t.value,
      'css-comment' === e.type && 'css-root' === n.type && n.nodes.length > 0)
    ) {
      if (
        (n.nodes[0] === e || (sN(n.nodes[0]) && n.nodes[1] === e)) &&
        (delete t.text, /^\*\s*@(?:format|prettier)\s*$/.test(e.text))
      )
        return null
      if ('css-root' === n.type && _n(n.nodes) === e) return null
    }
    if (
      ('value-root' === e.type && delete t.text,
      ('media-query' !== e.type &&
        'media-query-list' !== e.type &&
        'media-feature-expression' !== e.type) ||
        delete t.value,
      'css-rule' === e.type && delete t.params,
      'selector-combinator' === e.type &&
        (t.value = t.value.replace(/\s+/g, ' ')),
      'media-feature' === e.type && (t.value = t.value.replace(/ /g, '')),
      (('value-word' === e.type &&
        ((e.isColor && e.isHex) ||
          ['initial', 'inherit', 'unset', 'revert'].includes(
            t.value.replace().toLowerCase()
          ))) ||
        'media-feature' === e.type ||
        'selector-root-invalid' === e.type ||
        'selector-pseudo' === e.type) &&
        (t.value = t.value.toLowerCase()),
      'css-decl' === e.type && (t.prop = t.prop.toLowerCase()),
      ('css-atrule' !== e.type && 'css-import' !== e.type) ||
        (t.name = t.name.toLowerCase()),
      'value-number' === e.type && (t.unit = t.unit.toLowerCase()),
      ('media-feature' !== e.type &&
        'media-keyword' !== e.type &&
        'media-type' !== e.type &&
        'media-unknown' !== e.type &&
        'media-url' !== e.type &&
        'media-value' !== e.type &&
        'selector-attribute' !== e.type &&
        'selector-string' !== e.type &&
        'selector-class' !== e.type &&
        'selector-combinator' !== e.type &&
        'value-string' !== e.type) ||
        !t.value ||
        (t.value = t.value
          .replace(/'/g, '"')
          .replace(/\\([^\dA-Fa-f])/g, '$1')),
      'selector-attribute' === e.type &&
        ((t.attribute = t.attribute.trim()),
        t.namespace &&
          'string' == typeof t.namespace &&
          ((t.namespace = t.namespace.trim()),
          0 === t.namespace.length && (t.namespace = !0)),
        t.value &&
          ((t.value = t.value.trim().replace(/^["']|["']$/g, '')),
          delete t.quoted)),
      ('media-value' !== e.type &&
        'media-type' !== e.type &&
        'value-number' !== e.type &&
        'selector-root-invalid' !== e.type &&
        'selector-class' !== e.type &&
        'selector-combinator' !== e.type &&
        'selector-tag' !== e.type) ||
        !t.value ||
        (t.value = t.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, (e, t, n) => {
          const r = Number(t)
          return Number.isNaN(r) ? e : r + n.toLowerCase()
        })),
      'selector-tag' === e.type)
    ) {
      const n = e.value.toLowerCase()
      ;['from', 'to'].includes(n) && (t.value = n)
    }
    'css-atrule' === e.type &&
      'supports' === e.name.toLowerCase() &&
      delete t.value,
      'selector-unknown' === e.type && delete t.value
  }
  cN.ignoredProperties = aN
  var lN = cN
  const {
    builders: { hardline: pN, markAsRoot: fN }
  } = su
  var dN = function (e, t) {
    if ('yaml' === e.lang) {
      const n = e.value.trim(),
        r = n ? t(n, { parser: 'yaml' }, { stripTrailingHardline: !0 }) : ''
      return fN([e.startDelimiter, pN, r, r ? pN : '', e.endDelimiter])
    }
  }
  const {
    builders: { hardline: hN }
  } = su
  var gN = function (e, t, n) {
    const r = e.getValue()
    if ('front-matter' === r.type) {
      const e = dN(r, n)
      return e ? [e, hN] : ''
    }
  }
  const mN = new RegExp(
    '^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)',
    's'
  )
  var yN = function (e) {
    const t = e.match(mN)
    if (!t) return { content: e }
    const {
      startDelimiter: n,
      language: r,
      value: i = '',
      endDelimiter: u
    } = t.groups
    let o = r.trim() || 'yaml'
    if (('+++' === n && (o = 'toml'), 'yaml' !== o && n !== u))
      return { content: e }
    const [s] = t
    return {
      frontMatter: {
        type: 'front-matter',
        lang: o,
        value: i,
        startDelimiter: n,
        endDelimiter: u,
        raw: s.replace(/\n$/, '')
      },
      content: s.replace(/[^\n]/g, ' ') + e.slice(s.length)
    }
  }
  var DN = {
    hasPragma: function (e) {
      return Rm.hasPragma(yN(e).content)
    },
    insertPragma: function (e) {
      const { frontMatter: t, content: n } = yN(e)
      return (t ? t.raw + '\n\n' : '') + Rm.insertPragma(n)
    }
  }
  const { isNonEmptyArray: EN } = Fi,
    CN = new Set([
      'red',
      'green',
      'blue',
      'alpha',
      'a',
      'rgb',
      'hue',
      'h',
      'saturation',
      's',
      'lightness',
      'l',
      'whiteness',
      'w',
      'blackness',
      'b',
      'tint',
      'shade',
      'blend',
      'blenda',
      'contrast',
      'hsl',
      'hsla',
      'hwb',
      'hwba'
    ]),
    bN = new Set(['import', 'use', 'forward'])
  function AN(e, t) {
    const n = Array.isArray(t) ? t : [t]
    let r,
      i = -1
    for (; (r = e.getParentNode(++i)); ) if (n.includes(r.type)) return i
    return -1
  }
  function vN(e, t) {
    const n = AN(e, t)
    return -1 === n ? null : e.getParentNode(n)
  }
  function FN(e) {
    return 'value-operator' === e.type && '*' === e.value
  }
  function xN(e) {
    return 'value-operator' === e.type && '/' === e.value
  }
  function SN(e) {
    return 'value-operator' === e.type && '+' === e.value
  }
  function wN(e) {
    return 'value-operator' === e.type && '-' === e.value
  }
  function TN(e) {
    return 'value-operator' === e.type && '%' === e.value
  }
  function BN(e) {
    return (
      'value-comma_group' === e.type &&
      e.groups &&
      e.groups[1] &&
      'value-colon' === e.groups[1].type
    )
  }
  function NN(e) {
    return (
      'value-paren_group' === e.type &&
      e.groups &&
      e.groups[0] &&
      BN(e.groups[0])
    )
  }
  function kN(e) {
    return e && 'value-colon' === e.type
  }
  var PN = {
      getAncestorCounter: AN,
      getAncestorNode: vN,
      getPropOfDeclNode: function (e) {
        const t = vN(e, 'css-decl')
        return t && t.prop && t.prop.toLowerCase()
      },
      hasSCSSInterpolation: function (e) {
        if (EN(e))
          for (let t = e.length - 1; t > 0; t--)
            if (
              'word' === e[t].type &&
              '{' === e[t].value &&
              'word' === e[t - 1].type &&
              e[t - 1].value.endsWith('#')
            )
              return !0
        return !1
      },
      hasStringOrFunction: function (e) {
        if (EN(e))
          for (let t = 0; t < e.length; t++)
            if ('string' === e[t].type || 'func' === e[t].type) return !0
        return !1
      },
      maybeToLowerCase: function (e) {
        return e.includes('$') ||
          e.includes('@') ||
          e.includes('#') ||
          e.startsWith('%') ||
          e.startsWith('--') ||
          e.startsWith(':--') ||
          (e.includes('(') && e.includes(')'))
          ? e
          : e.toLowerCase()
      },
      insideValueFunctionNode: function (e, t) {
        const n = vN(e, 'value-func')
        return n && n.value && n.value.toLowerCase() === t
      },
      insideICSSRuleNode: function (e) {
        const t = vN(e, 'css-rule')
        return (
          t &&
          t.raws &&
          t.raws.selector &&
          (t.raws.selector.startsWith(':import') ||
            t.raws.selector.startsWith(':export'))
        )
      },
      insideAtRuleNode: function (e, t) {
        const n = Array.isArray(t) ? t : [t],
          r = vN(e, 'css-atrule')
        return r && n.includes(r.name.toLowerCase())
      },
      insideURLFunctionInImportAtRuleNode: function (e) {
        const t = e.getValue(),
          n = vN(e, 'css-atrule')
        return (
          n &&
          'import' === n.name &&
          'url' === t.groups[0].value &&
          2 === t.groups.length
        )
      },
      isKeyframeAtRuleKeywords: function (e, t) {
        const n = vN(e, 'css-atrule')
        return (
          n &&
          n.name &&
          n.name.toLowerCase().endsWith('keyframes') &&
          ['from', 'to'].includes(t.toLowerCase())
        )
      },
      isWideKeywords: function (e) {
        return ['initial', 'inherit', 'unset', 'revert'].includes(
          e.toLowerCase()
        )
      },
      isSCSS: function (e, t) {
        return 'less' === e || 'scss' === e
          ? 'scss' === e
          : /(?:\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(t)
      },
      isSCSSVariable: function (e) {
        return Boolean(e && 'word' === e.type && e.value.startsWith('$'))
      },
      isLastNode: function (e, t) {
        const n = e.getParentNode()
        if (!n) return !1
        const { nodes: r } = n
        return r && r.indexOf(t) === r.length - 1
      },
      isLessParser: function (e) {
        return 'css' === e.parser || 'less' === e.parser
      },
      isSCSSControlDirectiveNode: function (e) {
        return (
          'css-atrule' === e.type &&
          ['if', 'else', 'for', 'each', 'while'].includes(e.name)
        )
      },
      isDetachedRulesetDeclarationNode: function (e) {
        return (
          !!e.selector &&
          (('string' == typeof e.selector && /^@.+:.*$/.test(e.selector)) ||
            (e.selector.value && /^@.+:.*$/.test(e.selector.value)))
        )
      },
      isRelationalOperatorNode: function (e) {
        return (
          'value-word' === e.type && ['<', '>', '<=', '>='].includes(e.value)
        )
      },
      isEqualityOperatorNode: function (e) {
        return 'value-word' === e.type && ['==', '!='].includes(e.value)
      },
      isMultiplicationNode: FN,
      isDivisionNode: xN,
      isAdditionNode: SN,
      isSubtractionNode: wN,
      isModuloNode: TN,
      isMathOperatorNode: function (e) {
        return FN(e) || xN(e) || SN(e) || wN(e) || TN(e)
      },
      isEachKeywordNode: function (e) {
        return 'value-word' === e.type && 'in' === e.value
      },
      isForKeywordNode: function (e) {
        return (
          'value-word' === e.type &&
          ['from', 'through', 'end'].includes(e.value)
        )
      },
      isURLFunctionNode: function (e) {
        return 'value-func' === e.type && 'url' === e.value.toLowerCase()
      },
      isIfElseKeywordNode: function (e) {
        return 'value-word' === e.type && ['and', 'or', 'not'].includes(e.value)
      },
      hasComposesNode: function (e) {
        return (
          e.value &&
          'value-root' === e.value.type &&
          e.value.group &&
          'value-value' === e.value.group.type &&
          'composes' === e.prop.toLowerCase()
        )
      },
      hasParensAroundNode: function (e) {
        return (
          e.value &&
          e.value.group &&
          e.value.group.group &&
          'value-paren_group' === e.value.group.group.type &&
          null !== e.value.group.group.open &&
          null !== e.value.group.group.close
        )
      },
      hasEmptyRawBefore: function (e) {
        return e.raws && '' === e.raws.before
      },
      isSCSSNestedPropertyNode: function (e) {
        return (
          !!e.selector &&
          e.selector
            .replace(/\/\*.*?\*\//, '')
            .replace(/\/\/.*?\n/, '')
            .trim()
            .endsWith(':')
        )
      },
      isDetachedRulesetCallNode: function (e) {
        return e.raws && e.raws.params && /^\(\s*\)$/.test(e.raws.params)
      },
      isTemplatePlaceholderNode: function (e) {
        return e.name.startsWith('prettier-placeholder')
      },
      isTemplatePropNode: function (e) {
        return e.prop.startsWith('@prettier-placeholder')
      },
      isPostcssSimpleVarNode: function (e, t) {
        return (
          '$$' === e.value &&
          'value-func' === e.type &&
          t &&
          'value-word' === t.type &&
          !t.raws.before
        )
      },
      isKeyValuePairNode: BN,
      isKeyValuePairInParenGroupNode: NN,
      isKeyInValuePairNode: function (e, t) {
        if (!BN(t)) return !1
        const { groups: n } = t,
          r = n.indexOf(e)
        return -1 !== r && kN(n[r + 1])
      },
      isSCSSMapItemNode: function (e) {
        const t = e.getValue()
        if (0 === t.groups.length) return !1
        const n = e.getParentNode(1)
        if (!(NN(t) || (n && NN(n)))) return !1
        const r = vN(e, 'css-decl')
        return (
          !!(r && r.prop && r.prop.startsWith('$')) ||
          !!NN(n) ||
          'value-func' === n.type
        )
      },
      isInlineValueCommentNode: function (e) {
        return 'value-comment' === e.type && e.inline
      },
      isHashNode: function (e) {
        return 'value-word' === e.type && '#' === e.value
      },
      isLeftCurlyBraceNode: function (e) {
        return 'value-word' === e.type && '{' === e.value
      },
      isRightCurlyBraceNode: function (e) {
        return 'value-word' === e.type && '}' === e.value
      },
      isWordNode: function (e) {
        return ['value-word', 'value-atword'].includes(e.type)
      },
      isColonNode: kN,
      isMediaAndSupportsKeywords: function (e) {
        return e.value && ['not', 'and', 'or'].includes(e.value.toLowerCase())
      },
      isColorAdjusterFuncNode: function (e) {
        return 'value-func' === e.type && CN.has(e.value.toLowerCase())
      },
      lastLineHasInlineComment: function (e) {
        return /\/\//.test(e.split(/[\n\r]/).pop())
      },
      stringifyNode: function e(t) {
        if (t.groups) {
          return (
            (t.open && t.open.value ? t.open.value : '') +
            t.groups.reduce(
              (n, r, i) =>
                n +
                e(r) +
                ('comma_group' === t.groups[0].type && i !== t.groups.length - 1
                  ? ','
                  : ''),
              ''
            ) +
            (t.close && t.close.value ? t.close.value : '')
          )
        }
        const n = t.raws && t.raws.before ? t.raws.before : '',
          r = t.raws && t.raws.quote ? t.raws.quote : ''
        return (
          n +
          r +
          ('atword' === t.type ? '@' : '') +
          (t.value ? t.value : '') +
          r +
          (t.unit ? t.unit : '') +
          (t.group ? e(t.group) : '') +
          (t.raws && t.raws.after ? t.raws.after : '')
        )
      },
      isAtWordPlaceholderNode: function (e) {
        return (
          e &&
          'value-atword' === e.type &&
          e.value.startsWith('prettier-placeholder-')
        )
      },
      isModuleRuleName: function (e) {
        return bN.has(e)
      }
    },
    ON = function (e, t) {
      let n = 0
      for (let r = 0; r < e.line - 1; ++r) n = t.indexOf('\n', n) + 1
      return n + e.column
    }
  const { getLast: IN, skipEverythingButNewLine: LN } = Fi
  function jN(e, t) {
    return 'number' == typeof e.sourceIndex
      ? e.sourceIndex
      : e.source
      ? ON(e.source.start, t) - 1
      : null
  }
  function _N(e, t) {
    if ('css-comment' === e.type && e.inline) return LN(t, e.source.startOffset)
    const n = e.nodes && IN(e.nodes)
    return (
      n && e.source && !e.source.end && (e = n),
      e.source && e.source.end ? ON(e.source.end, t) : null
    )
  }
  function MN(e, t, n) {
    e.source &&
      ((e.source.startOffset = jN(e, n) + t),
      (e.source.endOffset = _N(e, n) + t))
    for (const r in e) {
      const i = e[r]
      'source' !== r && i && 'object' == typeof i && MN(i, t, n)
    }
  }
  function RN(e) {
    let t = e.source.startOffset
    return (
      'string' == typeof e.prop && (t += e.prop.length),
      'css-atrule' === e.type &&
        'string' == typeof e.name &&
        (t +=
          1 + e.name.length + e.raws.afterName.match(/^\s*:?\s*/)[0].length),
      'css-atrule' !== e.type &&
        e.raws &&
        'string' == typeof e.raws.between &&
        (t += e.raws.between.length),
      t
    )
  }
  var $N = {
    locStart: function (e) {
      return e.source.startOffset
    },
    locEnd: function (e) {
      return e.source.endOffset
    },
    calculateLoc: function e(t, n) {
      t.source &&
        ((t.source.startOffset = jN(t, n)), (t.source.endOffset = _N(t, n)))
      for (const r in t) {
        const i = t[r]
        'source' !== r &&
          i &&
          'object' == typeof i &&
          ('value-root' === i.type || 'value-unknown' === i.type
            ? MN(i, RN(t), i.text || i.value)
            : e(i, n))
      }
    },
    replaceQuotesInInlineComments: function (e) {
      let t,
        n = 'initial',
        r = 'initial',
        i = !1
      const u = []
      for (let o = 0; o < e.length; o++) {
        const s = e[o]
        switch (n) {
          case 'initial':
            if ("'" === s) {
              n = 'single-quotes'
              continue
            }
            if ('"' === s) {
              n = 'double-quotes'
              continue
            }
            if (
              ('u' === s || 'U' === s) &&
              'url(' === e.slice(o, o + 4).toLowerCase()
            ) {
              ;(n = 'url'), (o += 3)
              continue
            }
            if ('*' === s && '/' === e[o - 1]) {
              n = 'comment-block'
              continue
            }
            if ('/' === s && '/' === e[o - 1]) {
              ;(n = 'comment-inline'), (t = o - 1)
              continue
            }
            continue
          case 'single-quotes':
            if (
              ("'" === s && '\\' !== e[o - 1] && ((n = r), (r = 'initial')),
              '\n' === s || '\r' === s)
            )
              return e
            continue
          case 'double-quotes':
            if (
              ('"' === s && '\\' !== e[o - 1] && ((n = r), (r = 'initial')),
              '\n' === s || '\r' === s)
            )
              return e
            continue
          case 'url':
            if ((')' === s && (n = 'initial'), '\n' === s || '\r' === s))
              return e
            if ("'" === s) {
              ;(n = 'single-quotes'), (r = 'url')
              continue
            }
            if ('"' === s) {
              ;(n = 'double-quotes'), (r = 'url')
              continue
            }
            continue
          case 'comment-block':
            '/' === s && '*' === e[o - 1] && (n = 'initial')
            continue
          case 'comment-inline':
            ;('"' !== s && "'" !== s && '*' !== s) || (i = !0),
              ('\n' !== s && '\r' !== s) ||
                (i && u.push([t, o]), (n = 'initial'), (i = !1))
            continue
        }
      }
      for (const [t, n] of u)
        e = e.slice(0, t) + e.slice(t, n).replace(/["'*]/g, ' ') + e.slice(n)
      return e
    }
  }
  const {
      printNumber: VN,
      printString: WN,
      hasNewline: qN,
      isFrontMatterNode: UN,
      isNextLineEmpty: zN,
      isNonEmptyArray: GN
    } = Fi,
    {
      builders: {
        join: HN,
        line: JN,
        hardline: XN,
        softline: YN,
        group: KN,
        fill: QN,
        indent: ZN,
        dedent: ek,
        ifBreak: tk,
        breakParent: nk
      },
      utils: { removeLines: rk, getDocParts: ik }
    } = su,
    { insertPragma: uk } = DN,
    {
      getAncestorNode: ok,
      getPropOfDeclNode: sk,
      maybeToLowerCase: ak,
      insideValueFunctionNode: ck,
      insideICSSRuleNode: lk,
      insideAtRuleNode: pk,
      insideURLFunctionInImportAtRuleNode: fk,
      isKeyframeAtRuleKeywords: dk,
      isWideKeywords: hk,
      isSCSS: gk,
      isLastNode: mk,
      isLessParser: yk,
      isSCSSControlDirectiveNode: Dk,
      isDetachedRulesetDeclarationNode: Ek,
      isRelationalOperatorNode: Ck,
      isEqualityOperatorNode: bk,
      isMultiplicationNode: Ak,
      isDivisionNode: vk,
      isAdditionNode: Fk,
      isSubtractionNode: xk,
      isMathOperatorNode: Sk,
      isEachKeywordNode: wk,
      isForKeywordNode: Tk,
      isURLFunctionNode: Bk,
      isIfElseKeywordNode: Nk,
      hasComposesNode: kk,
      hasParensAroundNode: Pk,
      hasEmptyRawBefore: Ok,
      isKeyValuePairNode: Ik,
      isKeyInValuePairNode: Lk,
      isDetachedRulesetCallNode: jk,
      isTemplatePlaceholderNode: _k,
      isTemplatePropNode: Mk,
      isPostcssSimpleVarNode: Rk,
      isSCSSMapItemNode: $k,
      isInlineValueCommentNode: Vk,
      isHashNode: Wk,
      isLeftCurlyBraceNode: qk,
      isRightCurlyBraceNode: Uk,
      isWordNode: zk,
      isColonNode: Gk,
      isMediaAndSupportsKeywords: Hk,
      isColorAdjusterFuncNode: Jk,
      lastLineHasInlineComment: Xk,
      isAtWordPlaceholderNode: Yk
    } = PN,
    { locStart: Kk, locEnd: Qk } = $N
  function Zk(e) {
    return 'es5' === e.trailingComma || 'all' === e.trailingComma
  }
  function eP(e, t, n) {
    const r = []
    return (
      e.each((e, i, u) => {
        const o = u[i - 1]
        if (
          o &&
          'css-comment' === o.type &&
          'prettier-ignore' === o.text.trim()
        ) {
          const n = e.getValue()
          r.push(t.originalText.slice(Kk(n), Qk(n)))
        } else r.push(n())
        i !== u.length - 1 &&
          (('css-comment' === u[i + 1].type &&
            !qN(t.originalText, Kk(u[i + 1]), { backwards: !0 }) &&
            !UN(u[i])) ||
          ('css-atrule' === u[i + 1].type &&
            'else' === u[i + 1].name &&
            'css-comment' !== u[i].type)
            ? r.push(' ')
            : (r.push(t.__isHTMLStyleAttribute ? JN : XN),
              zN(t.originalText, e.getValue(), Qk) && !UN(u[i]) && r.push(XN)))
      }, 'nodes'),
      r
    )
  }
  const tP = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs,
    nP = new RegExp(
      tP.source +
        '|' +
        `(${/[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g.source})?` +
        `(${/(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g.source})` +
        `(${/[A-Za-z]+/g.source})?`,
      'g'
    )
  function rP(e, t) {
    return e.replace(tP, (e) => WN(e, t))
  }
  function iP(e, t) {
    const n = t.singleQuote ? "'" : '"'
    return e.includes('"') || e.includes("'") ? e : n + e + n
  }
  function uP(e) {
    return e.replace(nP, (e, t, n, r, i) => (!n && r ? oP(r) + ak(i || '') : e))
  }
  function oP(e) {
    return VN(e).replace(/\.0(?=$|e)/, '')
  }
  var sP = {
      print: function (e, t, n) {
        const r = e.getValue()
        if (!r) return ''
        if ('string' == typeof r) return r
        switch (r.type) {
          case 'front-matter':
            return [r.raw, XN]
          case 'css-root': {
            const i = eP(e, t, n),
              u = r.raws.after.trim()
            return [i, u ? ` ${u}` : '', ik(i).length > 0 ? XN : '']
          }
          case 'css-comment': {
            const e = r.inline || r.raws.inline,
              n = t.originalText.slice(Kk(r), Qk(r))
            return e ? n.trimEnd() : n
          }
          case 'css-rule':
            return [
              n('selector'),
              r.important ? ' !important' : '',
              r.nodes
                ? [
                    r.selector &&
                    'selector-unknown' === r.selector.type &&
                    Xk(r.selector.value)
                      ? JN
                      : ' ',
                    '{',
                    r.nodes.length > 0 ? ZN([XN, eP(e, t, n)]) : '',
                    XN,
                    '}',
                    Ek(r) ? ';' : ''
                  ]
                : ';'
            ]
          case 'css-decl': {
            const i = e.getParentNode(),
              { between: u } = r.raws,
              o = u.trim(),
              s = ':' === o
            let a = kk(r) ? rk(n('value')) : n('value')
            return (
              !s && Xk(o) && (a = ZN([XN, ek(a)])),
              [
                r.raws.before.replace(/[\s;]/g, ''),
                lk(e) ? r.prop : ak(r.prop),
                o.startsWith('//') ? ' ' : '',
                o,
                r.extend ? '' : ' ',
                yk(t) && r.extend && r.selector
                  ? ['extend(', n('selector'), ')']
                  : '',
                a,
                r.raws.important
                  ? r.raws.important.replace(/\s*!\s*important/i, ' !important')
                  : r.important
                  ? ' !important'
                  : '',
                r.raws.scssDefault
                  ? r.raws.scssDefault.replace(/\s*!default/i, ' !default')
                  : r.scssDefault
                  ? ' !default'
                  : '',
                r.raws.scssGlobal
                  ? r.raws.scssGlobal.replace(/\s*!global/i, ' !global')
                  : r.scssGlobal
                  ? ' !global'
                  : '',
                r.nodes
                  ? [' {', ZN([YN, eP(e, t, n)]), YN, '}']
                  : Mk(r) &&
                    !i.raws.semicolon &&
                    ';' !== t.originalText[Qk(r) - 1]
                  ? ''
                  : t.__isHTMLStyleAttribute && mk(e, r)
                  ? tk(';')
                  : ';'
              ]
            )
          }
          case 'css-atrule': {
            const i = e.getParentNode(),
              u =
                _k(r) && !i.raws.semicolon && ';' !== t.originalText[Qk(r) - 1]
            if (yk(t)) {
              if (r.mixin)
                return [
                  n('selector'),
                  r.important ? ' !important' : '',
                  u ? '' : ';'
                ]
              if (r.function) return [r.name, n('params'), u ? '' : ';']
              if (r.variable)
                return [
                  '@',
                  r.name,
                  ': ',
                  r.value ? n('value') : '',
                  r.raws.between.trim() ? r.raws.between.trim() + ' ' : '',
                  r.nodes
                    ? [
                        '{',
                        ZN([r.nodes.length > 0 ? YN : '', eP(e, t, n)]),
                        YN,
                        '}'
                      ]
                    : '',
                  u ? '' : ';'
                ]
            }
            return [
              '@',
              jk(r) || r.name.endsWith(':') ? r.name : ak(r.name),
              r.params
                ? [
                    jk(r)
                      ? ''
                      : _k(r)
                      ? '' === r.raws.afterName
                        ? ''
                        : r.name.endsWith(':')
                        ? ' '
                        : /^\s*\n\s*\n/.test(r.raws.afterName)
                        ? [XN, XN]
                        : /^\s*\n/.test(r.raws.afterName)
                        ? XN
                        : ' '
                      : ' ',
                    n('params')
                  ]
                : '',
              r.selector ? ZN([' ', n('selector')]) : '',
              r.value
                ? KN([' ', n('value'), Dk(r) ? (Pk(r) ? ' ' : JN) : ''])
                : 'else' === r.name
                ? ' '
                : '',
              r.nodes
                ? [
                    Dk(r)
                      ? ''
                      : (r.selector &&
                          !r.selector.nodes &&
                          'string' == typeof r.selector.value &&
                          Xk(r.selector.value)) ||
                        (!r.selector &&
                          'string' == typeof r.params &&
                          Xk(r.params))
                      ? JN
                      : ' ',
                    '{',
                    ZN([r.nodes.length > 0 ? YN : '', eP(e, t, n)]),
                    YN,
                    '}'
                  ]
                : u
                ? ''
                : ';'
            ]
          }
          case 'media-query-list': {
            const t = []
            return (
              e.each((e) => {
                const r = e.getValue()
                ;('media-query' === r.type && '' === r.value) || t.push(n())
              }, 'nodes'),
              KN(ZN(HN(JN, t)))
            )
          }
          case 'media-query':
            return [HN(' ', e.map(n, 'nodes')), mk(e, r) ? '' : ',']
          case 'media-type':
            return uP(rP(r.value, t))
          case 'media-feature-expression':
            return r.nodes ? ['(', ...e.map(n, 'nodes'), ')'] : r.value
          case 'media-feature':
            return ak(rP(r.value.replace(/ +/g, ' '), t))
          case 'media-colon':
            return [r.value, ' ']
          case 'media-value':
            return uP(rP(r.value, t))
          case 'media-keyword':
            return rP(r.value, t)
          case 'media-url':
            return rP(
              r.value.replace(/^url\(\s+/gi, 'url(').replace(/\s+\)$/g, ')'),
              t
            )
          case 'media-unknown':
            return r.value
          case 'selector-root':
            return KN([
              pk(e, 'custom-selector')
                ? [ok(e, 'css-atrule').customSelector, JN]
                : '',
              HN(
                [',', pk(e, ['extend', 'custom-selector', 'nest']) ? JN : XN],
                e.map(n, 'nodes')
              )
            ])
          case 'selector-selector':
            return KN(ZN(e.map(n, 'nodes')))
          case 'selector-comment':
            return r.value
          case 'selector-string':
            return rP(r.value, t)
          case 'selector-tag': {
            const t = e.getParentNode(),
              n = t && t.nodes.indexOf(r),
              i = n && t.nodes[n - 1]
            return [
              r.namespace
                ? [!0 === r.namespace ? '' : r.namespace.trim(), '|']
                : '',
              'selector-nesting' === i.type
                ? r.value
                : uP(dk(e, r.value) ? r.value.toLowerCase() : r.value)
            ]
          }
          case 'selector-id':
            return ['#', r.value]
          case 'selector-class':
            return ['.', uP(rP(r.value, t))]
          case 'selector-attribute':
            return [
              '[',
              r.namespace
                ? [!0 === r.namespace ? '' : r.namespace.trim(), '|']
                : '',
              r.attribute.trim(),
              r.operator ? r.operator : '',
              r.value ? iP(rP(r.value.trim(), t), t) : '',
              r.insensitive ? ' i' : '',
              ']'
            ]
          case 'selector-combinator':
            if (
              '+' === r.value ||
              '>' === r.value ||
              '~' === r.value ||
              '>>>' === r.value
            ) {
              const t = e.getParentNode()
              return [
                'selector-selector' === t.type && t.nodes[0] === r ? '' : JN,
                r.value,
                mk(e, r) ? '' : ' '
              ]
            }
            return [
              r.value.trim().startsWith('(') ? JN : '',
              uP(rP(r.value.trim(), t)) || JN
            ]
          case 'selector-universal':
            return [
              r.namespace
                ? [!0 === r.namespace ? '' : r.namespace.trim(), '|']
                : '',
              r.value
            ]
          case 'selector-pseudo':
            return [
              ak(r.value),
              GN(r.nodes) ? ['(', HN(', ', e.map(n, 'nodes')), ')'] : ''
            ]
          case 'selector-nesting':
            return r.value
          case 'selector-unknown': {
            const n = ok(e, 'css-rule')
            if (n && n.isSCSSNesterProperty) return uP(rP(ak(r.value), t))
            const i = e.getParentNode()
            if (i.raws && i.raws.selector) {
              const e = Kk(i),
                n = e + i.raws.selector.length
              return t.originalText.slice(e, n).trim()
            }
            const u = e.getParentNode(1)
            if (
              'value-paren_group' === i.type &&
              u &&
              'value-func' === u.type &&
              'selector' === u.value
            ) {
              const e = Kk(i.open) + 1,
                n = Qk(i.close) - 1,
                r = t.originalText.slice(e, n).trim()
              return Xk(r) ? [nk, r] : r
            }
            return r.value
          }
          case 'value-value':
          case 'value-root':
            return n('group')
          case 'value-comment':
            return t.originalText.slice(Kk(r), Qk(r))
          case 'value-comma_group': {
            const t = e.getParentNode(),
              i = e.getParentNode(1),
              u = sk(e),
              o =
                u &&
                'value-value' === t.type &&
                ('grid' === u || u.startsWith('grid-template')),
              s = ok(e, 'css-atrule'),
              a = s && Dk(s),
              c = r.groups.some((e) => Vk(e)),
              l = e.map(n, 'groups'),
              p = [],
              f = ck(e, 'url')
            let d = !1,
              h = !1
            for (let n = 0; n < r.groups.length; ++n) {
              p.push(l[n])
              const u = r.groups[n - 1],
                c = r.groups[n],
                g = r.groups[n + 1],
                m = r.groups[n + 2]
              if (f) {
                ;((g && Fk(g)) || Fk(c)) && p.push(' ')
                continue
              }
              if (
                pk(e, 'forward') &&
                'value-word' === c.type &&
                c.value &&
                'value-word' === u.type &&
                'as' === u.value &&
                'value-operator' === g.type &&
                '*' === g.value
              )
                continue
              if (!g) continue
              if ('value-word' === c.type && c.value.endsWith('-') && Yk(g))
                continue
              const y = 'value-string' === c.type && c.value.startsWith('#{'),
                D = d && 'value-string' === g.type && g.value.endsWith('}')
              if (y || D) {
                d = !d
                continue
              }
              if (d) continue
              if (Gk(c) || Gk(g)) continue
              if ('value-atword' === c.type && '' === c.value) continue
              if ('~' === c.value) continue
              if (
                c.value &&
                c.value.includes('\\') &&
                g &&
                'value-comment' !== g.type
              )
                continue
              if (
                u &&
                u.value &&
                u.value.indexOf('\\') === u.value.length - 1 &&
                'value-operator' === c.type &&
                '/' === c.value
              )
                continue
              if ('\\' === c.value) continue
              if (Rk(c, g)) continue
              if (
                Wk(c) ||
                qk(c) ||
                Uk(g) ||
                (qk(g) && Ok(g)) ||
                (Uk(c) && Ok(g))
              )
                continue
              if ('--' === c.value && Wk(g)) continue
              const E = Sk(c),
                C = Sk(g)
              if (((E && Wk(g)) || (C && Uk(c))) && Ok(g)) continue
              if (!u && vk(c)) continue
              if (ck(e, 'calc') && (Fk(c) || Fk(g) || xk(c) || xk(g)) && Ok(g))
                continue
              const b =
                  (Fk(c) || xk(c)) &&
                  0 === n &&
                  ('value-number' === g.type || g.isHex) &&
                  i &&
                  Jk(i) &&
                  !Ok(g),
                A =
                  (m && 'value-func' === m.type) ||
                  (m && zk(m)) ||
                  'value-func' === c.type ||
                  zk(c),
                v =
                  'value-func' === g.type ||
                  zk(g) ||
                  (u && 'value-func' === u.type) ||
                  (u && zk(u))
              if (
                Ak(g) ||
                Ak(c) ||
                ck(e, 'calc') ||
                b ||
                !(
                  (vk(g) && !A) ||
                  (vk(c) && !v) ||
                  (Fk(g) && !A) ||
                  (Fk(c) && !v) ||
                  xk(g) ||
                  xk(c)
                ) ||
                !(Ok(g) || (E && (!u || (u && Sk(u)))))
              )
                if (Vk(c)) {
                  if ('value-paren_group' === t.type) {
                    p.push(ek(XN))
                    continue
                  }
                  p.push(XN)
                } else
                  (a && (bk(g) || Ck(g) || Nk(g) || wk(c) || Tk(c))) ||
                  (s && 'namespace' === s.name.toLowerCase())
                    ? p.push(' ')
                    : o
                    ? c.source &&
                      g.source &&
                      c.source.start.line !== g.source.start.line
                      ? (p.push(XN), (h = !0))
                      : p.push(' ')
                    : C
                    ? p.push(' ')
                    : (g && '...' === g.value) ||
                      (Yk(c) && Yk(g) && Qk(c) === Kk(g)) ||
                      p.push(JN)
            }
            return (
              c && p.push(nk),
              h && p.unshift(XN),
              a ? KN(ZN(p)) : fk(e) ? KN(QN(p)) : KN(ZN(QN(p)))
            )
          }
          case 'value-paren_group': {
            const i = e.getParentNode()
            if (
              i &&
              Bk(i) &&
              (1 === r.groups.length ||
                (r.groups.length > 0 &&
                  'value-comma_group' === r.groups[0].type &&
                  r.groups[0].groups.length > 0 &&
                  'value-word' === r.groups[0].groups[0].type &&
                  r.groups[0].groups[0].value.startsWith('data:')))
            )
              return [
                r.open ? n('open') : '',
                HN(',', e.map(n, 'groups')),
                r.close ? n('close') : ''
              ]
            if (!r.open) {
              const t = e.map(n, 'groups'),
                r = []
              for (let e = 0; e < t.length; e++)
                0 !== e && r.push([',', JN]), r.push(t[e])
              return KN(ZN(QN(r)))
            }
            const u = $k(e),
              o = _n(r.groups),
              s = o && 'value-comment' === o.type,
              a = Lk(r, i),
              c = KN(
                [
                  r.open ? n('open') : '',
                  ZN([
                    YN,
                    HN(
                      [',', JN],
                      e.map((e) => {
                        const t = e.getValue(),
                          r = n()
                        if (
                          Ik(t) &&
                          'value-comma_group' === t.type &&
                          t.groups &&
                          'value-paren_group' !== t.groups[0].type &&
                          t.groups[2] &&
                          'value-paren_group' === t.groups[2].type
                        ) {
                          const e = ik(r.contents.contents)
                          return (e[1] = KN(e[1])), KN(ek(r))
                        }
                        return r
                      }, 'groups')
                    )
                  ]),
                  tk(
                    !s && gk(t.parser, t.originalText) && u && Zk(t) ? ',' : ''
                  ),
                  YN,
                  r.close ? n('close') : ''
                ],
                { shouldBreak: u && !a }
              )
            return a ? ek(c) : c
          }
          case 'value-func':
            return [r.value, pk(e, 'supports') && Hk(r) ? ' ' : '', n('group')]
          case 'value-paren':
            return r.value
          case 'value-number':
            return [oP(r.value), ak(r.unit)]
          case 'value-operator':
            return r.value
          case 'value-word':
            return (r.isColor && r.isHex) || hk(r.value)
              ? r.value.toLowerCase()
              : r.value
          case 'value-colon': {
            const t = e.getParentNode(),
              n = t && t.groups.indexOf(r),
              i = n && t.groups[n - 1]
            return [
              r.value,
              (i && 'string' == typeof i.value && '\\' === _n(i.value)) ||
              ck(e, 'url')
                ? ''
                : JN
            ]
          }
          case 'value-comma':
            return [r.value, ' ']
          case 'value-string':
            return WN(r.raws.quote + r.value + r.raws.quote, t)
          case 'value-atword':
            return ['@', r.value]
          case 'value-unicode-range':
          case 'value-unknown':
            return r.value
          default:
            throw new Error(`Unknown postcss type ${JSON.stringify(r.type)}`)
        }
      },
      embed: gN,
      insertPragma: uk,
      massageAstNode: lN
    },
    aP = { singleQuote: KB.singleQuote },
    cP = {
      name: 'PostCSS',
      type: 'markup',
      tmScope: 'source.postcss',
      group: 'CSS',
      extensions: ['.pcss', '.postcss'],
      aceMode: 'text',
      languageId: 262764437
    },
    lP = {
      name: 'Less',
      type: 'markup',
      color: '#1d365d',
      extensions: ['.less'],
      tmScope: 'source.css.less',
      aceMode: 'less',
      codemirrorMode: 'css',
      codemirrorMimeType: 'text/css',
      languageId: 198
    },
    pP = {
      name: 'SCSS',
      type: 'markup',
      color: '#c6538c',
      tmScope: 'source.css.scss',
      aceMode: 'scss',
      codemirrorMode: 'css',
      codemirrorMimeType: 'text/x-scss',
      extensions: ['.scss'],
      languageId: 329
    }
  var fP = {
    languages: [
      rh(
        {
          name: 'CSS',
          type: 'markup',
          tmScope: 'source.css',
          aceMode: 'css',
          codemirrorMode: 'css',
          codemirrorMimeType: 'text/css',
          color: '#563d7c',
          extensions: ['.css'],
          languageId: 50
        },
        (e) => ({
          since: '1.4.0',
          parsers: ['css'],
          vscodeLanguageIds: ['css'],
          extensions: [...e.extensions, '.wxss']
        })
      ),
      rh(cP, () => ({
        since: '1.4.0',
        parsers: ['css'],
        vscodeLanguageIds: ['postcss']
      })),
      rh(lP, () => ({
        since: '1.4.0',
        parsers: ['less'],
        vscodeLanguageIds: ['less']
      })),
      rh(pP, () => ({
        since: '1.4.0',
        parsers: ['scss'],
        vscodeLanguageIds: ['scss']
      }))
    ],
    options: aP,
    printers: { postcss: sP },
    parsers: undefined
  }
  var dP = {
    locStart: function (e) {
      return e.loc.start.offset
    },
    locEnd: function (e) {
      return e.loc.end.offset
    }
  }
  function hP(e, t) {
    if ('TextNode' === e.type) {
      const n = e.chars.trim()
      if (!n) return null
      t.chars = n.replace(/[\t\n\f\r ]+/g, ' ')
    }
    'AttrNode' === e.type && 'class' === e.name.toLowerCase() && delete t.value
  }
  hP.ignoredProperties = new Set(['loc', 'selfClosing'])
  var gP = hP
  const mP = new Set([
    'area',
    'base',
    'basefont',
    'bgsound',
    'br',
    'col',
    'command',
    'embed',
    'frame',
    'hr',
    'image',
    'img',
    'input',
    'isindex',
    'keygen',
    'link',
    'menuitem',
    'meta',
    'nextid',
    'param',
    'source',
    'track',
    'wbr'
  ])
  function yP(e) {
    return DP(e, ['TextNode']) && !/\S/.test(e.chars)
  }
  function DP(e, t) {
    return e && t.includes(e.type)
  }
  function EP(e, t) {
    return DP(e.getParentNode(0), t)
  }
  function CP(e, t) {
    const n = e.getValue(),
      r = e.getParentNode(0) || {},
      i = r.children || r.body || r.parts || [],
      u = i.indexOf(n)
    return -1 !== u && i[u + t]
  }
  function bP(e, t = 1) {
    return CP(e, -t)
  }
  function AP(e) {
    return CP(e, 1)
  }
  function vP(e) {
    return (
      DP(e, ['MustacheCommentStatement']) &&
      'string' == typeof e.value &&
      'prettier-ignore' === e.value.trim()
    )
  }
  var FP = {
    getNextNode: AP,
    getPreviousNode: bP,
    hasPrettierIgnore: function (e) {
      const t = e.getValue(),
        n = bP(e, 2)
      return vP(t) || vP(n)
    },
    isLastNodeOfSiblings: function (e) {
      const t = e.getValue(),
        n = e.getParentNode(0)
      return (
        !(!EP(e, ['ElementNode']) || _n(n.children) !== t) ||
        !(!EP(e, ['Block']) || _n(n.body) !== t)
      )
    },
    isNextNodeOfSomeType: function (e, t) {
      return DP(AP(e), t)
    },
    isNodeOfSomeType: DP,
    isParentOfSomeType: EP,
    isPreviousNodeOfSomeType: function (e, t) {
      return DP(bP(e), t)
    },
    isVoid: function (e) {
      return (
        ((function (e) {
          return (
            DP(e, ['ElementNode']) &&
            'string' == typeof e.tag &&
            ((function (e) {
              return e.toUpperCase() === e
            })(e.tag[0]) ||
              e.tag.includes('.'))
          )
        })(e) &&
          e.children.every((e) => yP(e))) ||
        mP.has(e.tag)
      )
    },
    isWhitespaceNode: yP
  }
  const {
      builders: {
        dedent: xP,
        fill: SP,
        group: wP,
        hardline: TP,
        ifBreak: BP,
        indent: NP,
        join: kP,
        line: PP,
        softline: OP
      },
      utils: { getDocParts: IP, replaceTextEndOfLine: LP }
    } = su,
    { isNonEmptyArray: jP } = Fi,
    { locStart: _P, locEnd: MP } = dP,
    {
      getNextNode: RP,
      getPreviousNode: $P,
      hasPrettierIgnore: VP,
      isLastNodeOfSiblings: WP,
      isNextNodeOfSomeType: qP,
      isNodeOfSomeType: UP,
      isParentOfSomeType: zP,
      isPreviousNodeOfSomeType: GP,
      isVoid: HP,
      isWhitespaceNode: JP
    } = FP
  function XP(e, t) {
    return _P(e) - _P(t)
  }
  function YP(e, t, n) {
    const r = e.getValue().children.every((e) => JP(e))
    return 'ignore' === t.htmlWhitespaceSensitivity && r
      ? ''
      : e.map((e, r) => {
          const i = n()
          return 0 === r && 'ignore' === t.htmlWhitespaceSensitivity
            ? [OP, i]
            : i
        }, 'children')
  }
  function KP(e) {
    return HP(e) ? BP([OP, '/>'], [' />', OP]) : BP([OP, '>'], '>')
  }
  function QP(e) {
    return [!1 === e.escaped ? '{{{' : '{{', e.strip && e.strip.open ? '~' : '']
  }
  function ZP(e) {
    const t = !1 === e.escaped ? '}}}' : '}}'
    return [e.strip && e.strip.close ? '~' : '', t]
  }
  function eO(e) {
    return [QP(e), e.closeStrip.open ? '~' : '', '/']
  }
  function tO(e) {
    const t = ZP(e)
    return [e.closeStrip.close ? '~' : '', t]
  }
  function nO(e) {
    return [QP(e), e.inverseStrip.open ? '~' : '']
  }
  function rO(e) {
    const t = ZP(e)
    return [e.inverseStrip.close ? '~' : '', t]
  }
  function iO(e, t) {
    const n = e.getValue(),
      r = (function (e) {
        return [QP(e), e.openStrip.open ? '~' : '', '#']
      })(n),
      i = (function (e) {
        const t = ZP(e)
        return [e.openStrip.close ? '~' : '', t]
      })(n),
      u = [DO(e, t)],
      o = EO(e, t)
    if ((o && u.push(PP, o), jP(n.program.blockParams))) {
      const e = CO(n.program)
      u.push(PP, e)
    }
    return wP([r, NP(u), OP, i])
  }
  function uO(e, t) {
    return [
      'ignore' === t.htmlWhitespaceSensitivity ? TP : '',
      nO(e),
      'else',
      rO(e)
    ]
  }
  function oO(e, t) {
    const n = e.getParentNode(1)
    return [nO(n), 'else if ', EO(e, t), rO(n)]
  }
  function sO(e, t, n) {
    const r = e.getValue()
    if ('ignore' === n.htmlWhitespaceSensitivity) {
      return [aO(r) ? OP : TP, eO(r), t('path'), tO(r)]
    }
    return [eO(r), t('path'), tO(r)]
  }
  function aO(e) {
    return UP(e, ['BlockStatement']) && e.program.body.every((e) => JP(e))
  }
  function cO(e) {
    return UP(e, ['BlockStatement']) && e.inverse
  }
  function lO(e, t, n) {
    if (aO(e.getValue())) return ''
    const r = t('program')
    return 'ignore' === n.htmlWhitespaceSensitivity ? NP([TP, r]) : NP(r)
  }
  function pO(e, t, n) {
    const r = e.getValue(),
      i = t('inverse'),
      u = 'ignore' === n.htmlWhitespaceSensitivity ? [TP, i] : i
    return (function (e) {
      return (
        cO(e) &&
        1 === e.inverse.body.length &&
        UP(e.inverse.body[0], ['BlockStatement']) &&
        'if' === e.inverse.body[0].path.parts[0]
      )
    })(r)
      ? u
      : cO(r)
      ? [uO(r, n), NP(u)]
      : ''
  }
  function fO(e) {
    return IP(
      kP(
        PP,
        (function (e) {
          return e.split(/[\t\n\f\r ]+/)
        })(e)
      )
    )
  }
  function dO(e) {
    return (e = 'string' == typeof e ? e : '').split('\n').length - 1
  }
  function hO(e = 0) {
    return new Array(Math.min(e, 2)).fill(TP)
  }
  function gO(e, t) {
    const n = { quote: '"', regex: /"/g },
      r = { quote: "'", regex: /'/g },
      i = e.singleQuote ? r : n,
      u = i === r ? n : r
    let o = !1
    if (t.includes(i.quote) || t.includes(u.quote)) {
      o = (t.match(i.regex) || []).length > (t.match(u.regex) || []).length
    }
    return o ? u : i
  }
  function mO(e, t) {
    const n = DO(e, t),
      r = EO(e, t)
    return r ? NP([n, PP, wP(r)]) : n
  }
  function yO(e, t) {
    const n = DO(e, t),
      r = EO(e, t)
    return r ? [NP([n, PP, r]), OP] : n
  }
  function DO(e, t) {
    return t('path')
  }
  function EO(e, t) {
    const n = e.getValue(),
      r = []
    if (n.params.length > 0) {
      const n = e.map(t, 'params')
      r.push(...n)
    }
    if (n.hash && n.hash.pairs.length > 0) {
      const e = t('hash')
      r.push(e)
    }
    return 0 === r.length ? '' : kP(PP, r)
  }
  function CO(e) {
    return ['as |', e.blockParams.join(' '), '|']
  }
  var bO = {
    print: function (e, t, n) {
      const r = e.getValue()
      if (!r) return ''
      if (VP(e)) return t.originalText.slice(_P(r), MP(r))
      switch (r.type) {
        case 'Block':
        case 'Program':
        case 'Template':
          return wP(e.map(n, 'body'))
        case 'ElementNode': {
          const i = wP(
              (function (e, t) {
                const n = e.getValue(),
                  r = ['attributes', 'modifiers', 'comments'].filter((e) =>
                    jP(n[e])
                  ),
                  i = r.flatMap((e) => n[e]).sort(XP)
                for (const n of r)
                  e.each((e) => {
                    const n = i.indexOf(e.getValue())
                    i.splice(n, 1, [PP, t()])
                  }, n)
                jP(n.blockParams) && i.push(PP, CO(n))
                return ['<', n.tag, NP(i), KP(n)]
              })(e, n)
            ),
            u =
              'ignore' === t.htmlWhitespaceSensitivity && qP(e, ['ElementNode'])
                ? OP
                : ''
          if (HP(r)) return [i, u]
          const o = ['</', r.tag, '>']
          return 0 === r.children.length
            ? [i, NP(o), u]
            : 'ignore' === t.htmlWhitespaceSensitivity
            ? [i, NP(YP(e, t, n)), TP, NP(o), u]
            : [i, NP(wP(YP(e, t, n))), NP(o), u]
        }
        case 'BlockStatement': {
          const i = e.getParentNode(1)
          return i &&
            i.inverse &&
            1 === i.inverse.body.length &&
            i.inverse.body[0] === r &&
            'if' === i.inverse.body[0].path.parts[0]
            ? [oO(e, n), lO(e, n, t), pO(e, n, t)]
            : [iO(e, n), wP([lO(e, n, t), pO(e, n, t), sO(e, n, t)])]
        }
        case 'ElementModifierStatement':
          return wP(['{{', yO(e, n), '}}'])
        case 'MustacheStatement':
          return wP([QP(r), yO(e, n), ZP(r)])
        case 'SubExpression':
          return wP(['(', mO(e, n), OP, ')'])
        case 'AttrNode': {
          const e = 'TextNode' === r.value.type
          if (e && '' === r.value.chars && _P(r.value) === MP(r.value))
            return r.name
          const i = e
              ? gO(t, r.value.chars).quote
              : 'ConcatStatement' === r.value.type
              ? gO(
                  t,
                  r.value.parts
                    .filter((e) => 'TextNode' === e.type)
                    .map((e) => e.chars)
                    .join('')
                ).quote
              : '',
            u = n('value')
          return [r.name, '=', i, 'class' === r.name && i ? wP(NP(u)) : u, i]
        }
        case 'ConcatStatement':
          return e.map(n, 'parts')
        case 'Hash':
          return kP(PP, e.map(n, 'pairs'))
        case 'HashPair':
          return [r.key, '=', n('value')]
        case 'TextNode': {
          let n = r.chars.replace(/{{/g, '\\{{')
          const i = (function (e) {
            for (let t = 0; t < 2; t++) {
              const n = e.getParentNode(t)
              if (n && 'AttrNode' === n.type) return n.name.toLowerCase()
            }
          })(e)
          if (i) {
            if ('class' === i) {
              const t = n.trim().split(/\s+/).join(' ')
              let r = !1,
                i = !1
              return (
                zP(e, ['ConcatStatement']) &&
                  (GP(e, ['MustacheStatement']) && /^\s/.test(n) && (r = !0),
                  qP(e, ['MustacheStatement']) &&
                    /\s$/.test(n) &&
                    '' !== t &&
                    (i = !0)),
                [r ? PP : '', t, i ? PP : '']
              )
            }
            return LP(n)
          }
          const u = /^[\t\n\f\r ]*$/.test(n),
            o = !$P(e),
            s = !RP(e)
          if ('ignore' !== t.htmlWhitespaceSensitivity) {
            const t = /^[\t\n\f\r ]*/,
              r = /[\t\n\f\r ]*$/,
              i = s && zP(e, ['Template']),
              a = o && zP(e, ['Template'])
            if (u) {
              if (a || i) return ''
              let t = [PP]
              const r = dO(n)
              return r && (t = hO(r)), WP(e) && (t = t.map((e) => xP(e))), t
            }
            const [c] = n.match(t),
              [l] = n.match(r)
            let p = []
            if (c) {
              p = [PP]
              const e = dO(c)
              e && (p = hO(e)), (n = n.replace(t, ''))
            }
            let f = []
            if (l) {
              if (!i) {
                f = [PP]
                const t = dO(l)
                t && (f = hO(t)), WP(e) && (f = f.map((e) => xP(e)))
              }
              n = n.replace(r, '')
            }
            return [...p, SP(fO(n)), ...f]
          }
          const a = dO(n)
          let c = (function (e) {
              return dO(
                ((e = 'string' == typeof e ? e : '').match(
                  /^([^\S\n\r]*[\n\r])+/g
                ) || [])[0] || ''
              )
            })(n),
            l = (function (e) {
              return dO(
                ((e = 'string' == typeof e ? e : '').match(
                  /([\n\r][^\S\n\r]*)+$/g
                ) || [])[0] || ''
              )
            })(n)
          if ((o || s) && u && zP(e, ['Block', 'ElementNode', 'Template']))
            return ''
          u && a
            ? ((c = Math.min(a, 2)), (l = 0))
            : (qP(e, ['BlockStatement', 'ElementNode']) && (l = Math.max(l, 1)),
              GP(e, ['BlockStatement', 'ElementNode']) && (c = Math.max(c, 1)))
          let p = '',
            f = ''
          return (
            0 === l && qP(e, ['MustacheStatement']) && (f = ' '),
            0 === c && GP(e, ['MustacheStatement']) && (p = ' '),
            o && ((c = 0), (p = '')),
            s && ((l = 0), (f = '')),
            (n = n.replace(/^[\t\n\f\r ]+/g, p).replace(/[\t\n\f\r ]+$/, f)),
            [...hO(c), SP(fO(n)), ...hO(l)]
          )
        }
        case 'MustacheCommentStatement': {
          const e = _P(r),
            n = MP(r),
            i = '~' === t.originalText.charAt(e + 2),
            u = '~' === t.originalText.charAt(n - 3),
            o = r.value.includes('}}') ? '--' : ''
          return ['{{', i ? '~' : '', '!', o, r.value, o, u ? '~' : '', '}}']
        }
        case 'PathExpression':
          return r.original
        case 'BooleanLiteral':
          return String(r.value)
        case 'CommentStatement':
          return ['\x3c!--', r.value, '--\x3e']
        case 'StringLiteral':
          return (function (e, t) {
            const { quote: n, regex: r } = gO(t, e)
            return [n, e.replace(r, `\\${n}`), n]
          })(r.value, t)
        case 'NumberLiteral':
          return String(r.value)
        case 'UndefinedLiteral':
          return 'undefined'
        case 'NullLiteral':
          return 'null'
        default:
          throw new Error('unknown glimmer type: ' + JSON.stringify(r.type))
      }
    },
    massageAstNode: gP
  }
  var AO = {
    languages: [
      rh(
        {
          name: 'Handlebars',
          type: 'markup',
          color: '#f7931e',
          aliases: ['hbs', 'htmlbars'],
          extensions: ['.handlebars', '.hbs'],
          tmScope: 'text.html.handlebars',
          aceMode: 'handlebars',
          languageId: 155
        },
        () => ({
          since: '2.3.0',
          parsers: ['glimmer'],
          vscodeLanguageIds: ['handlebars']
        })
      )
    ],
    printers: { glimmer: bO },
    parsers: undefined
  }
  var vO = {
    hasPragma: function (e) {
      return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(e)
    },
    insertPragma: function (e) {
      return '# @format\n\n' + e
    }
  }
  var FO = {
    locStart: function (e) {
      return 'number' == typeof e.start ? e.start : e.loc && e.loc.start
    },
    locEnd: function (e) {
      return 'number' == typeof e.end ? e.end : e.loc && e.loc.end
    }
  }
  const {
      builders: {
        join: xO,
        hardline: SO,
        line: wO,
        softline: TO,
        group: BO,
        indent: NO,
        ifBreak: kO
      }
    } = su,
    { isNextLineEmpty: PO, isNonEmptyArray: OO } = Fi,
    { insertPragma: IO } = vO,
    { locStart: LO, locEnd: jO } = FO
  function _O(e, t, n) {
    if (0 === n.directives.length) return ''
    const r = xO(wO, e.map(t, 'directives'))
    return 'FragmentDefinition' === n.kind || 'OperationDefinition' === n.kind
      ? BO([wO, r])
      : [' ', BO(NO([TO, r]))]
  }
  function MO(e, t, n) {
    const r = e.getValue().length
    return e.map((e, i) => {
      const u = n()
      return PO(t.originalText, e.getValue(), jO) && i < r - 1 ? [u, SO] : u
    })
  }
  function RO(e, t, n) {
    const r = e.getNode(),
      i = [],
      { interfaces: u } = r,
      o = e.map((e) => n(e), 'interfaces')
    for (let e = 0; e < u.length; e++) {
      const n = u[e]
      i.push(o[e])
      const r = u[e + 1]
      if (r) {
        const e = t.originalText.slice(n.loc.end, r.loc.start),
          u = e.includes('#'),
          o = e.replace(/#.*/g, '').trim()
        i.push(',' === o ? ',' : ' &', u ? wO : ' ')
      }
    }
    return i
  }
  function $O() {}
  $O.ignoredProperties = new Set(['loc', 'comments'])
  var VO = {
      print: function (e, t, n) {
        const r = e.getValue()
        if (!r) return ''
        if ('string' == typeof r) return r
        switch (r.kind) {
          case 'Document': {
            const r = []
            return (
              e.each((e, i, u) => {
                r.push(n()),
                  i !== u.length - 1 &&
                    (r.push(SO),
                    PO(t.originalText, e.getValue(), jO) && r.push(SO))
              }, 'definitions'),
              [...r, SO]
            )
          }
          case 'OperationDefinition': {
            const i = '{' !== t.originalText[LO(r)],
              u = Boolean(r.name)
            return [
              i ? r.operation : '',
              i && u ? [' ', n('name')] : '',
              i && !u && OO(r.variableDefinitions) ? ' ' : '',
              OO(r.variableDefinitions)
                ? BO([
                    '(',
                    NO([
                      TO,
                      xO([kO('', ', '), TO], e.map(n, 'variableDefinitions'))
                    ]),
                    TO,
                    ')'
                  ])
                : '',
              _O(e, n, r),
              r.selectionSet && (i || u) ? ' ' : '',
              n('selectionSet')
            ]
          }
          case 'FragmentDefinition':
            return [
              'fragment ',
              n('name'),
              OO(r.variableDefinitions)
                ? BO([
                    '(',
                    NO([
                      TO,
                      xO([kO('', ', '), TO], e.map(n, 'variableDefinitions'))
                    ]),
                    TO,
                    ')'
                  ])
                : '',
              ' on ',
              n('typeCondition'),
              _O(e, n, r),
              ' ',
              n('selectionSet')
            ]
          case 'SelectionSet':
            return [
              '{',
              NO([
                SO,
                xO(
                  SO,
                  e.call((e) => MO(e, t, n), 'selections')
                )
              ]),
              SO,
              '}'
            ]
          case 'Field':
            return BO([
              r.alias ? [n('alias'), ': '] : '',
              n('name'),
              r.arguments.length > 0
                ? BO([
                    '(',
                    NO([
                      TO,
                      xO(
                        [kO('', ', '), TO],
                        e.call((e) => MO(e, t, n), 'arguments')
                      )
                    ]),
                    TO,
                    ')'
                  ])
                : '',
              _O(e, n, r),
              r.selectionSet ? ' ' : '',
              n('selectionSet')
            ])
          case 'Name':
            return r.value
          case 'StringValue':
            return r.block
              ? [
                  '"""',
                  SO,
                  xO(SO, r.value.replace(/"""/g, '\\$&').split('\n')),
                  SO,
                  '"""'
                ]
              : [
                  '"',
                  r.value.replace(/["\\]/g, '\\$&').replace(/\n/g, '\\n'),
                  '"'
                ]
          case 'IntValue':
          case 'FloatValue':
          case 'EnumValue':
            return r.value
          case 'BooleanValue':
            return r.value ? 'true' : 'false'
          case 'NullValue':
            return 'null'
          case 'Variable':
            return ['$', n('name')]
          case 'ListValue':
            return BO([
              '[',
              NO([TO, xO([kO('', ', '), TO], e.map(n, 'values'))]),
              TO,
              ']'
            ])
          case 'ObjectValue':
            return BO([
              '{',
              t.bracketSpacing && r.fields.length > 0 ? ' ' : '',
              NO([TO, xO([kO('', ', '), TO], e.map(n, 'fields'))]),
              TO,
              kO('', t.bracketSpacing && r.fields.length > 0 ? ' ' : ''),
              '}'
            ])
          case 'ObjectField':
          case 'Argument':
            return [n('name'), ': ', n('value')]
          case 'Directive':
            return [
              '@',
              n('name'),
              r.arguments.length > 0
                ? BO([
                    '(',
                    NO([
                      TO,
                      xO(
                        [kO('', ', '), TO],
                        e.call((e) => MO(e, t, n), 'arguments')
                      )
                    ]),
                    TO,
                    ')'
                  ])
                : ''
            ]
          case 'NamedType':
            return n('name')
          case 'VariableDefinition':
            return [
              n('variable'),
              ': ',
              n('type'),
              r.defaultValue ? [' = ', n('defaultValue')] : '',
              _O(e, n, r)
            ]
          case 'ObjectTypeExtension':
          case 'ObjectTypeDefinition':
            return [
              n('description'),
              r.description ? SO : '',
              'ObjectTypeExtension' === r.kind ? 'extend ' : '',
              'type ',
              n('name'),
              r.interfaces.length > 0 ? [' implements ', ...RO(e, t, n)] : '',
              _O(e, n, r),
              r.fields.length > 0
                ? [
                    ' {',
                    NO([
                      SO,
                      xO(
                        SO,
                        e.call((e) => MO(e, t, n), 'fields')
                      )
                    ]),
                    SO,
                    '}'
                  ]
                : ''
            ]
          case 'FieldDefinition':
            return [
              n('description'),
              r.description ? SO : '',
              n('name'),
              r.arguments.length > 0
                ? BO([
                    '(',
                    NO([
                      TO,
                      xO(
                        [kO('', ', '), TO],
                        e.call((e) => MO(e, t, n), 'arguments')
                      )
                    ]),
                    TO,
                    ')'
                  ])
                : '',
              ': ',
              n('type'),
              _O(e, n, r)
            ]
          case 'DirectiveDefinition':
            return [
              n('description'),
              r.description ? SO : '',
              'directive ',
              '@',
              n('name'),
              r.arguments.length > 0
                ? BO([
                    '(',
                    NO([
                      TO,
                      xO(
                        [kO('', ', '), TO],
                        e.call((e) => MO(e, t, n), 'arguments')
                      )
                    ]),
                    TO,
                    ')'
                  ])
                : '',
              r.repeatable ? ' repeatable' : '',
              ' on ',
              xO(' | ', e.map(n, 'locations'))
            ]
          case 'EnumTypeExtension':
          case 'EnumTypeDefinition':
            return [
              n('description'),
              r.description ? SO : '',
              'EnumTypeExtension' === r.kind ? 'extend ' : '',
              'enum ',
              n('name'),
              _O(e, n, r),
              r.values.length > 0
                ? [
                    ' {',
                    NO([
                      SO,
                      xO(
                        SO,
                        e.call((e) => MO(e, t, n), 'values')
                      )
                    ]),
                    SO,
                    '}'
                  ]
                : ''
            ]
          case 'EnumValueDefinition':
            return [
              n('description'),
              r.description ? SO : '',
              n('name'),
              _O(e, n, r)
            ]
          case 'InputValueDefinition':
            return [
              n('description'),
              r.description ? (r.description.block ? SO : wO) : '',
              n('name'),
              ': ',
              n('type'),
              r.defaultValue ? [' = ', n('defaultValue')] : '',
              _O(e, n, r)
            ]
          case 'InputObjectTypeExtension':
          case 'InputObjectTypeDefinition':
            return [
              n('description'),
              r.description ? SO : '',
              'InputObjectTypeExtension' === r.kind ? 'extend ' : '',
              'input ',
              n('name'),
              _O(e, n, r),
              r.fields.length > 0
                ? [
                    ' {',
                    NO([
                      SO,
                      xO(
                        SO,
                        e.call((e) => MO(e, t, n), 'fields')
                      )
                    ]),
                    SO,
                    '}'
                  ]
                : ''
            ]
          case 'SchemaDefinition':
            return [
              'schema',
              _O(e, n, r),
              ' {',
              r.operationTypes.length > 0
                ? NO([
                    SO,
                    xO(
                      SO,
                      e.call((e) => MO(e, t, n), 'operationTypes')
                    )
                  ])
                : '',
              SO,
              '}'
            ]
          case 'OperationTypeDefinition':
            return [n('operation'), ': ', n('type')]
          case 'InterfaceTypeExtension':
          case 'InterfaceTypeDefinition':
            return [
              n('description'),
              r.description ? SO : '',
              'InterfaceTypeExtension' === r.kind ? 'extend ' : '',
              'interface ',
              n('name'),
              r.interfaces.length > 0 ? [' implements ', ...RO(e, t, n)] : '',
              _O(e, n, r),
              r.fields.length > 0
                ? [
                    ' {',
                    NO([
                      SO,
                      xO(
                        SO,
                        e.call((e) => MO(e, t, n), 'fields')
                      )
                    ]),
                    SO,
                    '}'
                  ]
                : ''
            ]
          case 'FragmentSpread':
            return ['...', n('name'), _O(e, n, r)]
          case 'InlineFragment':
            return [
              '...',
              r.typeCondition ? [' on ', n('typeCondition')] : '',
              _O(e, n, r),
              ' ',
              n('selectionSet')
            ]
          case 'UnionTypeExtension':
          case 'UnionTypeDefinition':
            return BO([
              n('description'),
              r.description ? SO : '',
              BO([
                'UnionTypeExtension' === r.kind ? 'extend ' : '',
                'union ',
                n('name'),
                _O(e, n, r),
                r.types.length > 0
                  ? [
                      ' =',
                      kO('', ' '),
                      NO([kO([wO, '  ']), xO([wO, '| '], e.map(n, 'types'))])
                    ]
                  : ''
              ])
            ])
          case 'ScalarTypeExtension':
          case 'ScalarTypeDefinition':
            return [
              n('description'),
              r.description ? SO : '',
              'ScalarTypeExtension' === r.kind ? 'extend ' : '',
              'scalar ',
              n('name'),
              _O(e, n, r)
            ]
          case 'NonNullType':
            return [n('type'), '!']
          case 'ListType':
            return ['[', n('type'), ']']
          default:
            throw new Error('unknown graphql type: ' + JSON.stringify(r.kind))
        }
      },
      massageAstNode: $O,
      hasPrettierIgnore: function (e) {
        const t = e.getValue()
        return (
          t &&
          Array.isArray(t.comments) &&
          t.comments.some((e) => 'prettier-ignore' === e.value.trim())
        )
      },
      insertPragma: IO,
      printComment: function (e) {
        const t = e.getValue()
        if ('Comment' === t.kind) return '#' + t.value.trimEnd()
        throw new Error('Not a comment: ' + JSON.stringify(t))
      },
      canAttachComment: function (e) {
        return e.kind && 'Comment' !== e.kind
      }
    },
    WO = { bracketSpacing: KB.bracketSpacing }
  var qO = {
    languages: [
      rh(
        {
          name: 'GraphQL',
          type: 'data',
          color: '#e10098',
          extensions: ['.graphql', '.gql', '.graphqls'],
          tmScope: 'source.graphql',
          aceMode: 'text',
          languageId: 139
        },
        () => ({
          since: '1.5.0',
          parsers: ['graphql'],
          vscodeLanguageIds: ['graphql']
        })
      )
    ],
    options: WO,
    printers: { graphql: VO },
    parsers: undefined
  }
  var UO = {
    locStart: function (e) {
      return e.position.start.offset
    },
    locEnd: function (e) {
      return e.position.end.offset
    }
  }
  const { getLast: zO } = Fi,
    { locStart: GO, locEnd: HO } = UO,
    {
      cjkPattern: JO,
      kPattern: XO,
      punctuationPattern: YO
    } = {
      cjkPattern:
        '(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?',
      kPattern:
        '[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]',
      punctuationPattern:
        '[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]'
    },
    KO = [
      'liquidNode',
      'inlineCode',
      'emphasis',
      'strong',
      'delete',
      'wikiLink',
      'link',
      'linkReference',
      'image',
      'imageReference',
      'footnote',
      'footnoteReference',
      'sentence',
      'whitespace',
      'word',
      'break',
      'inlineMath'
    ],
    QO = [...KO, 'tableCell', 'paragraph', 'heading'],
    ZO = new RegExp(XO),
    eI = new RegExp(YO)
  function tI(e, t) {
    const [, n, r, i] = t
      .slice(e.position.start.offset, e.position.end.offset)
      .match(/^\s*(\d+)(\.|\))(\s*)/)
    return { numberText: n, marker: r, leadingSpaces: i }
  }
  var nI = {
    mapAst: function (e, t) {
      return (function e(n, r, i) {
        const u = Object.assign({}, t(n, r, i))
        return (
          u.children &&
            (u.children = u.children.map((t, n) => e(t, n, [u, ...i]))),
          u
        )
      })(e, null, [])
    },
    splitText: function (e, t) {
      const n = 'non-cjk',
        r = 'cj-letter',
        i = 'cjk-punctuation',
        u = [],
        o = (
          'preserve' === t.proseWrap
            ? e
            : e.replace(new RegExp(`(${JO})\n(${JO})`, 'g'), '$1$2')
        ).split(/([\t\n ]+)/)
      for (const [e, t] of o.entries()) {
        if (e % 2 == 1) {
          u.push({ type: 'whitespace', value: /\n/.test(t) ? '\n' : ' ' })
          continue
        }
        if ((0 === e || e === o.length - 1) && '' === t) continue
        const a = t.split(new RegExp(`(${JO})`))
        for (const [e, t] of a.entries())
          ((0 !== e && e !== a.length - 1) || '' !== t) &&
            (e % 2 != 0
              ? s(
                  eI.test(t)
                    ? {
                        type: 'word',
                        value: t,
                        kind: i,
                        hasLeadingPunctuation: !0,
                        hasTrailingPunctuation: !0
                      }
                    : {
                        type: 'word',
                        value: t,
                        kind: ZO.test(t) ? 'k-letter' : r,
                        hasLeadingPunctuation: !1,
                        hasTrailingPunctuation: !1
                      }
                )
              : '' !== t &&
                s({
                  type: 'word',
                  value: t,
                  kind: n,
                  hasLeadingPunctuation: eI.test(t[0]),
                  hasTrailingPunctuation: eI.test(zO(t))
                }))
      }
      return u
      function s(e) {
        const t = zO(u)
        var o, s
        t &&
          'word' === t.type &&
          ((t.kind === n && e.kind === r && !t.hasTrailingPunctuation) ||
          (t.kind === r && e.kind === n && !e.hasLeadingPunctuation)
            ? u.push({ type: 'whitespace', value: ' ' })
            : ((o = n),
              (s = i),
              (t.kind === o && e.kind === s) ||
                (t.kind === s && e.kind === o) ||
                [t.value, e.value].some((e) => /\u3000/.test(e)) ||
                u.push({ type: 'whitespace', value: '' }))),
          u.push(e)
      }
    },
    punctuationPattern: YO,
    getFencedCodeBlockValue: function (e, t) {
      const { value: n } = e
      return e.position.end.offset === t.length &&
        n.endsWith('\n') &&
        t.endsWith('\n')
        ? n.slice(0, -1)
        : n
    },
    getOrderedListItemInfo: tI,
    hasGitDiffFriendlyOrderedList: function (e, t) {
      if (!e.ordered) return !1
      if (e.children.length < 2) return !1
      const n = Number(tI(e.children[0], t.originalText).numberText),
        r = Number(tI(e.children[1], t.originalText).numberText)
      if (0 === n && e.children.length > 2) {
        const n = Number(tI(e.children[2], t.originalText).numberText)
        return 1 === r && 1 === n
      }
      return 1 === r
    },
    INLINE_NODE_TYPES: KO,
    INLINE_NODE_WRAPPER_TYPES: QO,
    isAutolink: function (e) {
      if (!e || 'link' !== e.type || 1 !== e.children.length) return !1
      const t = e.children[0]
      return t && GO(e) === GO(t) && HO(e) === HO(t)
    }
  }
  const { inferParserByLanguage: rI, getMaxContinuousCount: iI } = Fi,
    {
      builders: { hardline: uI, markAsRoot: oI },
      utils: { replaceEndOfLine: sI }
    } = su,
    { getFencedCodeBlockValue: aI } = nI
  var cI = function (e, t, n, r) {
    const i = e.getValue()
    if ('code' === i.type && null !== i.lang) {
      const e = rI(i.lang, r)
      if (e) {
        const t = r.__inJsTemplate ? '~' : '`',
          u = t.repeat(Math.max(3, iI(i.value, t) + 1)),
          o = n(
            aI(i, r.originalText),
            { parser: e },
            { stripTrailingHardline: !0 }
          )
        return oI([u, i.lang, i.meta ? ' ' + i.meta : '', uI, sI(o), uI, u])
      }
    }
    switch (i.type) {
      case 'front-matter':
        return dN(i, n)
      case 'importExport':
        return [
          n(i.value, { parser: 'babel' }, { stripTrailingHardline: !0 }),
          uI
        ]
      case 'jsx':
        return n(
          `<$>${i.value}</$>`,
          { parser: '__js_expression', rootMarker: 'mdx' },
          { stripTrailingHardline: !0 }
        )
    }
    return null
  }
  const lI = ['format', 'prettier']
  function pI(e) {
    const t = `@(${lI.join('|')})`,
      n = new RegExp(
        [
          `\x3c!--\\s*${t}\\s*--\x3e`,
          `\x3c!--.*\r?\n[\\s\\S]*(^|\n)[^\\S\n]*${t}[^\\S\n]*($|\n)[\\s\\S]*\n.*--\x3e`
        ].join('|'),
        'm'
      ),
      r = e.match(n)
    return r && 0 === r.index
  }
  var fI = {
    startWithPragma: pI,
    hasPragma: (e) => pI(yN(e).content.trimStart()),
    insertPragma: (e) => {
      const t = yN(e),
        n = `\x3c!-- @${lI[0]} --\x3e`
      return t.frontMatter
        ? `${t.frontMatter.raw}\n\n${n}\n\n${t.content}`
        : `${n}\n\n${t.content}`
    }
  }
  const { getOrderedListItemInfo: dI, mapAst: hI, splitText: gI } = nI,
    mI = /^.$/su
  function yI(e, t, n) {
    return hI(e, (e) => {
      if (!e.children) return e
      const r = e.children.reduce((e, r) => {
        const i = _n(e)
        return i && t(i, r) ? e.splice(-1, 1, n(i, r)) : e.push(r), e
      }, [])
      return Object.assign(Object.assign({}, e), {}, { children: r })
    })
  }
  var DI = function (e, t) {
    return (e = (function (e) {
      return yI(
        e,
        (e, t) => 'importExport' === e.type && 'importExport' === t.type,
        (e, t) => ({
          type: 'importExport',
          value: e.value + '\n\n' + t.value,
          position: { start: e.position.start, end: t.position.end }
        })
      )
    })(
      (e = (function (e) {
        return hI(e, (e) =>
          'import' !== e.type && 'export' !== e.type
            ? e
            : Object.assign(Object.assign({}, e), {}, { type: 'importExport' })
        )
      })(
        (e = (function (e, t) {
          return hI(e, (e, n, [r]) => {
            if ('text' !== e.type) return e
            let { value: i } = e
            return (
              'paragraph' === r.type &&
                (0 === n && (i = i.trimStart()),
                n === r.children.length - 1 && (i = i.trimEnd())),
              { type: 'sentence', position: e.position, children: gI(i, t) }
            )
          })
        })(
          (e = (function (e, t) {
            return hI(e, (e, t, n) => {
              if ('list' === e.type && e.children.length > 0) {
                for (let t = 0; t < n.length; t++) {
                  const r = n[t]
                  if ('list' === r.type && !r.isAligned)
                    return (e.isAligned = !1), e
                }
                e.isAligned = r(e)
              }
              return e
            })
            function n(e) {
              return 0 === e.children.length
                ? -1
                : e.children[0].position.start.column - 1
            }
            function r(e) {
              if (!e.ordered) return !0
              const [r, i] = e.children
              if (dI(r, t.originalText).leadingSpaces.length > 1) return !0
              const u = n(r)
              if (-1 === u) return !1
              if (1 === e.children.length) return u % t.tabWidth == 0
              if (u !== n(i)) return !1
              if (u % t.tabWidth == 0) return !0
              return dI(i, t.originalText).leadingSpaces.length > 1
            }
          })(
            (e = (function (e, t) {
              return hI(e, (e, n, r) => {
                if ('code' === e.type) {
                  const n = /^\n?(?: {4,}|\t)/.test(
                    t.originalText.slice(
                      e.position.start.offset,
                      e.position.end.offset
                    )
                  )
                  if (((e.isIndented = n), n))
                    for (let e = 0; e < r.length; e++) {
                      const t = r[e]
                      if (t.hasIndentedCodeblock) break
                      'list' === t.type && (t.hasIndentedCodeblock = !0)
                    }
                }
                return e
              })
            })(
              (e = (function (e) {
                return hI(e, (e) =>
                  'inlineCode' !== e.type
                    ? e
                    : Object.assign(
                        Object.assign({}, e),
                        {},
                        { value: e.value.replace(/\s+/g, ' ') }
                      )
                )
              })(
                (e = (function (e) {
                  return yI(
                    e,
                    (e, t) => 'text' === e.type && 'text' === t.type,
                    (e, t) => ({
                      type: 'text',
                      value: e.value + t.value,
                      position: { start: e.position.start, end: t.position.end }
                    })
                  )
                })(
                  (e = (function (e, t) {
                    return hI(e, (e) =>
                      'text' === e.type &&
                      '*' !== e.value &&
                      '_' !== e.value &&
                      mI.test(e.value) &&
                      e.position.end.offset - e.position.start.offset !==
                        e.value.length
                        ? Object.assign(
                            Object.assign({}, e),
                            {},
                            {
                              value: t.originalText.slice(
                                e.position.start.offset,
                                e.position.end.offset
                              )
                            }
                          )
                        : e
                    )
                  })(e, t))
                ))
              )),
              t
            )),
            t
          )),
          t
        ))
      ))
    ))
  }
  const { isFrontMatterNode: EI } = Fi,
    { startWithPragma: CI } = fI,
    bI = new Set(['position', 'raw'])
  function AI(e, t, n) {
    return (
      ('front-matter' !== e.type &&
        'code' !== e.type &&
        'yaml' !== e.type &&
        'import' !== e.type &&
        'export' !== e.type &&
        'jsx' !== e.type) ||
        delete t.value,
      'list' === e.type && delete t.isAligned,
      ('list' !== e.type && 'listItem' !== e.type) ||
        (delete t.spread, delete t.loose),
      'text' === e.type
        ? null
        : ('inlineCode' === e.type &&
            (t.value = e.value.replace(/[\t\n ]+/g, ' ')),
          'wikiLink' === e.type &&
            (t.value = e.value.trim().replace(/[\t\n]+/g, ' ')),
          ('definition' !== e.type && 'linkReference' !== e.type) ||
            (t.label = e.label
              .trim()
              .replace(/[\t\n ]+/g, ' ')
              .toLowerCase()),
          ('definition' !== e.type &&
            'link' !== e.type &&
            'image' !== e.type) ||
            !e.title ||
            (t.title = e.title.replace(/\\(["')])/g, '$1')),
          n &&
          'root' === n.type &&
          n.children.length > 0 &&
          (n.children[0] === e || (EI(n.children[0]) && n.children[1] === e)) &&
          'html' === e.type &&
          CI(e.value)
            ? null
            : void 0)
    )
  }
  AI.ignoredProperties = bI
  var vI = AI
  const {
      getLast: FI,
      getMinNotPresentContinuousCount: xI,
      getMaxContinuousCount: SI,
      getStringWidth: wI,
      isNonEmptyArray: TI
    } = Fi,
    {
      builders: {
        breakParent: BI,
        join: NI,
        line: kI,
        literalline: PI,
        markAsRoot: OI,
        hardline: II,
        softline: LI,
        ifBreak: jI,
        fill: _I,
        align: MI,
        indent: RI,
        group: $I,
        hardlineWithoutBreakParent: VI
      },
      utils: { normalizeDoc: WI, replaceTextEndOfLine: qI },
      printer: { printDocToString: UI }
    } = su,
    { insertPragma: zI } = fI,
    { locStart: GI, locEnd: HI } = UO,
    {
      getFencedCodeBlockValue: JI,
      hasGitDiffFriendlyOrderedList: XI,
      splitText: YI,
      punctuationPattern: KI,
      INLINE_NODE_TYPES: QI,
      INLINE_NODE_WRAPPER_TYPES: ZI,
      isAutolink: eL
    } = nI,
    tL = new Set(['importExport']),
    nL = ['heading', 'tableCell', 'link', 'wikiLink'],
    rL = new Set(['listItem', 'definition', 'footnoteDefinition'])
  function iL(e, t, n, r) {
    const i = e.getValue(),
      u = null === i.checked ? '' : i.checked ? '[x] ' : '[ ] '
    return [
      u,
      lL(e, t, n, {
        processor: (e, i) => {
          if (0 === i && 'list' !== e.getValue().type)
            return MI(' '.repeat(u.length), n())
          const o = ' '.repeat(
            (function (e, t, n) {
              return e < t ? t : e > n ? n : e
            })(t.tabWidth - r.length, 0, 3)
          )
          return [o, MI(o, n())]
        }
      })
    ]
  }
  function uL(e, t) {
    return (function (e, t, n) {
      let r = -1
      for (const i of t.children)
        if ((i.type === e.type && n(i) ? r++ : (r = -1), i === e)) return r
    })(e, t, (t) => t.ordered === e.ordered)
  }
  function oL(e, t) {
    const n = Array.isArray(t) ? t : [t]
    let r,
      i = -1
    for (; (r = e.getParentNode(++i)); ) if (n.includes(r.type)) return i
    return -1
  }
  function sL(e, t) {
    const n = oL(e, t)
    return -1 === n ? null : e.getParentNode(n)
  }
  function aL(e, t, n) {
    if ('preserve' === n.proseWrap && '\n' === t) return II
    const r = 'always' === n.proseWrap && !sL(e, nL)
    return '' !== t ? (r ? kI : ' ') : r ? LI : ''
  }
  function cL(e, t, n) {
    const r = []
    let i = null
    const { children: u } = e.getValue()
    for (const [e, t] of u.entries())
      switch (fL(t)) {
        case 'start':
          null === i && (i = { index: e, offset: t.position.end.offset })
          break
        case 'end':
          null !== i &&
            (r.push({
              start: i,
              end: { index: e, offset: t.position.start.offset }
            }),
            (i = null))
      }
    return lL(e, t, n, {
      processor: (e, i) => {
        if (r.length > 0) {
          const e = r[0]
          if (i === e.start.index)
            return [
              u[e.start.index].value,
              t.originalText.slice(e.start.offset, e.end.offset),
              u[e.end.index].value
            ]
          if (e.start.index < i && i < e.end.index) return !1
          if (i === e.end.index) return r.shift(), !1
        }
        return n()
      }
    })
  }
  function lL(e, t, n, r = {}) {
    const { postprocessor: i } = r,
      u = r.processor || (() => n()),
      o = e.getValue(),
      s = []
    let a
    return (
      e.each((e, n) => {
        const r = e.getValue(),
          i = u(e, n)
        if (!1 !== i) {
          const e = { parts: s, prevNode: a, parentNode: o, options: t }
          ;(function (e, t) {
            const n = 0 === t.parts.length,
              r = QI.includes(e.type),
              i = 'html' === e.type && ZI.includes(t.parentNode.type)
            return !n && !r && !i
          })(r, e) &&
            (s.push(II),
            (a && tL.has(a.type)) ||
              (((function (e, t) {
                const n =
                    (t.prevNode && t.prevNode.type) === e.type &&
                    rL.has(e.type),
                  r = 'listItem' === t.parentNode.type && !t.parentNode.loose,
                  i =
                    t.prevNode &&
                    'listItem' === t.prevNode.type &&
                    t.prevNode.loose,
                  u = 'next' === fL(t.prevNode),
                  o =
                    'html' === e.type &&
                    t.prevNode &&
                    'html' === t.prevNode.type &&
                    t.prevNode.position.end.line + 1 === e.position.start.line,
                  s =
                    'html' === e.type &&
                    'listItem' === t.parentNode.type &&
                    t.prevNode &&
                    'paragraph' === t.prevNode.type &&
                    t.prevNode.position.end.line + 1 === e.position.start.line
                return i || !(n || r || u || o || s)
              })(r, e) ||
                dL(r, e)) &&
                s.push(II)),
            dL(r, e) && s.push(II)),
            s.push(i),
            (a = r)
        }
      }, 'children'),
      i ? i(s) : s
    )
  }
  function pL(e) {
    let t = e
    for (; TI(t.children); ) t = FI(t.children)
    return t
  }
  function fL(e) {
    if ('html' !== e.type) return !1
    const t = e.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/)
    return null !== t && (t[1] ? t[1] : 'next')
  }
  function dL(e, t) {
    const n = t.prevNode && 'list' === t.prevNode.type,
      r = 'code' === e.type && e.isIndented
    return n && r
  }
  function hL(e, t = []) {
    const n = [' ', ...(Array.isArray(t) ? t : [t])]
    return new RegExp(n.map((e) => `\\${e}`).join('|')).test(e) ? `<${e}>` : e
  }
  function gL(e, t, n = !0) {
    if (!e) return ''
    if (n) return ' ' + gL(e, t, !1)
    if (
      (e = e.replace(/\\(["')])/g, '$1')).includes('"') &&
      e.includes("'") &&
      !e.includes(')')
    )
      return `(${e})`
    const r = e.split("'").length - 1,
      i = e.split('"').length - 1,
      u = r > i ? '"' : i > r || t.singleQuote ? "'" : '"'
    return `${u}${(e = (e = e.replace(/\\/, '\\\\')).replace(new RegExp(`(${u})`, 'g'), '\\$1'))}${u}`
  }
  var mL = {
      preprocess: DI,
      print: function (e, t, n) {
        const r = e.getValue()
        if (
          (function (e) {
            const t = sL(e, ['linkReference', 'imageReference'])
            return (
              t && ('linkReference' !== t.type || 'full' !== t.referenceType)
            )
          })(e)
        )
          return YI(
            t.originalText.slice(
              r.position.start.offset,
              r.position.end.offset
            ),
            t
          ).map((n) =>
            'word' === n.type
              ? n.value
              : '' === n.value
              ? ''
              : aL(e, n.value, t)
          )
        switch (r.type) {
          case 'front-matter':
            return t.originalText.slice(
              r.position.start.offset,
              r.position.end.offset
            )
          case 'root':
            return 0 === r.children.length
              ? ''
              : [WI(cL(e, t, n)), tL.has(pL(r).type) ? '' : II]
          case 'paragraph':
            return lL(e, t, n, { postprocessor: _I })
          case 'sentence':
            return lL(e, t, n)
          case 'word': {
            let t = r.value
              .replace(/\*/g, '\\$&')
              .replace(
                new RegExp([`(^|${KI})(_+)`, `(_+)(${KI}|$)`].join('|'), 'g'),
                (e, t, n, r, i) =>
                  (n ? `${t}${n}` : `${r}${i}`).replace(/_/g, '\\_')
              )
            const n = (e, t, n) => 'sentence' === e.type && 0 === n,
              i = (e, t, n) => eL(e.children[n - 1])
            return (
              t !== r.value &&
                (e.match(void 0, n, i) ||
                  e.match(
                    void 0,
                    n,
                    (e, t, n) => 'emphasis' === e.type && 0 === n,
                    i
                  )) &&
                (t = t.replace(/^(\\?[*_])+/, (e) => e.replace(/\\/g, ''))),
              t
            )
          }
          case 'whitespace': {
            const n = e.getParentNode(),
              i = n.children.indexOf(r),
              u = n.children[i + 1],
              o =
                u && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(u.value)
                  ? 'never'
                  : t.proseWrap
            return aL(e, r.value, { proseWrap: o })
          }
          case 'emphasis': {
            let i
            if (eL(r.children[0])) i = t.originalText[r.position.start.offset]
            else {
              const t = e.getParentNode(),
                n = t.children.indexOf(r),
                u = t.children[n - 1],
                o = t.children[n + 1]
              i =
                (u &&
                  'sentence' === u.type &&
                  u.children.length > 0 &&
                  'word' === FI(u.children).type &&
                  !FI(u.children).hasTrailingPunctuation) ||
                (o &&
                  'sentence' === o.type &&
                  o.children.length > 0 &&
                  'word' === o.children[0].type &&
                  !o.children[0].hasLeadingPunctuation) ||
                sL(e, 'emphasis')
                  ? '*'
                  : '_'
            }
            return [i, lL(e, t, n), i]
          }
          case 'strong':
            return ['**', lL(e, t, n), '**']
          case 'delete':
            return ['~~', lL(e, t, n), '~~']
          case 'inlineCode': {
            const e = xI(r.value, '`'),
              t = '`'.repeat(e || 1),
              n = e && !/^\s/.test(r.value) ? ' ' : ''
            return [t, n, r.value, n, t]
          }
          case 'wikiLink': {
            let e = ''
            return (
              (e =
                'preserve' === t.proseWrap
                  ? r.value
                  : r.value.replace(/[\t\n]+/g, ' ')),
              ['[[', e, ']]']
            )
          }
          case 'link':
            switch (t.originalText[r.position.start.offset]) {
              case '<': {
                const e = 'mailto:'
                return [
                  '<',
                  r.url.startsWith(e) &&
                  t.originalText.slice(
                    r.position.start.offset + 1,
                    r.position.start.offset + 1 + e.length
                  ) !== e
                    ? r.url.slice(e.length)
                    : r.url,
                  '>'
                ]
              }
              case '[':
                return [
                  '[',
                  lL(e, t, n),
                  '](',
                  hL(r.url, ')'),
                  gL(r.title, t),
                  ')'
                ]
              default:
                return t.originalText.slice(
                  r.position.start.offset,
                  r.position.end.offset
                )
            }
          case 'image':
            return [
              '![',
              r.alt || '',
              '](',
              hL(r.url, ')'),
              gL(r.title, t),
              ')'
            ]
          case 'blockquote':
            return ['> ', MI('> ', lL(e, t, n))]
          case 'heading':
            return ['#'.repeat(r.depth) + ' ', lL(e, t, n)]
          case 'code': {
            if (r.isIndented) {
              const e = ' '.repeat(4)
              return MI(e, [e, ...qI(r.value, II)])
            }
            const e = t.__inJsTemplate ? '~' : '`',
              n = e.repeat(Math.max(3, SI(r.value, e) + 1))
            return [
              n,
              r.lang || '',
              r.meta ? ' ' + r.meta : '',
              II,
              ...qI(JI(r, t.originalText), II),
              II,
              n
            ]
          }
          case 'html': {
            const t = e.getParentNode(),
              n =
                'root' === t.type && FI(t.children) === r
                  ? r.value.trimEnd()
                  : r.value,
              i = /^<!--.*-->$/s.test(n)
            return qI(n, i ? II : OI(PI))
          }
          case 'list': {
            const i = uL(r, e.getParentNode()),
              u = XI(r, t)
            return lL(e, t, n, {
              processor: (e, o) => {
                const s = (function () {
                    const e = r.ordered
                      ? (0 === o ? r.start : u ? 1 : r.start + o) +
                        (i % 2 == 0 ? '. ' : ') ')
                      : i % 2 == 0
                      ? '- '
                      : '* '
                    return r.isAligned || r.hasIndentedCodeblock
                      ? (function (e, t) {
                          const n = r()
                          return e + ' '.repeat(n >= 4 ? 0 : n)
                          function r() {
                            const n = e.length % t.tabWidth
                            return 0 === n ? 0 : t.tabWidth - n
                          }
                        })(e, t)
                      : e
                  })(),
                  a = e.getValue()
                return 2 === a.children.length &&
                  'html' === a.children[1].type &&
                  a.children[0].position.start.column !==
                    a.children[1].position.start.column
                  ? [s, iL(e, t, n, s)]
                  : [s, MI(' '.repeat(s.length), iL(e, t, n, s))]
              }
            })
          }
          case 'thematicBreak': {
            const t = oL(e, 'list')
            if (-1 === t) return '---'
            return uL(e.getParentNode(t), e.getParentNode(t + 1)) % 2 == 0
              ? '***'
              : '---'
          }
          case 'linkReference':
            return [
              '[',
              lL(e, t, n),
              ']',
              'full' === r.referenceType
                ? ['[', r.identifier, ']']
                : 'collapsed' === r.referenceType
                ? '[]'
                : ''
            ]
          case 'imageReference':
            switch (r.referenceType) {
              case 'full':
                return ['![', r.alt || '', '][', r.identifier, ']']
              default:
                return [
                  '![',
                  r.alt,
                  ']',
                  'collapsed' === r.referenceType ? '[]' : ''
                ]
            }
          case 'definition': {
            const e = 'always' === t.proseWrap ? kI : ' '
            return $I([
              '[',
              r.identifier,
              ']:',
              RI([
                e,
                hL(r.url),
                null === r.title ? '' : [e, gL(r.title, t, !1)]
              ])
            ])
          }
          case 'footnote':
            return ['[^', lL(e, t, n), ']']
          case 'footnoteReference':
            return ['[^', r.identifier, ']']
          case 'footnoteDefinition': {
            const i = e.getParentNode().children[e.getName() + 1],
              u =
                1 === r.children.length &&
                'paragraph' === r.children[0].type &&
                ('never' === t.proseWrap ||
                  ('preserve' === t.proseWrap &&
                    r.children[0].position.start.line ===
                      r.children[0].position.end.line))
            return [
              '[^',
              r.identifier,
              ']: ',
              u
                ? lL(e, t, n)
                : $I([
                    MI(
                      ' '.repeat(4),
                      lL(e, t, n, {
                        processor: (e, t) => (0 === t ? $I([LI, n()]) : n())
                      })
                    ),
                    i && 'footnoteDefinition' === i.type ? LI : ''
                  ])
            ]
          }
          case 'table':
            return (function (e, t, n) {
              const r = e.getValue(),
                i = [],
                u = e.map(
                  (e) =>
                    e.map((e, r) => {
                      const u = UI(n(), t).formatted,
                        o = wI(u)
                      return (
                        (i[r] = Math.max(i[r] || 3, o)), { text: u, width: o }
                      )
                    }, 'children'),
                  'children'
                ),
                o = a(!1)
              if ('never' !== t.proseWrap) return [BI, o]
              const s = a(!0)
              return [BI, $I(jI(s, o))]
              function a(e) {
                const t = [l(u[0], e), c(e)]
                return (
                  u.length > 1 &&
                    t.push(
                      NI(
                        VI,
                        u.slice(1).map((t) => l(t, e))
                      )
                    ),
                  NI(VI, t)
                )
              }
              function c(e) {
                return `| ${i
                  .map((t, n) => {
                    const i = r.align[n],
                      u = 'center' === i || 'right' === i ? ':' : '-'
                    return `${'center' === i || 'left' === i ? ':' : '-'}${
                      e ? '-' : '-'.repeat(t - 2)
                    }${u}`
                  })
                  .join(' | ')} |`
              }
              function l(e, t) {
                return `| ${e
                  .map(({ text: e, width: n }, u) => {
                    if (t) return e
                    const o = i[u] - n,
                      s = r.align[u]
                    let a = 0
                    'right' === s
                      ? (a = o)
                      : 'center' === s && (a = Math.floor(o / 2))
                    const c = o - a
                    return `${' '.repeat(a)}${e}${' '.repeat(c)}`
                  })
                  .join(' | ')} |`
              }
            })(e, t, n)
          case 'tableCell':
            return lL(e, t, n)
          case 'break':
            return /\s/.test(t.originalText[r.position.start.offset])
              ? ['  ', OI(PI)]
              : ['\\', II]
          case 'liquidNode':
            return qI(r.value, II)
          case 'importExport':
            return [r.value, II]
          case 'jsx':
            return r.value
          case 'math':
            return ['$$', II, r.value ? [...qI(r.value, II), II] : '', '$$']
          case 'inlineMath':
            return t.originalText.slice(GI(r), HI(r))
          case 'tableRow':
          case 'listItem':
          default:
            throw new Error(`Unknown markdown type ${JSON.stringify(r.type)}`)
        }
      },
      embed: cI,
      massageAstNode: vI,
      hasPrettierIgnore: function (e) {
        const t = Number(e.getName())
        return 0 !== t && 'next' === fL(e.getParentNode().children[t - 1])
      },
      insertPragma: zI
    },
    yL = { proseWrap: KB.proseWrap, singleQuote: KB.singleQuote },
    DL = {
      name: 'Markdown',
      type: 'prose',
      color: '#083fa1',
      aliases: ['pandoc'],
      aceMode: 'markdown',
      codemirrorMode: 'gfm',
      codemirrorMimeType: 'text/x-gfm',
      wrap: !0,
      extensions: [
        '.md',
        '.markdown',
        '.mdown',
        '.mdwn',
        '.mdx',
        '.mkd',
        '.mkdn',
        '.mkdown',
        '.ronn',
        '.scd',
        '.workbook'
      ],
      filenames: ['contents.lr'],
      tmScope: 'source.gfm',
      languageId: 222
    }
  var EL = {
    languages: [
      rh(DL, (e) => ({
        since: '1.8.0',
        parsers: ['markdown'],
        vscodeLanguageIds: ['markdown'],
        filenames: [...e.filenames, 'README'],
        extensions: e.extensions.filter((e) => '.mdx' !== e)
      })),
      rh(DL, () => ({
        name: 'MDX',
        since: '1.15.0',
        parsers: ['mdx'],
        vscodeLanguageIds: ['mdx'],
        filenames: [],
        extensions: ['.mdx']
      }))
    ],
    options: yL,
    printers: { mdast: mL },
    parsers: undefined
  }
  const { isFrontMatterNode: CL } = Fi,
    bL = new Set([
      'sourceSpan',
      'startSourceSpan',
      'endSourceSpan',
      'nameSpan',
      'valueSpan'
    ])
  function AL(e, t) {
    return 'text' === e.type ||
      'comment' === e.type ||
      CL(e) ||
      'yaml' === e.type ||
      'toml' === e.type
      ? null
      : ('attribute' === e.type && delete t.value,
        void ('docType' === e.type && delete t.value))
  }
  AL.ignoredProperties = bL
  var vL = AL,
    FL = {
      '*': [
        'accesskey',
        'autocapitalize',
        'autofocus',
        'class',
        'contenteditable',
        'dir',
        'draggable',
        'enterkeyhint',
        'hidden',
        'id',
        'inputmode',
        'is',
        'itemid',
        'itemprop',
        'itemref',
        'itemscope',
        'itemtype',
        'lang',
        'nonce',
        'slot',
        'spellcheck',
        'style',
        'tabindex',
        'title',
        'translate'
      ],
      a: [
        'accesskey',
        'charset',
        'coords',
        'download',
        'href',
        'hreflang',
        'name',
        'ping',
        'referrerpolicy',
        'rel',
        'rev',
        'shape',
        'tabindex',
        'target',
        'type'
      ],
      abbr: ['title'],
      applet: [
        'align',
        'alt',
        'archive',
        'code',
        'codebase',
        'height',
        'hspace',
        'name',
        'object',
        'vspace',
        'width'
      ],
      area: [
        'accesskey',
        'alt',
        'coords',
        'download',
        'href',
        'hreflang',
        'nohref',
        'ping',
        'referrerpolicy',
        'rel',
        'shape',
        'tabindex',
        'target',
        'type'
      ],
      audio: [
        'autoplay',
        'controls',
        'crossorigin',
        'loop',
        'muted',
        'preload',
        'src'
      ],
      base: ['href', 'target'],
      basefont: ['color', 'face', 'size'],
      bdo: ['dir'],
      blockquote: ['cite'],
      body: ['alink', 'background', 'bgcolor', 'link', 'text', 'vlink'],
      br: ['clear'],
      button: [
        'accesskey',
        'autofocus',
        'disabled',
        'form',
        'formaction',
        'formenctype',
        'formmethod',
        'formnovalidate',
        'formtarget',
        'name',
        'tabindex',
        'type',
        'value'
      ],
      canvas: ['height', 'width'],
      caption: ['align'],
      col: ['align', 'char', 'charoff', 'span', 'valign', 'width'],
      colgroup: ['align', 'char', 'charoff', 'span', 'valign', 'width'],
      data: ['value'],
      del: ['cite', 'datetime'],
      details: ['open'],
      dfn: ['title'],
      dialog: ['open'],
      dir: ['compact'],
      div: ['align'],
      dl: ['compact'],
      embed: ['height', 'src', 'type', 'width'],
      fieldset: ['disabled', 'form', 'name'],
      font: ['color', 'face', 'size'],
      form: [
        'accept',
        'accept-charset',
        'action',
        'autocomplete',
        'enctype',
        'method',
        'name',
        'novalidate',
        'target'
      ],
      frame: [
        'frameborder',
        'longdesc',
        'marginheight',
        'marginwidth',
        'name',
        'noresize',
        'scrolling',
        'src'
      ],
      frameset: ['cols', 'rows'],
      h1: ['align'],
      h2: ['align'],
      h3: ['align'],
      h4: ['align'],
      h5: ['align'],
      h6: ['align'],
      head: ['profile'],
      hr: ['align', 'noshade', 'size', 'width'],
      html: ['manifest', 'version'],
      iframe: [
        'align',
        'allow',
        'allowfullscreen',
        'allowpaymentrequest',
        'allowusermedia',
        'frameborder',
        'height',
        'loading',
        'longdesc',
        'marginheight',
        'marginwidth',
        'name',
        'referrerpolicy',
        'sandbox',
        'scrolling',
        'src',
        'srcdoc',
        'width'
      ],
      img: [
        'align',
        'alt',
        'border',
        'crossorigin',
        'decoding',
        'height',
        'hspace',
        'ismap',
        'loading',
        'longdesc',
        'name',
        'referrerpolicy',
        'sizes',
        'src',
        'srcset',
        'usemap',
        'vspace',
        'width'
      ],
      input: [
        'accept',
        'accesskey',
        'align',
        'alt',
        'autocomplete',
        'autofocus',
        'checked',
        'dirname',
        'disabled',
        'form',
        'formaction',
        'formenctype',
        'formmethod',
        'formnovalidate',
        'formtarget',
        'height',
        'ismap',
        'list',
        'max',
        'maxlength',
        'min',
        'minlength',
        'multiple',
        'name',
        'pattern',
        'placeholder',
        'readonly',
        'required',
        'size',
        'src',
        'step',
        'tabindex',
        'title',
        'type',
        'usemap',
        'value',
        'width'
      ],
      ins: ['cite', 'datetime'],
      isindex: ['prompt'],
      label: ['accesskey', 'for', 'form'],
      legend: ['accesskey', 'align'],
      li: ['type', 'value'],
      link: [
        'as',
        'charset',
        'color',
        'crossorigin',
        'disabled',
        'href',
        'hreflang',
        'imagesizes',
        'imagesrcset',
        'integrity',
        'media',
        'nonce',
        'referrerpolicy',
        'rel',
        'rev',
        'sizes',
        'target',
        'title',
        'type'
      ],
      map: ['name'],
      menu: ['compact'],
      meta: ['charset', 'content', 'http-equiv', 'name', 'scheme'],
      meter: ['high', 'low', 'max', 'min', 'optimum', 'value'],
      object: [
        'align',
        'archive',
        'border',
        'classid',
        'codebase',
        'codetype',
        'data',
        'declare',
        'form',
        'height',
        'hspace',
        'name',
        'standby',
        'tabindex',
        'type',
        'typemustmatch',
        'usemap',
        'vspace',
        'width'
      ],
      ol: ['compact', 'reversed', 'start', 'type'],
      optgroup: ['disabled', 'label'],
      option: ['disabled', 'label', 'selected', 'value'],
      output: ['for', 'form', 'name'],
      p: ['align'],
      param: ['name', 'type', 'value', 'valuetype'],
      pre: ['width'],
      progress: ['max', 'value'],
      q: ['cite'],
      script: [
        'async',
        'charset',
        'crossorigin',
        'defer',
        'integrity',
        'language',
        'nomodule',
        'nonce',
        'referrerpolicy',
        'src',
        'type'
      ],
      select: [
        'autocomplete',
        'autofocus',
        'disabled',
        'form',
        'multiple',
        'name',
        'required',
        'size',
        'tabindex'
      ],
      slot: ['name'],
      source: ['media', 'sizes', 'src', 'srcset', 'type'],
      style: ['media', 'nonce', 'title', 'type'],
      table: [
        'align',
        'bgcolor',
        'border',
        'cellpadding',
        'cellspacing',
        'frame',
        'rules',
        'summary',
        'width'
      ],
      tbody: ['align', 'char', 'charoff', 'valign'],
      td: [
        'abbr',
        'align',
        'axis',
        'bgcolor',
        'char',
        'charoff',
        'colspan',
        'headers',
        'height',
        'nowrap',
        'rowspan',
        'scope',
        'valign',
        'width'
      ],
      textarea: [
        'accesskey',
        'autocomplete',
        'autofocus',
        'cols',
        'dirname',
        'disabled',
        'form',
        'maxlength',
        'minlength',
        'name',
        'placeholder',
        'readonly',
        'required',
        'rows',
        'tabindex',
        'wrap'
      ],
      tfoot: ['align', 'char', 'charoff', 'valign'],
      th: [
        'abbr',
        'align',
        'axis',
        'bgcolor',
        'char',
        'charoff',
        'colspan',
        'headers',
        'height',
        'nowrap',
        'rowspan',
        'scope',
        'valign',
        'width'
      ],
      thead: ['align', 'char', 'charoff', 'valign'],
      time: ['datetime'],
      tr: ['align', 'bgcolor', 'char', 'charoff', 'valign'],
      track: ['default', 'kind', 'label', 'src', 'srclang'],
      ul: ['compact', 'type'],
      video: [
        'autoplay',
        'controls',
        'crossorigin',
        'height',
        'loop',
        'muted',
        'playsinline',
        'poster',
        'preload',
        'src',
        'width'
      ]
    }
  const { inferParserByLanguage: xL, isFrontMatterNode: SL } = Fi,
    {
      builders: { line: wL, hardline: TL, join: BL },
      utils: { getDocParts: NL, replaceTextEndOfLine: kL }
    } = su,
    {
      CSS_DISPLAY_TAGS: PL,
      CSS_DISPLAY_DEFAULT: OL,
      CSS_WHITE_SPACE_TAGS: IL,
      CSS_WHITE_SPACE_DEFAULT: LL
    } = {
      CSS_DISPLAY_TAGS: {
        area: 'none',
        base: 'none',
        basefont: 'none',
        datalist: 'none',
        head: 'none',
        link: 'none',
        meta: 'none',
        noembed: 'none',
        noframes: 'none',
        param: 'block',
        rp: 'none',
        script: 'block',
        source: 'block',
        style: 'none',
        template: 'inline',
        track: 'block',
        title: 'none',
        html: 'block',
        body: 'block',
        address: 'block',
        blockquote: 'block',
        center: 'block',
        div: 'block',
        figure: 'block',
        figcaption: 'block',
        footer: 'block',
        form: 'block',
        header: 'block',
        hr: 'block',
        legend: 'block',
        listing: 'block',
        main: 'block',
        p: 'block',
        plaintext: 'block',
        pre: 'block',
        xmp: 'block',
        slot: 'contents',
        ruby: 'ruby',
        rt: 'ruby-text',
        article: 'block',
        aside: 'block',
        h1: 'block',
        h2: 'block',
        h3: 'block',
        h4: 'block',
        h5: 'block',
        h6: 'block',
        hgroup: 'block',
        nav: 'block',
        section: 'block',
        dir: 'block',
        dd: 'block',
        dl: 'block',
        dt: 'block',
        ol: 'block',
        ul: 'block',
        li: 'list-item',
        table: 'table',
        caption: 'table-caption',
        colgroup: 'table-column-group',
        col: 'table-column',
        thead: 'table-header-group',
        tbody: 'table-row-group',
        tfoot: 'table-footer-group',
        tr: 'table-row',
        td: 'table-cell',
        th: 'table-cell',
        fieldset: 'block',
        button: 'inline-block',
        details: 'block',
        summary: 'block',
        dialog: 'block',
        meter: 'inline-block',
        progress: 'inline-block',
        object: 'inline-block',
        video: 'inline-block',
        audio: 'inline-block',
        select: 'inline-block',
        option: 'block',
        optgroup: 'block'
      },
      CSS_DISPLAY_DEFAULT: 'inline',
      CSS_WHITE_SPACE_TAGS: {
        listing: 'pre',
        plaintext: 'pre',
        pre: 'pre',
        xmp: 'pre',
        nobr: 'nowrap',
        table: 'initial',
        textarea: 'pre-wrap'
      },
      CSS_WHITE_SPACE_DEFAULT: 'normal'
    },
    jL = WL([
      'a',
      'abbr',
      'acronym',
      'address',
      'applet',
      'area',
      'article',
      'aside',
      'audio',
      'b',
      'base',
      'basefont',
      'bdi',
      'bdo',
      'bgsound',
      'big',
      'blink',
      'blockquote',
      'body',
      'br',
      'button',
      'canvas',
      'caption',
      'center',
      'cite',
      'code',
      'col',
      'colgroup',
      'command',
      'content',
      'data',
      'datalist',
      'dd',
      'del',
      'details',
      'dfn',
      'dialog',
      'dir',
      'div',
      'dl',
      'dt',
      'element',
      'em',
      'embed',
      'fieldset',
      'figcaption',
      'figure',
      'font',
      'footer',
      'form',
      'frame',
      'frameset',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hgroup',
      'hr',
      'html',
      'i',
      'iframe',
      'image',
      'img',
      'input',
      'ins',
      'isindex',
      'kbd',
      'keygen',
      'label',
      'legend',
      'li',
      'link',
      'listing',
      'main',
      'map',
      'mark',
      'marquee',
      'math',
      'menu',
      'menuitem',
      'meta',
      'meter',
      'multicol',
      'nav',
      'nextid',
      'nobr',
      'noembed',
      'noframes',
      'noscript',
      'object',
      'ol',
      'optgroup',
      'option',
      'output',
      'p',
      'param',
      'picture',
      'plaintext',
      'pre',
      'progress',
      'q',
      'rb',
      'rbc',
      'rp',
      'rt',
      'rtc',
      'ruby',
      's',
      'samp',
      'script',
      'section',
      'select',
      'shadow',
      'slot',
      'small',
      'source',
      'spacer',
      'span',
      'strike',
      'strong',
      'style',
      'sub',
      'summary',
      'sup',
      'svg',
      'table',
      'tbody',
      'td',
      'template',
      'textarea',
      'tfoot',
      'th',
      'thead',
      'time',
      'title',
      'tr',
      'track',
      'tt',
      'u',
      'ul',
      'var',
      'video',
      'wbr',
      'xmp'
    ]),
    _L = (function (e, t) {
      const n = Object.create(null)
      for (const [r, i] of Object.entries(e)) n[r] = t(i, r)
      return n
    })(FL, WL),
    ML = new Set(['\t', '\n', '\f', '\r', ' ']),
    RL = (e) => e.replace(/[\t\n\f\r ]+$/, ''),
    $L = (e) => ((e) => e.replace(/^[\t\f\r ]*?\n/g, ''))(RL(e)),
    VL = (e) => e.match(/^[\t\n\f\r ]*/)[0]
  function WL(e) {
    const t = Object.create(null)
    for (const n of e) t[n] = !0
    return t
  }
  function qL(e) {
    return (
      'element' === e.type &&
      ('script' === e.fullName ||
        'style' === e.fullName ||
        'svg:style' === e.fullName ||
        (ej(e) && ('script' === e.name || 'style' === e.name)))
    )
  }
  function UL(e) {
    return tj(e).startsWith('pre')
  }
  function zL(e) {
    return (
      'element' === e.type &&
      e.children.length > 0 &&
      (['html', 'head', 'ul', 'ol', 'select'].includes(e.name) ||
        (e.cssDisplay.startsWith('table') && 'table-cell' !== e.cssDisplay))
    )
  }
  function GL(e) {
    return YL(e) || ('element' === e.type && 'br' === e.fullName) || HL(e)
  }
  function HL(e) {
    return JL(e) && XL(e)
  }
  function JL(e) {
    return (
      e.hasLeadingSpaces &&
      (e.prev
        ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line
        : 'root' === e.parent.type ||
          e.parent.startSourceSpan.end.line < e.sourceSpan.start.line)
    )
  }
  function XL(e) {
    return (
      e.hasTrailingSpaces &&
      (e.next
        ? e.next.sourceSpan.start.line > e.sourceSpan.end.line
        : 'root' === e.parent.type ||
          (e.parent.endSourceSpan &&
            e.parent.endSourceSpan.start.line > e.sourceSpan.end.line))
    )
  }
  function YL(e) {
    switch (e.type) {
      case 'ieConditionalComment':
      case 'comment':
      case 'directive':
        return !0
      case 'element':
        return ['script', 'select'].includes(e.name)
    }
    return !1
  }
  function KL(e) {
    const { type: t, lang: n } = e.attrMap
    return 'module' === t ||
      'text/javascript' === t ||
      'text/babel' === t ||
      'application/javascript' === t ||
      'jsx' === n
      ? 'babel'
      : 'application/x-typescript' === t || 'ts' === n || 'tsx' === n
      ? 'typescript'
      : 'text/markdown' === t
      ? 'markdown'
      : 'text/html' === t
      ? 'html'
      : t && (t.endsWith('json') || t.endsWith('importmap'))
      ? 'json'
      : 'text/x-handlebars-template' === t
      ? 'glimmer'
      : void 0
  }
  function QL(e) {
    return 'block' === e || 'list-item' === e || e.startsWith('table')
  }
  function ZL(e) {
    return tj(e).startsWith('pre')
  }
  function ej(e) {
    return (
      'element' === e.type &&
      !e.hasExplicitNamespace &&
      !['html', 'svg'].includes(e.namespace)
    )
  }
  function tj(e) {
    return ('element' === e.type && (!e.namespace || ej(e)) && IL[e.name]) || LL
  }
  function nj(
    e,
    t = (function (e) {
      let t = Number.POSITIVE_INFINITY
      for (const n of e.split('\n')) {
        if (0 === n.length) continue
        if (!ML.has(n[0])) return 0
        const e = VL(n).length
        n.length !== e && e < t && (t = e)
      }
      return t === Number.POSITIVE_INFINITY ? 0 : t
    })(e)
  ) {
    return 0 === t
      ? e
      : e
          .split('\n')
          .map((e) => e.slice(t))
          .join('\n')
  }
  const rj = new Set(['template', 'style', 'script'])
  function ij(e, t) {
    return uj(e, t) && !rj.has(e.fullName)
  }
  function uj(e, t) {
    return (
      'vue' === t.parser &&
      'element' === e.type &&
      'root' === e.parent.type &&
      'html' !== e.fullName.toLowerCase()
    )
  }
  function oj(e, t) {
    return (
      uj(e, t) && (ij(e, t) || (e.attrMap.lang && 'html' !== e.attrMap.lang))
    )
  }
  var sj = {
      HTML_ELEMENT_ATTRIBUTES: _L,
      HTML_TAGS: jL,
      htmlTrim: (e) => ((e) => e.replace(/^[\t\n\f\r ]+/, ''))(RL(e)),
      htmlTrimPreserveIndentation: $L,
      hasHtmlWhitespace: (e) => /[\t\n\f\r ]/.test(e),
      getLeadingAndTrailingHtmlWhitespace: (e) => {
        const [, t, n, r] = e.match(/^([\t\n\f\r ]*)(.*?)([\t\n\f\r ]*)$/s)
        return { leadingWhitespace: t, trailingWhitespace: r, text: n }
      },
      canHaveInterpolation: function (e) {
        return e.children && !qL(e)
      },
      countChars: function (e, t) {
        let n = 0
        for (let r = 0; r < e.length; r++) e[r] === t && n++
        return n
      },
      countParents: function (e, t) {
        let n = 0
        for (let r = e.stack.length - 1; r >= 0; r--) {
          const i = e.stack[r]
          i && 'object' == typeof i && !Array.isArray(i) && t(i) && n++
        }
        return n
      },
      dedentString: nj,
      forceBreakChildren: zL,
      forceBreakContent: function (e) {
        return (
          zL(e) ||
          ('element' === e.type &&
            e.children.length > 0 &&
            (['body', 'script', 'style'].includes(e.name) ||
              e.children.some((e) =>
                (function (e) {
                  return e.children && e.children.some((e) => 'text' !== e.type)
                })(e)
              ))) ||
          (e.firstChild &&
            e.firstChild === e.lastChild &&
            'text' !== e.firstChild.type &&
            JL(e.firstChild) &&
            (!e.lastChild.isTrailingSpaceSensitive || XL(e.lastChild)))
        )
      },
      forceNextEmptyLine: function (e) {
        return (
          SL(e) ||
          (e.next &&
            e.sourceSpan.end &&
            e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line)
        )
      },
      getLastDescendant: function e(t) {
        return t.lastChild ? e(t.lastChild) : t
      },
      getNodeCssStyleDisplay: function (e, t) {
        if (e.prev && 'comment' === e.prev.type) {
          const t = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/)
          if (t) return t[1]
        }
        let n = !1
        if ('element' === e.type && 'svg' === e.namespace) {
          if (
            !(function (e, t) {
              let n = e
              for (; n; ) {
                if (t(n)) return !0
                n = n.parent
              }
              return !1
            })(e, (e) => 'svg:foreignObject' === e.fullName)
          )
            return 'svg' === e.name ? 'inline-block' : 'block'
          n = !0
        }
        switch (t.htmlWhitespaceSensitivity) {
          case 'strict':
            return 'inline'
          case 'ignore':
            return 'block'
          default:
            return 'vue' === t.parser && e.parent && 'root' === e.parent.type
              ? 'block'
              : ('element' === e.type &&
                  (!e.namespace || n || ej(e)) &&
                  PL[e.name]) ||
                  OL
        }
      },
      getNodeCssStyleWhiteSpace: tj,
      hasPrettierIgnore: function (e) {
        return (
          'attribute' !== e.type &&
          !!e.parent &&
          'number' == typeof e.index &&
          0 !== e.index &&
          (function (e) {
            return 'comment' === e.type && 'prettier-ignore' === e.value.trim()
          })(e.parent.children[e.index - 1])
        )
      },
      inferScriptParser: function (e, t) {
        return 'script' !== e.name || e.attrMap.src
          ? 'style' === e.name
            ? (function (e) {
                const { lang: t } = e.attrMap
                return t && 'postcss' !== t && 'css' !== t
                  ? 'scss' === t
                    ? 'scss'
                    : 'less' === t
                    ? 'less'
                    : void 0
                  : 'css'
              })(e)
            : t && oj(e, t)
            ? KL(e) || (!('src' in e.attrMap) && xL(e.attrMap.lang, t))
            : void 0
          : e.attrMap.lang || e.attrMap.type
          ? KL(e)
          : 'babel'
      },
      isVueCustomBlock: ij,
      isVueNonHtmlBlock: oj,
      isVueSlotAttribute: function (e) {
        const t = e.fullName
        return (
          '#' === t.charAt(0) ||
          'slot-scope' === t ||
          'v-slot' === t ||
          t.startsWith('v-slot:')
        )
      },
      isVueSfcBindingsAttribute: function (e, t) {
        const n = e.parent
        if (!uj(n, t)) return !1
        const r = n.fullName,
          i = e.fullName
        return (
          ('script' === r && 'setup' === i) || ('style' === r && 'vars' === i)
        )
      },
      isDanglingSpaceSensitiveNode: function (e) {
        return !((t = e.cssDisplay), QL(t) || 'inline-block' === t || qL(e))
        var t
      },
      isIndentationSensitiveNode: UL,
      isLeadingSpaceSensitiveNode: function (e, t) {
        const n = (function () {
          if (SL(e)) return !1
          if (
            ('text' === e.type || 'interpolation' === e.type) &&
            e.prev &&
            ('text' === e.prev.type || 'interpolation' === e.prev.type)
          )
            return !0
          if (!e.parent || 'none' === e.parent.cssDisplay) return !1
          if (ZL(e.parent)) return !0
          if (
            !e.prev &&
            ('root' === e.parent.type ||
              (ZL(e) && e.parent) ||
              qL(e.parent) ||
              ij(e.parent, t) ||
              ((n = e.parent.cssDisplay), QL(n) || 'inline-block' === n))
          )
            return !1
          var n
          if (
            e.prev &&
            !(function (e) {
              return !QL(e)
            })(e.prev.cssDisplay)
          )
            return !1
          return !0
        })()
        return n &&
          !e.prev &&
          e.parent &&
          e.parent.tagDefinition &&
          e.parent.tagDefinition.ignoreFirstLf
          ? 'interpolation' === e.type
          : n
      },
      isPreLikeNode: ZL,
      isScriptLikeTag: qL,
      isTextLikeNode: function (e) {
        return 'text' === e.type || 'comment' === e.type
      },
      isTrailingSpaceSensitiveNode: function (e, t) {
        return (
          !SL(e) &&
          (!(
            ('text' !== e.type && 'interpolation' !== e.type) ||
            !e.next ||
            ('text' !== e.next.type && 'interpolation' !== e.next.type)
          ) ||
            (!(!e.parent || 'none' === e.parent.cssDisplay) &&
              (!!ZL(e.parent) ||
                (!(
                  !e.next &&
                  ('root' === e.parent.type ||
                    (ZL(e) && e.parent) ||
                    qL(e.parent) ||
                    ij(e.parent, t) ||
                    ((n = e.parent.cssDisplay), QL(n) || 'inline-block' === n))
                ) &&
                  !(
                    e.next &&
                    !(function (e) {
                      return !QL(e)
                    })(e.next.cssDisplay)
                  )))))
        )
        var n
      },
      isWhitespaceSensitiveNode: function (e) {
        return qL(e) || 'interpolation' === e.type || UL(e)
      },
      isUnknownNamespace: ej,
      preferHardlineAsLeadingSpaces: function (e) {
        return YL(e) || (e.prev && GL(e.prev)) || HL(e)
      },
      preferHardlineAsTrailingSpaces: GL,
      shouldPreserveContent: function (e, t) {
        return (
          !(
            'ieConditionalComment' !== e.type ||
            !e.lastChild ||
            e.lastChild.isSelfClosing ||
            e.lastChild.endSourceSpan
          ) ||
          ('ieConditionalComment' === e.type && !e.complete) ||
          !(
            !ZL(e) ||
            !e.children.some(
              (e) => 'text' !== e.type && 'interpolation' !== e.type
            )
          ) ||
          !(!oj(e, t) || qL(e) || 'interpolation' === e.type)
        )
      },
      unescapeQuoteEntities: function (e) {
        return e.replace(/&apos;/g, "'").replace(/&quot;/g, '"')
      },
      getTextValueParts: function (e, t = e.value) {
        return e.parent.isWhitespaceSensitive
          ? e.parent.isIndentationSensitive
            ? kL(t)
            : kL(nj($L(t)), TL)
          : NL(BL(wL, ((e) => e.split(/[\t\n\f\r ]+/))(t)))
      }
    },
    aj = r(function (e, t) {
      function n(e) {
        return t.$0 <= e && e <= t.$9
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.$EOF = 0),
        (t.$BSPACE = 8),
        (t.$TAB = 9),
        (t.$LF = 10),
        (t.$VTAB = 11),
        (t.$FF = 12),
        (t.$CR = 13),
        (t.$SPACE = 32),
        (t.$BANG = 33),
        (t.$DQ = 34),
        (t.$HASH = 35),
        (t.$$ = 36),
        (t.$PERCENT = 37),
        (t.$AMPERSAND = 38),
        (t.$SQ = 39),
        (t.$LPAREN = 40),
        (t.$RPAREN = 41),
        (t.$STAR = 42),
        (t.$PLUS = 43),
        (t.$COMMA = 44),
        (t.$MINUS = 45),
        (t.$PERIOD = 46),
        (t.$SLASH = 47),
        (t.$COLON = 58),
        (t.$SEMICOLON = 59),
        (t.$LT = 60),
        (t.$EQ = 61),
        (t.$GT = 62),
        (t.$QUESTION = 63),
        (t.$0 = 48),
        (t.$7 = 55),
        (t.$9 = 57),
        (t.$A = 65),
        (t.$E = 69),
        (t.$F = 70),
        (t.$X = 88),
        (t.$Z = 90),
        (t.$LBRACKET = 91),
        (t.$BACKSLASH = 92),
        (t.$RBRACKET = 93),
        (t.$CARET = 94),
        (t.$_ = 95),
        (t.$a = 97),
        (t.$b = 98),
        (t.$e = 101),
        (t.$f = 102),
        (t.$n = 110),
        (t.$r = 114),
        (t.$t = 116),
        (t.$u = 117),
        (t.$v = 118),
        (t.$x = 120),
        (t.$z = 122),
        (t.$LBRACE = 123),
        (t.$BAR = 124),
        (t.$RBRACE = 125),
        (t.$NBSP = 160),
        (t.$PIPE = 124),
        (t.$TILDA = 126),
        (t.$AT = 64),
        (t.$BT = 96),
        (t.isWhitespace = function (e) {
          return (e >= t.$TAB && e <= t.$SPACE) || e == t.$NBSP
        }),
        (t.isDigit = n),
        (t.isAsciiLetter = function (e) {
          return (e >= t.$a && e <= t.$z) || (e >= t.$A && e <= t.$Z)
        }),
        (t.isAsciiHexDigit = function (e) {
          return (e >= t.$a && e <= t.$f) || (e >= t.$A && e <= t.$F) || n(e)
        }),
        (t.isNewLine = function (e) {
          return e === t.$LF || e === t.$CR
        }),
        (t.isOctalDigit = function (e) {
          return t.$0 <= e && e <= t.$7
        })
    })
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
  class cj {
    constructor(e, t, n) {
      ;(this.filePath = e), (this.name = t), (this.members = n)
    }
    assertNoMembers() {
      if (this.members.length)
        throw new Error(
          `Illegal state: symbol without members expected, but got ${JSON.stringify(
            this
          )}.`
        )
    }
  }
  var lj = cj
  var pj = class {
      constructor() {
        this.cache = new Map()
      }
      get(e, t, n) {
        const r = `"${e}".${t}${(n = n || []).length ? `.${n.join('.')}` : ''}`
        let i = this.cache.get(r)
        return i || ((i = new cj(e, t, n)), this.cache.set(r, i)), i
      }
    },
    fj = Object.defineProperty(
      { StaticSymbol: lj, StaticSymbolCache: pj },
      '__esModule',
      { value: !0 }
    )
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
  const dj = /-+([a-z0-9])/g
  var hj = function (e) {
    return e.replace(dj, (...e) => e[1].toUpperCase())
  }
  var gj = function (e, t) {
    return yj(e, ':', t)
  }
  var mj = function (e, t) {
    return yj(e, '.', t)
  }
  function yj(e, t, n) {
    const r = e.indexOf(t)
    return -1 == r ? n : [e.slice(0, r).trim(), e.slice(r + 1).trim()]
  }
  function Dj(e, t, n) {
    return Array.isArray(e)
      ? t.visitArray(e, n)
      : (function (e) {
          return (
            'object' == typeof e &&
            null !== e &&
            Object.getPrototypeOf(e) === kj
          )
        })(e)
      ? t.visitStringMap(e, n)
      : null == e ||
        'string' == typeof e ||
        'number' == typeof e ||
        'boolean' == typeof e
      ? t.visitPrimitive(e, n)
      : t.visitOther(e, n)
  }
  var Ej = Dj
  var Cj = function (e) {
    return null != e
  }
  var bj = function (e) {
    return void 0 === e ? null : e
  }
  var Aj = class {
      visitArray(e, t) {
        return e.map((e) => Dj(e, this, t))
      }
      visitStringMap(e, t) {
        const n = {}
        return (
          Object.keys(e).forEach((r) => {
            n[r] = Dj(e[r], this, t)
          }),
          n
        )
      }
      visitPrimitive(e, t) {
        return e
      }
      visitOther(e, t) {
        return e
      }
    },
    vj = {
      assertSync: (e) => {
        if (Lj(e)) throw new Error('Illegal state: value cannot be a promise')
        return e
      },
      then: (e, t) => (Lj(e) ? e.then(t) : t(e)),
      all: (e) => (e.some(Lj) ? Promise.all(e) : e)
    }
  var Fj = function (e) {
    throw new Error(`Internal Error: ${e}`)
  }
  var xj = function (e, t) {
    const n = Error(e)
    return (n[Sj] = !0), t && (n[wj] = t), n
  }
  const Sj = 'ngSyntaxError',
    wj = 'ngParseErrors'
  var Tj = function (e) {
    return e[Sj]
  }
  var Bj = function (e) {
    return e[wj] || []
  }
  var Nj = function (e) {
    return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1')
  }
  const kj = Object.getPrototypeOf({})
  var Pj = function (e) {
    let t = ''
    for (let n = 0; n < e.length; n++) {
      let r = e.charCodeAt(n)
      if (r >= 55296 && r <= 56319 && e.length > n + 1) {
        const t = e.charCodeAt(n + 1)
        t >= 56320 &&
          t <= 57343 &&
          (n++, (r = ((r - 55296) << 10) + t - 56320 + 65536))
      }
      r <= 127
        ? (t += String.fromCharCode(r))
        : r <= 2047
        ? (t += String.fromCharCode(((r >> 6) & 31) | 192, (63 & r) | 128))
        : r <= 65535
        ? (t += String.fromCharCode(
            (r >> 12) | 224,
            ((r >> 6) & 63) | 128,
            (63 & r) | 128
          ))
        : r <= 2097151 &&
          (t += String.fromCharCode(
            ((r >> 18) & 7) | 240,
            ((r >> 12) & 63) | 128,
            ((r >> 6) & 63) | 128,
            (63 & r) | 128
          ))
    }
    return t
  }
  var Oj = function e(t) {
    if ('string' == typeof t) return t
    if (t instanceof Array) return '[' + t.map(e).join(', ') + ']'
    if (null == t) return '' + t
    if (t.overriddenName) return `${t.overriddenName}`
    if (t.name) return `${t.name}`
    if (!t.toString) return 'object'
    const n = t.toString()
    if (null == n) return '' + n
    const r = n.indexOf('\n')
    return -1 === r ? n : n.substring(0, r)
  }
  var Ij = function (e) {
    return 'function' == typeof e && e.hasOwnProperty('__forward_ref__')
      ? e()
      : e
  }
  function Lj(e) {
    return !!e && 'function' == typeof e.then
  }
  var jj = Lj
  var _j = class {
    constructor(e) {
      this.full = e
      const t = e.split('.')
      ;(this.major = t[0]),
        (this.minor = t[1]),
        (this.patch = t.slice(2).join('.'))
    }
  }
  const Mj = 'undefined' != typeof window && window,
    Rj =
      'undefined' != typeof self &&
      'undefined' != typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      self
  var $j = (void 0 !== t && t) || Mj || Rj,
    Vj = Object.defineProperty(
      {
        dashCaseToCamelCase: hj,
        splitAtColon: gj,
        splitAtPeriod: mj,
        visitValue: Ej,
        isDefined: Cj,
        noUndefined: bj,
        ValueTransformer: Aj,
        SyncAsync: vj,
        error: Fj,
        syntaxError: xj,
        isSyntaxError: Tj,
        getParseErrors: Bj,
        escapeRegExp: Nj,
        utf8Encode: Pj,
        stringify: Oj,
        resolveForwardRef: Ij,
        isPromise: jj,
        Version: _j,
        global: $j
      },
      '__esModule',
      { value: !0 }
    ),
    Wj = r(function (e, t) {
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/
      function r(e) {
        return e.replace(/\W/g, '_')
      }
      t.sanitizeIdentifier = r
      let i = 0
      function u(e) {
        if (!e || !e.reference) return null
        const t = e.reference
        if (t instanceof fj.StaticSymbol) return t.name
        if (t.__anonymousType) return t.__anonymousType
        let n = Vj.stringify(t)
        return (
          n.indexOf('(') >= 0
            ? ((n = 'anonymous_' + i++), (t.__anonymousType = n))
            : (n = r(n)),
          n
        )
      }
      var o
      ;(t.identifierName = u),
        (t.identifierModuleUrl = function (e) {
          const t = e.reference
          return t instanceof fj.StaticSymbol
            ? t.filePath
            : `./${Vj.stringify(t)}`
        }),
        (t.viewClassName = function (e, t) {
          return `View_${u({ reference: e })}_${t}`
        }),
        (t.rendererTypeName = function (e) {
          return `RenderType_${u({ reference: e })}`
        }),
        (t.hostViewClassName = function (e) {
          return `HostView_${u({ reference: e })}`
        }),
        (t.componentFactoryName = function (e) {
          return `${u({ reference: e })}NgFactory`
        }),
        (function (e) {
          ;(e[(e.Pipe = 0)] = 'Pipe'),
            (e[(e.Directive = 1)] = 'Directive'),
            (e[(e.NgModule = 2)] = 'NgModule'),
            (e[(e.Injectable = 3)] = 'Injectable')
        })((o = t.CompileSummaryKind || (t.CompileSummaryKind = {}))),
        (t.tokenName = function (e) {
          return null != e.value ? r(e.value) : u(e.identifier)
        }),
        (t.tokenReference = function (e) {
          return null != e.identifier ? e.identifier.reference : e.value
        })
      t.CompileStylesheetMetadata = class {
        constructor({ moduleUrl: e, styles: t, styleUrls: n } = {}) {
          ;(this.moduleUrl = e || null),
            (this.styles = a(t)),
            (this.styleUrls = a(n))
        }
      }
      t.CompileTemplateMetadata = class {
        constructor({
          encapsulation: e,
          template: t,
          templateUrl: n,
          htmlAst: r,
          styles: i,
          styleUrls: u,
          externalStylesheets: o,
          animations: s,
          ngContentSelectors: l,
          interpolation: p,
          isInline: f,
          preserveWhitespaces: d
        }) {
          if (
            ((this.encapsulation = e),
            (this.template = t),
            (this.templateUrl = n),
            (this.htmlAst = r),
            (this.styles = a(i)),
            (this.styleUrls = a(u)),
            (this.externalStylesheets = a(o)),
            (this.animations = s ? c(s) : []),
            (this.ngContentSelectors = l || []),
            p && 2 != p.length)
          )
            throw new Error(
              "'interpolation' should have a start and an end symbol."
            )
          ;(this.interpolation = p),
            (this.isInline = f),
            (this.preserveWhitespaces = d)
        }
        toSummary() {
          return {
            ngContentSelectors: this.ngContentSelectors,
            encapsulation: this.encapsulation,
            styles: this.styles,
            animations: this.animations
          }
        }
      }
      class s {
        static create({
          isHost: e,
          type: t,
          isComponent: r,
          selector: i,
          exportAs: u,
          changeDetection: o,
          inputs: a,
          outputs: c,
          host: l,
          providers: p,
          viewProviders: f,
          queries: d,
          guards: h,
          viewQueries: g,
          entryComponents: m,
          template: y,
          componentViewType: D,
          rendererType: E,
          componentFactory: C
        }) {
          const b = {},
            A = {},
            v = {}
          null != l &&
            Object.keys(l).forEach((e) => {
              const t = l[e],
                r = e.match(n)
              null === r
                ? (v[e] = t)
                : null != r[1]
                ? (A[r[1]] = t)
                : null != r[2] && (b[r[2]] = t)
            })
          const F = {}
          null != a &&
            a.forEach((e) => {
              const t = Vj.splitAtColon(e, [e, e])
              F[t[0]] = t[1]
            })
          const x = {}
          return (
            null != c &&
              c.forEach((e) => {
                const t = Vj.splitAtColon(e, [e, e])
                x[t[0]] = t[1]
              }),
            new s({
              isHost: e,
              type: t,
              isComponent: !!r,
              selector: i,
              exportAs: u,
              changeDetection: o,
              inputs: F,
              outputs: x,
              hostListeners: b,
              hostProperties: A,
              hostAttributes: v,
              providers: p,
              viewProviders: f,
              queries: d,
              guards: h,
              viewQueries: g,
              entryComponents: m,
              template: y,
              componentViewType: D,
              rendererType: E,
              componentFactory: C
            })
          )
        }
        constructor({
          isHost: e,
          type: t,
          isComponent: n,
          selector: r,
          exportAs: i,
          changeDetection: u,
          inputs: o,
          outputs: s,
          hostListeners: c,
          hostProperties: l,
          hostAttributes: p,
          providers: f,
          viewProviders: d,
          queries: h,
          guards: g,
          viewQueries: m,
          entryComponents: y,
          template: D,
          componentViewType: E,
          rendererType: C,
          componentFactory: b
        }) {
          ;(this.isHost = !!e),
            (this.type = t),
            (this.isComponent = n),
            (this.selector = r),
            (this.exportAs = i),
            (this.changeDetection = u),
            (this.inputs = o),
            (this.outputs = s),
            (this.hostListeners = c),
            (this.hostProperties = l),
            (this.hostAttributes = p),
            (this.providers = a(f)),
            (this.viewProviders = a(d)),
            (this.queries = a(h)),
            (this.guards = g),
            (this.viewQueries = a(m)),
            (this.entryComponents = a(y)),
            (this.template = D),
            (this.componentViewType = E),
            (this.rendererType = C),
            (this.componentFactory = b)
        }
        toSummary() {
          return {
            summaryKind: o.Directive,
            type: this.type,
            isComponent: this.isComponent,
            selector: this.selector,
            exportAs: this.exportAs,
            inputs: this.inputs,
            outputs: this.outputs,
            hostListeners: this.hostListeners,
            hostProperties: this.hostProperties,
            hostAttributes: this.hostAttributes,
            providers: this.providers,
            viewProviders: this.viewProviders,
            queries: this.queries,
            guards: this.guards,
            viewQueries: this.viewQueries,
            entryComponents: this.entryComponents,
            changeDetection: this.changeDetection,
            template: this.template && this.template.toSummary(),
            componentViewType: this.componentViewType,
            rendererType: this.rendererType,
            componentFactory: this.componentFactory
          }
        }
      }
      t.CompileDirectiveMetadata = s
      t.CompilePipeMetadata = class {
        constructor({ type: e, name: t, pure: n }) {
          ;(this.type = e), (this.name = t), (this.pure = !!n)
        }
        toSummary() {
          return {
            summaryKind: o.Pipe,
            type: this.type,
            name: this.name,
            pure: this.pure
          }
        }
      }
      t.CompileShallowModuleMetadata = class {}
      t.CompileNgModuleMetadata = class {
        constructor({
          type: e,
          providers: t,
          declaredDirectives: n,
          exportedDirectives: r,
          declaredPipes: i,
          exportedPipes: u,
          entryComponents: o,
          bootstrapComponents: s,
          importedModules: c,
          exportedModules: l,
          schemas: p,
          transitiveModule: f,
          id: d
        }) {
          ;(this.type = e || null),
            (this.declaredDirectives = a(n)),
            (this.exportedDirectives = a(r)),
            (this.declaredPipes = a(i)),
            (this.exportedPipes = a(u)),
            (this.providers = a(t)),
            (this.entryComponents = a(o)),
            (this.bootstrapComponents = a(s)),
            (this.importedModules = a(c)),
            (this.exportedModules = a(l)),
            (this.schemas = a(p)),
            (this.id = d || null),
            (this.transitiveModule = f || null)
        }
        toSummary() {
          const e = this.transitiveModule
          return {
            summaryKind: o.NgModule,
            type: this.type,
            entryComponents: e.entryComponents,
            providers: e.providers,
            modules: e.modules,
            exportedDirectives: e.exportedDirectives,
            exportedPipes: e.exportedPipes
          }
        }
      }
      function a(e) {
        return e || []
      }
      t.TransitiveCompileNgModuleMetadata = class {
        constructor() {
          ;(this.directivesSet = new Set()),
            (this.directives = []),
            (this.exportedDirectivesSet = new Set()),
            (this.exportedDirectives = []),
            (this.pipesSet = new Set()),
            (this.pipes = []),
            (this.exportedPipesSet = new Set()),
            (this.exportedPipes = []),
            (this.modulesSet = new Set()),
            (this.modules = []),
            (this.entryComponentsSet = new Set()),
            (this.entryComponents = []),
            (this.providers = [])
        }
        addProvider(e, t) {
          this.providers.push({ provider: e, module: t })
        }
        addDirective(e) {
          this.directivesSet.has(e.reference) ||
            (this.directivesSet.add(e.reference), this.directives.push(e))
        }
        addExportedDirective(e) {
          this.exportedDirectivesSet.has(e.reference) ||
            (this.exportedDirectivesSet.add(e.reference),
            this.exportedDirectives.push(e))
        }
        addPipe(e) {
          this.pipesSet.has(e.reference) ||
            (this.pipesSet.add(e.reference), this.pipes.push(e))
        }
        addExportedPipe(e) {
          this.exportedPipesSet.has(e.reference) ||
            (this.exportedPipesSet.add(e.reference), this.exportedPipes.push(e))
        }
        addModule(e) {
          this.modulesSet.has(e.reference) ||
            (this.modulesSet.add(e.reference), this.modules.push(e))
        }
        addEntryComponent(e) {
          this.entryComponentsSet.has(e.componentType) ||
            (this.entryComponentsSet.add(e.componentType),
            this.entryComponents.push(e))
        }
      }
      function c(e) {
        return e.reduce((e, t) => {
          const n = Array.isArray(t) ? c(t) : t
          return e.concat(n)
        }, [])
      }
      function l(e) {
        return e.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, 'ng:///')
      }
      ;(t.ProviderMeta = class {
        constructor(
          e,
          {
            useClass: t,
            useValue: n,
            useExisting: r,
            useFactory: i,
            deps: u,
            multi: o
          }
        ) {
          ;(this.token = e),
            (this.useClass = t || null),
            (this.useValue = n),
            (this.useExisting = r),
            (this.useFactory = i || null),
            (this.dependencies = u || null),
            (this.multi = !!o)
        }
      }),
        (t.flatten = c),
        (t.templateSourceUrl = function (e, t, n) {
          let r
          return (
            (r = n.isInline
              ? t.type.reference instanceof fj.StaticSymbol
                ? `${t.type.reference.filePath}.${t.type.reference.name}.html`
                : `${u(e)}/${u(t.type)}.html`
              : n.templateUrl),
            t.type.reference instanceof fj.StaticSymbol ? r : l(r)
          )
        }),
        (t.sharedStylesheetJitUrl = function (e, t) {
          const n = e.moduleUrl.split(/\/\\/g)
          return l(`css/${t}${n[n.length - 1]}.ngstyle.js`)
        }),
        (t.ngModuleJitUrl = function (e) {
          return l(`${u(e.type)}/module.ngfactory.js`)
        }),
        (t.templateJitUrl = function (e, t) {
          return l(`${u(e)}/${u(t.type)}.ngfactory.js`)
        })
    }),
    qj = r(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 })
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      class n {
        constructor(e, t, n, r) {
          ;(this.file = e), (this.offset = t), (this.line = n), (this.col = r)
        }
        toString() {
          return null != this.offset
            ? `${this.file.url}@${this.line}:${this.col}`
            : this.file.url
        }
        moveBy(e) {
          const t = this.file.content,
            r = t.length
          let i = this.offset,
            u = this.line,
            o = this.col
          for (; i > 0 && e < 0; ) {
            i--, e++
            if (t.charCodeAt(i) == aj.$LF) {
              u--
              const e = t
                .substr(0, i - 1)
                .lastIndexOf(String.fromCharCode(aj.$LF))
              o = e > 0 ? i - e : i
            } else o--
          }
          for (; i < r && e > 0; ) {
            const n = t.charCodeAt(i)
            i++, e--, n == aj.$LF ? (u++, (o = 0)) : o++
          }
          return new n(this.file, i, u, o)
        }
        getContext(e, t) {
          const n = this.file.content
          let r = this.offset
          if (null != r) {
            r > n.length - 1 && (r = n.length - 1)
            let i = r,
              u = 0,
              o = 0
            for (; u < e && r > 0 && (r--, u++, '\n' != n[r] || ++o != t); );
            for (
              u = 0, o = 0;
              u < e && i < n.length - 1 && (i++, u++, '\n' != n[i] || ++o != t);

            );
            return {
              before: n.substring(r, this.offset),
              after: n.substring(this.offset, i + 1)
            }
          }
          return null
        }
      }
      t.ParseLocation = n
      class r {
        constructor(e, t) {
          ;(this.content = e), (this.url = t)
        }
      }
      t.ParseSourceFile = r
      class i {
        constructor(e, t, n = null) {
          ;(this.start = e), (this.end = t), (this.details = n)
        }
        toString() {
          return this.start.file.content.substring(
            this.start.offset,
            this.end.offset
          )
        }
      }
      var u
      ;(t.ParseSourceSpan = i),
        (t.EMPTY_PARSE_LOCATION = new n(new r('', ''), 0, 0, 0)),
        (t.EMPTY_SOURCE_SPAN = new i(
          t.EMPTY_PARSE_LOCATION,
          t.EMPTY_PARSE_LOCATION
        )),
        (function (e) {
          ;(e[(e.WARNING = 0)] = 'WARNING'), (e[(e.ERROR = 1)] = 'ERROR')
        })((u = t.ParseErrorLevel || (t.ParseErrorLevel = {})))
      ;(t.ParseError = class {
        constructor(e, t, n = u.ERROR) {
          ;(this.span = e), (this.msg = t), (this.level = n)
        }
        contextualMessage() {
          const e = this.span.start.getContext(100, 3)
          return e
            ? `${this.msg} ("${e.before}[${u[this.level]} ->]${e.after}")`
            : this.msg
        }
        toString() {
          const e = this.span.details ? `, ${this.span.details}` : ''
          return `${this.contextualMessage()}: ${this.span.start}${e}`
        }
      }),
        (t.typeSourceSpan = function (e, t) {
          const u = Wj.identifierModuleUrl(t),
            o =
              null != u
                ? `in ${e} ${Wj.identifierName(t)} in ${u}`
                : `in ${e} ${Wj.identifierName(t)}`,
            s = new r('', o)
          return new i(new n(s, -1, -1, -1), new n(s, -1, -1, -1))
        }),
        (t.r3JitTypeSourceSpan = function (e, t, u) {
          const o = new r('', `in ${e} ${t} in ${u}`)
          return new i(new n(o, -1, -1, -1), new n(o, -1, -1, -1))
        })
    })
  const { ParseSourceSpan: Uj } = qj,
    {
      htmlTrim: zj,
      getLeadingAndTrailingHtmlWhitespace: Gj,
      hasHtmlWhitespace: Hj,
      canHaveInterpolation: Jj,
      getNodeCssStyleDisplay: Xj,
      isDanglingSpaceSensitiveNode: Yj,
      isIndentationSensitiveNode: Kj,
      isLeadingSpaceSensitiveNode: Qj,
      isTrailingSpaceSensitiveNode: Zj,
      isWhitespaceSensitiveNode: e_
    } = sj,
    t_ = [
      function (e) {
        e.walk((e) => {
          if (
            'element' === e.type &&
            e.tagDefinition.ignoreFirstLf &&
            e.children.length > 0 &&
            'text' === e.children[0].type &&
            '\n' === e.children[0].value[0]
          ) {
            const [t, ...n] = e.children
            e.setChildren(
              1 === t.value.length
                ? n
                : [t.clone({ value: t.value.slice(1) }), ...n]
            )
          }
        })
      },
      function (e) {
        const t = (e) =>
          'element' === e.type &&
          e.prev &&
          'ieConditionalStartComment' === e.prev.type &&
          e.prev.sourceSpan.end.offset === e.startSourceSpan.start.offset &&
          e.firstChild &&
          'ieConditionalEndComment' === e.firstChild.type &&
          e.firstChild.sourceSpan.start.offset === e.startSourceSpan.end.offset
        e.walk((e) => {
          if (e.children) {
            const n = e.children.map(t)
            if (n.some(Boolean)) {
              const t = []
              for (let r = 0; r < e.children.length; r++) {
                const i = e.children[r]
                if (!n[r + 1])
                  if (n[r]) {
                    const e = i.prev,
                      n = i.firstChild,
                      r = new Uj(e.sourceSpan.start, n.sourceSpan.end),
                      u = new Uj(r.start, i.sourceSpan.end)
                    t.push(
                      i.clone({
                        condition: e.condition,
                        sourceSpan: u,
                        startSourceSpan: r,
                        children: i.children.slice(1)
                      })
                    )
                  } else t.push(i)
              }
              e.setChildren(t)
            }
          }
        })
      },
      function (e) {
        return (function (e, t, n) {
          e.walk((e) => {
            if (e.children) {
              const r = e.children.map(t)
              if (r.some(Boolean)) {
                const t = []
                for (let i = 0; i < e.children.length; i++) {
                  const u = e.children[i]
                  if ('text' !== u.type && !r[i]) {
                    t.push(u)
                    continue
                  }
                  const o =
                    'text' === u.type
                      ? u
                      : u.clone({ type: 'text', value: n(u) })
                  if (0 === t.length || 'text' !== _n(t).type) {
                    t.push(o)
                    continue
                  }
                  const s = t.pop()
                  t.push(
                    s.clone({
                      value: s.value + o.value,
                      sourceSpan: new Uj(s.sourceSpan.start, o.sourceSpan.end)
                    })
                  )
                }
                e.setChildren(t)
              }
            }
          })
        })(
          e,
          (e) => 'cdata' === e.type,
          (e) => `<![CDATA[${e.value}]]>`
        )
      },
      function (e, t) {
        if ('html' === t.parser) return
        const n = /{{(.+?)}}/s
        e.walk((e) => {
          if (!Jj(e)) return
          const t = []
          for (const r of e.children) {
            if ('text' !== r.type) {
              t.push(r)
              continue
            }
            let e = r.sourceSpan.start,
              i = null
            const u = r.value.split(n)
            for (let n = 0; n < u.length; n++, e = i) {
              const r = u[n]
              n % 2 != 0
                ? ((i = e.moveBy(r.length + 4)),
                  t.push({
                    type: 'interpolation',
                    sourceSpan: new Uj(e, i),
                    children:
                      0 === r.length
                        ? []
                        : [
                            {
                              type: 'text',
                              value: r,
                              sourceSpan: new Uj(e.moveBy(2), i.moveBy(-2))
                            }
                          ]
                  }))
                : ((i = e.moveBy(r.length)),
                  r.length > 0 &&
                    t.push({
                      type: 'text',
                      value: r,
                      sourceSpan: new Uj(e, i)
                    }))
            }
          }
          e.setChildren(t)
        })
      },
      function (e) {
        e.walk((e) => {
          if (!e.children) return
          if (
            0 === e.children.length ||
            (1 === e.children.length &&
              'text' === e.children[0].type &&
              0 === zj(e.children[0].value).length)
          )
            return (
              (e.hasDanglingSpaces = e.children.length > 0),
              void (e.children = [])
            )
          const t = e_(e),
            n = Kj(e)
          e.setChildren(
            e.children
              .flatMap((e) => {
                if ('text' !== e.type || t) return e
                const n = [],
                  {
                    leadingWhitespace: r,
                    text: i,
                    trailingWhitespace: u
                  } = Gj(e.value)
                return (
                  r && n.push(n_),
                  i &&
                    n.push({
                      type: 'text',
                      value: i,
                      sourceSpan: new Uj(
                        e.sourceSpan.start.moveBy(r.length),
                        e.sourceSpan.end.moveBy(-u.length)
                      )
                    }),
                  u && n.push(n_),
                  n
                )
              })
              .map((e, t, n) => {
                if (e !== n_)
                  return Object.assign(
                    Object.assign({}, e),
                    {},
                    {
                      hasLeadingSpaces: n[t - 1] === n_,
                      hasTrailingSpaces: n[t + 1] === n_
                    }
                  )
              })
              .filter(Boolean)
          ),
            (e.isWhitespaceSensitive = t),
            (e.isIndentationSensitive = n)
        })
      },
      function (e, t) {
        e.walk((e) => Object.assign(e, { cssDisplay: Xj(e, t) }))
      },
      function (e) {
        e.walk((e) =>
          Object.assign(e, {
            isSelfClosing:
              !e.children ||
              ('element' === e.type &&
                (e.tagDefinition.isVoid ||
                  e.startSourceSpan === e.endSourceSpan))
          })
        )
      },
      function (e, t) {
        e.walk((e) =>
          'element' !== e.type
            ? e
            : Object.assign(e, {
                hasHtmComponentClosingTag:
                  e.endSourceSpan &&
                  /^<\s*\/\s*\/\s*>$/.test(
                    t.originalText.slice(
                      e.endSourceSpan.start.offset,
                      e.endSourceSpan.end.offset
                    )
                  )
              })
        )
      },
      function (e, t) {
        e.walk((e) => {
          e.children &&
            (0 !== e.children.length
              ? e.setChildren(
                  e.children
                    .map((e) =>
                      Object.assign(
                        Object.assign({}, e),
                        {},
                        {
                          isLeadingSpaceSensitive: Qj(e, t),
                          isTrailingSpaceSensitive: Zj(e, t)
                        }
                      )
                    )
                    .map((e, t, n) =>
                      Object.assign(
                        Object.assign({}, e),
                        {},
                        {
                          isLeadingSpaceSensitive:
                            (0 === t || n[t - 1].isTrailingSpaceSensitive) &&
                            e.isLeadingSpaceSensitive,
                          isTrailingSpaceSensitive:
                            (t === n.length - 1 ||
                              n[t + 1].isLeadingSpaceSensitive) &&
                            e.isTrailingSpaceSensitive
                        }
                      )
                    )
                )
              : (e.isDanglingSpaceSensitive = Yj(e)))
        })
      },
      function (e) {
        const t = (e) =>
          'element' === e.type &&
          0 === e.attrs.length &&
          1 === e.children.length &&
          'text' === e.firstChild.type &&
          !Hj(e.children[0].value) &&
          !e.firstChild.hasLeadingSpaces &&
          !e.firstChild.hasTrailingSpaces &&
          e.isLeadingSpaceSensitive &&
          !e.hasLeadingSpaces &&
          e.isTrailingSpaceSensitive &&
          !e.hasTrailingSpaces &&
          e.prev &&
          'text' === e.prev.type &&
          e.next &&
          'text' === e.next.type
        e.walk((e) => {
          if (e.children) {
            const n = e.children.map(t)
            if (n.some(Boolean)) {
              const t = []
              for (let r = 0; r < e.children.length; r++) {
                const i = e.children[r]
                if (n[r]) {
                  const n = t.pop(),
                    u = e.children[++r],
                    { isTrailingSpaceSensitive: o, hasTrailingSpaces: s } = u
                  t.push(
                    n.clone({
                      value:
                        n.value +
                        `<${i.rawName}>` +
                        i.firstChild.value +
                        `</${i.rawName}>` +
                        u.value,
                      sourceSpan: new Uj(n.sourceSpan.start, u.sourceSpan.end),
                      isTrailingSpaceSensitive: o,
                      hasTrailingSpaces: s
                    })
                  )
                } else t.push(i)
              }
              e.setChildren(t)
            }
          }
        })
      }
    ]
  const n_ = { type: 'whitespace' }
  var r_ = function (e, t) {
    const n = e.map((e) => e)
    for (const e of t_) e(n, t)
    return n
  }
  var i_ = {
    hasPragma: function (e) {
      return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(e)
    },
    insertPragma: function (e) {
      return '\x3c!-- @format --\x3e\n\n' + e.replace(/^\s*\n/, '')
    }
  }
  var u_ = {
    locStart: function (e) {
      return e.sourceSpan.start.offset
    },
    locEnd: function (e) {
      return e.sourceSpan.end.offset
    }
  }
  const { isNonEmptyArray: o_ } = Fi,
    {
      builders: { indent: s_, join: a_, line: c_, softline: l_ },
      utils: { replaceTextEndOfLine: p_ }
    } = su,
    { locStart: f_, locEnd: d_ } = u_,
    {
      isTextLikeNode: h_,
      getLastDescendant: g_,
      isPreLikeNode: m_,
      hasPrettierIgnore: y_,
      shouldPreserveContent: D_
    } = sj
  function E_(e, t) {
    return e.lastChild && T_(e.lastChild) ? '' : [b_(e, t), v_(e, t)]
  }
  function C_(e, t) {
    return (e.next ? S_(e.next) : w_(e.parent)) ? '' : [F_(e, t), A_(e, t)]
  }
  function b_(e, t) {
    return w_(e) ? F_(e.lastChild, t) : ''
  }
  function A_(e, t) {
    return T_(e) ? v_(e.parent, t) : B_(e) ? L_(e.next) : ''
  }
  function v_(e, t) {
    if ((Ff(!e.isSelfClosing), x_(e, t))) return ''
    switch (e.type) {
      case 'ieConditionalComment':
        return '<!'
      case 'element':
        if (e.hasHtmComponentClosingTag) return '<//'
      default:
        return `</${e.rawName}`
    }
  }
  function F_(e, t) {
    if (x_(e, t)) return ''
    switch (e.type) {
      case 'ieConditionalComment':
      case 'ieConditionalEndComment':
        return '[endif]--\x3e'
      case 'ieConditionalStartComment':
        return ']>\x3c!--\x3e'
      case 'interpolation':
        return '}}'
      case 'element':
        if (e.isSelfClosing) return '/>'
      default:
        return '>'
    }
  }
  function x_(e, t) {
    return !e.isSelfClosing && !e.endSourceSpan && (y_(e) || D_(e.parent, t))
  }
  function S_(e) {
    return (
      e.prev &&
      'docType' !== e.prev.type &&
      !h_(e.prev) &&
      e.isLeadingSpaceSensitive &&
      !e.hasLeadingSpaces
    )
  }
  function w_(e) {
    return (
      e.lastChild &&
      e.lastChild.isTrailingSpaceSensitive &&
      !e.lastChild.hasTrailingSpaces &&
      !h_(g_(e.lastChild)) &&
      !m_(e)
    )
  }
  function T_(e) {
    return (
      !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && h_(g_(e))
    )
  }
  function B_(e) {
    return (
      e.next &&
      !h_(e.next) &&
      h_(e) &&
      e.isTrailingSpaceSensitive &&
      !e.hasTrailingSpaces
    )
  }
  function N_(e) {
    return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces
  }
  function k_(e, t, n) {
    const r = e.getValue()
    if (!o_(r.attrs)) return r.isSelfClosing ? ' ' : ''
    const i =
        r.prev &&
        'comment' === r.prev.type &&
        (function (e) {
          const t = e.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s)
          return !!t && (!t[1] || t[1].split(/\s+/))
        })(r.prev.value),
      u =
        'boolean' == typeof i
          ? () => i
          : Array.isArray(i)
          ? (e) => i.includes(e.rawName)
          : () => !1,
      o = e.map((e) => {
        const r = e.getValue()
        return u(r) ? p_(t.originalText.slice(f_(r), d_(r))) : n()
      }, 'attrs'),
      s =
        'element' === r.type &&
        'script' === r.fullName &&
        1 === r.attrs.length &&
        'src' === r.attrs[0].fullName &&
        0 === r.children.length,
      a = [s_([s ? ' ' : c_, a_(c_, o)])]
    return (
      (r.firstChild && N_(r.firstChild)) ||
      (r.isSelfClosing && w_(r.parent)) ||
      s
        ? a.push(r.isSelfClosing ? ' ' : '')
        : a.push(
            t.bracketSameLine
              ? r.isSelfClosing
                ? ' '
                : ''
              : r.isSelfClosing
              ? c_
              : l_
          ),
      a
    )
  }
  function P_(e) {
    return e.firstChild && N_(e.firstChild) ? '' : j_(e)
  }
  function O_(e, t) {
    return e.prev && B_(e.prev) ? '' : [I_(e, t), L_(e)]
  }
  function I_(e, t) {
    return N_(e) ? j_(e.parent) : S_(e) ? F_(e.prev, t) : ''
  }
  function L_(e) {
    switch (e.type) {
      case 'ieConditionalComment':
      case 'ieConditionalStartComment':
        return `\x3c!--[if ${e.condition}`
      case 'ieConditionalEndComment':
        return '\x3c!--<!'
      case 'interpolation':
        return '{{'
      case 'docType':
        return '<!DOCTYPE'
      case 'element':
        if (e.condition)
          return `\x3c!--[if ${e.condition}]>\x3c!--\x3e<${e.rawName}`
      default:
        return `<${e.rawName}`
    }
  }
  function j_(e) {
    switch ((Ff(!e.isSelfClosing), e.type)) {
      case 'ieConditionalComment':
        return ']>'
      case 'element':
        if (e.condition) return '>\x3c!--<![endif]--\x3e'
      default:
        return '>'
    }
  }
  var __ = {
      printClosingTag: function (e, t) {
        return [e.isSelfClosing ? '' : E_(e, t), C_(e, t)]
      },
      printClosingTagStart: E_,
      printClosingTagStartMarker: v_,
      printClosingTagEndMarker: F_,
      printClosingTagSuffix: A_,
      printClosingTagEnd: C_,
      needsToBorrowLastChildClosingTagEndMarker: w_,
      needsToBorrowParentClosingTagStartMarker: T_,
      needsToBorrowPrevClosingTagEndMarker: S_,
      printOpeningTag: function (e, t, n) {
        const r = e.getValue()
        return [O_(r, t), k_(e, t, n), r.isSelfClosing ? '' : P_(r)]
      },
      printOpeningTagStart: O_,
      printOpeningTagPrefix: I_,
      printOpeningTagStartMarker: L_,
      printOpeningTagEndMarker: j_,
      needsToBorrowNextOpeningTagStartMarker: B_,
      needsToBorrowParentOpeningTagEndMarker: N_
    },
    M_ = r(function (e) {
      var n, r
      ;(n = t),
        (r = function () {
          return function (e, t) {
            var n = (t && t.logger) || console
            function r(e) {
              return (
                ' ' === e ||
                '\t' === e ||
                '\n' === e ||
                '\f' === e ||
                '\r' === e
              )
            }
            function i(t) {
              var n,
                r = t.exec(e.substring(y))
              if (r) return (n = r[0]), (y += n.length), n
            }
            for (
              var u,
                o,
                s,
                a,
                c,
                l = e.length,
                p = /^[ \t\n\r\u000c]+/,
                f = /^[, \t\n\r\u000c]+/,
                d = /^[^ \t\n\r\u000c]+/,
                h = /[,]+$/,
                g = /^\d+$/,
                m = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
                y = 0,
                D = [];
              ;

            ) {
              if ((i(f), y >= l)) return D
              ;(u = i(d)),
                (o = []),
                ',' === u.slice(-1) ? ((u = u.replace(h, '')), C()) : E()
            }
            function E() {
              for (i(p), s = '', a = 'in descriptor'; ; ) {
                if (((c = e.charAt(y)), 'in descriptor' === a))
                  if (r(c)) s && (o.push(s), (s = ''), (a = 'after descriptor'))
                  else {
                    if (',' === c) return (y += 1), s && o.push(s), void C()
                    if ('(' === c) (s += c), (a = 'in parens')
                    else {
                      if ('' === c) return s && o.push(s), void C()
                      s += c
                    }
                  }
                else if ('in parens' === a)
                  if (')' === c) (s += c), (a = 'in descriptor')
                  else {
                    if ('' === c) return o.push(s), void C()
                    s += c
                  }
                else if ('after descriptor' === a)
                  if (r(c));
                  else {
                    if ('' === c) return void C()
                    ;(a = 'in descriptor'), (y -= 1)
                  }
                y += 1
              }
            }
            function C() {
              var t,
                r,
                i,
                s,
                a,
                c,
                l,
                p,
                f,
                d = !1,
                h = {}
              for (s = 0; s < o.length; s++)
                (c = (a = o[s])[a.length - 1]),
                  (l = a.substring(0, a.length - 1)),
                  (p = parseInt(l, 10)),
                  (f = parseFloat(l)),
                  g.test(l) && 'w' === c
                    ? ((t || r) && (d = !0), 0 === p ? (d = !0) : (t = p))
                    : m.test(l) && 'x' === c
                    ? ((t || r || i) && (d = !0), f < 0 ? (d = !0) : (r = f))
                    : g.test(l) && 'h' === c
                    ? ((i || r) && (d = !0), 0 === p ? (d = !0) : (i = p))
                    : (d = !0)
              d
                ? n &&
                  n.error &&
                  n.error(
                    "Invalid srcset descriptor found in '" +
                      e +
                      "' at '" +
                      a +
                      "'."
                  )
                : ((h.url = u),
                  t && (h.w = t),
                  r && (h.d = r),
                  i && (h.h = i),
                  D.push(h))
            }
          }
        }),
        e.exports ? (e.exports = r()) : (n.parseSrcset = r())
    })
  const {
    builders: {
      group: R_,
      ifBreak: $_,
      indent: V_,
      join: W_,
      line: q_,
      softline: U_
    }
  } = su
  const z_ = [':', '__', '--', '_', '-']
  function G_(e) {
    const t = e.search(/[^_-]/)
    if (-1 !== t)
      for (const n of z_) {
        const r = e.indexOf(n, t)
        if (-1 !== r) return e.slice(0, r)
      }
    return e
  }
  var H_ = {
    printImgSrcset: function (e) {
      const t = M_(e, {
          logger: {
            error(e) {
              throw new Error(e)
            }
          }
        }),
        n = t.some(({ w: e }) => e),
        r = t.some(({ h: e }) => e)
      if (n + r + t.some(({ d: e }) => e) > 1)
        throw new Error('Mixed descriptor in srcset is not supported')
      const i = n ? 'w' : r ? 'h' : 'd',
        u = n ? 'w' : r ? 'h' : 'x',
        o = (e) => Math.max(...e),
        s = t.map((e) => e.url),
        a = o(s.map((e) => e.length)),
        c = t.map((e) => e[i]).map((e) => (e ? e.toString() : '')),
        l = c.map((e) => {
          const t = e.indexOf('.')
          return -1 === t ? e.length : t
        }),
        p = o(l)
      return W_(
        [',', q_],
        s.map((e, t) => {
          const n = [e],
            r = c[t]
          if (r) {
            const i = a - e.length + 1,
              o = p - l[t],
              s = ' '.repeat(i + o)
            n.push($_(s, ' '), r + u)
          }
          return n
        })
      )
    },
    printClassNames: function (e) {
      const t = e.trim().split(/\s+/),
        n = []
      let r
      for (let e = 0; e < t.length; e++) {
        const i = G_(t[e])
        i !== r && i !== t[e - 1] && n.push([]), _n(n).push(t[e]), (r = i)
      }
      return [
        V_([
          U_,
          W_(
            q_,
            n.map((e) => R_(W_(q_, e)))
          )
        ]),
        U_
      ]
    }
  }
  const {
    builders: { group: J_ }
  } = su
  var X_ = {
    isVueEventBindingExpression: function (e) {
      const t = e.trim()
      return (
        /^(?:[\w$]+|\([^)]*?\))\s*=>|^function\s*\(/.test(t) ||
        /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/.test(
          t
        )
      )
    },
    printVueFor: function (e, t) {
      const {
        left: n,
        operator: r,
        right: i
      } = (function (e) {
        const t = /(.*?)\s+(in|of)\s+(.*)/s,
          n = /,([^,\]}]*)(?:,([^,\]}]*))?$/,
          r = /^\(|\)$/g,
          i = e.match(t)
        if (!i) return
        const u = {}
        u.for = i[3].trim()
        const o = i[1].trim().replace(r, ''),
          s = o.match(n)
        s
          ? ((u.alias = o.replace(n, '')),
            (u.iterator1 = s[1].trim()),
            s[2] && (u.iterator2 = s[2].trim()))
          : (u.alias = o)
        return {
          left: `${[u.alias, u.iterator1, u.iterator2]
            .filter(Boolean)
            .join(',')}`,
          operator: i[2],
          right: u.for
        }
      })(e)
      return [
        J_(
          t(`function _(${n}) {}`, {
            parser: 'babel',
            __isVueForBindingLeft: !0
          })
        ),
        ' ',
        r,
        ' ',
        t(i, { parser: '__js_expression' }, { stripTrailingHardline: !0 })
      ]
    },
    printVueBindings: function (e, t) {
      return t(`function _(${e}) {}`, { parser: 'babel', __isVueBindings: !0 })
    }
  }
  const {
    needsToBorrowParentClosingTagStartMarker: Y_,
    printClosingTagStartMarker: K_,
    needsToBorrowLastChildClosingTagEndMarker: Q_,
    printClosingTagEndMarker: Z_,
    needsToBorrowParentOpeningTagEndMarker: eM,
    printOpeningTagEndMarker: tM
  } = __
  var nM = function (e, t) {
    let n = e.startSourceSpan.end.offset
    e.firstChild && eM(e.firstChild) && (n -= tM(e).length)
    let r = e.endSourceSpan.start.offset
    return (
      e.lastChild && Y_(e.lastChild)
        ? (r += K_(e, t).length)
        : Q_(e) && (r -= Z_(e.lastChild, t).length),
      t.originalText.slice(n, r)
    )
  }
  const {
      builders: {
        breakParent: rM,
        group: iM,
        hardline: uM,
        indent: oM,
        line: sM,
        fill: aM,
        softline: cM
      },
      utils: { mapDoc: lM, replaceTextEndOfLine: pM }
    } = su,
    {
      printClosingTag: fM,
      printClosingTagSuffix: dM,
      needsToBorrowPrevClosingTagEndMarker: hM,
      printOpeningTagPrefix: gM,
      printOpeningTag: mM
    } = __,
    { printImgSrcset: yM, printClassNames: DM } = H_,
    {
      printVueFor: EM,
      printVueBindings: CM,
      isVueEventBindingExpression: bM
    } = X_,
    {
      isScriptLikeTag: AM,
      isVueNonHtmlBlock: vM,
      inferScriptParser: FM,
      htmlTrimPreserveIndentation: xM,
      dedentString: SM,
      unescapeQuoteEntities: wM,
      isVueSlotAttribute: TM,
      isVueSfcBindingsAttribute: BM,
      getTextValueParts: NM
    } = sj
  function kM(e, t, n) {
    const r = (t) => new RegExp(t.join('|')).test(e.fullName),
      i = () => wM(e.value)
    let u = !1
    const o = (e, t) => {
        const n =
          'NGRoot' === e.type
            ? 'NGMicrosyntax' === e.node.type &&
              1 === e.node.body.length &&
              'NGMicrosyntaxExpression' === e.node.body[0].type
              ? e.node.body[0].expression
              : e.node
            : 'JsExpressionRoot' === e.type
            ? e.node
            : e
        !n ||
          ('ObjectExpression' !== n.type &&
            'ArrayExpression' !== n.type &&
            ('__vue_expression' !== t.parser ||
              ('TemplateLiteral' !== n.type && 'StringLiteral' !== n.type))) ||
          (u = !0)
      },
      s = (e, t = !0) => iM([oM([cM, e]), t ? cM : '']),
      a = (e) => (u ? ((e) => iM(e))(e) : s(e)),
      c = (e, n) =>
        t(
          e,
          Object.assign({ __onHtmlBindingRoot: o, __embeddedInHtml: !0 }, n),
          { stripTrailingHardline: !0 }
        )
    if (
      'srcset' === e.fullName &&
      ('img' === e.parent.fullName || 'source' === e.parent.fullName)
    )
      return s(yM(i()))
    if ('class' === e.fullName && !n.parentParser) {
      const e = i()
      if (!e.includes('{{')) return DM(e)
    }
    if ('style' === e.fullName && !n.parentParser) {
      const e = i()
      if (!e.includes('{{'))
        return s(c(e, { parser: 'css', __isHTMLStyleAttribute: !0 }))
    }
    if ('vue' === n.parser) {
      if ('v-for' === e.fullName) return EM(i(), c)
      if (TM(e) || BM(e, n)) return CM(i(), c)
      const t = ['^:', '^v-bind:'],
        u = ['^v-']
      if (r(['^@', '^v-on:'])) {
        const e = i()
        return a(
          c(e, { parser: bM(e) ? '__js_expression' : '__vue_event_binding' })
        )
      }
      if (r(t)) return a(c(i(), { parser: '__vue_expression' }))
      if (r(u)) return a(c(i(), { parser: '__js_expression' }))
    }
    if ('angular' === n.parser) {
      const t = (e, t) =>
          c(
            e,
            Object.assign(Object.assign({}, t), {}, { trailingComma: 'none' })
          ),
        n = ['^\\*'],
        u = ['^\\[.+\\]$', '^bind(on)?-', '^ng-(if|show|hide|class|style)$'],
        o = ['^i18n(-.+)?$']
      if (r(['^\\(.+\\)$', '^on-'])) return a(t(i(), { parser: '__ng_action' }))
      if (r(u)) return a(t(i(), { parser: '__ng_binding' }))
      if (r(o)) {
        const t = i().trim()
        return s(aM(NM(e, t)), !t.includes('@@'))
      }
      if (r(n)) return a(t(i(), { parser: '__ng_directive' }))
      const l = /{{(.+?)}}/s,
        p = i()
      if (l.test(p)) {
        const e = []
        for (const [n, r] of p.split(l).entries())
          if (n % 2 == 0) e.push(pM(r))
          else
            try {
              e.push(
                iM([
                  '{{',
                  oM([
                    sM,
                    t(r, {
                      parser: '__ng_interpolation',
                      __isInHtmlInterpolation: !0
                    })
                  ]),
                  sM,
                  '}}'
                ])
              )
            } catch {
              e.push('{{', pM(r), '}}')
            }
        return iM(e)
      }
    }
    return null
  }
  var PM = function (e, t, n, r) {
    const i = e.getValue()
    switch (i.type) {
      case 'element':
        if (AM(i) || 'interpolation' === i.type) return
        if (!i.isSelfClosing && vM(i, r)) {
          const u = FM(i, r)
          if (!u) return
          const o = nM(i, r)
          let s = /^\s*$/.test(o),
            a = ''
          return (
            s ||
              ((a = n(
                xM(o),
                { parser: u, __embeddedInHtml: !0 },
                { stripTrailingHardline: !0 }
              )),
              (s = '' === a)),
            [
              gM(i, r),
              iM(mM(e, r, t)),
              s ? '' : uM,
              a,
              s ? '' : uM,
              fM(i, r),
              dM(i, r)
            ]
          )
        }
        break
      case 'text':
        if (AM(i.parent)) {
          const e = FM(i.parent)
          if (e) {
            const t =
                'markdown' === e
                  ? SM(i.value.replace(/^[^\S\n]*?\n/, ''))
                  : i.value,
              u = { parser: e, __embeddedInHtml: !0 }
            if ('html' === r.parser && 'babel' === e) {
              let e = 'script'
              const { attrMap: t } = i.parent
              t &&
                ('module' === t.type ||
                  ('text/babel' === t.type && 'module' === t['data-type'])) &&
                (e = 'module'),
                (u.__babelSourceType = e)
            }
            return [
              rM,
              gM(i, r),
              n(t, u, { stripTrailingHardline: !0 }),
              dM(i, r)
            ]
          }
        } else if ('interpolation' === i.parent.type) {
          const e = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 }
          return (
            'angular' === r.parser
              ? ((e.parser = '__ng_interpolation'), (e.trailingComma = 'none'))
              : 'vue' === r.parser
              ? (e.parser = '__vue_expression')
              : (e.parser = '__js_expression'),
            [
              oM([sM, n(i.value, e, { stripTrailingHardline: !0 })]),
              i.parent.next && hM(i.parent.next) ? ' ' : sM
            ]
          )
        }
        break
      case 'attribute': {
        if (!i.value) break
        if (
          /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(
            r.originalText.slice(
              i.valueSpan.start.offset,
              i.valueSpan.end.offset
            )
          )
        )
          return [i.rawName, '=', i.value]
        if ('lwc' === r.parser) {
          if (
            /^{.*}$/s.test(
              r.originalText.slice(
                i.valueSpan.start.offset,
                i.valueSpan.end.offset
              )
            )
          )
            return [i.rawName, '=', i.value]
        }
        const e = kM(
          i,
          (e, t) =>
            n(
              e,
              Object.assign(
                { __isInHtmlAttribute: !0, __embeddedInHtml: !0 },
                t
              ),
              { stripTrailingHardline: !0 }
            ),
          r
        )
        if (e)
          return [
            i.rawName,
            '="',
            iM(
              lM(e, (e) =>
                'string' == typeof e ? e.replace(/"/g, '&quot;') : e
              )
            ),
            '"'
          ]
        break
      }
      case 'front-matter':
        return dN(i, n)
    }
  }
  const {
      builders: {
        breakParent: OM,
        group: IM,
        ifBreak: LM,
        line: jM,
        softline: _M,
        hardline: MM
      },
      utils: { replaceTextEndOfLine: RM }
    } = su,
    { locStart: $M, locEnd: VM } = u_,
    {
      forceBreakChildren: WM,
      forceNextEmptyLine: qM,
      isTextLikeNode: UM,
      hasPrettierIgnore: zM,
      preferHardlineAsLeadingSpaces: GM
    } = sj,
    {
      printOpeningTagPrefix: HM,
      needsToBorrowNextOpeningTagStartMarker: JM,
      printOpeningTagStartMarker: XM,
      needsToBorrowPrevClosingTagEndMarker: YM,
      printClosingTagEndMarker: KM,
      printClosingTagSuffix: QM,
      needsToBorrowParentClosingTagStartMarker: ZM
    } = __
  function eR(e, t, n) {
    const r = e.getValue()
    return zM(r)
      ? [
          HM(r, t),
          ...RM(
            t.originalText.slice(
              $M(r) + (r.prev && JM(r.prev) ? XM(r).length : 0),
              VM(r) - (r.next && YM(r.next) ? KM(r, t).length : 0)
            )
          ),
          QM(r, t)
        ]
      : n()
  }
  function tR(e, t) {
    return UM(e) && UM(t)
      ? e.isTrailingSpaceSensitive
        ? e.hasTrailingSpaces
          ? GM(t)
            ? MM
            : jM
          : ''
        : GM(t)
        ? MM
        : _M
      : (JM(e) &&
          (zM(t) ||
            t.firstChild ||
            t.isSelfClosing ||
            ('element' === t.type && t.attrs.length > 0))) ||
        ('element' === e.type && e.isSelfClosing && YM(t))
      ? ''
      : !t.isLeadingSpaceSensitive ||
        GM(t) ||
        (YM(t) &&
          e.lastChild &&
          ZM(e.lastChild) &&
          e.lastChild.lastChild &&
          ZM(e.lastChild.lastChild))
      ? MM
      : t.hasLeadingSpaces
      ? jM
      : _M
  }
  var nR = {
    printChildren: function (e, t, n) {
      const r = e.getValue()
      if (WM(r))
        return [
          OM,
          ...e.map((e) => {
            const r = e.getValue(),
              i = r.prev ? tR(r.prev, r) : ''
            return [i ? [i, qM(r.prev) ? MM : ''] : '', eR(e, t, n)]
          }, 'children')
        ]
      const i = r.children.map(() => Symbol(''))
      return e.map((e, r) => {
        const u = e.getValue()
        if (UM(u)) {
          if (u.prev && UM(u.prev)) {
            const r = tR(u.prev, u)
            if (r) return qM(u.prev) ? [MM, MM, eR(e, t, n)] : [r, eR(e, t, n)]
          }
          return eR(e, t, n)
        }
        const o = [],
          s = [],
          a = [],
          c = [],
          l = u.prev ? tR(u.prev, u) : '',
          p = u.next ? tR(u, u.next) : ''
        return (
          l &&
            (qM(u.prev)
              ? o.push(MM, MM)
              : l === MM
              ? o.push(MM)
              : UM(u.prev)
              ? s.push(l)
              : s.push(LM('', _M, { groupId: i[r - 1] }))),
          p &&
            (qM(u)
              ? UM(u.next) && c.push(MM, MM)
              : p === MM
              ? UM(u.next) && c.push(MM)
              : a.push(p)),
          [...o, IM([...s, IM([eR(e, t, n), ...a], { id: i[r] })]), ...c]
        )
      }, 'children')
    }
  }
  const {
      builders: {
        breakParent: rR,
        dedentToRoot: iR,
        group: uR,
        ifBreak: oR,
        indentIfBreak: sR,
        indent: aR,
        line: cR,
        softline: lR
      },
      utils: { replaceTextEndOfLine: pR }
    } = su,
    {
      shouldPreserveContent: fR,
      isScriptLikeTag: dR,
      isVueCustomBlock: hR,
      countParents: gR,
      forceBreakContent: mR
    } = sj,
    {
      printOpeningTagPrefix: yR,
      printOpeningTag: DR,
      printClosingTagSuffix: ER,
      printClosingTag: CR,
      needsToBorrowPrevClosingTagEndMarker: bR,
      needsToBorrowLastChildClosingTagEndMarker: AR
    } = __,
    { printChildren: vR } = nR
  var FR = {
    printElement: function (e, t, n) {
      const r = e.getValue()
      if (fR(r, t))
        return [
          yR(r, t),
          uR(DR(e, t, n)),
          ...pR(nM(r, t)),
          ...CR(r, t),
          ER(r, t)
        ]
      const i =
          1 === r.children.length &&
          'interpolation' === r.firstChild.type &&
          r.firstChild.isLeadingSpaceSensitive &&
          !r.firstChild.hasLeadingSpaces &&
          r.lastChild.isTrailingSpaceSensitive &&
          !r.lastChild.hasTrailingSpaces,
        u = Symbol('element-attr-group-id'),
        o = (i) => uR([uR(DR(e, t, n), { id: u }), i, CR(r, t)])
      return 0 === r.children.length
        ? o(r.hasDanglingSpaces && r.isDanglingSpaceSensitive ? cR : '')
        : o([
            mR(r) ? rR : '',
            ((s = [
              i
                ? oR(lR, '', { groupId: u })
                : r.firstChild.hasLeadingSpaces &&
                  r.firstChild.isLeadingSpaceSensitive
                ? cR
                : 'text' === r.firstChild.type &&
                  r.isWhitespaceSensitive &&
                  r.isIndentationSensitive
                ? iR(lR)
                : lR,
              vR(e, t, n)
            ]),
            i
              ? sR(s, { groupId: u })
              : (!dR(r) && !hR(r, t)) ||
                'root' !== r.parent.type ||
                'vue' !== t.parser ||
                t.vueIndentScriptAndStyle
              ? aR(s)
              : s),
            (r.next ? bR(r.next) : AR(r.parent))
              ? r.lastChild.hasTrailingSpaces &&
                r.lastChild.isTrailingSpaceSensitive
                ? ' '
                : ''
              : i
              ? oR(lR, '', { groupId: u })
              : r.lastChild.hasTrailingSpaces &&
                r.lastChild.isTrailingSpaceSensitive
              ? cR
              : ('comment' === r.lastChild.type ||
                  ('text' === r.lastChild.type &&
                    r.isWhitespaceSensitive &&
                    r.isIndentationSensitive)) &&
                new RegExp(
                  `\\n[\\t ]{${
                    t.tabWidth *
                    gR(e, (e) => e.parent && 'root' !== e.parent.type)
                  }}$`
                ).test(r.lastChild.value)
              ? ''
              : lR
          ])
      var s
    }
  }
  const {
      builders: { fill: xR, group: SR, hardline: wR, literalline: TR },
      utils: {
        cleanDoc: BR,
        getDocParts: NR,
        isConcat: kR,
        replaceTextEndOfLine: PR
      }
    } = su,
    { countChars: OR, unescapeQuoteEntities: IR, getTextValueParts: LR } = sj,
    { insertPragma: jR } = i_,
    { locStart: _R, locEnd: MR } = u_,
    {
      printClosingTagSuffix: RR,
      printClosingTagEnd: $R,
      printOpeningTagPrefix: VR,
      printOpeningTagStart: WR
    } = __,
    { printElement: qR } = FR,
    { printChildren: UR } = nR
  var zR = {
    preprocess: r_,
    print: function (e, t, n) {
      const r = e.getValue()
      switch (r.type) {
        case 'front-matter':
          return PR(r.raw)
        case 'root':
          return t.__onHtmlRoot && t.__onHtmlRoot(r), [SR(UR(e, t, n)), wR]
        case 'element':
        case 'ieConditionalComment':
          return qR(e, t, n)
        case 'ieConditionalStartComment':
        case 'ieConditionalEndComment':
          return [WR(r), $R(r)]
        case 'interpolation':
          return [WR(r, t), ...e.map(n, 'children'), $R(r, t)]
        case 'text': {
          if ('interpolation' === r.parent.type) {
            const e = /\n[^\S\n]*?$/,
              t = e.test(r.value),
              n = t ? r.value.replace(e, '') : r.value
            return [...PR(n), t ? wR : '']
          }
          const e = BR([VR(r, t), ...LR(r), RR(r, t)])
          return kR(e) || 'fill' === e.type ? xR(NR(e)) : e
        }
        case 'docType':
          return [
            SR([
              WR(r, t),
              ' ',
              r.value.replace(/^html\b/i, 'html').replace(/\s+/g, ' ')
            ]),
            $R(r, t)
          ]
        case 'comment':
          return [
            VR(r, t),
            ...PR(t.originalText.slice(_R(r), MR(r)), TR),
            RR(r, t)
          ]
        case 'attribute': {
          if (null === r.value) return r.rawName
          const e = IR(r.value),
            t = OR(e, "'") < OR(e, '"') ? "'" : '"'
          return [
            r.rawName,
            '=',
            t,
            ...PR(
              '"' === t ? e.replace(/"/g, '&quot;') : e.replace(/'/g, '&apos;')
            ),
            t
          ]
        }
        default:
          throw new Error(`Unexpected node type ${r.type}`)
      }
    },
    insertPragma: jR,
    massageAstNode: vL,
    embed: PM
  }
  const GR = 'HTML'
  var HR = {
      bracketSameLine: KB.bracketSameLine,
      htmlWhitespaceSensitivity: {
        since: '1.15.0',
        category: GR,
        type: 'choice',
        default: 'css',
        description: 'How to handle whitespaces in HTML.',
        choices: [
          {
            value: 'css',
            description: 'Respect the default value of CSS display property.'
          },
          {
            value: 'strict',
            description: 'Whitespaces are considered sensitive.'
          },
          {
            value: 'ignore',
            description: 'Whitespaces are considered insensitive.'
          }
        ]
      },
      vueIndentScriptAndStyle: {
        since: '1.19.0',
        category: GR,
        type: 'boolean',
        default: !1,
        description: 'Indent script and style tags in Vue files.'
      }
    },
    JR = {
      name: 'HTML',
      type: 'markup',
      tmScope: 'text.html.basic',
      aceMode: 'html',
      codemirrorMode: 'htmlmixed',
      codemirrorMimeType: 'text/html',
      color: '#e34c26',
      aliases: ['xhtml'],
      extensions: ['.html', '.htm', '.html.hl', '.inc', '.xht', '.xhtml'],
      languageId: 146
    },
    XR = {
      name: 'Vue',
      type: 'markup',
      color: '#41b883',
      extensions: ['.vue'],
      tmScope: 'text.html.vue',
      aceMode: 'html',
      languageId: 391
    }
  var YR = {
    languages: [
      rh(JR, () => ({
        name: 'Angular',
        since: '1.15.0',
        parsers: ['angular'],
        vscodeLanguageIds: ['html'],
        extensions: ['.component.html'],
        filenames: []
      })),
      rh(JR, (e) => ({
        since: '1.15.0',
        parsers: ['html'],
        vscodeLanguageIds: ['html'],
        extensions: [...e.extensions, '.mjml']
      })),
      rh(JR, () => ({
        name: 'Lightning Web Components',
        since: '1.17.0',
        parsers: ['lwc'],
        vscodeLanguageIds: ['html'],
        extensions: [],
        filenames: []
      })),
      rh(XR, () => ({
        since: '1.10.0',
        parsers: ['vue'],
        vscodeLanguageIds: ['vue']
      }))
    ],
    printers: { html: zR },
    options: HR,
    parsers: undefined
  }
  var KR = {
    isPragma: function (e) {
      return /^\s*@(?:prettier|format)\s*$/.test(e)
    },
    hasPragma: function (e) {
      return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/.test(e)
    },
    insertPragma: function (e) {
      return `# @format\n\n${e}`
    }
  }
  var QR = {
    locStart: function (e) {
      return e.position.start.offset
    },
    locEnd: function (e) {
      return e.position.end.offset
    }
  }
  var ZR = function (e, t, n, r) {
    if (
      'root' === e.getValue().type &&
      r.filepath &&
      /(?:[/\\]|^)\.(?:prettier|stylelint)rc$/.test(r.filepath)
    )
      return n(
        r.originalText,
        Object.assign(Object.assign({}, r), {}, { parser: 'json' })
      )
  }
  const { getLast: e$, isNonEmptyArray: t$ } = Fi
  function n$(e, t) {
    return e && 'string' == typeof e.type && (!t || t.includes(e.type))
  }
  function r$(e) {
    return 'prettier-ignore' === e.value.trim()
  }
  function i$(e) {
    return e && t$(e.leadingComments)
  }
  function u$(e) {
    return e && t$(e.middleComments)
  }
  function o$(e) {
    return e && e.indicatorComment
  }
  function s$(e) {
    return e && e.trailingComment
  }
  function a$(e) {
    return e && t$(e.endComments)
  }
  function c$(e) {
    const t = []
    let n
    for (const r of e.split(/( +)/))
      ' ' !== r
        ? ' ' === n
          ? t.push(r)
          : t.push((t.pop() || '') + r)
        : void 0 === n && t.unshift(''),
        (n = r)
    return (
      ' ' === n && t.push((t.pop() || '') + ' '),
      '' === t[0] && (t.shift(), t.unshift(' ' + (t.shift() || ''))),
      t
    )
  }
  var l$ = {
    getLast: e$,
    getAncestorCount: function (e, t) {
      let n = 0
      const r = e.stack.length - 1
      for (let i = 0; i < r; i++) {
        const r = e.stack[i]
        n$(r) && t(r) && n++
      }
      return n
    },
    isNode: n$,
    isEmptyNode: function (e) {
      return (
        !t$(e.children) &&
        !(function (e) {
          return i$(e) || u$(e) || o$(e) || s$(e) || a$(e)
        })(e)
      )
    },
    isInlineNode: function (e) {
      if (!e) return !0
      switch (e.type) {
        case 'plain':
        case 'quoteDouble':
        case 'quoteSingle':
        case 'alias':
        case 'flowMapping':
        case 'flowSequence':
          return !0
        default:
          return !1
      }
    },
    mapNode: function e(t, n, r) {
      return n(
        'children' in t
          ? Object.assign(
              Object.assign({}, t),
              {},
              { children: t.children.map((r) => e(r, n, t)) }
            )
          : t,
        r
      )
    },
    defineShortcut: function (e, t, n) {
      Object.defineProperty(e, t, { get: n, enumerable: !1 })
    },
    isNextLineEmpty: function (e, t) {
      let n = 0
      const r = t.length
      for (let i = e.position.end.offset - 1; i < r; i++) {
        const e = t[i]
        if (('\n' === e && n++, 1 === n && /\S/.test(e))) return !1
        if (2 === n) return !0
      }
      return !1
    },
    isLastDescendantNode: function (e) {
      switch (e.getValue().type) {
        case 'tag':
        case 'anchor':
        case 'comment':
          return !1
      }
      const t = e.stack.length
      for (let n = 1; n < t; n++) {
        const t = e.stack[n],
          r = e.stack[n - 1]
        if (Array.isArray(r) && 'number' == typeof t && t !== r.length - 1)
          return !1
      }
      return !0
    },
    getBlockValueLineContents: function (
      e,
      { parentIndent: t, isLastDescendant: n, options: r }
    ) {
      const i =
          e.position.start.line === e.position.end.line
            ? ''
            : r.originalText
                .slice(e.position.start.offset, e.position.end.offset)
                .match(/^[^\n]*?\n(.*)$/s)[1],
        u =
          null === e.indent
            ? ((e) => (e ? e[1].length : Number.POSITIVE_INFINITY))(
                i.match(/^( *)\S/m)
              )
            : e.indent - 1 + t,
        o = i.split('\n').map((e) => e.slice(u))
      return 'preserve' === r.proseWrap || 'blockLiteral' === e.type
        ? s(o.map((e) => (0 === e.length ? [] : [e])))
        : s(
            o
              .map((e) => (0 === e.length ? [] : c$(e)))
              .reduce(
                (e, t, n) =>
                  0 !== n &&
                  o[n - 1].length > 0 &&
                  t.length > 0 &&
                  !/^\s/.test(t[0]) &&
                  !/^\s|\s$/.test(e$(e))
                    ? [...e.slice(0, -1), [...e$(e), ...t]]
                    : [...e, t],
                []
              )
              .map((e) =>
                e.reduce(
                  (e, t) =>
                    e.length > 0 && /\s$/.test(e$(e))
                      ? [...e.slice(0, -1), e$(e) + ' ' + t]
                      : [...e, t],
                  []
                )
              )
              .map((e) => ('never' === r.proseWrap ? [e.join(' ')] : e))
          )
      function s(t) {
        if ('keep' === e.chomping)
          return 0 === e$(t).length ? t.slice(0, -1) : t
        let r = 0
        for (let e = t.length - 1; e >= 0 && 0 === t[e].length; e--) r++
        return 0 === r
          ? t
          : r >= 2 && !n
          ? t.slice(0, -(r - 1))
          : t.slice(0, -r)
      }
    },
    getFlowScalarLineContents: function (e, t, n) {
      const r = t
        .split('\n')
        .map((e, t, n) =>
          0 === t && t === n.length - 1
            ? e
            : 0 !== t && t !== n.length - 1
            ? e.trim()
            : 0 === t
            ? e.trimEnd()
            : e.trimStart()
        )
      return 'preserve' === n.proseWrap
        ? r.map((e) => (0 === e.length ? [] : [e]))
        : r
            .map((e) => (0 === e.length ? [] : c$(e)))
            .reduce(
              (t, n, i) =>
                0 !== i &&
                r[i - 1].length > 0 &&
                n.length > 0 &&
                ('quoteDouble' !== e || !e$(e$(t)).endsWith('\\'))
                  ? [...t.slice(0, -1), [...e$(t), ...n]]
                  : [...t, n],
              []
            )
            .map((e) => ('never' === n.proseWrap ? [e.join(' ')] : e))
    },
    getLastDescendantNode: function e(t) {
      return t$(t.children) ? e(e$(t.children)) : t
    },
    hasPrettierIgnore: function (e) {
      const t = e.getValue()
      if ('documentBody' === t.type) {
        const t = e.getParentNode()
        return a$(t.head) && r$(e$(t.head.endComments))
      }
      return i$(t) && r$(e$(t.leadingComments))
    },
    hasLeadingComments: i$,
    hasMiddleComments: u$,
    hasIndicatorComment: o$,
    hasTrailingComment: s$,
    hasEndComments: a$
  }
  const { defineShortcut: p$, mapNode: f$ } = l$
  function d$(e) {
    switch (e.type) {
      case 'document':
        p$(e, 'head', () => e.children[0]), p$(e, 'body', () => e.children[1])
        break
      case 'documentBody':
      case 'sequenceItem':
      case 'flowSequenceItem':
      case 'mappingKey':
      case 'mappingValue':
        p$(e, 'content', () => e.children[0])
        break
      case 'mappingItem':
      case 'flowMappingItem':
        p$(e, 'key', () => e.children[0]), p$(e, 'value', () => e.children[1])
    }
    return e
  }
  var h$ = function (e) {
    return f$(e, d$)
  }
  const {
      builders: { softline: g$, align: m$ }
    } = su,
    { hasEndComments: y$, isNextLineEmpty: D$, isNode: E$ } = l$,
    C$ = new WeakMap()
  function b$(e) {
    return (
      y$(e) &&
      !E$(e, ['documentHead', 'documentBody', 'flowMapping', 'flowSequence'])
    )
  }
  var A$ = {
    alignWithSpaces: function (e, t) {
      return m$(' '.repeat(e), t)
    },
    shouldPrintEndComments: b$,
    printNextEmptyLine: function (e, t) {
      const n = e.getValue(),
        r = e.stack[0]
      let i
      return (
        C$.has(r) ? (i = C$.get(r)) : ((i = new Set()), C$.set(r, i)),
        i.has(n.position.end.line) ||
        (i.add(n.position.end.line), !D$(n, t) || b$(e.getParentNode()))
          ? ''
          : g$
      )
    }
  }
  const {
      builders: { ifBreak: v$, line: F$, softline: x$, hardline: S$, join: w$ }
    } = su,
    { isEmptyNode: T$, getLast: B$, hasEndComments: N$ } = l$,
    { printNextEmptyLine: k$, alignWithSpaces: P$ } = A$
  function O$(e, t, n) {
    const r = e.getValue(),
      i = 'flowMapping' === r.type,
      u = i ? '{' : '[',
      o = i ? '}' : ']'
    let s = x$
    i && r.children.length > 0 && n.bracketSpacing && (s = F$)
    const a = B$(r.children),
      c = a && 'flowMappingItem' === a.type && T$(a.key) && T$(a.value)
    return [
      u,
      P$(n.tabWidth, [
        s,
        I$(e, t, n),
        'none' === n.trailingComma ? '' : v$(','),
        N$(r) ? [S$, w$(S$, e.map(t, 'endComments'))] : ''
      ]),
      c ? '' : s,
      o
    ]
  }
  function I$(e, t, n) {
    const r = e.getValue()
    return e.map(
      (e, i) => [
        t(),
        i === r.children.length - 1
          ? ''
          : [
              ',',
              F$,
              r.children[i].position.start.line !==
              r.children[i + 1].position.start.line
                ? k$(e, n.originalText)
                : ''
            ]
      ],
      'children'
    )
  }
  var L$ = { printFlowMapping: O$, printFlowSequence: O$ }
  const {
      builders: {
        conditionalGroup: j$,
        group: _$,
        hardline: M$,
        ifBreak: R$,
        join: $$,
        line: V$
      }
    } = su,
    {
      hasLeadingComments: W$,
      hasMiddleComments: q$,
      hasTrailingComment: U$,
      hasEndComments: z$,
      isNode: G$,
      isEmptyNode: H$,
      isInlineNode: J$
    } = l$,
    { alignWithSpaces: X$ } = A$
  function Y$(e, t) {
    if (!e) return !0
    switch (e.type) {
      case 'plain':
      case 'quoteSingle':
      case 'quoteDouble':
        break
      case 'alias':
        return !0
      default:
        return !1
    }
    if ('preserve' === t.proseWrap)
      return e.position.start.line === e.position.end.line
    if (
      /\\$/m.test(
        t.originalText.slice(e.position.start.offset, e.position.end.offset)
      )
    )
      return !1
    switch (t.proseWrap) {
      case 'never':
        return !e.value.includes('\n')
      case 'always':
        return !/[\n ]/.test(e.value)
      default:
        return !1
    }
  }
  var K$ = function (e, t, n, r, i) {
    const { key: u, value: o } = e,
      s = H$(u),
      a = H$(o)
    if (s && a) return ': '
    const c = r('key'),
      l = (function (e) {
        return e.key.content && 'alias' === e.key.content.type
      })(e)
        ? ' '
        : ''
    if (a)
      return 'flowMappingItem' === e.type && 'flowMapping' === t.type
        ? c
        : 'mappingItem' !== e.type ||
          !Y$(u.content, i) ||
          U$(u.content) ||
          (t.tag && 'tag:yaml.org,2002:set' === t.tag.value)
        ? ['? ', X$(2, c)]
        : [c, l, ':']
    const p = r('value')
    if (s) return [': ', X$(2, p)]
    if (W$(o) || !J$(u.content))
      return [
        '? ',
        X$(2, c),
        M$,
        $$(
          '',
          n.map(r, 'value', 'leadingComments').map((e) => [e, M$])
        ),
        ': ',
        X$(2, p)
      ]
    if (
      (function (e) {
        if (!e) return !0
        switch (e.type) {
          case 'plain':
          case 'quoteDouble':
          case 'quoteSingle':
            return e.position.start.line === e.position.end.line
          case 'alias':
            return !0
          default:
            return !1
        }
      })(u.content) &&
      !W$(u.content) &&
      !q$(u.content) &&
      !U$(u.content) &&
      !z$(u) &&
      !W$(o.content) &&
      !q$(o.content) &&
      !z$(o) &&
      Y$(o.content, i)
    )
      return [c, l, ': ', p]
    const f = Symbol('mappingKey'),
      d = _$([R$('? '), _$(X$(2, c), { id: f })]),
      h = [M$, ': ', X$(2, p)],
      g = [l, ':']
    W$(o.content) ||
    (z$(o) && o.content && !G$(o.content, ['mapping', 'sequence'])) ||
    ('mapping' === t.type && U$(u.content) && J$(o.content)) ||
    (G$(o.content, ['mapping', 'sequence']) &&
      null === o.content.tag &&
      null === o.content.anchor)
      ? g.push(M$)
      : o.content && g.push(V$),
      g.push(p)
    const m = X$(i.tabWidth, g)
    return !Y$(u.content, i) || W$(u.content) || q$(u.content) || z$(u)
      ? j$([[d, R$(h, m, { groupId: f })]])
      : j$([[c, m]])
  }
  const {
      builders: {
        dedent: Q$,
        dedentToRoot: Z$,
        fill: eV,
        hardline: tV,
        join: nV,
        line: rV,
        literalline: iV,
        markAsRoot: uV
      },
      utils: { getDocParts: oV }
    } = su,
    {
      getAncestorCount: sV,
      getBlockValueLineContents: aV,
      hasIndicatorComment: cV,
      isLastDescendantNode: lV,
      isNode: pV
    } = l$,
    { alignWithSpaces: fV } = A$
  var dV = function (e, t, n) {
    const r = e.getValue(),
      i = sV(e, (e) => pV(e, ['sequence', 'mapping'])),
      u = lV(e),
      o = ['blockFolded' === r.type ? '>' : '|']
    null !== r.indent && o.push(r.indent.toString()),
      'clip' !== r.chomping && o.push('keep' === r.chomping ? '+' : '-'),
      cV(r) && o.push(' ', t('indicatorComment'))
    const s = aV(r, { parentIndent: i, isLastDescendant: u, options: n }),
      a = []
    for (const [e, t] of s.entries())
      0 === e && a.push(tV),
        a.push(eV(oV(nV(rV, t)))),
        e !== s.length - 1
          ? a.push(0 === t.length ? tV : uV(iV))
          : 'keep' === r.chomping && u && a.push(Z$(0 === t.length ? tV : iV))
    return (
      null === r.indent
        ? o.push(Q$(fV(n.tabWidth, a)))
        : o.push(Z$(fV(r.indent - 1 + i, a))),
      o
    )
  }
  const {
      builders: {
        breakParent: hV,
        fill: gV,
        group: mV,
        hardline: yV,
        join: DV,
        line: EV,
        lineSuffix: CV,
        literalline: bV
      },
      utils: { getDocParts: AV, replaceTextEndOfLine: vV }
    } = su,
    { isPreviousLineEmpty: FV } = Fi,
    { insertPragma: xV, isPragma: SV } = KR,
    { locStart: wV } = QR,
    {
      getFlowScalarLineContents: TV,
      getLastDescendantNode: BV,
      hasLeadingComments: NV,
      hasMiddleComments: kV,
      hasTrailingComment: PV,
      hasEndComments: OV,
      hasPrettierIgnore: IV,
      isLastDescendantNode: LV,
      isNode: jV,
      isInlineNode: _V
    } = l$,
    {
      alignWithSpaces: MV,
      printNextEmptyLine: RV,
      shouldPrintEndComments: $V
    } = A$,
    { printFlowMapping: VV, printFlowSequence: WV } = L$
  function qV(e, t) {
    return PV(e) || (t && (t.head.children.length > 0 || OV(t.head)))
  }
  function UV(e, t, n) {
    const r = TV(e, t, n)
    return DV(
      yV,
      r.map((e) => gV(AV(DV(EV, e))))
    )
  }
  var zV = {
      preprocess: h$,
      embed: ZR,
      print: function (e, t, n) {
        const r = e.getValue(),
          i = []
        'mappingValue' !== r.type &&
          NV(r) &&
          i.push([DV(yV, e.map(n, 'leadingComments')), yV])
        const { tag: u, anchor: o } = r
        u && i.push(n('tag')), u && o && i.push(' '), o && i.push(n('anchor'))
        let s = ''
        jV(r, [
          'mapping',
          'sequence',
          'comment',
          'directive',
          'mappingItem',
          'sequenceItem'
        ]) &&
          !LV(e) &&
          (s = RV(e, t.originalText)),
          (u || o) &&
            (jV(r, ['sequence', 'mapping']) && !kV(r)
              ? i.push(yV)
              : i.push(' ')),
          kV(r) &&
            i.push([
              1 === r.middleComments.length ? '' : yV,
              DV(yV, e.map(n, 'middleComments')),
              yV
            ])
        const a = e.getParentNode()
        return (
          IV(e)
            ? i.push(
                vV(
                  t.originalText
                    .slice(r.position.start.offset, r.position.end.offset)
                    .trimEnd(),
                  bV
                )
              )
            : i.push(
                mV(
                  (function (e, t, n, r, i) {
                    switch (e.type) {
                      case 'root': {
                        const { children: t } = e,
                          r = []
                        n.each((e, n) => {
                          const u = t[n],
                            o = t[n + 1]
                          0 !== n && r.push(yV),
                            r.push(i()),
                            qV(u, o)
                              ? (r.push(yV, '...'),
                                PV(u) && r.push(' ', i('trailingComment')))
                              : o && !PV(o.head) && r.push(yV, '---')
                        }, 'children')
                        const u = BV(e)
                        return (
                          (jV(u, ['blockLiteral', 'blockFolded']) &&
                            'keep' === u.chomping) ||
                            r.push(yV),
                          r
                        )
                      }
                      case 'document': {
                        const u = []
                        return (
                          'head' ===
                            (function (e, t, n, r) {
                              if (
                                (n.children[0] === e &&
                                  /---(?:\s|$)/.test(
                                    r.originalText.slice(wV(e), wV(e) + 4)
                                  )) ||
                                e.head.children.length > 0 ||
                                OV(e.head) ||
                                PV(e.head)
                              )
                                return 'head'
                              if (qV(e, t)) return !1
                              return !!t && 'root'
                            })(e, t.children[n.getName() + 1], t, r) &&
                            ((e.head.children.length > 0 ||
                              e.head.endComments.length > 0) &&
                              u.push(i('head')),
                            PV(e.head)
                              ? u.push([
                                  '---',
                                  ' ',
                                  i(['head', 'trailingComment'])
                                ])
                              : u.push('---')),
                          (function (e) {
                            return e.body.children.length > 0 || OV(e.body)
                          })(e) && u.push(i('body')),
                          DV(yV, u)
                        )
                      }
                      case 'documentHead':
                        return DV(yV, [
                          ...n.map(i, 'children'),
                          ...n.map(i, 'endComments')
                        ])
                      case 'documentBody': {
                        const { children: t, endComments: r } = e
                        let u = ''
                        if (t.length > 0 && r.length > 0) {
                          const t = BV(e)
                          jV(t, ['blockFolded', 'blockLiteral'])
                            ? 'keep' !== t.chomping && (u = [yV, yV])
                            : (u = yV)
                        }
                        return [
                          DV(yV, n.map(i, 'children')),
                          u,
                          DV(yV, n.map(i, 'endComments'))
                        ]
                      }
                      case 'directive':
                        return ['%', DV(' ', [e.name, ...e.parameters])]
                      case 'comment':
                        return ['#', e.value]
                      case 'alias':
                        return ['*', e.value]
                      case 'tag':
                        return r.originalText.slice(
                          e.position.start.offset,
                          e.position.end.offset
                        )
                      case 'anchor':
                        return ['&', e.value]
                      case 'plain':
                        return UV(
                          e.type,
                          r.originalText.slice(
                            e.position.start.offset,
                            e.position.end.offset
                          ),
                          r
                        )
                      case 'quoteDouble':
                      case 'quoteSingle': {
                        const t = "'",
                          n = '"',
                          i = r.originalText.slice(
                            e.position.start.offset + 1,
                            e.position.end.offset - 1
                          )
                        if (
                          ('quoteSingle' === e.type && i.includes('\\')) ||
                          ('quoteDouble' === e.type && /\\[^"]/.test(i))
                        ) {
                          const u = 'quoteDouble' === e.type ? n : t
                          return [u, UV(e.type, i, r), u]
                        }
                        if (i.includes(n))
                          return [
                            t,
                            UV(
                              e.type,
                              'quoteDouble' === e.type
                                ? i
                                    .replace(/\\"/g, n)
                                    .replace(/'/g, t.repeat(2))
                                : i,
                              r
                            ),
                            t
                          ]
                        if (i.includes(t))
                          return [
                            n,
                            UV(
                              e.type,
                              'quoteSingle' === e.type
                                ? i.replace(/''/g, t)
                                : i,
                              r
                            ),
                            n
                          ]
                        const u = r.singleQuote ? t : n
                        return [u, UV(e.type, i, r), u]
                      }
                      case 'blockFolded':
                      case 'blockLiteral':
                        return dV(n, i, r)
                      case 'mapping':
                      case 'sequence':
                        return DV(yV, n.map(i, 'children'))
                      case 'sequenceItem':
                        return ['- ', MV(2, e.content ? i('content') : '')]
                      case 'mappingKey':
                      case 'mappingValue':
                        return e.content ? i('content') : ''
                      case 'mappingItem':
                      case 'flowMappingItem':
                        return K$(e, t, n, i, r)
                      case 'flowMapping':
                        return VV(n, i, r)
                      case 'flowSequence':
                        return WV(n, i, r)
                      case 'flowSequenceItem':
                        return i('content')
                      default:
                        throw new Error(`Unexpected node type ${e.type}`)
                    }
                  })(r, a, e, t, n)
                )
              ),
          PV(r) &&
            !jV(r, ['document', 'documentHead']) &&
            i.push(
              CV([
                'mappingValue' !== r.type || r.content ? ' ' : '',
                'mappingKey' === a.type &&
                'mapping' === e.getParentNode(2).type &&
                _V(r)
                  ? ''
                  : hV,
                n('trailingComment')
              ])
            ),
          $V(r) &&
            i.push(
              MV('sequenceItem' === r.type ? 2 : 0, [
                yV,
                DV(
                  yV,
                  e.map(
                    (e) => [
                      FV(t.originalText, e.getValue(), wV) ? yV : '',
                      n()
                    ],
                    'endComments'
                  )
                )
              ])
            ),
          i.push(s),
          i
        )
      },
      massageAstNode: function (e, t) {
        if (jV(t))
          switch ((delete t.position, t.type)) {
            case 'comment':
              if (SV(t.value)) return null
              break
            case 'quoteDouble':
            case 'quoteSingle':
              t.type = 'quote'
          }
      },
      insertPragma: xV
    },
    GV = {
      bracketSpacing: KB.bracketSpacing,
      singleQuote: KB.singleQuote,
      proseWrap: KB.proseWrap
    }
  var HV = [
    oN,
    fP,
    AO,
    qO,
    EL,
    YR,
    {
      languages: [
        rh(
          {
            name: 'YAML',
            type: 'data',
            color: '#cb171e',
            tmScope: 'source.yaml',
            aliases: ['yml'],
            extensions: [
              '.yml',
              '.mir',
              '.reek',
              '.rviz',
              '.sublime-syntax',
              '.syntax',
              '.yaml',
              '.yaml-tmlanguage',
              '.yaml.sed',
              '.yml.mysql'
            ],
            filenames: [
              '.clang-format',
              '.clang-tidy',
              '.gemrc',
              'glide.lock',
              'yarn.lock'
            ],
            aceMode: 'yaml',
            codemirrorMode: 'yaml',
            codemirrorMimeType: 'text/x-yaml',
            languageId: 407
          },
          (e) => ({
            since: '1.14.0',
            parsers: ['yaml'],
            vscodeLanguageIds: ['yaml', 'ansible', 'home-assistant'],
            filenames: [
              ...e.filenames.filter((e) => 'yarn.lock' !== e),
              '.prettierrc',
              '.stylelintrc'
            ]
          })
        )
      ],
      printers: { yaml: zV },
      options: GV,
      parsers: undefined
    }
  ]
  const { version: JV } = e,
    { getSupportInfo: XV } = ui
  function YV(e, t = 1) {
    return (...n) => {
      const r = n[t] || {},
        i = r.plugins || []
      return (
        (n[t] = Object.assign(
          Object.assign({}, r),
          {},
          { plugins: [...HV, ...(Array.isArray(i) ? i : Object.values(i))] }
        )),
        e(...n)
      )
    }
  }
  const KV = YV(kd.formatWithCursor)
  return {
    formatWithCursor: KV,
    format: (e, t) => KV(e, t).formatted,
    check(e, t) {
      const { formatted: n } = KV(e, t)
      return n === e
    },
    doc: su,
    getSupportInfo: YV(XV, 0),
    version: JV,
    util: th,
    __debug: {
      parse: YV(kd.parse),
      formatAST: YV(kd.formatAST),
      formatDoc: YV(kd.formatDoc),
      printToDoc: YV(kd.printToDoc),
      printDocToString: YV(kd.printDocToString)
    }
  }
})
