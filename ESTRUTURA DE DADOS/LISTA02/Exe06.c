#include <stdio.h>

int main(){
  float num;
  int quantidade = 1;
  printf("Infome um valor: ");
  scanf("%f",&num);
  while(num >= 10){
    num = (num/10);
    quantidade = quantidade + 1;
  };
  printf("\nQuantidade de digitos: %i", quantidade);
  return 0;
};