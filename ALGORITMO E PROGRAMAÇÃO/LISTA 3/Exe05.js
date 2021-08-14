const entrada = require('prompt-sync')({
    sigint: true
})
console.log(' ### Fatorial ###')

function principal(){
    //Entrada
    const numero = Number(entrada('Informe um número: '))
    //Processamento
    let fatorial = numero
    let resultado = fatorial
        for(let i = 1; i !== fatorial; i++){
          resultado *= i
        }
        // saída
        console.log(resultado)

}
principal()