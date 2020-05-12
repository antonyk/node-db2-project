// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host: 'hansken.db.elephantsql.com',
      database: 'fgqcggyv',
      user:     'fgqcggyv',
      password: 'iVAqmm0bOFCIU9gSD4vTU1rYSDV50D8H'
    },
    pool: {
      min: 1,
      max: 4
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: 'hansken.db.elephantsql.com',
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
