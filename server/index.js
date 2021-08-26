process.env.NODE_ENV = 'production';
require("@babel/register")({
  ignore: [/node_modules/, /dist/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugin-transform-runtime'],
});

require('./server.js');
