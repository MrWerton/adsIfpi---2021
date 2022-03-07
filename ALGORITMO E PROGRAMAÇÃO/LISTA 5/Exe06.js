const entrada = require('prompt-sync')({
    sigint: true
})
/*Não entendi muito essa questão.
No começo eu achei que era pra pegar um número na frase, caso ele seja digitado, e 
transforma-lo em texto. Por exemplo: Joao 45 -> a saída seria joao quarenta e cinco, mas nem sei se isso é possível.
*/
function principal(){
    //Entrada
    const frase = entrada('Informe uma frase: ') 
    let frase_ = frase

    let algarismo = ''
    
    for(let i = 0; i < frase_.length; i++){
        algarismo = frase_[i]
        console.log(algarismo)
        if(algarismo = Number){
            console.log('...')
        }
        else{
           console.log(frase)
        }

    }

}

principal()