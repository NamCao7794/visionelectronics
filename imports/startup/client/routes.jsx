import React from 'react';
import {Router, Route, Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import Landing from "../../ui/pages/Landing";
import NotFound from "../../ui/pages/NotFound";

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);