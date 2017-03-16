$(function(){                  //顶头  鼠标滑上去显示的二维码（手机版）
	$("#topbox .phone").mouseover(function(){
		$(".phone .qrdroid").show();
	})
	$("#topbox .phone").mouseleave(function(){
		$(".phone .qrdroid").hide();
	})
	
//nav 导航条 点击变换背景；
	$("#headbox .nav ul li").click(function(){
		$(this).addClass("model").siblings().removeClass("model");
	})
	
	
	
	
	
//轮播图
	
	time= setInterval(playauto,2000)
	var count = 0;
	var k = 0;
	function playauto(){
		count++;
		if(count == 6){
			$(".rotation .pic>ul").css("left","0")
			count = 1;
		}
		$(".rotation .pic>ul").animate({"left":-1030*count},1000);
//		小圆点跟着变换颜色
		k++;
		if(k == 5){
			k = 0;
		}
		$(".rotation ol li").eq(k).addClass("bianse").siblings().removeClass("bianse")
	}
	//鼠标滑上去停止 ，离开继续 轮播
		$(".rotation").mouseover(function(){
			clearInterval(time);
		})
		$(".rotation").mouseout(function(){
			time = setInterval(playauto,2000);
		})
//	当鼠标点击小圆点的时候,图片切换至当前;
		$(".rotation ol li").click(function(){
			$(this).addClass("bianse").siblings().removeClass("bianse");
			k = $(this).index();    //把当前索引值付给变量K；
			count = k;
			$(".rotation .pic>ul").animate({"left":-1030*k});
		})
	
	
	
//	获取json 设置    左侧导航：
		$.getJSON("json/index2.json",function (res) { // 引用的json文件前,不加../
			var html;
//			var str;
			$(res).each(function(i){
				var product = res[i];
//				先获取json里的数据
				var name1 = product.name1;
				var name2 = product.name2;
				var type1 = product.type1;	
				var type2 = product.type2;
				var imgs = product.img;
				//创建标签；
				$left = $("<div class='left'></div>")
				$top = $("<div class='top'></div>")
				$bottom = $("<div class='bottom'></div>")
				$right = $("<div class='right'></div>")
				$ul1 = $("<ul></ul>");
				$ul2 = $("<ul></ul>");
				//添加内容；				
				$pmain1 = $("<p></p>").text(name1);
				$pmain2 = $("<p></p>").text(name2)
				
				$(type1).each(function(i){
					var typever1 = type1[i];
//					alert(typever1)
					$li1 = $("<li></li>").append(typever1);	
					$ul1.append($li1);
				});
				
				$(type2).each(function(i){
					var typever2 = type2[i];
					$li2 = $("<li></li>").append(typever2);
					$ul2.append($li2);
				})
				
				$(imgs).each(function(i){
					var img = imgs[i];
					$pic = $("<img/>").attr("src",img);
					$right.append($pic);
				})
				
				$top.append($pmain1,$ul1);
				$bottom.append($pmain2,$ul2);
				$left.append($top,$bottom);
				
				$(".dress").eq(i).append($left,$right);  //分别添加进相对应的隐藏div
	})
                   
})
	

//左侧导航,鼠标滑上去,右侧在轮播图上展开;
			$("#bannerbox .ban-nav ul>li").mouseover(function(){
				$(this).children(".dress").show();
			})
			$("#bannerbox .ban-nav ul>li").mouseout(function(){
				$("#bannerbox ul .dress").hide();
			})
		
	
	$(".br-show>img").mouseover(function(){
//		alert("dd")
		$(this).animate({"opacity":0.6})
	})
	$(".br-show>img").mouseout(function(){
//		alert("dd")
		$(this).animate({"opacity":1})
	})
	
	
	
	
	
	
//工具条  （右侧，返回顶部）
		$("#toolbar .li10").click(function(){
			$("html,body").animate({"scrollTop":0});       //返回顶部

		})





	
})
