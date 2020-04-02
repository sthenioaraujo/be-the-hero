const express = require('express');
const cors = require('cors'); 
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
// Definindo que aplicação terá retornos do tipo json
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipo de parâmetros:
   * 
   * Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route params: Parâmetros utilizados para identificar recursos
   * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * From users
     * Query Builder: table('users').select(*).where() 
     */


app.use(errors());
module.exports = app;