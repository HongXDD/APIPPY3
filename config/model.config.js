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
}

module.exports = { ModelConfig };