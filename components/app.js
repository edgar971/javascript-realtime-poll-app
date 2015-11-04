var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/Header');

var APP = React.createClass({
    getInitialState() {
      return {
          status: 'warning'
      }
    },
    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
    },
    connect(event) {
        console.log(this.socket.id);
        console.log(this);
        console.log(event);
        this.setState({status: 'album'});
    },
    disconnect() {
        this.setState({status: 'warning'});
    },
    render() {
        return(<Header title="App" status={this.state.status}/>);
    }
});

module.exports = APP;