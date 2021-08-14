const prompt = require ('prompt-sync')()
function main(){
    console.log('\n### Comparação entre três Números ###\n')
    const num1 = Number(prompt('Defina um número: '))
    const num2 = Number(prompt('Defina um segundo número: '))
    const num3 = Number(prompt('Defina um terceiro número: '))

    if(num1 > num2 && num1 > num3){
        console.log(`\n ### O ${num1} é o maior número ###`) 
    }else if(num2 > num1 && num2 > num3 ){
        console.log(`\n ### O ${num2} é o maior número ###`) 
    }else if(num3 > num1 && num3 > num2 ){
        console.log(`\n ### O ${num3} é o maior número ###`) 
    }else if(num1 === num2 || num2 == num3 ){
        console.log(`\n ### Há, no mínimo, 2 números maiores ###`) 
    }else{
        console.log(`Não há maior número`)
    }
}
main()