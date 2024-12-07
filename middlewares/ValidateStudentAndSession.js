const { Eleve, Session } = require("../models");

const validateStudentAndSession = async (req, res, next) => {
    try {
        const { eleve_id, session_id } = req.body;

        // Vérifiez si l'étudiant existe
        const student = await Eleve.findByPk(eleve_id);
        if (!student) {
            return res.status(404).json({ message: "Étudiant introuvable." });
        }

        // Vérifiez si la session existe
        const session = await Session.findByPk(session_id);
        if (!session) {
            return res.status(404).json({ message: "Session introuvable." });
        }

        // Vérifiez si l'étudiant est inscrit dans la classe de la session
        if (student.classe_id !== session.classe_id) {
            return res.status(400).json({
                message: "L'étudiant n'est pas inscrit dans la classe de cette session.",
            });
        }

        next();
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Erreur serveur." });
    }
};

module.exports = validateStudentAndSession;
