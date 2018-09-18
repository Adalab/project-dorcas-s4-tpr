import React, { Component } from 'react';
import Title from '../Sub-components/Title';
import Button from '../Sub-components/Button';
import Navigation from '../Navigation';
import { FormattedMessage } from 'react-intl';
import TypeTextInput from '../Types/TypeTextInput';
import TypeSelect from '../Types/TypeSelect';
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
    labelContent: <FormattedMessage
        id="Step2.userVisaCountryIssue"
        defaultMessage="Country of issue"
    />,
    id: 'visaCountryIssue',
    name: 'visaCountryIssue',
};

const visaCountryDestinationInput = {
    labelContent: <FormattedMessage
        id="Step2.userVisaCountryDestination"
        defaultMessage="Country of destination"
    />,
    id: 'visaCountryDestination',
    name: 'visaCountryDestination',
};

const numVisaInput = {
    labelContent: <FormattedMessage
        id="Step2.userVisaNumber"
        defaultMessage="Visa number"
    />,
    id: 'numVisa',
    name: 'numVisa',
    classHalfInput: 'half-input',
};

const visaIssueDateCal = {
    labelContent: <FormattedMessage
        id="Step2.userVisaDateIssue"
        defaultMessage="Date of issue"
    />,
    id: "visaIssueDate",
};

