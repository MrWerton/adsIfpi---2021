const input = require('prompt-sync')()
function main(){
    // Entrada
    const litros = Number(input('Litros: '))
    const combustivel = input('Combustível (a - álcool | g - gasolina): ')
    let valor = 0
    if (combustivel == 'a') {
        if (litros >= 20) {
            valor = ((combustivel * 1.90) * 3/100)
            console.log('valor a ser pago: ', valor)
        } else {
            valor = (combustivel * 1.90) * 5/100
            console.log('valor a ser pago: ', valor)
        }    
    } else {
        if (litros >= 20) {
            valor = (combustivel * 1.90) * 4/100
            console.log('valor a ser pago: ', valor)
        } else {
            valor = (combustivel * 1.90) * 6/100
            console.log('valor a ser pago: ', valor)
        }
    }
}
main()