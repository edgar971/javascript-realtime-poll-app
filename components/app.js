/*
Main React App.
@todo: Replace with arrow functions
 */
import React from 'react';
import io from 'socket.io-client'
import Header from './parts/Header'
import Router from 'react-router'

var {RouteHandler} = Router;

class APP extends React.Component {
    constructor() {
        super();
        this.state =  {
            status: 'warning',
            title: '',
            member: {},
            audience: [],
            speaker: '',
            questions: [],
            currentQuestion: false,
            results: {},
        }
    }

    componentWillMount() {
        //Happens when the component renders

        //Connect to the socket.
        this.socket = io('http://localhost:3000');

        //when there is a connection run the function
        this.socket.on('connect', this.connect);

        //when a socket disconnects
        this.socket.on('disconnect', this.disconnect);

        //when a person joins
        this.socket.on('welcome', x => this.setState(x));
        this.socket.on('joined', this.joined);
        this.socket.on('audience', this.updateAudience);
        this.socket.on('start', this.start);
        this.socket.on('end', x => this.setState(x));
        this.socket.on('ask', this.ask);
        this.socket.on('results', this.updateResults);
    }

    emit(event,data) {
      this.socket.emit(event,data);
    }

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
    }

    disconnect() {
        this.setState({
            status: 'disconnected',
            title: 'disconnected',
            speaker: ''
        });
    }

    joined(member) {
        //set member variable to what ever information comes from the server
        sessionStorage.member = JSON.stringify(member);
        this.setState({member: member});
    }

    updateAudience(newAudience) {
        this.setState({audience: newAudience});
    }

    start(presentation) {
        if(this.state.member.type === 'speaker') {
            sessionStorage.title = presentation.title;
        }
        this.setState(presentation);
    }

    ask(question) {
        sessionStorage.answer = '';
        this.setState(
            {
                currentQuestion : question,
                results: {a:0, b:0,c:0,d:0}
            }
        );

    }

    updateResults(data) {
        this.setState({results:data});
    }

    render() {
        return(
            <div>
                <Header {...this.state}  />
                <RouteHandler emit={this.emit} {...this.state} />
            </div>
        );

    }
};

module.exports = APP;