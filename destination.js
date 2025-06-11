const destinationBtns = document.querySelectorAll('.planets-navigation li a') 

destinationBtns.forEach(destinationBtn => {
    destinationBtn.addEventListener('click', (e) => {
       e.preventDefault();
        const tab = destinationBtn.getAttribute('href')
        console.log(tab);
        
        //const clickedTab = document.querySelector(destinationBtn)
        //console.log(clickedTab);
        
    })
    
})