/*Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
recente.*/
#include <stdio.h>

int main(){
  int dia1,mes1,ano1, dia2, mes2, ano2;
  printf("Informe a primeira data em Dia Mes Ano: ");
  scanf("%i %i %i",&dia1, &mes1, &ano1);
  printf("Informe a segunda data em Dia Mes Ano: ");
  scanf("%i %i %i",&dia2, &mes2, &ano2);
  if((eh_data(dia1, mes1) == 1) && (eh_data(dia2, mes2) == 1)){
    if(dia1 > dia2 && mes1 > mes2 && ano1 > ano2){
      printf("A data 1 é a mais recente");
    }else{
      printf("A data 2 é mais recente");
    }
  }else{
    printf("As data informadas não são válidas");
  };
  return 0;
}
int eh_data(int D, int M){
if(D > 0 && D < 31){
    if(M > 0 && M < 12){
      if( M== 1 || M==3 || M==5 || M==7 || M== 8 || M== 10 || M==12 ){
        if(D < 31){
           return 1;
        }else{
          return 0;
        };
      }else if(M==4 || M==6 || M==9 || M==11);
        if(D < 30){
          return 1;
        }else{
          return 0;
        };
    }else{
      return 0;
    };
  }else{
    return 0;
  };
}