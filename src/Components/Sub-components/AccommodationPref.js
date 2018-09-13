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

    console.log(translationsBreakfast.legenContent.defaultMessage)
    console.log(translationsAccom.options)
    console.log(translationsAccom.options[3])
    return (
      <div>
        <form >
          <p>
            <FormattedMessage
              id={translationsBreakfast.legenContent.defaultMessage}
            />
          </p>
          <input
            type="radio"
            name="breakfast"
            value="Always"
            onChange={onChangeBreakfast}
          />
          <span>
            <FormattedMessage
              id={translationsBreakfast.options[0].defaultMessage}
            />
          </span>
          <input
            type="radio"
            name="breakfast"
            value="Sometimes"
            onChange={onChangeBreakfast}
          />
          <span>
            <FormattedMessage
              id={translationsBreakfast.options[1].defaultMessage}
            />
          </span>
          <input
            type="radio"
            name="breakfast"
            value="OnlyIfIncluded"
            onChange={onChangeBreakfast}
          />
          <span>
            <FormattedMessage
              id={translationsBreakfast.options[2].defaultMessage}
            />
          </span>
          <input
            type="radio"
            name="breakfast"
            value="Never"
            onChange={onChangeBreakfast}
          />
          <span>
            <FormattedMessage
              id={translationsBreakfast.options[3].defaultMessage}
            />
          </span>
        </form>
        <form >
          <p>
            <FormattedMessage
              id={translationsAccom.legenContent.defaultMessage}
            />
          </p>
          <input
            type="radio"
            name="stars"
            value="Front"
            onChange={onChangeHotelStars}
          />
          <span>
            <FormattedMessage
              id={translationsAccom.options[0].defaultMessage}
            />
          </span>
          <input
            type="radio"
            name="stars"
            value="Middle"
            onChange={onChangeHotelStars}
          />
          <span>
            <FormattedMessage
              id={translationsAccom.options[1].defaultMessage}
            />
          </span>
          <input
            type="radio"
            name="stars"
            value="Back"
            onChange={onChangeHotelStars}
          />
          <span>
            <FormattedMessage
              id={translationsAccom.options[2].defaultMessage}
            />
          </span>
          <input
            type="radio"
            name="stars"
            value="Back"
            onChange={onChangeHotelStars}
          />
          <span>
            <FormattedMessage
              id={translationsAccom.options[3].defaultMessage}
            />
          </span>
        </form>
        <form >
          <p>
            <FormattedMessage
              id={translationsTypeOfAccom.legenContent.defaultMessage}
            />
          </p>
          <input
            type="radio"
            name="type"
            value="Window"
            onChange={onChangeHotelType}
          />
          <span>
          <FormattedMessage
              id={translationsTypeOfAccom.options[0].defaultMessage}
            />
          </span>
          <input
            type="radio"
            name="type"
            value="Aisle"
            onChange={onChangeHotelType}
          />
          <span>
          <FormattedMessage
              id={translationsTypeOfAccom.options[1].defaultMessage}
            />
          </span>
          <input
            type="radio"
            name="type"
            value="Window"
            onChange={onChangeHotelType}
          />
          <span>
          <FormattedMessage
              id={translationsTypeOfAccom.options[2].defaultMessage}
            />
          </span>
          <input
            type="radio"
            name="type"
            value="Aisle"
            onChange={onChangeHotelType}
          />
          <span>
          <FormattedMessage
              id={translationsTypeOfAccom.options[3].defaultMessage}
            />
          </span>
        </form>

      </div>

    );
  }
}

export default AccommodationPref;