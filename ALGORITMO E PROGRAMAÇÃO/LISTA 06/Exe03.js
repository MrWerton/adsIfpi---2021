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
    const vetor_c = [...vetor_a,...vetor_b]
    
    console.log('Vetor A',vetor_a)
    console.log('Vetor B',vetor_b)
    console.log('Vetor C',vetor_c)
    
}
principal()