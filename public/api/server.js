
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const path = require('path');
const cors = require('cors');


const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = new pg.Pool({
  user: 'postgres',
  host: 'teste-htq-dev.fly.dev',
  database: 'pokemons',
  password: '32S9Jk3WJI1moLx',
  port: 5432,
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','index.html'));
});

//C
app.post('/pokemons', (req, res) => {
  const { nome, tipo_id, imagem, habilidades } = req.body;

  pool.query(
    'INSERT INTO pokemons (nome, tipo_id, imagem, habilidades) VALUES ($1, $2, $3, $4)',
    [nome, tipo_id, imagem, habilidades],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Erro ao criar pokemon');
      } else {
        res.send('Pokemon criado com sucesso');
      }
    },
  );
});

//R
app.get('/pokemons', (req, res) => {
  pool.query('SELECT p.*, t.nome as tipo_nome FROM pokemons p INNER JOIN tipos t ON p.tipo_id = t.id', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar pokemons');
    } else {
      res.send(result.rows);
    }
  });
});



app.get('/pokemons/:id', (req, res) => {
  const { id } = req.params;
  pool.query('SELECT p.*, t.id as tipo_id, t.nome as tipo_nome, t.descricao as tipo_descricao FROM pokemons p INNER JOIN tipos t ON p.tipo_id = t.id WHERE p.id = $1', [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar pokemons');
    } else {
      res.send(result.rows);
    }
  });
});

//U
app.put('/pokemons/:id', (req, res) => {
  const { id } = req.params;
  const { nome, habilidade } = req.body;

  pool.query(
    'UPDATE pokemons SET nome=$1, habilidade=$2 WHERE id=$3',
    [nome, habilidade, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Erro ao atualizar pokemon');
      } else {
        res.send('Pokemon atualizado com sucesso');
      }
    },
  );
});

//D
app.delete('/pokemons/:id', (req, res) => {
  const { id } = req.params;

  pool.query('DELETE FROM pokemons WHERE id=$1', [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erro ao deletar pokemon');
    } else {
      res.send('Pokemon deletado com sucesso');
    }
  });
});


// CRUD de tipos

//C
app.post('/tipos', (req, res) => {
  const { nome, descricao } = req.body;

  pool.query(
    'INSERT INTO tipos (nome, descricao) VALUES ($1, $2)',
    [nome, descricao, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Erro ao cadastrar novo tipo de pokemon');
      } else {
        res.send('Novo tipo de pokemon cadastrado com sucesso');
      }
    },
  );
});

//R
app.get('/tipos', (req, res) => {
  pool.query('SELECT * FROM tipos', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar tipos de pokemons');
    } else {
      res.send(result.rows);
    }
  });
});

app.get('/tipos/:id', (req, res) => {
  const { id } = req.params;
  pool.query('SELECT * FROM tipos where id=$1', [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar tipos de pokemons');
    } else {
      res.send(result.rows);
    }
  });
});


//U
app.put('/tipos/:id', (req, res) => {
const { id } = req.params;
const { nome, descricao } = req.body;

pool.query('UPDATE tipos SET nome=$1, descricao=$2 WHERE id=$3', [nome, descricao, id], (err, result) => {
  if (err) {
    console.log(err);
    res.status(500).send('Erro ao atualizar tipo de pokemon');
  } else {
    res.send('Tipo de pokemon atualizado com sucesso');
  }
  },);
});

//D
app.delete('/tipos/:id', (req, res) => {
  const { id } = req.params;

  pool.query('DELETE FROM tipos WHERE id=$1', [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erro ao deletar tipo de pokemon');
    } else {
      res.send('Tipo de pokemon deletado com sucesso');
    }
  });
});


app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
