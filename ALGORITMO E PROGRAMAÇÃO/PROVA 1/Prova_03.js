const prompt = require ('prompt-sync')()

console.log('### Sistema de análise de notas ###')
function main (){

//entrada
    const nome = prompt('Qual é o nome do aluno(a): ')
    const avaliacao_1 = Number(prompt('Qual é a nota da avaliação? '))
    const avaliacao_2 = Number(prompt('Qual é a nota da avaliação 2? '))
    const atividade = Number(prompt('Qual é a nota das atividades? '))

    
//processamento e saída
const media = (((avaliacao_1 * 2) + (avaliacao_2 * 3) + (atividade * 1))/6) //calcula a média do semestre
        //O @ está de recuperação
    if (media < 7 && media > 4){
        console.log(`\n### O ${nome} irá para prova final ####`)
        const nota_final = Number(prompt(`\nQuanto ${nome} tirou na prova final? `))
        const prova_f =  ((media + nota_final)/2)
        if(prova_f >= 6){
            console.log(`\n#### O ${nome} está aprovado ######`)
        }else if(prova_f < 6){
            console.log(`\n###### O ${nome} está reprovado ######`)
        }
            //O @ está aprovado
    }else if(media >= 7){
        console.log(`\n#### O ${nome} está aprovado ####`)
        //O @ está reprovado
    }else{ (media < 4)
        console.log(`\n #### O ${nome} está reprovado ####`)
    }
    }



main()