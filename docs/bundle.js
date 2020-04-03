!(function(t) {
  var e = {}
  function n(r) {
    if (e[r]) return e[r].exports
    var o = (e[r] = { i: r, l: !1, exports: {} })
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  ;(n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
    }),
    (n.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function(e) {
              return t[e]
            }.bind(null, o)
          )
      return r
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return n.d(e, 'a', e), e
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (n.p = ''),
    n((n.s = 1))
})([
  function(t, e, n) {
    'use strict'
    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r)
      }
    }
    function o(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = n),
        t
      )
    }
    n.r(e),
      n.d(e, 'reactive', function() {
        return f
      }),
      n.d(e, 'Watcher', function() {
        return p
      }),
      n.d(e, 'computed', function() {
        return b
      }),
      n.d(e, 'watch', function() {
        return v
      })
    var i = (function() {
      function t() {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function')
        })(this, t),
          o(this, 'deps', void 0),
          (this.deps = new Set())
      }
      var e, n, i
      return (
        (e = t),
        (n = [
          {
            key: 'depend',
            value: function() {
              t.target && this.deps.add(t.target)
            }
          },
          {
            key: 'notify',
            value: function() {
              this.deps.forEach(function(t) {
                return t.update()
              })
            }
          }
        ]) && r(e.prototype, n),
        i && r(e, i),
        t
      )
    })()
    o(i, 'target', void 0)
    var u = []
    function a(t) {
      return (a =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t
            })(t)
    }
    function c(t) {
      return null !== t && 'object' === a(t)
    }
    function f(t) {
      return (
        c(t) &&
          Object.keys(t).forEach(function(e) {
            !(function(t, e) {
              var n = t[e],
                r = new i()
              Object.defineProperty(t, e, {
                get: function() {
                  return r.depend(), n
                },
                set: function(t) {
                  ;(n = t), r.notify()
                }
              }),
                c(n) && f(n)
            })(t, e)
          }),
        t
      )
    }
    function l(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function')
    }
    function d(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r)
      }
    }
    function s(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = n),
        t
      )
    }
    var p = (function() {
      function t(e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        l(this, t),
          s(this, 'getter', void 0),
          s(this, 'computed', void 0),
          s(this, 'value', void 0),
          s(this, 'watch', void 0),
          s(this, 'callback', void 0),
          s(this, 'dep', void 0)
        var r = n.computed,
          o = void 0 !== r && r,
          u = n.watch,
          a = void 0 !== u && u,
          c = n.callback
        ;(this.getter = e),
          (this.computed = o),
          (this.watch = a),
          (this.callback = c),
          (this.value = void 0),
          o ? (this.dep = new i()) : this.get()
      }
      var e, n, r
      return (
        (e = t),
        (n = [
          {
            key: 'get',
            value: function() {
              var t
              return (
                (t = this),
                i.target && u.push(i.target),
                (i.target = t),
                (this.value = this.getter()),
                (i.target = u.pop()),
                this.value
              )
            }
          },
          {
            key: 'depend',
            value: function() {
              this.dep.depend()
            }
          },
          {
            key: 'update',
            value: function() {
              if (this.computed) this.get(), this.dep.notify()
              else if (this.watch) {
                var t = this.value
                this.get(), this.callback && this.callback(this.value, t)
              } else this.get()
            }
          }
        ]) && d(e.prototype, n),
        r && d(e, r),
        t
      )
    })()
    function b(t) {
      var e = {},
        n = new p(t, { computed: !0 })
      return (
        Object.defineProperty(e, 'value', {
          get: function() {
            return n.depend(), n.get()
          }
        }),
        e
      )
    }
    function v(t, e) {
      new p(t, { watch: !0, callback: e })
    }
  },
  function(t, e, n) {
    n(0), (t.exports = n(2))
  },
  function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n(0),
      o = Object(r.reactive)({ msg: 'Hello World', number: 1 }),
      i = Object(r.computed)(function() {
        return o.number + 1
      })
    new r.Watcher(function() {
      document.getElementById(
        'app'
      ).innerHTML = '\n    <p>当前data的状态是：</p>\n    '
        .concat(
          JSON.stringify(o),
          '\n    <p>请在控制台输入data，分别改变data.msg尝试效果</p>\n    <p>data.msg被watch了，可以打印出新旧值的变化</p>\n    msg is '
        )
        .concat(o.msg, ' <br>\n  ')
    }),
      new r.Watcher(function() {
        document.getElementById(
          'app2'
        ).innerHTML = '\n  <p>请在控制台改变data.number尝试computed效果</p>\n  <p>data.number现在是'
          .concat(o.number, '</p>\n    computed: 1 + number 是 ')
          .concat(i.value, '\n  ')
      }),
      Object(r.watch)(
        function() {
          return o.msg
        },
        function(t, e) {
          console.log('newVal: ', t), console.log('old: ', e)
        }
      ),
      (window.data = o)
  }
])
