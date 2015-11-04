var React = require('react'),
    io = require('socket.io-client'),
    Header = require('./parts/Header'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var APP = React.createClass({
    getInitialState() {
      return {
          status: 'warning',
          title: '',
      }
    },
    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('welcome', this.welcome);
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
    welcome(serverState) {
        this.setState({title: serverState.title});
    },
    render() {
        return(
            <div>
                <Header title={this.state.title} status={this.state.status} />
                <RouteHandler {...this.state} />
            </div>
        );

    }
});

module.exports = APP;