const { number } = require("./functions_uteis")

function principal(){
    console.log(' ### Lista de números ###')
    // Entrada
    const numero = number('Informe um número: ')
    // Processamento
    for (let i = 1; i <= numero; i++){
        // Saída
        console.log(i)
    }
}
principal()