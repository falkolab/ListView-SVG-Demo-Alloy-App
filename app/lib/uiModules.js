// app/lib/uiModules.js
var o = {
	createSvgView: function(opts) {
		var m = require("com.geraudbourdin.svgview");
		return m.createView(opts);
	}	
};
// place other modules here to use with ns or module attributes in alloy
//_.extend(o, require(""));

module.exports = o;
Alloy.Globals.uiModules = o;