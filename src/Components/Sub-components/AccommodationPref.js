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
          <span>From 4 stars</span>
          <input
            type="radio"
            name="stars"
            value="Back"
            onChange={onChangeHotelStars}
          />
          <span>From 3 stars</span>
          <input
            type="radio"
            name="stars"
            value="Back"
            onChange={onChangeHotelStars}
          />
          <span>From 2 stars</span>
        </form>
        <form >
          <p>Tipo de alojamiento</p>
          <input
            type="radio"
            name="type"
            value="Window"
            onChange={onChangeHotelType}
          />
          <span>Irrelevante</span>
          <input
            type="radio"
            name="type"
            value="Aisle"
            onChange={onChangeHotelType}
          />
          <span>Clásica</span>
          <input
            type="radio"
            name="type"
            value="Window"
            onChange={onChangeHotelType}
          />
          <span>Moderno</span>
          <input
            type="radio"
            name="type"
            value="Aisle"
            onChange={onChangeHotelType}
          />
          <span>Nicho</span>
        </form>

      </div>

    );
  }
}

export default AccommodationPref;