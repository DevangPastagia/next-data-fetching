const jsonServer = require("json-server");
// import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3001;

server.use(middlewares);

server.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept"
  );
  next();
});

server.use(router);

server.listen(port, () => {
  console.log(
    `JSON Server is running on port http://192.168.0.145:${port}/products`
  );
});
