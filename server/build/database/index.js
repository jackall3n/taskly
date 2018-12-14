"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Database {
    constructor(uri, event_options) {
        this.uri = uri;
        this.event_options = event_options;
        this.db_options = { keepAlive: 1, useNewUrlParser: true, useCreateIndex: true };
        this.onConnected(this.event_options.onConnected);
        this.onError(this.event_options.onError);
        this.onDisconnected(this.event_options.onDisconnected);
    }
    connect(connection_attempt = 0) {
        console.log('Connecting to database at:', this.uri, '. Attempt:', connection_attempt);
        mongoose.connect(this.uri, this.db_options);
    }
    on(event_name, callback) {
        mongoose.connection.on(event_name, callback);
    }
    onError(callback) {
        this.on('error', callback);
    }
    onConnected(callback) {
        this.on('connected', callback);
    }
    onDisconnected(callback) {
        this.on('disconnected', callback);
    }
    open(callback) {
        mongoose.connection.once('open', callback);
    }
}
exports.default = Database;
