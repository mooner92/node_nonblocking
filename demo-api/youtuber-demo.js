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
app.post('/youtubers' , (req,res) => {
  console.log(req.body)
  db.set(db.size+1,req.body)
  res.json({
    message : db.get(db.size).title + "님 유튜버 생활을 응원합니다!"
  })
})

//Rest API 설계하기
app.get('/youtubers/:id',function (req,res){
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

    db.forEach(function(youtuber){
        console.log(youtuber)
    })
    //stringfy는 json으로 만들어 놓은 것을 개행을 넣은 문자열로 변환해서 반환
    //~~~_json 이렇게 형태가 나오는 것은 클린코드 원리와 거리가 멀음
    var youtubers={}
    db.forEach(function(value,key){
        youtubers[key]=value
    })
    res.json(youtubers)    
})

app.delete('/youtubers/:id',function(req,res){
    let {id} = req.params
    id = parseInt(id)
    var youtuber = db.get(id)
    if(youtuber==undefined){
        res.json({
            message : `요청하신 ${id}번은 없는 채널입니다.`
        })
    }
    else{
        const name = youtuber.title
    db.delete(id)
    res.json({
        message : `${name}님, 채널을 삭제하셨습니다.`
    })
    }
    
})

app.listen(3001)