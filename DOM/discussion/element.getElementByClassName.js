    	function getElementsByClassName(element, names) {
		    if (element.getElementsByClassName) {
		        return element.getElementsByClassName(names);
		    } else {
		        var elements = element.getElementsByTagName('*');
		        var result = [];
		        var element,
		            classNameStr,
		            flag;
		        names = names.split(' ');
		        for (var i = 0; element = elements[i]; i++) {
		            classNameStr = ' ' + element.className + ' ';
		            flag = true;
		            for (var j = 0, name; name = names[j]; j++) {
		                if (classNameStr.indexOf(' ' + name + '') == -1) {
		                    flag = false;
		                    break;
		                }
		            }
		            if (flag) {
		                result.push(element);
		            }
		        }
		        return result;
		    }
		}
