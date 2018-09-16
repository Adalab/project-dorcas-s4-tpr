import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class AccommodationPref extends Component {

  render() {

    const {
      onChangeBreakfast,
      onChangeHotelStars,
      onChangeHotelType,
      translationsAccom,
      translationsBreakfast,
      translationsTypeOfAccom
    } = this.props;
    return (
      <div>
        <form className='step4-box'>
          <p className='step4-boxtitle'>
            {translationsBreakfast.legenContent}
          </p>
          <div className='step4-row'>
            <div className='step4-radio'>
              <input
                className='radio-button'
                type="radio"
                name="breakfast"
                value="Always"
                onChange={onChangeBreakfast}
              />
              <span className='step4-option'>
                {translationsBreakfast.options[0]}
              </span>
            </div>
            <div className='step4-radio'>
              <input
                type="radio"
                name="breakfast"
                value="Sometimes"
                onChange={onChangeBreakfast}
              />
              <span className='step4-option'>
                {translationsBreakfast.options[1]}
              </span>
            </div>
            <div className='step4-radio'>
              <input
                type="radio"
                name="breakfast"
                value="OnlyIfIncluded"
                onChange={onChangeBreakfast}
              />
              <span className='step4-option'>
                {translationsBreakfast.options[2]}
              </span>
            </div>
            <div className='step4-radio'>
              <input
                type="radio"
                name="breakfast"
                value="Never"
                onChange={onChangeBreakfast}
              />
              <span className='step4-option'>
                {translationsBreakfast.options[3]}
              </span>
            </div>
          </div>
        </form>
        <form >
          <p className='step4-boxtitle'>
            {translationsAccom.legenContent}
          </p>
          <div className='step4-row'>
            <div className='step4-radio'>
              <input
                type="radio"
                name="stars"
                value="5stars"
                onChange={onChangeHotelStars}
              />
              <span className='step4-option'>
                {translationsAccom.options[0]}
              </span>
            </div>
            <div className='step4-radio'>
              <input
                type="radio"
                name="stars"
                value="4stars"
                onChange={onChangeHotelStars}
              />
              <span className='step4-option'>
                {translationsAccom.options[1]}
              </span>
            </div>
            <div className='step4-radio'>
              <input
                type="radio"
                name="stars"
                value="3stars"
                onChange={onChangeHotelStars}
              />
              <span className='step4-option'>
                {translationsAccom.options[2]}
              </span>
            </div>
            <div className='step4-radio'>
              <input
                type="radio"
                name="stars"
                value="2stars"
                onChange={onChangeHotelStars}
              />
              <span className='step4-option'>
                {translationsAccom.options[3]}
              </span>
            </div>
          </div>
        </form>
        <form >
          <p className='step4-boxtitle'>
            {translationsTypeOfAccom.legenContent}
          </p>
          <div className='step4-row'>
            <div className='step4-radio'>
              <input
                type="radio"
                name="type"
                value="Clásica"
                onChange={onChangeHotelType}
              />
              <span className='step4-option'>
                {translationsTypeOfAccom.options[1]}
              </span>
            </div>
            <div className='step4-radio'>
              <input
                type="radio"
                name="type"
                value="Moderna"
                onChange={onChangeHotelType}
              />
              <span className='step4-option'>
                {translationsTypeOfAccom.options[2]}
              </span>
            </div>
          </div>
        </form>

      </div>

    );
  }
}

export default AccommodationPref;