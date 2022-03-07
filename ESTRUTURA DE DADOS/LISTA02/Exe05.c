/*Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após
cada divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado
de 1 em 1, até chegar a 2.*/

#include <stdio.h>

int main(){
  float numX, numN, div;
  printf("Infome um valor: ");
  scanf("%f",&numX);
  printf("Informe outro valor (maior ou igual a 2): ");
  scanf("%f",&numN);
  if(numN >= 2){
  while(numN >= 2){
    div = numX / numN;
    numX = div;
    numN--;
    printf("\nresultado da divisão é: %0.2f",div);
  };
  }else{
    printf("\nO segundo valor é inferior a 2");
  };
}