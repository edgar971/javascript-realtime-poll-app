/**
 * Created by edgar971 on 11/3/15.
 */
var React = require('react'),
    APP = require('./components/APP'),
    ReactDOM = require('react-dom'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    Audience = require('./components/Audience'),
    Speaker = require('./components/Speaker'),
    Board = require('./components/Board'),
    Page404 = require('./components/Page404'),
    routes;


routes = (
    <Route handler={APP}>
        <DefaultRoute handler={Audience}/>
        <Route name="speaker" path="speaker" handler={Speaker}></Route>
        <Route name="board" path="board" handler={Board}></Route>
        <NotFoundRoute handler={Page404}/>
    </Route>
);

Router.run(routes, function(Handler){
    ReactDOM.render(<Handler />, document.getElementById('react-container'));
});
