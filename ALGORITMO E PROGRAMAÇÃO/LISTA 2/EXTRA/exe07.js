const input = require('prompt-sync')()
let reajuste, percentual;
function main(){
    // Entrada
    const salario = Number(input('Indique o valor de seu salário: '))
    // Processamento
    if (salario <= 280){
        reajuste = (salario*20/100)
        percentual  = '20%'
    }
    else if (salario > 280 && salario <= 700){
        reajuste = (salario*15/100)
        percentual  = '15%'
    }
    else if (salario > 700 && salario <= 1500){
        reajuste = (salario*10/100)
        percentual  = '10%'
    }
    else{
        reajuste = (salario*5/100)
        percentual  = '5%'
    }
    console.log('======================================')
    console.log('Salário antes do reajuste     : ', salario)
    console.log('Percentual do aumento aplicado: ', percentual)
    console.log('Valor do aumento              : ', reajuste)
    console.log('Novo salário                  : ', salario + reajuste)

}
main()