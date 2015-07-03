module.exports = class MobileAutofitter
  constructor: () ->
    @running = false
    return this

  start: (@elementid, @initialFontSize = 10, @initialWidth = 1000) ->
    @running = true
    window.onresize = =>
      @updateRootFontSize @elementid
      return

    @updateRootFontSize()
    return this

  stop: () ->
    @running = false
    window.onresize = => return
    return this

  adjustFontSize: (width) ->
    return (width * @initialFontSize / @initialWidth) or @initialFontSize

  updateRootFontSize: () ->
    document.getElementById(@elementid)?.style.fontSize 'style', "#{@adjustFontSize window.innerWidth}px;"
    return this
