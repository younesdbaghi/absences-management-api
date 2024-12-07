'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Enseignant, {
        foreignKey: "enseignant_id",
        as: "enseignant",
      });

      this.belongsTo(models.Classe, {
        foreignKey: "classe_id",
        as: "classe",
      });

      this.hasMany(models.Absence, {
        foreignKey: "session_id",
        as: "absences",
      });
    }
  }
  Session.init({
    enseignant_id: DataTypes.INTEGER,
    classe_id: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Session',
  });
  return Session;
};