function Circle(radius){
	this.radius=radius;
}
Circle.prototype.getPerimeter=function(){
	console.log(this);
	return 2*Math.PI*this.radius;
}
Circle.prototype.getArea=function(){
	return Math.PI*Math.pow(this.radius,2);
}
Circle.prototype.l=1;
var c = new Circle(2);
console.log(c.getPerimeter());
console.log(c.getArea());
function B(){
}
B.prototype=new Circle(8);
var b=new B();
var c=new B();
b.l=2;
console.log(c.l);

function Circle(radius){
	this.radius=radius;
	this.getPerimeter=function(){
		console.log(this);
		return 2*Math.PI*this.radius;
	}
	this.getArea=function(){
		return Math.PI*Math.pow(this.radius,2);
	}
}
function B(){

}
B.prototype=new Circle(8);
// var c = new Circle(2);
console.log(c.getPerimeter());
console.log(c.getArea());
console.log(new B());