function calcular(){

    let tagNumero = document.querySelector("input#numero")
    let numero = Number(tagNumero.value)
    let select = document.querySelector("select#valores")
    let tabuada

    if(numero == 0){
        alert("Por gentileza, informe um valor maior que 0 a ser calculado")
        limparSelect()
    }else{
        for(let i=1; i<=10; i++){
            tabuada = i * numero
            select.innerHTML += `<option value='${i}'> ${i} X ${numero} = ${tabuada}</option>`
        }
        limparSelect()
    }
}

function limparSelect(){
    let select = document.querySelector("input#numero")
    select.innerHTML = `<option value='aguardando'>Aguardando</option>`
}