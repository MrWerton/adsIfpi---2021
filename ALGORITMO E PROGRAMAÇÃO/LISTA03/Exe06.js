const entrada = require('prompt-sync')({
    sigint: true
})
console.log(' ### Tabuada ###')

function principal(){
    //Entrada
    const numero = Number(entrada('Informe um número: '))
    //Processamento
    console.log(`\n A tabuada do ${numero} é:`)
    for(let i = 1; i <= 10; i++){
      let tab = tabuada(numero, i)
      console.log(tab)
    }
    
        
}

function tabuada(n, x){
  n = n * x
  return n
}
principal()