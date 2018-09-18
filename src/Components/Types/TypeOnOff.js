import React, { Component, Fragment } from 'react';


class TypeOnOff extends Component {
    render() {
        const {
            labelTypeOnOff,
            handleTypeOnOff,
            checked,
        } = this.props;
        const {labelContent,id} = labelTypeOnOff;

        return  (
                <Fragment>
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
                </Fragment>
                )
            }
}

export default TypeOnOff;