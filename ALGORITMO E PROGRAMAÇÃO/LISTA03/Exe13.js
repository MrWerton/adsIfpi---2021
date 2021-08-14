const entrada = require('prompt-sync')({
    sigint: true
}
)

function principal(){
    console.log(" maior valor em uma lista de N números")
    // entrada
    const N = Number(entrada('Informe a quantidade de números que deseja digitar: '))
    let valor_max = 0    
    //processamento
    for(let i = 1; i <= N; i++){
        let numero = Number(entrada('Informe um número: '))
        if(!(numero < valor_max)){
            valor_max = numero
        }

    }
        // saída
        console.log(`O maior valor é: ${valor_max}`)

        
    }
    //Saída
    
principal()