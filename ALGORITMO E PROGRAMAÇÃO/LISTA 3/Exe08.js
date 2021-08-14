const entrada = require('prompt-sync')({
    sigint: true
})
console.log(' ### Multiplos de um número em um certo intevalo ###')

function principal(){
    //Entrada
    const numero = Number(entrada('Número: '))
    const Limite_inferior = Number(entrada('inicio: '))
    const Limite_superior = Number(entrada('final: '))
   
    // Processo
    console.log(`Os múltiplos de ${numero}, no intervalo entre ${Limite_inferior} e ${Limite_superior} é: `)
    for(let i = Limite_inferior; i < Limite_superior; i++){
           if(i > Limite_inferior && i % numero === 0)
            // Saída
                console.log(`${i}`)    
    }
}
   
principal()