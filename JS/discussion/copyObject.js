function copy(obj){
	var obj2={};
	for(var i in obj){
		obj2[i]==obj[i];
	}
	return obj2;
}
var date=new Date1();
function Date1(){
	this.toString=function(){
		return 2;
	}
}
console.log(date.toString());
var myNumberp={
	value:1,
	add:function(i){
		var self=this;
		var helper=function(i){
			console.log(self);
			return self.value+=i;
		}
		return helper(i);
	}
}
console.log(myNumberp.add(1));
var myNumberp={
	value:1,
	add:function(i){
		var helper=function(i){
			console.log(self);
			return myNumberp.value+=i;
		}
		return helper(i);
	}
}
console.log(myNumberp.add(1));
// 注意：
// 1.for in循环遍历对象属性是会遍历原型链上的属性，加上hasOwnPrototype可以过滤掉原型链上的属性；
// 2.for in循环遍历对象的属性时，当属性值为null和undefined时在ECMA3中会出错，但ECMA5已经改过来了，但我们遍历时还是应该遍历一下特殊属性值
// 3.for in循环遍历对象属性时不是按顺序的，它的执行过程是遍历对象中的属性保存在i中，在不同的浏览器执行，遍历属性的顺序可能不一样
