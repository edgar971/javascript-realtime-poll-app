/**
 * Created by edgar971 on 11/4/15.
 */
var React = require('react'),
    Display;

Display = React.createClass({
        render() {
            return (this.props.if) ? <div>{this.props.children}</div> : null;
        }
    }
);

module.exports = Display;