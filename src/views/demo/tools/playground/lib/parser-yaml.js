!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : (((e =
        'undefined' != typeof globalThis
          ? globalThis
          : e || self).prettierPlugins = e.prettierPlugins || {}),
      (e.prettierPlugins.yaml = t()))
})(this, function () {
  'use strict'
  var e = function (e, t) {
    const n = new SyntaxError(
      e + ' (' + t.start.line + ':' + t.start.column + ')'
    )
    return (n.loc = t), n
  }
  var t = {
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
  var n = {
      locStart: function (e) {
        return e.position.start.offset
      },
      locEnd: function (e) {
        return e.position.end.offset
      }
    },
    r =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {}
  function o(e) {
    var t = { exports: {} }
    return e(t, t.exports), t.exports
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
  ***************************************************************************** */
  }
  var i = function (e, t) {
    return (i =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t
        }) ||
      function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
      })(e, t)
  }
  var s = function () {
    return (s =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        return e
      }).apply(this, arguments)
  }
  function a(e) {
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
  function c(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!n) return e
    var r,
      o,
      i = n.call(e),
      s = []
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
        s.push(r.value)
    } catch (e) {
      o = { error: e }
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i)
      } finally {
        if (o) throw o.error
      }
    }
    return s
  }
  function u(e) {
    return this instanceof u ? ((this.v = e), this) : new u(e)
  }
  var l,
    f,
    h = Object.freeze({
      __proto__: null,
      __extends: function (e, t) {
        function n() {
          this.constructor = e
        }
        i(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()))
      },
      get __assign() {
        return s
      },
      __rest: function (e, t) {
        var n = {}
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r])
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var o = 0
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]])
        }
        return n
      },
      __decorate: function (e, t, n, r) {
        var o,
          i = arguments.length,
          s =
            i < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, n, r)
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) &&
              (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s)
        return i > 3 && s && Object.defineProperty(t, n, s), s
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
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e))
            } catch (e) {
              i(e)
            }
          }
          function a(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              i(e)
            }
          }
          function c(e) {
            var t
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t)
                    })).then(s, a)
          }
          c((r = r.apply(e, t || [])).next())
        })
      },
      __generator: function (e, t) {
        var n,
          r,
          o,
          i,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1]
              return o[1]
            },
            trys: [],
            ops: []
          }
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this
            }),
          i
        )
        function a(i) {
          return function (a) {
            return (function (i) {
              if (n) throw new TypeError('Generator is already executing.')
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i
                      break
                    case 4:
                      return s.label++, { value: i[1], done: !1 }
                    case 5:
                      s.label++, (r = i[1]), (i = [0])
                      continue
                    case 7:
                      ;(i = s.ops.pop()), s.trys.pop()
                      continue
                    default:
                      if (
                        !((o = s.trys),
                        (o = o.length > 0 && o[o.length - 1]) ||
                          (6 !== i[0] && 2 !== i[0]))
                      ) {
                        s = 0
                        continue
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        s.label = i[1]
                        break
                      }
                      if (6 === i[0] && s.label < o[1]) {
                        ;(s.label = o[1]), (o = i)
                        break
                      }
                      if (o && s.label < o[2]) {
                        ;(s.label = o[2]), s.ops.push(i)
                        break
                      }
                      o[2] && s.ops.pop(), s.trys.pop()
                      continue
                  }
                  i = t.call(e, s)
                } catch (e) {
                  ;(i = [6, e]), (r = 0)
                } finally {
                  n = o = 0
                }
              if (5 & i[0]) throw i[1]
              return { value: i[0] ? i[1] : void 0, done: !0 }
            })([i, a])
          }
        }
      },
      __createBinding: function (e, t, n, r) {
        void 0 === r && (r = n), (e[r] = t[n])
      },
      __exportStar: function (e, t) {
        for (var n in e) 'default' === n || t.hasOwnProperty(n) || (t[n] = e[n])
      },
      __values: a,
      __read: c,
      __spread: function () {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(c(arguments[t]))
        return e
      },
      __spreadArrays: function () {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length
        var r = Array(e),
          o = 0
        for (t = 0; t < n; t++)
          for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++)
            r[o] = i[s]
        return r
      },
      __await: u,
      __asyncGenerator: function (e, t, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.')
        var r,
          o = n.apply(e, t || []),
          i = []
        return (
          (r = {}),
          s('next'),
          s('throw'),
          s('return'),
          (r[Symbol.asyncIterator] = function () {
            return this
          }),
          r
        )
        function s(e) {
          o[e] &&
            (r[e] = function (t) {
              return new Promise(function (n, r) {
                i.push([e, t, n, r]) > 1 || a(e, t)
              })
            })
        }
        function a(e, t) {
          try {
            ;(n = o[e](t)).value instanceof u
              ? Promise.resolve(n.value.v).then(c, l)
              : f(i[0][2], n)
          } catch (e) {
            f(i[0][3], e)
          }
          var n
        }
        function c(e) {
          a('next', e)
        }
        function l(e) {
          a('throw', e)
        }
        function f(e, t) {
          e(t), i.shift(), i.length && a(i[0][0], i[0][1])
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
        function r(r, o) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n)
                  ? { value: u(e[r](t)), done: 'return' === r }
                  : o
                  ? o(t)
                  : t
              }
            : o
        }
      },
      __asyncValues: function (e) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.')
        var t,
          n = e[Symbol.asyncIterator]
        return n
          ? n.call(e)
          : ((e = a(e)),
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
              return new Promise(function (r, o) {
                ;(function (e, t, n, r) {
                  Promise.resolve(r).then(function (t) {
                    e({ value: t, done: n })
                  }, t)
                })(r, o, (t = e[n](t)).done, t.value)
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
    p = o(function (e, t) {
      var n = '\n',
        r = (function () {
          function e(e) {
            this.string = e
            for (var t = [0], r = 0; r < e.length; )
              switch (e[r]) {
                case n:
                  ;(r += n.length), t.push(r)
                  break
                case '\r':
                  e[(r += '\r'.length)] === n && (r += n.length), t.push(r)
                  break
                default:
                  r++
              }
            this.offsets = t
          }
          return (
            (e.prototype.locationForIndex = function (e) {
              if (e < 0 || e > this.string.length) return null
              for (var t = 0, n = this.offsets; n[t + 1] <= e; ) t++
              return { line: t, column: e - n[t] }
            }),
            (e.prototype.indexForLocation = function (e) {
              var t = e.line,
                n = e.column
              return t < 0 ||
                t >= this.offsets.length ||
                n < 0 ||
                n > this.lengthOfLine(t)
                ? null
                : this.offsets[t] + n
            }),
            (e.prototype.lengthOfLine = function (e) {
              var t = this.offsets[e]
              return (
                (e === this.offsets.length - 1
                  ? this.string.length
                  : this.offsets[e + 1]) - t
              )
            }),
            e
          )
        })()
      ;(t.__esModule = !0), (t.default = r)
    }),
    d = function (e) {
      return e && e.Math == Math && e
    },
    g =
      d('object' == typeof globalThis && globalThis) ||
      d('object' == typeof window && window) ||
      d('object' == typeof self && self) ||
      d('object' == typeof r && r) ||
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
    v = {}.propertyIsEnumerable,
    b = Object.getOwnPropertyDescriptor,
    w = {
      f:
        b && !v.call({ 1: 2 }, 1)
          ? function (e) {
              var t = b(this, e)
              return !!t && t.enumerable
            }
          : v
    },
    _ = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    },
    E = {}.toString,
    S = ''.split,
    O = m(function () {
      return !Object('z').propertyIsEnumerable(0)
    })
      ? function (e) {
          return 'String' ==
            (function (e) {
              return E.call(e).slice(8, -1)
            })(e)
            ? S.call(e, '')
            : Object(e)
        }
      : Object,
    A = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e)
      return e
    },
    M = function (e) {
      return O(A(e))
    },
    L = function (e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e
    },
    N = function (e) {
      return 'function' == typeof e ? e : void 0
    },
    T = function (e, t) {
      return arguments.length < 2 ? N(g[e]) : g[e] && g[e][t]
    },
    P = T('navigator', 'userAgent') || '',
    C = g.process,
    x = g.Deno,
    R = (C && C.versions) || (x && x.version),
    I = R && R.v8
  I
    ? (f = (l = I.split('.'))[0] < 4 ? 1 : l[0] + l[1])
    : P &&
      (!(l = P.match(/Edge\/(\d+)/)) || l[1] >= 74) &&
      (l = P.match(/Chrome\/(\d+)/)) &&
      (f = l[1])
  var k,
    B = f && +f,
    Y =
      !!Object.getOwnPropertySymbols &&
      !m(function () {
        var e = Symbol()
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && B && B < 41)
        )
      }),
    j = Y && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    $ = j
      ? function (e) {
          return 'symbol' == typeof e
        }
      : function (e) {
          var t = T('Symbol')
          return 'function' == typeof t && Object(e) instanceof t
        },
    D = function (e, t) {
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
    F = '__core-js_shared__',
    U = g[F] || D(F, {}),
    W = o(function (e) {
      ;(e.exports = function (e, t) {
        return U[e] || (U[e] = void 0 !== t ? t : {})
      })('versions', []).push({
        version: '3.17.3',
        mode: 'global',
        copyright: '\xa9 2021 Denis Pushkarev (zloirock.ru)'
      })
    }),
    K = function (e) {
      return Object(A(e))
    },
    V = {}.hasOwnProperty,
    Q =
      Object.hasOwn ||
      function (e, t) {
        return V.call(K(e), t)
      },
    q = 0,
    J = Math.random(),
    G = function (e) {
      return (
        'Symbol(' +
        String(void 0 === e ? '' : e) +
        ')_' +
        (++q + J).toString(36)
      )
    },
    H = W('wks'),
    z = g.Symbol,
    Z = j ? z : (z && z.withoutSetter) || G,
    X =
      ((Q(H, (k = 'toPrimitive')) && (Y || 'string' == typeof H[k])) ||
        (Y && Q(z, k) ? (H[k] = z[k]) : (H[k] = Z('Symbol.' + k))),
      H[k]),
    ee = function (e, t) {
      if (!L(e) || $(e)) return e
      var n,
        r = e[X]
      if (void 0 !== r) {
        if (
          (void 0 === t && (t = 'default'), (n = r.call(e, t)), !L(n) || $(n))
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
            !L((r = n.call(e)))
          )
            return r
          if ('function' == typeof (n = e.valueOf) && !L((r = n.call(e))))
            return r
          if (
            'string' !== t &&
            'function' == typeof (n = e.toString) &&
            !L((r = n.call(e)))
          )
            return r
          throw TypeError("Can't convert object to primitive value")
        })(e, t)
      )
    },
    te = function (e) {
      var t = ee(e, 'string')
      return $(t) ? t : String(t)
    },
    ne = g.document,
    re = L(ne) && L(ne.createElement),
    oe =
      !y &&
      !m(function () {
        return (
          7 !=
          Object.defineProperty(
            ((e = 'div'), re ? ne.createElement(e) : {}),
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
    ie = Object.getOwnPropertyDescriptor,
    se = {
      f: y
        ? ie
        : function (e, t) {
            if (((e = M(e)), (t = te(t)), oe))
              try {
                return ie(e, t)
              } catch (e) {}
            if (Q(e, t)) return _(!w.f.call(e, t), e[t])
          }
    },
    ae = function (e) {
      if (!L(e)) throw TypeError(String(e) + ' is not an object')
      return e
    },
    ce = Object.defineProperty,
    ue = {
      f: y
        ? ce
        : function (e, t, n) {
            if ((ae(e), (t = te(t)), ae(n), oe))
              try {
                return ce(e, t, n)
              } catch (e) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported')
            return 'value' in n && (e[t] = n.value), e
          }
    },
    le = y
      ? function (e, t, n) {
          return ue.f(e, t, _(1, n))
        }
      : function (e, t, n) {
          return (e[t] = n), e
        },
    fe = Function.toString
  'function' != typeof U.inspectSource &&
    (U.inspectSource = function (e) {
      return fe.call(e)
    })
  var he,
    pe,
    de,
    ge,
    me = U.inspectSource,
    ye = g.WeakMap,
    ve = 'function' == typeof ye && /native code/.test(me(ye)),
    be = W('keys'),
    we = {},
    _e = 'Object already initialized',
    Ee = g.WeakMap
  if (ve || U.state) {
    var Se = U.state || (U.state = new Ee()),
      Oe = Se.get,
      Ae = Se.has,
      Me = Se.set
    ;(he = function (e, t) {
      if (Ae.call(Se, e)) throw new TypeError(_e)
      return (t.facade = e), Me.call(Se, e, t), t
    }),
      (pe = function (e) {
        return Oe.call(Se, e) || {}
      }),
      (de = function (e) {
        return Ae.call(Se, e)
      })
  } else {
    var Le = be[(ge = 'state')] || (be[ge] = G(ge))
    ;(we[Le] = !0),
      (he = function (e, t) {
        if (Q(e, Le)) throw new TypeError(_e)
        return (t.facade = e), le(e, Le, t), t
      }),
      (pe = function (e) {
        return Q(e, Le) ? e[Le] : {}
      }),
      (de = function (e) {
        return Q(e, Le)
      })
  }
  var Ne,
    Te,
    Pe = {
      set: he,
      get: pe,
      has: de,
      enforce: function (e) {
        return de(e) ? pe(e) : he(e, {})
      },
      getterFor: function (e) {
        return function (t) {
          var n
          if (!L(t) || (n = pe(t)).type !== e)
            throw TypeError('Incompatible receiver, ' + e + ' required')
          return n
        }
      }
    },
    Ce = o(function (e) {
      var t = Pe.get,
        n = Pe.enforce,
        r = String(String).split('String')
      ;(e.exports = function (e, t, o, i) {
        var s,
          a = !!i && !!i.unsafe,
          c = !!i && !!i.enumerable,
          u = !!i && !!i.noTargetGet
        'function' == typeof o &&
          ('string' != typeof t || Q(o, 'name') || le(o, 'name', t),
          (s = n(o)).source ||
            (s.source = r.join('string' == typeof t ? t : ''))),
          e !== g
            ? (a ? !u && e[t] && (c = !0) : delete e[t],
              c ? (e[t] = o) : le(e, t, o))
            : c
            ? (e[t] = o)
            : D(t, o)
      })(Function.prototype, 'toString', function () {
        return ('function' == typeof this && t(this).source) || me(this)
      })
    }),
    xe = Math.ceil,
    Re = Math.floor,
    Ie = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? Re : xe)(e)
    },
    ke = Math.min,
    Be = function (e) {
      return e > 0 ? ke(Ie(e), 9007199254740991) : 0
    },
    Ye = Math.max,
    je = Math.min,
    $e = function (e) {
      return function (t, n, r) {
        var o,
          i = M(t),
          s = Be(i.length),
          a = (function (e, t) {
            var n = Ie(e)
            return n < 0 ? Ye(n + t, 0) : je(n, t)
          })(r, s)
        if (e && n != n) {
          for (; s > a; ) if ((o = i[a++]) != o) return !0
        } else
          for (; s > a; a++) if ((e || a in i) && i[a] === n) return e || a || 0
        return !e && -1
      }
    },
    De = { includes: $e(!0), indexOf: $e(!1) }.indexOf,
    Fe = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ].concat('length', 'prototype'),
    Ue = {
      f:
        Object.getOwnPropertyNames ||
        function (e) {
          return (function (e, t) {
            var n,
              r = M(e),
              o = 0,
              i = []
            for (n in r) !Q(we, n) && Q(r, n) && i.push(n)
            for (; t.length > o; )
              Q(r, (n = t[o++])) && (~De(i, n) || i.push(n))
            return i
          })(e, Fe)
        }
    },
    We = { f: Object.getOwnPropertySymbols },
    Ke =
      T('Reflect', 'ownKeys') ||
      function (e) {
        var t = Ue.f(ae(e)),
          n = We.f
        return n ? t.concat(n(e)) : t
      },
    Ve = function (e, t) {
      for (var n = Ke(t), r = ue.f, o = se.f, i = 0; i < n.length; i++) {
        var s = n[i]
        Q(e, s) || r(e, s, o(t, s))
      }
    },
    Qe = /#|\.prototype\./,
    qe = function (e, t) {
      var n = Ge[Je(e)]
      return n == ze || (n != He && ('function' == typeof t ? m(t) : !!t))
    },
    Je = (qe.normalize = function (e) {
      return String(e).replace(Qe, '.').toLowerCase()
    }),
    Ge = (qe.data = {}),
    He = (qe.NATIVE = 'N'),
    ze = (qe.POLYFILL = 'P'),
    Ze = qe,
    Xe = se.f,
    et = function (e) {
      if ($(e)) throw TypeError('Cannot convert a Symbol value to a string')
      return String(e)
    },
    tt = Math.floor,
    nt = function (e, t) {
      var n = e.length,
        r = tt(n / 2)
      return n < 8 ? rt(e, t) : ot(nt(e.slice(0, r), t), nt(e.slice(r), t), t)
    },
    rt = function (e, t) {
      for (var n, r, o = e.length, i = 1; i < o; ) {
        for (r = i, n = e[i]; r && t(e[r - 1], n) > 0; ) e[r] = e[--r]
        r !== i++ && (e[r] = n)
      }
      return e
    },
    ot = function (e, t, n) {
      for (
        var r = e.length, o = t.length, i = 0, s = 0, a = [];
        i < r || s < o;

      )
        i < r && s < o
          ? a.push(n(e[i], t[s]) <= 0 ? e[i++] : t[s++])
          : a.push(i < r ? e[i++] : t[s++])
      return a
    },
    it = nt,
    st = P.match(/firefox\/(\d+)/i),
    at = !!st && +st[1],
    ct = /MSIE|Trident/.test(P),
    ut = P.match(/AppleWebKit\/(\d+)\./),
    lt = !!ut && +ut[1],
    ft = [],
    ht = ft.sort,
    pt = m(function () {
      ft.sort(void 0)
    }),
    dt = m(function () {
      ft.sort(null)
    }),
    gt =
      !!(Te = []['sort']) &&
      m(function () {
        Te.call(
          null,
          Ne ||
            function () {
              throw 1
            },
          1
        )
      }),
    mt = !m(function () {
      if (B) return B < 70
      if (!(at && at > 3)) {
        if (ct) return !0
        if (lt) return lt < 603
        var e,
          t,
          n,
          r,
          o = ''
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
          for (r = 0; r < 47; r++) ft.push({ k: t + r, v: n })
        }
        for (
          ft.sort(function (e, t) {
            return t.v - e.v
          }),
            r = 0;
          r < ft.length;
          r++
        )
          (t = ft[r].k.charAt(0)), o.charAt(o.length - 1) !== t && (o += t)
        return 'DGBEFHACIJK' !== o
      }
    })
  !(function (e, t) {
    var n,
      r,
      o,
      i,
      s,
      a = e.target,
      c = e.global,
      u = e.stat
    if ((n = c ? g : u ? g[a] || D(a, {}) : (g[a] || {}).prototype))
      for (r in t) {
        if (
          ((i = t[r]),
          (o = e.noTargetGet ? (s = Xe(n, r)) && s.value : n[r]),
          !Ze(c ? r : a + (u ? '.' : '#') + r, e.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue
          Ve(i, o)
        }
        ;(e.sham || (o && o.sham)) && le(i, 'sham', !0), Ce(n, r, i, e)
      }
  })(
    { target: 'Array', proto: !0, forced: pt || !dt || !gt || !mt },
    {
      sort: function (e) {
        void 0 !== e &&
          (function (e) {
            if ('function' != typeof e)
              throw TypeError(String(e) + ' is not a function')
          })(e)
        var t = K(this)
        if (mt) return void 0 === e ? ht.call(t) : ht.call(t, e)
        var n,
          r,
          o = [],
          i = Be(t.length)
        for (r = 0; r < i; r++) r in t && o.push(t[r])
        for (
          n = (o = it(
            o,
            (function (e) {
              return function (t, n) {
                return void 0 === n
                  ? -1
                  : void 0 === t
                  ? 1
                  : void 0 !== e
                  ? +e(t, n) || 0
                  : et(t) > et(n)
                  ? 1
                  : -1
              }
            })(e)
          )).length,
            r = 0;
          r < n;

        )
          t[r] = o[r++]
        for (; r < i; ) delete t[r++]
        return t
      }
    }
  )
  var yt = function e(t, n) {
      void 0 === n && (n = null),
        'children' in t &&
          t.children.forEach(function (n) {
            return e(n, t)
          }),
        'anchor' in t && t.anchor && e(t.anchor, t),
        'tag' in t && t.tag && e(t.tag, t),
        'leadingComments' in t &&
          t.leadingComments.forEach(function (n) {
            return e(n, t)
          }),
        'middleComments' in t &&
          t.middleComments.forEach(function (n) {
            return e(n, t)
          }),
        'indicatorComment' in t &&
          t.indicatorComment &&
          e(t.indicatorComment, t),
        'trailingComment' in t && t.trailingComment && e(t.trailingComment, t),
        'endComments' in t &&
          t.endComments.forEach(function (n) {
            return e(n, t)
          }),
        Object.defineProperty(t, '_parent', { value: n, enumerable: !1 })
    },
    vt = Object.defineProperty({ defineParents: yt }, '__esModule', {
      value: !0
    })
  var bt = function (e) {
      return e.line + ':' + e.column
    },
    wt = Object.defineProperty({ getPointText: bt }, '__esModule', {
      value: !0
    })
  var _t = function (e) {
    vt.defineParents(e)
    var t = (function (e) {
        for (
          var t = Array.from(new Array(e.position.end.line), function () {
              return {}
            }),
            n = 0,
            r = e.comments;
          n < r.length;
          n++
        ) {
          var o = r[n]
          t[o.position.start.line - 1].comment = o
        }
        return Et(t, e), t
      })(e),
      n = e.children.slice()
    e.comments
      .sort(function (e, t) {
        return e.position.start.offset - t.position.end.offset
      })
      .filter(function (e) {
        return !e._parent
      })
      .forEach(function (e) {
        for (; n.length > 1 && e.position.start.line > n[0].position.end.line; )
          n.shift()
        !(function (e, t, n) {
          var r = e.position.start.line,
            o = t[r - 1].trailingAttachableNode
          if (o) {
            if (o.trailingComment)
              throw new Error(
                'Unexpected multiple trailing comment at ' +
                  wt.getPointText(e.position.start)
              )
            return vt.defineParents(e, o), void (o.trailingComment = e)
          }
          for (var i = r; i >= n.position.start.line; i--) {
            var s = t[i - 1].trailingNode,
              a = void 0
            if (s) a = s
            else {
              if (i === r || !t[i - 1].comment) continue
              a = t[i - 1].comment._parent
            }
            if (
              (('sequence' !== a.type && 'mapping' !== a.type) ||
                (a = a.children[0]),
              'mappingItem' === a.type)
            ) {
              var c = a.children,
                u = c[0],
                l = c[1]
              a = Ot(u) ? u : l
            }
            for (;;) {
              if (St(a, e))
                return vt.defineParents(e, a), void a.endComments.push(e)
              if (!a._parent) break
              a = a._parent
            }
            break
          }
          for (i = r + 1; i <= n.position.end.line; i++) {
            var f = t[i - 1].leadingAttachableNode
            if (f) return vt.defineParents(e, f), void f.leadingComments.push(e)
          }
          var h = n.children[1]
          vt.defineParents(e, h), h.endComments.push(e)
        })(e, t, n[0])
      })
  }
  function Et(e, t) {
    if (t.position.start.offset !== t.position.end.offset) {
      if ('leadingComments' in t) {
        var n = t.position.start,
          r = e[n.line - 1].leadingAttachableNode
        ;(!r || n.column < r.position.start.column) &&
          (e[n.line - 1].leadingAttachableNode = t)
      }
      if (
        'trailingComment' in t &&
        t.position.end.column > 1 &&
        'document' !== t.type &&
        'documentHead' !== t.type
      ) {
        var o = t.position.end,
          i = e[o.line - 1].trailingAttachableNode
        ;(!i || o.column >= i.position.end.column) &&
          (e[o.line - 1].trailingAttachableNode = t)
      }
      if (
        'root' !== t.type &&
        'document' !== t.type &&
        'documentHead' !== t.type &&
        'documentBody' !== t.type
      )
        for (
          var s = t.position,
            a = ((n = s.start), 0),
            c = [(o = s.end).line].concat(n.line === o.line ? [] : n.line);
          a < c.length;
          a++
        ) {
          var u = c[a],
            l = e[u - 1].trailingNode
          ;(!l || o.column >= l.position.end.column) &&
            (e[u - 1].trailingNode = t)
        }
      'children' in t &&
        t.children.forEach(function (t) {
          Et(e, t)
        })
    }
  }
  function St(e, t) {
    if (
      e.position.start.offset < t.position.start.offset &&
      e.position.end.offset > t.position.end.offset
    )
      switch (e.type) {
        case 'flowMapping':
        case 'flowSequence':
          return (
            0 === e.children.length ||
            t.position.start.line >
              e.children[e.children.length - 1].position.end.line
          )
      }
    if (t.position.end.offset < e.position.end.offset) return !1
    switch (e.type) {
      case 'sequenceItem':
        return t.position.start.column > e.position.start.column
      case 'mappingKey':
      case 'mappingValue':
        return (
          t.position.start.column > e._parent.position.start.column &&
          (0 === e.children.length ||
            (1 === e.children.length &&
              'blockFolded' !== e.children[0].type &&
              'blockLiteral' !== e.children[0].type)) &&
          ('mappingValue' === e.type || Ot(e))
        )
      default:
        return !1
    }
  }
  function Ot(e) {
    return (
      e.position.start !== e.position.end &&
      (0 === e.children.length ||
        e.position.start.offset !== e.children[0].position.start.offset)
    )
  }
  var At = Object.defineProperty({ attachComments: _t }, '__esModule', {
    value: !0
  })
  var Mt = function (e, t) {
      return { type: e, position: t }
    },
    Lt = Object.defineProperty({ createNode: Mt }, '__esModule', { value: !0 })
  var Nt = function (e, t, n) {
      return h.__assign(h.__assign({}, Lt.createNode('root', e)), {
        children: t,
        comments: n
      })
    },
    Tt = Object.defineProperty({ createRoot: Nt }, '__esModule', { value: !0 })
  var Pt = function e(t) {
      switch (t.type) {
        case 'DOCUMENT':
          for (var n = t.contents.length - 1; n >= 0; n--)
            'BLANK_LINE' === t.contents[n].type
              ? t.contents.splice(n, 1)
              : e(t.contents[n])
          for (n = t.directives.length - 1; n >= 0; n--)
            'BLANK_LINE' === t.directives[n].type && t.directives.splice(n, 1)
          break
        case 'FLOW_MAP':
        case 'FLOW_SEQ':
        case 'MAP':
        case 'SEQ':
          for (n = t.items.length - 1; n >= 0; n--) {
            var r = t.items[n]
            'char' in r ||
              ('BLANK_LINE' === r.type ? t.items.splice(n, 1) : e(r))
          }
          break
        case 'MAP_KEY':
        case 'MAP_VALUE':
        case 'SEQ_ITEM':
          t.node && e(t.node)
          break
        case 'ALIAS':
        case 'BLANK_LINE':
        case 'BLOCK_FOLDED':
        case 'BLOCK_LITERAL':
        case 'COMMENT':
        case 'DIRECTIVE':
        case 'PLAIN':
        case 'QUOTE_DOUBLE':
        case 'QUOTE_SINGLE':
          break
        default:
          throw new Error('Unexpected node type ' + JSON.stringify(t.type))
      }
    },
    Ct = Object.defineProperty({ removeCstBlankLine: Pt }, '__esModule', {
      value: !0
    })
  var xt = function () {
      return { leadingComments: [] }
    },
    Rt = Object.defineProperty(
      { createLeadingCommentAttachable: xt },
      '__esModule',
      { value: !0 }
    )
  var It = function (e) {
      return void 0 === e && (e = null), { trailingComment: e }
    },
    kt = Object.defineProperty(
      { createTrailingCommentAttachable: It },
      '__esModule',
      { value: !0 }
    )
  var Bt = function () {
      return h.__assign(
        h.__assign({}, Rt.createLeadingCommentAttachable()),
        kt.createTrailingCommentAttachable()
      )
    },
    Yt = Object.defineProperty({ createCommentAttachable: Bt }, '__esModule', {
      value: !0
    })
  var jt = function (e, t, n) {
      return h.__assign(
        h.__assign(
          h.__assign(
            h.__assign({}, Lt.createNode('alias', e)),
            Yt.createCommentAttachable()
          ),
          t
        ),
        { value: n }
      )
    },
    $t = Object.defineProperty({ createAlias: jt }, '__esModule', { value: !0 })
  var Dt = function (e, t) {
      var n = e.cstNode
      return $t.createAlias(
        t.transformRange({
          origStart: n.valueRange.origStart - 1,
          origEnd: n.valueRange.origEnd
        }),
        t.transformContent(e),
        n.rawValue
      )
    },
    Ft = Object.defineProperty({ transformAlias: Dt }, '__esModule', {
      value: !0
    })
  var Ut = function (e) {
      return h.__assign(h.__assign({}, e), { type: 'blockFolded' })
    },
    Wt = Object.defineProperty({ createBlockFolded: Ut }, '__esModule', {
      value: !0
    })
  var Kt = function (e, t, n, r, o, i) {
      return h.__assign(
        h.__assign(
          h.__assign(
            h.__assign({}, Lt.createNode('blockValue', e)),
            Rt.createLeadingCommentAttachable()
          ),
          t
        ),
        { chomping: n, indent: r, value: o, indicatorComment: i }
      )
    },
    Vt = Object.defineProperty({ createBlockValue: Kt }, '__esModule', {
      value: !0
    }),
    Qt = o(function (e, t) {
      var n
      ;(t.__esModule = !0),
        ((n = t.PropLeadingCharacter || (t.PropLeadingCharacter = {})).Tag =
          '!'),
        (n.Anchor = '&'),
        (n.Comment = '#')
    })
  var qt = function (e, t) {
      return h.__assign(h.__assign({}, Lt.createNode('anchor', e)), {
        value: t
      })
    },
    Jt = Object.defineProperty({ createAnchor: qt }, '__esModule', {
      value: !0
    })
  var Gt = function (e, t) {
      return h.__assign(h.__assign({}, Lt.createNode('comment', e)), {
        value: t
      })
    },
    Ht = Object.defineProperty({ createComment: Gt }, '__esModule', {
      value: !0
    })
  var zt = function (e, t, n) {
      return { anchor: t, tag: e, middleComments: n }
    },
    Zt = Object.defineProperty({ createContent: zt }, '__esModule', {
      value: !0
    })
  var Xt = function (e, t) {
      return h.__assign(h.__assign({}, Lt.createNode('tag', e)), { value: t })
    },
    en = Object.defineProperty({ createTag: Xt }, '__esModule', { value: !0 })
  var tn,
    nn = function (e, t, n) {
      void 0 === n &&
        (n = function () {
          return !1
        })
      for (
        var r = e.cstNode,
          o = [],
          i = null,
          s = null,
          a = null,
          c = 0,
          u = r.props;
        c < u.length;
        c++
      ) {
        var l = u[c],
          f = t.text[l.origStart]
        switch (f) {
          case Qt.PropLeadingCharacter.Tag:
            ;(i = i || l), (s = en.createTag(t.transformRange(l), e.tag))
            break
          case Qt.PropLeadingCharacter.Anchor:
            ;(i = i || l), (a = Jt.createAnchor(t.transformRange(l), r.anchor))
            break
          case Qt.PropLeadingCharacter.Comment:
            var h = Ht.createComment(
              t.transformRange(l),
              t.text.slice(l.origStart + 1, l.origEnd)
            )
            t.comments.push(h),
              !n(h) &&
                i &&
                i.origEnd <= l.origStart &&
                l.origEnd <= r.valueRange.origStart &&
                o.push(h)
            break
          default:
            throw new Error('Unexpected leading character ' + JSON.stringify(f))
        }
      }
      return Zt.createContent(s, a, o)
    },
    rn = Object.defineProperty({ transformContent: nn }, '__esModule', {
      value: !0
    })
  !(function (e) {
    ;(e.CLIP = 'clip'), (e.STRIP = 'strip'), (e.KEEP = 'keep')
  })(tn || (tn = {}))
  var on = function (e, t) {
      var n = e.cstNode,
        r = 'CLIP' === n.chomping ? 0 : 1,
        o = n.header.origEnd - n.header.origStart - 1 - r != 0,
        i = t.transformRange({
          origStart: n.header.origStart,
          origEnd: n.valueRange.origEnd
        }),
        s = null,
        a = rn.transformContent(e, t, function (e) {
          if (
            !(
              i.start.offset < e.position.start.offset &&
              e.position.end.offset < i.end.offset
            )
          )
            return !1
          if (s)
            throw new Error(
              'Unexpected multiple indicator comments at ' +
                wt.getPointText(e.position.start)
            )
          return (s = e), !0
        })
      return Vt.createBlockValue(
        i,
        a,
        tn[n.chomping],
        o ? n.blockIndent : null,
        n.strValue,
        s
      )
    },
    sn = Object.defineProperty({ transformAstBlockValue: on }, '__esModule', {
      value: !0
    })
  var an = function (e, t) {
      return Wt.createBlockFolded(sn.transformAstBlockValue(e, t))
    },
    cn = Object.defineProperty({ transformBlockFolded: an }, '__esModule', {
      value: !0
    })
  var un = function (e) {
      return h.__assign(h.__assign({}, e), { type: 'blockLiteral' })
    },
    ln = Object.defineProperty({ createBlockLiteral: un }, '__esModule', {
      value: !0
    })
  var fn = function (e, t) {
      return ln.createBlockLiteral(sn.transformAstBlockValue(e, t))
    },
    hn = Object.defineProperty({ transformBlockLiteral: fn }, '__esModule', {
      value: !0
    })
  var pn = function (e, t) {
      return Ht.createComment(t.transformRange(e.range), e.comment)
    },
    dn = Object.defineProperty({ transformComment: pn }, '__esModule', {
      value: !0
    })
  var gn = function (e, t, n) {
      return h.__assign(
        h.__assign(
          h.__assign({}, Lt.createNode('directive', e)),
          Yt.createCommentAttachable()
        ),
        { name: t, parameters: n }
      )
    },
    mn = Object.defineProperty({ createDirective: gn }, '__esModule', {
      value: !0
    })
  var yn = function (e, t) {
      for (var n = 0, r = e.props; n < r.length; n++) {
        var o = r[n],
          i = t.text[o.origStart]
        switch (i) {
          case Qt.PropLeadingCharacter.Comment:
            t.comments.push(
              Ht.createComment(
                t.transformRange(o),
                t.text.slice(o.origStart + 1, o.origEnd)
              )
            )
            break
          default:
            throw new Error('Unexpected leading character ' + JSON.stringify(i))
        }
      }
    },
    vn = Object.defineProperty({ extractPropComments: yn }, '__esModule', {
      value: !0
    })
  var bn = function (e, t) {
      return (
        vn.extractPropComments(e, t),
        mn.createDirective(t.transformRange(e.range), e.name, e.parameters)
      )
    },
    wn = Object.defineProperty({ transformDirective: bn }, '__esModule', {
      value: !0
    })
  var _n = function (e, t, n, r) {
      return h.__assign(
        h.__assign(
          h.__assign({}, Lt.createNode('document', e)),
          kt.createTrailingCommentAttachable(r)
        ),
        { children: [t, n] }
      )
    },
    En = Object.defineProperty({ createDocument: _n }, '__esModule', {
      value: !0
    })
  var Sn = function (e, t) {
    return { start: e, end: t }
  }
  var On = function (e) {
      return { start: e, end: e }
    },
    An = Object.defineProperty(
      { createPosition: Sn, createEmptyPosition: On },
      '__esModule',
      { value: !0 }
    )
  var Mn = function (e) {
      return void 0 === e && (e = []), { endComments: e }
    },
    Ln = Object.defineProperty(
      { createEndCommentAttachable: Mn },
      '__esModule',
      { value: !0 }
    )
  var Nn = function (e, t, n) {
      return h.__assign(
        h.__assign(
          h.__assign({}, Lt.createNode('documentBody', e)),
          Ln.createEndCommentAttachable(n)
        ),
        { children: t ? [t] : [] }
      )
    },
    Tn = Object.defineProperty({ createDocumentBody: Nn }, '__esModule', {
      value: !0
    })
  var Pn = function (e) {
      return e[e.length - 1]
    },
    Cn = Object.defineProperty({ getLast: Pn }, '__esModule', { value: !0 })
  var xn = function (e, t) {
      var n = e.match(t)
      return n ? n.index : -1
    },
    Rn = Object.defineProperty({ getMatchIndex: xn }, '__esModule', {
      value: !0
    })
  var In = function (e, t, n) {
    var r,
      o = e.cstNode,
      i = (function (e, t, n) {
        for (
          var r = [], o = [], i = [], s = [], a = !1, c = e.contents.length - 1;
          c >= 0;
          c--
        ) {
          var u = e.contents[c]
          if ('COMMENT' === u.type) {
            var l = t.transformNode(u)
            n && n.line === l.position.start.line
              ? s.unshift(l)
              : a
              ? r.unshift(l)
              : l.position.start.offset >= e.valueRange.origEnd
              ? i.unshift(l)
              : r.unshift(l)
          } else a = !0
        }
        if (i.length > 1)
          throw new Error(
            'Unexpected multiple document trailing comments at ' +
              wt.getPointText(i[1].position.start)
          )
        if (s.length > 1)
          throw new Error(
            'Unexpected multiple documentHead trailing comments at ' +
              wt.getPointText(s[1].position.start)
          )
        return {
          comments: r,
          endComments: o,
          documentTrailingComment: Cn.getLast(i) || null,
          documentHeadTrailingComment: Cn.getLast(s) || null
        }
      })(o, t, n),
      s = i.comments,
      a = i.endComments,
      c = i.documentTrailingComment,
      u = i.documentHeadTrailingComment,
      l = t.transformNode(e.contents),
      f = (function (e, t, n) {
        var r = Rn.getMatchIndex(n.text.slice(e.valueRange.origEnd), /^\.\.\./),
          o =
            -1 === r
              ? e.valueRange.origEnd
              : Math.max(0, e.valueRange.origEnd - 1)
        '\r' === n.text[o - 1] && o--
        var i = n.transformRange({
            origStart: null !== t ? t.position.start.offset : o,
            origEnd: o
          }),
          s = -1 === r ? i.end : n.transformOffset(e.valueRange.origEnd + 3)
        return { position: i, documentEndPoint: s }
      })(o, l, t),
      p = f.position,
      d = f.documentEndPoint
    return (
      (r = t.comments).push.apply(r, h.__spreadArrays(s, a)),
      {
        documentBody: Tn.createDocumentBody(p, l, a),
        documentEndPoint: d,
        documentTrailingComment: c,
        documentHeadTrailingComment: u
      }
    )
  }
  var kn = Object.defineProperty({ transformDocumentBody: In }, '__esModule', {
    value: !0
  })
  var Bn = function (e, t, n, r) {
      return h.__assign(
        h.__assign(
          h.__assign(
            h.__assign({}, Lt.createNode('documentHead', e)),
            Ln.createEndCommentAttachable(n)
          ),
          kt.createTrailingCommentAttachable(r)
        ),
        { children: t }
      )
    },
    Yn = Object.defineProperty({ createDocumentHead: Bn }, '__esModule', {
      value: !0
    })
  var jn = function (e, t) {
    var n,
      r = e.cstNode,
      o = (function (e, t) {
        for (
          var n = [], r = [], o = [], i = !1, s = e.directives.length - 1;
          s >= 0;
          s--
        ) {
          var a = t.transformNode(e.directives[s])
          'comment' === a.type
            ? i
              ? r.unshift(a)
              : o.unshift(a)
            : ((i = !0), n.unshift(a))
        }
        return { directives: n, comments: r, endComments: o }
      })(r, t),
      i = o.directives,
      s = o.comments,
      a = o.endComments,
      c = (function (e, t, n) {
        var r = Rn.getMatchIndex(
          n.text.slice(0, e.valueRange.origStart),
          /---\s*$/
        )
        r > 0 && !/[\r\n]/.test(n.text[r - 1]) && (r = -1)
        var o =
          -1 === r
            ? {
                origStart: e.valueRange.origStart,
                origEnd: e.valueRange.origStart
              }
            : { origStart: r, origEnd: r + 3 }
        0 !== t.length && (o.origStart = t[0].position.start.offset)
        return {
          position: n.transformRange(o),
          endMarkerPoint: -1 === r ? null : n.transformOffset(r)
        }
      })(r, i, t),
      u = c.position,
      l = c.endMarkerPoint
    return (
      (n = t.comments).push.apply(n, h.__spreadArrays(s, a)),
      {
        createDocumentHeadWithTrailingComment: function (e) {
          return e && t.comments.push(e), Yn.createDocumentHead(u, i, a, e)
        },
        documentHeadEndMarkerPoint: l
      }
    )
  }
  var $n = Object.defineProperty({ transformDocumentHead: jn }, '__esModule', {
    value: !0
  })
  var Dn = function (e, t) {
      var n = $n.transformDocumentHead(e, t),
        r = n.createDocumentHeadWithTrailingComment,
        o = n.documentHeadEndMarkerPoint,
        i = kn.transformDocumentBody(e, t, o),
        s = i.documentBody,
        a = i.documentEndPoint,
        c = i.documentTrailingComment,
        u = r(i.documentHeadTrailingComment)
      return (
        c && t.comments.push(c),
        En.createDocument(An.createPosition(u.position.start, a), u, s, c)
      )
    },
    Fn = Object.defineProperty({ transformDocument: Dn }, '__esModule', {
      value: !0
    })
  var Un = function (e, t, n) {
      return h.__assign(
        h.__assign(
          h.__assign(
            h.__assign(
              h.__assign({}, Lt.createNode('flowCollection', e)),
              Yt.createCommentAttachable()
            ),
            Ln.createEndCommentAttachable()
          ),
          t
        ),
        { children: n }
      )
    },
    Wn = Object.defineProperty({ createFlowCollection: Un }, '__esModule', {
      value: !0
    })
  var Kn = function (e, t, n) {
      return h.__assign(h.__assign({}, Wn.createFlowCollection(e, t, n)), {
        type: 'flowMapping'
      })
    },
    Vn = Object.defineProperty({ createFlowMapping: Kn }, '__esModule', {
      value: !0
    })
  var Qn = function (e, t, n) {
      return h.__assign(
        h.__assign(
          h.__assign({}, Lt.createNode('flowMappingItem', e)),
          Rt.createLeadingCommentAttachable()
        ),
        { children: [t, n] }
      )
    },
    qn = Object.defineProperty({ createFlowMappingItem: Qn }, '__esModule', {
      value: !0
    })
  var Jn = function (e, t) {
      for (var n = [], r = 0, o = e; r < o.length; r++) {
        var i = o[r]
        i && 'type' in i && 'COMMENT' === i.type
          ? t.comments.push(t.transformNode(i))
          : n.push(i)
      }
      return n
    },
    Gn = Object.defineProperty({ extractComments: Jn }, '__esModule', {
      value: !0
    })
  var Hn = function (e) {
      var t = ['?', ':'].map(function (t) {
        var n = e.find(function (e) {
          return 'char' in e && e.char === t
        })
        return n ? { origStart: n.origOffset, origEnd: n.origOffset + 1 } : null
      })
      return { additionalKeyRange: t[0], additionalValueRange: t[1] }
    },
    zn = Object.defineProperty(
      { getFlowMapItemAdditionalRanges: Hn },
      '__esModule',
      { value: !0 }
    )
  var Zn = function (e, t) {
      var n = t
      return function (t) {
        return e.slice(n, (n = t))
      }
    },
    Xn = Object.defineProperty({ createSlicer: Zn }, '__esModule', {
      value: !0
    })
  var er = function (e) {
      for (
        var t = [], n = Xn.createSlicer(e, 1), r = !1, o = 1;
        o < e.length - 1;
        o++
      ) {
        var i = e[o]
        'char' in i && ',' === i.char
          ? (t.push(n(o)), n(o + 1), (r = !1))
          : (r = !0)
      }
      return r && t.push(n(e.length - 1)), t
    },
    tr = Object.defineProperty(
      { groupCstFlowCollectionItems: er },
      '__esModule',
      { value: !0 }
    )
  var nr = function (e, t) {
      return h.__assign(
        h.__assign(
          h.__assign(
            h.__assign({}, Lt.createNode('mappingKey', e)),
            kt.createTrailingCommentAttachable()
          ),
          Ln.createEndCommentAttachable()
        ),
        { children: t ? [t] : [] }
      )
    },
    rr = Object.defineProperty({ createMappingKey: nr }, '__esModule', {
      value: !0
    })
  var or = function (e, t) {
      return h.__assign(
        h.__assign(
          h.__assign(
            h.__assign({}, Lt.createNode('mappingValue', e)),
            Yt.createCommentAttachable()
          ),
          Ln.createEndCommentAttachable()
        ),
        { children: t ? [t] : [] }
      )
    },
    ir = Object.defineProperty({ createMappingValue: or }, '__esModule', {
      value: !0
    })
  var sr = function (e, t, n, r, o) {
      var i = t.transformNode(e.key),
        s = t.transformNode(e.value),
        a =
          i || r
            ? rr.createMappingKey(
                t.transformRange({
                  origStart: r ? r.origStart : i.position.start.offset,
                  origEnd: i ? i.position.end.offset : r.origStart + 1
                }),
                i
              )
            : null,
        c =
          s || o
            ? ir.createMappingValue(
                t.transformRange({
                  origStart: o ? o.origStart : s.position.start.offset,
                  origEnd: s ? s.position.end.offset : o.origStart + 1
                }),
                s
              )
            : null
      return n(
        An.createPosition(
          a ? a.position.start : c.position.start,
          c ? c.position.end : a.position.end
        ),
        a ||
          rr.createMappingKey(An.createEmptyPosition(c.position.start), null),
        c || ir.createMappingValue(An.createEmptyPosition(a.position.end), null)
      )
    },
    ar = Object.defineProperty({ transformAstPair: sr }, '__esModule', {
      value: !0
    })
  var cr = function (e, t) {
      var n = Gn.extractComments(e.cstNode.items, t),
        r = tr.groupCstFlowCollectionItems(n),
        o = e.items.map(function (e, n) {
          var o = r[n],
            i = zn.getFlowMapItemAdditionalRanges(o),
            s = i.additionalKeyRange,
            a = i.additionalValueRange
          return ar.transformAstPair(e, t, qn.createFlowMappingItem, s, a)
        }),
        i = n[0],
        s = Cn.getLast(n)
      return Vn.createFlowMapping(
        t.transformRange({
          origStart: i.origOffset,
          origEnd: s.origOffset + 1
        }),
        t.transformContent(e),
        o
      )
    },
    ur = Object.defineProperty({ transformFlowMap: cr }, '__esModule', {
      value: !0
    })
  var lr = function (e, t, n) {
      return h.__assign(h.__assign({}, Wn.createFlowCollection(e, t, n)), {
        type: 'flowSequence'
      })
    },
    fr = Object.defineProperty({ createFlowSequence: lr }, '__esModule', {
      value: !0
    })
  var hr = function (e, t) {
      return h.__assign(h.__assign({}, Lt.createNode('flowSequenceItem', e)), {
        children: [t]
      })
    },
    pr = Object.defineProperty({ createFlowSequenceItem: hr }, '__esModule', {
      value: !0
    })
  var dr = function (e, t) {
      var n = Gn.extractComments(e.cstNode.items, t),
        r = tr.groupCstFlowCollectionItems(n),
        o = e.items.map(function (e, n) {
          if ('PAIR' !== e.type) {
            var o = t.transformNode(e)
            return pr.createFlowSequenceItem(
              An.createPosition(o.position.start, o.position.end),
              o
            )
          }
          var i = r[n],
            s = zn.getFlowMapItemAdditionalRanges(i),
            a = s.additionalKeyRange,
            c = s.additionalValueRange
          return ar.transformAstPair(e, t, qn.createFlowMappingItem, a, c)
        }),
        i = n[0],
        s = Cn.getLast(n)
      return fr.createFlowSequence(
        t.transformRange({
          origStart: i.origOffset,
          origEnd: s.origOffset + 1
        }),
        t.transformContent(e),
        o
      )
    },
    gr = Object.defineProperty({ transformFlowSeq: dr }, '__esModule', {
      value: !0
    })
  var mr = function (e, t, n) {
      return h.__assign(
        h.__assign(
          h.__assign(
            h.__assign({}, Lt.createNode('mapping', e)),
            Rt.createLeadingCommentAttachable()
          ),
          t
        ),
        { children: n }
      )
    },
    yr = Object.defineProperty({ createMapping: mr }, '__esModule', {
      value: !0
    })
  var vr = function (e, t, n) {
      return h.__assign(
        h.__assign(
          h.__assign({}, Lt.createNode('mappingItem', e)),
          Rt.createLeadingCommentAttachable()
        ),
        { children: [t, n] }
      )
    },
    br = Object.defineProperty({ createMappingItem: vr }, '__esModule', {
      value: !0
    })
  var wr = function (e, t) {
    var n = e.cstNode
    n.items
      .filter(function (e) {
        return 'MAP_KEY' === e.type || 'MAP_VALUE' === e.type
      })
      .forEach(function (e) {
        return vn.extractPropComments(e, t)
      })
    var r = (function (e) {
        for (
          var t = [], n = Xn.createSlicer(e, 0), r = !1, o = 0;
          o < e.length;
          o++
        ) {
          'MAP_VALUE' !== e[o].type
            ? (r && t.push(n(o)), (r = !0))
            : (t.push(n(o + 1)), (r = !1))
        }
        r && t.push(n(1 / 0))
        return t
      })(Gn.extractComments(n.items, t)),
      o = e.items.map(function (e, n) {
        var o = r[n],
          i =
            'MAP_VALUE' === o[0].type
              ? [null, o[0].range]
              : [o[0].range, 1 === o.length ? null : o[1].range],
          s = i[0],
          a = i[1]
        return ar.transformAstPair(e, t, br.createMappingItem, s, a)
      })
    return yr.createMapping(
      An.createPosition(o[0].position.start, Cn.getLast(o).position.end),
      t.transformContent(e),
      o
    )
  }
  var _r = Object.defineProperty({ transformMap: wr }, '__esModule', {
    value: !0
  })
  var Er = function (e, t, n) {
      return h.__assign(
        h.__assign(
          h.__assign(
            h.__assign({}, Lt.createNode('plain', e)),
            Yt.createCommentAttachable()
          ),
          t
        ),
        { value: n }
      )
    },
    Sr = Object.defineProperty({ createPlain: Er }, '__esModule', { value: !0 })
  var Or = function (e, t, n) {
      for (var r = t; r >= 0; r--) if (n.test(e[r])) return r
      return -1
    },
    Ar = Object.defineProperty({ findLastCharIndex: Or }, '__esModule', {
      value: !0
    })
  var Mr = function (e, t) {
      var n = e.cstNode
      return Sr.createPlain(
        t.transformRange({
          origStart: n.valueRange.origStart,
          origEnd:
            Ar.findLastCharIndex(t.text, n.valueRange.origEnd - 1, /\S/) + 1
        }),
        t.transformContent(e),
        n.strValue
      )
    },
    Lr = Object.defineProperty({ transformPlain: Mr }, '__esModule', {
      value: !0
    })
  var Nr = function (e) {
      return h.__assign(h.__assign({}, e), { type: 'quoteDouble' })
    },
    Tr = Object.defineProperty({ createQuoteDouble: Nr }, '__esModule', {
      value: !0
    })
  var Pr = function (e, t, n) {
      return h.__assign(
        h.__assign(
          h.__assign(h.__assign({}, Lt.createNode('quoteValue', e)), t),
          Yt.createCommentAttachable()
        ),
        { value: n }
      )
    },
    Cr = Object.defineProperty({ createQuoteValue: Pr }, '__esModule', {
      value: !0
    })
  var xr = function (e, t) {
      var n = e.cstNode
      return Cr.createQuoteValue(
        t.transformRange(n.valueRange),
        t.transformContent(e),
        n.strValue
      )
    },
    Rr = Object.defineProperty({ transformAstQuoteValue: xr }, '__esModule', {
      value: !0
    })
  var Ir = function (e, t) {
      return Tr.createQuoteDouble(Rr.transformAstQuoteValue(e, t))
    },
    kr = Object.defineProperty({ transformQuoteDouble: Ir }, '__esModule', {
      value: !0
    })
  var Br = function (e) {
      return h.__assign(h.__assign({}, e), { type: 'quoteSingle' })
    },
    Yr = Object.defineProperty({ createQuoteSingle: Br }, '__esModule', {
      value: !0
    })
  var jr = function (e, t) {
      return Yr.createQuoteSingle(Rr.transformAstQuoteValue(e, t))
    },
    $r = Object.defineProperty({ transformQuoteSingle: jr }, '__esModule', {
      value: !0
    })
  var Dr = function (e, t, n) {
      return h.__assign(
        h.__assign(
          h.__assign(
            h.__assign(
              h.__assign({}, Lt.createNode('sequence', e)),
              Rt.createLeadingCommentAttachable()
            ),
            Ln.createEndCommentAttachable()
          ),
          t
        ),
        { children: n }
      )
    },
    Fr = Object.defineProperty({ createSequence: Dr }, '__esModule', {
      value: !0
    })
  var Ur = function (e, t) {
      return h.__assign(
        h.__assign(
          h.__assign(
            h.__assign({}, Lt.createNode('sequenceItem', e)),
            Yt.createCommentAttachable()
          ),
          Ln.createEndCommentAttachable()
        ),
        { children: t ? [t] : [] }
      )
    },
    Wr = Object.defineProperty({ createSequenceItem: Ur }, '__esModule', {
      value: !0
    })
  var Kr = function (e, t) {
      var n = Gn.extractComments(e.cstNode.items, t).map(function (n, r) {
        vn.extractPropComments(n, t)
        var o = t.transformNode(e.items[r])
        return Wr.createSequenceItem(
          An.createPosition(
            t.transformOffset(n.valueRange.origStart),
            null === o
              ? t.transformOffset(n.valueRange.origStart + 1)
              : o.position.end
          ),
          o
        )
      })
      return Fr.createSequence(
        An.createPosition(n[0].position.start, Cn.getLast(n).position.end),
        t.transformContent(e),
        n
      )
    },
    Vr = Object.defineProperty({ transformSeq: Kr }, '__esModule', {
      value: !0
    })
  var Qr = function (e, t) {
      if (null === e || (void 0 === e.type && null === e.value)) return null
      switch (e.type) {
        case 'ALIAS':
          return Ft.transformAlias(e, t)
        case 'BLOCK_FOLDED':
          return cn.transformBlockFolded(e, t)
        case 'BLOCK_LITERAL':
          return hn.transformBlockLiteral(e, t)
        case 'COMMENT':
          return dn.transformComment(e, t)
        case 'DIRECTIVE':
          return wn.transformDirective(e, t)
        case 'DOCUMENT':
          return Fn.transformDocument(e, t)
        case 'FLOW_MAP':
          return ur.transformFlowMap(e, t)
        case 'FLOW_SEQ':
          return gr.transformFlowSeq(e, t)
        case 'MAP':
          return _r.transformMap(e, t)
        case 'PLAIN':
          return Lr.transformPlain(e, t)
        case 'QUOTE_DOUBLE':
          return kr.transformQuoteDouble(e, t)
        case 'QUOTE_SINGLE':
          return $r.transformQuoteSingle(e, t)
        case 'SEQ':
          return Vr.transformSeq(e, t)
        default:
          throw new Error('Unexpected node type ' + e.type)
      }
    },
    qr = Object.defineProperty({ transformNode: Qr }, '__esModule', {
      value: !0
    })
  var Jr = function (e, t, n) {
      var r = new SyntaxError(e)
      return (r.name = 'YAMLSyntaxError'), (r.source = t), (r.position = n), r
    },
    Gr = Object.defineProperty({ createError: Jr }, '__esModule', { value: !0 })
  var Hr = function (e, t) {
      var n = e.source.range || e.source.valueRange
      return Gr.createError(e.message, t.text, t.transformRange(n))
    },
    zr = Object.defineProperty({ transformError: Hr }, '__esModule', {
      value: !0
    })
  var Zr = function (e, t, n) {
      return { offset: e, line: t, column: n }
    },
    Xr = Object.defineProperty({ createPoint: Zr }, '__esModule', { value: !0 })
  var eo = function (e, t) {
      e < 0 ? (e = 0) : e > t.text.length && (e = t.text.length)
      var n = t.locator.locationForIndex(e)
      return Xr.createPoint(e, n.line + 1, n.column + 1)
    },
    to = Object.defineProperty({ transformOffset: eo }, '__esModule', {
      value: !0
    })
  var no = function (e, t) {
      return An.createPosition(
        t.transformOffset(e.origStart),
        t.transformOffset(e.origEnd)
      )
    },
    ro = Object.defineProperty({ transformRange: no }, '__esModule', {
      value: !0
    }),
    oo = !0
  var io = function (e) {
    if (!e.setOrigRanges()) {
      var t = function (e) {
        return (function (e) {
          return 'number' == typeof e.start
        })(e)
          ? ((e.origStart = e.start), (e.origEnd = e.end), oo)
          : (function (e) {
              return 'number' == typeof e.offset
            })(e)
          ? ((e.origOffset = e.offset), oo)
          : void 0
      }
      e.forEach(function (e) {
        return so(e, t)
      })
    }
  }
  function so(e, t) {
    if (e && 'object' == typeof e && t(e) !== oo)
      for (var n = 0, r = Object.keys(e); n < r.length; n++) {
        var o = r[n]
        if ('context' !== o && 'error' !== o) {
          var i = e[o]
          Array.isArray(i)
            ? i.forEach(function (e) {
                return so(e, t)
              })
            : so(i, t)
        }
      }
  }
  var ao = Object.defineProperty({ addOrigRange: io }, '__esModule', {
    value: !0
  })
  var co = function e(t) {
      if ('children' in t) {
        if (1 === t.children.length) {
          var n = t.children[0]
          if (
            'plain' === n.type &&
            null === n.tag &&
            null === n.anchor &&
            '' === n.value
          )
            return t.children.splice(0, 1), t
        }
        t.children.forEach(e)
      }
      return t
    },
    uo = Object.defineProperty({ removeFakeNodes: co }, '__esModule', {
      value: !0
    })
  var lo = function (e, t, n, r) {
      var o = t(e)
      return function (t) {
        r(o, t) && n(e, (o = t))
      }
    },
    fo = Object.defineProperty({ createUpdater: lo }, '__esModule', {
      value: !0
    })
  var ho = function e(t) {
    if (null !== t && 'children' in t) {
      var n = t.children
      if ((n.forEach(e), 'document' === t.type)) {
        var r = t.children,
          o = r[0],
          i = r[1]
        o.position.start.offset === o.position.end.offset
          ? (o.position.start = o.position.end = i.position.start)
          : i.position.start.offset === i.position.end.offset &&
            (i.position.start = i.position.end = o.position.end)
      }
      var s = fo.createUpdater(t.position, po, go, vo),
        a = fo.createUpdater(t.position, mo, yo, bo)
      'endComments' in t &&
        0 !== t.endComments.length &&
        (s(t.endComments[0].position.start),
        a(Cn.getLast(t.endComments).position.end))
      var c = n.filter(function (e) {
        return null !== e
      })
      if (0 !== c.length) {
        var u = c[0],
          l = Cn.getLast(c)
        s(u.position.start),
          a(l.position.end),
          'leadingComments' in u &&
            0 !== u.leadingComments.length &&
            s(u.leadingComments[0].position.start),
          'tag' in u && u.tag && s(u.tag.position.start),
          'anchor' in u && u.anchor && s(u.anchor.position.start),
          'trailingComment' in l &&
            l.trailingComment &&
            a(l.trailingComment.position.end)
      }
    }
  }
  function po(e) {
    return e.start
  }
  function go(e, t) {
    e.start = t
  }
  function mo(e) {
    return e.end
  }
  function yo(e, t) {
    e.end = t
  }
  function vo(e, t) {
    return t.offset < e.offset
  }
  function bo(e, t) {
    return t.offset > e.offset
  }
  var wo = Object.defineProperty({ updatePositions: ho }, '__esModule', {
    value: !0
  })
  const _o = {
      ANCHOR: '&',
      COMMENT: '#',
      TAG: '!',
      DIRECTIVES_END: '-',
      DOCUMENT_END: '.'
    },
    Eo = {
      ALIAS: 'ALIAS',
      BLANK_LINE: 'BLANK_LINE',
      BLOCK_FOLDED: 'BLOCK_FOLDED',
      BLOCK_LITERAL: 'BLOCK_LITERAL',
      COMMENT: 'COMMENT',
      DIRECTIVE: 'DIRECTIVE',
      DOCUMENT: 'DOCUMENT',
      FLOW_MAP: 'FLOW_MAP',
      FLOW_SEQ: 'FLOW_SEQ',
      MAP: 'MAP',
      MAP_KEY: 'MAP_KEY',
      MAP_VALUE: 'MAP_VALUE',
      PLAIN: 'PLAIN',
      QUOTE_DOUBLE: 'QUOTE_DOUBLE',
      QUOTE_SINGLE: 'QUOTE_SINGLE',
      SEQ: 'SEQ',
      SEQ_ITEM: 'SEQ_ITEM'
    }
  function So(e) {
    const t = [0]
    let n = e.indexOf('\n')
    for (; -1 !== n; ) (n += 1), t.push(n), (n = e.indexOf('\n', n))
    return t
  }
  function Oo(e) {
    let t, n
    return (
      'string' == typeof e
        ? ((t = So(e)), (n = e))
        : (Array.isArray(e) && (e = e[0]),
          e &&
            e.context &&
            (e.lineStarts || (e.lineStarts = So(e.context.src)),
            (t = e.lineStarts),
            (n = e.context.src))),
      { lineStarts: t, src: n }
    )
  }
  function Ao(e, t) {
    if ('number' != typeof e || e < 0) return null
    const { lineStarts: n, src: r } = Oo(t)
    if (!n || !r || e > r.length) return null
    for (let t = 0; t < n.length; ++t) {
      const r = n[t]
      if (e < r) return { line: t, col: e - n[t - 1] + 1 }
      if (e === r) return { line: t + 1, col: 1 }
    }
    const o = n.length
    return { line: o, col: e - n[o - 1] + 1 }
  }
  function Mo({ start: e, end: t }, n, r = 80) {
    let o = (function (e, t) {
      const { lineStarts: n, src: r } = Oo(t)
      if (!n || !(e >= 1) || e > n.length) return null
      const o = n[e - 1]
      let i = n[e]
      for (; i && i > o && '\n' === r[i - 1]; ) --i
      return r.slice(o, i)
    })(e.line, n)
    if (!o) return null
    let { col: i } = e
    if (o.length > r)
      if (i <= r - 10) o = o.substr(0, r - 1) + '\u2026'
      else {
        const e = Math.round(r / 2)
        o.length > i + e && (o = o.substr(0, i + e - 1) + '\u2026'),
          (i -= o.length - r),
          (o = '\u2026' + o.substr(1 - r))
      }
    let s = 1,
      a = ''
    t &&
      (t.line === e.line && i + (t.col - e.col) <= r + 1
        ? (s = t.col - e.col)
        : ((s = Math.min(o.length + 1, r) - i), (a = '\u2026')))
    return `${o}\n${i > 1 ? ' '.repeat(i - 1) : ''}${'^'.repeat(s)}${a}`
  }
  class Lo {
    static copy(e) {
      return new Lo(e.start, e.end)
    }
    constructor(e, t) {
      ;(this.start = e), (this.end = t || e)
    }
    isEmpty() {
      return (
        'number' != typeof this.start || !this.end || this.end <= this.start
      )
    }
    setOrigRange(e, t) {
      const { start: n, end: r } = this
      if (0 === e.length || r <= e[0])
        return (this.origStart = n), (this.origEnd = r), t
      let o = t
      for (; o < e.length && !(e[o] > n); ) ++o
      this.origStart = n + o
      const i = o
      for (; o < e.length && !(e[o] >= r); ) ++o
      return (this.origEnd = r + o), i
    }
  }
  class No {
    static addStringTerminator(e, t, n) {
      if ('\n' === n[n.length - 1]) return n
      const r = No.endOfWhiteSpace(e, t)
      return r >= e.length || '\n' === e[r] ? n + '\n' : n
    }
    static atDocumentBoundary(e, t, n) {
      const r = e[t]
      if (!r) return !0
      const o = e[t - 1]
      if (o && '\n' !== o) return !1
      if (n) {
        if (r !== n) return !1
      } else if (r !== _o.DIRECTIVES_END && r !== _o.DOCUMENT_END) return !1
      const i = e[t + 1],
        s = e[t + 2]
      if (i !== r || s !== r) return !1
      const a = e[t + 3]
      return !a || '\n' === a || '\t' === a || ' ' === a
    }
    static endOfIdentifier(e, t) {
      let n = e[t]
      const r = '<' === n,
        o = r
          ? ['\n', '\t', ' ', '>']
          : ['\n', '\t', ' ', '[', ']', '{', '}', ',']
      for (; n && -1 === o.indexOf(n); ) n = e[(t += 1)]
      return r && '>' === n && (t += 1), t
    }
    static endOfIndent(e, t) {
      let n = e[t]
      for (; ' ' === n; ) n = e[(t += 1)]
      return t
    }
    static endOfLine(e, t) {
      let n = e[t]
      for (; n && '\n' !== n; ) n = e[(t += 1)]
      return t
    }
    static endOfWhiteSpace(e, t) {
      let n = e[t]
      for (; '\t' === n || ' ' === n; ) n = e[(t += 1)]
      return t
    }
    static startOfLine(e, t) {
      let n = e[t - 1]
      if ('\n' === n) return t
      for (; n && '\n' !== n; ) n = e[(t -= 1)]
      return t + 1
    }
    static endOfBlockIndent(e, t, n) {
      const r = No.endOfIndent(e, n)
      if (r > n + t) return r
      {
        const t = No.endOfWhiteSpace(e, r),
          n = e[t]
        if (!n || '\n' === n) return t
      }
      return null
    }
    static atBlank(e, t, n) {
      const r = e[t]
      return '\n' === r || '\t' === r || ' ' === r || (n && !r)
    }
    static nextNodeIsIndented(e, t, n) {
      return !(!e || t < 0) && (t > 0 || (n && '-' === e))
    }
    static normalizeOffset(e, t) {
      const n = e[t]
      return n
        ? '\n' !== n && '\n' === e[t - 1]
          ? t - 1
          : No.endOfWhiteSpace(e, t)
        : t
    }
    static foldNewline(e, t, n) {
      let r = 0,
        o = !1,
        i = '',
        s = e[t + 1]
      for (; ' ' === s || '\t' === s || '\n' === s; ) {
        switch (s) {
          case '\n':
            ;(r = 0), (t += 1), (i += '\n')
            break
          case '\t':
            r <= n && (o = !0), (t = No.endOfWhiteSpace(e, t + 2) - 1)
            break
          case ' ':
            ;(r += 1), (t += 1)
        }
        s = e[t + 1]
      }
      return (
        i || (i = ' '),
        s && r <= n && (o = !0),
        { fold: i, offset: t, error: o }
      )
    }
    constructor(e, t, n) {
      Object.defineProperty(this, 'context', {
        value: n || null,
        writable: !0
      }),
        (this.error = null),
        (this.range = null),
        (this.valueRange = null),
        (this.props = t || []),
        (this.type = e),
        (this.value = null)
    }
    getPropValue(e, t, n) {
      if (!this.context) return null
      const { src: r } = this.context,
        o = this.props[e]
      return o && r[o.start] === t
        ? r.slice(o.start + (n ? 1 : 0), o.end)
        : null
    }
    get anchor() {
      for (let e = 0; e < this.props.length; ++e) {
        const t = this.getPropValue(e, _o.ANCHOR, !0)
        if (null != t) return t
      }
      return null
    }
    get comment() {
      const e = []
      for (let t = 0; t < this.props.length; ++t) {
        const n = this.getPropValue(t, _o.COMMENT, !0)
        null != n && e.push(n)
      }
      return e.length > 0 ? e.join('\n') : null
    }
    commentHasRequiredWhitespace(e) {
      const { src: t } = this.context
      if (this.header && e === this.header.end) return !1
      if (!this.valueRange) return !1
      const { end: n } = this.valueRange
      return e !== n || No.atBlank(t, n - 1)
    }
    get hasComment() {
      if (this.context) {
        const { src: e } = this.context
        for (let t = 0; t < this.props.length; ++t)
          if (e[this.props[t].start] === _o.COMMENT) return !0
      }
      return !1
    }
    get hasProps() {
      if (this.context) {
        const { src: e } = this.context
        for (let t = 0; t < this.props.length; ++t)
          if (e[this.props[t].start] !== _o.COMMENT) return !0
      }
      return !1
    }
    get includesTrailingLines() {
      return !1
    }
    get jsonLike() {
      return (
        -1 !==
        [Eo.FLOW_MAP, Eo.FLOW_SEQ, Eo.QUOTE_DOUBLE, Eo.QUOTE_SINGLE].indexOf(
          this.type
        )
      )
    }
    get rangeAsLinePos() {
      if (!this.range || !this.context) return
      const e = Ao(this.range.start, this.context.root)
      if (!e) return
      return { start: e, end: Ao(this.range.end, this.context.root) }
    }
    get rawValue() {
      if (!this.valueRange || !this.context) return null
      const { start: e, end: t } = this.valueRange
      return this.context.src.slice(e, t)
    }
    get tag() {
      for (let e = 0; e < this.props.length; ++e) {
        const t = this.getPropValue(e, _o.TAG, !1)
        if (null != t) {
          if ('<' === t[1]) return { verbatim: t.slice(2, -1) }
          {
            const [e, n, r] = t.match(/^(.*!)([^!]*)$/)
            return { handle: n, suffix: r }
          }
        }
      }
      return null
    }
    get valueRangeContainsNewline() {
      if (!this.valueRange || !this.context) return !1
      const { start: e, end: t } = this.valueRange,
        { src: n } = this.context
      for (let r = e; r < t; ++r) if ('\n' === n[r]) return !0
      return !1
    }
    parseComment(e) {
      const { src: t } = this.context
      if (t[e] === _o.COMMENT) {
        const n = No.endOfLine(t, e + 1),
          r = new Lo(e, n)
        return this.props.push(r), n
      }
      return e
    }
    setOrigRanges(e, t) {
      return (
        this.range && (t = this.range.setOrigRange(e, t)),
        this.valueRange && this.valueRange.setOrigRange(e, t),
        this.props.forEach((n) => n.setOrigRange(e, t)),
        t
      )
    }
    toString() {
      const {
        context: { src: e },
        range: t,
        value: n
      } = this
      if (null != n) return n
      const r = e.slice(t.start, t.end)
      return No.addStringTerminator(e, t.end, r)
    }
  }
  class To extends Error {
    constructor(e, t, n) {
      if (!(n && t instanceof No))
        throw new Error(`Invalid arguments for new ${e}`)
      super(), (this.name = e), (this.message = n), (this.source = t)
    }
    makePretty() {
      if (!this.source) return
      this.nodeType = this.source.type
      const e = this.source.context && this.source.context.root
      if ('number' == typeof this.offset) {
        this.range = new Lo(this.offset, this.offset + 1)
        const t = e && Ao(this.offset, e)
        if (t) {
          const e = { line: t.line, col: t.col + 1 }
          this.linePos = { start: t, end: e }
        }
        delete this.offset
      } else (this.range = this.source.range), (this.linePos = this.source.rangeAsLinePos)
      if (this.linePos) {
        const { line: t, col: n } = this.linePos.start
        this.message += ` at line ${t}, column ${n}`
        const r = e && Mo(this.linePos, e)
        r && (this.message += `:\n\n${r}\n`)
      }
      delete this.source
    }
  }
  class Po extends To {
    constructor(e, t) {
      super('YAMLSemanticError', e, t)
    }
  }
  class Co extends No {
    static endOfLine(e, t, n) {
      let r = e[t],
        o = t
      for (
        ;
        r &&
        '\n' !== r &&
        (!n || ('[' !== r && ']' !== r && '{' !== r && '}' !== r && ',' !== r));

      ) {
        const t = e[o + 1]
        if (
          ':' === r &&
          (!t || '\n' === t || '\t' === t || ' ' === t || (n && ',' === t))
        )
          break
        if ((' ' === r || '\t' === r) && '#' === t) break
        ;(o += 1), (r = t)
      }
      return o
    }
    get strValue() {
      if (!this.valueRange || !this.context) return null
      let { start: e, end: t } = this.valueRange
      const { src: n } = this.context
      let r = n[t - 1]
      for (; e < t && ('\n' === r || '\t' === r || ' ' === r); ) r = n[--t - 1]
      let o = ''
      for (let r = e; r < t; ++r) {
        const e = n[r]
        if ('\n' === e) {
          const { fold: e, offset: t } = No.foldNewline(n, r, -1)
          ;(o += e), (r = t)
        } else if (' ' === e || '\t' === e) {
          const i = r
          let s = n[r + 1]
          for (; r < t && (' ' === s || '\t' === s); ) (r += 1), (s = n[r + 1])
          '\n' !== s && (o += r > i ? n.slice(i, r + 1) : e)
        } else o += e
      }
      const i = n[e]
      switch (i) {
        case '\t':
          return {
            errors: [
              new Po(this, 'Plain value cannot start with a tab character')
            ],
            str: o
          }
        case '@':
        case '`':
          return {
            errors: [
              new Po(
                this,
                `Plain value cannot start with reserved character ${i}`
              )
            ],
            str: o
          }
        default:
          return o
      }
    }
    parseBlockValue(e) {
      const { indent: t, inFlow: n, src: r } = this.context
      let o = e,
        i = e
      for (
        let e = r[o];
        '\n' === e && !No.atDocumentBoundary(r, o + 1);
        e = r[o]
      ) {
        const e = No.endOfBlockIndent(r, t, o + 1)
        if (null === e || '#' === r[e]) break
        '\n' === r[e] ? (o = e) : ((i = Co.endOfLine(r, e, n)), (o = i))
      }
      return (
        this.valueRange.isEmpty() && (this.valueRange.start = e),
        (this.valueRange.end = i),
        i
      )
    }
    parse(e, t) {
      this.context = e
      const { inFlow: n, src: r } = e
      let o = t
      const i = r[o]
      return (
        i && '#' !== i && '\n' !== i && (o = Co.endOfLine(r, t, n)),
        (this.valueRange = new Lo(t, o)),
        (o = No.endOfWhiteSpace(r, o)),
        (o = this.parseComment(o)),
        (this.hasComment && !this.valueRange.isEmpty()) ||
          (o = this.parseBlockValue(o)),
        o
      )
    }
  }
  var xo = {
    Char: _o,
    Node: No,
    PlainValue: Co,
    Range: Lo,
    Type: Eo,
    YAMLError: To,
    YAMLReferenceError: class extends To {
      constructor(e, t) {
        super('YAMLReferenceError', e, t)
      }
    },
    YAMLSemanticError: Po,
    YAMLSyntaxError: class extends To {
      constructor(e, t) {
        super('YAMLSyntaxError', e, t)
      }
    },
    YAMLWarning: class extends To {
      constructor(e, t) {
        super('YAMLWarning', e, t)
      }
    },
    _defineProperty: function (e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      )
    },
    defaultTagPrefix: 'tag:yaml.org,2002:',
    defaultTags: {
      MAP: 'tag:yaml.org,2002:map',
      SEQ: 'tag:yaml.org,2002:seq',
      STR: 'tag:yaml.org,2002:str'
    }
  }
  class Ro extends xo.Node {
    constructor() {
      super(xo.Type.BLANK_LINE)
    }
    get includesTrailingLines() {
      return !0
    }
    parse(e, t) {
      return (this.context = e), (this.range = new xo.Range(t, t + 1)), t + 1
    }
  }
  class Io extends xo.Node {
    constructor(e, t) {
      super(e, t), (this.node = null)
    }
    get includesTrailingLines() {
      return !!this.node && this.node.includesTrailingLines
    }
    parse(e, t) {
      this.context = e
      const { parseNode: n, src: r } = e
      let { atLineStart: o, lineStart: i } = e
      o ||
        this.type !== xo.Type.SEQ_ITEM ||
        (this.error = new xo.YAMLSemanticError(
          this,
          'Sequence items must not have preceding content on the same line'
        ))
      const s = o ? t - i : e.indent
      let a = xo.Node.endOfWhiteSpace(r, t + 1),
        c = r[a]
      const u = '#' === c,
        l = []
      let f = null
      for (; '\n' === c || '#' === c; ) {
        if ('#' === c) {
          const e = xo.Node.endOfLine(r, a + 1)
          l.push(new xo.Range(a, e)), (a = e)
        } else {
          ;(o = !0), (i = a + 1)
          '\n' === r[xo.Node.endOfWhiteSpace(r, i)] &&
            0 === l.length &&
            ((f = new Ro()), (i = f.parse({ src: r }, i))),
            (a = xo.Node.endOfIndent(r, i))
        }
        c = r[a]
      }
      if (
        (xo.Node.nextNodeIsIndented(
          c,
          a - (i + s),
          this.type !== xo.Type.SEQ_ITEM
        )
          ? (this.node = n(
              {
                atLineStart: o,
                inCollection: !1,
                indent: s,
                lineStart: i,
                parent: this
              },
              a
            ))
          : c && i > t + 1 && (a = i - 1),
        this.node)
      ) {
        if (f) {
          const t = e.parent.items || e.parent.contents
          t && t.push(f)
        }
        l.length && Array.prototype.push.apply(this.props, l),
          (a = this.node.range.end)
      } else if (u) {
        const e = l[0]
        this.props.push(e), (a = e.end)
      } else a = xo.Node.endOfLine(r, t + 1)
      const h = this.node ? this.node.valueRange.end : a
      return (this.valueRange = new xo.Range(t, h)), a
    }
    setOrigRanges(e, t) {
      return (
        (t = super.setOrigRanges(e, t)),
        this.node ? this.node.setOrigRanges(e, t) : t
      )
    }
    toString() {
      const {
        context: { src: e },
        node: t,
        range: n,
        value: r
      } = this
      if (null != r) return r
      const o = t
        ? e.slice(n.start, t.range.start) + String(t)
        : e.slice(n.start, n.end)
      return xo.Node.addStringTerminator(e, n.end, o)
    }
  }
  class ko extends xo.Node {
    constructor() {
      super(xo.Type.COMMENT)
    }
    parse(e, t) {
      this.context = e
      const n = this.parseComment(t)
      return (this.range = new xo.Range(t, n)), n
    }
  }
  function Bo(e) {
    let t = e
    for (; t instanceof Io; ) t = t.node
    if (!(t instanceof Yo)) return null
    const n = t.items.length
    let r = -1
    for (let e = n - 1; e >= 0; --e) {
      const n = t.items[e]
      if (n.type === xo.Type.COMMENT) {
        const { indent: t, lineStart: o } = n.context
        if (t > 0 && n.range.start >= o + t) break
        r = e
      } else {
        if (n.type !== xo.Type.BLANK_LINE) break
        r = e
      }
    }
    if (-1 === r) return null
    const o = t.items.splice(r, n - r),
      i = o[0].range.start
    for (
      ;
      (t.range.end = i),
        t.valueRange && t.valueRange.end > i && (t.valueRange.end = i),
        t !== e;

    )
      t = t.context.parent
    return o
  }
  class Yo extends xo.Node {
    static nextContentHasIndent(e, t, n) {
      const r = xo.Node.endOfLine(e, t) + 1,
        o = e[(t = xo.Node.endOfWhiteSpace(e, r))]
      return (
        !!o &&
        (t >= r + n ||
          (('#' === o || '\n' === o) && Yo.nextContentHasIndent(e, t, n)))
      )
    }
    constructor(e) {
      super(e.type === xo.Type.SEQ_ITEM ? xo.Type.SEQ : xo.Type.MAP)
      for (let t = e.props.length - 1; t >= 0; --t)
        if (e.props[t].start < e.context.lineStart) {
          ;(this.props = e.props.slice(0, t + 1)),
            (e.props = e.props.slice(t + 1))
          const n = e.props[0] || e.valueRange
          e.range.start = n.start
          break
        }
      this.items = [e]
      const t = Bo(e)
      t && Array.prototype.push.apply(this.items, t)
    }
    get includesTrailingLines() {
      return this.items.length > 0
    }
    parse(e, t) {
      this.context = e
      const { parseNode: n, src: r } = e
      let o = xo.Node.startOfLine(r, t)
      const i = this.items[0]
      ;(i.context.parent = this),
        (this.valueRange = xo.Range.copy(i.valueRange))
      const s = i.range.start - i.context.lineStart
      let a = t
      a = xo.Node.normalizeOffset(r, a)
      let c = r[a],
        u = xo.Node.endOfWhiteSpace(r, o) === a,
        l = !1
      for (; c; ) {
        for (; '\n' === c || '#' === c; ) {
          if (u && '\n' === c && !l) {
            const e = new Ro()
            if (
              ((a = e.parse({ src: r }, a)),
              (this.valueRange.end = a),
              a >= r.length)
            ) {
              c = null
              break
            }
            this.items.push(e), (a -= 1)
          } else if ('#' === c) {
            if (a < o + s && !Yo.nextContentHasIndent(r, a, s)) return a
            const e = new ko()
            if (
              ((a = e.parse({ indent: s, lineStart: o, src: r }, a)),
              this.items.push(e),
              (this.valueRange.end = a),
              a >= r.length)
            ) {
              c = null
              break
            }
          }
          if (
            ((o = a + 1),
            (a = xo.Node.endOfIndent(r, o)),
            xo.Node.atBlank(r, a))
          ) {
            const e = xo.Node.endOfWhiteSpace(r, a),
              t = r[e]
            ;(t && '\n' !== t && '#' !== t) || (a = e)
          }
          ;(c = r[a]), (u = !0)
        }
        if (!c) break
        if (a !== o + s && (u || ':' !== c)) {
          if (a < o + s) {
            o > t && (a = o)
            break
          }
          if (!this.error) {
            const e = 'All collection items must start at the same column'
            this.error = new xo.YAMLSyntaxError(this, e)
          }
        }
        if (i.type === xo.Type.SEQ_ITEM) {
          if ('-' !== c) {
            o > t && (a = o)
            break
          }
        } else if ('-' === c && !this.error) {
          const e = r[a + 1]
          if (!e || '\n' === e || '\t' === e || ' ' === e) {
            const e = 'A collection cannot be both a mapping and a sequence'
            this.error = new xo.YAMLSyntaxError(this, e)
          }
        }
        const e = n(
          {
            atLineStart: u,
            inCollection: !0,
            indent: s,
            lineStart: o,
            parent: this
          },
          a
        )
        if (!e) return a
        if (
          (this.items.push(e),
          (this.valueRange.end = e.valueRange.end),
          (a = xo.Node.normalizeOffset(r, e.range.end)),
          (c = r[a]),
          (u = !1),
          (l = e.includesTrailingLines),
          c)
        ) {
          let e = a - 1,
            t = r[e]
          for (; ' ' === t || '\t' === t; ) t = r[--e]
          '\n' === t && ((o = e + 1), (u = !0))
        }
        const f = Bo(e)
        f && Array.prototype.push.apply(this.items, f)
      }
      return a
    }
    setOrigRanges(e, t) {
      return (
        (t = super.setOrigRanges(e, t)),
        this.items.forEach((n) => {
          t = n.setOrigRanges(e, t)
        }),
        t
      )
    }
    toString() {
      const {
        context: { src: e },
        items: t,
        range: n,
        value: r
      } = this
      if (null != r) return r
      let o = e.slice(n.start, t[0].range.start) + String(t[0])
      for (let e = 1; e < t.length; ++e) {
        const n = t[e],
          { atLineStart: r, indent: i } = n.context
        if (r) for (let e = 0; e < i; ++e) o += ' '
        o += String(n)
      }
      return xo.Node.addStringTerminator(e, n.end, o)
    }
  }
  class jo extends xo.Node {
    constructor() {
      super(xo.Type.DIRECTIVE), (this.name = null)
    }
    get parameters() {
      const e = this.rawValue
      return e ? e.trim().split(/[ \t]+/) : []
    }
    parseName(e) {
      const { src: t } = this.context
      let n = e,
        r = t[n]
      for (; r && '\n' !== r && '\t' !== r && ' ' !== r; ) r = t[(n += 1)]
      return (this.name = t.slice(e, n)), n
    }
    parseParameters(e) {
      const { src: t } = this.context
      let n = e,
        r = t[n]
      for (; r && '\n' !== r && '#' !== r; ) r = t[(n += 1)]
      return (this.valueRange = new xo.Range(e, n)), n
    }
    parse(e, t) {
      this.context = e
      let n = this.parseName(t + 1)
      return (
        (n = this.parseParameters(n)),
        (n = this.parseComment(n)),
        (this.range = new xo.Range(t, n)),
        n
      )
    }
  }
  class $o extends xo.Node {
    static startCommentOrEndBlankLine(e, t) {
      const n = xo.Node.endOfWhiteSpace(e, t),
        r = e[n]
      return '#' === r || '\n' === r ? n : t
    }
    constructor() {
      super(xo.Type.DOCUMENT),
        (this.directives = null),
        (this.contents = null),
        (this.directivesEndMarker = null),
        (this.documentEndMarker = null)
    }
    parseDirectives(e) {
      const { src: t } = this.context
      this.directives = []
      let n = !0,
        r = !1,
        o = e
      for (; !xo.Node.atDocumentBoundary(t, o, xo.Char.DIRECTIVES_END); )
        switch (((o = $o.startCommentOrEndBlankLine(t, o)), t[o])) {
          case '\n':
            if (n) {
              const e = new Ro()
              ;(o = e.parse({ src: t }, o)),
                o < t.length && this.directives.push(e)
            } else (o += 1), (n = !0)
            break
          case '#':
            {
              const e = new ko()
              ;(o = e.parse({ src: t }, o)), this.directives.push(e), (n = !1)
            }
            break
          case '%':
            {
              const e = new jo()
              ;(o = e.parse({ parent: this, src: t }, o)),
                this.directives.push(e),
                (r = !0),
                (n = !1)
            }
            break
          default:
            return (
              r
                ? (this.error = new xo.YAMLSemanticError(
                    this,
                    'Missing directives-end indicator line'
                  ))
                : this.directives.length > 0 &&
                  ((this.contents = this.directives), (this.directives = [])),
              o
            )
        }
      return t[o]
        ? ((this.directivesEndMarker = new xo.Range(o, o + 3)), o + 3)
        : (r
            ? (this.error = new xo.YAMLSemanticError(
                this,
                'Missing directives-end indicator line'
              ))
            : this.directives.length > 0 &&
              ((this.contents = this.directives), (this.directives = [])),
          o)
    }
    parseContents(e) {
      const { parseNode: t, src: n } = this.context
      this.contents || (this.contents = [])
      let r = e
      for (; '-' === n[r - 1]; ) r -= 1
      let o = xo.Node.endOfWhiteSpace(n, e),
        i = r === e
      for (
        this.valueRange = new xo.Range(o);
        !xo.Node.atDocumentBoundary(n, o, xo.Char.DOCUMENT_END);

      ) {
        switch (n[o]) {
          case '\n':
            if (i) {
              const e = new Ro()
              ;(o = e.parse({ src: n }, o)),
                o < n.length && this.contents.push(e)
            } else (o += 1), (i = !0)
            r = o
            break
          case '#':
            {
              const e = new ko()
              ;(o = e.parse({ src: n }, o)), this.contents.push(e), (i = !1)
            }
            break
          default: {
            const e = xo.Node.endOfIndent(n, o),
              s = t(
                {
                  atLineStart: i,
                  indent: -1,
                  inFlow: !1,
                  inCollection: !1,
                  lineStart: r,
                  parent: this
                },
                e
              )
            if (!s) return (this.valueRange.end = e)
            this.contents.push(s), (o = s.range.end), (i = !1)
            const a = Bo(s)
            a && Array.prototype.push.apply(this.contents, a)
          }
        }
        o = $o.startCommentOrEndBlankLine(n, o)
      }
      if (
        ((this.valueRange.end = o),
        n[o] &&
          ((this.documentEndMarker = new xo.Range(o, o + 3)), (o += 3), n[o]))
      ) {
        if (((o = xo.Node.endOfWhiteSpace(n, o)), '#' === n[o])) {
          const e = new ko()
          ;(o = e.parse({ src: n }, o)), this.contents.push(e)
        }
        switch (n[o]) {
          case '\n':
            o += 1
            break
          case void 0:
            break
          default:
            this.error = new xo.YAMLSyntaxError(
              this,
              'Document end marker line cannot have a non-comment suffix'
            )
        }
      }
      return o
    }
    parse(e, t) {
      ;(e.root = this), (this.context = e)
      const { src: n } = e
      let r = 65279 === n.charCodeAt(t) ? t + 1 : t
      return (r = this.parseDirectives(r)), (r = this.parseContents(r)), r
    }
    setOrigRanges(e, t) {
      return (
        (t = super.setOrigRanges(e, t)),
        this.directives.forEach((n) => {
          t = n.setOrigRanges(e, t)
        }),
        this.directivesEndMarker &&
          (t = this.directivesEndMarker.setOrigRange(e, t)),
        this.contents.forEach((n) => {
          t = n.setOrigRanges(e, t)
        }),
        this.documentEndMarker &&
          (t = this.documentEndMarker.setOrigRange(e, t)),
        t
      )
    }
    toString() {
      const { contents: e, directives: t, value: n } = this
      if (null != n) return n
      let r = t.join('')
      return (
        e.length > 0 &&
          ((t.length > 0 || e[0].type === xo.Type.COMMENT) && (r += '---\n'),
          (r += e.join(''))),
        '\n' !== r[r.length - 1] && (r += '\n'),
        r
      )
    }
  }
  class Do extends xo.Node {
    parse(e, t) {
      this.context = e
      const { src: n } = e
      let r = xo.Node.endOfIdentifier(n, t + 1)
      return (
        (this.valueRange = new xo.Range(t + 1, r)),
        (r = xo.Node.endOfWhiteSpace(n, r)),
        (r = this.parseComment(r)),
        r
      )
    }
  }
  const Fo = 'CLIP',
    Uo = 'KEEP',
    Wo = 'STRIP'
  class Ko extends xo.Node {
    constructor(e, t) {
      super(e, t),
        (this.blockIndent = null),
        (this.chomping = Fo),
        (this.header = null)
    }
    get includesTrailingLines() {
      return this.chomping === Uo
    }
    get strValue() {
      if (!this.valueRange || !this.context) return null
      let { start: e, end: t } = this.valueRange
      const { indent: n, src: r } = this.context
      if (this.valueRange.isEmpty()) return ''
      let o = null,
        i = r[t - 1]
      for (; '\n' === i || '\t' === i || ' ' === i; ) {
        if (((t -= 1), t <= e)) {
          if (this.chomping === Uo) break
          return ''
        }
        '\n' === i && (o = t), (i = r[t - 1])
      }
      let s = t + 1
      o &&
        (this.chomping === Uo ? ((s = o), (t = this.valueRange.end)) : (t = o))
      const a = n + this.blockIndent,
        c = this.type === xo.Type.BLOCK_FOLDED
      let u = !0,
        l = '',
        f = '',
        h = !1
      for (let n = e; n < t; ++n) {
        for (let e = 0; e < a && ' ' === r[n]; ++e) n += 1
        const e = r[n]
        if ('\n' === e) '\n' === f ? (l += '\n') : (f = '\n')
        else {
          const o = xo.Node.endOfLine(r, n),
            i = r.slice(n, o)
          ;(n = o),
            c && (' ' === e || '\t' === e) && n < s
              ? (' ' === f ? (f = '\n') : h || u || '\n' !== f || (f = '\n\n'),
                (l += f + i),
                (f = (o < t && r[o]) || ''),
                (h = !0))
              : ((l += f + i), (f = c && n < s ? ' ' : '\n'), (h = !1)),
            u && '' !== i && (u = !1)
        }
      }
      return this.chomping === Wo ? l : l + '\n'
    }
    parseBlockHeader(e) {
      const { src: t } = this.context
      let n = e + 1,
        r = ''
      for (;;) {
        const o = t[n]
        switch (o) {
          case '-':
            this.chomping = Wo
            break
          case '+':
            this.chomping = Uo
            break
          case '0':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
            r += o
            break
          default:
            return (
              (this.blockIndent = Number(r) || null),
              (this.header = new xo.Range(e, n)),
              n
            )
        }
        n += 1
      }
    }
    parseBlockValue(e) {
      const { indent: t, src: n } = this.context,
        r = !!this.blockIndent
      let o = e,
        i = e,
        s = 1
      for (
        let e = n[o];
        '\n' === e && ((o += 1), !xo.Node.atDocumentBoundary(n, o));
        e = n[o]
      ) {
        const e = xo.Node.endOfBlockIndent(n, t, o)
        if (null === e) break
        const a = n[e],
          c = e - (o + t)
        if (this.blockIndent) {
          if (a && '\n' !== a && c < this.blockIndent) {
            if ('#' === n[e]) break
            if (!this.error) {
              const e = `Block scalars must not be less indented than their ${
                r ? 'explicit indentation indicator' : 'first line'
              }`
              this.error = new xo.YAMLSemanticError(this, e)
            }
          }
        } else if ('\n' !== n[e]) {
          if (c < s) {
            const e =
              'Block scalars with more-indented leading empty lines must use an explicit indentation indicator'
            this.error = new xo.YAMLSemanticError(this, e)
          }
          this.blockIndent = c
        } else c > s && (s = c)
        o = '\n' === n[e] ? e : (i = xo.Node.endOfLine(n, e))
      }
      return (
        this.chomping !== Uo && (o = n[i] ? i + 1 : i),
        (this.valueRange = new xo.Range(e + 1, o)),
        o
      )
    }
    parse(e, t) {
      this.context = e
      const { src: n } = e
      let r = this.parseBlockHeader(t)
      return (
        (r = xo.Node.endOfWhiteSpace(n, r)),
        (r = this.parseComment(r)),
        (r = this.parseBlockValue(r)),
        r
      )
    }
    setOrigRanges(e, t) {
      return (
        (t = super.setOrigRanges(e, t)),
        this.header ? this.header.setOrigRange(e, t) : t
      )
    }
  }
  class Vo extends xo.Node {
    constructor(e, t) {
      super(e, t), (this.items = null)
    }
    prevNodeIsJsonLike(e = this.items.length) {
      const t = this.items[e - 1]
      return (
        !!t &&
        (t.jsonLike ||
          (t.type === xo.Type.COMMENT && this.prevNodeIsJsonLike(e - 1)))
      )
    }
    parse(e, t) {
      this.context = e
      const { parseNode: n, src: r } = e
      let { indent: o, lineStart: i } = e,
        s = r[t]
      this.items = [{ char: s, offset: t }]
      let a = xo.Node.endOfWhiteSpace(r, t + 1)
      for (s = r[a]; s && ']' !== s && '}' !== s; ) {
        switch (s) {
          case '\n':
            i = a + 1
            if ('\n' === r[xo.Node.endOfWhiteSpace(r, i)]) {
              const e = new Ro()
              ;(i = e.parse({ src: r }, i)), this.items.push(e)
            }
            if (
              ((a = xo.Node.endOfIndent(r, i)),
              a <= i + o && ((s = r[a]), a < i + o || (']' !== s && '}' !== s)))
            ) {
              const e = 'Insufficient indentation in flow collection'
              this.error = new xo.YAMLSemanticError(this, e)
            }
            break
          case ',':
            this.items.push({ char: s, offset: a }), (a += 1)
            break
          case '#':
            {
              const e = new ko()
              ;(a = e.parse({ src: r }, a)), this.items.push(e)
            }
            break
          case '?':
          case ':': {
            const e = r[a + 1]
            if (
              '\n' === e ||
              '\t' === e ||
              ' ' === e ||
              ',' === e ||
              (':' === s && this.prevNodeIsJsonLike())
            ) {
              this.items.push({ char: s, offset: a }), (a += 1)
              break
            }
          }
          default: {
            const e = n(
              {
                atLineStart: !1,
                inCollection: !1,
                inFlow: !0,
                indent: -1,
                lineStart: i,
                parent: this
              },
              a
            )
            if (!e) return (this.valueRange = new xo.Range(t, a)), a
            this.items.push(e), (a = xo.Node.normalizeOffset(r, e.range.end))
          }
        }
        ;(a = xo.Node.endOfWhiteSpace(r, a)), (s = r[a])
      }
      return (
        (this.valueRange = new xo.Range(t, a + 1)),
        s &&
          (this.items.push({ char: s, offset: a }),
          (a = xo.Node.endOfWhiteSpace(r, a + 1)),
          (a = this.parseComment(a))),
        a
      )
    }
    setOrigRanges(e, t) {
      return (
        (t = super.setOrigRanges(e, t)),
        this.items.forEach((n) => {
          if (n instanceof xo.Node) t = n.setOrigRanges(e, t)
          else if (0 === e.length) n.origOffset = n.offset
          else {
            let r = t
            for (; r < e.length && !(e[r] > n.offset); ) ++r
            ;(n.origOffset = n.offset + r), (t = r)
          }
        }),
        t
      )
    }
    toString() {
      const {
        context: { src: e },
        items: t,
        range: n,
        value: r
      } = this
      if (null != r) return r
      const o = t.filter((e) => e instanceof xo.Node)
      let i = '',
        s = n.start
      return (
        o.forEach((t) => {
          const n = e.slice(s, t.range.start)
          ;(s = t.range.end),
            (i += n + String(t)),
            '\n' === i[i.length - 1] &&
              '\n' !== e[s - 1] &&
              '\n' === e[s] &&
              (s += 1)
        }),
        (i += e.slice(s, n.end)),
        xo.Node.addStringTerminator(e, n.end, i)
      )
    }
  }
  class Qo extends xo.Node {
    static endOfQuote(e, t) {
      let n = e[t]
      for (; n && '"' !== n; ) n = e[(t += '\\' === n ? 2 : 1)]
      return t + 1
    }
    get strValue() {
      if (!this.valueRange || !this.context) return null
      const e = [],
        { start: t, end: n } = this.valueRange,
        { indent: r, src: o } = this.context
      '"' !== o[n - 1] &&
        e.push(new xo.YAMLSyntaxError(this, 'Missing closing "quote'))
      let i = ''
      for (let s = t + 1; s < n - 1; ++s) {
        const t = o[s]
        if ('\n' === t) {
          xo.Node.atDocumentBoundary(o, s + 1) &&
            e.push(
              new xo.YAMLSemanticError(
                this,
                'Document boundary indicators are not allowed within string values'
              )
            )
          const { fold: t, offset: n, error: a } = xo.Node.foldNewline(o, s, r)
          ;(i += t),
            (s = n),
            a &&
              e.push(
                new xo.YAMLSemanticError(
                  this,
                  'Multi-line double-quoted string needs to be sufficiently indented'
                )
              )
        } else if ('\\' === t)
          switch (((s += 1), o[s])) {
            case '0':
              i += '\0'
              break
            case 'a':
              i += '\x07'
              break
            case 'b':
              i += '\b'
              break
            case 'e':
              i += '\x1b'
              break
            case 'f':
              i += '\f'
              break
            case 'n':
              i += '\n'
              break
            case 'r':
              i += '\r'
              break
            case 't':
              i += '\t'
              break
            case 'v':
              i += '\v'
              break
            case 'N':
              i += '\x85'
              break
            case '_':
              i += '\xa0'
              break
            case 'L':
              i += '\u2028'
              break
            case 'P':
              i += '\u2029'
              break
            case ' ':
              i += ' '
              break
            case '"':
              i += '"'
              break
            case '/':
              i += '/'
              break
            case '\\':
              i += '\\'
              break
            case '\t':
              i += '\t'
              break
            case 'x':
              ;(i += this.parseCharCode(s + 1, 2, e)), (s += 2)
              break
            case 'u':
              ;(i += this.parseCharCode(s + 1, 4, e)), (s += 4)
              break
            case 'U':
              ;(i += this.parseCharCode(s + 1, 8, e)), (s += 8)
              break
            case '\n':
              for (; ' ' === o[s + 1] || '\t' === o[s + 1]; ) s += 1
              break
            default:
              e.push(
                new xo.YAMLSyntaxError(
                  this,
                  `Invalid escape sequence ${o.substr(s - 1, 2)}`
                )
              ),
                (i += '\\' + o[s])
          }
        else if (' ' === t || '\t' === t) {
          const e = s
          let n = o[s + 1]
          for (; ' ' === n || '\t' === n; ) (s += 1), (n = o[s + 1])
          '\n' !== n && (i += s > e ? o.slice(e, s + 1) : t)
        } else i += t
      }
      return e.length > 0 ? { errors: e, str: i } : i
    }
    parseCharCode(e, t, n) {
      const { src: r } = this.context,
        o = r.substr(e, t),
        i = o.length === t && /^[0-9a-fA-F]+$/.test(o) ? parseInt(o, 16) : NaN
      return isNaN(i)
        ? (n.push(
            new xo.YAMLSyntaxError(
              this,
              `Invalid escape sequence ${r.substr(e - 2, t + 2)}`
            )
          ),
          r.substr(e - 2, t + 2))
        : String.fromCodePoint(i)
    }
    parse(e, t) {
      this.context = e
      const { src: n } = e
      let r = Qo.endOfQuote(n, t + 1)
      return (
        (this.valueRange = new xo.Range(t, r)),
        (r = xo.Node.endOfWhiteSpace(n, r)),
        (r = this.parseComment(r)),
        r
      )
    }
  }
  class qo extends xo.Node {
    static endOfQuote(e, t) {
      let n = e[t]
      for (; n; )
        if ("'" === n) {
          if ("'" !== e[t + 1]) break
          n = e[(t += 2)]
        } else n = e[(t += 1)]
      return t + 1
    }
    get strValue() {
      if (!this.valueRange || !this.context) return null
      const e = [],
        { start: t, end: n } = this.valueRange,
        { indent: r, src: o } = this.context
      "'" !== o[n - 1] &&
        e.push(new xo.YAMLSyntaxError(this, "Missing closing 'quote"))
      let i = ''
      for (let s = t + 1; s < n - 1; ++s) {
        const t = o[s]
        if ('\n' === t) {
          xo.Node.atDocumentBoundary(o, s + 1) &&
            e.push(
              new xo.YAMLSemanticError(
                this,
                'Document boundary indicators are not allowed within string values'
              )
            )
          const { fold: t, offset: n, error: a } = xo.Node.foldNewline(o, s, r)
          ;(i += t),
            (s = n),
            a &&
              e.push(
                new xo.YAMLSemanticError(
                  this,
                  'Multi-line single-quoted string needs to be sufficiently indented'
                )
              )
        } else if ("'" === t)
          (i += t),
            (s += 1),
            "'" !== o[s] &&
              e.push(
                new xo.YAMLSyntaxError(
                  this,
                  'Unescaped single quote? This should not happen.'
                )
              )
        else if (' ' === t || '\t' === t) {
          const e = s
          let n = o[s + 1]
          for (; ' ' === n || '\t' === n; ) (s += 1), (n = o[s + 1])
          '\n' !== n && (i += s > e ? o.slice(e, s + 1) : t)
        } else i += t
      }
      return e.length > 0 ? { errors: e, str: i } : i
    }
    parse(e, t) {
      this.context = e
      const { src: n } = e
      let r = qo.endOfQuote(n, t + 1)
      return (
        (this.valueRange = new xo.Range(t, r)),
        (r = xo.Node.endOfWhiteSpace(n, r)),
        (r = this.parseComment(r)),
        r
      )
    }
  }
  class Jo {
    static parseType(e, t, n) {
      switch (e[t]) {
        case '*':
          return xo.Type.ALIAS
        case '>':
          return xo.Type.BLOCK_FOLDED
        case '|':
          return xo.Type.BLOCK_LITERAL
        case '{':
          return xo.Type.FLOW_MAP
        case '[':
          return xo.Type.FLOW_SEQ
        case '?':
          return !n && xo.Node.atBlank(e, t + 1, !0)
            ? xo.Type.MAP_KEY
            : xo.Type.PLAIN
        case ':':
          return !n && xo.Node.atBlank(e, t + 1, !0)
            ? xo.Type.MAP_VALUE
            : xo.Type.PLAIN
        case '-':
          return !n && xo.Node.atBlank(e, t + 1, !0)
            ? xo.Type.SEQ_ITEM
            : xo.Type.PLAIN
        case '"':
          return xo.Type.QUOTE_DOUBLE
        case "'":
          return xo.Type.QUOTE_SINGLE
        default:
          return xo.Type.PLAIN
      }
    }
    constructor(
      e = {},
      {
        atLineStart: t,
        inCollection: n,
        inFlow: r,
        indent: o,
        lineStart: i,
        parent: s
      } = {}
    ) {
      xo._defineProperty(this, 'parseNode', (e, t) => {
        if (xo.Node.atDocumentBoundary(this.src, t)) return null
        const n = new Jo(this, e),
          { props: r, type: o, valueStart: i } = n.parseProps(t),
          s = (function (e, t) {
            switch (e) {
              case xo.Type.ALIAS:
                return new Do(e, t)
              case xo.Type.BLOCK_FOLDED:
              case xo.Type.BLOCK_LITERAL:
                return new Ko(e, t)
              case xo.Type.FLOW_MAP:
              case xo.Type.FLOW_SEQ:
                return new Vo(e, t)
              case xo.Type.MAP_KEY:
              case xo.Type.MAP_VALUE:
              case xo.Type.SEQ_ITEM:
                return new Io(e, t)
              case xo.Type.COMMENT:
              case xo.Type.PLAIN:
                return new xo.PlainValue(e, t)
              case xo.Type.QUOTE_DOUBLE:
                return new Qo(e, t)
              case xo.Type.QUOTE_SINGLE:
                return new qo(e, t)
              default:
                return null
            }
          })(o, r)
        let a = s.parse(n, i)
        if (
          ((s.range = new xo.Range(t, a)),
          a <= t &&
            ((s.error = new Error('Node#parse consumed no characters')),
            (s.error.parseEnd = a),
            (s.error.source = s),
            (s.range.end = t + 1)),
          n.nodeStartsCollection(s))
        ) {
          s.error ||
            n.atLineStart ||
            n.parent.type !== xo.Type.DOCUMENT ||
            (s.error = new xo.YAMLSyntaxError(
              s,
              'Block collection must not have preceding content here (e.g. directives-end indicator)'
            ))
          const e = new Yo(s)
          return (a = e.parse(new Jo(n), a)), (e.range = new xo.Range(t, a)), e
        }
        return s
      }),
        (this.atLineStart = null != t ? t : e.atLineStart || !1),
        (this.inCollection = null != n ? n : e.inCollection || !1),
        (this.inFlow = null != r ? r : e.inFlow || !1),
        (this.indent = null != o ? o : e.indent),
        (this.lineStart = null != i ? i : e.lineStart),
        (this.parent = null != s ? s : e.parent || {}),
        (this.root = e.root),
        (this.src = e.src)
    }
    nodeStartsCollection(e) {
      const { inCollection: t, inFlow: n, src: r } = this
      if (t || n) return !1
      if (e instanceof Io) return !0
      let o = e.range.end
      return (
        '\n' !== r[o] &&
        '\n' !== r[o - 1] &&
        ((o = xo.Node.endOfWhiteSpace(r, o)), ':' === r[o])
      )
    }
    parseProps(e) {
      const { inFlow: t, parent: n, src: r } = this,
        o = []
      let i = !1,
        s =
          r[
            (e = this.atLineStart
              ? xo.Node.endOfIndent(r, e)
              : xo.Node.endOfWhiteSpace(r, e))
          ]
      for (
        ;
        s === xo.Char.ANCHOR ||
        s === xo.Char.COMMENT ||
        s === xo.Char.TAG ||
        '\n' === s;

      ) {
        if ('\n' === s) {
          let t,
            o = e
          do {
            ;(t = o + 1), (o = xo.Node.endOfIndent(r, t))
          } while ('\n' === r[o])
          const s = o - (t + this.indent),
            a = n.type === xo.Type.SEQ_ITEM && n.context.atLineStart
          if ('#' !== r[o] && !xo.Node.nextNodeIsIndented(r[o], s, !a)) break
          ;(this.atLineStart = !0), (this.lineStart = t), (i = !1), (e = o)
        } else if (s === xo.Char.COMMENT) {
          const t = xo.Node.endOfLine(r, e + 1)
          o.push(new xo.Range(e, t)), (e = t)
        } else {
          let t = xo.Node.endOfIdentifier(r, e + 1)
          s === xo.Char.TAG &&
            ',' === r[t] &&
            /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+,\d\d\d\d(-\d\d){0,2}\/\S/.test(
              r.slice(e + 1, t + 13)
            ) &&
            (t = xo.Node.endOfIdentifier(r, t + 5)),
            o.push(new xo.Range(e, t)),
            (i = !0),
            (e = xo.Node.endOfWhiteSpace(r, t))
        }
        s = r[e]
      }
      i && ':' === s && xo.Node.atBlank(r, e + 1, !0) && (e -= 1)
      return { props: o, type: Jo.parseType(r, e, t), valueStart: e }
    }
  }
  var Go = {
    parse: function (e) {
      const t = []
      ;-1 !== e.indexOf('\r') &&
        (e = e.replace(/\r\n?/g, (e, n) => (e.length > 1 && t.push(n), '\n')))
      const n = []
      let r = 0
      do {
        const t = new $o(),
          o = new Jo({ src: e })
        ;(r = t.parse(o, r)), n.push(t)
      } while (r < e.length)
      return (
        (n.setOrigRanges = () => {
          if (0 === t.length) return !1
          for (let e = 1; e < t.length; ++e) t[e] -= e
          let e = 0
          for (let r = 0; r < n.length; ++r) e = n[r].setOrigRanges(t, e)
          return t.splice(0, t.length), !0
        }),
        (n.toString = () => n.join('...\n')),
        n
      )
    }
  }
  function Ho(e, t, n) {
    return n
      ? -1 === n.indexOf('\n')
        ? `${e} #${n}`
        : `${e}\n` + n.replace(/^/gm, `${t || ''}#`)
      : e
  }
  class zo {}
  function Zo(e, t, n) {
    if (Array.isArray(e)) return e.map((e, t) => Zo(e, String(t), n))
    if (e && 'function' == typeof e.toJSON) {
      const r = n && n.anchors && n.anchors.get(e)
      r &&
        (n.onCreate = (e) => {
          ;(r.res = e), delete n.onCreate
        })
      const o = e.toJSON(t, n)
      return r && n.onCreate && n.onCreate(o), o
    }
    return (n && n.keep) || 'bigint' != typeof e ? e : Number(e)
  }
  class Xo extends zo {
    constructor(e) {
      super(), (this.value = e)
    }
    toJSON(e, t) {
      return t && t.keep ? this.value : Zo(this.value, e, t)
    }
    toString() {
      return String(this.value)
    }
  }
  function ei(e, t, n) {
    let r = n
    for (let e = t.length - 1; e >= 0; --e) {
      const n = t[e]
      if (Number.isInteger(n) && n >= 0) {
        const e = []
        ;(e[n] = r), (r = e)
      } else {
        const e = {}
        Object.defineProperty(e, n, {
          value: r,
          writable: !0,
          enumerable: !0,
          configurable: !0
        }),
          (r = e)
      }
    }
    return e.createNode(r, !1)
  }
  const ti = (e) =>
    null == e || ('object' == typeof e && e[Symbol.iterator]().next().done)
  class ni extends zo {
    constructor(e) {
      super(), xo._defineProperty(this, 'items', []), (this.schema = e)
    }
    addIn(e, t) {
      if (ti(e)) this.add(t)
      else {
        const [n, ...r] = e,
          o = this.get(n, !0)
        if (o instanceof ni) o.addIn(r, t)
        else {
          if (void 0 !== o || !this.schema)
            throw new Error(
              `Expected YAML collection at ${n}. Remaining path: ${r}`
            )
          this.set(n, ei(this.schema, r, t))
        }
      }
    }
    deleteIn([e, ...t]) {
      if (0 === t.length) return this.delete(e)
      const n = this.get(e, !0)
      if (n instanceof ni) return n.deleteIn(t)
      throw new Error(`Expected YAML collection at ${e}. Remaining path: ${t}`)
    }
    getIn([e, ...t], n) {
      const r = this.get(e, !0)
      return 0 === t.length
        ? !n && r instanceof Xo
          ? r.value
          : r
        : r instanceof ni
        ? r.getIn(t, n)
        : void 0
    }
    hasAllNullValues() {
      return this.items.every((e) => {
        if (!e || 'PAIR' !== e.type) return !1
        const t = e.value
        return (
          null == t ||
          (t instanceof Xo &&
            null == t.value &&
            !t.commentBefore &&
            !t.comment &&
            !t.tag)
        )
      })
    }
    hasIn([e, ...t]) {
      if (0 === t.length) return this.has(e)
      const n = this.get(e, !0)
      return n instanceof ni && n.hasIn(t)
    }
    setIn([e, ...t], n) {
      if (0 === t.length) this.set(e, n)
      else {
        const r = this.get(e, !0)
        if (r instanceof ni) r.setIn(t, n)
        else {
          if (void 0 !== r || !this.schema)
            throw new Error(
              `Expected YAML collection at ${e}. Remaining path: ${t}`
            )
          this.set(e, ei(this.schema, t, n))
        }
      }
    }
    toJSON() {
      return null
    }
    toString(e, { blockItem: t, flowChars: n, isMap: r, itemIndent: o }, i, s) {
      const { indent: a, indentStep: c, stringify: u } = e,
        l =
          this.type === xo.Type.FLOW_MAP ||
          this.type === xo.Type.FLOW_SEQ ||
          e.inFlow
      l && (o += c)
      const f = r && this.hasAllNullValues()
      e = Object.assign({}, e, {
        allNullValues: f,
        indent: o,
        inFlow: l,
        type: null
      })
      let h = !1,
        p = !1
      const d = this.items.reduce((t, n, r) => {
        let i
        n &&
          (!h && n.spaceBefore && t.push({ type: 'comment', str: '' }),
          n.commentBefore &&
            n.commentBefore.match(/^.*$/gm).forEach((e) => {
              t.push({ type: 'comment', str: `#${e}` })
            }),
          n.comment && (i = n.comment),
          l &&
            ((!h && n.spaceBefore) ||
              n.commentBefore ||
              n.comment ||
              (n.key && (n.key.commentBefore || n.key.comment)) ||
              (n.value && (n.value.commentBefore || n.value.comment))) &&
            (p = !0)),
          (h = !1)
        let s = u(
          n,
          e,
          () => (i = null),
          () => (h = !0)
        )
        return (
          l && !p && s.includes('\n') && (p = !0),
          l && r < this.items.length - 1 && (s += ','),
          (s = Ho(s, o, i)),
          h && (i || l) && (h = !1),
          t.push({ type: 'item', str: s }),
          t
        )
      }, [])
      let g
      if (0 === d.length) g = n.start + n.end
      else if (l) {
        const { start: e, end: t } = n,
          r = d.map((e) => e.str)
        if (
          p ||
          r.reduce((e, t) => e + t.length + 2, 2) >
            ni.maxFlowStringSingleLineLength
        ) {
          g = e
          for (const e of r) g += e ? `\n${c}${a}${e}` : '\n'
          g += `\n${a}${t}`
        } else g = `${e} ${r.join(' ')} ${t}`
      } else {
        const e = d.map(t)
        g = e.shift()
        for (const t of e) g += t ? `\n${a}${t}` : '\n'
      }
      return (
        this.comment
          ? ((g += '\n' + this.comment.replace(/^/gm, `${a}#`)), i && i())
          : h && s && s(),
        g
      )
    }
  }
  function ri(e) {
    let t = e instanceof Xo ? e.value : e
    return (
      t && 'string' == typeof t && (t = Number(t)),
      Number.isInteger(t) && t >= 0 ? t : null
    )
  }
  xo._defineProperty(ni, 'maxFlowStringSingleLineLength', 60)
  class oi extends ni {
    add(e) {
      this.items.push(e)
    }
    delete(e) {
      const t = ri(e)
      if ('number' != typeof t) return !1
      return this.items.splice(t, 1).length > 0
    }
    get(e, t) {
      const n = ri(e)
      if ('number' != typeof n) return
      const r = this.items[n]
      return !t && r instanceof Xo ? r.value : r
    }
    has(e) {
      const t = ri(e)
      return 'number' == typeof t && t < this.items.length
    }
    set(e, t) {
      const n = ri(e)
      if ('number' != typeof n)
        throw new Error(`Expected a valid index, not ${e}.`)
      this.items[n] = t
    }
    toJSON(e, t) {
      const n = []
      t && t.onCreate && t.onCreate(n)
      let r = 0
      for (const e of this.items) n.push(Zo(e, String(r++), t))
      return n
    }
    toString(e, t, n) {
      return e
        ? super.toString(
            e,
            {
              blockItem: (e) => ('comment' === e.type ? e.str : `- ${e.str}`),
              flowChars: { start: '[', end: ']' },
              isMap: !1,
              itemIndent: (e.indent || '') + '  '
            },
            t,
            n
          )
        : JSON.stringify(this)
    }
  }
  class ii extends zo {
    constructor(e, t = null) {
      super(), (this.key = e), (this.value = t), (this.type = ii.Type.PAIR)
    }
    get commentBefore() {
      return this.key instanceof zo ? this.key.commentBefore : void 0
    }
    set commentBefore(e) {
      if (
        (null == this.key && (this.key = new Xo(null)),
        !(this.key instanceof zo))
      ) {
        throw new Error(
          'Pair.commentBefore is an alias for Pair.key.commentBefore. To set it, the key must be a Node.'
        )
      }
      this.key.commentBefore = e
    }
    addToJSMap(e, t) {
      const n = Zo(this.key, '', e)
      if (t instanceof Map) {
        const r = Zo(this.value, n, e)
        t.set(n, r)
      } else if (t instanceof Set) t.add(n)
      else {
        const r = ((e, t, n) =>
            null === t
              ? ''
              : 'object' != typeof t
              ? String(t)
              : e instanceof zo && n && n.doc
              ? e.toString({
                  anchors: Object.create(null),
                  doc: n.doc,
                  indent: '',
                  indentStep: n.indentStep,
                  inFlow: !0,
                  inStringifyKey: !0,
                  stringify: n.stringify
                })
              : JSON.stringify(t))(this.key, n, e),
          o = Zo(this.value, r, e)
        r in t
          ? Object.defineProperty(t, r, {
              value: o,
              writable: !0,
              enumerable: !0,
              configurable: !0
            })
          : (t[r] = o)
      }
      return t
    }
    toJSON(e, t) {
      const n = t && t.mapAsMap ? new Map() : {}
      return this.addToJSMap(t, n)
    }
    toString(e, t, n) {
      if (!e || !e.doc) return JSON.stringify(this)
      const { indent: r, indentSeq: o, simpleKeys: i } = e.doc.options
      let { key: s, value: a } = this,
        c = s instanceof zo && s.comment
      if (i) {
        if (c)
          throw new Error('With simple keys, key nodes cannot have comments')
        if (s instanceof ni) {
          throw new Error(
            'With simple keys, collection cannot be used as a key value'
          )
        }
      }
      let u =
        !i &&
        (!s ||
          c ||
          (s instanceof zo
            ? s instanceof ni ||
              s.type === xo.Type.BLOCK_FOLDED ||
              s.type === xo.Type.BLOCK_LITERAL
            : 'object' == typeof s))
      const { doc: l, indent: f, indentStep: h, stringify: p } = e
      e = Object.assign({}, e, { implicitKey: !u, indent: f + h })
      let d = !1,
        g = p(
          s,
          e,
          () => (c = null),
          () => (d = !0)
        )
      if (((g = Ho(g, e.indent, c)), !u && g.length > 1024)) {
        if (i)
          throw new Error(
            'With simple keys, single line scalar must not span more than 1024 characters'
          )
        u = !0
      }
      if (e.allNullValues && !i)
        return (
          this.comment
            ? ((g = Ho(g, e.indent, this.comment)), t && t())
            : d && !c && n && n(),
          e.inFlow && !u ? g : `? ${g}`
        )
      ;(g = u ? `? ${g}\n${f}:` : `${g}:`),
        this.comment && ((g = Ho(g, e.indent, this.comment)), t && t())
      let m = '',
        y = null
      if (a instanceof zo) {
        if ((a.spaceBefore && (m = '\n'), a.commentBefore)) {
          m += `\n${a.commentBefore.replace(/^/gm, `${e.indent}#`)}`
        }
        y = a.comment
      } else a && 'object' == typeof a && (a = l.schema.createNode(a, !0))
      ;(e.implicitKey = !1),
        !u &&
          !this.comment &&
          a instanceof Xo &&
          (e.indentAtStart = g.length + 1),
        (d = !1),
        !o &&
          r >= 2 &&
          !e.inFlow &&
          !u &&
          a instanceof oi &&
          a.type !== xo.Type.FLOW_SEQ &&
          !a.tag &&
          !l.anchors.getName(a) &&
          (e.indent = e.indent.substr(2))
      const v = p(
        a,
        e,
        () => (y = null),
        () => (d = !0)
      )
      let b = ' '
      if (m || this.comment) b = `${m}\n${e.indent}`
      else if (!u && a instanceof ni) {
        ;(('[' === v[0] || '{' === v[0]) && !v.includes('\n')) ||
          (b = `\n${e.indent}`)
      } else '\n' === v[0] && (b = '')
      return d && !y && n && n(), Ho(g + b + v, e.indent, y)
    }
  }
  xo._defineProperty(ii, 'Type', { PAIR: 'PAIR', MERGE_PAIR: 'MERGE_PAIR' })
  const si = (e, t) => {
    if (e instanceof ai) {
      const n = t.get(e.source)
      return n.count * n.aliasCount
    }
    if (e instanceof ni) {
      let n = 0
      for (const r of e.items) {
        const e = si(r, t)
        e > n && (n = e)
      }
      return n
    }
    if (e instanceof ii) {
      const n = si(e.key, t),
        r = si(e.value, t)
      return Math.max(n, r)
    }
    return 1
  }
  class ai extends zo {
    static stringify(
      { range: e, source: t },
      { anchors: n, doc: r, implicitKey: o, inStringifyKey: i }
    ) {
      let s = Object.keys(n).find((e) => n[e] === t)
      if ((!s && i && (s = r.anchors.getName(t) || r.anchors.newName()), s))
        return `*${s}${o ? ' ' : ''}`
      const a = r.anchors.getName(t)
        ? 'Alias node must be after source node'
        : 'Source node not found for alias node'
      throw new Error(`${a} [${e}]`)
    }
    constructor(e) {
      super(), (this.source = e), (this.type = xo.Type.ALIAS)
    }
    set tag(e) {
      throw new Error('Alias nodes cannot have tags')
    }
    toJSON(e, t) {
      if (!t) return Zo(this.source, e, t)
      const { anchors: n, maxAliasCount: r } = t,
        o = n.get(this.source)
      if (!o || void 0 === o.res) {
        const e = 'This should not happen: Alias anchor was not resolved?'
        throw this.cstNode
          ? new xo.YAMLReferenceError(this.cstNode, e)
          : new ReferenceError(e)
      }
      if (
        r >= 0 &&
        ((o.count += 1),
        0 === o.aliasCount && (o.aliasCount = si(this.source, n)),
        o.count * o.aliasCount > r)
      ) {
        const e = 'Excessive alias count indicates a resource exhaustion attack'
        throw this.cstNode
          ? new xo.YAMLReferenceError(this.cstNode, e)
          : new ReferenceError(e)
      }
      return o.res
    }
    toString(e) {
      return ai.stringify(this, e)
    }
  }
  function ci(e, t) {
    const n = t instanceof Xo ? t.value : t
    for (const r of e)
      if (r instanceof ii) {
        if (r.key === t || r.key === n) return r
        if (r.key && r.key.value === n) return r
      }
  }
  xo._defineProperty(ai, 'default', !0)
  class ui extends ni {
    add(e, t) {
      e ? e instanceof ii || (e = new ii(e.key || e, e.value)) : (e = new ii(e))
      const n = ci(this.items, e.key),
        r = this.schema && this.schema.sortMapEntries
      if (n) {
        if (!t) throw new Error(`Key ${e.key} already set`)
        n.value = e.value
      } else if (r) {
        const t = this.items.findIndex((t) => r(e, t) < 0)
        ;-1 === t ? this.items.push(e) : this.items.splice(t, 0, e)
      } else this.items.push(e)
    }
    delete(e) {
      const t = ci(this.items, e)
      if (!t) return !1
      return this.items.splice(this.items.indexOf(t), 1).length > 0
    }
    get(e, t) {
      const n = ci(this.items, e),
        r = n && n.value
      return !t && r instanceof Xo ? r.value : r
    }
    has(e) {
      return !!ci(this.items, e)
    }
    set(e, t) {
      this.add(new ii(e, t), !0)
    }
    toJSON(e, t, n) {
      const r = n ? new n() : t && t.mapAsMap ? new Map() : {}
      t && t.onCreate && t.onCreate(r)
      for (const e of this.items) e.addToJSMap(t, r)
      return r
    }
    toString(e, t, n) {
      if (!e) return JSON.stringify(this)
      for (const e of this.items)
        if (!(e instanceof ii))
          throw new Error(
            `Map items must all be pairs; found ${JSON.stringify(e)} instead`
          )
      return super.toString(
        e,
        {
          blockItem: (e) => e.str,
          flowChars: { start: '{', end: '}' },
          isMap: !0,
          itemIndent: e.indent || ''
        },
        t,
        n
      )
    }
  }
  class li extends ii {
    constructor(e) {
      if (e instanceof ii) {
        let t = e.value
        t instanceof oi ||
          ((t = new oi()), t.items.push(e.value), (t.range = e.value.range)),
          super(e.key, t),
          (this.range = e.range)
      } else super(new Xo('<<'), new oi())
      this.type = ii.Type.MERGE_PAIR
    }
    addToJSMap(e, t) {
      for (const { source: n } of this.value.items) {
        if (!(n instanceof ui)) throw new Error('Merge sources must be maps')
        const r = n.toJSON(null, e, Map)
        for (const [e, n] of r)
          t instanceof Map
            ? t.has(e) || t.set(e, n)
            : t instanceof Set
            ? t.add(e)
            : Object.prototype.hasOwnProperty.call(t, e) ||
              Object.defineProperty(t, e, {
                value: n,
                writable: !0,
                enumerable: !0,
                configurable: !0
              })
      }
      return t
    }
    toString(e, t) {
      const n = this.value
      if (n.items.length > 1) return super.toString(e, t)
      this.value = n.items[0]
      const r = super.toString(e, t)
      return (this.value = n), r
    }
  }
  const fi = { defaultType: xo.Type.BLOCK_LITERAL, lineWidth: 76 },
    hi = {
      defaultType: xo.Type.PLAIN,
      doubleQuoted: { jsonEncoding: !1, minMultiLineLength: 40 },
      fold: { lineWidth: 80, minContentWidth: 20 }
    }
  function pi(e, t, n) {
    for (const { format: n, test: r, resolve: o } of t)
      if (r) {
        const t = e.match(r)
        if (t) {
          let e = o.apply(null, t)
          return e instanceof Xo || (e = new Xo(e)), n && (e.format = n), e
        }
      }
    return n && (e = n(e)), new Xo(e)
  }
  const di = 'flow',
    gi = 'block',
    mi = 'quoted',
    yi = (e, t) => {
      let n = e[t + 1]
      for (; ' ' === n || '\t' === n; ) {
        do {
          n = e[(t += 1)]
        } while (n && '\n' !== n)
        n = e[t + 1]
      }
      return t
    }
  function vi(
    e,
    t,
    n,
    {
      indentAtStart: r,
      lineWidth: o = 80,
      minContentWidth: i = 20,
      onFold: s,
      onOverflow: a
    }
  ) {
    if (!o || o < 0) return e
    const c = Math.max(1 + i, 1 + o - t.length)
    if (e.length <= c) return e
    const u = [],
      l = {}
    let f,
      h,
      p = o - t.length
    'number' == typeof r && (r > o - Math.max(2, i) ? u.push(0) : (p = o - r))
    let d,
      g = !1,
      m = -1,
      y = -1,
      v = -1
    for (
      n === gi && ((m = yi(e, m)), -1 !== m && (p = m + c));
      (d = e[(m += 1)]);

    ) {
      if (n === mi && '\\' === d) {
        switch (((y = m), e[m + 1])) {
          case 'x':
            m += 3
            break
          case 'u':
            m += 5
            break
          case 'U':
            m += 9
            break
          default:
            m += 1
        }
        v = m
      }
      if ('\n' === d) n === gi && (m = yi(e, m)), (p = m + c), (f = void 0)
      else {
        if (' ' === d && h && ' ' !== h && '\n' !== h && '\t' !== h) {
          const t = e[m + 1]
          t && ' ' !== t && '\n' !== t && '\t' !== t && (f = m)
        }
        if (m >= p)
          if (f) u.push(f), (p = f + c), (f = void 0)
          else if (n === mi) {
            for (; ' ' === h || '\t' === h; )
              (h = d), (d = e[(m += 1)]), (g = !0)
            const t = m > v + 1 ? m - 2 : y - 1
            if (l[t]) return e
            u.push(t), (l[t] = !0), (p = t + c), (f = void 0)
          } else g = !0
      }
      h = d
    }
    if ((g && a && a(), 0 === u.length)) return e
    s && s()
    let b = e.slice(0, u[0])
    for (let r = 0; r < u.length; ++r) {
      const o = u[r],
        i = u[r + 1] || e.length
      0 === o
        ? (b = `\n${t}${e.slice(0, i)}`)
        : (n === mi && l[o] && (b += `${e[o]}\\`),
          (b += `\n${t}${e.slice(o + 1, i)}`))
    }
    return b
  }
  const bi = ({ indentAtStart: e }) =>
      e ? Object.assign({ indentAtStart: e }, hi.fold) : hi.fold,
    wi = (e) => /^(%|---|\.\.\.)/m.test(e)
  function _i(e, t) {
    const { implicitKey: n } = t,
      { jsonEncoding: r, minMultiLineLength: o } = hi.doubleQuoted,
      i = JSON.stringify(e)
    if (r) return i
    const s = t.indent || (wi(e) ? '  ' : '')
    let a = '',
      c = 0
    for (let e = 0, t = i[e]; t; t = i[++e])
      if (
        (' ' === t &&
          '\\' === i[e + 1] &&
          'n' === i[e + 2] &&
          ((a += i.slice(c, e) + '\\ '), (e += 1), (c = e), (t = '\\')),
        '\\' === t)
      )
        switch (i[e + 1]) {
          case 'u':
            {
              a += i.slice(c, e)
              const t = i.substr(e + 2, 4)
              switch (t) {
                case '0000':
                  a += '\\0'
                  break
                case '0007':
                  a += '\\a'
                  break
                case '000b':
                  a += '\\v'
                  break
                case '001b':
                  a += '\\e'
                  break
                case '0085':
                  a += '\\N'
                  break
                case '00a0':
                  a += '\\_'
                  break
                case '2028':
                  a += '\\L'
                  break
                case '2029':
                  a += '\\P'
                  break
                default:
                  '00' === t.substr(0, 2)
                    ? (a += '\\x' + t.substr(2))
                    : (a += i.substr(e, 6))
              }
              ;(e += 5), (c = e + 1)
            }
            break
          case 'n':
            if (n || '"' === i[e + 2] || i.length < o) e += 1
            else {
              for (
                a += i.slice(c, e) + '\n\n';
                '\\' === i[e + 2] && 'n' === i[e + 3] && '"' !== i[e + 4];

              )
                (a += '\n'), (e += 2)
              ;(a += s), ' ' === i[e + 2] && (a += '\\'), (e += 1), (c = e + 1)
            }
            break
          default:
            e += 1
        }
    return (a = c ? a + i.slice(c) : i), n ? a : vi(a, s, mi, bi(t))
  }
  function Ei(e, t) {
    if (t.implicitKey) {
      if (/\n/.test(e)) return _i(e, t)
    } else if (/[ \t]\n|\n[ \t]/.test(e)) return _i(e, t)
    const n = t.indent || (wi(e) ? '  ' : ''),
      r = "'" + e.replace(/'/g, "''").replace(/\n+/g, `$&\n${n}`) + "'"
    return t.implicitKey ? r : vi(r, n, di, bi(t))
  }
  function Si({ comment: e, type: t, value: n }, r, o, i) {
    if (/\n[\t ]+$/.test(n) || /^\s*$/.test(n)) return _i(n, r)
    const s = r.indent || (r.forceBlockIndent || wi(n) ? '  ' : ''),
      a = s ? '2' : '1',
      c =
        t !== xo.Type.BLOCK_FOLDED &&
        (t === xo.Type.BLOCK_LITERAL ||
          !(function (e, t, n) {
            if (!t || t < 0) return !1
            const r = t - n,
              o = e.length
            if (o <= r) return !1
            for (let t = 0, n = 0; t < o; ++t)
              if ('\n' === e[t]) {
                if (t - n > r) return !0
                if (((n = t + 1), o - n <= r)) return !1
              }
            return !0
          })(n, hi.fold.lineWidth, s.length))
    let u = c ? '|' : '>'
    if (!n) return u + '\n'
    let l = '',
      f = ''
    if (
      ((n = n
        .replace(/[\n\t ]*$/, (e) => {
          const t = e.indexOf('\n')
          return (
            -1 === t
              ? (u += '-')
              : (n !== e && t === e.length - 1) || ((u += '+'), i && i()),
            (f = e.replace(/\n$/, '')),
            ''
          )
        })
        .replace(/^[\n ]*/, (e) => {
          ;-1 !== e.indexOf(' ') && (u += a)
          const t = e.match(/ +$/)
          return t ? ((l = e.slice(0, -t[0].length)), t[0]) : ((l = e), '')
        })),
      f && (f = f.replace(/\n+(?!\n|$)/g, `$&${s}`)),
      l && (l = l.replace(/\n+/g, `$&${s}`)),
      e && ((u += ' #' + e.replace(/ ?[\r\n]+/g, ' ')), o && o()),
      !n)
    )
      return `${u}${a}\n${s}${f}`
    if (c) return (n = n.replace(/\n+/g, `$&${s}`)), `${u}\n${s}${l}${n}${f}`
    n = n
      .replace(/\n+/g, '\n$&')
      .replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, '$1$2')
      .replace(/\n+/g, `$&${s}`)
    const h = vi(`${l}${n}${f}`, s, gi, hi.fold)
    return `${u}\n${s}${h}`
  }
  function Oi(e, t) {
    let n, r, o
    switch (t.type) {
      case xo.Type.FLOW_MAP:
        ;(n = '}'), (r = 'flow map')
        break
      case xo.Type.FLOW_SEQ:
        ;(n = ']'), (r = 'flow sequence')
        break
      default:
        return void e.push(
          new xo.YAMLSemanticError(t, 'Not a flow collection!?')
        )
    }
    for (let e = t.items.length - 1; e >= 0; --e) {
      const n = t.items[e]
      if (!n || n.type !== xo.Type.COMMENT) {
        o = n
        break
      }
    }
    if (o && o.char !== n) {
      const i = `Expected ${r} to end with ${n}`
      let s
      'number' == typeof o.offset
        ? ((s = new xo.YAMLSemanticError(t, i)), (s.offset = o.offset + 1))
        : ((s = new xo.YAMLSemanticError(o, i)),
          o.range && o.range.end && (s.offset = o.range.end - o.range.start)),
        e.push(s)
    }
  }
  function Ai(e, t) {
    const n = t.context.src[t.range.start - 1]
    if ('\n' !== n && '\t' !== n && ' ' !== n) {
      const n =
        'Comments must be separated from other tokens by white space characters'
      e.push(new xo.YAMLSemanticError(t, n))
    }
  }
  function Mi(e, t) {
    const n = String(t),
      r = n.substr(0, 8) + '...' + n.substr(-8)
    return new xo.YAMLSemanticError(e, `The "${r}" key is too long`)
  }
  function Li(e, t) {
    for (const { afterKey: n, before: r, comment: o } of t) {
      let t = e.items[r]
      t
        ? (n && t.value && (t = t.value),
          void 0 === o
            ? (!n && t.commentBefore) || (t.spaceBefore = !0)
            : t.commentBefore
            ? (t.commentBefore += '\n' + o)
            : (t.commentBefore = o))
        : void 0 !== o &&
          (e.comment ? (e.comment += '\n' + o) : (e.comment = o))
    }
  }
  function Ni(e, t) {
    const n = t.strValue
    return n
      ? 'string' == typeof n
        ? n
        : (n.errors.forEach((n) => {
            n.source || (n.source = t), e.errors.push(n)
          }),
          n.str)
      : ''
  }
  function Ti(e, t) {
    const { tag: n, type: r } = t
    let o = !1
    if (n) {
      const { handle: r, suffix: i, verbatim: s } = n
      if (s) {
        if ('!' !== s && '!!' !== s) return s
        const n = `Verbatim tags aren't resolved, so ${s} is invalid.`
        e.errors.push(new xo.YAMLSemanticError(t, n))
      } else if ('!' !== r || i)
        try {
          return (function (e, t) {
            const { handle: n, suffix: r } = t.tag
            let o = e.tagPrefixes.find((e) => e.handle === n)
            if (!o) {
              const r = e.getDefaults().tagPrefixes
              if ((r && (o = r.find((e) => e.handle === n)), !o))
                throw new xo.YAMLSemanticError(
                  t,
                  `The ${n} tag handle is non-default and was not declared.`
                )
            }
            if (!r)
              throw new xo.YAMLSemanticError(t, `The ${n} tag has no suffix.`)
            if ('!' === n && '1.0' === (e.version || e.options.version)) {
              if ('^' === r[0])
                return (
                  e.warnings.push(
                    new xo.YAMLWarning(
                      t,
                      'YAML 1.0 ^ tag expansion is not supported'
                    )
                  ),
                  r
                )
              if (/[:/]/.test(r)) {
                const e = r.match(/^([a-z0-9-]+)\/(.*)/i)
                return e ? `tag:${e[1]}.yaml.org,2002:${e[2]}` : `tag:${r}`
              }
            }
            return o.prefix + decodeURIComponent(r)
          })(e, t)
        } catch (t) {
          e.errors.push(t)
        }
      else o = !0
    }
    switch (r) {
      case xo.Type.BLOCK_FOLDED:
      case xo.Type.BLOCK_LITERAL:
      case xo.Type.QUOTE_DOUBLE:
      case xo.Type.QUOTE_SINGLE:
        return xo.defaultTags.STR
      case xo.Type.FLOW_MAP:
      case xo.Type.MAP:
        return xo.defaultTags.MAP
      case xo.Type.FLOW_SEQ:
      case xo.Type.SEQ:
        return xo.defaultTags.SEQ
      case xo.Type.PLAIN:
        return o ? xo.defaultTags.STR : null
      default:
        return null
    }
  }
  function Pi(e, t, n) {
    const { tags: r } = e.schema,
      o = []
    for (const i of r)
      if (i.tag === n) {
        if (!i.test) {
          const n = i.resolve(e, t)
          return n instanceof ni ? n : new Xo(n)
        }
        o.push(i)
      }
    const i = Ni(e, t)
    return 'string' == typeof i && o.length > 0
      ? pi(i, o, r.scalarFallback)
      : null
  }
  function Ci(e, t, n) {
    try {
      const r = Pi(e, t, n)
      if (r) return n && t.tag && (r.tag = n), r
    } catch (n) {
      return n.source || (n.source = t), e.errors.push(n), null
    }
    try {
      const r = (function ({ type: e }) {
        switch (e) {
          case xo.Type.FLOW_MAP:
          case xo.Type.MAP:
            return xo.defaultTags.MAP
          case xo.Type.FLOW_SEQ:
          case xo.Type.SEQ:
            return xo.defaultTags.SEQ
          default:
            return xo.defaultTags.STR
        }
      })(t)
      if (!r) throw new Error(`The tag ${n} is unavailable`)
      const o = `The tag ${n} is unavailable, falling back to ${r}`
      e.warnings.push(new xo.YAMLWarning(t, o))
      const i = Pi(e, t, r)
      return (i.tag = n), i
    } catch (n) {
      const r = new xo.YAMLReferenceError(t, n.message)
      return (r.stack = n.stack), e.errors.push(r), null
    }
  }
  function xi(e, t) {
    const n = { before: [], after: [] }
    let r = !1,
      o = !1
    const i = ((e) => {
      if (!e) return !1
      const { type: t } = e
      return (
        t === xo.Type.MAP_KEY ||
        t === xo.Type.MAP_VALUE ||
        t === xo.Type.SEQ_ITEM
      )
    })(t.context.parent)
      ? t.context.parent.props.concat(t.props)
      : t.props
    for (const { start: s, end: a } of i)
      switch (t.context.src[s]) {
        case xo.Char.COMMENT: {
          if (!t.commentHasRequiredWhitespace(s)) {
            const n =
              'Comments must be separated from other tokens by white space characters'
            e.push(new xo.YAMLSemanticError(t, n))
          }
          const { header: r, valueRange: o } = t
          ;(o && (s > o.start || (r && s > r.start)) ? n.after : n.before).push(
            t.context.src.slice(s + 1, a)
          )
          break
        }
        case xo.Char.ANCHOR:
          if (r) {
            const n = 'A node can have at most one anchor'
            e.push(new xo.YAMLSemanticError(t, n))
          }
          r = !0
          break
        case xo.Char.TAG:
          if (o) {
            const n = 'A node can have at most one tag'
            e.push(new xo.YAMLSemanticError(t, n))
          }
          o = !0
      }
    return { comments: n, hasAnchor: r, hasTag: o }
  }
  function Ri(e, t) {
    if (!t) return null
    t.error && e.errors.push(t.error)
    const { comments: n, hasAnchor: r, hasTag: o } = xi(e.errors, t)
    if (r) {
      const { anchors: n } = e,
        r = t.anchor,
        o = n.getNode(r)
      o && (n.map[n.newName(r)] = o), (n.map[r] = t)
    }
    if (t.type === xo.Type.ALIAS && (r || o)) {
      const n = 'An alias node must not specify any properties'
      e.errors.push(new xo.YAMLSemanticError(t, n))
    }
    const i = (function (e, t) {
      const { anchors: n, errors: r, schema: o } = e
      if (t.type === xo.Type.ALIAS) {
        const e = t.rawValue,
          o = n.getNode(e)
        if (!o) {
          const n = `Aliased anchor not found: ${e}`
          return r.push(new xo.YAMLReferenceError(t, n)), null
        }
        const i = new ai(o)
        return n._cstAliases.push(i), i
      }
      const i = Ti(e, t)
      if (i) return Ci(e, t, i)
      if (t.type !== xo.Type.PLAIN) {
        const e = `Failed to resolve ${t.type} node here`
        return r.push(new xo.YAMLSyntaxError(t, e)), null
      }
      try {
        return pi(Ni(e, t), o.tags, o.tags.scalarFallback)
      } catch (e) {
        return e.source || (e.source = t), r.push(e), null
      }
    })(e, t)
    if (i) {
      ;(i.range = [t.range.start, t.range.end]),
        e.options.keepCstNodes && (i.cstNode = t),
        e.options.keepNodeTypes && (i.type = t.type)
      const r = n.before.join('\n')
      r && (i.commentBefore = i.commentBefore ? `${i.commentBefore}\n${r}` : r)
      const o = n.after.join('\n')
      o && (i.comment = i.comment ? `${i.comment}\n${o}` : o)
    }
    return (t.resolved = i)
  }
  function Ii(e, t) {
    if (
      !(({ context: { lineStart: e, node: t, src: n }, props: r }) => {
        if (0 === r.length) return !1
        const { start: o } = r[0]
        if (t && o > t.valueRange.start) return !1
        if (n[o] !== xo.Char.COMMENT) return !1
        for (let t = e; t < o; ++t) if ('\n' === n[t]) return !1
        return !0
      })(e)
    )
      return
    const n = e.getPropValue(0, xo.Char.COMMENT, !0)
    let r = !1
    const o = t.value.commentBefore
    if (o && o.startsWith(n))
      (t.value.commentBefore = o.substr(n.length + 1)), (r = !0)
    else {
      const o = t.value.comment
      !e.node &&
        o &&
        o.startsWith(n) &&
        ((t.value.comment = o.substr(n.length + 1)), (r = !0))
    }
    r && (t.comment = n)
  }
  var ki = {
      Alias: ai,
      Collection: ni,
      Merge: li,
      Node: zo,
      Pair: ii,
      Scalar: Xo,
      YAMLMap: ui,
      YAMLSeq: oi,
      addComment: Ho,
      binaryOptions: fi,
      boolOptions: { trueStr: 'true', falseStr: 'false' },
      findPair: ci,
      intOptions: { asBigInt: !1 },
      isEmptyPath: ti,
      nullOptions: { nullStr: 'null' },
      resolveMap: function (e, t) {
        if (t.type !== xo.Type.MAP && t.type !== xo.Type.FLOW_MAP) {
          const n = `A ${t.type} node cannot be resolved as a mapping`
          return e.errors.push(new xo.YAMLSyntaxError(t, n)), null
        }
        const { comments: n, items: r } =
            t.type === xo.Type.FLOW_MAP
              ? (function (e, t) {
                  const n = [],
                    r = []
                  let o,
                    i = !1,
                    s = '{'
                  for (let a = 0; a < t.items.length; ++a) {
                    const c = t.items[a]
                    if ('string' == typeof c.char) {
                      const { char: n, offset: u } = c
                      if ('?' === n && void 0 === o && !i) {
                        ;(i = !0), (s = ':')
                        continue
                      }
                      if (':' === n) {
                        if ((void 0 === o && (o = null), ':' === s)) {
                          s = ','
                          continue
                        }
                      } else if (
                        (i &&
                          (void 0 === o && ',' !== n && (o = null), (i = !1)),
                        void 0 !== o &&
                          (r.push(new ii(o)), (o = void 0), ',' === n))
                      ) {
                        s = ':'
                        continue
                      }
                      if ('}' === n) {
                        if (a === t.items.length - 1) continue
                      } else if (n === s) {
                        s = ':'
                        continue
                      }
                      const l = `Flow map contains an unexpected ${n}`,
                        f = new xo.YAMLSyntaxError(t, l)
                      ;(f.offset = u), e.errors.push(f)
                    } else
                      c.type === xo.Type.BLANK_LINE
                        ? n.push({ afterKey: !!o, before: r.length })
                        : c.type === xo.Type.COMMENT
                        ? (Ai(e.errors, c),
                          n.push({
                            afterKey: !!o,
                            before: r.length,
                            comment: c.comment
                          }))
                        : void 0 === o
                        ? (',' === s &&
                            e.errors.push(
                              new xo.YAMLSemanticError(
                                c,
                                'Separator , missing in flow map'
                              )
                            ),
                          (o = Ri(e, c)))
                        : (',' !== s &&
                            e.errors.push(
                              new xo.YAMLSemanticError(
                                c,
                                'Indicator : missing in flow map entry'
                              )
                            ),
                          r.push(new ii(o, Ri(e, c))),
                          (o = void 0),
                          (i = !1))
                  }
                  Oi(e.errors, t), void 0 !== o && r.push(new ii(o))
                  return { comments: n, items: r }
                })(e, t)
              : (function (e, t) {
                  const n = [],
                    r = []
                  let o,
                    i = null
                  for (let s = 0; s < t.items.length; ++s) {
                    const a = t.items[s]
                    switch (a.type) {
                      case xo.Type.BLANK_LINE:
                        n.push({ afterKey: !!o, before: r.length })
                        break
                      case xo.Type.COMMENT:
                        n.push({
                          afterKey: !!o,
                          before: r.length,
                          comment: a.comment
                        })
                        break
                      case xo.Type.MAP_KEY:
                        void 0 !== o && r.push(new ii(o)),
                          a.error && e.errors.push(a.error),
                          (o = Ri(e, a.node)),
                          (i = null)
                        break
                      case xo.Type.MAP_VALUE:
                        {
                          if (
                            (void 0 === o && (o = null),
                            a.error && e.errors.push(a.error),
                            !a.context.atLineStart &&
                              a.node &&
                              a.node.type === xo.Type.MAP &&
                              !a.node.context.atLineStart)
                          ) {
                            const t =
                              'Nested mappings are not allowed in compact mappings'
                            e.errors.push(new xo.YAMLSemanticError(a.node, t))
                          }
                          let n = a.node
                          if (!n && a.props.length > 0) {
                            ;(n = new xo.PlainValue(xo.Type.PLAIN, [])),
                              (n.context = { parent: a, src: a.context.src })
                            const e = a.range.start + 1
                            if (
                              ((n.range = { start: e, end: e }),
                              (n.valueRange = { start: e, end: e }),
                              'number' == typeof a.range.origStart)
                            ) {
                              const e = a.range.origStart + 1
                              ;(n.range.origStart = n.range.origEnd = e),
                                (n.valueRange.origStart = n.valueRange.origEnd =
                                  e)
                            }
                          }
                          const s = new ii(o, Ri(e, n))
                          Ii(a, s),
                            r.push(s),
                            o &&
                              'number' == typeof i &&
                              a.range.start > i + 1024 &&
                              e.errors.push(Mi(t, o)),
                            (o = void 0),
                            (i = null)
                        }
                        break
                      default:
                        void 0 !== o && r.push(new ii(o)),
                          (o = Ri(e, a)),
                          (i = a.range.start),
                          a.error && e.errors.push(a.error)
                        e: for (let n = s + 1; ; ++n) {
                          const r = t.items[n]
                          switch (r && r.type) {
                            case xo.Type.BLANK_LINE:
                            case xo.Type.COMMENT:
                              continue e
                            case xo.Type.MAP_VALUE:
                              break e
                            default: {
                              const t =
                                'Implicit map keys need to be followed by map values'
                              e.errors.push(new xo.YAMLSemanticError(a, t))
                              break e
                            }
                          }
                        }
                        if (a.valueRangeContainsNewline) {
                          const t =
                            'Implicit map keys need to be on a single line'
                          e.errors.push(new xo.YAMLSemanticError(a, t))
                        }
                    }
                  }
                  void 0 !== o && r.push(new ii(o))
                  return { comments: n, items: r }
                })(e, t),
          o = new ui()
        ;(o.items = r), Li(o, n)
        let i = !1
        for (let n = 0; n < r.length; ++n) {
          const { key: o } = r[n]
          if (
            (o instanceof ni && (i = !0),
            e.schema.merge && o && '<<' === o.value)
          ) {
            r[n] = new li(r[n])
            const o = r[n].value.items
            let i = null
            o.some((e) => {
              if (e instanceof ai) {
                const { type: t } = e.source
                return (
                  t !== xo.Type.MAP &&
                  t !== xo.Type.FLOW_MAP &&
                  (i = 'Merge nodes aliases can only point to maps')
                )
              }
              return (i = 'Merge nodes can only have Alias nodes as values')
            }),
              i && e.errors.push(new xo.YAMLSemanticError(t, i))
          } else
            for (let i = n + 1; i < r.length; ++i) {
              const { key: n } = r[i]
              if (
                o === n ||
                (o &&
                  n &&
                  Object.prototype.hasOwnProperty.call(o, 'value') &&
                  o.value === n.value)
              ) {
                const n = `Map keys must be unique; "${o}" is repeated`
                e.errors.push(new xo.YAMLSemanticError(t, n))
                break
              }
            }
        }
        if (i && !e.options.mapAsMap) {
          const n =
            'Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.'
          e.warnings.push(new xo.YAMLWarning(t, n))
        }
        return (t.resolved = o), o
      },
      resolveNode: Ri,
      resolveSeq: function (e, t) {
        if (t.type !== xo.Type.SEQ && t.type !== xo.Type.FLOW_SEQ) {
          const n = `A ${t.type} node cannot be resolved as a sequence`
          return e.errors.push(new xo.YAMLSyntaxError(t, n)), null
        }
        const { comments: n, items: r } =
            t.type === xo.Type.FLOW_SEQ
              ? (function (e, t) {
                  const n = [],
                    r = []
                  let o,
                    i = !1,
                    s = null,
                    a = '[',
                    c = null
                  for (let u = 0; u < t.items.length; ++u) {
                    const l = t.items[u]
                    if ('string' == typeof l.char) {
                      const { char: n, offset: f } = l
                      if (
                        (':' === n ||
                          (!i && void 0 === o) ||
                          (i && void 0 === o && (o = a ? r.pop() : null),
                          r.push(new ii(o)),
                          (i = !1),
                          (o = void 0),
                          (s = null)),
                        n === a)
                      )
                        a = null
                      else if (a || '?' !== n) {
                        if ('[' !== a && ':' === n && void 0 === o) {
                          if (',' === a) {
                            if (((o = r.pop()), o instanceof ii)) {
                              const n =
                                  'Chaining flow sequence pairs is invalid',
                                r = new xo.YAMLSemanticError(t, n)
                              ;(r.offset = f), e.errors.push(r)
                            }
                            if (!i && 'number' == typeof s) {
                              const n = l.range ? l.range.start : l.offset
                              n > s + 1024 && e.errors.push(Mi(t, o))
                              const { src: r } = c.context
                              for (let t = s; t < n; ++t)
                                if ('\n' === r[t]) {
                                  const t =
                                    'Implicit keys of flow sequence pairs need to be on a single line'
                                  e.errors.push(new xo.YAMLSemanticError(c, t))
                                  break
                                }
                            }
                          } else o = null
                          ;(s = null), (i = !1), (a = null)
                        } else if (
                          '[' === a ||
                          ']' !== n ||
                          u < t.items.length - 1
                        ) {
                          const r = `Flow sequence contains an unexpected ${n}`,
                            o = new xo.YAMLSyntaxError(t, r)
                          ;(o.offset = f), e.errors.push(o)
                        }
                      } else i = !0
                    } else if (l.type === xo.Type.BLANK_LINE)
                      n.push({ before: r.length })
                    else if (l.type === xo.Type.COMMENT)
                      Ai(e.errors, l),
                        n.push({ comment: l.comment, before: r.length })
                    else {
                      if (a) {
                        const t = `Expected a ${a} in flow sequence`
                        e.errors.push(new xo.YAMLSemanticError(l, t))
                      }
                      const t = Ri(e, l)
                      void 0 === o
                        ? (r.push(t), (c = l))
                        : (r.push(new ii(o, t)), (o = void 0)),
                        (s = l.range.start),
                        (a = ',')
                    }
                  }
                  Oi(e.errors, t), void 0 !== o && r.push(new ii(o))
                  return { comments: n, items: r }
                })(e, t)
              : (function (e, t) {
                  const n = [],
                    r = []
                  for (let o = 0; o < t.items.length; ++o) {
                    const i = t.items[o]
                    switch (i.type) {
                      case xo.Type.BLANK_LINE:
                        n.push({ before: r.length })
                        break
                      case xo.Type.COMMENT:
                        n.push({ comment: i.comment, before: r.length })
                        break
                      case xo.Type.SEQ_ITEM:
                        if (
                          (i.error && e.errors.push(i.error),
                          r.push(Ri(e, i.node)),
                          i.hasProps)
                        ) {
                          const t =
                            'Sequence items cannot have tags or anchors before the - indicator'
                          e.errors.push(new xo.YAMLSemanticError(i, t))
                        }
                        break
                      default:
                        i.error && e.errors.push(i.error),
                          e.errors.push(
                            new xo.YAMLSyntaxError(
                              i,
                              `Unexpected ${i.type} node in sequence`
                            )
                          )
                    }
                  }
                  return { comments: n, items: r }
                })(e, t),
          o = new oi()
        if (
          ((o.items = r),
          Li(o, n),
          !e.options.mapAsMap &&
            r.some((e) => e instanceof ii && e.key instanceof ni))
        ) {
          const n =
            'Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.'
          e.warnings.push(new xo.YAMLWarning(t, n))
        }
        return (t.resolved = o), o
      },
      resolveString: Ni,
      strOptions: hi,
      stringifyNumber: function ({
        format: e,
        minFractionDigits: t,
        tag: n,
        value: r
      }) {
        if ('bigint' == typeof r) return String(r)
        if (!isFinite(r)) return isNaN(r) ? '.nan' : r < 0 ? '-.inf' : '.inf'
        let o = JSON.stringify(r)
        if (
          !e &&
          t &&
          (!n || 'tag:yaml.org,2002:float' === n) &&
          /^\d/.test(o)
        ) {
          let e = o.indexOf('.')
          e < 0 && ((e = o.length), (o += '.'))
          let n = t - (o.length - e - 1)
          for (; n-- > 0; ) o += '0'
        }
        return o
      },
      stringifyString: function (e, t, n, r) {
        const { defaultType: o } = hi,
          { implicitKey: i, inFlow: s } = t
        let { type: a, value: c } = e
        'string' != typeof c &&
          ((c = String(c)), (e = Object.assign({}, e, { value: c })))
        const u = (o) => {
          switch (o) {
            case xo.Type.BLOCK_FOLDED:
            case xo.Type.BLOCK_LITERAL:
              return Si(e, t, n, r)
            case xo.Type.QUOTE_DOUBLE:
              return _i(c, t)
            case xo.Type.QUOTE_SINGLE:
              return Ei(c, t)
            case xo.Type.PLAIN:
              return (function (e, t, n, r) {
                const { comment: o, type: i, value: s } = e,
                  { actualString: a, implicitKey: c, indent: u, inFlow: l } = t
                if ((c && /[\n[\]{},]/.test(s)) || (l && /[[\]{},]/.test(s)))
                  return _i(s, t)
                if (
                  !s ||
                  /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(
                    s
                  )
                )
                  return c || l || -1 === s.indexOf('\n')
                    ? -1 !== s.indexOf('"') && -1 === s.indexOf("'")
                      ? Ei(s, t)
                      : _i(s, t)
                    : Si(e, t, n, r)
                if (!c && !l && i !== xo.Type.PLAIN && -1 !== s.indexOf('\n'))
                  return Si(e, t, n, r)
                if ('' === u && wi(s))
                  return (t.forceBlockIndent = !0), Si(e, t, n, r)
                const f = s.replace(/\n+/g, `$&\n${u}`)
                if (a) {
                  const { tags: e } = t.doc.schema
                  if ('string' != typeof pi(f, e, e.scalarFallback).value)
                    return _i(s, t)
                }
                const h = c ? f : vi(f, u, di, bi(t))
                return !o ||
                  l ||
                  (-1 === h.indexOf('\n') && -1 === o.indexOf('\n'))
                  ? h
                  : (n && n(),
                    (function (e, t, n) {
                      return n
                        ? `#${n.replace(/[\s\S]^/gm, `$&${t}#`)}\n${t}${e}`
                        : e
                    })(h, u, o))
              })(e, t, n, r)
            default:
              return null
          }
        }
        a !== xo.Type.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f]/.test(c)
          ? (a = xo.Type.QUOTE_DOUBLE)
          : (!i && !s) ||
            (a !== xo.Type.BLOCK_FOLDED && a !== xo.Type.BLOCK_LITERAL) ||
            (a = xo.Type.QUOTE_DOUBLE)
        let l = u(a)
        if (null === l && ((l = u(o)), null === l))
          throw new Error(`Unsupported default string type ${o}`)
        return l
      },
      toJSON: Zo
    },
    Bi =
      void 0 !== Bi
        ? Bi
        : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
        ? window
        : {},
    Yi = [],
    ji = [],
    $i = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
    Di = !1
  function Fi() {
    Di = !0
    for (
      var e =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        t = 0,
        n = e.length;
      t < n;
      ++t
    )
      (Yi[t] = e[t]), (ji[e.charCodeAt(t)] = t)
    ;(ji['-'.charCodeAt(0)] = 62), (ji['_'.charCodeAt(0)] = 63)
  }
  function Ui(e, t, n) {
    for (var r, o, i = [], s = t; s < n; s += 3)
      (r = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2]),
        i.push(
          Yi[((o = r) >> 18) & 63] +
            Yi[(o >> 12) & 63] +
            Yi[(o >> 6) & 63] +
            Yi[63 & o]
        )
    return i.join('')
  }
  function Wi(e) {
    var t
    Di || Fi()
    for (
      var n = e.length, r = n % 3, o = '', i = [], s = 16383, a = 0, c = n - r;
      a < c;
      a += s
    )
      i.push(Ui(e, a, a + s > c ? c : a + s))
    return (
      1 === r
        ? ((t = e[n - 1]),
          (o += Yi[t >> 2]),
          (o += Yi[(t << 4) & 63]),
          (o += '=='))
        : 2 === r &&
          ((t = (e[n - 2] << 8) + e[n - 1]),
          (o += Yi[t >> 10]),
          (o += Yi[(t >> 4) & 63]),
          (o += Yi[(t << 2) & 63]),
          (o += '=')),
      i.push(o),
      i.join('')
    )
  }
  function Ki(e, t, n, r, o) {
    var i,
      s,
      a = 8 * o - r - 1,
      c = (1 << a) - 1,
      u = c >> 1,
      l = -7,
      f = n ? o - 1 : 0,
      h = n ? -1 : 1,
      p = e[t + f]
    for (
      f += h, i = p & ((1 << -l) - 1), p >>= -l, l += a;
      l > 0;
      i = 256 * i + e[t + f], f += h, l -= 8
    );
    for (
      s = i & ((1 << -l) - 1), i >>= -l, l += r;
      l > 0;
      s = 256 * s + e[t + f], f += h, l -= 8
    );
    if (0 === i) i = 1 - u
    else {
      if (i === c) return s ? NaN : (1 / 0) * (p ? -1 : 1)
      ;(s += Math.pow(2, r)), (i -= u)
    }
    return (p ? -1 : 1) * s * Math.pow(2, i - r)
  }
  function Vi(e, t, n, r, o, i) {
    var s,
      a,
      c,
      u = 8 * i - o - 1,
      l = (1 << u) - 1,
      f = l >> 1,
      h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      p = r ? 0 : i - 1,
      d = r ? 1 : -1,
      g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
    for (
      t = Math.abs(t),
        isNaN(t) || t === 1 / 0
          ? ((a = isNaN(t) ? 1 : 0), (s = l))
          : ((s = Math.floor(Math.log(t) / Math.LN2)),
            t * (c = Math.pow(2, -s)) < 1 && (s--, (c *= 2)),
            (t += s + f >= 1 ? h / c : h * Math.pow(2, 1 - f)) * c >= 2 &&
              (s++, (c /= 2)),
            s + f >= l
              ? ((a = 0), (s = l))
              : s + f >= 1
              ? ((a = (t * c - 1) * Math.pow(2, o)), (s += f))
              : ((a = t * Math.pow(2, f - 1) * Math.pow(2, o)), (s = 0)));
      o >= 8;
      e[n + p] = 255 & a, p += d, a /= 256, o -= 8
    );
    for (
      s = (s << o) | a, u += o;
      u > 0;
      e[n + p] = 255 & s, p += d, s /= 256, u -= 8
    );
    e[n + p - d] |= 128 * g
  }
  var Qi = {}.toString,
    qi =
      Array.isArray ||
      function (e) {
        return '[object Array]' == Qi.call(e)
      }
  function Ji() {
    return Hi.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
  }
  function Gi(e, t) {
    if (Ji() < t) throw new RangeError('Invalid typed array length')
    return (
      Hi.TYPED_ARRAY_SUPPORT
        ? ((e = new Uint8Array(t)).__proto__ = Hi.prototype)
        : (null === e && (e = new Hi(t)), (e.length = t)),
      e
    )
  }
  function Hi(e, t, n) {
    if (!(Hi.TYPED_ARRAY_SUPPORT || this instanceof Hi)) return new Hi(e, t, n)
    if ('number' == typeof e) {
      if ('string' == typeof t)
        throw new Error(
          'If encoding is specified then the first argument must be a string'
        )
      return Xi(this, e)
    }
    return zi(this, e, t, n)
  }
  function zi(e, t, n, r) {
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
          Hi.TYPED_ARRAY_SUPPORT
            ? ((e = t).__proto__ = Hi.prototype)
            : (e = es(e, t))
          return e
        })(e, t, n, r)
      : 'string' == typeof t
      ? (function (e, t, n) {
          ;('string' == typeof n && '' !== n) || (n = 'utf8')
          if (!Hi.isEncoding(n))
            throw new TypeError('"encoding" must be a valid string encoding')
          var r = 0 | rs(t, n),
            o = (e = Gi(e, r)).write(t, n)
          o !== r && (e = e.slice(0, o))
          return e
        })(e, t, n)
      : (function (e, t) {
          if (ns(t)) {
            var n = 0 | ts(t.length)
            return 0 === (e = Gi(e, n)).length || t.copy(e, 0, 0, n), e
          }
          if (t) {
            if (
              ('undefined' != typeof ArrayBuffer &&
                t.buffer instanceof ArrayBuffer) ||
              'length' in t
            )
              return 'number' != typeof t.length || (r = t.length) != r
                ? Gi(e, 0)
                : es(e, t)
            if ('Buffer' === t.type && qi(t.data)) return es(e, t.data)
          }
          var r
          throw new TypeError(
            'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
          )
        })(e, t)
  }
  function Zi(e) {
    if ('number' != typeof e)
      throw new TypeError('"size" argument must be a number')
    if (e < 0) throw new RangeError('"size" argument must not be negative')
  }
  function Xi(e, t) {
    if ((Zi(t), (e = Gi(e, t < 0 ? 0 : 0 | ts(t))), !Hi.TYPED_ARRAY_SUPPORT))
      for (var n = 0; n < t; ++n) e[n] = 0
    return e
  }
  function es(e, t) {
    var n = t.length < 0 ? 0 : 0 | ts(t.length)
    e = Gi(e, n)
    for (var r = 0; r < n; r += 1) e[r] = 255 & t[r]
    return e
  }
  function ts(e) {
    if (e >= Ji())
      throw new RangeError(
        'Attempt to allocate Buffer larger than maximum size: 0x' +
          Ji().toString(16) +
          ' bytes'
      )
    return 0 | e
  }
  function ns(e) {
    return !(null == e || !e._isBuffer)
  }
  function rs(e, t) {
    if (ns(e)) return e.length
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
          return Ps(e).length
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return 2 * n
        case 'hex':
          return n >>> 1
        case 'base64':
          return Cs(e).length
        default:
          if (r) return Ps(e).length
          ;(t = ('' + t).toLowerCase()), (r = !0)
      }
  }
  function os(e, t, n) {
    var r = !1
    if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return ''
    if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
      return ''
    if ((n >>>= 0) <= (t >>>= 0)) return ''
    for (e || (e = 'utf8'); ; )
      switch (e) {
        case 'hex':
          return bs(this, t, n)
        case 'utf8':
        case 'utf-8':
          return gs(this, t, n)
        case 'ascii':
          return ys(this, t, n)
        case 'latin1':
        case 'binary':
          return vs(this, t, n)
        case 'base64':
          return ds(this, t, n)
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ws(this, t, n)
        default:
          if (r) throw new TypeError('Unknown encoding: ' + e)
          ;(e = (e + '').toLowerCase()), (r = !0)
      }
  }
  function is(e, t, n) {
    var r = e[t]
    ;(e[t] = e[n]), (e[n] = r)
  }
  function ss(e, t, n, r, o) {
    if (0 === e.length) return -1
    if (
      ('string' == typeof n
        ? ((r = n), (n = 0))
        : n > 2147483647
        ? (n = 2147483647)
        : n < -2147483648 && (n = -2147483648),
      (n = +n),
      isNaN(n) && (n = o ? 0 : e.length - 1),
      n < 0 && (n = e.length + n),
      n >= e.length)
    ) {
      if (o) return -1
      n = e.length - 1
    } else if (n < 0) {
      if (!o) return -1
      n = 0
    }
    if (('string' == typeof t && (t = Hi.from(t, r)), ns(t)))
      return 0 === t.length ? -1 : as(e, t, n, r, o)
    if ('number' == typeof t)
      return (
        (t &= 255),
        Hi.TYPED_ARRAY_SUPPORT &&
        'function' == typeof Uint8Array.prototype.indexOf
          ? o
            ? Uint8Array.prototype.indexOf.call(e, t, n)
            : Uint8Array.prototype.lastIndexOf.call(e, t, n)
          : as(e, [t], n, r, o)
      )
    throw new TypeError('val must be string, number or Buffer')
  }
  function as(e, t, n, r, o) {
    var i,
      s = 1,
      a = e.length,
      c = t.length
    if (
      void 0 !== r &&
      ('ucs2' === (r = String(r).toLowerCase()) ||
        'ucs-2' === r ||
        'utf16le' === r ||
        'utf-16le' === r)
    ) {
      if (e.length < 2 || t.length < 2) return -1
      ;(s = 2), (a /= 2), (c /= 2), (n /= 2)
    }
    function u(e, t) {
      return 1 === s ? e[t] : e.readUInt16BE(t * s)
    }
    if (o) {
      var l = -1
      for (i = n; i < a; i++)
        if (u(e, i) === u(t, -1 === l ? 0 : i - l)) {
          if ((-1 === l && (l = i), i - l + 1 === c)) return l * s
        } else -1 !== l && (i -= i - l), (l = -1)
    } else
      for (n + c > a && (n = a - c), i = n; i >= 0; i--) {
        for (var f = !0, h = 0; h < c; h++)
          if (u(e, i + h) !== u(t, h)) {
            f = !1
            break
          }
        if (f) return i
      }
    return -1
  }
  function cs(e, t, n, r) {
    n = Number(n) || 0
    var o = e.length - n
    r ? (r = Number(r)) > o && (r = o) : (r = o)
    var i = t.length
    if (i % 2 != 0) throw new TypeError('Invalid hex string')
    r > i / 2 && (r = i / 2)
    for (var s = 0; s < r; ++s) {
      var a = parseInt(t.substr(2 * s, 2), 16)
      if (isNaN(a)) return s
      e[n + s] = a
    }
    return s
  }
  function us(e, t, n, r) {
    return xs(Ps(t, e.length - n), e, n, r)
  }
  function ls(e, t, n, r) {
    return xs(
      (function (e) {
        for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n))
        return t
      })(t),
      e,
      n,
      r
    )
  }
  function fs(e, t, n, r) {
    return ls(e, t, n, r)
  }
  function hs(e, t, n, r) {
    return xs(Cs(t), e, n, r)
  }
  function ps(e, t, n, r) {
    return xs(
      (function (e, t) {
        for (var n, r, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
          (r = (n = e.charCodeAt(s)) >> 8), (o = n % 256), i.push(o), i.push(r)
        return i
      })(t, e.length - n),
      e,
      n,
      r
    )
  }
  function ds(e, t, n) {
    return 0 === t && n === e.length ? Wi(e) : Wi(e.slice(t, n))
  }
  function gs(e, t, n) {
    n = Math.min(e.length, n)
    for (var r = [], o = t; o < n; ) {
      var i,
        s,
        a,
        c,
        u = e[o],
        l = null,
        f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1
      if (o + f <= n)
        switch (f) {
          case 1:
            u < 128 && (l = u)
            break
          case 2:
            128 == (192 & (i = e[o + 1])) &&
              (c = ((31 & u) << 6) | (63 & i)) > 127 &&
              (l = c)
            break
          case 3:
            ;(i = e[o + 1]),
              (s = e[o + 2]),
              128 == (192 & i) &&
                128 == (192 & s) &&
                (c = ((15 & u) << 12) | ((63 & i) << 6) | (63 & s)) > 2047 &&
                (c < 55296 || c > 57343) &&
                (l = c)
            break
          case 4:
            ;(i = e[o + 1]),
              (s = e[o + 2]),
              (a = e[o + 3]),
              128 == (192 & i) &&
                128 == (192 & s) &&
                128 == (192 & a) &&
                (c =
                  ((15 & u) << 18) |
                  ((63 & i) << 12) |
                  ((63 & s) << 6) |
                  (63 & a)) > 65535 &&
                c < 1114112 &&
                (l = c)
        }
      null === l
        ? ((l = 65533), (f = 1))
        : l > 65535 &&
          ((l -= 65536),
          r.push(((l >>> 10) & 1023) | 55296),
          (l = 56320 | (1023 & l))),
        r.push(l),
        (o += f)
    }
    return (function (e) {
      var t = e.length
      if (t <= ms) return String.fromCharCode.apply(String, e)
      var n = '',
        r = 0
      for (; r < t; )
        n += String.fromCharCode.apply(String, e.slice(r, (r += ms)))
      return n
    })(r)
  }
  ;(Hi.TYPED_ARRAY_SUPPORT =
    void 0 === Bi.TYPED_ARRAY_SUPPORT || Bi.TYPED_ARRAY_SUPPORT),
    (Hi.poolSize = 8192),
    (Hi._augment = function (e) {
      return (e.__proto__ = Hi.prototype), e
    }),
    (Hi.from = function (e, t, n) {
      return zi(null, e, t, n)
    }),
    Hi.TYPED_ARRAY_SUPPORT &&
      ((Hi.prototype.__proto__ = Uint8Array.prototype),
      (Hi.__proto__ = Uint8Array)),
    (Hi.alloc = function (e, t, n) {
      return (function (e, t, n, r) {
        return (
          Zi(t),
          t <= 0
            ? Gi(e, t)
            : void 0 !== n
            ? 'string' == typeof r
              ? Gi(e, t).fill(n, r)
              : Gi(e, t).fill(n)
            : Gi(e, t)
        )
      })(null, e, t, n)
    }),
    (Hi.allocUnsafe = function (e) {
      return Xi(null, e)
    }),
    (Hi.allocUnsafeSlow = function (e) {
      return Xi(null, e)
    }),
    (Hi.isBuffer = function (e) {
      return (
        null != e &&
        (!!e._isBuffer ||
          Rs(e) ||
          (function (e) {
            return (
              'function' == typeof e.readFloatLE &&
              'function' == typeof e.slice &&
              Rs(e.slice(0, 0))
            )
          })(e))
      )
    }),
    (Hi.compare = function (e, t) {
      if (!ns(e) || !ns(t)) throw new TypeError('Arguments must be Buffers')
      if (e === t) return 0
      for (
        var n = e.length, r = t.length, o = 0, i = Math.min(n, r);
        o < i;
        ++o
      )
        if (e[o] !== t[o]) {
          ;(n = e[o]), (r = t[o])
          break
        }
      return n < r ? -1 : r < n ? 1 : 0
    }),
    (Hi.isEncoding = function (e) {
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
    (Hi.concat = function (e, t) {
      if (!qi(e))
        throw new TypeError('"list" argument must be an Array of Buffers')
      if (0 === e.length) return Hi.alloc(0)
      var n
      if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length
      var r = Hi.allocUnsafe(t),
        o = 0
      for (n = 0; n < e.length; ++n) {
        var i = e[n]
        if (!ns(i))
          throw new TypeError('"list" argument must be an Array of Buffers')
        i.copy(r, o), (o += i.length)
      }
      return r
    }),
    (Hi.byteLength = rs),
    (Hi.prototype._isBuffer = !0),
    (Hi.prototype.swap16 = function () {
      var e = this.length
      if (e % 2 != 0)
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      for (var t = 0; t < e; t += 2) is(this, t, t + 1)
      return this
    }),
    (Hi.prototype.swap32 = function () {
      var e = this.length
      if (e % 4 != 0)
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      for (var t = 0; t < e; t += 4) is(this, t, t + 3), is(this, t + 1, t + 2)
      return this
    }),
    (Hi.prototype.swap64 = function () {
      var e = this.length
      if (e % 8 != 0)
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      for (var t = 0; t < e; t += 8)
        is(this, t, t + 7),
          is(this, t + 1, t + 6),
          is(this, t + 2, t + 5),
          is(this, t + 3, t + 4)
      return this
    }),
    (Hi.prototype.toString = function () {
      var e = 0 | this.length
      return 0 === e
        ? ''
        : 0 === arguments.length
        ? gs(this, 0, e)
        : os.apply(this, arguments)
    }),
    (Hi.prototype.equals = function (e) {
      if (!ns(e)) throw new TypeError('Argument must be a Buffer')
      return this === e || 0 === Hi.compare(this, e)
    }),
    (Hi.prototype.inspect = function () {
      var e = ''
      return (
        this.length > 0 &&
          ((e = this.toString('hex', 0, 50).match(/.{2}/g).join(' ')),
          this.length > 50 && (e += ' ... ')),
        '<Buffer ' + e + '>'
      )
    }),
    (Hi.prototype.compare = function (e, t, n, r, o) {
      if (!ns(e)) throw new TypeError('Argument must be a Buffer')
      if (
        (void 0 === t && (t = 0),
        void 0 === n && (n = e ? e.length : 0),
        void 0 === r && (r = 0),
        void 0 === o && (o = this.length),
        t < 0 || n > e.length || r < 0 || o > this.length)
      )
        throw new RangeError('out of range index')
      if (r >= o && t >= n) return 0
      if (r >= o) return -1
      if (t >= n) return 1
      if (this === e) return 0
      for (
        var i = (o >>>= 0) - (r >>>= 0),
          s = (n >>>= 0) - (t >>>= 0),
          a = Math.min(i, s),
          c = this.slice(r, o),
          u = e.slice(t, n),
          l = 0;
        l < a;
        ++l
      )
        if (c[l] !== u[l]) {
          ;(i = c[l]), (s = u[l])
          break
        }
      return i < s ? -1 : s < i ? 1 : 0
    }),
    (Hi.prototype.includes = function (e, t, n) {
      return -1 !== this.indexOf(e, t, n)
    }),
    (Hi.prototype.indexOf = function (e, t, n) {
      return ss(this, e, t, n, !0)
    }),
    (Hi.prototype.lastIndexOf = function (e, t, n) {
      return ss(this, e, t, n, !1)
    }),
    (Hi.prototype.write = function (e, t, n, r) {
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
      var o = this.length - t
      if (
        ((void 0 === n || n > o) && (n = o),
        (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
      )
        throw new RangeError('Attempt to write outside buffer bounds')
      r || (r = 'utf8')
      for (var i = !1; ; )
        switch (r) {
          case 'hex':
            return cs(this, e, t, n)
          case 'utf8':
          case 'utf-8':
            return us(this, e, t, n)
          case 'ascii':
            return ls(this, e, t, n)
          case 'latin1':
          case 'binary':
            return fs(this, e, t, n)
          case 'base64':
            return hs(this, e, t, n)
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ps(this, e, t, n)
          default:
            if (i) throw new TypeError('Unknown encoding: ' + r)
            ;(r = ('' + r).toLowerCase()), (i = !0)
        }
    }),
    (Hi.prototype.toJSON = function () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    })
  var ms = 4096
  function ys(e, t, n) {
    var r = ''
    n = Math.min(e.length, n)
    for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o])
    return r
  }
  function vs(e, t, n) {
    var r = ''
    n = Math.min(e.length, n)
    for (var o = t; o < n; ++o) r += String.fromCharCode(e[o])
    return r
  }
  function bs(e, t, n) {
    var r = e.length
    ;(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r)
    for (var o = '', i = t; i < n; ++i) o += Ts(e[i])
    return o
  }
  function ws(e, t, n) {
    for (var r = e.slice(t, n), o = '', i = 0; i < r.length; i += 2)
      o += String.fromCharCode(r[i] + 256 * r[i + 1])
    return o
  }
  function _s(e, t, n) {
    if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint')
    if (e + t > n) throw new RangeError('Trying to access beyond buffer length')
  }
  function Es(e, t, n, r, o, i) {
    if (!ns(e))
      throw new TypeError('"buffer" argument must be a Buffer instance')
    if (t > o || t < i)
      throw new RangeError('"value" argument is out of bounds')
    if (n + r > e.length) throw new RangeError('Index out of range')
  }
  function Ss(e, t, n, r) {
    t < 0 && (t = 65535 + t + 1)
    for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o)
      e[n + o] = (t & (255 << (8 * (r ? o : 1 - o)))) >>> (8 * (r ? o : 1 - o))
  }
  function Os(e, t, n, r) {
    t < 0 && (t = 4294967295 + t + 1)
    for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o)
      e[n + o] = (t >>> (8 * (r ? o : 3 - o))) & 255
  }
  function As(e, t, n, r, o, i) {
    if (n + r > e.length) throw new RangeError('Index out of range')
    if (n < 0) throw new RangeError('Index out of range')
  }
  function Ms(e, t, n, r, o) {
    return o || As(e, 0, n, 4), Vi(e, t, n, r, 23, 4), n + 4
  }
  function Ls(e, t, n, r, o) {
    return o || As(e, 0, n, 8), Vi(e, t, n, r, 52, 8), n + 8
  }
  ;(Hi.prototype.slice = function (e, t) {
    var n,
      r = this.length
    if (
      ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
      (t = void 0 === t ? r : ~~t) < 0
        ? (t += r) < 0 && (t = 0)
        : t > r && (t = r),
      t < e && (t = e),
      Hi.TYPED_ARRAY_SUPPORT)
    )
      (n = this.subarray(e, t)).__proto__ = Hi.prototype
    else {
      var o = t - e
      n = new Hi(o, void 0)
      for (var i = 0; i < o; ++i) n[i] = this[i + e]
    }
    return n
  }),
    (Hi.prototype.readUIntLE = function (e, t, n) {
      ;(e |= 0), (t |= 0), n || _s(e, t, this.length)
      for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
        r += this[e + i] * o
      return r
    }),
    (Hi.prototype.readUIntBE = function (e, t, n) {
      ;(e |= 0), (t |= 0), n || _s(e, t, this.length)
      for (var r = this[e + --t], o = 1; t > 0 && (o *= 256); )
        r += this[e + --t] * o
      return r
    }),
    (Hi.prototype.readUInt8 = function (e, t) {
      return t || _s(e, 1, this.length), this[e]
    }),
    (Hi.prototype.readUInt16LE = function (e, t) {
      return t || _s(e, 2, this.length), this[e] | (this[e + 1] << 8)
    }),
    (Hi.prototype.readUInt16BE = function (e, t) {
      return t || _s(e, 2, this.length), (this[e] << 8) | this[e + 1]
    }),
    (Hi.prototype.readUInt32LE = function (e, t) {
      return (
        t || _s(e, 4, this.length),
        (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
          16777216 * this[e + 3]
      )
    }),
    (Hi.prototype.readUInt32BE = function (e, t) {
      return (
        t || _s(e, 4, this.length),
        16777216 * this[e] +
          ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
      )
    }),
    (Hi.prototype.readIntLE = function (e, t, n) {
      ;(e |= 0), (t |= 0), n || _s(e, t, this.length)
      for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
        r += this[e + i] * o
      return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r
    }),
    (Hi.prototype.readIntBE = function (e, t, n) {
      ;(e |= 0), (t |= 0), n || _s(e, t, this.length)
      for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256); )
        i += this[e + --r] * o
      return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
    }),
    (Hi.prototype.readInt8 = function (e, t) {
      return (
        t || _s(e, 1, this.length),
        128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
      )
    }),
    (Hi.prototype.readInt16LE = function (e, t) {
      t || _s(e, 2, this.length)
      var n = this[e] | (this[e + 1] << 8)
      return 32768 & n ? 4294901760 | n : n
    }),
    (Hi.prototype.readInt16BE = function (e, t) {
      t || _s(e, 2, this.length)
      var n = this[e + 1] | (this[e] << 8)
      return 32768 & n ? 4294901760 | n : n
    }),
    (Hi.prototype.readInt32LE = function (e, t) {
      return (
        t || _s(e, 4, this.length),
        this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
      )
    }),
    (Hi.prototype.readInt32BE = function (e, t) {
      return (
        t || _s(e, 4, this.length),
        (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
      )
    }),
    (Hi.prototype.readFloatLE = function (e, t) {
      return t || _s(e, 4, this.length), Ki(this, e, !0, 23, 4)
    }),
    (Hi.prototype.readFloatBE = function (e, t) {
      return t || _s(e, 4, this.length), Ki(this, e, !1, 23, 4)
    }),
    (Hi.prototype.readDoubleLE = function (e, t) {
      return t || _s(e, 8, this.length), Ki(this, e, !0, 52, 8)
    }),
    (Hi.prototype.readDoubleBE = function (e, t) {
      return t || _s(e, 8, this.length), Ki(this, e, !1, 52, 8)
    }),
    (Hi.prototype.writeUIntLE = function (e, t, n, r) {
      ;((e = +e), (t |= 0), (n |= 0), r) ||
        Es(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
      var o = 1,
        i = 0
      for (this[t] = 255 & e; ++i < n && (o *= 256); )
        this[t + i] = (e / o) & 255
      return t + n
    }),
    (Hi.prototype.writeUIntBE = function (e, t, n, r) {
      ;((e = +e), (t |= 0), (n |= 0), r) ||
        Es(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
      var o = n - 1,
        i = 1
      for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
        this[t + o] = (e / i) & 255
      return t + n
    }),
    (Hi.prototype.writeUInt8 = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || Es(this, e, t, 1, 255, 0),
        Hi.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
        (this[t] = 255 & e),
        t + 1
      )
    }),
    (Hi.prototype.writeUInt16LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || Es(this, e, t, 2, 65535, 0),
        Hi.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
          : Ss(this, e, t, !0),
        t + 2
      )
    }),
    (Hi.prototype.writeUInt16BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || Es(this, e, t, 2, 65535, 0),
        Hi.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
          : Ss(this, e, t, !1),
        t + 2
      )
    }),
    (Hi.prototype.writeUInt32LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || Es(this, e, t, 4, 4294967295, 0),
        Hi.TYPED_ARRAY_SUPPORT
          ? ((this[t + 3] = e >>> 24),
            (this[t + 2] = e >>> 16),
            (this[t + 1] = e >>> 8),
            (this[t] = 255 & e))
          : Os(this, e, t, !0),
        t + 4
      )
    }),
    (Hi.prototype.writeUInt32BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || Es(this, e, t, 4, 4294967295, 0),
        Hi.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e))
          : Os(this, e, t, !1),
        t + 4
      )
    }),
    (Hi.prototype.writeIntLE = function (e, t, n, r) {
      if (((e = +e), (t |= 0), !r)) {
        var o = Math.pow(2, 8 * n - 1)
        Es(this, e, t, n, o - 1, -o)
      }
      var i = 0,
        s = 1,
        a = 0
      for (this[t] = 255 & e; ++i < n && (s *= 256); )
        e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1),
          (this[t + i] = (((e / s) >> 0) - a) & 255)
      return t + n
    }),
    (Hi.prototype.writeIntBE = function (e, t, n, r) {
      if (((e = +e), (t |= 0), !r)) {
        var o = Math.pow(2, 8 * n - 1)
        Es(this, e, t, n, o - 1, -o)
      }
      var i = n - 1,
        s = 1,
        a = 0
      for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
        e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1),
          (this[t + i] = (((e / s) >> 0) - a) & 255)
      return t + n
    }),
    (Hi.prototype.writeInt8 = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || Es(this, e, t, 1, 127, -128),
        Hi.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
        e < 0 && (e = 255 + e + 1),
        (this[t] = 255 & e),
        t + 1
      )
    }),
    (Hi.prototype.writeInt16LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || Es(this, e, t, 2, 32767, -32768),
        Hi.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
          : Ss(this, e, t, !0),
        t + 2
      )
    }),
    (Hi.prototype.writeInt16BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || Es(this, e, t, 2, 32767, -32768),
        Hi.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
          : Ss(this, e, t, !1),
        t + 2
      )
    }),
    (Hi.prototype.writeInt32LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || Es(this, e, t, 4, 2147483647, -2147483648),
        Hi.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24))
          : Os(this, e, t, !0),
        t + 4
      )
    }),
    (Hi.prototype.writeInt32BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || Es(this, e, t, 4, 2147483647, -2147483648),
        e < 0 && (e = 4294967295 + e + 1),
        Hi.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e))
          : Os(this, e, t, !1),
        t + 4
      )
    }),
    (Hi.prototype.writeFloatLE = function (e, t, n) {
      return Ms(this, e, t, !0, n)
    }),
    (Hi.prototype.writeFloatBE = function (e, t, n) {
      return Ms(this, e, t, !1, n)
    }),
    (Hi.prototype.writeDoubleLE = function (e, t, n) {
      return Ls(this, e, t, !0, n)
    }),
    (Hi.prototype.writeDoubleBE = function (e, t, n) {
      return Ls(this, e, t, !1, n)
    }),
    (Hi.prototype.copy = function (e, t, n, r) {
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
      var o,
        i = r - n
      if (this === e && n < t && t < r)
        for (o = i - 1; o >= 0; --o) e[o + t] = this[o + n]
      else if (i < 1e3 || !Hi.TYPED_ARRAY_SUPPORT)
        for (o = 0; o < i; ++o) e[o + t] = this[o + n]
      else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t)
      return i
    }),
    (Hi.prototype.fill = function (e, t, n, r) {
      if ('string' == typeof e) {
        if (
          ('string' == typeof t
            ? ((r = t), (t = 0), (n = this.length))
            : 'string' == typeof n && ((r = n), (n = this.length)),
          1 === e.length)
        ) {
          var o = e.charCodeAt(0)
          o < 256 && (e = o)
        }
        if (void 0 !== r && 'string' != typeof r)
          throw new TypeError('encoding must be a string')
        if ('string' == typeof r && !Hi.isEncoding(r))
          throw new TypeError('Unknown encoding: ' + r)
      } else 'number' == typeof e && (e &= 255)
      if (t < 0 || this.length < t || this.length < n)
        throw new RangeError('Out of range index')
      if (n <= t) return this
      var i
      if (
        ((t >>>= 0),
        (n = void 0 === n ? this.length : n >>> 0),
        e || (e = 0),
        'number' == typeof e)
      )
        for (i = t; i < n; ++i) this[i] = e
      else {
        var s = ns(e) ? e : Ps(new Hi(e, r).toString()),
          a = s.length
        for (i = 0; i < n - t; ++i) this[i + t] = s[i % a]
      }
      return this
    })
  var Ns = /[^+\/0-9A-Za-z-_]/g
  function Ts(e) {
    return e < 16 ? '0' + e.toString(16) : e.toString(16)
  }
  function Ps(e, t) {
    var n
    t = t || 1 / 0
    for (var r = e.length, o = null, i = [], s = 0; s < r; ++s) {
      if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
        if (!o) {
          if (n > 56319) {
            ;(t -= 3) > -1 && i.push(239, 191, 189)
            continue
          }
          if (s + 1 === r) {
            ;(t -= 3) > -1 && i.push(239, 191, 189)
            continue
          }
          o = n
          continue
        }
        if (n < 56320) {
          ;(t -= 3) > -1 && i.push(239, 191, 189), (o = n)
          continue
        }
        n = 65536 + (((o - 55296) << 10) | (n - 56320))
      } else o && (t -= 3) > -1 && i.push(239, 191, 189)
      if (((o = null), n < 128)) {
        if ((t -= 1) < 0) break
        i.push(n)
      } else if (n < 2048) {
        if ((t -= 2) < 0) break
        i.push((n >> 6) | 192, (63 & n) | 128)
      } else if (n < 65536) {
        if ((t -= 3) < 0) break
        i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128)
      } else {
        if (!(n < 1114112)) throw new Error('Invalid code point')
        if ((t -= 4) < 0) break
        i.push(
          (n >> 18) | 240,
          ((n >> 12) & 63) | 128,
          ((n >> 6) & 63) | 128,
          (63 & n) | 128
        )
      }
    }
    return i
  }
  function Cs(e) {
    return (function (e) {
      var t, n, r, o, i, s
      Di || Fi()
      var a = e.length
      if (a % 4 > 0)
        throw new Error('Invalid string. Length must be a multiple of 4')
      ;(i = '=' === e[a - 2] ? 2 : '=' === e[a - 1] ? 1 : 0),
        (s = new $i((3 * a) / 4 - i)),
        (r = i > 0 ? a - 4 : a)
      var c = 0
      for (t = 0, n = 0; t < r; t += 4, n += 3)
        (o =
          (ji[e.charCodeAt(t)] << 18) |
          (ji[e.charCodeAt(t + 1)] << 12) |
          (ji[e.charCodeAt(t + 2)] << 6) |
          ji[e.charCodeAt(t + 3)]),
          (s[c++] = (o >> 16) & 255),
          (s[c++] = (o >> 8) & 255),
          (s[c++] = 255 & o)
      return (
        2 === i
          ? ((o = (ji[e.charCodeAt(t)] << 2) | (ji[e.charCodeAt(t + 1)] >> 4)),
            (s[c++] = 255 & o))
          : 1 === i &&
            ((o =
              (ji[e.charCodeAt(t)] << 10) |
              (ji[e.charCodeAt(t + 1)] << 4) |
              (ji[e.charCodeAt(t + 2)] >> 2)),
            (s[c++] = (o >> 8) & 255),
            (s[c++] = 255 & o)),
        s
      )
    })(
      (function (e) {
        if (
          (e = (function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '')
          })(e).replace(Ns, '')).length < 2
        )
          return ''
        for (; e.length % 4 != 0; ) e += '='
        return e
      })(e)
    )
  }
  function xs(e, t, n, r) {
    for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o)
      t[o + n] = e[o]
    return o
  }
  function Rs(e) {
    return (
      !!e.constructor &&
      'function' == typeof e.constructor.isBuffer &&
      e.constructor.isBuffer(e)
    )
  }
  function Is() {
    throw new Error('setTimeout has not been defined')
  }
  function ks() {
    throw new Error('clearTimeout has not been defined')
  }
  var Bs = Is,
    Ys = ks
  function js(e) {
    if (Bs === setTimeout) return setTimeout(e, 0)
    if ((Bs === Is || !Bs) && setTimeout)
      return (Bs = setTimeout), setTimeout(e, 0)
    try {
      return Bs(e, 0)
    } catch (t) {
      try {
        return Bs.call(null, e, 0)
      } catch (t) {
        return Bs.call(this, e, 0)
      }
    }
  }
  'function' == typeof Bi.setTimeout && (Bs = setTimeout),
    'function' == typeof Bi.clearTimeout && (Ys = clearTimeout)
  var $s,
    Ds = [],
    Fs = !1,
    Us = -1
  function Ws() {
    Fs &&
      $s &&
      ((Fs = !1),
      $s.length ? (Ds = $s.concat(Ds)) : (Us = -1),
      Ds.length && Ks())
  }
  function Ks() {
    if (!Fs) {
      var e = js(Ws)
      Fs = !0
      for (var t = Ds.length; t; ) {
        for ($s = Ds, Ds = []; ++Us < t; ) $s && $s[Us].run()
        ;(Us = -1), (t = Ds.length)
      }
      ;($s = null),
        (Fs = !1),
        (function (e) {
          if (Ys === clearTimeout) return clearTimeout(e)
          if ((Ys === ks || !Ys) && clearTimeout)
            return (Ys = clearTimeout), clearTimeout(e)
          try {
            Ys(e)
          } catch (t) {
            try {
              return Ys.call(null, e)
            } catch (t) {
              return Ys.call(this, e)
            }
          }
        })(e)
    }
  }
  function Vs(e, t) {
    ;(this.fun = e), (this.array = t)
  }
  Vs.prototype.run = function () {
    this.fun.apply(null, this.array)
  }
  function Qs() {}
  var qs = Qs,
    Js = Qs,
    Gs = Qs,
    Hs = Qs,
    zs = Qs,
    Zs = Qs,
    Xs = Qs
  var ea = Bi.performance || {},
    ta =
      ea.now ||
      ea.mozNow ||
      ea.msNow ||
      ea.oNow ||
      ea.webkitNow ||
      function () {
        return new Date().getTime()
      }
  var na = new Date()
  var ra = {
    nextTick: function (e) {
      var t = new Array(arguments.length - 1)
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      Ds.push(new Vs(e, t)), 1 !== Ds.length || Fs || js(Ks)
    },
    title: 'browser',
    browser: !0,
    env: {},
    argv: [],
    version: '',
    versions: {},
    on: qs,
    addListener: Js,
    once: Gs,
    off: Hs,
    removeListener: zs,
    removeAllListeners: Zs,
    emit: Xs,
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
      var t = 0.001 * ta.call(ea),
        n = Math.floor(t),
        r = Math.floor((t % 1) * 1e9)
      return e && ((n -= e[0]), (r -= e[1]) < 0 && (n--, (r += 1e9))), [n, r]
    },
    platform: 'browser',
    release: {},
    config: {},
    uptime: function () {
      return (new Date() - na) / 1e3
    }
  }
  const oa = {
    identify: (e) => e instanceof Uint8Array,
    default: !1,
    tag: 'tag:yaml.org,2002:binary',
    resolve: (e, t) => {
      const n = ki.resolveString(e, t)
      return Hi.from(n, 'base64')
    },
    options: ki.binaryOptions,
    stringify: ({ comment: e, type: t, value: n }, r, o, i) => {
      let s
      if (
        ((s =
          n instanceof Hi
            ? n.toString('base64')
            : Hi.from(n.buffer).toString('base64')),
        t || (t = ki.binaryOptions.defaultType),
        t === xo.Type.QUOTE_DOUBLE)
      )
        n = s
      else {
        const { lineWidth: e } = ki.binaryOptions,
          r = Math.ceil(s.length / e),
          o = new Array(r)
        for (let t = 0, n = 0; t < r; ++t, n += e) o[t] = s.substr(n, e)
        n = o.join(t === xo.Type.BLOCK_LITERAL ? '\n' : ' ')
      }
      return ki.stringifyString({ comment: e, type: t, value: n }, r, o, i)
    }
  }
  function ia(e, t) {
    const n = ki.resolveSeq(e, t)
    for (let e = 0; e < n.items.length; ++e) {
      let r = n.items[e]
      if (!(r instanceof ki.Pair)) {
        if (r instanceof ki.YAMLMap) {
          if (r.items.length > 1) {
            const e = 'Each pair must have its own sequence indicator'
            throw new xo.YAMLSemanticError(t, e)
          }
          const e = r.items[0] || new ki.Pair()
          r.commentBefore &&
            (e.commentBefore = e.commentBefore
              ? `${r.commentBefore}\n${e.commentBefore}`
              : r.commentBefore),
            r.comment &&
              (e.comment = e.comment
                ? `${r.comment}\n${e.comment}`
                : r.comment),
            (r = e)
        }
        n.items[e] = r instanceof ki.Pair ? r : new ki.Pair(r)
      }
    }
    return n
  }
  function sa(e, t, n) {
    const r = new ki.YAMLSeq(e)
    r.tag = 'tag:yaml.org,2002:pairs'
    for (const o of t) {
      let t, i
      if (Array.isArray(o)) {
        if (2 !== o.length)
          throw new TypeError(`Expected [key, value] tuple: ${o}`)
        ;(t = o[0]), (i = o[1])
      } else if (o && o instanceof Object) {
        const e = Object.keys(o)
        if (1 !== e.length)
          throw new TypeError(`Expected { key: value } tuple: ${o}`)
        ;(t = e[0]), (i = o[t])
      } else t = o
      const s = e.createPair(t, i, n)
      r.items.push(s)
    }
    return r
  }
  const aa = {
    default: !1,
    tag: 'tag:yaml.org,2002:pairs',
    resolve: ia,
    createNode: sa
  }
  class ca extends ki.YAMLSeq {
    constructor() {
      super(),
        xo._defineProperty(this, 'add', ki.YAMLMap.prototype.add.bind(this)),
        xo._defineProperty(
          this,
          'delete',
          ki.YAMLMap.prototype.delete.bind(this)
        ),
        xo._defineProperty(this, 'get', ki.YAMLMap.prototype.get.bind(this)),
        xo._defineProperty(this, 'has', ki.YAMLMap.prototype.has.bind(this)),
        xo._defineProperty(this, 'set', ki.YAMLMap.prototype.set.bind(this)),
        (this.tag = ca.tag)
    }
    toJSON(e, t) {
      const n = new Map()
      t && t.onCreate && t.onCreate(n)
      for (const e of this.items) {
        let r, o
        if (
          (e instanceof ki.Pair
            ? ((r = ki.toJSON(e.key, '', t)), (o = ki.toJSON(e.value, r, t)))
            : (r = ki.toJSON(e, '', t)),
          n.has(r))
        )
          throw new Error('Ordered maps must not include duplicate keys')
        n.set(r, o)
      }
      return n
    }
  }
  xo._defineProperty(ca, 'tag', 'tag:yaml.org,2002:omap')
  const ua = {
    identify: (e) => e instanceof Map,
    nodeClass: ca,
    default: !1,
    tag: 'tag:yaml.org,2002:omap',
    resolve: function (e, t) {
      const n = ia(e, t),
        r = []
      for (const { key: e } of n.items)
        if (e instanceof ki.Scalar) {
          if (r.includes(e.value)) {
            const e = 'Ordered maps must not include duplicate keys'
            throw new xo.YAMLSemanticError(t, e)
          }
          r.push(e.value)
        }
      return Object.assign(new ca(), n)
    },
    createNode: function (e, t, n) {
      const r = sa(e, t, n),
        o = new ca()
      return (o.items = r.items), o
    }
  }
  class la extends ki.YAMLMap {
    constructor() {
      super(), (this.tag = la.tag)
    }
    add(e) {
      const t = e instanceof ki.Pair ? e : new ki.Pair(e)
      ki.findPair(this.items, t.key) || this.items.push(t)
    }
    get(e, t) {
      const n = ki.findPair(this.items, e)
      return !t && n instanceof ki.Pair
        ? n.key instanceof ki.Scalar
          ? n.key.value
          : n.key
        : n
    }
    set(e, t) {
      if ('boolean' != typeof t)
        throw new Error(
          'Expected boolean value for set(key, value) in a YAML set, not ' +
            typeof t
        )
      const n = ki.findPair(this.items, e)
      n && !t
        ? this.items.splice(this.items.indexOf(n), 1)
        : !n && t && this.items.push(new ki.Pair(e))
    }
    toJSON(e, t) {
      return super.toJSON(e, t, Set)
    }
    toString(e, t, n) {
      if (!e) return JSON.stringify(this)
      if (this.hasAllNullValues()) return super.toString(e, t, n)
      throw new Error('Set items must all have null values')
    }
  }
  xo._defineProperty(la, 'tag', 'tag:yaml.org,2002:set')
  const fa = {
      identify: (e) => e instanceof Set,
      nodeClass: la,
      default: !1,
      tag: 'tag:yaml.org,2002:set',
      resolve: function (e, t) {
        const n = ki.resolveMap(e, t)
        if (!n.hasAllNullValues())
          throw new xo.YAMLSemanticError(
            t,
            'Set items must all have null values'
          )
        return Object.assign(new la(), n)
      },
      createNode: function (e, t, n) {
        const r = new la()
        for (const o of t) r.items.push(e.createPair(o, null, n))
        return r
      }
    },
    ha = (e, t) => {
      const n = t.split(':').reduce((e, t) => 60 * e + Number(t), 0)
      return '-' === e ? -n : n
    },
    pa = ({ value: e }) => {
      if (isNaN(e) || !isFinite(e)) return ki.stringifyNumber(e)
      let t = ''
      e < 0 && ((t = '-'), (e = Math.abs(e)))
      const n = [e % 60]
      return (
        e < 60
          ? n.unshift(0)
          : ((e = Math.round((e - n[0]) / 60)),
            n.unshift(e % 60),
            e >= 60 && ((e = Math.round((e - n[0]) / 60)), n.unshift(e))),
        t +
          n
            .map((e) => (e < 10 ? '0' + String(e) : String(e)))
            .join(':')
            .replace(/000000\d*$/, '')
      )
    },
    da = {
      identify: (e) => 'number' == typeof e,
      default: !0,
      tag: 'tag:yaml.org,2002:int',
      format: 'TIME',
      test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+)$/,
      resolve: (e, t, n) => ha(t, n.replace(/_/g, '')),
      stringify: pa
    },
    ga = {
      identify: (e) => 'number' == typeof e,
      default: !0,
      tag: 'tag:yaml.org,2002:float',
      format: 'TIME',
      test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*)$/,
      resolve: (e, t, n) => ha(t, n.replace(/_/g, '')),
      stringify: pa
    },
    ma = {
      identify: (e) => e instanceof Date,
      default: !0,
      tag: 'tag:yaml.org,2002:timestamp',
      test: RegExp(
        '^(?:([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?)$'
      ),
      resolve: (e, t, n, r, o, i, s, a, c) => {
        a && (a = (a + '00').substr(1, 3))
        let u = Date.UTC(t, n - 1, r, o || 0, i || 0, s || 0, a || 0)
        if (c && 'Z' !== c) {
          let e = ha(c[0], c.slice(1))
          Math.abs(e) < 30 && (e *= 60), (u -= 6e4 * e)
        }
        return new Date(u)
      },
      stringify: ({ value: e }) =>
        e.toISOString().replace(/((T00:00)?:00)?\.000Z$/, '')
    }
  function ya(e) {
    const t = (void 0 !== ra && ra.env) || {}
    return e
      ? 'undefined' != typeof YAML_SILENCE_DEPRECATION_WARNINGS
        ? !YAML_SILENCE_DEPRECATION_WARNINGS
        : !t.YAML_SILENCE_DEPRECATION_WARNINGS
      : 'undefined' != typeof YAML_SILENCE_WARNINGS
      ? !YAML_SILENCE_WARNINGS
      : !t.YAML_SILENCE_WARNINGS
  }
  function va(e, t) {
    if (ya(!1)) {
      const n = void 0 !== ra && ra.emitWarning
      n ? n(e, t) : console.warn(t ? `${t}: ${e}` : e)
    }
  }
  const ba = {}
  var wa = {
    binary: oa,
    floatTime: ga,
    intTime: da,
    omap: ua,
    pairs: aa,
    set: fa,
    timestamp: ma,
    warn: va,
    warnFileDeprecation: function (e) {
      if (ya(!0)) {
        va(
          `The endpoint 'yaml/${e
            .replace(/.*yaml[/\\]/i, '')
            .replace(/\.js$/, '')
            .replace(/\\/g, '/')}' will be removed in a future release.`,
          'DeprecationWarning'
        )
      }
    },
    warnOptionDeprecation: function (e, t) {
      if (!ba[e] && ya(!0)) {
        ba[e] = !0
        let n = `The option '${e}' will be removed in a future release`
        ;(n += t ? `, use '${t}' instead.` : '.'), va(n, 'DeprecationWarning')
      }
    }
  }
  const _a = {
    createNode: function (e, t, n) {
      const r = new ki.YAMLMap(e)
      if (t instanceof Map)
        for (const [o, i] of t) r.items.push(e.createPair(o, i, n))
      else if (t && 'object' == typeof t)
        for (const o of Object.keys(t)) r.items.push(e.createPair(o, t[o], n))
      return (
        'function' == typeof e.sortMapEntries && r.items.sort(e.sortMapEntries),
        r
      )
    },
    default: !0,
    nodeClass: ki.YAMLMap,
    tag: 'tag:yaml.org,2002:map',
    resolve: ki.resolveMap
  }
  const Ea = {
      createNode: function (e, t, n) {
        const r = new ki.YAMLSeq(e)
        if (t && t[Symbol.iterator])
          for (const o of t) {
            const t = e.createNode(o, n.wrapScalars, null, n)
            r.items.push(t)
          }
        return r
      },
      default: !0,
      nodeClass: ki.YAMLSeq,
      tag: 'tag:yaml.org,2002:seq',
      resolve: ki.resolveSeq
    },
    Sa = {
      identify: (e) => 'string' == typeof e,
      default: !0,
      tag: 'tag:yaml.org,2002:str',
      resolve: ki.resolveString,
      stringify: (e, t, n, r) => (
        (t = Object.assign({ actualString: !0 }, t)),
        ki.stringifyString(e, t, n, r)
      ),
      options: ki.strOptions
    },
    Oa = [_a, Ea, Sa],
    Aa = (e) => 'bigint' == typeof e || Number.isInteger(e),
    Ma = (e, t, n) => (ki.intOptions.asBigInt ? BigInt(e) : parseInt(t, n))
  function La(e, t, n) {
    const { value: r } = e
    return Aa(r) && r >= 0 ? n + r.toString(t) : ki.stringifyNumber(e)
  }
  const Na = {
      identify: (e) => null == e,
      createNode: (e, t, n) => (n.wrapScalars ? new ki.Scalar(null) : null),
      default: !0,
      tag: 'tag:yaml.org,2002:null',
      test: /^(?:~|[Nn]ull|NULL)?$/,
      resolve: () => null,
      options: ki.nullOptions,
      stringify: () => ki.nullOptions.nullStr
    },
    Ta = {
      identify: (e) => 'boolean' == typeof e,
      default: !0,
      tag: 'tag:yaml.org,2002:bool',
      test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
      resolve: (e) => 't' === e[0] || 'T' === e[0],
      options: ki.boolOptions,
      stringify: ({ value: e }) =>
        e ? ki.boolOptions.trueStr : ki.boolOptions.falseStr
    },
    Pa = {
      identify: (e) => Aa(e) && e >= 0,
      default: !0,
      tag: 'tag:yaml.org,2002:int',
      format: 'OCT',
      test: /^0o([0-7]+)$/,
      resolve: (e, t) => Ma(e, t, 8),
      options: ki.intOptions,
      stringify: (e) => La(e, 8, '0o')
    },
    Ca = {
      identify: Aa,
      default: !0,
      tag: 'tag:yaml.org,2002:int',
      test: /^[-+]?[0-9]+$/,
      resolve: (e) => Ma(e, e, 10),
      options: ki.intOptions,
      stringify: ki.stringifyNumber
    },
    xa = {
      identify: (e) => Aa(e) && e >= 0,
      default: !0,
      tag: 'tag:yaml.org,2002:int',
      format: 'HEX',
      test: /^0x([0-9a-fA-F]+)$/,
      resolve: (e, t) => Ma(e, t, 16),
      options: ki.intOptions,
      stringify: (e) => La(e, 16, '0x')
    },
    Ra = {
      identify: (e) => 'number' == typeof e,
      default: !0,
      tag: 'tag:yaml.org,2002:float',
      test: /^(?:[-+]?\.inf|(\.nan))$/i,
      resolve: (e, t) =>
        t
          ? NaN
          : '-' === e[0]
          ? Number.NEGATIVE_INFINITY
          : Number.POSITIVE_INFINITY,
      stringify: ki.stringifyNumber
    },
    Ia = {
      identify: (e) => 'number' == typeof e,
      default: !0,
      tag: 'tag:yaml.org,2002:float',
      format: 'EXP',
      test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
      resolve: (e) => parseFloat(e),
      stringify: ({ value: e }) => Number(e).toExponential()
    },
    ka = {
      identify: (e) => 'number' == typeof e,
      default: !0,
      tag: 'tag:yaml.org,2002:float',
      test: /^[-+]?(?:\.([0-9]+)|[0-9]+\.([0-9]*))$/,
      resolve(e, t, n) {
        const r = t || n,
          o = new ki.Scalar(parseFloat(e))
        return (
          r && '0' === r[r.length - 1] && (o.minFractionDigits = r.length), o
        )
      },
      stringify: ki.stringifyNumber
    },
    Ba = Oa.concat([Na, Ta, Pa, Ca, xa, Ra, Ia, ka]),
    Ya = (e) => 'bigint' == typeof e || Number.isInteger(e),
    ja = ({ value: e }) => JSON.stringify(e),
    $a = [
      _a,
      Ea,
      {
        identify: (e) => 'string' == typeof e,
        default: !0,
        tag: 'tag:yaml.org,2002:str',
        resolve: ki.resolveString,
        stringify: ja
      },
      {
        identify: (e) => null == e,
        createNode: (e, t, n) => (n.wrapScalars ? new ki.Scalar(null) : null),
        default: !0,
        tag: 'tag:yaml.org,2002:null',
        test: /^null$/,
        resolve: () => null,
        stringify: ja
      },
      {
        identify: (e) => 'boolean' == typeof e,
        default: !0,
        tag: 'tag:yaml.org,2002:bool',
        test: /^true|false$/,
        resolve: (e) => 'true' === e,
        stringify: ja
      },
      {
        identify: Ya,
        default: !0,
        tag: 'tag:yaml.org,2002:int',
        test: /^-?(?:0|[1-9][0-9]*)$/,
        resolve: (e) => (ki.intOptions.asBigInt ? BigInt(e) : parseInt(e, 10)),
        stringify: ({ value: e }) => (Ya(e) ? e.toString() : JSON.stringify(e))
      },
      {
        identify: (e) => 'number' == typeof e,
        default: !0,
        tag: 'tag:yaml.org,2002:float',
        test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
        resolve: (e) => parseFloat(e),
        stringify: ja
      }
    ]
  $a.scalarFallback = (e) => {
    throw new SyntaxError(`Unresolved plain scalar ${JSON.stringify(e)}`)
  }
  const Da = ({ value: e }) =>
      e ? ki.boolOptions.trueStr : ki.boolOptions.falseStr,
    Fa = (e) => 'bigint' == typeof e || Number.isInteger(e)
  function Ua(e, t, n) {
    let r = t.replace(/_/g, '')
    if (ki.intOptions.asBigInt) {
      switch (n) {
        case 2:
          r = `0b${r}`
          break
        case 8:
          r = `0o${r}`
          break
        case 16:
          r = `0x${r}`
      }
      const t = BigInt(r)
      return '-' === e ? BigInt(-1) * t : t
    }
    const o = parseInt(r, n)
    return '-' === e ? -1 * o : o
  }
  function Wa(e, t, n) {
    const { value: r } = e
    if (Fa(r)) {
      const e = r.toString(t)
      return r < 0 ? '-' + n + e.substr(1) : n + e
    }
    return ki.stringifyNumber(e)
  }
  const Ka = Oa.concat(
      [
        {
          identify: (e) => null == e,
          createNode: (e, t, n) => (n.wrapScalars ? new ki.Scalar(null) : null),
          default: !0,
          tag: 'tag:yaml.org,2002:null',
          test: /^(?:~|[Nn]ull|NULL)?$/,
          resolve: () => null,
          options: ki.nullOptions,
          stringify: () => ki.nullOptions.nullStr
        },
        {
          identify: (e) => 'boolean' == typeof e,
          default: !0,
          tag: 'tag:yaml.org,2002:bool',
          test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
          resolve: () => !0,
          options: ki.boolOptions,
          stringify: Da
        },
        {
          identify: (e) => 'boolean' == typeof e,
          default: !0,
          tag: 'tag:yaml.org,2002:bool',
          test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
          resolve: () => !1,
          options: ki.boolOptions,
          stringify: Da
        },
        {
          identify: Fa,
          default: !0,
          tag: 'tag:yaml.org,2002:int',
          format: 'BIN',
          test: /^([-+]?)0b([0-1_]+)$/,
          resolve: (e, t, n) => Ua(t, n, 2),
          stringify: (e) => Wa(e, 2, '0b')
        },
        {
          identify: Fa,
          default: !0,
          tag: 'tag:yaml.org,2002:int',
          format: 'OCT',
          test: /^([-+]?)0([0-7_]+)$/,
          resolve: (e, t, n) => Ua(t, n, 8),
          stringify: (e) => Wa(e, 8, '0')
        },
        {
          identify: Fa,
          default: !0,
          tag: 'tag:yaml.org,2002:int',
          test: /^([-+]?)([0-9][0-9_]*)$/,
          resolve: (e, t, n) => Ua(t, n, 10),
          stringify: ki.stringifyNumber
        },
        {
          identify: Fa,
          default: !0,
          tag: 'tag:yaml.org,2002:int',
          format: 'HEX',
          test: /^([-+]?)0x([0-9a-fA-F_]+)$/,
          resolve: (e, t, n) => Ua(t, n, 16),
          stringify: (e) => Wa(e, 16, '0x')
        },
        {
          identify: (e) => 'number' == typeof e,
          default: !0,
          tag: 'tag:yaml.org,2002:float',
          test: /^(?:[-+]?\.inf|(\.nan))$/i,
          resolve: (e, t) =>
            t
              ? NaN
              : '-' === e[0]
              ? Number.NEGATIVE_INFINITY
              : Number.POSITIVE_INFINITY,
          stringify: ki.stringifyNumber
        },
        {
          identify: (e) => 'number' == typeof e,
          default: !0,
          tag: 'tag:yaml.org,2002:float',
          format: 'EXP',
          test: /^[-+]?([0-9][0-9_]*)?(\.[0-9_]*)?[eE][-+]?[0-9]+$/,
          resolve: (e) => parseFloat(e.replace(/_/g, '')),
          stringify: ({ value: e }) => Number(e).toExponential()
        },
        {
          identify: (e) => 'number' == typeof e,
          default: !0,
          tag: 'tag:yaml.org,2002:float',
          test: /^[-+]?(?:[0-9][0-9_]*)?\.([0-9_]*)$/,
          resolve(e, t) {
            const n = new ki.Scalar(parseFloat(e.replace(/_/g, '')))
            if (t) {
              const e = t.replace(/_/g, '')
              '0' === e[e.length - 1] && (n.minFractionDigits = e.length)
            }
            return n
          },
          stringify: ki.stringifyNumber
        }
      ],
      wa.binary,
      wa.omap,
      wa.pairs,
      wa.set,
      wa.intTime,
      wa.floatTime,
      wa.timestamp
    ),
    Va = { core: Ba, failsafe: Oa, json: $a, yaml11: Ka },
    Qa = {
      binary: wa.binary,
      bool: Ta,
      float: ka,
      floatExp: Ia,
      floatNaN: Ra,
      floatTime: wa.floatTime,
      int: Ca,
      intHex: xa,
      intOct: Pa,
      intTime: wa.intTime,
      map: _a,
      null: Na,
      omap: wa.omap,
      pairs: wa.pairs,
      seq: Ea,
      set: wa.set,
      timestamp: wa.timestamp
    }
  function qa(e, t, n) {
    if (e instanceof ki.Node) return e
    const {
      defaultPrefix: r,
      onTagObj: o,
      prevObjects: i,
      schema: s,
      wrapScalars: a
    } = n
    t && t.startsWith('!!') && (t = r + t.slice(2))
    let c = (function (e, t, n) {
      if (t) {
        const e = n.filter((e) => e.tag === t),
          r = e.find((e) => !e.format) || e[0]
        if (!r) throw new Error(`Tag ${t} not found`)
        return r
      }
      return n.find(
        (t) =>
          ((t.identify && t.identify(e)) ||
            (t.class && e instanceof t.class)) &&
          !t.format
      )
    })(e, t, s.tags)
    if (!c) {
      if (
        ('function' == typeof e.toJSON && (e = e.toJSON()),
        !e || 'object' != typeof e)
      )
        return a ? new ki.Scalar(e) : e
      c = e instanceof Map ? _a : e[Symbol.iterator] ? Ea : _a
    }
    o && (o(c), delete n.onTagObj)
    const u = { value: void 0, node: void 0 }
    if (e && 'object' == typeof e && i) {
      const t = i.get(e)
      if (t) {
        const e = new ki.Alias(t)
        return n.aliasNodes.push(e), e
      }
      ;(u.value = e), i.set(e, u)
    }
    return (
      (u.node = c.createNode
        ? c.createNode(n.schema, e, n)
        : a
        ? new ki.Scalar(e)
        : e),
      t && u.node instanceof ki.Node && (u.node.tag = t),
      u.node
    )
  }
  const Ja = (e, t) => (e.key < t.key ? -1 : e.key > t.key ? 1 : 0)
  class Ga {
    constructor({
      customTags: e,
      merge: t,
      schema: n,
      sortMapEntries: r,
      tags: o
    }) {
      ;(this.merge = !!t),
        (this.name = n),
        (this.sortMapEntries = !0 === r ? Ja : r || null),
        !e && o && wa.warnOptionDeprecation('tags', 'customTags'),
        (this.tags = (function (e, t, n, r) {
          let o = e[r.replace(/\W/g, '')]
          if (!o) {
            const t = Object.keys(e)
              .map((e) => JSON.stringify(e))
              .join(', ')
            throw new Error(`Unknown schema "${r}"; use one of ${t}`)
          }
          if (Array.isArray(n)) for (const e of n) o = o.concat(e)
          else 'function' == typeof n && (o = n(o.slice()))
          for (let e = 0; e < o.length; ++e) {
            const n = o[e]
            if ('string' == typeof n) {
              const r = t[n]
              if (!r) {
                const e = Object.keys(t)
                  .map((e) => JSON.stringify(e))
                  .join(', ')
                throw new Error(`Unknown custom tag "${n}"; use one of ${e}`)
              }
              o[e] = r
            }
          }
          return o
        })(Va, Qa, e || o, n))
    }
    createNode(e, t, n, r) {
      const o = {
        defaultPrefix: Ga.defaultPrefix,
        schema: this,
        wrapScalars: t
      }
      return qa(e, n, r ? Object.assign(r, o) : o)
    }
    createPair(e, t, n) {
      n || (n = { wrapScalars: !0 })
      const r = this.createNode(e, n.wrapScalars, null, n),
        o = this.createNode(t, n.wrapScalars, null, n)
      return new ki.Pair(r, o)
    }
  }
  xo._defineProperty(Ga, 'defaultPrefix', xo.defaultTagPrefix),
    xo._defineProperty(Ga, 'defaultTags', xo.defaultTags)
  var Ha = { Schema: Ga }
  const za = {
      get binary() {
        return ki.binaryOptions
      },
      set binary(e) {
        Object.assign(ki.binaryOptions, e)
      },
      get bool() {
        return ki.boolOptions
      },
      set bool(e) {
        Object.assign(ki.boolOptions, e)
      },
      get int() {
        return ki.intOptions
      },
      set int(e) {
        Object.assign(ki.intOptions, e)
      },
      get null() {
        return ki.nullOptions
      },
      set null(e) {
        Object.assign(ki.nullOptions, e)
      },
      get str() {
        return ki.strOptions
      },
      set str(e) {
        Object.assign(ki.strOptions, e)
      }
    },
    Za = {
      '1.0': {
        schema: 'yaml-1.1',
        merge: !0,
        tagPrefixes: [
          { handle: '!', prefix: xo.defaultTagPrefix },
          { handle: '!!', prefix: 'tag:private.yaml.org,2002:' }
        ]
      },
      1.1: {
        schema: 'yaml-1.1',
        merge: !0,
        tagPrefixes: [
          { handle: '!', prefix: '!' },
          { handle: '!!', prefix: xo.defaultTagPrefix }
        ]
      },
      1.2: {
        schema: 'core',
        merge: !1,
        tagPrefixes: [
          { handle: '!', prefix: '!' },
          { handle: '!!', prefix: xo.defaultTagPrefix }
        ]
      }
    }
  function Xa(e, t) {
    if ('1.0' === (e.version || e.options.version)) {
      const e = t.match(/^tag:private\.yaml\.org,2002:([^:/]+)$/)
      if (e) return '!' + e[1]
      const n = t.match(/^tag:([a-zA-Z0-9-]+)\.yaml\.org,2002:(.*)/)
      return n ? `!${n[1]}/${n[2]}` : `!${t.replace(/^tag:/, '')}`
    }
    let n = e.tagPrefixes.find((e) => 0 === t.indexOf(e.prefix))
    if (!n) {
      const r = e.getDefaults().tagPrefixes
      n = r && r.find((e) => 0 === t.indexOf(e.prefix))
    }
    if (!n) return '!' === t[0] ? t : `!<${t}>`
    const r = t.substr(n.prefix.length).replace(
      /[!,[\]{}]/g,
      (e) =>
        ({
          '!': '%21',
          ',': '%2C',
          '[': '%5B',
          ']': '%5D',
          '{': '%7B',
          '}': '%7D'
        }[e])
    )
    return n.handle + r
  }
  function ec(e, t, n, r) {
    const { anchors: o, schema: i } = t.doc
    let s
    if (!(e instanceof ki.Node)) {
      const t = {
        aliasNodes: [],
        onTagObj: (e) => (s = e),
        prevObjects: new Map()
      }
      e = i.createNode(e, !0, null, t)
      for (const e of t.aliasNodes) {
        e.source = e.source.node
        let t = o.getName(e.source)
        t || ((t = o.newName()), (o.map[t] = e.source))
      }
    }
    if (e instanceof ki.Pair) return e.toString(t, n, r)
    s ||
      (s = (function (e, t) {
        if (t instanceof ki.Alias) return ki.Alias
        if (t.tag) {
          const n = e.filter((e) => e.tag === t.tag)
          if (n.length > 0) return n.find((e) => e.format === t.format) || n[0]
        }
        let n, r
        if (t instanceof ki.Scalar) {
          r = t.value
          const o = e.filter(
            (e) =>
              (e.identify && e.identify(r)) || (e.class && r instanceof e.class)
          )
          n = o.find((e) => e.format === t.format) || o.find((e) => !e.format)
        } else
          (r = t), (n = e.find((e) => e.nodeClass && r instanceof e.nodeClass))
        if (!n) {
          const e = r && r.constructor ? r.constructor.name : typeof r
          throw new Error(`Tag not resolved for ${e} value`)
        }
        return n
      })(i.tags, e))
    const a = (function (e, t, { anchors: n, doc: r }) {
      const o = [],
        i = r.anchors.getName(e)
      return (
        i && ((n[i] = e), o.push(`&${i}`)),
        e.tag ? o.push(Xa(r, e.tag)) : t.default || o.push(Xa(r, t.tag)),
        o.join(' ')
      )
    })(e, s, t)
    a.length > 0 && (t.indentAtStart = (t.indentAtStart || 0) + a.length + 1)
    const c =
      'function' == typeof s.stringify
        ? s.stringify(e, t, n, r)
        : e instanceof ki.Scalar
        ? ki.stringifyString(e, t, n, r)
        : e.toString(t, n, r)
    return a
      ? e instanceof ki.Scalar || '{' === c[0] || '[' === c[0]
        ? `${a} ${c}`
        : `${a}\n${t.indent}${c}`
      : c
  }
  class tc {
    static validAnchorNode(e) {
      return (
        e instanceof ki.Scalar ||
        e instanceof ki.YAMLSeq ||
        e instanceof ki.YAMLMap
      )
    }
    constructor(e) {
      xo._defineProperty(this, 'map', Object.create(null)), (this.prefix = e)
    }
    createAlias(e, t) {
      return this.setAnchor(e, t), new ki.Alias(e)
    }
    createMergePair(...e) {
      const t = new ki.Merge()
      return (
        (t.value.items = e.map((e) => {
          if (e instanceof ki.Alias) {
            if (e.source instanceof ki.YAMLMap) return e
          } else if (e instanceof ki.YAMLMap) return this.createAlias(e)
          throw new Error('Merge sources must be Map nodes or their Aliases')
        })),
        t
      )
    }
    getName(e) {
      const { map: t } = this
      return Object.keys(t).find((n) => t[n] === e)
    }
    getNames() {
      return Object.keys(this.map)
    }
    getNode(e) {
      return this.map[e]
    }
    newName(e) {
      e || (e = this.prefix)
      const t = Object.keys(this.map)
      for (let n = 1; ; ++n) {
        const r = `${e}${n}`
        if (!t.includes(r)) return r
      }
    }
    resolveNodes() {
      const { map: e, _cstAliases: t } = this
      Object.keys(e).forEach((t) => {
        e[t] = e[t].resolved
      }),
        t.forEach((e) => {
          e.source = e.source.resolved
        }),
        delete this._cstAliases
    }
    setAnchor(e, t) {
      if (null != e && !tc.validAnchorNode(e))
        throw new Error('Anchors may only be set for Scalar, Seq and Map nodes')
      if (t && /[\x00-\x19\s,[\]{}]/.test(t))
        throw new Error(
          'Anchor names must not contain whitespace or control characters'
        )
      const { map: n } = this,
        r = e && Object.keys(n).find((t) => n[t] === e)
      if (r) {
        if (!t) return r
        r !== t && (delete n[r], (n[t] = e))
      } else {
        if (!t) {
          if (!e) return null
          t = this.newName()
        }
        n[t] = e
      }
      return t
    }
  }
  const nc = (e, t) => {
    if (e && 'object' == typeof e) {
      const { tag: n } = e
      e instanceof ki.Collection
        ? (n && (t[n] = !0), e.items.forEach((e) => nc(e, t)))
        : e instanceof ki.Pair
        ? (nc(e.key, t), nc(e.value, t))
        : e instanceof ki.Scalar && n && (t[n] = !0)
    }
    return t
  }
  function rc({ tagPrefixes: e }, t) {
    const [n, r] = t.parameters
    if (!n || !r) {
      const e = 'Insufficient parameters given for %TAG directive'
      throw new xo.YAMLSemanticError(t, e)
    }
    if (e.some((e) => e.handle === n)) {
      const e =
        'The %TAG directive must only be given at most once per handle in the same document.'
      throw new xo.YAMLSemanticError(t, e)
    }
    return { handle: n, prefix: r }
  }
  function oc(e, t) {
    let [n] = t.parameters
    if (('YAML:1.0' === t.name && (n = '1.0'), !n)) {
      const e = 'Insufficient parameters given for %YAML directive'
      throw new xo.YAMLSemanticError(t, e)
    }
    if (!Za[n]) {
      const r = `Document will be parsed as YAML ${
        e.version || e.options.version
      } rather than YAML ${n}`
      e.warnings.push(new xo.YAMLWarning(t, r))
    }
    return n
  }
  function ic(e) {
    if (e instanceof ki.Collection) return !0
    throw new Error('Expected a YAML collection as document contents')
  }
  class sc {
    constructor(e) {
      ;(this.anchors = new tc(e.anchorPrefix)),
        (this.commentBefore = null),
        (this.comment = null),
        (this.contents = null),
        (this.directivesEndMarker = null),
        (this.errors = []),
        (this.options = e),
        (this.schema = null),
        (this.tagPrefixes = []),
        (this.version = null),
        (this.warnings = [])
    }
    add(e) {
      return ic(this.contents), this.contents.add(e)
    }
    addIn(e, t) {
      ic(this.contents), this.contents.addIn(e, t)
    }
    delete(e) {
      return ic(this.contents), this.contents.delete(e)
    }
    deleteIn(e) {
      return ki.isEmptyPath(e)
        ? null != this.contents && ((this.contents = null), !0)
        : (ic(this.contents), this.contents.deleteIn(e))
    }
    getDefaults() {
      return (
        sc.defaults[this.version] || sc.defaults[this.options.version] || {}
      )
    }
    get(e, t) {
      return this.contents instanceof ki.Collection
        ? this.contents.get(e, t)
        : void 0
    }
    getIn(e, t) {
      return ki.isEmptyPath(e)
        ? !t && this.contents instanceof ki.Scalar
          ? this.contents.value
          : this.contents
        : this.contents instanceof ki.Collection
        ? this.contents.getIn(e, t)
        : void 0
    }
    has(e) {
      return this.contents instanceof ki.Collection && this.contents.has(e)
    }
    hasIn(e) {
      return ki.isEmptyPath(e)
        ? void 0 !== this.contents
        : this.contents instanceof ki.Collection && this.contents.hasIn(e)
    }
    set(e, t) {
      ic(this.contents), this.contents.set(e, t)
    }
    setIn(e, t) {
      ki.isEmptyPath(e)
        ? (this.contents = t)
        : (ic(this.contents), this.contents.setIn(e, t))
    }
    setSchema(e, t) {
      if (!e && !t && this.schema) return
      'number' == typeof e && (e = e.toFixed(1)),
        '1.0' === e || '1.1' === e || '1.2' === e
          ? (this.version ? (this.version = e) : (this.options.version = e),
            delete this.options.schema)
          : e && 'string' == typeof e && (this.options.schema = e),
        Array.isArray(t) && (this.options.customTags = t)
      const n = Object.assign({}, this.getDefaults(), this.options)
      this.schema = new Ha.Schema(n)
    }
    parse(e, t) {
      this.options.keepCstNodes && (this.cstNode = e),
        this.options.keepNodeTypes && (this.type = 'DOCUMENT')
      const {
        directives: n = [],
        contents: r = [],
        directivesEndMarker: o,
        error: i,
        valueRange: s
      } = e
      if (
        (i && (i.source || (i.source = this), this.errors.push(i)),
        (function (e, t, n) {
          const r = []
          let o = !1
          for (const n of t) {
            const { comment: t, name: i } = n
            switch (i) {
              case 'TAG':
                try {
                  e.tagPrefixes.push(rc(e, n))
                } catch (t) {
                  e.errors.push(t)
                }
                o = !0
                break
              case 'YAML':
              case 'YAML:1.0':
                if (e.version) {
                  const t =
                    'The %YAML directive must only be given at most once per document.'
                  e.errors.push(new xo.YAMLSemanticError(n, t))
                }
                try {
                  e.version = oc(e, n)
                } catch (t) {
                  e.errors.push(t)
                }
                o = !0
                break
              default:
                if (i) {
                  const t = `YAML only supports %TAG and %YAML directives, and not %${i}`
                  e.warnings.push(new xo.YAMLWarning(n, t))
                }
            }
            t && r.push(t)
          }
          if (
            n &&
            !o &&
            '1.1' === (e.version || n.version || e.options.version)
          ) {
            const t = ({ handle: e, prefix: t }) => ({ handle: e, prefix: t })
            ;(e.tagPrefixes = n.tagPrefixes.map(t)), (e.version = n.version)
          }
          e.commentBefore = r.join('\n') || null
        })(this, n, t),
        o && (this.directivesEndMarker = !0),
        (this.range = s ? [s.start, s.end] : null),
        this.setSchema(),
        (this.anchors._cstAliases = []),
        (function (e, t) {
          const n = { before: [], after: [] }
          let r,
            o = !1
          for (const i of t)
            if (i.valueRange) {
              if (void 0 !== r) {
                const t =
                  'Document contains trailing content not separated by a ... or --- line'
                e.errors.push(new xo.YAMLSyntaxError(i, t))
                break
              }
              const t = ki.resolveNode(e, i)
              o && ((t.spaceBefore = !0), (o = !1)), (r = t)
            } else
              null !== i.comment
                ? (void 0 === r ? n.before : n.after).push(i.comment)
                : i.type === xo.Type.BLANK_LINE &&
                  ((o = !0),
                  void 0 === r &&
                    n.before.length > 0 &&
                    !e.commentBefore &&
                    ((e.commentBefore = n.before.join('\n')), (n.before = [])))
          if (((e.contents = r || null), r)) {
            const t = n.before.join('\n')
            if (t) {
              const e =
                r instanceof ki.Collection && r.items[0] ? r.items[0] : r
              e.commentBefore = e.commentBefore ? `${t}\n${e.commentBefore}` : t
            }
            e.comment = n.after.join('\n') || null
          } else e.comment = n.before.concat(n.after).join('\n') || null
        })(this, r),
        this.anchors.resolveNodes(),
        this.options.prettyErrors)
      ) {
        for (const e of this.errors) e instanceof xo.YAMLError && e.makePretty()
        for (const e of this.warnings)
          e instanceof xo.YAMLError && e.makePretty()
      }
      return this
    }
    listNonDefaultTags() {
      return ((e) => Object.keys(nc(e, {})))(this.contents).filter(
        (e) => 0 !== e.indexOf(Ha.Schema.defaultPrefix)
      )
    }
    setTagPrefix(e, t) {
      if ('!' !== e[0] || '!' !== e[e.length - 1])
        throw new Error('Handle must start and end with !')
      if (t) {
        const n = this.tagPrefixes.find((t) => t.handle === e)
        n ? (n.prefix = t) : this.tagPrefixes.push({ handle: e, prefix: t })
      } else this.tagPrefixes = this.tagPrefixes.filter((t) => t.handle !== e)
    }
    toJSON(e, t) {
      const {
          keepBlobsInJSON: n,
          mapAsMap: r,
          maxAliasCount: o
        } = this.options,
        i =
          n && ('string' != typeof e || !(this.contents instanceof ki.Scalar)),
        s = {
          doc: this,
          indentStep: '  ',
          keep: i,
          mapAsMap: i && !!r,
          maxAliasCount: o,
          stringify: ec
        },
        a = Object.keys(this.anchors.map)
      a.length > 0 &&
        (s.anchors = new Map(
          a.map((e) => [
            this.anchors.map[e],
            { alias: [], aliasCount: 0, count: 1 }
          ])
        ))
      const c = ki.toJSON(this.contents, e, s)
      if ('function' == typeof t && s.anchors)
        for (const { count: e, res: n } of s.anchors.values()) t(n, e)
      return c
    }
    toString() {
      if (this.errors.length > 0)
        throw new Error('Document with errors cannot be stringified')
      const e = this.options.indent
      if (!Number.isInteger(e) || e <= 0) {
        const t = JSON.stringify(e)
        throw new Error(`"indent" option must be a positive integer, not ${t}`)
      }
      this.setSchema()
      const t = []
      let n = !1
      if (this.version) {
        let e = '%YAML 1.2'
        'yaml-1.1' === this.schema.name &&
          ('1.0' === this.version
            ? (e = '%YAML:1.0')
            : '1.1' === this.version && (e = '%YAML 1.1')),
          t.push(e),
          (n = !0)
      }
      const r = this.listNonDefaultTags()
      this.tagPrefixes.forEach(({ handle: e, prefix: o }) => {
        r.some((e) => 0 === e.indexOf(o)) &&
          (t.push(`%TAG ${e} ${o}`), (n = !0))
      }),
        (n || this.directivesEndMarker) && t.push('---'),
        this.commentBefore &&
          ((!n && this.directivesEndMarker) || t.unshift(''),
          t.unshift(this.commentBefore.replace(/^/gm, '#')))
      const o = {
        anchors: Object.create(null),
        doc: this,
        indent: '',
        indentStep: ' '.repeat(e),
        stringify: ec
      }
      let i = !1,
        s = null
      if (this.contents) {
        this.contents instanceof ki.Node &&
          (this.contents.spaceBefore &&
            (n || this.directivesEndMarker) &&
            t.push(''),
          this.contents.commentBefore &&
            t.push(this.contents.commentBefore.replace(/^/gm, '#')),
          (o.forceBlockIndent = !!this.comment),
          (s = this.contents.comment))
        const e = s ? null : () => (i = !0),
          r = ec(this.contents, o, () => (s = null), e)
        t.push(ki.addComment(r, '', s))
      } else void 0 !== this.contents && t.push(ec(this.contents, o))
      return (
        this.comment &&
          ((i && !s) || '' === t[t.length - 1] || t.push(''),
          t.push(this.comment.replace(/^/gm, '#'))),
        t.join('\n') + '\n'
      )
    }
  }
  xo._defineProperty(sc, 'defaults', Za)
  var ac = {
    Document: sc,
    defaultOptions: {
      anchorPrefix: 'a',
      customTags: null,
      indent: 2,
      indentSeq: !0,
      keepCstNodes: !1,
      keepNodeTypes: !0,
      keepBlobsInJSON: !0,
      mapAsMap: !1,
      maxAliasCount: 100,
      prettyErrors: !1,
      simpleKeys: !1,
      version: '1.2'
    },
    scalarOptions: za
  }
  class cc extends ac.Document {
    constructor(e) {
      super(Object.assign({}, ac.defaultOptions, e))
    }
  }
  function uc(e, t) {
    const n = Go.parse(e),
      r = new cc(t).parse(n[0])
    if (n.length > 1) {
      const e =
        'Source contains multiple documents; please use YAML.parseAllDocuments()'
      r.errors.unshift(new xo.YAMLSemanticError(n[1], e))
    }
    return r
  }
  var lc = {
      YAML: {
        createNode: function (e, t = !0, n) {
          void 0 === n && 'string' == typeof t && ((n = t), (t = !0))
          const r = Object.assign(
            {},
            ac.Document.defaults[ac.defaultOptions.version],
            ac.defaultOptions
          )
          return new Ha.Schema(r).createNode(e, t, n)
        },
        defaultOptions: ac.defaultOptions,
        Document: cc,
        parse: function (e, t) {
          const n = uc(e, t)
          if ((n.warnings.forEach((e) => wa.warn(e)), n.errors.length > 0))
            throw n.errors[0]
          return n.toJSON()
        },
        parseAllDocuments: function (e, t) {
          const n = []
          let r
          for (const o of Go.parse(e)) {
            const e = new cc(t)
            e.parse(o, r), n.push(e), (r = e)
          }
          return n
        },
        parseCST: Go.parse,
        parseDocument: uc,
        scalarOptions: ac.scalarOptions,
        stringify: function (e, t) {
          const n = new cc(t)
          return (n.contents = e), String(n)
        }
      }
    }.YAML,
    fc = {
      findPair: ki.findPair,
      parseMap: ki.resolveMap,
      parseSeq: ki.resolveSeq,
      stringifyNumber: ki.stringifyNumber,
      stringifyString: ki.stringifyString,
      toJSON: ki.toJSON,
      Type: xo.Type,
      YAMLError: xo.YAMLError,
      YAMLReferenceError: xo.YAMLReferenceError,
      YAMLSemanticError: xo.YAMLSemanticError,
      YAMLSyntaxError: xo.YAMLSyntaxError,
      YAMLWarning: xo.YAMLWarning
    },
    hc = {
      findPair: fc.findPair,
      toJSON: fc.toJSON,
      parseMap: fc.parseMap,
      parseSeq: fc.parseSeq,
      stringifyNumber: fc.stringifyNumber,
      stringifyString: fc.stringifyString,
      Type: fc.Type,
      YAMLError: fc.YAMLError,
      YAMLReferenceError: fc.YAMLReferenceError,
      YAMLSemanticError: fc.YAMLSemanticError,
      YAMLSyntaxError: fc.YAMLSyntaxError,
      YAMLWarning: fc.YAMLWarning
    },
    pc = lc.Document,
    dc = lc.parseCST,
    gc = hc.YAMLError,
    mc = hc.YAMLSyntaxError,
    yc = hc.YAMLSemanticError,
    vc = Object.defineProperty(
      {
        Document: pc,
        parseCST: dc,
        YAMLError: gc,
        YAMLSyntaxError: mc,
        YAMLSemanticError: yc
      },
      '__esModule',
      { value: !0 }
    )
  var bc = function (e) {
      var t = vc.parseCST(e)
      ao.addOrigRange(t)
      for (
        var n = t.map(function (e) {
            return new vc.Document({ merge: !1, keepCstNodes: !0 }).parse(e)
          }),
          r = [],
          o = {
            text: e,
            locator: new p.default(e),
            comments: r,
            transformOffset: function (e) {
              return to.transformOffset(e, o)
            },
            transformRange: function (e) {
              return ro.transformRange(e, o)
            },
            transformNode: function (e) {
              return qr.transformNode(e, o)
            },
            transformContent: function (e) {
              return rn.transformContent(e, o)
            }
          },
          i = 0,
          s = n;
        i < s.length;
        i++
      )
        for (var a = 0, c = s[i].errors; a < c.length; a++) {
          var u = c[a]
          if (
            !(
              u instanceof vc.YAMLSemanticError &&
              'Map keys must be unique; "<<" is repeated' === u.message
            )
          )
            throw zr.transformError(u, o)
        }
      n.forEach(function (e) {
        return Ct.removeCstBlankLine(e.cstNode)
      })
      var l = Tt.createRoot(
        o.transformRange({ origStart: 0, origEnd: o.text.length }),
        n.map(o.transformNode),
        r
      )
      return (
        At.attachComments(l), wo.updatePositions(l), uo.removeFakeNodes(l), l
      )
    },
    wc = Object.defineProperty({ parse: bc }, '__esModule', { value: !0 }),
    _c = o(function (e, t) {
      ;(t.__esModule = !0), h.__exportStar(wc, t)
    })
  const { hasPragma: Ec } = t,
    { locStart: Sc, locEnd: Oc } = n
  return {
    parsers: {
      yaml: {
        astFormat: 'yaml',
        parse: function (t) {
          const { parse: n } = _c
          try {
            const e = n(t)
            return delete e.comments, e
          } catch (t) {
            if (t && t.position) throw e(t.message, t.position)
            throw t
          }
        },
        hasPragma: Ec,
        locStart: Sc,
        locEnd: Oc
      }
    }
  }
})
