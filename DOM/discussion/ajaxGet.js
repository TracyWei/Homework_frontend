function serialize(data){
	if(!data)
		return '';
	var pairs = [];
	for(var name in data){
		if(!data.hasOwnProperty(name))
			//判断对象自身是否有name属性
			continue;
		if(typeof data[name] === 'function')
			//如果对象的值是一个函数，忽略
			continue;
		var value = data[name].toString();
		name = encodeURIComponent(name);
		value = encodeURIComponent(value);
		pairs.push(name + '=' + value);
	}
	return pairs.join('&');
}
function getAjax(url,options,callback){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(callback){
		if(xhr.readyState == 4){
			if((xhr.status >= 200 && xhr.status < 300)||xhr.status ==304){
				//status200-300表示成功，304表示读取缓存
				callback(xhr.responseText);
			}
			else{
				alert('Reuqest was unsuccessful'+xhr.status);
			}
		}
	}
	var URL = url + serialize(options);
	xhr.open('get',URL,true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send(null);
}
get('/information',{name:'netease',age:18},function(data){
	console.log(data);
})