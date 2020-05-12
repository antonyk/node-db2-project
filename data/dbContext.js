const knexfile = require('../knexfile');
const knex = require('knex');

const env = process.env.NODE_ENV = "staging";

module.exports = knex(knexfile[env]);
