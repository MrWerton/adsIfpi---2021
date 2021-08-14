const solicitacao = require('prompt-sync')()

function main(){
    // entrada
    const numero_x = Number(solicitacao('Informe um número: ')) //
    let anterior = numero_x
    let atual = Number(solicitacao('Informe um número: '))
    let soma = atual + anterior
    // processamento
    if(atual >= 1){
        while(soma != numero_x){
            let numero = Number(solicitacao('Informe um número: '))
            anterior = atual
            atual = numero
            soma = atual + anterior
        }
    }else{
        atual = Number(solicitacao('Informe um número: '))
    }
   
}
main()