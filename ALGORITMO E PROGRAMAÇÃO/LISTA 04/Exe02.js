const entrada = require('prompt-sync')({
    sigint: true
})
        console.log('### MMC de dois números ###')
function principal(){
        //Entrada
    const numero_a = Number(entrada('Informe um número: '))
    const numero_b = Number(entrada('Informe outro número: '))
        //Processamento
    let i = 1
        if(numero_a > 0 && numero_b > 0){ // condição para se tirar o mmc
            while(i % numero_a !== 0 || i % numero_b !== 0){ // interação para saber se o número é divisível por ambos ao mesmo tempo.
                i++ // adiciona-se se +1 no valor i até o valor está de acordo com a consição da interação.
            }
            //Saída 1
        console.log(`O MMC entre os números ${numero_a} e ${numero_b} é: ${i}`) 
        }else{
            //Saída 2
            console.log('os números informados não são válidos')
        }
   





}
principal()