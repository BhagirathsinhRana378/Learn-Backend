require('dotenv').config()
const express = require('express')// import express module
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/about',(req,res) => {
    res.send("hii i am bhagrathsinh rana")
})

app.get('/who',(req,res) => {
    res.send("i am a developer")
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
