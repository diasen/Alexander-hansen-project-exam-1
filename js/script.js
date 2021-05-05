$(document).on('ready', function () {
	$('.regular').slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
	});
	$('.center').slick({
		dots: true,
		infinite: true,
		centerMode: true,
		slidesToShow: 5,
		slidesToScroll: 3,
	});
	$('.lazy').slick({
		lazyLoad: 'ondemand',
		infinite: true,
	});
});
