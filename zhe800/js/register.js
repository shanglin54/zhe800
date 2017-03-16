$(function(){
	var a,b,c;
		//	显示/隐藏 淘宝.微博的登录账号
		$("#re-mainbox .showhide").click(function(){
			$("#re-mainbox .userid").toggle();
		})	
		
//******======手机号 框=========
//alert(a)
		$("#re-mainbox form .phone").focus(function(){
			$(this).attr("placeholder","").css("border-color","#0A76D4")
			$("#re-mainbox form .hint").show().html("为了您的账户安全，请填写常用手机号").css("color","#999");
		})
		$("#re-mainbox form .phone").blur(function(){
			$(this).attr("placeholder","手机号码").css("border-color","#EA9292")
			$("#re-mainbox form .hint").html("请输入手机号码").css("color","#E02F2F");
		
//正则验证（手机号）：		
		$regularpho = $("#re-mainbox form .phone")
			if(!/^1[34578]\d{9}$/.test($regularpho.val())){
				$("#re-mainbox form .hint").html("手机号码格式错误");
			     
//				alert(a)
			}else{
				$("#re-mainbox form .hint").text("");
				a=1;
				
			}		
		})


//		alert(a)
		
//*******=========密码======
		$("#re-mainbox form .passwo").focus(function(){
			$(this).css("border-color","#0A76D4")
			$("#re-mainbox form .hint-pass").show().html("以字母开头，6~18之间，只能包含字符、数字、下划线").css("color","#999");
		})
		$("#re-mainbox form .passwo").blur(function(){
			$(this).css("border-color","#EA9292")
			$("#re-mainbox form .hint-pass").html("请输入密码").css("color","#E02F2F");
		
//正则验证（密码）：			
		$regularpass = $("#re-mainbox form .passwo")
			if(!/^[a-zA-Z]\w{5,17}$/.test($regularpass.val())){
				$("#re-mainbox form .hint-pass").html("密码格式错误");
				
//				alert(b)
			}else{
				$("#re-mainbox form .hint-pass").text("")
				b = 1
			}					
		})
			
//========确认密码============		
		$("#re-mainbox form .pass-affarm").focus(function(){
			$(this).css("border-color","#0A76D4")
			$("#re-mainbox form .hint-affirm").show().html("请再次输入您的密码").css("color","#999");
		})
		$("#re-mainbox form .pass-affarm").blur(function(){
			$regularpass = $("#re-mainbox form .passwo")
			$(this).css("border-color","#EA9292")
			$("#re-mainbox form .hint-affirm").html("确认密码不能为空").css("color","#E02F2F");
	//正则验证（再次确认密码）：		
		if($("#re-mainbox form .pass-affarm").val() != $regularpass.val() && $regularpass.val() != ""){
			$("#re-mainbox form .hint-affirm").html("两次密码输入不一致")
		}else{
			$("#re-mainbox form .hint-affirm").text("")
			c = 1;
		}		
		})
		
//*******验证码				
		$("#re-mainbox form .verification").focus(function(){
			$(this).css("border-color","#0A76D4")
			$("#re-mainbox form .verify").show().html("验证码").css("color","#999");
		})
		$("#re-mainbox form .verification").blur(function(){
			$(this).css("border-color","#EA9292")
			$("#re-mainbox form .verify").html("请输入验证码").css("color","#E02F2F");
			
			if($(this).val() == $("#re-mainbox form .gain").val()){
				$("#re-mainbox form .verify").text("")
			}else{
				$("#re-mainbox form .verify").text("输入验证码有误");

			}
			
			
		})
		
//=========获取手机验证码 按钮==========
		$("#re-mainbox form .gain").click(function(){
			var arr =[];
			for(var i=0;i<4;i++){
				var rd = getRandom(0,9);
					arr.push(rd);
			}		
				$arr = arr.join("");	
				$(this).attr("value",$arr)
			})

//随机产生4位数字
	function getRandom(init,end){
		var d = end+1-init;
		return Math.floor(Math.random()*d+init);
	}


//=========同意协议,注册登录、设置cookie============
// $("#re-mainbox form .check").checked;
// alert($("#re-mainbox form .check").checked())
 
		$("#re-mainbox form .btn").click(function(){
			$che = $("form .check").is(":checked");  //选中单选框
			$regularpho = $("#re-mainbox form .phone");
			$regularpass = $("#re-mainbox form .passwo");
			if(a == 1 &&　b == 1 && c == 1 && $che){
				$.cookie("user",$regularpho.val(),{expires:30});
				$.cookie("passwor",$regularpass.val(),{expires:30});
				 window.location.href="enter.html";	   
			}
		})














})
