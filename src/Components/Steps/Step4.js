import React, { Component } from 'react';
import Title from '../Sub-components/Title';
import AccommodationPref from '../Sub-components/AccommodationPref';
import TransportPref from '../Sub-components/TransportPref';
import Navigation from '../Navigation';
import { FormattedMessage } from 'react-intl';

const t = {
    breakfast: {
        legenContent: <FormattedMessage
            id="Step4.breakfast"
            defaultMessage="Breakfast" />
    ,
    options: [
        <FormattedMessage
            id="Step4.always"
            defaultMessage="Always" />
        ,
        <FormattedMessage
            id="Step4.sometimes"
            defaultMessage="Sometimes" />
        ,
        <FormattedMessage
            id="Step4.ifIncluded"
            defaultMessage="Only if included" />
        ,
        <FormattedMessage
            id="Step4.never"
            defaultMessage="Never" />

    ],
    name:
        <FormattedMessage
            id="Step4.breakfastPreference"
            defaultMessage="breakfastPreference"
        />,
    },

    accommodation: {
        legenContent:
            <FormattedMessage
                id="Step4.accommodationQuality"
                defaultMessage="Accommodation quality"
            />,
        options: [
            <FormattedMessage
                id="Step4.fiveStars"
                defaultMessage="5 Stars"
            />,
            <FormattedMessage
                id="Step4.fromFourStars"
                defaultMessage="From 4 Stars"
            />,
            <FormattedMessage
                id="Step4.fromThreeStars"
                defaultMessage="From 3 Stars"
            />,
            <FormattedMessage
                id="Step4.fromTwoStars"
                defaultMessage="From 2 Stars"
            />
        ],
        name:
            <FormattedMessage
                id="Step4.accommodationPreference"
                defaultMessage="Accommodation Preference"
            />
    },
    typeOfAccommodation: {
        legenContent:
            <FormattedMessage
                id="Step4.typeOfAccommodation"
                defaultMessage="Type of accommodation"
            />
        ,
        options: [
            <FormattedMessage
                id="Step4.irrelevant"
                defaultMessage="Irrelevant"
            />
            ,
            <FormattedMessage
                id="Step4.classic"
                defaultMessage="Classic"
            />
            ,
            <FormattedMessage
                id="Step4.modern"
                defaultMessage="Modern"
            />
            ,
            <FormattedMessage
                id="Step4.niche"
                defaultMessage="Niche"
            />
        ],
        name:
            <FormattedMessage
                id="Step4.qualityPreference"
                defaultMessage="Quality preference"
            />

    }
}


const plainPreferences = {
    window: <FormattedMessage
        id="Step4.window"
        defaultMessage="Window"
    />,
    aisle: <FormattedMessage
        id="Step4.aisle"
        defaultMessage="Aisle"
    />
}

const trainPreferences = {
    window: <FormattedMessage
        id="Step4.trainWindow"
        defaultMessage="Window"
    />,
    aisle: <FormattedMessage
        id="Step4.trainAisle"
        defaultMessage="Aisle"
    />
}

