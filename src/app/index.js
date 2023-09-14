const { connectMongo } = require('../../connectDB');
const express = require("express");
const next = require("next");
const route = require('../routes');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {

    const server = express();
    // const showRoutes = require("./routes/index.js");
    route(server);
    // server.use("/api", showRoutes(server));
    connectMongo();
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
    
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });