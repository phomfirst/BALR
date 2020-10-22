// Navbar
let menuBtn = document.querySelector('.hamburger-icon');
let closeBtn = document.querySelector('.close-btn');
let navDrawer = document.querySelector('.nav-drawer');

function openMenu() {
	navDrawer.classList.add('drawer-open');
}
function closeMenu() {
	navDrawer.classList.remove('drawer-open');
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);


// Scroll to top
GoTop = document.querySelector(".go-top");

var GoToTop = function() {
  if (window.scrollY >= 2000) {
	GoTop.classList.add("show");
  } else {
	GoTop.classList.remove("show");
  }
};

window.addEventListener("scroll", GoToTop);



// Promo Video
let videoTall = document.querySelector('.promo-vid');
let mediaQuery = window.matchMedia( "(min-width: 600px)" );

if (mediaQuery.matches) {
	videoTall.src = '../assets/videos/promo-vid-wide.mp4';
} 


