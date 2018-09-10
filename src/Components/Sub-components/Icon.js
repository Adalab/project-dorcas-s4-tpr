import React, { Component,Fragment } from 'react';

class Icon extends Component {
    render() {
        console.log('props ICON',this.props);
        const {
            
            title,
            className,
            changingStep,
            currentStep,
            handleUpdateNavigation
        } = this.props;

        const{
            stepNumber,
            active,
            completed
        } = changingStep;

        let stepState;
        if (stepNumber === currentStep){
            stepState = 'stepActive';
            // handleUpdateNavigation ();
        } else {
            stepState = 'stepInactive';
        }
            return(
                <Fragment>
                    <span className={stepState}>
                        {changingStep.stepNumber}
                    </span>
                    <p>{title}</p>
                </Fragment>       
            )
    }
}

export default Icon;