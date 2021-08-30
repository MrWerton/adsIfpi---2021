/*Leia 2 vetores A e B com N elementos, escreva um vetor C, sendo este a junção das vetores
A e B. Desta forma, a vetor C deverá ter 2*N elementos.*/

#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    int tamanhoA, tamanhoB, i, j,n;
    printf("Informe o tamanho do vetorA: ");
    scanf("%d", &tamanhoA);
    printf("Informe o tamanho do vetorB: ");
    scanf("%d", &tamanhoB);
    int VetorA[tamanhoA], VetorB[tamanhoB];
    int tamanhoC = tamanhoA + tamanhoB;
    int vetorC[tamanhoC];
    for(i = 0; i < tamanhoA; i++) {
        printf("Digite o elemento %d: ",i);
        scanf("%d", &VetorA[i]);
         vetorC[i] = VetorA[i];
    }
    for(j = 0; j < tamanhoB; j++) {
        printf("Digite o elemento %d: ",i);
        scanf("%d", &VetorB[j]);
         vetorC[i] = VetorB[j];
          i++;
    }
    printf("O vetor c é: {");
      for(n = 0; n < tamanhoC; n++) {
        printf(" %d ",vetorC[n]);

      };
    printf("}");
    return 0;
}
