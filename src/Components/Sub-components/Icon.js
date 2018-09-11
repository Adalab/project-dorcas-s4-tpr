import React, { Component,Fragment } from 'react';

class Icon extends Component {
    render() {
        // console.log('props ICON',this.props);
        const {
            title,
            changingStep,
            currentStep,
        } = this.props;

        const{
            stepNumber
        } = changingStep;

        let stepState;
        if (stepNumber === currentStep){
            stepState = 'stepActive';
        } else {
            stepState = 'stepInactive';
        }
            return(
                <Fragment>
                    <span className={stepState}>
                        {changingStep.stepNumber}
                    </span>
                    <p className='nav-label'>{title}</p>
                </Fragment>       
            )
    }
}

export default Icon;