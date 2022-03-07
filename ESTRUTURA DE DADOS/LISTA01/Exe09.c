//Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.
#include <stdio.h>

int main(){
  int dia, mes, ano;
  printf("Informe o Dia: ");
  scanf("%d",&dia);
  printf("Informe o Mês: ");
  scanf("%d",&mes);
  printf("Informe o Ano: ");
  scanf("%d",&ano);
  if(dia > 0 && dia < 31){
    if(mes > 0 && mes < 12){
      if( mes== 1 || mes==3 || mes==5 || mes==7 || mes== 8 || mes== 10 || mes==12 ){
        if(dia < 31){
           printf("A data é válida");
        }else{
          printf("A data é invalida");
        };
      }else if(mes==4 || mes==6 || mes==9 || mes==11);
        if(dia < 30){
          printf("A data é válida");
        }else{
          printf("A data é invalida");
        };
    }else{
      printf("A data é inválida");
    };
  }else{
    printf("A data é inválida");
  };
  return 0;
};