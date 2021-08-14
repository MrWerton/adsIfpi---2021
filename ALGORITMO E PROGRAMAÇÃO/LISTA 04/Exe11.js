const entrada = require('prompt-sync')({
    sigint: true
})
function principal(){
    let matricula = Number(entrada('Informe o número da matrícula do aluno: '))
    let media_notas = 0
    let aprovado = 0
    let reprovado = 0
    let quant_matricula = 0
    while(matricula !== 0){
        let nota_1 = Number(entrada(`Informe a 1º nota do aluno ${matricula}: `))
        let nota_2 = Number(entrada(`Informe a 2º nota do aluno ${matricula}: `))
        let nota_3 = Number(entrada(`Informe a 3º nota do aluno ${matricula}: `))
        media_notas = media(nota_1, nota_2, nota_3)
    if(media_notas >= 7){
        console.log(`A media das notas é ${media_notas}`)
        console.log('O aluno está aprovado')
        aprovado++
    }else{
        console.log(`A media das notas é ${media_notas}`)
        console.log(`O aluno está reprovado`)
        reprovado++
    }
    console.log('------------------------------')
    matricula = Number(entrada('Informe o número da matrícula do aluno: '))
    quant_matricula++
}
console.log(`Quantidade de aprovado: ${aprovado}`)
console.log(`Quantidade reprovado: ${reprovado}`)
console.log(`Quantidade de alunos: ${quant_matricula}`)
}

function media(a,b,c){
    media_final = ((2 * a) + (3 * b) + (5 * c))/10
    return media_final
}
principal()
