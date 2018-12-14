import * as debug from "debug";

export function config_server(server, port) {
    if (!server) {
        return;
    }

    server.on('error', error => onServerError(server, port, error));
    server.on('listening', () => onServerListening(server, port));
}

export function normalizePort(port: any): number | boolean {
    let val = parseInt(port, 10);

    if (isNaN(port)) {
        return val
    }

    if (port >= 0) {
        return port;
    }

    return false;
}


function onServerError(server, port, error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
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
    let address: any = server.address();
    let bind = typeof port === 'string'
        ? `pipe ${address}`
        : `port ${address.port}`;

    debug(`Listening on ${bind}`);
}
