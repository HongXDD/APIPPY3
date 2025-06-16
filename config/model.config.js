const { User , createUserTable } = require('../model/user.model');
const { Course , createCourseTable } = require('../model/course.model');
const { Category , createCategoryTable } = require('../model/category.model');
const { Chapter , createChapterTable } = require('../model/chapter.model');
const { Enrolment , createEnrolmentTable } = require('../model/enrolment.model');
const { Lesson , createLessonTable } = require('../model/lesson.model');
const { Quiz , createQuizTable } = require('../model/quiz.model');
const {Quiz_Question, createQuizQuestionTable} = require('../model/quize_question.model');
const {student_lesson, createStudentLessonTable} = require('../model/student_lesson.model');
const { Reply , createReplyTable } = require('../model/reply.model');
const { Comment , createCommentTable } = require('../model/comment.model');
const {Option , createOptionQuestionTable} =require('../model/opption.model')


function ModelConfig() {
    createUserTable();
    createEnrolmentTable();
    createCourseTable();
    createLessonTable();
    createCategoryTable();
    createChapterTable();
    createQuizTable();
    createCommentTable();
    createQuizQuestionTable();
    createStudentLessonTable();
    createReplyTable();
    createOptionQuestionTable();
}

Course.hasMany(Chapter,{foreignKey:'course_id'});
Chapter.belongsTo(Course, { foreignKey: 'course_id' });

Chapter.hasMany(Lesson,{foreignKey:'chapter_id'});
Lesson.belongsTo(Chapter,{foreignKey:'chapter_id'});

Lesson.hasMany(Quiz,{foreignKey:'lesson_id'});
Quiz.belongsTo(Lesson,{foreignKey:'lesson_id'});

Quiz.hasMany(Quiz_Question,{foreignKey:'quiz_id'});
Quiz_Question.belongsTo(Quiz,{foreignKey:'quiz_id'});

Quiz_Question.hasMany(Option,{foreignKey:'quiz_question_id'});
Option.belongsTo(Quiz_Question,{foreignKey:'quiz_question_id'});



module.exports = { ModelConfig };