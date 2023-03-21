function calcular(){

    limparTela()

    let inicio = document.querySelector("input#inicio")
    let fim = document.querySelector("input#fim")
    let passo = document.querySelector("input#passo")
    let resultado = document.querySelector("p#resultado")

    let valorInicio = Number(inicio.value)
    let valorFim = Number(fim.value)
    let valorPasso = Number(passo.value)
    
    if(valorPasso > 0){
        if(valorInicio <= valorFim){
            for(let i=valorInicio; i<=valorFim; i+=valorPasso){
                resultado.innerText += `${i}\u{1F449}`
            }
        }else{
            alert("O valor de início deve ser menor que o valor final")
        }
    }else if(valorPasso < 0){
        if(valorInicio >= valorFim){
            for(let i=valorInicio; i>=valorFim; i+=valorPasso){
                resultado.innerText += `${i}\u{1F449}`
            }
        }else{
            alert("O valor de início deve ser maior que o valor final")
        }
    }else{
        alert("O valor de passo deve ser diferente de 0")
    }
    resultado.innerText += `\u{1F3C1}`
}

function limparTela(){
    let resultado = document.querySelector("p#resultado")

    resultado.innerText = `Contagem...`
}