const burgerMenu = document.querySelector('.burger-menu');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

burgerMenu.addEventListener('click', function() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
});

overlay.addEventListener('click', function() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});