const prompt = require ('prompt-sync')()
function main(){
    console.log('\n### Igualdade Numérica ###')
    const num1 = Number(prompt('Defina um numero: '))
    const num2 = Number(prompt('Defina um segundo numero: '))
    const num3 = Number(prompt('Defina um terceiro numero: '))

    if(equivalencia(num1, num2, num3)){}
}
function equivalencia(n1,n2,n3){
    if(n1 === n2 && n1 === n3){
        console.log('\n ### Há três números equivalentes ###')
    }else if(n1 === n3 || n1 === n2){
        console.log('\n ### Há dois número equivalentes ###')
    }else{
        console.log('\n ### Não há equivalência entre os números ###')
    }
}
main()