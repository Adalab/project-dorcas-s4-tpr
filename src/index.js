import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import App from './Components/App';
import { HashRouter } from "react-router-dom";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import localeData from "./../build/locales/data.json";

addLocaleData([...en, ...es]);

const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Englih by default
const messages =
    localeData[languageWithoutRegionCode] ||
    localeData[language] ||
    localeData.en;

ReactDOM.render(
    <IntlProvider locale={language} messages={messages}>
        <HashRouter>
            <App />
        </HashRouter>
    </IntlProvider>,
    document.getElementById("root")
);
