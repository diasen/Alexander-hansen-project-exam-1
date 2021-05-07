const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const getId = params.get('id');

async function getBlog() {
	try {
		console.log(getId);
		const response = await fetch(
			'https://api.alexdevelops.online/wp-json/wp/v2/posts/' + getId
		);
		const jsonResults = await response.json();
		console.log(jsonResults.title.rendered);

		document.title = jsonResults.title.rendered;
		document.querySelector('.return__btn--container').innerHTML += `<form >
        <input id="return__btn" type="button" value="Return" onclick="history.back()">
       </form>`;
		document.querySelector('p').innerHTML = `${jsonResults.content.rendered}`;
	} catch (error) {
		document.querySelector('.alert').innerHTML += showAlertTouser(
			'An error occured',
			'danger'
		);
	} finally {
		document.querySelector('.loading').classList.add('hide');
	}
}

getBlog();
