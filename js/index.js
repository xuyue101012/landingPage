(function (window) {
    var doc = window.document,
      element = doc.documentElement,
      i = 640,
      d = i / 100,
      o = "orientationchange" in window ? "orientationchange" : "resize",
      a = function () {
        var width = element.clientWidth || 320;
        console.log(width);
        width > 640 && (width = 640);
        element.style.fontSize = width / d + "px"
      };
      console.log(window.document);
    doc.addEventListener && (window.addEventListener(o, a, !1), doc.addEventListener("DOMContentLoaded", a, !1))
  })(window);