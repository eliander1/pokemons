import getTipos from "../get_tipos/get_tipos";

export async function updateTipo(id, tipo) {
  await fetch(`http://localhost:3000/tipos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tipo)
  });

  const updatedTipos = await getTipos(); 
  return updatedTipos; 
}

export default updateTipo;
