async function getPosts() {
	try {
		const response = await fetch(
			'https://noroffcors.herokuapp.com/http://api.alexdevelops.online/wp-json/wp/v2/posts?'
		);
		const jsonResults = await response.json();
		const blogArray = jsonResults;
		console.log(blogArray);

		blogArray.forEach(function (value) {
			document.querySelector('.blog__container').innerHTML += `
            <div class="card">
				<img class="blog__Img" src="${value.better_featured_image.media_details.sizes.medium_large.source_url}" alt="">
					<h2>${value.title.rendered}</h2>
					${value.excerpt.rendered}
					<a class="viewblog__btn" href="blogdetails.html?id=${value.id}">View Post</a>
            </div>
        `;
		});
	} catch (error) {
		console.log(error);
		document.querySelector('.alert').innerHTML += showAlertTouser(
			'An error occured',
			'danger'
		);
	} finally {
		document.querySelector('.loading').classList.add('hide');
	}
}

getPosts();

async function getNew() {
	try {
		const response = await fetch(
			'https://noroffcors.herokuapp.com/http://api.alexdevelops.online/wp-json/wp/v2/posts?page=2'
		);
		const jsonResults = await response.json();
		const blogArray = jsonResults;
		console.log(blogArray);

		blogArray.forEach(function (value) {
			document.querySelector('.blog__two--container').innerHTML += `
            <div class="card">
				<img class="blog__Img" src="${value.better_featured_image.media_details.sizes.medium_large.source_url}" alt="">
					<h2>${value.title.rendered}</h2>
					${value.excerpt.rendered}
					<a class="viewblog__btn" href="blogdetails.html?id=${value.id}">View Post</a>
            </div>
        `;
		});
	} catch (error) {
		document.querySelector('.alert').innerHTML += showAlertTouser(
			'An error occured',
			'danger'
		);
	} finally {
		document.querySelector('.loading').classList.add('hide');
	}
}

getNew();

function myFunction() {
	const show = document.getElementById('show__more');
	const morePosts = document.getElementById('more');
	const viewBtn = document.getElementById('view__btn');

	if (show.style.display === 'none') {
		show.style.display = 'inline';
		viewBtn.innerHTML = 'View more posts';
		morePosts.style.display = 'none';
	} else {
		show.style.display = 'none';
		viewBtn.innerHTML = 'View less posts';
		morePosts.style.display = 'inline';
	}
}
