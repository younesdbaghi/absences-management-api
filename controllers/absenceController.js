const absenceService = require("../services/absenceService");
  
// Ajouter une absence
const AddAbsence = async (req, res) => {
    try {
        const absence = await absenceService.AddAbsence(req.body);
        res.status(201).json(absence);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};
  
// Récupérer les absences d'un étudiant dans une plage de dates
const GetAbsenceForStudent = async (req, res) => {
    try {
        const { startDate, endDate } = req.query; // Récupérer les dates de la requête
        const studentId = req.params.studentId;

        // Vérifier si les dates de la requête sont présentes
        if (!startDate || !endDate) {
            return res.status(400).json({ message: "Les dates de début et de fin sont requises." });
        }

        const absences = await absenceService.GetAbsenceForStudent(studentId, startDate, endDate);

        if (absences.length === 0) {
            return res.status(404).json({ message: "Aucune absence trouvée pour cet étudiant dans cette plage de dates." });
        }

        res.status(200).json(absences);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};

// Récupérer les absences d'une classe dans une plage de dates
const GetAbsenceForClass = async (req, res) => {
    try {
        const { startDate, endDate } = req.query; // Récupérer les dates de la requête
        const classId = req.params.classId;

        // Vérifier si les dates de la requête sont présentes
        if (!startDate || !endDate) {
            return res.status(400).json({ message: "Les dates de début et de fin sont requises." });
        }

        const absences = await absenceService.GetAbsenceForClass(classId, startDate, endDate);

        if (absences.length === 0) {
            return res.status(404).json({ message: "Aucune absence trouvée pour cette classe dans cette plage de dates." });
        }

        res.status(200).json(absences);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};
  
module.exports = {AddAbsence, GetAbsenceForStudent, GetAbsenceForClass};
  