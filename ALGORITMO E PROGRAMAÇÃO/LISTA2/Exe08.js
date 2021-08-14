const input = require('prompt-sync')()

function main(){

    console.log('Cálcular idade')
    
    console.log('Data atualmente)')
    const dia_de_hoje = Number(input('Dia: '))
    const mes = Number(input('Mês: '))
    const ano = Number(input('Ano: '))

    console.log('Data do seu nascimento') 
    const dia_que_nasceu = Number(input('Dia: '))
    const mes_de_nascimento = Number(input('Mês: '))
    const ano_de_nascimento = Number(input('Ano: '))

    const dia = dia_de_hoje && dia_que_nasceu
    const mes_0 = mes &&mes_de_nascimento
   
    if(dia <= 31 && mes_0 <= 12){ 
      const idade_exata = idade(ano, ano_de_nascimento, mes, mes_de_nascimento, dia_de_hoje, dia_que_nasceu)
      console.log(`### Sua idade é ${idade_exata} ###`)
    }else{
        console.log('### Data inválida ###')
    }

}

function idade(ano1, ano2, mes1, mes2, dia1, dia2){
    const ano = (ano1 - ano2) * 365  

    const mes = (mes1 - mes2)      
    const caso1_mes = Math.pow(mes, 2)  
    const caso2_mes = Math.sqrt(caso1_mes) * 30 

    const dias = dia1 - dia2
    const caso1_dias = Math.pow(dias, 2)   
    const caso2_dias = Math.sqrt(caso1_dias)    
    
    const soma = (ano + caso2_mes + caso2_dias)  
    const resultado = Math.trunc(soma / 365)
    return resultado  
}
main()