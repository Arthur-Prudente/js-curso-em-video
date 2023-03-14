function carregar(){
    let body = document.querySelector("body")
    let msg = document.getElementById("msg")
    let imagem = document.getElementById("imagem")

    let data = new Date()
    let hora = data.getHours();
    
    msg.innerText = `Agora são ${hora} horas`

    if(hora > 0 && hora < 12){
        imagem.src = "images/manha.jpg"
        body.style.background = "#E2CD9F"
    }else if(hora < 18){
        imagem.src = "images/tarde.jpg"
        body.style.background = "#B9846F"
    }else{
        imagem.src = "images/noite.jpg"
        body.style.background = "#515154"
    }
}
