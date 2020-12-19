/*
    GET: busca/lista informações no back-end
    POST: cria informações no back-end
    PUT: altera informações no back-end
    DELETE: deleta informações no back-end
*/

const routes = require('express').Router();
const filmesController = require('../controllers/filmesController');
const comentariosController = require('../controllers/comentariosController');
const listagemController = require('../controllers/listagemController');

//rotas dos filmes
routes.post('/filmes', filmesController.inserirFilmes);
routes.put('/filmes/:favoritar', filmesController.favoritarFilmes);

//rotas das pesquisas de filmes
routes.get('/pesquisa', listagemController.todosFilmes);
routes.get('/pesquisa/filmes', listagemController.listaSoFilmes);
routes.get('/pesquisa/series', listagemController.listaSoSeries);
routes.get('/pesquisa/favorito', listagemController.listaSoFavoritos);

//rotas dos comentarios
routes.post('/comentarios', comentariosController.inserirComentarios);
routes.get('/comentarios', comentariosController.listaPorIdFilmesComentarios);
routes.delete('/comentarios/:id', comentariosController.deletaComentarios);

// exportar rotas
module.exports = routes;