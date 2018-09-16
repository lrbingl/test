$(function(){
	$('#down').click(function (){
        $('.nav_bottom').toggle();
        return false;
    });
    // top
 //    $(".fix_icon .top").on("click",function(){
	// 	$(document).animate({
	// 		scrollTop:0
	// 	},1000)

	// })
	$(".fix_icon .top").click(function(){
		$("html,body").animate({
			scrollTop:0
		},1000)
	})
    $(window).on("scroll",function(){
		if($(window).scrollTop()>100){
			$(".fix_icon .top").css("display","block")
		}else{
			$(".fix_icon .top").css("display","none")
	}
	})
	$(".show_btn").click(function(){
		$(".login ").toggle();	
	}).on("click",function(){
		$("#mask").toggle();
		
	})
	$(".close_login").click(function(){
		$(".login ").hide();
		$("#mask").hide();
	})
	$(".img_input").click(function(){
		$(".img_input img").toggle();

	})
})