import React, { Component } from 'react';
import App from './App';
import {Route, Switch, Redirect} from 'react-router';
import ErrorPage from './ErrorPage';

class Base extends Component {
    render() { 
        return( 
            <Switch>
            <Route
            exact
            path='/'
            render={props => (<Redirect to={`/step/
            ${props.match.params.id===undefined?'404':'1'}`}/>)}
            />
            <Route 
            path='/step/:stepNumber/:id'
            render={props =>
                <App 
                    id={props.match.params.id}
                /> 
                }         
            />
            <Route 
                exact path='/step/404'
                    render={props => 
                        <ErrorPage />
                }
             />       
    </Switch>);
    }
}
 
export default Base;