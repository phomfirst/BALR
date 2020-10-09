// Navbar
let menuBtn = document.querySelector('.hamburger-icon');
let closeBtn = document.querySelector('.close-btn');
let navDrawer = document.querySelector('.nav-drawer');

console.log(closeBtn);

function openMenu() {
	navDrawer.classList.add('drawer-open');
}
function closeMenu() {
	navDrawer.classList.remove('drawer-open');
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);




// Promo Video
let videoTall = document.querySelector('.promo-vid');
let mediaQuery = window.matchMedia( "(min-width: 600px)" );

if (mediaQuery.matches) {
	videoTall.src = '../assets/videos/promo-vid-wide.mp4';
} 