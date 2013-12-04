/**
 * Phonegap ClipboardManager plugin
 * Omer Saatcioglu 2011
 * Guillaume Charhon - Smart Mobile Software 2011
 * Jacob Robbins - Phonegap 2.0 port 2013
 * Simone Rescio - Phonegap 3.0 port 2013
 */


var exec = require("cordova/exec");
var clipboardManager = {
    
    copy : function(str, success, fail) {
	exec(success, fail, "ClipboardManagerPlugin", "copy", [str]);
    },
    
    paste : function(success, fail) {
	exec(success, fail, "ClipboardManagerPlugin", "paste", []);
    }
    
};
module.exports = clipboardManager;
