const express = require('express')
const app = express()
app.listen(3001)
app.use(express.json())

let db = new Map()
var id = 1

function isEmpty(obj){
    //if (obj.constructor == Object) //타입이 object가 맞냐
    if(Object.keys(obj).length){
        return true;
    }else{
        return false;
    }
}

function idCheck(userId){
    db.forEach(function(user,id){
        //a : value , b : key , c : Map
        if(user.userId === userId){
            //idExist=true
            return user //객체를 담아서 밑의 if문에서 사용하기
        }
        else return {}
        //console.log(user.userId)
    })
}
app.post('/login', function (req,res){
    console.log(req.body) //userId ,pwd를 받음
    const {userId,passWd} = req.body
    //var idExist = false
    //var loginUser = idCheck(userId)
    if(!isEmpty(idCheck(userId))){
        console.log("same")
        if(loginUser.passWd === passWd){
            console.log("pw same")
        }else{
            console.log("pw diff")
        }
    }else{
        console.log("id doesn't exist")

    }
})

app.post('/join', function (req,res){
    console.log(req.body)
    if(req.boody !={}){
        db.set(id++,req.body)
    res.status(201).json({
        message : `${db.get(id-1).name}님 환영합니다.`
    })
    }
    else{
        res.status(400).json({
            message : `입력 값을 다시 확인해주세요.`
        })
    }
    
})

app.put()
app
    .route('/users/:id')
    .get(function (req,res){
    let {id} = req.params
    id = parseInt(id)
    const user = db.get(id)
    if (user == undefined) {
        res.status(404).strictContentLength({
            message : "회원 정보 없음"
        })
    }else{
        res.status(200).json({
            userId : user.userId,
            name : user.name
        })
    }
    })

    .delete(function (req,res){
    let {id} = req.params
    id = parseInt(id)
    const user = db.get(id)
    if (user == undefined) {
        res.status(404).strictContentLength({
            message : "회원 정보 없음"
        })
    }else{
        db.delete(id)
        res.status(200).json({
            message : `${user.name}님 다음에 또 뵙겠습니다.`
        })
    }
    })