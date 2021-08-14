const { Obter_number } = require("./funcoes_uteis")

    console.log('### Divisores de um número ###')
    console.log('### Insira 0 para encerrar o programa ###')
    
function principal(){

    var numero = 1
    let i = 1
    
        while(numero !== 0){ // A interação ocorrerá enquanto o numero for diferente de 0
            if(numero !== 0){ // cria uma condição primária para o processo ocorrer.
            numero = Obter_number('Informe um número: ')
            while(i <= numero){ // outra interação para fazer o calculo dos divisores
                if(numero % i === 0){
                    console.log(`${numero} é divisível por ${i}`)
                    console.log('-----------------------------------')
                }
                
                i++    
            }
            i=0
        } 
        
        numero = 0  
    } 


}


principal()