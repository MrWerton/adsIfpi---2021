const entrada = require('prompt-sync')()
function principal(){

console.log('Lista na horizontal')
console.log('O número de caracteres não deve ser superior a 20')
const frase = entrada('Informe uma palavra: ') 

    diagonal(frase)
}
function diagonal(a){
    let vetor = Array()

    for(let i = 0; i < a.length; i++){
        if(i <= 20){
            vetor[i] = a[i]
            
        }else{
            console.log('O número de digitos informados foi superior a 20')
        }
    }
    console.log(vetor.join('-'))
    
}
principal()