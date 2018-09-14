import React, { Component } from 'react';
import Title from '../Sub-components/Title';
import Button from '../Sub-components/Button';
import Navigation from '../Navigation';
import { FormattedMessage } from 'react-intl';
import TypeTextInput from '../Types/TypeTextInput';
import MaskedInput from 'react-text-mask'; 

//País emisión pas
const countryIssueInput = {
    labelContent: <FormattedMessage
        id="Step2.userPassCountryIssue"
        defaultMessage="Country of issue"
    />,
    id: 'countryIssue',
    name: 'countryIssue'
};
//Lugar nac
const birthPlaceInput = {
    labelContent: <FormattedMessage
        id="Step2.userBirthPlace"
        defaultMessage="Place of birth"
    />,
    id: 'birthPlace',
    name: 'birthPlace'
};
//Num pas
const numPassportInput = {
    labelContent: <FormattedMessage
        id="Step2.userPassportNumber"
        defaultMessage="Passport number"
    />,
    id: 'numPassport',
    name: 'numPassport'
};
//Num doc
const documentNumberInput = {
    labelContent: <FormattedMessage
        id="Step2.userDocumentNumber"
        defaultMessage="Document number"
    />,
    id: 'documentNumber',
    name: 'documentNumber'
};
//Pasaporte emi
const passIssueDateCal = {
    labelContent: <FormattedMessage
        id="Step2.userPassDateIssue"
        defaultMessage="Date of issue"
    />,
    id: "passIssueDate",
};
//Pasaporte exp
const passExpDateCal = {
    labelContent: <FormattedMessage
                    id="Step2.userPassExpirationDate"
                    defaultMessage="Expiration date"
                />,
    id: "passExpirationDate",
};
//Id emi
const idIssueDateCal = {
    labelContent: <FormattedMessage
        id="Step2.userDocDateIssue"
        defaultMessage="Date of issue"
    />,
    id: "idIssueDate",
};
//Pasaporte o id ?exp
const idExpDateCal = {
    labelContent: <FormattedMessage
        id="Step2.userPassExpirationDate"
        defaultMessage="Expiration date"
    />,
    id: "expirationDate",
};
//Visado
const visaCountryIssueInput = {
    labelContent: 'AAA',
    id: 'vsetStateisaCountryIssue',
    name: 'visaCountryIssue',
};

const visaCountryDestinationInput = {
    labelContent: 'AAA',
    id: 'visaCountryDestination',
    name: 'visaCountryDestination',
};

const numVisaInput = {
    labelContent: 'AAA',
    id: 'numVisa',
    name: 'numVisa',
};

const visaIssueDateCal = {
    labelContent: 'AAA',
    id: "visaIssueDate",
};

const visaExpDateCal = {
    labelContent: 'AAA',
    id: "visaExpirationDate",
};

const visaButton = {
    textButton: <FormattedMessage
                    id="Step2.addVisaDetails"
                    defaultMessage="Add visa details"
                />,
    buttonClass: 'visaButton-styles',
    buttonClassHidden: 'hidden',
};

