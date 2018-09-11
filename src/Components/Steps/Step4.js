import React, { Component } from 'react';
import Title from '../Sub-components/Title';
import AccommodationPref from '../Sub-components/AccommodationPref';
import TransportPref from '../Sub-components/TransportPref';
import Navigation from '../Navigation';
import { FormattedMessage } from 'react-intl';

const preferences = [
    {
        legenContent: <FormattedMessage
            id="Step4.breakfast"
            defaultMessage="Breakfast"
        />,
        options: [
            <FormattedMessage
                id="Step4.always"
                defaultMessage="Always"
            />,
            <FormattedMessage
                id="Step4.sometimes"
                defaultMessage="Sometimes"
            />,
            <FormattedMessage
                id="Step4.ifIncluded"
                defaultMessage="Only if included"
            />,
            <FormattedMessage
                id="Step4.never"
                defaultMessage="Never"
            />],
        name: 'breakfastPreference'
    },
    {
        legenContent: <FormattedMessage
            id="Step4.accommodationQuality"
            defaultMessage="Accommodation quality"
        />,
        options: [
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
            />],
        name: 'typeAccommodation'
    },
    {
        legenContent: <FormattedMessage
            id="Step4.typeOfAccommodation"
            defaultMessage="Type of accommodation"
        />,
        options: [
            <FormattedMessage
                id="Step4.irrelevant"
                defaultMessage="Irrelevant"
            />,
            <FormattedMessage
                id="Step4.classic"
                defaultMessage="Classic"
            />,
            <FormattedMessage
                id="Step4.modern"
                defaultMessage="Modern"
            />,
            <FormattedMessage
                id="Step4.niche"
                defaultMessage="Niche"
            />],
        name: 'qualityPreference'
    }
]

const plainPreferences = [
    <FormattedMessage
        id="Step4.window"
        defaultMessage="Window"
    />,
    <FormattedMessage
        id="Step4.aisle"
        defaultMessage="Aisle"
    />
]

const trainPreferences = [
    <FormattedMessage
        id="Step4.trainWindow"
        defaultMessage="Window"
    />,
    <FormattedMessage
        id="Step4.trainAisle"
        defaultMessage="Aisle"
    />
]

class Step4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            responses: {},
            currentStep: 4
        }
        this.handleSelectCheckbox = this.handleSelectCheckbox.bind(this)
    }

    componentDidMount() {
        this.props.handleCurrentStep(this.state.currentStep);
    }

    handleSelectCheckbox(type, value) {
        this.setState(prevState => ({ ...prevState, responses: { ...prevState.responses, [type]: value } }))
        console.log(this.state)
    }

    handleSelectPreference() {
        // this.setState(prevState => ({ ...prevState, responses: { ...prevState.responses, [tipo]: valor } }))
        console.log(this.state)
        console.log('holi')
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
            handleUpdateNavigation,
        } = this.props;
        return (
            <div className='stepBox'>
                <Title
                    title={title4}
                    step={step4}
                />
                <form className='form'>
                    <TransportPref
                        onChange={this.handleSelectPreference}
                        plainPreferences={plainPreferences}
                        trainPreferences={trainPreferences}
                    />
                    <span>Alojamientos</span>
                    <h2>Preferencias en alojamientos</h2>
                    {preferences.map(preference => <AccommodationPref
                        prefContent={preference}
                        optionSelected={this.state.responses[preference.name]}
                        onChange={this.handleSelectCheckbox} />)}
                </form>
                <Navigation
                    title1={title1}
                    title2={title2}
                    title3={title3}
                    title4={title4}
                    title5={title5}
                    currentStep={currentStep}
                    changingStep={changingStep}
                />
            </div>
        );
    }
}

export default Step4;