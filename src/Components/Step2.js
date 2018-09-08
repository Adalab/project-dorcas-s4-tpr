import React, { Component } from 'react';
import Title from './Title';
import Navigation from './Navigation';
import Calendar from './Calendar';
import { FormattedMessage } from 'react-intl';
import TypeTextInput from './TypeTextInput';


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
    numberOfMonths: 1,
    small: true
}

const passExpDateCal = {
    labelContent: <FormattedMessage
                    id="Step2.userPassExpirationDate"
                    defaultMessage="Expiration date"
                />,
    id: "passExpirationDate",
    numberOfMonths: 1,
    small: true,
}

const idIssueDateCal = {
    labelContent: <FormattedMessage
                    id="Step2.userDocDateIssue"
                    defaultMessage="Date of issue"
                    />,
    id: "idIssueDate",
    numberOfMonths: 1,
    small: true
}

const idExpDateCal = {
    labelContent: <FormattedMessage
                    id="Step2.userPassExpirationDate"
                    defaultMessage="Expiration date"
                />,
    id: "expirationDate",
    numberOfMonths: 1,
    small: true,
}

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passIssueDateCal: {
                passIssueDate: "",
                focused: false,
            },
            passExpDateCal: {
                passExpDate: "",
                focused: false,
            },
            idIssueDateCal: {
                idIssueDate: "",
                focused: false,
            },
            idExpDateCal: {
                idExpDate: "",
                focused: false,
            },
        }

        this.onDateChangePassExpDate = this.onDateChangePassExpDate.bind(this);
        this.onDateChangePassIssueDate = this.onDateChangePassIssueDate.bind(this);
        this.onFocusChangePassExpDate = this.onFocusChangePassExpDate.bind(this);
        this.onFocusChangePassIssueDate = this.onFocusChangePassIssueDate.bind(this);
        this.onDateChangeIdExpDate = this.onDateChangeIdExpDate.bind(this);
        this.onDateChangeIdIssueDate = this.onDateChangeIdIssueDate.bind(this);
        this.onFocusChangeIdExpDate = this.onFocusChangeIdExpDate.bind(this);
        this.onFocusChangeIdIssueDate = this.onFocusChangeIdIssueDate.bind(this);
    }
    onDateChangePassIssueDate() {
       
        this.setState({ passIssueDateCal: {passIssueDate: "holi"}});
    }

    onDateChangePassExpDate() {
        this.setState({ passExpDateCal: { passExpDate:"holi" } });
    }

    onFocusChangePassExpDate(e) {
        const inputState = !this.state.passExpDateCal.focused;
        this.setState({ passExpDateCal: { focused: inputState} })
    }
    onFocusChangePassIssueDate() {
        const inputState = !this.state.passIssueDateCal.focused;
        this.setState({ passIssueDateCal: { focused: inputState} })
    }
    onDateChangeIdIssueDate() {
        this.setState({ idIssueDateCal: {passIssueDate: "holi"}});
    }

    onDateChangeIdExpDate() {
        this.setState({ idExpDateCal: { passExpDate:"holi" } });
    }

    onFocusChangeIdExpDate() {
        const inputState = !this.state.idExpDateCal.focused;
        this.setState({ idExpDateCal: { focused: inputState} })
    }
    onFocusChangeIdIssueDate() {
        const inputState = !this.state.idIssueDateCal.focused;
        this.setState({ idIssueDateCal: { focused: inputState} })
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
            previousStep,
            followingStep,
            handleClickPreviousStep,
            handleClickFollowingStep,
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
                            date={this.state.passIssueDateCal.passIssueDate}
                            onDateChange={this.onDateChangePassIssueDate}
                            focused={this.state.passIssueDateCal.focused}
                            onFocusChange={this.onFocusChangePassIssueDate}
                            labelContent={passIssueDateCal.labelContent}
                            id={passIssueDateCal.id}
                            numberOfMonths={passIssueDateCal.numberOfMonths}
                            small={passIssueDateCal.small}
                        />
                        <Calendar
                            date={this.state.passExpDateCal.passExpDate}
                            onDateChange={this.onDateChangePassExpDate}
                            focused={this.state.passExpDateCal.focused}
                            onFocusChange={this.onFocusChangePassExpDate}
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
                            date={this.state.idIssueDateCal.idIssueDate}
                            onDateChange={this.onDateChangeIdIssueDate}
                            focused={this.state.idIssueDateCal.focused}
                            onFocusChange={this.onFocusChangeIdIssueDate}
                            labelContent={idIssueDateCal.labelContent}
                            id={idIssueDateCal.id}
                            numberOfMonths={idIssueDateCal.numberOfMonths}
                            small={idIssueDateCal.small}
                        />

                        <Calendar
                            date={this.state.idExpDateCal.idExpDate}
                            onDateChange={this.onDateChangeIdExpDate}
                            focused={this.state.idExpDateCal.focused}
                            onFocusChange={this.onFocusChangeIdExpDate}
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
                    previousStep={previousStep}
                    followingStep={followingStep}
                    handleClickPreviousStep={handleClickPreviousStep}
                    handleClickFollowingStep={handleClickFollowingStep}
                />
            </div>
        );
    }
}


export default Step2;