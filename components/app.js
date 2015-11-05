/*
Main App
 */
var React = require('react'),
    io = require('socket.io-client'),
    Header = require('./parts/Header'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    APP;

APP = React.createClass({
    getInitialState() {
      return {
          status: 'warning',
          title: '',
          member: {},
          audience: [],
          speaker: {}
      }
    },
    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('welcome', this.welcome);
        this.socket.on('joined', this.joined);
        this.socket.on('audience', this.updateAudience);
    },
    emit(event,data) {
      this.socket.emit(event,data);
    },
    connect(event) {
        var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;

        if(member) {
            this.emit('join', member);
        }
        this.setState({status: 'connected'});
    },
    disconnect() {
        this.setState({status: 'disconnected'});
    },
    welcome(serverState) {
        this.setState({title: serverState.title});
    },
    joined(member) {
        //set member variable to what ever information comes from the server
        sessionStorage.member = JSON.stringify(member);
        this.setState({member: member});
    },
    updateAudience(newAudience) {
        this.setState({audience: newAudience});
    },
    render() {
        return(
            <div>
                <Header title={this.state.title} status={this.state.status} />
                <RouteHandler emit={this.emit} {...this.state} />
            </div>
        );

    }
});

module.exports = APP;