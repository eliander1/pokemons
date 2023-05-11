async function getPokemons() {
    let response = await fetch('http://localhost:3000/pokemons/');
    let data = await response.json();
    return data;
  }

export default getPokemons;