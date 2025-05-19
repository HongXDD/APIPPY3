const { Quiz_Question } = require('../model/quize_question.model');
exports.get = async (req, res) => {
    try {
        const quiz_questions = await Quiz_Question.findAll();
        res.json(quiz_questions);
    } catch (error) {
        console.error('Error fetching quiz questions:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getById = async (req, res) => {
    const quizQuestionId = req.params.id;
    try {
        const quiz_question = await Quiz_Question.findByPk(quizQuestionId);
        if (!quiz_question) {
            return res.status(404).json({ error: 'Quiz question not found' });
        }
        res.json(quiz_question);
    } catch (error) {
        console.error('Error fetching quiz question:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.create = async (req, res) => {
    const { quiz_id, question, option_a, option_b, option_c, option_d, answer } = req.body;
    try {
        const newQuizQuestion = await Quiz_Question.create({
            quiz_id,
            question,
            option_a,
            option_b,
            option_c,
            option_d,
            answer
        });
        res.status(201).json(newQuizQuestion);
    } catch (error) {
        console.error('Error creating quiz question:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.update = async (req, res) => {
    const quizQuestionId = req.params.id;
    const { quiz_id, question, option_a, option_b, option_c, option_d, answer } = req.body;
    try {
        const quiz_question = await Quiz_Question.findByPk(quizQuestionId);
        if (!quiz_question) {
            return res.status(404).json({ error: 'Quiz question not found' });
        }
        quiz_question.quiz_id = quiz_id;
        quiz_question.question = question;
        quiz_question.option_a = option_a;
        quiz_question.option_b = option_b;
        quiz_question.option_c = option_c;
        quiz_question.option_d = option_d;
        quiz_question.answer = answer;
        await quiz_question.save();
        res.json(quiz_question);
    } catch (error) {
        console.error('Error updating quiz question:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.delete = async (req, res) => {
    const quizQuestionId = req.params.id;
    try {
        const quiz_question = await Quiz_Question.findByPk(quizQuestionId);
        if (!quiz_question) {
            return res.status(404).json({ error: 'Quiz question not found' });
        }
        await quiz_question.destroy();
        res.json({ message: 'Quiz question deleted successfully' });
    } catch (error) {
        console.error('Error deleting quiz question:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
