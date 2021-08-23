/*Leia dois nomes e compare se os nomes são iguais. Se forem iguais imprima “São Iguais!”, senão
imprima “São Diferentes”.*/
#include <stdio.h>
#include <string.h>

int main(){
  int comp;
  char nome1[20];
  char nome2[20];
  printf("Insira um nome1: ");
  scanf("%s",nome1);
  printf("Insira um nome2: ");
  scanf("%s",nome2);
    if(strcmp(nome1, nome2) == 0){
      printf("As strings são iguais");
    }else{
      printf("As strings são diferentes");
    };
    return 0;
};


