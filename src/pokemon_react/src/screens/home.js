import React, { Fragment } from "react";
import AddPokemon from "../components/pokemons/add_pokemon/add_pokemon";
import PokemonList from "../components/pokemons/pokemon_list/pokemonlist"
import TipoList from "../components/tipos_pokemon/tipo_list/tipo_list";
import AddTipo from "../components/tipos_pokemon/add_tipo/add_tipo";

const HomeScreen = () => {
    return (
       <Fragment>
            <AddPokemon/>
            <PokemonList/>
            <TipoList />
            <AddTipo />

       </Fragment>
           
        
     
    )

}

export default HomeScreen;