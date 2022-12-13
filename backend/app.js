const express = require('express'); 
const app = express();
// import bodyParser from 'body-parser';
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = './data/curriculo.db'; //use o nome que você achar melhor para o banco de dados

app.use(express.json());

app.use(express.static('../frontend/'))


 // CRUD - Create, Read, Update, Delete - para USUARIOS
 // READ Usuario
 app.get('/usuario', (req, res) => { 
    res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
    let sql
    if (Object.keys(req.query).length == 0) { 
        sql = "SELECT * FROM Usuario";
    } else {
        sql = "SELECT * FROM Usuario WHERE id_usuario = " + req.query.id;
    }

    // open the database
    let db = new sqlite3.Database(DBPATH);
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close();
});

 // CREATE Usuario
app.post('/usuario', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
    let sql 
    let db = new sqlite3.Database(DBPATH);

    sql = `INSERT INTO Usuario (nome_usuario, cargo_usuario, endereco, telefone, email) VALUES ('${req.body.nome_usuario}', '${req.body.cargo_usuario}', '${req.body.endereco}', '${req.body.telefone}', '${req.body.email}')`;
    // open the database
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
    });

    sql = `INSERT INTO Formacao (nome_curso, ano_inicio_curso, ano_final_curso, descricao_curso, id_usuario) VALUES ('${req.body.nome_curso}', '${req.body.ano_inicio_curso}', '${req.body.ano_final_curso}', '${req.body.descricao_curso}', '${req.body.id_usuario}')`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
    });

    sql = `INSERT INTO Experiencia (nome_empresa, ano_inicio_experiencia, ano_final_experiencia, descricao, id_usuario) VALUES ('${req.body.nome_empresa}', '${req.body.ano_inicio_experiencia}', '${req.body.ano_final_experiencia}', '${req.body.descricao}', '${req.body.id_usuario}')`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
    });

    sql = `INSERT INTO Realizacoes (nome_realizacao, ano_realizacao, descricao_realizacao, id_usuario) VALUES ('${req.body.nome_realizacao}', '${req.body.ano_realizacao}', '${req.body.descricao_realizacao}', '${req.body.id_usuario}')`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
    });

    db.close();
    res.send("Usuário cadastrado com sucesso!");
})

// UPDATE Usuario
app.put('/usuario', urlencodedParser, (req, res) => {
    res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
    let sql = `UPDATE Usuario SET nome_usuario = '${req.body.nome_usuario}', cargo_usuario = '${req.body.cargo_usuario}', endereco = '${req.body.endereco}', imagem = '${req.body.imagem}', telefone = '${req.body.telefone}', email = '${req.body.email}', biografia = '${req.body.biografia}' WHERE id_usuario = ${req.body.id}`;
    
    // open the database
    let db = new sqlite3.Database(DBPATH);
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
    });
    db.close();
    res.send("Usuário atualizado com sucesso!");
})

// DELETE Usuario
app.delete('/usuario', urlencodedParser, (req, res) => {
    res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
    let sql

    sql = `DELETE FROM Formacao WHERE id_usuario = ${req.body.id}`
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
    });

    sql = `DELETE FROM Experiencia WHERE id_usuario = ${req.body.id}`
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
    });

    sql = `DELETE FROM Realizacoes WHERE id_usuario = ${req.body.id}`
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
    });

    sql = `DELETE FROM Usuario WHERE id_usuario = ${req.body.id}`
    // open the database
    let db = new sqlite3.Database(DBPATH);
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
    });

    db.close();
    res.send("Usuário deletado com sucesso!");
})




    // CRUD - Create, Read, Update, Delete - para FORMACAO
app.get('/formacao', (req, res) => { 
    res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
    let sql
    if (Object.keys(req.query).length == 0) { 
        sql = "SELECT * FROM Formacao";
    } else {
        sql = "SELECT * FROM Formacao WHERE id_formacao = " + req.query.id;
    }

    // open the database
    let db = new sqlite3.Database(DBPATH);
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close();
});

 // CREATE Formacao
 app.post('/formacao', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
    let sql = `INSERT INTO Formacao (nome_curso, ano_inicio_curso, ano_final_curso, descricao_curso, id_usuario) VALUES ('${req.body.nome_curso}', '${req.body.ano_inicio_curso}', '${req.body.ano_final_curso}', '${req.body.descricao_curso}', '${req.body.id_usuario}')`;

    // open the database
    let db = new sqlite3.Database(DBPATH);
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
    });
    db.close();
    res.send("Formação cadastrada com sucesso!");
})

// UPDATE Formacao
app.put('/formacao', urlencodedParser, (req, res) => {
    res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
    let sql = `UPDATE Formacao SET nome_curso = '${req.body.nome_curso}', ano_inicio_curso = '${req.body.ano_inicio_curso}', ano_final_curso = '${req.body.ano_final_curso}', descricao_curso = '${req.body.descricao_curso}', id_usuario = '${req.body.id_usuario}' WHERE id_formacao = ${req.body.id}`;
    
    // open the database
    let db = new sqlite3.Database(DBPATH);
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
    });
    db.close();
    res.send("Formação atualizada com sucesso!");
})

// DELETE Formacao
app.delete('/formacao', urlencodedParser, (req, res) => {
    res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
    let sql = `DELETE FROM Formacao WHERE id_formacao = ${req.body.id}`
    // open the database
    let db = new sqlite3.Database(DBPATH);
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
    });
    db.close();
    res.send("Formação deletada com sucesso!");
})



app.get('/experiencia', (req, res) => {
    res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
    let sql
    if (Object.keys(req.query).length == 0) { 
        sql = "SELECT * FROM Experiencia";
    } else {
        sql = "SELECT * FROM Experiencia WHERE id_experiencia = " + req.query.id;
    }

    // open the database
    let db = new sqlite3.Database(DBPATH);
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close();
});

app.get('/realizacoes', (req, res) => {
    res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
    let sql
    if (Object.keys(req.query).length == 0) { 
        sql = "SELECT * FROM Realizacoes";
    } else {
        sql = "SELECT * FROM Realizacoes WHERE id_realizacao = " + req.query.id;
    }

    // open the database
    let db = new sqlite3.Database(DBPATH);
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close();
});

app.get('/habilidades', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Habilidades';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});



app.get('/personalidade', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Personalidade';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});







app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });