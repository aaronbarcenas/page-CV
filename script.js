
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

document.addEventListener('DOMContentLoaded', function() {
  resaltarEnlace()
})

function resaltarEnlace() {
  document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('.navegacion li a')

    let actual = '';
    sections.forEach( section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if( window.scrollY >= (sectionTop - sectionHeight / 3)){
        actual = section.id
      }
    })

    navLinks.forEach(link => {
      link.classList.remove('select')
      if(link.getAttribute('href') === '#' + actual) {
        link.classList.add('select')
      }
    })
  })
}