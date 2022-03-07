const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    //Entrada
    const data = entrada('Informe uma data (DD/MM/AAAA): ')
    const x = data.split('/')   
    let dia = Number(x[0])
    let mes = Number(x[1])
    let ano = Number(x[2])
    //Processamento e saída
    if(mes === 1 ){
        console.log(`${dia} de janeiro de ${ano}`)
    }
    else if(mes === 2 ){
        console.log(`${dia} de fevereiro de ${ano}`)
    }
    else if(mes === 3){
        console.log(`${dia} de Março de ${ano}`)
    }
    else if(mes === 4 ){
        console.log(`${dia} de Abril de ${ano}`)
    }
    else if(mes === 5){
        console.log(`${dia} de Maio de ${ano}`)
    }
    else if(mes === 6 ){
        console.log(`${dia} de Junho de ${ano}`)
    }
    else if(mes === 7 ){
        console.log(`${dia} de Julho de ${ano}`)
    }
    else if(mes === 8 ){
        console.log(`${dia} de Agosto de ${ano}`)
    }
    else if(mes === 9 ){
        console.log(`${dia} de Setembro de ${ano}`)
    }
    else if(mes === 10 ){
        console.log(`${dia} de Outubro de ${ano}`)
    }
    else if(mes === 11 ){
        console.log(`${dia} de Novembro de ${ano}`)
    }
    else if(mes === 12){
        console.log(`${dia} de Dezembro de ${ano}`)
    }

}

principal()
