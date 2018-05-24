const todo = require('../todo');

// exports.seed = function(knex, Promise) {
//   return knex('todo').del()
//     .then(function () {
//       return knex('todo').insert(todo);
//     });
// };
exports.seed = function (knex, Promise) {
 // Deletes ALL existing entries
 return knex.raw('DELETE FROM "todo"; ALTER SEQUENCE todo_id_seq RESTART WITH 4; ')
  .then(function () {
   // Inserts seed entries
   return knex('todo').insert(todo)
 });
};