document.addEventListener('DOMContentLoaded', function () {
	const loadingTexts = [
		"Loading...",
		"Please wait...",
		"Fetching data...",
		"Hold on tight...",
		"Almost there...",
		"Processing..."
	];
	const wrapperText = document.getElementById('wrapper-text');
	const loadWrapper = document.getElementById('load-wrapper');
	const randomText = loadingTexts[Math.floor(Math.random() * loadingTexts.length)];
	wrapperText.innerText = randomText;

	setTimeout(function () {
		loadWrapper.classList.add('move-left');
	}, 2000);
});