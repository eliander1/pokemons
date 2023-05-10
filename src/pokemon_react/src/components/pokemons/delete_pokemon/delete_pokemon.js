import getPokemons from "../get_pokemons/get_pokemons";


export async function deletePokemon(id) {
    await fetch(`http://localhost:3000/pokemons/${id}`, {
      method: 'DELETE'
    });

    const updatedPokemons = await getPokemons(); // Obtém a lista atualizada de pokemons
    return updatedPokemons; // Atualiza o estado com a nova lista de pokemons
  }

export default deletePokemon;

