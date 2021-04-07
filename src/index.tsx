import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components/macro';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {NormalizeCss} from './style/NormalizeCss';
import {GlobalStyles} from './style/GlobalStyles';
import {theme} from "./style/theme";

ReactDOM.render(
    <HashRouter>
        <ThemeProvider theme={theme}>
            <NormalizeCss/>
            <GlobalStyles/>
            <App/>
        </ThemeProvider>
    </HashRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
