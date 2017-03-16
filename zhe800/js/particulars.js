$(function(){
	var a,b,c,d;  //a:尺码；b:颜色;
	var sizestr;
	var colorstr;
//	尺码:S M L XL 点击选中
	$("#detail_box .size ul li").click(function(){
		$(this).addClass("backgd").siblings().removeClass("backgd");
		sizestr = $(this).index();  //获取当前点击的下标；
//		alert(sizestr)
		a = 1;
		})
	//颜色分类
	$("#detail_box .color ul li").click(function(){
		$(this).addClass("backgrd").siblings().removeClass("backgrd");
//		$(this).addClass("dui").siblings().removeClass("dui");
		colorstr = $(this).index();
		b = 1;
		})
	
//购买 数量的加减	
	$("#detail_box .count ul .add").click(function(){
		var counts = $("#detail_box .count ul .num");
		var countval = counts.val();
		countval++;
		$(counts).attr("value",countval);
	})	
	$("#detail_box .count ul .subtract").click(function(){
		var counts = $("#detail_box .count ul .num");
		var countval = counts.val();
		countval--;
		if(countval < 1){
			countval = 1;			
		}		
		$(counts).attr("value",countval);		
	})
	

	
//放大镜效果

//鼠标滑上小图,上面大图相应改变（放大镜）
	$("#detail_box .pic_small img").mouseenter(function(){
		var pic = $("#detail_box .pic img");   //正常图片的数组
		$(pic).eq($(this).index()).show().siblings().hide();
//	右边隐藏大图改变	
		var picbig = $("#detail_box .pic_big img");		
		$(picbig).eq($(this).index()).show().siblings().hide();
	})

//		鼠标移入,遮罩、大图出现;
		$("#detail_box .pic").mouseenter(function(){
			$("#detail_box .pic .point").show();
			$("#detail_box .pic_big").show();
		})
//		鼠标移出,遮罩、大图消失;
		$("#detail_box .pic").mouseleave(function(){
			$("#detail_box .pic .point").hide();
			$("#detail_box .pic_big").hide();
		})



//鼠标滑动上正常图片的时候
	$("#detail_box .pic").mousemove(function(evt){
		var pointer = $("#detail_box .pic .point"); //遮罩移动图层
		var boxpic = $("#detail_box .pic");      //正常图
		//需要加滚动条  $(document).scrollLeft()
		var offsetX = evt.clientX - boxpic.offset().left - pointer.width()/2 + $(document).scrollLeft();
		var offsetY = evt.clientY - boxpic.offset().top - pointer.height()/2 + $(document).scrollTop();
		if(offsetX < 0){
			offsetX = 0;
		}else if(offsetX >  boxpic.width() - pointer.width()){
			offsetX = boxpic.width() - pointer.width();
		}
		if(offsetY < 0){
			offsetY = 0;
		}else if(offsetY > boxpic.height() - pointer.height()){
			offsetY = boxpic.height() - pointer.height();
		}	
		$(pointer).css({
			"left":offsetX,
			"top":offsetY
		})
		
		 var bigimg = $("#detail_box .pic_big img");
		 var percent = 800/boxpic.width();  //大图宽度/盒子宽度；
		 var bigoffsetX = -offsetX*percent;   //不需要加px,需要加负号；
		 var bigoffsetY = -offsetY*percent;   //不需要加px，需要加负号；
		 bigimg.css({
		 	"left":bigoffsetX,
		 	"top":bigoffsetY
		 })	
	})



//========存cookie
		var array = [];
		$(".description .join").click(function(){
			if(a == 1 && b == 1){
//			尺码内容
			var sizemain = $("#detail_box .size ul li").eq(sizestr).html()  //需要要先点击尺码，才会有“sizestr”的下标值；
			var colornum = colorstr;  //颜色分类小图片的下标；
			var countsbuy = $("#detail_box .count ul .num").val();   //购买数量；
//		存入cookie;	
			$.cookie("size",sizemain,{expires:7});
			$.cookie("color",colornum,{expires:7});
			$.cookie("count",countsbuy,{expires:7});
//		读取保存cookie：
			
			var cookieObj = {
				"sizec" : $.cookie("size"),
				"colorc": $.cookie("color"),
				"countc":$.cookie("count")
			}
			array.push(cookieObj);
//			alert(array.length)
			var cookiestr = JSON.stringify(array)  //转化为字符串；
			$.cookie("cookieobj",cookiestr,{expires:7})
			
//			window.location.href = "../html/shopping.html";   //点击加入购物车，链接到购物车页面；
			}else{
				alert("请完善您所选商品信息")
			}
		})

//右边轮播图
	var k = 0;
	var j = 0;
	$ul = $(".detail_right .main ul");
	$(".detail_right .let").click(function(){   //点击上
		
		k++;
		if(k == 4){     // k = 4;
			k = 1;      //  k = 1;
			$ul.css("top",0);
		}
		$ul.stop().animate({"top":-480*k},500);   //需要加1000秒，需要加k; 需要加stop()
//		$ul.css("top",-480*k);       //******  不需要这一步；
	})
	
	$(".detail_right .rit").click(function(){  //点击下
		k--;
		if(k == -1){       //k = -1
			k = 2;         //k = 2;
			$ul.css("top",-480*3);
		}
		$ul.stop().animate({"top":-480*k},500);   //需要加1000秒，需要加k; 需要加stop()
//		$ul.css("top",-480*j);    //不需要这一步		
	})

//========选项卡
		$("#tab > li").click(function () {
	        //alert($(this).index())
	        $("#tab > li").removeClass('hover');
	        $(this).addClass("hover");
	        $(".menu_content").addClass('hid');
	        $(".menu_content:eq("+$(this).index()+")").removeClass('hid');
        })


//工具条  （右侧，返回顶部）
    $("#toolbar .li10").click(function(){
    	$("body,html").animate({"scrollTop":0});
    })

		







})