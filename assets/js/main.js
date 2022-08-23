const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const mobileMenu = document.querySelector('.menu-list')

const toggleMenu = () => {
  mobileMenu.classList.toggle('active')
}

menuBtn.addEventListener('click', toggleMenu)
closeBtn.addEventListener('click', toggleMenu)