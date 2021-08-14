const prompt = require ('prompt-sync')()

console.log('### Gasti de Energia ###')
function main (){

//entrada
    const Leitura_atual = Number(prompt('Qual é o valor da leitura atual em KWh? '))
    const Leitura_anterior = Number(prompt('Qual é o valor da leitura anterior KWh? '))

    
//processamento e saída
    const KWh_gasto = (Leitura_atual - Leitura_anterior) //diferença entre as leituras
    const Valor_faturado = Math.floor(KWh_gasto * 0.59)  //valor faturado no intervalo de >30 e <=100
    const Valor_faturado2 = Math.floor(KWh_gasto * 0.75) // Valor faturado > 100
    const Valor_ICMS = Math.floor(Valor_faturado * 0.20) // calculo ICMS
    const Valor_PIS = Math.floor(Valor_faturado * 0.15) //Calculo Pis
    const Valor_Iluminacao = Math.floor(KWh_gasto * 0.06) //Calculo Iluminação
    const Bandeira_100 = Math.floor(KWh_gasto / 100) //calculo para saber quantas vezes 100 kwh foi gasto.
    const Valor_bandeira = (Bandeira_100 * 8) //calculo bandeira à cada 100 kwh gasto.
    const valor_total_30_80 = (Valor_faturado + Valor_ICMS + Valor_PIS) //Valor total no intervalo de 30 - 80
    const valor_total_30_100 = (Valor_faturado + Valor_ICMS + Valor_PIS + Valor_Iluminacao) //valor  total no intervalo de 30 - 100
    const valor_total_maior_100 = (Valor_faturado2 + Valor_ICMS + Valor_PIS + Valor_Iluminacao + Valor_bandeira) //valor total 100++
    



    console.log('\n ### Consumo:',KWh_gasto,'KWh ###') 
        
    if (KWh_gasto <= 30){
        console.log(`\n### Valor faturado: R$ 0,00 ###`)
        console.log(`\n### Bandeira: R$ 0,00 ###`)
        console.log(`\n### ICMS: R$ 0,00 ###`)
        console.log(`\n### PIS/CONFIS: R$ 0,00 ###`)
        console.log(`\n### TAXA DE ILUMINAÇÃO: R$ 0,00 ###`)
    }else if(KWh_gasto > 30 && KWh_gasto <=100){
        console.log(`\n### Valor faturado: R$`, Valor_faturado,'###')
        console.log(`\n### Bandeira: R$ 0,00 ###`)
        console.log(`\n### ICMS: R$`, Valor_ICMS,'###')
        console.log(`\n### PIS/CONFIS: R$`, Valor_PIS,'###')
        if(KWh_gasto > 80){
            console.log('\n### Taxa de Iluminação R$',Valor_Iluminacao,'###')
            console.log(`\n### Valor total: R$`, valor_total_30_100,'###')

        } else if (KWh_gasto <= 80){
            console.log('\n ### Taxa de Iluminação R$ 0,00 ###')
            console.log(`\n### Valor total: R$`, valor_total_30_80,'###')
        }
    }else{ (KWh_gasto > 100)
        console.log(`\n### Valor faturado: R$`, Valor_faturado2,'###')
        console.log(`\n### ICMS: R$`, Valor_ICMS,'###')
        console.log(`\n### PIS/CONFIS: R$`, Valor_PIS,'###')
        console.log('\n### Taxa de Iluminação R$',Valor_Iluminacao,'###')
        console.log('\n ### Bandeira R$', Valor_bandeira, '###')
        console.log(`\n### Valor total: R$`, valor_total_maior_100,'###')

            



    

    }
    }



main()

