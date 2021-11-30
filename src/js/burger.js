const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu');
const cellHeader = document.querySelector('.header__cell');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
      cellHeader.classList.toggle('_active');
	});
}