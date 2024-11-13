//Escribe una función llamada promedioArray que reciba un array de números y utilice reduce() 
//para devolver el promedio de los números.


function promedioArray(array){
     const sumaTotal = array.reduce((acumulador, elemento) => acumulador + elemento, 0)
     return sumaTotal / array.length
}


console.log(promedioArray([1, 2, 3, 4, 5]))