class Step4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idRoute:'',
            responses: {},
            currentStep: 4,
            dataAccommodation: {
                plain1: '',
                plain2: '',
                train1: '',
                breakfast: '',
                qualityAcom:'',
                typeAcom:'',
            }
        }
        this.handlePlainPreference= this.handlePlainPreference.bind(this);this.handlePlainLocation= this.handlePlainLocation.bind(this);
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
        console.log('HhHHHHHHHHHHHHHHHHHHHHHHHH', this.props);
        console.log('RADIO',e.target.value)
        const inputValue = e.target.value;
        
        this.setState({
            dataAccommodation: {
                plain1: inputValue,
                plain2: this.props.stateAccommodationObject.plain2,
                train1: this.props.stateAccommodationObject.train1,
                breakfast: this.props.stateAccommodationObject.breakfast,
                qualityAcom:this.props.stateAccommodationObject.qualityAcom,
                typeAcom:this.props.stateAccommodationObject.typeAcom,
            }
        }, ()=>(this.props.handleStep4(this.state.dataAccommodation)));   
    }

    handlePlainLocation(e) {
        console.log('avion adelante,medio o atrás')
        const inputValue = e.target.value;
        
        this.setState({
            dataAccommodation: {
                plain1: this.props.stateAccommodationObject.plain1,
                plain2: inputValue,
                train1: this.props.stateAccommodationObject.train1,
                breakfast: this.props.stateAccommodationObject.breakfast,
                qualityAcom:this.props.stateAccommodationObject.qualityAcom,
                typeAcom:this.props.stateAccommodationObject.typeAcom,
            }
        }, ()=>(this.props.handleStep4(this.state.dataAccommodation)));   
    }

    handleTrainPreference(e) {
        console.log('preferencia tren')
        const inputValue = e.target.value;
        
        this.setState({
            dataAccommodation: {
                plain1: this.props.stateAccommodationObject.plain1,
                plain2: this.props.stateAccommodationObject.plain2,
                train1: inputValue,
                breakfast: this.props.stateAccommodationObject.breakfast,
                qualityAcom:this.props.stateAccommodationObject.qualityAcom,
                typeAcom:this.props.stateAccommodationObject.typeAcom,
            }
        }, ()=>(this.props.handleStep4(this.state.dataAccommodation)));   
    }


    handleSelectBreakfast(e) {
        console.log('BREAKFAST',e.target.value );
        const inputValue = e.target.value;
        this.setState({
            dataAccommodation: {
                plain1: this.props.stateAccommodationObject.plain1,
                plain2: this.props.stateAccommodationObject.plain2,
                train1: this.props.stateAccommodationObject.train1 ,
                breakfast: inputValue,
                qualityAcom:this.props.stateAccommodationObject.qualityAcom,
                typeAcom:this.props.stateAccommodationObject.typeAcom,
            }
        }, ()=>(this.props.handleStep4(this.state.dataAccommodation)));  
    }

    handleSelectQuality(e) {
        const inputValue = e.target.value;
        this.setState({
            dataAccommodation: {
                plain1: this.props.stateAccommodationObject.plain1,
                plain2: this.props.stateAccommodationObject.plain2,
                train1: this.props.stateAccommodationObject.train1 ,
                breakfast: this.props.stateAccommodationObject.breakfast,
                qualityAcom:inputValue,
                typeAcom:this.props.stateAccommodationObject.typeAcom,
            }
        }, ()=>(this.props.handleStep4(this.state.dataAccommodation)));  
    }

    handleSelectType(e) {
        const inputValue = e.target.value;
        this.setState({
            dataAccommodation: {
                plain1: this.props.stateAccommodationObject.plain1,
                plain2: this.props.stateAccommodationObject.plain2,
                train1: this.props.stateAccommodationObject.train1 ,
                breakfast: this.props.stateAccommodationObject.breakfast,
                qualityAcom: this.props.stateAccommodationObject.qualityAcom,
                typeAcom:inputValue,
            }
        }, ()=>(this.props.handleStep4(this.state.dataAccommodation)));  
    }

    render() {
        console.log('propsSTEP4', this.props);
        const {
            title1,
            title2,
            title3,
            title4,
            title5,
            step4,
            currentStep,
            changingStep,
            legenContent
        } = this.props;

        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', this.props);
        return (
            <div className='stepBox'>
                <Title
                    title={title4}
                    step={step4}
                />
                <form className='form'>
                    <TransportPref
                        onChangePlainPreferences={this.handlePlainPreference}
                        onChangePlainLocation={this.handlePlainLocation}
                        onChangeTrainPreferences={this.handleTrainPreference}
                        translationsPlainPreferences={plainPreferences}
                        translationsTrainPreferences={trainPreferences}
                    />
                    <span>
                        <FormattedMessage
                            id="Step4.accommodation"
                            defaultMessage="Accommodation"
                        />
                    </span>
                    <h2>
                        <FormattedMessage
                            id="Step4.accommodationPreferences"
                            defaultMessage="Accommodation preferences"
                        />
                    </h2>
                    <AccommodationPref
                        translationsAccom={t.accommodation}
                        translationsBreakfast={t.breakfast}
                        translationsTypeOfAccom={t.typeOfAccommodation}
                        onChangeBreakfast={this.handleSelectBreakfast}
                        onChangeHotelStars={this.handleSelectQuality}
                        onChangeHotelType={this.handleSelectType}
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
                    idRoute={this.state.idRoute}
                />
            </div>
        );
    }
}

export default Step4;