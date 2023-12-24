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
			loadModalWrap.classList.remove('move-right');
		}, 600);
	});
});

window.addEventListener('pageshow', function (event) {

  if (event.persisted) {
    // This indicates that the page is being loaded from the cache
    // You can perform any necessary actions here
    console.log('Page is being loaded from cache');
    
    // Simulate a full page reload
    window.location.reload(true);
  }
});
