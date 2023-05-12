import React, { useState, useEffect } from "react";
import getPokemons from "../get_pokemons/get_pokemons";
import getTipos from "../../tipos_pokemon/get_tipos/get_tipos";


const AddPokemon = (props) => {

    const [pokemons, setPokemons] = useState([]);
    const [tipos, setTipos] = useState([])

    const [formValues, setFormValues] = useState({
      nome: '',
      tipo_id: '',
      imagem: '',
      habilidades: ''
    });



    useEffect(() => {
      getTipos().then(data => {
        setTipos(data)
      })
    }, [tipos])

    useEffect(() => {
      getPokemons().then(data => { 
        setPokemons(data)
      })
    }, [pokemons]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        setFormValues({
          ...formValues,
          [name]: value
        });
      };
    
    
      //add
      async function addPokemon(newPokemon) {
        const response = await fetch('http://localhost:3000/pokemons', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newPokemon)
        });
        await response.json();
      
        const updatedPokemons = await getPokemons();
        return updatedPokemons;
      }
        
      const handleAddPokemon = async (event) => {
        event.preventDefault();

        const addedPokemon = await addPokemon(formValues);       
        setPokemons(addedPokemon);
        setFormValues({
          nome: '',
          tipo_id: '',
          imagem: '',
          habilidades: ''
        });
      
       
        return await getPokemons()
      };
      

      return (
      <div>
      <div className="mt-3 mb-3">
      <h2>Cadastre seu pokemon preferido abaixo</h2>
      <form onSubmit={handleAddPokemon} >

      <div className="input-group mt-2">
          <span className="input-group-text" id="basic-addon1">Nome</span>
          <input className="form-control" type="text" name="nome" placeholder="Digite aqui o nome do pokemon"         
          value={formValues.nome} onChange={handleInputChange} />
      </div>

      <div className="input-group mt-2">
          <span className="input-group-text" id="basic-addon1">Tipo ID</span>

          
          
      <div className="col-md-5">
        <select className="form-select" id="validationCustom04" required onChange={handleInputChange} name="tipo_id" value={formValues.tipo_id}>
          <option defaultValue='' >Escolha o tipo</option>

            {tipos && tipos.map((tipos, index) => (

            <option key={tipos.id} value={tipos.id}>{tipos.nome}</option> ))}


            </select>
            <div className="invalid-feedback">
                Please select a valid state.
            </div>
      </div>

    
      </div>
      
      <div className="input-group mt-2">
          <span className="input-group-text" id="basic-addon1">Imagem</span>
          <input className="form-control" type="text" name="imagem" placeholder="Cole aqui o link da imagem"
          value={formValues.imagem} onChange={handleInputChange} />
      </div>


      <div className="input-group mt-2">
        <span className="input-group-text" id="basic-addon1">Habilidades</span>
        <input className="form-control" type="text" name="habilidades" placeholder="Descreva aqui as habilidades"
        value={formValues.habilidades} onChange={handleInputChange} />
      </div>


      <br />
      <button className="btn btn-success" type="submit">Adicionar Pokemon</button>
    </form>

    </div>
    </div>

        )
}

export default AddPokemon;