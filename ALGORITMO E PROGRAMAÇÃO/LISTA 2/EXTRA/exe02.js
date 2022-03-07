const input = require('prompt-sync')()
function main(){
    // Entrada
    const sexo = input('Indique seu sexo (f/m): ')
    // Processamento
    if (sexo == 'f'){
        console.log('F - Feminino')
    }else if(sexo == 'm'){
        console.log('M - Masculino')
    }else{
        console.log('Sexo Inválido')
    }
}
main()