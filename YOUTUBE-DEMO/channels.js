const express = require('express')
const router = express.Router()
//const router = express()
// app.listen(3001)
router.use(express.json())
const conn = require('../mariadb')

let db = new Map()
var id = 1

function notFountChannel(res){
    res.status(404).json({
        message : "조회할 채널이 없습니다."
    })
}

router
    .route('/')
    .get((req,res)=>{
        var {userId} = req.body
        // var channels = [] //json array로 사용
        if(userId){
            conn.query(//단축평가, 우선순위,단축조건?
            `SELECT * FROM channels WHERE user_id = ?`,userId,
            function(err, results){
                if(results.length)
                res.status(200).json({
                    results
                }).end()
                else
                notFountChannel(res);
            }
        )
        }
        else{
            res.status(400).end();
        }
        
            // if (userId && userId){
            //     db.forEach(function(value,key) {
            //         if(value.userId ===userId)
            //             channels.push(value);
            //     })
            //     if(channels.length){
            //         res.status(200).json(channels) //json array형태 그대로 반환
            //     }
            //     else{
            //         notFountChannel(res)
            //     }
            // }else{
            //     notFountChannel(res)
                
            // }
        })

    .post((req,res)=>{
        const {name,userId} = req.body
        if(name,userId){
            //let channel = req.body
            const {name,userId} = req.body
            let sql = `INSERT INTO channels(name, user_id) VALUES (?, ?)`
            let values = [name,userId]
            conn.query(sql,values,
                function(err, results){
                    res.status(201).json({
                        results
                    })
                }
            )
        }
        // if( req.body.name){
        //     let channel = req.body
        //     db.set(id++,channel)
        // //const {channelTitle} = req.body
        // res.status(201).json({
        //     message : `${db.get(id-1).channelTitle}님의 채널을 응원합니다.`
        // })
        // }else{
        //     res.status(400).json({
        //         message : "요청 값을 확인해 주세요."
        //     })
        // }
        //res.send("개별 생성")
    }) //채널 개별 생성
    


router
    .route('/:id')
    .get((req,res)=>{
        let {id} = req.params
        id = parseInt(id)
        conn.query(
            `SELECT * FROM channels WHERE id = ?`,id,
            function(err, results){
                if(results.length)
                res.status(200).json({
                    results
                })
                else
                notFountChannel(res);
            }
        )
        //var channel = db.get(id)
        // if(!channel){ //객체의 있,없으로 바로 구분
        //     notFountChannel(res)
        // }else{
        //     res.status(200).json(channel)
        // }
        //res.send("개별 조회")
    }) //채널 개별 조회


    .put((req,res)=>{
        let {id} = req.params
        id = parseInt(id)
        var channel = db.get(id)
        var oldTitle = channel.channelTitle
        if(channel){ //객체의 있,없으로 바로 구분
            var newTitle = req.body.channelTitle
            channel.channelTitle = newTitle
            db.set(id,channel)

            res.status(201).json({
                message : `채널명이 정상적으로 수정되었습니다. 기존 ${oldTitle} -> 수정 ${newTitle}`
            })
        }else{
            notFountChannel(res)
        }

        //res.send("개별 수정")
    }) // 채널 개별 수정


    .delete((req,res)=>{
        let {id} = req.params
        id = parseInt(id)
        var channel = db.get(id)
        if(channel){ //객체의 있,없으로 바로 구분
            db.delete(id)
            res.status(200).json({
                message : `${channel.channelTitle}이 정상적으로 삭제되었습니다.`
            })
        }else{
            notFountChannel(res)
        }
        //res.send("개별 삭제")
    }) // 채널 개별 삭제

module.exports = router //모듈화
////