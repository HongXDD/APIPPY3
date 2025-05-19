const { Chapter } = require('../model/chapter.model');

exports.get = async (req, res) => {
    try {
        const chapters = await Chapter.findAll();
        res.json(chapters);
    } catch (error) {
        console.error('Error fetching chapters:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getById = async (req, res) => {
    const chapterId = req.params.id;
    try {
        const chapter = await Chapter.findByPk(chapterId);
        if (!chapter) {
            return res.status(404).json({ error: 'Chapter not found' });
        }
        res.json(chapter);
    } catch (error) {
        console.error('Error fetching chapter:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.create = async (req, res) => {
    const { title, course_id, total_lessons } = req.body;
    try {
        const newChapter = await Chapter.create({
            title,
            course_id,
            total_lessons
        });
        res.status(201).json(newChapter);
    } catch (error) {
        console.error('Error creating chapter:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.update = async (req, res) => {
    const chapterId = req.params.id;
    const { title, course_id, total_lessons } = req.body;
    try {
        const chapter = await Chapter.findByPk(chapterId);
        if (!chapter) {
            return res.status(404).json({ error: 'Chapter not found' });
        }
        chapter.title = title;
        chapter.course_id = course_id;
        chapter.total_lessons = total_lessons;
        await chapter.save();
        res.json(chapter);
    } catch (error) {
        console.error('Error updating chapter:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.delete =  async (req, res) => {
    const chapterId = req.params.id;
    try {
        const chapter = await Chapter.findByPk(chapterId);
        if (!chapter) {
            return res.status(404).json({ error: 'Chapter not found' });
        }
        await chapter.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting chapter:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}