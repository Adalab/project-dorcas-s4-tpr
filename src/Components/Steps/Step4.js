import React, { Component } from 'react';
import Title from '../Sub-components/Title';
import RadioGroup from '../Sub-components/RadioGroup';
import Navigation from '../Navigation';
import { FormattedMessage } from 'react-intl';
const values = [
    {
        plainPreferences: [
            {
                value: "Window",
                label: <FormattedMessage
                    id="Step4.window"
                    defaultMessage="Window"
                />,
            },
            {
                value: "Aisle",
                label: <FormattedMessage
                    id="Step4.aisle"
                    defaultMessage="Aisle"
                />,
            },
        ],
        plainPlacePreferences: [
            {
                value: "Front",
                label: <FormattedMessage
                    id="Step4.front"
                    defaultMessage="Front"
                />,
            },
            {
                value: "Middle",
                label: <FormattedMessage
                    id="Step4.middle"
                    defaultMessage="Middle"
                />,
            },
            {
                value: "Back",
                label: <FormattedMessage
                    id="Step4.back"
                    defaultMessage="Back"
                />,
            },
        ],
        trainPreferences: [
            {
                value: "Window",
                label: <FormattedMessage
                    id="Step4.trainWindow"
                    defaultMessage="Window"
                />,
            },
            {
                value: "Aisle",
                label: <FormattedMessage
                    id="Step4.trainAisle"
                    defaultMessage="Aisle"
                />,
            },
        ],
        breakfastPreferences: [
            {
                value: "Always",
                label: <FormattedMessage
                    id="Step4.always"
                    defaultMessage="Always"
                />
            },
            {
                value: "Sometimes",
                label: <FormattedMessage
                    id="Step4.sometimes"
                    defaultMessage="Sometimes"
                />
            },
            {
                value: "Only if included",
                label: <FormattedMessage
                    id="Step4.ifIncluded"
                    defaultMessage="Only if included"
                />
            },
            {
                value: "Never",
                label: <FormattedMessage
                    id="Step4.never"
                    defaultMessage="Never"
                />
            }
        ],

        accommodationPreferences: [
            {
                value: "5stars",
                label: <FormattedMessage
                    id="Step4.fiveStars"
                    defaultMessage="5 Stars"
                />
            },
            {
                value: "4stars",
                label: <FormattedMessage
                    id="Step4.fromFourStars"
                    defaultMessage="From 4 Stars"
                />
            },
            {
                value: "3stars",
                label: <FormattedMessage
                    id="Step4.fromThreeStars"
                    defaultMessage="From 3 Stars"
                />
            },
            {
                value: "2stars",
                label: <FormattedMessage
                    id="Step4.fromTwoStars"
                    defaultMessage="From 2 Stars"
                />
            }
        ],
        typeAccommodationPreferences: [
            {
                value: "Classic",
                label: <FormattedMessage
                    id="Step4.classic"
                    defaultMessage="Classic"
                />
            },
            {
                value: "Modern",
                label: <FormattedMessage
                    id="Step4.modern"
                    defaultMessage="Modern"
                />
            },
        ]
    }
]

