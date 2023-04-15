"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
var port = process.env.PORT || 4000;
//app.listen(port);
app.get("/", function (req, res) {
    res.send("pagina inicio");
});
app.get('/test', function (_req, res) {
    return res.send('aaaaExpress Typescript on Vercel');
});
app.get('/ping', function (_req, res) {
    return res.send('pong 🏓');
});
app.listen(port, function () {
    return console.log("Server is listening on ".concat(port));
});
//console.log(`alisten on port ${port}`);
//# sourceMappingURL=index.js.map