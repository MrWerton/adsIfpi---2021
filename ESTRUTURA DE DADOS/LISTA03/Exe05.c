/*Leia um vetor com N elementos, encontre e escreva o maior e o menor elemento e suas
respectivas posições no vetor.*/

#include <stdio.h>
#include <stdlib.h>
#include <locale.h>


int maior(int v[], int tam, int indice){
    if(tam == 0)
        return v[indice]; 
    else{
        if(v[tam - 1] > v[indice]) 
            return maior(v, tam - 1, tam - 1);
        else
            return maior(v, tam - 1, indice);
    };
};
int menor(int v[], int tam, int indice){
    if(tam == 0)
        return v[indice]; 
    else{
        if(v[tam - 1] < v[indice]) 
            return menor(v, tam - 1, tam - 1);
        else
            return menor(v, tam - 1, indice);
    };
};

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
     printf("Maior: %d\n", maior(vetorA, tamanho, 0));
     printf("Menor: %d\n", menor(vetorA, tamanho, 0));

  return 0;
};
