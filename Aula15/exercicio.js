//Vetor

let vetor = [1,2,3,4,5,6,7,8,9,10]

let pares = []
let impares = []

for(let valor in vetor){
    if(vetor[valor]%2==0){
        pares.push(vetor[valor])
    }else{
        impares.push(vetor[valor])
    }
}

console.log(`O Array possui ${vetor.length} posições. Seus valores são: ${vetor}`)
console.log(`Pares: ${pares}`)
console.log(`Ímpares: ${impares}`)