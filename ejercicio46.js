//Escribe una función llamada encontrarElemento que reciba un array de objetos y 
//utilice find() para devolver el primer objeto que tenga una propiedad edad mayor que 30.


function encontrarElemento(array){
    return array.find(elemento => elemento > 30)
}


console.log(encontrarElemento([30, 20, 20, 50]))