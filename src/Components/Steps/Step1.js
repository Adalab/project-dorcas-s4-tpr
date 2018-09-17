import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Title from '../Sub-components/Title';
import Navigation from '../Navigation';
import TypeEmailInput from '../Types/TypeEmailInput';
import TypePhoneInput from '../Types/TypePhoneInput';
import TypeTextInput from '../Types/TypeTextInput';


let surnameInput = {
    labelContent: <FormattedMessage
        id="Step1.userSurname"
        defaultMessage="Surname"
    />,
    id: 'surname',
    name: 'surname',
    className: ''
};

const nameInput = {
    labelContent: <FormattedMessage
        id="Step1.userName"
        defaultMessage="Name"
    />,
    id: 'name',
    name: 'name',
};

const emailAddress = {
    labelContent: <FormattedMessage
        id="Step1.email"
        defaultMessage="Email"
    />,
    id: 'email',
    name: 'email',
    disabled: true,
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
            idRoute:'',
            currentStep: 1,
            data: {
                surname: '',
                name:'',
                phoneNumber:'',
                lineNumber:''
            }
        }

        this.handleSurnameInput = this.handleSurnameInput.bind(this)
        this.handleNameInput = this.handleNameInput.bind(this)
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this)
        this.handleLineNumber = this.handleLineNumber.bind(this)
    }
    componentDidMount(){
        const idRoute = this.props.match.params.id;
        console.log(this.props.match.params.id);
        this.props.handleCurrentStep(this.state.currentStep);
        this.props.handleIdRoute(idRoute);
        this.setState({
            idRoute: idRoute,
        })
    }

    handleNextStepClass(){
        if(this.props.currentStep===1){
            return 'hidden'
        }
    }

    handleSurnameInput(e){
        console.log('chula', this.props);
        const inputValue = e.target.value;
        
        this.setState({
            data: {
                surname: inputValue,
                name:this.props.personalInformation.firstName,
                phoneNumber:this.props.contactInformation.phoneNumbers[0],
                lineNumber:this.props.contactInformation.phoneNumbers[1]
            }
        }, ()=>(this.props.handleStep1(this.state.data)));   
    }

    handleNameInput(e){
        const inputValue = e.target.value
        this.setState({
            data: {
                surname: this.props.personalInformation.lastName,
                name:inputValue,
                phoneNumber:this.props.contactInformation.phoneNumbers[0],
                lineNumber:this.props.contactInformation.phoneNumbers[1]
            }
        }, ()=>(this.props.handleStep1(this.state.data)));  
    }

    handlePhoneNumber(e){
        const inputValue = e.target.value
        this.setState({
            data: {
                surname: this.props.personalInformation.lastName,
                name: this.props.personalInformation.firstName,
                phoneNumber:inputValue,
                lineNumber:this.props.contactInformation.phoneNumbers[1]
            }
        }, ()=>(this.props.handleStep1(this.state.data))); 
    }

    handleLineNumber(e){
        const inputValue = e.target.value
        this.setState({
            data: {
                surname: this.props.personalInformation.lastName,
                name: this.props.personalInformation.firstName,
                phoneNumber:this.props.contactInformation.phoneNumbers[0],
                lineNumber:inputValue
            }
        }, ()=>(this.props.handleStep1(this.state.data))); 
    }
    handleFirstPage(){
        console.log('HOLIIIIIIIIIIIIIIIIIII')
    }

    render() {
        const {
            title1,
            title2,
            title3,
            title4,
            title5,
            step1,
            currentStep,
            changingStep,
            handleFirstPage,
            handleNextStep
        } = this.props;
        const {
            firstName, 
            lastName,
        } = this.props.personalInformation;

        const {
            emails,
            phoneNumbers
        } = this.props.contactInformation;

        console.log('ALEx', this.props.contactInformation);
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
                            inputText={phoneNumbers[0]}
                        />
                        <TypePhoneInput 
                            onChange={this.handleLineNumber} 
                            phoneNumber={landLineNumber} 
                            inputText={phoneNumbers[1]} //errata con la API, comentar con Triporate
                        />
                    </div>
                    <TypeEmailInput emailAddress={emailAddress} inputText={emails[0]}/>
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
                    handleFirstPage={handleFirstPage}
                    idRoute={this.state.idRoute}
                    handleNextStep={handleNextStep}
                />
            </div>
        );
    }
}

export default Step1;