const express = require('express')
const app = express()

// "http://localhost:8888/"가 생략되어 있는 것
//GET + "/"


app.get('/hello',function (req, res){
    res.json({say : 'hello !'});
})
app.get('/bye',function (req, res){
    res.json({say : 'bye !'});
})
app.get('/nicetomeetyou',function (req, res){
    res.json({say : 'nice to meet you!'});
})
