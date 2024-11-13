//Escribe una función llamada encontrarPalabra que reciba un array de palabras y utilice find() para devolver la
// primera palabra que tenga más de 5 letras.


function encontrarPalabra(array){
        return array.find(elemento => elemento.length > 5 )
}

console.log(encontrarPalabra(["holaaa", "comoo", "bananaa"]))