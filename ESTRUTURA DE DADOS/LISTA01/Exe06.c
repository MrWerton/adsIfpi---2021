//Leia 2 (dois) números, verifique e escreva o maior e o menor entre os números lidos.

#include <stdio.h>

int main(){
  int numero1, numero2;
  printf("Informe um número: ");
  scanf("%i",&numero1);
  printf("Informe outro número: ");
  scanf("%i",&numero2);
  if(numero1 > numero2){
     printf("O maior número é o: %i", numero1);
     printf("\n");
     printf("O menor número é o: %i", numero2);
  }else if(numero1 < numero2){
     printf("O maior número é o: %i", numero2);
     printf("\n");
     printf("O menor número é o: %i", numero1);
  }else{
     printf("Ambos os números são equivalentes");
  };
  
  return 0;
}