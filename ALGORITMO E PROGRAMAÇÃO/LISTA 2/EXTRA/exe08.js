const input = require('prompt-sync')()
function main(){
    // Entrada
    const horas = input('Insira a quantidade de horas trabalhadas: ')
    const custo_hora = input('Insira o valor por hora: ')
    
    //Processamento
    const salario_bruto = custo_hora * horas
    const sindicato = salario_bruto * 3/100
    const fgts = salario_bruto * 11/100
    if (salario_bruto <= 900) {
        ir = 0
    } else if (salario_bruto > 900 && salario_bruto <= 1500) {
        ir = 5
    } else if (salario_bruto > 1500 && salario_bruto <= 2500) {
        ir = 10
    } else{
        ir = 20
    }
    //saída
    console.log('Salário Bruto (',horas ,'*', custo_hora, ')  : ', salario_bruto)
    console.log('(-) IR (', ir,'%)             : ', salario_bruto * ir/100)
    console.log('(-) INSS ( 10%)              : ')//ainda falta implementar
    console.log('FGTS (11%)                   : ', salario_bruto * 11/100)
    console.log('Total de descontos           : ', salario_bruto * (ir + 3)/100)
    console.log('Salário Liquido              : ', salario_bruto - (salario_bruto * (ir + 3)/100))
    console.log('')
}
main()