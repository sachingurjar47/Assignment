const { Model } = require('objection');
const Knex = require('knex');

// Initialize knex.
const knex = Knex({
    client: 'mysql',
    useNullAsDefault: true,
    connection: {
        host: 'localhost',
        user: 'root',
        password: "admin@47",
        database:"my_tasks"
    }
});

// Give the knex instance to objection.
Model.knex(knex);
module.exports = knex;