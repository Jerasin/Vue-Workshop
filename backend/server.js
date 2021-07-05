const express = require("./config/express");
const app = express();
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const { PORT, NODE_ENV } = process.env;

app.use("/api/authen", require("./controller/api_user"));
app.use("/api/stock", require("./controller/api_product"));

app.listen(PORT, () => {
  console.log(
    "Server Running Port:" +
      " " +
      PORT +
      " , " +
      "Environment:" +
      " " +
      NODE_ENV
  );
});
