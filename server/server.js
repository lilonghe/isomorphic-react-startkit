import express from 'express';
import http from 'http';
import path from 'path';

import config from '../build/config';
import renderMiddleware from './renderMiddleware';

const app = express();
const buildPath = config.webpack.outputPath;
app.use(express.static(buildPath, {
    index: false,
}));
app.get('*', renderMiddleware);

app.set('port', process.env.PORT || config.serverPort || 8080);

http.createServer(app).listen(app.get('port'), () => {
    console.log(`server started at: http://localhost:${app.get('port')}/`);
});