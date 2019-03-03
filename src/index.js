import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import createBrowserHistory from "history/createBrowserHistory";

import { elegantTheme } from './brandTheme';
import './index.scss';
import App from './container/app/App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme(elegantTheme);
const history = createBrowserHistory();

ReactDOM.render (
    <MuiThemeProvider theme = {theme}>
        <Router history={history}>
            <App/>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();





