//---------NAVBAR--------------
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
	links.classList.toggle("show-links");
	navToggle.classList.toggle("active");
});

// print current year - footer
const copyright = document.querySelector(".copyright");

const year = new Date().getFullYear();

copyright.textContent = `Copyright © ${year} www.fotoroman.pl`;
