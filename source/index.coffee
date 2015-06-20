module.exports = class MobileAutofitter
  constructor: (@elementid, @initialFontSize = 10, @initialWidth = 1000) ->
    return @init()

  init: () ->
    window.onresize = =>
      @updateRootFontSize @elementid
      return

    @updateRootFontSize()
    return this

  adjustFontSize = (width) ->
    width * @initialFontSize / @initialWidth
    return this

  updateRootFontSize = (id = @elementid) ->
    document.getElementById(id).setAttribute 'style', 'font-size:' + @adjustFontSize(window.innerWidth) + 'px;'
    return this
