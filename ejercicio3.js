//Realizar una función que nos permita realizar las 4 operaciones aritméticas, 
//es decir, que nos permita sumar, restar, dividir y multiplicar. 
//La función debe recibir 3 parámetros, dos de ellos deben ser los valores (a y b) y uno el nombre de la operación (en minúsculas). 
//Si el parámetro de la operación no es válido que mande un error personalizado a la consola.

function Operaciones(a, b, nombreOperacion){
    let resultado;

    switch (nombreOperacion){
        case 'suma':
        resultado = a + b;
        break;
        case 'resta':
        resultado = a - b;
        break;
        case 'multiplicacion':
        resultado = a * b;
        break;
        case 'division':
        if ( b !==0){
            resultado = a / b;
         } else {
            console.log ("error")
            return;
         }
         break
        
         default:
            console.error("Error: La operación ingresada no es válida. Usa 'suma', 'resta', 'multiplicacion' o 'division'.");
            return;
        }
        console.log(`el resultado de ${nombreOperacion} es ${resultado}`)
}

Operaciones(5, 6, "suma")