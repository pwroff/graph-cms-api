/**
 * Created by Leonid on 23/02/17.
 */
'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import http from 'http';
const {config} = require('../package.json');
const PORT = process.env.PORT || config.port || 3020;
const app = express();
const server = http.Server(app);

global.logger = console;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

server.listen(PORT, () => {
    logger.log(`Server listening on port ${PORT}`);

    // Initialise DB connection;
    const {database: dbConfig} = config;

    if (dbConfig && dbConfig.host) {
        const dbAuth =
            dbConfig.username &&
            dbConfig.password &&
            `${dbConfig.username}:${dbConfig.password}@` || '';
        const dbOptions = dbConfig.options && `?${dbConfig.options}` || '';
        const dbAddress = `mongodb://${dbAuth}${dbConfig.host || ''}${dbOptions}`;

        Mongoose.connect(dbAddress);
        Mongoose.Promise = Promise;

        const db = Mongoose.connection;

        db.on('error', logger.error.bind(logger, 'connection error:'));
        db.once('open', () => {
            logger.log(`Connected to Database on address: ${dbConfig.host}`);
        });
    }
});
