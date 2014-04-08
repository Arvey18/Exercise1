/***********

-Slider Effect

***********/

	var number = 1
	  , $slider = $('#sliderUl')
	  , width = $('#sliderUl li').width()
	  , margin_left = width * (-1)
	  , run;

	 slider_interval();

	//Right Button arrow
	$('#right_arrow').click(function(){
		$slider.animate({'margin-left' : margin_left }, 500, function(){ 
			$slider.append($('#sliderUl li:first'))
			.css("margin-left", 0);
				increase_image_number();
				
		});
		return false;
	});

	//Left Button arrow
	$('#left_arrow').click(function(){
		$slider.prepend($('#sliderUl li:last'))
			.css({'margin-left' : margin_left})
			.animate({'margin-left' : 0 }, 500, function(){ 
				decrease_image_number();
				
			});
		return false;
	});

	//auto play slider
	function auto_play(){
		$('#right_arrow').click();
	}

	//slider interval
	function slider_interval() {
		run = setInterval('auto_play()', 5000);
	}

	//Pause slider
	$('#pause_button').click(function(){
		
		clearInterval(run);
		$('#pause_button').css({"opacity" : 0, "z-index" : 1});
		$('#play_button').css({"opacity" : 1.0, "z-index" : 10});
		return false;

	});

	//play slider
	$('#play_button').click(function(){
		slider_interval();
		$('#pause_button').css({"opacity" : 1.0,"z-index" : 10});
		$('#play_button').css({"opacity" : 0, "z-index" : 1});
		return false;
	});

	//page numbering
	function increase_image_number(){

		number++;
		$('#img_no').text(number);
		
		if (number  == 4){ 
			number = 1;
			$('#img_no').text(number);
		
		}

	}

	function decrease_image_number(){

		number--;
		$('#img_no').text(number);
		
		if (number  == 0){ 
			number = 3;
			$('#img_no').text(number);
		
		}
	}

	//hover to show left and right arrow
	$('.arrow').hover(function(){

		$('#pause_button').click();

	});

	