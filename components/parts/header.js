/**
 * Created by edgar971 on 11/3/15.
 */
var React = require('react');

var Header = React.createClass({
    render() {
        return(
            <header>
                <nav>
                    <div className="nav-wrapper">
                        <div className="container">
                        <a href="#" className="brand-logo">Logo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
});

module.exports = Header;