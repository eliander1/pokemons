import getTipos from "../get_tipos/get_tipos";

export async function deleteTipo(id) {
    await fetch(`http://localhost:3000/tipos/${id}`, {
      method: 'DELETE'
    });

    const updatedTipos = await getTipos(); // Obtém a lista atualizada de Tipos
    return updatedTipos; // Atualiza o estado com a nova lista de Tipos
  }

export default deleteTipo;

