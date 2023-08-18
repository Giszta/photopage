//---------NAVBAR--------------
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
	links.classList.toggle("show-links");
	navToggle.classList.toggle("active");
});

//---------HOME SLIDE--------------
const homeSlide = [
	{
		id: 1,
		img: "./img/home slide/slide1.jpg",
		author: "Terence Donovan",
		quote:
			"Problemem fotoamatora jest to, że nie ma on powodów do robienia zdjęć.",
	},
	{
		id: 2,
		img: "./img/home slide/slide2.jpg",
		author: "DeGriff",
		quote:
			"Zdarzają się chwile, gdy nie masz przy sobie aparatu i wówczas widzisz najwspanialszy widok ,. Nie przejmuj się , że nie możesz go sfotografować. Usiądź i rozkoszuj się tym widokiem",
	},
	{
		id: 3,
		img: "./img/home slide/slide3.jpg",
		author: " ",
		quote:
			"Mam nadzieję, że żona nie sprzeda mojego sprzętu za taką cenę jaką jej powiedziałem, że go kupiłem.",
	},
	{
		id: 4,
		img: "./img/home slide/slide4.jpg",
		author: "Henri Cartier Bresson",
		quote: "Pierwsze dziesięć tysięcy zdjęć jest najgorsze.",
	},
	{
		id: 5,
		img: "./img/home slide/slide5.jpg",
		author: "Joanna Helander",
		quote:
			"Nagle dostrzegłam, że wszystko dokoła jest fascynujące... ale dopiero na fotografii.",
	},
	{
		id: 6,
		img: "./img/home slide/slide6.jpg",
		author: "Imogen Cunningham",
		quote: "Które z moich zdjęć jest moim ulubionym ? ? To, które zrobię jutro",
	},
	{
		id: 7,
		img: "./img/home slide/slide7.jpg",
		author: " ",
		quote:
			"Kupno Nikona nie czyni Cię fotografem. Stajesz się zaledwie posiadaczem Nikona",
	},
	{
		id: 8,
		img: "./img/home slide/slide8.jpg",
		author: "Ansel Adams",
		quote:
			"Nie istnieją reguły opisujące dobrą fotografię, są tylko dobre fotografie.",
	},
	{
		id: 9,
		img: "./img/home slide/slide9.jpg",
		author: "Ansel Adams",
		quote: "Dwanaście świetnych fotografii każdego roku to wspaniały plon.",
	},
	{
		id: 10,
		img: "./img/home slide/slide10.jpg",
		author: "Bill Brandt",
		quote:
			"Fotografia nie ma zasad. To nie sport. Ważny jest efekt, a nie sposób, w jaki został osiągnięty.",
	},
	{
		id: 11,
		img: "./img/home slide/slide11.jpg",
		author: "Robert Bresson",
		quote:
			"Fotografując staraj się pokazać to czego bez ciebie, nikt by nie zobaczył",
	},
];

//select items
const img = document.getElementById("slide-img");
const author = document.getElementById("author");
const quote = document.getElementById("quote");

//set random starting item
let currentItem = Math.floor(Math.random() * homeSlide.length);

//show person based on item
function showSlide(slide) {
	const item = homeSlide[slide];
	img.src = item.img;
	author.textContent = item.author;
	quote.textContent = item.quote;
}

//load initial item

window.addEventListener("DOMContentLoaded", function () {
	const item = homeSlide[currentItem];
	img.src = item.img;
	author.textContent = item.author;
	quote.textContent = item.quote;
	showSlide(currentItem);
	console.log(currentItem);
});

// print current year
const copyright = document.querySelector(".copyright");

const year = new Date().getFullYear();

copyright.textContent = `Copyright © ${year} www.fotoroman.pl`;
