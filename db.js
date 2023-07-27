const Client = require('pg').Client;
const client = new Client({
    user: 'default',
    host: 'ep-fancy-firefly-772837-pooler.eu-central-1.postgres.vercel-storage.com',
    database: 'verceldb',
    password: '7aev3GTwiFxm',
    port: 5432,
    ssl: {
        rejectUnauthorized: false, // Kai kuriose aplinkose tai gali būti būtina, kad galėtumėte prisijungti su "sslmode=require"
    },
});

module.exports = client;
