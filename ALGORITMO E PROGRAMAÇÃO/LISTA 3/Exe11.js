const entrada = require('prompt-sync')({
    sigint: true
})
console.log(' ### Numeros ímpares em um certo intervalo ###')

function principal(){
    //Entrada
    var Limite_inferior = Number(entrada('inicio: '))
    var Limite_superior = Number(entrada('final: '))

    console.log(`Os números ímpares entre o intervalo de ${Limite_inferior} e ${Limite_superior} é: `)
    // Processo
        for(let i = Limite_inferior; i < Limite_superior; i++){
            if(i > Limite_inferior){
            var x = num_primo(i)
                if(x !== false){
                    //saida
                    console.log(x)
                }
            }
        }
}
        
function num_primo(num){
    for (let n = 2; n < num; n++) 
        if (num % n == 0) return false;
        return num;
}

principal()