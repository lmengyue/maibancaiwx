//仓库
$('.head-index div').click(function(){
	$('.meng').show();
	$('.warehouse').css('bottom','0');
})
$('.warehouse span').click(function(){
	$('.meng').hide();
	$('.warehouse').css('bottom','-6rem');
})
$('.warehouse li').click(function(){
	$('.head-index div label').html($(this).html());
	$('.meng').hide();
	$('.warehouse').css('bottom','-6rem');
	$(this).addClass('active').siblings().removeClass('active');
})
//头部输入框
$('.head-index input').keyup(function(e){
	if($(this).val()!=''){
		$(this).css('background-image','none');
	}else{
		$(this).css({'background-image':'url(images/inputSearch.png)','background-size': '2.34rem .66rem','background-repeat': 'no-repeat'});
	}
	if(e.keyCode==13){
		//搜索
		
		
	}
})
//首页轮播
mui.init();
var i=0;
var long=$('.scroll-box .scroll-long img').length;
$('.scroll-box .scroll-long').append($('.scroll-box .scroll-long img').eq(0).clone());
$('.scroll-box .scroll-long').prepend($('.scroll-box .scroll-long img').eq(long-1).clone());
var newlong=$('.scroll-box .scroll-long img').length;
$('.scroll-box .scroll-long').css('width',6.6*newlong+'rem');
$('.scroll-box').on("swipeleft",function(){
    console.log("你正在向左滑动");
    i++;
    if(i>long-1){
    	i=0;
    	$('.scroll-box .scroll-long').css('left','0rem');
    }
    $('.scroll-box .scroll-long').animate({'left':-(6.6*i+6)+'rem'},500);
});
$('.scroll-box').on("swiperight",function(){
    console.log("你正在向右滑动");
    i--;
    if(i<0){
    	i=long-1;
    	$('.scroll-box .scroll-long').css('left',-(6.6*long+6)+'rem');
    }
    $('.scroll-box .scroll-long').animate({'left':-(6.6*i+6)+'rem'},500);
});
setInterval(function(){
	i++;
	if(i>long-1){
    	i=0;
    	$('.scroll-box .scroll-long').css('left','0rem');
    }
    $('.scroll-box .scroll-long').animate({'left':-(6.6*i+6)+'rem'},500);
},6000)
//精品推荐宽度
$('.index-commend ul').css('width',$('.index-commend ul li').length*4.4+'rem');

//分类
$('.classify-tab ul li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.classify-content li').eq($(this).index()).show().siblings().hide();
})

//商品列表
$('.long-list div').each(function(){
	var x = $(this).find('a').length;
	$(this).css('width',x*1.5+'rem');
})

//商品详情
var gallery = mui('.mui-slider-detail');
gallery.slider({
  interval:3000//自动轮播周期，若为0则不自动播放，默认为0；
});
$('.mui-slider-detail span').html('1/'+ ($('.mui-slider-detail').find('.mui-slider-item').length-2));


$('.minus').click(function(){
	var num = $(this).parent().find('.num').val();
	num--;
	if(num<=0){
		num=0;
	}
	$(this).parent().find('.num').val(num);
})
$('.plus').click(function(){
	var num = $(this).parent().find('.num').val();
	num++;
	$(this).parent().find('.num').val(num);
})

$('.detail-tab div').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.detail-content li').eq($(this).index()).show().siblings().hide();
})

//购物车全选
$('.shopping-total input').change(function(){
	if($(this).is(':checked')) {
    	$("input[type='checkbox']").each(function(){
			$(this).prop("checked",true);
		});

	}else{
		$("input[type='checkbox']").each(function(){
			$(this).prop("checked",false);
		});

	}
})
//登录
$('.close-login').click(function(){
	$('.login').css('bottom','-9.6rem');
	$('.meng').hide();
})
$('.people-head img').click(function(){
	$('.login').css('bottom',0);
	$('.meng').show();
})
//发送验证码
$('.get-checkNum').click(function(){
	if($('.phone').val().length==11){
		$(this).attr('disabled','true');
		var i=60;
		var time='';
		time=setInterval(function(){
			i--;
			if(i>0){
				$('.get-checkNum').html(i+'秒');
			}else{
				clearInterval(time);
				$('.get-checkNum').html('免费获取');
				$('.get-checkNum').removeAttr('disabled');
			}
			
		},1000)
	}else{
		mui.alert('手机号格式不正确');
	}
})
//全部订单
$('.all-order .tab div').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
})

//我要定制
$('.order-classify select').change(function(){
//	if($(this).val()!='请选择'){
		$('.order select').removeAttr('disabled');
		$('.order input').removeAttr('disabled');
		$('.order li span').css('color','#4d4d4d');
//		$('.order li select').each(function(){
//			if($(this).val()!='请选择'){
//				$(this).css('color','#000');
//			}
//		})
//	}else{
//		$('.order select').attr('disabled','true');
//		$('.order input').attr('disabled','true');
//		$(this).removeAttr('disabled');
//		$('.order li span').css('color','#e6e6e6');
//		$('.order li select').css('color','#e6e6e6');
//		$('.no-other').show();
//		$('.other').hide();
//		$(this).css('color','#000');
//	}
	if($(this).val()=='生态板'){
		$('.no-other').show();
		$('.other').hide();
		$('.baozhuang').show();
		$('.baozhuang li').eq(0).show();
		$('.baozhuang li').eq(1).css('border-top','.01rem solid #d9d9d9');
		$('.order-color').show();
	}else if($(this).val()=='多层板'){
		$('.no-other').show();
		$('.other').hide();
		$('.baozhuang').show();
		$('.baozhuang li').eq(0).hide();
		$('.baozhuang li').eq(1).css('border-top','none');
		$('.order-color').hide();
	}else if($(this).val()=='包装板'){
		$('.no-other').show();
		$('.other').hide();
		$('.baozhuang').hide();
		$('.order-color').hide();
	}else if($(this).val()=='其他'){
		$('.no-other').hide();
		$('.other').show();
	}
	$('.order-classify span').css('color','#4d4d4d');
	$('.show-color select').attr('disabled','true');
});
$('.order li select').change(function(){
	if($(this).val()!='请选择'){
		$(this).css('color','#000');
	}else{
		$(this).css('color','#e6e6e6');
	}
})
//颜色选择
var color='请选择';
$('.show-color').click(function(){
	$('.order-color-box').css('right','0');
	$('.meng').show();
})
$('.order-color-box li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	color=$(this).find('p').html();
})
$('.order-color-box .queding').click(function(){
	$('.order-color-box').css('right','-6rem');
	$('.meng').hide();
	$('.show-color').html(color);
	$('.show-color').css('color','#000');
})
$('.order-color-box .quxiao').click(function(){
	$('.order-color-box').css('right','-6rem');
	$('.meng').hide();
})
