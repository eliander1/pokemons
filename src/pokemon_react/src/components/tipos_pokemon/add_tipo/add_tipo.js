import React, { useState, useEffect } from "react";
import getTipos from "../get_tipos/get_tipos";

const AddTipo = (props) => {

    const [tipos, setTipos] = useState([]);

    const [formValues, setFormValues] = useState({
      nome: '',
      descricao: ''
    });
  
    useEffect(() => {
      getTipos().then(data => { 
        setTipos(data)
      })
    }, [tipos]);

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
      async function addTipo(newTipo) {
        const response = await fetch('http://localhost:3000/tipos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newTipo)
        });
        await response.json();
      
        
        const updatedTipos = await getTipos();
        return updatedTipos;
      }
        
      const handleAddTipo = async (event) => {
        event.preventDefault();
        const addedTipo = await addTipo(formValues);
      
      
        setTipos(addedTipo);
      
        setFormValues({
          nome: '',
          descricao: ''
        });
      

        return await getTipos()
      };
      

      return (
      <div className="form">
      <div className="mt-3 mb-3">
      <h2>Cadastre um novo tipo de pokemon abaixo</h2>
      
      <form onSubmit={handleAddTipo} >

      <div className="input-group mt-2">
          <span className="input-group-text" id="basic-addon1">Nome</span>
          <input className="form-control" type="text" name="nome" placeholder="Digite aqui o nome do pokemon"         
          value={formValues.nome} onChange={handleInputChange} />
      </div>


      <div className="input-group mt-2">
        <span className="input-group-text" id="basic-addon1">Habilidades</span>
        <input className="form-control" type="text" name="descricao" placeholder="Descreva aqui as habilidades"
        value={formValues.descricao} onChange={handleInputChange} />
      </div>


      <br />
      <button className="btn btn-success" type="submit">Cadastrar Novo Tipo</button>
    </form>

    </div>
    </div>

        )
}

export default AddTipo;