'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlansOrdered extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PlansOrdered.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    // userId: DataTypes.INTEGER,
    // planId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlansOrdered',
  });
  return PlansOrdered;
};