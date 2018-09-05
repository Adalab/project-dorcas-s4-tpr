import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import PropTypes from 'prop-types';
import { HashRouter } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";

import localeData from "./../build/locales/data.json";

addLocaleData([...en, ...es]);

const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Si no tiene el language locale por defecto será inglés
const messages = 
    localeData[languageWithoutRegionCode] ||
    localeData[language] ||
    localeData.en;

ReactDOM.render(
    <IntlProvider locale={language} messages={messages}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </IntlProvider>,
    document.getElementById("root")
);
