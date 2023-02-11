const head = document.querySelector(".heading")
const button = document.querySelector('.button')
const options = ['amazon', "instagram", "netflix"]


button.addEventListener('click', getRandomAnswer)
function getRandomAnswer(){
  
    const randomNum = Math.floor(Math.random() * options.length)
    head.innerHTML = options[randomNum]
}
