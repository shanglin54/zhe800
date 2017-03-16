$(function(){
		//	显示/隐藏 淘宝.微博的登录账号
		$("#en-mainbox .showhide").click(function(){
			$("#en-mainbox .userid").slideToggle();
		})	
		
//		获取cookie  登录
		 

		$("#en-mainbox .btn").click(function(){
		    $name = $("#en-mainbox .name").val();
		 	$passw = $("#en-mainbox .passw").val();
			
			if($name != $.cookie("user")){
				alert("您输入的用户名有误");
				return false;
			}
			if($passw != $.cookie("passwor")){
				alert("您输入的密码有误");
				return false;
			}
			window.location.href="../index1.html";	
//			if($name == $.cookie("user") && $passw == $.cookie("passwor")){
//				 window.location.href="../index1.html";	 
//		}else{
//			alert("输入有误")
//		}
			
})

	
		
})		