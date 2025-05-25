const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { ModelConfig } = require('../config/model.config');
const courseRouter = require('../router/course.routes');
const userRouter = require('../router/user.routes');
const lessonRouter = require('../router/lesson.routes');
const chapterRouter = require('../router/chapter.routes');
const registerRouter = require('../router/register.routes');
const loginRouter = require('../router/login.routes')
const verifyAuthRouter = require('../router/verifyauth.routes')




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

app.use('/zcode',lessonRouter);

app.use('/zcode',chapterRouter);

app.use('/zcode',loginRouter);

app.use('/zcode',verifyAuthRouter);


app.listen(port,()=>{
console.log(`API running at http://localhost:${port}`);
}
);
