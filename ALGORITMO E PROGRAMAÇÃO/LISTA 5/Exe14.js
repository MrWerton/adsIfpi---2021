const entrada = require ('prompt-sync')()

function principal(){
    //Entrada
    const frase = entrada('Intorme uma palavra: ')
    let palavras = frase.split(' ')
    let letras = palavras
    let a = ''
    let inicias = ''
    let valor = Array()
    console.log(`os digitos do login são: `)
    for(let i = 0; i < letras.length; i++){
        a = letras[i]        
        inicias = a[0]
        valor[i] = a[0] 
    }
    console.log(`O login é: ${valor.join(',')}`)
 

    


}


principal()