//Escribe una función llamada duplicarElementos que reciba un array de números y utilice map() para crear un nuevo array con los elementos 
//multiplicados por 2.

function duplicarElementos(array){
    return array.map(elemento => elemento * 2)
}

console.log(duplicarElementos([1, 2, 3, 4]))