"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
var port = process.env.port || 1337;
var g = new Gauge('image1', 0, 0, 360, 1, true);
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.end(g);
    res.end('connard');
}).listen(port);
//# sourceMappingURL=server.js.map