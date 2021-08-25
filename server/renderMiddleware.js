import fs from 'fs/promises';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/app';

let fileTemplate;
fs.readFile(path.join(__dirname, '../dist', 'index.html'), 'utf8').then(value => {
    fileTemplate = value;
});

function renderRoute(req, res) {
    let renderPage = renderToString(<App />)
    let pageContent = fileTemplate.replace('<div id="root"></div>', `<div id="root">${renderPage}</div>`);
    res.end(pageContent);
}

module.exports = renderRoute;