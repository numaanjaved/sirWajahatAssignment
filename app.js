const express = require("express");

const app = express();
const mainRoute = require("./routes/main");


app.use("/", mainRoute);

app.listen(3001);
