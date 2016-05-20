// 斐波那契数列（Fibonacci Sequence）由 0 和 1 开始，之后的斐波那契数就由之前的两数相加。在数学上，斐波那契数列是以递归的方法来定义的：

// 请实现一个函数，参数为n，返回结果为以n为下标的斐波那契数。函数语法为
// var num = fibonacci(n);
// 使用举例如下
// var num = fibonacci(3); // num值等于2
// var num = fibonacci(5); // num值等于5
//方法1：递归，时间复杂度O(n2)，空间复杂度O(n)
function fibonacci(n){
	if(n<=1){
		return n;
	}
	else{
		return fibonacci(n-2)+fibonacci(n-1);
	}
}
fibonacci(5);
//方法二：非递归，时间复杂度O(n),空间复杂度O(1)
function fibonacci(n){
	var a,b,result;
	a = 0;
	b = 1;	
	if(n<=1){
		return n;
	}
	else{
		for(var i=2;i<=n;i++){
			result = a + b;
			a = b;
			b = result;
	}
		return result;
	}	
}
fibonacci(5);
//方法三：非递归，时间复杂度O(n),空间复杂度O(n)
function fibonacci(n){
	var result = [0,1];
	if(n<=1){
		return n;
	}
	else{
		for(var i = 2;i<=n;i++){
			result[i] = result[i-2] + result[i-1];
		}
		return result[n];
	}
}
fibonacci(5);
