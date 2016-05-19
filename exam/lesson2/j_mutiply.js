// 函数multiply用于计算多个数字的乘积。
// 语法如下：
// 	var product = multiply (number0, number1[, number2, ….])；
// 使用范例如下：
// 	multiply(2, 3);	 返回值： 6
// 	multiply(-1, 3, 4);	返回值： -12
// 	multiply(1, 2, 3, 4, 5);    返回值： 120
// 请写出函数multiply的实现代码。
function multiply(){
	var args = arguments;
	var result = 1;
	for(var i in args){
		result*=args[i];
	}
	return result;
}
multiply(1,2,3);