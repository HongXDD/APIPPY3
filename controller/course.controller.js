const { Course } = require('../model/course.model');


exports.get = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
    
exports.getById = async (req, res) => {
    const courseId = req.params.id;
    try {
        const course = await Course.findByPk(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json(course);
    } catch (error) {
        console.error('Error fetching course:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.create = async (req, res) => {
    const { title, category_id, total_chapters, total_lessons, total_quizzes, description } = req.body;
    try {
        const newCourse = await Course.create({
            title,
            category_id,
            total_chapters,
            total_lessons,
            total_quizzes,
            description
        });
        res.status(201).json(newCourse);
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


