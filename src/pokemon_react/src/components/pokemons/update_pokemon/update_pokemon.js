import getPokemons from "../get_pokemons/get_pokemons";

export async function updatePokemon(id, pokemon) {
    await fetch(`http://localhost:3000/pokemons/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(pokemon)
    });

const updatedPokemons = await getPokemons(); 
return updatedPokemons;
}

export default updatePokemon;