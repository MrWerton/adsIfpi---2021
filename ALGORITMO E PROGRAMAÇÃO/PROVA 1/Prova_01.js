const prompt = require ('prompt-sync')()

console.log('### Evolução dos casos de Covid ###\n')
function main (){

//entrada
    const md_14 = Number(prompt('Qual é a média dos 14 dias: '))
    const md_1 = Number(prompt('Qual é a média de hoje: '))

//processamento e saída
    const calc = Math.floor(((md_1 - md_14)*100)/md_14)
    const calc2 = Math.floor(((md_14 - md_1)*100)/md_14)
    if(md_14 < md_1){
        console.log('Houve uma variação de: ',calc,'%')
        if(calc < 15){
            console.log('O número de casos está Estável')
        }else if(calc >= 15){
            console.log('O número de casos está em alta')
        }
    }else if(md_14 > md_1){
        console.log('Houve uma variação de: ',~calc2,'%')
        if(calc2 < 15){
            console.log('O número de casos está estável')
        }else if(calc2 >= 15){
            console.log('O número de casos está em queda')
        }
    }else{ (md_14 == md_1)
        console.log('Não houve variação')
    }


}




main()
