function getCookies(){
	var cookie = {};
	var all = document.cookie;
	if(all === '')
		return cookie;
	var list = all.split(';');
	var len = list.length;
	for(var i = 0; i<len; i++){
		var item = list[i];
		var k = item.indexOf('=');
		var name = item.substring(0,k);
		name = decodeURIComponent(name);
		var value = item.substring(k+1);
		value = decodeURIComponent(value);
		cookie[name] = value;
	}
	return cookie;
}