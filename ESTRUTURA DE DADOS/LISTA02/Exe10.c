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
#include <stdio.h>

int porcentagem_outros(float o, float b, float i, float t){
  float outros, brancos, indecisos;
  outros = (o/t) * 100;
  brancos = (b/t) * 100;
  indecisos = (i/t) * 100;
    printf("\n>> Porcentagem de votos em Outros: %0.2f", outros);
    printf("\n>> Porcentagem de votos em Branco: %0.2f", brancos);
    printf("\n>> Porcentagem de votos Indecisos: %0.2f", indecisos);
    return 0;
};
int segundo_turno(float d, float c, float s){
    if(d > 50 || c > 50 || s > 50 ){
        printf("\n----------------------------\n");
        printf("\n---------- RESULTADO ------------\n");
       return printf("\nNão haverá segundo turno\n");
    }else{
        printf("\n----------------------------\n");
        printf("\n---------- RESULTADO ------------\n");
        return printf("\nHaverá segundo turno\n");
    };
    return 0;

}
int porcentagem_candidatos(float d, float c, float s, float t){
  float ciro, dilma, serra;
     ciro = (c/t) * 100;
     dilma = (d/t) * 100;
     serra = (s/t) * 100;
    printf("\n>> Porcentagem de votos em Ciro: %0.2f", ciro);
    printf("\n>> Porcentagem de votos na Dilma: %0.2f", dilma);
    printf("\n>> Porcentagem de votos no Serra: %0.2f", serra);
    segundo_turno(ciro, dilma, serra);
    return 0;

};

int main(){
  int voto = 0, quantidade_voto = 0, Dilma = 0, Ciro = 0, Serra = 0, Outros = 0, Branco_Nulo = 0, Indeciso = 0;
    printf("\n++++ Digite -1 para encerrar a pesquisa ++++ ");
    printf("\n+++++ Informe sua intenção de voto ++++ ");
    printf("\n+++++ Dilma = 13; Ciro = 23; Serra = 45; Outros = 98; Indeciso: 99, Branco/Nulo = 0");
    printf("\nInforme o digito do seu candidato: ");
    scanf("%i", &voto);
    while(voto != -1){
        switch(voto){
          case 13:
            Dilma++;
            break;
          case 23:
            Ciro++;
            break;
          case 45:
            Serra++;
            break;
          case 98:
            Outros += Outros +1;
            break;
          case 99:
            Branco_Nulo = Branco_Nulo + 1;
          case 0:
            Indeciso = Indeciso + 1;
            break;
          case -1:
            quantidade_voto = quantidade_voto - 1;
            break;
          default:
            printf("\nQuantidade de voto invalido");
            quantidade_voto = quantidade_voto - 1;   
        };
        quantidade_voto = quantidade_voto + 1;
        printf("\nInforme o digito do seu candidato: ");
        scanf("%i", &voto);

    };
    printf("\n-------------------------------");
    printf("\n++++ Outras opções de votos ++++");
    porcentagem_outros(Outros, Branco_Nulo, Indeciso, quantidade_voto);
    printf("\n----------------------------------------");
    printf("\n++++ Candidatos ++++");
    porcentagem_candidatos(Dilma, Ciro, Serra, quantidade_voto);
    printf("\n----------------------------------------");
    printf("\nTotal de votos: %i", quantidade_voto);
  return 0;
};

