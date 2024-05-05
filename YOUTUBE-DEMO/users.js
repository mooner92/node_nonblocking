const express = require('express')
const router = express.Router() //라우터를 사용하여 user-demo를 모듈화하였음
// const app = express()
// app.listen(3001)
router.use(express.json())

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
router.post('/login', function (req,res){
    console.log(req.body) //userId ,pwd를 받음
    const {userId,passWd} = req.body
    //var idExist = false
    //var loginUser = idCheck(userId)

    if(!isEmpty(idCheck(userId))){
        //console.log("same")
        if(loginUser.passWd === passWd){
            res.status(200).json({
                message : `${loginUser.name}님 로그인 하셨습니다.`
            })
            //console.log("pw same")
        }else{
            //console.log("pw diff")
            res.status(400).json({
                message : `비밀번호가 틀렸습니다.`
            })
        }
    }else{
        //console.log("id doesn't exist")
        res.status(404).json({
            message : `회원 정보가 없습니다.`
        })

    }
})

router.post('/join', function (req,res){
    console.log(req.body)
    if(req.boody ={}){
        res.status(400).json({
            message : `입력 값을 다시 확인해주세요.`
        })
    }else{
        const {userId} = req.body
        db.set(req.body.userId,req.body)
    res.status(201).json({
        message : `${db.get(userId).name}님 환영합니다.`
    })
}
    
})

router.put()
router
    .route('/users')
    .get(function (req,res){
    let {userId} = req.body
    const user = db.get(userId)
    if (user) {
        res.status(200).json({
            userId : user.userId,
            name : user.name
        })
    }else{
        res.status(404).strictContentLength({
            message : "회원 정보 없음"
        })
    }
    })

    .delete(function (req,res){
        let {userId} = req.body
        const user = db.get(userId)
    if (user) {
        db.delete(id)
        res.status(200).json({
            message : `${user.name}님 다음에 또 뵙겠습니다.`
        })
    }else{
        res.status(404).strictContentLength({
            message : "회원 정보 없음"
        })
        
    }
    })

moudule.exports = router //모듈화