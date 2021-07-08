const express = require("express");
const app = express();
const routes = require('./routes');
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000;
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Gateway running on port - ${PORT}`);
})

