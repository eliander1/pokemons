

async function getTipos() {
    let response = await fetch('http://localhost:3000/tipos');
    let data = await response.json();
    return data;
  }

export default getTipos;