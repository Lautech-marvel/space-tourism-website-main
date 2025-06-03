const circles = document.querySelectorAll('.circle')
const section = document.querySelector('.tech-section')

fetch('./data.json')
.then(res => res.json())
.then(data => {
 console.log(data.technology[0]);
 changeInfo(data, 0)
 circles.forEach((circle) => {
    circle.addEventListener('click', () => {
        circles.forEach(notCircle => {
            notCircle.classList.remove('active-circle')
        })
        circle.classList.add('active-circle')
        let circleIndex = parseInt(document.querySelector('.active-circle').getAttribute("data-value"))
        changeInfo(data,circleIndex)
    })
})
})
.catch(error => {
    console.error("Error fetching data:", error);
    
})

//when i press a circle i want the corresponding json to be displayed


function changeInfo(data, circleIndex) {
    if (document.querySelector('.texts')) {
        document.querySelector('.texts').remove()
    }
    
    let texts = document.createElement('article')
    texts.classList.add('texts')
    texts.innerHTML = `
           <h5>the Terminology</h5>
           <h3>${data.technology[circleIndex].name}</h3>
           <p>${data.technology[circleIndex].description}</p>`
           
           section.appendChild(texts)
           
           const picture = document.querySelector('picture')
           const source = picture.querySelector('source')
           const img = picture.querySelector('img')

           source.srcset = data.technology[circleIndex].images.portrait
           img.src = data.technology[circleIndex].images.landscape
   }