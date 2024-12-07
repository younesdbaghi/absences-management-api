'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Session, {
        foreignKey: "classe_id",
        as: "sessions",
      });

      this.hasMany(models.Eleve, {
        foreignKey: "classe_id",
        as: "eleves",
      });
    }
  }
  Classe.init({
    nom: DataTypes.STRING,
    nb_eleves: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Classe',
  });
  return Classe;
};