import React, { Component, Fragment } from 'react';

class TypeSelect extends Component {
    render() {
        const {
          labelContent,  
          id,
          name,
        } = this.props.inputText;  
        return (
             <select>
                <option>Selecciona lugar de residencia</option>
            </select>
        );
    }
}
 
export default TypeSelect;