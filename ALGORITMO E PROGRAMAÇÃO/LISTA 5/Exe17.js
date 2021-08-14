const entrada = require('prompt-sync')()
function principal(){
        console.log('### Substrings ###')
const frase = entrada('Digite uma frase: ') 
const inicio = entrada('Informe o inicio do sub_caractere: ') 
const fim = entrada('Informe o final: ') 

    substr(frase, inicio, fim)
}
function substr(texto, pos_inicial, pos_final){
    let sub_cadeia =''
    for(let i = pos_inicial; i <= pos_final; i++){
        sub_cadeia = sub_cadeia + texto[i]
    }
    return console.log(sub_cadeia)
}
principal()