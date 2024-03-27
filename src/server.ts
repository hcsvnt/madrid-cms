import express from 'express';
import payload from 'payload';

require('dotenv').config();

const PORT = process.env.PORT;
const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET;

const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
    res.redirect('/admin');
});

const start = async () => {
    // Initialize Payload
    await payload.init({
        secret: PAYLOAD_SECRET,
        express: app,
        onInit: async () => {
            payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
        },
    });

    // Add your own express routes here

    app.listen(PORT);
};

start();
