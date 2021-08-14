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
    for(let i = 1; i < N; i++){
            if(quadrado(i) < N){ 
                var menor_quadrado = quadrado(i)
                var Num_quadrado = i 
            }

        
            
        }
        // saída
        console.log(`O maior quadrado menor que ${N} é: ${menor_quadrado} = quadrado de ${Num_quadrado}`)
    }
        
        

        
    function quadrado(a){
        return a * a
        
    }
    //Saída
    
principal()