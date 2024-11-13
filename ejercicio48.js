//Escribe una función llamada verificarAlgunMayor que reciba un array de números y utilice some() para verificar si algún número es mayor que 50.

function verificarAlgunMayor(array){
    return array.some(elemento => elemento > 50)
}


console.log(verificarAlgunMayor([60, 40 ,20 ,70]))