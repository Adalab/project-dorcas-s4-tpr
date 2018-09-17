import React, { Component } from 'react';
import App from './App';
import {Route} from 'react-router';

class Base extends Component {
    render() { 
        return( 
            <Route 
            path='/step/:stepNumber/:id'
            render={props =>
            <App 
                id={props.match.params.id}
            />
        }  
    />); 
    }
}
 
export default Base;