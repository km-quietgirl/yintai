window.onload=function(){
     

    // 头部选项卡
     var zhong=$(".log-weixin");
     var weixin=$(".select-weixin",$(".log-weixin")[0]);
     for(var i=0;i<zhong.length;i++){
     	zhong[i].index=i;
     	zhong[i].onmouseover=function(){
     		weixin[this.index].style.display="block";
     	}
     	zhong[i].onmouseout=function(){
     		weixin[this.index].style.display="none";
     	}
     }

     var you=$(".log-phone");
     var phone=$(".select-phone",$(".log-phone")[0]);
     for(var i=0;i<you.length;i++){
     	you[i].index=i;
     	you[i].onmouseover=function(){
     		phone[this.index].style.display="block";
     	}
     	you[i].onmouseout=function(){
     		phone[this.index].style.display="none";
     	}
     }

     var log=$(".log-home");
     var sel=$(".yintai-sel",$(".log-home")[0]);
     for(var i=0;i<log.length;i++){
     	log[i].index=i;
     	log[i].onmouseover=function(){
     		sel[this.index].style.display="block";
     	}
     	log[i].onmouseout=function(){
     		sel[this.index].style.display="none";
     	}
     }



     // 购物袋

     var Three=$(".three",$((".content2"),$("#hdmain"))[0]);
     
     var Bag=$(".bags",$((".content2"),$("#hdmain"))[0]);
     
     
     for(var i=0;i<Three.length;i++){
     	Three[i].index=i;
     	Three[i].onmouseover=function(){
     		Bag[this.index].style.display="block";
     	}
     	Three[i].onmouseout=function(){
     		Bag[this.index].style.display="none";
     	}
     }




     







 // banner轮播图
	var imgs=$("img",$((".content"),$("#banner"))[0]);
	var rolls=$("li",$((".roll"),$("#banner"))[0]);
	var btnl=$(".left",$((".btn"),$("#banner"))[0])[0];
	var btnr=$(".right",$((".btn"),$("#banner"))[0])[0];
 
	var box=$(".content",$((".banner1"),$("#banner"))[0])[0];
    
	
	rolls[0].style.background="#e5004f";
    var flag=true;
	var now=0;
	var t=setInterval(move,4000);
	 function move(){
	 	now++;
	 	if(now==imgs.length){
	 		now=0;
	 	}
	 	for(var i=0;i<imgs.length;i++){
	 		// imgs[i].style.display="none";
	 		animate(imgs[i],{opacity:0},function(){flag=true;});
	 		rolls[i].style.background="#3e3e3e";
	 	}
	 	   // imgs[now].style.display="block";
	 	   
	 	   rolls[now].style.background="#C81623";
	 	   animate(imgs[now],{opacity:1},function(){flag=true;});
	 }
	
	 for(var i=0;i<rolls.length;i++){
	 	rolls[i].index=i;
	 	rolls[i].onclick=function(){
	 		for(var i=0;i<imgs.length;i++){
	 		// imgs[i].style.display="none";
	 		animate(imgs[i],{opacity:0});
	 		rolls[i].style.background="#3e3e3e";
	 	}
	 	   // imgs[this.index].style.display="block";
	 	   
	 	   rolls[this.index].style.background="#C81623";
	 	   animate(imgs[this.index],{opacity:1});
	 	   now=this.index;
	 	}
	 }
	 box.onmouseover=function(){
	 	clearInterval(t);
	 	btnr.style.display="block";
	 	btnl.style.display="block";
	 }
	 box.onmouseout=function(){
	 	t=setInterval(move,4000)
	 	btnr.style.display="none";
	 	btnl.style.display="none";
	 }
	 btnr.onclick=function(){
	 	if(flag){
	 	 move();
	 	 flag=false;
	 	}
	 	
	 }
	 btnl.onclick=function(){
	 	if(flag){
	 	 movel();
	 	 flag=false;
	 	}
	 }

	 function movel(){
	 	now--;
	 	if(now==-1){
	 		now=imgs.length-1;
	 	}
         for(var i=0;i<imgs.length;i++){
	 		// imgs[i].style.display="none";
	 		animate(imgs[i],{opacity:0},function(){flag=true;});
	 		rolls[i].style.background="#3e3e3e";
	 	 }
	 	   // imgs[now].style.display="block";
	 	   
	 	   rolls[now].style.background="#C81623";
	 	   animate(imgs[now],{opacity:1},function(){flag=true;});
	 }



	// banner侧栏选项卡
     
     var menu=$('.menu-cate')[0];
	var menulis=$('.list',menu)[0];

	var mlisdl=$('dl',menulis);
	var contents=$('.content',menu);
	for(var l=0;l<mlisdl.length;l++){

		mlisdl[l].index=l;
		hover(mlisdl[l],function(){
			$('dt',menulis)[this.index].style.backgroundColor="#e5004f";
			contents[this.index].style.display="block";
		},function(){
			$('dt',menulis)[this.index].style.backgroundColor="";
			contents[this.index].style.display="none";
		})
	} 


	// brand  选项卡

	var BrandLi=$("li",$((".brand_content"),$("#brand"))[0]);
	var BrandSp=$("span",$((".brand_content"),$("#brand"))[0]);
	var BrandCo=$(".container",$((".brand_content"),$("#brand"))[0]);
    BrandLi[0].style.fontWeight="bold";
    BrandLi[0].style.borderBottom="5px solid #e5004f";
    BrandSp[0].style.display="block";
    for(var m=0;m<BrandCo.length;m++){
    	BrandLi[m].index=m;
        BrandLi[m].onmouseover=function(){
        	for(var j=0;j<BrandCo.length;j++){
        		BrandCo[j].style.display="none";
        		BrandLi[j].style.fontWeight="";
        		BrandLi[j].style.borderBottom="";
        		BrandSp[j].style.display="none";
        	}
        	    BrandCo[this.index].style.display="block";
        		BrandLi[this.index].style.fontWeight="bold";
        		BrandLi[this.index].style.borderBottom="5px solid #e5004f";
        		BrandSp[this.index].style.display="block";
        }
    }




    //brand 线条动画

   
    var BrandOne=$(".one_1",$((".eva"),$("#brand"))[0]);
    
    for(var e=0;e<BrandOne.length;e++){
		BrandOne[e].index=e;
		BrandOne[e].onmouseover=function(){
			animate($('.bt',BrandOne[this.index])[0],{width:220},500);
			animate($('.bl',BrandOne[this.index])[0],{height:260},500);
			animate($('.br',BrandOne[this.index])[0],{height:260},500);
			animate($('.bb',BrandOne[this.index])[0],{width:220},500);
		}
		BrandOne[e].onmouseout=function(){
			animate($('.bt',BrandOne[this.index])[0],{width:0},500);
			animate($('.bl',BrandOne[this.index])[0],{height:0},500);
			animate($('.br',BrandOne[this.index])[0],{height:0},500);
			animate($('.bb',BrandOne[this.index])[0],{width:0},500);
		}
	}



    // brand2选项卡

    var Brand2Li=$("li",$((".top"),$("#brand2"))[0]);
    var Brand2Sp=$("span",$((".top"),$("#brand2"))[0]);
    var Brand2S=$(".second",$((".slide1"),$("#brand2"))[0]);
    Brand2Li[0].style.fontWeight="bold";
    Brand2Li[0].style.borderBottom="3px solid #e70050"
    Brand2Sp[0].style.display="block";

    for(var n=0;n<Brand2S.length;n++){
    	Brand2Li[n].index=n;
    	Brand2Li[n].onmouseover=function(){
    		for(var k=0;k<Brand2S.length;k++){
                 Brand2S[k].style.display="none";
                 Brand2Li[k].style.fontWeight="";
                 Brand2Li[k].style.borderBottom="";
                 Brand2Sp[k].style.display="none";
    		}
    		     Brand2S[this.index].style.display="block";
                 Brand2Li[this.index].style.fontWeight="bold";
                 Brand2Li[this.index].style.borderBottom="3px solid #e70050";
                 Brand2Sp[this.index].style.display="block";
    	}
    }


    //brand2 线条动画
    var Brand2=document.getElementById('brand2');
	var slide1=getClass('slide1',Brand2)[0];
    var slide1S=getClass('second',slide1);
	var slideli=$('li',slide1S[1]);

    for(var f=0;f<slideli.length;f++){
		slideli[f].index=f;
		slideli[f].onmouseover=function(){
			animate($(('.bt'),slideli[this.index])[0],{width:198},500);
			animate($(('.bl'),slideli[this.index])[0],{height:248},500);
			animate($(('.br'),slideli[this.index])[0],{height:248},500);
			animate($(('.bb'),slideli[this.index])[0],{width:198},500);
		}
		slideli[f].onmouseout=function(){
			animate($(('.bt'),slideli[this.index])[0],{width:0},500);
			animate($(('.bl'),slideli[this.index])[0],{height:0},500);
			animate($(('.br'),slideli[this.index])[0],{height:0},500);
			animate($(('.bb'),slideli[this.index])[0],{width:0},500);
		}
	}



	//  brand4 线条动画
      var brand4C=getClass('brand4',document);
	   for(var i=0;i<brand4C.length;i++){
		var Brand4=getClass('brand4',document)[i];
		wheel(Brand4);
	   }
	function wheel(container){
		
		// 线条显示效果开始
		var right1=$('.right',Brand4)[0];
		var ri1A=$('a',right1);
		var Bl=$('.bl',right1);
		var Bt=$('.bt',right1);
		var Br=$('.br',right1);
		var Bb=$('.bb',right1);

		for(var a=0;a<ri1A.length;a++){
			ri1A[a].index=a;
			ri1A[a].onmouseover=function(){
				animate(Bl[this.index],{height:182},500);
				animate(Bt[this.index],{width:272},500);
				animate(Br[this.index],{height:182},500);
				animate(Bb[this.index],{width:272},500);
			}
			ri1A[a].onmouseout=function(){
				animate(Bl[this.index],{height:0},500);
				animate(Bt[this.index],{width:0},500);
				animate(Br[this.index],{height:0},500);
				animate(Bb[this.index],{width:0},500);
			}
		}



     // Brand4.center选项卡开始

		var Cen=getClass('center',Brand4)[0];
		var Container=getClass('container',Brand4)[0];
		var ConA=Container.getElementsByTagName('a');
		var Img=Container.getElementsByTagName('img');
		var CenU=getClass('lis',Brand4)[0];
		var CenLi=CenU.getElementsByTagName('li');
		var CenBtn=getClass('btn',Brand4)[0];
		var Prev=getClass('prev',CenBtn)[0];
		var Next=getClass('next',CenBtn)[0];

		CenLi[0].style.backgroundPosition="0 -13px";
		var ins=parseInt(getStyle(Img[0],"width"));
		// console.log(ins);
		Container.style.width=ins*(Img.length)+'px';


		// 鼠标移到标签上时显示按钮
		Cen.onmouseover=function(){
			animate(Prev,{left:0});
			animate(Next,{right:0});
		}
		Cen.onmouseout=function(){
			animate(Prev,{left:-30});
			animate(Next,{right:-30});
		}
		// 选项卡效果
		for(var m=0;m<CenLi.length;m++){
			CenLi[m].index=m;
			CenLi[m].onclick=function(){
				for(var k=0;k<CenLi.length;k++){
					CenLi[k].style.backgroundPosition="0 0";
				}
				animate(Container,{left:-ins*this.index});
				CenLi[this.index].style.backgroundPosition="0 -13px";
			}
		}
		// 按钮右键
		Next.onclick=function(){
			animate(Container,{left:-ins});
			for(var i=0;i<CenLi.length;i++){
				CenLi[i].style.backgroundPosition="0 0";
			}
			CenLi[1].style.backgroundPosition="0 -13px";
		}
		// 按钮左键
		Prev.onclick=function(){
			animate(Container,{left:0});
			for(var i=0;i<CenLi.length;i++){
				CenLi[i].style.backgroundPosition="0 0";
			}
			CenLi[0].style.backgroundPosition="0 -13px";
		}

		//  center 不透明度效果

		for(var w=0;w<ConA.length;w++){
    	 ConA[w].index=w;
    	  ConA[w].onmouseover=function(){
    		ConA[this.index].style.opacity='0.7';
    	  }
    	  ConA[w].onmouseout=function(){
    		ConA[this.index].style.opacity='1';
    	  }
        }
    

    }




    // 固定定位开始
	var fixed=$('#fixed');
	var fixA=$('a',fixed);
	fixed.style.display="none";
	var bran4=$('.brand4');
	var arr1=[];
	for(var m=0;m<bran4.length;m++){
		arr1.push(bran4[m].offsetTop);
	}
	fixA[0].style.backgroundColor="#e5004f";
	window.onscroll=function(){
		var tops=document.body.scrollTop||document.documentElement.scrollTop;
		if(tops>700){
			fixed.style.display="block";
		}
		else{
			fixed.style.display="none";
		}
		for(var i=0;i<bran4.length;i++){
			if(tops+200>arr1[i]){
				for(j=0;j<bran4.length;j++){
					fixA[j].style.cssText="";
				}
				fixA[i].style.cssText="background-color:orange;background-image:none;line-height:18px;background-color:#e5004f;color:#fff;font-size:14px;text-align:center;"
			}
		}
		fixA[bran4.length].onclick=function(){
			animate(document.body,{scrollTop:0},500);
			animate(document.documentElement,{scrollTop:0},500);
		}
	}
	// 选项卡效果开始
	for(n=0;n<bran4.length;n++){
		fixA[n].index=n;
		fixA[n].onclick=function(){
			animate(document.body,{scrollTop:arr1[this.index]-50},500);
			animate(document.documentElement,{scrollTop:arr1[this.index]-50},500);
			/*document.body.scrollTop=arr1[this.index];
			document.documentElement.scrollTop=arr1[this.index];*/
		}
	}
	// 选项卡效果结束
	// 固定定位结束
	// 按需加载开始
	var need=$('.need');
	var ih=document.documentElement.clientHeight;
	var arr2=[];
	var flag2=[];
	for(var ne=0;ne<need.length;ne++){
		arr2.push(need[ne].offsetTop);
		flag2.push(true);
		on(window,'scroll',function(){
			var tops=document.body.scrollTop||document.documentElement.scrollTop;
			for(var j=0;j<need.length;j++){
				var bb=$('img',need[j]);
				if((tops+ih)>arr2[j]&&(flag2[j])){
					flag2[j]=false;
					for(var k=0;k<bb.length;k++){
						bb[k].src=bb[k].getAttribute('asrc');
					}
				}
			}
		})
	}
	
	// 按需加载结束
	// nav显示隐藏浮动框开始
	var nav=$('#nav');
	var navL=$('.left',nav)[0];
	var wechat=$('.two',navL)[0];
	var wechat1=$('.wechat',wechat)[0];
	var wechatb=$('b',wechat)[0];
	var phone=$('.three',navL)[0];
	var phone1=$('.phone',phone)[0];
	var phoneb=$('b',phone)[0];
	var navR=$('.right',nav)[0];
	var navR2=$('.two',navR)[0];
	var navlis=$('.lis',navR2)[0];
	var navR2b=$('b',navR2)[0];
	
	wechat1.style.display="none";
	phone1.style.display="none";
	navlis.style.display="none";
	hover(wechat,function(){
		wechat1.style.display="block";
		this.style.cssText="background-color:#fff";
		wechatb.style.backgroundPosition="-175px -128px";
	},function(){
		wechat1.style.display="none";
		this.style.backgroundColor="";
		wechatb.style.backgroundPosition="-175px -111px";
	})
	hover(phone,function(){
		phone1.style.display="block";
		this.style.cssText="background-color:#fff";
		phoneb.style.backgroundPosition="-175px -128px";
	},function(){
		phone1.style.display="none";
		this.style.backgroundColor="";
		phoneb.style.backgroundPosition="-175px -111px";
	})
	hover(navR2,function(){
		navlis.style.display="block";
		this.style.cssText="background-color:#fff";
		navR2b.style.backgroundPosition="-175px -128px";
	},function(){
		navlis.style.display="none";
		this.style.backgroundColor="";
		navR2b.style.backgroundPosition="-175px -111px";
	})
	// nav显示隐藏浮动框结束

     




   // 小轮播效果

    var Floor2=$('.floor2',document);
	for(var k=0;k<Floor2.length;k++){
		 var Con4L=$('.floor2',document)[k];
		wheel1(Floor2[k]);
	}
	function wheel1(Con4L){
		var Onebox=$('.oneBox',Con4L)[0];
		var One=$('.one',Con4L);
		var Prev1=$('.prev',Con4L)[0];
		var Next1=$('.next',Con4L)[0];
		// console.log(One[0]);
		var iw=parseInt(getStyle(One[0],'width'));
		// console.log(iw);
		for(var i=0;i<One.length;i++){
			One[i].style.left=(iw+44)+'px';
		}
		One[0].style.left=0;
		Onebox.style.width=(iw+44)*2+'px';
		// 点击右键
		var self=0;
		var next=0;
		Next1.onclick=function(){
			next++;
			if(next==One.length){
				next=0;
			}
			One[next].style.left=(iw+44)+'px';
			animate(One[self],{left:-(iw+44)},500);
			animate(One[next],{left:0},500);
			self=next;
		}
		// 点击左键
		Prev1.onclick=function(){
			next--;
			if(next==-1){
				next=One.length-1;
			}
			One[next].style.left=-(iw+44)+'px';
			animate(One[self],{left:(iw+44)},500);
			animate(One[next],{left:0},500);
			self=next;
		}
	}


	// 固定定位效果


	var fixed=$('#fixed');
	var fixA=$('a',fixed);
	var bran4=$('.brand4');
	var nowing;
	var Chei=document.documentElement.clientHeight;
	for(var i=0;i<bran4.length;i++){
		bran4[i].h=bran4[i].offsetTop;
	}
	fixA[0].style.backgroundColor="#e5004f";
	window.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var tops=obj.scrollTop;
		if(tops>=bran4[0].h-500){
            fixed.style.display="block";
            var fixed_height=fixed.offsetHeight;
            fixed.style.top=(Chei-fixed_height)/2+"px";

		}else{
			fixed.style.display="none";
		}
		for(var i=0;i<bran4.length;i++){
			if(tops>=bran4.h-200){
				for( var j=0;j<bran4.length;j++){
					fixA[j].style.cssText="";
				}
				fixA[i].style.cssText="background-color:orange;background-image:none;line-height:18px;background-color:#e5004f;color:#fff;font-size:14px;text-align:center;"
				nowing=i;
			}
		}
		fixA[bran4.length].onclick=function(){
			animate(document.body,{scrollTop:0},500);
			animate(document.documentElement,{scrollTop:0},500);
		}


	}









	







    
    
    	
    




   




	
	






}