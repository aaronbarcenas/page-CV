
function toggleMenu() {
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menu-icon');
  menu.classList.toggle('active');
  menuIcon.classList.toggle('active');
}

var typed = new Typed(".text" , {
  strings:["Frontend Developer", "Web Developer", "Contador Público", "Fullstack Developer" ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop:true
});