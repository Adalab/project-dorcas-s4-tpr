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
        <form >
          <p>
            {translationsBreakfast.legenContent}
          </p>
          <input
            type="radio"
            name="breakfast"
            value="Always"
            onChange={onChangeBreakfast}
          />
          <span>
            {translationsBreakfast.options[0]}
          </span>
          <input
            type="radio"
            name="breakfast"
            value="Sometimes"
            onChange={onChangeBreakfast}
          />
          <span>
            {translationsBreakfast.options[1]}
          </span>
          <input
            type="radio"
            name="breakfast"
            value="OnlyIfIncluded"
            onChange={onChangeBreakfast}
          />
          <span>
            {translationsBreakfast.options[2]}

          </span>
          <input
            type="radio"
            name="breakfast"
            value="Never"
            onChange={onChangeBreakfast}
          />
          <span>
            {translationsBreakfast.options[3]}
          </span>
        </form>
        <form >
          <p>
            {translationsAccom.legenContent}
          </p>
          <input
            type="radio"
            name="stars"
            value="5stars"
            onChange={onChangeHotelStars}
          />
          <span>
            {translationsAccom.options[0]}
          </span>
          <input
            type="radio"
            name="stars"
            value="4stars"
            onChange={onChangeHotelStars}
          />
          <span>
            {translationsAccom.options[1]}
          </span>
          <input
            type="radio"
            name="stars"
            value="3stars"
            onChange={onChangeHotelStars}
          />
          <span>
            {translationsAccom.options[2]}
          </span>
          <input
            type="radio"
            name="stars"
            value="2stars"
            onChange={onChangeHotelStars}
          />
          <span>
            {translationsAccom.options[3]}
          </span>
        </form>
        <form >
          <p>
            {translationsTypeOfAccom.legenContent}
          </p>

          <input
            type="radio"
            name="type"
            value="Clásica"
            onChange={onChangeHotelType}
          />
          <span>
            {translationsTypeOfAccom.options[1]}
          </span>
          <input
            type="radio"
            name="type"
            value="Moderna"
            onChange={onChangeHotelType}
          />
          <span>
            {translationsTypeOfAccom.options[2]}
          </span>

        </form>

      </div>

    );
  }
}

export default AccommodationPref;