import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

class Navigation extends Component {
    render() {
        console.log(this.props);
        const {dot1, dot2, dot3, dot4, dot5, previousStep, followingStep, handleClickPreviousStep, handleClickFollowingStep} = this.props;
      return (
        <div>
            <h2>Navigation</h2>
            <Icon state={dot1}/>
            <Icon state={dot2}/>
            <Icon state={dot3}/>
            <Icon state={dot4}/>
            <Icon state={dot5}/>
            <Link to={`/step/${previousStep}`}><button onClick={handleClickPreviousStep}>Anterior</button></Link>
            <Link to={`/step/${followingStep}`}><button onClick={handleClickFollowingStep}>Siguiente</button></Link>
        </div>
      );
    }
  }
  
  export default Navigation;