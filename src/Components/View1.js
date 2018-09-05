import React, { Component, Fragment } from 'react';

class View1 extends Component {
    render() { 
        return (
            <Fragment> 
                <h2>Paso 1</h2>
                <h1>Datos personales</h1>
                <form>
                    <label htmlFor='surname'></label>
                    <input id='surname' type='text' name='surname' placeholder='Apellidos' value=''/>
                    <label htmlFor='name'></label>
                    <input id='name' type="text" name='name' placeholder='Nombre' value=''/>
                    <label htmlFor='mobilePhone'></label>
                    <input id='mobilePhone' type='number' name='mobilePhone' placeholder='Teléfono móvil' value=''/>
                    <label htmlFor='landlinePhone'></label>
                    <input id='landlinePhone' type='number' name='landlinePhone' placeholder='Teléfono fijo' value=''/>
                    <label htmlFor='email'></label>
                    <input id='email' type='text' name='email' placeholder='me@aboutjunior.com' disabled/>
                </form>
            </Fragment>
        );
    }
}
 
export default View1;