import React, { useState, useEffect } from "react";
import getTipos from '../get_tipos/get_tipos'
import deleteTipo from "../delete_tipo/delete_tipo";

const TipoList = (props) => {
  const [Tipos, setTipos] = useState([]);

  useEffect(() => {
    getTipos().then(data => { 
      setTipos(data)
    })
  });
  

  return (
    <div className="card">
    
      <h3 className="mt-3">Lista de tipos de pokemons cadastrados</h3>
    <div className="row">
        {Tipos && Tipos.map((Tipo, index) => (
          
        <div class="col-4">
          <div class="card m-2">
              <div class="card-body">
                <h5 class="card-title">{Tipo.nome}</h5>
                <p class="card-text">{Tipo.descricao}</p>
                  <button className='btn btn-primary' onClick={() => '/'}>Editar</button>
                  <button className='btn btn-danger m-2' onClick={() => deleteTipo(Tipo.id)} >Excluir</button>
              </div>
            </div>
          </div>
        
        ))}
      </div>
    </div>
  );
}

export default TipoList;
