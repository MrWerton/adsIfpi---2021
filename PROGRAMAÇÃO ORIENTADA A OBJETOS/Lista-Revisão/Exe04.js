/*Escreva um programa que apresente o mês por extenso, a partir de um número
digitado pelo usuário (entre 1 e 12). */
const { Numero } = require('./Uteis')

function principal(){
    let mes =  Numero('Informe o número do mês: ')
    mesExtenso(mes)   
}
const mesExtenso =(a) => {
  let mes = []
    if(a === 1){
      for(let i = 0; i < 31; i++){
        mes[i] = i+1
      }
      return console.log("Janeiro" ,mes)
    }else if(a === 2){
      for(let i = 0; i < 29; i++){
        mes[i] = i+1
      }
      return console.log("Fevereiro" ,mes)
    }else if(a === 3){
      for(let i = 0; i < 31; i++){
        mes[i] = i+1
      }
      return console.log("Março" ,mes)
    }else if(a === 4){
      for(let i = 0; i < 30; i++){
        mes[i] = i+1
      }
      return console.log("Abril" ,mes)
    }else if(a === 5){
      for(let i = 0; i < 31; i++){
        mes[i] = i+1
      }
      return console.log("Maio" ,mes)
    }else if(a === 6){
      for(let i = 0; i < 30; i++){
        mes[i] = i+1
      }
      return console.log("Junho" ,mes)
    }else if(a === 7){
      for(let i = 0; i < 31; i++){
        mes[i] = i+1
      }
      return console.log("Julho" ,mes)
    }else if(a === 8){
      for(let i = 0; i < 31; i++){
        mes[i] = i+1
      }
      return console.log("Agosto" ,mes)
    }else if(a === 9){
      for(let i = 0; i < 30; i++){
        mes[i] = i+1
      }
      return console.log("Setembro" ,mes)
    }else if(a === 10){
      for(let i = 0; i < 31; i++){
        mes[i] = i+1
      }
      return console.log("Outubro" ,mes)
    }else if(a === 11){
      for(let i = 0; i < 30; i++){
        mes[i] = i+1
      }
      return console.log("Novembro" ,mes)
    }else if(a === 12){
      for(let i = 0; i < 31; i++){
        mes[i] = i+1
      }
      return console.log("Dezembro" ,mes)
    }else{
      console.log("O número informado não representa nenhum mês")
    }
}
principal()
