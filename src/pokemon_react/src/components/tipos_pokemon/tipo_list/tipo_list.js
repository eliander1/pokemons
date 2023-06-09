import React, { useState, useEffect } from "react";
import getTipos from '../get_tipos/get_tipos'
import deleteTipo from "../delete_tipo/delete_tipo";
import TipoEdit from "../update_tipo/tipo_edit";

const TipoList = (props) => {
  const [Tipos, setTipos] = useState([]);
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = (id) => {
    setShowDiv(id === showDiv ? null : id);
  };


  useEffect(() => {
    getTipos().then(data => { 
      setTipos(data)
    })
  }, [Tipos]);


  return (
    <div className="background-allcards">
    
      <h3 className="mt-3">Lista de tipos de pokemons cadastrados</h3>
    <div className="row">
        {Tipos && Tipos.map((Tipo, index) => (
          
        <div key={Tipo.id} className="col-4">
          <div className="card m-2">
              <div className="card-body-tipo">
                <h5 className="card-title">{Tipo.nome}</h5>
                <p className="card-text">{Tipo.descricao}</p>
                 
                  <button className='btn btn-detalhes' onClick={() => handleButtonClick(Tipo.id)}>Editar</button>
                  <button className='btn btn-excluir m-2' onClick={() => deleteTipo(Tipo.id)} >Excluir</button>
                  
                  {showDiv === Tipo.id && (
                  <div>
                  
                     <TipoEdit tipo={Tipo} setUpdateState={setTipos}/>
                    </div>
                    )}
              </div>
            </div>
          </div>
        
        ))}
      </div>
    </div>
  );
}

export default TipoList;