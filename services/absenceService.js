const { Absence, Eleve, Session } = require("../models");
const { Op } = require("sequelize"); // Pour utiliser les opérateurs Sequelize comme Op.between

const AddAbsence = async (data) => {
    try {
        const absence = await Absence.create(data);
        return absence;
    } catch (error) {
        console.error("Error adding absence:", error);
        throw error;
    }
};

// Récupérer les absences d'un étudiant dans une plage de dates
const GetAbsenceForStudent = async (studentId, startDate, endDate) => {
    try {
        const queryOptions = {
            where: {
                eleve_id: studentId,
                date: {
                    [Op.between]: [new Date(startDate), new Date(endDate)] // Filtrer les absences entre les dates données
                }
            },
            include: [
                {
                    model: Eleve,
                    as: "eleve",
                },
                {
                    model: Session,
                    as: "session",
                }
            ]
        };
        return await Absence.findAll(queryOptions);
    } catch (error) {
        console.error("Error fetching absences for student:", error);
        throw error;
    }
};

// Récupérer les absences d'une classe dans une plage de dates
const GetAbsenceForClass = async (classId, startDate, endDate) => {
    try {
        const queryOptions = {
            include: [
                {
                    model: Eleve,
                    as: "eleve",
                    where: { classe_id: classId },
                },
                {
                    model: Session,
                    as: "session",
                }
            ],
            where: {
                date: {
                    [Op.between]: [new Date(startDate), new Date(endDate)] // Filtrer les absences entre les dates données
                }
            }
        };
        return await Absence.findAll(queryOptions);
    } catch (error) {
        console.error("Error fetching absences for class:", error);
        throw error;
    }
};

module.exports = { AddAbsence, GetAbsenceForStudent, GetAbsenceForClass };
