/**
 * Created by edgar971 on 11/3/15.
 */
import React from 'react'
import APP from './components/APP'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import Audience from './components/Audience'
import Speaker from './components/Speaker'
import Board from './components/Board'
import Page404 from './components/Page404'

var { Route, DefaultRoute, NotFoundRoute} = Router;


var routes = (
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
