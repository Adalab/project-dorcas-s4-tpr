import React, { Component } from 'react';


class Button extends Component {
  render() {
    const{
      buttonContent,
      onClick
    } = this.props;

    const{
      buttonClass,
      textButton
    } = buttonContent;
    console.log('BUTTONNNN', buttonContent);
    return (
      <button 
        type="submit"
        className={buttonClass}
        onClick={onClick}
      >
        {textButton}
      </button>
    );
  }
}

export default Button;
