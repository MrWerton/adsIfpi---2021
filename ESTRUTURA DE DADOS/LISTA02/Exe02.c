/*Leia 2 (dois) números, calcule e escreva o mmc (mínimo múltiplo comum) entre os números
lidos.*/
#include <stdio.h>

int main(){
    int numeroA, numeroB, i;
    printf("Informe um primeiro número: ");
    scanf("%i",&numeroA);
    printf("Informe um segundo número: ");
    scanf("%i",&numeroB);
    i = 1;
    if(numeroA > 0 && numeroB > 0){
      while(i % numeroA != 0 || i % numeroB != 0){
        i++;
      };
      printf("\nO MMC dos números informados é: %i",i);
    }else{
      printf("\nOs números informados não são válidos");
    };
    return 0;
};