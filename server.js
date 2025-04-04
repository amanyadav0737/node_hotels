// function add(a , b){
//    return a+b;
// }

// var add = function(a , b){
//     return a + b;
// }

// var add = (a,b) => {return a+b;}

// var add = (a,b) => a+b;
// var result = add(2 , 7);
// console.log(result);


// (function(){
//     console.log('aman is added');
// })();

/*
function callback(){
    console.log('now adding is successful completed');   
}
const add = function(a , b , callback){
    var result = a+b;
    console.log('result: ' +result); //main function work completed
    callback();
}
add(3 , 5 , callback);
*/
/*
const add = function(a , b , aman){
    var result = a+b;
    console.log('result: ' +result); //main function work completed
   aman();
}
// add(2, 3, function(){
//     console.log('add completed')
// })

add(2, 3, () => console.log('add completed'));
*/
/*
var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
/*
fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n', (err) => {
    if (err) {
        console.log('Error writing to file:', err);
    } else {
        console.log('File is created and updated!');
    }
});
*/ /*
fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n', ()=>{
    console.log('file is created')
}) */

/*
    const notes = require('./notes.js')
var _= require('lodash');

console.log('server file is available');

var age = notes.age;

var result = notes.addNumber(age+18, 10);
console.log(age);
console.log('result is now: '+result)


var data = ["person","person", '1','2','1', 1, 2, 1, 2 , 'name', 'age'];
var filter = _.uniq(data);
console.log(filter); */

const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Welcome to our Hotel');
});


// Import the router files 
const personRoutes = require('./routes/personRoutes');
const MenuItemRouter = require('./routes/MenuItemRoutes');

//Use the routers
app.use('/person',personRoutes);
app.use('/MenuItem', MenuItemRouter);

app.listen(3000, () => { // Fixed port number
  console.log('Listening on port 3000');
});

