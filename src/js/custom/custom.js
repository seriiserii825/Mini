$(function () {

		/*show main-menu*/
		$('#js-show-main-menu').on('click', function () {
				var mainMenu = $('#js-main-menu');
				mainMenu.slideToggle();
		});

		/*change menu wiew on scroll*/
		$(document).on('scroll', function () {
				var mainHeaderHeight = $('#js-main-header-wrapper').innerHeight() - 300,
						documentHeight = $(document).scrollTop(),
						mainHeader = $('#js-main-header'),
						logo = $('#js-logo'),
						mainMenu = $('#js-main-menu'),
						mainMenuItem = $('.js-main-menu__item');


				if (documentHeight > mainHeaderHeight) {
						mainHeader.css({
								backgroundColor: 'rgba(0, 92, 138, 0.76)'
						});
						logo.css({
								width: 50 + 'px',
								height: 50 + 'px',
								fontSize: 14 + 'px',
								lineHeight: 50 + 'px'
						});
						mainMenu.css({
								height: 50 + 'px'
						});
						mainMenuItem.css({
								lineHeight: 50 + 'px'
						});
				} else {
						mainHeader.css({
								backgroundColor: 'transparent'
						});
						logo.css({
								width: 100 + 'px',
								height: 100 + 'px',
								fontSize: 24 + 'px',
								lineHeight: 100 + 'px'
						});
						mainMenu.css({
								height: 100 + 'px'
						});
						mainMenuItem.css({
								lineHeight: 100 + 'px'
						});
				}

		});

		/*smooth scroll to page blocks*/
		$('.js-main-menu__item, #js-logo').on('click', function (e) {
				e.preventDefault();
				$('.js-main-menu__item').removeClass('active');
				$(this).addClass('active');
				var current = $(this).attr('href');
				var currentOffset = $(current).offset().top;
				$('html, body').animate({
						scrollTop: currentOffset
				}, 2000);
		});

		/*change active nav*/
		$('#js-main-menu').changeActiveNav();

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

		/*modified map*/
		// When the window has finished loading create our google map below
		google.maps.event.addDomListener(window, 'load', init);

		function init() {
				// Basic options for a simple Google Map
				// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
				var mapOptions = {
						// How zoomed in you want the map to start at (always required)
						zoom: 11,
						scrollwheel: false,
						zoomControl: false,
						scaleControl: false,


						// The latitude and longitude to center the map (always required)
						center: new google.maps.LatLng(40.6700, -73.9400), // New York

						// How you would like to style the map. 
						// This is where you would paste any style found on Snazzy Maps.
						styles: [{
								"featureType": "administrative",
								"elementType": "all",
								"stylers": [{"visibility": "on"}, {"lightness": 33}]
						}, {
								"featureType": "landscape",
								"elementType": "all",
								"stylers": [{"color": "#f2e5d4"}, {"lightness": "6"}, {"saturation": "48"}, {"gamma": "5.15"}]
						}, {
								"featureType": "landscape",
								"elementType": "labels.text.fill",
								"stylers": [{"invert_lightness": true}, {"visibility": "on"}, {"color": "#ff0000"}]
						}, {
								"featureType": "landscape",
								"elementType": "labels.text.stroke",
								"stylers": [{"invert_lightness": true}]
						}, {
								"featureType": "poi.park",
								"elementType": "geometry",
								"stylers": [{"color": "#c5dac6"}]
						}, {
								"featureType": "poi.park",
								"elementType": "labels",
								"stylers": [{"visibility": "on"}, {"lightness": 20}]
						}, {
								"featureType": "road",
								"elementType": "all",
								"stylers": [{"lightness": 20}]
						}, {
								"featureType": "road.highway",
								"elementType": "geometry",
								"stylers": [{"color": "#c5c6c6"}]
						}, {
								"featureType": "road.arterial",
								"elementType": "geometry",
								"stylers": [{"color": "#e4d7c6"}]
						}, {
								"featureType": "road.local",
								"elementType": "geometry",
								"stylers": [{"color": "#fbfaf7"}]
						}, {"featureType": "water", "elementType": "all", "stylers": [{"visibility": "on"}, {"color": "#acbcc9"}]}]
				};

				// Get the HTML DOM element that will contain your map 
				// We are using a div with id="map" seen below in the <body>
				var mapElement = document.getElementById('js-map');

				// Create the Google Map using our element and options defined above
				var map = new google.maps.Map(mapElement, mapOptions);

				// Let's also add a marker while we're at it
				var marker = new google.maps.Marker({
						position: new google.maps.LatLng(40.6700, -73.9400),
						map: map,
						title: 'Snazzy!'
				});

				map.addListener('click', function () {
						map.setOptions({
								scrollwheel: true
						});
				});

				map.addListener('mouseout', function () {
						map.setOptions({
								scrollwheel: false
						});
				});
		}

});

/*
 $(function () {

 $.each($("[class^='js-range']"), function (index, elem) {
 $(elem).rangeslider({
 polyfill: false,
 onInit: function () { $($(elem).attr('data-range')).text($(elem).val() + '%'); },
 onSlide: function (position, value) { $($(elem).attr('data-range')).text(value + '%'); }
 });
 });

 });*/
