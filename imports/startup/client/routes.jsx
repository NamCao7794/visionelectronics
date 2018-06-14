import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Router, Route, Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import Landing from "../../ui/pages/Landing";
import NotFound from "../../ui/pages/NotFound";
import Login from "../../ui/pages/Login";
import Register from "../../ui/pages/Register";
import ForgotPassword from "../../ui/pages/ForgotPassword";
import ClientDashboard from "../../ui/pages/ClientDashboard";

const browserHistory = createBrowserHistory();
const unauthenticatedPages = ['/', '/login', '/signup', '/forgot-password'];
const authenticatedPages = ['/dashboard'];

const publicPage = function () {
    if (Meteor.userId()) {
        history.replace('/link');
    }
};

const privatePage = function () {
    if (!Meteor.userId()) {
        history.replace('/');
    }
};

export const onAuthChange = function (authenticated) {
    const path = browserHistory.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(path);
    const isAuthenticatedPage = authenticatedPages.includes(path);
    if (authenticated && isUnauthenticatedPage) {
        browserHistory.replace('/dashboard');
    } else if (!authenticated && isAuthenticatedPage) {
        browserHistory.replace('/');
    }
};

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Landing} onEnter={publicPage}/>
            <Route exact path="/login" component={Login} onEnter={publicPage}/>
            <Route exact path="/register" component={Register} onEnter={publicPage}/>
            <Route exact path="/forgot-password" component={ForgotPassword} onEnter={publicPage}/>
            <Route exact path="/dashboard" component={ClientDashboard} onEnter={privatePage}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);