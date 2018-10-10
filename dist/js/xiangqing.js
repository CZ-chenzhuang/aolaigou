//guide
$(function() {
	$(".guide li").mouseenter(function() {
		//	$(this).find("em").css("display","block");
		$(this).find("em").animate({
			width: '80px',
			left: '-70px'
		}, 500);
	})
	$(".guide li").mouseleave(function() {
		//	$(this).find("em").css("display","block");
		$(this).find("em").css({
			width: "50px",
			display: "none",
			left: 0
		});
	})
	//详情页, 创建热卖商品 
	$.get("dist/json/xiangqing.json", function(data) {
		var obj = data.hot;
		//		console.log(obj);
		$.each(obj, function(key, value) {
			//				console.log(value);
			var str = `
						<li>
							<div class="hotPc">
								<a href="">
									<img src="${value.src}"/>
								</a>
							</div>
							<div class="hotTxt">
								<div class="hotTxt1">
									<a href="">${value.text}</a>
								</div>
								<div class="hotTxt2">
									${value.price}
								</div>
								<div class="hotTxt3">
									<a href="">立即抢购</a>
								</div>
							</div>
						</li>							
			`;
			$(".hotfr ul").append(str);
		});
	})
	//左侧推荐商品1
	$.get("dist/json/xiangqing.json", function(data) {
		var obj = data.sell;
		//			console.log(obj);
		$.each(obj, function(key, value) {
			//			console.log(value);
			var str = `
						<li>
							<a href="" class="aimg"><img src="${value.src}"/></a>
							<a href="" class="atxt">${value.text}</a>
							<span>${value.price}</span>
						</li>			
				
				`;
			$('.goodfl1 ul').append(str);
		})

	})
	//右侧商品
	$.get("dist/json/xiangqing.json", function(data) {
		var obj = data.goods;
		console.log(obj);
		$.each(obj, function(key, value) {
			var str = `
						<li>
							<a href="" class="erweima">
									<p>下载APP享优惠</p>
							</a>
							<a href="" class="apc"><img src="${value.src}"/></a>
							<div class="p1">
								<span>${value.span}</span>
								<del>${value.del}</del>
							</div>
							<div class="p2">
								<a href="">${value.text}</a>
							</div>
						</li>				
			
			`;
			$('.goodfrgoods ul').append(str);
		});
		
//		$('.apc img').on({
//			"mouseenter" : function(){
//				$(this).parent().prev().show();			
//			},
//			"mouseleave" : function(){
//				$(this).parent().prev().hide();
//			}
//		})	
//		$('.apc').mouseenter(function(){
//			$(this).prev().show();
//		})
//		$('.apc').mouseleave(function(){
//			$(this).prev().hide();
//		})
	})
	//滑入二维码显示
	$('body').on("mouseenter",'.apc img',function(){
		$(this).parent().prev().show();
	})
	$('body').on("mouseleave",'.apc img',function(){
		$(this).parent().prev().hide();
	})	
//	$('.apc img').on({
//		"mouseenter" : function(){
//			$(this).parent().prev().css("display","block");			
//		},
//	})
//	$('.apc img').mouseenter(function(){
//		console.log(1);
//		$(this).parent().siblings('.erweima').show();		
//	})
//	$('.apc img').mouseleave(function(){
//		$(this).parent().siblings('.erweima').hide();
//		console.log(2);
//	})	
//	console.log($('.apc img'));
//	$('.apc img').each(function(index,value){
//		$(this).parent().prev().css("display","block");				
//	})





})