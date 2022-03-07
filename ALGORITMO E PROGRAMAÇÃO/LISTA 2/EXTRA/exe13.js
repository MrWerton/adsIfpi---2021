const input = require('prompt-sync')()
function main(){
    // Entrada
    console.log('0 - Não | 1 - sim')
    const resposta_1 = Number(input('a) Telefonou para a vítima ? '))
    const resposta_2 = Number(input('b) Esteve no local do crime ? '))
    const resposta_3 = Number(input('c) Mora perto da vítima ? '))
    const resposta_4 = Number(input('d) Devia para a vítima ? '))
    const resposta_5 = Number(input('e) Já trabalhou com a vítima ? '))

    const resultado = resposta_1 + resposta_2 + resposta_3 + resposta_4 + resposta_5
    // Processamento
    if (resultado <= 2){
        console.log('Suspeita.')
    }else if (resultado >2 && resultado <=4){
        console.log('Cumplice.')
    }else{
        console.log('Assasino.')
    }
}
main()