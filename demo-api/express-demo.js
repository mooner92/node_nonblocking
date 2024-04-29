const express = require('express')
const app = express()


app.get('/product/1',function (req, res){
    res.json(book)
})

let book = {
    productname : "nodeJs를 공부 해 보자",
    productprice : 20000,
    description : "어쩌구 저쩌구"
}


app.listen(3000)