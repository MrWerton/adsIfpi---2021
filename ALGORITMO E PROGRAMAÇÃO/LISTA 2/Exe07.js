const prompt = require ('prompt-sync')()
function main(){
    console.log('\n### Tipos de triângulos ###\n')
    
    const lado1 = Number(prompt('Defina um primeiro lado: '))
    const lado2 = Number(prompt('Defina um segundo lado: '))
    const lado3 = Number(prompt('Defina um terceiro lado: '))
    const soma1 = lado1 + lado2
    const soma2 = lado1 + lado3
    const soma3 = lado2 + lado3
    
    if(E_triangulo(lado1, lado2, lado3)){
        console.log(`\n ### É um triângulo ###`)    
        if(E_equilatero(lado1, lado2, lado3)){
            console.log(`### É um equilátero ###`)
        }else if(E_isosceles(lado1, lado2, lado3)){
            console.log(`### É um isósceles ###`)
        }else{(E_escaleno(lado1, lado2, lado3))
        console.log(`### É um escaleno ###`)
        }
    }else{
        console.log(`\n ### Não é um triângulo ###\n`)
    }   
}
function E_triangulo(a1, a2, a3){
    return (a1 + a2 > a3 && a1 + a3 > a2 && a2 + a3 > a1 )    
    }
function E_equilatero(a1, a2, a3){
    return (a1 === a2  && a1 === a3) 
    }
function E_isosceles(a1, a2, a3){
    return (a1 === a2 || a1 === a3 || a2 === a3) 
    }
function E_escaleno(a1, a2, a3){
    return (a1 != a2 && a1 != a3 && a3 != a2) 
    }
main()