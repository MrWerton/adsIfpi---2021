const input = require('prompt-sync')()
function main(){
    // Entrada
    const morango = Number(input('morango (kg): '))
    const maca = Number(input('maçãs (kg):  '))

    // Processamento
    if (morango >= 5 ){
        valor_total = morango * 2.50
    }else{
        valor_total = morango * 2.20
    }

    if (maca >= 5 ){
        valor_total = valor_total + morango * 1.80
    }else{
        valor_total = valor_total + morango * 1.50
    }

    if (valor_total > 25 || (morango + maca) > 8) {
        valor_total = valor_total + (valor_total*10/100)
    }
    console.log('valor total a ser pago: ', valor_total)
}
main()