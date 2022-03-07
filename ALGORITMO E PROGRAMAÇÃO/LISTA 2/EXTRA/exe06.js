const input = require('prompt-sync')()
function main(){
    // Entrada
    console.log('turnos:')
    console.log('M - manhã')
    console.log('V - tarde')
    console.log('N - noite')
    const turno = input('Indique seu Turno (m/v/n): ')
    // Processamento
    if (turno == 'm'){
        console.log('Bom dia.')
    }else if(turno == 'v'){
        console.log('Boa tarde.')
    }else if(turno == 'n'){
        console.log('Boa noite.')
    }else{
        console.log('turno inválido.')
    }
}
main()