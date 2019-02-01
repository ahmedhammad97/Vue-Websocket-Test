const socket = require('socket.io');

exports.socketConnection = function(server){

  //Socket.io main function
  const io = socket(server);

  io.on('connection', socket=>{
    console.log("Connection made with use of Socket.io <3");

    socket.on('message', message=>{
      console.log(message);
      socket.emit('message', 'I have recieved \"' + message + '\"');
    });

    socket.on('disconnect', ()=>{
      console.log("Connection lost");
    });

  });

};
