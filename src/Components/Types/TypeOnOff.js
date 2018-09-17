import React, { Component } from 'react';


class TypeOnOff extends Component {
    render() {
        console.log(this.props);
        const {
            labelTypeOnOff,
            handleTypeOnOff,
            checked,
        } = this.props;
        const {labelContent,id} = labelTypeOnOff;

        console.log('props TYpe ON OFF', this.props);
        return  (
                <div className="slider-container">
                    <label htmlFor={id} className="switch">
                        <input
                        id= {id}
                        type="checkbox"
                        onChange={handleTypeOnOff}
                        checked={checked}
                        />
                        <span className="slider round"></span>
                    </label>
                    <span className="label-switch">{labelContent}</span>
                </div>
                )
            }
}

export default TypeOnOff;