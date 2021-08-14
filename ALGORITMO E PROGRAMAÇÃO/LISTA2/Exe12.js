const prompt = require ('prompt-sync')()
function main(){

    console.log('\n### Verificação de par ou ímpar ###\n')

    const num1 = Number(prompt('Defina um número: '))
    
    if (E_par(num1)){
       console.log(`\n### ${num1} é par ###`)
    }else{
        console.log(`\n### ${num1} é ímpar ###`)
    }
}

function E_par(valor){
    return (valor % 2 === 0)
}

main()