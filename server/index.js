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
app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers":
      "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
  });

  next();
});
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://dailyinsight-app-client.netlify.app/",
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  })
);
// app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log("server started on 5000");
});
