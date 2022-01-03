const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const data = require('./data/data.json').projects;


// init App
const app = express();

// static
app.use('/static',express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Home Route
app.get('/', (req, res)=>{
    res.render('index',{data: data})
    
})

// About Route
app.get('/about', (req, res)=>{
    res.render('about')
    
})


// project Route
app.get('/project/:id', (req, res)=>{

    res.render('project', {data: data,
                           id: req.params.id})  
})




// error handling
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  app.use((err, req, res, next) => {
      console.log("this error")
      console.log(err.status)
    res.locals.error = err;
    res.status(500); // err.status
    res.render('error');
    console.log("this error2")
  });


// start Server
app.listen('3000',()=>{
    console.log('Server Started on port  30000....');
})