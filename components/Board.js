var React = require('react'),
    Display = require('./parts/Display'),
    BarChart = require('react-d3').BarChart,
    Board;

Board = React.createClass({
        barGraphData(results) {
            var graphData = [
                {
                    "name": "Answers",
                    "values": []
                }

            ];
            Object.keys(results).map(function(choice){
                graphData[0].values.push({ "x": choice, "y":  results[choice]});
            });
            console.log(graphData);


            return graphData;

            //return Object.keys(results).map(function(choice){
            //    return
            //});

        },
        render() {
           return (
               <section className="container">

                   <Display if={this.props.status === 'connected' && this.props.currentQuestion}>
                       <BarChart
                           data={this.barGraphData(this.props.results)}
                           width={500}
                           height={200}
                           fill={'#3182bd'}
                           title={this.props.currentQuestion.q}
                           />
                   </Display>

                   <Display if={this.props.status === 'connected' && !this.props.currentQuestion}>
                      <p>Awaiting Question.</p>
                   </Display>

               </section>
           );
        }
    });


module.exports = Board;