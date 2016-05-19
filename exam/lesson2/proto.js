// ES5中定义的Object.create(proto)方法，会创建并返回一个新的对象，这个新的对象以传入的proto对象为原型。
// 语法如下：
//     Object.create(proto)  （注：第二个参数忽略）
//         proto —— 作为新创建对象的原型对象
// 使用示例如下：
//     var a = Object.create({x: 1, y: 2});
//     alert(a.x);
// Object.create在某些浏览器没有支持，请给出Object.create的兼容实现。
if(typeof Object.create!='function'){
	Object.create=function(obj){
		if(typeof obj!='object'){
			throw TypeError('Object prototype may only be null or an Object!');
		}
		var P = function(){};
		p.prototype = obj;
		return new P;
	}
}
var a = Object.create({x:1,y:2});
console.log(a.x);