// *
//  * 闭包使用举例1
//  * 将字符串中的一些特定字符按顺序用数组中的元素替换，例如：
//  * var arr = ['c','f','h','o'];
//  * var str = 'ab4de8g4ijklmn7';
//  * 替换后 str == 'abcdefghijklmno';
//  * replace的用法请参考https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// *
var arr = ['c','f','h','o'];
var str = 'ab4de8g4ijklmn1';
console.log(str);

var func = (function(){
  // count变量会保存在闭包作用域内，表示func被调用次数（即正在替换第几个字符）
  var count = 0; 
  return function(){
    return arr[count++]; 
  }
})();

str = str.replace(/\d/g, func)
console.log(str);

var car=function(){
	this.a=1;
	this.b=2;
	var self=this;
	this.fun1=function(){
		console.log(self.a);
	}
	this.add=function(){
		self.a++;
	}
}
var c=new car();
c.fun1();
c.add();
c.fun1()

// 闭包使用举例2 -- 封装
// 1.暴露type类型和start, stop, getStatus方法
// 2.隐藏status，light对象状态
var Car = function(type){
  var status = "stop",
      light = "off";
  return {
    type: type,
    start: function(){
      status = "driving";
      light = "on";
    },
    stop: function(){
      status = "stop";
      light = "off";
    },
    getStatus: function(){
      console.log(type + " is " + status + " with light " + light);
    }
	}
}
/**
闭包使用举例3 -- 性能优化1
减少函数定义时间和内存消耗
**/
// 不使用闭包
function sum(i, j) {
  var add = function(i, j){
    return i+j;
  }
  return add(i, j)
}
var startTime = new Date();
for(var i = 0; i< 1000000; i++) {
  sum(1,1);
}
var endTime = new Date();
console.log(endTime - startTime);

// // 使用闭包1
var sum = (function() {
  var add = function(i, j){
    return i+j;
  }
  return function(i,j) {
    add(i, j);
  }
})()
var startTime = new Date();
for(var i = 0; i< 1000000; i++) {
  sum(1,1);
}
var endTime = new Date();
console.log(endTime - startTime);
// // 使用闭包2
var sum = function() {
  var i=1,j=1;
  var add = function(i, j){
    return i+j;
  }
  return function(i,j) {
    add(i, j);
  }
}
var s = sum(1,1);
var startTime = new Date();
for(var i = 0; i< 1000000; i++) {
  s();
}
var endTime = new Date();
console.log(endTime - startTime);