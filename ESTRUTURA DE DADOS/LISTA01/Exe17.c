/*Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e
escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.*/
#include <stdio.h>
#include <string.h>

int main(){
  char h;
  printf("Informe o horário: M = manhã; T = tarde; N = noite: ");
  scanf("%c",&h);
  if(h == 'm' || h == 'M'){
    printf("Bom dia!");
  }else if(h == 't' || h == 'T'){
    printf("Boa tarde!");
  }else if(h == 'n' || h == 'N'){
    printf("Boa Noite!");
  }else{
    printf("horário inválido");
  };
  return 0;
};