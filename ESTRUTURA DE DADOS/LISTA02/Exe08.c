/*Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os
critérios descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a
diferença entre as 2 somas. (Flag: salário=0)*/
#include <stdio.h>
int main(){
  float salarioAntigo,salarioNovo, diferenca;
  float somaAtual = 0;
  float somaAntiga = 0;
  printf("Informe o salário: ");
  scanf("%f",&salarioAntigo);
  while(salarioAntigo != 0){
    if(salarioAntigo >= 0 && salarioAntigo < 3000){
        salarioNovo = salarioAntigo + (salarioAntigo * 0.25);
        printf("\nO novo salário é: %0.2f",salarioNovo);
    }else if(salarioAntigo >= 3000 && salarioAntigo < 6000){
        salarioNovo = salarioAntigo + (salarioAntigo * 0.2);
        printf("\nO novo salário é: %0.2f",salarioNovo);
    }else if(salarioAntigo >= 6000 && salarioAntigo < 10000){
        salarioNovo = salarioAntigo + (salarioAntigo * 0.15);
        printf("\nO novo salário é: %0.2f",salarioNovo);
    }else{
        salarioNovo = salarioAntigo + (salarioAntigo * 0.1);
        printf("\nO novo salário é: %0.2f",salarioNovo);
    };
    somaAtual = somaAtual + salarioNovo;
    somaAntiga = somaAntiga + salarioAntigo;
    printf("\n\nInforme o salário: ");
    scanf("%f",&salarioAntigo);


  };
  diferenca = somaAtual - somaAntiga;

  printf("\nSoma do salario antigo é: %0.2f",somaAntiga);
  printf("\nSoma do salario reajustado é: %0.2f",somaAtual);
  printf("\nA diferença entre o salario antigo e o atual é: %0.2f",diferenca);

  return 0;
};