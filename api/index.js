const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { ModelConfig } = require('../config/model.config');
const courseRouter = require('../router/course.routes');
const userRouter = require('../router/user.routes');
const lessonRouter = require('../router/lesson.routes');
const chapterRouter = require('../router/chapter.routes');
const cartegoryRouter = require('../router/category.routes')
const registerRouter = require('../router/register.routes');
const loginRouter = require('../router/login.routes')
const verifyAuthRouter = require('../router/verifyauth.routes')
const logoutRouter = require('../router/logout.routes');
const quizRouter = require('../router/quiz.routes');
const questqueizRouter = require('../router/quiz_question.routes');
const detailcourseRouter = require('../router/detailcourse.routes');
const studentLessonRouter = require('../router/student_lesson.routes');
const EnrolmentRouter = require('../router/enrolment.routes');


require('dotenv').config();
const app = express();
const port = 3000;

app.use(cors({
  origin: ['http://localhost:5173', 'http://192.168.92.183:5173'],
  methods:['GET','POST',"PUT"],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

ModelConfig();

app.use("/zcode",registerRouter);

app.use("/zcode",courseRouter);

app.use('/zcode',userRouter);

app.use('/zcode',cartegoryRouter)


app.use('/zcode',lessonRouter);
app.use('/zcode',chapterRouter);
app.use('/zcode',loginRouter);
app.use('/zcode',verifyAuthRouter);
app.use('/zcode',logoutRouter);
app.use('/zcode', quizRouter);
app.use('/zcode', questqueizRouter);
app.use('/zcode',detailcourseRouter);
app.use('/zcode',studentLessonRouter);
app.use('/zcode',EnrolmentRouter);






app.listen(port,()=>{
console.log(`API running at http://localhost:${port}`);
}
);
