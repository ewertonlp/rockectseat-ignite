// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/tarefas',
    createProxyMiddleware({
      target: 'https://api-todo-ten.vercel.app',
      changeOrigin: true,
    })
  );
};