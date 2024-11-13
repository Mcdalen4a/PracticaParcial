//Escribe una función llamada sumarElementos que reciba un array de números y utilice reduce() para devolver la suma de todos los elementos.


function sumarElementos(array){
    return array.reduce((acumulador, elemento) => acumulador + elemento, 0)
}


console.log(sumarElementos([1, 2, 3, 4]))