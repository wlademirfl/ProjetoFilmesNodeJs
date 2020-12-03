const conexao = require('../servers/conexao');

module.exports = {

    async listaPorIdFilmesComentarios (resq,resp) { 
        const idFilmes = resq.headers.authorization;
        const comentarios = await conexao('comentarios')
            .join('filmes','filmes.idFilmes', '=', 'comentarios.idFilmes')
            .select(['comentarios.*','filmes.titulo']);
    
        return resp.json(comentarios);
    },

    async inserirComentarios(resq,resp) { 
        const { comentarios, idFilmes} = resq.body;
     
        const [id] = await conexao('comentarios').insert({
            comentarios, 
            idFilmes
        });
    
        return resp.json({ id });
    },

    async deletaComentarios (resq,resp) { 
        const { id } = resq.params;
        const idFilmes = resq.headers.authorization;
        
        const comentarios = await conexao('comentarios')
            .where('idComentarios',id)
            .select('idFilmes')
            .first();

        if (comentarios.idFilmes !== idFilmes)
            return resp.status(401).json({erro: 'Operação não permitida.'});
        
        await conexao('comentarios').where('idComentarios', id).delete();
        return resp.status(204).send();
        

    },


};