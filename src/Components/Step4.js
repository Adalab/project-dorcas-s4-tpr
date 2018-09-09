import React, { Component } from 'react';
import Title from './Title';
import AccommodationPref from './AccommodationPref';
import Navigation from './Navigation';
import { FormattedMessage } from 'react-intl';

const prefContent1 = {
    legendContent: <FormattedMessage
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
    legendContent: <FormattedMessage
                    id="Step4.accommodationQuality"
                    defaultMessage="Accommodation quality"
                />,
    option1: <FormattedMessage
                id="Step4.fiveStars"
                defaultMessage="5 Stars"
            />,
    option2: <FormattedMessage
                id="Step4.fromFourStars"
                defaultMessage="From 4 Stars"
            />,
    option3: <FormattedMessage
                id="Step4.fromThreeStars"
                defaultMessage="From 3 Stars"
            />,
    option4: <FormattedMessage
                id="Step4.fromTwoStars"
                defaultMessage="From 2 Stars"
            />,
    name: 'qualityPreference'
};

const prefContent3 = {
    legendContent: <FormattedMessage
                    id="Step4.typeOfAccommodation"
                    defaultMessage="Type of accommodation"
                />,
    option1: <FormattedMessage
                id="Step4.irrelevant"
                defaultMessage="Irrelevant"
            />,
    option2: <FormattedMessage
                id="Step4.classic"
                defaultMessage="Classic"
            />,
    option3: <FormattedMessage
                id="Step4.modern"
                defaultMessage="Modern"
            />,
    option4: <FormattedMessage
                id="Step4.niche"
                defaultMessage="Niche"
            />,
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
                <Title 
                    title={title4} 
                    step={step4}
                />
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