/*Leia um
numero X e, a seguir, leia e escreva uma lista de números com o término da lista
ocorrendo quando a soma de dois números consecutivos da lista for igual a X.*/

#include <stdio.h>
int main(){
  float numX, num1,soma,ultimoValor;
  printf("Informe um número: ");
  scanf("%f",&numX);
  while(numX != soma){
    ultimoValor = num1;
    printf("Informe um número: ");
    scanf("%f",&num1);
    soma = num1 + ultimoValor;
  }
  return 0;
}