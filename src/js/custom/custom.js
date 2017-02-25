$(function () {
		/*show main-menu*/
		$('#js-show-main-menu').on('click', function(){
				var mainMenu = $('#js-main-menu');
				mainMenu.slideToggle();

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
});