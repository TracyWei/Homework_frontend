// 函数myType用于根据输入参数返回相应的类型信息。
// 语法如下：
// 	var str = myType (param);
// 使用范例如下：
// 	myType (1);		返回值： "number"
// 	myType (false);		返回值： "boolean"
// 	myType ({});		返回值： "object"
// 	myType ([]);		返回值：" Array"
// 	myType (function(){});	返回值："function"
// 	myType (new Date());	返回值： "Date"
// 请写出函数myType的实现代码。
function myType(param){
	if(typeof param !=="object"){
		return typeof param;
	}
	else{
		if(Object.prototype.toString.call(param).slice(8,-1) == "Object"){
			return "object";
		}
		else if(Object.prototype.toString.call(param).slice(8,-1) == "Function"){
			return "function";
		}
		else
			return Object.prototype.toString.call(param).slice(8,-1);
	}
}
console.log(myType (1));
console.log(myType (false));
console.log(myType ({}));
console.log(myType ([]));
console.log(myType (function(){}));
console.log(myType (new Date()));

// 函数search用于在一个已排序的数字数组中查找指定数字。
// 语法如下：
// 	var index = search(arr, dst);
// 使用范例如下： 
// 	var arr = [1, 2, 4, 6, 7, 9, 19,20, 30, 40, 45, 47];
// 	search(arr, 45);		返回值： 10
// 请写出函数search的实现代码 请给出函数，要求不能使用Array的原型方法，且算法时间复杂度低于O(n)。
function search(arr,dst){
    var type = Object.prototype.toString.call(arr).slice(8,-1);
    if(type != 'Array'){
        throw TypeError('Object prototype may only be an Array!')
    }
    var len = arr.length;
    if( !len){
        return -1;
    }

    var l = 0;
    var h = len - 1;
    while(l <= h){
        var m = Math.floor( (h+l)/2 );
        if( arr[m] == dst ){
            return m;
        }else if( dst < arr[m] ){ //左半部分
            h = m - 1;
        }else{ //右半部分
            l = m + 1;
        }

    }
}
var arr = [1,2,4,6,7,9,19,20,30,40,45,47];
alert( search(arr,45) )

// 函数formatDate用于将日期对象转换成指定格式的字符串，语法如下：
// 	var str = formatDate(date, pattern);
// 	其中pattern的全格式为"yyyy-MM-dd HH:mm:ss"
// 使用范例如下：
// 	var date = new Date(2001, 8, 11, 8, 26, 8);
// 	formatDate(date, "yyyy");		返回值： "2001"
// 	formatDate(date, "yyyy-MM-dd");	    返回值： "2001-09-11"
// 	formatDate(date, "yyyy-MM-dd HH");		返回值： "2001-09-11 08"
// 	formatDate(date, "yyyy-MM-dd HH:mm:ss");    返回值： "2001-09-11 08:26:08"
// 请写出函数formatDate的实现代码。
function formateDate(data,pattern){
	var d = {
		year:date.getFullYear(),
		month:date.getMonth() < 10 ? '0'+(1+date.getMonth()) :(1+date.getMonth()),
		day:date.getDate() < 10 ? '0'+date.getDate() : date.getDate(),
		hours:date.getHours() < 10 ? '0'+date.getHours() : date.getHours(),
		minutes:date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes(),
    	seconds:date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds()
	};
	var result;
	switch(pattern){
		case "yyyy":
     		ret = d.year;
      		break;
    	case "yyyy-MM-dd":
      		ret = d.year+'-'+d.month+'-'+d.day;
      		break;
    	case "yyyy-MM-dd HH":
      		ret = d.year+'-'+d.month+'-'+d.day+' '+d.hours;
      		break;
    	case "yyyy-MM-dd HH:mm:ss":
      		ret = d.year+'-'+d.month+'-'+d.day+' '+d.hours+':'+d.minutes+':'+d.seconds;
      		break;
   		default:
      		break;
	}
	return result;
}
var date = new Date(2001, 8, 11, 8, 26, 8);
formatDate(date, "yyyy");	