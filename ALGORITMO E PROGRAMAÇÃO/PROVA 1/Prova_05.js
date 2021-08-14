const prompt = require ('prompt-sync')()

console.log('\n### Análise do Escore Serasa ###')
function main (){

//entrada
     
    console.log('\n ### Defina um valor de 3 digitos para cada critério ###')
    const criterio_1 = Number(prompt('Qual é o valor do critério A? '))
    const criterio_2 = Number(prompt('Qual é o valor do critério B? '))
    const criterio_3 = Number(prompt('Qual é o valor do critério C? '))
    const Nome = (prompt('De quem é o score analisado? '))
    
    
//processamento e saída
    console.log('\n### Escore 1 ###') 
    const Score_1A = ((criterio_1/10)*26)
    const Score_1B = ((criterio_2/10)*57)
    const Score_1C = ((criterio_3/10)*17)
    const soma_1 = (Score_1A + Score_1B + Score_1C)
    
    if (soma_1 <= 1000 && soma_1 >= 800){
        console.log(`### ${Nome} possui um score Muito Bom! ###`)
    }else if(soma_1 < 800 && soma_1 >= 600){
        console.log(`### ${Nome} possui um score Bom! ###`)
    }else if(soma_1 < 600 && soma_1 >= 400){
        console.log(`### ${Nome} possui um score Regular! ###`)
    }else{ 
        console.log(`### ${Nome} possui um score Baixo! ###`)

    }
    console.log('\n### Escore 2 ###')
    const Score_2A = ((criterio_3/10)*62)
    const Score_2B = ((criterio_3/10)*19)
    const Score_2C = ((criterio_3/10)*19)
    const soma_2 = (Score_2A + Score_2B + Score_2C)
   
    if (soma_2 < 1000 && soma_2 >= 800){
        console.log(`### ${Nome} possui um score Muito Bom! ###`)
    }else if(soma_2 < 800 && soma_2 >= 600){
        console.log(`### ${Nome} possui um score Bom! ###`)
    }else if(soma_2 < 600 && soma_2 >= 400){
        console.log(`### ${Nome} possui um score Regular! ###`)
    }else{ 
        console.log(`### ${Nome} possui um score Baixo! ###`)
    }

}
main()