//31. push()
//Escribe una función llamada agregarElemento que reciba un array y un nuevo valor, y utilice push() para agregar ese valor al final del array.

function agregarElemento(array, valor){
    array.push(valor)
    return array
}

console.log(agregarElemento([1, 2, 3, 4], 5))
