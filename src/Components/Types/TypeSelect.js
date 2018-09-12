import React, { Component } from 'react';

class TypeSelect extends Component {
    render() {
        console.log ('typeselect', this.props)
        const {
            options
        } = this.props; 
        const {
            className
        } = this.props.classOfSelect;
        return (
             <select className={className}>
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