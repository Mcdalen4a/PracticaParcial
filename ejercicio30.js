//Escribe una función llamada buscarPalabra que reciba una cadena de texto y busque la palabra "JavaScript" 
//utilizando indexOf(). Si la palabra está presente, devuelve su índice, si no, devuelve -1.

function buscarPalabra(palabra){
    return palabra.indexOf("Javascript")
}

console.log(buscarPalabra("hola Javascript"))
console.log(buscarPalabra("javascript"))