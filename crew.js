const slideContainer = document.querySelector('.slide-container')
const slides = Array.from(slideContainer.children)
const circlesContainer = document.querySelector('.circles')

const slideWidth = slides[0].getBoundingClientRect().width
slides.forEach((slide, index) => {
    slide.style.left = (slideWidth * index) + 'px'
    const circle = document.createElement('div')
    circle.classList.add('circle')
    circle.setAttribute('data-index', index)
    
    circlesContainer.appendChild(circle)
    
})

const changeSlide = (currentSlide, nextSlide) => {
    let amountToMove = nextSlide.style.left
    slideContainer.style.transform = 'translateX(-' + amountToMove + ')'
    
    currentSlide.classList.remove('current-slide')
    nextSlide.classList.add('current-slide')
}

let circles = document.querySelectorAll('.circle')

    circles.forEach(circleDiv => {
        circleDiv.addEventListener('click', () => {
            console.log('working');
            circles.forEach(removeActive => {
                removeActive.classList.remove('active-circle')
            })
            circleDiv.classList.add('active-circle')
            let currentSlide = document.querySelector('.current-slide')
    let circleIndex = parseInt(circleDiv.getAttribute('data-index'))
    let nextSlide = slides[circleIndex]

    changeSlide(currentSlide, nextSlide)
            
        })
    })


function autSlide() {
    let currentSlide = document.querySelector('.current-slide')
    
    let nextSlide = currentSlide.nextElementSibling  
    if (!nextSlide) {
        nextSlide = slides[0]
    }
    let dotIndex = slides.indexOf(nextSlide)
    document.querySelector('.circle.active-circle')?.classList.remove('active-circle')
    circles[dotIndex].classList.add('active-circle')
    changeSlide(currentSlide, nextSlide)

    setTimeout(autSlide, 3000)
    
}

window.addEventListener('resize', () => {
    slides.forEach((slide, index) => {
    slide.style.left = (slideWidth * index) + 'px'
})
})

autSlide()
