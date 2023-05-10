import React, { useState, useEffect } from "react";
import  deletePokemon  from '../delete_pokemon/delete_pokemon'
import getPokemons from "../get_pokemons/get_pokemons";


const PokemonList = (props) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then(data => { 
      setPokemons(data)
    })
  });
  

  return (
    <div className="card">
    
      <h3 className="mt-3">Lista de pokemons cadastrados</h3>
    <div className="row">
        {pokemons && pokemons.map((pokemon, index) => (
          
        <div class="col-4">
          <div class="card m-2">
            <img src={pokemon.imagem} class="card-img" alt="Imagem do pokemon"/>
              <div class="card-body">
                <h5 class="card-title">{pokemon.nome}</h5>
                <p class="card-text">{pokemon.habilidades}</p>
                  <button className='btn btn-primary' onClick=''>Detalhes</button>
                  <button className='btn btn-danger m-2' onClick={() => deletePokemon(pokemon.id)} >Excluir</button>
              </div>
            </div>
          </div>
        
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
