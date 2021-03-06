var React = require('react'),
    ReactDOM = require('react-dom'),
    Link = require('react-router').Link,
    Join;

Join = React.createClass({
    join() {
        var memberName = ReactDOM.findDOMNode(this.refs.name).value;
        this.props.emit('join',{name: memberName});
    },
    render() {
        return (
            <form action="javascript:void(0)" onSubmit={this.join}>
                <div className="row">
                    <div className="input-field col s6">
                        <input ref="name"  type="text" placeholder="Enter Name" className="validate"/>
                        <label className="active" >Name</label>
                    </div>
                </div>
                <Link to="/speaker">Join as Speaker</Link>
                <Link to="/board">View board</Link>

            </form>

        );
    }
});

module.exports = Join;

