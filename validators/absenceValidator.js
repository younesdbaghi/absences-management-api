const { body } = require("express-validator");

const absenceValidator = [
  // Validation de eleve_id (entier requis)
  body("eleve_id")
    .isInt({ gt: 0 })
    .withMessage("eleve_id doit être un entier positif.")
    .notEmpty()
    .withMessage("eleve_id est requis."),
  
  // Validation de session_id (entier requis)
  body("session_id")
    .isInt({ gt: 0 })
    .withMessage("session_id doit être un entier positif.")
    .notEmpty()
    .withMessage("session_id est requis."),
  
  // Validation de date (format ISO 8601 requis)
  body("date")
    .isISO8601()
    .withMessage("La date doit être au format ISO 8601.")
    .notEmpty()
    .withMessage("La date est requise."),
];

module.exports = { absenceValidator };
