var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    Page404;

Page404 = React.createClass({
    render() {
        return (
            <div>
                <h2>Whoops...</h2>
                <p>Page not found.</p>
                <p>Were you looking for:</p>
                <Link to="/">Join Audience</Link>
                <Link to="/speaker">Start Presentation</Link>
                <Link to="/board">View the Board</Link>
            </div>
        );
    }
});

module.exports = Page404;