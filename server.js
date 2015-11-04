/**
 * Created by edgar971 on 11/3/15.
 */
var express = require('express');
var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/materialize-css/dist'));
app.use(express.static('./node_modules/jquery/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);


//when socket connects
io.sockets.on('connection', function(socket){
    console.log(socket.id);
});

console.log("server is running on port 3000");