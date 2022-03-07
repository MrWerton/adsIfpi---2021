/*Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada
entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. Ao final, devem ser mostrados:
· a porcentagem de cada candidato;
· a porcentagem dos outros candidatos;
· a porcentagem de eleitores indecisos;
· a porcentagem de votos nulos/brancos;
· o total de entrevistados;
· uma mensagem indicando a possibilidade ou não de haver 2o turno.*/

const entrada = require('prompt-sync')({
    sigint: true
})

function principal(){
    console.log('+++++ digite -1 para encerrar a pesquisa ++++ ')
    console.log('+++++ Informe sua intenção de voto ++++ ')
    console.log('Dilma = 13; Ciro = 23; Serra = 45; Outros = 98; Indeciso: 99, Branco/Nulo = 0')
    let voto_itencao = Number(entrada('Informe seu voto: '))
    let voto = voto_itencao; let quantidade_voto = 0; let Dilma = 0; let Ciro = 0;let Serra = 0
    let Outros = 0; let Branco_Nulo = 0; let Indeciso = 0
    while(voto !== -1){
        if(voto === 13){
            Dilma++
        }
        else if(voto === 23){
            Ciro++
        }
        else if(voto === 45){
            Serra++
        }
        else if(voto === 98){
            Outros += Outros + 1
        }
        else if(voto === 99){
            Branco_Nulo = Branco_Nulo + 1
        }
        else if(voto === 0){
            Indeciso = Indeciso + 1
        }else if(voto === -1){
            quantidade_voto = quantidade_voto - 1
        }else{
            console.log('voto inválido')
            quantidade_voto = quantidade_voto - 1
        }
        quantidade_voto++
        voto = Number(entrada('Informe seu voto: '))

    }
    console.log('----------------------------------------')
    console.log('++++ Outras opções de votos ++++')
    porcentagem_outros(Outros, Branco_Nulo, Indeciso, quantidade_voto)
    console.log('----------------------------------------')
    console.log('++++ Candidatos ++++')
    porcentagem_candidatos(Dilma, Ciro, Serra, quantidade_voto)
    console.log('----------------------------------------')
    console.log(`Total de votos: ${quantidade_voto}`)
    

}
function porcentagem_outros(o,b,i,t){
    let outros = (o/t) * 100
    let brancos = (b/t) * 100
    let indeciso = (i/t) * 100
    console.log(`>> Porcentagem de votos em Outros ${outros.toFixed(2)}`)
    console.log(`>> Porcentagem de votos em Branco ${brancos.toFixed(2)}`)
    console.log(`>> Porcentagem de votos Indecisos ${indeciso.toFixed(2)}`)
}
function porcentagem_candidatos(d,c,s,t){
    let ciro = (c/t) * 100
    let dilma = (d/t) * 100
    let serra = (s/t) * 100
    console.log(`>> Porcentagem de votos para o Ciro ${ciro.toFixed(2)}`)
    console.log(`>> Porcentagem de votos para a Dilma ${dilma.toFixed(2)}`)
    console.log(`>> Porcentagem de votos para o Serra ${serra.toFixed(2)}`)
    segundo_turno(ciro, dilma, serra)

}
function segundo_turno(d,c,s){
    if(d > 50 || c > 50 || s > 50 ){
        console.log('----------------------------')
        console.log('---------- RESULTADO ------------')
       return console.log('Não haverá segundo turno') 
    }else{
        console.log('----------------------------')
        console.log('---------- RESULTADO ------------')
        return console.log('Haverá segundo turno') 
    }

}
principal()
