const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/challenge.json',
    proxy({
      target: 'http://aud-tech-challenge.s3.eu-central-1.amazonaws.com',
      changeOrigin: true,
    })
  );
};
