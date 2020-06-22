// select DOM Items

const menu = document.querySelector('.menu-btn');

const search = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search-field');

const nav = document.querySelector('nav');

// const navLinks = document.querySelectorAll('.nav-link');

// set initial state

let showMenu = false;

menu.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menu.classList.add('close');
		nav.classList.add('show');
		// navLinks.forEach((item) => item.classList.add('show'));

		//set menu state
		showMenu = true;
	} else {
		menu.classList.remove('close');
		nav.classList.remove('show');
		// navLinks.forEach((item) => item.classList.remove('show'));

		//set menu state
		showMenu = false;
	}
}

search.addEventListener('click', searchTerm);

let defaultState = false;

function searchTerm() {
	if (!defaultState) {
		search.classList.add('hide');
		searchBar.classList.add('show');
		defaultState = true;
	} else {
		search.classList.remove('hide');
		searchBar.classList.remove('show');
		defaultState = false;
	}
}
