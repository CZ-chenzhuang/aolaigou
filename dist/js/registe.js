$(".inforTxt1").text("");
$('.inforTxt p:first input').on({
	'click' : function(){
		$(this).parent().next('div').text("请输入注册的手机号").css("color","#666");
	},
	'blur' : function(){
		var reg = /0?(13|14|15|17|18|19)[0-9]{9}/;
		if(reg.test($(this).val())){
			$(this).parent().next('div').text("");
		}else{
			$(this).parent().next('div').text("账号暂时只开放手机号码注册").css("color","red");
		}
	}
})

