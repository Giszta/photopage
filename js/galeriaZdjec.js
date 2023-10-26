//---------Album photos--------------
const albumPhotos = [
	{
		id: 1,
		class: "thumbItem first",
		title: "Polska 1",
		img: "./img/gallery/all/Slovenia20220002.jpg",
	},
	{
		id: 2,
		class: "thumbItem",
		title: "Europa 1",
		img: "./img/gallery/all/Slovenia20220003.jpg",
	},
	{
		id: 3,
		class: "thumbItem",
		title: "inne",
		img: "./img/gallery/all/Slovenia20220004.jpg",
	},
	{
		id: 4,
		class: "thumbItem",
		title: "Europa 2",
		img: "./img/gallery/all/Slovenia20220005.jpg",
	},
	{
		id: 5,
		class: "thumbItem",
		title: "Polska 2",
		img: "./img/gallery/all/Slovenia20220006.jpg",
	},
	{
		id: 6,
		class: "thumbItem",
		title: "Polska 3",
		img: "./img/gallery/all/Slovenia20220007.jpg",
	},
	{
		id: 7,
		class: "thumbItem",
		title: "Europa 3",
		img: "./img/gallery/all/Slovenia20220007a.jpg",
	},
	{
		id: 8,
		class: "thumbItem",
		title: "inne 2",
		img: "./img/gallery/all/Slovenia20220008.jpg",
	},
	{
		id: 9,
		class: "thumbItem",
		title: "Europa 4",
		img: "./img/gallery/all/Slovenia20220010.jpg",
	},
	{
		id: 10,
		class: "thumbItem",
		title: "Polska 4",
		img: "./img/gallery/all/Slovenia20220013.jpg",
	},
	{
		id: 11,
		class: "thumbItem",
		title: "Polska 4",
		img: "./img/gallery/all/Slovenia20220012.jpg",
	},
	// {
	// 	id: 12,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220013.jpg",
	// },
	// {
	// 	id: 13,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220014.jpg",
	// },
	// {
	// 	id: 14,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220015.jpg",
	// },
	// {
	// 	id: 15,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220016.jpg",
	// },
	// {
	// 	id: 16,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220017.jpg",
	// },
	// {
	// 	id: 17,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220018.jpg",
	// },
	// {
	// 	id: 18,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220019.jpg",
	// },
	// {
	// 	id: 19,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220020.jpg",
	// },
	// {
	// 	id: 20,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220021.jpg",
	// },
	// {
	// 	id: 21,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220022.jpg",
	// },
	// {
	// 	id: 22,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220023.jpg",
	// },
	// {
	// 	id: 23,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220024.jpg",
	// },
	// {
	// 	id: 24,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220025.jpg",
	// },
	// {
	// 	id: 25,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220026.jpg",
	// },
	// {
	// 	id: 26,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220027.jpg",
	// },
	// {
	// 	id: 27,
	// 	class: "thumbItem",
	// 	title: "Polska 4",
	// 	img: "./img/gallery/all/Slovenia20220028.jpg",
	// },
];
//---------ALBUM FILTR--------------
/**
 *
 * @param {HTMLElement} el
 */
const d = (el) => {
	if (!el.classList.contains("hidden")) {
		el.classList.add("hidden");
	}
	setTimeout(() => el.classList.toggle("hidden"), 0); // hack af
};

/**
 * filters almbus by cokolwiek
 * @param {Event} e event passed on click of the button
 * @returns void
 */
function filterAlbums(e) {
	const albums = document.querySelectorAll(".section-center .gallery-item	"); // select all animal divs
	let filter = e.target.dataset.filter; // grab the value in the event target's data-filter attribute

	if (filter === "*") {
		return albums.forEach(d);
	}

	return albums.forEach((album) => {
		album.classList.contains(filter) // does the animal have the filter in its class list?
			? d(album) // if yes, make sure .hidden is not applied
			: album.classList.add("hidden"); // if no, apply .hidden
	});
}

