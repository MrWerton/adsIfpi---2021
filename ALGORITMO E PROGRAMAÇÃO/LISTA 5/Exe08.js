const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    //Entrada
    const data = entrada('Informe um horário (Hrs:Min:Seg): ')
    const x = data.split(':')  
    let hora = Number(x[0])
    let minuto = Number(x[1])
    let segundo = Number(x[2])
    //Processamento e saída
    console.log(`${hora} Hora(s), ${minuto} Minuto(s) e ${segundo} Segundo(s)`)
    
}

principal()
