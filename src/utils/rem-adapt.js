;(function(win, doc) {
	var docEl = doc.documentElement,
		dpr = win.devicePixelRatio || 1,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth,
				rem =  clientWidth < 500 ? clientWidth  / 10 : 50
			docEl.style.fontSize = rem + 'px'
		}

		
		win.addEventListener(resizeEvt, recalc)
		doc.addEventListener('DOMContentLoaded', recalc, false)
})(window, document)
