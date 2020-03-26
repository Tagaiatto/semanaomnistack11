const express = require('express');
const cors = require('cors');
const routes = require('./routes.js')

const app = express();

app.use(cors());
app.use(express.json()); // Informa ao app que estarei utilizando JSON para o corpo das requisições
app.use(routes);
/*
 Métodos HTTP:
 GET: Buscar uma informação no back-end
 POST: Criar uma informação no back-end
 PUT: Alterar uma informação no back-end
 DELETE: Deletar uma informação no back-end
*/
/* 
    Tipos de parametros:
    Query Params: parâmetros nomeados na rota após "?" (filtros,paginação)
    Route Params: Parâmetros utilizados para identifcar recursos
    Request Body: corpo da requisição, utilizado para criar ou alterar 
*/
/**
 * SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */


app.listen(3333);