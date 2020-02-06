const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const db = require("./db");
const Team = require("./team/model");
teamRouter = require("./team/router");

app.use(teamRouter);
app.get("/test", (req, res) => {
  console.log("Hello World");
});

app.listen(port, () => console.log(`Listening on ${port}`));
