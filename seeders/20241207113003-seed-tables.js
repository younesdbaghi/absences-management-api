'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const enseignants = [];
    const classes = [];
    const eleves = [];
    const sessions = [];
    const nombreEnseignants = 5; // Exemple : 5 enseignants
    const nombreClasses = 3; // Exemple : 3 classes
    const nombreElevesParClasse = 10; // Exemple : 10 élèves par classe

    // Étape 1 : Générer les enseignants
    for (let i = 1; i <= nombreEnseignants; i++) {
      enseignants.push({
        nom: `NomEnseignant${i}`,
        prenom: `PrenomEnseignant${i}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // Étape 2 : Générer les classes
    for (let i = 1; i <= nombreClasses; i++) {
      classes.push({
        nom: `Classe${i}`,
        nb_eleves: nombreElevesParClasse,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // Étape 3 : Générer les élèves
    let eleveId = 1;
    for (let classeId = 1; classeId <= nombreClasses; classeId++) {
      for (let j = 1; j <= nombreElevesParClasse; j++) {
        eleves.push({
          nom: `NomEleve${eleveId}`,
          prenom: `PrenomEleve${eleveId}`,
          classe_id: classeId,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        eleveId++;
      }
    }

    // Étape 4 : Générer les sessions
    for (let i = 1; i <= nombreEnseignants; i++) {
      sessions.push({
        enseignant_id: i,
        classe_id: (i % nombreClasses) + 1, // Les sessions alternent entre les classes
        date: new Date(`2024-12-${i}`), // Dates séquentielles
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // Insertion dans les tables
    await queryInterface.bulkInsert('Enseignants', enseignants);
    await queryInterface.bulkInsert('Classes', classes);
    await queryInterface.bulkInsert('Eleves', eleves);
    await queryInterface.bulkInsert('Sessions', sessions);
  },

  async down(queryInterface, Sequelize) {
    // Suppression des données
    await queryInterface.bulkDelete('Enseignants', null, {});
    await queryInterface.bulkDelete('Classes', null, {});
    await queryInterface.bulkDelete('Eleves', null, {});
    await queryInterface.bulkDelete('Sessions', null, {});
  },
};
