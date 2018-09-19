import React, { Component } from 'react';


class TypeOnOff extends Component {
    render() {
        const {
            labelTypeOnOff,
            handleTypeOnOff,
            checked,
        } = this.props;
        const { labelContent, id } = labelTypeOnOff;

        return (
            <div className='position-switch'>
                <div className='lonely-switch'>
                    <label htmlFor={id} className="switch">
                        <input
                            id={id}
                            type="checkbox"
                            onChange={handleTypeOnOff}
                            checked={checked}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
                <span className="label-switch">{labelContent}</span>
            </div>
        )
    }
}

export default TypeOnOff;