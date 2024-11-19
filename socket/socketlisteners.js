const {disconnect,register} = require('./socketConstants');
const {onDisConnect,onRegister} = require('./socketController');
const jwt = require('jsonwebtoken');


const listener = async socket => {
    console.log("socketconnected");
    socket.on(disconnect,onDisConnect);
    socket.on(register,(data)=>{
        onRegister(data,socket);
        
        // socket.to(socket.id).emit('register', { message: 'Registration successful' });

    });

   


  }

  module.exports = { listener };