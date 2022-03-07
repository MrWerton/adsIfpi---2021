/*Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.*/
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