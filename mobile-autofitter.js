(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var MobileAutofitter;

module.exports = MobileAutofitter = (function() {
  var adjustFontSize, updateRootFontSize;

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

  adjustFontSize = function(width) {
    width * this.initialFontSize / this.initialWidth;
    return this;
  };

  updateRootFontSize = function(id) {
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9pbmRleC5qcyIsImJ1aWxkL21vYmlsZS1hdXRvZml0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBNb2JpbGVBdXRvZml0dGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vYmlsZUF1dG9maXR0ZXIgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBhZGp1c3RGb250U2l6ZSwgdXBkYXRlUm9vdEZvbnRTaXplO1xuXG4gIGZ1bmN0aW9uIE1vYmlsZUF1dG9maXR0ZXIoZWxlbWVudGlkLCBpbml0aWFsRm9udFNpemUsIGluaXRpYWxXaWR0aCkge1xuICAgIHRoaXMuZWxlbWVudGlkID0gZWxlbWVudGlkO1xuICAgIHRoaXMuaW5pdGlhbEZvbnRTaXplID0gaW5pdGlhbEZvbnRTaXplICE9IG51bGwgPyBpbml0aWFsRm9udFNpemUgOiAxMDtcbiAgICB0aGlzLmluaXRpYWxXaWR0aCA9IGluaXRpYWxXaWR0aCAhPSBudWxsID8gaW5pdGlhbFdpZHRoIDogMTAwMDtcbiAgICByZXR1cm4gdGhpcy5pbml0KCk7XG4gIH1cblxuICBNb2JpbGVBdXRvZml0dGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgd2luZG93Lm9ucmVzaXplID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIF90aGlzLnVwZGF0ZVJvb3RGb250U2l6ZShfdGhpcy5lbGVtZW50aWQpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVJvb3RGb250U2l6ZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIGFkanVzdEZvbnRTaXplID0gZnVuY3Rpb24od2lkdGgpIHtcbiAgICB3aWR0aCAqIHRoaXMuaW5pdGlhbEZvbnRTaXplIC8gdGhpcy5pbml0aWFsV2lkdGg7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdXBkYXRlUm9vdEZvbnRTaXplID0gZnVuY3Rpb24oaWQpIHtcbiAgICBpZiAoaWQgPT0gbnVsbCkge1xuICAgICAgaWQgPSB0aGlzLmVsZW1lbnRpZDtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZm9udC1zaXplOicgKyB0aGlzLmFkanVzdEZvbnRTaXplKHdpbmRvdy5pbm5lcldpZHRoKSArICdweDsnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gTW9iaWxlQXV0b2ZpdHRlcjtcblxufSkoKTtcbiIsIndpbmRvdy5Nb2R1bGUgPSByZXF1aXJlKCcuL2luZGV4Jyk7XG4iXX0=
