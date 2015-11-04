/**
 * Created by edgar971 on 11/3/15.
 */
var express = require('express'),
    app = express(),
    _ = require('underscore'),
    title = "Untitled Presentation",
    connections = [],
    audience = [];


app.use(express.static('./public'));
app.use(express.static('./node_modules/materialize-css/dist'));
app.use(express.static('./node_modules/jquery/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);


//when socket connects
io.sockets.on('connection', function(socket){

    //remove the socket when it disconnects
    socket.once('disconnect', function(){
        //find member id on the array using underscore.
        var member = _.findWhere(audience, {id: this.id});

        //if one was found
        if(member) {
            audience.splice(audience.indexOf(member),1);
            io.sockets.emit('audience', audience);
            console.log("Left: %s (%s audience members)", member.name, audience.length);
        }
        connections.splice(connections.indexOf(socket),1);
        socket.disconnect();
        console.log("DISCONNECTED: %s remaining", connections.length)
    });

    //push connection to array
    connections.push(socket);

    //when someone joins
    socket.on('join', function(data){
        var newMember = {
            id: this.id,
            name: data.name
        };
        this.emit('joined', newMember);
        audience.push(newMember);
        io.sockets.emit('audience', audience);
        console.log("Audience Joined: %s", data.name);
    });

    //emit a connection
    socket.emit('welcome', {
        title: title
    });
    console.log("Connected: % sockets connected", connections.length);

});



console.log("server is running on port 3000");