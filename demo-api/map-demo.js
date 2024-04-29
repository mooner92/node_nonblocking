const express = require('express')
const app = express()

let notebook = {
    productName : "Notebook",
    price : 2000000
}
let cup = {
    productName : "Notebook",
    price : 2000000
}

let chair = {
    productName : "Notebook",
    price : 2000000
}
let poster = {
    productName : "Notebook",
    price : 2000000
}
let db = new Map()
db.set(1,notebook) //key로 value를 찾을 수 있는 한 쌍을 저장
db.set(2,cup)
db.set(3,chair)
db.set(4,poster)

app.listen(3001)
app.get('/:id',function (req, res){
    let {id} = req.params
    id = parseInt(id)
    if(db.get(id)==undefined){
        console.log("없는 번호입니다.")
        res.json({
            message : "없는 상품입니다."
        })
    }
    else{
        product = db.get(id)
        product["id"] = id
        res.json(product)
    }
    
    
})



console.log(db)
console.log(db.get(1))
console.log(db.get(2))
console.log(db.get(3))