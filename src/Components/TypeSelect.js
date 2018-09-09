import React, { Component } from 'react';

class TypeSelect extends Component {
    render() {
        console.log ('typeselect', this.props)
        const {
            options
        } = this.props;  
        return (
             <select>
                {
                    options.map((option, index) =>
                {return(
                     <option>{option}</option>
                        )  
                   })
                }
            </select>
        );
    }
}
 
export default TypeSelect;