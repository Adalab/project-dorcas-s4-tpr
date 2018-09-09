import React, { Component,Fragment } from 'react';
import IconOn from './IconOn';
import IconOff from './IconOff';

class Icon extends Component {
    render() {
        console.log('props ICON',this.props);
        const {
            active,
            title,
            className,
            changingStep
        } = this.props;
        if(active === true){
            // return <IconOn/>
            return(
                <Fragment>
                    <span className={className}>{changingStep.stepNumber}</span>
                    <p>{title}</p>
                </Fragment>
                
            )
        } else if(active === false){
            // return <IconOff/>
            return(
                <Fragment>
                    <span className={className}>{changingStep.stepNumber}</span>
                    <p>{title}</p>
                </Fragment>
            )
        }
    }
}

export default Icon;