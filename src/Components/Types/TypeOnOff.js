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
        return  (<div>
                    <label htmlFor={labelContent} className="switch">
                        <input
                        id= {id}
                        type="checkbox"
                        onChange={handleTypeOnOff}
                        checked={checked}
                        />
                        <span className="slider round"></span>
                        {labelContent}
                    </label>
                </div>)
            }
}

  export default TypeOnOff;