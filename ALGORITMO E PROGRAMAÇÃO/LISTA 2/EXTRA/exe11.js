const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero = Number(input('Digite um número (de 0 a 1000): '))

    // Processamento
    milhar = parseInt(numero/1000)
    centena = parseInt(numero/100)
    dezena = parseInt(numero/10)
    parseInt(numero)
    if (parseInt(numero/1000)= '0'){
        if(parseInt(numero/1000) == 1){
            console.log(parseInt(numero/1000), 'milhar e')
        }
    }
    if (numero[1] != '0'){
        if(numero[1] == 1){
            console.log(numero[1], 'centena e')
        }else{
            console.log(numero[1], 'centenas e')
        }
    }
    if (numero[2] != '0'){
        if(numero[2] == 1){
            console.log(numero[2], 'dezena e')
        }else{
            console.log(numero[2], 'dezenas e')
        }
    }
    if (numero[3] != '0'){
        if(numero[3] == 1){
            console.log(numero[1], 'unidade.')
        }else{
            console.log(numero[1], 'unidades.')
        }
    }
}
main()