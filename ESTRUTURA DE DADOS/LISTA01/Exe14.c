/*Leia uma letra e verifique se letra é "F" e escreva “F – Feminino” ou “M” e escreva “M – Masculino”,
se não for nem F ou M, escreva “Sexo Inválido”.*/
#include <stdio.h>
#include <string.h>

int main(){
  char l;
  printf("Digite um caractere: ");
  scanf("%c", &l);
  if(l == 'm' || l == 'M'){
    printf("É Masculino");
  }else if(l == 'f' || l == 'F'){
    printf("É feminino");
  }else{
    printf("O sexo é invalido");
  };

};
