
exports.up = function(knex) {
    return knex.schema.createTable('comentarios', function(table){
        table.increments('idComentarios').primary();
        table.string('comentarios').notNullable();
        table.integer('idFilmes').notNullable();

        table.foreign('idFilmes').references('idFilmes').inTable('filmes');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('comentarios');
};
