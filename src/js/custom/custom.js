$(function () {
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
		console.log('rangeS = ' + rangeS);

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
						rangeS.each(function () {
								var $this = $(this);
								var rangeV = $this.attr('data-range');
								console.log(rangeV);
								$(rangeV).text(value + '%');
						});
				}
		});
});