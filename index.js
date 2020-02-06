const express = require("express");
const port = process.env.PORT || 4000;
const app = express();

app.get("/test", (req, res) => {
  console.log("Hello World");
});

app.listen(port, () => console.log(`Listening on ${port}`));
