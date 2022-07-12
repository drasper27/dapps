const images = document.querySelectorAll(".image img")

let idx = 0

setInterval(run, 3000)

function run(){
    idx++
    changeImg()
}

function changeImg(){
    if(idx > images.length - 1){
        idx = 0
    }else if(idx < 0){
        idx = images.length -1
    }
    images.forEach((image) =>{
        removeimg()
        images[idx].classList.add("active")
    })
}

function removeimg(){
    images.forEach(image =>{
        image.classList.remove("active")
    })
}

