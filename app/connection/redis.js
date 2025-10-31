const { createClient } = require('redis');

const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_URL = process.env.REDIS_URL || 'redis';

const client = createClient({
    url: `redis://${REDIS_URL}:${REDIS_PORT}`,
});

client.on('error', (err) => console.error('Error en Redis:', err));
client.on('ready', () => console.log('Conectado a Redis'));

(async () => {
    try {
        await client.connect();
    } catch (err) {
        console.error('Error al conectar Redis:', err);
    }
})();

module.exports = client;
