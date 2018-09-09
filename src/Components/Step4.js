import React, { Component } from 'react';
import Title from './Title';
import AccommodationPref from './AccommodationPref';
import Navigation from './Navigation';
import { FormattedMessage } from 'react-intl';

const prefContent1 = {
    legenContent: <FormattedMessage
                    id="Step4.breakfast"
                    defaultMessage="Breakfast"
                />,
    option1: <FormattedMessage
                id="Step4.always"
                defaultMessage="Always"
            />,
    option2: <FormattedMessage
                id="Step4.sometimes"
                defaultMessage="Sometimes"
            />,
    option3: <FormattedMessage
                id="Step4.ifIncluded"
                defaultMessage="Only if included"
            />,
    option4: <FormattedMessage
                id="Step4.never"
                defaultMessage="Never"
            />,
    name: 'breakfastPreference'
};

const prefContent2 = {
    legenContent: 'Calidad del alojamiento',
    option1: '5 estrellas',
    option2: 'Desde 4 estrellas',
    option3: 'Desde 3 estrellas',
    option4: 'Desde 2 estrellas',
    name: 'qualityPreference'
};

const prefContent3 = {
    legenContent: 'Tipo de alojamiento',
    option1: 'Irrelevante',
    option2: 'Clásica',
    option3: 'Moderno',
    option4: 'Nicho',
    name: 'typeAccommodation'
};

class Step4 extends Component {
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
        return (
            <div className='stepBox'>
                <Title title={title4} step={step4}/>
                <form className='form'>
                    <span>
                        <FormattedMessage
                            id="Step4.accommodations"
                            defaultMessage="Accommodations"
                        />
                        
                    </span>
                    <h2>
                        <FormattedMessage
                            id="Step4.accommodationPreferences"
                            defaultMessage="Accommodation preferences"
                        />
                    </h2>
                    <AccommodationPref prefContent={prefContent1}/>
                    <AccommodationPref prefContent={prefContent2}/>
                    <AccommodationPref prefContent={prefContent3}/>
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