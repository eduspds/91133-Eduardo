//server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js');

const app = express();
const port = 3000;

//permite ler dados de formulário
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//servir arquivos html, css e js da pasta public
app.use(express.static('public'));

//rota para cadastrar pessoas
app.post('/cadastrar', (req, res) => {
    const { nome } = req.body;
    db.run("INSERT INTO pessoas (nome) VALUES (?)", [nome], (err) => {
        if (err) return res.status(500).send("Erro ao cadastrar");
        res.send("Pessoa cadastrada com sucesso!");
    });
});

//rota para listar pessoas
app.get('/listar', (req, res) => {
    db.all("SELECT * FROM pessoas", [], (err, rows) => {
        if (err) return res.status(500).send("Erro ao buscar");
        res.json(rows);
    });
});

//pra rodar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});