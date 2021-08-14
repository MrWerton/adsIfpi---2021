//Distância entre 2 pontos
const prompt = require('prompt-sync')()

//entrada

const A = Number(prompt('Determine o ponto x1: '))
const B = Number(prompt('Determine o ponto x2: '))
const C = Number(prompt('Determine o ponto y1: '))
const D = Number(prompt('Determine o ponto y2: '))

//Processamento
const custo = Math.sqrt(Math.pow((B - A), 2) + Math.pow((D - C), 2))

//saída
console.log(' A distãncia entre os pontos é: ', custo )