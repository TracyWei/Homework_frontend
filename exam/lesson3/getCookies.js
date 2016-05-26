// 函数getCookies()解析document.cookie， 并返回一个对象， 该对象的属性名为cookie的name，属性值为cookie的value。请写出该函数的实现代码
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