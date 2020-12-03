

// async listarSoFilmes(resq,resp) { }
 // async listarSoSeries(resq,resp) { }
    
// async listarFavoritos(resq,resp) { }

const conexao = require('../servers/conexao');

module.exports = {

    async todosFilmes (resq,resp) { 
        const { page = 1 } = resq.query;

        const [count] = await conexao('filmes').count();

        const filmes = await conexao('filmes')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');
        
        resp.header('X-Total-Count', count['count(*)']);
    
        return resp.json(filmes);
    },

    async listaSoFilmes (resq,resp) { 

        const filmes = await conexao('filmes').where('tipo',1).select('*');
    
        return resp.json(filmes);
    },

    async listaSoSeries (resq,resp) { 

        const filmes = await conexao('filmes').where('tipo',0).select('*');
    
        return resp.json(filmes);
    },
    
    async listaSoFavoritos (resq,resp) { 

        const filmes = await conexao('filmes').where('favorito',1).select('*');
    
        return resp.json(filmes);
    }
};