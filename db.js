const  Client  = require('pg').Client;
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: '123654',
    port: 5432,
});

module.exports = client
