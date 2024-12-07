'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enseignant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Session, {
        foreignKey: "enseignant_id",
        as: "sessions",
      });
    }
  }
  Enseignant.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enseignant',
  });
  return Enseignant;
};