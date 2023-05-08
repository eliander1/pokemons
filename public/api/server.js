
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const path = require('path');

const app = express();

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

app.get('/pokemons', (req, res) => {
  pool.query('SELECT * FROM pokemons', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erro ao buscar usuários');
    } else {
      res.send(result.rows);
    }
  });
});

app.post('/usuarios', (req, res) => {
  const { nome, email } = req.body;

  pool.query(
    'INSERT INTO usuarios (nome, email) VALUES ($1, $2)',
    [nome, email],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Erro ao criar usuário');
      } else {
        res.send('Usuário criado com sucesso');
      }
    },
  );
});

app.put('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  pool.query(
    'UPDATE usuarios SET nome=$1, email=$2 WHERE id=$3',
    [nome, email, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Erro ao atualizar usuário');
      } else {
        res.send('Usuário atualizado com sucesso');
      }
    },
  );
});

app.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params;

  pool.query('DELETE FROM usuarios WHERE id=$1', [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erro ao deletar usuário');
    } else {
      res.send('Usuário deletado com sucesso');
    }
  });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
