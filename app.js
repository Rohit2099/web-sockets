const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log("In main path");
});

app.listen(4000, () => {
    console.log("started");
});
