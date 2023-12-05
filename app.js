function fetchChuckNorrisJoke() {
	const apiUrl = 'https://api.chucknorris.io/jokes/random';

	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			const contentElement = document.getElementById('content');
			const loadingElement = document.getElementById('loading');

			loadingElement.style.display = 'none';

			const joke = data.value;

			const jokeHtml = `
				<p><strong>Chuck Norris Joke:</strong> </p>
				<p>${joke}</p>
			`;

			contentElement.innerHTML = jokeHtml;
		})
		.catch(error => {
			const loadingElement = document.getElementById('loading');
			loadingElement.innerHTML = 'Error loading data. Please try again later.';
		});
}

document.addEventListener('DOMContentLoaded', function () {
	// Initial fetch for a Chuck Norris joke
	fetchChuckNorrisJoke();
});