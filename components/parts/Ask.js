var React = require('react'),
    Ask;

Ask = React.createClass({
    getInitialState() {
        return {
            choices: []
        }
    },
    componentWillMount(){
        this.setUpChoices();
        console.log(this.props.question);

    },
    componentWillReceiveProps() {
        this.setUpChoices()
    },
    setUpChoices() {
        var choices = Object.keys(this.props.question);
        choices.shift();
        this.setState({choices: choices});
    },
    addChoiceButton(choice, i){
        return(
            <button key={i}>
                {choice}: {this.props.question[choice]}
            </button>
        );
    },
    render() {
        return(
            <section>
                <h3>{this.props.question.q}</h3>
                <div>
                    {this.state.choices.map(this.addChoiceButton)}
                </div>
            </section>
        )
    }
})

module.exports = Ask;