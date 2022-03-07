#include <stdio.h>
#include <string.h>

int main(){
  char v;
  printf("Digite uma letra: ");
  scanf("%c",&v);
    if(v == 'a' || v == 'A' || v == 'e' || v == 'E' || v == 'i' || v == 'I' || v == 'o' || v == 'O' || v == 'u' || v == 'U' ){
      printf("É uma vogal");
    }else{
      printf("É uma consoante");
    };
  };