const { Course } = require('../model/course.model');
const { Lesson } = require('../model/lesson.model');
const { Chapter } = require('../model/chapter.model');
const { Category } = require('../model/category.model');
const { Quiz } = require('../model/quiz.model');

const {Quiz_Question } = require('../model/quize_question.model');


exports.getById = async (req, res) => {
    const courseId = req.params.id;
    try {
        const courses = await Course.findOne({
            where: { id : courseId },
            include: [
                {
                    model: Chapter,
                    include:[{
                        model:Lesson,
                        include:[
                            {
                                model:Quiz,
                                include:[
                                    {
                                        model:Quiz_Question 
                                    }
                                ]
                            }
                        ]
                    }]
                }
            ]
        });
        res.json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


