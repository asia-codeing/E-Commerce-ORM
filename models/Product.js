// import important parts of sequelize library
const { Model, DataTypes, DECIMAL } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
      // Decimal.
      
      // Doesn't allow null values.
      
      // Validates that the value is a decimal.
    },

    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,

      // Integer.
      
      // Doesn't allow null values.
      
      // Set a default value of 10.
      
      // Validates that the value is numeric.
    },

    category_id: {
      

      // Integer.
      
      // References the Category model's id.
    }



  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
