//Escribe una función llamada transformarArray que reciba un array de strings y utilice map() para devolver un nuevo array con las 
//palabras en mayúsculas.

function transformarArray(array){
    return array.map(elemento => elemento.toUpperCase())
}


console.log(transformarArray(["hola", "como", "estas"]))