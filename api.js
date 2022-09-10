const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cursoreact',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var USERS =  [
    {'id': 1, 'username:': 'brunohauck', 'password': '123456'},
    {'id': 2, 'username:': 'ronald', 'password': '123456'}
]

var HELLO = [
    { 'msg': 'Hello Express' }
]

function getHello(){
    return HELLO;
}
function getUsers(){
    return USERS;
}

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send(getHello());
});



const userRouter = require('./src/routes/user-route');


app.use ('/user', userRouter);


app.listen (4000, function (){
    console.log('Rodando na porta 4000')
})


