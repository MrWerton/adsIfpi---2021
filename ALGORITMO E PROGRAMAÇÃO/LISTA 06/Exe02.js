const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    const tamanho_vetor = Number(entrada('Informe o tamanho do vetor: '))
    let vetor = Array(tamanho_vetor)
    let elemento 

   for(let i = 0; i < tamanho_vetor; i++){
        vetor[i] = Number(entrada(`Informe o elemento ${i} do vetor: `))
    }

    if(repetidos(vetor)){
        console.log('Há elementos repetidos')
    }else{
        console.log('Não há elementos repetidos')
    }
}
function repetidos(a){
  let elemento
  let contador
    for(let i = 0; i < a.length; i++){
        elemento = a[i]
        contador = 0
        for(let i = 0; i < a.length; i++){
            if(elemento === a[i]){
                 contador++
            }
        }
        if(contador > 1){
            return true
        }
    }
    return(false)
    
}
   
    
    


principal()
