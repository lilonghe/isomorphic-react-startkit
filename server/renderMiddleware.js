import fs from 'fs/promises';
import path from 'path';
import config from '../build/config';

import { matchPath } from 'react-router-dom';

import routes from '../src/routes';
import { initStore } from '../src/store';
import 'isomorphic-fetch';
import { render } from '../src/indexServer';

let fileTemplate;

fs.readFile(config.webpack.outputPath + '/index.html', 'utf8').then(value => {
    fileTemplate = value;
});

function renderRoute(req, res) {

    globalThis.location = {
        pathname: req.url,
    }

    const store = initStore();
    const promises = [];
    routes.some(route => {
        const match = matchPath(req.url, route);
        if (match && route.initData) {
            promises.push(new Promise((resolve) => {
                route.initData(store.dispatch).then(() => resolve());
            }));
        }
        return match;
    });

    Promise.all(promises).then(() => {
        const data = store.getState();
        let renderPage = render({ url: req.url, store });
        let pageContent = fileTemplate.replace('<div id="root"></div>', `
            <div id="root">${renderPage}</div>
            <script>window.initData=${JSON.stringify(data)}</script>
        `);
        res.end(pageContent);
    });
}

export default renderRoute;