"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
function config_server(server, port) {
    if (!server) {
        return;
    }
    server.on('error', error => onServerError(server, port, error));
    server.on('listening', () => onServerListening(server, port));
}
exports.config_server = config_server;
function normalizePort(port) {
    let val = parseInt(port, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
exports.normalizePort = normalizePort;
function onServerError(server, port, error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onServerListening(server, port) {
    let address = server.address();
    let bind = typeof port === 'string'
        ? `pipe ${address}`
        : `port ${address.port}`;
    debug(`Listening on ${bind}`);
}
