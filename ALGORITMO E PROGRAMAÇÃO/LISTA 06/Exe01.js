const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    const tamanho_vetor = Number(entrada('Informe o tamanho do vetor: '))
    let vetor_a = Array(tamanho_vetor)
    let vetor_b = Array(tamanho_vetor)

   for(let i = 0; i < tamanho_vetor; i++){
        vetor_a[i] = Number(entrada(`Informe o elemento ${i} do vetor: `))
       
    }
    let j = 0
    for(let i = vetor_b.length - 1; i >= 0; i--){
        vetor_b[i] = vetor_a[j]
        j++
    }
   console.log(vetor_a)
    console.log(vetor_b)
    
    

}

principal()