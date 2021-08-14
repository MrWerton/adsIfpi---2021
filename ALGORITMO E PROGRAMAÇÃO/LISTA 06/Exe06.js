const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){ 
    let numero =  String(entrada('Digite um número binário com 8 dígitos: '))
    const alg = numero.split('')
    let decimal = 0
    let Hexadecimal = 0
    

    if(numero.length === 8){
       decimal = binario_decimal(numero)
       hexadecimal = decimal_hexadecimal(decimal, 16)
    console.log(`O valor ${numero} em decimal é: ${decimal}`)
    console.log(`O valor ${numero} em hexadecimal é: ${hexadecimal}`)
    }else if(numero.length < 8){
        console.log('O número de dígitos informados foi menor que 8')
    }else{
        console.log('O número de dígitos informados foi maior que 8')
    }
    
    
    
}

function binario_decimal(a){
    let dec = 0
    for (let j = a.length - 1, i = 0; j >= 0; j--, i++) {
        dec += a[j] * Math.pow(2, i);
      }
      return dec
}
function decimal_hexadecimal(number)
{
  if (number < 0){
    number = 0xFFFFFFFF + number + 1;
  }
  return number.toString(16).toUpperCase();
}

principal()