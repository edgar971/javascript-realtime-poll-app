import React from 'react'
import Display from './parts/Display'
import JoinSpeaker from './parts/JoinSpeaker'
import Attendance from './parts/Attendance'
import Questions from './parts/Questions'

class Speaker extends React.Component {
       render() {
           return (
               <section className="container">
                    <Display if={this.props.status === 'connected'}>
                        <Display if={this.props.member.name && this.props.member.type === 'speaker'}>
                            <Questions questions={this.props.questions}  emit={this.props.emit}/>
                            <Attendance audience={this.props.audience}/>
                        </Display>
                        <Display if={!this.props.member.name}>
                            <h2>Start Presentation</h2>
                            <JoinSpeaker emit={this.props.emit}/>
                        </Display>
                    </Display>
               </section>
           );
       }
    };


module.exports = Speaker;