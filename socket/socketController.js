const asyncHandler = require("express-async-handler");
const { io } = require('../socket');
const jwt = require('jsonwebtoken');
const {register,balanceUpdate} = require('./socketConstants');


onDisConnect = asyncHandler(async (req, res) => {
    console.log("socketdisconnected");
});
onRegister = asyncHandler(async (data,socket) => {
    console.log("onRegister");
    
    const newdata = JSON.parse(data);
    // console.log(newdata.token);
    const token =newdata.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.id);
    

    // io.to(socket.id).emit(register, newdata);
    console.log(socket.id);
    socket.to(socket.id).emit('register', { message: 'Registration successful' });

    // io.to(socketId).emit(balanceUpdate, newdata);


});
module.exports = { onDisConnect,onRegister };