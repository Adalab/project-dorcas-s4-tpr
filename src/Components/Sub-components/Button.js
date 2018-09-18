import React, { Component } from 'react';
import fontAwesome from '@fortawesome/fontawesome-free/css/all.css';


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
        <i class="fas fa-arrow-left"></i>
        <i class="fas fa-angle-left"></i>
        {textButton}
        <i class="fas fa-arrow-right"></i>
        <i class="fas fa-angle-right"></i>
        

      </button>
    );
  }
}

export default Button;
