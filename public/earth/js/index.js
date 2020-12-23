var Site = Site || {};
Site = {
  globeData: null,
  globeKitView: null,
  globeKitContainer: null,
  introDone: !1,
  camPower: 0,
  camZ: 42,
  lowRes: !1,
  init: function (dataURL) {
    Site.globeKitContainer = document.getElementById("main-container"), Site.lowRes = "ontouchstart" in document.documentElement, Site.globeKitView = new GK.View({
      canvas: document.getElementById("main-canvas"),
      textureDir: "./assets/images",
      modelsDir: "./assets/binfiles",
      sceneOffset: vec2.fromValues(.33, 0),
      clearColor: vec4.fromValues(250 / 255, 250 / 255, 250 / 255, 1),
      antialias: !1,
      alpha: !1,
      lowRes: Site.lowRes,
      onload: function () {
        Site.playIntroAnimation()
      }
    }), Site.globeData = new GlobeData(Site.globeKitView), GlobeData.processData(), Site.windowDidResize(), Site.addEventListeners(), Site.configureDrawables()
  },
  addCities: function () {
    for (var cityPoints = [], i = 0; i < GlobeDataCities.length; i++) {
      var city = GlobeDataCities[i],
        pos = vec3.fromValues(city.rectifiedPos[0], city.rectifiedPos[1], city.rectifiedPos[2]);
      cityPoints.push(pos)
    }
    Site.globeKitView.addPoints(cityPoints)
  },
  addEventListeners: function () {
    window.addEventListener("resize", GK.debounce(function () {
      Site.windowDidResize()
    }, 75)), window.addEventListener("orientationchange", function () {
      Site.windowDidResize()
    }), window.addEventListener("mousemove", function (e) {
      if (Site.introDone) {
        var globeX = .5 * Site.globeKitView.canvas.width + .165 * Site.globeKitView.canvas.width,
          globeY = .5 * Site.globeKitView.canvas.height,
          m = vec2.fromValues(e.clientX, e.clientY),
          g = vec2.fromValues(globeX, globeY),
          d = 1 - vec2.distance(m, g) / Site.globeKitView.canvas.width;
        d = GK.Ease.smoothstep(.5, 1, d), Site.globeKitView.scene.camTargetZ = Site.camZ - 3 * d * Site.camPower
      }
    })
  },
  windowDidResize: function () {
    var width = Site.globeKitContainer.offsetWidth,
      height = Site.globeKitContainer.offsetHeight;
    if (Site.globeKitView.canvas.width = width, Site.globeKitView.canvas.height = height, Site.globeKitView.resize(), Site.globeKitView.scene.globe.pointSize = Site.getGlobePointSize(), window.innerWidth < 768) Site.globeKitView.scene.camera.sceneOffset = vec2.fromValues(0, .25), Site.globeKitView.scene.camTargetZ = 62, Site.camZ = 62;
    else Site.globeKitView.scene.camera.sceneOffset = vec2.fromValues(.33, 0), Site.globeKitView.scene.camTargetZ = 42, Site.camZ = 42
  },
  getGlobePointSize: function () {
    var s = .00185 * Site.globeKitView.canvas.height;
    if (Site.lowRes) s *= 1.5;
    return s
  },
  configureDrawables: function () {
    var scene = Site.globeKitView.scene;
    scene.camera.position = vec3.fromValues(0, 0, Site.camZ);
    var dark = (vec3.fromValues(1, 1, 1), vec3.fromValues(100 / 255, 100 / 255, 100 / 255)),
      gray = vec3.fromValues(200 / 255, 200 / 255, 200 / 255),
      brightBlue = (vec3.fromValues(135 / 255, 140 / 255, 157 / 255), vec3.fromValues(0 / 255, 90 / 255, 215 / 255));
    scene.globe.alpha = 0, scene.globe.noisePower = 12, scene.points.alpha = 0, scene.quad.alpha = 0, scene.dimension.alpha = 0, scene.publisherEvent.progress = 0, scene.globe.pointSize = Site.getGlobePointSize(), scene.globe.color1 = gray, scene.globe.color2 = gray, scene.globe.crestColor = dark, scene.globe.takeoverColor = brightBlue, scene.globe.scatterColor = dark, scene.points.color1 = dark, scene.points.pointSize = 20, scene.epicenter.color1 = dark, scene.epicenter.color2 = dark
  },
  playIntroAnimation: function () {
    Site.globeKitContainer.style.visibility = "visible";
    var scene = Site.globeKitView.scene;
    scene.setYawPitch(1.5, -.6), scene.globe.offsetPower = 1;
    var offsetStart = scene.globe.offsetPower,
      offsetDelta = 0 - offsetStart,
      pointSizeStart = 1.2 * scene.globe.pointSize,
      pointSizeEnd = scene.globe.pointSize,
      pointSizeDelta = pointSizeEnd - pointSizeStart,
      camZStart = .75 * Site.camZ,
      camZEnd = Site.camZ,
      camZDelta = camZEnd - camZStart,
      noisePowerStart = scene.globe.noisePower,
      noisePowerDelta = 2 - noisePowerStart;
    scene.yawSpeed = .03, scene.pitchSpeed = -4e-4;
    var pulsed = !1,
      eventsStarted = !1,
      introAnim = new GK.Animation(4.2);
    introAnim.updateFn = function (value) {
      var easedValue = GK.Ease.inOutQuad(value),
        alphaValue = GK.Ease.smoothstep(0, .3, value);
      scene.yawSpeed = -(.03 - .03 * GK.Ease.outSine(value)), scene.pitchSpeed = -(4e-4 - 4e-4 * GK.Ease.outSine(value));
      var ps = GK.Ease.smoothstep(.56, 1, easedValue),
        op = GK.Ease.smoothstep(.56, 1, easedValue);
      scene.globe.offsetPower = offsetStart + op * offsetDelta, scene.globe.pointSize = pointSizeStart + ps * pointSizeDelta, scene.globe.alpha = alphaValue;
      var n = GK.Ease.smoothstep(.75, 1, easedValue);
      scene.globe.noisePower = noisePowerStart + n * noisePowerDelta;
      var z = GK.Ease.smoothstep(.6, 1, easedValue);
      Site.camZ = camZStart + z * camZDelta, Site.globeKitView.scene.camera.position = vec3.fromValues(0, 0, Site.camZ);
      var fv = GK.Ease.smoothstep(.7, .9, value);
      if (scene.dimension.alpha = fv, scene.quad.alpha = fv, scene.points.alpha = fv, value > .1 && !pulsed) Site.globeKitView.pulse(.4, .25, 0, 4), pulsed = !0;
      if (value > .8 && !eventsStarted) Site.globeData.start(), eventsStarted = !0
    }, introAnim.completeFn = function () {
      Site.introDone = !0, introAnim = null;
      var crestColor = vec3.fromValues(157 / 255, 166 / 255, 196 / 255);
      scene.globe.crestColor = crestColor;
      var a = new GK.Animation(2);
      a.updateFn = function (value) {
        Site.camPower = value
      }, a.start()
    }, introAnim.start()
  },
  destroy: function () {
    for (var attachedElements = Site.globeKitView.attachedElements, j = 0; j < attachedElements.length; j++) {
      var attachedElement = attachedElements[j];
      attachedElement.parentNode.removeChild(attachedElement)
    }
    clearTimeout(Site.unfocusTimeout), Site.globeKitView.destroy(), delete Site.globeKitView
  }
}
Site.init()