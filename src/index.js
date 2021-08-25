import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';
import 'isomorphic-fetch';
import { Provider } from "react-redux";
import store from './store';

ReactDOM.render(<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.querySelector('#root'));

