function SPEEDY_Cookie_Set(cname, cvalue) {
	VPSC_Cookie_Set(cname, cvalue, 365);
}
	
var user_appid = VPSC_Cookie_Get('user_appid');
var user_appname = VPSC_Cookie_Get('user_appname');

var user_change = VPSC_GetURL_Param('user_change', '');
var user_change_new = VPSC_GetURL_Param('user_change_new', '');
if (user_change !== '') {
	//truepush.removeTags([{"tagName":"speedy_appid","tagValue":user_appid}],function(Error,Response){
	//	console.log(Error,Response);
	//});
	user_appid = VPSC_GetURL_Param('app', '');
	SPEEDY_Cookie_Set('user_appid', user_appid);
	user_appname = VPSC_GetURL_Param('app_name', '');
	SPEEDY_Cookie_Set('user_appname', user_appname);
	if (user_change_new !== '') {
		window.location = 'http://speedy.spd.thepixelplaces.com/';
	}
}

if (user_appid !== '') {
	if (location.protocol != 'http:') {
		location.href = 'http:' + window.location.href.substring(window.location.protocol.length);
	}
}
else {
	if (location.protocol != 'https:') {
		location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
	}
}


function SPEEDY_Console_Loading(msg) {
	if (msg !== '') {
		document.getElementById('speedy_console_loading').innerHTML = msg;
	}
	else {
		document.getElementById('speedy_console_loading').innerHTML = '';
	}
}

var SPEEDY_LoadingEmulator = false;
var SPEEDY_LoadingEmulator_Interval;
var SPEEDY_LoadingEmulator_Var = 0;
var SPEEDY_LoadingEmulator_Available = false;
var SPEEDY_LoadingEmulator_ReloadHTML = '<p>It takes longer than expected...?</p><p><a href="http://speedy.spd.thepixelplaces.com/" class="btn btn-success btn-lg"><i class="fas fa-redo"></i> Reload</a></p>';

function SPEEDY_Console_Loading_Emulator() {
  if (SPEEDY_LoadingEmulator_Available == true) {
		if (SPEEDY_LoadingEmulator == true) {
			SPEEDY_LoadingEmulator_Var++;
			if (SPEEDY_LoadingEmulator_Var >= 100) {
				SPEEDY_LoadingEmulator_Var = 100;
				if (document.getElementById('speedy_console_loading').innerHTML !== SPEEDY_LoadingEmulator_ReloadHTML) {
				SPEEDY_Console_Loading(SPEEDY_LoadingEmulator_ReloadHTML);
				}
			}
			else if (SPEEDY_LoadingEmulator_Var >= 50) { SPEEDY_Console_Loading('Keep loading...'); }
			else { SPEEDY_Console_Loading(''); }
			SPEEDY_Console_LoadingBar(SPEEDY_LoadingEmulator_Var);
		}
		else {
			SPEEDY_LoadingEmulator = true;
			SPEEDY_LoadingEmulator_Interval = setInterval(SPEEDY_Console_Loading_Emulator, 150);
		}
	}
}

function SPEEDY_UserAction_Touch() {
	SPEEDY_LoadingEmulator_Var = 0;
}
window.onclick = function() {
	SPEEDY_UserAction_Touch();
}