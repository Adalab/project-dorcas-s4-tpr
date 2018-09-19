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

    static getDerivedStateFromProps(props) {
        console.log('IRENEE', props);
        return {
            data: {
                numberPassport: props.travelDocuments.passport[0].passportNumber,
                passCountryIssue: props.travelDocuments.passport[0].issueCountry,
                passIssueDate: props.travelDocuments.passport[0].issueDate,
                passExpDate: props.travelDocuments.passport[0].expiryDate,
                numberVisa: props.dataVisa.numberVisa,
                visaCountryIssue: props.dataVisa.issueCountry,
                visaCountryDestination: props.dataVisa.destinyCountry,
                visaIssueDate: props.dataVisa.issueDate,
                visaExpDate: props.dataVisa.expiryDate,
                numberId: props.travelDocuments.idCard[0].dniNumber,
                idIssueDate: props.travelDocuments.idCard[0].issueDate,
                idExpDate: props.travelDocuments.idCard[0].expiryDate,
                placeBirth: props.travelDocuments.idCard[0].placeOfBirth,
            }
        }
    }

    handleNextStepClass() {
        if (this.props.currentStep === 2) {
            return 'hidden'
        }
    }

    handlePassportInput(e) {
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            numberPassport: inputValue,
        }
        this.props.handleStep2(data);
    }

    handleCountryInput(e) {
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            passCountryIssue: inputValue,
        }
        this.props.handleStep2(data);
    }

    handlePassIssueDate(e){
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            passIssueDate: inputValue,
        }
        this.props.handleStep2(data);
    }

    handlePassExpDate(e){
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            passExpDate: inputValue,
        }
        this.props.handleStep2(data);
    }

    handleNumberInput(e) {
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            numberId: inputValue,
        }
        this.props.handleStep2(data);
    }
    
    handleIdIssueDate(e){
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            idIssueDate: inputValue,
        }
        this.props.handleStep2(data);
    }
    
    handleIdExpDate(e){
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            idExpDate: inputValue,
        }
        this.props.handleStep2(data);
    }

    handleBirthPlace(e) {
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            placeBirth: inputValue,
        }
        this.props.handleStep2(data)
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
        const data = {
            ...this.state.data,
            numberVisa: inputValue,
        }
        this.props.handleStep2(data)
    }

    handleVisaCountryInput(e) {
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            visaCountryIssue: inputValue,
        }
        this.props.handleStep2(data)
    }

    handleVisaCountryDestination(e) {
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            visaCountryDestination: inputValue,
        }
        this.props.handleStep2(data)
    }

    handleVisaIssueDate (e) {
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            visaIssueDate: inputValue,
        }
        this.props.handleStep2(data)
    }

    handleVisaExpDate (e) {
        const inputValue = e.target.value;
        const data = {
            ...this.state.data,
            visaExpDate: inputValue,
        }
        this.props.handleStep2(data)
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
            handleNextStep,
        } = this.props;

        const {
        numberPassport,
        passCountryIssue,
        passIssueDate,
        passExpDate,
        numberVisa,
        visaCountryIssue,
        visaCountryDestination,
        visaIssueDate,
        visaExpDate,
        numberId,
        idIssueDate,
        idExpDate,
        placeBirth
        }=this.state.data;

        const {
            buttonHidden,
        } = this.state;
        // const {
        //     destinyCountry,
        //     issueCountry,
        //     numberVisa,
        //     issueDate,
        //     expiryDate,
        // } = this.props.dataVisa;

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
                    <hr className='section-line'></hr>
                    <h2 id='passport' className='subtitles-step2'>
                        <FormattedMessage
                            id="Step2.passport"
                            defaultMessage="Passport"
                        />
                    </h2>

                    <TypeTextInput
                        onChange={this.handlePassportInput}
                        inputData={numPassportInput}
                        inputText={numberPassport}
                    />
                    <TypeTextInput
                        onChange={this.handleCountryInput}
                        inputData={countryIssueInput}
                        inputText={passCountryIssue}
                    />
                    <div className='verticalDisplay'>
                        <div className='position-label'>
                            <MaskedInput
                                className='control-label half-input issueDate'
                                id={passIssueDateCal.id}
                                value={passIssueDate}
                                onChange={this.handlePassIssueDate}
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            />
                            <label htmlFor={passIssueDateCal.id}
                                className={passIssueDate ? 'label-located' :'placeholder-label'}
                            >
                                {passIssueDateCal.labelContent}
                            </label>
                        </div>
                        <div className='position-label'>
                            <MaskedInput
                                className='control-label half-input'
                                value={passExpDate}
                                onChange={this.handlePassExpDate}
                                id={passExpDateCal.id}
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            />
                            <label htmlFor={passExpDateCal.id}
                                className={passExpDate ? 'label-located' :'placeholder-label'}
                            >
                                {passExpDateCal.labelContent}
                            </label>
                        </div>
                    </div>
                    <hr className='section-line'></hr>
                    <h2 id='visa' className='subtitles-step2'>
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
                                inputText={visaCountryIssue}
                            />
                           
                            <TypeSelect
                                options={visaDestinationSelect}
                                classOfSelect={classOfSelectVisaDestination}
                                onChange={this.handleVisaCountryDestination}
                                inputData={visaCountryDestinationInput}
                                inputText={visaCountryDestination}
                            />
                            <div className='verticalDisplay'>
                                <div className='position-label'>
                                    <MaskedInput
                                        className='control-label half-input issueDate'
                                        id={visaIssueDateCal.id}
                                        value={visaIssueDate}
                                        onChange={this.handleVisaIssueDate}
                                        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                    />
                                    <label htmlFor={visaIssueDateCal.id}
                                    className={visaIssueDate ? 'label-located' :'placeholder-label'}
                                    >
                                        {visaIssueDateCal.labelContent}
                                    </label>
                                </div>
                                <div className='position-label'>
                                    <MaskedInput
                                        className='control-label half-input'
                                        id={visaExpDateCal.id}
                                        value={visaExpDate}
                                        onChange={this.handleVisaExpDate}
                                        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                    />
                                    <label htmlFor={visaExpDateCal.id}
                                    className={visaExpDate ? 'label-located' :'placeholder-label'}
                                    >
                                        {visaExpDateCal.labelContent}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Visado hasta aquí */}
                    <hr className='section-line'></hr>
                    <h2 id='Id' className='subtitles-step2'>
                        <FormattedMessage
                            id="Step2.dniNie"
                            defaultMessage="Id"
                        />
                    </h2>
                    <TypeTextInput
                        onChange={this.handleNumberInput}
                        inputData={documentNumberInput}
                        inputText={numberId}
                    />
                    <div className='verticalDisplay'>
                        <div className='position-label'>
                            <MaskedInput
                                className='control-label half-input issueDate'
                                id={idIssueDateCal.id}
                                value={idIssueDate}
                                onChange={this.handleIdIssueDate}
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            />
                            <label htmlFor={idIssueDateCal.id}
                            className={idIssueDate ? 'label-located' :'placeholder-label'}                          
                            >
                                {idIssueDateCal.labelContent}
                            </label>
                        </div>
                        <div className='position-label'>
                            <MaskedInput
                                className='control-label half-input'
                                id={idExpDateCal.id}
                                value={idExpDate}
                                onChange={this.handleIdExpDate}
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            />
                            <label htmlFor={idExpDateCal.id}
                            className={idExpDate ? 'label-located' :'placeholder-label'}                              >
                                {idExpDateCal.labelContent}
                            </label>
                        </div>
                    </div>
                    <TypeTextInput
                        onChange={this.handleBirthPlace}
                        inputData={birthPlaceInput}
                        inputText={placeBirth}
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
                    handleNextStep={handleNextStep}
                />
            </div>
        );
    }
}


export default Step2;
