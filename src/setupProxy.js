const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // ...You can now register proxies as you wish!
  app.use(proxy('/api', {
    target: 'https://test.dyy.appapi.xgcinema.com',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/api"
    },
  }));
};