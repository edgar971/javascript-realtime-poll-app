var React = require('react'),
    Display = require('./parts/Display'),
    Board = React.createClass({
       render() {
           return (
               <section className="container">

                   <Display if={this.props.status === 'connected' && this.props.currentQuestion}>
                    <h3>{this.props.currentQuestion.q}</h3>
                    <p>{JSON.stringify(this.props.results)}</p>
                   </Display>

                   <Display if={this.props.status === 'connected' && !this.props.currentQuestion}>
                      <p>Awaiting Question.</p>
                   </Display>

               </section>
           );
       }
    });


module.exports = Board;