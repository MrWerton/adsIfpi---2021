/*Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado
por matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte
fórmula:
      Média Final =( (2 * nota1) + (3 * nota2) + (5 * nota3) ) / 10
Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7,
o aluno está reprovado. Ao final*/

#include <stdio.h>

int main(){
    float matricula, nota1, nota2, nota3, media;
    int quantAprovado = 0, quantReprovado = 0, quantAlunos = 0;
    printf("\nDigite matrícula = 0 para encerrar o programa");
    printf("\nInforme a matrícula: ");
    scanf("%f",&matricula);
  while(matricula != 0){
      printf("\nInforme a nota1: ");
      scanf("%f",&nota1);
      printf("\nInforme a nota2: ");
      scanf("%f",&nota2);
      printf("\nInforme a nota3: ");
      scanf("%f",&nota3);
       media = (((nota1 * 2) + (nota2 * 3) + (nota3 * 5))/10);
    if(media >= 7){
        quantAprovado = quantAprovado + 1;
    }else{
      quantReprovado = quantReprovado + 1;
    };
      quantAlunos = quantAlunos + 1;
      printf("\nInforme a matrícula: ");
       scanf("%f",&matricula);
  };
  printf("\nTotal de alunos: %i", quantAlunos);
  printf("\nTotal de aprovados: %i", quantAprovado);
  printf("\nTotal de reprovados: %i", quantReprovado);
  return 0;
};

 