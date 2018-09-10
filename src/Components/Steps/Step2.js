import React, { Component } from 'react';
import Title from '../Sub-components/Title';
import Navigation from '../Navigation';
import Calendar from '../Sub-components/Calendar';
import { FormattedMessage } from 'react-intl';
import TypeTextInput from '../Types/TypeTextInput';
import moment from 'moment';

    let locale = window.navigator.userLanguage || window.navigator.language;
    console.log(locale);
    
    if(locale === "es-ES"){
        moment.locale('es', {
            months : 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
            monthsShort : 'En_Feb_Mar_Abr_May_Jun_Jul_Ag_Sept_Oct_Nov_Dic'.split('_'),
            monthsParseExact : true,
            weekdays : 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado_Domingo'.split('_'),
            weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
            weekdaysMin : 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_'),
            weekdaysParseExact : true,
            longDateFormat : {
                L : 'DD/MM/YYYY',
            },
            week :{
                dow: 1
            }});
    } else {
        moment.locale(locale);
    }

const countryIssueInput = {
    labelContent: <FormattedMessage
        id="Step2.userPassCountryIssue"
        defaultMessage="Country of issue"
    />,
    id: 'countryIssue',
    name: 'countryIssue'
};

const birthPlaceInput = {
    labelContent: <FormattedMessage
        id="Step2.userBirthPlace"
        defaultMessage="Place of birth"
    />,
    id: 'birthPlace',
    name: 'birthPlace'
};

const numPassportInput = {
    labelContent: <FormattedMessage
        id="Step2.userPassportNumber"
        defaultMessage="Passport number"
    />,
    id: 'numPassport',
    name: 'numPassport'
};

const documentNumberInput = {
    labelContent: <FormattedMessage
        id="Step2.userDocumentNumber"
        defaultMessage="Document number"
    />,
    id: 'documentNumber',
    name: 'documentNumber'
};

const passIssueDateCal = {
    labelContent: <FormattedMessage
                    id="Step2.userPassDateIssue"
                    defaultMessage="Date of issue"
                />,
    id: "passIssueDate",
}

const passExpDateCal = {
    labelContent: <FormattedMessage
                    id="Step2.userPassExpirationDate"
                    defaultMessage="Expiration date"
                />,
    id: "passExpirationDate",
}

const idIssueDateCal = {
    labelContent: <FormattedMessage
                    id="Step2.userDocDateIssue"
                    defaultMessage="Date of issue"
                    />,
    id: "idIssueDate",
}

const idExpDateCal = {
    labelContent: <FormattedMessage
                    id="Step2.userPassExpirationDate"
                    defaultMessage="Expiration date"
                />,
    id: "expirationDate",
}

class Step2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentStep: 2
        }
    }
    componentDidMount(){
        this.props.handleCurrentStep(this.state.currentStep);
    }
    
    handleNextStepClass(){
        if(this.props.currentStep===2){
            return 'hidden'
        }
    }

    render() {
        const {
            title1,
            title2,
            title3,
            title4,
            title5,
            step2,
            dot1,
            dot2,
            dot3,
            dot4,
            dot5,
            currentStep
        } = this.props;
        console.log('props STEP2', this.props);
        return (
            <div className='stepBox'>
                <Title
                    title={title2}
                    step={step2}
                />
                <form className='form'>

                    <h2>
                        <FormattedMessage
                            id="Step2.passport"
                            defaultMessage="Passport"
                        />
                    </h2>

                    <TypeTextInput inputText={numPassportInput} />
                    <TypeTextInput inputText={countryIssueInput} />

                    <div className='verticalDisplay'>
                        <Calendar
                            labelContent={passIssueDateCal.labelContent}
                            id={passIssueDateCal.id}
                            numberOfMonths={passIssueDateCal.numberOfMonths}
                            small={passIssueDateCal.small}
                        />
                        <Calendar
                            labelContent={passExpDateCal.labelContent}
                            id={passExpDateCal.id}
                            numberOfMonths={passExpDateCal.numberOfMonths}
                            small={passExpDateCal.small}
                        />
                    </div>

                    <h2>
                        <FormattedMessage
                            id="Step2.visa"
                            defaultMessage="Visa (optional)"
                        />
                    </h2>

                    <div>
                        <FormattedMessage
                            id="Step2.addVisaDetails"
                            defaultMessage="Add visa details"
                        />
                    </div>

                    <h2>
                        <FormattedMessage
                            id="Step2.dniNie"
                            defaultMessage="Id"
                        />
                    </h2>

                    <div className='verticalDisplay'>
                        <label htmlFor='documentType'>
                        </label>
                        <select id='documentType' name='documentType' value=''>
                            <option value="">
                                <FormattedMessage
                                    id="Step2.type"
                                    defaultMessage="Type"
                                />
                            </option>
                        </select>

                        <TypeTextInput inputText={documentNumberInput} />
                    </div>

                    <div className='verticalDisplay'>
                    <Calendar
                            labelContent={idIssueDateCal.labelContent}
                            id={idIssueDateCal.id}
                            numberOfMonths={idIssueDateCal.numberOfMonths}
                            small={idIssueDateCal.small}
                        />

                        <Calendar
                            labelContent={idExpDateCal.labelContent}
                            id={idExpDateCal.id}
                            numberOfMonths={idExpDateCal.numberOfMonths}
                            small={idExpDateCal.small}
                        />

                    <TypeTextInput inputText={birthPlaceInput} />
                    </div>
                </form>

                <Navigation
                    title1={title1}
                    title2={title2}
                    title3={title3}
                    title4={title4}
                    title5={title5}
                    dot1={dot1}
                    dot2={dot2}
                    dot3={dot3}
                    dot4={dot4}
                    dot5={dot5}
                    currentStep={currentStep}
                    handleNextStepClass={this.handleNextStepClass()}
                />
            </div>
        );
    }
}


export default Step2;