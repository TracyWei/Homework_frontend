function getElementsByClassName(element,names){
	if(element.getElementByClassName){
		return element.getElementByClassName(names);
	}
	else{
		var children = element.getElementByTagName("*");
		var flag,classNameStr,child;
		var result = [];
		names = names.split(' ');
		for(var i = 0; child = children[i];i++){
			classNameStr = ' '+ child.className +' ';
			flag = true;
			for(var j = 0,name; name = names[j];j++){
				if(classNameStr.indexOf(' '+name+' ') == -1){
					flag = false;
					break;
				}
			}
			if(flag){
				result.push(child);
			}
		}
		return result;
	}
}