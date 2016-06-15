function Parent(name){
	this.name = name;//定义父类属性
}
Parent.prototype.getName = function(){
	console.log(this.name);//定义父类方法
}
function Child(firstName){
	Parent.call(this,"aaa");//继承父类的属性
	this.firstName = firstName;//定义子类的私有属性
}
Child.prototype = new Parent();//定义子类的原型为父类的实例
Child.prototype.constructor = Child;//定义子类的构造器为子类的构造器
Child.prototype.getName = function(){
	Parent.prototype.getName.call(this);//继承父类的方法
}
Child.prototype.getFirstName = function(){
	console.log(this.firstName);//定义子类的私有方法
}
var child = new Child("wang");
child.getName();
child.getFirstName();
