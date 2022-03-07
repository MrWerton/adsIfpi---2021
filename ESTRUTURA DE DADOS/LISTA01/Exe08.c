/*Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.*/


#include <stdio.h>

int main(){
  int num, r1, r2, ultimo, penultimo;
  printf("informe um número com 3 digitos: ");
  scanf("%i",&num);
  r1 = (num % 10);
  ultimo = num / 10;
  r2 = (ultimo % 10);
  penultimo = ultimo / 10;

  if(r1 == r2){
     printf("os algarismos da dezena e unidade são iguais");

  }else{
    printf("os algarismos da dezena e unidades são diferente");
  };

  return 0;

}