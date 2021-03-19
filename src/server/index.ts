import http from 'http';
import expressSession from 'express-session';
import app from './app';
import settings from './config/settings.json';
import "reflect-metadata";

const start = async () => {
    let session = expressSession({
        secret: 'test',
        resave: false,
        saveUninitialized: false,
        unset: 'destroy'
    });

    const _app = app(settings, session);
    const server = http.createServer(_app);

    server.listen(settings.general.port, () => {
        console.log(`\nRunning on port ${settings.general.port}`);
        console.log(`--------------------------\n`)
    })
}

start();