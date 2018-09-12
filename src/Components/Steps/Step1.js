import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Title from '../Sub-components/Title';
import Navigation from '../Navigation';
import TypeEmailInput from '../Types/TypeEmailInput';
import TypePhoneInput from '../Types/TypePhoneInput';
import TypeTextInput from '../Types/TypeTextInput';

const surnameInput = {
    labelContent: <FormattedMessage
        id="Step1.userSurname"
        defaultMessage="Surname"
    />,
    id: 'surname',
    name: 'surname'
};

const nameInput = {
    labelContent: <FormattedMessage
        id="Step1.userName"
        defaultMessage="Name"
    />,
    id: 'name',
    name: 'name'
};

const emailAdress = {
    labelContent: <FormattedMessage
        id="Step1.email"
        defaultMessage="Email"
    />,
    id: 'email',
    name: 'email',
    disabled: true
};

const mobilePhoneNumber = {
    labelContent: <FormattedMessage
        id="Step1.mobilePhone"
        defaultMessage="Mobile Phone"
    />,
    id: 'mobilePhone',
    name: 'mobilePhone',
    required: true
};

const landLineNumber = {
    labelContent: <FormattedMessage
        id="Step1.landLinePhoneNumber"
        defaultMessage="Landline phone number"
    />,
    id: 'landLinePhone',
    name: 'landLinePhone',
    required: false
};


class Step1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentStep: 1,
            data: {
                surname:"",
                name:"",
                phoneNumber:"",
                lineNumber:""
            }
        }

        this.handleSurnameInput = this.handleSurnameInput.bind(this)
        this.handleNameInput = this.handleNameInput.bind(this)
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this)
        this.handleLineNumber = this.handleLineNumber.bind(this)
    }
    componentDidMount(){
        this.props.handleCurrentStep(this.state.currentStep);
    }
    // componentWillUpdate(){
         
    //     const { 
    //         lastName
    //         }= this.props.dataStep1;
    //         console.log('locura', lastName);
    //         if (lastName !== 'undefined'){
    //             this.setState ({
    //                 data: {
    //                     ...this.state.data,
    //                     surname: lastName
    //                 }
    //             })
    //         }
    // }
    
    handleNextStepClass(){
        if(this.props.currentStep===1){
            return 'hidden'
        }
    }

    handleSurnameInput(e){
        const inputValue = e.target.value
        this.setState({
            data: {
                ...this.state.data,
                surname: inputValue
            }
        }, ()=>(this.props.handleStep1(this.state.data)));   
    }

    handleNameInput(e){
        const inputValue = e.target.value
        this.setState({
            data: {
                ...this.state.data,
                name: inputValue
            }
        }, ()=>(this.props.handleStep1(this.state.data)));  
    }

    handlePhoneNumber(e){
        const inputValue = e.target.value
        this.setState({
            data: {
                ...this.state.data,
                phoneNumber: inputValue
            }
        }, ()=>(this.props.handleStep1(this.state.data))); 
    }

    handleLineNumber(e){
        const inputValue = e.target.value
        this.setState({
            data: {
                ...this.state.data,
                lineNumber: inputValue
            }
        }, ()=>(this.props.handleStep1(this.state.data))); 
    }

    render() {
        console.log('props STEP1', this.props);
        const {
            title1,
            title2,
            title3,
            title4,
            title5,
            step1,
            currentStep,
            changingStep,
            dataStep1,
            
        } = this.props;
        const {
            firstName, 
            lastName,
        } = this.props.personalInformation;

        // const {
        //     emails,
        //     phoneNumbers
        // } = this.props.contactInformation;

        console.log('lastname', this.props.contactInformation);
        return (
            <div className='stepBox step1'>
                <Title
                    title={title1}
                    step={step1}
                />
                <form className='form'>
                    <TypeTextInput
                        inputData={surnameInput}
                        inputText={lastName} 
                        onChange={this.handleSurnameInput} 
                    />
                    <TypeTextInput 
                        inputData={nameInput}
                        inputText={firstName} 
                        onChange={this.handleNameInput}
                    />
                    <div className='phones'>
                        <TypePhoneInput 
                            onChange={this.handlePhoneNumber} 
                            phoneNumber={mobilePhoneNumber} 
                        />
                        <TypePhoneInput 
                            onChange={this.handleLineNumber} 
                            phoneNumber={landLineNumber} 
                        />
                    </div>
                    <TypeEmailInput emailAdress={emailAdress} />
                </form>
                <Navigation
                    title1={title1}
                    title2={title2}
                    title3={title3}
                    title4={title4}
                    title5={title5}
                    currentStep={currentStep}
                    changingStep={changingStep}
                    handleNextStepClass={this.handleNextStepClass()}
                />
            </div>
        );
    }
}

export default Step1;