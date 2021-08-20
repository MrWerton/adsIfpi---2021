/*Faça uma função que recebe por parâmetro uma medida de tempo expressa em
segundos e retorna, também por parâmetro, esse tempo em horas, minutos e
segundos no formato: “hh:mm:ss”. */

const { Numero } = require("./Uteis");

function principal(){
  let segundos = Numero('Informe um tempo em segundos: ')
    tempo(segundos)
}
const tempo = (a) =>{
  let res1 = a%3600;
  let hr = a/3600;
  let res2 = res1%60;
  let min = res1/60;
  let seg = res2;
  console.log(`${Math.trunc(hr)} hr: ${Math.trunc(min)} min: ${Math.trunc(seg)} seg:`)

}
principal()