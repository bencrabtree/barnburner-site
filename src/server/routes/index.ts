import express, { Router } from 'express';
import cors from 'cors';
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

export default (app, settings) => {
    const router = Router();

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        // res.header('Content-Type', 'text/plain')
        next();
    });
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    // app.get('*', isAuth);
    app.use(cors({ origin: true, credentials: true }));
    app.use(express.static(path.join(__dirname, "../public")));

    ////////////////////////////
    app.use('/', router);
    app.get('*/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'),
        error => {
            if (error) {
                console.log('Error Sending html');
                res.status(500).send(error)
            }
        })
    })
}