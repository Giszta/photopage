//---------NAVBAR--------------
const navToggle = document.querySelector(".sidebar-toggle");
const links = document.querySelector(".sidebar");

navToggle.addEventListener("click", function () {
	links.classList.toggle("show-sidebar");
	navToggle.classList.toggle("active");
});

//---------HOME SLIDE--------------
const homeSlidePhoto = [
	{
		id: 1,
		img: "./img/home slide/slide1.jpg",
	},
	{
		id: 2,
		img: "./img/home slide/slide2.jpg",
	},
	{
		id: 3,
		img: "./img/home slide/slide3.jpg",
		author: " ",
	},
	{
		id: 4,
		img: "./img/home slide/slide4.jpg",
	},
	{
		id: 5,
		img: "./img/home slide/slide5.jpg",
	},
	{
		id: 6,
		img: "./img/home slide/slide6.jpg",
	},
	{
		id: 7,
		img: "./img/home slide/slide7.jpg",
	},
	{
		id: 8,
		img: "./img/home slide/slide8.jpg",
	},
	{
		id: 9,
		img: "./img/home slide/slide9.jpg",
	},
	{
		id: 10,
		img: "./img/home slide/slide10.jpg",
	},
	{
		id: 11,
		img: "./img/home slide/slide11.jpg",
	},
];

const homeSlideQuote = [
	{
		id: 1,
		author: "Terence Donovan",
		quote:
			"Problemem fotoamatora jest to, że nie ma on powodów do robienia zdjęć.",
	},
	{
		id: 2,
		author: "DeGriff",
		quote:
			"Zdarzają się chwile, gdy nie masz przy sobie aparatu i wówczas widzisz najwspanialszy widok ,. Nie przejmuj się , że nie możesz go sfotografować. Usiądź i rozkoszuj się tym widokiem",
	},
	{
		id: 3,
		author: " ",
		quote:
			"Mam nadzieję, że żona nie sprzeda mojego sprzętu za taką cenę jaką jej powiedziałem, że go kupiłem.",
	},
	{
		id: 4,
		author: "Henri Cartier Bresson",
		quote: "Pierwsze dziesięć tysięcy zdjęć jest najgorsze.",
	},
	{
		id: 5,
		author: "Joanna Helander",
		quote:
			"Nagle dostrzegłam, że wszystko dokoła jest fascynujące... ale dopiero na fotografii.",
	},
	{
		id: 6,
		author: "Imogen Cunningham",
		quote: "Które z moich zdjęć jest moim ulubionym ? ? To, które zrobię jutro",
	},
	{
		id: 7,
		author: " ",
		quote:
			"Kupno Nikona nie czyni Cię fotografem. Stajesz się zaledwie posiadaczem Nikona",
	},
	{
		id: 8,
		author: "Ansel Adams",
		quote:
			"Nie istnieją reguły opisujące dobrą fotografię, są tylko dobre fotografie.",
	},
	{
		id: 9,
		author: "Ansel Adams",
		quote: "Dwanaście świetnych fotografii każdego roku to wspaniały plon.",
	},
	{
		id: 10,
		author: "Bill Brandt",
		quote:
			"Fotografia nie ma zasad. To nie sport. Ważny jest efekt, a nie sposób, w jaki został osiągnięty.",
	},
	{
		id: 11,
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
let currentPhoto = Math.floor(Math.random() * homeSlidePhoto.length);
let currentQuote = Math.floor(Math.random() * homeSlideQuote.length);

//show photo/quote based on item
function showSlidePhoto(slide) {
	const item = homeSlidePhoto[slide];
	img.src = item.img;
}
function showSlideQuote(slide) {
	const item = homeSlideQuote[slide];
	author.textContent = item.author;
	quote.textContent = item.quote;
}

//load initial item
window.addEventListener("DOMContentLoaded", function () {
	const photo = homeSlidePhoto[currentPhoto];
	const quote = homeSlideQuote[currentQuote];
	img.src = photo.img;
	author.textContent = quote.author;
	quote.textContent = quote.quote;
	showSlidePhoto(currentPhoto);
	showSlideQuote(currentQuote);
	//console.log(currentPhoto, currentQuote);
});

// print current year - footer
const copyright = document.querySelector(".copyright");
const year = new Date().getFullYear();
copyright.textContent = `Copyright © ${year} www.fotoroman.pl`;
