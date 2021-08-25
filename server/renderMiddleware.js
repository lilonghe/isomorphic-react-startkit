import fs from 'fs/promises';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router, matchPath } from 'react-router-dom';

import routes from '../src/routes';
import App from '../src/app';

let fileTemplate;
fs.readFile(path.join(__dirname, '../dist', 'index.html'), 'utf8').then(value => {
    fileTemplate = value;
});

function renderRoute(req, res) {
    const promises = [];
    routes.some(route => {
        const match = matchPath(req.url, route);
        if (match) promises.push(route.initData(match));
        return match;
    });
  
    Promise.all(promises).then(() => {
        let renderPage = renderToString(<Router location={req.url}><App /></Router>)
        let pageContent = fileTemplate.replace('<div id="root"></div>', `<div id="root">${renderPage}</div>`);
        res.end(pageContent);
    });
}

module.exports = renderRoute;