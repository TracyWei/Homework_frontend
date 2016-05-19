// 高版本的firefox,chrome及ie10以上的浏览器实现了Function.prototype.bind方法，bind方法调用语法为：
// functionObj.bind(thisArg[, arg1[, arg2[, ...]]])
// 使用范例参考如下:
// function move(x, y) {
//     this.x += x;
//     this.y += y;
// }
// var point = {x:1, y:2};
// var pointmove = move.bind(point, 2, 2);
// pointmove(); // {x:3, y:4}
// 但是低版本浏览器中并未提供该方法，请给出兼容低版本浏览器的bind方法的代码实现。
if(!Function.prototype.bind){
  Function.prototype.bind=function(obj){
    if(typeof this!=='function'){
      throw new TypeError('what is trying to be bound is not callable!');
    }
    var _self =  this;
    var args = arguments;
    return function(){
      _self.apply(obj,Array.prototype.slice.call(args,1));
    }
  }
}
// if (!Function.prototype.bind) {
//   Function.prototype.bind = function (oThis) {
//     if (typeof this !== "function") {
//       // closest thing possible to the ECMAScript 5 internal IsCallable function
//       throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
//     }

//     var aArgs = Array.prototype.slice.call(arguments, 1), 
//         fToBind = this, 
//         fNOP = function () {},
//         fBound = function () {
//           return fToBind.apply(this instanceof fNOP && oThis
//                                  ? this
//                                  : oThis || window,
//                                aArgs.concat(Array.prototype.slice.call(arguments)));
//         };
 
//     fNOP.prototype = this.prototype;
//     fBound.prototype = new fNOP();
 
//     return fBound;
//   };
// }
