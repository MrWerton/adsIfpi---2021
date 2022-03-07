//Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

#include <stdio.h>

int main(){
  int num, r1, r2, r3, ultimo, penultimo, antepenultimo,soma;
  printf("informe um número com 3 digitos: ");
  scanf("%i",&num);
  r1 = (num % 10);
  ultimo = num / 10;
  r2 = (ultimo % 10);
  penultimo = ultimo / 10;
  r3 = (penultimo % 10);
  antepenultimo = penultimo / 10;

  soma = r1 + r2 + r3;

  printf("A soma da centena, dezena e unidade do numero informado é: %i",soma);

  return 0;

}
