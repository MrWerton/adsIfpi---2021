#include <string>
#include <iostream>
using namespace std;


int main(){
  string name1, name2;
  cout << "Digite uma palavra: ";
  cin>>name1;
  cout << "Digite outra palavra: ";
  cin>>name2;

  name1 == name2 ? cout<<"verdadeiro": cout<<"falso";
}