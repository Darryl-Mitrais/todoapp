const { Pool } = require('pg');

let config = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
}

let pgClient;

let getPGClient = () => {
    if ( pgClient ) return pgClient;
    pgClient = new Pool ( config );
    return pgClient;
}

module.exports = { getPGClient };