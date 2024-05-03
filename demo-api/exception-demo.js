const express = require('express')
const app = express()
app.listen(3001)

const fruits = [
    {id : 1, name : 'apple'},
    {id : 2, name : 'orange'},
    {id : 3, name : 'strawberry'},
    {id : 4, name : 'blueberry'}
]

app.get('/fruits', (req,res) => {
    res.json(fruits)
})

app.get('/fruits/:id', (req,res) => {
    let id = req.params.id
    //let fruit = fruits[id]
    var findfFruit = fruits.find(f => f.id ==id)
    // fruits.forEach(function(fruit){
    //     if (fruit.id == id){
    //         findfFruit = fruit
    //     }
    // })
    if(findfFruit)
        res.json(findfFruit)
    else //http status code 성공을 실패로 예외처리해줌
        res.status(404).send(
            "전달주신 id로 저장된 과일이 없습니다."
        )
})