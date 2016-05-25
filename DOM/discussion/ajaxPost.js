function serialize(data){
	if(!data)
		return '';
	var pairs = [];
	for(var name in data){
		if(!data.hasOwnProperty(name))
			continue;
		if(typeof data[name]==='function')
			continue;
		var value = data[name].toString;
		name = encodeURIComponent(name);
		value = encodeURIComponent(value);
		pairs.push(name + '=' + value);
	}
	return pairs.join('&');
}
function postAjax(url,options,callback){
	var xhr = XMLHttpRequest();
	xhr.onreadystatechange = function(callback){
		if(xhr.readyState == 4){
			if((xhr.status >=200 && xhr.status<300)||xhr.status == 304){
				callback(xhr.responseText);
			}
			else{
				alert('Request was unsuccessful'+xhr.status);
			}
		}
	}
	xhr.open('post',url,true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send(serialize(options));
}