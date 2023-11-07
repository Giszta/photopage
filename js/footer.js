// print current year - footer
const footer = document.querySelector("footer");
const year = new Date().getFullYear();

footer.innerHTML = `<div class="footer-center">
<p class="copyright">Copyright © ${year} www.fotoroman.pl</p>
<ul>
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
</div>`;
