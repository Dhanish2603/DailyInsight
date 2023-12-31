const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const db = require("./model/db");
const cors = require("cors");
require("dotenv").config();
// const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const path = require("path");

// middlewares
// app.use((req, res, next) => {
//   res.set({
//     "Access-Control-Allow-Origin":
//       "*",
//     "Access-Control-Allow-Methods": "*",
//     "Access-Control-Allow-Headers":
//       "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
//   });

//   next();
// });
// app.use(express.static(path.join(__dirname, "build")));

// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// Handle other routes by serving the index.html file
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });
app.use(
  cors( )
);
// app.use(helmet());
// app.use("/", express.static(__dirname + "/build"));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log("server started on 5000");
});
