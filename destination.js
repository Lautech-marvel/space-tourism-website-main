const destinationBtns = document.querySelectorAll('.planets-navigation li a')
const planetArticles = document.querySelectorAll('article')
const planetImages = document.querySelectorAll('picture')

destinationBtns.forEach(destinationBtn => {
    destinationBtn.addEventListener('click', (e) => {
        e.preventDefault();
        destinationBtns.forEach(btn => {
            btn.parentElement.classList.remove('active')
        })
       
        destinationBtn.parentElement.classList.add('active')
        
        const tab = destinationBtn.getAttribute("href")
        const clickedTab = document.querySelector(tab)

        planetArticles.forEach(planetArticle => {
            planetArticle.hidden = true
        })      

        planetImages.forEach(planetImage => {
            planetImage.hidden = true
        })
         
// const tabIndex = [...destinationBtns].indexOf(destinationBtn)
        const tabIndex = [...planetArticles].indexOf(clickedTab)
         planetImages[tabIndex].hidden = false
         
        clickedTab.hidden = false
        
        
    })
    
})
