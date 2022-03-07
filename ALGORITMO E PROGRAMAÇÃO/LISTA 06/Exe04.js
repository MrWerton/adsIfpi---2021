const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    const tamanho_vetor = Number(entrada('Informe o tamanho do vetor: '))
    let vetor_a = Array(tamanho_vetor)
    let vetor_b = Array(tamanho_vetor)
    

   for(let i = 0; i < tamanho_vetor; i++){
        vetor_a[i] = Number(entrada(`Informe o elemento ${i + 1} do vetor A: `))
    }
   for(let i = 0; i < tamanho_vetor; i++){
        vetor_b[i] = Number(entrada(`Informe o elemento ${i + 1} do vetor B: `))
    }
    let j = 0
    let interseccao = []
    let União = []
    let União_1 = []
    let União_2 = []
    for(let i = 0; i < vetor_a.length; i++){
        for(let j = 0; j < vetor_b.length ; j++){
            if(vetor_a[i] === vetor_b[j]){
                interseccao[i] = vetor_a[i]               
             }
        }
    }
    for(let i = 0; i < vetor_a.length; i++){
        for(let j = 0; j < vetor_b.length ; j++){
            if(vetor_a[i] !== vetor_b[j]){
                União[i] = vetor_a[i]             
                União_1[j] = vetor_b[j]              
                União_2 = [...União, ...União_1]             
             }
        }
    } 
    console.log('Vetor A',vetor_a)
    console.log('Vetor B',vetor_b)
    console.log('Vetor C',União_2)
    console.log('Vetor D',interseccao)  
  
}

    
principal()