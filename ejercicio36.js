//Escribe una función llamada agregarAlPrincipio que reciba un array y un nuevo valor, y utilice unshift() para agregar ese valor al 
//principio del array.


function agregarAlPrincipio(array, valor){
array.unshift(valor)
return array
}

console.log(agregarAlPrincipio([1, 2, 3, 4], 0))