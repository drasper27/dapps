const phrases = document.querySelectorAll(".phrase")
const buttons = document.querySelectorAll(".btn button")



buttons.forEach((button,idx) =>{
    button.addEventListener("click", ()=>{
        removeactive()
        removeshow()
        button.classList.add("show")
        phrases[idx +1].classList.add("active")
    })
})




function removeshow(){
    buttons.forEach(button =>{
        button.classList.remove("show")
    })
}
function removeactive(){
    phrases.forEach(phrase =>{
        phrase.classList.remove("active")
    })
}