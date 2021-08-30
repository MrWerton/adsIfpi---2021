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

    for(i=0, j = tamanho - 1; i<tamanho && j >= 0; i++, j-- ) {
        VetorB[i] = VetorA[j];
        printf("O elemento %d do vetorB é: %d  \n",i, VetorB[i]);
    }
    return 0;
}
