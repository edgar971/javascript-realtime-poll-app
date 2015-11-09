var React = require('react'),
    Display = require('./parts/Display'),
    Join = require('./parts/Join'),
    Ask = require('./parts/Ask'),
    Audience;

Audience = React.createClass({
    render() {
        return (
            <section className="container">
                <Display if={this.props.status === 'connected'}>
                    <Display if={this.props.member.name}>
                        <Display if={!this.props.currentQuestion}>
                            <h2>Welcome {this.props.member.name}</h2>
                            <p>{this.props.audience.length} audience members connected.</p>
                            <p>Questions will appear here.</p>
                        </Display>
                        <Display if={this.props.currentQuestion}>
                            <Ask question={this.props.currentQuestion}/>
                        </Display>

                        </Display>
                    <Display if={!this.props.member.name}>
                        <h2>Join the session</h2>
                        <Join emit={this.props.emit}/>
                    </Display>

                </Display>
            </section>
        );
    }
});

module.exports = Audience;