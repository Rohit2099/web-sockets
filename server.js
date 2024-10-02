const express = require("express");
const http = require("node:http");
const cors = require("cors");
const websocket = require("ws");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log("In main path");
    res.send("in main path");
});

app.get("/ws", (req, res) => {
    res.send("Websocket API server");
});

const server = http.createServer(app);

const wss = new websocket.Server({ server });
wss.on("connection", (ws, req) => {
    ws.on("message", (msg) => {
        console.log("message is " + msg);
        ws.send(msg + " from server");
        wss.clients.forEach((client) => {
            if (client.readyState === websocket.OPEN) {
                client.send("broadcasted " + msg);
            }
        });
    });
    console.log("connection established");

    ws.send("welcome");
});

wss.on("error", () => {
    let a = "efv";
});

server.listen(4000, () => {
    console.log("Listening now...");
});
