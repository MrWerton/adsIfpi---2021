/*Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação
de seus divisores. (flag número = 0).*/
#include <stdio.h>

int main(){
    int numero = 1;
    int divisores = 1;
    while(numero != 0){
      if(numero != 0){
        printf("Informe um número: ");
        scanf("%i",&numero);
        while(divisores <= numero){
          if(numero % divisores == 0){
            printf("\nOs divisores são: %i", divisores);
            printf("\n------------------------\n");
        }
        divisores++;
      };
      divisores = 1;
    };
    }
}
