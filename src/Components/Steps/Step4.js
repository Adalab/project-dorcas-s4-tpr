import React, { Component } from 'react';
import Title from '../Sub-components/Title';
import AccommodationPref from '../Sub-components/AccommodationPref';
import TransportPref from '../Sub-components/TransportPref';
import Navigation from '../Navigation';
import { FormattedMessage } from 'react-intl';

const t = {
    breakfast: {
        legenContent: {
            id: "Step4.breakfast",
            defaultMessage: "Breakfast"
        },
        options: [
            {
                id: "Step4.always",
                defaultMessage: "Always"
            },
            {
                id: "Step4.sometimes",
                defaultMessage: "Sometimes"
            },
            {
                id: "Step4.ifIncluded",
                defaultMessage: "Only if included"
            },
            {
                id: "Step4.never",
                defaultMessage: "Never"
            }
        ],
        name:
        {
            id: "Step4.breakfastPreference",
            defaultMessage: "breakfastPreference"
        },

    },

    accommodation: {
        legenContent: {
            id: "Step4.accommodationQuality",
            defaultMessage: "Accommodation quality"
        },
        options: [
            {
                id: "Step4.fromFourStars",
                defaultMessage: "From 4 Stars"
            }
            ,
            {
                id: "Step4.fromThreeStars",
                defaultMessage: "From 3 Stars"
            }
            ,
            {
                id: "Step4.fromTwoStars",
                defaultMessage: "From 2 Stars"
            }

        ],
        name: {
            id: "Step4.accommodationPreference",
            defaultMessage: "Accommodation Preference"
        }
    },
    typeOfAccommodation: {
        legenContent: {
            id: "Step4.typeOfAccommodation",
            defaultMessage: "Type of accommodation"
        }
        ,
        options: [
            {
                id: "Step4.irrelevant",
                defaultMessage: "Irrelevant"
            },
            {
                id: "Step4.classic",
                defaultMessage: "Classic"
            },
            {
                id: "Step4.modern",
                defaultMessage: "Modern"
            },
            {
                id: "Step4.niche",
                defaultMessage: "Niche"
            }],
        name: {
            id: "Step4.qualityPreference",
            defaultMessage: "Quality preference"
        }
    }
}
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

handleSelectCheckbox() {
    console.log('desayuno si o no?')
}

handlePlainPreference() {
    console.log('avion ventana o pasillo')
}

handleSelectStars() {
    console.log('elegir estrellas')
}

handlePlainLocation() {
    console.log('avion adelante,medio o atrás')
}

handleTrainPreference() {
    console.log('preferencia tren')
}

handleSelectType() {
    console.log('tipo de alojamiento')
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

    console.log(t)
    console.log(t.breakfast)
    console.log(t.breakfast.legenContent)

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
                />
                <span>Alojamientos</span>
                <h2>Preferencias en alojamientos</h2>
                <AccommodationPref
                    translationsAccom={t.accommodation}
                    translationsBreakfast={t.breakfast}
                    translationsTypeOfAccom={t.typeOfAccommodation}
                    onChangeBreakfast={this.handleSelectCheckbox}
                    onChangeHotelStars={this.handleSelectStars}
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
            />
        </div>
    );
}
}

export default Step4;