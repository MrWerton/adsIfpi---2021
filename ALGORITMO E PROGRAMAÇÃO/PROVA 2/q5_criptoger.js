const { Obter_texto } = require("./Funções_uteis")

function principal(){
    const frase = Obter_texto('Informe uma frase: ')
    const criptografar = criptografia(frase)

    console.log(`A frase ${frase} criptografada é ${criptografar}`)

   

}

function Truncar_frase(a){
    let metade = Math.trunc(a.length/2)
    let frase_truncada = ''
    let pt_1 = ''
    let pt_2 = ''
    let total = ''
    for(let i = 0; i < metade; i++){
         pt_1 += a[i]

    }
    for(let j = metade; j < a.length; j++){
         pt_2 += a[j]
    }
    frase_truncada = pt_1 + pt_2
    return frase_truncada
   

}
function inversão(a){
    frase_invertida = ''
    for(let i = a.length - 1; i >= 0; i--){
        frase_invertida += a[i]

    }
    return frase_invertida
} 
    
function letra_ascii(a){
    return a.charCodeAt(0)
}
function ascii_letra(a){
    return String.fromCharCode(a)
}
function e_letra(a){
    const caractere = letra_ascii(a)
   return ((caractere >= 65 && caractere <= 90) || (caractere >= 97 && caractere <= 122))
}
function e_vogal(a){
    const caractere = letra_ascii(a)
   return (caractere === 65 || caractere === 97 || caractere === 69 || caractere === 101 || caractere === 73 || caractere === 105 || caractere === 79 || caractere === 111 || caractere === 85 || caractere === 117)
}
function transformação_vogais_numero(a){
    let frase_transformada = ''
         for(let i = 0; i < a.length; i++){
            if(a[i] === 'A' || a[i] === 'a'){
                frase_transformada += 1
            }
            else if(a[i] === 'E' || a[i] === 'e'){
                frase_transformada += 2
            }
            else if(a[i] === 'I' || a[i] === 'i'){
                frase_transformada += 3
            }
            else if(a[i] === 'O' || a[i] === 'o'){
                frase_transformada += 4
            }
            else if(a[i] === 'U' || a[i] === 'u'){
                frase_transformada += 5
            }else{
            frase_transformada += a[i]
            }
        
    }
    return frase_transformada
}
function tranformar_numero_asteriscos(a){
    let frase_transformada = ''
         for(let i = 0; i < a.length; i++){
            if(a[i] === '1'){
                frase_transformada += '*'
            }
            else if(a[i] === '2'){
                frase_transformada += '**'
            }
            else if(a[i] === '3'){
                frase_transformada += '***'
            }
            else if(a[i] === '4'){
                frase_transformada += '****'
            }
            else if(a[i] === '5'){
                frase_transformada += '*****'
            }
            else if(a[i] === '6'){
                frase_transformada += '******'
            }
            else if(a[i] === '7'){
                frase_transformada += '*******'
            }
            else if(a[i] === '8'){
                frase_transformada += '*******'
            }
            else if(a[i] === '9'){
                frase_transformada += '*******'
            }
            else{
                frase_transformada += a[i]
            }
            
            
        
    }
    return frase_transformada

}
function deslocarNaTabelaASCII(caractere, pos){
        const codigo = letra_ascii(caractere)
        const novo_codigo = codigo + pos
        const novo_caractere = ascii_letra(novo_codigo)
        return novo_caractere
    }
    

    
function eh_consoante(a){
    for(let i = 0; i < a.length; i++){
        return (e_letra(a[i]) && !e_vogal(a[i]))
    }
}
function deslocarLetras(mensagem){
    let nova_mensagem = ''
    
    for (caractere of mensagem){
        if (eh_consoante(caractere)){
            const caractere_deslocado = deslocarNaTabelaASCII(caractere, 10)
            nova_mensagem += caractere_deslocado
        }else{
            nova_mensagem += caractere
        }
    }

    return nova_mensagem
}

function criptografia(a){
    let truncar = Truncar_frase(a)
    let inverter = inversão(truncar)
    let transformar_vogais = transformação_vogais_numero(inverter)
    let transformar_numeros = tranformar_numero_asteriscos(transformar_vogais)
    let avançar_consoante = deslocarLetras(transformar_numeros)

    return avançar_consoante

}

principal()