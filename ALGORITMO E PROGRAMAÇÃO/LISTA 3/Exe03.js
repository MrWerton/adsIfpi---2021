const { number } = require("./functions_uteis")


function main(){
    console.log(' ### Progressão Aritmética ###');
    //Entrada
    const variável_A0 = number('Informe a variável A0: ');
    const limite = number('Informe o limite: ');
    const razão = number('Informe a razão: ');
    //Processamento
    const Prog_arit = pa(variável_A0, razão, limite);
        for(let i = variável_A0; i < Prog_arit; i++){
           //Saída
            console.log(i)
        }
}


function pa(i,r,f){
    f = i + (f - 1) * r
    return f
}
main()