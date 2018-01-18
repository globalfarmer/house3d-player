/*
	krpano - super simple html5 text input plugin
*/

var krpanoplugin = function()
{
	var local = this;

	var krpano = null;
	var plugin = null;
	
	var inputelement = null;
	var isent = false;
	local.registerplugin = function(krpanointerface, pluginpath, pluginobject)
	{
		krpano = krpanointerface;
		plugin = pluginobject;



		inputelement = document.createElement("input");
		inputelement.type = "text";
		inputelement.maxLength = "14";
		inputelement.style.borderRadius = "0px";
		inputelement.style.fontSize = "100%";
		inputelement.style.webkitAppearance = "none";
		inputelement.style.width  = "100%";
		inputelement.style.height = "100%";
		inputelement.style.padding = "0px";
		inputelement.style.marggin = "0px";
		inputelement.style.textIndent = "10px";
		

		inputelement.style.resize = "none";
		inputelement.style.outline = "none";
		inputelement.style.border = "1px solid #eee";
		inputelement.style.backgroundColor = "#f7f7f7";
		inputelement.style.overflow = "auto";
		inputelement.style.boxSizing = "border-box";
		inputelement.style.borderRadiu = "10px";



		inputelement.onfocus = function(){
			if(krpano.get("device.ios")){
				isent = true;
				set_height();
			}
		}
		inputelement.onblur = function(){

			if(krpano.get("device.ios")){
				isent = false;
			}

		}
		plugin.ondown=function(){
			inputelement.focus();

		};
		plugin.registerattribute("text", "", text_set, text_get);
		plugin.registerattribute("placeholder", "", placeholder_set, placeholder_get);
		//plugin.registerattribute("disabled", true, disabled_set, disabled_get);



		plugin.registerattribute("onchanged", null);
		plugin.blur = blur;
		inputelement.addEventListener("input", text_changed, true);
		

		plugin.sprite.appendChild(inputelement);
	}


	function set_height(){
		krpano.set("area.height","99%");
		krpano.set("area.height","100%");
		document.body.scrollTop = 0;
		if(isent == true){
			setTimeout(set_height, 1);
		}
		
	}


	
	 local.onresize = function(width,height)
	 {
		return false;
	 }

	local.unloadplugin = function()
	{
		plugin = null;
		krpano = null;
	}
	
	function text_set(newtext)
	{
		inputelement.value = newtext;
	}
	
	function text_get()
	{
		return inputelement.value;
	}


	function disabled_set(newtext)
	{	
		inputelement.disabled = newtext;
	}
	
	function disabled_get()
	{
		return inputelement.disabled;
	}


	function placeholder_set(newtext)
	{
		inputelement.placeholder = newtext;
	}
	
	function placeholder_get()
	{
		return inputelement.placeholder;
	}



	
	
	function text_changed()
	{
		krpano.call(plugin.onchanged, plugin);
		
	}

	function mousedownFunction()
	{
		inputelement.focus(); 
		
	}
	function blur(){
		inputelement.blur();
	}
	
};