// 函数random用于生成0-999之间的随机整数。
// 语法如下：
//     var number = random();
//     number是0-999之间的整数。
function random(){
	var num = Math.floor(Math.random()*1000);
	return num;
}
var number=random();