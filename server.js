const express=require('express');
const bodyParser = require('body-parser');
const DB=require('./config/connection');
const movieRouter=require('./routes/Movie');
const userRouter=require('./routes/User');
const theatreRouter=require('./routes/Theatre');
const loginRouter=require('./routes/Login');

const app=express(); 
app.listen(4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/movies',movieRouter);
app.use('/users',userRouter);
app.use('/theatre',theatreRouter);
app.use('/login',loginRouter);









