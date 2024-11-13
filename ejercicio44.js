//Escribe una función llamada filtrarMayores que reciba un array de números y utilice filter() para devolver solo los números mayores que 10.


function filtrarMayores(array){
    return array.filter(elemento => elemento > 10)
}

console.log(filtrarMayores([10, 11, 3, 4]))