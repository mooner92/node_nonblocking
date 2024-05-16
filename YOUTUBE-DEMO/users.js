const express = require('express')
const connection = require('../mariadb')
const router = express.Router() //라우터를 사용하여 user-demo를 모듈화하였음
const conn = require('../mariadb')
const {body,param,validationResult} = require('express-validator')
var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');

dotenv.config();

const validate=(req,res,next)=>{ //이 매개변수들은 express가 넣어주는 것임.
    const err = validationResult(req)
            if(err.isEmpty()){
                return next();
            }else{
                console.log(err.array())
                return res.status(400).json(err.array()) //에러 걸리면 리턴하게끔 작성해줌.
            }
}

// conn.query(
//     'SELECT * FROM `users`',
//     function(err, results, fields){
//         //console.log(results);
//         // var arr = [1,2,3];
//         // console.log(arr[0]);
//         var {id,email,name} = results[0];
//         console.log(id);
//         console.log(email);
//         console.log(name);
//     }
// )
// const app = express()
// app.listen(3001)
router.use(express.json())

// let db = new Map()
// var id = 1

// function isEmpty(obj){
//     //if (Object.keys(obj).length) //타입이 object가 맞냐
//     if(obj.constructor == Object){
//         return true;
//     }else{
//         return false;
//     }
// }

// function idCheck(userId){
//     db.forEach(function(user,id){
//         //a : value , b : key , c : Map
//         if(user.userId === userId){
//             //idExist=true
//             return user //객체를 담아서 밑의 if문에서 사용하기
//         }
//         else return {}
//         //console.log(user.userId)
//     })
// }
router.post('/login', 
    [
        body('email').notEmpty().isEmail().withMessage('이메일을 확인 해 주세요.'),
        body('password').notEmpty().isString().withMessage('비밀번호 확인 필요.'),
        validate
    ],
    function (req,res,next){
    console.log(req.body) //userId ,pwd를 받음
    const {email,password} = req.body
    //var idExist = false
    //var loginUser = idCheck(userId)

    conn.query(
        `SELECT * FROM users WHERE email = ?`,email,
        function(err, results){ //field는 당장 필요하지 않으니 삭제함
            var loginUser = results[0];
            if(loginUser && loginUser.password == password){
                //token 발급하기
                const token = jwt.sign({
                    email : loginUser.email,
                    name  : loginUser.name
                },process.env.PRIVATE_KEY,{
                    expiresIn : '5m',
                    issuer : "mooner92"
                })
                console.log(token)
                res.cookie("token",token, {
                    httpOnly : true
                }); //쿠키에 토근을 담아보냄

                res.status(200).json({
                    message : `${loginUser.name}님 로그인 되었습니다!`,
                    //token : token
                })
            }
            else{
                //console.log("id doesn't exist")
                res.status(403).json({
                    message : `이메일 또는 비밀번호가 틀렸습니다.`
                })
            }
        }
    )

    // if(!isEmpty(idCheck(userId))){
    //     //console.log("same")
    //     if(loginUser.passWd === passWd){
    //         res.status(200).json({
    //             message : `${loginUser.name}님 로그인 하셨습니다.`
    //         })
    //         //console.log("pw same")
    //     }else{
    //         //console.log("pw diff")
    //         res.status(400).json({
    //             message : `비밀번호가 틀렸습니다.`
    //         })
    //     }
    // }else{
    //     //console.log("id doesn't exist")
    //     res.status(404).json({
    //         message : `회원 정보가 없습니다.`
    //     })

    // }
})

router.post('/join', 
    [
        body('email').notEmpty().isEmail().withMessage('이메일을 확인 해 주세요.'),
        body('name').notEmpty().isString().withMessage('이름 확인 필요.'),
        body('password').notEmpty().isString().withMessage('비밀번호 확인 필요.'),
        body('contact').notEmpty().isString().withMessage('연락처 확인 필요.'),
        validate
    ],
    function (req,res,next){
    console.log(req.body)
    // if(Object.keys(req.body).length === 0){
    //     res.status(400).json({
    //         message : `입력 값을 다시 확인해주세요.`
    //     })
    // }else{
        const {email,name,password,contact} = req.body;
        conn.query(
            `INSERT INTO users(email, name, password, contact) VALUES (?, ?, ?, ?)`,[email,name,password,contact],
            function(err, results){
                res.status(201).json({
                    results
                })
            }
        )
    //     const {userId} = req.body
    //     db.set(req.body.userId,req.body)
    // res.status(201).json({
    //     message : `${db.get(userId).name}님 환영합니다.`
    // })
//}
    
})

//router.put()
router
    .route('/users')
    .get(
        [
            body('email').notEmpty().isEmail().withMessage('이메일을 확인 해 주세요.'),
            validate
        ],
        function (req,res,next){
    let {email} = req.body //body값에 숨김 개인정보라서 email로 변경함
    conn.query(
        `SELECT * FROM users WHERE email = ?`,email,
        function(err, results){
            res.status(200).json({
                results
            })
        }
    )
    // const user = db.get(userId)
    // if (user) {
    //     res.status(200).json({
    //         userId : user.userId,
    //         name : user.name
    //     })
    // }else{
    //     res.status(404).json({
    //         message : "회원 정보 없음"
    //     })
    // }
    })

    .delete(
        [
            body('email').notEmpty().isEmail().withMessage('이메일을 확인 해 주세요.'),
            validate
        ],
        function (req,res,next){
        //let {userId} = req.body
        let {email} = req.body
        //const user = db.get(userId)
        conn.query(
            `DELETE FROM users WHERE email = ?`,email,
            function(err, results, fields){
                if(err){
                    console.log(err);
                    return res.status(400).end();
                }
                if(results.affectedRows){
                    res.status(200).json({
                        message : `${results.affectedRows}개의 변경이 있습니다.`
                    })
                }
                else{
                    res.status(400).json({
                        message : `${results.affectedRows}개의 변경이 있습니다.`
                    })
                }
            }
        )
    })

module.exports = router //모듈화