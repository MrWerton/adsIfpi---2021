//Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)

#include <stdio.h>

int main(){
  float velocidade_ms, velocidade_km;
  printf("Informe a velocidade em ms: ");
  scanf("%f",&velocidade_ms);
  velocidade_km = (velocidade_ms * 3.16);
  printf("A velocidade em km/h é:%0.2f", velocidade_km);
  return 0;
}