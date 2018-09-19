import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { title, step } = this.props;
    return (
      <div className='titles-container'>
        <h2 className='number-step'>{step}</h2>
        <h1 className='title-step'>{title}</h1>
      </div>
    );
  }
}

export default Title;