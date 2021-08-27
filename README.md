# isomorphic-react-startkit
基于 webpack5 为 react 提供的同构脚手架。  
Based on the isomorphic scaffolding provided by webpack5 for react.

> Powered by [react-startkit](https://github.com/lilonghe/react-startkit)

# Introduction
```
// dev, will not start SSR server
npm start

// production
npm run server:build
node _app/app.js
```

# Feature
1. Support `redux`
2. SSR data sync to CSR
3. Support `react-router`

# Point
1. `server` directory
2. `src/indexServer.js`
3. `src/store/index.js` export `initStore` function.
4. `src/routes.js` SSR route need implement `initData` function.
5. `build` directory

# Tip
If you nedd lazy load route, please replace `React.lazy` with `@loadable/component` and remove `Suspense` component. Or you can upgrade with `React 18`.
