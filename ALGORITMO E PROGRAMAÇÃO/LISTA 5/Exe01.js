const entrada = require('prompt-sync')({
  sigint: true
})

function principal(){
    const frase = entrada('Digite uma frase: ')

    const frase_invertida = inverter(frase)
    console.log(frase_invertida)
    const frase_final = substituir_consoantes_por(frase, '*')
}

function inverter(a){
    let nova_frase = ''
    for(let i = a.length - 1; i >= 0; i--){
        nova_frase += a[i]
    }
    return nova_frase
}
// letras 65 --- 90 --- 97 ------122
function eh_letra(a){
    const codigo = a.charCodeAt(0)
    for(let i = 0; i < codigo.length; i++){
        if(codigo >= 65 && codigo <= 90  || codigo >= 65 && codigo <= 90){
            return true
        }else{
            return false
        }
    }
}
function eh_vogal(a){
    const codigo = a.charCodeAt(0)
    if(eh_letra(a)){   
        if (codigo === 65 || codigo === 97 || codigo === 69 || codigo === 101 || codigo === 73 || codigo === 105 || codigo === 79 || codigo === 111 || codigo === 85 || codigo === 117){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
function eh_consoante(a){
    if (eh_letra(a) && !eh_vogal(a)){
        return true
    }else{
        return false
    }
}
}
function substituir_consoantes_por(frase, substituto){
    let nova_frase = ''
    let caractere = ''
    for (let i = 0; i < frase.length; i++){
        caractere = frase[i]
        if (eh_consoante(caractere)){
            nova_frase = nova_frase + substituto
        }else{
            nova_frase = nova_frase + caractere
        }
    }
    return nova_frase
}
principal()