const visaExpDateCal = {
    labelContent: <FormattedMessage
        id="Step2.userVisaExpirationDate"
        defaultMessage="Expiration date"
    />,
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

const visaIssueSelect = [
    <FormattedMessage
        id="Step2.Spain"
        defaultMessage="Spain"
    />,
    <FormattedMessage
        id="Step2.USA"
        defaultMessage="USA"
    />,
    <FormattedMessage
        id="Step2.Germany"
        defaultMessage="Germany"
    />,
    <FormattedMessage
        id="Step2.Mexico"
        defaultMessage="Mexico"
    />,
    "China",
];

const visaDestinationSelect = [
    <FormattedMessage
        id="Step2.Spain"
        defaultMessage="Spain"
    />,
    <FormattedMessage
        id="Step2.USA"
        defaultMessage="USA"
    />,
    <FormattedMessage
        id="Step2.Germany"
        defaultMessage="Germany"
    />,
    <FormattedMessage
        id="Step2.Mexico"
        defaultMessage="Mexico"
    />,
    "China",
];

const visaTypes = [
    <FormattedMessage
        id="Step2.visaType"
        defaultMessage="VisaType"
    />,
];

const classOfSelect = {
    className: 'select-step2-visaType'
}

const classOfSelectVisaIssue = {
    className: 'select-step2-visaCountries'
}

const classOfSelectVisaDestination = {
    className: 'select-step2-visaCountries'
}

class Step2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idRoute: '',
            buttonHidden: false,
            currentStep: 2,
            data: {
                numberPassport: '',
                passCountryIssue: '',
                passIssueDate: '',
                passExpDate: '',
                numberVisa: '',
                visaCountryIssue: '',
                visaCountryDestination: '',
                visaIssueDate: '',
                visaExpDate: '',
                numberId: "",
                idIssueDate: '',
                idExpDate: '',
                placeBirth: '',
            }
        }

        this.handlePassportInput = this.handlePassportInput.bind(this);
        this.handleCountryInput = this.handleCountryInput.bind(this);
        this.handleVisaInput = this.handleVisaInput.bind(this);
        this.handleVisaCountryInput = this.handleVisaCountryInput.bind(this);
        this.handleVisaCountryDestination = this.handleVisaCountryDestination.bind(this);
        this.handleBirthPlace = this.handleBirthPlace.bind(this);
        this.handleNumberInput = this.handleNumberInput.bind(this);
        this.handlePassIssueDate = this.handlePassIssueDate.bind(this);
        this.handlePassExpDate = this.handlePassExpDate.bind(this);
        this.handleVisaIssueDate = this.handleVisaIssueDate.bind(this);
        this.handleVisaExpDate = this.handleVisaExpDate.bind(this);
        this.handleIdIssueDate = this.handleIdIssueDate.bind(this);
        this.handleIdExpDate = this.handleIdExpDate.bind(this);
        this.handleVisaButton = this.handleVisaButton.bind(this);
    }
    componentDidMount() {
        const idRoute = this.props.match.params.id;
        this.props.handleCurrentStep(this.state.currentStep);
        this.props.handleIdRoute(idRoute);
        this.setState({
            idRoute: idRoute,
        })
    }

    handleNextStepClass() {
        if (this.props.currentStep === 2) {
            return 'hidden'
        }
    }

    handlePassportInput(e) {
        const inputValue = e.target.value;
        this.setState({
            data: {
                numberPassport: inputValue,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: this.props.dataVisa.numberVisa,
                visaCountryIssue: this.props.dataVisa.issueCountry,
                visaCountryDestination: this.props.dataVisa.destinyCountry,
                visaIssueDate: this.props.dataVisa.issueDate,
                visaExpDate: this.props.dataVisa.expiryDate,
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth: this.props.travelDocuments.idCard[0].placeOfBirth,
            }
        }, () => (this.props.handleStep2(this.state.data)));
    }

    handleCountryInput(e) {
        const inputValue = e.target.value;
        this.setState({
            data: {
                numberPassport: this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: inputValue,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: this.props.dataVisa.numberVisa,
                visaCountryIssue: this.props.dataVisa.issueCountry,
                visaCountryDestination: this.props.dataVisa.destinyCountry,
                visaIssueDate: this.props.dataVisa.issueDate,
                visaExpDate: this.props.dataVisa.expiryDate,
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth: this.props.travelDocuments.idCard[0].placeOfBirth,
            }
        }, () => (this.props.handleStep2(this.state.data)));
    }

    handlePassIssueDate(e){
        const date = e.target.value;
        this.setState({
            data: {
                numberPassport: this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: date,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: this.props.dataVisa.numberVisa,
                visaCountryIssue: this.props.dataVisa.issueCountry,
                visaCountryDestination: this.props.dataVisa.destinyCountry,
                visaIssueDate: this.props.dataVisa.issueDate,
                visaExpDate: this.props.dataVisa.expiryDate,
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth: this.props.travelDocuments.idCard[0].placeOfBirth,
            }
        }, () => (this.props.handleStep2(this.state.data)));
    }

    handlePassExpDate(e){
        const date = e.target.value;
        this.setState({
            data: {
                numberPassport: this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: date,
                numberVisa: this.props.dataVisa.numberVisa,
                visaCountryIssue: this.props.dataVisa.issueCountry,
                visaCountryDestination: this.props.dataVisa.destinyCountry,
                visaIssueDate: this.props.dataVisa.issueDate,
                visaExpDate: this.props.dataVisa.expiryDate,
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth: this.props.travelDocuments.idCard[0].placeOfBirth,
            }
        }, () => (this.props.handleStep2(this.state.data)));
    }

    handleNumberInput(e) {
        const inputValue = e.target.value;
        this.setState({
            data: {
                numberPassport: this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: this.props.dataVisa.numberVisa,
                visaCountryIssue: this.props.dataVisa.issueCountry,
                visaCountryDestination: this.props.dataVisa.destinyCountry,
                visaIssueDate: this.props.dataVisa.issueDate,
                visaExpDate: this.props.dataVisa.expiryDate,
                numberId: inputValue,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth: this.props.travelDocuments.idCard[0].placeOfBirth,
            }
        }, () => (this.props.handleStep2(this.state.data)));
    }
    
    handleIdIssueDate(e){
        const date = e.target.value;
        this.setState({
            data: {
                numberPassport: this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: this.props.dataVisa.numberVisa,
                visaCountryIssue: this.props.dataVisa.issueCountry,
                visaCountryDestination: this.props.dataVisa.destinyCountry,
                visaIssueDate: this.props.dataVisa.issueDate,
                visaExpDate: this.props.dataVisa.expiryDate,
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: date,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth: this.props.travelDocuments.idCard[0].placeOfBirth,
            }
        }, () => (this.props.handleStep2(this.state.data)));
    }
    
    handleIdExpDate(e){
        const date = e.target.value;
        this.setState({
            data: {
                numberPassport: this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: this.props.dataVisa.numberVisa,
                visaCountryIssue: this.props.dataVisa.issueCountry,
                visaCountryDestination: this.props.dataVisa.destinyCountry,
                visaIssueDate: this.props.dataVisa.issueDate,
                visaExpDate: this.props.dataVisa.expiryDate,
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: date,
                placeBirth: this.props.travelDocuments.idCard[0].placeOfBirth,
            }
        }, () => (this.props.handleStep2(this.state.data)));
    }

    handleBirthPlace(e) {
        const inputValue = e.target.value;
        this.setState({
            data: {
                numberPassport: this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: this.props.dataVisa.numberVisa,
                visaCountryIssue: this.props.dataVisa.issueCountry,
                visaCountryDestination: this.props.dataVisa.destinyCountry,
                visaIssueDate: this.props.dataVisa.issueDate,
                visaExpDate: this.props.dataVisa.expiryDate,
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth: inputValue,
            }
        }, () => (this.props.handleStep2(this.state.data)));
    }

    //Visa handles
    handleVisaButton(e) {
        e.preventDefault();
        if (this.state.buttonHidden === false) {
            visaButton.buttonClassHidden = 'hidden';
            this.setState({
                buttonHidden: true
            });
        }
    }

    handleVisaInput(e) {
        const inputValue = e.target.value;
        this.setState({
            data: {
                numberPassport: this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: inputValue,
                visaCountryIssue: this.props.dataVisa.issueCountry,
                visaCountryDestination: this.props.dataVisa.destinyCountry,
                visaIssueDate: this.props.dataVisa.issueDate,
                visaExpDate: this.props.dataVisa.expiryDate,
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth: this.props.travelDocuments.idCard[0].placeOfBirth,

            }
        }, () => (this.props.handleStep2(this.state.data)));
    }

    handleVisaCountryInput(e) {
        const inputValue = e.target.value;
        this.setState({
            data: {
                numberPassport: this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: this.props.dataVisa.numberVisa,
                visaCountryIssue: inputValue,
                visaCountryDestination: this.props.dataVisa.destinyCountry,
                visaIssueDate: this.props.dataVisa.issueDate,
                visaExpDate: this.props.dataVisa.expiryDate,
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth: this.props.travelDocuments.idCard[0].placeOfBirth,
            }
        }, () => (this.props.handleStep2(this.state.data)));
    }

    handleVisaCountryDestination(e) {
        const inputValue = e.target.value;
        this.setState({
            data: {
                numberPassport: this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: this.props.dataVisa.numberVisa,
                visaCountryIssue: this.props.dataVisa.issueCountry,
                visaCountryDestination: inputValue,
                visaIssueDate: this.props.dataVisa.issueDate,
                visaExpDate: this.props.dataVisa.expiryDate,
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth: this.props.travelDocuments.idCard[0].placeOfBirth,

            }
        }, () => (this.props.handleStep2(this.state.data)));
    }

    handleVisaIssueDate (e) {
        const date = e.target.value;
        this.setState({
            data: {
                numberPassport: this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: this.props.dataVisa.numberVisa,
                visaCountryIssue: this.props.dataVisa.issueCountry,
                visaCountryDestination: this.props.dataVisa.destinyCountry,
                visaIssueDate: date,
                visaExpDate: this.props.dataVisa.expiryDate,
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth: this.props.travelDocuments.idCard[0].placeOfBirth,
            }
        }, () => (this.props.handleStep2(this.state.data)));
    }

    handleVisaExpDate (e) {
        const date = e.target.value;
        this.setState({
            data: {
                numberPassport: this.props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: this.props.travelDocuments.passport[0].issueCountry,
                passIssueDate: this.props.travelDocuments.passport[0].issueDate,
                passExpDate: this.props.travelDocuments.passport[0].expiryDate,
                numberVisa: this.props.dataVisa.numberVisa,
                visaCountryIssue: this.props.dataVisa.issueCountry,
                visaCountryDestination: this.props.dataVisa.destinyCountry,
                visaIssueDate: this.props.dataVisa.issueDate,
                visaExpDate: date,
                numberId: this.props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: this.props.travelDocuments.idCard[0].issueDate,
                idExpDate: this.props.travelDocuments.idCard[0].expiryDate,
                placeBirth: this.props.travelDocuments.idCard[0].placeOfBirth,
            }
        }, () => (this.props.handleStep2(this.state.data)));
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

        const {
            buttonHidden,
        } = this.state;

        const { passport } = this.props.travelDocuments;
        const { idCard } = this.props.travelDocuments;
        const {
            destinyCountry,
            issueCountry,
            numberVisa,
            issueDate,
            expiryDate,
        } = this.props.dataVisa;

        let visaConteinerContent;
        if (buttonHidden === false) {
            visaConteinerContent = 'hidden';
            visaButton.buttonClass = 'visaButton-styles';
        } else {
            visaConteinerContent = 'visaButtonContent-container';
            visaButton.buttonClass = 'hidden';
        }
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
                        inputText={passport[0].passportNumber}
                    />
                    <TypeTextInput
                        onChange={this.handleCountryInput}
                        inputData={countryIssueInput}
                        inputText={passport[0].issueCountry}
                    />
                    <div className='verticalDisplay'>
                        <div className='position-label'>
                            <MaskedInput
                                className='control-label half-input issueDate'
                                id={passIssueDateCal.id}
                                value={passport[0].issueDate}
                                onChange={this.handlePassIssueDate}
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            />
                            <label htmlFor={passIssueDateCal.id}
                                className={passport[0].issueDate ? 'label-located' :'placeholder-label'}
                            >
                                {passIssueDateCal.labelContent}
                            </label>
                        </div>
                        <div className='position-label'>
                            <MaskedInput
                                className='control-label half-input'
                                value={passport[0].expiryDate}
                                onChange={this.handlePassExpDate}
                                id={passExpDateCal.id}
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            />
                            <label htmlFor={passExpDateCal.id}
                                className={passport[0].expiryDate ? 'label-located' :'placeholder-label'}
                            >
                                {passExpDateCal.labelContent}
                            </label>
                        </div>
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
                            buttonHidden={buttonHidden}
                        />
                        <div className={visaConteinerContent}>
                            <div className='typeNumberVisa'>
                                <TypeSelect
                                    options={visaTypes}
                                    classOfSelect={classOfSelect}
                                />
                                <TypeTextInput
                                    onChange={this.handleVisaInput}
                                    inputData={numVisaInput}
                                    inputText={numberVisa}
                                />
                            </div>
                            <TypeSelect
                                options={visaIssueSelect}
                                classOfSelect={classOfSelectVisaIssue}
                                onChange={this.handleVisaCountryInput}
                                inputData={visaCountryIssueInput}
                                inputText={issueCountry}
                            />
                           
                            <TypeSelect
                                options={visaDestinationSelect}
                                classOfSelect={classOfSelectVisaDestination}
                                onChange={this.handleVisaCountryDestination}
                                inputData={visaCountryDestinationInput}
                                inputText={destinyCountry}
                            />
                            <div className='verticalDisplay'>
                                <div className='position-label'>
                                    <MaskedInput
                                        className='control-label half-input issueDate'
                                        id={visaIssueDateCal.id}
                                        value={issueDate}
                                        onChange={this.handleVisaIssueDate}
                                        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                    />
                                    <label htmlFor={visaIssueDateCal.id}
                                    className={issueDate ? 'label-located' :'placeholder-label'}
                                    >
                                        {visaIssueDateCal.labelContent}
                                    </label>
                                </div>
                                <div className='position-label'>
                                    <MaskedInput
                                        className='control-label half-input'
                                        id={visaExpDateCal.id}
                                        value={expiryDate}
                                        onChange={this.handleVisaExpDate}
                                        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                    />
                                    <label htmlFor={visaExpDateCal.id}
                                    className={expiryDate ? 'label-located' :'placeholder-label'}
                                    >
                                        {visaExpDateCal.labelContent}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Visado hasta aquí */}
                    <h2 className='subtitles-step2'>
                        <FormattedMessage
                            id="Step2.dniNie"
                            defaultMessage="Id"
                        />
                    </h2>
                    <TypeTextInput
                        onChange={this.handleNumberInput}
                        inputData={documentNumberInput}
                        inputText={idCard[0].dniNumber}
                    />
                    <div className='verticalDisplay'>
                        <div className='position-label'>
                            <MaskedInput
                                className='control-label half-input issueDate'
                                id={idIssueDateCal.id}
                                value={idCard[0].issueDate}
                                onChange={this.handleIdIssueDate}
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            />
                            <label htmlFor={idIssueDateCal.id}
                            className={idCard[0].issueDate ? 'label-located' :'placeholder-label'}                          
                            >
                                {idIssueDateCal.labelContent}
                            </label>
                        </div>
                        <div className='position-label'>
                            <MaskedInput
                                className='control-label half-input'
                                id={idExpDateCal.id}
                                value={idCard[0].expiryDate}
                                onChange={this.handleIdExpDate}
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            />
                            <label htmlFor={idExpDateCal.id}
                            className={idCard[0].expiryDate ? 'label-located' :'placeholder-label'}                              >
                                {idExpDateCal.labelContent}
                            </label>
                        </div>
                    </div>
                    <TypeTextInput
                        onChange={this.handleBirthPlace}
                        inputData={birthPlaceInput}
                        inputText={idCard[0].placeOfBirth}
                    />
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
                    idRoute={this.state.idRoute}
                />
            </div>
        );
    }
}


export default Step2;
