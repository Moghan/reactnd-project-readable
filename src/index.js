import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import reducer from './app/reducer';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<BrowserRouter><App store={store}/></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();