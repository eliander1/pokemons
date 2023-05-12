import React, { useState } from "react";
import updatePokemon from "./update_pokemon";


const PokemonEdit = ({ pokemon, setUpdateState }) => {
    const [nome, setNome] = useState(pokemon.nome);
    const [habilidades, setHabilidades] = useState(pokemon.habilidades);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const pokemonData = { nome, habilidades };

      await updatePokemon(pokemon.id, pokemonData);
      setUpdateState((prevState) =>
        prevState.map((prevPokemon) =>
          prevPokemon.id === pokemon.id ? { ...prevPokemon, ...pokemonData } : prevPokemon
        )
      );
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="habilidades">habilidade:</label>
          <textarea
            className="form-control"
            id="habilidades"
            rows="3"
            value={habilidades}
            onChange={(e) => setHabilidades(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </form>
    );
  }
  
  export default PokemonEdit;