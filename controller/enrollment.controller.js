const { Enrolment } = require('../model/enrolment.model');


exports.get = async (req, res) => {
    try {
        const enrolments = await Enrolment.findAll();
        res.json(enrolments);
    } catch (error) {
        console.error('Error fetching enrolments:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getById = async (req, res) => {
    const enrolmentId = req.params.id;
    try {
        const enrolment = await Enrolment.findByPk(enrolmentId);
        if (!enrolment) {
            return res.status(404).json({ error: 'Enrolment not found' });
        }
        res.json(enrolment);
    } catch (error) {
        console.error('Error fetching enrolment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.create = async (req, res) => {
    const { user_id, course_id } = req.body;
    try {
        const newEnrolment = await Enrolment.create({
            user_id,
            course_id
        });
        res.status(201).json(newEnrolment);
    } catch (error) {
        console.error('Error creating enrolment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.update = async (req, res) => {
    const enrolmentId = req.params.id;
    const { user_id, course_id } = req.body;
    try {
        const enrolmentToUpdate = await Enrolment.findByPk(enrolmentId);
        if (!enrolmentToUpdate) {
            return res.status(404).json({ error: 'Enrolment not found' });
        }
        enrolmentToUpdate.user_id = user_id;
        enrolmentToUpdate.course_id = course_id;
        await enrolmentToUpdate.save();
        res.json(enrolmentToUpdate);
    } catch (error) {
        console.error('Error updating enrolment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.delete = async (req, res) => {
    const enrolmentId = req.params.id;
    try {
        const enrolmentToDelete = await Enrolment.findByPk(enrolmentId);
        if (!enrolmentToDelete) {
            return res.status(404).json({ error: 'Enrolment not found' });
        }
        await enrolmentToDelete.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting enrolment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

