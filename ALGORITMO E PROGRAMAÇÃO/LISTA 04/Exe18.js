/*Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
necessários, para que a população da cidade A ultrapasse a população da cidade B. */
const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    let emprestimo = 3000
    let pagamento = 200
    let dias = 0
    let juros = (pagamento * 0.085)
    while(emprestimo > 0){
        emprestimo = emprestimo - pagamento
        emprestimo = emprestimo + juros
        dias++
    }
    console.log(`O número de dias é: ${dias}`)
}
principal()