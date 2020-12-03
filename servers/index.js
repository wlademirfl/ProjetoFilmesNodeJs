//importação do node express
const express = require('express');
//importação das rotas
const routes = require('../routes/routes.js');

const app = express();

//para utilizar json na requisição do corpo
app.use(express.json());


//utilizando as rotas
app.use(routes);

app.listen(3333);