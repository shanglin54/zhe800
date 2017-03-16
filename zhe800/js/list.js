$(function(){
	$.getJSON("../js/list.json",function(res){		
		var brand = res.all;
//		alert(brand.length)
		$(brand).each(function(i){
			var braname = brand[i]      //循环每一个内容
			$a = $("<a></a>");       //前面要加$a,要不然所有a都改了
			$li = $("<li></li>")
			$a.html(braname);
			$li.append($a);
			$("#allbrands-box ul").append($li)
		})
		$("#allbrands-box ul li a").eq(0).css({"color":"red","font-weight":700})    //加个a		

//===========热卖品牌==图片========
		var hotSale =  res.hotsale;
//		alert(hotSale)
		$(hotSale).each(function(j){			
			var hot = hotSale[j]
			var hotimg = hot.img
			$img = $("<img/>")
			$img.attr("src",hotimg)
			$a = $("<a>")
			$li = $("<li>");
			
			$a.append($img);
			$li.append($a);
			$("#Brandselling-box .br-pic ul").append($li);
			
		})
		
		$(".br-pic li img").mouseover(function(){
			$(this).addClass("bottom")
			
			
		})
		$(".br-pic li img").mouseout(function(){
				$(this).removeClass("bottom")
			})


//==============品牌爆款===========
		var hotstyle = res.Hotstylepic;
		$(hotstyle).each(function(i){
			var hotdis = hotstyle[i].discount;    //全场3折起
			var hotses = hotstyle[i].session;	  //雪花秀护肤专场
			var hotlook = hotstyle[i].look;       //去看看
			var hotpho = hotstyle[i].photos;      //img
//			alert(hotpho)
			$img = $("<img>").attr("src",hotpho)
			$p = $("<p>").html(hotdis);
			$h = $("<h3>").html(hotses);
			$a = $("<a>").html(hotlook);
			$li = $("<li>").append($img,$p,$h,$a);
			
			$("#Hotstyle-box .br-pic ul").append($li)		
		})	
	})
	
	
//工具条  （右侧，返回顶部）
		$("#toolbar .li10").click(function(){
			$("html,body").animate({"scrollTop":0});       //返回顶部

		})



})
