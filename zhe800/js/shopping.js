$(function(){
//	全部商品,降价商品,底边变色;
	$(".nav_shop .left li").mouseenter(function(){
		$(this).addClass("model").siblings().removeClass("model");
	})
	

//	读取cookie对象	  
	 var str = JSON.parse($.cookie("cookieobj")); //从字符串解析出json对象；
//	 alert(str.length)	
		 var html = "";
		 var colorArr = ["栗色","蓝色","墨绿"];
//		 var subt = $(".price").html()*product.countc
		 var imgArr = ["../img/shop1.jpg","../img/shop2.jpg","../img/shop3.jpg"];
		$(str).each(function(i){			
			var product = str[i];
//			alert(imgArr[product.colorc])
			html += "<tr>"+
						"<td class='checkbox'><input class='check-one check' type='checkbox'/></td>"+
			            "<td class='goods'>" +
			            	"<img src=" + imgArr[product.colorc] + ">" +
			            	"<b class='col'>" + "颜色分类: " + "</b><span class='colorr'>" + colorArr[product.colorc] + "</span>" + "<br/>" +
			            	"<b class='col'>" + "尺码: " + "</b><span class='sizess'>" + product.sizec + "</span>" +
			            "</td>" +
			            "<td class='price'>" + "69.00" + "</td>" +
			            "<td class='count'><span class='reduce'></span><input class='count-input' type='text' value=" + product.countc + "><span class='add'>" + "+" + "</span></td>" +
//			            alert($("tr .price").text())
			            "<td class='subtotal'>" + ("69.00"*product.countc).toFixed(2) + "</td>" +
			            "<td class='operation'><span class='delete'>" + "删除" + "</span></td>" +
            		"</tr>";
				
				
// var subt = $(".price").html()*(product.countc);        //小计
//   var subto = parseFloat(subt).toFixed(2);
//	 $(".subtotal").html(subto); 
		})
		
		$("tbody").html(html);

//html += "<li>"+ "<img src="+product.src+"/>"+"<p>"+product.price+"</p>"+"<button>"+"加入购物车"+"</button>"+"</li>"

//var cookieObj = {
//				"sizec" : $.cookie("size"),
//				"colorc": $.cookie("color"),
//				"countc":$.cookie("count")
//			}

})
