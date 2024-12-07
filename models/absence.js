'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Absence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Eleve, {
        foreignKey: "eleve_id",
        as: "eleve",
      });
      this.belongsTo(models.Session, {
        foreignKey: "session_id",
        as: "session",
      });
    }
  }
  Absence.init({
    eleve_id: DataTypes.INTEGER,
    session_id: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Absence',
  });
  return Absence;
};