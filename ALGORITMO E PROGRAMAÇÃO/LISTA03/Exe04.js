const entrada = require('prompt-sync')({
    sigint: true
})
console.log(' ### Progressão Geométrica ###')

function main(){
    //Entrada
    const variável_A0 = Number(entrada('Informe a variável A0: '))
    const limite = Number(entrada('Informe o limite: '))
    const razão = Number(entrada('Informe a razão: '))
    //Processamento
    const Prog_geometrica = PG(variável_A0, razão, limite)
        for(let i = variável_A0; i < Prog_geometrica; i++){
           //Saída
            console.log(i)
        }
}



function PG(i,q,f){
    f = i * exp(q, f - 1) 
    return f
}

function exp(n, a){
    return n ** a 
}
main()