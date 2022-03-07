const prompt = require('prompt-sync')()

console.log('### Colocar os números em rol crescente ###')

function main(){
    const num1 = Number(prompt('Digite um número: '))
    const num2 = Number(prompt('Digite um segundo número: '))
    const num3 = Number(prompt('Digite um terceiro número: '))

    let maior, meio, menor

    if(num1 > num2 && num1 > num3){
        maior = num1
        if(num2 > num3){
            meio = num2
            menor = num3
        }else{
            meio = num3
            menor = num2
        }
    }else if(num1 < num2 && num1 < num3 ){
            menor = num1
        if(num2 > num3){
            maior = num2
            meio = num3
        }else{
            maior = num3
            meio = num2
        }
    }else{
            meio = num1
        if(num2 < num3){
            maior = num3
            menor = num2
        }else{
            maior = num2
            menor = num3
        }
    }
    console.log(`Os números em rol crescente é: ${menor}, ${meio}, ${maior}`)
}
main()