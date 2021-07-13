const express = require("./config/express");
const app = express();
const dotenv = require("dotenv");
const sequelize = require("./config/config");
const user = require("./models/user")
const product = require("./models/product")
dotenv.config();

const { PORT, NODE_ENV } = process.env;

app.use("/api/authen", require("./controller/api_user"));
app.use("/api/stock", require("./controller/api_product"));

(async () => {
  await sequelize.authenticate();
})();

(async () => {
  await sequelize.sync({ force: false });
})();


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
