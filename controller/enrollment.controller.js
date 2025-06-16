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
        // // 1. Check if an enrolment with these user_id and course_id already exists
        // const existingEnrolment = await Enrolment.findOne({
        //     user_id, course_id 
        // });

        // // 2. If an existing enrolment is found, send a 409 Conflict response
        // if (existingEnrolment) {
        //     return res.status(409).json({
        //         error: 'Enrolment already exists.',
        //         enrolment: existingEnrolment // Optionally return the existing enrolment details
        //     });
        // }

        // 3. If no existing enrolment is found, proceed to create a new one
        const newEnrolment = await Enrolment.create({
            User_id:user_id,
            course_id:course_id
        });

        // 4. Send a 201 Created response with the new enrolment
        res.status(201).json(newEnrolment);

    } catch (error) {
        console.error('Error creating enrolment:', error);
        // Handle validation errors or other specific errors if needed
        if (error.name === 'ValidationError') { // Example for Mongoose validation errors
             return res.status(400).json({ error: error.message });
        }
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

