//importação do node express
const express = require('express');
const cors = require('cors');
//
//importação das rotas
const routes = require('../routes/routes.js');
const app = express();

//para utilizar json na requisição do corpo
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//utilizando as rotas
app.use(routes);

app.listen(3333);