import React, { Component } from 'react';
import Title from '../Sub-components/Title';
import Navigation from '../Navigation';
import TypeEmailInput from '../Types/TypeEmailInput';
import TypePhoneInput from '../Types/TypePhoneInput';
import TypeTextInput from '../Types/TypeTextInput';
import TypeSelect from '../Types/TypeSelect';
import TypeOnOff from '../Types/TypeOnOff';
import { FormattedMessage } from 'react-intl';

const familyNumberInput = {
    labelContent: <FormattedMessage
        id="Step5.numberMembers"
        defaultMessage="Large family card number"
    />,
    id: 'familyNumber',
    name: 'familyNumber',
};

const emergencyContactInput = {
    labelContent: <FormattedMessage
        id="Step5.nameAndSurname"
        defaultMessage="Name and Surname"
    />,
    id: 'emergencyContactName',
    name: 'emergencyContactName',
};

const emailAddress = {
    labelContent: <FormattedMessage
        id="Step5.email"
        defaultMessage="Email"
    />,
    id: 'emergencyContactEmail',
    name: 'emergencyContactEmail',
    disabled: false,
};

const emergencyContactPhone = {
    labelContent: <FormattedMessage
        id="Step5.phoneNumber"
        defaultMessage="Phone number"
    />,
    id: 'emergencyContactPhone',
    name: 'emergencyContactPhone',
    required: true,
};
const localityOptions = {
    labelContent: <FormattedMessage
        id="Step5.locality"
        defaultMessage="Locality"
    />,
    id: 'Locality',
    name: 'Locality',
    required: true,
};

const regionOptions = [
    <FormattedMessage
        id="Step5.canaryIslands"
        defaultMessage="Canary Islands"
    />,
    <FormattedMessage
        id="Step5.balearicIslands"
        defaultMessage="Balearic Islands"
    />,
    'Ceuta',
    'Melilla',
];

const classOfSelect = {
    className: 'select-step5',
}

const largeFamily = {
    labelContent: <FormattedMessage
        id="Step5.numerousFamily"
        defaultMessage="Numerous Family"
    />,
    id: 'largeFamily',
    name: 'largeFamily',
    required: true,
};

const residentOutside = {
    labelContent: <FormattedMessage
        id="Step5.residentOutsidePeninsula"
        defaultMessage="Resident outside Iberian Peninsula"
    />,
    id: 'residentOutside',
    name: 'residentOutside',
    required: true,
};

