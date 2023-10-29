const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const db = require("./model/db");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
// middlewares
app.use(cors({
  origin:"*",
  credentials:true
}));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log("server started on 5000");
});
