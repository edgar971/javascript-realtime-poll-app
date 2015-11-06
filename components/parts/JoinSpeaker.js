var React = require('react'),
    ReactDOM = require('react-dom'),
    JoinSpeaker;

JoinSpeaker = React.createClass({
    start() {
        var speakerName = ReactDOM.findDOMNode(this.refs.name).value;
        var title = ReactDOM.findDOMNode(this.refs.title).value;
        console.log(title);
        this.props.emit('start',{name: speakerName, title: title});
    },
    render() {
        return (
            <form action="javascript:void(0)" onSubmit={this.start}>
                <div className="row">
                    <div className="input-field col s6">
                        <input ref="name"  type="text" placeholder="Enter Name" className="validate"/>
                        <label className="active" >Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input ref="title"  type="text" placeholder="Presentation Title" className="validate"/>
                        <label className="active" >Presentation Title</label>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>

        );
    }
});

module.exports = JoinSpeaker;

