$(function () {
		/*show main-menu*/
		$('#js-show-main-menu').on('click', function(){
				var mainMenu = $('#js-main-menu');
				mainMenu.slideToggle();
		});

		$(document).on('scroll', function () {
				var mainHeaderHeight = $('#js-main-header-wrapper').innerHeight() - 300,
						documentHeight = $(document).scrollTop(),
						mainHeader = $('#js-main-header'),
						logo = $('#js-logo');


				if(documentHeight > mainHeaderHeight){
						mainHeader.css({
								backgroundColor: 'rgba(0, 92, 138, 0.76)'
						});
				}else{
						mainHeader.css({
								backgroundColor: 'transparent'
						});
				}

		});


		/*main-slider*/
		$('#js-main-slider').slick({
				dots: true,
				fade: true,
				speed: 3000,
				autoplay: true,
				autoplaySpeed: 20000
		});

		/*rangeslider*/
		var rangeS = $('.js-range');

		rangeS.rangeslider({
				polyfill: false,
				onInit: function () {
						rangeS.each(function () {
								var $this = $(this);
								var rangeV = $this.attr('data-range');
								$(rangeV).text(($this).val() + '%');
						});
				},
				onSlide: function (position, value) {
						var element = $(this)[0].$element;
						var rangeV = element.attr('data-range');
						console.log($(element));
						$(rangeV).text(value + '%');
				}
		});

		/*js-no-bg-slider*/
		$('#js-no-bg-slider').slick({
				dots: true,
				fade: true,
				speed: 3000,
				autoplay: true,
				autoplaySpeed: 20000,
				arrows: false
		});

		/*js-portfolio-slider*/
		$('#js-portfolio-slider').slick({
				dots: true,
				speed: 1000,
				autoplay: true,
				autoplaySpeed: 20000,
				arrows: true
		});

		/*yellow icon on input focus*/
		$('.form-group').focusin(function () {
				$(this).children('.fa').css({
						color: '#f39c12'
				});
		});
		$('.form-group').focusout(function () {
				$('.form-group .fa').css({
						color: '#737373'
				});

		});

});