import React, { Component } from 'react';

class Title extends Component {
    render() {
        console.log('props TITLE', this.props);
        const {title, step} = this.props;
      return (
        <div>
            <h2>{step}</h2>
            <h1>{title}</h1>
        </div>
      );
    }
  }
  
  export default Title;