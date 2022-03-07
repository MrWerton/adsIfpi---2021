const { number } = require("./functions_uteis")

function principal(){
    console.log(' ### Lista de números Pares ###')
    //entrada
    const numero = number('Informe um número: ')
    //Processamento
    for (let i = 1; i <= numero; i++){
        if(i % 2 === 0){
            //Saída
            console.log(i)
        }
    }
}
principal()