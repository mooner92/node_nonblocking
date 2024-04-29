const express = require('express')
const app = express()


app.get('/product/:n',function (req, res){
    //req.params
    //products/___ 에 오는 값을 n이라는 변수에 담아줘 라는 뜻
    if (parseInt(req.params.n) > 10)
        console.log("url로 전달받은 숫자가 10보다 큼") //문자열인데 일단 작동하긴 함 -> parseInt함수 사용해서 해결하는 습관 들이기
    res.json({
        num:req.params.n
})
})

app.get('/test/1',function (req, res){
    res.json({
        test:1
})
})

// app.get('/:nickname',function (req, res){

//     const param = req.params
//     res.json({
//         channel : param.nickname
// })
// })

app.get('/watch',function (req, res){
    // const q = req.query
    // console.log(q.v)
    // console.log(q.t)

    //객체의 비구조화
    const {v,t} = req.query
    console.log(v)
    console.log(t)
    res.json({
        video : v,
        timeline : t
})
})

app.listen(3000)