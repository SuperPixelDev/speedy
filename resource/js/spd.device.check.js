// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 71
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

if (isIE == true) {
	SPEEDYSDK_C_Alert_Simple('Warning!', 'SPEEDY does not operate well in Internet Explorer as it is lack of availability on the latest web technology!');
	alert( "SPEEDY does not operate well in Internet Explorer as it is lack of availability on the latest web technology!" );
}

function Check_iOS() {
	var iDevices = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];
	if (!!navigator.platform) {
		while (iDevices.length) {
		if (navigator.platform === iDevices.pop()){ return true; }
		}
	}
	return false;
}
if (Check_iOS() == true) {
	window.location = '/vx/ios/index.html';
}