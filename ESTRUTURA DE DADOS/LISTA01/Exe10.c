/*Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
ou igual a 7,0. Caso a média seja inferior a 7,0, escreva “O Aluno deve fazer a prova final!” e o
programa deve ler a nota da prova final e calcule a média final. Se a média final for maior ou igual a
6,0, o programa deve escrever “Aprovado!”, caso contrário deve escrever “Reprovado!”.*/
#include <stdio.h>

int main(){
  float nota1, nota2, media, notaF, mediaF;
  printf("Informe a nota 1: ");
  scanf("%f", &nota1);
  printf("Informe a nota 2: ");
  scanf("%f", &nota2);
  media = ((nota1 + nota2) / 2);
  if(media >= 7){
    printf("O aluno está aprovado!");
  }else if(media < 7 && media >= 4){
    printf("Informe a nota da prova final: ");
    scanf("%f", &notaF);
    mediaF = ((media + notaF)/2);
    if(mediaF >= 6){
      printf("O aluno está aprovado!");
    }else{
      printf("O aluno está reprovado");
    };
  }else{
    printf("O aluno está reprovado");
  }
  return 0;
}