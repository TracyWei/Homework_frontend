function getComputedStyle(element){
	if(window.getComputedStyle){
		return window.getComputedStyle(element);
	}
	else{
		return element.currentStyle;
	}
}