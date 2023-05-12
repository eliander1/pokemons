import React, { useState, useEffect } from "react";
import  deletePokemon  from '../delete_pokemon/delete_pokemon'
import getPokemons from "../get_pokemons/get_pokemons";
import { Link } from "react-router-dom";


const PokemonList = (props) => {
  const [pokemons, setPokemons] = useState([]);
 
  useEffect(() => {
    getPokemons().then(data => { 
      setPokemons(data)
    })
  }, [pokemons]);
  

  return (
    <div className="background-allcards">
    
      <h3 className="mt-3">Lista de pokemons cadastrados</h3>
      <div className="row">
        {pokemons && pokemons.map((pokemon, index) => (
          
        <div key={pokemon.id} className="col-4">
          <div className="card m-2">

            <img src={pokemon.imagem} className="card-img" alt="Imagem do pokemon"/>

              <div className="card-body">
                <h5 className="card-title">{pokemon.nome}</h5>
                <p className="card-text">{pokemon.habilidades}</p>

                 
                 
                <Link to={`/detalhes/${pokemon.id}`} className='btn btn-detalhes'>Detalhes</Link>

                  <button className='btn btn-excluir m-2' onClick={() => deletePokemon(pokemon.id)} >Excluir</button>
              </div>
            </div>
          </div>
        
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
