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
                id: "Step4.fiveStars",
                defaultMessage: "5 Stars"
            }
            ,
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
const plainPreferences = {
    window:
    {
        id: "Step4.window",
        defaultMessage: "Window"
    }
    ,
    aisle:
    {
        id: "Step4.aisle",
        defaultMessage: "Aisle"
    }

}

const trainPreferences = {
    window:
    {
        id: "Step4.trainWindow",
        defaultMessage: "Window"
    }
    ,
    aisle:
    {
        id: "Step4.trainAisle",
        defaultMessage: "Aisle"
    }
}

class Step4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        this.handleSelectCheckbox = this.handleSelectCheckbox.bind(this)
    }

    componentDidMount() {
        this.props.handleCurrentStep(this.state.currentStep);
    }

    // handleSurnameInput(e){
    //     console.log('chula', this.props);
    //     const inputValue = e.target.value;
        
    //     this.setState({
    //         data: {
    //             surname: inputValue,
    //             name:this.props.personalInformation.firstName,
    //             phoneNumber:this.props.contactInformation.phoneNumbers[0],
    //             lineNumber:this.props.contactInformation.phoneNumbers[1]
    //         }
    //     }, ()=>(this.props.handleStep1(this.state.data)));   
    // }

    handleSelectCheckbox(e) {
        console.log('desayuno si o no?',this.props)
        console.log('radiobutton',e)
        const inputValue = e.target;
        
        this.setState({
            dataAccommodation: {
                plain1: inputValue,
                plain2: '',
                train1: '',
                breakfast: '',
                qualityAcom:'',
                typeAcom:'',
            }
        });   
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