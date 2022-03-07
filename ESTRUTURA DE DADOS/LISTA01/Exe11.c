/*Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos.*/

#include <stdio.h>

int main(){
  float numero1, numero2;
  int operacao;
  printf("Informe um valor: ");
  scanf("%f", &numero1);
  printf("Informe outro valor: ");
  scanf("%f", &numero2);
  printf("Informe a operação desejada - 1 = multiplicação, 2 = adição, 3 = subtração, 4 = divisão: ");
  scanf("%d", &operacao);
  switch(operacao){
    case 1:
    printf("O valor da multiplicação é %0.2f:", (numero1 * numero2));
    break;
    case 2:
    printf("O valor da adição é: %0.2f", numero1 + numero2);
    break;
    case 3:
    printf("O valor da subtração é: %0.2f", numero1 - numero2);
    break;
    case 4:
    if(numero2 != 0){
    printf("O valor da divisão é: %0.2f", numero1 / numero2);
    }else{
      printf("Não é possível dividir por 0");
    }
    break;
    default:
    printf("Valores inválidos");
  };


};
