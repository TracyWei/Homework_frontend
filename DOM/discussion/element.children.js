// 如何实现浏览器兼容版的element.children
// element.children能够获取元素的元素子节点，但是低版本的ie不支持，如何在低版本的ie上兼容类似的功能。
function children(element){
	if(!element.children){
		//浏览器不支持elemet.children
		var elementNodes=[];
		var nodes = element.childNodes;
		for(var i in nodes){
			if(nodes[i].nodeType===1){
				//1: ELEMENT_NODE(元素节点), 3: TEXT_NODE(文本节点). 更多节点类型请参考XML DOM node Type.
				elementNodes.push(nodes[i]);
			}
		}
		return elementNodes;
	}
	else
		return element.children;
}