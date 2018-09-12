import React, { Component, Fragment } from 'react';

class AccommodationPref extends Component {

  render() {

    const {
      optionSelected,
      onChangeBreakfast,
      onChangeHotelStars,
      onChangeHotelType
    } = this.props;


    return (
      <div>
        <form >
          <p>Desayunos</p>
          <input
            type="radio"
            name="breakfast"
            value="Window"
            onChange={onChangeBreakfast}
          />
          <span>Always</span>
          <input
            type="radio"
            name="breakfast"
            value="Aisle"
            onChange={onChangeBreakfast}
          />
          <span>Sometimes</span>
          <input
            type="radio"
            name="breakfast"
            value="Window"
            onChange={onChangeBreakfast}
          />
          <span>Solo si está incluido</span>
          <input
            type="radio"
            name="breakfast"
            value="Aisle"
            onChange={onChangeBreakfast}
          />
          <span>Never</span>
        </form>
        <form >
          <p>Calidad del alojamiento</p>
          <input
            type="radio"
            name="stars"
            value="Front"
            onChange={onChangeHotelStars}
          />
          <span>5 stars</span>
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