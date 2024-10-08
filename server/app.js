const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req,res)=>{
 res.send({
    message: `Hello ${req.body.email}! Your user was register`
 })
})

const  PORT = 4545
app.listen(PORT, ()=>{
    console.log('Port 4545 running')
})