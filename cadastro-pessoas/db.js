// db.js
const sqlite3 = require('sqlite3').verbose();

// Cria ou abre o banco de dados
const db = new sqlite3.Database('./cadastro.db', (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
        console.log('Conexão com o banco de dados estabelecida');
    }
});

// Criação da tabela "pessoas" se não existir
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS pessoas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT)");
});

module.exports = db;
