// 1.Mostrar en consola la secuencia de Fibonacci: a.Entre los numeros 0 y 1000. b.Numeros pares entre 0 y 1000. c.Numeros impares entre 0 y 1000.
  

//DES:Funcion para calcular la secuencia de fibonacci
//DOM: Recibe el valor maximo a encontrar
//REC:Retorna los valores usando la secuencia de fibonacci (Array)
function fibonacciSecuencia(valorMax) {
    let datos = [0, 1];
  
    while(datos[datos.length - 1] + datos[datos.length - 2] <= valorMax) {
      datos.push(datos[datos.length - 1] + datos[datos.length - 2]);
    }

    return datos;
}

//DES:Funcion para filtrar los numeros pares de la secuencia obtenida
//DOM: Recibe los datos de la secuencia principal
//REC:Retorna los valores pares de la secuencia (Array)
  
function filtrarPares(datos) {
    return datos.filter(num => num % 2 === 0);
}  

//DES:Funcion para filtrar los numeros impares de la secuencia obtenida
//DOM: Recibe los datos de la secuencia principal
//REC:Retorna los valores impares de la secuencia (Array)

function filtrarImpares(datos) {
    return datos.filter(num => num % 2 !== 0);
}
  
const fibonacci = fibonacciSecuencia(1000);
const pares = filtrarPares(fibonacci);
const impares = filtrarImpares(fibonacci);
  
console.log("Secuencia de Fibonacci:");
console.log(fibonacci);
console.log("Números pares de la secuencia:");
console.log(pares);
console.log("Números impares de la secuencia:");
console.log(impares);

//2.- Del siguiente arreglo de strings retornar otro arreglo con todo a mayusculas.

let pokemon = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'];

//DES:Funcion para retornar en mayusculas todos los datos del arreglo
//DOM: Recibe los datos del arreglo
//REC:Retorna todos los datos del arreglo en mayusculas (Array)
let pokemonMayusculas = pokemon.map(function(nombre) {
  return nombre.toUpperCase();
});

console.log(pokemonMayusculas);


//3.- Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo fuego.
let pokemones = [
    { nombre: 'Pikachu', tipo: 'Electrico' },
    { nombre: 'Charmander', tipo: 'Fuego' },
    { nombre: 'Bulbasaur', tipo: 'Planta' },
    { nombre: 'Squirtle', tipo: 'Agua' },
    { nombre: 'Charmeleon', tipo: 'Fuego' },
    { nombre: 'Weedle', tipo: 'bicho' },
    { nombre: 'Charizard', tipo: 'Fuego' }
  ]
  
 //DES:Funcion para retornar solo los pokemones de fuego del arreglo
 //DOM: Recibe el arreglo
 //REC: Retorna solo los pokemones de fuego (Array)
  let pokemonTipoFuego = pokemones.filter(function(pokemones) {
    return pokemones.tipo === 'Fuego';
  });
  
  console.log(pokemonTipoFuego);