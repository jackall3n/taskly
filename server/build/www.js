#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = require("dotenv");
const fs = require("fs");
const http_1 = require("http");
const https_1 = require("https");
env.config();
console.log('Starting up server with ENV:', process.env);
const server_1 = require("./server");
const database_1 = require("./database");
const config_1 = require("./config");
const server_helpers_1 = require("./utils/server-helpers");
let port = server_helpers_1.normalizePort(process.env.PORT || 7500);
let ssl_port = server_helpers_1.normalizePort(process.env.SSL_PORT || 443);
let app = server_1.default.bootstrap().app;
app.set('port', port);
app.set('ssl_port', ssl_port);
let connection_attempt = 1;
let max_connection_attempts = 5;
let ssl_server;
let database;
let server;
server = http_1.createServer(app);
if (process.env.NODE_ENV === 'production') {
    ssl_server = https_1.createServer({
        key: fs.readFileSync("/etc/letsencrypt/archive/api.tapcheck.co.uk/privkey1.pem"),
        cert: fs.readFileSync("/etc/letsencrypt/archive/api.tapcheck.co.uk/fullchain1.pem"),
        ca: fs.readFileSync("/etc/letsencrypt/archive/api.tapcheck.co.uk/chain1.pem")
    }, app);
}
database = new database_1.default(config_1.default.database.address, {
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
server_helpers_1.config_server(server, port);
server_helpers_1.config_server(ssl_server, ssl_port);
database.connect(connection_attempt);
