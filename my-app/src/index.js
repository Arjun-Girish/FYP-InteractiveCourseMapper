import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

import App from './App';
import Main from './Main';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById('root'));