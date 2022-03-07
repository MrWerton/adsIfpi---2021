const entrada = require('prompt-sync')()
function principal(){

console.log('Lista na vertical de 20 caracteres')
console.log('O número de caracteres não deve ser superior a 20')
const frase = entrada('Informe uma palavra: ') // define um array de 10 elementos vázios

    vertical(frase)
}
function vertical(A){
for(let i = 0; i < A.length; i++){
    if(i <= 20){
        console.log(A[i])
    }else{
        console.log('O número de digitos informados foi superior a 20')
    }
}
}
principal()