/*Leia dois nomes e compare se os nomes são iguais. Se forem iguais imprima “São Iguais!”, senão
imprima “São Diferentes”.*/
#include <stdio.h>
#include <string.h>

int main(){
  char nome1[20];
  char nome2[20];
  int quant = 0;
  printf("Insira um nome1: ");
  scanf("%s",nome1);
  printf("Insira um nome2: ");
  scanf("%s",nome2);
   for(int i = 0; i < strlen(nome1); i++){
        if(nome1[i] == nome2[i]){
            quant= quant + 1;
        }else{
            break;
        }
    };
  if(quant == strlen(nome1)){
      printf("Os nomes são iguais\n");
  }else{
    printf("Os nomes são diferentes\n");
  };
};