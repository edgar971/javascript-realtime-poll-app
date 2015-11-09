var React = require('react'),
    Questions;

Questions = React.createClass({
    askQuestion(question){
        this.props.emit('ask', question);
        console.log(question);
    },
    addQuestion(question,i) {
        return(
            <li key={i} className="collection-item"><div>{question.q}<a onClick={this.askQuestion.bind(null,question)} className="secondary-content"><i className="material-icons">question_answer</i></a></div></li>
        )
    },
    render(){
        return(
            <ul className="collection with-header">
                <li className="collection-header"><h4>Questions</h4></li>
                {this.props.questions.map(this.addQuestion)}
            </ul>
        )
    }
})

module.exports = Questions;