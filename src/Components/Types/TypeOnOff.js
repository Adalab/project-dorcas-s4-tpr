import React, { Component } from 'react';


class TypeOnOff extends Component {
    render() {
        const {
            labelTypeOnOff,
            handleTypeOnOff,
        } = this.props;
        const {labelContent,id} = labelTypeOnOff;

        console.log('props TYpe ON OFF', this.props);
        return  (<div>
                    <label htmlFor={labelContent}>
                        <input
                        id= {id}
                        type="checkbox"
                        onChange={handleTypeOnOff}
                        />
                        {labelContent}
                    </label>
                </div>)
            }
}

  export default TypeOnOff;