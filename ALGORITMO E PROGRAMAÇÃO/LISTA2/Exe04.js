const prompt = require ('prompt-sync')()
function main(){
    console.log('\n### Comparação entre os digitos de um número ###\n')
    console.log('\n### Defina um número de dois dígitos ###\n')

    const num1 = Number(prompt('Defina um número: '))
    const Decimal = Math.floor(num1/10)
    const Unidade = (num1 % 10)
    
    if(comparacao(Decimal, Unidade)){
        console.log(`\n ### Os dígitos são equivalente ###`)    
    }else{
        console.log(`\n ### Os dígitos são  diferentes ###\n`)
    }   
}
function comparacao(d, u){
    return (d === u)    
    }
main()