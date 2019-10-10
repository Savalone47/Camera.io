const express = require("express"),
      app = new express(),
      http = require("http").Server(app),
      io = require("socket.io")(http),
      path = require('path'),
      favicon = require('serve-favicon'),
      port  = process.env.PORT || 3000;
      
// midleware
app.use(favicon(path.join(__dirname + '/public','favicon.ico')));
app.use(express.static(__dirname + '/public'));
app.get('/',(req, res)=>{
    res.redirect('index.html');
});

// Socket.io
io.on('connection',(socket)=>{
    socket.on('stream',(image)=>{
        socket.broadcast.emit('stream', image);
    });
});

// Run the Server
http.listen(port, function(){
    console.log("Server is running on port %s ", port);    
});