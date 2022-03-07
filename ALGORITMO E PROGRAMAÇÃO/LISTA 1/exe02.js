//Conversão de tempo: min -> seg
const prompt = require('prompt-sync')()

//entrada
const hora = Number(prompt('Qual é o tempo em horas? '))

//Processamento
const cov = (hora * 60);

//saída
console.log('O tempo em minutos é: ', cov)
