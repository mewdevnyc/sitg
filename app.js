/****************************************************************************/
const navbar = document.querySelector('#navbar');
const navbarMenu = navbar.querySelector('#navbar .menu');
const navbarItems = navbar.querySelectorAll('#navbar .menu .item');
const navbarToggle = navbar.querySelector('#navbar .toggle');
const body = document.querySelector('body');
// Open
function openNavbar() {
	navbarMenu.classList.add('active');
	navbar.classList.add('open');
	navbarToggle.setAttribute('aria-label', 'Close navigation menu.');
}
function closeNavbar() {
	navbarMenu.classList.remove('active');
	navbar.classList.remove('open');
	navbarToggle.setAttribute('aria-label', 'Open navigation menu.');
}
// Toggle drawer menu
navbarToggle.addEventListener('click', () => {
	if (navbar.classList.contains('open')) {
		closeNavbar();
	} else {
		openNavbar();
	}
});
// Close nav drawer upon user selection
navbarItems.forEach(item =>
	item.addEventListener('click', () => {
		if (navbar.classList.contains('open')) closeNavbar();
	})
);

// Close nav drawer when screen is resized
window.addEventListener('resize', () => {
	closeNavbar();
});
document.addEventListener('click', e => {
	if (
		e.target !== navbarToggle &&
		e.target !== navbarMenu.classList.contains('active') &&
		e.target !== e.target.closest('#navbar .menu')
	)
		closeNavbar();
});
/****************************************************************************/
