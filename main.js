document.addEventListener('DOMContentLoaded', () => {
const hamburger = document.getElementById('icon-hamburger')
const navMenu = document.querySelector('.primary-navigation')
const closeBtn = document.querySelector('#close-btn')



hamburger.addEventListener('click', () => {
    navMenu.classList.add('open')
})


closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('open')
})



//for the crew slider


})