import React, { Component } from 'react';
import App from './App';
import { Route, Switch, Redirect } from 'react-router';

class Base extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path='/'
                    render={props => (<Redirect to={`/step/1/${props.match.params.id}`} />)}
                />
                <Route
                    path='/step/:stepNumber/:id'
                    render={props =>
                        <App
                            id={props.match.params.id}
                        />
                    }
                />
            </Switch>);
    }
}

export default Base;