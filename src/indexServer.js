import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app';
import { StaticRouter as Router } from 'react-router-dom';
import 'isomorphic-fetch';
import { Provider } from "react-redux";

export function render({ url, store }) {
    return ReactDOMServer.renderToString(<Provider store={store}>
        <Router location={url}>
            <App />
        </Router>
    </Provider>)
}