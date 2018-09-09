import React, { Component } from 'react';
import Title from './Title';
import AccommodationPref from './AccommodationPref';
import Navigation from './Navigation';

const preferences = [
    {
        legenContent: 'Desayunos',
        options: [
            'Siempre',
            'Algunas veces',
            'Solo si está incluido',
            'Nunca'],
        name: 'breakfastPreference'
    },
    {
        legenContent: 'Tipo de alojamiento',
        options: [
            'Irrelevante',
            'Clásica',
            'Moderno',
            'Nicho'],
        name: 'typeAccommodation'
    },
    {
        legenContent: 'Calidad del alojamiento',
        options: [
            '5 estrellas',
            'Desde 4 estrellas',
            'Desde 3 estrellas',
            'Desde 2 estrellas'],
        name: 'qualityPreference'
    }
]

class Step4 extends Component {
    constructor(props) {
        super(props)
        this.state = { responses: {} }
        this.handleSelectCheckbox = this.handleSelectCheckbox.bind(this)
    }

    handleSelectCheckbox(type, value) {
        this.setState(prevState => ({ ...prevState, responses: { ...prevState.responses, [type]: value } }))
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
            dot1,
            dot2,
            dot3,
            dot4,
            dot5,
            previousStep,
            followingStep,
            handleClickPreviousStep,
            handleClickFollowingStep
        } = this.props;
        console.log(this.state)
        return (

            <div className='stepBox'>
                <Title
                    title={title4}
                    step={step4}
                />
                <form className='form'>
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

export default Step4;