(() => {
	let activeEL;
	const btns = document.querySelectorAll(".filter-btn");
	const activeOnload = document.querySelector("#activeBtn");
	btns.forEach((e) => {
		e.addEventListener("click", onButtonClick);
	});

	function onButtonClick(e) {
		if (activeEL) {
			if (activeEL != e.currentTarget) {
				activeEL.classList.remove("activeBtn");
			}
		}

		activeOnload.classList.remove("activeBtn");
		activeEL = e.currentTarget;
		activeEL.classList.add("activeBtn");
	}
})();

//---------NAVBAR--------------
const navToggle = document.querySelector(".sidebar-toggle");
const links = document.querySelector(".sidebar");
const bodyOverflow = document.querySelector("body");

navToggle.addEventListener("click", function () {
	links.classList.toggle("show-sidebar");
	navToggle.classList.toggle("active");
	bodyOverflow.classList.toggle("stopScroll");
});

//---------PHOTOBOX--------------
const photoBoxToggle = document.querySelectorAll(".album_photo");
const photoBox = document.querySelector(".photobox");
const closeBtn = document.querySelector(".closeBtnContainer");

const autoplayBtn = document.querySelector(".autoplayBtn");
const playBtn = document.querySelector(".fa-play");
const pauseBtn = document.querySelector(".fa-pause");

const thumbsToggler = document.querySelector(".thumbsToggler");
const chevronRotate = document.querySelector(".fa-chevron-down");
const thumbsHide = document.querySelector(".caption");
const mainPhoto = document.querySelector(".mainPhoto img");

const rotateBtn = document.querySelector(".rotateBtn");

const activeMainPhoto = document.querySelector("#mainPhoto");
const ThumbsItems = document.querySelector(".thumbsItems");

const PHOTO_COUNTER = document.querySelector(".photoCounter");
const mainPhoto2 = document.querySelector(".mainPhoto");

