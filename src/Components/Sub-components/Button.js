import React, { Component } from 'react';


class Button extends Component {
  render() {
    const{
      buttonContent,
      onClick,
      currentStep,
    } = this.props;

    const{
      buttonClass,
      textButton,
      buttonClassHidden
    } = buttonContent;
    
    return (
      <button 
        type="submit"
        className={currentStep===1
                    ?buttonClassHidden
                    :buttonClass
                  }
        onClick={onClick}
      >
        {textButton}
      </button>
    );
  }
}

export default Button;
