//Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).


#include <stdio.h>

int main(){
  float v_dolar, dolar, real;
  printf("informe o valor do dolar: ");
  scanf("%f",&v_dolar);
  printf("informe o valor em dolar que deseja converter: ");
  scanf("%f",&dolar);
  real += (v_dolar * dolar);
  printf("O valor infomardo em reais é: %0.2f",real);

  return 0;

}