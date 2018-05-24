
exports.up = function(knex, Promise) {
    return knex.schema.createTable('todo', (table) => {
        table.increments();
        table.date('dueDate');
        table.text('resolution');
      });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('todo')
  
};
