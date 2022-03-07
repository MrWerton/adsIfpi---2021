const { Obter_numero } = require("./Funções_uteis");

function principal(){

    const valor = Obter_numero('Informe o valor da compra: ')
    const dias = Obter_numero('Informe o prazo em dias (2 à 31 dias): ')
    const parcelas = Obter_numero('Informe o numero de parcelas(0 = àvista): ')

    if(dias >= 2 && dias <= 31){
        condições(valor, dias, parcelas)
    }else if(dias < 2){
        console.log('O número de dias informado foi inferior a 2')
    }else{
        console.log('O número de dias informado foi superior a 31')
    }

}

function condições(a, b, c){
    var valor_taxa = 0
    let valor_compra = a
    let valor_liquido = 0
    let forma_de_pagamento = ''
    let forma_de_pagamento_avista = 'àvista'
    let forma_de_pagamento_prazo = 'parcelado'
    let quantidade_de_parcelas = 'parcelado'
    valor_final = a
    let dias = ''
    if(b === 2 && c >= 0){
        if(c === 0 ){
        valor_final += valor_final*0.0439 + 0.40
        forma_de_pagamento = forma_de_pagamento_avista
        valor_taxa = valor_final - valor_compra
        valor_liquido = valor_compra - valor_taxa
        dias = 2
        quantidade_de_parcelas = 0
        }else{
            valor_final += valor_final*0.0499 + 0.40 + (c * 0.01 * a)
            forma_de_pagamento = forma_de_pagamento_prazo
            valor_taxa = valor_final - valor_compra
            valor_liquido = valor_compra - valor_taxa
            dias = 2
            quantidade_de_parcelas = c
        }
    }else if(b > 2 && b <= 14 && c > 0){
        if(c === 0 ){
            valor_final += valor_final*0.0349 + 0.40
            forma_de_pagamento = forma_de_pagamento_avista
            valor_taxa = valor_final - valor_compra
            valor_liquido = valor_compra - valor_taxa
            dias = 14
            quantidade_de_parcelas = 0
            }else{
                valor_final += valor_final*0.0399 + 0.40 + (c * 0.01 * a)
                forma_de_pagamento = forma_de_pagamento_prazo
                valor_taxa = valor_final - valor_compra
                valor_liquido = valor_compra - valor_taxa
                dias = 14
                quantidade_de_parcelas = c
            }
    }else{
        if(c === 0 ){
            valor_final += valor_final*0.0299 + 0.40
            forma_de_pagamento = forma_de_pagamento_avista
            valor_taxa = valor_final - valor_compra
            valor_liquido = valor_compra - valor_taxa
            dias = 31
            quantidade_de_parcelas = 0
            }else{
                valor_final += valor_final*0.0349 + 0.40 + (c * 0.01 * a)
                forma_de_pagamento = forma_de_pagamento_prazo
                valor_taxa = valor_final - valor_compra
                valor_liquido = valor_compra - valor_taxa
                dias = 31
                quantidade_de_parcelas = c
         
           }

    }
    
    console.log('----------------------------')
    console.log(`O valor da compra é: ${valor_compra}`)
    console.log('----------------------------')
 

    console.log('A forma de pagamento é:', forma_de_pagamento)
    console.log(`A quantidade de parcelas é: ${quantidade_de_parcelas}`)
    console.log('----------------------------')

    console.log(`O valor líquido é: ${valor_liquido}`)
    console.log('----------------------------')

    console.log(`O valor taxa é: ${valor_taxa.toFixed(2)}`)
    console.log('----------------------------')

    console.log(`A data do recebimento é: dia ${dias}`)
    console.log('----------------------------')



}


principal()