function calcularDiferenciaDias(fechaStr1, fechaStr2) {

    let [dia1, mes1, anio1] = fechaStr1.split('/');
    let [dia2, mes2, anio2] = fechaStr2.split('/');
    
    let fecha1 = new Date(`${anio1}-${mes1}-${dia1}`);
    let fecha2 = new Date(`${anio2}-${mes2}-${dia2}`);
    

    let diferenciaMilisegundos = fecha2 - fecha1;
    

    let diferenciaDias = Math.abs(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    return diferenciaDias;
 }
 

 console.log(calcularDiferenciaDias("05/11/2024", "10/11/2024")); 
 