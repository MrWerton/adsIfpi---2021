const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    const tamanho = Number(entrada('Informe o tamanho do vetor: '))
    let vetor = [tamanho]

    let vetor_final = 0
    let vetor_inicial = 0
    let resultado = 1

    /*(A sequência de Fibonnaci funciona da seguinte forma:
        0 + 1 = 1
        1 + 1 = 2 )
        1 + 2 = 3 )
        2 + 3 = 5 )*/
        for(let i = 0; i < tamanho; i++){
            vetor[i] = i
        }
        console.log(vetor)

        
   for(let i = 0; i < tamanho; i++){
        vetor_inicial = vetor_final  
        vetor_final = resultado  
        resultado = vetor_inicial + vetor_final
        console.log(resultado)
    }
           
    }
            

   
principal()