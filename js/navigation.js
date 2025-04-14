//---------NAVBAR--------------
const nav = document.querySelector("#page-navigation");

nav.innerHTML = `<nav class="navbar">
<div class="nav-center">
    <div class="nav-header">
        <img src="./img/logo.webp" class="logo" alt="logo" />
    </div>
    <!--links-->
    <ul class="links">
        <li><a href="index.html">Strona Główna</a></li>
        <li><a href="photoGallery.html">Galeria Zdjęć</a></li>
        <li><a href="aboutMe.html">O mnie</a></li>
    </ul>
</div>
</nav>
<img src="./img/logo.webp" class="side-logo" alt="logo" />
<button class="sidebar-toggle">
<span class="bar"></span>
<span class="bar"></span>
<span class="bar"></span>
</button>
<aside class="sidebar">
<!-- <div class="sidebar-header">
    <img src="./img/logo.webp" class="logo" alt="logo" />
</div> -->
<!--links-->
<ul class="links">
    <li><a href="index.html">Strona Główna</a></li>
    <li><a href="photoGallery.html">Galeria Zdjęć</a></li>
    <li><a href="aboutMe.html">O mnie</a></li>
</ul>
<!--social media-->
<ul class="social-icons">
    <li>
        <a href="https://www.instagram.com/romangiszter/" target="_blank"
            ><i class="fa fa-instagram"></i
        ></a>
    </li>
    <li>
        <a href="https://www.facebook.com/profile.php?id=100007263227928" target="_blank"
            ><i class="fa fa-facebook"></i
        ></a>
    </li>
    <li>
        <a href="mailto: kontakt@fotoroman.pl" target="_blank"
            ><i class="fa fa-envelope"></i
        ></a>
    </li>
</ul>
<p class="aside-copyright"></p>
</aside>`;

const navToggle = document.querySelector(".sidebar-toggle");
const links = document.querySelector(".sidebar");
const bodyOverflow = document.querySelector("body");

navToggle.addEventListener("click", () => {
	links.classList.toggle("show-sidebar");
	bodyOverflow.classList.toggle("stopScroll");
	navToggle.classList.toggle("active");
	window.scrollTo(0, 0);
});
