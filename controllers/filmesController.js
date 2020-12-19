/*
    Para gerar um número aleatório de 4 posições em hexadecimal:
    const crypto = require('crypto');

    dentro do post:
    const id = crypto.randomBytes(4).toString('HEX').
*/
const conexao = require('../servers/conexao');

module.exports = {

    async inserirFilmes(resq,resp) { 
        const { titulo, genero, ano, duracao, nota, tipo, favorito, sinopse, capa} = resq.body;

        const [id] = await conexao('filmes').insert({
            titulo, 
            genero,
            ano, 
            duracao, 
            nota, 
            tipo,
            favorito,
            sinopse, 
            capa
        });
        return resp.json({ });
    },

    async favoritarFilmes(resq,resp) {

        const { favoritar } = resq.params;
        const idFilmes = resq.body.headers.authorization;
        
        const filmes = await conexao('filmes')
        .where('idFilmes',idFilmes)
        .select('idFilmes')
        .first();

        if (filmes.idFilmes == idFilmes)
        {
            const favoritarFilmes = await conexao('filmes')
            .where('idFilmes',idFilmes)
            .update({
                favorito: favoritar
            });
            return resp.status(204).send();
        }
        else
            return resp.status(401).json({erro: 'Operação não permitida.'});
    } 
};