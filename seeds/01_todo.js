const todo = require('../todo');

exports.seed = function (knex, Promise) {
  return knex.raw('DELETE FROM "todo"; ALTER SEQUENCE todo_id_seq RESTART WITH 4; ')
  .then(function () {
  return knex('todo').insert(todo)
 });
};