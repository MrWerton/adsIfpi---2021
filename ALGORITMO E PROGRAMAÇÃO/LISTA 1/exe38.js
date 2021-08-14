//Fração
const input = require('prompt-sync')();

// entrada
let [a, b] = input('Informe a primeira fração (A/B): ').split('/'),
  [c, d] = input('Informe a segunda fração (C/D): ').split('/');

// processamento
let numerator = (+a)*(+d) + (+c)*(+b),
  denominator = (+b) * (+d);

// saída
console.log(`-----\nResultado: ${numerator}/${denominator}`);