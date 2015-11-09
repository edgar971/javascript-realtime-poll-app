var React = require('react'),
    Ask;

Ask = React.createClass({
    getInitialState() {
        return {
            choices: [],
            answer: undefined
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
    select(choice) {
        console.log(this);
        this.setState({answer: choice});
        sessionStorage.answer = choice;
        this.props.emit('answer',{
            question: this.props.question,
            choice: choice
        });
    },
    addChoiceButton(choice, i){
        return(
            <button key={i} onClick={this.select.bind(null, choice)} className="waves-effect waves-light btn-large">
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