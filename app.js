const links = document.querySelector('.links')
const hamburger = document.querySelector('#hamburger')
const navBar = document.querySelector('.navbar .active')
const container = document.querySelector('#container')

hamburger.addEventListener('click', () => {
  links.classList.toggle('open')
  links.classList.toggle('close')
  container.classList.toggle('active')
  hamburger.classList.toggle('open')
})
