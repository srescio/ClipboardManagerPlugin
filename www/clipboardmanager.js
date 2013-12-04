/**
 * Phonegap ClipboardManager plugin
 * Omer Saatcioglu 2011
 * Guillaume Charhon - Smart Mobile Software 2011
 * Jacob Robbins - Phonegap 2.0 port 2013
 * Simone Rescio - Phonegap 3.0 port 2013
 */


window.clipboardManager.copy = function(str, success, fail) {
	cordova.exec(success, fail, "ClipboardManagerPlugin", "copy", [str]);
};

window.clipboardManager.paste = function(success, fail) {
	cordova.exec(success, fail, "ClipboardManagerPlugin", "paste", []);
};


