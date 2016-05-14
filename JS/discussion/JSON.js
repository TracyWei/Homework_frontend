// 使得stringify兼容IE6/7
if(!window.JSON){
	window.JSON={
		stringify:function(obj){
			var result="";
			for(var key in obj){
				//若属性值是string类型，要加双引号
				if(typeof obj[key]=="string"){
					result+="\""+key+"\":\""+obj[key]+"\",";
				}
				//若属性值是正则表达式类型，属性值只保留一对空的大括号
				else if(obj[key] instanceof RegExp){
					result+="\""+key+"\":{},";
				}
				//若属性是undefined，那么该属性被忽略，函数也忽略
				else if(typeof obj[key]=="undefined"|| obj[key] instanceof Function){

				}
				//若属性是数组，数组中的元素有多种可能
				else if(obj[key] instanceof Array){
					result+="\""+key+"\":[";
					var arr=obj[key];
					for(var item in arr){
						//若数组元素是string类型
						if(typeof arr[item]=="string"){
							result+="\""+arr[item]+"\",";
						}
						//若数组元素是正则表达式
						else if (arr[item] instanceof RegExp){
							result+="{},";
						}
						//若数组元素是undefined，显示null;若数组元素是函数，也显示null
						else if(typeof arr[item]=="undefined"|| arr[item] instanceof Function){
							result+=null+",";
						}
						//若数组元素是对象（非正则，非null，非函数）
						else if(arr[item] instanceof Object){
							result+=this.stringify(obj[key])+","
						}
						else{
							result+=arr[item]+",";
						}
					}
					result+=result.slice(0,-1)+"],";
				}
				//若属性是对象（普通的对象，非函数、null或正则）
				else if(typeof obj[key] instanceof Object){
					result+="\""+key+"\":"+this.stringify(obj[key])+","
				}
				else{
					result+="\""+key+"\":"+obj[key]+",";
				}
			}
			//去除最后一个的逗号，两边加上{}
			return "{"+result.slice(0,-1)+"}";
		}
	}
}