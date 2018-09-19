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
        this.props.handleIdRoute(idRoute);
        this.setState({
            idRoute: idRoute,
        })
        this.props.handleCurrentStep(this.state.currentStep);
       
    }

    handleNextStepClass(){
        if(this.props.currentStep===1){
            return 'hidden'
        }
    }

    static getDerivedStateFromProps(props) {
        
        console.log ('ampaaaaa', props);
        return {
            data: {
                surname: props.personalInformation.lastName,
                name: props.personalInformation.firstName,
                phoneNumber: props.contactInformation.phoneNumbers[0],
                lineNumber: props.contactInformation.phoneNumbers[1]
            }
        }
    }

    handleSurnameInput(e){
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            surname: inputValue,
        }
        this.props.handleStep1(data);
    }

    handleNameInput(e){
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            name: inputValue,
        }
        this.props.handleStep1(data);
    }

    handlePhoneNumber(e){
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            phoneNumber: inputValue,
        }
        
        this.props.handleStep1(data);
    }

    handleLineNumber(e){
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            lineNumber: inputValue,
        }
        this.props.handleStep1(data);
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
            name, 
            surname,
            phoneNumber,
            lineNumber,
        } = this.state.data;

        const {
            emails,
        } = this.props.contactInformation;

        


        console.log('firstname', this.state);
        return (
            <div className='stepBox step1'>
                <Title
                    title={title1}
                    step={step1}
                />
                <form className='form'>
                    <TypeTextInput
                        inputData={surnameInput}
                        inputText={surname} 
                        onChange={this.handleSurnameInput} 
                    />
                    <TypeTextInput 
                        inputData={nameInput}
                        inputText={name} 
                        onChange={this.handleNameInput}
                    />
                    <div className='phones'>
                        <TypePhoneInput 
                            onChange={this.handlePhoneNumber} 
                            phoneNumber={mobilePhoneNumber}
                            inputText={phoneNumber}
                        />
                        <TypePhoneInput 
                            onChange={this.handleLineNumber} 
                            phoneNumber={landLineNumber} 
                            inputText={lineNumber} //errata con la API, comentar con Triporate
                        />
                    </div>
                    <TypeEmailInput 
                    emailAddress={emailAddress} 
                    inputText={emails}/>
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