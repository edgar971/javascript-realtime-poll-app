var React = require('react'),
    Display = require('./parts/Display'),
    JoinSpeaker = require('./parts/JoinSpeaker'),
    Speaker;

Speaker = React.createClass({
       render() {
           return (
               <section className="container">
                    <Display if={this.props.status === 'connected'}>
                        <Display if={this.props.member.name && this.props.member.type === 'speaker'}>
                            <p>Questions</p>
                            <p>Attendance</p>
                        </Display>
                        <Display if={!this.props.member.name}>
                            <h2>Start Presentation</h2>
                            <JoinSpeaker emit={this.props.emit}/>
                        </Display>
                    </Display>
               </section>
           );
       }
    });


module.exports = Speaker;