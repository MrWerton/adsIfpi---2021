/*Gere um vetor com os N primeiros termos da seqüência de Fibonacci (0,1,1,2,3,5,8,13,21,...).*/

#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main(){
  int tamanho;
  printf("Informe o tamanho do vetor: ");
  scanf("%d", &tamanho);
  int vetor[tamanho];

  int vetorFinal = 0;
  int vetorInicial = 0;
  int resultado = 1;

  for(int i = 0; i < tamanho; i++){
    vetor[i] = i;
  };
  printf("1\n");
 for(int i = 0; i < tamanho; i++){

        vetorInicial = vetorFinal;
        vetorFinal = resultado;
        resultado = vetorInicial + vetorFinal;
        printf("%d\n", resultado);
    };
           
  return 0;
};