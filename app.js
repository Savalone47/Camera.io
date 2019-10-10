const express = require("express"),
      app = new express(),
      http = require("http").Server(app),
      io = require("socket.io")(http),
      port  = process.env.PORT || 3000;
      

app.use(express.static(__dirname + '/public'));
app.get('/',(req, res)=>{
    res.redirect('index.html');
});

app.listen(port, function(){
    console.log("Server is running on port %s ", port);    
});