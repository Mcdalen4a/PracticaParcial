//Escribe una función llamada eliminarPrimero que reciba un array y elimine el primer elemento utilizando shift(). 
//Devuelve el array actualizado.

function eliminarPrimero(array){
    array.shift(); 
    return array;  
}

console.log(eliminarPrimero(["hola", "como", "estas"]))