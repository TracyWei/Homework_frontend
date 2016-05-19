// 函数parseQuery用于解析url查询参数。
// 语法如下：
// 	var obj = parseQuery(query)
// 	query是被解析的查询参数，函数返回解析后的对象。
// 使用范例如下：
// 	var jerry = parseQuery("name=jerry&age=1");
// 	jerry; 	返回值：{name: " jerry ", age: "1"}
// 	var tom = parseQuery("name= tom &age=12&gender&");
// 	tom; 	返回值：{name: "tom", age: "12", gender: ""}
// 请写出函数parseQuery的实现代码。
function parseQuery(query){
	var arr=query.split("&");
	var obj={};
	var reg = /\s*([$_A-Za-z][$_A-Za-z0-9]*)\s*=?\s*(.*)/;
	for(var i in arr){
		var result=arr[i].match(reg);
		console.log(result);
		if(result)
			obj[result[1]]=result[2].trim();
	}
	return obj;
}
