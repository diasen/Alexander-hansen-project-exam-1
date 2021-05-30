const id_map = [];

function reinitSlickBlogs() {
	$('.blogs').slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
}

async function getPost() {
	try {
		const response = await fetch(
			'https://api.alexdevelops.online/wp-json/wp/v2/posts/' + id_map[id]
		);
		let i = 0;
		const jsonResults = await response.json();
		document.querySelector('#blogpost').innerHTML =
			jsonResults.content.rendered;
		reinitSlickBlogs();
	} catch (error) {
		document.querySelector('.alert').innerHTML += showAlertTouser(
			'An error occured',
			'danger'
		);
	}
}

async function getSliderImg() {
	try {
		const response = await fetch(
			'https://api.alexdevelops.online/wp-json/wp/v2/posts'
		);
		const jsonResults = await response.json();
		const postArray = jsonResults;
		console.log(postArray);
		let i = 0;
		postArray.forEach(function (value) {
			id_map[i++] = value.id;
			if (
				value.better_featured_image.media_details.sizes.thumbnail.source_url
			) {
				document.querySelector('#blogs').innerHTML += `
            <div class="slide">
				<a href="blogdetails.html?id=${value.id}">
                	<img src="${value.better_featured_image.media_details.sizes.thumbnail.source_url}">
                	<div class="content">
                    	<h2>${value.title.rendered}</h2>
					</div>
				</a>
            </div>
            `;
			} else {
				document.querySelector('#blogs').innerHTML += `
            <div class="slide">
                <div class="content">
                    <h2>${value.title.rendered}</h2>
                </div>
            </div>
            `;
			}
		});
		getPost(0);
		reinitSlickBlogs();
	} catch (error) {
		document.querySelector('.alert').innerHTML += showAlertTouser(
			'An error occured',
			'danger'
		);
	}
}

getSliderImg();
