//Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
#include <stdio.h>

int main(){
  float velocidade_ms, velocidade_km;
  printf("Informe a velocidade em km/h: ");
  scanf("%f",&velocidade_km);
  velocidade_ms = (velocidade_km / 3.16);
  printf("A velocidade em ms é:%0.2f", velocidade_ms);
  return 0;
}