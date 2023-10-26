//---------NAVBAR--------------
const navToggle = document.querySelector(".sidebar-toggle");
const links = document.querySelector(".sidebar");

navToggle.addEventListener("click", function () {
	links.classList.toggle("show-sidebar");

	navToggle.classList.toggle("active");
});
// print current year - footer
const copyright = document.querySelector(".copyright");
const year = new Date().getFullYear();
copyright.textContent = `Copyright © ${year} www.fotoroman.pl`;
