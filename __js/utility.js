function Thony(){}

Thony.prototype.socialMenu = function(){
	jQuery('a.btnBehance').mouseenter(function(){
		jQuery(this).animate({
		  'background-position-y': '100%'
		}, 150, 'linear');
	});
	
	jQuery('a.btnBehance').mouseleave(function(){
		jQuery(this).animate({
		  'background-position-y': '0%'
		}, 150, 'linear');
	});
	
	jQuery('a.btnLinkedin').mouseenter(function(){
		jQuery(this).animate({
		  'background-position-y': '100%'
		}, 150, 'linear');
	});
	
	jQuery('a.btnLinkedin').mouseleave(function(){
		jQuery(this).animate({
		  'background-position-y': '0%'
		}, 150, 'linear');
	});
	
	jQuery('a.btnMenu').mouseenter(function(){
		jQuery(this).animate({
		  'background-position-y': '100%'
		}, 150, 'linear');
	});
	
	jQuery('a.btnMenu').mouseleave(function(){
		jQuery(this).animate({
		  'background-position-y': '0%'
		}, 150, 'linear');
	});
	
	jQuery('div.doyoulike').mouseenter(function(){
		jQuery(this).animate({
		  'opacity': '1'
		}, 150, 'linear');
	});
	
	jQuery('div.doyoulike').mouseleave(function(){
		jQuery(this).animate({
		  'opacity': '0.5'
		}, 150, 'linear');
	});
}

Thony.prototype.navMenu = function(){
	jQuery('a.btnMenu').click(function(){
		jQuery("ul#menu").animate({
		  'top': '0px'
		}, 250, 'linear');
	});
	
	jQuery('a.btnFecharMenu').click(function(){
		jQuery("ul#menu").animate({
		  'top': '-160px'
		}, 250, 'linear');
	});
	
	
	jQuery('#menu a').mouseenter(function(){
		jQuery(this).animate({
		  'background-position-x': '30px'
		}, 150, 'linear');
	});
	
	jQuery('#menu a').mouseleave(function(){
		jQuery(this).animate({
		  'background-position-x': '20px'
		}, 150, 'linear');
	});
}


Thony.prototype.slideHome = function(){

i=0;

var sliderHome = setInterval(function(){



	jQuery("ul#slider-left").animate({marginTop: "-=133px" },300);

	jQuery("ul#slider-right").animate({marginTop: "+=133px"},300);
	
	if(i==5){
		
		setTimeout(function(){
			jQuery("ul#slider-left").css({opacity: "0" });
			jQuery("ul#slider-right").css({opacity: "0" });
		},300);
		
		setTimeout(function(){
			jQuery("ul#slider-left").animate({marginTop: "0px"}, 0);
			jQuery("ul#slider-right").animate({marginTop: "-665px"}, 0);
			i=0;
		},400);
		
		setTimeout(function(){
			jQuery("ul#slider-left").animate({opacity: "1"}, 100);
			jQuery("ul#slider-right").animate({opacity: "1"}, 100);
			i=0;
		},420);
	};

	i++;
	
}, 2200);


}

Thony.prototype.diversos = function(){
	
	jQuery('div.clientescompleto').animate({opacity: '0'},500);	
	jQuery('div.clientescompleto').css({display: 'none'});
	
	jQuery('a.btnTodos').click(function(){
		jQuery('div.clientescompleto').css({display: 'block'});
		jQuery('div.clientescompleto').animate({opacity: '1'},500);

	});
		
	jQuery('a.btnFecharclientes').click(function(){
		jQuery('div.clientescompleto').animate({opacity: '0'},500);	
		setTimeout(function(){jQuery('div.clientescompleto').css({display: 'none'},400);},600);
	});

	
	jQuery('ul#portfoliolist li a').click( function(event){
		closeoverlist();
        event.stopPropagation();
	    jQuery(this).parent().children('div#overlist').css({display: 'block'});
		jQuery(this).parent().children('div#overlist').animate({opacity: '1'},500);
			
	 });
	
	function closeoverlist(){
		jQuery('ul#portfoliolist li').find('div#overlist').each(function(i, elem){
	    	jQuery(elem).animate({opacity: '0'},1);
			jQuery(elem).css({display: 'none'});
	    });
	}
	
	jQuery(document).click( function(){
		
		jQuery('div#overlist').animate({opacity: '0'},500);
		setTimeout(function(){jQuery('div#overlist').css({display: 'none'});},500);

    });

	function scrollToAnchor(aid){
	    var aTag = $("a[name='"+ aid +"']");
	   	jQuery('html,body').animate({scrollTop: aTag.offset().top},'slow');
	};
	
	jQuery("a.bgnGotop").click(function(){
		scrollToAnchor('id1');
	});

	jQuery('div.doyoulike').slideUp();
	jQuery(window).scroll(function(){           

			if(jQuery(this).scrollTop() > 450){             
				jQuery('div.doyoulike').slideDown();
			} else {
				jQuery('div.doyoulike').slideUp();
			};

		});
	
	
}
jQuery(function(){
	var app = new Thony();
	app.socialMenu();
	app.navMenu();
	app.slideHome();
	app.diversos();
});