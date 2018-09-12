import React, { Component } from 'react';
import Title from '../Sub-components/Title';
import Button from '../Sub-components/Button';
import Navigation from '../Navigation';
import Calendar from '../Sub-components/Calendar';
import { FormattedMessage } from 'react-intl';
import TypeTextInput from '../Types/TypeTextInput';
import moment from 'moment';

let locale = window.navigator.userLanguage || window.navigator.language;
console.log(locale);

if (locale === "es-ES") {
    moment.locale('es', {
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'En_Feb_Mar_Abr_May_Jun_Jul_Ag_Sept_Oct_Nov_Dic'.split('_'),
        monthsParseExact: true,
        weekdays: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado_Domingo'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            L: 'DD/MM/YYYY',
        },
        week: {
            dow: 1
        }
    });
} else {
    moment.locale(locale);
}
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
    labelContent: '',
    id: 'vsetStateisaCountryIssue',
    name: 'visaCountryIssue',
};

const visaCountryDestinationInput = {
    labelContent: '',
    id: 'visaCountryDestination',
    name: 'visaCountryDestination',
};

const numVisaInput = {
    labelContent: '',
    id: 'numVisa',
    name: 'numVisa',
};

const visaIssueDateCal = {
    labelContent: '',
    id: "visaIssueDate",
};

const visaExpDateCal = {
    labelContent: '',
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
                numberPassport:"",
                passCountryIssue:"",
                passIssueDate: "",
                passExpDate: "",
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

    handlePassIssueDate(date){
        this.setState({
            data:{
                ...this.state.data,
                passIssueDate: date,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    handlePassExpDate(date){
        this.setState({
            data:{
                ...this.state.data,
                passExpDate: date,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }
    
    handleIdIssueDate(date){
        this.setState({
            data:{
                ...this.state.data,
                idIssueDate: date,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }
    
    handleIdExpDate(date){
        this.setState({
            data:{
                ...this.state.data,
                idExpDate: date,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    handlePassportInput(e) {
        const inputValue=e.target.value;
        this.setState({
            data:{
                ...this.state.data,
                numberPassport: inputValue,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    handleCountryInput(e) {
        const inputValue=e.target.value;
        this.setState({
            data:{
                ...this.state.data,
                passCountryIssue: inputValue,
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

    handleBirthPlace(e) {
        const inputValue=e.target.value;
        this.setState({
            data:{
                ...this.state.data,
                placeBirth: inputValue,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    handleNumberInput(e){
        const inputValue=e.target.value;
        this.setState({
            data:{
                ...this.state.data,
                numberId: inputValue,
            } 
        }, ()=>(this.props.handleStep2(this.state.data)));
    }

    render() {
        const {
            title1,
            title2,
            title3,
            title4,
            title5,
            step2,
            currentStep,
            changingStep,
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
                        inputText={numPassportInput} 
                    />
                    <TypeTextInput 
                        onChange={this.handleCountryInput} 
                        inputText={countryIssueInput} 
                    />
                    <div className='verticalDisplay'>
                        <Calendar
                            labelContent={passIssueDateCal.labelContent}
                            id={passIssueDateCal.id}
                            numberOfMonths={passIssueDateCal.numberOfMonths}
                            small={passIssueDateCal.small}
                            handleDate={this.handlePassIssueDate}
                        />
                        <Calendar
                            labelContent={passExpDateCal.labelContent}
                            id={passExpDateCal.id}
                            numberOfMonths={passExpDateCal.numberOfMonths}
                            small={passExpDateCal.small}
                            handleDate={this.handlePassExpDate}
                        />
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
                                inputText={numVisaInput} 
                            />
                            <TypeTextInput 
                                onChange={this.handleVisaCountryInput} 
                                inputText={visaCountryIssueInput} 
                            />
                            <TypeTextInput 
                                onChange={this.handleVisaCountryDestination} 
                                inputText={visaCountryDestinationInput} 
                            />
                            
                            <div className='verticalDisplay'>
                                <Calendar
                                    labelContent={visaIssueDateCal.labelContent}
                                    id={visaIssueDateCal.id}
                                    numberOfMonths={visaIssueDateCal.numberOfMonths}
                                    small={visaIssueDateCal.small}
                                    handleDate={this.handleVisaIssueDate}
                                />
                                <Calendar
                                    labelContent={visaExpDateCal.labelContent}
                                    id={visaExpDateCal.id}
                                    numberOfMonths={visaExpDateCal.numberOfMonths}
                                    small={visaExpDateCal.small}
                                    handleDate={this.handleVisaExpDate}
                                />
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
                            inputText={documentNumberInput} />
                    </div>
                    <div className='verticalDisplay'>
                        <Calendar
                            labelContent={idIssueDateCal.labelContent}
                            id={idIssueDateCal.id}
                            numberOfMonths={idIssueDateCal.numberOfMonths}
                            small={idIssueDateCal.small}
                            handleDate={this.handleIdIssueDate}
                        />
                        <Calendar
                            labelContent={idExpDateCal.labelContent}
                            id={idExpDateCal.id}
                            numberOfMonths={idExpDateCal.numberOfMonths}
                            small={idExpDateCal.small}
                            handleDate={this.handleIdExpDate}
                        />
                        <TypeTextInput
                            onChange={this.handleBirthPlace}
                            inputText={birthPlaceInput}
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
