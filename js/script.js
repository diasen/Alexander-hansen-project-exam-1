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
		lazyLoad: 'ondemand', // ondemand progressive anticipated
		infinite: true,
	});
	// On before slide change, whenever slider is moved redraw current post selected
	$('.blogs').on('afterChange', function (event, slick, currentSlide) {
		console.log(currentSlide);
		getPost(currentSlide);
	});
});
