const buttonMenu = document.querySelector('.mobile-menu-button');
const modalMenulWindow = document.querySelector('.mobile-menu');
const buttonMenuClose = document.querySelector('.mobile-menu-close-button');

buttonMenu.addEventListener('click', function () {
modalMenulWindow.classList.remove('is-hidden');
});

buttonMenuClose.addEventListener('click', function () {
modalMenulWindow.classList.add('is-hidden');
});