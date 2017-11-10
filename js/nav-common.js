	      $(function(){
	      	var images1 = ['img/nav-1-1.jpg', 'img/nav-1-2.jpg','img/nav-1-3.jpg','img/nav-1-4.jpg','img/nav-1-5.jpg','img/nav-1-6.jpg']; 
	      	var images2 = ['img/nav-10-1.jpg', 'img/nav-10-3.jpg','img/nav-10-4.jpg','img/nav-10-5.jpg','img/nav-10-6.jpg','img/nav-10-7.jpg'];
	      	var images3 = ['img/nav-2-1.jpg','img/nav-2-2.jpg','img/nav-2-3.jpg','img/nav-2-4.jpg','img/nav-2-5.jpg','img/nav-2-6.jpg','img/nav-2-7.jpg','img/nav-2-8.jpg','img/nav-2-9.jpg' ];
	      	var images4 = ['img/nav-3-1.jpg','img/nav-3-2.jpg','img/nav-3-3.jpg','img/nav-3-4.jpg'];
	      	var images5 = ['img/nav-4-1.jpg','img/nav-4-2.jpg','img/nav-4-3.jpg','img/nav-4-4.jpg'];
	      	var images6 = ['img/nav-5-1.jpg','img/nav-5-2.jpg','img/nav-5-3.jpg','img/nav-5-4.jpg','img/nav-5-5.jpg'];
		    $(".li_nav1").mouseover(function(){
				$(this).children("div").show();
		   })

		   $(".li_nav1").mouseout(function(){
				$(this).children('div').hide();
		  })
		   
		  $("#nav1_1").mouseover(function(){
		  		$("#img_nav1_1").attr("src",images1[0]); 
		  })
		  $("#nav1_2").mouseover(function(){
		  	$("#img_nav1_1").attr("src",images1[1]); 
		  })
		  $("#nav1_3").mouseover(function(){
		  		$("#img_nav1_1").attr("src",images1[2]); 
		  })
		   $("#nav1_4").mouseover(function(){
		  		$("#img_nav1_1").attr("src",images1[3]); 
		  })
		   $("#nav1_5").mouseover(function(){
		  		$("#img_nav1_1").attr("src",images1[4]); 
		  })
		   $("#nav1_6").mouseover(function(){
		  		$("#img_nav1_1").attr("src",images1[5]); 
		  })
		   $("#nav2_1").mouseover(function(){
		  		$("#img_nav2_1").attr("src",images2[0]); 
		  })
		   $("#nav2_3").mouseover(function(){
		  		$("#img_nav2_1").attr("src",images2[1]); 
		  })
		    $("#nav2_4").mouseover(function(){
		  		$("#img_nav2_1").attr("src",images2[2]); 
		  })
		     $("#nav2_5").mouseover(function(){
		  		$("#img_nav2_1").attr("src",images2[3]); 
		  })
		      $("#nav2_6").mouseover(function(){
		  		$("#img_nav2_1").attr("src",images2[4]); 
		  })
		       $("#nav2_7").mouseover(function(){
		  		$("#img_nav2_1").attr("src",images2[5]); 
		  })
		  
		  
		  $("#nav3_1").mouseover(function(){
		  		$("#img_nav3_1").attr("src",images3[0]); 
		  })
		  $("#nav3_2").mouseover(function(){
		  		$("#img_nav3_1").attr("src",images3[1]); 
		  })
		  $("#nav3_3").mouseover(function(){
		  		$("#img_nav3_1").attr("src",images3[2]); 
		  })
		  $("#nav3_4").mouseover(function(){
		  		$("#img_nav3_1").attr("src",images3[3]); 
		  })
		  $("#nav3_5").mouseover(function(){
		  		$("#img_nav3_1").attr("src",images3[4]); 
		  })
		  $("#nav3_6").mouseover(function(){
		  		$("#img_nav3_1").attr("src",images3[5]); 
		  })
		  $("#nav3_7").mouseover(function(){
		  		$("#img_nav3_1").attr("src",images3[6]); 
		  })
		  $("#nav3_8").mouseover(function(){
		  		$("#img_nav3_1").attr("src",images3[7]); 
		  })
		  $("#nav3_9").mouseover(function(){
		  		$("#img_nav3_1").attr("src",images3[8]); 
		  })
		  
		   $("#nav4_1").mouseover(function(){
		  		$("#img_nav4_1").attr("src",images4[0]); 
		  })
		    $("#nav4_2").mouseover(function(){
		  		$("#img_nav4_1").attr("src",images4[1]); 
		  })
		     $("#nav4_3").mouseover(function(){
		  		$("#img_nav4_1").attr("src",images4[2]); 
		  })
		      $("#nav4_4").mouseover(function(){
		  		$("#img_nav4_1").attr("src",images4[3]); 
		  })
		  
		   $("#nav5_1").mouseover(function(){
		  		$("#img_nav5_1").attr("src",images5[0]); 
		  })
		    $("#nav5_2").mouseover(function(){
		  		$("#img_nav5_1").attr("src",images5[1]); 
		  })
		     $("#nav5_3").mouseover(function(){
		  		$("#img_nav5_1").attr("src",images5[2]); 
		  })
		      $("#nav5_4").mouseover(function(){
		  		$("#img_nav5_1").attr("src",images5[3]); 
		  })
		       $("#nav5_5").mouseover(function(){
		  		$("#img_nav5_1").attr("src",images5[4]); 
		  })
		       
		  
		   $("#nav6_1").mouseover(function(){
		  		$("#img_nav6_1").attr("src",images6[0]); 
		  })
		    $("#nav6_2").mouseover(function(){
		  		$("#img_nav6_1").attr("src",images6[1]); 
		  })
		     $("#nav6_3").mouseover(function(){
		  		$("#img_nav6_1").attr("src",images6[2]); 
		  })
		   $("#nav6_4").mouseover(function(){
		  		$("#img_nav6_1").attr("src",images6[3]); 
		  })
		    $("#nav6_5").mouseover(function(){
		  		$("#img_nav6_1").attr("src",images6[4]); 
		  })
		    
		    
		  
		Qfast.add('widgets', { type: "js", requires: ['fx'] });  
		Qfast(false, 'widgets', function () {
			K.tabs({
				id: 'fsD1',   //焦点图包裹id  
				conId: "D1pic1",  //** 大图域包裹id  
				tabId:"D1fBt",  
				tabTn:"a",
				conCn: '.fcon', //** 大图域配置class       
				auto: 1,   //自动播放 1或0
				effect: 'fade',   //效果配置
				eType: 'click', //** 鼠标事件
				pageBt:true,//是否有按钮切换页码
				bns: ['.prev', '.next'],//** 前后按钮配置class                          
				interval: 3000  //** 停顿时间  
			}) 
		})  
		$("#scroll_content #img_message ul li").mouseover(function(){
		   $(this).children(".message_title").show();
		})
		$("#scroll_content #img_message ul li").mouseout(function(){
		   $(this).children(".message_title").hide();
	    })
		
		$w = $('.img_qcode').width();
		$h = $('.img_qcode').height();
		$w2 = $w + 20;
		$h2 = $h + 20;
		$('.img_qcode').hover(function(){
			$(this).css("z-index",100);
			 $(this).stop().animate({height:$h2,width:$w2,left:"-10px",top:"-10px"},100);
		},function(){
			$(this).css("z-index",50);
			 $(this).stop().animate({height:$h,width:$w,left:"0px",top:"0px"},100);
		});
	
	})
	      

