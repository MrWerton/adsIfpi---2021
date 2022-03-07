const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    const tamanho_vetor = 4
    let j = []
    let s 
    let vetor_a = Array(tamanho_vetor) 
    for(let j = 0; j < tamanho_vetor; j++){
       vetor_a[j] = Number(entrada('Informe um valor: '))
    }
   
    let x = 0
    for(let i = vetor_a.length - 1; i >= 0; i--){
        j[x] = vetor_a[i]
        x++
    }
   for(let i = 0; i < tamanho_vetor/2; i++){
   s = quadrado(vetor_a[i] - j[i]) + quadrado(vetor_a[i+1] - j[i+1])
   }
  console.log(s)
}
function quadrado(a){
    return a * a
}

principal()