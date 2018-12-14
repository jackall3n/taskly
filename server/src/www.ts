#!/usr/bin/env node

import * as env from "dotenv";
import * as fs from 'fs';
import {createServer} from "http";
import {createServer as createSSLServer} from "https";

// Configuring the environment variables from .env
env.config();

console.log('Starting up server with ENV:', process.env);

import appServer from "./server";
import Database from './database';
import config from './config';
import {config_server, normalizePort} from "./utils/server-helpers";

// Normalising both ports
let port = normalizePort(process.env.PORT || 7500);
let ssl_port = normalizePort(process.env.SSL_PORT || 443);

let app = appServer.bootstrap().app;

app.set('port', port);
app.set('ssl_port', ssl_port);

let connection_attempt = 1;
let max_connection_attempts = 5;

let ssl_server;
let database;
let server;

server = createServer(app);

// If production, create a SSL Server
if (process.env.NODE_ENV === 'production') {
    ssl_server = createSSLServer({
        key: fs.readFileSync("/etc/letsencrypt/archive/api.tapcheck.co.uk/privkey1.pem"),
        cert: fs.readFileSync("/etc/letsencrypt/archive/api.tapcheck.co.uk/fullchain1.pem"),
        ca: fs.readFileSync("/etc/letsencrypt/archive/api.tapcheck.co.uk/chain1.pem")
    }, app);
}

database = new Database(config.database.address, {
    onConnected: () => {
        console.log("Database connected");

        server && server.listen(port);
        ssl_server && ssl_server.listen(ssl_port);
    },
    onError: (error) => {
        console.log(error);
    },
    onDisconnected: () => {
        console.log("Database disconnected");

        if (connection_attempt < max_connection_attempts) {
            connection_attempt++;
            const wait = connection_attempt * 1000;

            console.log('Re-attempting to connect in:', wait, 'ms');

            setTimeout(() => database.connect(connection_attempt), wait);
        }
    }
});

config_server(server, port);
config_server(ssl_server, ssl_port);

database.connect(connection_attempt);