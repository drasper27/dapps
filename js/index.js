const buttons = document.querySelectorAll(".btn")

const modals = document.querySelectorAll(".modal")





buttons.forEach((button, idx)=>{

   
button.addEventListener("click", function(){
    removescale()
    modalremove()
    button.classList.add("active")
    modals[idx].classList.add("show")
})
})

function removescale(){
    buttons.forEach(button =>{
        button.classList.remove("active")
    })
}
function modalremove(){
    modals.forEach(modal =>{
        modal.classList.remove("show")
    })
}