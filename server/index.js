process.env.NODE_ENV = 'development';
require("@babel/register")({
  ignore: [/node_modules/, /dist/],
  presets: ['@babel/preset-env', '@babel/preset-react']
});

require('./server.js');
