const { Obter_numero, criar_vetor, media, maior_valor, menor_valor, quantidade_negativa, quantidade_positiva, repetidos } = require("./Funções_uteis")

function principal(){
    
    //entrada
    const tamanho_vetor = Obter_numero('Informe o tamanho do vetor: ')
    let vetor = [tamanho_vetor]

    /* criando array*/
    const vector = criar_vetor(vetor, tamanho_vetor)
   console.log(vector)
   console.log('-----------------------')


    /*A - media dos valores*/
    const median = media(vector)
    console.log(`A média dos elementos é: ${median}`)
    
    console.log('-----------------------')
   
    /*Maior valor*/
    const maior = maior_valor(vector)
    console.log(`O maior elemento é: ${maior}`)

    console.log('-----------------------')
   
    /*Menor valor*/
    const menor = menor_valor(vector)
    console.log(`O menor elemento é: ${menor}`)

    console.log('-----------------------')
   
    /*Quantidade de elementos Negativa*/
    const quant_negativa = quantidade_negativa(vector)
    console.log(`A quantidade de elementos negativos é: ${quant_negativa}`)

    console.log('-----------------------')

    /*Quantidade Positiva*/
    const quant_positiva = quantidade_positiva(vector)
    console.log(`A quantidade de elementos postivos é: ${quant_positiva}`)

    console.log('-----------------------')

    /*Elementos Repetidos*/
    const elementos_repetidos = repetidos(vector)
    console.log(`Há elementos repetidos: ${elementos_repetidos}`)

    console.log('-----------------------')


}

principal()