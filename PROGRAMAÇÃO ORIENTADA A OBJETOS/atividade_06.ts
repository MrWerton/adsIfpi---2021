/*
1)Crie um array de números em typescript e escreva um código que exibe a soma
dos elementos*/

let array: number[] = [1, 2, 3, 4,5,6];
let sum : number = 0;
for(let n of array){
    sum += n
}
console.log(sum);

/*
2)Considere o trecho de código abaixo e descreva o que acontece com a execução
do código abaixo:*/
//o código ira imprimir todos os valores do array.
//Entretanto, como o i é zero, e ele será executado até que i <= a.length, ele irá percorrer 1 vez a mais que o tamanho. 
//Então, na ultima passagem não haverá valores do array para imprimir, portanto ele irá imprimir um valor undefined

let a : number[] = [1,2,3,4,5];
for (let i : number = 0; i <= a.length; i++) {
console.log(a[i]);
}

/*
3)Declare um array com 10 números e exiba-os em ordem crescente e em ordem
decrescente.*/

function toCompare (a:Number, b:Number):number{ //compara os valores para o método sort();
    if(a>b){
        return 1
    }else if(a< b){
        return -1
    }
    return 0;
}
let array2 : number[] = [4,2,3,1,8,6,7,5,9,10];
array2.sort(toCompare) //coloca o array2 em ordem crescente
console.log('ordem crescente')
for(let n of array2){
   console.log(n)
}
console.log('ordem decrescente')
for (let i:number = array2.length - 1; i >= 0; i--){ //array2.length - 1 -> o tamanho do array2 é 10 e o array2 inicia em 0, então para evitar que ele percorra 11 vezes, usei esse macete.
    console.log(array2[i]);
}

/*4) Declare uma string com o texto “Instituto Federal do Piauí” e use métodos específicos
para:*/

let text: string = 'Instituto Federal do Piauí';

//a)Exibir a string toda em maiúsculo;*/
console.log(text.toUpperCase())
//b) Retornar o caractere da posição 10;
console.log(text.charAt(10))
//c) Retornar a última posição da vogal “o”;
let indices:any = []; //cria um array para armazenar todas as posições de a;
let idx = text.indexOf('o');

while (idx !== -1) { //coloca as aparições de a no array;
  indices.push(idx);
  idx = text.indexOf('o', idx + 1);
}
let pos:number = indices[indices.length-1] //pega a posição do ultimo 'o' do array
console.log(pos); //imprimi a posição do ultimo 'o'; 
console.log(text.charAt(pos))  //verificar qual letra está na posição

//d) Dividir a frase em um array de strings tendo como delimitador os caracteres de espaço.
console.log(text.split(' '));


