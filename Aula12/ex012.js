var data = new Date()

var hora = data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()

console.log(hora)

if (hora < '12:00:00'){
    console.log('Bom dia')
}else if(hora < '18:00:00'){
    console.log('Boa tarde')
}else{
    console.log('Boa noite')
}