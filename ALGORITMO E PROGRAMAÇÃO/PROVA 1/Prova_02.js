const prompt = require ('prompt-sync')()

console.log('###Comissão do Funcionário###\n')
function main (){

//entrada
    const nome = prompt('Qual é o nome do vendedor(a): ')
    const vendas = Number(prompt('Qual é o valor das vendas: '))

  
//processamento e saída
    const salario = 1100
    comissão_1 = ((vendas - 5000) * (0.05)) 
    salario_final1 = (salario + comissão_1)
    comissão_2 = (((vendas - 10000) * (0.10)) + 250) 
    salario_final2 = (salario + comissão_2)
    comissão_3 = (vendas * 0.20) 
    salario_final3 = (salario + comissão_3)
    if(vendas <= 5000){
        console.log(`\n${nome} recebe apenas o salário de ${salario}`)
        
    }else if(vendas > 5000 && vendas <= 10000){
        console.log(`\n${nome} possui um salário inicial de R$ ${salario}`)
        console.log(`Receberá uma comissão de ${comissão_1}`)
        console.log (`Ficará no final com um salário de R$ ${salario_final1}` )
    }else if(vendas > 10000 && vendas <= 30000){
        console.log(`\n${nome} possui um salário inicial de R$ ${salario}`)
        console.log(`Receberá uma comissão de R$ ${comissão_2}`)
        console.log (`Ficará no final com um salário de R$ ${salario_final2}` )
    }else{ (vendas > 30000)
        console.log(`\n${nome} possui um salário inicial de R$ ${salario}`)
        console.log(`Receberá uma comissão de ${comissão_3}`)
        console.log (`Ficará no final com um salário de R$ ${salario_final3}` )
    }


}




main()