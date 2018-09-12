import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class AccommodationPref extends Component {

  render() {

    const {
      onChangeBreakfast,
      onChangeHotelStars,
      onChangeHotelType
    } = this.props;


    return (
      <div>
        <form >
          <p>
            <FormattedMessage
              id="Step4.breakfast"
              defaultMessage="Breakfast"
            />
          </p>
          <input
            type="radio"
            name="breakfast"
            value="Window"
            onChange={onChangeBreakfast}
          />
          <span>
            <FormattedMessage
              id="Step4.always"
              defaultMessage="Always"
            />
          </span>
          <input
            type="radio"
            name="breakfast"
            value="Aisle"
            onChange={onChangeBreakfast}
          />
          <span>
            <FormattedMessage
              id="Step4.sometimes"
              defaultMessage="Sometimes"
            />
          </span>
          <input
            type="radio"
            name="breakfast"
            value="Window"
            onChange={onChangeBreakfast}
          />
          <span>
            <FormattedMessage
              id="Step4.ifIncluded"
              defaultMessage="Only if included"
            />
          </span>
          <input
            type="radio"
            name="breakfast"
            value="Aisle"
            onChange={onChangeBreakfast}
          />
          <span>
            <FormattedMessage
              id="Step4.never"
              defaultMessage="Never"
            />
          </span>
        </form>
        <form >
          <p>
            <FormattedMessage
              id="Step4.accommodationQuality"
              defaultMessage="Accommodation quality"
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
              id="Step4.5stars"
              defaultMessage="5 stars"
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
              id="Step4.fromFourStars"
              defaultMessage="From 4 Stars"
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
              id="Step4.fromThreeStars"
              defaultMessage="From 3 Stars"
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
              id="Step4.fromTwoStars"
              defaultMessage="From 2 Stars"
            />
          </span>
        </form>
        <form >
          <p>
            <FormattedMessage
              id="Step4.typeOfAccommodation"
              defaultMessage="Type of accommodation"
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
              id="Step4.irrelevant"
              defaultMessage="Irrelevant"
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
              id="Step4.classic"
              defaultMessage="Classic"
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
              id="Step4.modern"
              defaultMessage="Modern"
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
              id="Step4.niche"
              defaultMessage="Niche"
            />
          </span>
        </form>

      </div>

    );
  }
}

export default AccommodationPref;