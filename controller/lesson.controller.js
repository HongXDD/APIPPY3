const { Lesson } = require('../model/lesson.model');

exports.get = async (req, res) => {
    try {
        const lessons = await Lesson.findAll();
        res.json(lessons);
    } catch (error) {
        console.error('Error fetching lessons:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getByid = async (req, res) => {
    const lessonId = req.params.id;
    try {
        const lesson = await Lesson.findByPk(lessonId);
        if (!lesson) {
            return res.status(404).json({ error: 'Lesson not found' });
        }
        res.json(lesson);
    } catch (error) {
        console.error('Error fetching lesson:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
 
exports.post = async (req, res) => {
    try {
        const lessons = await Lesson.findAll();
        res.json(lessons);
    } catch (error) {
        console.error('Error fetching lessons:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.update = async (req, res) => {
    const lessonId = req.params.id;
    const { title, chapter_id, video_url } = req.body;
    try {
        const lesson = await Lesson.findByPk(lessonId);
        if (!lesson) {
            return res.status(404).json({ error: 'Lesson not found' });
        }
        lesson.title = title;
        lesson.chapter_id = chapter_id;
        lesson.video_url = video_url;
        await lesson.save();
        res.json(lesson);
    } catch (error) {
        console.error('Error updating lesson:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.delete = async (req, res) => {
    const lessonId = req.params.id;
    try {
        const lesson = await Lesson.findByPk(lessonId);
        if (!lesson) {
            return res.status(404).json({ error: 'Lesson not found' });
        }
        await lesson.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting lesson:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getByChapter = async (req,res) =>{
    const chapterId = req.params.id;
    try {
        const lesson = await Lesson.findAll({
            where : {chapter_id : chapterId }
        });
        res.json(lesson)
    }catch(err){
        console.error('Error deleting lesson:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

}
