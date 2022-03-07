//Leia 3 (três) números, verifique e escreva o maior entre os números lidos.
#include <stdio.h>

int main(){
    float numero1, numero2, numero3, maior;
    printf("Digite 3 numeros: ");
    scanf("%f %f %f", &numero1, &numero2, &numero3);
      if(numero1 > numero2 && numero1 > numero3){
        printf("\n ### O maior número é o: %0.2f",numero1);
      }else if(numero2 > numero1 && numero2 > numero3 ){
         printf("\n ### O maior número é o: %0.2f",numero2); 
      }else if(numero3 > numero1 && numero3 > numero2 ){
         printf("\n ### O maior número é o: %0.2f",numero3); 
      }else if(numero1 == numero2 || numero2 == numero3 ){
         printf("\n Há dois número maiores equivalentes"); 
      }else{
         printf("Não há um maior número"); 
      }

    return 0;
}