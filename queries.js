const knex = require("./database-connection");

module.exports = {
    list(){
     return knex("todo").select();
    },
    read(id){
    return knex("todo").select().where("id", id).first();
    },
    create(resolution){
     return knex("todo").insert(resolution).returning("*").then(record => record[0]) 
    },
    update(id, todo){
        return knex("todo").update(todo).where("id", id).returning("*").then(record => record[0]);  
    },
    delete(id){
        return knex("todo").delete().where("id", id);   
    },
};
