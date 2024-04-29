const express = require('express')
const app = express()

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

let db = new Map()
db.set(1,y1)
db.set(2,y2)
db.set(3,y3)


app.use(express.json())
app.post('/youtuber' , (req,res) => {
  console.log(req.body)
  db.set(db.size+1,req.body)
  res.json({
    message : db.get(db.size).title + "님 유튜버 생활을 응원합니다!"
  })
})

//Rest API 설계하기
app.get('/youtuber/:id',function (req,res){
    let {id} = req.params
    console.log(id)
    id = parseInt(id)
    const youtuber = db.get(id)
    if (youtuber==undefined){
        res.json({
            message : "유튜버 정보를 찾을 수 없습니다."
        })
    }
    else{
        res.json(youtuber)

    }
})

app.get('/youtubers' ,(req,res) =>{
    res.json({
        message : "유튜버들 정보"
    })    
})

app.listen(3001)