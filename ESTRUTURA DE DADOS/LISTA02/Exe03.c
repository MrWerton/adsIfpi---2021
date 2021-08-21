/*Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos.*/

#include <stdio.h>

int main(){
    int numeroA, numeroB,mdc,resto;
    printf("Informe um primeiro número: ");
    scanf("%i",&numeroA);
    printf("Informe um segundo número: ");
    scanf("%i",&numeroB);
    if(numeroA > 0 && numeroB > 0){
      while(numeroB != 0){
        resto = numeroA % numeroB;
        numeroA = numeroB;
        numeroB = resto;
      };
      mdc = numeroA;
    }else{
      printf("\nOs números informados não são válidos");
    };
    printf("\nO MMC dos números informados é: %i",mdc);
    return 0;
};