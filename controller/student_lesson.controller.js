const { student_lesson } = require('../model/student_lesson.model');


exports.get = async (req, res) => {
    try {
        const student_lessons = await student_lesson.findAll();
        res.json(student_lessons);
    } catch (error) {
        console.error('Error fetching student_lessons:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getById = async (req, res) => {
    const student_lessonId = req.params.id;
    try {
        const student_lesson = await student_lesson.findByPk(student_lessonId);
        if (!student_lesson) {
            return res.status(404).json({ error: 'student_lesson not found' });
        }
        res.json(student_lesson);
    } catch (error) {
        console.error('Error fetching student_lesson:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.create = async (req, res) => {
    const { user_id, lesson_id } = req.body;
    try {
        const newStudentLesson = await student_lesson.create({
            user_id,
            lesson_id
        });
        res.status(201).json(newStudentLesson);
    } catch (error) {
        console.error('Error creating student_lesson:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.update = async (req, res) => {
    const student_lessonId = req.params.id;
    const { user_id, lesson_id } = req.body;
    try {
        const student_lessonToUpdate = await student_lesson.findByPk(student_lessonId);
        if (!student_lessonToUpdate) {
            return res.status(404).json({ error: 'student_lesson not found' });
        }
        student_lessonToUpdate.user_id = user_id;
        student_lessonToUpdate.lesson_id = lesson_id;
        await student_lessonToUpdate.save();
        res.json(student_lessonToUpdate);
    } catch (error) {
        console.error('Error updating student_lesson:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.delete = async (req, res) => {
    const student_lessonId = req.params.id;
    try {
        const student_lessonToDelete = await student_lesson.findByPk(student_lessonId);
        if (!student_lessonToDelete) {
            return res.status(404).json({ error: 'student_lesson not found' });
        }
        await student_lessonToDelete.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting student_lesson:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
