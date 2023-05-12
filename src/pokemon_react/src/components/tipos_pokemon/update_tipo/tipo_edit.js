import React, { useState } from "react";
import updateTipo from "./update_tipo";


const TipoEdit = ({ tipo, setUpdateState }) => {
  const [nome, setNome] = useState(tipo.nome);
  const [descricao, setDescricao] = useState(tipo.descricao);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tipoData = { nome, descricao };
    
    await updateTipo(tipo.id, tipoData);
    setUpdateState((prevState) =>
      prevState.map((prevTipo) =>
        prevTipo.id === tipo.id ? { ...prevTipo, ...tipoData } : prevTipo
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
        <label htmlFor="descricao">Descrição:</label>
        <textarea
          className="form-control"
          id="descricao"
          rows="3"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Salvar
      </button>
    </form>
  );
}

export default TipoEdit;
