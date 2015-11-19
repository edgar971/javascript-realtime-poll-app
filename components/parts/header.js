/**
 * Created by edgar971 on 11/3/15.
 */
import React from 'react'

class Header extends React.Component {

    render() {
        return(
            <header>
                <nav>
                    <div className="nav-wrapper">
                        <div className="container">
                        <a href="#" className="brand-logo">{this.props.title} | {this.props.speaker}</a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="mobile.html"><i className="material-icons">{(this.props.status === 'disconnected') ? "signal_wifi_off" : "wifi_tethering"}</i></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
};
Header.propTypes = {
    title: React.PropTypes.string.isRequired
};
Header.getDefaultProps = {
    status: 'disconnected'
};
module.exports = Header;