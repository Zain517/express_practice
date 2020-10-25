//------------------------------------------------------------------//
// part#01...
// Setup first Express[Web Framework for NodeJS] Server

// const express = require('express')
// const app = express()

// app.get('/', (req, res)=>{
//   res.send('Hello World');
// });

// app.listen(5000)


//------------------------------------------------------------------//
// part#02...
// Working with Express GET requests (Query String and route parameter)


// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send('Welcome to HOME page...!!!');
// });

// app.get('/example', (req, res) => {
//     res.send('Hitting Example route....!!!');
// });

// // route parameters
// app.get('/example/:name/:age', (req, res) => {
//     console.log(req.params);
//     // res.send('Hitting Example Params....!!!'); // Start server open browser and give url like http://localhost:5000/example/zain/21
//     res.send(`Helloo...!!! ${req.params.name} You Entered age ${req.params.age} `);
// });

// // Query-String Parameters
// app.get('/example1/:name/:age', (req, res) => {
//     console.log(req.params);
//     console.log(req.query); // open browser after server start and 
//                             //give url like http://localhost:5000/example1/zain/21?tutuorial=expressJs
//                             // or http://localhost:5000/example1/zain/21?tutuorial=expressJs&sort=byage 
//     res.send(`Helloo...!!! ${req.params.name} You Entered age ${req.params.age} `);
// });

// // ==> // Use route parameters when you need must that data...like name is important....but for optional settings we use query string

// app.listen(5000)


//------------------------------------------------------------------//
// part#03...
// Serving Static Files with Express



// const express = require('express');
// const path = require('path');

// const app = express();
// app.use(express.static(path.join(__dirname,'asserts'))); 
// // app.use( '/public', express.static(path.join(__dirname,'asserts'))); //-Error arha don't know//alias for folder having asserts (main files) and we don't wana expose outside

// app.get('/', (req, res)=>{
//   res.sendFile(path.join(__dirname,'asserts', 'index.html'));
// });

// app.listen(5000);



//------------------------------------------------------------------//
// part#04...
// HTTP POST[working with Forms] request w/ express and body parser module...

// npm install body-parser ==> parse form data for us

// const bodyParser = require('body-parser');
// const express = require('express');
// const path = require('path');

// const app = express();

// app.use(express.static(path.join(__dirname,'Form'))); 
// app.get('/', (req, res)=>{
//   res.sendFile(path.join(__dirname,'Form', 'index.html'));
// });

// app.use(bodyParser.urlencoded({extended:false}));
// app.post('/', (req, res)=>{
//     console.log(req.body);
//     //Data base work here...
//     res.send('Succesfully Posted Data...!!!');
//   });

// app.listen(5000);

//------------------------------------------------------------------//
// part#05...
// Working with JSON Data --- Express and Body Parser

