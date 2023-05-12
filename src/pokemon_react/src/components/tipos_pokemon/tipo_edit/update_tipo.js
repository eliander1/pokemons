import getTipos from "../get_tipos/get_tipos";

export async function updateTipo(id, tipo) {
  await fetch(`http://localhost:3000/tipos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tipo)
  });

  const updatedTipos = await getTipos(); // Obtém a lista atualizada de Tipos
  return updatedTipos; // Atualiza o estado com a nova lista de Tipos
}

export default updateTipo;
