const entrada = require('prompt-sync')({
    sigint: true
})

function Obter_texto(a){
    return entrada(a)
}
function Obter_numero(a){
    return Number(entrada(a))
}
function Obter_numero_Inteiro(a){
    return Math.trunc(Obter_numero(a))
}
function criar_vetor(a,b){
    for(let i = 0; i < b; i++){
         a[i] = Number(Obter_numero(`Informe o elemento ${i} do vetor: `))
     }
     return a
 }
 
 function media(a){
     let elemento = 0
     let quantidade = a.length
    for(let i = 0; i < a.length; i++){
       elemento += a[i]
    }     
    return elemento / quantidade
 }
 function maior_valor(a){
     let maior = 0
     for(let i = 0; i <= a.length; i++){
         if (a[i] > maior)
            maior = a[i];
         
     }
     return maior
 
 }
 function menor_valor(a){
     let menor = a[0]
     for(let i = 1; i < a.length; i++){
         if(a[i] < menor)
             menor = [i]
     }  
     return menor
 
 }
 function quantidade_negativa(a){
     let quantidade = 0
     for(let i = 0; i < a.length; i++){
         if(a[i] < 0){
             quantidade++
         }
     }
     return quantidade
 }
 function quantidade_positiva(a){
     let quantidade = 0
     for(let i = 0; i < a.length; i++){
         if(a[i] >= 0){
             quantidade++
         }
     }
     return quantidade
 }
 function repetidos(a){
     let s = 'Sim!'
     let n = 'Não!'
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
               return s
           }
       }
       return n
       
 }
module.exports = {
    media, Obter_texto, Obter_numero, Obter_numero_Inteiro, menor_valor, maior_valor, repetidos, quantidade_positiva, quantidade_negativa, criar_vetor
}