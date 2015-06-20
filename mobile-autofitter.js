(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var MobileAutofitter;

module.exports = MobileAutofitter = (function() {
  function MobileAutofitter(elementid, initialFontSize, initialWidth) {
    this.elementid = elementid;
    this.initialFontSize = initialFontSize != null ? initialFontSize : 10;
    this.initialWidth = initialWidth != null ? initialWidth : 1000;
    return this.init();
  }

  MobileAutofitter.prototype.init = function() {
    window.onresize = (function(_this) {
      return function() {
        _this.updateRootFontSize(_this.elementid);
      };
    })(this);
    this.updateRootFontSize();
    return this;
  };

  MobileAutofitter.prototype.adjustFontSize = function(width) {
    width * this.initialFontSize / this.initialWidth;
    return this;
  };

  MobileAutofitter.prototype.updateRootFontSize = function(id) {
    if (id == null) {
      id = this.elementid;
    }
    document.getElementById(id).setAttribute('style', 'font-size:' + this.adjustFontSize(window.innerWidth) + 'px;');
    return this;
  };

  return MobileAutofitter;

})();

},{}],2:[function(require,module,exports){
window.Module = require('./index');

},{"./index":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9pbmRleC5qcyIsImJ1aWxkL21vYmlsZS1hdXRvZml0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIE1vYmlsZUF1dG9maXR0ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9iaWxlQXV0b2ZpdHRlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTW9iaWxlQXV0b2ZpdHRlcihlbGVtZW50aWQsIGluaXRpYWxGb250U2l6ZSwgaW5pdGlhbFdpZHRoKSB7XG4gICAgdGhpcy5lbGVtZW50aWQgPSBlbGVtZW50aWQ7XG4gICAgdGhpcy5pbml0aWFsRm9udFNpemUgPSBpbml0aWFsRm9udFNpemUgIT0gbnVsbCA/IGluaXRpYWxGb250U2l6ZSA6IDEwO1xuICAgIHRoaXMuaW5pdGlhbFdpZHRoID0gaW5pdGlhbFdpZHRoICE9IG51bGwgPyBpbml0aWFsV2lkdGggOiAxMDAwO1xuICAgIHJldHVybiB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIE1vYmlsZUF1dG9maXR0ZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cub25yZXNpemUgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMudXBkYXRlUm9vdEZvbnRTaXplKF90aGlzLmVsZW1lbnRpZCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlUm9vdEZvbnRTaXplKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgTW9iaWxlQXV0b2ZpdHRlci5wcm90b3R5cGUuYWRqdXN0Rm9udFNpemUgPSBmdW5jdGlvbih3aWR0aCkge1xuICAgIHdpZHRoICogdGhpcy5pbml0aWFsRm9udFNpemUgLyB0aGlzLmluaXRpYWxXaWR0aDtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBNb2JpbGVBdXRvZml0dGVyLnByb3RvdHlwZS51cGRhdGVSb290Rm9udFNpemUgPSBmdW5jdGlvbihpZCkge1xuICAgIGlmIChpZCA9PSBudWxsKSB7XG4gICAgICBpZCA9IHRoaXMuZWxlbWVudGlkO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdmb250LXNpemU6JyArIHRoaXMuYWRqdXN0Rm9udFNpemUod2luZG93LmlubmVyV2lkdGgpICsgJ3B4OycpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBNb2JpbGVBdXRvZml0dGVyO1xuXG59KSgpO1xuIiwid2luZG93Lk1vZHVsZSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcbiJdfQ==
