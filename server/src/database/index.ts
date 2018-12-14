import * as mongoose from "mongoose";

class Database {
    db_options: any;

    constructor(private uri: string, private event_options: {onConnected, onError, onDisconnected}) {
        this.db_options = {keepAlive: 1, useNewUrlParser: true, useCreateIndex: true};

        this.onConnected(this.event_options.onConnected);
        this.onError(this.event_options.onError);
        this.onDisconnected(this.event_options.onDisconnected);
    }

    connect(connection_attempt = 0) {
        console.log('Connecting to database at:', this.uri, '. Attempt:', connection_attempt);
        mongoose.connect(this.uri, this.db_options)
    }

    on(event_name: string, callback: (args: any) => void) {
        mongoose.connection.on(event_name, callback)
    }

    onError(callback: (args: any) => void) {
        this.on('error', callback)
    }

    onConnected(callback: (args: any) => void) {
        this.on('connected', callback)
    }

    onDisconnected(callback: (args: any) => void) {
        this.on('disconnected', callback)
    }

    open(callback: () => void) {
        mongoose.connection.once('open', callback);
    }
}

export default Database;