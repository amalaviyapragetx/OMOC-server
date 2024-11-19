const {app} = require('./app');
const {connection} = require('./socket/socketConstants');
const {listener} = require('./socket/socketlisteners');
const http = require('http').Server(app);
const io = require('socket.io')(http);
io.on(connection,listener);







module.exports = { http,io };