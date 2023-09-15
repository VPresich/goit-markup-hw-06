const buttonMenu = document.querySelector('.mobile-menu-button');
const modalMenulWindow = document.querySelector('.modal-menu');
const buttonMenuClose = document.querySelector('.form-menu-close-button');

buttonMenu.addEventListener('click', function () {
modalMenulWindow.classList.remove('is-hidden');
});

buttonMenuClose.addEventListener('click', function () {
modalMenulWindow.classList.add('is-hidden');
});