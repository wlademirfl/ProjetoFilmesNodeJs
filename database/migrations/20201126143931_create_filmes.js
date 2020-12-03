
//cria tabelas
exports.up = function(knex) {
    return knex.schema.createTable('filmes', function(table){
        table.increments('idFilmes').primary();
        table.string('titulo',50).notNullable();
        table.string('sinopse');
        table.string('genero',50);
        table.integer('ano');
        table.string('duracao',6);
        table.float('nota', 2,1).notNullable();
        table.string('tipo',1);
        table.string('favorito',1);
        table.string('capa').notNullable();
    });
};

//exclui tabelas caso ocorra erro
exports.down = function(knex) {
    return knex.schema.dropTable('filmes');
};