document.addEventListener("DOMContentLoaded", function () {
	const firstThumbnail = document.querySelector("img[data-index='0']");

	photoBoxToggle.forEach((album_photo) => {
		album_photo.addEventListener("click", () => {
			photoBox.classList.toggle("active");
			bodyOverflow.classList.toggle("stopScroll");
			activeMainPhoto.src = albumPhotos[0].img;
			activeMainPhoto.dataset.index = firstThumbnail.dataset.index;
			firstThumbnail.classList.add("activeThumb");
			PHOTO_COUNTER.innerHTML = `(${
				Number(activeMainPhoto.dataset.index) + 1
			}/${albumPhotos.length})`;
			window.scrollTo(0, 0);
		});
	});

	const activeThumbnail = document.querySelectorAll(".thumbItem");
	closeBtn.addEventListener("click", close);
	function close() {
		bodyOverflow.classList.toggle("stopScroll");
		activeThumbnail.forEach((el) => el.classList.remove("activeThumb"));
		photoBox.classList.add("fade-out");
		setTimeout(() => {
			photoBox.classList.toggle("active");
			photoBox.classList.remove("fade-out");
		}, 500);
	}

	(() => {
		const thumbItem = document.querySelectorAll(".thumbItem");
		thumbItem.forEach((e) => {
			e.addEventListener("click", activeItem);
		});

		function activeItem(e) {
			let clickedThumbItem = e.target.dataset.index;
			activeMainPhoto.dataset.index = clickedThumbItem;
			// activeMainPhoto.src = albumPhotos[clickedThumbItem].img;
			const ACTIVE_THUMBNAIL = document.querySelector(
				`.thumbItem[data-index='${clickedThumbItem}']`
			);
			const thumbItem = document.querySelectorAll(".thumbItem");
			thumbItem.forEach((item) => {
				if (item.dataset.index !== activeMainPhoto.dataset.index)
					item.classList.remove("activeThumb");
			});
			PHOTO_COUNTER.innerHTML = `(${
				Number(activeMainPhoto.dataset.index) + 1
			}/${albumPhotos.length})`;
			mainPhoto2.classList.add("fade-out");
			setTimeout(() => {
				activeMainPhoto.src = albumPhotos[clickedThumbItem].img;
			}, 500);
			setTimeout(() => {
				mainPhoto2.classList.remove("fade-out");
			}, 1000);
			ACTIVE_THUMBNAIL.classList.add("activeThumb");
		}
	})();

	const ARROW_LEFT = document.querySelector("#prevBtn");
	const ARROW_RIGHT = document.querySelector("#nextBtn");

	const showNextImg = () => {
		let CURRENT_INDEX_VALUE = Number(mainPhoto.getAttribute("data-index"));
		if (CURRENT_INDEX_VALUE === albumPhotos.length - 1) {
			NEXT_INDEX_VALUE = 0;
		} else {
			NEXT_INDEX_VALUE = CURRENT_INDEX_VALUE + 1;
		}
		CURRENT_INDEX_VALUE = NEXT_INDEX_VALUE;
		activeMainPhoto.dataset.index = CURRENT_INDEX_VALUE;
		const ACTIVE_THUMBNAIL = document.querySelector(
			`.thumbItem[data-index='${CURRENT_INDEX_VALUE}']`
		);
		const thumbItem = document.querySelectorAll(".thumbItem");
		thumbItem.forEach((item) => {
			if (item.dataset.index !== activeMainPhoto.dataset.index)
				item.classList.remove("activeThumb");
		});
		PHOTO_COUNTER.innerHTML = `(${Number(activeMainPhoto.dataset.index) + 1}/${
			albumPhotos.length
		})`;
		mainPhoto2.classList.add("fade-out");
		setTimeout(() => {
			activeMainPhoto.src = albumPhotos[CURRENT_INDEX_VALUE].img;
		}, 500);
		setTimeout(() => {
			mainPhoto2.classList.remove("fade-out");
		}, 1000);
		ACTIVE_THUMBNAIL.classList.add("activeThumb");
	};
	ARROW_RIGHT.addEventListener("click", showNextImg);

	const showPrevImg = () => {
		let CURRENT_INDEX_VALUE = Number(mainPhoto.getAttribute("data-index"));
		if (CURRENT_INDEX_VALUE === 0) {
			PREV_INDEX_VALUE = albumPhotos.length - 1;
		} else {
			PREV_INDEX_VALUE = --CURRENT_INDEX_VALUE;
		}

		CURRENT_INDEX_VALUE = PREV_INDEX_VALUE;
		activeMainPhoto.dataset.index = CURRENT_INDEX_VALUE;
		// activeMainPhoto.src = albumPhotos[CURRENT_INDEX_VALUE].img;
		const ACTIVE_THUMBNAIL = document.querySelector(
			`.thumbItem[data-index='${CURRENT_INDEX_VALUE}']`
		);
		const thumbItem = document.querySelectorAll(".thumbItem");
		thumbItem.forEach((item) => {
			if (item.dataset.index !== activeMainPhoto.dataset.index)
				item.classList.remove("activeThumb");
		});
		PHOTO_COUNTER.innerHTML = `(${Number(activeMainPhoto.dataset.index) + 1}/${
			albumPhotos.length
		})`;
		mainPhoto2.classList.add("fade-out");
		setTimeout(() => {
			activeMainPhoto.src = albumPhotos[CURRENT_INDEX_VALUE].img;
		}, 500);
		setTimeout(() => {
			mainPhoto2.classList.remove("fade-out");
		}, 1000);
		ACTIVE_THUMBNAIL.classList.add("activeThumb");
	};
	ARROW_LEFT.addEventListener("click", showPrevImg);

	document.addEventListener("keydown", (e) => {
		if (photoBox.classList.contains("active")) {
			if (e.code === "ArrowRight" || e.keyCode === 39) {
				showNextImg();
			} else if (e.code === "ArrowLeft" || e.keyCode === 37) {
				showPrevImg();
			} else if (e.code === "Escape" || e.keyCode === 27) {
				close();
			}
		}
	});

	const circleProgressDown = [
		{ transform: "rotate(0)" },
		{ transform: "rotate(10deg)" },
		{ transform: "rotate(20deg)" },
		{ transform: "rotate(30deg)" },
		{ transform: "rotate(40deg)" },
		{ transform: "rotate(50deg)" },
		{ transform: "rotate(60deg)" },
		{ transform: "rotate(70deg)" },
		{ transform: "rotate(80deg)" },
		{ transform: "rotate(90deg)" },
	];
	const circleProgressDownTiming = {
		duration: 4700,
		// iterations: 1,
	};
	const firstCircleProgressDownTiming = {
		duration: 5000,
		// iterations: 1,
	};
	const circleProgressUp = [
		{ transform: "rotate(90deg)" },
		{ transform: "rotate(0)" },
	];
	const circleProgressUpTiming = {
		delay: 4700,
		duration: 300,
		// iterations: 1,
	};
	const firstCircleProgressUpTiming = {
		delay: 5000,
		duration: 300,
		// iterations: 1,
	};
	const cancelCircle = {
		duration: 300,
		// iterations: 1,
	};
	function timerAnimation() {
		timer.animate(circleProgressDown, circleProgressDownTiming);
		timer.animate(circleProgressUp, circleProgressUpTiming);
	}
	function firstTimerAnimation() {
		timer.animate(circleProgressDown, firstCircleProgressDownTiming);
		timer.animate(circleProgressUp, firstCircleProgressUpTiming);
	}
	let timerInterval1;
	function timerInterval() {
		timerInterval1 = setInterval(timerAnimation, 5000);
	}
	function cancelAnimation() {
		timer.animate(circleProgressUp, cancelCircle);
	}

	const timer = document.querySelector(".circleWhole");

	let intervalImg;
	let stop;

	autoplayBtn.addEventListener("click", function () {
		playBtn.classList.toggle("hidden");
		pauseBtn.classList.toggle("hidden");
		function autoplayImg() {
			if (playBtn.classList.contains("hidden")) {
				intervalImg = setInterval(showNextImg, 5000);
				firstTimerAnimation();
				stop = setTimeout(timerInterval, 300);
			} else {
				clearInterval(intervalImg);
				clearInterval(timerInterval1);
				// clearTimeout(stop);
				// cancelAnimation();
				intervalImg = null;
				// timerInterval1 = null;
			}
		}
		autoplayImg();
	});
});

thumbsToggler.addEventListener("click", function () {
	chevronRotate.classList.toggle("chevronRotate");
	thumbsHide.classList.toggle("thumbsHide");
	mainPhoto.classList.toggle("mainPhotoMax");
	chevronRotate.classList.add("transition");
	thumbsHide.classList.add("transition");
	mainPhoto.classList.add("transition");
	setTimeout(() => {
		thumbsHide.classList.remove("transition");
		chevronRotate.classList.remove("transition");
		mainPhoto.classList.remove("transition");
	}, 500);
});

function displayThumbsitems(thumbItems) {
	let displayThumbs = thumbItems.map(function (item, index) {
		return `<li ><img data-index=${index} class="${item.class}" src="${item.img}" alt="${item.title}"></li>`;
	});
	displayThumbs = displayThumbs.join("");
	ThumbsItems.innerHTML = displayThumbs;
}

displayThumbsitems(albumPhotos);

const firstActiveItem = document.querySelector(".first");

// print current year - footer
const copyright = document.querySelector(".copyright");

const year = new Date().getFullYear();

copyright.textContent = `Copyright © ${year} www.fotoroman.pl`;
