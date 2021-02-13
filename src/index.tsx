import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './assets/scss/index.scss';

const rootEl = document.getElementById('root');

render(<App />, rootEl);
