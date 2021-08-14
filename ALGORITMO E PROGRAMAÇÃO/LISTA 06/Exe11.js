const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    const ordem = Number(entrada('Ordem da matriz quadrade: '))

    const matriz = nova_matriz_quadrada(ordem)
    let i_li = 0
    let j_co = 0

    for (let linha = 0; linha < ordem; linha++){
        for (let coluna = 0; coluna < ordem; coluna++){
            matriz[linha][coluna] = Number(entrada(`Valor L:${linha}-C:${coluna} >> `))
        }
    }
    for(let i = matriz.length - 1; i >= 0; i--){
        for(let j = matriz.length - 1; j >= 0; j--){
            j_li = i
            j_co= j
        } 
    }
   console.log(matriz)
   
    
           
}

function nova_matriz_quadrada(n){
    const matriz = Array(n)
    
    for (let i = 0; i < n; i++){
        matriz[i] = Array(n)
    }

    return matriz
}        

   
principal()