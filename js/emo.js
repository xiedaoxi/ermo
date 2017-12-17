var a=0;
time();	
function time(){
	var tab1=document.getElementsByClassName('left-tab1');
	var tab2=document.getElementsByClassName('left-tab2');
	var tab3=document.getElementsByClassName('left-tab3');
	var tab4=document.getElementsByClassName('left-tab4');
	var tab5=document.getElementsByClassName('left-tab5');
	var img=document.getElementsByClassName('left');
	var att=document.getElementsByClassName('att');
	var weix=document.getElementsByClassName('weix')[0];
	for(var i=0;i<5;i++){                          //for循环保持img每个img不显示
		img[i].style.display='none';
		att[i].style.display='none';
	}

	a++;                                           //这里的a加1再运算if不然运行a-1时0-1=-1没有这个索引
	tab1[0].onclick=function(){
		img[0].style.display='block';
		a=0;
		clearTimeout(t)
		time();
	}
	tab2[0].onclick=function(){
		img[1].style.display='block';
		a=1;
		clearTimeout(t)
		time();
	}
	tab3[0].onclick=function(){
		img[2].style.display='block';
		a=2;
		clearTimeout(t)
		time();
	}
	tab4[0].onclick=function(){
		img[3].style.display='block';
		a=3;
		clearTimeout(t)
		time();
	}
	tab5[0].onclick=function(){
		img[4].style.display='block';
		a=4;
		clearTimeout(t)
		time();
	}
	var x=document.getElementsByClassName('tab-1')[0];
	var y=document.getElementsByClassName('tab-2')[0];
	x.onclick=function(){
		a-=2;
		if (a<0) {a=4}
		att[a].style.display='block';
		clearTimeout(t)
		time();
	}
	y.onclick=function(){
		if (a>4) {a=0}
		att[a].style.display='block';
		clearTimeout(t)
		time();
	}
	// jq用法
	// $('.left-tab1').click(function(){
	// 	$('.left:eq(0)').css('display','block')
	// 	a=0;
	// })
	if(a>5){a=1}
	img[a-1].style.display='block';                           //索引从0开始，长度从1开始，这里就要a-1=1-1=0索引
	att[a-1].style.display='block'; 
	                //这里不适合用setInterval会出现切换缺陷
}	
t=setInterval(function(){time()},6000) 
var text=false;
// $('.img-1tab').click(function(){
// 		text=!text;
// 		console.log(text)
// 	})

txt();
function txt(){
	var gka=document.getElementsByClassName('img-1tab')[0];
	gka.onclick=function(){
		 f=(text)? 'images/text-1_09.png':'images/text-2_09.png';
	document.getElementsByClassName('text-tab')[0].src=f;
	clearTimeout(tt)
		txt()
	}
	var gka2=document.getElementsByClassName('img-2tab')[0];
	gka2.onclick=function(){
		 f=(text)? 'images/text-1_09.png':'images/text-2_09.png';
	document.getElementsByClassName('text-tab')[0].src=f;
	clearTimeout(tt)
		txt()
	}
	text=!text;
	f=(text)? 'images/text-1_09.png':'images/text-2_09.png';
	document.getElementsByClassName('text-tab')[0].src=f;
	tt=setTimeout(function(){
	txt()
},3000)
}
var app=false;
img4time();
function img4time(){
	var img4=document.getElementsByClassName('img4-tab-1')[0];
	img4.onclick=function(){
		 ff=(app)? 'images/text4-1_03.png':'images/text4-2_03.png';
	document.getElementsByClassName('img4-tab4')[0].src=ff;
	clearTimeout(t4)
		img4time()
	}
	var img42=document.getElementsByClassName('img4-tab-2')[0];
	img42.onclick=function(){
		 ff=(app)? 'images/text4-1_03.png':'images/text4-2_03.png';
	document.getElementsByClassName('img4-tab4')[0].src=ff;
	clearTimeout(t4)
		img4time()
	}
	app=!app;
	ff=(app)? 'images/text4-1_03.png':'images/text4-2_03.png';
	document.getElementsByClassName('img4-tab4')[0].src=ff;
	t4=setTimeout(function(){img4time()},3000)
}

