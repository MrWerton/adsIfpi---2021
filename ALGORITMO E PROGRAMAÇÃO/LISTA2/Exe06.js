const prompt = require ('prompt-sync')()
function main(){
    console.log('\n### Tipos de triângulos###\n')
    
    const angulo1 = Number(prompt('Defina um primeiro ângulo: '))
    const angulo2 = Number(prompt('Defina um segundo ângulo: '))
    const angulo3 = Number(prompt('Defina um terceiro ângulo: '))
    
    if(E_triangulo(angulo1, angulo2, angulo3)){
        console.log(`\n ### É um triângulo ###`)    
        if(E_Obtusângulo(angulo1, angulo2, angulo3)){
            console.log(`### É um Obtusângulo ###`)
        }else if(E_retângulo(angulo1, angulo2, angulo3)){
            console.log(`### É um retãngulo ###`)
        }else{(E_acutângulo(angulo1, angulo2, angulo3))
        console.log(`### É um acutãngulo ###`)
        }
    }else{
        console.log(`\n ### Não é um triângulo ###\n`)
    }   
}
function E_triangulo(a1, a2, a3){
    const ang_soma = a1 + a2 + a3
    return (ang_soma === 180)    
    }
function E_Obtusângulo(a1, a2, a3){
    return (a1 > 90 || a2 > 90 || a3 > 90) 
    }
function E_retângulo(a1, a2, a3){
    return (a1 === 90 || a2 === 90 || a3 === 90) 
    }
function E_acutângulo(a1, a2, a3){
    return (a1 < 90 && a2 < 90 && a3 < 90) 
    }
main()