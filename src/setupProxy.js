const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://aud-tech-challenge.s3.eu-central-1.amazonaws.com',
      pathRewrite: {
        '^/api' : '/'
      },
      changeOrigin: true,
    })
  );
};
