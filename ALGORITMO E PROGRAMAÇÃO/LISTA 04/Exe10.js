/*Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave
pode levantar vôo ou não. Considere os seguintes critérios:
· O peso de decolagem da aeronave é sempre igual a 500.000 kg;
· O peso de decolagem é composto pela soma do peso do combustível, do peso da carga, do peso dos
passageiros;
· O peso do combustível é a quantidade do combustível (em litros) multiplicada pelo fator 1.5kg/l;
· A quantidade mínima de combustível para que a aeronave decole é de 10000 l;
· O peso da carga é o somatório do peso dos “containers” de cargas em quilogramas.
· O peso dos passageiros é o somatório do peso de cada passageiro e de todos os volumes da sua
bagagem; cada passageiro tem o peso estimado de 70kg e cada volume de bagagem tem o peso
estimado de 10kg.
O algoritmo deve ler o números de containers e a seguir ler o peso de cada container. A seguir devem
ser lidos os dados dos passageiros (número do bilhete, quantidade de bagagens) até que o número do
bilhete seja igual a 0. Devem ser mostrados, a quantidade de passageiros, a quantidade total de volume
de bagagem, o peso dos passageiros, o peso da carga, a quantidade possível de combustível, e uma
mensagem indicando a liberação da decolagem ou não.*/ 
const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
        let quantidade_combustível = Number(entrada('Informe a quantidade de conbustível em l: '))
        if(quantidade_combustível >= 10000){
            let quantidade_container = Number(entrada('Informe a quantidade de containers : '))
            let i = 1
            let peso = 0
            var peso_containers  = 0 
            while(quantidade_container >= i){
                 peso = Number(entrada(`Informe o peso do container  ${i}: `))
                i++
                peso_containers  += peso 
            }
        let bilhete = 1
        var peso_passageiro = 0
        var peso_bagagem = 0
        let bagagem = 0
        var passageiro = 0
        i = 1
        while(bilhete !== 0){
            bilhete = Number(entrada(`Informe o número do bilhete do passageiro ${i} : `))
            if(bilhete > 0){
            bagagem = Number(entrada(`Informe o número a quantidade de bagagem do passageiro ${i} : `))
                peso_passageiro += ((bilhete * 70) + (bagagem * 10))
                peso_bagagem += bagagem * 10
            i++
            passageiro++
        }
    }

        }else{
            console.log('A quantidade de combustível é inferiro a 10000')
            quantidade_combustível = Number(entrada('Informe a quantidade de combustível em l: '))
        }
        
        let peso_combustivel = quantidade_combustível * 1.5
        let peso_total = peso_combustivel + peso_passageiro + peso_containers 
        console.log(`Peso do combustível: ${peso_combustivel}`)
        console.log(`Peso dos passageiros ${peso_passageiro}`)
        console.log(`Peso da carga: ${peso_containers}` )
        console.log(`Peso dos bagagens: ${peso_bagagem}` )
        console.log(`Quantidade de passageiros: ${passageiro}`)
        if(peso_total > 500000){
            console.log('O avião não pode ser decolado')
        }else{
            console.log('O avião pode ser decolado')

        }
        



}

principal()