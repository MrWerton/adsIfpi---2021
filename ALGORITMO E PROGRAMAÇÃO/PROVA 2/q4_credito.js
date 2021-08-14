const { Obter_numero } = require("./Funções_uteis")

function principal(){
    console.log('Valores de créditos disponíveis: R$ 40000; R$ 60000 e R$ 81000')
    const creditos = Obter_numero('Informe o valor do crédito: ')
    console.log('Valores das parcelas disponíveis: $ 1000; R$ 1200 e R$ 1500')
    const parcelas = Obter_numero('Informe o valor da parcela: ')
   

    if(creditos === 40000 || creditos === 60000 || creditos === 81000){
        if(parcelas === 1000 || parcelas === 1200 || parcelas === 1500){
            calculo(creditos, parcelas)
        }else{
            console.log('o valor da parcela informado é inválido')
        }
        
    }else{
        console.log('o valor do crédito informado é inválidom')
    }
    
}
function calculo(a, b){
    let devedor = a
    let parcela = b
    let meses = 1
    let juros = meses * 0.01
    let valor_parcela = b
    let saldo_atual = devedor
    let juros_mes = devedor
    let saldo_anterior = devedor


    for(let i = devedor; devedor >= 0; devedor - parcela){
        if(devedor > 0){
        saldo_anterior = Math.abs(devedor)
        devedor = devedor + (devedor * juros) - parcela
        meses++
  
        saldo_atual = Math.abs(devedor)
        juros_mes = saldo_atual * 0.001
        console.log(`Mes: ${meses}`)
        console.log(`valor anterior: ${saldo_anterior.toFixed(2)}`)
        console.log(`valor parcela: ${parcela}`)
        console.log(`valor atual: ${saldo_atual.toFixed(2)}`)
        console.log(`valor juros: ${juros_mes.toFixed(2)}`)
        console.log('----------------------------------------')
       
         
    }
}
    console.log('Total de meses', meses)  
    devedor = (devedor + parcela)
    console.log('ultima parcela',devedor.toFixed(2))
}


principal()