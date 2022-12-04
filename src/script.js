const b2 = document.querySelector(".b2")
const confirm = document.querySelector(".confirm")
const decline = document.querySelector(".decline")
const white = document.querySelector("white")
const div = document.querySelector(".res")
const som = document.querySelector(".audio")
let img = ""
let res = document.querySelector(".res")
let voto = ""
function btn1(){
    voto = voto + "1"
}
function btn2(){
    voto = voto + "2"
}
function btn3(){
    voto = voto + "3"
}
function btn4(){
    voto = voto + "4"
}
function btn5(){
    voto = voto + "5"
}
function btn6(){
    voto = voto + "6"
}
function btn7(){
    voto = voto + "7"
}
function btn8(){
    voto = voto + "8"
}
function btn9(){
    voto = voto + "9"
   
}

function submit(){
    
    if(voto === "22"){
        som.play()
        img = document.createElement("img")
        img.src = ("./assets/img/bolsonaro.jpg")
        img.classList.add("img")
        div.appendChild(img)
    }else if(voto === "13"){
        som.play()
        img = document.createElement("img")
        img.src = ("./assets/img/lula.jpg")
        img.classList.add("img")
        div.appendChild(img)
    }else if(voto === "12"){
        som.play()
        img = document.createElement("img")
        img.src = ("./assets/img/ciro.jpg")
        img.classList.add("img")
        div.appendChild(img)
    }

}
function clean(){
    voto = ""
    
    res.removeChild(img)
}
function whiteVote(){
    res.innerHTML = "Você votou branco"
}