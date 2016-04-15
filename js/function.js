function getClass(classname,obj){//obj下面的classname
			obj=obj||document;
			alert(1)
			if (document.getElementsByClassName!=undefined) {
				return obj.getElementsByClassName(classname);//如果不支持就返回
			}else{
				var arr=[];
				var all=obj.getElementsByTagName("*");//获取所有的标签
				for (var i in arr) {
					if (check(all.className,classname)) {//如果标签名和需要的标签名一样就输出 
						arr.push(all[i]);
					}
				}
				return arr;
			}
			}
function check(oldclass,newclass) {
	var newarr=oldclass.split(" ");//把标签名用空格分割
	for (var j=0;j<newarr.length;j++) {
		if (newarr[j]==newclass) {//如果标签名和要获取的一样返回正确否则返回错误
			return true;
		}
	}
	return false;
}


   function text(obj,val){//obj对象   val获取或设置文本
   	if (val==undefined) {//如果传了一个参数val是undefined 就是获取文本
   		if (obj.textContent==undefined) {
   		return obj.innerText;//如果不支持textcontent就返回innerText
   	}else{
   		return obj.textContent;//否则就返回textcontent
   	}
   	}else{//如果val有值就是设置文本
   		if (obj.textContent==undefined) {//如果支持innerText就把值给了innerText
   		obj.innerText=val;
   	}else{
   		obj.textContent=val;//如果不支持innerhtml就把值给了textcontent
   	}
   }
}



//获取行内或外部的样式
   function getStyle(obj,attr){
	if (obj.currentStyle) {//如果支持currentStyle就返回
		return obj.currentStyle[attr];
	}else {
		return getComputedStyle(obj,null)[attr];//如果不支持currentStyle就返回getComputedStyle
	}
}
