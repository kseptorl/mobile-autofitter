(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var MobileAutofitter;

module.exports = MobileAutofitter = (function() {
  function MobileAutofitter() {
    this.running = false;
    return this;
  }

  MobileAutofitter.prototype.start = function(elementid, initialFontSize, initialWidth) {
    this.elementid = elementid;
    this.initialFontSize = initialFontSize != null ? initialFontSize : 10;
    this.initialWidth = initialWidth != null ? initialWidth : 1000;
    this.running = true;
    window.onresize = (function(_this) {
      return function() {
        _this.updateRootFontSize(_this.elementid);
      };
    })(this);
    this.updateRootFontSize();
    return this;
  };

  MobileAutofitter.prototype.stop = function() {
    this.running = false;
    window.onresize = (function(_this) {
      return function() {};
    })(this);
    return this;
  };

  MobileAutofitter.prototype.adjustFontSize = function(width) {
    return (width * this.initialFontSize / this.initialWidth) || this.initialFontSize;
  };

  MobileAutofitter.prototype.updateRootFontSize = function() {
    var ref;
    if ((ref = document.getElementById(this.elementid)) != null) {
      ref.style.fontSize = (this.adjustFontSize(window.innerWidth)) + "px;";
    }
    return this;
  };

  return MobileAutofitter;

})();

},{}],2:[function(require,module,exports){
window.Module = require('./index');

},{"./index":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9pbmRleC5qcyIsImJ1aWxkL21vYmlsZS1hdXRvZml0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIE1vYmlsZUF1dG9maXR0ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9iaWxlQXV0b2ZpdHRlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTW9iaWxlQXV0b2ZpdHRlcigpIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIE1vYmlsZUF1dG9maXR0ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oZWxlbWVudGlkLCBpbml0aWFsRm9udFNpemUsIGluaXRpYWxXaWR0aCkge1xuICAgIHRoaXMuZWxlbWVudGlkID0gZWxlbWVudGlkO1xuICAgIHRoaXMuaW5pdGlhbEZvbnRTaXplID0gaW5pdGlhbEZvbnRTaXplICE9IG51bGwgPyBpbml0aWFsRm9udFNpemUgOiAxMDtcbiAgICB0aGlzLmluaXRpYWxXaWR0aCA9IGluaXRpYWxXaWR0aCAhPSBudWxsID8gaW5pdGlhbFdpZHRoIDogMTAwMDtcbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy51cGRhdGVSb290Rm9udFNpemUoX3RoaXMuZWxlbWVudGlkKTtcbiAgICAgIH07XG4gICAgfSkodGhpcyk7XG4gICAgdGhpcy51cGRhdGVSb290Rm9udFNpemUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBNb2JpbGVBdXRvZml0dGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgd2luZG93Lm9ucmVzaXplID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7fTtcbiAgICB9KSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBNb2JpbGVBdXRvZml0dGVyLnByb3RvdHlwZS5hZGp1c3RGb250U2l6ZSA9IGZ1bmN0aW9uKHdpZHRoKSB7XG4gICAgcmV0dXJuICh3aWR0aCAqIHRoaXMuaW5pdGlhbEZvbnRTaXplIC8gdGhpcy5pbml0aWFsV2lkdGgpIHx8IHRoaXMuaW5pdGlhbEZvbnRTaXplO1xuICB9O1xuXG4gIE1vYmlsZUF1dG9maXR0ZXIucHJvdG90eXBlLnVwZGF0ZVJvb3RGb250U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWY7XG4gICAgaWYgKChyZWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRpZCkpICE9IG51bGwpIHtcbiAgICAgIHJlZi5zdHlsZS5mb250U2l6ZSA9ICh0aGlzLmFkanVzdEZvbnRTaXplKHdpbmRvdy5pbm5lcldpZHRoKSkgKyBcInB4O1wiO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gTW9iaWxlQXV0b2ZpdHRlcjtcblxufSkoKTtcbiIsIndpbmRvdy5Nb2R1bGUgPSByZXF1aXJlKCcuL2luZGV4Jyk7XG4iXX0=
