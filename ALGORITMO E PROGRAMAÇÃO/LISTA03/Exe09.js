const entrada = require('prompt-sync')({
    sigint: true
})
console.log(' ### Numeros pares em um certo intervalo ###')

function principal(){
    //Entrada
    const Limite_inferior = Number(entrada('inicio: '))
    const Limite_superior = Number(entrada('final: '))

    console.log(`Os números pares entre o intervalo de ${Limite_inferior} e ${Limite_superior} é: `)
    // Processo
    for(let i = Limite_inferior; i < Limite_superior; i++){
        if(i > Limite_inferior && i % 2 === 0){
            // Saída
                console.log(`${i}`)    
        }
    }
}
   
principal()