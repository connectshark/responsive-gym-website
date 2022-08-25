const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const mobileMenu = document.querySelector('.menu-list')
const heroSection = document.querySelector('.hero')
const headerStickySection = document.querySelector('.header')
const navLinks = document.querySelectorAll('.nav-link')
const programSection = document.querySelector('.program')
const reasonSection = document.querySelector('.reason')
const priceSection = document.querySelector('.price')

const sectionGroup = [heroSection, programSection, reasonSection, priceSection]

const options = {
  rootMargin: '-60% 0px 0% 0px',
}
const stickyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    if (!entry.isIntersecting) {
      headerStickySection.classList.add('dark')
    } else {
      headerStickySection.classList.remove('dark')
    }
  })
}, options)

const observe = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    const sectionName = entry.target.dataset.name
    navLinks.forEach(link => {
      link.classList.remove('active-link')
      if (link.dataset.name === sectionName) {
        link.classList.add('active-link')
      }
    })
  })
}, {
  rootMargin: '0px 0px -88% 0px',
})

const toggleMenu = () => {
  mobileMenu.classList.toggle('active')
}

stickyObserver.observe(heroSection)
menuBtn.addEventListener('click', toggleMenu)
closeBtn.addEventListener('click', toggleMenu)
sectionGroup.forEach(section => observe.observe(section))