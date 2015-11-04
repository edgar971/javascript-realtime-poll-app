var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/Header');

var APP = React.createClass({
    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect)
    },
    connect(event) {
        console.log(this.socket.id);
        console.log(this);
        console.log(event);

    },
    render() {
        return(<Header />);
    }
});

module.exports = APP;