class Step2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonHidden: false,
            currentStep: 2,
            data:{
                numberPassport:'',
                passCountryIssue:'' ,
                passIssueDate: '',
                passExpDate: '',
                numberVisa: "",
                visaCountryIssue: "",
                visaCountryDestination: "",
                visaIssueDate: "",
                visaExpDate: "",
                typeId:"",
                numberId:"",
                idIssueDate: "",
                idExpDate: "",
                placeBirth:"",
            } 
        }
        
        this.handlePassportInput = this.handlePassportInput.bind(this);
        this.handleCountryInput = this.handleCountryInput.bind(this);
        this.handleVisaInput = this.handleVisaInput.bind(this);
        this.handleVisaCountryInput = this.handleVisaCountryInput.bind(this);
        this.handleVisaCountryDestination = this.handleVisaCountryDestination.bind(this);
        this.handleBirthPlace = this.handleBirthPlace.bind(this);
        this.handleNumberInput = this.handleNumberInput.bind(this);
        this.handlePassIssueDate=this.handlePassIssueDate.bind(this);
        this.handlePassExpDate = this.handlePassExpDate.bind(this);
        this.handleVisaIssueDate = this.handleVisaIssueDate.bind(this);
        this.handleVisaExpDate = this.handleVisaExpDate.bind(this);
        this.handleIdIssueDate = this.handleIdIssueDate.bind(this);
        this.handleIdExpDate = this.handleIdExpDate.bind(this);
        this.handleVisaButton = this.handleVisaButton.bind(this);
    }
    componentDidMount() {
        this.props.handleCurrentStep(this.state.currentStep);
    }

    handleNextStepClass() {
        if (this.props.currentStep === 2) {
            return 'hidden'
        }
    }

    handlePassportInput(e) {
        const inputValue = e.target.value;
        this.setState({
            data:{
                numberPassport:inputValue,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: '',
                visaCountryIssue: "",
                visaCountryDestination: "",
                visaIssueDate: "",
                visaExpDate: "",
                typeId: '',
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth:this.props.travelDocuments.idCard[0].placeOfBirth,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    handleCountryInput(e) {
        const inputValue=e.target.value;
        this.setState({
            data:{
                numberPassport:this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: inputValue,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: '',
                visaCountryIssue: "",
                visaCountryDestination: "",
                visaIssueDate: "",
                visaExpDate: "",
                typeId: '',
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth:this.props.travelDocuments.idCard[0].placeOfBirth,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    handlePassIssueDate(date){
        this.setState({
            data:{
                numberPassport:this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: date,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: '',
                visaCountryIssue: "",
                visaCountryDestination: "",
                visaIssueDate: "",
                visaExpDate: "",
                typeId: '',
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth:this.props.travelDocuments.idCard[0].placeOfBirth,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    handlePassExpDate(date){
        this.setState({
            data:{
                numberPassport:this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: date,
                numberVisa: '',
                visaCountryIssue: "",
                visaCountryDestination: "",
                visaIssueDate: "",
                visaExpDate: "",
                typeId: '',
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth:this.props.travelDocuments.idCard[0].placeOfBirth,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    handleNumberInput(e){
        const inputValue=e.target.value;
        this.setState({
            data:{
                numberPassport:this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: '',
                visaCountryIssue: "",
                visaCountryDestination: "",
                visaIssueDate: "",
                visaExpDate: "",
                typeId: '',
                numberId: inputValue,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth:this.props.travelDocuments.idCard[0].placeOfBirth,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }
    
    handleIdIssueDate(date){
        this.setState({
            data:{
                numberPassport:this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: '',
                visaCountryIssue: "",
                visaCountryDestination: "",
                visaIssueDate: "",
                visaExpDate: "",
                typeId: '',
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: date,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth:this.props.travelDocuments.idCard[0].placeOfBirth,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }
    
    handleIdExpDate(date){
        this.setState({
            data:{
                numberPassport:this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: '',
                visaCountryIssue: "",
                visaCountryDestination: "",
                visaIssueDate: "",
                visaExpDate: "",
                typeId: '',
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: date,
                placeBirth:this.props.travelDocuments.idCard[0].placeOfBirth,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    handleBirthPlace(e) {
        const inputValue=e.target.value;
        this.setState({
            data:{
                numberPassport:this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: '',
                visaCountryIssue: "",
                visaCountryDestination: "",
                visaIssueDate: "",
                visaExpDate: "",
                typeId: '',
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth:inputValue,
            }  
        }, ()=>(this.props.handleStep2(this.state.data)));
    }
    
    //Visa handles
    handleVisaButton (e) {
        e.preventDefault();
        console.log('clickando', visaButton.buttonClassHidden);
        if(this.state.buttonHidden === false){
            visaButton.buttonClassHidden='hidden';
            this.setState({
                buttonHidden: true
            });
        }
        console.log('ESTADOOOO', this.state);
    }

    handleVisaInput (e) {
        const inputValue=e.target.value;
        this.setState({
            data:{
                ...this.state.data,
                numberVisa: inputValue,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    handleVisaCountryInput (e) {
        const inputValue=e.target.value;
        this.setState({
            data:{
                ...this.state.data,
                visaCountryIssue: inputValue,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    handleVisaCountryDestination (e) {
        const inputValue=e.target.value;
        this.setState({
            data:{
                ...this.state.data,
                visaCountryDestination: inputValue,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    handleVisaIssueDate (date) {
        this.setState({
            data:{
                ...this.state.data,
                visaIssueDate: date,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    handleVisaExpDate (date) {
        this.setState({
            data:{
                ...this.state.data,
                visaExpDate: date,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    

    

    render() {
        console.log(this.props)
        const {
            title1,
            title2,
            title3,
            title4,
            title5,
            step2,
            currentStep,
            changingStep,
            travelDocuments
        } = this.props;

        const {buttonHidden} = this.state;

        let visaConteinerContent;
        if (buttonHidden===false){
            visaConteinerContent = 'hidden';
            visaButton.buttonClass = 'visaButton-styles';
        } else {
            visaConteinerContent = '';
            visaButton.buttonClass = 'hidden';
        }

        console.log('props STEP2', this.props);
        console.log('visaConteinerContent', visaConteinerContent);
        console.log('ESTADOOOO2000000000000000000000000000000', this.state);
        return (
            <div className='stepBox step2'>
                <Title
                    title={title2}
                    step={step2}
                />
                <form className='form'>

                    <h2 className='subtitles-step2'>
                        <FormattedMessage
                            id="Step2.passport"
                            defaultMessage="Passport"
                        />
                    </h2>

                    <TypeTextInput 
                        onChange={this.handlePassportInput}
                        inputData={numPassportInput} 
                        inputText={title1} 
                    />
                    <TypeTextInput 
                        onChange={this.handleCountryInput} 
                        inputData={countryIssueInput} 
                        inputText={this.props.travelDocuments.passport[0].passCountryIssue}
                    />
                    <div className='verticalDisplay'>
                        <MaskedInput
                            handleDate={this.handlePassIssueDate}
                            id={passIssueDateCal.id}
                            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                        />
                        <label htmlFor={passIssueDateCal.id}>{passIssueDateCal.labelContent}</label>
                        <MaskedInput
                            handleDate={this.handlePassExpDate}
                            id={passExpDateCal.id}
                            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                        />
                        <label htmlFor={passExpDateCal.id}>{passExpDateCal.labelContent}</label>
                    </div>
                    <h2 className='subtitles-step2'>
                    {/* Pasaporte hasta aquí */}
                    {/* Visado desde aqui */}
                        <FormattedMessage
                            id="Step2.visa"
                            defaultMessage="Visa (optional)"
                        />
                    </h2>
                    <div>
                        <Button
                            buttonContent={visaButton}
                            onClick={this.handleVisaButton}
                            buttonHidden = {buttonHidden}
                        />
                        <div className={visaConteinerContent}>
                            <TypeTextInput 
                                onChange={this.handleVisaInput}
                                inputData={numVisaInput}
                                inputText={this.state.data.numberVisa} 
                            />
                            <TypeTextInput 
                                onChange={this.handleVisaCountryInput} 
                                inputData={visaCountryIssueInput}
                                inputText={this.state.data.visaCountryIssue} 
                            />
                            <TypeTextInput 
                                onChange={this.handleVisaCountryDestination} 
                                inputData={visaCountryDestinationInput} 
                                inputText={this.state.data.visaCountryDestination}
                            />
                            
                            <div className='verticalDisplay'>
                                <MaskedInput
                                handleDate={this.handleVisaIssueDate}
                                id={visaIssueDateCal.id}
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            />
                            <label htmlFor={visaIssueDateCal.id}>{visaIssueDateCal.labelContent}</label>
                            <MaskedInput
                                handleDate={this.handleVisaExpDate}
                                id={visaExpDateCal.id}
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            />
                            <label htmlFor={visaExpDateCal.id}>{visaExpDateCal.labelContent}</label>
                            </div>
                        </div>
                    </div>
                    {/* Visado hasta aquí */}
                    <h2>
                        <FormattedMessage
                            id="Step2.dniNie"
                            defaultMessage="Id"
                        />
                    </h2>
                    <div className='verticalDisplay'>
                        <TypeTextInput
                            onChange={this.handleNumberInput}
                            inputData={documentNumberInput} />
                    </div>
                    <div className='verticalDisplay'>
                        <MaskedInput
                        handleDate={this.handleIdIssueDate}
                        id={idIssueDateCal.id}
                        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                    />
                    <label htmlFor={idIssueDateCal.id}>{idIssueDateCal.labelContent}</label>
                    <MaskedInput
                        handleDate={this.handleIdExpDate}
                        id={idExpDateCal.id}
                        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                    />
                    <label htmlFor={idExpDateCal.id}>{idExpDateCal.labelContent}</label>
                        <TypeTextInput
                            onChange={this.handleBirthPlace}
                            inputData={birthPlaceInput}
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
                    handleNextStepClass={this.handleNextStepClass()}
                />
            </div>
        );
    }
}


export default Step2;
