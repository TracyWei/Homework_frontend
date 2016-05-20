// 函数search用于在一个已排序的数字数组中查找指定数字。
// 语法如下：
// 	var index = search(arr, dst);
// 使用范例如下： 
// 	var arr = [1, 2, 4, 6, 7, 9, 19,20, 30, 40, 45, 47];
// 	search(arr, 45);		返回值： 10
// 请写出函数search的实现代码 请给出函数，要求不能使用Array的原型方法，且算法时间复杂度低于O(n)。
function search(arr,dst){
    var type = Object.prototype.toString.call(arr).slice(8,-1);
    if(type != 'Array'){
        throw TypeError('Object prototype may only be an Array!')
    }
    var len = arr.length;
    if( !len){
        return -1;
    }

    var l = 0;
    var h = len - 1;
    while(l <= h){
        var m = Math.floor( (h+l)/2 );
        if( arr[m] == dst ){
            return m;
        }else if( dst < arr[m] ){ //左半部分
            h = m - 1;
        }else{ //右半部分
            l = m + 1;
        }

    }
}
var arr = [1,2,4,6,7,9,19,20,30,40,45,47];
alert( search(arr,45) )