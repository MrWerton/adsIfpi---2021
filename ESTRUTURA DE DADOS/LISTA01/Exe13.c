/*Leia um número e mostre na tela se o número é positivo ou negativo.*/

#include <string.h>

int main(){
  float numero;
    printf("Digite um número: ");
  scanf("%f",&numero);
  if(numero >= 0){
    printf("É positivo");
  }else{
    printf("É negativo");
  };
  return 0;
};