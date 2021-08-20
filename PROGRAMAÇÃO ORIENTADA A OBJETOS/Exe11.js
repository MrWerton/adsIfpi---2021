
/*Escreva uma função que dados 2 valores reais p e x calcule e retorne quanto vale p
por cento de x */
const { Numero } = require("./Uteis")

function principal(){
  let valorP = Numero('Informe um valor "p": ')
  let valoX = Numero('Informe um valor "x": ')
  console.log(`O valor de ${valorP} por cento de ${valoX} é: ${VPorcentagem(valorP,valoX)}%`)

}

const VPorcentagem = (x,y) => ((x/y) * 100);
principal()