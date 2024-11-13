//Escribe una función llamada encontrarIndice que reciba un array de números y utilice
// findIndex() para devolver el índice del primer número mayor que 20.

function encontrarIndice(array){
    return array.findIndex(elemento => elemento > 20)
}

console.log(encontrarIndice([20, 20, 40]))