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
    int Uniao[tamanhoC];
    for(i = 0; i < tamanhoA; i++) {
        printf("Digite o elemento %d: do vetorA: ",i);
        scanf("%d", &VetorA[i]);
         Uniao[i] = VetorA[i];
    }
    for(j = 0; j < tamanhoB; j++) {
        printf("Digite o elemento %d do vetor B: ",i);
        scanf("%d", &VetorB[j]);
         Uniao[i] = VetorB[j];
          i++;
    }
    printf("União é: {");

      for(n = 0; n < tamanhoC; n++) {
          for(int m = tamanhoC; m >= 0; m--){
            if(Uniao[m] != Uniao[n]){
              printf(" %d ",Uniao[n]);
              break;
            };
          };

      };
    printf("}\n");
     int interseccao[0];
    printf("Interseccao [");
    for(i = 0; i < tamanhoA; i++){
        for(j = 0; j < tamanhoB ; j++){
            if(VetorA[i] == VetorB[j]){
                printf(" %d ", VetorA[i]);                             
             };
        };
    };
    printf("]\n");
    return 0;
}
