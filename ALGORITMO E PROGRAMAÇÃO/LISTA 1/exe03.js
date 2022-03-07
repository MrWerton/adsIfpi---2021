//Conversão de tempo: m -> h
const prompt = require('prompt-sync')()

//entrada
const tempo = Number(prompt('Qual é o tempo em minutos? '))

//Processamento
const cov = (tempo / 60);

//saída
console.log('O tempo em horas é: ', cov)
