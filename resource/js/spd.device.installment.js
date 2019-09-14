function getMobileOperatingSystem() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	if (/windows phone/i.test(userAgent)) { return "Windows Phone"; }
	if (/android/i.test(userAgent)) { return "Android"; }
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) { return "iOS"; }
	return "unknown";
}

var deviceapp = VPSC_GetURL_Param('app', '');
var deviceapp_ver = VPSC_GetURL_Param('ver', '');
var deviceapp_os = getMobileOperatingSystem();
if (VPSC_Cookie_Get('notice_donotshow') == '') {
	if (deviceapp !== 'true' && deviceapp_os == 'Android') { $('#VX_Notification').modal(); }
}

/* WeixinJSBridge */
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
	document.getElementById('span_speedy_api_alert_close').innerHTML = '';
	$('#VX_Notification').modal('hide');
	SPEEDYSDK_C_Alert_Simple('WeChat Browser Detected!', '<img src="//qdcwapp.com/speedy/file/img/wechat_browser.jpg" style="width:100%" /><p style="margin-top:20px">Please open SPEEDY with the Internet Browser installed on your device!</p>');
	WeixinJSBridge.invoke('showOptionMenu',{},function(res){});
}, false);