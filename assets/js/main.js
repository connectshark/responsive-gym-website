const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const mobileMenu = document.querySelector('.menu-list')
const heroSection = document.querySelector('.hero')
const headerStickySection = document.querySelector('.header')
const navLinks = document.querySelectorAll('.nav-link')
const programSection = document.querySelector('.program')
const reasonSection = document.querySelector('.reason')
const priceSection = document.querySelector('.price')
const calculateForm = document.querySelector('.calculate')

const sectionGroup = [heroSection, programSection, reasonSection, priceSection]

const options = {
  rootMargin: '-60% 0px 0% 0px',
}
const stickyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
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
const closeMenu = () => {
  mobileMenu.classList.remove('active')
}

navLinks.forEach(link => {
  link.addEventListener('click', closeMenu)
})

const calculatorBMI = event => {
  event.preventDefault()
  const heightEle = document.querySelector('#height')
  const weightEle = document.querySelector('#weight')
  const bmiEle = document.querySelector('.bmi-result')
  const heightValue = heightEle.value
  const weightValue = weightEle.value
  let w = parseFloat(weightValue)
  let h = parseFloat(heightValue) / 100
  const bmi = (w/(h*h)).toFixed(2)
  bmiEle.innerHTML = 'Your BMI is ' + bmi
  heightEle.value = ''
  weightEle.value = ''
}

stickyObserver.observe(heroSection)
menuBtn.addEventListener('click', toggleMenu)
closeBtn.addEventListener('click', toggleMenu)
sectionGroup.forEach(section => observe.observe(section))
calculateForm.addEventListener('submit', calculatorBMI)