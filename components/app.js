/*
Main React App.
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
          speaker: '',
          questions: []
      }
    },
    componentWillMount() {
        //Happens when the component renders

        //Connect to the socket.
        this.socket = io('http://localhost:3000');

        //when there is a connection run the function
        this.socket.on('connect', this.connect);

        //when a socket disconnects
        this.socket.on('disconnect', this.disconnect);

        //when a person joins
        this.socket.on('welcome', this.updateState);
        this.socket.on('joined', this.joined);
        this.socket.on('audience', this.updateAudience);
        this.socket.on('start', this.start);
        this.socket.on('end', this.updateState);
    },
    emit(event,data) {
      this.socket.emit(event,data);
    },
    connect(event) {
        /*
        When someone connects then check if there is any local data otherwise return nothing
         */
        var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;

        //if the type is audience then emit a join event with the persons information.
        if(member && member.type === 'audience') {
            this.emit('join', member);
        } else if(member && member.type === 'speaker') {
            this.emit('start', {name: member.name, title: sessionStorage.title});
        }
        this.setState({status: 'connected'});
    },
    disconnect() {
        this.setState({
            status: 'disconnected',
            title: 'disconnected',
            speaker: ''
        });
    },
    updateState(serverState) {
        this.setState(serverState);
    },
    joined(member) {
        //set member variable to what ever information comes from the server
        sessionStorage.member = JSON.stringify(member);
        this.setState({member: member});
    },
    updateAudience(newAudience) {
        this.setState({audience: newAudience});
    },
    start(presentation) {
        if(this.state.member.type === 'speaker') {
            sessionStorage.title = presentation.title;
        }
        this.setState(presentation);
    },
    render() {
        return(
            <div>
                <Header {...this.state}  />
                <RouteHandler emit={this.emit} {...this.state} />
            </div>
        );

    }
});

module.exports = APP;