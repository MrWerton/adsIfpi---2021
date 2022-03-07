const entrada = require('prompt-sync')({
    sigint: true
})

const Numero = (a) =>{
    return entrada(a)
}

function criar_vetor(a, b){
    for(let i = 0; i < b; i++){
        a[i] = Number(entrada(`Informe o elemento ${i + 1} do vetor: `))
    }
    return a
}

module.exports = {
    criar_vetor, Numero
}