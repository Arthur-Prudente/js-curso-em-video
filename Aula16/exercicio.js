//Recursivo

let fatorial = 1

function calcularFatorial(valor){
    if(valor == 1){
        return fatorial
    }else{
        fatorial = valor * calcularFatorial(valor - 1)
        return fatorial
    }
}

console.log(calcularFatorial(5))