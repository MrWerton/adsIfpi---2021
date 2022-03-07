//Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

#include <stdio.h>

int main(){
  int v_hr, v_min;
  printf("informe o valor em horas: ");
  scanf("%i",&v_hr);
  printf("informe o valor em minutos: ");
  scanf("%i",&v_min);
  v_min += (v_hr * 60);
  printf("O valor em minutos é: %i",v_min);

  return 0;

}