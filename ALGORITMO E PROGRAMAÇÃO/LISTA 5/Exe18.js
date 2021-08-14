const entrada = require('prompt-sync')()
function principal(){
        console.log('### Substrings ###')
const frase = entrada('Digite uma frase: ')
const inicio = entrada('Informe o inicio do sub_caractere: ')
const fim = entrada('Informe o final: ')
//const nova_sting = entrada('Informe o novo valor: ')

const x = substr(frase, inicio, fim)
console.log(x)

}
function substr(texto, pos_inicial, pos_final){
    let sub_cadeia =' '
    let vetor = Array()
    for(let i = pos_inicial; i <= pos_final; i++){
        sub_cadeia += texto[i]
        vetor = sub_cadeia
    }
    return vetor
}


principal()