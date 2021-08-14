const prompt = require ('prompt-sync')()
function main(){
    console.log('\n### Comparação entre dois Números ###\n')
    const num1 = Number(prompt('Defina um número: '))
    const num2 = Number(prompt('Defina um segundo número: '))

    if(comparacao_1(num1, num2)){
        console.log(`\n ### O ${num1} é o maior número ###`) 
        console.log(`### O ${num2} é o menor número ###`)
    }else if(comparacao_2(num1, num2)){
        console.log(`\n ### O ${num2} é o maior número ###`) 
        console.log(`### O ${num1} é o menor número ###`)
    }else{
        console.log(`### Não há maior número ###`)
    }
}
function comparacao_1(n1, n2){
    return (n1 > n2)
}
function comparacao_2(n1, n2){
    return (n1 < n2)
}

main()