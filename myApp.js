const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(helmet.hidePoweredBy());

module.exports = app;
const api = require("./server.js");
app.use(express.static("public"));
app.disable("strict-transport-security");
app.use("/_api", api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
let port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
