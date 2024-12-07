const express = require("express");
const { absenceValidator } = require("../validators/absenceValidator");
const { validationResult } = require("express-validator");
const validateStudentAndSession = require("../middlewares/ValidateStudentAndSession");

const {AddAbsence, GetAbsenceForStudent, GetAbsenceForClass} = require("../controllers/absenceController");

const router = express.Router();

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.post("/", absenceValidator, validateRequest, validateStudentAndSession, AddAbsence);
router.get("/student/:studentId", GetAbsenceForStudent);
router.get("/class/:classId", GetAbsenceForClass);

module.exports = router;
