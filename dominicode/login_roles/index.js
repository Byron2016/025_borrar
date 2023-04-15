const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.listen(port);

app.get("/", (req, res) => {
  res.send("pagina inicio");
});

console.log(`alisten on port ${port}`);
console.log(`este es otro log ${port}`);
console.log(`este es otro log ${port}`);
