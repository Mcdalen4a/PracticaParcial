//Escribe una función llamada verificarElemento que reciba un array y un valor, y utilice includes() 
//para verificar si el valor está presente en el array.

function verificarElemento(array, valor){
    return array.includes(valor)
}

console.log(verificarElemento([1, 2, 3, 4], 5))