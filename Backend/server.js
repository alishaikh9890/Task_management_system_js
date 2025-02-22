const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, CORS)
server.use(middlewares);

// Set up a route to serve the API
server.use(router);

// Set the server to listen on a dynamic port (for Heroku deployment) or 3000 locally
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
