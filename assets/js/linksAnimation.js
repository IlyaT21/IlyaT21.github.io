let loadModalWrap = document.getElementById('load-wrapper');
let loadSVG = document.getElementById('loading-svg');
let LoadText = document.getElementById('wrapper-text');
const siteLinks = document.querySelectorAll('.site-link');

siteLinks.forEach(function (link) {
	link.addEventListener('click', function (event) {
		event.preventDefault();

		loadSVG.style.display = 'none';
		LoadText.style.display = 'none';
		loadModalWrap.classList.add('move-right');
		loadModalWrap.style.backgroundColor = '#168cdb';

		setTimeout(function () {
			window.location.href = link.href;
			// setTimeout(function () {
			// 	loadModalWrap.classList.remove('move-right');
			// }, 200);
		}, 600);
	});
});

window.addEventListener('pageshow', function (event) {

  if (event.persisted) {
    window.location.reload(true);
  }
});
