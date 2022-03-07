/*Leia um vetor A com N elementos e escreva um vetor B, com os mesmos elementos de A,
sendo que estes deverão estar invertidos, ou seja, o 1o elemento de A deve ser o último
elemento de B; o 2o elemento de A deve ser o penúltimo elemento de B e assim por diante.*/
#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    int tamanho, i, j;
    printf("Informe o tamanho do vetor: ");
    scanf("%d", &tamanho);
    int VetorA[tamanho], VetorB[tamanho];
    for(i = 0; i < tamanho; i++) {
        printf("Digite o elemento %d: ",i);
        scanf("%d", &VetorA[i]);
    }
      printf("O vetorB é [");
    for(i=0, j = tamanho - 1; i<tamanho && j >= 0; i++, j-- ) {
        VetorB[i] = VetorA[j];
        printf(" %d ", VetorB[i]);
    }
    printf("]");
    return 0;
}
