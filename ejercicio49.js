//Escribe una función llamada ordenarArray que reciba un array de números y utilice sort() para ordenarlos en orden ascendente.

function ordenarArray(array){
    return array.sort((a, b) => a - b)
}


console.log(ordenarArray([10, 2, 33, 4]))