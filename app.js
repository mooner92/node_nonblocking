const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
//const port = 3001

app.listen(process.env.PORT)

const userRouter = require('./YOUTUBE-DEMO/users')
const channelRouter = require('./YOUTUBE-DEMO/channels')

app.use("/users/",userRouter)
app.use("/channels/",channelRouter)
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.use(express.json())
// app.post('/test' ,function (req,res){
//   console.log(req.body.message)
//   res.json(req.body)
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })