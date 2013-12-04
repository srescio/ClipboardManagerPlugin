# Porting in progress, do not use yet #



# ClipboardManager plugin for Phonegap #
By Omer Saatcioglu
Enhanced by Guillaume Charhon
Ported to Phonegap 2.0 by Jacob Robbins
Ported to Phonegap 3.0 by Simone Rescio

This plugin gives access to Copy & Paste methods of the Android ClipboardManager.
This version of the plugin is for Phonegap versions >= 3.0.0

## Adding the Plugin to your project ##
1. using terminal cd to your poroject dir and type :
`phonegap local plugin add https://github.com/srescio/ClipboardManagerPlugin.git`
2. using NetBeans, in nbproject/plugins.properties add :
`org.apache.cordova.clipboardmanager=https://github.com/srescio/ClipboardManagerPlugin.git`

## Using the plugin ##
The plugin creates 2 methods on the window object

`window.clipboardManager.copy(str, success, fail)` that copies the given string into the clipboard
`window.clipboardManager.paste(success, fail)` that returns the text from the clipboard

`success` and `fail` are callback functions. 

An example for copy:

	window.clipboardManager.copy(
		"the text to copy",
		function(r){alert("copy is successful")},
		function(e){alert(e)}
	);

An example for paste:

	window.clipboardManager.paste(
		function(r){alert("The text in the clipboard is " + r)},
		function(e){alert(e)}
	);

## Plugin developer notes ##

The name of the Java class was changed to ClipboardManagerPlugin because ClipboardManager is the name of the Android class this plugin interacts with. Duplicating the name of an existing class causes a name collision error. http://developer.android.com/reference/android/content/ClipboardManager.html 

The plugin reference in the plugins.xml file must specifiy the location of the class of the plugin, not the file. That's why ClipboardManagerPlugin is repeated twice, once for the file and once for the name of the class.

