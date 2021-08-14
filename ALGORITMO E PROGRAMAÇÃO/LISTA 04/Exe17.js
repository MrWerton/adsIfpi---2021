/*Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um
algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais
baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM').*/ 
const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    nome = entrada('Informe o nome do candidato {i}: ')
    altura = Number(entrada('Informe a altura do candidato {i}: '))
    peso = Number(entrada('Informe o peso do candidato {i}: '))
    let i = 0

    console.log('++++ Digite "FIM" para encerrar a pesquisa ++++')
    while(nome !== 'FIM' || nome !== 'fim' || nome !== 'Fim'){
        nome = entrada('Informe o nome do candidato {i}: ')
        altura = Number(entrada('Informe a altura do candidato {i}: '))
        peso = Number(entrada('Informe o peso do candidato {i}: '))
        i++
    }
    console.log(`O número de dias é: ${dias}`)
}
principal()