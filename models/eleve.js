'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Eleve extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Classe, {
        foreignKey: "classe_id",
        as: "classe",
      });

      this.hasMany(models.Absence, {
        foreignKey: "eleve_id",
        as: "absences",
      });
    }
  }
  Eleve.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    classe_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Eleve',
  });
  return Eleve;
};