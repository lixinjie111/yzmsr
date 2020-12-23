var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (d, b, e) {
  d != Array.prototype && d != Object.prototype && (d[b] = e.value)
};
$jscomp.getGlobal = function (d) {
  return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (d, b, e, k) {
  if (b) {
    e = $jscomp.global;
    d = d.split(".");
    for (k = 0; k < d.length - 1; k++) {
      var m = d[k];
      m in e || (e[m] = {});
      e = e[m]
    }
    d = d[d.length - 1];
    k = e[d];
    b = b(k);
    b != k && null != b && $jscomp.defineProperty(e, d, {
      configurable: !0,
      writable: !0,
      value: b
    })
  }
};
$jscomp.polyfill("Object.is", function (d) {
  return d ? d : function (b, d) {
    return b === d ? 0 !== b || 1 / b === 1 / d : b !== b && d !== d
  }
}, "es6-impl", "es3");
$jscomp.polyfill("Array.prototype.includes", function (d) {
  return d ? d : function (b, d) {
    var k = this;
    k instanceof String && (k = String(k));
    var e = k.length;
    for (d = d || 0; d < e; d++)
      if (k[d] == b || Object.is(k[d], b)) return !0;
    return !1
  }
}, "es7", "es3");
$jscomp.checkStringArgs = function (d, b, e) {
  if (null == d) throw new TypeError("The 'this' value for String.prototype." + e + " must not be null or undefined");
  if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + e + " must not be a regular expression");
  return d + ""
};
$jscomp.polyfill("String.prototype.includes", function (d) {
  return d ? d : function (b, d) {
    return -1 !== $jscomp.checkStringArgs(this, b, "includes").indexOf(b, d || 0)
  }
}, "es6-impl", "es3");
var GK = GK || {};
GK.Spline = function () {};
GK.Spline.pointOnCurve = function (d, b, e, k, m) {
  var h = ((-m + 2) * m - 1) * m * .5,
    a = .5 * ((3 * m - 5) * m * m + 2),
    c = ((-3 * m + 4) * m + 1) * m * .5;
  m = (m - 1) * m * m * .5;
  return vec3.fromValues(d[0] * h + b[0] * a + e[0] * c + k[0] * m, d[1] * h + b[1] * a + e[1] * c + k[1] * m, d[2] * h + b[2] * a + e[2] * c + k[2] * m)
};
GK.Spline.bezierPointOnCurve = function (d, b, e, k, m) {
  var h = 1 - m,
    a = m * m,
    c = h * h,
    f = c * h,
    r = a * m;
  d = vec3.clone(d);
  vec3.scale(d, d, f);
  b = vec3.clone(b);
  vec3.scale(b, b, 3 * c * m);
  e = vec3.clone(e);
  vec3.scale(e, e, 3 * h * a);
  k = vec3.clone(k);
  vec3.scale(k, k, r);
  vec3.add(d, d, b);
  vec3.add(d, d, e);
  vec3.add(d, d, k);
  return d
};
GK.Color = function (d, b, e, k) {
  var m = this,
    h = !0,
    a = !0,
    c = !0,
    f = !0,
    r = !0,
    x = 0,
    q = 0,
    l = 0,
    p = 0,
    g = 0,
    n = 0,
    u = 0,
    E = 0,
    z = 0,
    t = 0,
    y = 0,
    v = 0,
    w = 0,
    F = 0,
    A = 0,
    B = 1,
    D, C, H;
  this.logRGB = function () {
    console.log({
      red: m.getRed(),
      green: m.getGreen(),
      blue: m.getBlue()
    })
  };
  this.logHSV = function () {
    console.log({
      hue: m.getHue(),
      saturation: m.getSaturation(),
      value: m.getValue()
    })
  };
  this.logCIELCh = function () {
    console.log({
      l: m.getCIELCh_L(),
      c: m.getCIELCh_C(),
      h: m.getCIELCh_H()
    })
  };
  this.clone = function () {
    r && P();
    return new GK.Color(x, q, l, GK.Color.ColorMode.RGB)
  };
  this.getRGBA = function () {
    r && (P(), D = "rgba(" + Math.round(x) + ", " + Math.round(q) + ", " + Math.round(l) + ", " + Math.round(1E3 * B) / 1E3 + ")", r = !1);
    return D
  };
  this.getHex = function () {
    if (f) {
      P();
      var a = (Math.round(x) << 16) + (Math.round(q) << 8) + Math.round(l);
      H = a;
      for (a = a.toString(16); 6 > a.length;) a = "0" + a;
      C = "#" + a;
      f = !1
    }
    return C
  };
  this.getHexValue = function () {
    if (f) {
      P();
      var a = (Math.round(x) << 16) + (Math.round(q) << 8) + Math.round(l);
      H = a;
      for (a = a.toString(16); 6 > a.length;) a = "0" + a;
      C = "#" + a;
      f = !1
    }
    return H
  };
  this.setHex = function (a) {
    P();
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      function (a, c, b, n) {
        return c + c + b + b + n + n
      });
    a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    x = parseInt(a[1], 16);
    q = parseInt(a[2], 16);
    l = parseInt(a[3], 16);
    T()
  };
  this.getRed = function () {
    P();
    return x
  };
  this.setRed = function (a) {
    P();
    x = L(a, 0, 255);
    T()
  };
  this.getGreen = function () {
    P();
    return q
  };
  this.setGreen = function (a) {
    P();
    q = L(a, 0, 255);
    T()
  };
  this.getBlue = function () {
    P();
    return l
  };
  this.setBlue = function (a) {
    P();
    l = L(a, 0, 255);
    T()
  };
  this.getAlpha = function () {
    return B
  };
  this.setAlpha = function (a) {
    B = a;
    r = !0
  };
  this.getHue = function () {
    R();
    return p
  };
  this.setHue = function (a) {
    R();
    p = L(a, 0, 360);
    U()
  };
  this.getSaturation = function () {
    R();
    return g
  };
  this.setSaturation = function (a) {
    R();
    g = L(a, 0, 100);
    U()
  };
  this.getValue = function () {
    R();
    return n
  };
  this.setValue = function (a) {
    R();
    n = L(a, 0, 100);
    U()
  };
  this.getCIELCh_L = function () {
    S();
    return w
  };
  this.setCIELCH_L = function (a) {
    S();
    w = L(a, 0, 100);
    V()
  };
  this.getCIELCh_C = function () {
    S();
    return F
  };
  this.setCIELCH_C = function (a) {
    S();
    F = L(a, 0, 100);
    V()
  };
  this.getCIELCh_H = function () {
    S();
    return A
  };
  this.setCIELCH_H = function (a) {
    S();
    A = 360 > a ? a : a - 360;
    V()
  };
  var I = function () {
      var a = p,
        c = g,
        b = n,
        c = c / 100,
        b = b / 100;
      if (0 == c) var f = c = b;
      else {
        a /= 60;
        f = Math.floor(a);
        var d = a - f;
        a = b * (1 - c);
        var u = b * (1 - c * d);
        d = b * (1 - c * (1 - d));
        switch (f) {
          case 0:
            f = b;
            c = d;
            b = a;
            break;
          case 1:
            f = u;
            c = b;
            b = a;
            break;
          case 2:
            f = a;
            c = b;
            b = d;
            break;
          case 3:
            f = a;
            c = u;
            break;
          case 4:
            f = d;
            c = a;
            break;
          default:
            f = b, c = a, b = u
        }
      }
      x = L(255 * f, 0, 255);
      q = L(255 * c, 0, 255);
      l = L(255 * b, 0, 255)
    },
    J = function () {
      var a = x,
        c = q,
        b = l,
        f = Math.max(a, c, b),
        d = f - Math.min(a, c, b),
        u = f,
        r = f;
      0 != f && (r = d / f * 100, u = 60 * (a == f ? (c - b) / d : c == f ? 2 + (b - a) / d : 4 + (a - c) /
        d), 0 > u && (u += 360));
      p = u;
      g = r;
      n = f / 255 * 100
    },
    K = function () {
      var a = x / 255,
        c = q / 255,
        b = l / 255,
        a = .04045 < a ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92,
        c = .04045 < c ? Math.pow((c + .055) / 1.055, 2.4) : c / 12.92,
        b = .04045 < b ? Math.pow((b + .055) / 1.055, 2.4) : b / 12.92,
        a = 100 * a,
        c = 100 * c,
        b = 100 * b;
      u = .4124 * a + .3576 * c + .1805 * b;
      E = .2126 * a + .7152 * c + .0722 * b;
      z = .0193 * a + .1192 * c + .9505 * b
    },
    M = function () {
      var a = u / 95.047,
        c = E / 100,
        b = z / 108.883,
        a = .008856 < a ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116,
        c = .008856 < c ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116,
        b = .008856 < b ? Math.pow(b, 1 / 3) : 7.787 * b + 16 / 116;
      t = .008856 < c ? 116 * c - 16 : 903.3 * c;
      y = 500 * (a - c);
      v = 200 * (c - b)
    },
    N = function () {
      var a = Math.atan2(v, y),
        a = 0 < a ? a / Math.PI * 180 : 360 - Math.abs(a) / Math.PI * 180;
      w = t;
      F = Math.sqrt(Math.pow(y, 2) + Math.pow(v, 2));
      A = 360 > a ? a : a - 360
    },
    O = function () {
      var a = Math.PI / 180 * A,
        c = Math.cos(a) * F,
        a = Math.sin(a) * F;
      t = w;
      y = c;
      v = a
    },
    G = function () {
      var a = (t + 16) / 116,
        c = y / 500 + a,
        b = a - v / 200,
        a = .008856 < Math.pow(a, 3) ? Math.pow(a, 3) : (a - 16 / 116) / 7.787,
        c = .008856 < Math.pow(c, 3) ? Math.pow(c, 3) : (c - 16 / 116) / 7.787,
        b = .008856 < Math.pow(b, 3) ? Math.pow(b, 3) : (b - 16 / 116) / 7.787;
      u = 95.047 *
        c;
      E = 100 * a;
      z = 108.883 * b
    },
    Q = function () {
      var a = u / 100,
        c = E / 100,
        b = z / 100,
        n = 3.2406 * a + -1.5372 * c + -.4986 * b,
        f = -.9689 * a + 1.8758 * c + .0415 * b,
        a = .0557 * a + -.204 * c + 1.057 * b,
        n = .0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n,
        f = .0031308 < f ? 1.055 * Math.pow(f, 1 / 2.4) - .055 : 12.92 * f,
        a = .0031308 < a ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : 12.92 * a;
      x = L(255 * n, 0, 255);
      q = L(255 * f, 0, 255);
      l = L(255 * a, 0, 255)
    },
    P = function () {
      h && (a ? c || (O(), G(), Q()) : I(), h = !1)
    },
    R = function () {
      a && (h ? c || (O(), G(), Q(), J()) : J(), a = !1)
    },
    S = function () {
      c && (a ? h || (K(), M(), N()) : (I(), K(), M(), N()),
        c = !1)
    },
    T = function () {
      r = f = c = a = !0
    },
    U = function () {
      r = f = c = h = !0
    },
    V = function () {
      r = f = a = h = !0
    },
    L = function (a, c, b) {
      return Math.min(b, Math.max(c, a))
    };
  (function (b, f, d, u) {
    u || (u = GK.Color.ColorMode.RGB);
    "string" == typeof b ? m.setHex(b) : u == GK.Color.ColorMode.RGB ? (b && (x = L(b, 0, 255)), f && (q = L(f, 0, 255)), d && (l = L(d, 0, 255)), h = !1) : u == GK.Color.ColorMode.HSV ? (b && (p = L(b, 0, 360)), f && (g = L(f, 0, 100)), d && (n = L(d, 0, 100)), a = !1) : u == GK.Color.ColorMode.CIELCh && (b && (w = b), f && (F = f), d && (A = 360 > d ? d : d - 360), c = !1)
  })(d, b, e, k)
};
GK.Color.ColorMode = {};
GK.Color.ColorMode.RGB = 0;
GK.Color.ColorMode.HSV = 1;
GK.Color.ColorMode.CIELCh = 2;
"use strict";
GK = GK || {};
GK.Signal = function () {
  this.functions = {};
  this.fire = function () {
    for (var d in this.functions)
      if (this.functions.hasOwnProperty(d))
        for (var b = 0; b < this.functions[d].length; b++) this.functions[d][b].apply(this, arguments)
  };
  this.add = function (d, b) {
    this.functions[d] || (this.functions[d] = []);
    this.functions[d].push(b)
  };
  this.remove = function (d) {
    delete this.functions[d]
  }
};
"use strict";
GK = GK || {};
GK.ProjectionUtil = {
  project: function (d, b, e) {
    d = vec3.clone(d);
    vec3.transformMat4(d, d, b);
    return vec3.fromValues((.5 * d[0] + .5) * e[2] + e[0], (.5 * d[1] + .5) * e[3] + e[1], .5 * (1 + d[2]))
  },
  unproject: function (d, b, e) {
    mat4.invert(b, b);
    d = vec3.fromValues((2 * d[0] - e[0]) / e[2] - 1, (2 * d[1] - e[1]) / e[3] - 1, 2 * d[2] - 1);
    vec3.normalize(d, d);
    vec3.transformMat4(d, d, b);
    return d
  },
  create: function (d, b) {
    var e = d + b;
    if (e in GK.ProgramManager.programs) return GK.ProgramManager.programs[e];
    d = (new GK.Program).init(d, b);
    return GK.ProgramManager.programs[e] =
      d
  }
};
"use strict";
GK = GK || {};
GK.debounce = function (d, b, e) {
  var k;
  return function () {
    var m = this,
      h = arguments,
      a = e && !k;
    clearTimeout(k);
    k = setTimeout(function () {
      k = null;
      e || d.apply(m, h)
    }, b);
    a && d.apply(m, h)
  }
};
Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
  value: function (d, b) {
    if (null == this) throw new TypeError('"this" is null or not defined');
    var e = Object(this),
      k = e.length >>> 0;
    if (0 === k) return !1;
    b |= 0;
    for (b = Math.max(0 <= b ? b : k - Math.abs(b), 0); b < k;) {
      var m = e[b],
        h = d;
      if (m === h || "number" === typeof m && "number" === typeof h && isNaN(m) && isNaN(h)) return !0;
      b++
    }
    return !1
  }
});
"use strict";
GK = GK || {};
GK.Ajax = function (d) {
  var b = "",
    e = this;
  e.request = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
  e.request.onreadystatechange = function () {
    if (4 == e.request.readyState && 200 == e.request.status) {
      var b = d.ctype || e.request.getResponseHeader("Content-Type"),
        m = null;
      null != b && (b.match(/xml/gi) ? m = e.request.responseXML : b.match(/json/gi) && (m = JSON.parse(e.request.responseText)));
      null == m && (m = e.request.responseText);
      d.onComplete && (b = GK.Ajax.convertHeadersToObject(e.request.getAllResponseHeaders()),
        d.onComplete(m, b))
    } else if (4 == e.request.readyState && 200 != e.request.status && d.onFailure) d.onFailure({
      text: e.request.responseText,
      code: e.request.status
    })
  };
  if (d.params)
    if (d.params.substr) b = d.params;
    else {
      for (param in d.params) b += "&" + encodeURIComponent(param) + "=" + encodeURIComponent(d.params[param]);
      b = b.substr(1)
    } e.configure = function () {
    for (var b in d.headers) e.request.setRequestHeader(b, d.headers[b]);
    d.xRequestedWith && e.request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    d.timeout && (e.request.timeout =
      d.timeout)
  };
  e.fire = function () {
    "GET" == d.method ? (b && (b = "?" + b), e.request.open("GET", d.url + b, !0), e.configure(), e.request.send(null)) : (e.request.open("POST", d.url, !0), e.configure(), e.request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.request.send(b));
    return e
  };
  e.abort = function () {
    e.request.onreadystatechange = null;
    e.request.abort();
    if (d.onFailure) d.onFailure({
      text: e.request.responseText,
      code: e.request.status
    })
  }
};
GK.Ajax.convertHeadersToObject = function (d) {
  d = d.split("\n");
  for (var b = {}, e = 0; e < d.length; e++) {
    var k = d[e].split(": ", 2);
    1 < k.length && (b[k[0]] = k[1])
  }
  return b
};
"use strict";
GK = GK || {};
GK.Ease = {
  inSine: function (d) {
    return 1 - Math.cos(Math.PI / 2 * d)
  },
  outSine: function (d) {
    return Math.sin(Math.PI / 2 * d)
  },
  inOutSine: function (d) {
    return -.5 * (Math.cos(Math.PI * d) - 1) + 0
  },
  inExpo: function (d) {
    return 0 == d ? 0 : Math.pow(2, 10 * (d - 1))
  },
  outExpo: function (d) {
    return 1 == d ? 1 : 1 - Math.pow(2, -10 * d)
  },
  inOutExpo: function (d) {
    return 0 == d ? 0 : 1 == d ? 1 : .5 > d ? .5 * Math.pow(2, 10 * (2 * d - 1)) + 0 : .5 * (-Math.pow(2, -10 * (d / .5 - 1)) + 2) + 0
  },
  outBack: function (d, b) {
    --d;
    b = b || 1.70158;
    return d * d * ((b + 1) * d + b) + 1
  },
  inQuad: function (d) {
    return d * d
  },
  outQuad: function (d) {
    return -d *
      (d - 2)
  },
  inOutQuad: function (d) {
    return .5 > d ? d * d * 2 : 4 * d - 2 * d * d - 1
  },
  inQuart: function (d) {
    return d * d * d * d
  },
  outQuart: function (d) {
    --d;
    return 1 - d * d * d * d
  },
  inOutQuart: function (d) {
    d *= 2;
    if (1 > d) return .5 * d * d * d * d;
    d -= 2;
    return 1 - .5 * d * d * d * d
  },
  outQuint: function (d) {
    --d;
    return d * d * d * d * d + 1
  },
  inQuint: function (d) {
    return d * d * d * d * d
  },
  inOutQuint: function (d) {
    d *= 2;
    if (1 > d) return .5 * d * d * d * d * d;
    d -= 2;
    return .5 * d * d * d * d * d + 1
  },
  inElastic: function (d) {
    return Math.sin(Math.PI / 2 * 13 * d) * Math.pow(2, 10 * (d - 1))
  },
  outElastic: function (d) {
    return Math.sin(Math.PI /
      2 * -13 * (d + 1)) * Math.pow(2, -10 * d) + 1
  }
};
GK.Ease.clamp = function (d, b, e) {
  e < d && (e = d);
  e > b && (e = b);
  return e
};
GK.Ease.smoothstep = function (d, b, e) {
  d = Math.max(0, Math.min(1, (e - d) / (b - d)));
  return d * d * (3 - 2 * d)
};
GK.Ease.roughstep = function (d, b, e) {
  return GK.Ease.clamp(0, 1, (e - d) / (b - d))
};
GK.Ease.convertRange = function (d, b, e, k, m) {
  return (m - d) * (k - e) / (b - d) + e
};
"use strict";
GK = GK || {};
GK.LatLng = function (d, b) {
  this.latitude = d;
  this.longitude = b
};
GK.LatLng.radiansForPosition = function (d, b) {
  return 0 < b ? 0 <= d ? Math.atan(d / b) : 2 * Math.PI + Math.atan(d / b) : 0 > b ? Math.PI + Math.atan(d / b) : 0 < d ? Math.PI / 2 : 3 * Math.PI / 2
};
GK.LatLng.toWorld = function (d) {
  var b = d.latitude * Math.PI / 180;
  d = d.longitude * Math.PI / 180;
  var e = Math.cos(b);
  return vec3.fromValues(Math.sin(d) * e, Math.sin(b), Math.cos(d) * e)
};
GK.LatLng.fromWorld = function (d) {
  var b = vec3.create();
  vec3.normalize(b, d);
  d = Math.asin(b.y);
  for (b = 180 * GK.LatLng.radiansForPosition(b.x, b.z) / Math.PI; 180 < b;) b -= 360;
  return new GK.LatLng(180 * d / Math.PI, b)
};
GK.LatLng.distance = function (d, b) {
  var e = (b.latitude - d.latitude) * Math.PI / 180,
    k = (b.longitude - d.longitude) * Math.PI / 180;
  d = Math.sin(e / 2) * Math.sin(e / 2) + Math.cos(d.latitude * Math.PI / 180) * Math.cos(b.latitude * Math.PI / 180) * Math.sin(k / 2) * Math.sin(k / 2);
  return 12742 * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
};
GK.LatLng.getRotationMatrix = function (d, b) {
  b = b || 1;
  var e = vec3.fromValues(0, 1, 0),
    k = vec3.fromValues(-1, 0, 0);
  vec3.fromValues(0, 0, b);
  b = mat4.create();
  mat4.rotate(b, b, Math.PI * d.longitude / 180, e);
  mat4.rotate(b, b, Math.PI * d.latitude / 180, k);
  return b
};
"use strict";
GK = GK || {};
GK.AnimationManager = {
  id: 0,
  animations: [],
  paused: !1,
  timeoutId: 0,
  timeouts: [],
  init: function () {
    GK.AnimationManager.requestAnimFrame(GK.AnimationManager.tick)
  },
  nextFrameFns: [],
  nextFrame: function (d) {
    GK.AnimationManager.nextFrameFns.push(d)
  },
  pause: function () {
    GK.AnimationManager.paused = !0
  },
  resume: function () {
    GK.AnimationManager.paused && (GK.AnimationManager.paused = !1, GK.AnimationManager.requestAnimFrame(GK.AnimationManager.tick))
  },
  tick: function (d) {
    GK.AnimationManager.paused || (GK.AnimationManager.requestAnimFrame(GK.AnimationManager.tick),
      GK.AnimationManager.update(d), GK.AnimationManager.updateTimeouts(d), GK.AnimationManager.executeFrameFns())
  },
  executeFrameFns: function () {
    for (var d = GK.AnimationManager.nextFrameFns, b = 0; b < d.length; b++) d[b]();
    GK.AnimationManager.nextFrameFns = []
  },
  update: function (d) {
    for (var b = [], e = 0; e < GK.AnimationManager.animations.length; e++) {
      var k = GK.AnimationManager.animations[e];
      d - k.startTime < k.startDelay || (k.started || (k.started = !0, k.startTime = performance.now(), k.startFn()), k.complete ? (b.push(k), k.completeFn(k.val)) :
        (k.integrate(1 / 60), k.updateFn(k.val)))
    }
    GK.AnimationManager.animations = GK.AnimationManager.animations.filter(function (d) {
      return !b.includes(d)
    })
  },
  updateTimeouts: function (d) {
    var b = [];
    for (d = 0; d < GK.AnimationManager.timeouts.length; d++) {
      var e = GK.AnimationManager.timeouts[d];
      e.complete ? (b.push(e), e.completeFn(e)) : e.update(1 / 60)
    }
    GK.AnimationManager.timeouts = GK.AnimationManager.timeouts.filter(function (d) {
      return !b.includes(d)
    })
  },
  requestAnimFrame: (window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame).bind(window),
  add: function (d) {
    GK.AnimationManager.paused || -1 == GK.AnimationManager.animations.indexOf(d) && GK.AnimationManager.animations.push(d)
  },
  remove: function (d) {
    d = GK.AnimationManager.animations.indexOf(d); - 1 != d && GK.AnimationManager.animations.splice(d, 1)
  },
  removeTimeout: function (d) {
    d = GK.AnimationManager.timeouts.indexOf(d); - 1 != d && GK.AnimationManager.timeouts.splice(d, 1)
  }
};
GK.Animation = function (d) {
  this.id = ++GK.AnimationManager.id;
  this.val = 0;
  this.duration = d;
  this.startDelay = this.startTime = 0;
  this.started = this.complete = !1;
  this.startFn = function () {};
  this.updateFn = function () {};
  this.completeFn = function () {};
  var b = 0;
  this.start = function (b) {
    this.startDelay = b || 0;
    GK.AnimationManager.add(this)
  };
  this.integrate = function (d) {
    b += d;
    this.val = Math.max(Math.min((b - this.startDelay) / this.duration, 1), 0);
    1 == this.val && (this.complete = !0)
  };
  this.stop = function () {
    this.val = 1;
    this.updateFn(1);
    this.complete = !0
  };
  this.cancel = function () {
    this.complete = !0
  }
};
GK.FrameTimeout = function (d, b) {
  this.duration = b;
  this.complete = !1;
  this.completeFn = d;
  var e = 0;
  this.update = function (b) {
    e += b;
    e >= this.duration && (this.complete = !0)
  }
};
GK.setTimeout = function (d, b) {
  d = new GK.FrameTimeout(d, b / 1E3);
  GK.AnimationManager.timeouts.push(d);
  return d
};
GK.clearTimeout = function (d) {
  GK.AnimationManager.removeTimeout(d)
};
"use strict";
GK = GK || {};
GK.EventDrawable = function () {
  var d, b, e, k;
  this.baseScale = this.scale = this.alpha = 1;
  this.active = !1;
  var m = mat4.create(),
    h = mat4.create();
  mat4.create();
  var a = mat4.create();
  mat4.create();
  var c = mat4.create(),
    f = vec3.create(),
    r = null,
    x = d = null,
    q = null,
    l = !1;
  this.init = function () {
    this.program = GK.ProgramManager.create("precision highp float;\nattribute vec3 aPosition;\n//attribute vec3 aNormal;\nattribute vec2 aTexture;\nuniform vec3 uCenter;\nuniform int uIsShadow;\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uPerspectiveMatrix;\nuniform vec2 uSceneOffset;\nuniform float uShadowOffset;\nvarying vec2 vTexture;\nvarying float vAlpha;\nvoid main(void) {\n    vec4 worldPos = uModelMatrix * vec4(aPosition, 1.0);\n    vec3 worldNormal = normalize(mat3(uViewMatrix) * worldPos.xyz);\n    vec3 camDir = normalize(vec3(0.0, 0.0, 1.0));\n    vec3 camDirection = normalize(camDir - worldPos.xyz);\n    vAlpha = 1.0;\n    if (uIsShadow == 1) {\n        float cosTheta = dot(worldNormal, camDirection);\n        vAlpha = smoothstep(-0.25, 0.0, cosTheta);\n    }\n    gl_Position = uPerspectiveMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position.xy += uSceneOffset * gl_Position.w;\n    vTexture = aTexture;\n}",
      "precision highp float;\nvarying vec2 vTexture;\nvarying float vAlpha;\nuniform sampler2D uSampler;\nuniform float uAlpha;\nvoid main(void) {\n    vec4 textureColor = texture2D(uSampler, vTexture);\n    gl_FragColor = vec4(textureColor.rgb, textureColor.a * uAlpha * vAlpha);\n}");
    this.loadTextures();
    return this
  };
  this.loadTextures = function () {
    d = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + "/circle.png", !1, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE);
    x = GK.TextureManager.loadTexture(GK.TextureManager.textureDir +
      "/circle-shadow.png", !1, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE);
    q = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + "/circle-small.png", !1, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE)
  };
  this.updateMatrices = function (b) {
    var f = GK.Ease.outBack(this.scale, 1.5) * this.baseScale;
    GK.Ease.outBack(this.scale, 1.7);
    var n = vec3.fromValues(.006, .006, 1),
      d = vec3.fromValues(.1 * f, .1 * f, 1),
      p = vec3.fromValues(.13 * f, .13 * f, 1);
    mat4.identity(m);
    mat4.identity(h);
    mat4.identity(a);
    mat4.scale(m, m, n);
    mat4.scale(h, h, d);
    mat4.scale(a, a, p);
    b =
      this.updateShadowMatrices(b, [.01 * f, .003 * f]);
    mat4.multiply(m, c, m);
    mat4.translate(m, m, vec3.fromValues(0, 0, 1.01));
    mat4.multiply(h, c, h);
    mat4.translate(h, h, vec3.fromValues(0, 0, 1.01));
    mat4.multiply(a, c, a);
    mat4.multiply(a, b[0], a);
    mat4.translate(a, a, vec3.fromValues(0, 0, .99485))
  };
  this.updateShadowMatrices = function (a, c) {
    var b = vec3.clone(f);
    vec3.transformMat4(b, b, h);
    vec3.transformMat4(b, b, a.viewMatrix);
    a = vec3.fromValues(-1, 0, -1);
    var g = vec3.create();
    vec3.subtract(g, a, b);
    a = vec3.create();
    vec3.cross(a, b, g);
    vec3.normalize(a,
      a);
    b = [];
    for (g = 0; g < c.length; g++) {
      var d = mat4.create();
      mat4.rotate(d, d, Math.PI * c[g], a);
      b.push(d)
    }
    return b
  };
  this.setCoords = function (a) {
    r = a;
    f = GK.LatLng.toWorld(r);
    c = GK.LatLng.getRotationMatrix(r, 1)
  };
  this.loadModel = function (a) {
    var c = a.vertices;
    a = a.indices;
    k = a.length;
    b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, c, gl.STATIC_DRAW);
    e = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, e);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, a, gl.STATIC_DRAW);
    l = !0
  };
  this.draw = function (c,
    g) {
    d.loaded && q.loaded && x.loaded && l && r && (gl.useProgram(this.program.name), this.updateMatrices(c), gl.uniformMatrix4fv(this.program.uniforms.uPerspectiveMatrix, !1, c.perspectiveMatrix), gl.uniformMatrix4fv(this.program.uniforms.uViewMatrix, !1, c.viewMatrix), gl.uniform2fv(this.program.uniforms.uSceneOffset, c.sceneOffset), gl.uniform3fv(this.program.uniforms.uCenter, f), gl.uniform1f(this.program.uniforms.uAlpha, this.alpha), gl.bindBuffer(gl.ARRAY_BUFFER, b), gl.vertexAttribPointer(this.program.attributes.aPosition,
      3, gl.FLOAT, !1, 32, 0), gl.vertexAttribPointer(this.program.attributes.aTexture, 2, gl.FLOAT, !1, 32, 24), gl.enableVertexAttribArray(this.program.attributes.aPosition), gl.enableVertexAttribArray(this.program.attributes.aTexture), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, e), gl.activeTexture(gl.TEXTURE0), gl.depthMask(!0), gl.uniform1i(this.program.uniforms.uIsShadow, 0), gl.bindTexture(gl.TEXTURE_2D, d), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.uniformMatrix4fv(this.program.uniforms.uModelMatrix, !1, h), gl.drawElements(gl.TRIANGLES,
      k, gl.UNSIGNED_SHORT, 0), gl.uniform1i(this.program.uniforms.uIsShadow, 1), gl.bindTexture(gl.TEXTURE_2D, x), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.uniformMatrix4fv(this.program.uniforms.uModelMatrix, !1, a), gl.drawElements(gl.TRIANGLES, k, gl.UNSIGNED_SHORT, 0), gl.clear(gl.DEPTH_BUFFER_BIT), gl.depthMask(!1), gl.uniform1i(this.program.uniforms.uIsShadow, 0), gl.bindTexture(gl.TEXTURE_2D, q), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.uniformMatrix4fv(this.program.uniforms.uModelMatrix, !1, m), gl.drawElements(gl.TRIANGLES,
      k, gl.UNSIGNED_SHORT, 0))
  }
};
"use strict";
GK = GK || {};
GK.QuadDrawable = function (d, b, e, k) {
  var m, h, a;
  this.alpha = 1;
  this.orthographic = !1;
  this.modelMatrix = mat4.create();
  mat4.identity(this.modelMatrix);
  var c = null;
  this.init = function () {
    this.program = GK.ProgramManager.create("precision mediump float;\nattribute vec3 aPosition;\nattribute vec2 aTexture;\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec2 uSceneOffset;\nvarying vec2 vTexture;\nvoid main(void) {\n    vec4 mvPosition = uMVMatrix * vec4(aPosition, 1.0);\n    gl_PointSize = 50.0;\n    gl_Position = uPMatrix * mvPosition;\n    gl_Position.xy += uSceneOffset * gl_Position.w;\n    vec2 throwaway = uSceneOffset;\n    vTexture = aTexture;\n}", "precision mediump float;\nvarying vec2 vTexture;\nuniform sampler2D uSampler;\nuniform float uAlpha;\nvoid main(void) {\n    vec4 textureColor = texture2D(uSampler, vTexture);\n    gl_FragColor = vec4(textureColor.rgb, textureColor.a * uAlpha);\n}");
    this.loadTextures();
    this.loadGeometry();
    return this
  };
  this.loadTextures = function () {
    c = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + d, !1, b, e)
  };
  this.loadGeometry = function () {
    var c = new Float32Array([-1, -1, 0, 0, 0, 1, -1, 0, 1, 0, 1, 1, 0, 1, 1, -1, 1, 0, 0, 1]),
      b = new Uint16Array([0, 1, 2, 2, 3, 0]);
    a = b.length;
    m = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, m);
    gl.bufferData(gl.ARRAY_BUFFER, c, gl.STATIC_DRAW);
    h = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, h);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, b, gl.STATIC_DRAW)
  };
  this.draw = function (b, d) {
    c.loaded && (gl.useProgram(this.program.name), gl.uniformMatrix4fv(this.program.uniforms.uPMatrix, !1, this.orthographic ? b.orthoMatrix : b.perspectiveMatrix), gl.uniformMatrix4fv(this.program.uniforms.uMVMatrix, !1, this.modelMatrix), gl.uniform2fv(this.program.uniforms.uSceneOffset, b.sceneOffset), gl.uniform1f(this.program.uniforms.uAlpha, this.alpha), gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, c), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.bindBuffer(gl.ARRAY_BUFFER,
      m), gl.vertexAttribPointer(this.program.attributes.aPosition, 3, gl.FLOAT, !1, 20, 0), gl.vertexAttribPointer(this.program.attributes.aTexture, 2, gl.FLOAT, !1, 20, 12), gl.enableVertexAttribArray(this.program.attributes.aPosition), gl.enableVertexAttribArray(this.program.attributes.aTexture), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, h), gl.drawElements(gl.TRIANGLES, a, gl.UNSIGNED_SHORT, 0))
  }
};
"use strict";
GK = GK || {};
GK.RingDrawable = function (d) {
  var b, e, k, m, h = !1;
  this.modelMatrix = mat4.create();
  this.shaderSpeed = 8E-4;
  this.progress = this.fgAlpha = this.bgAlpha = this.alpha = 1;
  this.color1 = vec3.fromValues(1, 0, 0);
  this.color2 = vec3.fromValues(1, 1, 0);
  this.scale = .1;
  this.progress = 1;
  var a = null,
    c = null;
  this.init = function (a) {
    this.program = GK.ProgramManager.create("precision highp float;\nattribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexture;\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uPerspectiveMatrix;\nuniform vec2 uSceneOffset;\nuniform float uTime;\nuniform float uProgress;\nvarying vec2 vTexture;\nvarying float vLightWeight;\nvarying float vTime;\nvarying float vProgress;\nvoid main(void) {\n    mat4 mvMatrix = uViewMatrix * uModelMatrix;\n    vec4 mvPosition = mvMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveMatrix * mvPosition;\n    gl_Position.xy += uSceneOffset * gl_Position.w;\n    gl_PointSize = 2.0;\n    vec3 transformedNormal = normalize(mat3(mvMatrix) * aNormal);\n    vec3 lightDirection = normalize(vec3(0.0, 1.0, 0.0) - mvPosition.xyz);\n    vLightWeight = min(max(dot(transformedNormal, lightDirection), 0.5), 1.0);\n    vTexture = aTexture;\n    vTime = uTime;\n    vProgress = uProgress;\n}",
      "precision highp float;\nvarying vec2 vTexture;\nvarying float vLightWeight;\nvarying float vTime;\nvarying float vProgress;\nuniform sampler2D uSampler;\nuniform float uRingAlpha;\nuniform float uAlpha;\nuniform vec3 uColor1;\nuniform vec3 uColor2;\nvoid main(void) {\n    float a = 1.0 - max(min((vTexture.y - vProgress) / 0.005, 1.0), 0.0);\n    vec4 textureColor = texture2D(uSampler, vec2(vTexture.x, vTexture.y - vTime));\n    gl_FragColor = vec4(textureColor.rgb * vLightWeight, textureColor.a * a * uRingAlpha * uAlpha);\n}");
    this.lowRes = a;
    this.loadTextures();
    return this
  };
  this.loadTextures = function (a) {
    m = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + "/ring.png", !1, gl.REPEAT, gl.REPEAT)
  };
  this.loadModel = function (a) {
    var c = a.vertices;
    a = a.indices;
    k = a.length;
    b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, c, gl.STATIC_DRAW);
    e = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, e);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, a, gl.STATIC_DRAW);
    h = !0
  };
  this.setCoords = function (b) {
    a = b;
    GK.LatLng.toWorld(a);
    c = GK.LatLng.getRotationMatrix(a, 1)
  };
  this.updateMatrices = function () {
    var a = GK.Ease.convertRange(0, 1, 0, Math.PI, this.progress),
      a = 1.2 * Math.sin(a),
      b = 1 - this.progress / .5;
    mat4.identity(this.modelMatrix);
    mat4.scale(this.modelMatrix, this.modelMatrix, vec3.fromValues(a, a, 1));
    mat4.multiply(this.modelMatrix, c, this.modelMatrix);
    mat4.translate(this.modelMatrix, this.modelMatrix, vec3.fromValues(0, 0, b))
  };
  this.draw = function (c, d) {
    m.loaded && h && a && (this.updateMatrices(), gl.useProgram(this.program.name), gl.uniformMatrix4fv(this.program.uniforms.uPerspectiveMatrix,
      !1, c.perspectiveMatrix), gl.uniformMatrix4fv(this.program.uniforms.uModelMatrix, !1, this.modelMatrix), gl.uniformMatrix4fv(this.program.uniforms.uViewMatrix, !1, c.viewMatrix), gl.uniform2fv(this.program.uniforms.uSceneOffset, c.sceneOffset), gl.uniform1f(this.program.uniforms.uTime, d * this.shaderSpeed), gl.uniform1f(this.program.uniforms.uAlpha, this.alpha), gl.uniform3fv(this.program.uniforms.uColor1, this.color1), gl.uniform3fv(this.program.uniforms.uColor2, this.color2), gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D,
      m), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.bindBuffer(gl.ARRAY_BUFFER, b), gl.vertexAttribPointer(this.program.attributes.aPosition, 3, gl.FLOAT, !1, 32, 0), gl.vertexAttribPointer(this.program.attributes.aNormal, 3, gl.FLOAT, !1, 32, 12), gl.vertexAttribPointer(this.program.attributes.aTexture, 2, gl.FLOAT, !1, 32, 24), gl.enableVertexAttribArray(this.program.attributes.aPosition), gl.enableVertexAttribArray(this.program.attributes.aNormal), gl.enableVertexAttribArray(this.program.attributes.aTexture), gl.uniform1f(this.program.uniforms.uProgress,
      1), gl.uniform1f(this.program.uniforms.uRingAlpha, this.bgAlpha), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, e), gl.drawElements(gl.TRIANGLES, k, gl.UNSIGNED_SHORT, 0))
  }
};
"use strict";
GK = GK || {};
GK.NebulaDrawable = function () {
  var d, b, e, k, m = !1;
  this.modelMatrix = mat4.create();
  mat4.identity(this.modelMatrix);
  this.shaderTime = 1E-4;
  this.alpha = 1;
  this.color1 = vec3.fromValues(1, 0, 0);
  this.color2 = vec3.fromValues(0, 1, 0);
  this.init = function () {
    this.program = GK.ProgramManager.create("precision highp float;\nattribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexture;\nuniform mat4 uMVMatrix;\nuniform mat4 uVMatrix;\nuniform mat4 uPMatrix;\nuniform vec2 uSceneOffset;\nuniform float uTime;\nvarying vec2 vTexture;\nvarying float vAlpha;\nvarying float vTime;\nvoid main(void) {\n    mat4 worldMatrix = uMVMatrix * uVMatrix;\n    vec4 mvPosition = worldMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPMatrix * mvPosition;\n    gl_Position.xy += uSceneOffset * gl_Position.w;\n    vec3 transformedNormal = normalize(mat3(worldMatrix) * aNormal);\n    vec3 camDir = normalize(vec3(0.0, 0.0, 1.0) - mvPosition.xyz);\n    vAlpha = pow(abs(dot(transformedNormal, camDir)), 1.0);\n    vTexture = aTexture;\n    vTime = uTime;\n}", "precision highp float;\nvarying vec2 vTexture;\nvarying float vAlpha;\nvarying float vTime;\nuniform float uAlpha;\nuniform sampler2D uSampler;\nuniform vec3 uColor1;\nuniform vec3 uColor2;\nvec2 rotTex(vec2 coord, float angle) {\n    float s = sin(angle);\n    float c = cos(angle);\n    mat2 rot = mat2(c, s, -s, c);\n    rot *= 0.5;\n    rot += 0.5;\n    rot = rot * 2.0 - 1.0;\n    coord = coord - 0.5;\n    coord = coord * rot;\n    coord += 0.5;\n    return coord;\n}\nvoid main(void) {\n    vec2 coord = rotTex(vTexture, vTime);\n    vec4 textureColor = texture2D(uSampler, coord);\n    gl_FragColor = vec4(textureColor.rgb, textureColor.a * vAlpha * uAlpha);\n}");
    this.loadTextures();
    return this
  };
  this.loadTextures = function () {
    k = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + "/nebula.png", !1, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE)
  };
  this.loadModel = function (h) {
    var a = h.vertices;
    h = h.indices;
    e = h.length;
    d = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, d);
    gl.bufferData(gl.ARRAY_BUFFER, a, gl.STATIC_DRAW);
    b = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, b);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, h, gl.STATIC_DRAW);
    m = !0
  };
  this.draw = function (h, a) {
    k.loaded &&
      m && (gl.useProgram(this.program.name), gl.uniformMatrix4fv(this.program.uniforms.uPMatrix, !1, h.perspectiveMatrix), gl.uniformMatrix4fv(this.program.uniforms.uVMatrix, !1, h.viewMatrix), gl.uniformMatrix4fv(this.program.uniforms.uMVMatrix, !1, this.modelMatrix), gl.uniform2fv(this.program.uniforms.uSceneOffset, h.sceneOffset), gl.uniform1f(this.program.uniforms.uTime, a * this.shaderTime), gl.uniform1f(this.program.uniforms.uAlpha, this.alpha), gl.uniform3fv(this.program.uniforms.uColor1, this.color1), gl.uniform3fv(this.program.uniforms.uColor2,
          this.color2), gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, k), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.bindBuffer(gl.ARRAY_BUFFER, d), gl.vertexAttribPointer(this.program.attributes.aPosition, 3, gl.FLOAT, !1, 32, 0), gl.vertexAttribPointer(this.program.attributes.aNormal, 3, gl.FLOAT, !1, 32, 12), gl.vertexAttribPointer(this.program.attributes.aTexture, 2, gl.FLOAT, !1, 32, 24), gl.enableVertexAttribArray(this.program.attributes.aPosition), gl.enableVertexAttribArray(this.program.attributes.aNormal),
        gl.enableVertexAttribArray(this.program.attributes.aTexture), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, b), gl.drawElements(gl.TRIANGLES, e, gl.UNSIGNED_SHORT, 0))
  }
};
"use strict";
GK = GK || {};
GK.BokehDrawable = function () {
  var d, b, e, k, m, h = !1;
  this.modelMatrix = mat4.create();
  mat4.identity(this.modelMatrix);
  this.shaderSpeed = 5E-5;
  this.alphaRange = 10;
  this.alphaSpeed = .1;
  this.alphaMul = .05;
  this.alpha = 1;
  this.pointSize = 84;
  this.color1 = vec3.fromValues(1, 0, 0);
  this.color2 = vec3.fromValues(0, 1, 0);
  this.init = function () {
    this.program = GK.ProgramManager.create("attribute vec3 aPosition;\nattribute vec3 aDirection;\nattribute float aVariance;\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec2 uSceneOffset;\nuniform float uAlphaSpeed;\nuniform float uAlphaRange;\nuniform float uAlphaMul;\nuniform float uPointSize;\nuniform float uTime;\nvarying float vAlpha;\n#define M_PI 3.1415926535897932384626433832795\nvoid main(void) {\n    float variedTime = uTime + (aVariance * 10.0);\n    float slowTime = variedTime * 0.1;\n    float dist = sin(mod(slowTime, M_PI / 2.0));\n    vAlpha = abs(sin(slowTime * 2.0));\n    vAlpha *= min(abs(tan(variedTime) * uAlphaSpeed * aVariance), uAlphaRange);\n    vAlpha *= uAlphaMul;\n    vec3 pos = aPosition;\n    pos += aDirection * dist * 2.0;\n    gl_PointSize = aVariance * uPointSize;\n    gl_Position = uPMatrix * uMVMatrix * vec4(pos, 1.0);\n    gl_Position.xy += uSceneOffset * gl_Position.w;\n}",
      "precision mediump float;\nvarying float vAlpha;\nuniform float uAlpha;\nuniform vec3 uColor;\nuniform sampler2D uSampler;\nvoid main(void) {\n    vec4 color = texture2D(uSampler, gl_PointCoord);\n    vec3 rgb = color.rgb * uColor;\n    gl_FragColor = vec4(rgb, color.a * vAlpha * uAlpha);\n}");
    this.createGeometry();
    this.loadTextures();
    return this
  };
  this.loadTextures = function () {
    d = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + "/bokeh1.png", !0, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE);
    b = GK.TextureManager.loadTexture(GK.TextureManager.textureDir +
      "/bokeh2.png", !0, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE)
  };
  this.createGeometry = function () {
    k = 100;
    e = new Float32Array(7 * k);
    for (var a = 0; a < e.length;) {
      var c = 2 * Math.PI * Math.random(),
        c = vec3.fromValues(Math.sin(c), Math.sin(Math.acos(2 * Math.random() - 1) - .5 * Math.PI), Math.cos(c)),
        b = vec3.create();
      vec3.normalize(b, c);
      e[a + 0] = c[0];
      e[a + 1] = c[1];
      e[a + 2] = c[2];
      e[a + 3] = b[0];
      e[a + 4] = b[1];
      e[a + 5] = b[2];
      e[a + 6] = Math.PI * Math.random();
      a += 7
    }
    m = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, m);
    gl.bufferData(gl.ARRAY_BUFFER, e, gl.STATIC_DRAW);
    h = !0
  };
  this.draw = function (a, c) {
    (d.loaded || b.loaded) && h && (gl.useProgram(this.program.name), gl.uniformMatrix4fv(this.program.uniforms.uPMatrix, !1, a.perspectiveMatrix), gl.uniformMatrix4fv(this.program.uniforms.uMVMatrix, !1, this.modelMatrix), gl.uniform2fv(this.program.uniforms.uSceneOffset, a.sceneOffset), gl.uniform1f(this.program.uniforms.uTime, c * this.shaderSpeed), gl.uniform1f(this.program.uniforms.uAlpha, this.alpha), gl.uniform1f(this.program.uniforms.uAlphaMul, this.alphaMul), gl.uniform1f(this.program.uniforms.uAlphaSpeed,
      this.alphaSpeed), gl.uniform1f(this.program.uniforms.uAlphaRange, this.alphaRange), gl.uniform1f(this.program.uniforms.uPointSize, this.pointSize), gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, d), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.bindBuffer(gl.ARRAY_BUFFER, m), gl.vertexAttribPointer(this.program.attributes.aPosition, 3, gl.FLOAT, !1, 28, 0), gl.vertexAttribPointer(this.program.attributes.aDirection, 3, gl.FLOAT, !1, 28, 12), gl.vertexAttribPointer(this.program.attributes.aVariance, 1, gl.FLOAT,
      !1, 28, 24), gl.enableVertexAttribArray(this.program.attributes.aPosition), gl.enableVertexAttribArray(this.program.attributes.aDirection), gl.enableVertexAttribArray(this.program.attributes.aVariance), gl.uniform3fv(this.program.uniforms.uColor, this.color1), gl.drawArrays(gl.POINTS, 0, k / 2), gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, b), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.uniform3fv(this.program.uniforms.uColor, this.color2), gl.drawArrays(gl.POINTS, k / 2, k / 2))
  }
};
"use strict";
GK = GK || {};
GK.PublisherEventDrawable = function (d) {
  this.circleScale = this.progress = this.alpha = 1;
  this.lineWidth = .009;
  this.otherCities = this.centerCity = null;
  this.lines = [];
  this.circles = [];
  for (d = 0; 20 > d; d++) this.lines.push((new GK.LineDrawable).init()), this.circles.push((new GK.PublisherCircleDrawable).init());
  this.init = function () {
    return this
  };
  this.loadCircleModel = function (b) {
    for (var d = 0; d < this.circles.length; d++) this.circles[d].loadModel(b)
  };
  this.updateLocations = function (b, d) {
    this.centerCity = b;
    this.otherCities = d;
    for (var k =
        0; k < this.lines.length; k++) {
      var e = this.lines[k];
      e.active = !1
    }
    for (k = 0; k < this.circles.length; k++) e = this.circles[k], e.active = !1;
    for (var h = 3, k = 0; k < d.length; k++) {
      var a = d[k];
      if (k < this.lines.length) {
        e = this.lines[k];
        e.active = !0;
        var c = this.lineWidth;
        if (1 < window.devicePixelRatio) var f = window.devicePixelRatio,
          c = c * (1 + f / (f * f));
        e.updateLine(b.coords, a.coords, c, 30, Math.max(h, 1));
        h--
      }
    }
    b = [b].concat(d);
    for (k = 0; k < b.length; k++) d = b[k], k < this.circles.length && (e = this.circles[k], e.active = !0, e.setCoords(d.coords), e.baseScale =
      .5);
    this.circles[0].baseScale = 1.8
  };
  this.draw = function (b, d) {
    for (var e, m = f = 0; m < this.circles.length; m++) {
      var h = this.circles[m];
      if (h.active) {
        e = this.progress;
        e = GK.Ease.inOutSine(e);
        var a = GK.Ease.outSine(this.progress),
          a = GK.Ease.smoothstep(0 + f, 3 + f, a),
          c = GK.Ease.smoothstep(0 + f, .1 + f, e);
        e = GK.Ease.smoothstep(.6 + f, .7 + f, e);
        h.scale = 2 * a;
        h.alpha = c - e;
        h.draw(b, d);
        f = Math.min(f + .03, .3)
      }
    }
    for (var f = 0, m = 0; m < this.lines.length; m++) h = this.lines[m], h.active && (e = GK.Ease.inOutSine(this.progress), a = GK.Ease.smoothstep(.1 + f, .3 +
      f, e), e = GK.Ease.smoothstep(.7 + f, .8 + f, e), h.alpha = this.alpha, h.progressStart = e, h.progressEnd = a, h.draw(b, d), f = Math.min(f + .02, .2))
  }
};
"use strict";
GK = GK || {};
GK.LineDrawable = function () {
  var d, b, e, k, m, h = !1;
  this.centerVertex = vec3.create();
  this.modelMatrix = mat4.create();
  mat4.identity(this.modelMatrix);
  this.shaderSpeed = 2E-4;
  this.progress = this.alpha = 1;
  this.active = !1;
  this.progressStart = 0;
  this.progressEnd = 1;
  var a, c;
  this.init = function () {
    this.program = GK.ProgramManager.create("precision highp float;\nattribute vec3 aPosition;\n//attribute vec3 aNormal;\nattribute vec2 aTexture;\nattribute float aAlpha;\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uPerspectiveMatrix;\nuniform vec2 uSceneOffset;\nuniform float uTime;\nuniform float uProgress;\nvarying vec2 vTexture;\nvarying float vTime;\nvarying float vProgress;\nvarying float vAlpha;\nvoid main(void) {\n    mat4 modelViewMatrix = uViewMatrix * uModelMatrix;\n    vec4 worldPosition = modelViewMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveMatrix * worldPosition;\n    gl_Position.xy += uSceneOffset * gl_Position.w;\n    gl_PointSize = 6.0;\n    vec3 transformedNormal = normalize(mat3(modelViewMatrix) * aPosition);\n    vec3 lightDirection = normalize(vec3(0.0, 0.0, 1.0) - worldPosition.xyz);\n    vAlpha = pow(max(dot(transformedNormal, lightDirection), 0.3), 1.0);\n    vAlpha *= aAlpha;\n    vTexture = aTexture;\n    vTime = uTime;\n    vProgress = uProgress;\n}", "precision highp float;\nvarying vec2 vTexture;\nvarying float vLightWeight;\nvarying float vTime;\nvarying float vProgress;\nvarying float vAlpha;\nuniform sampler2D uSampler;\nuniform float uRingAlpha;\nuniform float uAlpha;\nuniform float uProgressStart;\nuniform float uProgressEnd;\nvoid main(void) {\n    //float a = 1.0 - max(min((vTexture.y - vProgress) / 0.005, 1.0), 0.0);\n    float a = 0.0;\n    if (vTexture.y > uProgressStart && vTexture.y < uProgressEnd) {\n        a = 1.0;\n    }\n    vec4 textureColor = texture2D(uSampler, vec2(vTexture.x, vTexture.y - vTime));\n    gl_FragColor = vec4(textureColor.rgb, textureColor.a * uAlpha * vAlpha * a);\n}");
    this.loadTextures();
    return this
  };
  this.loadTextures = function (a) {
    m = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + "/line.png", !1, gl.REPEAT, gl.REPEAT)
  };
  this.loadModel = function (f) {
    a = f.vertices;
    c = f.indices;
    e = a.length;
    k = c.length;
    void 0 == d && (d = gl.createBuffer());
    gl.bindBuffer(gl.ARRAY_BUFFER, d);
    gl.bufferData(gl.ARRAY_BUFFER, f.vertices, gl.STATIC_DRAW);
    void 0 == b && (b = gl.createBuffer());
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, b);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, f.indices, gl.STATIC_DRAW);
    h = !0
  };
  this.updateLine = function (a, c, b, d, l) {
    l = l || 1;
    a = GK.LineGenerator.generate(a, c, b || .004, d || 30, l);
    l = 9 * Math.floor(a.vertices.length / 9 / l / 2);
    this.centerVertex = vec3.fromValues(a.vertices[l + 0], a.vertices[l + 1], a.vertices[l + 2]);
    this.loadModel(a)
  };
  this.draw = function (a, c) {
    m.loaded && h && (gl.useProgram(this.program.name), gl.uniformMatrix4fv(this.program.uniforms.uModelMatrix, !1, this.modelMatrix), gl.uniformMatrix4fv(this.program.uniforms.uViewMatrix, !1, a.viewMatrix), gl.uniformMatrix4fv(this.program.uniforms.uPerspectiveMatrix,
      !1, a.perspectiveMatrix), gl.uniform2fv(this.program.uniforms.uSceneOffset, a.sceneOffset), gl.uniform1f(this.program.uniforms.uTime, c * this.shaderSpeed), gl.uniform1f(this.program.uniforms.uAlpha, this.alpha), gl.uniform1f(this.program.uniforms.uProgress, this.progress), gl.uniform1f(this.program.uniforms.uProgressEnd, this.progressEnd), gl.uniform1f(this.program.uniforms.uProgressStart, this.progressStart), gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, m), gl.uniform1i(this.program.uniforms.uSampler,
      0), gl.bindBuffer(gl.ARRAY_BUFFER, d), gl.vertexAttribPointer(this.program.attributes.aPosition, 3, gl.FLOAT, !1, 36, 0), gl.vertexAttribPointer(this.program.attributes.aTexture, 2, gl.FLOAT, !1, 36, 24), gl.vertexAttribPointer(this.program.attributes.aAlpha, 1, gl.FLOAT, !1, 36, 32), gl.enableVertexAttribArray(this.program.attributes.aPosition), gl.enableVertexAttribArray(this.program.attributes.aNormal), gl.enableVertexAttribArray(this.program.attributes.aTexture), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, b), gl.drawElements(gl.TRIANGLES,
      k, gl.UNSIGNED_SHORT, 0), gl.drawArrays(gl.POINTS, 0, e / 9))
  }
};
"use strict";
GK = GK || {};
GK.EpicenterDrawable = function (d) {
  var b, e, k, m = !1;
  this.modelMatrix = mat4.create();
  mat4.identity(this.modelMatrix);
  this.alpha = 1;
  this.pointSize = 12;
  this.progress = 1;
  this.shaderSpeed = .005;
  this.color1 = vec3.fromValues(1, 0, 0);
  this.color2 = vec3.fromValues(0, 1, 0);
  this.init = function () {
    this.program = GK.ProgramManager.create("attribute vec3 aPosition;\nuniform mat4 uViewMatrix;\nuniform mat4 uModelMatrix;\nuniform mat4 uPerspectiveMatrix;\nuniform vec2 uSceneOffset;\nuniform float uTime;\nuniform float uPointSize;\nuniform float uProgress;\nvarying float vTime;\nvarying float vAlpha;\n#define M_PI 3.1415926535897932384626433832795\nvoid main(void) {\n    vec3 norm = normalize(aPosition);\n    //vec3 pos = aPosition + (norm * 0.5 * (1.0 - uProgress));\n    vec3 pos = aPosition;\n    float t = abs(sin(mod(uTime, M_PI * 0.5)));\n    //vAlpha = t;\n    vAlpha = 1.0;\n    float r = fract(sin(dot(aPosition.xy ,vec2(12.9898, 78.233))) * 43758.5453) / 5.0;\n    vTime = uTime + (r * 1000.0);\n    //gl_PointSize = uPointSize + (uPointSize * t);\n    gl_PointSize = uPointSize;\n    gl_Position = uPerspectiveMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n    gl_Position.xy += uSceneOffset * gl_Position.w;\n}", "precision highp float;\nvarying float vAlpha;\nvarying float vTime;\nuniform float uAlpha;\nuniform sampler2D uSampler;\nuniform vec3 uColor1;\nuniform vec3 uColor2;\nvec2 rotTex(vec2 coord, float angle) {\n    float s = sin(angle);\n    float c = cos(angle);\n    mat2 rot = mat2(c, s, -s, c);\n    rot *= 0.5;\n    rot += 0.5;\n    rot = rot * 2.0 - 1.0;\n    coord = coord - 0.5;\n    coord = coord * rot;\n    coord += 0.5;\n    return coord;\n}\nvoid main(void) {\n    vec2 coord = clamp(rotTex(gl_PointCoord, vTime), vec2(0.0, 0.0), vec2(1.0, 1.0));\n    vec4 textureColor = texture2D(uSampler, coord);\n    vec3 c1 = textureColor.r * uColor1;\n    vec3 c2 = textureColor.g * uColor2;\n    gl_FragColor = vec4(c1 + c2, textureColor.a * uAlpha * vAlpha);\n}");
    this.loadTextures();
    return this
  };
  this.loadTextures = function (d) {
    b = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + "/epicenter.png", !1, gl.REPEAT, gl.REPEAT)
  };
  this.createGeometry = function (b) {
    e = new Float32Array(b);
    null == k && (k = gl.createBuffer());
    gl.bindBuffer(gl.ARRAY_BUFFER, k);
    gl.bufferData(gl.ARRAY_BUFFER, e, gl.STATIC_DRAW);
    m = !0
  };
  this.draw = function (d, a) {
    b.loaded && m && (gl.useProgram(this.program.name), gl.uniformMatrix4fv(this.program.uniforms.uPerspectiveMatrix, !1, d.perspectiveMatrix), gl.uniformMatrix4fv(this.program.uniforms.uViewMatrix,
        !1, d.viewMatrix), gl.uniformMatrix4fv(this.program.uniforms.uModelMatrix, !1, this.modelMatrix), gl.uniform2fv(this.program.uniforms.uSceneOffset, d.sceneOffset), gl.uniform1f(this.program.uniforms.uTime, a * this.shaderSpeed), gl.uniform1f(this.program.uniforms.uAlpha, this.alpha), gl.uniform1f(this.program.uniforms.uPointSize, this.pointSize), gl.uniform1f(this.program.uniforms.uProgress, this.progress), gl.uniform3fv(this.program.uniforms.uColor1, this.color1), gl.uniform3fv(this.program.uniforms.uColor2, this.color2),
      gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, b), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.bindBuffer(gl.ARRAY_BUFFER, k), gl.vertexAttribPointer(this.program.attributes.aPosition, 3, gl.FLOAT, !1, 12, 0), gl.enableVertexAttribArray(this.program.attributes.aPosition), gl.drawArrays(gl.POINTS, 0, e.length / 3))
  }
};
"use strict";
GK = GK || {};
GK.BackgroundDrawable = function () {
  var d, b, e;
  vec3.fromValues(0, 0, 0);
  this.lightDir = vec3.fromValues(0, 0, 1);
  this.alpha = 1;
  this.modelMatrix = mat4.create();
  mat4.identity(this.modelMatrix);
  this.color1 = vec3.fromValues(1, 0, 0);
  this.color2 = vec3.fromValues(0, 1, 0);
  var k = null;
  this.init = function (b) {
    this.program = GK.ProgramManager.create("\n        precision highp float;\n\n        attribute vec3 aPosition;\n        attribute vec3 aNormal;\n        attribute vec2 aTexture;\n\n        uniform mat4 uMVMatrix;\n        uniform mat4 uPMatrix;\n        uniform vec2 uSceneOffset;\n        uniform vec3 uLightDir;\n\n        varying vec2 vTexture;\n        varying float vLightWeight;\n        varying vec3 vVertex;\n\n        void main(void) {\n            vec4 mvPosition = uMVMatrix * vec4(aPosition, 1.0);\n            gl_Position = uPMatrix * mvPosition;\n            //gl_Position.xy += uSceneOffset * gl_Position.w;\n\n            vec3 transformedNormal = normalize(mat3(uMVMatrix) * aNormal);\n            vec3 lightDirection = normalize(uLightDir - mvPosition.xyz);\n            vLightWeight = max(dot(transformedNormal, lightDirection), 0.0);\n\n            vVertex = aPosition;\n            vTexture = aTexture;\n        }\n    ",
      "\n        #extension GL_OES_standard_derivatives : enable\n\n        precision highp float;\n\n        varying vec2 vTexture;\n        varying float vLightWeight;\n        uniform sampler2D uSampler;\n        uniform float uAlpha;\n\n        uniform vec3 uColor1;\n        uniform vec3 uColor2;\n\n        varying vec3 vVertex;\n\n        void main(void) {\n            vec4 textureColor = texture2D(uSampler, vTexture);\n            vec3 c1 = textureColor.r * uColor1 * vLightWeight;\n            vec3 c2 = textureColor.g * uColor2 * vLightWeight;\n            gl_FragColor = vec4(c1 + c2, textureColor.a * uAlpha);\n        }\n    ");
    this.loadTextures();
    return this
  };
  this.loadTextures = function (b) {
    k = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + "/grad.png", !0, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE)
  };
  this.loadModel = function (k) {
    var h = k.vertices;
    k = k.indices;
    e = k.length;
    d = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, d);
    gl.bufferData(gl.ARRAY_BUFFER, h, gl.STATIC_DRAW);
    b = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, b);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, k, gl.STATIC_DRAW)
  };
  this.draw = function (m, h) {
    k.loaded && (gl.useProgram(this.program.name),
      gl.uniformMatrix4fv(this.program.uniforms.uPMatrix, !1, m.perspectiveMatrix), gl.uniformMatrix4fv(this.program.uniforms.uMVMatrix, !1, this.modelMatrix), gl.uniform2fv(this.program.uniforms.uSceneOffset, m.sceneOffset), gl.uniform3fv(this.program.uniforms.uLightDir, this.lightDir), gl.uniform1f(this.program.uniforms.uAlpha, this.alpha), gl.uniform3fv(this.program.uniforms.uColor1, this.color1), gl.uniform3fv(this.program.uniforms.uColor2, this.color2), gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, k),
      gl.uniform1i(this.program.uniforms.uSampler, 0), gl.bindBuffer(gl.ARRAY_BUFFER, d), gl.vertexAttribPointer(this.program.attributes.aPosition, 3, gl.FLOAT, !1, 32, 0), gl.vertexAttribPointer(this.program.attributes.aNormal, 3, gl.FLOAT, !1, 32, 12), gl.vertexAttribPointer(this.program.attributes.aTexture, 2, gl.FLOAT, !1, 32, 24), gl.enableVertexAttribArray(this.program.attributes.aPosition), gl.enableVertexAttribArray(this.program.attributes.aNormal), gl.enableVertexAttribArray(this.program.attributes.aTexture), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,
        b), gl.drawElements(gl.TRIANGLES, e, gl.UNSIGNED_SHORT, 0))
  }
};
"use strict";
GK = GK || {};
GK.PublisherCircleDrawable = function () {
  var d, b, e, k;
  this.baseScale = this.scale = this.alpha = 1;
  this.active = !1;
  var m = mat4.create(),
    h = mat4.create(),
    a = mat4.create(),
    c = mat4.create(),
    f = mat4.create(),
    r = mat4.create(),
    x = vec3.create(),
    q = null,
    l = d = null,
    p = null,
    g = !1;
  this.init = function () {
    this.program = GK.ProgramManager.create("precision highp float;\nattribute vec3 aPosition;\n//attribute vec3 aNormal;\nattribute vec2 aTexture;\nuniform vec3 uCenter;\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uPerspectiveMatrix;\nuniform vec2 uSceneOffset;\nuniform float uShadowOffset;\nvarying vec2 vTexture;\nvarying float vAlpha;\nvoid main(void) {\n    vec4 worldPos = uModelMatrix * vec4(aPosition, 1.0);\n    vec3 worldNormal = normalize(mat3(uViewMatrix) * worldPos.xyz);\n    vec3 camDir = normalize(vec3(0.0, 0.0, 1.0));\n    vec3 camDirection = normalize(camDir - worldPos.xyz);\n    float cosTheta = dot(worldNormal, camDirection);\n    vAlpha = smoothstep(-0.5, 0.0, cosTheta);\n    gl_Position = uPerspectiveMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position.xy += uSceneOffset * gl_Position.w;\n    vTexture = aTexture;\n}", "precision highp float;\nvarying vec2 vTexture;\nvarying float vAlpha;\nuniform sampler2D uSampler;\nuniform float uAlpha;\nvoid main(void) {\n    vec4 textureColor = texture2D(uSampler, vTexture);\n    gl_FragColor = vec4(textureColor.rgb, textureColor.a * uAlpha * vAlpha);\n}");
    this.loadTextures();
    return this
  };
  this.loadTextures = function () {
    d = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + "/circle.png", !1, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE);
    l = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + "/circle-shadow.png", !1, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE);
    p = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + "/circle-small.png", !1, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE)
  };
  this.updateMatrices = function (b) {
    var n = GK.Ease.outBack(this.scale, 1.5) * this.baseScale,
      g =
      GK.Ease.outBack(this.scale, 1.7) * this.baseScale,
      d = vec3.fromValues(.006, .006, 1),
      p = vec3.fromValues(.1 * n, .1 * n, 1),
      l = vec3.fromValues(.03 * g, .03 * g, 1),
      x = vec3.fromValues(.13 * n, .13 * n, 1),
      g = vec3.fromValues(.04 * g, .04 * g, 1);
    mat4.identity(m);
    mat4.identity(h);
    mat4.identity(a);
    mat4.identity(c);
    mat4.identity(f);
    mat4.scale(m, m, d);
    mat4.scale(h, h, p);
    mat4.scale(a, a, l);
    mat4.scale(c, c, x);
    mat4.scale(f, f, g);
    b = this.updateShadowMatrices(b, [.01 * n, .003 * n]);
    mat4.multiply(m, r, m);
    mat4.translate(m, m, vec3.fromValues(0, 0, 1.01));
    mat4.multiply(h,
      r, h);
    mat4.translate(h, h, vec3.fromValues(0, 0, 1.01));
    mat4.multiply(c, r, c);
    mat4.multiply(c, b[0], c);
    mat4.translate(c, c, vec3.fromValues(0, 0, .99485));
    mat4.multiply(a, r, a);
    mat4.translate(a, a, vec3.fromValues(0, 0, 1.02));
    mat4.multiply(f, r, f);
    mat4.multiply(f, b[1], f);
    mat4.translate(f, f, vec3.fromValues(0, 0, 1.0149))
  };
  this.updateShadowMatrices = function (a, c) {
    var b = vec3.clone(x);
    vec3.transformMat4(b, b, h);
    vec3.transformMat4(b, b, a.viewMatrix);
    a = vec3.fromValues(-1, 0, -1);
    var n = vec3.create();
    vec3.subtract(n, a, b);
    a = vec3.create();
    vec3.cross(a, b, n);
    vec3.normalize(a, a);
    b = [];
    for (n = 0; n < c.length; n++) {
      var f = mat4.create();
      mat4.rotate(f, f, Math.PI * c[n], a);
      b.push(f)
    }
    return b
  };
  this.setCoords = function (a) {
    q = a;
    x = GK.LatLng.toWorld(q);
    r = GK.LatLng.getRotationMatrix(q, 1)
  };
  this.loadModel = function (a) {
    var c = a.vertices;
    a = a.indices;
    k = a.length;
    b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, c, gl.STATIC_DRAW);
    e = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, e);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, a, gl.STATIC_DRAW);
    g = !0
  };
  this.draw = function (n, u) {
    d.loaded && p.loaded && l.loaded && g && q && (gl.useProgram(this.program.name), this.updateMatrices(n), gl.uniformMatrix4fv(this.program.uniforms.uPerspectiveMatrix, !1, n.perspectiveMatrix), gl.uniformMatrix4fv(this.program.uniforms.uViewMatrix, !1, n.viewMatrix), gl.uniform2fv(this.program.uniforms.uSceneOffset, n.sceneOffset), gl.uniform3fv(this.program.uniforms.uCenter, x), gl.uniform1f(this.program.uniforms.uAlpha, this.alpha), gl.bindBuffer(gl.ARRAY_BUFFER, b), gl.vertexAttribPointer(this.program.attributes.aPosition,
        3, gl.FLOAT, !1, 32, 0), gl.vertexAttribPointer(this.program.attributes.aTexture, 2, gl.FLOAT, !1, 32, 24), gl.enableVertexAttribArray(this.program.attributes.aPosition), gl.enableVertexAttribArray(this.program.attributes.aTexture), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, e), gl.activeTexture(gl.TEXTURE0), gl.depthMask(!0), gl.bindTexture(gl.TEXTURE_2D, d), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.uniformMatrix4fv(this.program.uniforms.uModelMatrix, !1, h), gl.drawElements(gl.TRIANGLES, k, gl.UNSIGNED_SHORT, 0), gl.uniformMatrix4fv(this.program.uniforms.uModelMatrix,
        !1, a), gl.drawElements(gl.TRIANGLES, k, gl.UNSIGNED_SHORT, 0), gl.bindTexture(gl.TEXTURE_2D, p), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.drawElements(gl.TRIANGLES, k, gl.UNSIGNED_SHORT, 0), gl.bindTexture(gl.TEXTURE_2D, l), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.uniformMatrix4fv(this.program.uniforms.uModelMatrix, !1, c), gl.drawElements(gl.TRIANGLES, k, gl.UNSIGNED_SHORT, 0), gl.uniformMatrix4fv(this.program.uniforms.uModelMatrix, !1, f), gl.drawElements(gl.TRIANGLES, k, gl.UNSIGNED_SHORT, 0), gl.clear(gl.DEPTH_BUFFER_BIT),
      gl.depthMask(!1), gl.bindTexture(gl.TEXTURE_2D, p), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.uniformMatrix4fv(this.program.uniforms.uModelMatrix, !1, m), gl.drawElements(gl.TRIANGLES, k, gl.UNSIGNED_SHORT, 0))
  }
};
"use strict";
GK = GK || {};
GK.PointSprite = function () {
  this.pos = vec3.fromValues(0, 0, 0);
  this.color = vec3.fromValues(1, 0, 0);
  this.init = function (d) {
    this.pos = d;
    return this
  }
};
GK.PointSpriteDrawable = function (d) {
  var b, e, k, m = !1;
  this.modelMatrix = mat4.create();
  mat4.identity(this.modelMatrix);
  this.pointSize = 10;
  this.maxAlpha = this.minAlpha = this.alpha = this.pointSizeAdj = 1;
  this.color1 = vec3.fromValues(1, 0, 0);
  this.shaderSpeed = 1E-4;
  this.init = function () {
    this.program = GK.ProgramManager.create("attribute vec3 aPosition;\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uPerspectiveMatrix;\nuniform vec2 uSceneOffset;\nuniform float uPointSize;\nuniform float uTime;\nuniform float uMinAlpha;\nuniform float uMaxAlpha;\nvarying float vTime;\nvarying float vAlpha;\n#define M_PI 3.1415926535897932384626433832795\nvoid main(void) {\n    float r = fract(sin(dot(aPosition.xy, vec2(12.9898, 78.233))) * 43758.5453) / 5.0;\n    vTime = uTime + (r * 100.0);\n    //vec3 pos = aPosition + (aPosition * sin(vTime) * 0.1);\n    vec3 pos = aPosition;\n    mat4 modelViewMatrix = uViewMatrix * uModelMatrix;\n    vec4 worldPosition = modelViewMatrix * vec4(pos, 1.0);\n    vec3 transformedNormal = normalize(mat3(modelViewMatrix) * pos);\n    vec3 lightDirection = normalize(vec3(0.0, 0.0, 1.0) - worldPosition.xyz);\n    float lightWeight = pow(max(dot(transformedNormal, lightDirection), 0.0), 0.01);\n    vAlpha = lightWeight;\n    vAlpha *= smoothstep(0.996, 1.0, sin(vTime));\n    gl_PointSize = uPointSize;\n    gl_Position = uPerspectiveMatrix * worldPosition;\n    gl_Position.xy += uSceneOffset * gl_Position.w;\n}",
      "precision mediump float;\nvarying float vAlpha;\nuniform float uAlpha;\nuniform vec3 uColor1;\nuniform sampler2D uSampler;\nvoid main(void) {\n    vec4 textureColor = texture2D(uSampler, gl_PointCoord);\n    gl_FragColor = vec4(uColor1, textureColor.a * vAlpha * uAlpha);\n}");
    this.loadTextures();
    return this
  };
  this.loadTextures = function () {
    b = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + "/point.png", !0, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE)
  };
  this.loadGeometry = function (b) {
    for (var a = [],
        c = 0; c < b.length; c++) {
      var f = b[c];
      a.push(f.pos[0]);
      a.push(f.pos[1]);
      a.push(f.pos[2])
    }
    e = new Float32Array(a);
    k = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, k);
    gl.bufferData(gl.ARRAY_BUFFER, e, gl.STATIC_DRAW);
    m = !0
  };
  this.draw = function (d, a) {
    b.loaded && m && (gl.useProgram(this.program.name), gl.uniformMatrix4fv(this.program.uniforms.uPerspectiveMatrix, !1, d.perspectiveMatrix), gl.uniformMatrix4fv(this.program.uniforms.uViewMatrix, !1, d.viewMatrix), gl.uniformMatrix4fv(this.program.uniforms.uModelMatrix, !1, this.modelMatrix),
      gl.uniform2fv(this.program.uniforms.uSceneOffset, d.sceneOffset), gl.uniform1f(this.program.uniforms.uMinAlpha, this.minAlpha), gl.uniform1f(this.program.uniforms.uMaxAlpha, this.maxAlpha), gl.uniform1f(this.program.uniforms.uTime, a * this.shaderSpeed), gl.uniform1f(this.program.uniforms.uAlpha, this.alpha), gl.uniform1f(this.program.uniforms.uPointSize, Math.min(this.pointSize * this.pointSizeAdj, 64)), gl.uniform3fv(this.program.uniforms.uColor1, this.color1), gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D,
        b), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.bindBuffer(gl.ARRAY_BUFFER, k), gl.vertexAttribPointer(this.program.attributes.aPosition, 3, gl.FLOAT, !1, 12, 0), gl.enableVertexAttribArray(this.program.attributes.aPosition), gl.drawArrays(gl.POINTS, 0, e.length / 3))
  }
};
"use strict";
GK = GK || {};
GK.PointGlobeDrawable = function (d) {
  var b = this,
    e, k, m, h, a = !1;
  this.modelMatrix = mat4.create();
  mat4.identity(this.modelMatrix);
  this.alpha = 1;
  this.offsetPower = 0;
  this.pointSize = 2;
  this.pointSizeAdj = 1;
  this.shaderSpeed = 1E-5;
  this.noisePower = 2;
  this.ringWidth = this.ringHeight = .04;
  this.ringVariety = this.ringEffectStr = this.ringProgress = 0;
  this.waveHeight = .04;
  this.waveWidth = .1;
  this.waveVariety = .001;
  this.waveEffectStr = 0;
  this.waveCosMin = .99;
  this.waveCosMax = 1;
  this.model = null;
  this.waveVector = vec3.fromValues(0, 1, 1);
  vec3.normalize(this.waveVector,
    this.waveVector);
  this.color1 = vec3.fromValues(1, 0, 0);
  this.color2 = vec3.fromValues(0, 1, 0);
  this.crestColor = vec3.fromValues(1, 0, 0);
  this.takeoverColor = vec3.fromValues(1, 0, 0);
  this.scatterColor = vec3.fromValues(1, 0, 0);
  this.init = function () {
    this.program = GK.ProgramManager.create("precision lowp float;\nattribute vec3 aPosition;\nattribute vec2 aTexture;\nattribute float aStrength;\nattribute float aOffset;\nuniform mat4 uMVMatrix;\nuniform mat4 uVMatrix;\nuniform mat4 uPMatrix;\nuniform vec2 uSceneOffset;\nuniform float uOffsetPower;\nuniform float uPointSize;\nuniform float uTime;\nvarying vec2 vTexture;\nvarying float vAlpha;\nvarying float vTime;\nuniform vec3 uWaveVector;\nuniform float uWaveHeight;\nuniform float uWaveWidth;\nuniform float uWaveEffectStr;\nuniform float uWaveTime;\nuniform float uWaveVariety;\nuniform float uWaveCosMin;\nuniform float uWaveCosMax;\nuniform float uRingProgress;\nuniform float uRingHeight;\nuniform float uRingWidth;\nuniform float uRingVariety;\nuniform float uRingEffectStr;\nvarying float vRingPower;\nvarying float vRingEffectStr;\nvarying float vMixPower;\nvarying float vScatterPower;\n#define M_PI 3.1415926535897932384626433832795\nhighp float rando(vec2 co) {\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt = dot(co.xy ,vec2(a,b));\n    highp float sn = mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\nvoid main(void) {\n    float offset = pow(abs(aOffset), 0.9);\n    vec3 pos = aPosition + ((aPosition * offset) * uOffsetPower);\n    float randomVal = rando(aPosition.xy);\n    float randomValNeg = -rando(vec2(aPosition.y, aPosition.z));\n    float waveCos = dot(uWaveVector, pos);\n    vMixPower = smoothstep(uWaveCosMin, uWaveCosMax, max(waveCos + ((randomVal + randomValNeg) * uWaveVariety), 0.0));\n    vMixPower *= uWaveEffectStr;\n    //vMixPower = pow(vMixPower, 3.0);\n    if (randomVal < 0.5) {\n        vMixPower *= 0.5;\n    }\n    // Scatter effect\n    vScatterPower = pow(smoothstep(0.9, 1.0, randomVal), 9.0);\n    vScatterPower *= 1.0 - min(uWaveEffectStr, 1.0);\n    // Ring effect\n    vRingPower = smoothstep(uRingProgress, uRingProgress + uRingWidth, waveCos);\n    vRingPower -= smoothstep(uRingProgress + uRingWidth, uRingProgress + uRingWidth * 2.0, waveCos);\n    pos += pos * vRingPower * uRingHeight * uRingEffectStr;\n    pos += pos * offset * uRingVariety * vRingPower * uRingEffectStr;\n    // Adjust point size\n    float pointSize = uPointSize + (uPointSize * vMixPower * 0.2) + (uPointSize * pow(vRingPower, 6.0) * uRingEffectStr);\n    gl_PointSize = max(pointSize - (pow(pointSize * offset, 1.0) * uOffsetPower * 0.25), 1.0);\n    // Project position\n    mat4 worldMatrix = uMVMatrix * uVMatrix;\n    vec4 mvPosition = worldMatrix * vec4(pos, 1.0);\n    gl_Position = uPMatrix * mvPosition;\n    gl_Position.xy += uSceneOffset * gl_Position.w;\n    // Fade out at back of sphere\n    vec3 transformedNormal = normalize(mat3(worldMatrix) * aPosition);\n    vec3 lightDirection = normalize(vec3(0.0, 0.0, 1.0) - mvPosition.xyz);\n    float lightWeight = max(dot(transformedNormal, lightDirection), 0.0);\n    vAlpha = max(aStrength * lightWeight, 0.2);\n    vRingEffectStr = vRingPower * uRingEffectStr;\n    vRingPower *= lightWeight * uRingEffectStr;\n    vAlpha += vMixPower;\n    // Pass along\n    vTexture = aTexture;\n    vTime = uTime;\n}",
      "precision lowp float;\nvarying vec2 vTexture;\nvarying float vAlpha;\nvarying float vTime;\nvarying float vMixPower;\nvarying float vRingPower;\nvarying float vRingEffectStr;\nvarying float vScatterPower;\nuniform float uAlpha;\nuniform sampler2D uSampler;\nuniform sampler2D uNoiseSampler;\nuniform vec3 uColor1;\nuniform vec3 uColor2;\nuniform vec3 uCrestColor;\nuniform vec3 uTakeoverColor;\nuniform vec3 uScatterColor;\nuniform float uNoisePower;\nvoid main(void) {\n    vec4 textureColor = texture2D(uSampler, gl_PointCoord);\n    vec4 noiseColor = texture2D(uNoiseSampler, vec2(vTexture.x + vTime, vTexture.y));\n    float noiseAlpha = pow(noiseColor.r, uNoisePower);\n    vec3 mixedColors = mix(uColor1, uColor2, 1.0 - vAlpha);\n    mixedColors = mix(mixedColors, uCrestColor, vRingEffectStr);\n    mixedColors = mix(mixedColors, uScatterColor, vScatterPower);\n    mixedColors = mix(mixedColors, uTakeoverColor, vMixPower);\n    gl_FragColor = vec4(mixedColors, textureColor.a * min(noiseAlpha * vAlpha * uAlpha, 1.0));\n}");
    this.loadTextures();
    return this
  };
  this.loadModel = function (c) {
    e = c.vertices;
    b.model = c;
    k = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, k);
    gl.bufferData(gl.ARRAY_BUFFER, e, gl.STATIC_DRAW);
    a = !0
  };
  this.loadTextures = function (a) {
    m = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + "/dot.png", !0, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE);
    h = GK.TextureManager.loadTexture(GK.TextureManager.textureDir + "/clouds.png", !0, gl.REPEAT, gl.REPEAT)
  };
  this.draw = function (c, b) {
    m.loaded && h.loaded && a && (gl.useProgram(this.program.name),
      gl.uniformMatrix4fv(this.program.uniforms.uPMatrix, !1, c.perspectiveMatrix), gl.uniformMatrix4fv(this.program.uniforms.uVMatrix, !1, c.viewMatrix), gl.uniformMatrix4fv(this.program.uniforms.uMVMatrix, !1, this.modelMatrix), gl.uniform2fv(this.program.uniforms.uSceneOffset, c.sceneOffset), gl.uniform1f(this.program.uniforms.uOffsetPower, this.offsetPower), gl.uniform1f(this.program.uniforms.uPointSize, this.pointSize * this.pointSizeAdj), gl.uniform1f(this.program.uniforms.uTime, b * this.shaderSpeed), gl.uniform1f(this.program.uniforms.uNoisePower,
        this.noisePower), gl.uniform1f(this.program.uniforms.uAlpha, this.alpha), gl.uniform1f(this.program.uniforms.uWaveVariety, this.waveVariety), gl.uniform1f(this.program.uniforms.uWaveHeight, this.waveHeight), gl.uniform1f(this.program.uniforms.uWaveWidth, this.waveWidth), gl.uniform1f(this.program.uniforms.uWaveEffectStr, this.waveEffectStr), gl.uniform1f(this.program.uniforms.uWaveTime, .01 * b), gl.uniform3fv(this.program.uniforms.uWaveVector, this.waveVector), gl.uniform1f(this.program.uniforms.uWaveCosMin, this.waveCosMin),
      gl.uniform1f(this.program.uniforms.uWaveCosMax, this.waveCosMax), gl.uniform1f(this.program.uniforms.uWave, this.waveCosMax), gl.uniform1f(this.program.uniforms.uRingWidth, this.ringWidth), gl.uniform1f(this.program.uniforms.uRingHeight, this.ringHeight), gl.uniform1f(this.program.uniforms.uRingProgress, 1 - this.ringProgress), gl.uniform1f(this.program.uniforms.uRingEffectStr, this.ringEffectStr), gl.uniform1f(this.program.uniforms.uRingVariety, this.ringVariety), gl.uniform3fv(this.program.uniforms.uColor1, this.color1),
      gl.uniform3fv(this.program.uniforms.uColor2, this.color2), gl.uniform3fv(this.program.uniforms.uCrestColor, this.crestColor), gl.uniform3fv(this.program.uniforms.uTakeoverColor, this.takeoverColor), gl.uniform3fv(this.program.uniforms.uScatterColor, this.scatterColor), gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, m), gl.uniform1i(this.program.uniforms.uSampler, 0), gl.activeTexture(gl.TEXTURE1), gl.bindTexture(gl.TEXTURE_2D, h), gl.uniform1i(this.program.uniforms.uNoiseSampler, 1), gl.bindBuffer(gl.ARRAY_BUFFER,
        k), gl.vertexAttribPointer(this.program.attributes.aPosition, 3, gl.FLOAT, !1, 28, 0), gl.vertexAttribPointer(this.program.attributes.aTexture, 2, gl.FLOAT, !1, 28, 12), gl.vertexAttribPointer(this.program.attributes.aStrength, 1, gl.FLOAT, !1, 28, 20), gl.vertexAttribPointer(this.program.attributes.aOffset, 1, gl.FLOAT, !1, 28, 24), gl.enableVertexAttribArray(this.program.attributes.aPosition), gl.enableVertexAttribArray(this.program.attributes.aTexture), gl.enableVertexAttribArray(this.program.attributes.aStrength), gl.enableVertexAttribArray(this.program.attributes.aOffset),
      gl.drawArrays(gl.POINTS, 0, e.length / 7))
  }
};
"use strict";
GK = GK || {};
GK.Scene = function () {
  var d = this;
  this.paused = !1;
  this.nebula;
  this.globe;
  this.bokeh;
  this.circle;
  this.canvas;
  this.camera;
  this.points;
  this.publisherEvent;
  this.epicenter;
  this.background;
  this.globeForward;
  this.globeSideways;
  this.eventCircles = [];
  var b = 0;
  this.zoomAnim;
  this.pulseAnim;
  this.yawSpeed = -.0018;
  this.pitchSpeed = -4E-4;
  this.camTargetZ = 42;
  this.camTargetPitch = this.camTargetYaw = 0;
  var e = 1;
  this.setYawPitch = function (b, d) {
    this.camera.yaw = b;
    this.camera.pitch = d;
    this.camTargetYaw = b;
    this.camTargetPitch = d
  };
  this.init =
    function (b, e, h, a, c) {
      this.canvas = b;
      this.camera = new GK.Camera(.02 * Math.PI, this.canvas.width / this.canvas.height, .1, 100);
      this.camera.position = vec3.fromValues(0, 0, this.camTargetZ);
      window.gl = this.canvas.getContext("experimental-webgl", {
        antialias: h,
        alpha: a
      });
      gl.viewport(0, 0, this.canvas.width, this.canvas.height);
      gl.clearColor(e[0], e[1], e[2], e[3]);
      gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.BLEND);
      gl.blendEquation(gl.FUNC_ADD);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE);
      this.ring = (new GK.RingDrawable(c)).init();
      this.globe = (new GK.PointGlobeDrawable(c)).init();
      this.points = (new GK.PointSpriteDrawable(c)).init();
      this.epicenter = (new GK.EpicenterDrawable(c)).init();
      this.publisherEvent = (new GK.PublisherEventDrawable(c)).init();
      b = c ? "/dimension-mobile.png" : "/dimension.png";
      this.quad = (new GK.QuadDrawable(c ? "/bg-mobile.png" : "/bg.png", gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE, c)).init();
      this.dimension = (new GK.QuadDrawable(b, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE, c)).init();
      this.eventCircles.push((new GK.EventDrawable).init(), (new GK.EventDrawable).init(),
        (new GK.EventDrawable).init());
      c = this.quad.modelMatrix;
      mat4.translate(c, c, [0, 0, -17]);
      c = this.dimension.modelMatrix;
      mat4.translate(c, c, [0, 0, .719 * -d.camera.position[2]]);
      this.globeForward = vec3.fromValues(0, 0, 1);
      vec3.normalize(this.globeForward, this.globeForward);
      this.tick()
    };
  this.updateClearColor = function (b) {
    gl.clearColor(b[0], b[1], b[2], b[3])
  };
  this.showEventAtCoords = function (d, e, h) {
    h = h || 0;
    e = e || 3;
    var a = this.eventCircles[b % this.eventCircles.length];
    a.setCoords(d);
    a.alpha = 0;
    b++;
    d = new GK.Animation(e);
    d.updateFn =
      function (c) {
        GK.Ease.outSine(c);
        var b = GK.Ease.smoothstep(0, .1, c);
        b -= GK.Ease.smoothstep(.9, 1, c);
        a.alpha = b;
        a.scale = .08 + .008 * c
      };
    d.completeFn = function () {};
    d.start(h)
  };
  this.draw = function (b) {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    this.camTargetPitch += this.pitchSpeed * e;
    this.camTargetYaw += this.yawSpeed * e;
    var d = this.camera.position[2],
      h = d + 1 / 60 * (this.camTargetZ - d),
      a = this.camera.yaw,
      a = a + .025 * (this.camTargetYaw - a),
      c = this.camera.pitch,
      c = c + .025 * (this.camTargetPitch - c);
    this.camera.position = vec3.fromValues(0,
      0, h);
    this.globe.pointSizeAdj = 1 / (h / 100);
    this.points.pointSizeAdj = 1 / (h / 100);
    h = vec3.create();
    this.camera.yaw = a;
    this.camera.pitch = c;
    this.camera.lookAt(h);
    h = this.dimension.modelMatrix;
    mat4.identity(h);
    mat4.translate(h, h, [0, 0, -.497 * d]);
    gl.depthMask(!1);
    gl.disable(gl.CULL_FACE);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE);
    this.quad.draw(this.camera, b);
    this.dimension.draw(this.camera, b);
    this.globe.draw(this.camera, b);
    this.points.draw(this.camera, b);
    for (d = 0; d < this.eventCircles.length; d++) this.eventCircles[d].draw(this.camera,
      b);
    this.publisherEvent.draw(this.camera, b);
    gl.depthMask(!0);
    gl.enable(gl.CULL_FACE);
    this.ring.draw(this.camera, b)
  };
  this.updateViewport = function () {
    gl.viewport(0, 0, d.canvas.width, d.canvas.height);
    d.camera.vRatio = d.canvas.width / d.canvas.height;
    d.camera.update()
  };
  this.tick = function (b) {
    d.paused || (d.requestAnimFrame(d.tick), d.draw(b))
  };
  this.pause = function () {
    d.paused = !0
  };
  this.resume = function () {
    d.paused && (d.paused = !1, d.requestAnimFrame(d.tick))
  };
  this.pulse = function (b, e, h, a, c) {
    a = a || 4;
    d.globe.ringWidth = b ||
      .1;
    d.globe.ringHeight = e || .04;
    d.globe.ringVariety = h || 0;
    d.globe.ringProgress = 0;
    d.globe.ringEffectStr = 1;
    b = vec3.clone(d.camera.focusVector);
    vec3.normalize(b, b);
    d.globe.waveVector = c || b;
    d.pulseAnim && d.pulseAnim.stop();
    d.pulseAnim = new GK.Animation(a);
    d.pulseAnim.updateFn = function (a) {
      var c = GK.Ease.outSine(a);
      d.globe.ringProgress = 2 * c;
      d.globe.ringEffectStr = GK.Ease.smoothstep(0, .1, a) - GK.Ease.smoothstep(.2, .6, a);
      d.ring.progress = c;
      d.ring.alpha = GK.Ease.smoothstep(0, .1, a) - GK.Ease.smoothstep(.15, .4, a)
    };
    d.pulseAnim.completeFn =
      function () {
        d.pulseAnim = null
      };
    d.pulseAnim.start()
  };
  this.highlightCoords = function (b, e) {
    var h = GK.LatLng.toWorld(b),
      a = vec3.clone(h);
    vec3.normalize(a, a);
    d.globe.waveEffectStr = 0;
    d.globe.waveWidth = .1;
    d.globe.waveHeight = 0;
    var c = 180 * d.globe.pointSize,
      f = 160 * d.globe.pointSize - c;
    d.epicenter.createGeometry(h);
    d.epicenter.pointSize = c;
    d.epicenter.progress = 0;
    d.epicenter.alpha = 0;
    d.ring.setCoords(b);
    d.ring.progress = 0;
    d.highlightAnim && d.highlightAnim.stop();
    d.highlightAnim = new GK.Animation(e);
    var r = !1;
    d.highlightAnim.updateFn =
      function (b) {
        GK.Ease.outSine(GK.Ease.smoothstep(0, .2, b));
        d.globe.waveEffectStr = GK.Ease.smoothstep(0, .2, b);
        var e = GK.Ease.smoothstep(0, 1.65, b);
        d.globe.waveCosMin = 1 - .3 * GK.Ease.outSine(e);
        d.globe.waveVariety = .05 * GK.Ease.inSine(b);
        var e = GK.Ease.smoothstep(0, .2, b),
          l = GK.Ease.smoothstep(.2, .4, b);
        d.epicenter.pointSize = c + f * l;
        d.epicenter.alpha = e - GK.Ease.smoothstep(.6, .9, b);
        !r && .065 < b && (d.globe.waveVector = a, d.pulse(.15, .09, .06, 4, a), r = !0)
      };
    d.highlightAnim.completeFn = function () {
      d.highlightAnim = null
    };
    d.highlightAnim.start(1)
  };
  this.unHighlightCoords = function (b) {
    d.highlightAnim && d.highlightAnim.stop();
    d.highlightAnim = new GK.Animation(b);
    d.highlightAnim.updateFn = function (b) {
      d.globe.waveEffectStr = 1 - GK.Ease.smoothstep(0, .5, b)
    };
    d.highlightAnim.completeFn = function () {
      d.highlightAnim = null
    };
    d.highlightAnim.start()
  };
  this.zoomToCoords = function (b, m, h) {
    var a = b.latitude * Math.PI / 180;
    b = b.longitude * Math.PI / 180;
    b += m[0];
    var a = a + m[1],
      c = 2 * Math.PI;
    m = d.camera.yaw % c;
    var f = (m + c) % c;
    m = (m - c) % c;
    var c = Math.abs(b - f),
      r = Math.abs(b - m);
    c < r && (m = f);
    f = d.camera.pitch;
    d.camera.yaw = m;
    d.camTargetYaw = b;
    d.camera.pitch = f;
    d.camTargetPitch = -a;
    d.zoomAnim && d.zoomAnim.cancel();
    d.zoomAnim = new GK.Animation(h);
    d.zoomAnim.updateFn = function (a) {
      var c = 1 - .5 * GK.Ease.inSine(GK.Ease.smoothstep(0, .6, a));
      a = .5 * GK.Ease.outSine(GK.Ease.smoothstep(.6, 1, a));
      e = c + a
    };
    d.zoomAnim.completeFn = function (a) {
      d.zoomAnim = null
    };
    d.zoomAnim.start()
  };
  this.zoomOut = function (b) {
    var e = d.yawSpeed,
      h = -.0018 - e,
      a = d.pitchSpeed,
      c = -4E-4 - a;
    d.zoomAnim && d.zoomAnim.cancel();
    d.zoomAnim = new GK.Animation(b);
    d.zoomAnim.updateFn =
      function (b) {
        b = GK.Ease.inOutSine(b);
        d.yawSpeed = e + h * b;
        d.pitchSpeed = a + c * b
      };
    d.zoomAnim.completeFn = function (a) {
      d.zoomAnim = null
    };
    d.zoomAnim.start()
  };
  this.requestAnimFrame = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame).bind(window)
};
"use strict";
GK = GK || {};
GK.TextureManager = {
  loadSignal: new GK.Signal,
  textureDir: "/static/textures",
  textureDict: {},
  loadTexture: function (d, b, e, k) {
    if (d in GK.TextureManager.textureDict) return GK.TextureManager.textureDict[d];
    var m = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, m);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 0, 0, 255]));
    m.image = new Image;
    m.image.onload =
      function () {
        return function () {
          GK.TextureManager.configureTexture(m, b, e, k);
          m.loaded = !0;
          GK.TextureManager.loadSignal.fire(m)
        }
      }();
    GK.TextureManager.textureDict[d] = m;
    m.image.src = d;
    return m
  },
  configureTexture: function (d, b, e, k) {
    gl.bindTexture(gl.TEXTURE_2D, d);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !0);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D,
      gl.TEXTURE_WRAP_S, e);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, k);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, d.image)
  }
};
"use strict";
GK = GK || {};
GK.ProgramManager = {
  programs: {},
  create: function (d, b) {
    var e = d + b;
    if (e in GK.ProgramManager.programs) return GK.ProgramManager.programs[e];
    d = (new GK.Program(gl)).init(d, b);
    return GK.ProgramManager.programs[e] = d
  }
};
"use strict";
GK = GK || {};
GK.Camera = function (d, b, e, k) {
  this.vFov = d;
  this.vRatio = b;
  this.zNear = e;
  this.zFar = k;
  this.sceneOffset = vec2.create();
  this.perspectiveMatrix = mat4.create();
  this.cameraMatrix = mat4.create();
  this.viewMatrix = mat4.create();
  this.orthoMatrix = mat4.create();
  mat4.perspective(this.perspectiveMatrix, d, b, e, k);
  mat4.ortho(this.orthoMatrix, -1, 1, -1, 1, -100, 100);
  this.roll = this.pitch = this.yaw = 0;
  this.position = vec3.create();
  this.focusVector = vec3.create();
  this.leftVector = vec3.create();
  this.update = function () {
    mat4.perspective(this.perspectiveMatrix,
      this.vFov, this.vRatio, this.zNear, this.zFar)
  };
  this.lookAt = function (b) {
    var d = vec3.fromValues(0, 1, 0),
      a = vec3.fromValues(1, 0, 0),
      c = vec3.fromValues(-.25, 0, 1);
    vec3.normalize(c, c);
    var f = mat4.create();
    mat4.fromRotation(f, this.pitch, a);
    a = mat4.create();
    mat4.fromRotation(a, this.yaw, d);
    var r = vec3.create();
    vec3.sub(r, this.position, b);
    vec3.transformMat4(r, r, f);
    vec3.transformMat4(r, r, a);
    vec3.add(r, r, b);
    vec3.transformMat4(d, d, f);
    vec3.transformMat4(d, d, a);
    vec3.transformMat4(c, c, f);
    vec3.transformMat4(c, c, a);
    mat4.lookAt(this.viewMatrix,
      r, b, d);
    this.focusVector = r;
    this.leftVector = c
  };
  this.getScreenPos = function (b, d, a) {
    var c = mat4.create();
    mat4.multiply(c, this.perspectiveMatrix, this.viewMatrix);
    b = vec3.clone(b);
    c = GK.ProjectionUtil.project(b, c, [0, a, d, -a]);
    return vec2.fromValues(c[0] + this.sceneOffset[0] * d * .5, c[1] + this.sceneOffset[1] * a * .5)
  }
};
"use strict";
GK = GK || {};
GK.Program = function () {
  this.name;
  this.program;
  this.vertexShader;
  this.fragmentShader;
  this.uniforms = {};
  this.attributes = {};
  this.init = function (d, b) {
    this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    this.compileShader(this.fragmentShader, b);
    this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
    this.compileShader(this.vertexShader, d);
    this.program = gl.createProgram();
    gl.attachShader(this.program, this.vertexShader);
    gl.attachShader(this.program, this.fragmentShader);
    gl.linkProgram(this.program);
    gl.getProgramParameter(this.program,
      gl.LINK_STATUS) || console.log("Could not initialise shaders", this);
    this.name = this.program;
    this.assignAttributesAndUniforms();
    return this
  };
  this.assignAttributesAndUniforms = function () {
    for (var d = this.getInfo(), b = 0; b < d.attributes.length; b++) {
      var e = d.attributes[b];
      this.attributes[e.name] = gl.getAttribLocation(this.name, e.name)
    }
    for (b = 0; b < d.uniforms.length; b++) e = d.uniforms[b], this.uniforms[e.name] = gl.getUniformLocation(this.name, e.name)
  };
  this.compileShader = function (d, b) {
    gl.shaderSource(d, b);
    gl.compileShader(d);
    return gl.getShaderParameter(d, gl.COMPILE_STATUS) ? d : (console.log(gl.getShaderInfoLog(d)), null)
  };
  this.getInfo = function () {
    for (var d = {
        attributes: [],
        uniforms: [],
        attributeCount: 0,
        uniformCount: 0
      }, b = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS), e = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES), k = {
        35664: "FLOAT_VEC2",
        35665: "FLOAT_VEC3",
        35666: "FLOAT_VEC4",
        35667: "INT_VEC2",
        35668: "INT_VEC3",
        35669: "INT_VEC4",
        35670: "BOOL",
        35671: "BOOL_VEC2",
        35672: "BOOL_VEC3",
        35673: "BOOL_VEC4",
        35674: "FLOAT_MAT2",
        35675: "FLOAT_MAT3",
        35676: "FLOAT_MAT4",
        35678: "SAMPLER_2D",
        35680: "SAMPLER_CUBE",
        5120: "BYTE",
        5121: "UNSIGNED_BYTE",
        5122: "SHORT",
        5123: "UNSIGNED_SHORT",
        5124: "INT",
        5125: "UNSIGNED_INT",
        5126: "FLOAT"
      }, m = 0; m < b; m++) {
      var h = gl.getActiveUniform(this.program, m);
      h.typeName = k[h.type];
      d.uniforms.push(h);
      d.uniformCount += h.size
    }
    for (m = 0; m < e; m++) b = gl.getActiveAttrib(this.program, m), b.typeName = k[b.type], d.attributes.push(b), d.attributeCount += b.size;
    return d
  }
};
"use strict";
GK = GK || {};
GK.ModelManager = function () {
  var d = this;
  this.loadSignal = new GK.Signal;
  this.loaded = !1;
  this.models = {};
  this.load = function (b, e) {
    var k = new XMLHttpRequest;
    k.open("GET", b, !0);
    k.responseType = "arraybuffer";
    k.onload = function (b) {
      if (b = k.response) b = d.processModel(b), e && e(b)
    };
    k.send(null)
  };
  this.processModel = function (b, e) {
    var k = new Uint32Array(b, 0, 2);
    e = k[0];
    var k = k[1],
      m = 2 * Uint32Array.BYTES_PER_ELEMENT,
      h = m + Float32Array.BYTES_PER_ELEMENT * e;
    e = new Float32Array(b, m, e);
    b = new Uint16Array(b, h, k);
    b = new GK.Model(e, b);
    d.loadSignal.fire(b);
    return b
  }
};
"use strict";
GK = GK || {};
GK.LineGenerator = function () {};
GK.LineGenerator.generate = function (d, b, e, k, m) {
  var h = 1 + GK.LatLng.distance(d, b) / 12742 * 1.3,
    a = [];
  a[0] = GK.LatLng.toWorld(GK.LineGenerator.greatCirclePoint(d, b, 0));
  a[1] = GK.LatLng.toWorld(GK.LineGenerator.greatCirclePoint(d, b, .3));
  a[2] = GK.LatLng.toWorld(GK.LineGenerator.greatCirclePoint(d, b, .7));
  a[3] = GK.LatLng.toWorld(GK.LineGenerator.greatCirclePoint(d, b, 1));
  vec3.scale(a[0], a[0], 1.001);
  vec3.scale(a[1], a[1], h);
  vec3.scale(a[2], a[2], h);
  vec3.scale(a[3], a[3], 1.001);
  d = [];
  for (b = 0; b < k; b++) {
    var h = a[0],
      c = a[1],
      f =
      a[2],
      r = a[3],
      x = b / (k - 1),
      x = Math.max(x, 0),
      x = Math.min(x, 1),
      h = GK.Spline.bezierPointOnCurve(h, c, f, r, x);
    d[b] = h
  }
  a = 18 * k;
  h = new Float32Array(a * m);
  c = 6 * (k - 1);
  f = new Uint16Array(c * m);
  r = 0;
  x = 1;
  for (b = 0; b < m; b++) {
    var q = b * k * 2,
      l = GK.LineGenerator.twist(d, r / ((b + 1) * (b + 1)), .5);
    GK.LineGenerator.extrudeLineFromPoints(l, e, !0, x, q, a * b, c * b, h, f);
    r += .1;
    x *= .5
  }
  return new GK.Model(h, f)
};
GK.LineGenerator.twist = function (d, b) {
  d = d.slice(0);
  var e = d[0],
    k = d[d.length - 1],
    m = vec3.create();
  vec3.subtract(m, k, e);
  vec3.normalize(m, m);
  for (e = 0; e < d.length; e++) {
    var k = d[e],
      h = GK.Ease.roughstep(1, 2, vec3.length(k)),
      a = vec3.create();
    vec3.scale(a, m, h);
    var c = mat4.create();
    mat4.fromRotation(c, b * h, a);
    vec3.transformMat4(k, k, c)
  }
  return d
};
GK.LineGenerator.extrudeLineFromPoints = function (d, b, e, k, m, h, a, c, f) {
  for (var r = 0, x = 0; x < d.length; x++) {
    var q;
    if (x + 1 == d.length) {
      var l = d[x - 1];
      var p = q = d[x]
    } else l = d[x], q = d[x + 1], p = l;
    var g = vec3.create();
    vec3.cross(g, l, q);
    vec3.normalize(g, g);
    var n = vec3.create();
    vec3.sub(n, q, l);
    vec3.cross(n, g, n);
    vec3.normalize(n, n);
    e ? (l = g, g = n) : l = n;
    n = vec3.create();
    vec3.scale(n, l, b);
    vec3.add(n, p, n);
    q = vec3.create();
    vec3.scale(q, l, -b);
    vec3.add(q, p, q);
    p = x / (d.length - 1);
    c[h + r + 0] = n[0];
    c[h + r + 1] = n[1];
    c[h + r + 2] = n[2];
    c[h + r + 3] = g[0];
    c[h + r +
      4] = g[1];
    c[h + r + 5] = g[2];
    c[h + r + 6] = 0;
    c[h + r + 7] = p;
    c[h + r + 8] = k;
    c[h + r + 9] = q[0];
    c[h + r + 10] = q[1];
    c[h + r + 11] = q[2];
    c[h + r + 12] = g[0];
    c[h + r + 13] = g[1];
    c[h + r + 14] = g[2];
    c[h + r + 15] = 1;
    c[h + r + 16] = p;
    c[h + r + 17] = k;
    r += 18
  }
  for (e = b = 0; e < 2 * (d.length - 1); e += 2) f[a + b + 0] = m + 1 + e, f[a + b + 1] = m + 0 + e, f[a + b + 2] = m + 2 + e, f[a + b + 3] = m + 2 + e, f[a + b + 4] = m + 3 + e, f[a + b + 5] = m + 1 + e, b += 6
};
GK.LineGenerator.greatCirclePoint = function (d, b, e) {
  var k = d.latitude * Math.PI / 180,
    m = d.longitude * Math.PI / 180;
  d = b.latitude * Math.PI / 180;
  var h = b.longitude * Math.PI / 180,
    a = Math.acos(Math.sin(k) * Math.sin(d) + Math.cos(k) * Math.cos(d) * Math.cos(m - h));
  b = Math.sin((1 - e) * a) / Math.sin(a);
  e = Math.sin(e * a) / Math.sin(a);
  a = b * Math.cos(k) * Math.cos(m) + e * Math.cos(d) * Math.cos(h);
  m = b * Math.cos(k) * Math.sin(m) + e * Math.cos(d) * Math.sin(h);
  return new GK.LatLng(180 * Math.atan2(b * Math.sin(k) + e * Math.sin(d), Math.sqrt(Math.pow(a, 2) + Math.pow(m,
    2))) / Math.PI, 180 * Math.atan2(m, a) / Math.PI)
};
"use strict";
GK = GK || {};
GK.Model = function (d, b) {
  this.vertices = d;
  this.indices = b
};
"use strict";
GK = GK || {};
GK.View = function (d) {
  var b = this;
  this.paused = !1;
  this.canvas;
  this.scene;
  this.modelManager;
  this.windowLoaded = this.modelsLoaded = !1;
  this.attachedElements = [];
  this.modelCount = 3;
  this.modelsLoaded = 0;
  this.textureCount = 11;
  this.texturesLoaded = 0;
  this.resize = function () {
    b.scene.updateViewport()
  };
  var e = function (d) {
      b.texturesLoaded++;
      m()
    },
    k = function (d) {
      b.modelsLoaded++;
      m()
    },
    m = function () {
      if (b.modelsLoaded == b.modelCount && b.texturesLoaded == b.textureCount && d.onload) d.onload()
    };
  this.pause = function () {
    b.paused = !0;
    b.scene.pause()
  };
  this.resume = function () {
    b.paused && (b.paused = !1, b.scene.resume(), b.scene.requestAnimFrame(b.updateAttachedElements))
  };
  this.addPoints = function (d) {
    for (var a = [], c = 0; c < d.length; c++) {
      var f = (new GK.PointSprite).init(d[c]);
      a.push(f)
    }
    b.scene.points.loadGeometry(a)
  };
  this.focusOn = function (d, a, c) {
    b.scene.highlightCoords(d, c);
    b.scene.zoomToCoords(d, a, c)
  };
  this.unfocus = function (d) {
    b.scene.unHighlightCoords(d);
    b.scene.zoomOut(d)
  };
  this.pulse = function (d, a, c, f, r) {
    b.scene.pulse(d, a, c, f, r)
  };
  this.stopPulse = function (d, a,
    c, f, r) {
    b.scene.pulseAnim && b.scene.pulseAnim.stop()
  };
  this.attachElement = function (b, a) {
    b.gk_pos = GK.LatLng.toWorld(a);
    this.attachedElements.push(b)
  };
  this.attachElementToPosition = function (b, a) {
    b.gk_pos = a;
    this.attachedElements.push(b)
  };
  this.unattachElement = function (b) {
    delete b.gk_pos;
    this.attachedElements.splice(this.attachedElements.indexOf(b), 1)
  };
  this.updateAttachedElements = function () {
    if (!b.paused && (b.scene.requestAnimFrame(b.updateAttachedElements), 0 != b.attachedElements.length))
      for (var d = b.scene.camera,
          a = b.canvas, c = 0; c < b.attachedElements.length; c++) {
        var f = b.attachedElements[c],
          r = d.getScreenPos(f.gk_pos, a.width, a.height);
        f.style.transform = "translateX(" + r[0] + "px) translateY(" + r[1] + "px)"
      }
  };
  this.destroy = function () {
    GK.AnimationManager.pause();
    b.pause();
    b.scene.pause();
    delete b.scene.canvas;
    delete b.scene.camera;
    delete b.scene.nebula;
    delete b.scene.globe;
    delete b.scene.bokeh;
    delete b.scene.epicenter;
    delete b.scene.points;
    delete b.scene.background;
    delete b.scene.globeForward;
    delete b.scene.zoomAnim;
    delete b.scene.themeAnim;
    delete b.scene.pulseAnim;
    delete b.scene.highlightAnim;
    delete b.scene;
    delete b.modelManager;
    delete b.attachedElements;
    b.canvas.parentNode.removeChild(b.canvas);
    delete b.canvas;
    delete window.gl
  };
  (function () {
    GK.TextureManager.textureDir = d.textureDir;
    GK.AnimationManager.init();
    b.canvas = d.canvas;
    b.scene = new GK.Scene;
    b.modelManager = new GK.ModelManager;
    b.scene.init(b.canvas, d.clearColor, d.antialias, d.alpha, d.lowRes);
    b.scene.camera.sceneOffset = d.sceneOffset;
    b.modelManager.load(d.modelsDir + (d.lowRes ? "/point-mobile.bin" :
      "/point.bin"), function (d) {
      b.scene.globe.loadModel(d)
    });
    b.modelManager.load(d.modelsDir + "/ring.bin", function (d) {
      b.scene.ring.loadModel(d)
    });
    b.modelManager.load(d.modelsDir + "/circle.bin", function (d) {
      b.scene.publisherEvent.loadCircleModel(d);
      for (var a = 0; a < b.scene.eventCircles.length; a++) b.scene.eventCircles[a].loadModel(d)
    });
    b.modelManager.loadSignal.add(b, k);
    GK.TextureManager.loadSignal.add(b, e);
    b.scene.requestAnimFrame(b.updateAttachedElements)
  })()
};
! function (d, b) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = b();
  else if ("function" == typeof define && define.amd) define([], b);
  else {
    b = b();
    for (var e in b)("object" == typeof exports ? exports : d)[e] = b[e]
  }
}(this, function () {
  return function (d) {
    function b(k) {
      if (e[k]) return e[k].exports;
      var m = e[k] = {
        i: k,
        l: !1,
        exports: {}
      };
      return d[k].call(m.exports, m, m.exports, b), m.l = !0, m.exports
    }
    var e = {};
    return b.m = d, b.c = e, b.d = function (d, e, h) {
      b.o(d, e) || Object.defineProperty(d, e, {
        configurable: !1,
        enumerable: !0,
        get: h
      })
    }, b.n = function (d) {
      var e = d && d.__esModule ? function () {
        return d.default
      } : function () {
        return d
      };
      return b.d(e, "a", e), e
    }, b.o = function (b, d) {
      return Object.prototype.hasOwnProperty.call(b, d)
    }, b.p = "", b(b.s = 4)
  }([function (d, b, e) {
      Object.defineProperty(b, "__esModule", {
        value: !0
      });
      b.setMatrixArrayType = function (d) {
        b.ARRAY_TYPE = d
      };
      b.toRadian = function (b) {
        return b * m
      };
      b.equals = function (b, a) {
        return Math.abs(b - a) <= k * Math.max(1, Math.abs(b), Math.abs(a))
      };
      var k = b.EPSILON = 1E-6;
      b.ARRAY_TYPE = "undefined" != typeof Float32Array ?
        Float32Array : Array;
      var m = (b.RANDOM = Math.random, Math.PI / 180)
    }, function (d, b, e) {
      function k(a, c, b) {
        var d = c[0],
          f = c[1],
          e = c[2],
          l = c[3],
          p = c[4],
          g = c[5],
          n = c[6],
          u = c[7];
        c = c[8];
        var E = b[0],
          z = b[1],
          t = b[2],
          h = b[3],
          k = b[4],
          m = b[5],
          F = b[6],
          A = b[7];
        b = b[8];
        return a[0] = E * d + z * l + t * n, a[1] = E * f + z * p + t * u, a[2] = E * e + z * g + t * c, a[3] = h * d + k * l + m * n, a[4] = h * f + k * p + m * u, a[5] = h * e + k * g + m * c, a[6] = F * d + A * l + b * n, a[7] = F * f + A * p + b * u, a[8] = F * e + A * g + b * c, a
      }

      function m(a, c, b) {
        return a[0] = c[0] - b[0], a[1] = c[1] - b[1], a[2] = c[2] - b[2], a[3] = c[3] - b[3], a[4] = c[4] - b[4], a[5] = c[5] -
          b[5], a[6] = c[6] - b[6], a[7] = c[7] - b[7], a[8] = c[8] - b[8], a
      }
      Object.defineProperty(b, "__esModule", {
        value: !0
      });
      b.sub = b.mul = void 0;
      b.create = function () {
        var a = new h.ARRAY_TYPE(9);
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, a[6] = 0, a[7] = 0, a[8] = 1, a
      };
      b.fromMat4 = function (a, c) {
        return a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[4], a[4] = c[5], a[5] = c[6], a[6] = c[8], a[7] = c[9], a[8] = c[10], a
      };
      b.clone = function (a) {
        var c = new h.ARRAY_TYPE(9);
        return c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c[4] = a[4], c[5] = a[5], c[6] = a[6], c[7] = a[7], c[8] =
          a[8], c
      };
      b.copy = function (a, c) {
        return a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3], a[4] = c[4], a[5] = c[5], a[6] = c[6], a[7] = c[7], a[8] = c[8], a
      };
      b.fromValues = function (a, c, b, d, e, q, l, p, g) {
        var n = new h.ARRAY_TYPE(9);
        return n[0] = a, n[1] = c, n[2] = b, n[3] = d, n[4] = e, n[5] = q, n[6] = l, n[7] = p, n[8] = g, n
      };
      b.set = function (a, c, b, d, e, q, l, p, g, n) {
        return a[0] = c, a[1] = b, a[2] = d, a[3] = e, a[4] = q, a[5] = l, a[6] = p, a[7] = g, a[8] = n, a
      };
      b.identity = function (a) {
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, a[6] = 0, a[7] = 0, a[8] = 1, a
      };
      b.transpose = function (a, c) {
        if (a ===
          c) {
          var b = c[1],
            d = c[2],
            e = c[5];
          a[1] = c[3];
          a[2] = c[6];
          a[3] = b;
          a[5] = c[7];
          a[6] = d;
          a[7] = e
        } else a[0] = c[0], a[1] = c[3], a[2] = c[6], a[3] = c[1], a[4] = c[4], a[5] = c[7], a[6] = c[2], a[7] = c[5], a[8] = c[8];
        return a
      };
      b.invert = function (a, c) {
        var b = c[0],
          d = c[1],
          e = c[2],
          q = c[3],
          l = c[4],
          p = c[5],
          g = c[6],
          n = c[7];
        c = c[8];
        var u = c * l - p * n,
          E = -c * q + p * g,
          z = n * q - l * g,
          t = b * u + d * E + e * z;
        return t ? (t = 1 / t, a[0] = u * t, a[1] = (-c * d + e * n) * t, a[2] = (p * d - e * l) * t, a[3] = E * t, a[4] = (c * b - e * g) * t, a[5] = (-p * b + e * q) * t, a[6] = z * t, a[7] = (-n * b + d * g) * t, a[8] = (l * b - d * q) * t, a) : null
      };
      b.adjoint = function (a,
        c) {
        var b = c[0],
          d = c[1],
          e = c[2],
          q = c[3],
          l = c[4],
          p = c[5],
          g = c[6],
          n = c[7];
        c = c[8];
        return a[0] = l * c - p * n, a[1] = e * n - d * c, a[2] = d * p - e * l, a[3] = p * g - q * c, a[4] = b * c - e * g, a[5] = e * q - b * p, a[6] = q * n - l * g, a[7] = d * g - b * n, a[8] = b * l - d * q, a
      };
      b.determinant = function (a) {
        var c = a[3],
          b = a[4],
          d = a[5],
          e = a[6],
          q = a[7],
          l = a[8];
        return a[0] * (l * b - d * q) + a[1] * (-l * c + d * e) + a[2] * (q * c - b * e)
      };
      b.multiply = k;
      b.translate = function (a, c, b) {
        var d = c[0],
          f = c[1],
          e = c[2],
          l = c[3],
          p = c[4],
          g = c[5],
          n = c[6],
          u = c[7];
        c = c[8];
        var E = b[0];
        b = b[1];
        return a[0] = d, a[1] = f, a[2] = e, a[3] = l, a[4] = p, a[5] = g, a[6] =
          E * d + b * l + n, a[7] = E * f + b * p + u, a[8] = E * e + b * g + c, a
      };
      b.rotate = function (a, c, b) {
        var d = c[0],
          f = c[1],
          e = c[2],
          l = c[3],
          p = c[4],
          g = c[5],
          n = c[6],
          u = c[7];
        c = c[8];
        var E = Math.sin(b);
        b = Math.cos(b);
        return a[0] = b * d + E * l, a[1] = b * f + E * p, a[2] = b * e + E * g, a[3] = b * l - E * d, a[4] = b * p - E * f, a[5] = b * g - E * e, a[6] = n, a[7] = u, a[8] = c, a
      };
      b.scale = function (a, c, b) {
        var d = b[0];
        b = b[1];
        return a[0] = d * c[0], a[1] = d * c[1], a[2] = d * c[2], a[3] = b * c[3], a[4] = b * c[4], a[5] = b * c[5], a[6] = c[6], a[7] = c[7], a[8] = c[8], a
      };
      b.fromTranslation = function (a, c) {
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] =
          1, a[5] = 0, a[6] = c[0], a[7] = c[1], a[8] = 1, a
      };
      b.fromRotation = function (a, c) {
        var b = Math.sin(c);
        c = Math.cos(c);
        return a[0] = c, a[1] = b, a[2] = 0, a[3] = -b, a[4] = c, a[5] = 0, a[6] = 0, a[7] = 0, a[8] = 1, a
      };
      b.fromScaling = function (a, c) {
        return a[0] = c[0], a[1] = 0, a[2] = 0, a[3] = 0, a[4] = c[1], a[5] = 0, a[6] = 0, a[7] = 0, a[8] = 1, a
      };
      b.fromMat2d = function (a, c) {
        return a[0] = c[0], a[1] = c[1], a[2] = 0, a[3] = c[2], a[4] = c[3], a[5] = 0, a[6] = c[4], a[7] = c[5], a[8] = 1, a
      };
      b.fromQuat = function (a, c) {
        var b = c[0],
          d = c[1],
          e = c[2];
        c = c[3];
        var q = b + b,
          l = d + d,
          p = e + e,
          b = b * q,
          g = d * q,
          d = d * l,
          n = e * q,
          u = e * l,
          e = e * p,
          q = c * q,
          l = c * l;
        c *= p;
        return a[0] = 1 - d - e, a[3] = g - c, a[6] = n + l, a[1] = g + c, a[4] = 1 - b - e, a[7] = u - q, a[2] = n - l, a[5] = u + q, a[8] = 1 - b - d, a
      };
      b.normalFromMat4 = function (a, c) {
        var b = c[0],
          d = c[1],
          e = c[2],
          q = c[3],
          l = c[4],
          p = c[5],
          g = c[6],
          n = c[7],
          u = c[8],
          E = c[9],
          z = c[10],
          t = c[11],
          h = c[12],
          k = c[13],
          m = c[14];
        c = c[15];
        var F = b * p - d * l,
          A = b * g - e * l,
          B = b * n - q * l,
          D = d * g - e * p,
          C = d * n - q * p,
          H = e * n - q * g,
          I = u * k - E * h,
          J = u * m - z * h,
          u = u * c - t * h,
          K = E * m - z * k,
          E = E * c - t * k,
          z = z * c - t * m;
        return (t = F * z - A * E + B * K + D * u - C * J + H * I) ? (t = 1 / t, a[0] = (p * z - g * E + n * K) * t, a[1] = (g * u - l * z - n * J) * t, a[2] = (l * E - p * u + n *
          I) * t, a[3] = (e * E - d * z - q * K) * t, a[4] = (b * z - e * u + q * J) * t, a[5] = (d * u - b * E - q * I) * t, a[6] = (k * H - m * C + c * D) * t, a[7] = (m * B - h * H - c * A) * t, a[8] = (h * C - k * B + c * F) * t, a) : null
      };
      b.projection = function (a, c, b) {
        return a[0] = 2 / c, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = -2 / b, a[5] = 0, a[6] = -1, a[7] = 1, a[8] = 1, a
      };
      b.str = function (a) {
        return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")"
      };
      b.frob = function (a) {
        return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5],
          2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2))
      };
      b.add = function (a, c, b) {
        return a[0] = c[0] + b[0], a[1] = c[1] + b[1], a[2] = c[2] + b[2], a[3] = c[3] + b[3], a[4] = c[4] + b[4], a[5] = c[5] + b[5], a[6] = c[6] + b[6], a[7] = c[7] + b[7], a[8] = c[8] + b[8], a
      };
      b.subtract = m;
      b.multiplyScalar = function (a, c, b) {
        return a[0] = c[0] * b, a[1] = c[1] * b, a[2] = c[2] * b, a[3] = c[3] * b, a[4] = c[4] * b, a[5] = c[5] * b, a[6] = c[6] * b, a[7] = c[7] * b, a[8] = c[8] * b, a
      };
      b.multiplyScalarAndAdd = function (a, c, b, d) {
        return a[0] = c[0] + b[0] * d, a[1] = c[1] + b[1] * d, a[2] = c[2] + b[2] * d, a[3] = c[3] + b[3] *
          d, a[4] = c[4] + b[4] * d, a[5] = c[5] + b[5] * d, a[6] = c[6] + b[6] * d, a[7] = c[7] + b[7] * d, a[8] = c[8] + b[8] * d, a
      };
      b.exactEquals = function (a, c) {
        return a[0] === c[0] && a[1] === c[1] && a[2] === c[2] && a[3] === c[3] && a[4] === c[4] && a[5] === c[5] && a[6] === c[6] && a[7] === c[7] && a[8] === c[8]
      };
      b.equals = function (a, c) {
        var b = a[0],
          d = a[1],
          e = a[2],
          q = a[3],
          l = a[4],
          p = a[5],
          g = a[6],
          n = a[7];
        a = a[8];
        var u = c[0],
          E = c[1],
          z = c[2],
          t = c[3],
          k = c[4],
          m = c[5],
          w = c[6],
          F = c[7];
        c = c[8];
        return Math.abs(b - u) <= h.EPSILON * Math.max(1, Math.abs(b), Math.abs(u)) && Math.abs(d - E) <= h.EPSILON * Math.max(1,
          Math.abs(d), Math.abs(E)) && Math.abs(e - z) <= h.EPSILON * Math.max(1, Math.abs(e), Math.abs(z)) && Math.abs(q - t) <= h.EPSILON * Math.max(1, Math.abs(q), Math.abs(t)) && Math.abs(l - k) <= h.EPSILON * Math.max(1, Math.abs(l), Math.abs(k)) && Math.abs(p - m) <= h.EPSILON * Math.max(1, Math.abs(p), Math.abs(m)) && Math.abs(g - w) <= h.EPSILON * Math.max(1, Math.abs(g), Math.abs(w)) && Math.abs(n - F) <= h.EPSILON * Math.max(1, Math.abs(n), Math.abs(F)) && Math.abs(a - c) <= h.EPSILON * Math.max(1, Math.abs(a), Math.abs(c))
      };
      var h = function (a) {
        if (a && a.__esModule) return a;
        var c = {};
        if (null != a)
          for (var b in a) Object.prototype.hasOwnProperty.call(a, b) && (c[b] = a[b]);
        return c.default = a, c
      }(e(0));
      b.mul = k;
      b.sub = m
    }, function (d, b, e) {
      function k() {
        var a = new g.ARRAY_TYPE(3);
        return a[0] = 0, a[1] = 0, a[2] = 0, a
      }

      function m(a) {
        var c = a[0],
          b = a[1];
        a = a[2];
        return Math.sqrt(c * c + b * b + a * a)
      }

      function h(a, c, b) {
        var d = new g.ARRAY_TYPE(3);
        return d[0] = a, d[1] = c, d[2] = b, d
      }

      function a(a, c, b) {
        return a[0] = c[0] - b[0], a[1] = c[1] - b[1], a[2] = c[2] - b[2], a
      }

      function c(a, c, b) {
        return a[0] = c[0] * b[0], a[1] = c[1] * b[1], a[2] = c[2] * b[2],
          a
      }

      function f(a, c, b) {
        return a[0] = c[0] / b[0], a[1] = c[1] / b[1], a[2] = c[2] / b[2], a
      }

      function r(a, c) {
        var b = c[0] - a[0],
          d = c[1] - a[1];
        a = c[2] - a[2];
        return Math.sqrt(b * b + d * d + a * a)
      }

      function x(a, c) {
        var b = c[0] - a[0],
          d = c[1] - a[1];
        a = c[2] - a[2];
        return b * b + d * d + a * a
      }

      function q(a) {
        var c = a[0],
          b = a[1];
        a = a[2];
        return c * c + b * b + a * a
      }

      function l(a, c) {
        var b = c[0],
          d = c[1],
          n = c[2],
          b = b * b + d * d + n * n;
        return 0 < b && (b = 1 / Math.sqrt(b), a[0] = c[0] * b, a[1] = c[1] * b, a[2] = c[2] * b), a
      }

      function p(a, c) {
        return a[0] * c[0] + a[1] * c[1] + a[2] * c[2]
      }
      Object.defineProperty(b, "__esModule", {
        value: !0
      });
      b.forEach = b.sqrLen = b.len = b.sqrDist = b.dist = b.div = b.mul = b.sub = void 0;
      b.create = k;
      b.clone = function (a) {
        var c = new g.ARRAY_TYPE(3);
        return c[0] = a[0], c[1] = a[1], c[2] = a[2], c
      };
      b.length = m;
      b.fromValues = h;
      b.copy = function (a, c) {
        return a[0] = c[0], a[1] = c[1], a[2] = c[2], a
      };
      b.set = function (a, c, b, d) {
        return a[0] = c, a[1] = b, a[2] = d, a
      };
      b.add = function (a, c, b) {
        return a[0] = c[0] + b[0], a[1] = c[1] + b[1], a[2] = c[2] + b[2], a
      };
      b.subtract = a;
      b.multiply = c;
      b.divide = f;
      b.ceil = function (a, c) {
        return a[0] = Math.ceil(c[0]), a[1] = Math.ceil(c[1]),
          a[2] = Math.ceil(c[2]), a
      };
      b.floor = function (a, c) {
        return a[0] = Math.floor(c[0]), a[1] = Math.floor(c[1]), a[2] = Math.floor(c[2]), a
      };
      b.min = function (a, c, b) {
        return a[0] = Math.min(c[0], b[0]), a[1] = Math.min(c[1], b[1]), a[2] = Math.min(c[2], b[2]), a
      };
      b.max = function (a, c, b) {
        return a[0] = Math.max(c[0], b[0]), a[1] = Math.max(c[1], b[1]), a[2] = Math.max(c[2], b[2]), a
      };
      b.round = function (a, c) {
        return a[0] = Math.round(c[0]), a[1] = Math.round(c[1]), a[2] = Math.round(c[2]), a
      };
      b.scale = function (a, c, b) {
        return a[0] = c[0] * b, a[1] = c[1] * b, a[2] = c[2] * b,
          a
      };
      b.scaleAndAdd = function (a, c, b, d) {
        return a[0] = c[0] + b[0] * d, a[1] = c[1] + b[1] * d, a[2] = c[2] + b[2] * d, a
      };
      b.distance = r;
      b.squaredDistance = x;
      b.squaredLength = q;
      b.negate = function (a, c) {
        return a[0] = -c[0], a[1] = -c[1], a[2] = -c[2], a
      };
      b.inverse = function (a, c) {
        return a[0] = 1 / c[0], a[1] = 1 / c[1], a[2] = 1 / c[2], a
      };
      b.normalize = l;
      b.dot = p;
      b.cross = function (a, c, b) {
        var d = c[0],
          g = c[1];
        c = c[2];
        var n = b[0],
          f = b[1];
        b = b[2];
        return a[0] = g * b - c * f, a[1] = c * n - d * b, a[2] = d * f - g * n, a
      };
      b.lerp = function (a, c, b, d) {
        var g = c[0],
          n = c[1];
        c = c[2];
        return a[0] = g + d * (b[0] - g),
          a[1] = n + d * (b[1] - n), a[2] = c + d * (b[2] - c), a
      };
      b.hermite = function (a, c, b, d, g, f) {
        var n = f * f,
          p = n * (2 * f - 3) + 1,
          u = n * (f - 2) + f,
          l = n * (f - 1);
        f = n * (3 - 2 * f);
        return a[0] = c[0] * p + b[0] * u + d[0] * l + g[0] * f, a[1] = c[1] * p + b[1] * u + d[1] * l + g[1] * f, a[2] = c[2] * p + b[2] * u + d[2] * l + g[2] * f, a
      };
      b.bezier = function (a, c, b, d, g, f) {
        var n = 1 - f,
          p = n * n,
          u = f * f,
          l = p * n,
          p = 3 * f * p,
          n = 3 * u * n;
        f *= u;
        return a[0] = c[0] * l + b[0] * p + d[0] * n + g[0] * f, a[1] = c[1] * l + b[1] * p + d[1] * n + g[1] * f, a[2] = c[2] * l + b[2] * p + d[2] * n + g[2] * f, a
      };
      b.random = function (a, c) {
        c = c || 1;
        var b = 2 * g.RANDOM() * Math.PI,
          d = 2 * g.RANDOM() - 1,
          n = Math.sqrt(1 - d * d) * c;
        return a[0] = Math.cos(b) * n, a[1] = Math.sin(b) * n, a[2] = d * c, a
      };
      b.transformMat4 = function (a, c, b) {
        var d = c[0],
          g = c[1];
        c = c[2];
        var n = b[3] * d + b[7] * g + b[11] * c + b[15];
        return n = n || 1, a[0] = (b[0] * d + b[4] * g + b[8] * c + b[12]) / n, a[1] = (b[1] * d + b[5] * g + b[9] * c + b[13]) / n, a[2] = (b[2] * d + b[6] * g + b[10] * c + b[14]) / n, a
      };
      b.transformMat3 = function (a, c, b) {
        var d = c[0],
          g = c[1];
        c = c[2];
        return a[0] = d * b[0] + g * b[3] + c * b[6], a[1] = d * b[1] + g * b[4] + c * b[7], a[2] = d * b[2] + g * b[5] + c * b[8], a
      };
      b.transformQuat = function (a, c, b) {
        var d = c[0],
          g = c[1],
          n = c[2];
        c = b[0];
        var f = b[1],
          p = b[2];
        b = b[3];
        var l = b * d + f * n - p * g,
          u = b * g + p * d - c * n,
          e = b * n + c * g - f * d,
          d = -c * d - f * g - p * n;
        return a[0] = l * b + d * -c + u * -p - e * -f, a[1] = u * b + d * -f + e * -c - l * -p, a[2] = e * b + d * -p + l * -f - u * -c, a
      };
      b.rotateX = function (a, c, b, d) {
        var g = [],
          n = [];
        return g[0] = c[0] - b[0], g[1] = c[1] - b[1], g[2] = c[2] - b[2], n[0] = g[0], n[1] = g[1] * Math.cos(d) - g[2] * Math.sin(d), n[2] = g[1] * Math.sin(d) + g[2] * Math.cos(d), a[0] = n[0] + b[0], a[1] = n[1] + b[1], a[2] = n[2] + b[2], a
      };
      b.rotateY = function (a, c, b, d) {
        var g = [],
          n = [];
        return g[0] = c[0] - b[0], g[1] = c[1] - b[1], g[2] = c[2] - b[2], n[0] = g[2] *
          Math.sin(d) + g[0] * Math.cos(d), n[1] = g[1], n[2] = g[2] * Math.cos(d) - g[0] * Math.sin(d), a[0] = n[0] + b[0], a[1] = n[1] + b[1], a[2] = n[2] + b[2], a
      };
      b.rotateZ = function (a, c, b, d) {
        var g = [],
          n = [];
        return g[0] = c[0] - b[0], g[1] = c[1] - b[1], g[2] = c[2] - b[2], n[0] = g[0] * Math.cos(d) - g[1] * Math.sin(d), n[1] = g[0] * Math.sin(d) + g[1] * Math.cos(d), n[2] = g[2], a[0] = n[0] + b[0], a[1] = n[1] + b[1], a[2] = n[2] + b[2], a
      };
      b.angle = function (a, c) {
        a = h(a[0], a[1], a[2]);
        c = h(c[0], c[1], c[2]);
        l(a, a);
        l(c, c);
        c = p(a, c);
        return 1 < c ? 0 : -1 > c ? Math.PI : Math.acos(c)
      };
      b.str = function (a) {
        return "vec3(" +
          a[0] + ", " + a[1] + ", " + a[2] + ")"
      };
      b.exactEquals = function (a, c) {
        return a[0] === c[0] && a[1] === c[1] && a[2] === c[2]
      };
      b.equals = function (a, c) {
        var b = a[0],
          d = a[1];
        a = a[2];
        var f = c[0],
          n = c[1];
        c = c[2];
        return Math.abs(b - f) <= g.EPSILON * Math.max(1, Math.abs(b), Math.abs(f)) && Math.abs(d - n) <= g.EPSILON * Math.max(1, Math.abs(d), Math.abs(n)) && Math.abs(a - c) <= g.EPSILON * Math.max(1, Math.abs(a), Math.abs(c))
      };
      var g = function (a) {
        if (a && a.__esModule) return a;
        var c = {};
        if (null != a)
          for (var b in a) Object.prototype.hasOwnProperty.call(a, b) && (c[b] = a[b]);
        return c.default = a, c
      }(e(0));
      b.sub = a;
      b.mul = c;
      b.div = f;
      b.dist = r;
      b.sqrDist = x;
      b.len = m;
      b.sqrLen = q;
      b.forEach = function () {
        var a = k();
        return function (c, b, d, g, f, n) {
          b || (b = 3);
          d || (d = 0);
          for (g = g ? Math.min(g * b + d, c.length) : c.length; d < g; d += b) a[0] = c[d], a[1] = c[d + 1], a[2] = c[d + 2], f(a, a, n), c[d] = a[0], c[d + 1] = a[1], c[d + 2] = a[2];
          return c
        }
      }()
    }, function (d, b, e) {
      function k() {
        var a = new p.ARRAY_TYPE(4);
        return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0, a
      }

      function m(a, c, b) {
        return a[0] = c[0] - b[0], a[1] = c[1] - b[1], a[2] = c[2] - b[2], a[3] = c[3] - b[3], a
      }

      function h(a,
        c, b) {
        return a[0] = c[0] * b[0], a[1] = c[1] * b[1], a[2] = c[2] * b[2], a[3] = c[3] * b[3], a
      }

      function a(a, c, b) {
        return a[0] = c[0] / b[0], a[1] = c[1] / b[1], a[2] = c[2] / b[2], a[3] = c[3] / b[3], a
      }

      function c(a, c, b) {
        return a[0] = c[0] * b, a[1] = c[1] * b, a[2] = c[2] * b, a[3] = c[3] * b, a
      }

      function f(a, c) {
        var b = c[0] - a[0],
          d = c[1] - a[1],
          g = c[2] - a[2];
        a = c[3] - a[3];
        return Math.sqrt(b * b + d * d + g * g + a * a)
      }

      function r(a, c) {
        var b = c[0] - a[0],
          d = c[1] - a[1],
          g = c[2] - a[2];
        a = c[3] - a[3];
        return b * b + d * d + g * g + a * a
      }

      function x(a) {
        var c = a[0],
          b = a[1],
          d = a[2];
        a = a[3];
        return Math.sqrt(c * c + b * b + d *
          d + a * a)
      }

      function q(a) {
        var c = a[0],
          b = a[1],
          d = a[2];
        a = a[3];
        return c * c + b * b + d * d + a * a
      }

      function l(a, c) {
        var b = c[0],
          d = c[1],
          g = c[2];
        c = c[3];
        var f = b * b + d * d + g * g + c * c;
        return 0 < f && (f = 1 / Math.sqrt(f), a[0] = b * f, a[1] = d * f, a[2] = g * f, a[3] = c * f), a
      }
      Object.defineProperty(b, "__esModule", {
        value: !0
      });
      b.forEach = b.sqrLen = b.len = b.sqrDist = b.dist = b.div = b.mul = b.sub = void 0;
      b.create = k;
      b.clone = function (a) {
        var c = new p.ARRAY_TYPE(4);
        return c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c
      };
      b.fromValues = function (a, c, b, d) {
        var g = new p.ARRAY_TYPE(4);
        return g[0] =
          a, g[1] = c, g[2] = b, g[3] = d, g
      };
      b.copy = function (a, c) {
        return a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3], a
      };
      b.set = function (a, c, b, d, f) {
        return a[0] = c, a[1] = b, a[2] = d, a[3] = f, a
      };
      b.add = function (a, c, b) {
        return a[0] = c[0] + b[0], a[1] = c[1] + b[1], a[2] = c[2] + b[2], a[3] = c[3] + b[3], a
      };
      b.subtract = m;
      b.multiply = h;
      b.divide = a;
      b.ceil = function (a, c) {
        return a[0] = Math.ceil(c[0]), a[1] = Math.ceil(c[1]), a[2] = Math.ceil(c[2]), a[3] = Math.ceil(c[3]), a
      };
      b.floor = function (a, c) {
        return a[0] = Math.floor(c[0]), a[1] = Math.floor(c[1]), a[2] = Math.floor(c[2]), a[3] =
          Math.floor(c[3]), a
      };
      b.min = function (a, c, b) {
        return a[0] = Math.min(c[0], b[0]), a[1] = Math.min(c[1], b[1]), a[2] = Math.min(c[2], b[2]), a[3] = Math.min(c[3], b[3]), a
      };
      b.max = function (a, c, b) {
        return a[0] = Math.max(c[0], b[0]), a[1] = Math.max(c[1], b[1]), a[2] = Math.max(c[2], b[2]), a[3] = Math.max(c[3], b[3]), a
      };
      b.round = function (a, c) {
        return a[0] = Math.round(c[0]), a[1] = Math.round(c[1]), a[2] = Math.round(c[2]), a[3] = Math.round(c[3]), a
      };
      b.scale = c;
      b.scaleAndAdd = function (a, c, b, d) {
        return a[0] = c[0] + b[0] * d, a[1] = c[1] + b[1] * d, a[2] = c[2] + b[2] *
          d, a[3] = c[3] + b[3] * d, a
      };
      b.distance = f;
      b.squaredDistance = r;
      b.length = x;
      b.squaredLength = q;
      b.negate = function (a, c) {
        return a[0] = -c[0], a[1] = -c[1], a[2] = -c[2], a[3] = -c[3], a
      };
      b.inverse = function (a, c) {
        return a[0] = 1 / c[0], a[1] = 1 / c[1], a[2] = 1 / c[2], a[3] = 1 / c[3], a
      };
      b.normalize = l;
      b.dot = function (a, c) {
        return a[0] * c[0] + a[1] * c[1] + a[2] * c[2] + a[3] * c[3]
      };
      b.lerp = function (a, c, b, d) {
        var f = c[0],
          g = c[1],
          p = c[2];
        c = c[3];
        return a[0] = f + d * (b[0] - f), a[1] = g + d * (b[1] - g), a[2] = p + d * (b[2] - p), a[3] = c + d * (b[3] - c), a
      };
      b.random = function (a, b) {
        return b = b || 1,
          a[0] = p.RANDOM(), a[1] = p.RANDOM(), a[2] = p.RANDOM(), a[3] = p.RANDOM(), l(a, a), c(a, a, b), a
      };
      b.transformMat4 = function (a, c, b) {
        var d = c[0],
          f = c[1],
          g = c[2];
        c = c[3];
        return a[0] = b[0] * d + b[4] * f + b[8] * g + b[12] * c, a[1] = b[1] * d + b[5] * f + b[9] * g + b[13] * c, a[2] = b[2] * d + b[6] * f + b[10] * g + b[14] * c, a[3] = b[3] * d + b[7] * f + b[11] * g + b[15] * c, a
      };
      b.transformQuat = function (a, c, b) {
        var d = c[0],
          f = c[1],
          g = c[2],
          p = b[0],
          n = b[1],
          l = b[2];
        b = b[3];
        var e = b * d + n * g - l * f,
          r = b * f + l * d - p * g,
          q = b * g + p * f - n * d,
          d = -p * d - n * f - l * g;
        return a[0] = e * b + d * -p + r * -l - q * -n, a[1] = r * b + d * -n + q * -p - e * -l, a[2] =
          q * b + d * -l + e * -n - r * -p, a[3] = c[3], a
      };
      b.str = function (a) {
        return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")"
      };
      b.exactEquals = function (a, c) {
        return a[0] === c[0] && a[1] === c[1] && a[2] === c[2] && a[3] === c[3]
      };
      b.equals = function (a, c) {
        var b = a[0],
          d = a[1],
          f = a[2];
        a = a[3];
        var g = c[0],
          l = c[1],
          n = c[2];
        c = c[3];
        return Math.abs(b - g) <= p.EPSILON * Math.max(1, Math.abs(b), Math.abs(g)) && Math.abs(d - l) <= p.EPSILON * Math.max(1, Math.abs(d), Math.abs(l)) && Math.abs(f - n) <= p.EPSILON * Math.max(1, Math.abs(f), Math.abs(n)) && Math.abs(a - c) <= p.EPSILON * Math.max(1,
          Math.abs(a), Math.abs(c))
      };
      var p = function (a) {
        if (a && a.__esModule) return a;
        var c = {};
        if (null != a)
          for (var b in a) Object.prototype.hasOwnProperty.call(a, b) && (c[b] = a[b]);
        return c.default = a, c
      }(e(0));
      b.sub = m;
      b.mul = h;
      b.div = a;
      b.dist = f;
      b.sqrDist = r;
      b.len = x;
      b.sqrLen = q;
      b.forEach = function () {
        var a = k();
        return function (c, b, d, f, g, p) {
          b || (b = 4);
          d || (d = 0);
          for (f = f ? Math.min(f * b + d, c.length) : c.length; d < f; d += b) a[0] = c[d], a[1] = c[d + 1], a[2] = c[d + 2], a[3] = c[d + 3], g(a, a, p), c[d] = a[0], c[d + 1] = a[1], c[d + 2] = a[2], c[d + 3] = a[3];
          return c
        }
      }()
    }, function (d,
      b, e) {
      function k(a) {
        if (a && a.__esModule) return a;
        var c = {};
        if (null != a)
          for (var b in a) Object.prototype.hasOwnProperty.call(a, b) && (c[b] = a[b]);
        return c.default = a, c
      }
      Object.defineProperty(b, "__esModule", {
        value: !0
      });
      b.vec4 = b.vec3 = b.vec2 = b.quat = b.mat4 = b.mat3 = b.mat2d = b.mat2 = b.glMatrix = void 0;
      d = e(0);
      d = k(d);
      var m = e(5),
        m = k(m),
        h = e(6),
        h = k(h),
        a = e(1),
        a = k(a),
        c = e(7),
        c = k(c),
        f = e(8),
        f = k(f),
        r = e(9),
        r = k(r),
        x = e(2),
        x = k(x);
      e = e(3);
      e = k(e);
      b.glMatrix = d;
      b.mat2 = m;
      b.mat2d = h;
      b.mat3 = a;
      b.mat4 = c;
      b.quat = f;
      b.vec2 = r;
      b.vec3 = x;
      b.vec4 = e
    }, function (d,
      b, e) {
      function k(a, c, b) {
        var d = c[0],
          f = c[1],
          e = c[2];
        c = c[3];
        var l = b[0],
          p = b[1],
          g = b[2];
        b = b[3];
        return a[0] = d * l + e * p, a[1] = f * l + c * p, a[2] = d * g + e * b, a[3] = f * g + c * b, a
      }

      function m(a, c, b) {
        return a[0] = c[0] - b[0], a[1] = c[1] - b[1], a[2] = c[2] - b[2], a[3] = c[3] - b[3], a
      }
      Object.defineProperty(b, "__esModule", {
        value: !0
      });
      b.sub = b.mul = void 0;
      b.create = function () {
        var a = new h.ARRAY_TYPE(4);
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a
      };
      b.clone = function (a) {
        var c = new h.ARRAY_TYPE(4);
        return c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c
      };
      b.copy = function (a,
        c) {
        return a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3], a
      };
      b.identity = function (a) {
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a
      };
      b.fromValues = function (a, c, b, d) {
        var f = new h.ARRAY_TYPE(4);
        return f[0] = a, f[1] = c, f[2] = b, f[3] = d, f
      };
      b.set = function (a, c, b, d, e) {
        return a[0] = c, a[1] = b, a[2] = d, a[3] = e, a
      };
      b.transpose = function (a, c) {
        if (a === c) {
          var b = c[1];
          a[1] = c[2];
          a[2] = b
        } else a[0] = c[0], a[1] = c[2], a[2] = c[1], a[3] = c[3];
        return a
      };
      b.invert = function (a, c) {
        var b = c[0],
          d = c[1],
          e = c[2];
        c = c[3];
        var q = b * c - e * d;
        return q ? (q = 1 / q, a[0] = c * q, a[1] = -d * q, a[2] = -e * q, a[3] = b * q, a) : null
      };
      b.adjoint = function (a, c) {
        var b = c[0];
        return a[0] = c[3], a[1] = -c[1], a[2] = -c[2], a[3] = b, a
      };
      b.determinant = function (a) {
        return a[0] * a[3] - a[2] * a[1]
      };
      b.multiply = k;
      b.rotate = function (a, c, b) {
        var d = c[0],
          f = c[1],
          e = c[2];
        c = c[3];
        var l = Math.sin(b);
        b = Math.cos(b);
        return a[0] = d * b + e * l, a[1] = f * b + c * l, a[2] = d * -l + e * b, a[3] = f * -l + c * b, a
      };
      b.scale = function (a, c, b) {
        var d = c[1],
          f = c[2],
          e = c[3],
          l = b[0];
        b = b[1];
        return a[0] = c[0] * l, a[1] = d * l, a[2] = f * b, a[3] = e * b, a
      };
      b.fromRotation = function (a, c) {
        var b = Math.sin(c);
        c = Math.cos(c);
        return a[0] =
          c, a[1] = b, a[2] = -b, a[3] = c, a
      };
      b.fromScaling = function (a, c) {
        return a[0] = c[0], a[1] = 0, a[2] = 0, a[3] = c[1], a
      };
      b.str = function (a) {
        return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")"
      };
      b.frob = function (a) {
        return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2))
      };
      b.LDU = function (a, c, b, d) {
        return a[2] = d[2] / d[0], b[0] = d[0], b[1] = d[1], b[3] = d[3] - a[2] * b[1], [a, c, b]
      };
      b.add = function (a, c, b) {
        return a[0] = c[0] + b[0], a[1] = c[1] + b[1], a[2] = c[2] + b[2], a[3] = c[3] + b[3], a
      };
      b.subtract = m;
      b.exactEquals = function (a,
        c) {
        return a[0] === c[0] && a[1] === c[1] && a[2] === c[2] && a[3] === c[3]
      };
      b.equals = function (a, c) {
        var b = a[0],
          d = a[1],
          e = a[2];
        a = a[3];
        var q = c[0],
          l = c[1],
          p = c[2];
        c = c[3];
        return Math.abs(b - q) <= h.EPSILON * Math.max(1, Math.abs(b), Math.abs(q)) && Math.abs(d - l) <= h.EPSILON * Math.max(1, Math.abs(d), Math.abs(l)) && Math.abs(e - p) <= h.EPSILON * Math.max(1, Math.abs(e), Math.abs(p)) && Math.abs(a - c) <= h.EPSILON * Math.max(1, Math.abs(a), Math.abs(c))
      };
      b.multiplyScalar = function (a, c, b) {
        return a[0] = c[0] * b, a[1] = c[1] * b, a[2] = c[2] * b, a[3] = c[3] * b, a
      };
      b.multiplyScalarAndAdd =
        function (a, c, b, d) {
          return a[0] = c[0] + b[0] * d, a[1] = c[1] + b[1] * d, a[2] = c[2] + b[2] * d, a[3] = c[3] + b[3] * d, a
        };
      var h = function (a) {
        if (a && a.__esModule) return a;
        var c = {};
        if (null != a)
          for (var b in a) Object.prototype.hasOwnProperty.call(a, b) && (c[b] = a[b]);
        return c.default = a, c
      }(e(0));
      b.mul = k;
      b.sub = m
    }, function (d, b, e) {
      function k(a, c, b) {
        var d = c[0],
          f = c[1],
          e = c[2],
          l = c[3],
          p = c[4];
        c = c[5];
        var g = b[0],
          n = b[1],
          u = b[2],
          h = b[3],
          k = b[4];
        b = b[5];
        return a[0] = d * g + e * n, a[1] = f * g + l * n, a[2] = d * u + e * h, a[3] = f * u + l * h, a[4] = d * k + e * b + p, a[5] = f * k + l * b + c, a
      }

      function m(a,
        c, b) {
        return a[0] = c[0] - b[0], a[1] = c[1] - b[1], a[2] = c[2] - b[2], a[3] = c[3] - b[3], a[4] = c[4] - b[4], a[5] = c[5] - b[5], a
      }
      Object.defineProperty(b, "__esModule", {
        value: !0
      });
      b.sub = b.mul = void 0;
      b.create = function () {
        var a = new h.ARRAY_TYPE(6);
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a[4] = 0, a[5] = 0, a
      };
      b.clone = function (a) {
        var c = new h.ARRAY_TYPE(6);
        return c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c[4] = a[4], c[5] = a[5], c
      };
      b.copy = function (a, c) {
        return a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3], a[4] = c[4], a[5] = c[5], a
      };
      b.identity = function (a) {
        return a[0] =
          1, a[1] = 0, a[2] = 0, a[3] = 1, a[4] = 0, a[5] = 0, a
      };
      b.fromValues = function (a, c, b, d, e, q) {
        var f = new h.ARRAY_TYPE(6);
        return f[0] = a, f[1] = c, f[2] = b, f[3] = d, f[4] = e, f[5] = q, f
      };
      b.set = function (a, c, b, d, e, q, l) {
        return a[0] = c, a[1] = b, a[2] = d, a[3] = e, a[4] = q, a[5] = l, a
      };
      b.invert = function (a, c) {
        var b = c[0],
          d = c[1],
          e = c[2],
          q = c[3],
          l = c[4];
        c = c[5];
        var p = b * q - d * e;
        return p ? (p = 1 / p, a[0] = q * p, a[1] = -d * p, a[2] = -e * p, a[3] = b * p, a[4] = (e * c - q * l) * p, a[5] = (d * l - b * c) * p, a) : null
      };
      b.determinant = function (a) {
        return a[0] * a[3] - a[1] * a[2]
      };
      b.multiply = k;
      b.rotate = function (a,
        c, b) {
        var d = c[0],
          f = c[1],
          e = c[2],
          l = c[3],
          p = c[4];
        c = c[5];
        var g = Math.sin(b);
        b = Math.cos(b);
        return a[0] = d * b + e * g, a[1] = f * b + l * g, a[2] = d * -g + e * b, a[3] = f * -g + l * b, a[4] = p, a[5] = c, a
      };
      b.scale = function (a, c, b) {
        var d = c[1],
          f = c[2],
          e = c[3],
          l = c[4],
          p = c[5],
          g = b[0];
        b = b[1];
        return a[0] = c[0] * g, a[1] = d * g, a[2] = f * b, a[3] = e * b, a[4] = l, a[5] = p, a
      };
      b.translate = function (a, c, b) {
        var d = c[0],
          f = c[1],
          e = c[2],
          l = c[3],
          p = c[4];
        c = c[5];
        var g = b[0];
        b = b[1];
        return a[0] = d, a[1] = f, a[2] = e, a[3] = l, a[4] = d * g + e * b + p, a[5] = f * g + l * b + c, a
      };
      b.fromRotation = function (a, c) {
        var b = Math.sin(c);
        c = Math.cos(c);
        return a[0] = c, a[1] = b, a[2] = -b, a[3] = c, a[4] = 0, a[5] = 0, a
      };
      b.fromScaling = function (a, c) {
        return a[0] = c[0], a[1] = 0, a[2] = 0, a[3] = c[1], a[4] = 0, a[5] = 0, a
      };
      b.fromTranslation = function (a, c) {
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a[4] = c[0], a[5] = c[1], a
      };
      b.str = function (a) {
        return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")"
      };
      b.frob = function (a) {
        return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1)
      };
      b.add = function (a, c, b) {
        return a[0] =
          c[0] + b[0], a[1] = c[1] + b[1], a[2] = c[2] + b[2], a[3] = c[3] + b[3], a[4] = c[4] + b[4], a[5] = c[5] + b[5], a
      };
      b.subtract = m;
      b.multiplyScalar = function (a, c, b) {
        return a[0] = c[0] * b, a[1] = c[1] * b, a[2] = c[2] * b, a[3] = c[3] * b, a[4] = c[4] * b, a[5] = c[5] * b, a
      };
      b.multiplyScalarAndAdd = function (a, c, b, d) {
        return a[0] = c[0] + b[0] * d, a[1] = c[1] + b[1] * d, a[2] = c[2] + b[2] * d, a[3] = c[3] + b[3] * d, a[4] = c[4] + b[4] * d, a[5] = c[5] + b[5] * d, a
      };
      b.exactEquals = function (a, c) {
        return a[0] === c[0] && a[1] === c[1] && a[2] === c[2] && a[3] === c[3] && a[4] === c[4] && a[5] === c[5]
      };
      b.equals = function (a,
        c) {
        var b = a[0],
          d = a[1],
          e = a[2],
          q = a[3],
          l = a[4];
        a = a[5];
        var p = c[0],
          g = c[1],
          n = c[2],
          u = c[3],
          k = c[4];
        c = c[5];
        return Math.abs(b - p) <= h.EPSILON * Math.max(1, Math.abs(b), Math.abs(p)) && Math.abs(d - g) <= h.EPSILON * Math.max(1, Math.abs(d), Math.abs(g)) && Math.abs(e - n) <= h.EPSILON * Math.max(1, Math.abs(e), Math.abs(n)) && Math.abs(q - u) <= h.EPSILON * Math.max(1, Math.abs(q), Math.abs(u)) && Math.abs(l - k) <= h.EPSILON * Math.max(1, Math.abs(l), Math.abs(k)) && Math.abs(a - c) <= h.EPSILON * Math.max(1, Math.abs(a), Math.abs(c))
      };
      var h = function (a) {
        if (a && a.__esModule) return a;
        var c = {};
        if (null != a)
          for (var b in a) Object.prototype.hasOwnProperty.call(a, b) && (c[b] = a[b]);
        return c.default = a, c
      }(e(0));
      b.mul = k;
      b.sub = m
    }, function (d, b, e) {
      function k(a, c, b) {
        var d = c[0],
          f = c[1],
          e = c[2],
          l = c[3],
          p = c[4],
          g = c[5],
          n = c[6],
          u = c[7],
          h = c[8],
          k = c[9],
          m = c[10],
          y = c[11],
          v = c[12],
          w = c[13],
          F = c[14];
        c = c[15];
        var A = b[0],
          B = b[1],
          D = b[2],
          C = b[3];
        return a[0] = A * d + B * p + D * h + C * v, a[1] = A * f + B * g + D * k + C * w, a[2] = A * e + B * n + D * m + C * F, a[3] = A * l + B * u + D * y + C * c, A = b[4], B = b[5], D = b[6], C = b[7], a[4] = A * d + B * p + D * h + C * v, a[5] = A * f + B * g + D * k + C * w, a[6] = A * e + B * n + D * m +
          C * F, a[7] = A * l + B * u + D * y + C * c, A = b[8], B = b[9], D = b[10], C = b[11], a[8] = A * d + B * p + D * h + C * v, a[9] = A * f + B * g + D * k + C * w, a[10] = A * e + B * n + D * m + C * F, a[11] = A * l + B * u + D * y + C * c, A = b[12], B = b[13], D = b[14], C = b[15], a[12] = A * d + B * p + D * h + C * v, a[13] = A * f + B * g + D * k + C * w, a[14] = A * e + B * n + D * m + C * F, a[15] = A * l + B * u + D * y + C * c, a
      }

      function m(a, c, b) {
        return a[0] = c[0] - b[0], a[1] = c[1] - b[1], a[2] = c[2] - b[2], a[3] = c[3] - b[3], a[4] = c[4] - b[4], a[5] = c[5] - b[5], a[6] = c[6] - b[6], a[7] = c[7] - b[7], a[8] = c[8] - b[8], a[9] = c[9] - b[9], a[10] = c[10] - b[10], a[11] = c[11] - b[11], a[12] = c[12] - b[12], a[13] = c[13] -
          b[13], a[14] = c[14] - b[14], a[15] = c[15] - b[15], a
      }
      Object.defineProperty(b, "__esModule", {
        value: !0
      });
      b.sub = b.mul = void 0;
      b.create = function () {
        var a = new h.ARRAY_TYPE(16);
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
      };
      b.clone = function (a) {
        var c = new h.ARRAY_TYPE(16);
        return c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c[4] = a[4], c[5] = a[5], c[6] = a[6], c[7] = a[7], c[8] = a[8], c[9] = a[9], c[10] = a[10], c[11] = a[11], c[12] = a[12], c[13] = a[13], c[14] = a[14],
          c[15] = a[15], c
      };
      b.copy = function (a, c) {
        return a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3], a[4] = c[4], a[5] = c[5], a[6] = c[6], a[7] = c[7], a[8] = c[8], a[9] = c[9], a[10] = c[10], a[11] = c[11], a[12] = c[12], a[13] = c[13], a[14] = c[14], a[15] = c[15], a
      };
      b.fromValues = function (a, c, b, d, e, q, l, p, g, n, u, k, m, t, y, v) {
        var f = new h.ARRAY_TYPE(16);
        return f[0] = a, f[1] = c, f[2] = b, f[3] = d, f[4] = e, f[5] = q, f[6] = l, f[7] = p, f[8] = g, f[9] = n, f[10] = u, f[11] = k, f[12] = m, f[13] = t, f[14] = y, f[15] = v, f
      };
      b.set = function (a, c, b, d, e, q, l, p, g, n, h, k, m, t, y, v, w) {
        return a[0] = c, a[1] = b, a[2] =
          d, a[3] = e, a[4] = q, a[5] = l, a[6] = p, a[7] = g, a[8] = n, a[9] = h, a[10] = k, a[11] = m, a[12] = t, a[13] = y, a[14] = v, a[15] = w, a
      };
      b.identity = function (a) {
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
      };
      b.transpose = function (a, c) {
        if (a === c) {
          var b = c[1],
            d = c[2],
            e = c[3],
            q = c[6],
            l = c[7],
            p = c[11];
          a[1] = c[4];
          a[2] = c[8];
          a[3] = c[12];
          a[4] = b;
          a[6] = c[9];
          a[7] = c[13];
          a[8] = d;
          a[9] = q;
          a[11] = c[14];
          a[12] = e;
          a[13] = l;
          a[14] = p
        } else a[0] = c[0], a[1] = c[4], a[2] = c[8], a[3] = c[12], a[4] = c[1],
          a[5] = c[5], a[6] = c[9], a[7] = c[13], a[8] = c[2], a[9] = c[6], a[10] = c[10], a[11] = c[14], a[12] = c[3], a[13] = c[7], a[14] = c[11], a[15] = c[15];
        return a
      };
      b.invert = function (a, c) {
        var b = c[0],
          d = c[1],
          e = c[2],
          q = c[3],
          l = c[4],
          p = c[5],
          g = c[6],
          n = c[7],
          h = c[8],
          k = c[9],
          m = c[10],
          t = c[11],
          y = c[12],
          v = c[13],
          w = c[14];
        c = c[15];
        var F = b * p - d * l,
          A = b * g - e * l,
          B = b * n - q * l,
          D = d * g - e * p,
          C = d * n - q * p,
          H = e * n - q * g,
          I = h * v - k * y,
          J = h * w - m * y,
          K = h * c - t * y,
          M = k * w - m * v,
          N = k * c - t * v,
          O = m * c - t * w,
          G = F * O - A * N + B * M + D * K - C * J + H * I;
        return G ? (G = 1 / G, a[0] = (p * O - g * N + n * M) * G, a[1] = (e * N - d * O - q * M) * G, a[2] = (v * H - w * C + c * D) *
          G, a[3] = (m * C - k * H - t * D) * G, a[4] = (g * K - l * O - n * J) * G, a[5] = (b * O - e * K + q * J) * G, a[6] = (w * B - y * H - c * A) * G, a[7] = (h * H - m * B + t * A) * G, a[8] = (l * N - p * K + n * I) * G, a[9] = (d * K - b * N - q * I) * G, a[10] = (y * C - v * B + c * F) * G, a[11] = (k * B - h * C - t * F) * G, a[12] = (p * J - l * M - g * I) * G, a[13] = (b * M - d * J + e * I) * G, a[14] = (v * A - y * D - w * F) * G, a[15] = (h * D - k * A + m * F) * G, a) : null
      };
      b.adjoint = function (a, c) {
        var b = c[0],
          d = c[1],
          e = c[2],
          h = c[3],
          l = c[4],
          p = c[5],
          g = c[6],
          n = c[7],
          k = c[8],
          m = c[9],
          z = c[10],
          t = c[11],
          y = c[12],
          v = c[13],
          w = c[14];
        c = c[15];
        return a[0] = p * (z * c - t * w) - m * (g * c - n * w) + v * (g * t - n * z), a[1] = -(d * (z * c - t * w) -
            m * (e * c - h * w) + v * (e * t - h * z)), a[2] = d * (g * c - n * w) - p * (e * c - h * w) + v * (e * n - h * g), a[3] = -(d * (g * t - n * z) - p * (e * t - h * z) + m * (e * n - h * g)), a[4] = -(l * (z * c - t * w) - k * (g * c - n * w) + y * (g * t - n * z)), a[5] = b * (z * c - t * w) - k * (e * c - h * w) + y * (e * t - h * z), a[6] = -(b * (g * c - n * w) - l * (e * c - h * w) + y * (e * n - h * g)), a[7] = b * (g * t - n * z) - l * (e * t - h * z) + k * (e * n - h * g), a[8] = l * (m * c - t * v) - k * (p * c - n * v) + y * (p * t - n * m), a[9] = -(b * (m * c - t * v) - k * (d * c - h * v) + y * (d * t - h * m)), a[10] = b * (p * c - n * v) - l * (d * c - h * v) + y * (d * n - h * p), a[11] = -(b * (p * t - n * m) - l * (d * t - h * m) + k * (d * n - h * p)), a[12] = -(l * (m * w - z * v) - k * (p * w - g * v) + y * (p * z - g * m)), a[13] =
          b * (m * w - z * v) - k * (d * w - e * v) + y * (d * z - e * m), a[14] = -(b * (p * w - g * v) - l * (d * w - e * v) + y * (d * g - e * p)), a[15] = b * (p * z - g * m) - l * (d * z - e * m) + k * (d * g - e * p), a
      };
      b.determinant = function (a) {
        var c = a[0],
          b = a[1],
          d = a[2],
          e = a[3],
          h = a[4],
          l = a[5],
          p = a[6],
          g = a[7],
          n = a[8],
          k = a[9],
          m = a[10],
          z = a[11],
          t = a[12],
          y = a[13],
          v = a[14];
        a = a[15];
        return (c * l - b * h) * (m * a - z * v) - (c * p - d * h) * (k * a - z * y) + (c * g - e * h) * (k * v - m * y) + (b * p - d * l) * (n * a - z * t) - (b * g - e * l) * (n * v - m * t) + (d * g - e * p) * (n * y - k * t)
      };
      b.multiply = k;
      b.translate = function (a, c, b) {
        var d = b[0],
          f = b[1];
        b = b[2];
        var e = void 0,
          l = void 0,
          p = void 0,
          g = void 0,
          n = void 0,
          h = void 0,
          k = void 0,
          m = void 0,
          t = void 0,
          y = void 0,
          v = void 0,
          w = void 0;
        return c === a ? (a[12] = c[0] * d + c[4] * f + c[8] * b + c[12], a[13] = c[1] * d + c[5] * f + c[9] * b + c[13], a[14] = c[2] * d + c[6] * f + c[10] * b + c[14], a[15] = c[3] * d + c[7] * f + c[11] * b + c[15]) : (e = c[0], l = c[1], p = c[2], g = c[3], n = c[4], h = c[5], k = c[6], m = c[7], t = c[8], y = c[9], v = c[10], w = c[11], a[0] = e, a[1] = l, a[2] = p, a[3] = g, a[4] = n, a[5] = h, a[6] = k, a[7] = m, a[8] = t, a[9] = y, a[10] = v, a[11] = w, a[12] = e * d + n * f + t * b + c[12], a[13] = l * d + h * f + y * b + c[13], a[14] = p * d + k * f + v * b + c[14], a[15] = g * d + m * f + w * b + c[15]), a
      };
      b.scale =
        function (a, c, b) {
          var d = b[0],
            e = b[1];
          b = b[2];
          return a[0] = c[0] * d, a[1] = c[1] * d, a[2] = c[2] * d, a[3] = c[3] * d, a[4] = c[4] * e, a[5] = c[5] * e, a[6] = c[6] * e, a[7] = c[7] * e, a[8] = c[8] * b, a[9] = c[9] * b, a[10] = c[10] * b, a[11] = c[11] * b, a[12] = c[12], a[13] = c[13], a[14] = c[14], a[15] = c[15], a
        };
      b.rotate = function (a, c, b, d) {
        var e = d[0],
          f = d[1];
        d = d[2];
        var l = Math.sqrt(e * e + f * f + d * d),
          p = void 0,
          g = void 0,
          n = void 0,
          k = void 0,
          m = void 0,
          r = void 0,
          t = void 0,
          y = void 0,
          v = void 0,
          w = void 0,
          F = void 0,
          A = void 0,
          B = void 0,
          D = void 0,
          C = void 0,
          H = void 0,
          I = void 0,
          J = void 0,
          K = void 0,
          M =
          void 0,
          N = void 0,
          O = void 0,
          G = void 0,
          Q = void 0;
        return Math.abs(l) < h.EPSILON ? null : (l = 1 / l, e *= l, f *= l, d *= l, p = Math.sin(b), g = Math.cos(b), n = 1 - g, k = c[0], m = c[1], r = c[2], t = c[3], y = c[4], v = c[5], w = c[6], F = c[7], A = c[8], B = c[9], D = c[10], C = c[11], H = e * e * n + g, I = f * e * n + d * p, J = d * e * n - f * p, K = e * f * n - d * p, M = f * f * n + g, N = d * f * n + e * p, O = e * d * n + f * p, G = f * d * n - e * p, Q = d * d * n + g, a[0] = k * H + y * I + A * J, a[1] = m * H + v * I + B * J, a[2] = r * H + w * I + D * J, a[3] = t * H + F * I + C * J, a[4] = k * K + y * M + A * N, a[5] = m * K + v * M + B * N, a[6] = r * K + w * M + D * N, a[7] = t * K + F * M + C * N, a[8] = k * O + y * G + A * Q, a[9] = m * O + v * G + B * Q, a[10] = r * O +
          w * G + D * Q, a[11] = t * O + F * G + C * Q, c !== a && (a[12] = c[12], a[13] = c[13], a[14] = c[14], a[15] = c[15]), a)
      };
      b.rotateX = function (a, c, b) {
        var d = Math.sin(b);
        b = Math.cos(b);
        var e = c[4],
          f = c[5],
          l = c[6],
          p = c[7],
          g = c[8],
          n = c[9],
          h = c[10],
          k = c[11];
        return c !== a && (a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3], a[12] = c[12], a[13] = c[13], a[14] = c[14], a[15] = c[15]), a[4] = e * b + g * d, a[5] = f * b + n * d, a[6] = l * b + h * d, a[7] = p * b + k * d, a[8] = g * b - e * d, a[9] = n * b - f * d, a[10] = h * b - l * d, a[11] = k * b - p * d, a
      };
      b.rotateY = function (a, c, b) {
        var d = Math.sin(b);
        b = Math.cos(b);
        var e = c[0],
          f = c[1],
          l = c[2],
          p = c[3],
          g = c[8],
          n = c[9],
          h = c[10],
          k = c[11];
        return c !== a && (a[4] = c[4], a[5] = c[5], a[6] = c[6], a[7] = c[7], a[12] = c[12], a[13] = c[13], a[14] = c[14], a[15] = c[15]), a[0] = e * b - g * d, a[1] = f * b - n * d, a[2] = l * b - h * d, a[3] = p * b - k * d, a[8] = e * d + g * b, a[9] = f * d + n * b, a[10] = l * d + h * b, a[11] = p * d + k * b, a
      };
      b.rotateZ = function (a, c, b) {
        var d = Math.sin(b);
        b = Math.cos(b);
        var e = c[0],
          f = c[1],
          l = c[2],
          p = c[3],
          g = c[4],
          n = c[5],
          h = c[6],
          k = c[7];
        return c !== a && (a[8] = c[8], a[9] = c[9], a[10] = c[10], a[11] = c[11], a[12] = c[12], a[13] = c[13], a[14] = c[14], a[15] = c[15]), a[0] = e * b + g * d, a[1] = f * b + n * d,
          a[2] = l * b + h * d, a[3] = p * b + k * d, a[4] = g * b - e * d, a[5] = n * b - f * d, a[6] = h * b - l * d, a[7] = k * b - p * d, a
      };
      b.fromTranslation = function (a, c) {
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = c[0], a[13] = c[1], a[14] = c[2], a[15] = 1, a
      };
      b.fromScaling = function (a, c) {
        return a[0] = c[0], a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = c[1], a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = c[2], a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
      };
      b.fromRotation = function (a, c, b) {
        var d = b[0],
          e = b[1];
        b = b[2];
        var f = Math.sqrt(d * d + e * e + b * b),
          l =
          void 0,
          p = void 0,
          g = void 0;
        return Math.abs(f) < h.EPSILON ? null : (f = 1 / f, d *= f, e *= f, b *= f, l = Math.sin(c), p = Math.cos(c), g = 1 - p, a[0] = d * d * g + p, a[1] = e * d * g + b * l, a[2] = b * d * g - e * l, a[3] = 0, a[4] = d * e * g - b * l, a[5] = e * e * g + p, a[6] = b * e * g + d * l, a[7] = 0, a[8] = d * b * g + e * l, a[9] = e * b * g - d * l, a[10] = b * b * g + p, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a)
      };
      b.fromXRotation = function (a, c) {
        var b = Math.sin(c);
        c = Math.cos(c);
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = c, a[6] = b, a[7] = 0, a[8] = 0, a[9] = -b, a[10] = c, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
      };
      b.fromYRotation =
        function (a, c) {
          var b = Math.sin(c);
          c = Math.cos(c);
          return a[0] = c, a[1] = 0, a[2] = -b, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = b, a[9] = 0, a[10] = c, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
        };
      b.fromZRotation = function (a, c) {
        var b = Math.sin(c);
        c = Math.cos(c);
        return a[0] = c, a[1] = b, a[2] = 0, a[3] = 0, a[4] = -b, a[5] = c, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
      };
      b.fromRotationTranslation = function (a, c, b) {
        var d = c[0],
          e = c[1],
          f = c[2],
          l = c[3],
          p = d + d,
          g = e + e,
          n = f + f;
        c = d * p;
        var h = d * g,
          d = d * n,
          k = e * g,
          e = e * n,
          f = f * n,
          p = l *
          p,
          g = l * g,
          l = l * n;
        return a[0] = 1 - (k + f), a[1] = h + l, a[2] = d - g, a[3] = 0, a[4] = h - l, a[5] = 1 - (c + f), a[6] = e + p, a[7] = 0, a[8] = d + g, a[9] = e - p, a[10] = 1 - (c + k), a[11] = 0, a[12] = b[0], a[13] = b[1], a[14] = b[2], a[15] = 1, a
      };
      b.getTranslation = function (a, c) {
        return a[0] = c[12], a[1] = c[13], a[2] = c[14], a
      };
      b.getScaling = function (a, c) {
        var b = c[0],
          d = c[1],
          e = c[2],
          h = c[4],
          l = c[5],
          p = c[6],
          g = c[8],
          n = c[9];
        c = c[10];
        return a[0] = Math.sqrt(b * b + d * d + e * e), a[1] = Math.sqrt(h * h + l * l + p * p), a[2] = Math.sqrt(g * g + n * n + c * c), a
      };
      b.getRotation = function (a, c) {
        var b = c[0] + c[5] + c[10],
          d = 0;
        return 0 <
          b ? (d = 2 * Math.sqrt(b + 1), a[3] = .25 * d, a[0] = (c[6] - c[9]) / d, a[1] = (c[8] - c[2]) / d, a[2] = (c[1] - c[4]) / d) : c[0] > c[5] & c[0] > c[10] ? (d = 2 * Math.sqrt(1 + c[0] - c[5] - c[10]), a[3] = (c[6] - c[9]) / d, a[0] = .25 * d, a[1] = (c[1] + c[4]) / d, a[2] = (c[8] + c[2]) / d) : c[5] > c[10] ? (d = 2 * Math.sqrt(1 + c[5] - c[0] - c[10]), a[3] = (c[8] - c[2]) / d, a[0] = (c[1] + c[4]) / d, a[1] = .25 * d, a[2] = (c[6] + c[9]) / d) : (d = 2 * Math.sqrt(1 + c[10] - c[0] - c[5]), a[3] = (c[1] - c[4]) / d, a[0] = (c[8] + c[2]) / d, a[1] = (c[6] + c[9]) / d, a[2] = .25 * d), a
      };
      b.fromRotationTranslationScale = function (a, b, d, e) {
        var c = b[0],
          f = b[1],
          l = b[2],
          p = b[3],
          g = c + c,
          n = f + f,
          h = l + l;
        b = c * g;
        var k = c * n,
          c = c * h,
          m = f * n,
          f = f * h,
          l = l * h,
          g = p * g,
          n = p * n,
          p = p * h,
          h = e[0],
          r = e[1];
        e = e[2];
        return a[0] = (1 - (m + l)) * h, a[1] = (k + p) * h, a[2] = (c - n) * h, a[3] = 0, a[4] = (k - p) * r, a[5] = (1 - (b + l)) * r, a[6] = (f + g) * r, a[7] = 0, a[8] = (c + n) * e, a[9] = (f - g) * e, a[10] = (1 - (b + m)) * e, a[11] = 0, a[12] = d[0], a[13] = d[1], a[14] = d[2], a[15] = 1, a
      };
      b.fromRotationTranslationScaleOrigin = function (a, b, d, e, h) {
        var c = b[0],
          l = b[1],
          p = b[2],
          g = b[3],
          f = c + c,
          k = l + l,
          m = p + p;
        b = c * f;
        var r = c * k,
          c = c * m,
          t = l * k,
          l = l * m,
          p = p * m,
          f = g * f,
          k = g * k,
          g = g * m,
          m = e[0],
          x = e[1];
        e = e[2];
        var v =
          h[0],
          w = h[1];
        h = h[2];
        return a[0] = (1 - (t + p)) * m, a[1] = (r + g) * m, a[2] = (c - k) * m, a[3] = 0, a[4] = (r - g) * x, a[5] = (1 - (b + p)) * x, a[6] = (l + f) * x, a[7] = 0, a[8] = (c + k) * e, a[9] = (l - f) * e, a[10] = (1 - (b + t)) * e, a[11] = 0, a[12] = d[0] + v - (a[0] * v + a[4] * w + a[8] * h), a[13] = d[1] + w - (a[1] * v + a[5] * w + a[9] * h), a[14] = d[2] + h - (a[2] * v + a[6] * w + a[10] * h), a[15] = 1, a
      };
      b.fromQuat = function (a, b) {
        var c = b[0],
          d = b[1],
          e = b[2];
        b = b[3];
        var h = c + c,
          l = d + d,
          p = e + e,
          c = c * h,
          g = d * h,
          d = d * l,
          n = e * h,
          k = e * l,
          e = e * p,
          h = b * h,
          l = b * l;
        b *= p;
        return a[0] = 1 - d - e, a[1] = g + b, a[2] = n - l, a[3] = 0, a[4] = g - b, a[5] = 1 - c - e, a[6] = k + h,
          a[7] = 0, a[8] = n + l, a[9] = k - h, a[10] = 1 - c - d, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
      };
      b.frustum = function (a, b, d, e, h, k, l) {
        var c = 1 / (d - b),
          g = 1 / (h - e),
          f = 1 / (k - l);
        return a[0] = 2 * k * c, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 * k * g, a[6] = 0, a[7] = 0, a[8] = (d + b) * c, a[9] = (h + e) * g, a[10] = (l + k) * f, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = l * k * 2 * f, a[15] = 0, a
      };
      b.perspective = function (a, b, d, e, h) {
        b = 1 / Math.tan(b / 2);
        var c = 1 / (e - h);
        return a[0] = b / d, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = b, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = (h + e) * c, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = 2 *
          h * e * c, a[15] = 0, a
      };
      b.perspectiveFromFieldOfView = function (a, b, d, e) {
        var c = Math.tan(b.upDegrees * Math.PI / 180),
          f = Math.tan(b.downDegrees * Math.PI / 180),
          l = Math.tan(b.leftDegrees * Math.PI / 180);
        b = Math.tan(b.rightDegrees * Math.PI / 180);
        var p = 2 / (l + b),
          g = 2 / (c + f);
        return a[0] = p, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = g, a[6] = 0, a[7] = 0, a[8] = -(l - b) * p * .5, a[9] = (c - f) * g * .5, a[10] = e / (d - e), a[11] = -1, a[12] = 0, a[13] = 0, a[14] = e * d / (d - e), a[15] = 0, a
      };
      b.ortho = function (a, b, d, e, h, k, l) {
        var c = 1 / (b - d),
          g = 1 / (e - h),
          f = 1 / (k - l);
        return a[0] = -2 * c, a[1] = 0, a[2] = 0,
          a[3] = 0, a[4] = 0, a[5] = -2 * g, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 2 * f, a[11] = 0, a[12] = (b + d) * c, a[13] = (h + e) * g, a[14] = (l + k) * f, a[15] = 1, a
      };
      b.lookAt = function (a, b, d, e) {
        var c = void 0,
          f = void 0,
          l = void 0,
          p = void 0,
          g = void 0,
          n = void 0,
          k = void 0,
          m = void 0,
          r = void 0,
          t = void 0,
          y = b[0],
          v = b[1];
        b = b[2];
        var w = e[0],
          F = e[1];
        e = e[2];
        var A = d[0],
          B = d[1];
        d = d[2];
        return Math.abs(y - A) < h.EPSILON && Math.abs(v - B) < h.EPSILON && Math.abs(b - d) < h.EPSILON ? mat4.identity(a) : (k = y - A, m = v - B, r = b - d, t = 1 / Math.sqrt(k * k + m * m + r * r), k *= t, m *= t, r *= t, c = F * r - e * m, f = e * k - w * r, l = w * m - F *
          k, t = Math.sqrt(c * c + f * f + l * l), t ? (t = 1 / t, c *= t, f *= t, l *= t) : (c = 0, f = 0, l = 0), p = m * l - r * f, g = r * c - k * l, n = k * f - m * c, t = Math.sqrt(p * p + g * g + n * n), t ? (t = 1 / t, p *= t, g *= t, n *= t) : (p = 0, g = 0, n = 0), a[0] = c, a[1] = p, a[2] = k, a[3] = 0, a[4] = f, a[5] = g, a[6] = m, a[7] = 0, a[8] = l, a[9] = n, a[10] = r, a[11] = 0, a[12] = -(c * y + f * v + l * b), a[13] = -(p * y + g * v + n * b), a[14] = -(k * y + m * v + r * b), a[15] = 1, a)
      };
      b.targetTo = function (a, b, d, e) {
        var c = b[0],
          f = b[1];
        b = b[2];
        var l = e[0],
          p = e[1],
          g = e[2];
        e = c - d[0];
        var n = f - d[1];
        d = b - d[2];
        var h = e * e + n * n + d * d;
        0 < h && (h = 1 / Math.sqrt(h), e *= h, n *= h, d *= h);
        h = p * d - g * n;
        g = g *
          e - l * d;
        l = l * n - p * e;
        return a[0] = h, a[1] = g, a[2] = l, a[3] = 0, a[4] = n * l - d * g, a[5] = d * h - e * l, a[6] = e * g - n * h, a[7] = 0, a[8] = e, a[9] = n, a[10] = d, a[11] = 0, a[12] = c, a[13] = f, a[14] = b, a[15] = 1, a
      };
      b.str = function (a) {
        return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")"
      };
      b.frob = function (a) {
        return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6],
          2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2))
      };
      b.add = function (a, b, d) {
        return a[0] = b[0] + d[0], a[1] = b[1] + d[1], a[2] = b[2] + d[2], a[3] = b[3] + d[3], a[4] = b[4] + d[4], a[5] = b[5] + d[5], a[6] = b[6] + d[6], a[7] = b[7] + d[7], a[8] = b[8] + d[8], a[9] = b[9] + d[9], a[10] = b[10] + d[10], a[11] = b[11] + d[11], a[12] = b[12] + d[12], a[13] = b[13] + d[13], a[14] = b[14] + d[14], a[15] = b[15] + d[15], a
      };
      b.subtract = m;
      b.multiplyScalar = function (a, b, d) {
        return a[0] =
          b[0] * d, a[1] = b[1] * d, a[2] = b[2] * d, a[3] = b[3] * d, a[4] = b[4] * d, a[5] = b[5] * d, a[6] = b[6] * d, a[7] = b[7] * d, a[8] = b[8] * d, a[9] = b[9] * d, a[10] = b[10] * d, a[11] = b[11] * d, a[12] = b[12] * d, a[13] = b[13] * d, a[14] = b[14] * d, a[15] = b[15] * d, a
      };
      b.multiplyScalarAndAdd = function (a, b, d, e) {
        return a[0] = b[0] + d[0] * e, a[1] = b[1] + d[1] * e, a[2] = b[2] + d[2] * e, a[3] = b[3] + d[3] * e, a[4] = b[4] + d[4] * e, a[5] = b[5] + d[5] * e, a[6] = b[6] + d[6] * e, a[7] = b[7] + d[7] * e, a[8] = b[8] + d[8] * e, a[9] = b[9] + d[9] * e, a[10] = b[10] + d[10] * e, a[11] = b[11] + d[11] * e, a[12] = b[12] + d[12] * e, a[13] = b[13] + d[13] * e, a[14] =
          b[14] + d[14] * e, a[15] = b[15] + d[15] * e, a
      };
      b.exactEquals = function (a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15]
      };
      b.equals = function (a, b) {
        var c = a[0],
          d = a[1],
          e = a[2],
          k = a[3],
          l = a[4],
          p = a[5],
          g = a[6],
          n = a[7],
          m = a[8],
          E = a[9],
          z = a[10],
          t = a[11],
          y = a[12],
          v = a[13],
          w = a[14];
        a = a[15];
        var F = b[0],
          A = b[1],
          B = b[2],
          D = b[3],
          C = b[4],
          H = b[5],
          I = b[6],
          J = b[7],
          K = b[8],
          M = b[9],
          N = b[10],
          O = b[11],
          G = b[12],
          Q = b[13],
          P = b[14];
        b = b[15];
        return Math.abs(c - F) <= h.EPSILON * Math.max(1, Math.abs(c), Math.abs(F)) && Math.abs(d - A) <= h.EPSILON * Math.max(1, Math.abs(d), Math.abs(A)) && Math.abs(e - B) <= h.EPSILON * Math.max(1, Math.abs(e), Math.abs(B)) && Math.abs(k - D) <= h.EPSILON * Math.max(1, Math.abs(k), Math.abs(D)) && Math.abs(l - C) <= h.EPSILON * Math.max(1, Math.abs(l), Math.abs(C)) && Math.abs(p - H) <= h.EPSILON * Math.max(1, Math.abs(p), Math.abs(H)) && Math.abs(g - I) <= h.EPSILON * Math.max(1, Math.abs(g), Math.abs(I)) && Math.abs(n -
            J) <= h.EPSILON * Math.max(1, Math.abs(n), Math.abs(J)) && Math.abs(m - K) <= h.EPSILON * Math.max(1, Math.abs(m), Math.abs(K)) && Math.abs(E - M) <= h.EPSILON * Math.max(1, Math.abs(E), Math.abs(M)) && Math.abs(z - N) <= h.EPSILON * Math.max(1, Math.abs(z), Math.abs(N)) && Math.abs(t - O) <= h.EPSILON * Math.max(1, Math.abs(t), Math.abs(O)) && Math.abs(y - G) <= h.EPSILON * Math.max(1, Math.abs(y), Math.abs(G)) && Math.abs(v - Q) <= h.EPSILON * Math.max(1, Math.abs(v), Math.abs(Q)) && Math.abs(w - P) <= h.EPSILON * Math.max(1, Math.abs(w), Math.abs(P)) && Math.abs(a - b) <= h.EPSILON *
          Math.max(1, Math.abs(a), Math.abs(b))
      };
      var h = function (a) {
        if (a && a.__esModule) return a;
        var b = {};
        if (null != a)
          for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && (b[d] = a[d]);
        return b.default = a, b
      }(e(0));
      b.mul = k;
      b.sub = m
    }, function (d, b, e) {
      function k(a) {
        if (a && a.__esModule) return a;
        var b = {};
        if (null != a)
          for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
        return b.default = a, b
      }

      function m() {
        var a = new r.ARRAY_TYPE(4);
        return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a
      }

      function h(a, b, c) {
        c *= .5;
        var d = Math.sin(c);
        return a[0] = d * b[0], a[1] = d * b[1], a[2] = d * b[2], a[3] = Math.cos(c), a
      }

      function a(a, b, c) {
        var d = b[0],
          e = b[1],
          g = b[2];
        b = b[3];
        var p = c[0],
          l = c[1],
          n = c[2];
        c = c[3];
        return a[0] = d * c + b * p + e * n - g * l, a[1] = e * c + b * l + g * p - d * n, a[2] = g * c + b * n + d * l - e * p, a[3] = b * c - d * p - e * l - g * n, a
      }

      function c(a, b, c, d) {
        var e = b[0],
          g = b[1],
          p = b[2];
        b = b[3];
        var l = c[0],
          n = c[1],
          f = c[2];
        c = c[3];
        var h = void 0,
          k = void 0,
          m = void 0,
          u = void 0,
          q = void 0;
        return k = e * l + g * n + p * f + b * c, 0 > k && (k = -k, l = -l, n = -n, f = -f, c = -c), 1E-6 < 1 - k ? (h = Math.acos(k), m = Math.sin(h), u = Math.sin((1 - d) * h) / m, q = Math.sin(d *
          h) / m) : (u = 1 - d, q = d), a[0] = u * e + q * l, a[1] = u * g + q * n, a[2] = u * p + q * f, a[3] = u * b + q * c, a
      }

      function f(a, b) {
        var c = b[0] + b[4] + b[8];
        if (0 < c) c = Math.sqrt(c + 1), a[3] = .5 * c, c = .5 / c, a[0] = (b[5] - b[7]) * c, a[1] = (b[6] - b[2]) * c, a[2] = (b[1] - b[3]) * c;
        else {
          var d = 0;
          b[4] > b[0] && (d = 1);
          b[8] > b[3 * d + d] && (d = 2);
          var e = (d + 1) % 3,
            g = (d + 2) % 3,
            c = Math.sqrt(b[3 * d + d] - b[3 * e + e] - b[3 * g + g] + 1);
          a[d] = .5 * c;
          c = .5 / c;
          a[3] = (b[3 * e + g] - b[3 * g + e]) * c;
          a[e] = (b[3 * e + d] + b[3 * d + e]) * c;
          a[g] = (b[3 * g + d] + b[3 * d + g]) * c
        }
        return a
      }
      Object.defineProperty(b, "__esModule", {
        value: !0
      });
      b.setAxes = b.sqlerp = b.rotationTo =
        b.equals = b.exactEquals = b.normalize = b.sqrLen = b.squaredLength = b.len = b.length = b.lerp = b.dot = b.scale = b.mul = b.add = b.set = b.copy = b.fromValues = b.clone = void 0;
      b.create = m;
      b.identity = function (a) {
        return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a
      };
      b.setAxisAngle = h;
      b.getAxisAngle = function (a, b) {
        var c = 2 * Math.acos(b[3]),
          d = Math.sin(c / 2);
        return 0 != d ? (a[0] = b[0] / d, a[1] = b[1] / d, a[2] = b[2] / d) : (a[0] = 1, a[1] = 0, a[2] = 0), c
      };
      b.multiply = a;
      b.rotateX = function (a, b, c) {
        c *= .5;
        var d = b[0],
          e = b[1],
          g = b[2];
        b = b[3];
        var p = Math.sin(c);
        c = Math.cos(c);
        return a[0] =
          d * c + b * p, a[1] = e * c + g * p, a[2] = g * c - e * p, a[3] = b * c - d * p, a
      };
      b.rotateY = function (a, b, c) {
        c *= .5;
        var d = b[0],
          e = b[1],
          g = b[2];
        b = b[3];
        var l = Math.sin(c);
        c = Math.cos(c);
        return a[0] = d * c - g * l, a[1] = e * c + b * l, a[2] = g * c + d * l, a[3] = b * c - e * l, a
      };
      b.rotateZ = function (a, b, c) {
        c *= .5;
        var d = b[0],
          e = b[1],
          g = b[2];
        b = b[3];
        var l = Math.sin(c);
        c = Math.cos(c);
        return a[0] = d * c + e * l, a[1] = e * c - d * l, a[2] = g * c + b * l, a[3] = b * c - g * l, a
      };
      b.calculateW = function (a, b) {
        var c = b[0],
          d = b[1];
        b = b[2];
        return a[0] = c, a[1] = d, a[2] = b, a[3] = Math.sqrt(Math.abs(1 - c * c - d * d - b * b)), a
      };
      b.slerp = c;
      b.invert =
        function (a, b) {
          var c = b[0],
            d = b[1],
            e = b[2];
          b = b[3];
          var g = c * c + d * d + e * e + b * b,
            g = g ? 1 / g : 0;
          return a[0] = -c * g, a[1] = -d * g, a[2] = -e * g, a[3] = b * g, a
        };
      b.conjugate = function (a, b) {
        return a[0] = -b[0], a[1] = -b[1], a[2] = -b[2], a[3] = b[3], a
      };
      b.fromMat3 = f;
      b.fromEuler = function (a, b, c, d) {
        var e = .5 * Math.PI / 180;
        b *= e;
        c *= e;
        d *= e;
        e = Math.sin(b);
        b = Math.cos(b);
        var l = Math.sin(c);
        c = Math.cos(c);
        var g = Math.sin(d);
        d = Math.cos(d);
        return a[0] = e * c * d - b * l * g, a[1] = b * l * d + e * c * g, a[2] = b * c * g - e * l * d, a[3] = b * c * d + e * l * g, a
      };
      b.str = function (a) {
        return "quat(" + a[0] + ", " + a[1] +
          ", " + a[2] + ", " + a[3] + ")"
      };
      d = e(0);
      var r = k(d);
      d = e(1);
      var x = k(d);
      d = e(2);
      var q = k(d);
      e = e(3);
      e = k(e);
      d = (b.clone = e.clone, b.fromValues = e.fromValues, b.copy = e.copy, b.set = e.set, b.add = e.add, b.mul = a, b.scale = e.scale, b.dot = e.dot, b.lerp = e.lerp, b.length = e.length);
      d = (b.len = d, b.squaredLength = e.squaredLength);
      var l = (b.sqrLen = d, b.normalize = e.normalize);
      b.exactEquals = e.exactEquals;
      b.equals = e.equals;
      b.rotationTo = function () {
        var a = q.create(),
          b = q.fromValues(1, 0, 0),
          c = q.fromValues(0, 1, 0);
        return function (d, e, g) {
          var p = q.dot(e, g);
          return -.999999 > p ? (q.cross(a, b, e), 1E-6 > q.len(a) && q.cross(a, c, e), q.normalize(a, a), h(d, a, Math.PI), d) : .999999 < p ? (d[0] = 0, d[1] = 0, d[2] = 0, d[3] = 1, d) : (q.cross(a, e, g), d[0] = a[0], d[1] = a[1], d[2] = a[2], d[3] = 1 + p, l(d, d))
        }
      }();
      b.sqlerp = function () {
        var a = m(),
          b = m();
        return function (d, e, l, g, p, f) {
          return c(a, e, p, f), c(b, l, g, f), c(d, a, b, 2 * f * (1 - f)), d
        }
      }();
      b.setAxes = function () {
        var a = x.create();
        return function (b, c, d, e) {
          return a[0] = d[0], a[3] = d[1], a[6] = d[2], a[1] = e[0], a[4] = e[1], a[7] = e[2], a[2] = -c[0], a[5] = -c[1], a[8] = -c[2], l(b, f(b, a))
        }
      }()
    },
    function (d, b, e) {
      function k() {
        var a = new q.ARRAY_TYPE(2);
        return a[0] = 0, a[1] = 0, a
      }

      function m(a, b, c) {
        return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a
      }

      function h(a, b, c) {
        return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a
      }

      function a(a, b, c) {
        return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a
      }

      function c(a, b) {
        var c = b[0] - a[0];
        a = b[1] - a[1];
        return Math.sqrt(c * c + a * a)
      }

      function f(a, b) {
        var c = b[0] - a[0];
        a = b[1] - a[1];
        return c * c + a * a
      }

      function r(a) {
        var b = a[0];
        a = a[1];
        return Math.sqrt(b * b + a * a)
      }

      function x(a) {
        var b = a[0];
        a = a[1];
        return b * b + a * a
      }
      Object.defineProperty(b,
        "__esModule", {
          value: !0
        });
      b.forEach = b.sqrLen = b.sqrDist = b.dist = b.div = b.mul = b.sub = b.len = void 0;
      b.create = k;
      b.clone = function (a) {
        var b = new q.ARRAY_TYPE(2);
        return b[0] = a[0], b[1] = a[1], b
      };
      b.fromValues = function (a, b) {
        var c = new q.ARRAY_TYPE(2);
        return c[0] = a, c[1] = b, c
      };
      b.copy = function (a, b) {
        return a[0] = b[0], a[1] = b[1], a
      };
      b.set = function (a, b, c) {
        return a[0] = b, a[1] = c, a
      };
      b.add = function (a, b, c) {
        return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a
      };
      b.subtract = m;
      b.multiply = h;
      b.divide = a;
      b.ceil = function (a, b) {
        return a[0] = Math.ceil(b[0]),
          a[1] = Math.ceil(b[1]), a
      };
      b.floor = function (a, b) {
        return a[0] = Math.floor(b[0]), a[1] = Math.floor(b[1]), a
      };
      b.min = function (a, b, c) {
        return a[0] = Math.min(b[0], c[0]), a[1] = Math.min(b[1], c[1]), a
      };
      b.max = function (a, b, c) {
        return a[0] = Math.max(b[0], c[0]), a[1] = Math.max(b[1], c[1]), a
      };
      b.round = function (a, b) {
        return a[0] = Math.round(b[0]), a[1] = Math.round(b[1]), a
      };
      b.scale = function (a, b, c) {
        return a[0] = b[0] * c, a[1] = b[1] * c, a
      };
      b.scaleAndAdd = function (a, b, c, d) {
        return a[0] = b[0] + c[0] * d, a[1] = b[1] + c[1] * d, a
      };
      b.distance = c;
      b.squaredDistance =
        f;
      b.length = r;
      b.squaredLength = x;
      b.negate = function (a, b) {
        return a[0] = -b[0], a[1] = -b[1], a
      };
      b.inverse = function (a, b) {
        return a[0] = 1 / b[0], a[1] = 1 / b[1], a
      };
      b.normalize = function (a, b) {
        var c = b[0],
          d = b[1],
          c = c * c + d * d;
        return 0 < c && (c = 1 / Math.sqrt(c), a[0] = b[0] * c, a[1] = b[1] * c), a
      };
      b.dot = function (a, b) {
        return a[0] * b[0] + a[1] * b[1]
      };
      b.cross = function (a, b, c) {
        b = b[0] * c[1] - b[1] * c[0];
        return a[0] = a[1] = 0, a[2] = b, a
      };
      b.lerp = function (a, b, c, d) {
        var e = b[0];
        b = b[1];
        return a[0] = e + d * (c[0] - e), a[1] = b + d * (c[1] - b), a
      };
      b.random = function (a, b) {
        b = b || 1;
        var c =
          2 * q.RANDOM() * Math.PI;
        return a[0] = Math.cos(c) * b, a[1] = Math.sin(c) * b, a
      };
      b.transformMat2 = function (a, b, c) {
        var d = b[0];
        b = b[1];
        return a[0] = c[0] * d + c[2] * b, a[1] = c[1] * d + c[3] * b, a
      };
      b.transformMat2d = function (a, b, c) {
        var d = b[0];
        b = b[1];
        return a[0] = c[0] * d + c[2] * b + c[4], a[1] = c[1] * d + c[3] * b + c[5], a
      };
      b.transformMat3 = function (a, b, c) {
        var d = b[0];
        b = b[1];
        return a[0] = c[0] * d + c[3] * b + c[6], a[1] = c[1] * d + c[4] * b + c[7], a
      };
      b.transformMat4 = function (a, b, c) {
        var d = b[0];
        b = b[1];
        return a[0] = c[0] * d + c[4] * b + c[12], a[1] = c[1] * d + c[5] * b + c[13], a
      };
      b.str = function (a) {
        return "vec2(" +
          a[0] + ", " + a[1] + ")"
      };
      b.exactEquals = function (a, b) {
        return a[0] === b[0] && a[1] === b[1]
      };
      b.equals = function (a, b) {
        var c = a[0];
        a = a[1];
        var d = b[0];
        b = b[1];
        return Math.abs(c - d) <= q.EPSILON * Math.max(1, Math.abs(c), Math.abs(d)) && Math.abs(a - b) <= q.EPSILON * Math.max(1, Math.abs(a), Math.abs(b))
      };
      var q = function (a) {
        if (a && a.__esModule) return a;
        var b = {};
        if (null != a)
          for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
        return b.default = a, b
      }(e(0));
      b.len = r;
      b.sub = m;
      b.mul = h;
      b.div = a;
      b.dist = c;
      b.sqrDist = f;
      b.sqrLen = x;
      b.forEach =
        function () {
          var a = k();
          return function (b, c, d, e, f, h) {
            c || (c = 2);
            d || (d = 0);
            for (e = e ? Math.min(e * c + d, b.length) : b.length; d < e; d += c) a[0] = b[d], a[1] = b[d + 1], f(a, a, h), b[d] = a[0], b[d + 1] = a[1];
            return b
          }
        }()
    }
  ])
});