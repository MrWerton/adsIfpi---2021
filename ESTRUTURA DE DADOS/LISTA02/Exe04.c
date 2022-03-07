/*Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1.
Escreva o resultado da última divisão efetuada.*/

#include <stdio.h>

int main(){
  float num;
  printf("Informe um número: ");
  scanf("%f",&num);

  while(num > 1){
    num = num/2;
  };
  printf("A última divisão foi: %0.2f",num);
  return 0;
}