const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeRouter = require('./routers/homeRouter');
//const home_page=require('./views/home');
const res = require('express/lib/response');
const port  = process.env.port || 8080;

const app  = express();

// db con

mongoose.connect('mongodb://localhost:27017/Database',{useNewUrlParser:true})
const db = mongoose.connection;

db.on("error",()=>{console.log("error in conection");})
db.once('open',()=>{console.log("Connected");})

app.set('view engine','ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', homeRouter)

app.get('/courses.html',function(req,res){
    res.sendFile('D:/LMS2/courses.html');
})
app.get('/task.html',function(req,res){
    res.sendFile('D:/LMS2/task.html');
})
app.get('/views/register.ejs',function(req,res){
    res.sendFile('D:/LMS2/views/register.ejs');
})
app.get('/views/register.ejs',function(req,res){
    res.sendFile('D:/LMS2/views/register.ejs');
})
app.get('/home.html',function(req,res){
    res.sendFile('D:/LMS2/home.html');
})
app.get('/logout.html',function(req,res){
    res.sendFile('D:/LMS2/logout.html');
})
app.get('/views/profile.ejs',function(req,res){
    res.sendFile('D:/LMS2/views/profile.ejs');
})
app.listen(port)