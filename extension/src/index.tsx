import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store';
import App from './app';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
    typography: {
        useNextVariants: true,
    },
});

import './styles/main.scss';

const root = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    root);