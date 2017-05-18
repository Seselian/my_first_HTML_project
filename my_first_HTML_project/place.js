window.onload=function(){
			var btns=document.getElementsByTagName("button");
			var divs=document.getElementById("divs").getElementsByTagName("div");
			for(var i=0;i<btns.length;i++){
				btns[i].index=i;
				btns[i].onclick=function(){
					for(var i=0;i<divs.length;i++){
						// 隐藏
						divs[i].style.display="none";
					}
					// 显示
					divs[this.index].style.display="block";
				}
			}
		}