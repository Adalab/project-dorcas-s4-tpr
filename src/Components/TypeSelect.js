import React, { Component, Fragment } from 'react';

class TypeSelect extends Component {
    render() {
        const {
          options
        } = this.props.inputText;  

        return (
            <select>
                {options.map((option , index) =>
                    {
                    return (

                     <option>{option}</option>
                        
                      );})
                
                }
            </select>
        );
    }
}
 
export default TypeSelect;