class Step5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idRoute:'',
            currentStep: 5,
            checkedFamily: false,
            checkedResidency: false,
            data: {
                familyNumber: '',
                region: '',
                locality: '',
                firstNameEmergency: '',
                emailEmergency: '',
                phoneNumberEmergency: '',
                }
            }

        this.handleLocality = this.handleLocality.bind(this);
        this.handleEmergencyContact = this.handleEmergencyContact.bind(this);
        this.handleEmailAddress = this.handleEmailAddress.bind(this);
        this.handleTypeOnOff = this.handleTypeOnOff.bind(this);
        this.handleFamilyNumber = this.handleFamilyNumber.bind(this);
        this.handleRegion = this.handleRegion.bind(this);
        this.handleEmergencyPhone = this.handleEmergencyPhone.bind(this);
    }
    componentDidMount() {
        console.log('STEP5',this.props);
        const idRoute = this.props.match.params.id;
        this.props.handleCurrentStep(this.state.currentStep);
        this.props.handleIdRoute(idRoute);
        this.setState({
            idRoute: idRoute,
        })
    }
    static getDerivedStateFromProps(props) {
        return {
            data: {
                familyNumber:props.extras.familyNumber ,
                region: props.extras.islandResident.region,
                locality: props.extras.islandResident.locality,
                firstNameEmergency: props.extras.emergencyContact[0].firstName,
                emailEmergency: props.extras.emergencyContact[0].email,
                phoneNumberEmergency: props.extras.emergencyContact[0].phoneNumber,
                }
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.extras.familyNumber !== 0){
    //         this.setState({
    //             checkedFamily: true,
    //             checked: true,
    //         })
    //     } else if((nextProps.extras.familyNumber === 0)) {
    //         this.setState({
    //             checkedFamily: false,
    //             checked: false,
    //         })
    //     }
    //     if(nextProps.extras.islandResident.region !== ""){
    //         this.setState({
    //             checkedResidency: true,
    //         })
    //     } else {
    //         this.setState({
    //             checkedResidency: false,
    //         }) 
    //     }
    // }  

    

    handleFamilyNumber(e){
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            familyNumber: inputValue,
        }
        this.props.handleStep5(data);
    }
    

    handleRegion(e){
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            region: inputValue,
        }
        this.props.handleStep5(data);
    }

    handleLocality(e) {
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            locality: inputValue,
        }
        this.props.handleStep5(data);
    }

    handleEmergencyContact(e){
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            firstNameEmergency: inputValue,
        }
        this.props.handleStep5(data);
    }

    handleEmailAddress(e){
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            emailEmergency: inputValue,
        }
        this.props.handleStep5(data);
    }

    handleEmergencyPhone(e){
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            phoneNumberEmergency: inputValue,
        }
        this.props.handleStep5(data);
    }

    handleTypeOnOff(e){
        if (e.currentTarget.id=== 'largeFamily' ){
            this.setState({
                checkedFamily:  !this.state.checkedFamily,
            });
        } else if (e.currentTarget.id==='residentOutside'){
            this.setState({
                checkedResidency: !this.state.checkedResidency,
            } );
        }
    }
    
    
    render() {
       
        console.log('renderrrrstep5', this.state);
        const {
            familyNumber,
            region,
            locality,
            firstNameEmergency,
            emailEmergency,
            phoneNumberEmergency,
        } = this.state.data;


        const {
            title1,
            title2,
            title3,
            title4,
            title5,
            step5,
            currentStep,
            changingStep,
            handleNextStep,
        } = this.props;
        return (
            <div className='stepBox step5'>
                <Title
                    title={title5}
                    step={step5}
                />
                <form className='form step5-container'>
                    <div className="slider-container">
                        <TypeOnOff 
                            labelTypeOnOff={largeFamily} 
                            handleTypeOnOff={this.handleTypeOnOff}
                            checked={this.state.checkedFamily ? true : false}
                        />
                    </div>
                    <TypeTextInput
                        debug={true}
                        onChange={this.handleFamilyNumber}
                        inputData={familyNumberInput}
                        inputText={familyNumber}
                        toggleClass={this.state.checkedFamily ? 'input-numerous-family' : 'hidden'}
                    />
                    <div className="slider-container slider-residency">
                        <TypeOnOff 
                        labelTypeOnOff={residentOutside} 
                        handleTypeOnOff={this.handleTypeOnOff}
                        checked={this.state.checkedResidency ? true : false} 
                        />
                    </div>                    
                    <div className={this.state.checkedResidency ? 'select-residency' : 'hidden'}>
                        <TypeSelect 
                            options={regionOptions}
                            classOfSelect={classOfSelect}
                            onChange={this.handleRegion}
                        />
                        <TypeTextInput
                            onChange={this.handleLocality}
                            inputData={localityOptions}
                            inputText={locality}
                        />
                    </div>
                    <h2 className='subtitle-step5'>
                    <FormattedMessage
                        id="Step5.emergencyContact"
                        defaultMessage="Emergency contact"
                    />
                    </h2>
                    <div className='emergencyContact-container'>
                        <TypeTextInput
                            onChange={this.handleEmergencyContact}
                            inputData={emergencyContactInput}
                            inputText={firstNameEmergency}
                        />
                        <TypeEmailInput
                            onChange={this.handleEmailAddress}
                            emailAddress={emailAddress}
                            inputText={emailEmergency}
                        />
                        <TypePhoneInput
                            onChange={this.handleEmergencyPhone}
                            phoneNumber={emergencyContactPhone}
                            inputText={phoneNumberEmergency}
                        />
                    </div>
                </form>
                <Navigation
                    title1={title1}
                    title2={title2}
                    title3={title3}
                    title4={title4}
                    title5={title5}
                    currentStep={currentStep}
                    changingStep={changingStep}
                    idRoute={this.state.idRoute}
                    handleNextStep={handleNextStep}
                />
            </div>
        );
    }
}

export default Step5;