//Escribe una función llamada encontrarIndicePalabra que reciba un array de palabras y utilice findIndex() 
//para devolver el índice de la primera palabra que comience con la letra "A".


function encontrarIndicePalabra(array){
    return array.findIndex(elemento => elemento.startsWith("A"))
}

console.log(encontrarIndicePalabra(["manzana", "banana", "Aceituna", "apricot"]))