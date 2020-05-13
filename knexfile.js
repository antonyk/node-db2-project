// Update with your config settings.
const pgConnectionString = process.env.DB_URL ||  'postgres://myuser:mypass@localhost:5432/lambda'

 module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'pg',
    connection: pgConnectionString,
    pool: {
      min: 1,
      max: 3
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
      min: 1,
      max: 4
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
