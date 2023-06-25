
// Obtener el promedio de notas de un alumno considerando que la suma de 
// notas debe ser el retorno de una función y el promedio el retorno de otra función. Las notas son: 6,8,9,2,5,10.

//DES:Funcion para sumar las notas
//DOM: Recibe todas las notas
//REC:Retorna la suma de todas las notas ingresadas
function sumaNotas(n1,n2,n3,n4,n5,n6){
    let sumatoria = n1 + n2 + n3 + n4 + n5 + n6;
    return sumatoria;
}

//DES:Funcion para calcular el promedio de notas
//DOM: Recibe todas las notas
//REC:Retorna el promedio de todas las notas ingresadas llamando a la 
//funcion sumaNotas y luego las divide por la cantidad de notas 

function promedio(n1,n2,n3,n4,n5,n6){
    let array = [n1,n2,n3,n4,n5,n6];
    const totalNotas = sumaNotas(n1,n2,n3,n4,n5,n6);
    return totalNotas / array.length;
    
}
console.log("El promedio de nota es: ",promedio(6,8,9,2,5,10));
