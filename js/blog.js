async function getPosts() {
	try {
		const response = await fetch(
			'https://noroffcors.herokuapp.com/http://api.alexdevelops.online/wp-json/wp/v2/posts'
		);
		const jsonResults = await response.json();
		const organizationArray = jsonResults;
		console.log(organizationArray);

		organizationArray.forEach(function (value) {
			document.querySelector('.blog__container').innerHTML += `
            <div class="card">
				<img class="organizationImg" src="${value.better_featured_image.media_details.sizes.medium_large.source_url}" alt="">
                <h2>${value.title.rendered}</h2>
				<p>${value.excerpt.rendered}</p>
                <a href="blogdetails.html?id=${value.id}">More info</a>
				<button id="pickBtn" class="pick_cause_btn" onclick="changeBtn()">View article</button>
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

getPosts();
