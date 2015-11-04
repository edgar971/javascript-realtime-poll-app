/**
 * Created by edgar971 on 11/3/15.
 */
var React = require('react');

var Header = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    getDefaultProps() {
        return {
            status: 'disconnected'
        }
    },
    render() {
        return(
            <header>
                <nav>
                    <div className="nav-wrapper">
                        <div className="container">
                        <a href="#" className="brand-logo">{this.props.title}</a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="mobile.html"><i className="material-icons">{(this.props.status === 'disconnected') ? "signal_wifi_off" : "wifi_tethering"}</i></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
});

module.exports = Header;