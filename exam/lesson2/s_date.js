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