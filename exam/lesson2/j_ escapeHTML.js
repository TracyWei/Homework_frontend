// 函数escapeHTML用于转义html字符串中的特殊字符(<>"&)。
// 语法如下：
// 	var escapedStr = escapeHTML(htmlStr);
// 使用范例如下：
// 	escapeHTML('<div>Tom&Jerry</div> '); 		
// 	返回值：
// 		'&lt;div&gt;Tom&amp;Jerry&lt;/div&gt; '
// 	escapeHTML('<input type="text" name="mobile"> '); 		
// 	返回值：
// 		'&lt;inputtype=&quot;text&quot; name=&quot;mobile&quot;&gt; '
// 请写出函数escapeHTML的实现代码。
function escapeHTML(htmlStr){
	var reg = /[<>"&\s]/g;
	var result=htmlStr.replace(reg,function(m){
		switch(m){
			case '<':
				return '&lt;';
			case '>':
				return '&gt';
			case '"':
				return '&quot;';
			case '&':
				return '&amp;';
			case ' ':
				return '';
		}
	});
	return result;
}
escapeHTML('<input type="text" name="mobile"> '); 
