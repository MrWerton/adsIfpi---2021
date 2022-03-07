// Média das notas
const prompt = require('prompt-sync')()

//Entrada
const nota1 = Number(prompt('Defina uma nota 1: '))
const peso1 = Number(prompt('Defina o peso da nota 1: '))
const nota2 = Number(prompt('Defina uma nota 2: '))
const peso2 = Number(prompt('Defina o peso da nota 2: '))
const nota3 = Number(prompt('Defina uma nota 3: '))
const peso3 = Number(prompt('Defina o peso da nota 3: '))

//Processamento
const cov1 = (nota1 * peso1)
const cov2 = (nota2 * peso2)
const cov3 = (nota3 * peso3)
const media = ((cov1 + cov2 + cov3)/3)

//saída
console.log('A média ponderada do aluno é: ',media)