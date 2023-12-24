const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let intervalHeading = null;
let intervalSpan1 = null;

// function stickyNav() {
//   var navbar = document.getElementById("navbar");
//   var mainElement = document.getElementById("info-holder");
//   var sticky = navbar.offsetTop;

//   var scrollPosition = mainElement.scrollTop;

//   if (scrollPosition >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('main').addEventListener('scroll', stickyNav);
});

document.addEventListener('DOMContentLoaded', () => {
	const h1Element = document.querySelector("h1");
	const span1Element = document.getElementById("first-span");
	let intervalHeading;
	let intervalSpan1;

	function applyTextEffectHeading() {
		let iteration = 0;

		clearInterval(intervalHeading);

		intervalHeading = setInterval(() => {
			h1Element.innerText = h1Element.innerText
				.split("")
				.map((letter, index) => {
					if (index < iteration) {
						return h1Element.dataset.value[index];
					}

					return String.fromCharCode(65 + Math.floor(Math.random() * 26));
				})
				.join("");

			if (iteration >= h1Element.dataset.value.length) {
				clearInterval(intervalHeading);
			}

			iteration += 1 / 3;
		}, 30);
	}

	function applyTextEffectSpan1() {
		let iteration = 0;

		clearInterval(intervalSpan1);

		intervalSpan1 = setInterval(() => {
			span1Element.innerText = span1Element.innerText
				.split("")
				.map((letter, index) => {
					if (index < iteration) {
						return span1Element.dataset.value[index];
					}

					return String.fromCharCode(65 + Math.floor(Math.random() * 26));
				})
				.join("");

			if (iteration >= span1Element.dataset.value.length) {
				clearInterval(intervalSpan1);
			}

			iteration += 1 / 2;
		}, 30);
	}

	applyTextEffectHeading();
	applyTextEffectSpan1();
});