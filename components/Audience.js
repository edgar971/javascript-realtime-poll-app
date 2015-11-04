var React = require('react'),
    Audience = React.createClass({
       render() {
           return (<h2>Audience: {this.props.title}</h2>);
       }
    });


module.exports = Audience;