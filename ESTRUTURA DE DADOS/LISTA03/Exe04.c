/*Leia um vetor A com N elementos e escreva um vetor B com N elementos, conforme a
seguinte condição: se índice de A[índice] é par então B[índice] = 0, caso contrário B[índice]
= 1.*/
#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main(){
    int tamanho, elemento;
    printf("Informe o tamanho dos vetores: ");
    scanf("%d", &tamanho);
    int vetorA[tamanho];
    for(int i = 0; i < tamanho; i++){
      printf("Informe o elemento %d do vetor A: ", i);
      scanf("%d", &elemento);
        vetorA[i] = elemento;
    };
    printf("Vetor B =[");
    for(int x = 0;x < tamanho; x++){
      if(vetorA[x] % 2 == 0){
            printf(" %d ",  0);
        }else{
            printf(" %d ", 1);
        };
    };
    printf("]\n");
    return 0;
   
};
