/**Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária
e na base hexadecimal.*/

const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    console.log('Informe o número entre 0 e 250')
    let numero = Number(entrada('Digite um número: '))
    if(numero > 0 && numero < 200){
       binario_decimal(numero)
       decimal_hexadecimal(numero)

    }else{
        console.log('O número informado é inválido')
        numero = Number(entrada('Digite um número: '))
    }
   

}
function binario_decimal(a) {
    let num = a;
    let binario = (num % 2).toString();
    while ( num > 1) {
        num = parseInt(num / 2);
        binario =  (num % 2) + (binario);
    }
    console.log(binario);
}
    
   
function decimal_hexadecimal(number)
{
  if (number < 0){
    number = 0xFFFFFFFF + number + 1;
  }
console.log(number.toString(16).toUpperCase())
}

principal()
