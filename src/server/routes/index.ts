import express, { Router } from 'express';
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

export default (app, settings) => {
    const router = Router();
}