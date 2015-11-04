/**
 * Created by edgar971 on 11/3/15.
 */
var express = require('express'),
    app = express(),
    title = "Untitled Presentation",
    connections = [];


app.use(express.static('./public'));
app.use(express.static('./node_modules/materialize-css/dist'));
app.use(express.static('./node_modules/jquery/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);


//when socket connects
io.sockets.on('connection', function(socket){

    //remove the socket when it disconnects
    socket.once('disconnect', function(){
        connections.splice(connections.indexOf(socket),1);
        socket.disconnect();
        console.log("DISCONNECTED: %s remaining", connections.length)
    });

    //push connection to array
    connections.push(socket);

    //emit a connection
    socket.emit('welcome', {
        title: title
    });
    console.log("Connected: % sockets connected", connections.length);

});



console.log("server is running on port 3000");