const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const compression = require("compression");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

module.exports = () => {
  const app = express();
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
    
  } else {
    app.use(compression);
  }

  app.use(cors());
  app.use(express.json());
  app.use(express.static(path.resolve("./" + "/upload/")));
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  return app;
};
