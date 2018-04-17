import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import reducer from './app/reducer';

const store = createStore(reducer);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();