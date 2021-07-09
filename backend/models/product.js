const Sequelize = require("sequelize");
const sequelize = require("../config/env/development");

const user = sequelize.define("product", {
  product_code: {
    type: Sequelize.NUMBER,
    primaryKey: true,
  },
  product_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  product_stock: {
    type: Sequelize.NUMBER,
  },
  product_price: {
    type: Sequelize.NUMBER,
  },
  product_image: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "-",
  },
})(async () => {
  await user.sync({ force: false });
})();

module.exports = product;
