(function (width) {
    var doc = width.document,
      element = doc.documentElement,
      i = 640,
      d = i / 100,
      o = "orientationchange" in width ? "orientationchange" : "resize",
      a = function () {
        var width = element.clientWidth || 320;
        width > 640 && (width = 640);
        element.style.fontSize = width / d + "px"
      };
    doc.addEventListener && (width.addEventListener(o, a, !1), doc.addEventListener("DOMContentLoaded", a, !1))
  })(window);