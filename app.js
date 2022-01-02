const express = require('express');
const path = require('path');

// init App
const app = express();


app.use('/static',express.static('public'))

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Home Route
app.get('/', (req, res)=>{
    res.render('index')
    
})

// About Route
app.get('/about', (req, res)=>{
    res.render('about')
    
})


// project Route
app.get('/project', (req, res)=>{
    res.render('project')
    
})


// start Server
app.listen('3000',()=>{
    console.log('Server Started on port  30000....');
})