import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const PokemonDetails = () => {
  const [pokemons, setPokemons] = useState([]);

  let { id } = useParams();
  
  async function getPokemons() {
    let response = await fetch(`http://localhost:3000/pokemons/${id}`);
    let data = await response.json();
    return data;
  }

  useEffect(() => {
    getPokemons(id).then(data => { 
      setPokemons(data)
    })
  });
  

  return (
    <div className="card">
    
      <h3 className="mt-3">Detalhes do pokemon</h3>
    
        {pokemons && pokemons.map((pokemon, index) => (
        
        <div class="col-6">
          <div class="card m-2">
            <img src={pokemon.imagem} class="card-img" alt="Imagem do pokemon"/>
              <div class="card-body">
                <h5 class="card-title">{pokemon.nome}</h5>
                <p class="card-text">Quem é: {pokemon.habilidades}</p>
                <p>Tipo: {pokemon.tipo_nome}</p>
                <p>Descrição: {pokemon.tipo_descricao}</p>

                  <button className='btn btn-primary'>Editar</button>
              </div>
            </div>
          </div>
          
        ))}

      
    </div>
  );
}

export default PokemonDetails;
