const express = require('express')
const app = express()


app.get('/test/1',function (req, res){
    res.json({
        test:1
})
})

let y1 = {
    title : "mooner92",
    subs : "100만명",
    videoNum : "112개"
}

let y2 = {
    title : "gfd",
    subs : "10만명",
    videoNum : "12개"
}

let y3 = {
    title : "dddddddd",
    subs : "101만명",
    videoNum : "1개"
}


app.get('/:nickname',function (req, res){

    const {nickname} = req.params
    if (nickname =="mooner92"){
        res.json(y1)
    }
    else if(nickname=="gfd"){
        res.json(y2)
    }
    else if(nickname == "dddddddd"){
        res.json(y3)
    }
    else {
        res.json({
            message : "명단에 없는 y입니다."
        })
    }
})


app.listen(3001)