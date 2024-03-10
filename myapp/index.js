const express = require("express");
const app = express();
const port = 3000;

var name = `andre`;
app.get("/", (req, res) => {
  // res.send("Hello World! " + name);
  //   res.send(`Hello World! ${name}`);
  //   console.log(`Hello World`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
