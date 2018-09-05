import React, { Component } from 'react';
import IconOn from './IconOn';
import IconOff from './IconOff';

class Icon extends Component {
    render() {
        console.log('AQUIIIII',this.props);
        const {state} = this.props;
        if(state === 'active'){
            return <IconOn/>
        } else if(state === ''){
            return <IconOff/>
        }
    }
  }
  
  export default Icon;