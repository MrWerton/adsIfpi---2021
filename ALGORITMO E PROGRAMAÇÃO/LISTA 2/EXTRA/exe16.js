const input = require('prompt-sync')()
function main(){
    // Entrada
    const tipo_carne = input('indique o tipo de carne (f-filé | a-alcatra | p-picanha): ')
    const quantidade = Number(input('indique a quantidade de carne(kg):  '))
    const tipo_pagamento = input('indique o tipo de pagamento (c-cartão | v-á vista): ')

    // Processamento
    if (tipo_carne == 'f' ){
        console.log('valor a ser pago: ', quantidade * 4.90)
    }else if (tipo_carne == 'a' ) {
        console.log('valor a ser pago: ', quantidade * 5.90)
    }else{
        console.log('valor a ser pago: ', quantidade * 6.90)
    }
}
main()