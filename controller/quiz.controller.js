const { Quiz } = require('../model/quiz.model'); // Assuming you have a Quiz model defined in models/index.js
const { Quiz_Question } = require('../model/quize_question.model');
const { Option } = require('../model/opption.model')

exports.get = async (req, res) => {
    try {
        const quizzes = await Quiz.findAll({
           include:[{
            model:Quiz_Question,
                include:[{
                    model:Option
                }]
           }]
        });
        res.json(quizzes);
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getById = async (req, res) => {
    const quizId = req.params.id;
    try {
        const quiz = await Quiz.findByPk(quizId);
        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }
        res.json(quiz);
    } catch (error) {
        console.error('Error fetching quiz:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.create = async (req, res) => {
    const { title, description, course_id } = req.body;
    try {
        const newQuiz = await Quiz.create({
            title,
            description,
            course_id
        });
        res.status(201).json(newQuiz);
    } catch (error) {
        console.error('Error creating quiz:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.update = async (req, res) => {
    const quizId = req.params.id;
    const { title, description, course_id } = req.body;
    try {
        const quiz = await Quiz.findByPk(quizId);
        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }
        quiz.title = title;
        quiz.description = description;
        quiz.course_id = course_id;
        await quiz.save();
        res.json(quiz);
    } catch (error) {
        console.error('Error updating quiz:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.delete = async (req, res) => {
    const quizId = req.params.id;
    try {
        const quiz = await Quiz.findByPk(quizId);
        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }
        await quiz.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting quiz:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getBylession = async (req,res) =>{
    const lessionId = req.params.id;
    try{
    const queiz = await Quiz.findAll({
        where:{lesson_id : lessionId},
    });
    res.json(queiz)
    }catch(err){
        console.log(err)

    }

} 