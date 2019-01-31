// Dependencies
const express = require('express');
const websocket = require(__dirname + '/websockets');

// Main Express component
const app = express();

// Listen to Port
const server = app.listen(5000, ()=>{console.log("Listening at port 5000")});

// Main Endpoint
app.get('/', (req, res)=>{
  res.end();
});

// Socket Apis'
websocket.socketConnection(server);
