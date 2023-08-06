const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const db = require("./model/db")

require("dotenv").config();

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);


app.listen(process.env.PORT, () => {
  console.log("server started on 3000");
});
