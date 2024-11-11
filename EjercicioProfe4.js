//Recorrer un array con forEach. Escribe una funcion llamada recorrerArray que tome un array como 
//argumento y utilice el metodo foreach para recorrer cada elemento del array. 
//Puedes seguir estos pasos para completar el ejercicio: Dentro de la funcion recorrerArray, 
//utiliza el método forEach en el array proporcionado. El metodo forEach recibe una funcion de devolucion de llamada 
//que se ejecutara para cada elemento del array. La funcion de devolucion de llamada puede tomar tres parametros: 
//el elemento actual el indice del elemento y el propio array. Puedes elegir los nombres de los parametros. 
//Dentro de la funcion de devolucion de llamada, puedes realizar alguna operacion con el elemento actual, 
//como mostrarlo por consola, aplicar una transformacion, etc


function recorrerElemento(arr){

    arr.forEach(function(elemento, indice, array){
        console.log(`Elemento en indice es ${elemento} : ${indice}`)
    })
}

const numeros = [1, 2, 3, 4]
recorrerElemento(numeros)


//funcion flecha

function recorrerArray(array){
    array.forEach((elemento1, indice1) =>{
        console.log(`Elemento en indice ${indice1} : ${elemento1}`)
    })
}
    
const elementos = ["juguete", "plata", "banana"]
recorrerArray(elementos)