class Step4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idRoute: '',
            responses: {},
            currentStep: 4,
            dataAccommodation: {
                plain1: '',
                plain2: '',
                train1: '',
                breakfast: '',
                qualityAcom: '',
                typeAcom: '',
            },
        }
        this.handlePlainPreference = this.handlePlainPreference.bind(this);
        this.handlePlainLocation = this.handlePlainLocation.bind(this);
        this.handleTrainPreference = this.handleTrainPreference.bind(this);
        this.handleSelectBreakfast = this.handleSelectBreakfast.bind(this);
        this.handleSelectQuality = this.handleSelectQuality.bind(this);
        this.handleSelectType = this.handleSelectType.bind(this);
    }

    componentDidMount() {
        const idRoute = this.props.match.params.id;
        this.props.handleCurrentStep(this.state.currentStep);
        this.props.handleIdRoute(idRoute);
        this.setState({
            idRoute: idRoute,
        })
    }

    handlePlainPreference(e) {
        const inputValue = e.target.value;

        this.setState({
            dataAccommodation: {
                plain1: inputValue,
                plain2: this.props.stateAccommodationObject.plain2,
                train1: this.props.stateAccommodationObject.train1,
                breakfast: this.props.stateAccommodationObject.breakfast,
                qualityAcom: this.props.stateAccommodationObject.qualityAcom,
                typeAcom: this.props.stateAccommodationObject.typeAcom,
            }
        }, () => (this.props.handleStep4(this.state.dataAccommodation)));
    }

    handlePlainLocation(e) {
        const inputValue = e.target.value;

        this.setState({
            dataAccommodation: {
                plain1: this.props.stateAccommodationObject.plain1,
                plain2: inputValue,
                train1: this.props.stateAccommodationObject.train1,
                breakfast: this.props.stateAccommodationObject.breakfast,
                qualityAcom: this.props.stateAccommodationObject.qualityAcom,
                typeAcom: this.props.stateAccommodationObject.typeAcom,
            }
        }, () => (this.props.handleStep4(this.state.dataAccommodation)));
    }

    handleTrainPreference(e) {
        const inputValue = e.target.value;

        this.setState({
            dataAccommodation: {
                plain1: this.props.stateAccommodationObject.plain1,
                plain2: this.props.stateAccommodationObject.plain2,
                train1: inputValue,
                breakfast: this.props.stateAccommodationObject.breakfast,
                qualityAcom: this.props.stateAccommodationObject.qualityAcom,
                typeAcom: this.props.stateAccommodationObject.typeAcom,
            }
        }, () => (this.props.handleStep4(this.state.dataAccommodation)));
    }


    handleSelectBreakfast(e) {
        const inputValue = e.target.value;
        this.setState({
            dataAccommodation: {
                plain1: this.props.stateAccommodationObject.plain1,
                plain2: this.props.stateAccommodationObject.plain2,
                train1: this.props.stateAccommodationObject.train1,
                breakfast: inputValue,
                qualityAcom: this.props.stateAccommodationObject.qualityAcom,
                typeAcom: this.props.stateAccommodationObject.typeAcom,
            }
        }, () => (this.props.handleStep4(this.state.dataAccommodation)));
    }

    handleSelectQuality(e) {
        const inputValue = e.target.value;
        this.setState({
            dataAccommodation: {
                plain1: this.props.stateAccommodationObject.plain1,
                plain2: this.props.stateAccommodationObject.plain2,
                train1: this.props.stateAccommodationObject.train1,
                breakfast: this.props.stateAccommodationObject.breakfast,
                qualityAcom: inputValue,
                typeAcom: this.props.stateAccommodationObject.typeAcom,
            }
        }, () => (this.props.handleStep4(this.state.dataAccommodation)));
    }

    handleSelectType(e) {
        const inputValue = e.target.value;
        this.setState({
            dataAccommodation: {
                plain1: this.props.stateAccommodationObject.plain1,
                plain2: this.props.stateAccommodationObject.plain2,
                train1: this.props.stateAccommodationObject.train1,
                breakfast: this.props.stateAccommodationObject.breakfast,
                qualityAcom: this.props.stateAccommodationObject.qualityAcom,
                typeAcom: inputValue,
            }
        }, () => (this.props.handleStep4(this.state.dataAccommodation)));
    }

    render() {
        const {
            title1,
            title2,
            title3,
            title4,
            title5,
            step4,
            currentStep,
            changingStep,
            handleNextStep,
            stateAccommodationObject,
        } = this.props;

        const {
            plain1,
            plain2,
            train1,
            breakfast,
            qualityAcom,
            typeAcom,
        } = stateAccommodationObject;

        return (
            <div className='stepBox step-4'>
                <Title
                    title={title4}
                    step={step4}
                />
                <form className='form'>
                    <hr className='section-line'></hr>
                    <span className='section-title'>

                        <FormattedMessage
                            id="Step4.choosingSeat"
                            defaultMessage="Choosing seat"
                        />
                    </span>
                    <div>
                        <legend>
                            <h2 className='preference-title'>
                                <FormattedMessage
                                    id="Step4.plainPreferences"
                                    defaultMessage="Plain preferences"
                                />
                            </h2>
                            <div className='step4-transport-box box2'>
                                <div className='step4-row'>
                                    <RadioGroup
                                        onChange={this.handlePlainPreference}
                                        values={values[0].plainPreferences}
                                        type="plain"
                                        selected={plain1}
                                    />
                                </div>
                            </div>
                            <div className='step4-transport-box box3'>
                                <div className='step4-row'>
                                    <RadioGroup
                                        onChange={this.handlePlainLocation}
                                        values={values[0].plainPlacePreferences}
                                        type="planePlace"
                                        selected={plain2}
                                    />
                                </div>
                            </div>
                            <h2 className='preference-title'>
                                <FormattedMessage
                                    id="Step4.prefTrains"
                                    defaultMessage="Preferences in trains"
                                />
                            </h2>
                            <div className='step4-transport-box box2'>
                                <div className='step4-row'>
                                    <RadioGroup
                                        onChange={this.handleTrainPreference}
                                        values={values[0].trainPreferences}
                                        type="train"
                                        selected={train1}
                                    />
                                </div>
                            </div>
                        </legend>
                    </div>

                    {/*Accommodation*/}
                    <hr className='section-line'></hr>
                    <span className='section-title'>
                        <FormattedMessage
                            id="Step4.accommodation"
                            defaultMessage="Accommodation"
                        />
                    </span>
                    <h2 className='preference-title'>
                        <FormattedMessage
                            id="Step4.accommodationPreferences"
                            defaultMessage="Accommodation preferences"
                        />
                    </h2>
                    <div>
                        <div className='step4-box'>
                            <p className='step4-boxtitle'>
                                <FormattedMessage
                                    id="Step4.breakfast"
                                    defaultMessage="Breakfast" />
                            </p>
                            <div className='step4-row'>
                                <RadioGroup
                                    onChange={this.handleSelectBreakfast}
                                    values={values[0].breakfastPreferences}
                                    type="breakfast"
                                    selected={breakfast}
                                />
                            </div>
                        </div>
                        <div className='step4-box'>
                            <p className='step4-boxtitle'>
                                <FormattedMessage
                                    id="Step4.accommodationQuality"
                                    defaultMessage="Accommodation quality"
                                />
                            </p>
                            <div className='step4-row'>
                                <RadioGroup
                                    onChange={this.handleSelectQuality}
                                    values={values[0].accommodationPreferences}
                                    type="accommodationQuality"
                                    selected={qualityAcom}
                                />

                            </div>
                        </div>
                        <div className='step4-box box2'>
                            <p className='step4-boxtitle'>
                                <FormattedMessage
                                    id="Step4.typeOfAccommodation"
                                    defaultMessage="Type of accommodation"
                                />
                            </p>
                            <div className='step4-row'>
                                <RadioGroup
                                    onChange={this.handleSelectType}
                                    values={values[0].typeAccommodationPreferences}
                                    type="accommodationType"
                                    selected={typeAcom}
                                />

                            </div>
                        </div>
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

export default Step4;