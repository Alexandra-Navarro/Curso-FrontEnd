//Uso de axios
const url = "https://pokeapi.co/api/v2/pokemon/";

//Lamado a la Api
const callApi = (url) => {
  return axios.get(url)
    .then(res => res.data.results)
    .catch(error => {
      console.log(error);
    });
}

const getData = async (url) => {
  try { //Manejo de errores
    const resultados = await callApi(url);

    // Revisar los 20 primeros pokemones
    for (let i = 0; i < 20; i++) {
      const pokemon = resultados[i];
      const pokemonData = await axios.get(pokemon.url);

      // Imprime por consola el nombre y la imagen del pokemon
      console.log(`Nombre: ${pokemonData.data.name}`);
      console.log(`Imagen: ${pokemonData.data.sprites.front_default}`);
      console.log('\n'); // Salto de linea solo para mejora visual de los datos
    }
  } catch (error) {
    console.error('Error al obtener los pokemones:', error.message); //Manejo de errores
  }
}

getData(url);

