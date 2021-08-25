import express from 'express';
import http from 'http';
import path from 'path';

import renderMiddleware from './renderMiddleware';

const app = express();
const buildPath = path.join(__dirname, '../', 'dist');
app.use(express.static(buildPath, {
    index: false,
}));
app.get('*', renderMiddleware);

app.set('port', process.env.PORT || 8080);

http.createServer(app).listen(app.get('port'), () => {
    console.log(`server started at: http://localhost:${app.get('port')}/`);
});