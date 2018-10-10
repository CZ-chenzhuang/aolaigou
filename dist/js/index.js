$(".guide li").mouseenter(function(){
//	$(this).find("em").css("display","block");
	$(this).find("em").animate({width:'80px',left:'-70px'},500);
})
$(".guide li").mouseleave(function(){
//	$(this).find("em").css("display","block");
	$(this).find("em").css({width:"50px",display:"none",left:0});
})
//轮播
  var mySwiper = new Swiper ('.swiper-container', {
  	autoplay : 3000,
    direction: 'horizontal',
    autoplayDisableOnInteraction : false,
    effect : 'fade',
    loop: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
 	paginationClickable :true,   
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev', 
    // 如果需要滚动条
//  scrollbar: '.swiper-scrollbar',
})  